export interface Env {
  AI: any;
  BUILD_STATUS: KVNamespace;
  GITHUB_TOKEN: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // GET /history?user_id=...
    if (url.pathname === '/history' && request.method === 'GET') {
      const userId = url.searchParams.get('user_id');
      if (!userId) return new Response('Missing user_id', { status: 400 });

      const list = await env.BUILD_STATUS.list({ prefix: `build:${userId}:` });
      const history = await Promise.all(
        list.keys.map(async (key) => {
          const val = await env.BUILD_STATUS.get(key.name);
          return val ? { ...JSON.parse(val), id: key.name.split(':').pop() } : null;
        })
      );

      return new Response(JSON.stringify(history.filter(h => h !== null)), { 
        headers: { 'Content-Type': 'application/json', ...corsHeaders } 
      });
    }

    // GET /status?user_id=...&build_id=...
    if (url.pathname === '/status' && request.method === 'GET') {
      const userId = url.searchParams.get('user_id');
      const buildId = url.searchParams.get('build_id');
      if (!userId || !buildId) return new Response('Missing user_id or build_id', { status: 400 });
      
      const key = `build:${userId}:${buildId}`;
      const statusStr = await env.BUILD_STATUS.get(key);
      if (!statusStr) {
        return new Response(JSON.stringify({ status: 'not_found' }), { headers: { 'Content-Type': 'application/json', ...corsHeaders }});
      }
      return new Response(statusStr, { headers: { 'Content-Type': 'application/json', ...corsHeaders }});
    }

    // POST /status-update
    if (url.pathname === '/status-update' && request.method === 'POST') {
      try {
        const body = await request.json() as any;
        const { user_id, build_id, status, downloadUrl } = body;
        const key = `build:${user_id}:${build_id}`;
        
        let existing = await env.BUILD_STATUS.get(key);
        let data = existing ? JSON.parse(existing) : {};
        
        await env.BUILD_STATUS.put(key, JSON.stringify({ ...data, status, downloadUrl, updatedAt: new Date().toISOString() }));
        return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json', ...corsHeaders }});
      } catch (e: any) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { ...corsHeaders }});
      }
    }

    // POST /build
    if (url.pathname === '/build' && request.method === 'POST') {
      try {
        const body = await request.json() as any;
        const { product_id, product_name, user_id, user_prompt, base_schema, forbidden_fields, guardrails } = body;
        const buildId = crypto.randomUUID();
        const key = `build:${user_id}:${buildId}`;

        const initialData = {
          product_id,
          product_name,
          status: 'analyzing',
          timestamp: new Date().toISOString(),
          prompt: user_prompt
        };

        // Set initial status
        await env.BUILD_STATUS.put(key, JSON.stringify(initialData));

        // Send processing to background
        ctx.waitUntil(this.processBuild(env, product_id, buildId, user_id, user_prompt, base_schema, forbidden_fields, guardrails));

        return new Response(JSON.stringify({ success: true, build_id: buildId }), { headers: { 'Content-Type': 'application/json', ...corsHeaders }});
      } catch (e: any) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { ...corsHeaders }});
      }
    }

    return new Response('Not found', { status: 404 });
  },

  async processBuild(env: Env, productId: string, buildId: string, userId: string, prompt: string, baseSchema: string, forbiddenFields: string[], guardrails: string) {
    const key = `build:${userId}:${buildId}`;
    try {
      // 1. JSON Transformation (Analyzing)
      const systemPrompt = `You are an AI App Configurator. Your task is to update the following JSON schema based on the user's prompt.
You must output ONLY valid JSON.
Guardrails: ${guardrails || 'None'}
Forbidden Fields (do NOT modify under any circumstances): ${forbiddenFields?.join(', ') || 'None'}

Current JSON Schema:
${baseSchema}

If the user asks for something outside the guardrails, ignore that part.`;

      let aiResponse = await env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: prompt }
        ]
      });

      let updatedJsonStr = aiResponse.response.replace(/```json/g, '').replace(/```/g, '').trim();
      let updatedJson;
      try {
        updatedJson = JSON.parse(updatedJsonStr);
      } catch (e) {
        throw new Error('AI produced invalid JSON');
      }

      // 2. Integrity Check (Validating)
      await env.BUILD_STATUS.put(key, JSON.stringify({ ...(JSON.parse(await env.BUILD_STATUS.get(key) || '{}')), status: 'validating' }));

      const auditPrompt = `Audit the following original and updated JSONs. 
Did the updated JSON modify any of these forbidden fields: ${forbiddenFields?.join(', ')}?
Did it hallucinate new API keys?
Reply with exactly "PASS" if it is safe, or "FAIL: <reason>" if it is not.
Original: ${baseSchema}
Updated: ${JSON.stringify(updatedJson)}`;

      let auditResponse = await env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
        messages: [{ role: 'user', content: auditPrompt }]
      });

      if (!auditResponse.response.includes('PASS')) {
        throw new Error(`Integrity Check Failed: ${auditResponse.response}`);
      }

      // 3. Provisioning
      await env.BUILD_STATUS.put(key, JSON.stringify({ ...(JSON.parse(await env.BUILD_STATUS.get(key) || '{}')), status: 'provisioning' }));

      // 4. Trigger GitHub Action
      const githubRepo = 'pegasus-superapp-monorepo';
      const githubOwner = 'blinks32';
      
      const ghResponse = await fetch(`https://api.github.com/repos/${githubOwner}/${githubRepo}/dispatches`, {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `Bearer ${env.GITHUB_TOKEN}`,
          'User-Agent': 'Cloudflare-Worker'
        },
        body: JSON.stringify({
          event_type: 'ai_build_factory',
          client_payload: {
            user_id: userId,
            build_id: buildId,
            product_id: productId,
            config_json: JSON.stringify(updatedJson)
          }
        })
      });

      if (!ghResponse.ok) {
         throw new Error('Failed to trigger GitHub Action: ' + await ghResponse.text());
      }

      // 5. Compiling
      await env.BUILD_STATUS.put(key, JSON.stringify({ ...(JSON.parse(await env.BUILD_STATUS.get(key) || '{}')), status: 'compiling' }));

    } catch (error: any) {
      console.error(error);
      const existing = await env.BUILD_STATUS.get(key);
      const data = existing ? JSON.parse(existing) : {};
      await env.BUILD_STATUS.put(key, JSON.stringify({ ...data, status: 'failed', error: error.message }));
    }
  }
};

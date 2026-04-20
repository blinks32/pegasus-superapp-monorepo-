import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Send, 
  Code, 
  Cpu, 
  Package, 
  CheckCircle2, 
  Download, 
  FileText, 
  X,
  Loader2,
  ChevronRight
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Mode = 'configurator' | 'pipeline' | 'success';
type Status = 'idle' | 'configuring' | 'compiling' | 'ready' | 'error';

export const AIStudio: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [mode, setMode] = useState<Mode>('configurator');
  const [status, setStatus] = useState<Status>('idle');
  const [prompt, setPrompt] = useState('');
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Mock data for JSON schema display
  const defaultSchema = {
    appName: "Pegasus App",
    theme: {
      primary: "#6366F1",
      secondary: "#A855F7",
      mode: "dark"
    },
    fares: {
      base: 5000,
      perKm: 150
    }
  };

  const statusPollInterval = useRef<number | null>(null);

  const initiateBuild = async () => {
    if (!prompt) return;
    setStatus('configuring');
    setMode('pipeline');
    
    try {
      // In a real app, you'd get the user ID and product ID from props or context
      const userId = 'user_' + Math.random().toString(36).substring(7);
      
      const res = await fetch('https://ai-app-factory.pegasus.workers.dev/build', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_id: 'prod_test_123',
          user_id: userId,
          user_prompt: prompt,
          base_schema: JSON.stringify(defaultSchema)
        })
      });

      if (res.ok) {
        startPolling(userId);
      } else {
        setError('Failed to initiate build. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      setError('Network error. Check your connection.');
      setStatus('error');
    }
  };

  const startPolling = (userId: string) => {
    statusPollInterval.current = window.setInterval(async () => {
      try {
        const res = await fetch(`https://ai-app-factory.pegasus.workers.dev/status?user_id=${userId}`);
        if (res.ok) {
          const data = await res.json();
          // Status from API: "configuring" | "compiling" | "ready"
          setStatus(data.status);
          
          if (data.status === 'ready') {
            setDownloadUrl(data.downloadUrl);
            setMode('success');
            stopPolling();
          }
        }
      } catch (err) {
        console.error('Polling error:', err);
      }
    }, 3000);
  };

  const stopPolling = () => {
    if (statusPollInterval.current) {
      clearInterval(statusPollInterval.current);
      statusPollInterval.current = null;
    }
  };

  useEffect(() => {
    return () => stopPolling();
  }, []);

  const closePanel = () => {
    setIsOpen(false);
    // In integration, call a callback to close the iframe/portal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-end z-[9999] pointer-events-none">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
        onClick={closePanel}
      />

      {/* Slide-over Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="relative w-full max-w-2xl h-full bg-zinc-950 border-l border-white/10 shadow-2xl flex flex-col overflow-hidden pointer-events-auto"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

        {/* Header */}
        <header className="px-8 py-6 border-b border-white/5 flex items-center justify-between relative z-10 bg-zinc-950/50 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shadow-lg shadow-neon-purple/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">AI App Factory</h1>
              <p className="text-xs text-zinc-400 font-medium tracking-wide uppercase">AI Studio v2.0</p>
            </div>
          </div>
          <button 
            onClick={closePanel}
            className="p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto px-8 py-10 relative z-10">
          <AnimatePresence mode="wait">
            {mode === 'configurator' && (
              <motion.div
                key="configurator"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-white">Describe your ideal app</h2>
                  <p className="text-zinc-400 leading-relaxed">
                    Describe themes, color palettes, and business rules. Our AI will architect the source code and prepare a custom binary for you.
                  </p>
                  
                  <div className="relative group">
                    <textarea 
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g. Make it a luxury ride-share with a gold theme and 5000 NGN base fare..."
                      className="w-full h-40 bg-zinc-900/50 border border-white/10 rounded-2xl p-5 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:border-neon-purple/50 transition-all resize-none"
                    />
                    <div className="absolute bottom-4 right-4 flex items-center gap-2">
                       <span className="text-[10px] text-zinc-500 font-mono">NEURAL ENGINE ACTIVE</span>
                       <div className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Default Schema Parameters</h3>
                    <div className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-zinc-500 font-mono">
                      JSON_V1
                    </div>
                  </div>
                  
                  <div className="bg-zinc-900/80 border border-white/5 rounded-2xl p-6 font-mono text-sm overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900/50 pointer-events-none" />
                    <pre className="text-blue-400">
                      {JSON.stringify(defaultSchema, null, 2)}
                    </pre>
                    <div className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Code className="w-4 h-4 text-zinc-400" />
                    </div>
                  </div>
                </div>

                <button
                  onClick={initiateBuild}
                  disabled={!prompt}
                  className={cn(
                    "w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all",
                    prompt 
                      ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-xl shadow-neon-purple/20 hover:scale-[1.02] active:scale-[0.98]" 
                      : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                  )}
                >
                  Initiate AI Build
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}

            {mode === 'pipeline' && (
              <motion.div
                key="pipeline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12 py-10"
              >
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-[10px] font-bold uppercase tracking-widest">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    System Processing
                  </div>
                  <h2 className="text-3xl font-bold text-white">Factory Pipeline</h2>
                  <p className="text-zinc-500">Your custom app is being architected and compiled in real-time.</p>
                </div>

                <div className="relative space-y-10 max-w-xs mx-auto">
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-zinc-800" />
                  
                  {/* Step 1 */}
                  <div className="flex items-center gap-6 relative">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center z-10 transition-colors",
                      status === 'configuring' ? "bg-neon-purple text-white shadow-lg shadow-neon-purple/30 animate-pulse" : "bg-green-500 text-white"
                    )}>
                      {status === 'configuring' ? <Cpu className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                    </div>
                    <div className="space-y-1">
                      <p className={cn("font-bold text-lg", status === 'configuring' ? "text-white" : "text-zinc-400")}>AI Architecting...</p>
                      <p className="text-xs text-zinc-500">Generating JSON & Data Audit</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-6 relative">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center z-10 transition-colors",
                      status === 'compiling' ? "bg-neon-blue text-white shadow-lg shadow-neon-blue/30 animate-pulse" : 
                      (status === 'ready' ? "bg-green-500 text-white" : "bg-zinc-800 text-zinc-500")
                    )}>
                      {status === 'compiling' ? <Loader2 className="w-6 h-6 animate-spin" /> : 
                       (status === 'ready' ? <CheckCircle2 className="w-6 h-6" /> : <Code className="w-6 h-6" />)}
                    </div>
                    <div className="space-y-1">
                      <p className={cn("font-bold text-lg", status === 'compiling' ? "text-white" : "text-zinc-400")}>Compiling Binaries...</p>
                      <p className="text-xs text-zinc-500">Executing GitHub Actions Pipeline</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-6 relative">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center z-10 transition-colors",
                      status === 'ready' ? "bg-green-500 text-white shadow-lg shadow-green-500/30" : "bg-zinc-800 text-zinc-500"
                    )}>
                      <Package className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <p className={cn("font-bold text-lg", status === 'ready' ? "text-white" : "text-zinc-400")}>Packaging App...</p>
                      <p className="text-xs text-zinc-500">Signing & Cloud Seeding</p>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 text-center">
                  <p className="text-sm text-zinc-400">
                    Estimated Time: <span className="text-white font-mono">2-3 minutes</span>
                  </p>
                  <p className="text-[10px] text-zinc-600 mt-2">Do not refresh this panel.</p>
                </div>
              </motion.div>
            )}

            {mode === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-10 py-10 text-center"
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-green-500 rounded-full blur-[40px] opacity-20 animate-pulse" />
                  <div className="w-24 h-24 rounded-3xl bg-green-500/10 border border-green-500/20 flex items-center justify-center relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.2 }}
                    >
                      <CheckCircle2 className="w-12 h-12 text-green-500" />
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-4xl font-bold text-white">Build Successful!</h2>
                  <p className="text-zinc-400 px-10">
                    Your custom application has been compiled and is ready for deployment.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={downloadUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 rounded-2xl bg-white text-black font-bold text-lg flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Download className="w-5 h-5" />
                    Download Custom APK
                  </a>
                  
                  <button className="w-full py-5 rounded-2xl bg-zinc-900 border border-white/10 text-white font-bold text-lg flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all">
                    <FileText className="w-5 h-5 text-neon-blue" />
                    View API Docs
                  </button>
                </div>

                <div className="pt-6">
                  <button 
                    onClick={() => {
                        setMode('configurator');
                        setStatus('idle');
                    }}
                    className="text-zinc-500 hover:text-zinc-300 text-sm font-medium underline underline-offset-4"
                  >
                    Start New Build
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="px-8 py-6 border-t border-white/5 bg-zinc-950/80 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-mono">
              <div className="w-1 h-1 rounded-full bg-green-500" />
              CONNECTED TO GPU CLUSTER
            </div>
            <div className="text-[10px] text-zinc-600 font-medium">
              POWERED BY SELLJUSTCODE AI
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

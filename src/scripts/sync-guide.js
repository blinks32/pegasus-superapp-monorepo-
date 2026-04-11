const fs = require('fs');
const path = require('path');

/**
 * Pegasus Guide Synchronizer
 * Automatically updates guide-data.json based on project metadata.
 */

function syncGuide() {
    console.log('🚀 Synchronizing Pegasus Deployment Guide...');

    const rootDir = path.resolve(__dirname, '../../');
    const projectPackagePath = path.join(rootDir, 'package.json');
    const capacitorConfigPath = path.join(rootDir, 'capacitor.config.json');
    const guideDataPath = path.join(rootDir, 'src/assets/guide-data.json');

    try {
        // 1. Read Project Metadata
        const pkg = JSON.parse(fs.readFileSync(projectPackagePath, 'utf8'));
        const cap = fs.existsSync(capacitorConfigPath) 
            ? JSON.parse(fs.readFileSync(capacitorConfigPath, 'utf8')) 
            : null;

        const appName = cap ? cap.appName : pkg.description || 'Pegasus Project';
        const version = pkg.version || '1.0.0';
        const repoUrl = pkg.repository?.url || 'https://github.com/repository/pegasus-monorepo.git';

        // 2. Read existing Guide Data
        if (!fs.existsSync(guideDataPath)) {
            console.error('❌ Error: guide-data.json not found in src/assets/');
            return;
        }
        let guideData = JSON.parse(fs.readFileSync(guideDataPath, 'utf8'));

        // 3. Update with Live Metadata
        const timestamp = new Date().toLocaleString();
        guideData.lastRefreshed = timestamp;
        guideData.projectInfo = {
            name: appName,
            version: version,
            id: cap ? cap.appId : 'unknown'
        };

        // 4. Update specific steps if they exist
        if (guideData.setupSteps) {
            const cloneStep = guideData.setupSteps.find(s => s.id === 'clone');
            if (cloneStep) {
                cloneStep.description = `Initialize your local environment by cloning the ${appName} monorepo. This brings all micro-services and libraries to your workstation.`;
                cloneStep.code = `git clone ${repoUrl}`;
            }

            const launchStep = guideData.setupSteps.find(s => s.id === 'launch');
            if (launchStep) {
                launchStep.description = `Launch the ${appName} engine. Your application will be available at http://localhost:8100/ for local debugging and testing.`;
            }
        }

        // 5. Write back to file
        fs.writeFileSync(guideDataPath, JSON.stringify(guideData, null, 2));

        console.log(`✅ Sync Complete!`);
        console.log(`📡 Linked to: ${appName} (v${version})`);
        console.log(`📅 Timestamp: ${timestamp}`);

    } catch (err) {
        console.error('❌ Sync Failed:', err.message);
    }
}

syncGuide();

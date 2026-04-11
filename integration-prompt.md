# Pegasus Guide System - AI Integration Prompt

**Role**: You are a senior Angular & Node.js Developer.
**Task**: Integrate the "Operational Guide System" into the current project.

## Context
This project requires an interactive, automated deployment guide that synchronizes itself with the project's metadata (`package.json`, `capacitor.config.json`).

## Phase 1: Automation Script
Create `src/scripts/sync-guide.js` that:
1. Reads the `appName`, `version`, and `repository` URL from project configs.
2. Updates `src/assets/guide-data.json` with a `lastRefreshed` timestamp.
3. Injects project-specific names into the guide step descriptions.

## Phase 2: Implementation Hook
Modify `package.json` to:
1. Add `"sync:guide": "node src/scripts/sync-guide.js"`.
2. Update the `"start"` script to run `npm run sync:guide` before `ng serve`.

## Phase 3: UI Component (Guide Widget)
Create/Update a Standalone component `GuideWidgetComponent` with the following features:
1. **Glassmorphism Design**: High-end futuristic UI with progress rings.
2. **Interactive Details**: Clicking a step opens a Modal (Mission Briefing) with:
   - Detailed description.
   - Core objectives.
   - Command/Code blocks with copy-to-clipboard functionality.
3. **Progress Persistence**: Save step completion state to `localStorage`.
4. **Live Timestamp**: Display the "Last Fresh" date from the JSON.

## Phase 4: Data Structure
Ensure `src/assets/guide-data.json` matches this schema:
```json
{
  "lastRefreshed": "MM/DD/YYYY, HH:MM:SS",
  "projectInfo": { "name": "...", "version": "...", "id": "..." },
  "setupSteps": [ ... ],
  "usageSteps": [ { "id": "...", "title": "...", "description": "...", "code": "..." } ]
}
```

**Instruction**: Please analyze the current project structure and execute these phases to complete the integration.

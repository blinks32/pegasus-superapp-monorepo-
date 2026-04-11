import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

interface GuideStep {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  code?: string;
  icon: string;
  completed: boolean;
}

@Component({
  selector: 'app-guide-widget',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="guide-widget-card fade-in-up">
      <div class="widget-header">
        <div class="header-main">
          <span class="protocol-badge">OPERATIONAL PROTOCOL</span>
          <h3>Deployment Guide</h3>
          <span class="last-sync" *ngIf="lastRefreshed">
            <ion-icon name="time-outline"></ion-icon> Fresh: {{ lastRefreshed }}
          </span>
        </div>
        <div class="progress-ring">
          <svg viewBox="0 0 36 36" class="circular-chart">
            <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path class="circle" [style.stroke-dasharray]="progress + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <text x="18" y="20.35" class="percentage">{{ progress | number:'1.0-0' }}%</text>
          </svg>
        </div>
      </div>

      <div class="steps-compact">
        <div class="step-mini" *ngFor="let step of steps; let i = index" 
             [class.completed]="step.completed"
             (click)="openDetails(step)">
          <div class="icon-box">
            <ion-icon [name]="step.completed ? 'checkmark-circle' : step.icon"></ion-icon>
            <div class="step-num">{{ i + 1 }}</div>
          </div>
          <div class="step-info">
            <span class="step-title">{{ step.title }}</span>
            <span class="step-sub">{{ step.subtitle }}</span>
          </div>
          <div class="check-box" [class.checked]="step.completed" (click)="toggleStep(i, $event)">
            <ion-icon name="checkmark-sharp"></ion-icon>
          </div>
        </div>
      </div>

      <button class="expand-btn pm-btn pm-btn-ghost pm-btn-sm" (click)="resetProtocol()">
        <ion-icon name="refresh-outline"></ion-icon> Reset Progress
      </button>
    </div>

    <!-- MISSION DETAIL MODAL -->
    <div class="modal-overlay" *ngIf="selectedStep()" (click)="closeDetails()">
      <div class="modal-content mission-briefing" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <div class="header-icon">
            <ion-icon [name]="selectedStep()?.icon"></ion-icon>
          </div>
          <div class="header-title">
            <span class="badge">MISSION BRIEFING</span>
            <h3>{{ selectedStep()?.title }}</h3>
          </div>
          <button class="close-btn" (click)="closeDetails()">&times;</button>
        </div>
        
        <div class="modal-body">
          <p class="mission-desc">{{ selectedStep()?.description }}</p>
          
          <div class="action-zone" *ngIf="selectedStep()?.code">
            <label>EXECUTIVE COMMAND:</label>
            <div class="code-box">
              <code>{{ selectedStep()?.code }}</code>
              <button class="copy-btn" (click)="copyCode(selectedStep()?.code!)">
                <ion-icon name="copy-outline"></ion-icon>
              </button>
            </div>
          </div>

          <div class="objective-list">
            <label>CORE OBJECTIVE:</label>
            <div class="objective-item">
              <ion-icon name="radio-button-on-outline"></ion-icon>
              <span>{{ selectedStep()?.subtitle }}</span>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="pm-btn pm-btn-outline" (click)="closeDetails()">Dismiss</button>
          <button class="pm-btn pm-btn-primary" (click)="completeAndClose(selectedStep()!)">
            <ion-icon name="checkmark-done-outline"></ion-icon>
            Complete Mission
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .guide-widget-card {
      background: white;
      border: 1px solid var(--pm-border);
      border-radius: var(--pm-radius-lg);
      padding: 20px;
      box-shadow: var(--pm-shadow-sm);
      position: sticky;
      top: 100px;
      margin-left: 16px;
      width: 280px;
      animation: fadeInUp 0.5s ease;
    }

    .widget-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--pm-border-light);
    }

    .protocol-badge {
      display: block;
      font-size: 10px;
      font-weight: 800;
      color: var(--pm-text-muted);
      letter-spacing: 1px;
      margin-bottom: 4px;
    }

    .header-main h3 {
      font-size: 1.1rem;
      margin: 0;
      color: var(--pm-text-primary);
    }

    .last-sync {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 9px;
      font-weight: 600;
      color: #10B981;
      margin-top: 4px;
    }

    /* Circular Progress */
    .progress-ring { width: 45px; height: 45px; }
    .circular-chart { display: block; margin: 0 auto; max-width: 100%; max-height: 100%; }
    .circle-bg { stroke: var(--pm-surface-muted); stroke-width: 3.8; fill: none; }
    .circle { stroke: var(--ion-color-primary); stroke-width: 3.8; stroke-linecap: round; fill: none; transition: stroke-dasharray 0.3s ease; }
    .percentage { fill: var(--pm-text-primary); font-family: inherit; font-size: 9px; font-weight: 700; text-anchor: middle; }

    .steps-compact { display: flex; flex-direction: column; gap: 8px; }

    .step-mini {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px;
      border-radius: var(--pm-radius-md);
      background: var(--pm-surface-muted);
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      border: 1px solid transparent;

      &:hover {
        background: white;
        border-color: var(--pm-border);
        transform: translateX(4px);
      }

      &.completed {
        background: rgba(16, 185, 129, 0.05);
        .icon-box { background: var(--pm-gradient-success); color: white; }
        .step-title { color: var(--pm-text-muted); text-decoration: line-through; }
      }
    }

    .icon-box {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: white;
      color: var(--ion-color-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      position: relative;
      box-shadow: var(--pm-shadow-sm);
    }

    .step-num {
      position: absolute;
      top: -4px;
      right: -4px;
      width: 16px;
      height: 16px;
      background: var(--pm-text-primary);
      color: white;
      font-size: 9px;
      font-weight: 800;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid white;
    }

    .step-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    .step-title {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--pm-text-primary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .step-sub {
      font-size: 0.75rem;
      color: var(--pm-text-muted);
    }

    .check-box {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid var(--pm-border);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: transparent;
      transition: all 0.2s;

      &:hover { transform: scale(1.1); border-color: var(--ion-color-secondary); }

      &.checked {
        background: var(--ion-color-secondary);
        border-color: var(--ion-color-secondary);
        color: white;
      }
    }

    .expand-btn {
      width: 100%;
      margin-top: 16px;
      font-size: 0.75rem;
      justify-content: center;
      gap: 6px;
    }

    /* MODAL STYLES */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }

    .mission-briefing {
      background: white;
      width: 100%;
      max-width: 450px;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      animation: modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .modal-header {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      padding: 24px;
      color: white;
      display: flex;
      align-items: center;
      gap: 16px;
      position: relative;
    }

    .header-icon {
      width: 50px;
      height: 50px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: var(--ion-color-secondary);
    }

    .header-title h3 { margin: 0; font-size: 1.2rem; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5)); }
    .header-title .badge { font-size: 10px; font-weight: 800; color: var(--ion-color-secondary); letter-spacing: 2px; }

    .close-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      background: rgba(255,255,255,0.1);
      border: none;
      color: white;
      font-size: 20px;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover { background: rgba(255,255,255,0.2); }
    }

    .modal-body { padding: 24px; }
    .mission-desc { font-size: 0.95rem; color: var(--pm-text-secondary); line-height: 1.6; margin-bottom: 24px; }

    .action-zone label, .objective-list label {
      display: block;
      font-size: 11px;
      font-weight: 800;
      color: var(--pm-text-muted);
      margin-bottom: 8px;
      letter-spacing: 1px;
    }

    .code-box {
      background: #f1f5f9;
      padding: 12px 16px;
      border-radius: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }
    .code-box code { font-family: 'Courier New', monospace; font-weight: 600; color: #1e293b; font-size: 0.9rem; }
    .copy-btn {
      background: white;
      border: 1px solid #e2e8f0;
      padding: 6px;
      border-radius: 8px;
      cursor: pointer;
      color: #64748b;
      &:hover { color: var(--ion-color-primary); border-color: var(--ion-color-primary); }
    }

    .objective-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: #f8fafc;
      border-radius: 12px;
      color: var(--pm-text-primary);
      font-weight: 600;
      font-size: 0.9rem;
      ion-icon { color: var(--ion-color-secondary); }
    }

    .modal-footer {
      padding: 16px 24px;
      background: #f8fafc;
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }

    @keyframes modalSlideUp {
      from { opacity: 0; transform: translateY(20px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 1200px) {
      .guide-widget-card { display: none; }
    }
  `]
})
export class GuideWidgetComponent implements OnInit {
  private http = inject(HttpClient);
  steps: GuideStep[] = [];
  lastRefreshed: string | null = null;
  selectedStep = signal<GuideStep | null>(null);

  get progress() {
    if (this.steps.length === 0) return 0;
    const completed = this.steps.filter(s => s.completed).length;
    return (completed / this.steps.length) * 100;
  }

  ngOnInit() {
    this.http.get<any>('assets/guide-data.json').subscribe(data => {
      this.lastRefreshed = data.lastRefreshed || null;
      this.steps = data.usageSteps.map((s: any) => ({ ...s, completed: false }));
      
      // Load saved progress from localStorage
      const saved = localStorage.getItem('pegasus_guide_progress');
      if (saved) {
        const completedIds = JSON.parse(saved);
        this.steps.forEach(s => {
          if (completedIds.includes(s.id)) s.completed = true;
        });
      }
    });
  }

  toggleStep(index: number, event?: Event) {
    if (event) event.stopPropagation();
    this.steps[index].completed = !this.steps[index].completed;
    this.saveProgress();
  }

  openDetails(step: GuideStep) {
    this.selectedStep.set(step);
  }

  closeDetails() {
    this.selectedStep.set(null);
  }

  completeAndClose(step: GuideStep) {
    const idx = this.steps.findIndex(s => s.id === step.id);
    if (idx !== -1) {
      this.steps[idx].completed = true;
      this.saveProgress();
    }
    this.closeDetails();
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
    // Simple visual feedback could be added here
  }

  resetProtocol() {
    this.steps.forEach(s => s.completed = false);
    this.saveProgress();
  }

  private saveProgress() {
    const completedIds = this.steps.filter(s => s.completed).map(s => s.id);
    localStorage.setItem('pegasus_guide_progress', JSON.stringify(completedIds));
  }
}


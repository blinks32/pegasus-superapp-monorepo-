import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, ModalController } from '@ionic/angular/standalone';
import { AiBuildService, BuildStatus } from '../../services/ai-build.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-ai-build-studio',
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent],
  styleUrl: './ai-build-studio.component.scss',
  template: `
    <ion-content>
      <div class="ais-root">
        
        <!-- Header -->
        <header class="ais-header">
          <div class="header-brand">
            <div class="brand-icon">✨</div>
            <div class="header-text">
              <h1>AI BUILD STUDIO</h1>
              <p>Universal Factory Hub v2.0</p>
            </div>
          </div>
          <button (click)="dismiss()" class="close-btn">&times;</button>
        </header>

        <!-- Navbar -->
        <nav class="ais-nav">
          <button 
            (click)="activeTab = 'studio'" 
            [class.active]="activeTab === 'studio'"
            class="nav-item">Studio</button>
          <button 
            (click)="loadHistory()" 
            [class.active]="activeTab === 'history'"
            class="nav-item">Archives</button>
        </nav>

        <div class="ais-body">
          
          <!-- Tab: Studio -->
          <div *ngIf="activeTab === 'studio'" class="view-section">
            
            <!-- State 1: Configurator -->
            <div *ngIf="viewState === 'configurator'" class="space-y-8">
              <div class="section-header">
                <h2>Configure Product: <span style="color: var(--ion-color-primary)">{{ productName }}</span></h2>
                <p>Instruct the AI to customize the source code architecture. Themes, fares, and logic will be re-baked in real-time.</p>
              </div>

              <!-- Prompt Area -->
              <div class="prompt-container">
                <textarea 
                  [(ngModel)]="prompt" 
                  class="prompt-textarea"
                  placeholder="e.g., 'Modern dark theme with gold accents, set base fare to $5.00...'"></textarea>
                <div class="prompt-status">
                  <span class="status-dot"></span> NEURAL LINK ACTIVE
                </div>
              </div>

              <!-- Live Preview Card (Schema) -->
              <div class="schema-preview">
                <div class="preview-header">
                  <span>LIVE SCHEMA PREVIEW</span>
                  <span>JSON_CONFIG_V4</span>
                </div>
                <pre class="preview-code">{{ baseSchema | slice:0:300 }}...</pre>
              </div>

              <button 
                (click)="initiateBuild()" 
                [disabled]="!prompt || isBuilding"
                class="ais-action-btn">
                <span *ngIf="!isBuilding">INITIATE AI BUILD 🚀</span>
                <span *ngIf="isBuilding">ESTABLISHING CONNECTION... ⏳</span>
              </button>
            </div>

            <!-- State 2: Pipeline (Mission Control) -->
            <div *ngIf="viewState === 'pipeline'" class="space-y-12">
              <div class="status-header">
                <span class="status-tag">LIVE FACTORY FEED</span>
                <h2>Mission Control</h2>
                <p>Tracking build execution across distributed clusters.</p>
              </div>

              <!-- Stepper -->
              <div class="ais-stepper">
                
                <!-- Step: Analyzing -->
                <div class="step-item" [class.inactive]="!isCurrentStep('analyzing') && !isPastStep('analyzing')">
                  <div class="step-circle" [class.active]="isCurrentStep('analyzing')" [class.past]="isPastStep('analyzing')">
                    <span *ngIf="!isPastStep('analyzing')">🧠</span>
                    <span *ngIf="isPastStep('analyzing')">✓</span>
                  </div>
                  <div class="step-info" [class.active]="isCurrentStep('analyzing')">
                    <h3>Analyzing</h3>
                    <p>AI generating new configuration based on instructions.</p>
                  </div>
                </div>

                <!-- Step: Validating -->
                <div class="step-item" [class.inactive]="!isCurrentStep('validating') && !isPastStep('validating')">
                  <div class="step-circle" [class.active]="isCurrentStep('validating')" [class.past]="isPastStep('validating')">
                    <span *ngIf="!isPastStep('validating')">⚖️</span>
                    <span *ngIf="isPastStep('validating')">✓</span>
                  </div>
                  <div class="step-info" [class.active]="isCurrentStep('validating')">
                    <h3>Validating</h3>
                    <p>Security audit & schema integrity checks.</p>
                  </div>
                </div>

                <!-- Step: Provisioning -->
                <div class="step-item" [class.inactive]="!isCurrentStep('provisioning') && !isPastStep('provisioning')">
                  <div class="step-circle" [class.active]="isCurrentStep('provisioning')" [class.past]="isPastStep('provisioning')">
                    <span *ngIf="!isPastStep('provisioning')">⚡</span>
                    <span *ngIf="isPastStep('provisioning')">✓</span>
                  </div>
                  <div class="step-info" [class.active]="isCurrentStep('provisioning')">
                    <h3>Provisioning</h3>
                    <p>Triggering Build Engine & environment setup.</p>
                  </div>
                </div>

                <!-- Step: Compiling -->
                <div class="step-item" [class.inactive]="!isCurrentStep('compiling') && !isPastStep('compiling')">
                  <div class="step-circle" [class.active]="isCurrentStep('compiling')" [class.past]="isPastStep('compiling')">
                    <span *ngIf="!isPastStep('compiling')">🛠️</span>
                    <span *ngIf="isPastStep('compiling')">✓</span>
                  </div>
                  <div class="step-info" [class.active]="isCurrentStep('compiling')">
                    <h3>Compiling</h3>
                    <p>Real-time binary generation (may take 2-4 mins).</p>
                  </div>
                </div>

                <!-- Step: Delivering -->
                <div class="step-item" [class.inactive]="!isCurrentStep('ready')">
                  <div class="step-circle" [class.active]="isCurrentStep('ready')" [class.past]="isPastStep('ready')">
                    <span *ngIf="currentStatus?.status !== 'ready'">📦</span>
                    <span *ngIf="currentStatus?.status === 'ready'">✓</span>
                  </div>
                  <div class="step-info" [class.active]="isCurrentStep('ready')">
                    <h3>Delivering</h3>
                    <p>Final packaging & delivery of secure link.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- State 3: Success -->
            <div *ngIf="viewState === 'success'" class="success-view">
              <div class="success-icon">✓</div>
              <h2>Build Ready</h2>
              <p>Your universal custom app has been successfully compiled and signed.</p>
              
              <div class="space-y-4">
                <a [href]="currentStatus?.downloadUrl" target="_blank" class="ais-action-btn" style="text-decoration:none; display:block">DOWNLOAD APK 📲</a>
                <button (click)="viewState = 'configurator'; prompt = ''" class="pm-btn pm-btn-ghost" style="width:100%">START NEW BUILD</button>
              </div>
            </div>

          </div>

          <!-- Tab: History -->
          <div *ngIf="activeTab === 'history'" class="history-view">
            <h2>Build Archives</h2>
            
            <div *ngIf="history().length === 0" style="padding: 100px 0; text-align: center; color: var(--pm-text-muted)">
              <p>No previous builds found in history.</p>
            </div>

            <div *ngFor="let build of history()" class="history-card">
              <div class="card-top">
                <h3>{{ build.product_name }}</h3>
                <time>{{ build.timestamp | date:'short' }}</time>
              </div>
              <p class="card-prompt">"{{ build.prompt }}"</p>
              <div class="card-footer">
                <span class="status-pill ready" *ngIf="build.status === 'ready'">COMPLETED</span>
                <a *ngIf="build.downloadUrl" [href]="build.downloadUrl" target="_blank" style="color: var(--ion-color-primary)">Download Link →</a>
                <button (click)="reViewBuild(build)">View Details</button>
              </div>
            </div>
          </div>

        </div>

        <!-- Footer -->
        <footer class="ais-footer">
          <div class="cluster-info">
            <span class="pulse-dot"></span>
            NEURAL-LINK-US-EAST-1
          </div>
          <div>POWERED BY SELLJUSTCODE</div>
        </footer>
      </div>
    </ion-content>
  `,
  animations: [
    trigger('stateAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class AIBuildStudioComponent implements OnInit {
  @Input({ required: true }) productId!: string;
  @Input({ required: true }) productName!: string;
  @Input({ required: true }) baseSchema!: string;

  private modalCtrl = inject(ModalController);
  private buildService = inject(AiBuildService);

  activeTab: 'studio' | 'history' = 'studio';
  viewState: 'configurator' | 'pipeline' | 'success' = 'configurator';
  prompt = '';
  isBuilding = false;
  currentStatus: BuildStatus | null = null;
  history = signal<BuildStatus[]>([]);

  ngOnInit() {
    this.loadHistory();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async loadHistory() {
    this.activeTab = 'history';
    this.buildService.getHistory().subscribe(data => {
      this.history.set(data.sort((a,b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()));
    });
  }

  initiateBuild() {
    this.isBuilding = true;
    this.buildService.triggerBuild(this.productId, this.productName, this.prompt, this.baseSchema).subscribe({
      next: (res) => {
        const buildId = res.build_id;
        this.viewState = 'pipeline';
        this.startPolling(buildId);
      },
      error: (err) => {
        console.error(err);
        this.isBuilding = false;
        alert('Failed to initiate build. Please check your neural link.');
      }
    });
  }

  startPolling(buildId: string) {
    this.buildService.pollBuildStatus(buildId).subscribe({
      next: (status) => {
        this.currentStatus = status;
        if (status.status === 'ready') {
          this.viewState = 'success';
          this.isBuilding = false;
        }
      },
      error: (err) => {
        console.error(err);
        this.isBuilding = false;
      }
    });
  }

  reViewBuild(build: BuildStatus) {
    // Logic to view old build details if needed
    alert(`Build ID: ${build.id}\nStatus: ${build.status}\nPrompt: ${build.prompt}`);
  }

  // Stepper Logic
  isCurrentStep(step: string): boolean {
    return this.currentStatus?.status === step;
  }

  isPastStep(step: string): boolean {
    const steps = ['analyzing', 'validating', 'provisioning', 'compiling', 'ready'];
    const currentIndex = steps.indexOf(this.currentStatus?.status || 'analyzing');
    const stepIndex = steps.indexOf(step as any);
    return currentIndex > stepIndex;
  }
}

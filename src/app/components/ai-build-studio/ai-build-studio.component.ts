import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, ModalController } from '@ionic/angular/standalone';
import { AiBuildService, BuildStatus } from '../../services/ai-build.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { FirestoreDatePipe } from '../../pipes/firestore-date.pipe';

@Component({
  selector: 'app-ai-build-studio',
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, FirestoreDatePipe],
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
                
                <!-- Step: Configuring -->
                <div class="step-item" [class.inactive]="!isCurrentStep('configuring') && !isPastStep('configuring')">
                  <div class="step-circle" [class.active]="isCurrentStep('configuring')" [class.past]="isPastStep('configuring')">
                    <span *ngIf="!isPastStep('configuring')">🧠</span>
                    <span *ngIf="isPastStep('configuring')">✓</span>
                  </div>
                  <div class="step-info" [class.active]="isCurrentStep('configuring')">
                    <h3>AI Configuring</h3>
                    <p>Analyzing requirements, validating schema, and provisioning.</p>
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
                    <p>Triggering GitHub Actions & building application bundle.</p>
                  </div>
                </div>

                <!-- Step: Success -->
                <div class="step-item" [class.inactive]="!isCurrentStep('success')">
                  <div class="step-circle" [class.active]="isCurrentStep('success')" [class.past]="isPastStep('success')">
                    <span *ngIf="currentStatus?.status !== 'success'">📦</span>
                    <span *ngIf="currentStatus?.status === 'success'">✓</span>
                  </div>
                  <div class="step-info" [class.active]="isCurrentStep('success')">
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
                <time>{{ build.timestamp | fsDate | date:'short' }}</time>
              </div>
              <p class="card-prompt">"{{ build.prompt }}"</p>
              <div class="card-footer">
                <span class="status-pill ready" *ngIf="build.status === 'success'">COMPLETED</span>
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
      this.history.set(data.sort((a,b) => {
        const pipe = new FirestoreDatePipe();
        const timeA = pipe.transform(a.timestamp)?.getTime() || 0;
        const timeB = pipe.transform(b.timestamp)?.getTime() || 0;
        return timeB - timeA;
      }));
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
        if (status.status === 'success') {
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
    const steps = ['configuring', 'compiling', 'success'];
    const currentIndex = steps.indexOf(this.currentStatus?.status || 'configuring');
    const stepIndex = steps.indexOf(step as any);
    return currentIndex > stepIndex;
  }
}

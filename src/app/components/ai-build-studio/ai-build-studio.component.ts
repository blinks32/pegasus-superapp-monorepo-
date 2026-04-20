import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { AiBuildService, BuildStatus } from '../../services/ai-build.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-ai-build-studio',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  template: `
    <ion-content class="ais-dark">
      <div class="flex flex-col h-full bg-zinc-950 text-zinc-100 overflow-hidden">
        
        <!-- Header -->
        <header class="p-6 flex items-center justify-between border-b border-zinc-800 ais-glass">
          <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl bg-violet-500 flex items-center justify-center text-xl ais-glow-violet">✨</div>
            <div>
              <h1 class="text-xl font-bold ais-text-gradient">AI BUILD STUDIO</h1>
              <p class="text-xs text-zinc-500 tracking-widest uppercase">Universal Factory Hub v2.0</p>
            </div>
          </div>
          <button (click)="dismiss()" class="text-zinc-500 hover:text-white transition-colors text-2xl">&times;</button>
        </header>

        <!-- Navbar -->
        <nav class="flex px-6 pt-4 gap-8 border-b border-zinc-800">
          <button 
            (click)="activeTab = 'studio'" 
            [class.text-violet-500]="activeTab === 'studio'"
            [class.border-b-2]="activeTab === 'studio'"
            class="pb-3 border-violet-500 font-semibold transition-all">Studio</button>
          <button 
            (click)="loadHistory()" 
            [class.text-violet-500]="activeTab === 'history'"
            [class.border-b-2]="activeTab === 'history'"
            class="pb-3 border-violet-500 font-semibold transition-all">Archives</button>
        </nav>

        <div class="flex-1 overflow-y-auto p-6 scroll-smooth">
          
          <!-- Tab: Studio -->
          <div *ngIf="activeTab === 'studio'" class="fade-in space-y-8">
            
            <!-- State 1: Configurator -->
            <div *ngIf="viewState === 'configurator'" class="space-y-6">
              <div class="space-y-2">
                <h2 class="text-2xl font-bold">Configure Product: <span class="text-violet-500">{{ productName }}</span></h2>
                <p class="text-zinc-400">Instruct the AI to customize the source code architecture. Themes, fares, and logic will be re-baked in real-time.</p>
              </div>

              <!-- Prompt Area -->
              <div class="relative group">
                <textarea 
                  [(ngModel)]="prompt" 
                  rows="4" 
                  class="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-all placeholder:text-zinc-600"
                  placeholder="e.g., 'Modern dark theme with gold accents, set base fare to $5.00, and add a premium driver onboarding flow...'"></textarea>
                <div class="absolute bottom-4 right-4 flex items-center gap-2 text-xs text-zinc-500">
                  <span class="w-2 h-2 bg-green-500 rounded-full"></span> NEURAL LINK ACTIVE
                </div>
              </div>

              <!-- Live Preview Card (Schema) -->
              <div class="ais-glass rounded-2xl overflow-hidden">
                <div class="p-4 border-b border-white/5 flex justify-between items-center">
                  <span class="text-xs font-bold tracking-widest text-zinc-500">LIVE SCHEMA PREVIEW</span>
                  <span class="px-2 py-1 bg-zinc-800 rounded text-[10px] text-zinc-400">JSON_CONFIG_V4</span>
                </div>
                <div class="p-6 bg-zinc-900/50">
                  <pre class="text-[13px] text-violet-400 font-mono leading-relaxed overflow-x-auto">{{ baseSchema | slice:0:300 }}...</pre>
                </div>
              </div>

              <button 
                (click)="initiateBuild()" 
                [disabled]="!prompt || isBuilding"
                class="w-full py-4 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all ais-glow-violet flex items-center justify-center gap-3">
                <span *ngIf="!isBuilding">INITIATE AI BUILD 🚀</span>
                <span *ngIf="isBuilding">ESTABLISHING CONNECTION... ⏳</span>
              </button>
            </div>

            <!-- State 2: Pipeline (Mission Control) -->
            <div *ngIf="viewState === 'pipeline'" class="space-y-8 py-4">
              <div class="text-center space-y-2">
                <div class="inline-block px-3 py-1 bg-violet-500/10 text-violet-500 rounded-full text-[10px] font-bold tracking-widest mb-2 border border-violet-500/20">LIVE FACTORY FEED</div>
                <h2 class="text-3xl font-bold">Mission Control</h2>
                <p class="text-zinc-400">Tracking build execution across distributed clusters.</p>
              </div>

              <!-- Glowing Stepper -->
              <div class="relative space-y-12 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-800">
                
                <!-- Step 1: Analyzing -->
                <div class="flex items-start gap-6 relative" [class.opacity-40]="!isCurrentStep('analyzing') && !isPastStep('analyzing')">
                  <div class="w-10 h-10 rounded-full bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center z-10 transition-all"
                       [class.border-violet-500]="isCurrentStep('analyzing')" 
                       [class.bg-violet-500]="isPastStep('analyzing')"
                       [class.ais-step-active-glow]="isCurrentStep('analyzing')">
                    <span *ngIf="!isPastStep('analyzing')">🧠</span>
                    <span *ngIf="isPastStep('analyzing')">✅</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg" [class.text-violet-500]="isCurrentStep('analyzing')">Analyzing</h3>
                    <p class="text-sm text-zinc-500">AI generating new configuration based on instructions.</p>
                  </div>
                </div>

                <!-- Step 2: Validating -->
                <div class="flex items-start gap-6 relative" [class.opacity-40]="!isCurrentStep('validating') && !isPastStep('validating')">
                  <div class="w-10 h-10 rounded-full bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center z-10 transition-all"
                       [class.border-violet-500]="isCurrentStep('validating')" 
                       [class.bg-violet-500]="isPastStep('validating')"
                       [class.ais-step-active-glow]="isCurrentStep('validating')">
                    <span *ngIf="!isPastStep('validating')">⚖️</span>
                    <span *ngIf="isPastStep('validating')">✅</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg" [class.text-violet-500]="isCurrentStep('validating')">Validating</h3>
                    <p class="text-sm text-zinc-500">Security audit & schema integrity checks.</p>
                  </div>
                </div>

                <!-- Step 3: Provisioning -->
                <div class="flex items-start gap-6 relative" [class.opacity-40]="!isCurrentStep('provisioning') && !isPastStep('provisioning')">
                  <div class="w-10 h-10 rounded-full bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center z-10 transition-all"
                       [class.border-violet-500]="isCurrentStep('provisioning')" 
                       [class.bg-violet-500]="isPastStep('provisioning')"
                       [class.ais-step-active-glow]="isCurrentStep('provisioning')">
                    <span *ngIf="!isPastStep('provisioning')">⚡</span>
                    <span *ngIf="isPastStep('provisioning')">✅</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg" [class.text-violet-500]="isCurrentStep('provisioning')">Provisioning</h3>
                    <p class="text-sm text-zinc-500">Triggering GitHub Build Engine & environment setup.</p>
                  </div>
                </div>

                <!-- Step 4: Compiling -->
                <div class="flex items-start gap-6 relative" [class.opacity-40]="!isCurrentStep('compiling') && !isPastStep('compiling')">
                  <div class="w-10 h-10 rounded-full bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center z-10 transition-all"
                       [class.border-violet-500]="isCurrentStep('compiling')" 
                       [class.bg-violet-500]="isPastStep('compiling')"
                       [class.ais-step-active-glow]="isCurrentStep('compiling')">
                    <span *ngIf="!isPastStep('compiling')">🛠️</span>
                    <span *ngIf="isPastStep('compiling')">✅</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg" [class.text-violet-500]="isCurrentStep('compiling')">Compiling</h3>
                    <p class="text-sm text-zinc-500">Real-time binary generation (may take 2-4 mins).</p>
                  </div>
                </div>

                <!-- Step 5: Delivering -->
                <div class="flex items-start gap-6 relative" [class.opacity-40]="!isCurrentStep('ready')">
                  <div class="w-10 h-10 rounded-full bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center z-10 transition-all"
                       [class.border-violet-500]="isCurrentStep('ready')" 
                       [class.bg-violet-500]="isCurrentStep('ready')"
                       [class.ais-step-active-glow]="isCurrentStep('ready')">
                    <span *ngIf="currentStatus?.status !== 'ready'">📦</span>
                    <span *ngIf="currentStatus?.status === 'ready'">🎉</span>
                  </div>
                  <div>
                    <h3 class="font-bold text-lg" [class.text-violet-500]="isCurrentStep('ready')">Delivering</h3>
                    <p class="text-sm text-zinc-500">Final packaging & delivery of secure download link.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- State 3: Success / Delivery -->
            <div *ngIf="viewState === 'success'" class="text-center space-y-8 py-10">
              <div class="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-5xl mx-auto shadow-[0_0_50px_rgba(34,197,94,0.3)] animate-bounce">✓</div>
              <div class="space-y-4">
                <h2 class="text-4xl font-extrabold uppercase tracking-tight">Build Ready</h2>
                <p class="text-zinc-400">Your universal custom app has been successfully compiled and signed.</p>
              </div>
              <div class="flex flex-col gap-4">
                <a [href]="currentStatus?.downloadUrl" target="_blank" class="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.2)]">DOWNLOAD CUSTOM APK 📲</a>
                <button (click)="viewState = 'configurator'; prompt = ''" class="w-full py-4 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white rounded-2xl transition-all">START NEW BUILD</button>
              </div>
            </div>

          </div>

          <!-- Tab: History -->
          <div *ngIf="activeTab === 'history'" class="fade-in space-y-6">
            <h2 class="text-2xl font-bold">Build Archives</h2>
            
            <div *ngIf="history().length === 0" class="py-20 text-center space-y-4">
              <div class="text-5xl opacity-20">🗄️</div>
              <p class="text-zinc-500">No previous builds found in history.</p>
            </div>

            <div *ngFor="let build of history()" class="ais-glass rounded-2xl p-6 border border-white/5 space-y-4 hover:border-violet-500/30 transition-all">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="font-bold text-lg text-violet-400">{{ build.product_name }}</h3>
                  <p class="text-[10px] text-zinc-500 uppercase tracking-tighter">{{ build.timestamp | date:'medium' }}</p>
                </div>
                <span class="px-2 py-1 rounded text-[10px] font-bold" 
                      [ngClass]="{
                        'bg-green-500/10 text-green-500': build.status === 'ready',
                        'bg-red-500/10 text-red-500': build.status === 'failed'
                      }">
                  {{ build.status | uppercase }}
                </span>
              </div>
              <p class="text-sm text-zinc-400 italic line-clamp-2">"{{ build.prompt }}"</p>
              <div class="pt-2 flex gap-4">
                <a *ngIf="build.downloadUrl" [href]="build.downloadUrl" target="_blank" class="text-xs font-bold text-violet-500 hover:underline">Download Link →</a>
                <button (click)="reViewBuild(build)" class="text-xs font-bold text-zinc-500 hover:text-white">View Schema Details</button>
              </div>
            </div>
          </div>

        </div>

        <!-- Footer -->
        <footer class="p-6 border-t border-zinc-800 ais-glass flex items-center justify-between">
          <div class="flex items-center gap-2 text-[10px] font-bold text-zinc-600 tracking-widest">
            <span class="w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></span>
            CLUSTER: NEURAL-US-EAST-1
          </div>
          <div class="text-[10px] text-zinc-600 font-bold tracking-widest uppercase">
            POWERED BY SELLJUSTCODE AI
          </div>
        </footer>
      </div>
    </ion-content>
  `,
  styles: [`
    .fade-in {
      animation: fadeIn 0.4s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `],
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

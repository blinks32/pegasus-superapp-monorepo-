import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MarketplaceService } from '../../../services/marketplace.service';
import { AdminProject, ProductCategory } from '../../../models/marketplace.models';

@Component({
  selector: 'app-submit-project',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <section class="submit-hero">
      <div class="pm-container">
        <a routerLink="/admin" class="back-link">← Back to Dashboard</a>
        <h1 class="pm-heading-lg">📤 Submit New Project</h1>
        <p class="pm-text-secondary">Fill in the details below to submit your project for review</p>
      </div>
    </section>

    <div class="pm-container submit-layout">
      <!-- Success State -->
      <div class="success-card" *ngIf="submitted()">
        <div class="success-icon">🎉</div>
        <h2>Project Submitted Successfully!</h2>
        <p>Your project has been submitted for review. Our team will review it within 2-3 business days.</p>
        <div class="success-actions">
          <a routerLink="/admin" class="pm-btn pm-btn-primary">View Dashboard</a>
          <button class="pm-btn pm-btn-outline" (click)="resetForm()">Submit Another</button>
        </div>
      </div>

      <!-- Form -->
      <form class="submit-form" *ngIf="!submitted()" (ngSubmit)="onSubmit()">
        <!-- Progress Steps -->
        <div class="progress-steps">
          <div class="step" *ngFor="let step of steps; let i = index"
               [class.active]="currentStep() === i"
               [class.completed]="currentStep() > i"
               (click)="goToStep(i)">
            <div class="step-num">{{ currentStep() > i ? '✓' : i + 1 }}</div>
            <span>{{ step }}</span>
          </div>
        </div>

        <!-- Step 1: Basic Info -->
        <div class="form-step" *ngIf="currentStep() === 0">
          <div class="form-card">
            <h3>Basic Information</h3>

            <div class="form-group">
              <label for="title">Project Title *</label>
                <input id="title" type="text" [(ngModel)]="project.title" name="title" placeholder="Project title" class="form-input" required />
              <span class="form-hint">Use a clear, descriptive name with framework/technology</span>
            </div>

            <div class="form-group">
              <label for="shortDesc">Short Description *</label>
                <textarea id="shortDesc" [(ngModel)]="project.shortDescription" name="shortDesc" placeholder="Brief overview (1-2 sentences)" class="form-input" rows="3" required></textarea>
              <span class="form-hint">Max 200 characters. This appears in product cards.</span>
            </div>

            <div class="form-group">
              <label for="fullDesc">Full Description *</label>
                <textarea id="fullDesc" [(ngModel)]="project.fullDescription" name="fullDesc" placeholder="Detailed description (features, tech stack, usage)" class="form-input" rows="8" required></textarea>
              <span class="form-hint">Supports HTML formatting. Be thorough — good descriptions increase sales.</span>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="category">Category *</label>
                <select id="category" [(ngModel)]="project.category" name="category" class="form-input" required>
                  <option value="">Select category...</option>
                  <option *ngFor="let cat of marketplace.categories" [value]="cat.id">{{ cat.icon }} {{ cat.label }}</option>
                </select>
              </div>
              <div class="form-group">
                <label for="version">Version *</label>
                  <input id="version" type="text" [(ngModel)]="project.version" name="version" placeholder="Version" class="form-input" required />
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2: Pricing -->
        <div class="form-step" *ngIf="currentStep() === 1">
          <div class="form-card">
            <h3>Pricing & Licensing</h3>

            <div class="form-row">
              <div class="form-group">
                <label for="price">Regular Price (USD) *</label>
                <div class="price-input-wrap">
                  <span class="price-symbol">$</span>
                  <input id="price" type="number" [(ngModel)]="project.price" name="price" placeholder="Price" class="form-input price-field" required min="1" />
                </div>
              </div>
              <div class="form-group">
                <label for="origPrice">Original Price (Optional)</label>
                <div class="price-input-wrap">
                  <span class="price-symbol">$</span>
                  <input id="origPrice" type="number" [(ngModel)]="project.originalPrice" name="origPrice" placeholder="Original price (optional)" class="form-input price-field" />
                </div>
                <span class="form-hint">Set higher to show discount</span>
              </div>
            </div>

            <div class="form-group">
              <label>License Type</label>
              <div class="license-options">
                <label class="license-opt" [class.active]="project.license === 'regular'">
                  <input type="radio" name="license" value="regular" [(ngModel)]="project.license" />
                  <div class="license-opt-content">
                    <strong>📄 Regular License</strong>
                    <span>Single end product use</span>
                  </div>
                </label>
                <label class="license-opt" [class.active]="project.license === 'extended'">
                  <input type="radio" name="license" value="extended" [(ngModel)]="project.license" />
                  <div class="license-opt-content">
                    <strong>🔓 Extended License</strong>
                    <span>Multiple projects & commercial use</span>
                  </div>
                </label>
              </div>
            </div>

            <div class="form-group">
              <label class="checkbox-label">
                <input type="checkbox" [(ngModel)]="project.hasReskinService" name="reskin" />
                <span>🎨 Offer Reskin Service</span>
              </label>
            </div>

            <div class="form-group" *ngIf="project.hasReskinService">
              <label for="reskinPrice">Reskin Service Price (USD)</label>
              <div class="price-input-wrap">
                <span class="price-symbol">$</span>
                  <input id="reskinPrice" type="number" [(ngModel)]="project.reskinPrice" name="reskinPrice" placeholder="Reskin service price (optional)" class="form-input price-field" />
              </div>
            </div>
          </div>
        </div>

        <!-- Step 3: Details -->
        <div class="form-step" *ngIf="currentStep() === 2">
          <div class="form-card">
            <h3>Technical Details</h3>

            <div class="form-group">
              <label for="tags">Tags (comma separated) *</label>
                <input id="tags" type="text" [(ngModel)]="tagsInput" name="tags" placeholder="Tags (comma separated)" class="form-input" />
              <span class="form-hint">Add relevant tags to help buyers find your product</span>
              <div class="tag-preview" *ngIf="tagsInput">
                <span class="preview-tag" *ngFor="let tag of parseTags()">{{ tag }}</span>
              </div>
            </div>

            <div class="form-group">
              <label for="features">Key Features (one per line) *</label>
                <textarea id="features" [(ngModel)]="featuresInput" name="features" placeholder="Enter key features, one per line." class="form-input" rows="6"></textarea>
            </div>

            <div class="form-group">
              <label for="techStack">Tech Stack (comma separated)</label>
                <input id="techStack" type="text" [(ngModel)]="techStackInput" name="techStack" placeholder="Tech stack (comma separated)" class="form-input" />
            </div>

            <div class="form-group">
              <label for="compat">Compatibility (comma separated)</label>
                <input id="compat" type="text" [(ngModel)]="compatInput" name="compat" placeholder="Supported platforms (comma separated)" class="form-input" />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="fileSize">File Size</label>
                  <input id="fileSize" type="text" [(ngModel)]="project.fileSize" name="fileSize" placeholder="File size" class="form-input" />
              </div>
              <div class="form-group">
                <label for="demoUrl">Demo URL (optional)</label>
                  <input id="demoUrl" type="url" [(ngModel)]="project.demoUrl" name="demoUrl" placeholder="Demo URL (optional)" class="form-input" />
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4: Files & Submit -->
        <div class="form-step" *ngIf="currentStep() === 3">
          <div class="form-card">
            <h3>Files & Media</h3>

            <div class="form-group">
              <label>Thumbnail Image *</label>
              <div class="file-upload" (click)="thumbInput.click()">
                <input #thumbInput type="file" accept="image/*" hidden (change)="onThumbSelect($event)" />
                <div class="upload-content" *ngIf="!thumbnailName">
                  <span class="upload-icon">🖼️</span>
                  <strong>Drop thumbnail image here or click to browse</strong>
                  <span>PNG, JPG up to 5MB. Recommended: 600x400</span>
                </div>
                <div class="upload-content selected" *ngIf="thumbnailName">
                  <span class="upload-icon">✅</span>
                  <strong>{{ thumbnailName }}</strong>
                  <span>Click to change</span>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>Preview Screenshots (up to 5)</label>
              <div class="file-upload" (click)="screenshotInput.click()">
                <input #screenshotInput type="file" accept="image/*" multiple hidden (change)="onScreenshotsSelect($event)" />
                <div class="upload-content" *ngIf="screenshotNames.length === 0">
                  <span class="upload-icon">📸</span>
                  <strong>Upload preview screenshots</strong>
                  <span>Select up to 5 images. PNG, JPG up to 5MB each</span>
                </div>
                <div class="upload-content selected" *ngIf="screenshotNames.length > 0">
                  <span class="upload-icon">✅</span>
                  <strong>{{ screenshotNames.length }} file(s) selected</strong>
                  <span>Click to add more or change</span>
                </div>
              </div>
              <!-- Display selected screenshots -->
              <div class="selected-files" *ngIf="screenshotNames.length > 0">
                <div class="selected-file" *ngFor="let name of screenshotNames; let i = index">
                  <span class="file-name">{{ name }}</span>
                  <button type="button" class="remove-file" (click)="removeScreenshot(i)">×</button>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>Source Code (ZIP) *</label>
              <div class="file-upload" (click)="sourceInput.click()">
                <input #sourceInput type="file" accept=".zip,.rar,.7z" hidden (change)="onSourceSelect($event)" />
                <div class="upload-content" *ngIf="!sourceName">
                  <span class="upload-icon">📁</span>
                  <strong>Upload your source code package</strong>
                  <span>ZIP, RAR up to 500MB</span>
                </div>
                <div class="upload-content selected" *ngIf="sourceName">
                  <span class="upload-icon">✅</span>
                  <strong>{{ sourceName }}</strong>
                  <span>Click to change</span>
                </div>
              </div>
            </div>

            <!-- Submission Guidelines -->
            <div class="guidelines-box">
              <h4>📋 Submission Guidelines</h4>
              <ul>
                <li>Ensure your code is well-documented and organized</li>
                <li>Include a README with setup instructions</li>
                <li>Remove any API keys or sensitive credentials</li>
                <li>Test thoroughly before submitting</li>
                <li>Review typically takes 2-3 business days</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="form-navigation">
          <button type="button" class="pm-btn pm-btn-ghost" *ngIf="currentStep() > 0" (click)="prevStep()">
            ← Previous
          </button>
          <div class="nav-spacer"></div>
          <button type="button" class="pm-btn pm-btn-outline" (click)="saveDraft()" *ngIf="currentStep() === 3">
            💾 Save as Draft
          </button>
          <button type="button" class="pm-btn pm-btn-primary" *ngIf="currentStep() < 3" (click)="nextStep()" [disabled]="!isStepValid()">
            Next Step →
          </button>
          <button type="submit" class="pm-btn pm-btn-success pm-btn-lg" *ngIf="currentStep() === 3" [disabled]="!isFormValid()">
            🚀 Submit for Review
          </button>
        </div>
      </form>
    </div>

    <app-footer></app-footer>
  `,
  styles: [`
    .submit-hero {
      background: linear-gradient(135deg, #F8FAFC, #EEF0FF);
      padding: 32px 0;
      border-bottom: 1px solid var(--pm-border-light);
    }
    .submit-hero h1 { margin: 0 0 4px; }
    .submit-hero p { margin: 0; }
    .back-link {
      font-size: 0.85rem;
      color: var(--pm-text-muted);
      text-decoration: none;
      display: inline-block;
      margin-bottom: 8px;
    }
    .back-link:hover { color: var(--ion-color-primary); }

    .submit-layout { padding: 32px 0 64px; max-width: 800px; }
    .submit-form { width: 100%; }

    /* Progress Steps */
    .progress-steps {
      display: flex;
      gap: 8px;
      margin-bottom: 32px;
    }
    .step {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      background: var(--pm-surface);
      border-radius: var(--pm-radius-md);
      border: 2px solid var(--pm-border);
      cursor: pointer;
      transition: all var(--pm-transition-fast);
    }
    .step.active {
      border-color: var(--ion-color-primary);
      background: rgba(99,102,241,0.04);
    }
    .step.completed {
      border-color: #10B981;
      background: rgba(16,185,129,0.04);
    }
    .step-num {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      font-weight: 700;
      background: var(--pm-surface-muted);
      color: var(--pm-text-muted);
      flex-shrink: 0;
    }
    .step.active .step-num { background: var(--ion-color-primary); color: white; }
    .step.completed .step-num { background: #10B981; color: white; }
    .step span { font-size: 0.8rem; font-weight: 600; color: var(--pm-text-secondary); }
    .step.active span { color: var(--ion-color-primary); }
    .step.completed span { color: #059669; }

    /* Form Card */
    .form-card {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      padding: 32px;
      border: 1px solid var(--pm-border-light);
      box-shadow: var(--pm-shadow-sm);
      margin-bottom: 24px;
    }
    .form-card h3 { margin: 0 0 24px; font-size: 1.2rem; }

    .form-group { margin-bottom: 20px; }
    .form-group label {
      display: block;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--pm-text-primary);
      margin-bottom: 6px;
    }
    .form-input {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid var(--pm-border);
      border-radius: var(--pm-radius-sm);
      font-family: inherit;
      font-size: 0.9rem;
      background: var(--pm-surface);
      color: var(--pm-text-primary);
      outline: none;
      transition: border-color var(--pm-transition-fast);
    }
    .form-input:focus { border-color: var(--ion-color-primary); }
    .form-input::placeholder { color: var(--pm-text-muted); }
    textarea.form-input { resize: vertical; min-height: 80px; line-height: 1.5; }
    select.form-input { cursor: pointer; }
    .form-hint { font-size: 0.75rem; color: var(--pm-text-muted); margin-top: 4px; display: block; }

    .form-row { display: flex; gap: 16px; }
    .form-row .form-group { flex: 1; }

    .price-input-wrap { position: relative; }
    .price-symbol {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      font-weight: 700;
      color: var(--pm-text-muted);
    }
    .price-field { padding-left: 32px; }

    /* License Options */
    .license-options { display: flex; gap: 12px; }
    .license-opt {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      border: 2px solid var(--pm-border);
      border-radius: var(--pm-radius-md);
      cursor: pointer;
      transition: all var(--pm-transition-fast);
    }
    .license-opt.active { border-color: var(--ion-color-primary); background: rgba(99,102,241,0.03); }
    .license-opt input { accent-color: var(--ion-color-primary); }
    .license-opt-content strong { display: block; font-size: 0.85rem; }
    .license-opt-content span { font-size: 0.75rem; color: var(--pm-text-muted); }

    .checkbox-label {
      display: flex !important;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }
    .checkbox-label input { accent-color: var(--ion-color-primary); }

    /* Tags Preview */
    .tag-preview { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px; }
    .preview-tag {
      padding: 4px 10px;
      background: rgba(99,102,241,0.08);
      border-radius: var(--pm-radius-full);
      font-size: 0.75rem;
      color: #6366F1;
    }

    /* File Upload */
    .file-upload {
      border: 2px dashed var(--pm-border);
      border-radius: var(--pm-radius-md);
      padding: 32px;
      text-align: center;
      cursor: pointer;
      transition: all var(--pm-transition-fast);
    }
    .file-upload:hover { border-color: var(--ion-color-primary); background: rgba(99,102,241,0.02); }
    .upload-content { display: flex; flex-direction: column; align-items: center; gap: 6px; }
    .upload-icon { font-size: 2rem; }
    .upload-content strong { font-size: 0.875rem; color: var(--pm-text-primary); }
    .upload-content span { font-size: 0.75rem; color: var(--pm-text-muted); }
    .upload-content.selected { color: #10B981; }
    .upload-content.selected strong { color: #059669; }

    /* Selected Files */
    .selected-files { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
    .selected-file {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      background: var(--pm-surface-muted);
      border-radius: var(--pm-radius-sm);
      font-size: 0.8rem;
    }
    .selected-file .file-name { color: var(--pm-text-primary); max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .remove-file {
      background: none;
      border: none;
      color: var(--pm-text-muted);
      cursor: pointer;
      font-size: 1.2rem;
      line-height: 1;
      padding: 0;
    }
    .remove-file:hover { color: #EF4444; }
    .upload-content strong { font-size: 0.875rem; color: var(--pm-text-primary); }
    .upload-content span { font-size: 0.75rem; color: var(--pm-text-muted); }
    .upload-content.selected { color: #10B981; }
    .upload-content.selected strong { color: #059669; }

    /* Guidelines */
    .guidelines-box {
      padding: 20px;
      background: rgba(245,158,11,0.05);
      border: 1px solid rgba(245,158,11,0.2);
      border-radius: var(--pm-radius-md);
      margin-top: 8px;
    }
    .guidelines-box h4 { margin: 0 0 10px; font-size: 0.9rem; }
    .guidelines-box ul { margin: 0; padding-left: 20px; }
    .guidelines-box li { font-size: 0.82rem; color: var(--pm-text-secondary); padding: 3px 0; }

    /* Navigation */
    .form-navigation {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .nav-spacer { flex: 1; }

    /* Success */
    .success-card {
      text-align: center;
      padding: 64px 32px;
      background: var(--pm-surface);
      border-radius: var(--pm-radius-xl);
      border: 1px solid var(--pm-border-light);
      box-shadow: var(--pm-shadow-lg);
      max-width: 560px;
      margin: 48px auto;
      animation: scaleIn 0.4s ease;
    }
    .success-icon { font-size: 4rem; margin-bottom: 16px; }
    .success-card h2 { margin: 0 0 12px; }
    .success-card p { color: var(--pm-text-secondary); margin: 0 0 28px; }
    .success-actions { display: flex; justify-content: center; gap: 12px; }

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }

    @media (max-width: 768px) {
      .progress-steps { flex-direction: column; gap: 4px; }
      .form-row { flex-direction: column; gap: 0; }
      .license-options { flex-direction: column; }
      .form-card { padding: 20px; }
    }
  `],
})
export class SubmitProjectComponent {
  marketplace = inject(MarketplaceService);
  private router = inject(Router);

  currentStep = signal(0);
  submitted = signal(false);

  steps = ['Basic Info', 'Pricing', 'Details', 'Files'];

  project: AdminProject = {
    title: '',
    shortDescription: '',
    fullDescription: '',
    category: '' as ProductCategory,
    price: 0,
    tags: [],
    features: [],
    techStack: [],
    compatibility: [],
    version: '',
    fileSize: '',
    license: 'regular',
    hasReskinService: false,
    status: 'pending',
  };

  tagsInput = '';
  featuresInput = '';
  techStackInput = '';
  compatInput = '';
  thumbnailName = '';
  screenshotNames: string[] = [];
  sourceName = '';

  parseTags(): string[] {
    return this.tagsInput.split(',').map(t => t.trim()).filter(t => t.length > 0);
  }

  isStepValid(): boolean {
    switch (this.currentStep()) {
      case 0: return !!(this.project.title && this.project.shortDescription && this.project.category && this.project.version);
      case 1: return this.project.price > 0;
      case 2: return true;
      default: return true;
    }
  }

  isFormValid(): boolean {
    return !!(this.project.title && this.project.shortDescription && this.project.category && this.project.version && this.project.price > 0);
  }

  nextStep() {
    if (this.currentStep() < 3) this.currentStep.update(v => v + 1);
  }

  prevStep() {
    if (this.currentStep() > 0) this.currentStep.update(v => v - 1);
  }

  goToStep(i: number) {
    if (i <= this.currentStep()) this.currentStep.set(i);
  }

  onThumbSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) this.thumbnailName = input.files[0].name;
  }

  onScreenshotsSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const newFiles = Array.from(input.files).map(f => f.name);
      // Limit to 5 screenshots total
      const combined = [...this.screenshotNames, ...newFiles].slice(0, 5);
      this.screenshotNames = combined;
    }
  }

  removeScreenshot(index: number) {
    this.screenshotNames = this.screenshotNames.filter((_, i) => i !== index);
  }

  onSourceSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) this.sourceName = input.files[0].name;
  }

  async saveDraft() {
    this.project.tags = this.parseTags();
    this.project.features = this.featuresInput.split('\n').filter(f => f.trim());
    this.project.techStack = this.techStackInput.split(',').map(t => t.trim()).filter(t => t);
    this.project.compatibility = this.compatInput.split(',').map(c => c.trim()).filter(c => c);
    this.project.status = 'draft';
    
    try {
      await this.marketplace.submitProject(this.project);
      alert('Draft saved successfully!');
    } catch (error) {
      console.error('Error saving draft:', error);
      alert('Failed to save draft. Please check your Firestore rules and try again.');
    }
  }

  async onSubmit() {
    this.project.tags = this.parseTags();
    this.project.features = this.featuresInput.split('\n').filter(f => f.trim());
    this.project.techStack = this.techStackInput.split(',').map(t => t.trim()).filter(t => t);
    this.project.compatibility = this.compatInput.split(',').map(c => c.trim()).filter(c => c);
    this.project.status = 'published';
    
    try {
      await this.marketplace.submitProject(this.project);
      this.submitted.set(true);
    } catch (error) {
      console.error('Error submitting project:', error);
      alert('Failed to submit project. Please check your Firestore rules and try again.');
    }
  }

  resetForm() {
    this.submitted.set(false);
    this.currentStep.set(0);
    this.project = {
      title: '', shortDescription: '', fullDescription: '', category: '' as ProductCategory,
      price: 0, tags: [], features: [], techStack: [], compatibility: [],
      version: '', fileSize: '', license: 'regular', hasReskinService: false, status: 'pending',
    };
    this.tagsInput = '';
    this.featuresInput = '';
    this.techStackInput = '';
    this.compatInput = '';
    this.thumbnailName = '';
    this.screenshotNames = [];
    this.sourceName = '';
  }
}

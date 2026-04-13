import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MarketplaceService } from '../../services/marketplace.service';
import { AuthService } from '../../services/auth.service';
import { ImageUploadService } from '../../services/image-upload.service';
import { AdminProject, ProductCategory } from '../../models/marketplace.models';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <!-- Not logged in -->
    <div class="pm-container auth-gate" *ngIf="!auth.currentUser()">
      <div class="auth-card">
        <div class="auth-icon">🔒</div>
        <h2>Sign in to Sell</h2>
        <p>You need an account to submit products for sale on the marketplace.</p>
        <a routerLink="/login" class="pm-btn pm-btn-primary pm-btn-lg">Sign In / Register</a>
      </div>
    </div>

    <!-- Logged in -->
    <ng-container *ngIf="auth.currentUser()">
      <section class="sell-hero">
        <div class="pm-container">
          <div class="hero-row">
            <div>
              <h1 class="pm-heading-lg">💰 Sell Your Product</h1>
              <p class="pm-text-secondary">Submit your project and start earning. All submissions are reviewed before going live.</p>
            </div>
            <a routerLink="/sell/dashboard" class="pm-btn pm-btn-outline">📊 My Submissions</a>
          </div>
        </div>
      </section>

      <div class="pm-container sell-layout">
        <!-- Success State -->
        <div class="success-card" *ngIf="submitted()">
          <div class="success-icon">🎉</div>
          <h2>Product Submitted for Review!</h2>
          <p>Our team will review your submission within 2-3 business days. You'll be notified once it's approved.</p>
          <div class="success-actions">
            <a routerLink="/sell/dashboard" class="pm-btn pm-btn-primary">View My Submissions</a>
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
              <h3>📝 Basic Information</h3>
              <div class="form-group">
                <label for="title">Project Title *</label>
                <input id="title" type="text" [(ngModel)]="project.title" name="title" placeholder="e.g. SaaS Admin Dashboard — Angular + Firebase" class="form-input" required />
                <span class="form-hint">Use a clear, descriptive name with framework/technology</span>
              </div>
              <div class="form-group">
                <label for="shortDesc">Short Description *</label>
                <textarea id="shortDesc" [(ngModel)]="project.shortDescription" name="shortDesc" placeholder="Brief overview (1-2 sentences)" class="form-input" rows="3" required></textarea>
                <span class="form-hint">Max 200 characters. This appears in product cards.</span>
              </div>
              <div class="form-group">
                <label for="fullDesc">Full Description *</label>
                <textarea id="fullDesc" [(ngModel)]="project.fullDescription" name="fullDesc" placeholder="Detailed description of your project" class="form-input" rows="8" required></textarea>
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
                  <input id="version" type="text" [(ngModel)]="project.version" name="version" placeholder="e.g. 1.0.0" class="form-input" required />
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Pricing -->
          <div class="form-step" *ngIf="currentStep() === 1">
            <div class="form-card">
              <h3>💲 Pricing & Licensing</h3>
              <div class="form-row">
                <div class="form-group">
                  <label for="price">Regular Price (USD) *</label>
                  <div class="price-input-wrap">
                    <span class="price-symbol">$</span>
                    <input id="price" type="number" [(ngModel)]="project.price" name="price" placeholder="49" class="form-input price-field" required min="1" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="origPrice">Original Price (Optional)</label>
                  <div class="price-input-wrap">
                    <span class="price-symbol">$</span>
                    <input id="origPrice" type="number" [(ngModel)]="project.originalPrice" name="origPrice" placeholder="99" class="form-input price-field" />
                  </div>
                  <span class="form-hint">Set higher to show a discount badge</span>
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
            </div>
          </div>

          <!-- Step 3: Technical Details -->
          <div class="form-step" *ngIf="currentStep() === 2">
            <div class="form-card">
              <h3>⚙️ Technical Details</h3>
              <div class="form-group">
                <label for="tags">Tags (comma separated) *</label>
                <input id="tags" type="text" [(ngModel)]="tagsInput" name="tags" placeholder="angular, firebase, saas, dashboard" class="form-input" />
                <div class="tag-preview" *ngIf="tagsInput">
                  <span class="preview-tag" *ngFor="let tag of parseTags()">{{ tag }}</span>
                </div>
              </div>
              <div class="form-group">
                <label for="features">Key Features (one per line) *</label>
                <textarea id="features" [(ngModel)]="featuresInput" name="features" placeholder="Real-time dashboard&#10;User authentication&#10;Payment integration" class="form-input" rows="6"></textarea>
              </div>
              <div class="form-group">
                <label for="techStack">Tech Stack (comma separated)</label>
                <input id="techStack" type="text" [(ngModel)]="techStackInput" name="techStack" placeholder="Angular, Firebase, Node.js" class="form-input" />
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="fileSize">File Size</label>
                  <input id="fileSize" type="text" [(ngModel)]="project.fileSize" name="fileSize" placeholder="e.g. 150MB" class="form-input" />
                </div>
                <div class="form-group">
                  <label for="demoUrl">Live Demo URL</label>
                  <input id="demoUrl" type="url" [(ngModel)]="project.demoUrl" name="demoUrl" placeholder="https://your-demo.com" class="form-input" />
                </div>
                <div class="form-group">
                  <label for="youtubeUrl">YouTube Video URL</label>
                  <input id="youtubeUrl" type="url" [(ngModel)]="project.youtubeUrl" name="youtubeUrl" placeholder="https://youtube.com/watch?v=..." class="form-input" />
                </div>
              </div>
            </div>
          </div>

          <!-- Step 4: Deployment Guide -->
          <div class="form-step" *ngIf="currentStep() === 3">
            <div class="form-card">
              <h3>📖 Deployment Guide</h3>
              <p class="section-desc">A deployment guide is <strong>required</strong> for all submissions. It helps buyers set up your project successfully.</p>

              <!-- Instructions Box -->
              <div class="guide-instructions">
                <div class="guide-instructions-header">
                  <span class="gi-icon">🤖</span>
                  <h4>How to Create Your Deployment Guide</h4>
                </div>
                <div class="guide-steps-list">
                  <div class="gi-step">
                    <span class="gi-num">1</span>
                    <div>
                      <strong>Prompt AI to generate it</strong>
                      <p>Use ChatGPT, Gemini, or any AI tool to create a comprehensive deployment guide for your specific project.</p>
                    </div>
                  </div>
                  <div class="gi-step">
                    <span class="gi-num">2</span>
                    <div>
                      <strong>Review & customize</strong>
                      <p>Make sure the generated guide accurately reflects your project's setup process, dependencies, and configuration.</p>
                    </div>
                  </div>
                  <div class="gi-step">
                    <span class="gi-num">3</span>
                    <div>
                      <strong>Paste it below</strong>
                      <p>Copy the final guide and paste it into the text area. It will be displayed on your product's detail page.</p>
                    </div>
                  </div>
                </div>

                <!-- Copy-able Prompt -->
                <div class="prompt-box">
                  <div class="prompt-header">
                    <span>📋 Example AI Prompt (click to copy)</span>
                    <button type="button" class="copy-btn" (click)="copyPrompt()">
                      {{ promptCopied ? '✅ Copied!' : '📋 Copy' }}
                    </button>
                  </div>
                  <pre class="prompt-text">{{ aiPromptTemplate }}</pre>
                </div>
              </div>

              <div class="form-group" style="margin-top: 24px">
                <label for="deployGuide">Deployment Guide Content *</label>
                <textarea
                  id="deployGuide"
                  [(ngModel)]="project.deploymentGuide"
                  name="deployGuide"
                  placeholder="Paste your AI-generated deployment guide here...&#10;&#10;## Prerequisites&#10;- Node.js 18+&#10;- npm or yarn&#10;&#10;## Installation&#10;1. Clone the repository...&#10;&#10;[📸 Insert Screenshot here: Output of successful install]..."
                  class="form-input guide-textarea"
                  rows="16"
                  required></textarea>
                <span class="form-hint">Paste the AI generated text here. Leave the [📸 ...] markers so buyers know exactly where to reference your preview screenshots!</span>
              </div>

              <!-- Guide Preview -->
              <div class="guide-preview" *ngIf="project.deploymentGuide">
                <h4>📄 Preview</h4>
                <div class="preview-content">
                  <pre class="guide-rendered">{{ project.deploymentGuide }}</pre>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 5: Files & Submit -->
          <div class="form-step" *ngIf="currentStep() === 4">
            <div class="form-card">
              <h3>📁 Files & Media</h3>
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
                <label>Preview Screenshots</label>
                <div class="file-upload" (click)="screenshotInput.click()">
                  <input #screenshotInput type="file" accept="image/*" multiple hidden (change)="onScreenshotsSelect($event)" />
                  <div class="upload-content" *ngIf="screenshotNames.length === 0">
                    <span class="upload-icon">📸</span>
                    <strong>Upload preview screenshots</strong>
                    <span>PNG, JPG up to 5MB each</span>
                  </div>
                  <div class="upload-content selected" *ngIf="screenshotNames.length > 0">
                    <span class="upload-icon">✅</span>
                    <strong>{{ screenshotNames.length }} file(s) selected</strong>
                    <span>Click to add more</span>
                  </div>
                </div>
              </div>

              <div class="guidelines-box">
                <h4>📋 Before You Submit</h4>
                <ul>
                  <li>All submissions are reviewed by our team (2-3 business days)</li>
                  <li>Your deployment guide will be shown on the product page</li>
                  <li>Ensure your code is well-documented and tested</li>
                  <li>Remove any API keys or sensitive credentials</li>
                  <li>You can track your submission status in <a routerLink="/sell/dashboard">My Submissions</a></li>
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
            <button type="button" class="pm-btn pm-btn-primary" *ngIf="currentStep() < 4" (click)="nextStep()" [disabled]="!isStepValid() || isUploading()">
              Next Step →
            </button>
            <button type="submit" class="pm-btn pm-btn-success pm-btn-lg" *ngIf="currentStep() === 4" [disabled]="!isFormValid() || isUploading()">
              {{ isUploading() ? '🚀 Uploading...' : '🚀 Submit for Review' }}
            </button>
          </div>
        </form>
      </div>
    </ng-container>

    <app-footer></app-footer>
  `,
  styles: [`
    .auth-gate {
      display: flex; justify-content: center; align-items: center;
      min-height: 60vh; padding: 40px 20px;
    }
    .auth-card {
      text-align: center; padding: 64px 40px;
      background: var(--pm-surface); border-radius: var(--pm-radius-xl);
      border: 1px solid var(--pm-border-light); box-shadow: var(--pm-shadow-lg);
      max-width: 480px; width: 100%;
    }
    .auth-icon { font-size: 4rem; margin-bottom: 16px; }
    .auth-card h2 { margin: 0 0 12px; }
    .auth-card p { color: var(--pm-text-secondary); margin: 0 0 28px; }

    .sell-hero {
      background: linear-gradient(135deg, #F0FDF4, #ECFDF5, #EEF0FF);
      padding: 32px 0; border-bottom: 1px solid var(--pm-border-light);
    }
    .hero-row {
      display: flex; justify-content: space-between; align-items: center;
      flex-wrap: wrap; gap: 16px;
    }
    .sell-hero h1 { margin: 0 0 4px; }
    .sell-hero p { margin: 0; }
    .sell-layout { padding: 32px 0 64px; max-width: 800px; }

    /* Progress Steps */
    .progress-steps { display: flex; gap: 6px; margin-bottom: 32px; overflow-x: auto; }
    .step {
      flex: 1; min-width: 120px; display: flex; align-items: center; gap: 8px;
      padding: 12px 14px; background: var(--pm-surface);
      border-radius: var(--pm-radius-md); border: 2px solid var(--pm-border);
      cursor: pointer; transition: all 0.2s;
    }
    .step.active { border-color: var(--ion-color-primary); background: rgba(99,102,241,0.04); }
    .step.completed { border-color: #10B981; background: rgba(16,185,129,0.04); }
    .step-num {
      width: 28px; height: 28px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.8rem; font-weight: 700;
      background: var(--pm-surface-muted); color: var(--pm-text-muted); flex-shrink: 0;
    }
    .step.active .step-num { background: var(--ion-color-primary); color: white; }
    .step.completed .step-num { background: #10B981; color: white; }
    .step span { font-size: 0.78rem; font-weight: 600; color: var(--pm-text-secondary); }
    .step.active span { color: var(--ion-color-primary); }
    .step.completed span { color: #059669; }

    /* Form Card */
    .form-card {
      background: var(--pm-surface); border-radius: var(--pm-radius-lg);
      padding: 32px; border: 1px solid var(--pm-border-light);
      box-shadow: var(--pm-shadow-sm); margin-bottom: 24px;
    }
    .form-card h3 { margin: 0 0 24px; font-size: 1.2rem; }
    .section-desc { font-size: 0.9rem; color: var(--pm-text-secondary); margin: -16px 0 24px; line-height: 1.6; }

    .form-group { margin-bottom: 20px; }
    .form-group label {
      display: block; font-size: 0.85rem; font-weight: 600;
      color: var(--pm-text-primary); margin-bottom: 6px;
    }
    .form-input {
      width: 100%; padding: 12px 16px;
      border: 2px solid var(--pm-border); border-radius: var(--pm-radius-sm);
      font-family: inherit; font-size: 0.9rem;
      background: var(--pm-surface); color: var(--pm-text-primary);
      outline: none; transition: border-color 0.2s;
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
      position: absolute; left: 16px; top: 50%; transform: translateY(-50%);
      font-weight: 700; color: var(--pm-text-muted);
    }
    .price-field { padding-left: 32px; }

    .license-options { display: flex; gap: 12px; }
    .license-opt {
      flex: 1; display: flex; align-items: center; gap: 12px;
      padding: 16px; border: 2px solid var(--pm-border);
      border-radius: var(--pm-radius-md); cursor: pointer; transition: all 0.2s;
    }
    .license-opt.active { border-color: var(--ion-color-primary); background: rgba(99,102,241,0.03); }
    .license-opt input { accent-color: var(--ion-color-primary); }
    .license-opt-content strong { display: block; font-size: 0.85rem; }
    .license-opt-content span { font-size: 0.75rem; color: var(--pm-text-muted); }

    .tag-preview { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px; }
    .preview-tag {
      padding: 4px 10px; background: rgba(99,102,241,0.08);
      border-radius: var(--pm-radius-full); font-size: 0.75rem; color: #6366F1;
    }

    /* Deployment Guide Instructions */
    .guide-instructions {
      background: linear-gradient(135deg, rgba(99,102,241,0.04), rgba(16,185,129,0.04));
      border: 1px solid rgba(99,102,241,0.15);
      border-radius: var(--pm-radius-lg); padding: 24px; margin-bottom: 8px;
    }
    .guide-instructions-header {
      display: flex; align-items: center; gap: 12px; margin-bottom: 20px;
    }
    .gi-icon { font-size: 2rem; }
    .guide-instructions-header h4 { margin: 0; font-size: 1.1rem; }
    .guide-steps-list { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }
    .gi-step {
      display: flex; gap: 14px; align-items: flex-start;
    }
    .gi-num {
      width: 32px; height: 32px; border-radius: 50%;
      background: var(--ion-color-primary); color: white;
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 0.85rem; flex-shrink: 0;
    }
    .gi-step strong { display: block; font-size: 0.9rem; margin-bottom: 2px; }
    .gi-step p { margin: 0; font-size: 0.82rem; color: var(--pm-text-secondary); line-height: 1.5; }

    .prompt-box {
      background: var(--pm-surface); border: 1px solid var(--pm-border);
      border-radius: var(--pm-radius-md); overflow: hidden;
    }
    .prompt-header {
      display: flex; justify-content: space-between; align-items: center;
      padding: 10px 16px; background: var(--pm-surface-muted);
      border-bottom: 1px solid var(--pm-border-light);
      font-size: 0.8rem; font-weight: 600; color: var(--pm-text-secondary);
    }
    .copy-btn {
      padding: 4px 12px; border: 1px solid var(--pm-border);
      border-radius: var(--pm-radius-sm); background: var(--pm-surface);
      font-size: 0.78rem; font-weight: 600; cursor: pointer; transition: all 0.2s;
    }
    .copy-btn:hover { border-color: var(--ion-color-primary); color: var(--ion-color-primary); }
    .prompt-text {
      padding: 16px; margin: 0; font-size: 0.82rem; line-height: 1.6;
      color: var(--pm-text-secondary); white-space: pre-wrap; font-family: inherit;
    }

    .guide-textarea { font-family: 'Courier New', monospace; font-size: 0.85rem; line-height: 1.6; }

    .guide-preview {
      margin-top: 20px; background: var(--pm-surface-muted);
      border: 1px solid var(--pm-border-light); border-radius: var(--pm-radius-md);
      overflow: hidden;
    }
    .guide-preview h4 {
      margin: 0; padding: 12px 16px; font-size: 0.85rem;
      background: var(--pm-surface); border-bottom: 1px solid var(--pm-border-light);
    }
    .preview-content { padding: 16px; max-height: 300px; overflow-y: auto; }
    .guide-rendered {
      margin: 0; font-size: 0.82rem; line-height: 1.7;
      color: var(--pm-text-secondary); white-space: pre-wrap; font-family: inherit;
    }

    /* File Upload */
    .file-upload {
      border: 2px dashed var(--pm-border); border-radius: var(--pm-radius-md);
      padding: 32px; text-align: center; cursor: pointer; transition: all 0.2s;
    }
    .file-upload:hover { border-color: var(--ion-color-primary); background: rgba(99,102,241,0.02); }
    .upload-content { display: flex; flex-direction: column; align-items: center; gap: 6px; }
    .upload-icon { font-size: 2rem; }
    .upload-content strong { font-size: 0.875rem; color: var(--pm-text-primary); }
    .upload-content span { font-size: 0.75rem; color: var(--pm-text-muted); }
    .upload-content.selected { color: #10B981; }
    .upload-content.selected strong { color: #059669; }

    .guidelines-box {
      padding: 20px; background: rgba(16,185,129,0.05);
      border: 1px solid rgba(16,185,129,0.2); border-radius: var(--pm-radius-md); margin-top: 8px;
    }
    .guidelines-box h4 { margin: 0 0 10px; font-size: 0.9rem; }
    .guidelines-box ul { margin: 0; padding-left: 20px; }
    .guidelines-box li { font-size: 0.82rem; color: var(--pm-text-secondary); padding: 3px 0; }
    .guidelines-box a { color: var(--ion-color-primary); }

    /* Navigation */
    .form-navigation { display: flex; align-items: center; gap: 12px; }
    .nav-spacer { flex: 1; }

    /* Success */
    .success-card {
      text-align: center; padding: 64px 32px;
      background: var(--pm-surface); border-radius: var(--pm-radius-xl);
      border: 1px solid var(--pm-border-light); box-shadow: var(--pm-shadow-lg);
      max-width: 560px; margin: 48px auto; animation: scaleIn 0.4s ease;
    }
    .success-icon { font-size: 4rem; margin-bottom: 16px; }
    .success-card h2 { margin: 0 0 12px; }
    .success-card p { color: var(--pm-text-secondary); margin: 0 0 28px; line-height: 1.6; }
    .success-actions { display: flex; justify-content: center; gap: 12px; }

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }

    @media (max-width: 768px) {
      .progress-steps { gap: 4px; }
      .step { min-width: 90px; padding: 10px; }
      .step span { font-size: 0.7rem; }
      .form-row { flex-direction: column; gap: 0; }
      .license-options { flex-direction: column; }
      .form-card { padding: 20px; }
      .hero-row { flex-direction: column; align-items: flex-start; }
      .guide-instructions { padding: 16px; }
    }
  `],
})
export class SellComponent {
  marketplace = inject(MarketplaceService);
  auth = inject(AuthService);
  imageUpload = inject(ImageUploadService);
  private router = inject(Router);

  currentStep = signal(0);
  submitted = signal(false);
  isUploading = signal(false);
  promptCopied = false;

  steps = ['Basic Info', 'Pricing', 'Details', 'Deploy Guide', 'Files'];

  aiPromptTemplate = `Generate a comprehensive, beginner-friendly deployment guide for my project called "[YOUR PROJECT NAME]" built with [YOUR TECH STACK].

CRITICAL INSTRUCTIONS:
- Whenever a step is complex or visual, insert a placeholder marker exactly like this: [📸 Insert Screenshot here: Describe exactly what the screenshot should show]
- End the guide with a mandatory "Common Issues & Troubleshooting" section listing 3-5 possible errors buyers might face and exact fixes.

Include these sections:
1. Prerequisites (required software, versions, accounts)
2. Installation steps (clone, install dependencies) - use [📸] markers here
3. Environment variables setup (list all required env vars) - use [📸] markers here
4. Database setup (if applicable)
5. Running locally (dev server commands)
6. Building for production
7. Deployment instructions (hosting platforms)
8. Common Issues & Troubleshooting (minimum 3 issues with fixes)

Make it clear, step-by-step, and highly visual.`;

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
    deploymentGuide: '',
    youtubeUrl: '',
  };

  tagsInput = '';
  featuresInput = '';
  techStackInput = '';
  thumbnailName = '';
  screenshotNames: string[] = [];

  parseTags(): string[] {
    return this.tagsInput.split(',').map(t => t.trim()).filter(t => t.length > 0);
  }

  isStepValid(): boolean {
    switch (this.currentStep()) {
      case 0: return !!(this.project.title && this.project.shortDescription && this.project.category && this.project.version);
      case 1: return this.project.price > 0;
      case 2: return true;
      case 3: return !!(this.project.deploymentGuide && this.project.deploymentGuide.length > 50);
      default: return true;
    }
  }

  isFormValid(): boolean {
    return !!(
      this.project.title &&
      this.project.shortDescription &&
      this.project.category &&
      this.project.version &&
      this.project.price > 0 &&
      this.project.deploymentGuide &&
      this.project.deploymentGuide.length > 50
    );
  }

  nextStep() {
    if (this.currentStep() < 4) this.currentStep.update(v => v + 1);
  }

  prevStep() {
    if (this.currentStep() > 0) this.currentStep.update(v => v - 1);
  }

  goToStep(i: number) {
    if (i <= this.currentStep()) this.currentStep.set(i);
  }

  copyPrompt() {
    navigator.clipboard.writeText(this.aiPromptTemplate);
    this.promptCopied = true;
    setTimeout(() => this.promptCopied = false, 2000);
  }

  onThumbSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.thumbnailName = input.files[0].name;
      const reader = new FileReader();
      reader.onload = (e) => this.project.thumbnailData = e.target?.result as string;
      reader.readAsDataURL(input.files[0]);
    }
  }

  onScreenshotsSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      if (!this.project.previewData) this.project.previewData = [];
      Array.from(input.files).forEach(file => {
        this.screenshotNames.push(file.name);
        const reader = new FileReader();
        reader.onload = (e) => {
          this.project.previewData!.push(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      });
    }
  }

  async onSubmit() {
    this.isUploading.set(true);
    try {
      // Upload thumbnail
      if (this.project.thumbnailData && this.project.thumbnailData.startsWith('data:')) {
        this.project.thumbnailUrl = await this.imageUpload.upload(this.project.thumbnailData, 'products/thumbnails');
        delete this.project.thumbnailData;
      }

      // Upload screenshots
      if (this.project.previewData && this.project.previewData.length > 0) {
        if (!this.project.previewImages) this.project.previewImages = [];
        for (const img of this.project.previewData) {
          if (img.startsWith('data:')) {
            const url = await this.imageUpload.upload(img, 'products/screenshots');
            this.project.previewImages.push(url);
          } else {
            this.project.previewImages.push(img);
          }
        }
        delete this.project.previewData;
      }

      this.project.tags = this.parseTags();
      this.project.features = this.featuresInput.split('\n').filter(f => f.trim());
      this.project.techStack = this.techStackInput.split(',').map(t => t.trim()).filter(t => t);
      this.project.status = 'pending';

      // Attach seller info
      const user = this.auth.currentUser();
      const profile = this.auth.userProfile();
      if (user) {
        this.project.submittedBy = {
          uid: user.uid,
          displayName: profile?.displayName || user.displayName || 'Seller',
          email: user.email || '',
        };
      }

      const cleanedProject = this.marketplace.cleanForFirestore(this.project);
      await this.marketplace.submitProject(cleanedProject);
      this.submitted.set(true);
    } catch (error) {
      console.error('Error submitting:', error);
      alert('Failed to submit. Check console for details.');
    } finally {
      this.isUploading.set(false);
    }
  }

  resetForm() {
    this.submitted.set(false);
    this.currentStep.set(0);
    this.project = {
      title: '', shortDescription: '', fullDescription: '', category: '' as ProductCategory,
      price: 0, tags: [], features: [], techStack: [], compatibility: [],
      version: '', fileSize: '', license: 'regular', hasReskinService: false, status: 'pending',
      deploymentGuide: '', youtubeUrl: '',
    };
    this.tagsInput = '';
    this.featuresInput = '';
    this.techStackInput = '';
    this.thumbnailName = '';
    this.screenshotNames = [];
  }
}

import { Component, inject, OnInit, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { MarketplaceService } from '../../services/marketplace.service';
import { AuthService } from '../../services/auth.service';
import { GuideWidgetComponent } from '../../components/guide-widget/guide-widget.component';
import { SeoService } from '../../services/seo.service';
import { Product } from '../../models/marketplace.models';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HeaderComponent, FooterComponent, ProductCardComponent, GuideWidgetComponent],
  template: `
    <app-header></app-header>

    <div class="pm-container page-enter" *ngIf="product">
      <!-- Lightbox -->
      <div class="lightbox-overlay" *ngIf="maximizedImage" (click)="maximizedImage = null">
        <div class="lightbox-content" (click)="$event.stopPropagation()">
          <img [src]="maximizedImage" />
          <button class="lightbox-close" (click)="maximizedImage = null">&times;</button>
        </div>
      </div>

      <!-- Breadcrumb -->
      <nav class="breadcrumb">
        <a routerLink="/">Home</a>
        <span>/</span>
        <a routerLink="/browse">Browse</a>
        <span>/</span>
        <a routerLink="/browse" [queryParams]="{category: product.category}">{{ getCategoryLabel() }}</a>
        <span>/</span>
        <span class="current">{{ product.title }}</span>
      </nav>

      <div class="detail-layout">
        <!-- Left Column -->
        <div class="detail-main">
          <!-- Preview Card -->
          <div class="preview-card">
            <div class="preview-image"
              [style.background]="activePreviewIndex === -1 ? (product.thumbnailUrl ? 'none' : getGradient()) : 'none'"
              [style.backgroundImage]="activePreviewIndex === -1 && product.thumbnailUrl ? 'url(' + product.thumbnailUrl + ')' : activePreviewIndex >= 0 ? 'url(' + product.previewImages[activePreviewIndex] + ')' : 'none'"
              [style.backgroundSize]="'cover'" [style.backgroundPosition]="'center'">
              <ng-container *ngIf="activePreviewIndex === -1 && !product.thumbnailUrl">
                <span class="preview-icon">{{ getCategoryIcon() }}</span>
                <span class="preview-title">{{ product.title.split('—')[0] }}</span>
              </ng-container>
              <!-- Maximize Button -->
              <button class="maximize-btn" *ngIf="getRawPreviewUrl()" (click)="maximizedImage = getRawPreviewUrl()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
              </button>
            </div>
            <div class="preview-thumbnails">
              <div class="thumb-item" [class.active]="activePreviewIndex === -1"
                [style.background]="product.thumbnailUrl ? 'none' : getGradient()"
                [style.backgroundImage]="product.thumbnailUrl ? 'url(' + product.thumbnailUrl + ')' : 'none'"
                [style.backgroundSize]="'cover'" [style.backgroundPosition]="'center'" (click)="activePreviewIndex = -1"></div>
              <div class="thumb-item" *ngFor="let img of product.previewImages; let i = index" [class.active]="activePreviewIndex === i" [style.backgroundImage]="'url(' + img + ')'" [style.backgroundSize]="'cover'" [style.backgroundPosition]="'center'" (click)="activePreviewIndex = i"></div>
            </div>
            
            <a *ngIf="product.demoUrl" [href]="product.demoUrl" target="_blank" class="pm-btn pm-btn-outline pm-btn-lg" style="margin: 16px; margin-top: 0; text-align: center; display: flex; justify-content: center; align-items: center; gap: 8px; border-color: rgba(99,102,241,0.2);">
               🌐 Live Demo
            </a>
          </div>

          <!-- Tabs & Guide Section -->
          <div class="tabs-layout">
            <div class="tabs-main">
              <!-- Tabs -->
              <div class="detail-tabs">
                <button *ngFor="let tab of tabs" 
                        class="tab-btn" 
                        [class.active]="activeTab === tab.id"
                        (click)="activeTab = tab.id">
                  {{ tab.label }}
                </button>
              </div>

          <!-- Description Tab -->
          <div class="tab-content" *ngIf="activeTab === 'description'">
            <div class="desc-card">
              <!-- YouTube Video Section -->
              <div *ngIf="safeYoutubeUrl" style="margin-bottom: 24px;">
                <h2 style="margin-top:0">Video Overview</h2>
                <div class="video-container">
                  <iframe [src]="safeYoutubeUrl" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>

              <h2>Overview</h2>
              <p>{{ product.shortDescription }}</p>

              <h2>Key Features</h2>
              <div class="features-grid">
                <div class="feature-item" *ngFor="let f of product.features">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                  {{ f }}
                </div>
              </div>

              <h2>Tech Stack</h2>
              <div class="tags-row">
                <span class="tech-tag" *ngFor="let t of product.techStack">{{ t }}</span>
              </div>

              <h2>Compatibility</h2>
              <div class="tags-row">
                <span class="compat-tag" *ngFor="let c of product.compatibility">{{ c }}</span>
              </div>

              <h2>Support</h2>
              <p>Includes 6 months of premium support and lifetime updates. Our team responds within 24 hours.</p>
            </div>
          </div>

          <!-- Reviews Tab -->
          <div class="tab-content" *ngIf="activeTab === 'reviews'">
            <div class="reviews-summary">
              <div class="rating-big">
                <span class="rating-number">{{ product.rating }}</span>
                <div class="rating-stars">
                  <span *ngFor="let s of getStars(product.rating)" [class]="s"></span>
                </div>
                <span class="rating-total">{{ product.totalRatings | number }} ratings</span>
              </div>
              <div class="rating-bars">
                <div class="bar-row" *ngFor="let bar of ratingBars">
                  <span class="bar-label">{{ bar.stars }}★</span>
                  <div class="bar-track"><div class="bar-fill" [style.width.%]="bar.pct"></div></div>
                  <span class="bar-count">{{ bar.count }}</span>
                </div>
              </div>
            </div>

            <!-- Review notice -->
            <div class="purchase-notice">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              <span>Only verified buyers can leave reviews after purchase.</span>
            </div>

            <!-- Review List -->
            <div class="review-list" *ngFor="let review of product.reviews">
              <div class="review-card">
                <div class="review-header">
                  <div class="review-user">
                    <div class="review-avatar" [style.background]="getReviewColor(review.userName)">{{ review.userName.charAt(0) }}</div>
                    <div>
                      <strong>{{ review.userName }}</strong>
                      <span class="verified" *ngIf="review.verified">✓ Verified Purchase</span>
                    </div>
                  </div>
                  <div class="review-meta">
                    <div class="review-stars">
                      <span *ngFor="let s of getStars(review.rating)" [class]="s" style="font-size:12px"></span>
                    </div>
                    <span class="review-date">{{ review.date | date:'mediumDate' }}</span>
                  </div>
                </div>
                <p class="review-comment">{{ review.comment }}</p>
                <div class="review-actions">
                  <button class="pm-btn pm-btn-ghost pm-btn-sm">👍 Helpful ({{ review.helpful }})</button>
                </div>
              </div>
            </div>

            <div class="empty-reviews" *ngIf="product.reviews.length === 0">
              <p>No reviews yet. Be the first buyer to leave a review!</p>
            </div>
          </div>

          <!-- Comments Tab -->
          <div class="tab-content" *ngIf="activeTab === 'comments'">
            <div class="write-review">
              <h3>💬 Leave a Comment</h3>
              <textarea placeholder="Ask a question or share your thoughts..." [(ngModel)]="newCommentText" class="filter-input" rows="3"></textarea>
              <button class="pm-btn pm-btn-primary pm-btn-sm" (click)="submitComment()" [disabled]="!newCommentText">
                Post Comment
              </button>
            </div>

            <div class="comments-list">
              <div class="comment-card" *ngFor="let c of comments">
                <div class="review-header">
                  <div class="review-user">
                    <div class="review-avatar" [style.background]="getReviewColor(c.userName)">{{ c.userName.charAt(0) }}</div>
                    <div>
                      <strong>{{ c.userName }}</strong>
                    </div>
                  </div>
                  <span class="review-date">{{ c.date | date:'mediumDate' }}</span>
                </div>
                <p class="review-comment">{{ c.text }}</p>
              </div>
            </div>

            <div class="empty-reviews" *ngIf="comments.length === 0">
              <p>No comments yet. Start the conversation!</p>
            </div>
          </div>
        </div>

        <app-guide-widget></app-guide-widget>
      </div>
    </div>

        <!-- Right Sidebar -->
        <aside class="detail-sidebar">
          <!-- Purchase Card -->
          <div class="purchase-card">
            <div class="price-section">
              <span class="pm-price" style="font-size: 2rem">\${{ product.price }}</span>
              <span class="pm-price-original" *ngIf="product.originalPrice">\${{ product.originalPrice }}</span>
              <span class="pm-price-discount" *ngIf="product.discountPercent">-{{ product.discountPercent }}%</span>
            </div>

            <!-- License Selection -->
            <div class="license-select">
              <label class="license-option" [class.active]="selectedLicense === 'regular'" (click)="selectedLicense = 'regular'">
                <input type="radio" name="license" value="regular" [checked]="selectedLicense === 'regular'" />
                <div>
                  <strong>Regular License</strong>
                  <span>Use in a single end product</span>
                </div>
                <span class="license-price">\${{ product.price }}</span>
              </label>
              <label class="license-option" [class.active]="selectedLicense === 'extended'" (click)="selectedLicense = 'extended'">
                <input type="radio" name="license" value="extended" [checked]="selectedLicense === 'extended'" />
                <div>
                  <strong>Extended License</strong>
                  <span>Use in unlimited projects</span>
                </div>
                <span class="license-price">\${{ product.price * 3 }}</span>
              </label>
            </div>

            <!-- Reskin Option -->
            <div class="reskin-option" *ngIf="product.hasReskinService">
              <label class="reskin-check">
                <input type="checkbox" [(ngModel)]="addReskin" />
                <div>
                  <strong>🎨 Add Reskin Service</strong>
                  <span>Professional rebranding (+\${{ product.reskinPrice }})</span>
                </div>
              </label>
            </div>

            <button class="pm-btn pm-btn-success pm-btn-lg" style="width:100%; margin-top: 8px"
                    (click)="addToCart()"
                    [class.added]="isInCart">
              {{ isInCart ? '✓ Added to Cart' : '🛒 Add to Cart' }}
            </button>

            <a routerLink="/cart" class="pm-btn pm-btn-outline pm-btn-lg" style="width:100%; margin-top: 8px; text-align: center"
               *ngIf="isInCart">
              View Cart →
            </a>

            <div class="purchase-meta">
              <div class="meta-row"><span>💰 Sales</span><strong>{{ product.totalSales | number }}</strong></div>
              <div class="meta-row"><span>👁️ Views</span><strong>{{ product.totalVisits | number }}</strong></div>
              <div class="meta-row"><span>📅 Last Updated</span><strong>{{ product.lastUpdated | date:'mediumDate' }}</strong></div>
              <div class="meta-row"><span>📦 Version</span><strong>{{ product.version }}</strong></div>
              <div class="meta-row"><span>📁 File Size</span><strong>{{ product.fileSize }}</strong></div>
            </div>
          </div>

          <!-- Author Card -->
          <div class="author-card">
            <div class="author-header">
              <div class="author-av" [style.background]="'linear-gradient(135deg, #6366F1, #A855F7)'">
                {{ product.author.name.charAt(0) }}
              </div>
              <div>
                <strong>{{ product.author.name }}</strong>
                <span class="author-verified" *ngIf="product.author.verified">✓ Verified Author</span>
              </div>
            </div>
            <p class="author-bio">{{ product.author.bio }}</p>
            <div class="author-stats">
              <div><strong>{{ product.author.totalSales | number }}</strong><span>Sales</span></div>
              <div><strong>{{ product.author.rating }}</strong><span>Rating</span></div>
              <div><strong>{{ product.author.badges.length }}</strong><span>Badges</span></div>
            </div>
            <div class="author-badges">
              <span class="a-badge" *ngFor="let b of product.author.badges">{{ getBadgeIcon(b) }} {{ formatBadge(b) }}</span>
            </div>
          </div>

          <!-- Tags -->
          <div class="tags-card">
            <h4>Tags</h4>
            <div class="tags-wrap">
              <a *ngFor="let tag of product.tags" routerLink="/browse" [queryParams]="{q: tag}" class="tag-link">{{ tag }}</a>
            </div>
          </div>
        </aside>
      </div>

      <!-- Related Products -->
      <section class="pm-section">
        <h2 class="pm-heading-lg" style="margin-bottom: 24px">Related Products</h2>
        <div class="related-grid">
          <app-product-card *ngFor="let p of relatedProducts" [product]="p"></app-product-card>
        </div>
      </section>
    </div>

    <app-footer></app-footer>
  `,
  styles: [`
    /* Page transition */
    .page-enter {
      animation: pageEnter 0.4s ease-out;
    }
    @keyframes pageEnter {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .breadcrumb {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 20px 0;
      font-size: 0.8rem;
      color: var(--pm-text-muted);
      flex-wrap: wrap;
    }
    .breadcrumb a { color: var(--pm-text-secondary); text-decoration: none; }
    .breadcrumb a:hover { color: var(--ion-color-primary); }
    .breadcrumb .current { color: var(--pm-text-primary); font-weight: 500; }

    .detail-layout {
      display: flex;
      gap: 32px;
      padding-bottom: 32px;
    }
    .detail-main { flex: 1; min-width: 0; }
    .detail-sidebar { width: 360px; flex-shrink: 0; }

    .tabs-layout {
      display: flex;
      gap: 0;
      align-items: flex-start;
    }
    .tabs-main {
      flex: 1;
      min-width: 0;
    }

    /* Preview */
    .preview-card {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      overflow: hidden;
      box-shadow: var(--pm-shadow-card);
      margin-bottom: 24px;
    }
    .preview-image {
      height: 360px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 12px;
      position: relative;
    }
    .maximize-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      background: rgba(0,0,0,0.5);
      border: none;
      border-radius: 8px;
      color: white;
      padding: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background var(--pm-transition-fast);
      backdrop-filter: blur(4px);
    }
    .maximize-btn:hover { background: rgba(0,0,0,0.8); }

    .lightbox-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.9);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .lightbox-content {
      position: relative;
      max-width: 90vw;
      max-height: 90vh;
    }
    .lightbox-content img {
      max-width: 100%;
      max-height: 90vh;
      object-fit: contain;
      border-radius: 8px;
    }
    .lightbox-close {
      position: absolute;
      top: -40px; right: 0px;
      background: none;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;
    }

    .video-container {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
      height: 0;
      border-radius: var(--pm-radius-lg);
      overflow: hidden;
      box-shadow: var(--pm-shadow-sm);
    }
    .video-container iframe {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
    }

    .preview-icon { font-size: 4rem; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.2)); }
    .preview-title {
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      background: rgba(0,0,0,0.2);
      padding: 6px 20px;
      border-radius: var(--pm-radius-full);
      backdrop-filter: blur(4px);
    }
    .preview-thumbnails {
      display: flex;
      gap: 8px;
      padding: 12px;
    }
    .thumb-item {
      width: 64px;
      height: 48px;
      border-radius: var(--pm-radius-sm);
      cursor: pointer;
      border: 2px solid transparent;
      transition: all var(--pm-transition-fast);
    }
    .thumb-item.active { border-color: var(--ion-color-primary); }
    .thumb-item:hover { opacity: 0.8; }

    /* Tabs */
    .detail-tabs {
      display: flex;
      gap: 4px;
      margin-bottom: 24px;
      background: var(--pm-surface-muted);
      border-radius: var(--pm-radius-md);
      padding: 4px;
    }
    .tab-btn {
      flex: 1;
      padding: 12px 16px;
      border: none;
      background: transparent;
      font-family: inherit;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--pm-text-secondary);
      cursor: pointer;
      border-radius: var(--pm-radius-sm);
      transition: all var(--pm-transition-fast);
    }
    .tab-btn.active {
      background: var(--pm-surface);
      color: var(--ion-color-primary);
      box-shadow: var(--pm-shadow-sm);
    }

    .desc-card {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      padding: 32px;
      border: 1px solid var(--pm-border-light);
    }
    .desc-card h2 { font-size: 1.2rem; margin: 24px 0 12px; }
    .desc-card h2:first-child { margin-top: 0; }
    .desc-card p { color: var(--pm-text-secondary); line-height: 1.6; }

    .features-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .feature-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.875rem;
      color: var(--pm-text-secondary);
      padding: 8px 12px;
      background: var(--pm-surface-muted);
      border-radius: var(--pm-radius-sm);
    }

    .tags-row { display: flex; flex-wrap: wrap; gap: 6px; }
    .tech-tag, .compat-tag {
      padding: 6px 14px;
      border-radius: var(--pm-radius-full);
      font-size: 0.78rem;
      font-weight: 500;
    }
    .tech-tag { background: rgba(99,102,241,0.08); color: #6366F1; }
    .compat-tag { background: rgba(16,185,129,0.08); color: #059669; }

    /* Reviews */
    .reviews-summary {
      display: flex;
      gap: 32px;
      padding: 24px;
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      border: 1px solid var(--pm-border-light);
      margin-bottom: 24px;
    }
    .rating-big { text-align: center; padding: 16px 32px; }
    .rating-number { font-size: 3rem; font-weight: 800; color: var(--pm-text-primary); display: block; }
    .rating-stars { font-size: 1.1rem; color: #F59E0B; margin: 4px 0; display: flex; gap: 2px; justify-content: center; }
    .rating-total { font-size: 0.8rem; color: var(--pm-text-muted); }
    .rating-bars { flex: 1; display: flex; flex-direction: column; gap: 8px; justify-content: center; }
    .bar-row { display: flex; align-items: center; gap: 8px; }
    .bar-label { font-size: 0.78rem; color: var(--pm-text-muted); width: 24px; }
    .bar-track { flex: 1; height: 8px; background: var(--pm-surface-muted); border-radius: 4px; overflow: hidden; }
    .bar-fill { height: 100%; background: #F59E0B; border-radius: 4px; transition: width 0.5s ease; }
    .bar-count { font-size: 0.78rem; color: var(--pm-text-muted); width: 32px; text-align: right; }

    .write-review {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      padding: 24px;
      border: 1px solid var(--pm-border-light);
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .write-review h3 { margin: 0; font-size: 1rem; }
    textarea.filter-input { resize: vertical; min-height: 80px; }

    .purchase-notice {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 20px;
      background: rgba(99,102,241,0.06);
      border: 1px solid rgba(99,102,241,0.15);
      border-radius: var(--pm-radius-md);
      margin-bottom: 20px;
      font-size: 0.85rem;
      color: var(--pm-text-secondary);
    }
    .empty-reviews {
      text-align: center;
      padding: 40px 20px;
      color: var(--pm-text-muted);
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      border: 1px solid var(--pm-border-light);
    }
    .comment-card {
      background: var(--pm-surface);
      padding: 20px;
      border-radius: var(--pm-radius-md);
      border: 1px solid var(--pm-border-light);
      margin-bottom: 12px;
    }

    .review-card {
      background: var(--pm-surface);
      padding: 20px;
      border-radius: var(--pm-radius-md);
      border: 1px solid var(--pm-border-light);
      margin-bottom: 12px;
    }
    .review-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; }
    .review-user { display: flex; align-items: center; gap: 10px; }
    .review-avatar {
      width: 36px; height: 36px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: white; font-weight: 700; font-size: 0.8rem;
    }
    .review-user strong { display: block; font-size: 0.875rem; }
    .verified { font-size: 0.7rem; color: #10B981; font-weight: 500; }
    .review-meta { text-align: right; }
    .review-stars { display: flex; gap: 1px; justify-content: flex-end; }
    .review-date { font-size: 0.75rem; color: var(--pm-text-muted); }
    .review-comment { font-size: 0.875rem; color: var(--pm-text-secondary); line-height: 1.6; margin: 0 0 8px; }

    /* Sidebar Cards */
    .purchase-card, .author-card, .tags-card {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      padding: 24px;
      border: 1px solid var(--pm-border-light);
      box-shadow: var(--pm-shadow-card);
      margin-bottom: 16px;
    }

    .price-section {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }

    .license-select { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }
    .license-option {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border: 2px solid var(--pm-border);
      border-radius: var(--pm-radius-md);
      cursor: pointer;
      transition: all var(--pm-transition-fast);
    }
    .license-option.active { border-color: var(--ion-color-primary); background: rgba(99,102,241,0.03); }
    .license-option input { accent-color: var(--ion-color-primary); }
    .license-option div { flex: 1; }
    .license-option strong { display: block; font-size: 0.85rem; }
    .license-option span { font-size: 0.75rem; color: var(--pm-text-muted); }
    .license-price { font-weight: 800; font-size: 1rem; color: var(--pm-text-primary); }

    .reskin-option { margin-bottom: 4px; }
    .reskin-check {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: linear-gradient(135deg, rgba(99,102,241,0.04), rgba(168,85,247,0.06));
      border: 1px solid rgba(99,102,241,0.15);
      border-radius: var(--pm-radius-md);
      cursor: pointer;
    }
    .reskin-check input { accent-color: var(--ion-color-primary); }
    .reskin-check strong { display: block; font-size: 0.85rem; }
    .reskin-check span { font-size: 0.75rem; color: var(--pm-text-muted); }

    .pm-btn.added { background: #10B981; box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35); }

    .purchase-meta {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid var(--pm-border-light);
    }
    .meta-row {
      display: flex;
      justify-content: space-between;
      padding: 7px 0;
      font-size: 0.8rem;
    }
    .meta-row span { color: var(--pm-text-muted); }
    .meta-row strong { color: var(--pm-text-primary); }

    .author-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
    .author-av {
      width: 44px; height: 44px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: white; font-weight: 700; font-size: 1.1rem;
    }
    .author-header strong { display: block; font-size: 0.9rem; }
    .author-verified { font-size: 0.7rem; color: #10B981; }
    .author-bio { font-size: 0.8rem; color: var(--pm-text-secondary); line-height: 1.5; margin: 0 0 16px; }
    .author-stats {
      display: flex;
      gap: 16px;
      padding: 12px 0;
      border-top: 1px solid var(--pm-border-light);
      border-bottom: 1px solid var(--pm-border-light);
      margin-bottom: 12px;
    }
    .author-stats > div { text-align: center; flex: 1; }
    .author-stats strong { display: block; font-size: 1rem; color: var(--pm-text-primary); }
    .author-stats span { font-size: 0.7rem; color: var(--pm-text-muted); }
    .author-badges { display: flex; flex-wrap: wrap; gap: 6px; }
    .a-badge {
      padding: 4px 10px;
      background: rgba(99,102,241,0.08);
      border-radius: var(--pm-radius-full);
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--ion-color-primary);
    }

    .tags-card h4 { margin: 0 0 12px; font-size: 0.9rem; }
    .tags-wrap { display: flex; flex-wrap: wrap; gap: 6px; }
    .tag-link {
      padding: 4px 12px;
      background: var(--pm-surface-muted);
      border-radius: var(--pm-radius-full);
      font-size: 0.78rem;
      color: var(--pm-text-secondary);
      text-decoration: none;
      transition: all var(--pm-transition-fast);
    }
    .tag-link:hover { background: rgba(99,102,241,0.08); color: var(--ion-color-primary); }

    .related-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    @media (max-width: 1024px) {
      .detail-layout { flex-direction: column; }
      .detail-sidebar { width: 100%; }
      .related-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .features-grid { grid-template-columns: 1fr; }
      .reviews-summary { flex-direction: column; }
      .related-grid { grid-template-columns: 1fr; }
    }
  `],
})
export class ProductDetailComponent implements OnInit {
  marketplace = inject(MarketplaceService);
  auth = inject(AuthService);
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);
  private sanitizer = inject(DomSanitizer);

  product?: Product;
  relatedProducts: Product[] = [];
  activeTab = 'description';
  selectedLicense: 'regular' | 'extended' = 'regular';
  addReskin = false;
  isInCart = false;
  activePreviewIndex = -1;

  maximizedImage: string | null = null;
  safeYoutubeUrl?: SafeResourceUrl;

  newCommentText = '';
  comments: Array<{userName: string; text: string; date: Date}> = [];

  tabs = [
    { id: 'description', label: '📝 Description' },
    { id: 'reviews', label: '⭐ Reviews' },
    { id: 'comments', label: '💬 Comments' }
  ];

  ratingBars = [
    { stars: 5, pct: 72, count: 245 },
    { stars: 4, pct: 18, count: 61 },
    { stars: 3, pct: 6, count: 20 },
    { stars: 2, pct: 3, count: 10 },
    { stars: 1, pct: 1, count: 6 },
  ];

  private gradientMap: Record<string, string> = {
    'saas-boilerplates': 'linear-gradient(135deg, #10B981, #34D399)',
    'b2b-systems': 'linear-gradient(135deg, #3B82F6, #60A5FA)',
    'super-apps': 'linear-gradient(135deg, #F97316, #FB923C)',
    'edtech-lms': 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
    'pvp-games': 'linear-gradient(135deg, #EF4444, #F87171)',
  };
  private categoryLabels: Record<string, string> = {
    'saas-boilerplates': 'SaaS Boilerplates', 'b2b-systems': 'B2B Systems', 'super-apps': 'Super Apps',
    'edtech-lms': 'EdTech LMS', 'pvp-games': 'PvP Games'
  };
  private categoryIcons: Record<string, string> = {
    'saas-boilerplates': '🚀', 'b2b-systems': '🏢', 'super-apps': '📱', 'edtech-lms': '🎓', 'pvp-games': '🎮'
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.product = this.marketplace.getProductById(id);
      if (this.product) {
        // Unique view tracking (once per session per product)
        this.marketplace.trackUniqueVisit(id);

        this.relatedProducts = this.marketplace.getRelatedProducts(this.product);
        this.isInCart = this.marketplace.isInCart(id);
        this.ratingBars = this.computeRatingBars();

        // Load comments
        this.marketplace.getComments(id).then(c => this.comments = c);

        // SEO: Dynamic meta tags + Product schema
        this.seo.updateTitle(this.product.title);
        this.seo.updateDescription(this.product.shortDescription);
        this.seo.updateImage(this.product.thumbnailUrl);
        this.seo.setProductSchema({
          name: this.product.title,
          description: this.product.shortDescription,
          price: this.product.price,
          image: this.product.thumbnailUrl,
          url: `https://selljustcode.com/product/${this.product.id}`,
          rating: this.product.rating,
          ratingCount: this.product.totalRatings,
          seller: this.product.author?.name,
          category: this.product.category,
        });

        // Set safe youtube URL
        if (this.product.youtubeUrl) {
          let embedUrl = this.product.youtubeUrl;
          if (embedUrl.includes('watch?v=')) {
            embedUrl = embedUrl.replace('watch?v=', 'embed/');
          }
          this.safeYoutubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
        }
      }
    });
  }

  getRawPreviewUrl(): string | null {
    if (!this.product) return null;
    if (this.activePreviewIndex === -1) {
      return this.product.thumbnailUrl || null;
    }
    return this.product.previewImages[this.activePreviewIndex] || null;
  }

  getGradient(): string {
    return this.gradientMap[this.product?.category || ''] || 'linear-gradient(135deg, #6366F1, #A855F7)';
  }
  getCategoryLabel(): string { return this.categoryLabels[this.product?.category || ''] || ''; }
  getCategoryIcon(): string { return this.categoryIcons[this.product?.category || ''] || '📦'; }

  getStars(rating: number): string[] {
    const stars: string[] = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    for (let i = 0; i < full; i++) stars.push('pm-star-filled');
    if (half) stars.push('pm-star-half');
    while (stars.length < 5) stars.push('pm-star-empty');
    return stars;
  }

  getReviewColor(name: string): string {
    const colors = ['#6366F1', '#EC4899', '#10B981', '#F97316', '#3B82F6'];
    return colors[name.length % colors.length];
  }

  getBadgeIcon(b: string): string {
    const icons: Record<string, string> = { 'power-elite': '👑', 'top-seller': '🏆', 'trending': '📈', 'exclusive': '💎' };
    return icons[b] || '🏅';
  }

  formatBadge(b: string): string {
    return b.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }

  addToCart() {
    if (!this.product) return;
    this.marketplace.addToCart(this.product, this.selectedLicense, this.addReskin);
    this.isInCart = true;
  }

  async submitComment() {
    if (!this.product || !this.newCommentText) return;
    const user = this.auth.userProfile();
    const comment = {
      userName: user?.displayName || 'Anonymous',
      text: this.newCommentText,
      date: new Date(),
    };
    await this.marketplace.addComment(this.product.id, comment);
    this.comments = [comment, ...this.comments];
    this.newCommentText = '';
  }

  private computeRatingBars() {
    if (!this.product) return this.ratingBars;
    const reviews = this.product.reviews;
    const total = reviews.length || 1;
    return [5, 4, 3, 2, 1].map(stars => {
      const count = reviews.filter(r => Math.floor(r.rating) === stars).length;
      return { stars, pct: (count / total) * 100, count };
    });
  }
}

import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { MarketplaceService } from '../../services/marketplace.service';
import { Product } from '../../models/marketplace.models';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HeaderComponent, FooterComponent, ProductCardComponent],
  template: `
    <app-header></app-header>

    <div class="pm-container" *ngIf="product">
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
            <div class="preview-image" [style.background]="activePreviewIndex === -1 ? getGradient() : 'none'" [style.backgroundImage]="activePreviewIndex === -1 && product.thumbnailUrl && !product.thumbnailUrl.startsWith('http') ? 'url(' + product.thumbnailUrl + ')' : activePreviewIndex >= 0 ? 'url(' + product.previewImages[activePreviewIndex] + ')' : 'none'" [style.backgroundSize]="'cover'" [style.backgroundPosition]="'center'">
              <ng-container *ngIf="activePreviewIndex === -1 && (!product.thumbnailUrl || product.thumbnailUrl.startsWith('http'))">
                <span class="preview-icon">{{ getCategoryIcon() }}</span>
                <span class="preview-title">{{ product.title.split('—')[0] }}</span>
              </ng-container>
            </div>
            <div class="preview-thumbnails">
              <div class="thumb-item" [class.active]="activePreviewIndex === -1" [style.background]="getGradient()" [style.backgroundImage]="product.thumbnailUrl && !product.thumbnailUrl.startsWith('http') ? 'url(' + product.thumbnailUrl + ')' : 'none'" [style.backgroundSize]="'cover'" [style.backgroundPosition]="'center'" (click)="activePreviewIndex = -1"></div>
              <div class="thumb-item" *ngFor="let img of product.previewImages; let i = index" [class.active]="activePreviewIndex === i" [style.backgroundImage]="'url(' + img + ')'" [style.backgroundSize]="'cover'" [style.backgroundPosition]="'center'" (click)="activePreviewIndex = i"></div>
            </div>
          </div>

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

            <!-- Write Review -->
            <div class="write-review">
              <h3>Write a Review</h3>
              <div class="review-rating-select">
                <span *ngFor="let s of [1,2,3,4,5]"
                      class="selectable-star"
                      [class.filled]="newReviewRating >= s"
                      (click)="newReviewRating = s">★</span>
              </div>
              <input type="text" placeholder="Review title..." [(ngModel)]="newReviewTitle" class="filter-input" />
              <textarea placeholder="Write your review..." [(ngModel)]="newReviewComment" class="filter-input" rows="3"></textarea>
              <button class="pm-btn pm-btn-primary pm-btn-sm" (click)="submitReview()" [disabled]="!newReviewComment">Submit Review</button>
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
          </div>

          <!-- Changelog Tab -->
          <div class="tab-content" *ngIf="activeTab === 'changelog'">
            <div class="desc-card">
              <h2>Version History</h2>
              <div class="changelog-item">
                <div class="cl-version">v{{ product.version }}</div>
                <div class="cl-date">{{ product.lastUpdated | date:'mediumDate' }}</div>
                <ul>
                  <li>Performance improvements and bug fixes</li>
                  <li>Updated dependencies to latest versions</li>
                  <li>Added new UI components</li>
                  <li>Improved documentation</li>
                </ul>
              </div>
            </div>
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

            <a *ngIf="product.demoUrl" [href]="product.demoUrl" target="_blank" class="pm-btn pm-btn-outline pm-btn-lg" style="width:100%; margin-top: 16px; margin-bottom: 8px; text-align: center; display: flex; justify-content: center; align-items: center; gap: 8px;">
               🌐 Live Demo
            </a>

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
    .review-rating-select { display: flex; gap: 4px; }
    .selectable-star {
      font-size: 1.5rem;
      color: #CBD5E1;
      cursor: pointer;
      transition: color var(--pm-transition-fast);
    }
    .selectable-star.filled { color: #F59E0B; }
    .selectable-star:hover { color: #F59E0B; }
    textarea.filter-input { resize: vertical; min-height: 80px; }

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

    .changelog-item {
      padding: 16px;
      background: var(--pm-surface-muted);
      border-radius: var(--pm-radius-md);
      border-left: 3px solid var(--ion-color-primary);
    }
    .cl-version { font-weight: 700; color: var(--ion-color-primary); }
    .cl-date { font-size: 0.78rem; color: var(--pm-text-muted); margin-bottom: 8px; }
    .changelog-item ul { margin: 0; padding-left: 20px; }
    .changelog-item li { font-size: 0.85rem; color: var(--pm-text-secondary); padding: 3px 0; }

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
  private route = inject(ActivatedRoute);

  product?: Product;
  relatedProducts: Product[] = [];
  activeTab = 'description';
  selectedLicense: 'regular' | 'extended' = 'regular';
  addReskin = false;
  isInCart = false;
  activePreviewIndex = -1;

  newReviewRating = 5;
  newReviewTitle = '';
  newReviewComment = '';

  tabs = [
    { id: 'description', label: '📝 Description' },
    { id: 'reviews', label: '⭐ Reviews' },
    { id: 'changelog', label: '📋 Changelog' },
  ];

  ratingBars = [
    { stars: 5, pct: 72, count: 245 },
    { stars: 4, pct: 18, count: 61 },
    { stars: 3, pct: 6, count: 20 },
    { stars: 2, pct: 3, count: 10 },
    { stars: 1, pct: 1, count: 6 },
  ];

  private gradientMap: Record<string, string> = {
    'mobile-apps': 'linear-gradient(135deg, #F97316, #FB923C)',
    'web-templates': 'linear-gradient(135deg, #3B82F6, #60A5FA)',
    'wordpress': 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
    'javascript': 'linear-gradient(135deg, #EAB308, #FDE047)',
    'ui-kits': 'linear-gradient(135deg, #EC4899, #F472B6)',
    'full-stack': 'linear-gradient(135deg, #10B981, #34D399)',
    'plugins': 'linear-gradient(135deg, #06B6D4, #22D3EE)',
    'themes': 'linear-gradient(135deg, #F43F5E, #FB7185)',
  };
  private categoryLabels: Record<string, string> = {
    'mobile-apps': 'Mobile Apps', 'web-templates': 'Web Templates', 'wordpress': 'WordPress',
    'javascript': 'JavaScript', 'ui-kits': 'UI Kits', 'full-stack': 'Full Stack',
  };
  private categoryIcons: Record<string, string> = {
    'mobile-apps': '📱', 'web-templates': '🌐', 'wordpress': '🔧', 'javascript': '⚡',
    'ui-kits': '🎨', 'full-stack': '🚀', 'plugins': '🧩', 'themes': '✨',
  };

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.product = this.marketplace.getProductById(id);
      if (this.product) {
        this.marketplace.incrementVisit(id);
        this.relatedProducts = this.marketplace.getRelatedProducts(this.product);
        this.isInCart = this.marketplace.isInCart(id);
        this.ratingBars = this.computeRatingBars();
      }
    });
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

  submitReview() {
    if (!this.product || !this.newReviewComment) return;
    this.marketplace.addReview(this.product.id, {
      userId: 'guest',
      userName: 'Guest User',
      userAvatar: '',
      rating: this.newReviewRating,
      title: this.newReviewTitle || 'Review',
      comment: this.newReviewComment,
      verified: false,
    });
    this.newReviewTitle = '';
    this.newReviewComment = '';
    this.newReviewRating = 5;
    this.product = this.marketplace.getProductById(this.product.id);
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

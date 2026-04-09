import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/marketplace.models';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a [routerLink]="['/product', product.id]" class="product-card">
      <!-- Thumbnail -->
      <div class="card-thumb"
        [style.background]="product.thumbnailUrl ? 'none' : getGradient()"
        [style.backgroundImage]="product.thumbnailUrl ? 'url(' + product.thumbnailUrl + ')' : 'none'"
        [style.backgroundSize]="'cover'" [style.backgroundPosition]="'center'">
        <div class="thumb-overlay" *ngIf="!product.thumbnailUrl">
          <span class="thumb-icon">{{ getCategoryIcon() }}</span>
          <span class="thumb-title">{{ product.title.split('—')[0] }}</span>
        </div>
        <div class="card-badges">
          <span class="pm-badge pm-badge-featured" *ngIf="product.isFeatured">🔥 Featured</span>
          <span class="pm-badge pm-badge-success" *ngIf="product.isNew">✨ New</span>
          <span class="pm-badge pm-badge-warning" *ngIf="product.isBestseller && !product.isFeatured">🏆 Bestseller</span>
        </div>
        <div class="card-discount" *ngIf="product.discountPercent">
          -{{ product.discountPercent }}%
        </div>
      </div>

      <!-- Info -->
      <div class="card-body">
        <div class="card-category">{{ getCategoryLabel() }}</div>
        <h3 class="card-title">{{ product.title }}</h3>
        <p class="card-desc">{{ product.shortDescription }}</p>

        <div class="card-meta">
          <div class="card-rating">
            <span class="stars">
              <span *ngFor="let s of getStars()" [class]="s"></span>
            </span>
            <span class="rating-text">{{ product.rating }}</span>
            <span class="rating-count">({{ product.totalRatings | number }})</span>
          </div>
          <div class="card-stats">
            <span class="stat">💰 {{ product.totalSales | number }} sales</span>
          </div>
        </div>

        <div class="card-footer-row">
          <div class="card-author">
            <div class="author-avatar" [style.background]="getAuthorColor()">
              {{ product.author.name.charAt(0) }}
            </div>
            <span>{{ product.author.name }}</span>
            <span class="verified-badge" *ngIf="product.author.verified">✓</span>
          </div>
          <div class="card-price-row">
            <span class="pm-price">\${{ product.price }}</span>
            <span class="pm-price-original" *ngIf="product.originalPrice">\${{ product.originalPrice }}</span>
          </div>
        </div>
      </div>
    </a>
  `,
  styles: [`
    .product-card {
      display: flex;
      flex-direction: column;
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      box-shadow: var(--pm-shadow-card);
      border: 1px solid var(--pm-border-light);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      text-decoration: none;
      color: inherit;
      height: 100%;
    }
    .product-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--pm-shadow-card-hover);
      border-color: rgba(99, 102, 241, 0.2);
    }

    .card-thumb {
      position: relative;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .thumb-overlay {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      z-index: 1;
    }
    .thumb-icon {
      font-size: 2.5rem;
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.2));
    }
    .thumb-title {
      color: white;
      font-size: 0.8rem;
      font-weight: 600;
      background: rgba(0,0,0,0.2);
      padding: 4px 12px;
      border-radius: var(--pm-radius-full);
      backdrop-filter: blur(4px);
    }

    .card-badges {
      position: absolute;
      top: 12px;
      left: 12px;
      display: flex;
      gap: 6px;
      z-index: 2;
    }

    .card-discount {
      position: absolute;
      top: 12px;
      right: 12px;
      background: #EF4444;
      color: white;
      font-size: 0.75rem;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: var(--pm-radius-full);
      z-index: 2;
    }

    .card-body {
      padding: 16px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .card-category {
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--ion-color-primary);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
    }
    .card-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--pm-text-primary);
      margin: 0 0 8px;
      line-height: 1.3;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .card-desc {
      font-size: 0.8rem;
      color: var(--pm-text-secondary);
      line-height: 1.5;
      margin: 0 0 12px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      flex: 1;
    }

    .card-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      flex-wrap: wrap;
      gap: 4px;
    }
    .card-rating {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .stars { display: flex; gap: 1px; font-size: 12px; color: #F59E0B; }
    .rating-text { font-size: 0.8rem; font-weight: 700; color: var(--pm-text-primary); }
    .rating-count { font-size: 0.75rem; color: var(--pm-text-muted); }
    .stat { font-size: 0.75rem; color: var(--pm-text-muted); }

    .card-footer-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 12px;
      border-top: 1px solid var(--pm-border-light);
    }
    .card-author {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.78rem;
      color: var(--pm-text-secondary);
    }
    .author-avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      font-weight: 700;
      color: white;
    }
    .verified-badge {
      background: var(--ion-color-primary);
      color: white;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.55rem;
    }
    .card-price-row {
      display: flex;
      align-items: center;
    }
  `],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  private categoryLabels: Record<string, string> = {
    'mobile-apps': 'Mobile Apps', 'web-templates': 'Web Templates', 'wordpress': 'WordPress',
    'javascript': 'JavaScript', 'ui-kits': 'UI Kits', 'full-stack': 'Full Stack',
    'plugins': 'Plugins', 'themes': 'Themes',
  };
  private categoryIcons: Record<string, string> = {
    'mobile-apps': '📱', 'web-templates': '🌐', 'wordpress': '🔧', 'javascript': '⚡',
    'ui-kits': '🎨', 'full-stack': '🚀', 'plugins': '🧩', 'themes': '✨',
  };
  private gradients: Record<string, string> = {
    'mobile-apps': 'linear-gradient(135deg, #F97316, #FB923C)',
    'web-templates': 'linear-gradient(135deg, #3B82F6, #60A5FA)',
    'wordpress': 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
    'javascript': 'linear-gradient(135deg, #EAB308, #FDE047)',
    'ui-kits': 'linear-gradient(135deg, #EC4899, #F472B6)',
    'full-stack': 'linear-gradient(135deg, #10B981, #34D399)',
    'plugins': 'linear-gradient(135deg, #06B6D4, #22D3EE)',
    'themes': 'linear-gradient(135deg, #F43F5E, #FB7185)',
  };
  private authorColors = ['#6366F1', '#EC4899', '#10B981', '#F97316', '#3B82F6', '#8B5CF6'];

  getCategoryLabel(): string { return this.categoryLabels[this.product.category] || this.product.category; }
  getCategoryIcon(): string { return this.categoryIcons[this.product.category] || '📦'; }
  getGradient(): string { return this.gradients[this.product.category] || 'linear-gradient(135deg, #6366F1, #A855F7)'; }
  getAuthorColor(): string { return this.authorColors[this.product.author.name.length % this.authorColors.length]; }

  getStars(): string[] {
    const stars: string[] = [];
    const full = Math.floor(this.product.rating);
    const half = this.product.rating % 1 >= 0.5 ? 1 : 0;
    for (let i = 0; i < full; i++) stars.push('pm-star-filled');
    if (half) stars.push('pm-star-half');
    while (stars.length < 5) stars.push('pm-star-empty');
    return stars;
  }
}

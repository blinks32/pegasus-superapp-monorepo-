import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HeaderComponent, FooterComponent, ProductCardComponent],
  template: `
    <app-header></app-header>

    <!-- ═══ HERO SECTION ═══ -->
    <section class="hero">
      <div class="pm-container hero-content">
        <h1 class="hero-title fade-in-up">
          <span class="hero-gradient-text">selljustcode</span>
        </h1>
        <p class="hero-subtitle fade-in-up">
          Discover premium Unity Games and Ionic Apps.
        </p>

        <!-- Search Bar -->
        <div class="pm-search-bar hero-search fade-in-up">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <input type="text" placeholder="Search templates, scripts, plugins..." [(ngModel)]="searchQuery" (keyup.enter)="goSearch()" />
          <button (click)="goSearch()">Search</button>
        </div>

        <!-- Popular tags -->
        <div class="hero-tags fade-in-up">
          <span class="tag-label">Popular:</span>
          <a *ngFor="let tag of popularTags" routerLink="/browse" [queryParams]="{q: tag}" class="hero-tag">{{ tag }}</a>
        </div>
      </div>
    </section>

    <!-- ═══ CATEGORIES ═══ -->
    <section class="pm-section categories-section">
      <div class="pm-container">
        <div class="categories-grid stagger-children">
          <a *ngFor="let cat of marketplace.categories"
             [routerLink]="['/browse']"
             [queryParams]="{category: cat.id}"
             class="category-card">
            <div class="cat-icon-wrap" [style.background]="cat.gradient">
              <span>{{ cat.icon }}</span>
            </div>
            <h3>{{ cat.label }}</h3>
            <span class="cat-item-count">{{ cat.count | number }} items</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ═══ ALL PRODUCTS ═══ -->
    <section class="pm-section">
      <div class="pm-container">
        <div class="section-header">
          <div>
            <h2 class="pm-heading-lg">Latest Products</h2>
          </div>
          <a routerLink="/browse" class="pm-btn pm-btn-outline pm-btn-sm">View All →</a>
        </div>
        <div class="products-grid stagger-children" *ngIf="marketplace.products().length > 0">
          <app-product-card *ngFor="let product of marketplace.products().slice(0, 12)" [product]="product"></app-product-card>
        </div>
        <div class="empty-state" *ngIf="marketplace.products().length === 0" style="text-align: center; padding: 40px; background: var(--pm-surface-muted); border-radius: var(--pm-radius-md);">
           <h3>No products found</h3>
           <p>Wait for new products to be uploaded.</p>
        </div>
      </div>
    </section>

    <app-footer></app-footer>
  `,
  styles: [`
    /* ═══ HERO ═══ */
    .hero {
      position: relative;
      padding: 40px 0 30px;
      overflow: hidden;
      background: linear-gradient(180deg, #ffffff 0%, #F0F0FF 100%);
    }

    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .hero-title {
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 1.1;
      color: var(--pm-text-primary);
      margin: 0 0 10px;
      letter-spacing: -0.03em;
    }
    .hero-gradient-text {
      background: linear-gradient(135deg, #6366F1 0%, #A855F7 40%, #EC4899 80%, #F97316 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: gradientShift 4s ease infinite;
    }

    .hero-subtitle {
      font-size: 1rem;
      color: var(--pm-text-secondary);
      max-width: 560px;
      margin: 0 0 20px;
      line-height: 1.6;
    }

    .hero-search {
      margin-bottom: 20px;
    }

    .hero-tags {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .tag-label {
      font-size: 0.8rem;
      color: var(--pm-text-muted);
      font-weight: 500;
    }
    .hero-tag {
      padding: 4px 14px;
      background: rgba(99, 102, 241, 0.06);
      border: 1px solid rgba(99, 102, 241, 0.12);
      border-radius: var(--pm-radius-full);
      font-size: 0.8rem;
      font-weight: 500;
      color: var(--pm-text-secondary);
      text-decoration: none;
      transition: all var(--pm-transition-fast);
    }
    .hero-tag:hover {
      background: rgba(99, 102, 241, 0.12);
      color: var(--ion-color-primary);
      border-color: var(--ion-color-primary);
    }

    /* ═══ SECTION HEADER ═══ */
    .section-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 24px;
      gap: 16px;
    }
    .section-header h2 { margin: 0 0 4px; }
    .section-header p { margin: 0; }

    /* ═══ CATEGORIES ═══ */
    .categories-section { padding: 30px 0; }
    .categories-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      max-width: 800px;
      margin: 0 auto;
    }
    .category-card {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 20px;
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      border: 1px solid var(--pm-border-light);
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
    }
    .category-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--pm-shadow-md);
      border-color: rgba(99, 102, 241, 0.2);
    }
    .cat-icon-wrap {
      width: 48px;
      height: 48px;
      border-radius: var(--pm-radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      flex-shrink: 0;
    }
    .category-card h3 {
      font-size: 1.05rem;
      font-weight: 700;
      margin: 0 0 4px;
    }
    .cat-item-count {
      display: block;
      font-size: 0.8rem;
      color: var(--pm-text-muted);
    }

    /* ═══ PRODUCTS GRID ═══ */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    /* ═══ RESPONSIVE ═══ */
    @media (max-width: 1024px) {
      .products-grid { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 768px) {
      .hero-title { font-size: 2rem; }
      .products-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
      .categories-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 480px) {
      .products-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class HomeComponent {
  marketplace = inject(MarketplaceService);
  searchQuery = '';

  popularTags = ['Unity', 'Ionic', '2D Game', 'App Template'];

  goSearch() {
    if (this.searchQuery.trim()) {
      window.location.href = "/browse?q=" + encodeURIComponent(this.searchQuery);
    }
  }
}

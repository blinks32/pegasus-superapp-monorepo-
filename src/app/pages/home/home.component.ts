import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { MarketplaceService } from '../../services/marketplace.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HeaderComponent, FooterComponent, ProductCardComponent],
  template: `
    <app-header></app-header>
    <div class="page-enter">
    <!-- ═══ HERO SECTION ═══ -->
    <section class="hero">
      <div class="pm-container hero-content">
        <h1 class="hero-title fade-in-up">
          <span class="hero-gradient-text">selljustcode</span>
        </h1>
        <p class="hero-subtitle fade-in-up">
          Buy and sell complete business solutions, B2B super apps, SaaS boilerplates & EdTech LMS.
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



    <!-- ═══ ALL PRODUCTS ═══ -->
    <section class="pm-section">
      <div class="pm-container">
        <div class="section-header">
          <div>
            <h2 class="pm-heading-lg">Latest Products</h2>
          </div>
          <a routerLink="/browse" class="pm-btn pm-btn-outline pm-btn-sm">View All →</a>
        </div>
        @if (marketplace.products() === null) {
          <div class="products-grid stagger-children">
            @for (i of [1,2,3,4,5,6,7,8]; track i) {
              <div class="product-skeleton" style="background:var(--pm-surface); border-radius:var(--pm-radius-lg); height:330px; animation: pulse 1.5s infinite;">
                <div style="height:160px; background:var(--pm-surface-muted); width:100%;"></div>
                <div style="padding:16px;">
                  <div style="height:20px; background:var(--pm-surface-muted); width:70%; margin-bottom:12px;"></div>
                  <div style="height:14px; background:var(--pm-surface-muted); width:100%; margin-bottom:8px;"></div>
                  <div style="height:14px; background:var(--pm-surface-muted); width:80%; margin-bottom:20px;"></div>
                  <div style="height:24px; background:var(--pm-surface-muted); width:40%;"></div>
                </div>
              </div>
            }
          </div>
        }
        @else if (marketplace.products()!.length > 0) {
          <div class="products-grid stagger-children">
            @for (product of marketplace.products()!.slice(0, 12); track product.id) {
              <app-product-card [product]="product"></app-product-card>
            }
          </div>
        }
        @else {
          <div class="empty-state" style="text-align: center; padding: 40px; background: var(--pm-surface-muted); border-radius: var(--pm-radius-md);">
            <h3>No products found</h3>
            <p>Wait for new products to be uploaded.</p>
          </div>
        }
      </div>
    </section>
    </div>

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
export class HomeComponent implements OnInit {
  marketplace = inject(MarketplaceService);
  private seo = inject(SeoService);
  searchQuery = '';

  popularTags = ['SaaS Boilerplate', 'Super App', 'Ride Booking', 'PvP Multiplayer', 'EdTech LMS'];

  ngOnInit() {
    this.seo.updateTitle('');
    this.seo.updateDescription('selljustcode is the leading marketplace for complete business solutions, B2B ride booking systems, parcel delivery super apps, PvP games, SaaS boilerplates, and EdTech LMS curriculums tested by Legends of Learning.');
  }

  goSearch() {
    if (this.searchQuery.trim()) {
      window.location.href = "/browse?q=" + encodeURIComponent(this.searchQuery);
    }
  }
}

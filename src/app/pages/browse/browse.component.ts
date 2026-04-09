import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { MarketplaceService } from '../../services/marketplace.service';
import { SeoService } from '../../services/seo.service';
import { ProductCategory } from '../../models/marketplace.models';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HeaderComponent, FooterComponent, ProductCardComponent],
  template: `
    <app-header></app-header>

    <div class="page-enter">
      <section class="browse-hero">
        <div class="pm-container">
          <h1 class="pm-heading-lg">{{ getPageTitle() }}</h1>
          <p class="pm-text-secondary" *ngIf="marketplace.initialLoadComplete()">
            {{ marketplace.filteredProducts().length | number }} items found
          </p>
        </div>
      </section>

    <div class="pm-container browse-layout">
      <!-- Sidebar Filters -->
      <aside class="browse-sidebar" [class.mobile-open]="sidebarOpen">
        <div class="sidebar-header">
          <h3>Filters</h3>
          <button class="sidebar-close" (click)="sidebarOpen = false">✕</button>
        </div>

        <!-- Search -->
        <div class="filter-group">
          <label>Search</label>
          <input type="text" placeholder="Search products..." [(ngModel)]="searchQuery" (input)="applyFilters()" class="filter-input" />
        </div>

        <!-- Categories -->
        <div class="filter-group">
          <label>Category</label>
          <div class="filter-chips">
            <button class="filter-chip" [class.active]="!selectedCategory" (click)="selectCategory(undefined)">All</button>
            <button *ngFor="let cat of marketplace.categories"
                    class="filter-chip" 
                    [class.active]="selectedCategory === cat.id"
                    (click)="selectCategory(cat.id)">
              {{ cat.icon }} {{ cat.label }}
            </button>
          </div>
        </div>

        <!-- Price Range -->
        <div class="filter-group">
          <label>Price Range</label>
          <div class="price-inputs">
            <input type="number" placeholder="Min" [(ngModel)]="minPrice" (input)="applyFilters()" class="filter-input" />
            <span>—</span>
            <input type="number" placeholder="Max" [(ngModel)]="maxPrice" (input)="applyFilters()" class="filter-input" />
          </div>
        </div>

        <!-- Min Rating -->
        <div class="filter-group">
          <label>Minimum Rating</label>
          <div class="rating-filter">
            <button *ngFor="let r of [4, 3, 2, 1]" 
                    class="rating-option"
                    [class.active]="minRating === r"
                    (click)="setMinRating(r)">
              <span class="stars-sm">{{ '★'.repeat(r) }}{{ '☆'.repeat(5-r) }}</span>
              <span>& Up</span>
            </button>
          </div>
        </div>

        <button class="pm-btn pm-btn-ghost" style="width:100%" (click)="clearFilters()">Clear All Filters</button>
      </aside>

      <!-- Main Content -->
      <main class="browse-main">
        <!-- Sort Bar -->
        <div class="sort-bar">
          <button class="filter-toggle pm-btn pm-btn-outline pm-btn-sm" (click)="sidebarOpen = !sidebarOpen">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/></svg>
            Filters
          </button>
          <div class="sort-options">
            <label>Sort by:</label>
            <select [(ngModel)]="sortBy" (change)="applyFilters()" class="sort-select">
              <option value="bestselling">Best Selling</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="trending">Trending</option>
            </select>
          </div>
          <div class="view-toggle">
            <button [class.active]="viewMode === 'grid'" (click)="viewMode = 'grid'">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
            </button>
            <button [class.active]="viewMode === 'list'" (click)="viewMode = 'list'">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="4" rx="1"/><rect x="3" y="10" width="18" height="4" rx="1"/><rect x="3" y="16" width="18" height="4" rx="1"/></svg>
            </button>
          </div>
        </div>

        <!-- Results -->
        @if (!marketplace.initialLoadComplete()) {
          <div class="products-grid" [class.list-view]="viewMode === 'list'">
            @for (i of [1,2,3,4,5,6]; track i) {
              <div class="product-skeleton" style="background:var(--pm-surface); border-radius:var(--pm-radius-lg); height:330px; animation: pulse 1.5s infinite;">
                <div style="height:160px; background:var(--pm-surface-muted); width:100%;"></div>
                <div style="padding:16px;">
                  <div style="height:20px; background:var(--pm-surface-muted); width:70%; margin-bottom:12px;"></div>
                  <div style="height:14px; background:var(--pm-surface-muted); width:100%; margin-bottom:8px;"></div>
                  <div style="height:14px; background:var(--pm-surface-muted); width:80%; margin-bottom:20px;"></div>
                </div>
              </div>
            }
          </div>
        }
        @else {
          <div class="products-grid" [class.list-view]="viewMode === 'list'">
            <app-product-card *ngFor="let product of marketplace.filteredProducts()" [product]="product"></app-product-card>
          </div>
        }
        }
      </main>
    </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: [`
    .browse-hero {
      background: linear-gradient(135deg, #F8FAFC, #EEF0FF);
      padding: 32px 0;
      border-bottom: 1px solid var(--pm-border-light);
    }
    .browse-hero h1 { margin: 0 0 4px; }
    .browse-hero p { margin: 0; }

    .browse-layout {
      display: flex;
      gap: 32px;
      padding-top: 32px;
      padding-bottom: 64px;
    }

    /* Sidebar */
    .browse-sidebar {
      width: 280px;
      flex-shrink: 0;
    }
    .sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }
    .sidebar-header h3 { margin: 0; font-size: 1.1rem; }
    .sidebar-close {
      display: none;
      background: none;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
      color: var(--pm-text-muted);
    }

    .filter-group {
      margin-bottom: 24px;
    }
    .filter-group label {
      display: block;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--pm-text-primary);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 10px;
    }

    .filter-input {
      width: 100%;
      padding: 10px 14px;
      border: 1px solid var(--pm-border);
      border-radius: var(--pm-radius-sm);
      font-family: inherit;
      font-size: 0.85rem;
      background: var(--pm-surface);
      color: var(--pm-text-primary);
      outline: none;
      transition: border-color var(--pm-transition-fast);
    }
    .filter-input:focus { border-color: var(--ion-color-primary); }

    .filter-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .filter-chip {
      padding: 6px 14px;
      border: 1px solid var(--pm-border);
      border-radius: var(--pm-radius-full);
      font-size: 0.78rem;
      font-weight: 500;
      background: var(--pm-surface);
      color: var(--pm-text-secondary);
      cursor: pointer;
      transition: all var(--pm-transition-fast);
      font-family: inherit;
    }
    .filter-chip:hover { border-color: var(--ion-color-primary); color: var(--ion-color-primary); }
    .filter-chip.active {
      background: var(--ion-color-primary);
      color: white;
      border-color: var(--ion-color-primary);
    }

    .price-inputs {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .price-inputs input { width: 50%; }

    .rating-filter {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .rating-option {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border: 1px solid var(--pm-border-light);
      border-radius: var(--pm-radius-sm);
      background: var(--pm-surface);
      cursor: pointer;
      font-size: 0.8rem;
      font-family: inherit;
      color: var(--pm-text-secondary);
      transition: all var(--pm-transition-fast);
    }
    .rating-option:hover { border-color: var(--ion-color-primary); }
    .rating-option.active { border-color: var(--ion-color-primary); background: rgba(99,102,241,0.05); }
    .stars-sm { color: #F59E0B; }

    /* Main */
    .browse-main { flex: 1; min-width: 0; }

    .sort-bar {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 24px;
      padding: 12px 16px;
      background: var(--pm-surface);
      border-radius: var(--pm-radius-md);
      border: 1px solid var(--pm-border-light);
    }
    .filter-toggle { display: none; }
    .sort-options {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: auto;
    }
    .sort-options label { font-size: 0.8rem; color: var(--pm-text-muted); white-space: nowrap; }
    .sort-select {
      padding: 8px 12px;
      border: 1px solid var(--pm-border);
      border-radius: var(--pm-radius-sm);
      font-family: inherit;
      font-size: 0.85rem;
      background: var(--pm-surface);
      color: var(--pm-text-primary);
      outline: none;
      cursor: pointer;
    }
    .view-toggle {
      display: flex;
      gap: 4px;
    }
    .view-toggle button {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--pm-border-light);
      border-radius: var(--pm-radius-sm);
      background: var(--pm-surface);
      color: var(--pm-text-muted);
      cursor: pointer;
      transition: all var(--pm-transition-fast);
    }
    .view-toggle button.active {
      color: var(--ion-color-primary);
      border-color: var(--ion-color-primary);
      background: rgba(99,102,241,0.05);
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    .products-grid.list-view {
      grid-template-columns: 1fr;
    }

    .empty-state {
      text-align: center;
      padding: 80px 24px;
    }
    .empty-icon { font-size: 3rem; display: block; margin-bottom: 16px; }
    .empty-state h3 { margin: 0 0 8px; }
    .empty-state p { color: var(--pm-text-muted); margin: 0 0 24px; }

    @media (max-width: 1024px) {
      .products-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .browse-sidebar {
        display: none;
        position: fixed;
        top: 64px;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        background: var(--pm-surface);
        z-index: 1001;
        padding: 24px;
        overflow-y: auto;
      }
      .browse-sidebar.mobile-open { display: block; }
      .sidebar-close { display: block; }
      .filter-toggle { display: flex; }
      .sort-bar { gap: 10px; }
      .sort-options {
        margin-left: 0;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .sort-options label { white-space: normal; }
      .sort-select { width: 100%; }
      .products-grid { grid-template-columns: 1fr; gap: 16px; }
    }
    @media (max-width: 480px) {
      .products-grid { grid-template-columns: 1fr; }
    }
  `],
})
export class BrowseComponent implements OnInit {
  marketplace = inject(MarketplaceService);
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  searchQuery = '';
  selectedCategory?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  sortBy = 'bestselling';
  viewMode: 'grid' | 'list' = 'grid';
  sidebarOpen = false;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['category']) this.selectedCategory = params['category'] as ProductCategory;
      if (params['q']) this.searchQuery = params['q'];
      if (params['sort']) this.sortBy = params['sort'];
      this.applyFilters();
      this.seo.updateTitle(this.getPageTitle());
      this.seo.updateDescription(`Browse ${this.getPageTitle()} on selljustcode. Find premium SaaS Boilerplates, Complete Business Systems, EdTech LMS, and PvP Multiplayer Games.`);
    });
  }

  getPageTitle(): string {
    if (this.selectedCategory) {
      const cat = this.marketplace.categories.find(c => c.id === this.selectedCategory);
      return cat ? cat.label : 'Browse Products';
    }
    if (this.searchQuery) return `Search: "${this.searchQuery}"`;
    return 'Browse All Products';
  }

  selectCategory(cat?: ProductCategory) {
    this.selectedCategory = cat;
    this.applyFilters();
  }

  setMinRating(r: number) {
    this.minRating = this.minRating === r ? undefined : r;
    this.applyFilters();
  }

  applyFilters() {
    this.marketplace.updateFilters({
      query: this.searchQuery,
      category: this.selectedCategory,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      minRating: this.minRating,
      sortBy: this.sortBy as any,
    });
  }

  clearFilters() {
    this.searchQuery = '';
    this.selectedCategory = undefined;
    this.minPrice = undefined;
    this.maxPrice = undefined;
    this.minRating = undefined;
    this.sortBy = 'bestselling';
    this.applyFilters();
  }
}

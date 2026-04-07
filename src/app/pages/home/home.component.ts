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
      <div class="hero-bg">
        <div class="hero-shape shape-1"></div>
        <div class="hero-shape shape-2"></div>
        <div class="hero-shape shape-3"></div>
        <div class="hero-particles">
          <span *ngFor="let p of particles" class="particle" [style.left]="p.x" [style.top]="p.y" [style.animationDelay]="p.delay" [style.fontSize]="p.size">{{ p.icon }}</span>
        </div>
      </div>
      <div class="pm-container hero-content">
        <div class="hero-badge fade-in-up">🎉 Over 2,400+ premium assets available</div>
        <h1 class="hero-title fade-in-up">
          Find the Perfect<br/>
          <span class="hero-gradient-text">Code & Templates</span>
        </h1>
        <p class="hero-subtitle fade-in-up">
          Discover premium source code, scripts, plugins, and digital assets.<br/>
          Built by verified developers. Trusted by 30,000+ customers worldwide.
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

    <!-- ═══ STATS BAR ═══ -->
    <section class="stats-bar">
      <div class="pm-container">
        <div class="stats-grid">
          <div class="stat-item" *ngFor="let stat of marketplace.salesStats; let i = index">
            <span class="stat-icon">{{ stat.icon }}</span>
            <div class="stat-info">
              <span class="stat-value">{{ stat.value | number }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
            <span class="stat-change positive">+{{ stat.change }}%</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CATEGORIES ═══ -->
    <section class="pm-section categories-section">
      <div class="pm-container">
        <div class="section-header">
          <div>
            <h2 class="pm-heading-lg">Browse Categories</h2>
            <p class="pm-text-secondary">Find exactly what you need from our curated collections</p>
          </div>
          <a routerLink="/browse" class="pm-btn pm-btn-outline pm-btn-sm">View All →</a>
        </div>
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

    <!-- ═══ FEATURED PRODUCTS ═══ -->
    <section class="pm-section featured-section">
      <div class="pm-container">
        <div class="section-header">
          <div>
            <h2 class="pm-heading-lg">🔥 Featured Products</h2>
            <p class="pm-text-secondary">Hand-picked by our editorial team</p>
          </div>
          <a routerLink="/browse" [queryParams]="{sort: 'trending'}" class="pm-btn pm-btn-outline pm-btn-sm">See More →</a>
        </div>
        <div class="products-grid stagger-children">
          <app-product-card *ngFor="let product of marketplace.featuredProducts()" [product]="product"></app-product-card>
        </div>
      </div>
    </section>

    <!-- ═══ RESKIN SERVICES ═══ -->
    <section class="pm-section reskin-section">
      <div class="pm-container">
        <div class="reskin-banner">
          <div class="reskin-content">
            <div class="reskin-badge">🎨 Professional Services</div>
            <h2>App Reskin Services</h2>
            <p>Don't have time to customize? Our expert team will reskin any product to match your brand perfectly. Custom colors, logos, assets, and more.</p>
            <div class="reskin-features">
              <div class="reskin-feat">
                <span class="feat-icon">🎯</span>
                <div>
                  <strong>Custom Branding</strong>
                  <span>Logo, colors, typography</span>
                </div>
              </div>
              <div class="reskin-feat">
                <span class="feat-icon">⚡</span>
                <div>
                  <strong>Fast Delivery</strong>
                  <span>3-5 business days</span>
                </div>
              </div>
              <div class="reskin-feat">
                <span class="feat-icon">🔄</span>
                <div>
                  <strong>Unlimited Revisions</strong>
                  <span>Until you're satisfied</span>
                </div>
              </div>
              <div class="reskin-feat">
                <span class="feat-icon">🛡️</span>
                <div>
                  <strong>Source Included</strong>
                  <span>Full ownership transfer</span>
                </div>
              </div>
            </div>
            <div class="reskin-actions">
              <a routerLink="/browse" class="pm-btn pm-btn-primary pm-btn-lg">Browse Reskinnable Items</a>
              <a href="#" class="pm-btn pm-btn-ghost">Learn More →</a>
            </div>
          </div>
          <div class="reskin-visual">
            <div class="reskin-mockup">
              <div class="mockup-phone" *ngFor="let c of reskinColors; let i = index" [style.--color]="c" [style.--offset]="i * 60 + 'px'">
                <div class="phone-screen" [style.background]="'linear-gradient(135deg, ' + c + ', ' + reskinColors[(i+1) % reskinColors.length] + ')'">
                  <div class="phone-header"></div>
                  <div class="phone-card"></div>
                  <div class="phone-card short"></div>
                  <div class="phone-btn" [style.background]="c"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ BESTSELLERS ═══ -->
    <section class="pm-section best-section">
      <div class="pm-container">
        <div class="section-header">
          <div>
            <h2 class="pm-heading-lg">🏆 Best Sellers</h2>
            <p class="pm-text-secondary">Most purchased items this month</p>
          </div>
          <a routerLink="/browse" [queryParams]="{sort: 'bestselling'}" class="pm-btn pm-btn-outline pm-btn-sm">View All →</a>
        </div>
        <div class="products-grid stagger-children">
          <app-product-card *ngFor="let product of marketplace.bestsellerProducts().slice(0, 4)" [product]="product"></app-product-card>
        </div>
      </div>
    </section>

    <!-- ═══ NEW RELEASES ═══ -->
    <section class="pm-section new-section">
      <div class="pm-container">
        <div class="section-header">
          <div>
            <h2 class="pm-heading-lg">✨ New Arrivals</h2>
            <p class="pm-text-secondary">Fresh products added recently</p>
          </div>
          <a routerLink="/browse" [queryParams]="{sort: 'newest'}" class="pm-btn pm-btn-outline pm-btn-sm">View All →</a>
        </div>
        <div class="products-grid stagger-children">
          <app-product-card *ngFor="let product of marketplace.newestProducts().slice(0, 4)" [product]="product"></app-product-card>
        </div>
      </div>
    </section>

    <!-- ═══ WHY CHOOSE US ═══ -->
    <section class="pm-section why-section">
      <div class="pm-container">
        <div class="section-header center">
          <h2 class="pm-heading-lg">Why Choose Pegasus Market?</h2>
          <p class="pm-text-secondary">The trusted marketplace for premium digital assets</p>
        </div>
        <div class="why-grid stagger-children">
          <div class="why-card" *ngFor="let feature of whyFeatures">
            <div class="why-icon" [style.background]="feature.gradient">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ TESTIMONIALS ═══ -->
    <section class="pm-section testimonials-section">
      <div class="pm-container">
        <div class="section-header center">
          <h2 class="pm-heading-lg">💬 What Our Customers Say</h2>
          <p class="pm-text-secondary">Trusted by thousands of developers worldwide</p>
        </div>
        <div class="testimonials-grid stagger-children">
          <div class="testimonial-card" *ngFor="let t of testimonials">
            <div class="t-stars">★★★★★</div>
            <p class="t-quote">"{{ t.quote }}"</p>
            <div class="t-author">
              <div class="t-avatar" [style.background]="t.color">{{ t.name.charAt(0) }}</div>
              <div>
                <strong>{{ t.name }}</strong>
                <span>{{ t.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CTA SECTION ═══ -->
    <section class="cta-section">
      <div class="pm-container">
        <div class="cta-card">
          <h2>Ready to Sell Your Code?</h2>
          <p>Join 500+ authors earning passive income. Submit your projects and reach thousands of buyers.</p>
          <div class="cta-actions">
            <a routerLink="/admin/submit" class="pm-btn pm-btn-primary pm-btn-lg">Start Selling →</a>
            <a routerLink="/admin" class="pm-btn pm-btn-ghost pm-btn-lg" style="color: white;">View Author Dashboard</a>
          </div>
        </div>
      </div>
    </section>

    <app-footer></app-footer>
  `,
  styles: [`
    /* ═══ HERO ═══ */
    .hero {
      position: relative;
      padding: 100px 0 80px;
      overflow: hidden;
      background: linear-gradient(180deg, #ffffff 0%, #F0F0FF 40%, #E8E4FF 100%);
    }
    .hero-bg {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
    }
    .hero-shape {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.5;
    }
    .shape-1 { width: 500px; height: 500px; background: rgba(99, 102, 241, 0.2); top: -150px; right: -100px; }
    .shape-2 { width: 400px; height: 400px; background: rgba(236, 72, 153, 0.15); bottom: -100px; left: -100px; }
    .shape-3 { width: 300px; height: 300px; background: rgba(16, 185, 129, 0.15); top: 50%; left: 50%; transform: translate(-50%, -50%); }

    .hero-particles {
      position: absolute;
      inset: 0;
    }
    .particle {
      position: absolute;
      animation: float 6s ease-in-out infinite;
      opacity: 0.4;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .hero-badge {
      display: inline-flex;
      padding: 8px 20px;
      background: rgba(99, 102, 241, 0.08);
      border: 1px solid rgba(99, 102, 241, 0.15);
      border-radius: var(--pm-radius-full);
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--ion-color-primary);
      margin-bottom: 24px;
      animation-delay: 0ms;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 800;
      line-height: 1.1;
      color: var(--pm-text-primary);
      margin: 0 0 20px;
      letter-spacing: -0.03em;
      animation-delay: 100ms;
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
      font-size: 1.15rem;
      color: var(--pm-text-secondary);
      max-width: 560px;
      margin: 0 0 36px;
      line-height: 1.6;
      animation-delay: 200ms;
    }

    .hero-search {
      margin-bottom: 20px;
      animation-delay: 300ms;
    }

    .hero-tags {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      justify-content: center;
      animation-delay: 400ms;
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

    /* ═══ STATS ═══ */
    .stats-bar {
      position: relative;
      z-index: 2;
      margin-top: -40px;
      padding-bottom: 16px;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      background: white;
      border-radius: var(--pm-radius-xl);
      padding: 24px 32px;
      box-shadow: var(--pm-shadow-xl);
      border: 1px solid var(--pm-border-light);
    }
    .stat-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 0;
    }
    .stat-item:not(:last-child) {
      border-right: 1px solid var(--pm-border-light);
      padding-right: 16px;
    }
    .stat-icon {
      font-size: 1.8rem;
    }
    .stat-value {
      display: block;
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--pm-text-primary);
      line-height: 1;
    }
    .stat-label {
      font-size: 0.78rem;
      color: var(--pm-text-muted);
      margin-top: 2px;
      display: block;
    }
    .stat-change {
      font-size: 0.7rem;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: var(--pm-radius-full);
      margin-left: auto;
    }
    .stat-change.positive {
      background: rgba(16, 185, 129, 0.1);
      color: #059669;
    }

    /* ═══ SECTION HEADER ═══ */
    .section-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 32px;
      gap: 16px;
    }
    .section-header.center {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .section-header h2 { margin: 0 0 4px; }
    .section-header p { margin: 0; }

    /* ═══ CATEGORIES ═══ */
    .categories-section { background: var(--pm-surface-muted); }
    .categories-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
    .category-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 28px 16px;
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      border: 1px solid var(--pm-border-light);
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
    }
    .category-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--pm-shadow-lg);
      border-color: rgba(99, 102, 241, 0.2);
    }
    .cat-icon-wrap {
      width: 56px;
      height: 56px;
      border-radius: var(--pm-radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      margin-bottom: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .category-card h3 {
      font-size: 0.95rem;
      font-weight: 700;
      margin: 0 0 4px;
    }
    .cat-item-count {
      font-size: 0.78rem;
      color: var(--pm-text-muted);
    }

    /* ═══ PRODUCTS GRID ═══ */
    .products-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }

    /* ═══ RESKIN SERVICE ═══ */
    .reskin-section {
      background: linear-gradient(180deg, var(--pm-surface-muted) 0%, var(--ion-background-color) 100%);
    }
    .reskin-banner {
      display: flex;
      align-items: center;
      gap: 48px;
      background: var(--pm-surface);
      border-radius: var(--pm-radius-xl);
      padding: 48px;
      box-shadow: var(--pm-shadow-xl);
      border: 1px solid var(--pm-border-light);
      overflow: hidden;
    }
    .reskin-content { flex: 1; }
    .reskin-badge {
      display: inline-block;
      padding: 6px 16px;
      background: rgba(99, 102, 241, 0.08);
      border-radius: var(--pm-radius-full);
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--ion-color-primary);
      margin-bottom: 16px;
    }
    .reskin-content h2 {
      font-size: 2rem;
      margin: 0 0 12px;
    }
    .reskin-content > p {
      font-size: 1rem;
      color: var(--pm-text-secondary);
      line-height: 1.6;
      margin: 0 0 24px;
      max-width: 520px;
    }
    .reskin-features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 28px;
    }
    .reskin-feat {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .feat-icon {
      font-size: 1.2rem;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--pm-surface-muted);
      border-radius: 8px;
    }
    .reskin-feat strong { display: block; font-size: 0.85rem; color: var(--pm-text-primary); }
    .reskin-feat span { font-size: 0.75rem; color: var(--pm-text-muted); }
    .reskin-actions { display: flex; gap: 12px; flex-wrap: wrap; }

    .reskin-visual {
      flex-shrink: 0;
      width: 300px;
      height: 300px;
      position: relative;
    }
    .reskin-mockup {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .mockup-phone {
      position: absolute;
      width: 140px;
      height: 260px;
      background: white;
      border-radius: 20px;
      padding: 8px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.1);
      right: var(--offset);
      top: 50%;
      transform: translateY(-50%);
      transition: transform 0.3s ease;
    }
    .mockup-phone:hover { transform: translateY(-50%) scale(1.05); }
    .phone-screen {
      width: 100%;
      height: 100%;
      border-radius: 14px;
      padding: 16px 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .phone-header { width: 60%; height: 12px; background: rgba(255,255,255,0.3); border-radius: 6px; }
    .phone-card { width: 100%; height: 50px; background: rgba(255,255,255,0.15); border-radius: 10px; }
    .phone-card.short { width: 70%; height: 30px; }
    .phone-btn { width: 100%; height: 28px; border-radius: 8px; opacity: 0.8; margin-top: auto; }

    /* ═══ WHY CHOOSE ═══ */
    .why-section { background: var(--pm-surface-muted); }
    .why-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }
    .why-card {
      text-align: center;
      padding: 32px 24px;
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      border: 1px solid var(--pm-border-light);
      transition: all 0.3s ease;
    }
    .why-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--pm-shadow-lg);
    }
    .why-icon {
      width: 56px;
      height: 56px;
      border-radius: var(--pm-radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin: 0 auto 16px;
    }
    .why-card h3 { font-size: 1rem; margin: 0 0 8px; }
    .why-card p { font-size: 0.85rem; color: var(--pm-text-secondary); margin: 0; line-height: 1.5; }

    /* ═══ TESTIMONIALS ═══ */
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    .testimonial-card {
      padding: 28px;
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      border: 1px solid var(--pm-border-light);
      transition: all 0.3s ease;
    }
    .testimonial-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--pm-shadow-lg);
    }
    .t-stars { color: #F59E0B; font-size: 1rem; margin-bottom: 12px; }
    .t-quote {
      font-size: 0.9rem;
      color: var(--pm-text-secondary);
      line-height: 1.6;
      margin: 0 0 16px;
      font-style: italic;
    }
    .t-author {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .t-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 0.9rem;
    }
    .t-author strong { display: block; font-size: 0.85rem; color: var(--pm-text-primary); }
    .t-author span { font-size: 0.75rem; color: var(--pm-text-muted); }

    /* ═══ CTA ═══ */
    .cta-section {
      padding: 64px 0;
    }
    .cta-card {
      text-align: center;
      padding: 64px 48px;
      background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
      border-radius: var(--pm-radius-xl);
      position: relative;
      overflow: hidden;
    }
    .cta-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
    .cta-card h2 {
      color: white;
      font-size: 2.2rem;
      margin: 0 0 12px;
      position: relative;
      z-index: 1;
    }
    .cta-card p {
      color: #94A3B8;
      font-size: 1.05rem;
      margin: 0 0 28px;
      position: relative;
      z-index: 1;
    }
    .cta-actions {
      display: flex;
      justify-content: center;
      gap: 12px;
      position: relative;
      z-index: 1;
      flex-wrap: wrap;
    }

    /* ═══ RESPONSIVE ═══ */
    @media (max-width: 1024px) {
      .products-grid { grid-template-columns: repeat(3, 1fr); }
      .categories-grid { grid-template-columns: repeat(4, 1fr); }
      .why-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .hero-title { font-size: 2.5rem; }
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .stat-item:nth-child(2) { border-right: none; }
      .products-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
      .categories-grid { grid-template-columns: repeat(2, 1fr); }
      .reskin-banner { flex-direction: column; padding: 32px; }
      .reskin-visual { width: 100%; height: 200px; }
      .testimonials-grid { grid-template-columns: 1fr; }
      .section-header { flex-direction: column; align-items: flex-start; }
    }
    @media (max-width: 480px) {
      .hero { padding: 80px 0 60px; }
      .hero-title { font-size: 2rem; }
      .stats-grid { grid-template-columns: 1fr; }
      .stat-item { border-right: none !important; }
      .products-grid { grid-template-columns: 1fr; }
      .categories-grid { grid-template-columns: 1fr; }
      .why-grid { grid-template-columns: 1fr; }
      .reskin-features { grid-template-columns: 1fr; }
    }
  `],
})
export class HomeComponent {
  marketplace = inject(MarketplaceService);
  searchQuery = '';

  popularTags = ['Flutter', 'React', 'Laravel', 'Admin Dashboard', 'eCommerce', 'AI Chatbot'];

  particles = Array.from({ length: 12 }, (_, i) => ({
    x: Math.random() * 100 + '%',
    y: Math.random() * 100 + '%',
    delay: (i * 0.5) + 's',
    size: (0.8 + Math.random() * 1.2) + 'rem',
    icon: ['</', '{;}', '()', '[]', '#', '/*', '*/', '=>', '&&', '||', '++', '::'][i],
  }));

  reskinColors = ['#6366F1', '#EC4899', '#10B981', '#F97316'];

  whyFeatures = [
    { icon: '🔍', title: 'Quality Reviewed', desc: 'Every item is manually reviewed by our team for code quality and documentation.', gradient: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1))' },
    { icon: '🔒', title: 'Secure & Licensed', desc: 'All purchases come with proper licensing and secure payment processing.', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(5,150,105,0.1))' },
    { icon: '🚀', title: 'Regular Updates', desc: 'Authors provide free lifetime updates to keep your code current.', gradient: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(234,88,12,0.1))' },
    { icon: '💬', title: 'Premium Support', desc: '6 months of dedicated support from the author with every purchase.', gradient: 'linear-gradient(135deg, rgba(236,72,153,0.1), rgba(219,39,119,0.1))' },
  ];

  testimonials = [
    { name: 'James Wilson', role: 'CTO at TechFlow', quote: 'Pegasus Market has been our go-to for bootstrap templates. The code quality is exceptional and the support is world-class.', color: '#6366F1' },
    { name: 'Sarah Chen', role: 'Freelance Developer', quote: 'I saved over 200 hours on my last project by using a super-app template from here. The reskin service was the cherry on top!', color: '#EC4899' },
    { name: 'Raj Patel', role: 'Startup Founder', quote: 'Best marketplace for production-ready code. Every purchase has been money well spent. The licensing is clear and fair.', color: '#10B981' },
  ];

  goSearch() {
    if (this.searchQuery.trim()) {
      window.location.href = `/browse?q=${encodeURIComponent(this.searchQuery)}`;
    }
  }
}

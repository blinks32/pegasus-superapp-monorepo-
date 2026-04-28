import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MarketplaceService } from '../../services/marketplace.service';
import { AuthService } from '../../services/auth.service';
import { Product } from '../../models/marketplace.models';
import { FirestoreDatePipe } from '../../pipes/firestore-date.pipe';

@Component({
  selector: 'app-seller-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent, FirestoreDatePipe],
  template: `
    <app-header></app-header>

    <!-- Not logged in -->
    <div class="pm-container auth-gate" *ngIf="!auth.currentUser()">
      <div class="auth-card">
        <div class="auth-icon">🔒</div>
        <h2>Sign in Required</h2>
        <p>Sign in to view your submissions.</p>
        <a routerLink="/login" class="pm-btn pm-btn-primary pm-btn-lg">Sign In</a>
      </div>
    </div>

    <ng-container *ngIf="auth.currentUser()">
      <section class="dash-hero">
        <div class="pm-container">
          <div class="hero-row">
            <div>
              <h1 class="pm-heading-lg">📊 My Submissions</h1>
              <p class="pm-text-secondary">Track the status of your submitted products</p>
            </div>
            <a routerLink="/sell" class="pm-btn pm-btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
              Submit New Product
            </a>
          </div>
        </div>
      </section>

      <div class="pm-container dash-content">
        <!-- Stats -->
        <div class="stats-row">
          <div class="mini-stat">
            <span class="ms-icon" style="background: rgba(99,102,241,0.1); color: #6366F1">📦</span>
            <div><strong>{{ myProducts.length }}</strong><span>Total</span></div>
          </div>
          <div class="mini-stat">
            <span class="ms-icon" style="background: rgba(245,158,11,0.1); color: #F59E0B">⏳</span>
            <div><strong>{{ pendingCount }}</strong><span>Pending</span></div>
          </div>
          <div class="mini-stat">
            <span class="ms-icon" style="background: rgba(16,185,129,0.1); color: #10B981">✅</span>
            <div><strong>{{ publishedCount }}</strong><span>Published</span></div>
          </div>
          <div class="mini-stat">
            <span class="ms-icon" style="background: rgba(239,68,68,0.1); color: #EF4444">❌</span>
            <div><strong>{{ rejectedCount }}</strong><span>Rejected</span></div>
          </div>
        </div>

        <!-- Products List -->
        <div class="products-card">
          <div *ngIf="myProducts.length === 0" class="empty-state">
            <div class="empty-icon">📭</div>
            <h3>No submissions yet</h3>
            <p>Start selling by submitting your first product.</p>
            <a routerLink="/sell" class="pm-btn pm-btn-primary">Submit a Product →</a>
          </div>

          <div class="product-row" *ngFor="let p of myProducts">
            <div class="product-thumb"
              [style.backgroundImage]="p.thumbnailUrl ? 'url(' + p.thumbnailUrl + ')' : 'none'"
              [style.backgroundSize]="'cover'" [style.backgroundPosition]="'center'">
              <span *ngIf="!p.thumbnailUrl">📦</span>
            </div>
            <div class="product-info">
              <span class="product-title">{{ p.title }}</span>
              <span class="product-desc">{{ p.shortDescription }}</span>
            </div>
            <div class="product-status">
              <span class="status-badge" [class]="'status-' + (p.status || 'pending')">
                {{ (p.status || 'pending') | titlecase }}
              </span>
            </div>
            <div class="product-price">{{'$'}}{{ p.price }}</div>
            <div class="product-date">{{ p.createdAt | fsDate | date:'mediumDate' }}</div>
            <div class="product-actions">
              <a [routerLink]="['/product', p.id]" class="pm-btn pm-btn-ghost pm-btn-sm">View</a>
            </div>
          </div>
        </div>

        <!-- Rejection Details -->
        <div class="rejection-card" *ngFor="let p of rejectedProducts">
          <div class="rejection-header">
            <span class="status-badge status-rejected">Rejected</span>
            <strong>{{ p.title }}</strong>
          </div>
          <div class="rejection-reason" *ngIf="p.rejectionReason">
            <span class="reason-label">Reason:</span>
            <p>{{ p.rejectionReason }}</p>
          </div>
        </div>
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

    .dash-hero {
      background: linear-gradient(135deg, #F8FAFC, #EEF0FF);
      padding: 32px 0; border-bottom: 1px solid var(--pm-border-light);
    }
    .hero-row {
      display: flex; justify-content: space-between; align-items: center;
      flex-wrap: wrap; gap: 16px;
    }
    .dash-hero h1 { margin: 0 0 4px; }
    .dash-hero p { margin: 0; }
    .dash-content { padding: 32px 0 64px; }

    .stats-row {
      display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 16px; margin-bottom: 32px;
    }
    .mini-stat {
      display: flex; align-items: center; gap: 14px;
      padding: 20px; background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      border: 1px solid var(--pm-border-light); box-shadow: var(--pm-shadow-sm);
    }
    .ms-icon {
      width: 48px; height: 48px; border-radius: var(--pm-radius-md);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.25rem; flex-shrink: 0;
    }
    .mini-stat strong {
      display: block; font-size: 1.5rem; color: var(--pm-text-primary);
    }
    .mini-stat span { font-size: 0.8rem; color: var(--pm-text-muted); }

    .products-card {
      background: var(--pm-surface); border-radius: var(--pm-radius-lg);
      padding: 24px; border: 1px solid var(--pm-border-light);
      box-shadow: var(--pm-shadow-sm);
    }
    .empty-state {
      text-align: center; padding: 48px 24px;
    }
    .empty-icon { font-size: 3rem; margin-bottom: 12px; }
    .empty-state h3 { margin: 0 0 8px; }
    .empty-state p { margin: 0 0 20px; color: var(--pm-text-muted); }

    .product-row {
      display: flex; align-items: center; gap: 16px;
      padding: 16px 0; border-bottom: 1px solid var(--pm-border-light);
    }
    .product-row:last-child { border-bottom: none; }
    .product-thumb {
      width: 48px; height: 48px; border-radius: var(--pm-radius-sm);
      display: flex; align-items: center; justify-content: center;
      font-size: 1.25rem; flex-shrink: 0; background: var(--pm-surface-muted);
    }
    .product-info { flex: 1; min-width: 0; }
    .product-title { display: block; font-weight: 600; color: var(--pm-text-primary); margin-bottom: 2px; }
    .product-desc {
      display: block; font-size: 0.85rem; color: var(--pm-text-muted);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .product-status { flex-shrink: 0; }
    .status-badge {
      padding: 4px 12px; border-radius: var(--pm-radius-full);
      font-size: 0.75rem; font-weight: 600;
    }
    .status-published { background: rgba(16, 185, 129, 0.1); color: #10B981; }
    .status-pending { background: rgba(245, 158, 11, 0.1); color: #F59E0B; }
    .status-draft { background: rgba(99, 102, 241, 0.1); color: #6366F1; }
    .status-rejected { background: rgba(239, 68, 68, 0.1); color: #EF4444; }
    .product-price { font-weight: 600; color: var(--pm-text-primary); flex-shrink: 0; }
    .product-date { font-size: 0.85rem; color: var(--pm-text-muted); flex-shrink: 0; }
    .product-actions { flex-shrink: 0; }

    .rejection-card {
      margin-top: 16px; padding: 20px;
      background: rgba(239,68,68,0.03); border: 1px solid rgba(239,68,68,0.15);
      border-radius: var(--pm-radius-md);
    }
    .rejection-header {
      display: flex; align-items: center; gap: 12px; margin-bottom: 12px;
    }
    .reason-label { font-size: 0.8rem; font-weight: 600; color: var(--pm-text-muted); }
    .rejection-reason p { margin: 4px 0 0; font-size: 0.9rem; color: var(--pm-text-secondary); line-height: 1.5; }

    @media (max-width: 768px) {
      .stats-row { grid-template-columns: repeat(2, 1fr); }
      .hero-row { flex-direction: column; align-items: flex-start; }
      .product-row { flex-wrap: wrap; gap: 12px; }
      .product-price, .product-date { display: none; }
    }
  `],
})
export class SellerDashboardComponent {
  marketplace = inject(MarketplaceService);
  auth = inject(AuthService);

  get myProducts(): Product[] {
    const user = this.auth.currentUser();
    if (!user) return [];
    return this.marketplace.getUserProducts(user.uid);
  }

  get pendingCount() { return this.myProducts.filter(p => p.status === 'pending').length; }
  get publishedCount() { return this.myProducts.filter(p => !p.status || p.status === 'published').length; }
  get rejectedCount() { return this.myProducts.filter(p => p.status === 'rejected').length; }
  get rejectedProducts() { return this.myProducts.filter(p => p.status === 'rejected'); }
}

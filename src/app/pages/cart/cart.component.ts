import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <section class="cart-hero">
      <div class="pm-container">
        <h1 class="pm-heading-lg">🛒 Shopping Cart</h1>
        <p class="pm-text-secondary">{{ marketplace.cartCount() }} item{{ marketplace.cartCount() !== 1 ? 's' : '' }} in your cart</p>
      </div>
    </section>

    <div class="pm-container cart-layout">
      <!-- Cart Items -->
      <div class="cart-main" *ngIf="marketplace.cart().length > 0">
        <div class="cart-item" *ngFor="let item of marketplace.cart(); let i = index">
          <div class="item-thumb" [style.background]="getGradient(item.product.category)">
            <span>{{ getCategoryIcon(item.product.category) }}</span>
          </div>
          <div class="item-info">
            <a [routerLink]="['/product', item.product.id]" class="item-title">{{ item.product.title }}</a>
            <p class="item-desc">{{ item.product.shortDescription }}</p>
            <div class="item-meta">
              <span class="item-license" [class.extended]="item.license === 'extended'">
                {{ item.license === 'extended' ? '🔓 Extended' : '📄 Regular' }} License
              </span>
              <span class="item-reskin" *ngIf="item.addReskin">🎨 Reskin Service (+\${{ item.product.reskinPrice }})</span>
              <span class="item-author">by {{ item.product.author.name }}</span>
            </div>
          </div>
          <div class="item-right">
            <div class="item-price">\${{ getItemPrice(item) }}</div>
            <button class="remove-btn" (click)="removeItem(item.product.id)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              Remove
            </button>
          </div>
        </div>
      </div>

      <!-- Empty Cart -->
      <div class="cart-main empty-cart" *ngIf="marketplace.cart().length === 0">
        <div class="empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Discover thousands of premium code assets</p>
        <a routerLink="/browse" class="pm-btn pm-btn-primary">Browse Products</a>
      </div>

      <!-- Order Summary -->
      <aside class="cart-sidebar" *ngIf="marketplace.cart().length > 0">
        <div class="summary-card">
          <h3>Order Summary</h3>
          <div class="summary-rows">
            <div class="summary-row">
              <span>Subtotal ({{ marketplace.cartCount() }} items)</span>
              <strong>\${{ marketplace.cartTotal() | number:'1.2-2' }}</strong>
            </div>
            <div class="summary-row" *ngIf="hasReskin()">
              <span>Reskin Services</span>
              <strong>\${{ getReskinTotal() | number:'1.2-2' }}</strong>
            </div>
            <div class="summary-row">
              <span>Platform Fee</span>
              <strong>Free</strong>
            </div>
            <div class="summary-row">
              <span>Taxes</span>
              <strong>Calculated at checkout</strong>
            </div>
          </div>
          <div class="summary-total">
            <span>Total</span>
            <strong>\${{ marketplace.cartTotal() | number:'1.2-2' }}</strong>
          </div>

          <button class="pm-btn pm-btn-success pm-btn-lg checkout-btn" (click)="checkout()">
            {{ checkingOut ? '✓ Order Placed!' : 'Checkout' }}
          </button>

          <div class="payment-methods">
            <span>Pay securely with</span>
            <div class="pay-icons">
              <span class="pay-tag" style="background:#FFE600; color:#1A1A1A;">Lemon Squeezy</span>
            </div>
          </div>

          <button class="pm-btn pm-btn-ghost" style="width:100%; margin-top: 8px;" (click)="marketplace.clearCart()">
            Clear Cart
          </button>
        </div>

        <!-- Coupon -->
        <div class="coupon-card">
          <h4>Have a coupon?</h4>
          <div class="coupon-input">
            <input type="text" placeholder="Enter coupon code" class="filter-input" />
            <button class="pm-btn pm-btn-outline pm-btn-sm">Apply</button>
          </div>
        </div>
      </aside>
    </div>

    <app-footer></app-footer>
  `,
  styles: [`
    .cart-hero {
      background: linear-gradient(135deg, #F8FAFC, #EEF0FF);
      padding: 32px 0;
      border-bottom: 1px solid var(--pm-border-light);
    }
    .cart-hero h1 { margin: 0 0 4px; }
    .cart-hero p { margin: 0; }

    .cart-layout {
      display: flex;
      gap: 32px;
      padding-top: 32px;
      padding-bottom: 64px;
      align-items: flex-start;
    }
    .cart-main { flex: 1; min-width: 0; }
    .cart-sidebar { width: 360px; flex-shrink: 0; position: sticky; top: 80px; }

    .cart-item {
      display: flex;
      gap: 20px;
      padding: 24px;
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      border: 1px solid var(--pm-border-light);
      margin-bottom: 16px;
      transition: all var(--pm-transition-base);
      animation: fadeInUp 0.4s ease forwards;
    }
    .cart-item:hover {
      box-shadow: var(--pm-shadow-md);
    }

    .item-thumb {
      width: 100px;
      height: 80px;
      border-radius: var(--pm-radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      flex-shrink: 0;
    }

    .item-info { flex: 1; min-width: 0; }
    .item-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--pm-text-primary);
      text-decoration: none;
      display: block;
      margin-bottom: 4px;
    }
    .item-title:hover { color: var(--ion-color-primary); }
    .item-desc {
      font-size: 0.8rem;
      color: var(--pm-text-muted);
      margin: 0 0 8px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .item-meta {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .item-license, .item-reskin, .item-author {
      font-size: 0.75rem;
      padding: 3px 10px;
      border-radius: var(--pm-radius-full);
      background: var(--pm-surface-muted);
      color: var(--pm-text-secondary);
    }
    .item-license.extended { background: rgba(99,102,241,0.08); color: #6366F1; }
    .item-reskin { background: rgba(168,85,247,0.08); color: #8B5CF6; }

    .item-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
      flex-shrink: 0;
    }
    .item-price {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--ion-color-primary);
    }
    .remove-btn {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 0.75rem;
      color: var(--pm-text-muted);
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
      padding: 4px 8px;
      border-radius: var(--pm-radius-sm);
      transition: all var(--pm-transition-fast);
    }
    .remove-btn:hover { color: #EF4444; background: rgba(239,68,68,0.05); }

    /* Order Summary */
    .summary-card, .coupon-card {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      padding: 24px;
      border: 1px solid var(--pm-border-light);
      box-shadow: var(--pm-shadow-card);
      margin-bottom: 16px;
    }
    .summary-card h3 { margin: 0 0 20px; font-size: 1.1rem; }
    .summary-rows { border-bottom: 1px solid var(--pm-border-light); padding-bottom: 16px; margin-bottom: 16px; }
    .summary-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      font-size: 0.85rem;
    }
    .summary-row span { color: var(--pm-text-secondary); }
    .summary-row strong { color: var(--pm-text-primary); font-weight: 600; }
    .summary-total {
      display: flex;
      justify-content: space-between;
      font-size: 1.1rem;
      margin-bottom: 20px;
    }
    .summary-total span { font-weight: 600; }
    .summary-total strong { font-size: 1.4rem; font-weight: 800; color: var(--ion-color-primary); }

    .checkout-btn { width: 100%; }

    .payment-methods {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 16px;
      font-size: 0.75rem;
      color: var(--pm-text-muted);
      flex-wrap: wrap;
    }
    .pay-icons { display: flex; gap: 4px; }
    .pay-tag {
      padding: 3px 8px;
      background: var(--pm-surface-muted);
      border-radius: 4px;
      font-size: 0.65rem;
      font-weight: 600;
    }

    .coupon-card h4 { margin: 0 0 12px; font-size: 0.9rem; }
    .coupon-input { display: flex; gap: 8px; }
    .coupon-input input { flex: 1; }

    .empty-cart {
      text-align: center;
      padding: 80px 24px;
    }
    .empty-cart .empty-icon { font-size: 4rem; margin-bottom: 16px; }
    .empty-cart h3 { margin: 0 0 8px; }
    .empty-cart p { color: var(--pm-text-muted); margin: 0 0 24px; }

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
    }
    .filter-input:focus { border-color: var(--ion-color-primary); }

    @media (max-width: 768px) {
      .cart-layout { flex-direction: column; }
      .cart-sidebar { width: 100%; position: static; }
      .cart-item { flex-direction: column; }
      .item-right { flex-direction: row; justify-content: space-between; width: 100%; }
    }
  `],
})
export class CartComponent {
  marketplace = inject(MarketplaceService);
  checkingOut = false;

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
  private icons: Record<string, string> = {
    'mobile-apps': '📱', 'web-templates': '🌐', 'wordpress': '🔧', 'javascript': '⚡',
    'ui-kits': '🎨', 'full-stack': '🚀', 'plugins': '🧩', 'themes': '✨',
  };

  getGradient(cat: string) { return this.gradients[cat] || 'linear-gradient(135deg, #6366F1, #A855F7)'; }
  getCategoryIcon(cat: string) { return this.icons[cat] || '📦'; }

  getItemPrice(item: any): number {
    let price = item.license === 'extended' ? item.product.price * 3 : item.product.price;
    if (item.addReskin && item.product.reskinPrice) price += item.product.reskinPrice;
    return price;
  }

  hasReskin(): boolean {
    return this.marketplace.cart().some(i => i.addReskin);
  }

  getReskinTotal(): number {
    return this.marketplace.cart().filter(i => i.addReskin).reduce((s, i) => s + (i.product.reskinPrice || 0), 0);
  }

  removeItem(id: string) {
    this.marketplace.removeFromCart(id);
  }

  checkout() {
    this.checkingOut = true;
    setTimeout(() => {
      // Mock Lemon Squeezy Checkout Redirect
      window.open('https://app.lemonsqueezy.com/checkout', '_blank');
      this.marketplace.clearCart();
      this.checkingOut = false;
    }, 1000);
  }
}

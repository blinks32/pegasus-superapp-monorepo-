import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="pm-header" [class.scrolled]="isScrolled()">
      <div class="pm-container header-inner">
        <!-- Logo -->
        <a routerLink="/" class="logo">
          <span class="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32">
                  <stop offset="0%" stop-color="#6366F1"/>
                  <stop offset="100%" stop-color="#A855F7"/>
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="8" fill="url(#logoGrad)"/>
              <path d="M10 22V10h6c1.5 0 2.7.5 3.5 1.3.9.9 1.3 2 1.3 3.2 0 1.3-.4 2.4-1.3 3.2-.8.8-2 1.3-3.5 1.3H13.5V22H10z M13.5 16h2.3c.6 0 1-.2 1.4-.5.3-.4.5-.8.5-1.4s-.2-1-.5-1.4c-.4-.3-.8-.5-1.4-.5H13.5V16z" fill="white"/>
            </svg>
          </span>
          <span class="logo-text">selljust<span class="logo-accent">code</span></span>
        </a>

        <!-- Navigation -->
        <nav class="nav-links" [class.mobile-open]="mobileMenuOpen()">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMobile()">Home</a>
          <a routerLink="/browse" routerLinkActive="active" (click)="closeMobile()">Browse</a>

          <!-- Categories Dropdown -->
          <div class="nav-dropdown" (mouseenter)="showDropdown.set(true)" (mouseleave)="showDropdown.set(false)">
            <button class="nav-dropdown-trigger">
              Categories
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M2.5 4.5L6 8l3.5-3.5"/></svg>
            </button>
            <div class="dropdown-menu" *ngIf="showDropdown()">
              <a *ngFor="let cat of marketplace.categories" 
                 [routerLink]="['/browse']" 
                 [queryParams]="{category: cat.id}"
                 class="dropdown-item"
                 (click)="showDropdown.set(false); closeMobile()">
                <span class="cat-icon">{{ cat.icon }}</span>
                <div>
                  <span class="cat-label">{{ cat.label }}</span>
                  <span class="cat-count">{{ cat.count | number }} items</span>
                </div>
              </a>
            </div>
          </div>
        </nav>

        <!-- Right Actions -->
        <div class="header-actions">
          <a routerLink="/cart" class="cart-btn" title="Shopping Cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span class="cart-badge" *ngIf="marketplace.cartCount() > 0">{{ marketplace.cartCount() }}</span>
          </a>
          <a routerLink="/login" class="pm-btn pm-btn-ghost pm-btn-sm auth-btn">Login</a>
          <a routerLink="/login" [queryParams]="{register: true}" class="pm-btn pm-btn-primary pm-btn-sm auth-btn" style="margin-left: 8px;">
            Create Account
          </a>
          <button class="mobile-toggle" (click)="toggleMobile()">
            <svg *ngIf="!mobileMenuOpen()" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            <svg *ngIf="mobileMenuOpen()" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Spacer to prevent content jump -->
    <div class="header-spacer"></div>
  `,
  styles: [`
    .pm-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid transparent;
      transition: all var(--pm-transition-base);
    }
    .pm-header.scrolled {
      background: rgba(255, 255, 255, 0.95);
      border-bottom-color: var(--pm-border);
      box-shadow: var(--pm-shadow-sm);
    }

    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
      gap: 32px;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      flex-shrink: 0;
    }
    .logo-text {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--pm-text-primary);
      letter-spacing: -0.02em;
    }
    .logo-accent {
      background: var(--pm-gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .nav-links > a {
      padding: 8px 16px;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--pm-text-secondary);
      border-radius: var(--pm-radius-sm);
      transition: all var(--pm-transition-fast);
      text-decoration: none;
    }
    .nav-links > a:hover,
    .nav-links > a.active {
      color: var(--ion-color-primary);
      background: rgba(99, 102, 241, 0.06);
    }

    /* Dropdown */
    .nav-dropdown {
      position: relative;
    }
    .nav-dropdown-trigger {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 8px 16px;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--pm-text-secondary);
      background: none;
      border: none;
      cursor: pointer;
      border-radius: var(--pm-radius-sm);
      transition: all var(--pm-transition-fast);
      font-family: inherit;
    }
    .nav-dropdown-trigger:hover {
      color: var(--ion-color-primary);
      background: rgba(99, 102, 241, 0.06);
    }
    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 260px;
      background: var(--pm-surface);
      border: 1px solid var(--pm-border);
      border-radius: var(--pm-radius-md);
      box-shadow: var(--pm-shadow-xl);
      padding: 8px;
      animation: scaleIn 0.2s ease;
      z-index: 100;
    }
    .dropdown-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 12px;
      border-radius: var(--pm-radius-sm);
      text-decoration: none;
      transition: all var(--pm-transition-fast);
    }
    .dropdown-item:hover {
      background: var(--pm-surface-muted);
    }
    .cat-icon {
      font-size: 1.25rem;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--pm-surface-muted);
      border-radius: var(--pm-radius-sm);
    }
    .cat-label {
      display: block;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--pm-text-primary);
    }
    .cat-count {
      display: block;
      font-size: 0.75rem;
      color: var(--pm-text-muted);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
    }

    .cart-btn {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: var(--pm-radius-sm);
      color: var(--pm-text-secondary);
      transition: all var(--pm-transition-fast);
      text-decoration: none;
    }
    .cart-btn:hover {
      background: var(--pm-surface-muted);
      color: var(--ion-color-primary);
    }
    .cart-badge {
      position: absolute;
      top: 2px;
      right: 2px;
      width: 18px;
      height: 18px;
      background: var(--pm-gradient-warm);
      color: white;
      font-size: 0.65rem;
      font-weight: 700;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .upload-btn {
      text-decoration: none;
    }

    .mobile-toggle {
      display: none;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--pm-text-secondary);
    }

    .header-spacer {
      height: 64px;
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
        position: fixed;
        top: 64px;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--pm-surface);
        flex-direction: column;
        padding: 24px;
        gap: 8px;
        z-index: 999;
      }
      .nav-links.mobile-open {
        display: flex;
      }
      .nav-links > a {
        font-size: 1.1rem;
        padding: 14px 16px;
        width: 100%;
      }
      .nav-dropdown { width: 100%; }
      .nav-dropdown-trigger { width: 100%; font-size: 1.1rem; padding: 14px 16px; }
      .dropdown-menu { position: static; box-shadow: none; border: none; padding-left: 20px; }
      .mobile-toggle { display: flex; }
      .upload-btn { display: none; }
    }

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95) translateY(-4px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
  `],
})
export class HeaderComponent {
  marketplace = inject(MarketplaceService);
  isScrolled = signal(false);
  showDropdown = signal(false);
  mobileMenuOpen = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled.set(window.scrollY > 10);
      });
    }
  }

  closeMobile() {
    this.mobileMenuOpen.set(false);
  }

  toggleMobile() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }
}

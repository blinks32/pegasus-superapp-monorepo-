import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Main Footer -->
    <footer class="pm-footer">
      <div class="pm-container">
        <div class="footer-grid">
          <!-- Company Info -->
          <div class="footer-col footer-brand">
            <div class="footer-logo">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <defs><linearGradient id="fLogoGrad" x1="0" y1="0" x2="32" y2="32"><stop offset="0%" stop-color="#6366F1"/><stop offset="100%" stop-color="#A855F7"/></linearGradient></defs>
                <rect width="32" height="32" rx="8" fill="url(#fLogoGrad)"/>
                <text x="16" y="24" font-family="Plus Jakarta Sans, sans-serif" font-size="22" font-weight="800" text-anchor="middle" fill="white">S</text>
              </svg>
              <span>selljust<strong>code</strong></span>
            </div>
            <p class="footer-desc">The leading marketplace for SaaS Boilerplates, EdTech LMS, and Complete B2B Systems.</p>
            <div class="social-links">
              <a href="#" aria-label="Twitter" class="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="GitHub" class="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" aria-label="Discord" class="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" class="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          <!-- Marketplace -->
          <div class="footer-col">
            <h4 class="footer-heading">Marketplace</h4>
            <ul>
              <li><a routerLink="/browse">All Products</a></li>
            </ul>
          </div>

          <!-- Company -->
          <div class="footer-col">
            <h4 class="footer-heading">Company</h4>
            <ul>
              <li><a routerLink="/page/about">About Us</a></li>
              <li><a routerLink="/page/careers">Careers</a></li>
              <li><a routerLink="/page/blog">Blog</a></li>
              <li><a routerLink="/page/affiliate">Affiliate Program</a></li>
              <li><a routerLink="/page/press">Press Kit</a></li>
              <li><a routerLink="/page/contact">Contact Us</a></li>
            </ul>
          </div>

          <!-- Support -->
          <div class="footer-col">
            <h4 class="footer-heading">Support</h4>
            <ul>
              <li><a routerLink="/page/help">Help Center</a></li>
              <li><a routerLink="/page/author-guide">Author Guide</a></li>
              <li><a routerLink="/page/buyer-faq">Buyer FAQ</a></li>
              <li><a routerLink="/page/licensing">Licensing</a></li>
              <li><a routerLink="/page/refund">Refund Policy</a></li>
              <li><a routerLink="/page/report">Report an Item</a></li>
            </ul>
          </div>

          <!-- Legal -->
          <div class="footer-col">
            <h4 class="footer-heading">Legal</h4>
            <ul>
              <li><a routerLink="/page/terms">Terms of Service</a></li>
              <li><a routerLink="/page/privacy">Privacy Policy</a></li>
              <li><a routerLink="/page/cookie">Cookie Policy</a></li>
              <li><a routerLink="/page/dmca">DMCA Policy</a></li>
              <li><a routerLink="/page/gdpr">GDPR Compliance</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <!-- Payment Methods -->
        <div class="payment-section">
          <span class="payment-label">We Accept:</span>
          <div class="payment-icons">
            <div class="payment-icon" *ngFor="let pm of paymentMethods">
              <span class="pay-logo" [style.background]="pm.color">{{ pm.icon }}</span>
              <span>{{ pm.name }}</span>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
          <div class="footer-bottom-left">
            <p>&copy; {{ currentYear }} selljustcode. All rights reserved. Registered in Delaware, USA.</p>
            <p class="footer-legal-detail">selljustcode LLC &bull; EIN: 87-XXXXXXX &bull; 221 Market Street, Suite 300, San Francisco, CA 94105</p>
          </div>
          <div class="footer-bottom-right">
            <span class="footer-lang">🌍 English (US)</span>
            <span class="footer-currency">💲 USD</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    /* Trust Bar */
    .trust-bar {
      background: var(--pm-surface-muted);
      border-top: 1px solid var(--pm-border-light);
      padding: 32px 0;
    }
    .trust-inner {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }
    .trust-item {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .trust-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--pm-surface);
      border-radius: var(--pm-radius-md);
      font-size: 1.4rem;
      box-shadow: var(--pm-shadow-sm);
    }
    .trust-item strong {
      display: block;
      font-size: 0.875rem;
      color: var(--pm-text-primary);
    }
    .trust-item span {
      font-size: 0.75rem;
      color: var(--pm-text-muted);
    }

    /* Certifications */
    .certifications-bar {
      background: var(--pm-surface);
      padding: 24px 0;
      border-top: 1px solid var(--pm-border-light);
    }
    .cert-inner {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 32px;
      flex-wrap: wrap;
    }
    .cert-badge {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 16px;
      border: 1px solid var(--pm-border);
      border-radius: var(--pm-radius-sm);
      transition: all var(--pm-transition-base);
    }
    .cert-badge:hover {
      border-color: var(--ion-color-primary);
      box-shadow: var(--pm-shadow-sm);
    }
    .cert-icon-wrap {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .cert-emoji { font-size: 1rem; }
    .cert-name {
      display: block;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--pm-text-primary);
    }
    .cert-detail {
      display: block;
      font-size: 0.65rem;
      color: var(--pm-text-muted);
    }



    /* Main Footer */
    .pm-footer {
      background: #0F172A;
      color: #94A3B8;
      padding: 64px 0 0;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
      gap: 40px;
      padding-bottom: 48px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .footer-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.2rem;
      color: white;
      margin-bottom: 16px;
    }
    .footer-logo strong { color: #A5B4FC; }
    .footer-desc {
      font-size: 0.875rem;
      line-height: 1.7;
      margin-bottom: 20px;
    }
    .social-links {
      display: flex;
      gap: 8px;
    }
    .social-link {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--pm-radius-sm);
      background: rgba(255,255,255,0.06);
      color: #94A3B8;
      transition: all var(--pm-transition-fast);
      text-decoration: none;
    }
    .social-link:hover {
      background: rgba(99,102,241,0.2);
      color: #A5B4FC;
      transform: translateY(-2px);
    }

    .footer-heading {
      color: white;
      font-size: 0.875rem;
      font-weight: 700;
      margin: 0 0 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .footer-col ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .footer-col li {
      margin-bottom: 10px;
    }
    .footer-col a {
      color: #94A3B8;
      font-size: 0.875rem;
      text-decoration: none;
      transition: color var(--pm-transition-fast);
    }
    .footer-col a:hover {
      color: white;
    }

    /* Payment */
    .payment-section {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 24px 0;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      flex-wrap: wrap;
    }
    .payment-label {
      font-size: 0.8rem;
      font-weight: 600;
      color: #64748B;
    }
    .payment-icons {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .payment-icon {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 10px;
      background: rgba(255,255,255,0.04);
      border-radius: 6px;
      font-size: 0.75rem;
      color: #94A3B8;
    }
    .pay-logo {
      width: 24px;
      height: 16px;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.6rem;
      color: white;
      font-weight: 700;
    }

    /* Bottom Bar */
    .footer-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 0;
      gap: 16px;
      flex-wrap: wrap;
    }
    .footer-bottom p {
      margin: 0;
      font-size: 0.8rem;
    }
    .footer-legal-detail {
      font-size: 0.7rem !important;
      color: #475569;
      margin-top: 4px !important;
    }
    .footer-bottom-right {
      display: flex;
      gap: 16px;
      font-size: 0.8rem;
    }

    @media (max-width: 1024px) {
      .footer-grid { grid-template-columns: 1fr 1fr 1fr; }
      .footer-brand { grid-column: span 3; }
    }
    @media (max-width: 768px) {
      .trust-inner { grid-template-columns: repeat(2, 1fr); }
      .footer-grid { grid-template-columns: 1fr 1fr; }
      .footer-brand { grid-column: span 2; }
    }
    @media (max-width: 480px) {
      .trust-inner { grid-template-columns: 1fr; }
      .footer-grid { grid-template-columns: 1fr; }
      .footer-brand { grid-column: span 1; }
    }
  `],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  paymentMethods = [
    { name: 'Visa', icon: 'V', color: '#1A1F71' },
    { name: 'Mastercard', icon: 'MC', color: '#EB001B' },
    { name: 'PayPal', icon: 'PP', color: '#003087' },
    { name: 'Stripe', icon: 'S', color: '#635BFF' },
    { name: 'Apple Pay', icon: '', color: '#000000' },
    { name: 'Google Pay', icon: 'G', color: '#4285F4' },
    { name: 'Crypto', icon: '₿', color: '#F7931A' },
  ];
}

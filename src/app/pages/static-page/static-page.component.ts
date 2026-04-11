import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-static-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main class="static-page">
      <div class="pm-container">
        <div class="page-content-card">
          <h1 class="page-title">{{ title }}</h1>
          <div class="page-body" [innerHTML]="content"></div>
        </div>
      </div>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .static-page {
      padding: 100px 0 80px;
      min-height: calc(100vh - 200px);
      background: var(--pm-background);
    }
    .page-content-card {
      max-width: 800px;
      margin: 0 auto;
      background: var(--pm-surface);
      padding: 48px;
      border-radius: var(--pm-radius-xl);
      box-shadow: var(--pm-shadow-sm);
      border: 1px solid var(--pm-border-light);
    }
    .page-title {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--pm-text-primary);
      margin-top: 0;
      margin-bottom: 32px;
      border-bottom: 2px solid var(--pm-gray-100);
      padding-bottom: 16px;
    }
    .page-body {
      color: var(--pm-text-secondary);
      line-height: 1.8;
      font-size: 1.05rem;
    }
    ::ng-deep .page-body h2 {
      color: var(--pm-text-primary);
      margin-top: 32px;
      margin-bottom: 16px;
      font-size: 1.5rem;
    }
    ::ng-deep .page-body p {
      margin-bottom: 24px;
    }
    ::ng-deep .page-body ul {
      margin-bottom: 24px;
      padding-left: 24px;
    }
    ::ng-deep .page-body li {
      margin-bottom: 8px;
    }
    
    @media (max-width: 768px) {
      .page-content-card { padding: 32px 24px; }
      .page-title { font-size: 2rem; }
    }
  `]
})
export class StaticPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);

  slug = '';
  title = '';
  content: SafeHtml = '';

  private pageData: Record<string, { title: string, html: string }> = {
    'about': {
      title: 'About Us',
      html: `
        <p>Welcome to <strong>selljustcode</strong>! We are the leading marketplace dedicated to premium SaaS Boilerplates, Complete Business Systems, EdTech LMS, and PvP Multiplayer Games.</p>
        <p>Our mission is to empower developers worldwide by providing a platform where they can seamlessly sell their top-tier source codes while allowing buyers to kickstart their projects with robust, high-quality foundations.</p>
        <h2>Our Vision</h2>
        <p>We envision a world where development time is drastically reduced, enabling creators to focus on innovation rather than reinventing the wheel.</p>
      `
    },
    'careers': {
      title: 'Careers',
      html: `
        <p>Join the <strong>selljustcode</strong> team. We're a fully remote, globally distributed group of developers, designers, and creators.</p>
        <h2>Open Positions</h2>
        <p>There are currently no open positions. Please check back later or subscribe to our newsletter for updates!</p>
      `
    },
    'affiliate': {
      title: 'Affiliate Program',
      html: `
        <p>Earn a generous commission by promoting premium source codes available on <strong>selljustcode</strong>!</p>
        <h2>How it works</h2>
        <ul>
          <li>Apply for an affiliate account.</li>
          <li>Share your unique referral links across your social platforms, blogs, and videos.</li>
          <li>Earn up to 20% commission on every successful purchase made through your link.</li>
        </ul>
        <p>Contact support to get your account upgraded to an Affiliate today.</p>
      `
    },
    'press': {
      title: 'Press Kit',
      html: `
        <p>Looking to mention <strong>selljustcode</strong> in your article, video, or publication?</p>
        <p>Please reach out to our media team for official logos, brand guidelines, and executive quotes at <a href="mailto:press@selljustcode.com">press@selljustcode.com</a>.</p>
      `
    },
    'contact': {
      title: 'Contact Us',
      html: `
        <p>Have a question or need assistance? Our support team is here to help.</p>
        <ul>
          <li><strong>General Inquiries:</strong> hello@selljustcode.com</li>
          <li><strong>Support:</strong> support@selljustcode.com</li>
        </ul>
        <p>We aim to respond to all inquiries within 24-48 business hours.</p>
      `
    },
    'help': {
      title: 'Help Center',
      html: `
        <p>Browse our knowledge base to find answers to commonly asked questions.</p>
        <h2>Popular Topics</h2>
        <ul>
          <li>How to download my purchased files?</li>
          <li>What is the difference between Regular and Extended licenses?</li>
          <li>How to request support from an author?</li>
        </ul>
        <p>If you cannot find the answer you need, please visit our Contact page.</p>
      `
    },
    'author-guide': {
      title: 'Author Guide',
      html: `
        <p>Want to sell your own code on <strong>selljustcode</strong>?</p>
        <h2>Submission Guidelines</h2>
        <ul>
          <li>Provide comprehensive, well-documented source code.</li>
          <li>Ensure the code works without errors in the latest stable release of its respective framework or platform.</li>
          <li>Include high-quality preview images and ideally a demo link.</li>
        </ul>
        <p>Our review team will verify your submission before it goes live on the marketplace.</p>
      `
    },
    'buyer-faq': {
      title: 'Buyer FAQ',
      html: `
        <p>Everything you need to know before making a purchase.</p>
        <h2>Will I receive updates?</h2>
        <p>Yes, any future updates posted by the author will be available to you free of charge.</p>
        <h2>Can I hire the author for custom modifications?</h2>
        <p>Absolutely! Look for the "Reskin / Setup" add-on during checkout, or message the author directly on their profile.</p>
      `
    },
    'licensing': {
      title: 'Licensing Information',
      html: `
        <p>We offer two primary licensing tiers to suit your needs:</p>
        <h2>Regular License</h2>
        <p>Use the item to create a single end product for yourself or for one client. The end product <strong>can be distributed for free</strong>.</p>
        <h2>Extended License</h2>
        <p>Use the item to create a single end product where the end users <strong>can be charged to access the product</strong>.</p>
      `
    },
    'refund': {
      title: 'Refund Policy',
      html: `
        <p>We stand behind the quality of our marketplace. However, due to the digital nature of source code, we adhere to strict refund guidelines.</p>
        <h2>When are refunds granted?</h2>
        <ul>
          <li>The item is 'not as described' or materially flawed.</li>
          <li>There is a security vulnerability in the code.</li>
          <li>The author refuses to provide support for a broken item.</li>
        </ul>
        <p>We do not grant refunds for "buyer's remorse" or a lack of technical expertise to utilize the product.</p>
      `
    },
    'report': {
      title: 'Report an Item',
      html: `
        <p>If you believe a product on our marketplace violates copyright, contains malicious code, or breaches our terms of service, please report it immediately.</p>
        <p>Email our Trust and Safety team at <a href="mailto:abuse@selljustcode.com">abuse@selljustcode.com</a> with the URL of the offending item and your reasoning.</p>
      `
    },
    'terms': {
      title: 'Terms of Service',
      html: `
        <p>These terms establish a legal agreement between you and <strong>selljustcode</strong>.</p>
        <p>By accessing the marketplace, creating an account, or purchasing digital items, you agree to comply with our platform rules and licensing guidelines.</p>
        <h2>Accounts</h2>
        <p>You must be 18 years or older to become an Author. Buyers of any age with valid payment methods may purchase items.</p>
      `
    },
    'privacy': {
      title: 'Privacy Policy',
      html: `
        <p>Your privacy is important to us. This policy details how we handle your data.</p>
        <h2>Data Collection</h2>
        <p>We collect essential information to process your orders, provide customer support, and improve our platform experiences. We do not sell your personal data to third parties.</p>
        <h2>Cookies</h2>
        <p>We use local storage and cookies strictly to manage active cart sessions, authentication tokens, and site preferences.</p>
      `
    }
  };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
      const data = this.pageData[this.slug];
      
      if (data) {
        this.title = data.title;
        this.content = this.sanitizer.bypassSecurityTrustHtml(data.html);
      } else {
        this.title = 'Page Not Found';
        this.content = this.sanitizer.bypassSecurityTrustHtml('<p>The requested page could not be found.</p>');
      }
    });
  }
}

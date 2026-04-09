import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private router = inject(Router);
  private dom = inject(DOCUMENT);

  private readonly siteName = 'selljustcode';
  private readonly siteUrl = 'https://selljustcode.com';
  private readonly defaultDescription = 'Buy and sell premium Unity games, Ionic apps, source code, templates, and digital assets. Trusted marketplace for developers.';
  private readonly defaultImage = `${this.siteUrl}/assets/og-image.png`;

  init() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.updateCanonical(this.siteUrl + e.urlAfterRedirects);
    });
  }

  updateTitle(pageTitle: string) {
    const full = pageTitle ? `${pageTitle} | ${this.siteName}` : `${this.siteName} — Premium Code Marketplace`;
    this.title.setTitle(full);
    this.meta.updateTag({ property: 'og:title', content: full });
    this.meta.updateTag({ name: 'twitter:title', content: full });
  }

  updateDescription(desc: string) {
    const description = desc || this.defaultDescription;
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }

  updateImage(url: string) {
    const image = url || this.defaultImage;
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  updateUrl(url: string) {
    this.meta.updateTag({ property: 'og:url', content: url });
  }

  updateCanonical(url: string) {
    let link: HTMLLinkElement | null = this.dom.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
    }
    link.setAttribute('href', url);
    this.updateUrl(url);
  }

  /**
   * Set product-specific structured data (JSON-LD) for rich search results.
   */
  setProductSchema(product: {
    name: string;
    description: string;
    price: number;
    currency?: string;
    image?: string;
    url: string;
    rating?: number;
    ratingCount?: number;
    seller?: string;
    category?: string;
  }) {
    this.removeSchema();
    const schema: any = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: product.image || this.defaultImage,
      url: product.url,
      brand: {
        '@type': 'Brand',
        name: product.seller || 'selljustcode'
      },
      category: product.category || 'Software',
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: product.currency || 'USD',
        availability: 'https://schema.org/InStock',
        url: product.url,
        seller: {
          '@type': 'Organization',
          name: product.seller || 'selljustcode'
        }
      }
    };

    if (product.rating && product.ratingCount && product.ratingCount > 0) {
      schema.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.ratingCount,
        bestRating: 5,
        worstRating: 1
      };
    }

    this.insertSchema(schema);
  }

  /**
   * Set website-level structured data.
   */
  setWebsiteSchema() {
    this.removeSchema();
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'selljustcode',
      url: this.siteUrl,
      description: this.defaultDescription,
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${this.siteUrl}/browse?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    };
    this.insertSchema(schema);
  }

  /**
   * Set organization structured data.
   */
  setOrganizationSchema() {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'selljustcode',
      url: this.siteUrl,
      logo: `${this.siteUrl}/assets/icon/favicon.png`,
      sameAs: [],
      description: this.defaultDescription,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        url: `${this.siteUrl}/page/contact`
      }
    };
    this.insertSchema(schema);
  }

  private insertSchema(data: any) {
    const script = this.dom.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-seo', 'structured-data');
    script.textContent = JSON.stringify(data);
    this.dom.head.appendChild(script);
  }

  private removeSchema() {
    const existing = this.dom.querySelectorAll('script[data-seo="structured-data"]');
    existing.forEach((el: any) => el.remove());
  }
}

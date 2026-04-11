import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    
    <main class="blog-detail-page">
      <div class="pm-container">
        <!-- Back Button -->
        <a routerLink="/blogs" class="back-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Back to Articles
        </a>

        <!-- Loading / No Article -->
        <div *ngIf="isLoading()" class="detail-skeleton">
          <div class="skel-meta"></div>
          <div class="skel-title"></div>
          <div class="skel-para"></div>
          <div class="skel-para"></div>
          <div class="skel-para short"></div>
        </div>

        <div *ngIf="!isLoading() && !blog()" class="error-state">
          <h2>Article Not Found</h2>
          <p>The requested blog post doesn't exist or has been removed.</p>
          <a routerLink="/blogs" class="pm-btn pm-btn-primary">View All Articles</a>
        </div>

        <!-- Article Content -->
        <article *ngIf="blog()" class="blog-content shadow-premium">
          <header class="blog-header">
            <div class="blog-meta">
              <span>Published on {{ blog().createdAt?.toDate() | date:'longDate' }}</span>
              <span class="meta-separator">•</span>
              <span>By {{ blog().author || 'selljustcode team' }}</span>
            </div>
            <h1 class="blog-title">{{ blog().title }}</h1>
            <p class="blog-lead">{{ blog().excerpt }}</p>
          </header>

          <div class="blog-body" [innerHTML]="blog().content"></div>

          <footer class="blog-footer">
            <div class="share-info">
              <h3>Enjoyed this article?</h3>
              <p>Follow us on Twitter for more insights and project releases.</p>
              <a href="https://twitter.com/selljustcode" target="_blank" class="pm-btn pm-btn-outline pm-btn-sm">Follow &#64;selljustcode</a>
            </div>
          </footer>
        </article>
      </div>
    </main>

    <app-footer></app-footer>
  `,
  styles: [`
    .blog-detail-page {
      padding: 40px 0 100px;
      background: var(--pm-background);
      min-height: 80vh;
    }
    
    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--pm-text-muted);
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      margin-bottom: 32px;
      transition: color 0.2s;
    }
    .back-link:hover {
      color: var(--ion-color-primary);
    }

    .blog-content {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-xl);
      max-width: 900px;
      margin: 0 auto;
      padding: 60px;
      border: 1px solid var(--pm-border-light);
    }
    .shadow-premium {
      box-shadow: 0 10px 40px rgba(0,0,0,0.03);
    }

    .blog-header {
      margin-bottom: 48px;
    }
    .blog-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 0.9rem;
      color: var(--pm-text-muted);
      margin-bottom: 24px;
      font-weight: 500;
    }
    .meta-separator { opacity: 0.5; }

    .blog-title {
      font-size: 3rem;
      font-weight: 900;
      color: var(--pm-text-primary);
      line-height: 1.1;
      margin-bottom: 24px;
      letter-spacing: -0.01em;
    }
    .blog-lead {
      font-size: 1.25rem;
      line-height: 1.6;
      color: var(--pm-text-secondary);
      font-weight: 500;
      border-left: 4px solid var(--ion-color-primary-transparent);
      padding-left: 24px;
    }

    .blog-body {
      font-size: 1.15rem;
      line-height: 1.8;
      color: var(--pm-text-primary);
    }
    ::ng-deep .blog-body p {
      margin-bottom: 24px;
    }
    ::ng-deep .blog-body h2 {
      font-size: 2rem;
      font-weight: 800;
      margin: 48px 0 20px;
      letter-spacing: -0.01em;
    }
    ::ng-deep .blog-body ul, ::ng-deep .blog-body ol {
      margin-bottom: 32px;
      padding-left: 24px;
    }
    ::ng-deep .blog-body li {
      margin-bottom: 12px;
    }
    ::ng-deep .blog-body img {
      max-width: 100%;
      border-radius: var(--pm-radius-md);
      margin: 32px 0;
    }
    ::ng-deep .blog-body pre {
      background: #1e293b;
      color: #f8fafc;
      padding: 24px;
      border-radius: var(--pm-radius-md);
      overflow-x: auto;
      margin-bottom: 32px;
    }

    .blog-footer {
      margin-top: 60px;
      padding-top: 48px;
      border-top: 1px solid var(--pm-border-light);
    }
    .share-info {
      text-align: center;
      max-width: 500px;
      margin: 0 auto;
    }
    .share-info h3 { margin-bottom: 12px; }
    .share-info p { color: var(--pm-text-muted); margin-bottom: 24px; }

    /* Skeletons */
    .detail-skeleton div {
      background: var(--pm-surface-muted);
      border-radius: 4px;
      animation: pulse 1.5s infinite;
      margin-bottom: 24px;
    }
    .skel-meta { height: 20px; width: 300px; }
    .skel-title { height: 60px; width: 80%; }
    .skel-para { height: 20px; width: 100%; }
    .skel-para.short { width: 60%; }

    @keyframes pulse {
      0% { opacity: 0.6; }
      50% { opacity: 1; }
      100% { opacity: 0.6; }
    }

    .error-state {
      text-align: center;
      padding: 100px 0;
    }

    @media (max-width: 768px) {
      .blog-content { padding: 32px 24px; }
      .blog-title { font-size: 2rem; }
      .blog-lead { font-size: 1.1rem; padding-left: 16px; }
    }
  `]
})
export class BlogDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private firestore = inject(Firestore);
  
  blog = signal<any>(null);
  isLoading = signal(true);

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.isLoading.set(false);
      return;
    }

    try {
      const blogDoc = doc(this.firestore, `Blogs/${id}`);
      const snap = await getDoc(blogDoc);
      
      if (snap.exists()) {
        this.blog.set({ id: snap.id, ...snap.data() });
      }
    } catch (err) {
      console.error('Error fetching blog detail:', err);
    } finally {
      this.isLoading.set(false);
    }
  }
}

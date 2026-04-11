import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Firestore, collection, query, where, orderBy, collectionData } from '@angular/fire/firestore';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    
    <main class="blogs-page">
      <section class="blogs-hero">
        <div class="pm-container">
          <h1 class="pm-heading-lg">Developer Blog</h1>
          <p class="pm-text-secondary">Insights, tutorials, and updates from the selljustcode team.</p>
        </div>
      </section>

      <div class="pm-container">
        <!-- Loading State -->
        <div *ngIf="isLoading()" class="blogs-grid">
          <div class="blog-skeleton" *ngFor="let i of [1,2,3,4,5,6]">
            <div class="skeleton-img"></div>
            <div class="skeleton-content">
              <div class="skeleton-title"></div>
              <div class="skeleton-text"></div>
              <div class="skeleton-text short"></div>
            </div>
          </div>
        </div>

        <!-- Blog Grid -->
        <div *ngIf="!isLoading()" class="blogs-grid stagger-children">
          <article class="blog-card" *ngFor="let blog of blogs()">
            <div class="blog-card-content">
              <div class="blog-meta">
                <span class="blog-date">{{ blog.createdAt?.toDate() | date:'mediumDate' }}</span>
              </div>
              <h2 class="blog-title">
                <a [routerLink]="['/blog', blog.id]">{{ blog.title }}</a>
              </h2>
              <p class="blog-excerpt">{{ blog.excerpt }}</p>
              <a [routerLink]="['/blog', blog.id]" class="read-more">
                Read Article
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div *ngIf="!isLoading() && blogs().length === 0" class="empty-blogs">
          <div class="empty-icon">📰</div>
          <h3>No articles yet</h3>
          <p>Our writers are busy preparing some amazing content. Check back soon!</p>
          <a routerLink="/" class="pm-btn pm-btn-primary">Back to Home</a>
        </div>
      </div>
    </main>

    <app-footer></app-footer>
  `,
  styles: [`
    .blogs-page {
      padding: 60px 0 100px;
      min-height: 70vh;
      background: var(--pm-background);
    }
    .blogs-hero {
      text-align: center;
      margin-bottom: 60px;
    }
    .blogs-hero h1 {
      margin-bottom: 12px;
    }

    .blogs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 32px;
    }

    .blog-card {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-xl);
      border: 1px solid var(--pm-border-light);
      overflow: hidden;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
    }
    .blog-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--pm-shadow-lg);
      border-color: var(--ion-color-primary-transparent);
    }

    .blog-card-content {
      padding: 32px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .blog-meta {
      margin-bottom: 16px;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--pm-text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .blog-title {
      font-size: 1.5rem;
      font-weight: 800;
      margin-bottom: 16px;
      line-height: 1.3;
    }
    .blog-title a {
      color: var(--pm-text-primary);
      text-decoration: none;
      transition: color 0.2s;
    }
    .blog-card:hover .blog-title a {
      color: var(--ion-color-primary);
    }

    .blog-excerpt {
      color: var(--pm-text-secondary);
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 24px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .read-more {
      margin-top: auto;
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      color: var(--ion-color-primary);
      text-decoration: none;
      font-size: 0.95rem;
    }
    .read-more svg {
      transition: transform 0.2s;
    }
    .read-more:hover svg {
      transform: translateX(4px);
    }

    /* Skeletons */
    .blog-skeleton {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-xl);
      overflow: hidden;
      border: 1px solid var(--pm-border-light);
    }
    .skeleton-img {
      height: 200px;
      background: var(--pm-surface-muted);
    }
    .skeleton-content {
      padding: 32px;
    }
    .skeleton-title {
      height: 24px;
      background: var(--pm-surface-muted);
      margin-bottom: 16px;
      border-radius: 4px;
      width: 80%;
    }
    .skeleton-text {
      height: 14px;
      background: var(--pm-surface-muted);
      margin-bottom: 8px;
      border-radius: 4px;
    }
    .skeleton-text.short {
      width: 60%;
    }
    .skeleton-img, .skeleton-title, .skeleton-text {
      animation: pulse 1.5s infinite ease-in-out;
    }

    @keyframes pulse {
      0% { opacity: 0.6; }
      50% { opacity: 1; }
      100% { opacity: 0.6; }
    }

    .empty-blogs {
      text-align: center;
      padding: 80px 20px;
      max-width: 500px;
      margin: 0 auto;
    }
    .empty-icon {
      font-size: 4rem;
      margin-bottom: 24px;
    }
    .empty-blogs h3 {
      font-size: 1.5rem;
      margin-bottom: 12px;
    }
    .empty-blogs p {
      color: var(--pm-text-muted);
      margin-bottom: 32px;
    }

    @media (max-width: 768px) {
      .blogs-grid { grid-template-columns: 1fr; }
      .blog-card-content { padding: 24px; }
      .blog-title { font-size: 1.25rem; }
    }
  `]
})
export class BlogsComponent implements OnInit {
  private firestore = inject(Firestore);
  
  blogs = signal<any[]>([]);
  isLoading = signal(true);

  ngOnInit() {
    const blogsRef = collection(this.firestore, 'Blogs');
    const q = query(
      blogsRef, 
      where('published', '==', true),
      orderBy('createdAt', 'desc')
    );

    collectionData(q, { idField: 'id' }).subscribe({
      next: (data) => {
        this.blogs.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching blogs:', err);
        this.isLoading.set(false);
      }
    });
  }
}

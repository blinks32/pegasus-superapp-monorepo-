import { Component, inject, OnInit, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MarketplaceService } from '../../services/marketplace.service';
import { AuthService } from '../../services/auth.service';
import { Firestore, collection, collectionData, doc, updateDoc, addDoc, deleteDoc, serverTimestamp, query, orderBy } from '@angular/fire/firestore';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <section class="admin-hero">
      <div class="pm-container">
        <div class="hero-row">
          <div>
            <h1 class="pm-heading-lg">📊 Author Dashboard</h1>
            <p class="pm-text-secondary">Manage your projects, track sales, and monitor performance</p>
          </div>
          <div class="hero-actions">
            <button (click)="activeTab = 'dashboard'" [class.active]="activeTab === 'dashboard'" class="tab-btn">Dashboard</button>
            <button (click)="activeTab = 'blogs'" [class.active]="activeTab === 'blogs'" class="tab-btn">Blogs</button>
            <button (click)="activeTab = 'settings'" [class.active]="activeTab === 'settings'" class="tab-btn">Settings</button>
            <a routerLink="/admin/submit" class="pm-btn pm-btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
              Submit Project
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="pm-container admin-content">
      <!-- Dashboard View -->
      <div *ngIf="activeTab === 'dashboard'" class="fade-in">
        <div class="stats-grid">
          <div class="stat-card" *ngFor="let stat of dashboardStats">
            <div class="stat-card-icon" [style.background]="stat.gradient">{{ stat.icon }}</div>
            <div class="stat-card-info">
              <span class="stat-card-value">{{ stat.value }}</span>
              <span class="stat-card-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <div class="projects-card">
          <div class="card-header">
            <h3>My Projects</h3>
            <div class="header-tabs">
              <button [class.active]="projectTab === 'all'" (click)="projectTab = 'all'">All ({{ getFilteredProjects().length }})</button>
              <button [class.active]="projectTab === 'published'" (click)="projectTab = 'published'">Published</button>
              <button [class.active]="projectTab === 'pending'" (click)="projectTab = 'pending'">Pending</button>
            </div>
          </div>

          <div class="project-row" *ngFor="let project of getFilteredProjects()">
            <div class="project-info">
              <span class="project-title">{{ project.title }}</span>
              <span class="project-desc">{{ project.shortDescription }}</span>
            </div>
            <div class="project-status">
              <span class="status-badge" [class]="'status-' + (project.status || 'pending')">
                {{ (project.status || 'pending') | titlecase }}
              </span>
            </div>
            <div class="project-price">$ {{ project.price }}</div>
          </div>

          <div class="empty-projects" *ngIf="getFilteredProjects().length === 0">
            <p>No projects found. <a routerLink="/admin/submit">Submit your first project →</a></p>
          </div>
        </div>
      </div>

      <!-- Settings View -->
      <div *ngIf="activeTab === 'settings'" class="fade-in">
        <div class="settings-card">
          <div class="settings-header">
            <h3>Admin Settings</h3>
            <p>Configure your admin preferences</p>
          </div>
        </div>
      </div>

      <!-- Blog Management View -->
      <div *ngIf="activeTab === 'blogs'" class="fade-in">
        <div class="settings-card">
          <div class="settings-header">
            <h3>Blog Management</h3>
            <p>Create, edit, and manage blog posts</p>
          </div>

          <div class="blog-management">
            <div class="blog-actions">
              <button class="pm-btn pm-btn-primary" (click)="openBlogModal()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
                New Blog Post
              </button>
            </div>

            <div class="blogs-list" *ngIf="blogs.length > 0">
              <div class="blog-item" *ngFor="let blog of blogs">
                <div class="blog-item-content">
                  <div class="blog-item-header">
                    <h4>{{ blog.title || 'Untitled Blog' }}</h4>
                    <div class="blog-actions">
                      <button class="pm-btn pm-btn-sm pm-btn-ghost" (click)="openBlogModal(blog)">Edit</button>
                      <button class="pm-btn pm-btn-sm pm-btn-danger" (click)="deleteBlog(blog.id)">Delete</button>
                    </div>
                  </div>
                  <p class="blog-excerpt">{{ blog.excerpt || 'No content' }}</p>
                  <div class="blog-meta">
                    <span class="blog-status" [class]="blog.published ? 'status-published' : 'status-draft'">
                      {{ blog.published ? 'Published' : 'Draft' }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div *ngIf="blogs.length === 0" class="empty-state">
              <h4>No blog posts yet</h4>
              <p>Create your first blog post to get started.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Modal -->
    <div class="modal-overlay" *ngIf="showBlogModal" (click)="closeBlogModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>{{ editingBlogId ? 'Edit Blog Post' : 'New Blog Post' }}</h3>
          <button class="modal-close" (click)="closeBlogModal()">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="blogTitle">Title *</label>
            <input id="blogTitle" type="text" [(ngModel)]="blogForm.title" placeholder="Enter blog title" class="form-input" />
          </div>
          <div class="form-group">
            <label for="blogExcerpt">Excerpt *</label>
            <textarea id="blogExcerpt" [(ngModel)]="blogForm.excerpt" placeholder="Short description" class="form-input" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="blogContent">Content *</label>
            <textarea id="blogContent" [(ngModel)]="blogForm.content" placeholder="Full blog content" class="form-input" rows="10"></textarea>
          </div>
          <div class="form-group">
            <label class="checkbox-label">
              <input type="checkbox" [(ngModel)]="blogForm.published" />
              <span>Published</span>
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button class="pm-btn pm-btn-ghost" (click)="closeBlogModal()">Cancel</button>
          <button class="pm-btn pm-btn-primary" (click)="saveBlogFromModal()" [disabled]="!blogForm.title || !blogForm.excerpt">
            {{ editingBlogId ? 'Update' : 'Create' }}
          </button>
        </div>
      </div>
    </div>

    <app-footer></app-footer>
  `,
  styles: [`
    .admin-hero {
      background: linear-gradient(135deg, #F8FAFC, #EEF0FF);
      padding: 32px 0;
      border-bottom: 1px solid var(--pm-border-light);
    }
    .hero-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }
    .admin-hero h1 { margin: 0 0 4px; }
    .admin-hero p { margin: 0; }
    .hero-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .tab-btn {
      padding: 10px 20px;
      border-radius: var(--pm-radius-md);
      border: none;
      background: transparent;
      color: var(--pm-text-secondary);
      font-family: inherit;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .tab-btn:hover { background: rgba(0,0,0,0.05); }
    .tab-btn.active { background: white; color: var(--ion-color-primary); box-shadow: var(--pm-shadow-sm); }
    .admin-content { padding: 32px 0 64px; }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 20px;
      margin-bottom: 32px;
    }
    .stat-card {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      padding: 24px;
      border: 1px solid var(--pm-border-light);
      box-shadow: var(--pm-shadow-sm);
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .stat-card-icon {
      width: 56px;
      height: 56px;
      border-radius: var(--pm-radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }
    .stat-card-info { flex: 1; }
    .stat-card-value { display: block; font-size: 1.5rem; font-weight: 700; }
    .stat-card-label { display: block; font-size: 0.85rem; color: var(--pm-text-muted); }

    .projects-card {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      padding: 24px;
      border: 1px solid var(--pm-border-light);
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      flex-wrap: wrap;
      gap: 12px;
    }
    .card-header h3 { margin: 0; }
    .header-tabs { display: flex; gap: 4px; }
    .header-tabs button {
      padding: 8px 16px;
      border: none;
      background: transparent;
      border-radius: var(--pm-radius-sm);
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      color: var(--pm-text-muted);
    }
    .header-tabs button.active { background: var(--pm-surface-muted); color: var(--pm-text-primary); }

    .project-row {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 0;
      border-bottom: 1px solid var(--pm-border-light);
    }
    .project-info { flex: 1; }
    .project-title { display: block; font-weight: 600; }
    .project-desc { display: block; font-size: 0.85rem; color: var(--pm-text-muted); }
    .status-badge { padding: 4px 12px; border-radius: var(--pm-radius-full); font-size: 0.75rem; font-weight: 600; }
    .status-published { background: rgba(16, 185, 129, 0.1); color: #10B981; }
    .status-pending { background: rgba(245, 158, 11, 0.1); color: #F59E0B; }
    .project-price { font-weight: 600; }
    .empty-projects { text-align: center; padding: 40px 20px; color: var(--pm-text-muted); }

    .settings-card {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      border: 1px solid var(--pm-border-light);
      padding: 32px;
    }
    .settings-header { margin-bottom: 32px; }
    .settings-header h3 { margin: 0 0 8px; }
    .settings-header p { margin: 0; color: var(--pm-text-muted); }

    .blog-management { margin-top: 20px; }
    .blog-actions { margin-bottom: 24px; }
    .blogs-list { display: flex; flex-direction: column; gap: 16px; }
    .blog-item {
      background: var(--pm-surface);
      border: 1px solid var(--pm-border-light);
      border-radius: var(--pm-radius-md);
      padding: 20px;
    }
    .blog-item-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
    .blog-item-header h4 { margin: 0; }
    .blog-excerpt { margin: 0 0 12px; color: var(--pm-text-secondary); font-size: 0.9rem; }
    .blog-meta { display: flex; align-items: center; gap: 12px; font-size: 0.8rem; }
    .blog-status { padding: 4px 8px; border-radius: var(--pm-radius-sm); font-weight: 600; font-size: 0.75rem; }
    .status-published { background: rgba(16, 185, 129, 0.1); color: #10B981; }
    .status-draft { background: rgba(245, 158, 11, 0.1); color: #F59E0B; }
    .empty-state { text-align: center; padding: 48px 24px; color: var(--pm-text-muted); }

    .modal-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 20px;
    }
    .modal-content {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      width: 100%;
      max-width: 600px;
      max-height: 90vh;
      overflow-y: auto;
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      border-bottom: 1px solid var(--pm-border-light);
    }
    .modal-header h3 { margin: 0; }
    .modal-close { background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--pm-text-muted); }
    .modal-body { padding: 24px; }
    .modal-body .form-group { margin-bottom: 20px; }
    .modal-body .form-group label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 8px; }
    .form-input {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid var(--pm-border);
      border-radius: var(--pm-radius-sm);
      font-family: inherit;
      font-size: 0.9rem;
    }
    .form-input:focus { outline: none; border-color: var(--ion-color-primary); }
    .checkbox-label { display: flex; align-items: center; gap: 8px; cursor: pointer; }
    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      padding: 16px 24px;
      border-top: 1px solid var(--pm-border-light);
    }

    .fade-in { animation: fadeIn 0.3s ease-out; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

    @media (max-width: 768px) {
      .hero-row { flex-direction: column; align-items: flex-start; }
      .stats-grid { grid-template-columns: 1fr; }
      .project-row { flex-wrap: wrap; }
      .project-price { display: none; }
    }
  `],
})
export class AdminComponent implements OnInit {
  marketplace = inject(MarketplaceService);
  authService = inject(AuthService);
  firestore = inject(Firestore);

  activeTab = 'dashboard';
  projectTab = 'all';
  dashboardStats: any[] = [];
  blogs: any[] = [];
  showBlogModal = false;
  blogForm = { title: '', content: '', excerpt: '', published: false };
  editingBlogId: string | null = null;

  constructor() {
    effect(() => {
      this.calculateStats();
    });
  }

  async ngOnInit() {
    this.calculateStats();
    this.loadBlogs();
  }

  calculateStats() {
    const products = this.marketplace.products();
    const totalRev = products.reduce((sum, p) => sum + (p.price * (p.totalSales || 0)), 0);
    const totalSales = products.reduce((sum, p) => sum + (p.totalSales || 0), 0);
    const totalVisits = products.reduce((sum, p) => sum + (p.totalVisits || 0), 0);
    const avgRating = products.length > 0 ? products.reduce((sum, p) => sum + (p.rating || 0), 0) / products.length : 0;

    this.dashboardStats = [
      { icon: '💰', label: 'Total Revenue', value: '$' + totalRev.toLocaleString(), gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.15))' },
      { icon: '📦', label: 'Products Sold', value: totalSales.toString(), gradient: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15))' },
      { icon: '👁️', label: 'Total Views', value: this.formatViews(totalVisits), gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(234,88,12,0.15))' },
      { icon: '⭐', label: 'Avg. Rating', value: avgRating.toFixed(1), gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))' },
    ];
  }

  formatViews(v: number): string {
    if (v >= 1000000) return (v / 1000000).toFixed(1) + 'M';
    if (v >= 1000) return (v / 1000).toFixed(1) + 'K';
    return v.toString();
  }

  getFilteredProjects() {
    const products = this.marketplace.products();
    if (this.projectTab === 'all') return products;
    return products.filter((p) => (p.status || 'pending') === this.projectTab);
  }

  async loadBlogs() {
    try {
      const blogsRef = collection(this.firestore, 'blogs');
      const q = query(blogsRef, orderBy('createdAt', 'desc'));
      collectionData(q, { idField: 'id' }).subscribe((data: any) => {
        this.blogs = data.map((blog: any) => ({
          ...blog,
          createdAt: blog.createdAt?.toDate?.() || new Date(blog.createdAt)
        }));
      });
    } catch (error) {
      console.error('Error loading blogs:', error);
      this.blogs = [];
    }
  }

  openBlogModal(blog?: any) {
    if (blog) {
      this.editingBlogId = blog.id;
      this.blogForm = { title: blog.title || '', content: blog.content || '', excerpt: blog.excerpt || '', published: blog.published || false };
    } else {
      this.editingBlogId = null;
      this.blogForm = { title: '', content: '', excerpt: '', published: false };
    }
    this.showBlogModal = true;
  }

  closeBlogModal() {
    this.showBlogModal = false;
    this.editingBlogId = null;
    this.blogForm = { title: '', content: '', excerpt: '', published: false };
  }

  async saveBlogFromModal() {
    if (!this.blogForm.title || !this.blogForm.excerpt) return;
    try {
      if (this.editingBlogId) {
        const blogRef = doc(this.firestore, 'blogs/' + this.editingBlogId);
        await updateDoc(blogRef, {
          title: this.blogForm.title,
          excerpt: this.blogForm.excerpt,
          content: this.blogForm.content,
          published: this.blogForm.published,
          updatedAt: serverTimestamp()
        });
      } else {
        const blogsRef = collection(this.firestore, 'blogs');
        await addDoc(blogsRef, {
          title: this.blogForm.title,
          excerpt: this.blogForm.excerpt,
          content: this.blogForm.content,
          published: this.blogForm.published,
          author: 'Admin',
          createdAt: serverTimestamp()
        });
      }
      this.closeBlogModal();
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save blog. Check Firestore rules.');
    }
  }

  async deleteBlog(blogId: string) {
    if (confirm('Delete this blog post?')) {
      try {
        const blogRef = doc(this.firestore, 'blogs/' + blogId);
        await deleteDoc(blogRef);
      } catch (error) {
        console.error('Error deleting blog:', error);
        alert('Failed to delete blog. Check Firestore rules.');
      }
    }
  }
}
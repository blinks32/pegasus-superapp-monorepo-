import { Component, inject, OnInit, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MarketplaceService } from '../../services/marketplace.service';
import { AuthService } from '../../services/auth.service';
import { Firestore, doc, getDoc, updateDoc, setDoc } from '@angular/fire/firestore';

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
        <!-- Stats Cards -->
        <div class="stats-grid stagger-children">
          <div class="stat-card" *ngFor="let stat of dashboardStats">
            <div class="stat-card-icon" [style.background]="stat.gradient">{{ stat.icon }}</div>
            <div class="stat-card-info">
              <span class="stat-card-value">{{ stat.value }}</span>
              <span class="stat-card-label">{{ stat.label }}</span>
            </div>
            <span class="stat-card-change positive" *ngIf="stat.change">
              +{{ stat.change }}%
            </span>
          </div>
        </div>

        <!-- Revenue Chart -->
        <div class="chart-card">
          <div class="chart-header">
            <h3>Revenue Overview</h3>
            <div class="chart-tabs">
              <button [class.active]="chartPeriod === '7d'" (click)="setChartPeriod('7d')">7 Days</button>
              <button [class.active]="chartPeriod === '30d'" (click)="setChartPeriod('30d')">30 Days</button>
              <button [class.active]="chartPeriod === '12m'" (click)="setChartPeriod('12m')">12 Months</button>
            </div>
          </div>
          <div class="chart-body">
            <div class="chart-bars">
              <div class="chart-bar" *ngFor="let bar of chartData" [style.height.%]="bar.pct" [attr.data-label]="bar.label">
                <span class="bar-tooltip">\${{ bar.value | number }}</span>
              </div>
              <div class="empty-chart" *ngIf="chartTotalRevenue === 0">
                <p>No sales data available for this period.</p>
              </div>
            </div>
            <div class="chart-labels">
              <span *ngFor="let bar of chartData">{{ bar.label }}</span>
            </div>
          </div>
        </div>

        <!-- My Projects Table -->
        <div class="projects-card">
          <div class="card-header">
            <h3>My Projects</h3>
            <div class="header-tabs">
              <button [class.active]="projectTab === 'all'" (click)="projectTab = 'all'">All ({{ getFilteredProjects().length }})</button>
              <button [class.active]="projectTab === 'published'" (click)="projectTab = 'published'">Published</button>
              <button [class.active]="projectTab === 'pending'" (click)="projectTab = 'pending'">Pending</button>
              <button [class.active]="projectTab === 'draft'" (click)="projectTab = 'draft'">Drafts</button>
            </div>
          </div>

          <div class="project-row" *ngFor="let project of getFilteredProjects()">
            <div class="project-thumb" [style.background]="getProjectGradient(project.category)">
              {{ getCategoryIcon(project.category) }}
            </div>
            <div class="project-info">
              <span class="project-title">{{ project.title }}</span>
              <span class="project-desc">{{ project.shortDescription }}</span>
            </div>
            <div class="project-status">
              <span class="status-badge" [class]="'status-' + (project.status || 'pending')">
                {{ (project.status || 'pending') | titlecase }}
              </span>
            </div>
            <div class="project-price">\${{ project.price }}</div>
            <div class="project-date">{{ project.createdAt | date:'mediumDate' }}</div>
            <div class="project-actions">
              <a [routerLink]="['/product', project.id]" class="pm-btn pm-btn-ghost pm-btn-sm">
                View
              </a>
            </div>
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
            <h3>Admin Security Settings</h3>
            <p>Modify the authorized admin email and account credentials.</p>
          </div>

          <div class="settings-form">
            <div class="form-section">
              <h4>Authorized Email</h4>
              <p class="section-desc">Only this email + password can access the admin dashboard.</p>
              <div class="form-group-row">
                <input type="email" [(ngModel)]="newAdminEmail" placeholder="Admin email" class="pm-input">
                <button
                  (click)="updateAdminEmail()"
                  class="pm-btn pm-btn-primary"
                  [disabled]="isUpdating || !currentPassword">
                  {{ isUpdating ? 'Updating...' : 'Save Email' }}
                </button>
              </div>
            </div>

            <div class="pm-divider"></div>

            <div class="form-section">
              <h4>Change Account Password</h4>
              <p class="section-desc">Update the password for your current admin account.</p>
              <div class="form-grid">
                <div class="form-group">
                  <label>Current Password</label>
                  <input type="password" [(ngModel)]="currentPassword" placeholder="Enter current password" class="pm-input">
                </div>
                <div class="form-group">
                  <label>New Password</label>
                  <input type="password" [(ngModel)]="newPassword" placeholder="Enter new password" class="pm-input">
                </div>
                <div class="form-group">
                  <label>Confirm Password</label>
                  <input type="password" [(ngModel)]="confirmPassword" placeholder="Repeat new password" class="pm-input">
                </div>
              </div>
              <button
                (click)="updatePassword()"
                class="pm-btn pm-btn-primary mt-16"
                [disabled]="isUpdating || !newPassword || !confirmPassword || !currentPassword">
                 Update Password
              </button>
            </div>
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
              <button class="pm-btn pm-btn-primary" (click)="createNewBlog()">
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
                      <button class="pm-btn pm-btn-sm pm-btn-ghost" (click)="editBlog(blog)">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                        Edit
                      </button>
                      <button class="pm-btn pm-btn-sm pm-btn-danger" (click)="deleteBlog(blog.id)">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                  <p class="blog-excerpt">{{ blog.excerpt || 'No content' }}</p>
                  <div class="blog-meta">
                    <span class="blog-status" [class]="blog.published ? 'status-published' : 'status-draft'">
                      {{ blog.published ? 'Published' : 'Draft' }}
                    </span>
                    <span class="blog-date">{{ blog.createdAt | date:'medium' }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div *ngIf="blogs.length === 0" class="empty-state">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <h4>No blog posts yet</h4>
              <p>Create your first blog post to get started.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <app-footer></app-footer>
  `,
  styles: [`
    /* Tabs */
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

    /* Settings */
    .settings-card {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      border: 1px solid var(--pm-border-light);
      padding: 32px;
      box-shadow: var(--pm-shadow-sm);
    }
    .settings-header { margin-bottom: 32px; }
    .settings-header h3 { margin: 0 0 8px; font-size: 1.3rem; }
    .settings-header p { margin: 0; color: var(--pm-text-muted); }

    .form-section { margin: 24px 0; }
    .form-section h4 { margin: 0 0 4px; font-size: 1rem; }
    .section-desc { font-size: 0.85rem; color: var(--pm-text-muted); margin-bottom: 16px; }

    .form-group-row { display: flex; gap: 12px; max-width: 500px; }
    .pm-input {
      flex: 1;
      padding: 10px 16px;
      border: 1px solid var(--pm-border);
      border-radius: var(--pm-radius-md);
      font-family: inherit;
    }
    .pm-input:focus { outline: 2px solid var(--ion-color-primary-transparent); border-color: var(--ion-color-primary); }

    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      max-width: 600px;
    }
    .form-group label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 8px; }
    .pm-divider { height: 1px; background: var(--pm-border-light); margin: 32px 0; }
    .mt-16 { margin-top: 16px; }
    .empty-chart { height: 100%; display: flex; align-items: center; justify-content: center; color: var(--pm-text-muted); font-size: 0.9rem; }
    .fade-in { animation: fadeIn 0.3s ease-out; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

    /* Blog Management */
    .blog-management {
      margin-top: 20px;
    }
    .blog-actions {
      margin-bottom: 24px;
    }
    .blogs-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .blog-item {
      background: var(--pm-surface);
      border: 1px solid var(--pm-border-light);
      border-radius: var(--pm-radius-md);
      padding: 20px;
      transition: all var(--pm-transition-fast);
    }
    .blog-item:hover {
      border-color: var(--ion-color-primary);
      box-shadow: var(--pm-shadow-sm);
    }
    .blog-item-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
    }
    .blog-item-header h4 {
      margin: 0;
      font-size: 1.1rem;
      color: var(--pm-text-primary);
      flex: 1;
    }
    .blog-item-header .blog-actions {
      display: flex;
      gap: 8px;
      margin: 0;
    }
    .blog-excerpt {
      margin: 0 0 12px;
      color: var(--pm-text-secondary);
      font-size: 0.9rem;
      line-height: 1.5;
    }
    .blog-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 0.8rem;
    }
    .blog-status {
      padding: 4px 8px;
      border-radius: var(--pm-radius-sm);
      font-weight: 600;
      font-size: 0.75rem;
    }
    .status-published {
      background: rgba(16, 185, 129, 0.1);
      color: #10B981;
    }
    .status-draft {
      background: rgba(245, 158, 11, 0.1);
      color: #F59E0B;
    }
    .blog-date {
      color: var(--pm-text-muted);
    }
    .empty-state {
      text-align: center;
      padding: 48px 24px;
      color: var(--pm-text-muted);
    }
    .empty-state svg {
      margin-bottom: 16px;
      color: var(--pm-border);
    }
    .empty-state h4 {
      margin: 0 0 8px;
      color: var(--pm-text-primary);
    }
    .empty-state p {
      margin: 0;
    }
  `],
})
export class AdminComponent implements OnInit {
  marketplace = inject(MarketplaceService);
  authService = inject(AuthService);
  firestore = inject(Firestore);

  activeTab = 'dashboard';
  chartPeriod = '30d';
  projectTab = 'all';

  // Real Data State
  dashboardStats: any[] = [];
  chartData: any[] = [];
  chartTotalRevenue = 0;
  allProjects: any[] = [];
  
  // Settings Form
  newAdminEmail = '';
  currentPassword = '';
  newPassword = '';
  confirmPassword = '';
  isUpdating = false;

  // Blog Management
  blogs: any[] = [];
  newBlog = {
    title: '',
    content: '',
    excerpt: '',
    published: false
  };
  editingBlogId: string | null = null;

  constructor() {
    // Reactively update stats when products change
    effect(() => {
      this.calculateStats();
    });
  }

  async ngOnInit() {
    this.allProjects = this.marketplace.products();
    this.calculateStats();
    
    // Fetch authorized email from Firestore
    const snap = await getDoc(doc(this.firestore, 'settings/admin'));
    if (snap.exists()) {
      this.newAdminEmail = snap.data()['email'] || '';
    } else {
      this.newAdminEmail = '';
    }
    
    // Load blogs
    this.loadBlogs();
  }

  calculateStats() {
    const products = this.marketplace.products();
    
    const totalRev = products.reduce((sum, p) => sum + (p.price * (p.totalSales || 0)), 0);
    const totalSales = products.reduce((sum, p) => sum + (p.totalSales || 0), 0);
    const totalVisits = products.reduce((sum, p) => sum + (p.totalVisits || 0), 0);
    const avgRating = products.length > 0 
      ? products.reduce((sum, p) => sum + (p.rating || 0), 0) / products.length 
      : 0;

    this.dashboardStats = [
      { icon: '💰', label: 'Total Revenue', value: `\${{ totalRev.toLocaleString() }}`, change: 0, gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.15))' },
      { icon: '📦', label: 'Products Sold', value: totalSales.toString(), change: 0, gradient: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15))' },
      { icon: '👁️', label: 'Total Views', value: this.formatViews(totalVisits), change: 0, gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(234,88,12,0.15))' },
      { icon: '⭐', label: 'Avg. Rating', value: avgRating.toFixed(1), change: 0, gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))' },
    ];

    this.chartData = this.buildRevenueChart(products, this.chartPeriod);
    this.chartTotalRevenue = this.chartData.reduce((sum, b) => sum + (b.value || 0), 0);
  }

  setChartPeriod(period: string) {
    this.chartPeriod = period;
    this.calculateStats();
  }

  private buildRevenueChart(products: any[], period: string): Array<{ label: string; value: number; pct: number }> {
    const now = new Date();
    const revenues: number[] = [];
    const labels: string[] = [];

    const addLabel = (d: Date, mode: 'day' | 'month') => {
      if (mode === 'day') {
        return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      }
      return d.toLocaleDateString(undefined, { month: 'short' });
    };

    if (period === '7d') {
      const start = new Date(now);
      start.setDate(now.getDate() - 6);
      for (let i = 0; i < 7; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        labels.push(addLabel(d, 'day'));
        revenues.push(0);
      }

      for (const p of products) {
        const createdAt = this.parseDate(p.createdAt);
        if (!createdAt) continue;
        const diffDays = Math.floor((createdAt.getTime() - start.getTime()) / 86400000);
        if (diffDays < 0 || diffDays >= 7) continue;
        const revenue = (p.price || 0) * (p.totalSales || 0);
        revenues[diffDays] += revenue;
      }
    } else if (period === '12m') {
      const start = new Date(now.getFullYear(), now.getMonth() - 11, 1);
      for (let i = 0; i < 12; i++) {
        const d = new Date(start.getFullYear(), start.getMonth() + i, 1);
        labels.push(addLabel(d, 'month'));
        revenues.push(0);
      }

      for (const p of products) {
        const createdAt = this.parseDate(p.createdAt);
        if (!createdAt) continue;
        const idx =
          (createdAt.getFullYear() - start.getFullYear()) * 12 +
          (createdAt.getMonth() - start.getMonth());
        if (idx < 0 || idx >= 12) continue;
        const revenue = (p.price || 0) * (p.totalSales || 0);
        revenues[idx] += revenue;
      }
    } else {
      // Default: 30d
      const start = new Date(now);
      start.setDate(now.getDate() - 29);
      const binCount = 10;
      const binSizeDays = 3; // ~30 days / 10 bins

      for (let i = 0; i < binCount; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i * binSizeDays);
        labels.push(addLabel(d, 'day'));
        revenues.push(0);
      }

      for (const p of products) {
        const createdAt = this.parseDate(p.createdAt);
        if (!createdAt) continue;
        const diffDays = Math.floor((createdAt.getTime() - start.getTime()) / 86400000);
        if (diffDays < 0) continue;
        const idx = Math.min(binCount - 1, Math.floor(diffDays / binSizeDays));
        const revenue = (p.price || 0) * (p.totalSales || 0);
        revenues[idx] += revenue;
      }
    }

    const maxRevenue = Math.max(...revenues, 0);
    return revenues.map((value, i) => ({
      label: labels[i] || '',
      value,
      pct: maxRevenue > 0 ? (value / maxRevenue) * 100 : 0,
    }));
  }

  private parseDate(value: any): Date | null {
    if (!value) return null;
    if (value instanceof Date) return value;
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
  }

  formatViews(v: number): string {
    if (v >= 1000000) return (v / 1000000).toFixed(1) + 'M';
    if (v >= 1000) return (v / 1000).toFixed(1) + 'K';
    return v.toString();
  }

  async updateAdminEmail() {
    const normalizedEmail = (this.newAdminEmail || '').trim().toLowerCase();
    if (!normalizedEmail.includes('@')) {
      alert('Please enter a valid email.');
      return;
    }
    if (!this.currentPassword) {
      alert('Please enter your current password to save the email.');
      return;
    }
    this.isUpdating = true;
    try {
      // Update Firebase Auth first so admin access stays consistent.
      await this.authService.updateEmailWithReauth(normalizedEmail, this.currentPassword);

      const ref = doc(this.firestore, 'settings/admin');
      try {
        await updateDoc(ref, { email: normalizedEmail });
      } catch {
        await setDoc(ref, { email: normalizedEmail }, { merge: true });
      }
      alert('Authorized admin email updated successfully!');

      this.currentPassword = '';
    } catch (e) {
      console.error(e);
      alert('Error updating configuration. Make sure the document exists in Firestore.');
    } finally {
      this.isUpdating = false;
    }
  }

  async updatePassword() {
    if (!this.currentPassword) {
      alert('Please enter your current password.');
      return;
    }
    if (this.newPassword !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    if (this.newPassword.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }
    
    this.isUpdating = true;
    try {
      await this.authService.updatePasswordWithReauth(this.newPassword, this.currentPassword);

      // Clear password fields after successful update.
      this.newPassword = '';
      this.confirmPassword = '';
      this.currentPassword = '';
      alert('Admin password updated successfully.');
    } catch (e) {
      console.error(e);
      alert('Error updating password. Did your current password match?');
    } finally {
      this.isUpdating = false;
    }
  }

  private gradients: Record<string, string> = {
    'mobile-apps': 'linear-gradient(135deg, #F97316, #FB923C)',
    'web-templates': 'linear-gradient(135deg, #3B82F6, #60A5FA)',
    'wordpress': 'linear-gradient(135deg, #8B5CF6, #A78BFA)',
    'javascript': 'linear-gradient(135deg, #EAB308, #FDE047)',
    'ui-kits': 'linear-gradient(135deg, #EC4899, #F472B6)',
    'full-stack': 'linear-gradient(135deg, #10B981, #34D399)',
  };
  private icons: Record<string, string> = {
    'mobile-apps': '📱', 'web-templates': '🌐', 'wordpress': '🔧', 'javascript': '⚡', 'ui-kits': '🎨', 'full-stack': '🚀',
  };

  getProjectGradient(cat: string) { return this.gradients[cat] || 'linear-gradient(135deg, #6366F1, #A855F7)'; }
  getCategoryIcon(cat: string) { return this.icons[cat] || '📦'; }

  getFilteredProjects() {
    const products = this.marketplace.products();
    if (this.projectTab === 'all') return products;
    const desiredStatus = this.projectTab;
    return products.filter((p) => (p.status || 'pending') === desiredStatus);
  }

  // Blog Management Methods
  async loadBlogs() {
    // In a real app, you would fetch blogs from Firestore
    // For now, we'll use mock data
    this.blogs = [
      {
        id: '1',
        title: 'Getting Started with Ionic Framework',
        excerpt: 'Learn how to build mobile apps with Ionic',
        content: 'Full article content here...',
        published: true,
        createdAt: new Date('2024-01-15'),
        author: 'Admin'
      },
      {
        id: '2',
        title: 'Angular 17 Features',
        excerpt: 'New features in Angular 17',
        content: 'Angular 17 brings many new features...',
        published: false,
        createdAt: new Date('2024-01-10'),
        author: 'Admin'
      }
    ];
  }

  createNewBlog() {
    this.newBlog = {
      title: '',
      content: '',
      excerpt: '',
      published: false
    };
    this.editingBlogId = null;
    // In a real app, you would show a modal or navigate to an editor
    alert('Blog editor would open here. In a real app, this would open a form or modal.');
  }

  editBlog(blog: any) {
    this.newBlog = { ...blog };
    this.editingBlogId = blog.id;
    // In a real app, you would open an editor
    alert(`Editing blog: ${blog.title}`);
  }

  async deleteBlog(blogId: string) {
    if (confirm('Are you sure you want to delete this blog post?')) {
      // In a real app, you would call a service to delete from Firestore
      this.blogs = this.blogs.filter(blog => blog.id !== blogId);
      alert('Blog post deleted (simulated)');
    }
  }

  saveBlog() {
    if (this.editingBlogId) {
      // Update existing blog
      const index = this.blogs.findIndex(b => b.id === this.editingBlogId);
      if (index !== -1) {
        this.blogs[index] = { ...this.newBlog, id: this.editingBlogId };
      }
    } else {
      // Create new blog
      const newBlog = {
        id: Date.now().toString(),
        ...this.newBlog,
        createdAt: new Date(),
        author: 'Admin'
      };
      this.blogs.push(newBlog);
    }
    
    // Reset form
    this.newBlog = { title: '', content: '', excerpt: '', published: false };
    this.editingBlogId = null;
  }
}

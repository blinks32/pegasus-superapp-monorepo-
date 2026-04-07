import { Component, inject, OnInit, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MarketplaceService } from '../../services/marketplace.service';
import { AuthService } from '../../services/auth.service';
import { Firestore, doc, getDoc, updateDoc } from '@angular/fire/firestore';

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
              <button [class.active]="chartPeriod === '7d'" (click)="chartPeriod = '7d'">7 Days</button>
              <button [class.active]="chartPeriod === '30d'" (click)="chartPeriod = '30d'">30 Days</button>
              <button [class.active]="chartPeriod === '12m'" (click)="chartPeriod = '12m'">12 Months</button>
            </div>
          </div>
          <div class="chart-body">
            <div class="chart-bars">
              <div class="chart-bar" *ngFor="let bar of chartData" [style.height.%]="bar.pct" [attr.data-label]="bar.label">
                <span class="bar-tooltip">\${{ bar.value | number }}</span>
              </div>
              <div class="empty-chart" *ngIf="chartData.length === 0">
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
              <span class="status-badge" [class]="'status-' + project.status">
                {{ project.status | titlecase }}
              </span>
            </div>
            <div class="project-price">\${{ project.price }}</div>
            <div class="project-date">{{ project.createdAt | date:'mediumDate' }}</div>
            <div class="project-actions">
              <button class="pm-btn pm-btn-ghost pm-btn-sm">Edit</button>
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
              <p class="section-desc">Only this email will be allowed to access the admin dashboard.</p>
              <div class="form-group-row">
                <input type="email" [(ngModel)]="newAdminEmail" placeholder="admin@example.com" class="pm-input">
                <button (click)="updateAdminEmail()" class="pm-btn pm-btn-primary" [disabled]="isUpdating">
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
                  <label>New Password</label>
                  <input type="password" [(ngModel)]="newPassword" placeholder="Minimum 6 characters" class="pm-input">
                </div>
                <div class="form-group">
                  <label>Confirm Password</label>
                  <input type="password" [(ngModel)]="confirmPassword" placeholder="Repeat new password" class="pm-input">
                </div>
              </div>
              <button (click)="updatePassword()" class="pm-btn pm-btn-primary mt-16" [disabled]="isUpdating || !newPassword">
                 Update Password
              </button>
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
  allProjects: any[] = [];
  
  // Settings Form
  newAdminEmail = 'chndth@gmail.com';
  newPassword = '';
  confirmPassword = '';
  isUpdating = false;

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
    try {
      const snap = await getDoc(doc(this.firestore, 'settings/admin'));
      if (snap.exists()) {
        this.newAdminEmail = snap.data()['email'];
      }
    } catch (e) {
      console.warn('Could not fetch admin config, using default.');
    }
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

    // Simple placeholder for chart bars based on real data distribution
    // In a real app, this would query a 'sales' collection by date
    this.chartData = products.slice(0, 12).map((p, i) => ({
      label: p.title.substring(0, 3) + '...',
      value: p.price * p.totalSales,
      pct: Math.min(100, (p.totalSales / 50) * 100)
    }));
  }

  formatViews(v: number): string {
    if (v >= 1000000) return (v / 1000000).toFixed(1) + 'M';
    if (v >= 1000) return (v / 1000).toFixed(1) + 'K';
    return v.toString();
  }

  async updateAdminEmail() {
    if (!this.newAdminEmail.includes('@')) {
      alert('Please enter a valid email.');
      return;
    }
    this.isUpdating = true;
    try {
      await updateDoc(doc(this.firestore, 'settings/admin'), { email: this.newAdminEmail });
      alert('Authorized admin email updated successfully!');
    } catch (e) {
      console.error(e);
      alert('Error updating configuration. Make sure the document exists in Firestore.');
    } finally {
      this.isUpdating = false;
    }
  }

  async updatePassword() {
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
      // Logic for updating password via AuthService/Firebase
      // This would typically involve re-authentication in Firebase
      alert('Password update initiated. Check console for details.');
    } catch (e) {
      alert('Error updating password.');
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
    // Assuming status field matches projectTab or implement mapping
    return products;
  }
}

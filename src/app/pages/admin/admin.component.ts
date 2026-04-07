import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MarketplaceService } from '../../services/marketplace.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <section class="admin-hero">
      <div class="pm-container">
        <div class="hero-row">
          <div>
            <h1 class="pm-heading-lg">📊 Author Dashboard</h1>
            <p class="pm-text-secondary">Manage your projects, track sales, and monitor performance</p>
          </div>
          <a routerLink="/admin/submit" class="pm-btn pm-btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
            Submit New Project
          </a>
        </div>
      </div>
    </section>

    <div class="pm-container admin-content">
      <!-- Stats Cards -->
      <div class="stats-grid stagger-children">
        <div class="stat-card" *ngFor="let stat of dashboardStats">
          <div class="stat-card-icon" [style.background]="stat.gradient">{{ stat.icon }}</div>
          <div class="stat-card-info">
            <span class="stat-card-value">{{ stat.value }}</span>
            <span class="stat-card-label">{{ stat.label }}</span>
          </div>
          <span class="stat-card-change" [class.positive]="stat.change > 0" [class.negative]="stat.change < 0">
            {{ stat.change > 0 ? '+' : '' }}{{ stat.change }}%
          </span>
        </div>
      </div>

      <!-- Revenue Chart (CSS-only) -->
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
            <div class="chart-bar" *ngFor="let bar of chartData" [style.height.%]="bar.pct">
              <span class="bar-tooltip">\${{ bar.value | number }}</span>
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
            <button [class.active]="projectTab === 'all'" (click)="projectTab = 'all'">All ({{ allProjects.length }})</button>
            <button [class.active]="projectTab === 'published'" (click)="projectTab = 'published'">Published</button>
            <button [class.active]="projectTab === 'pending'" (click)="projectTab = 'pending'">Pending</button>
            <button [class.active]="projectTab === 'draft'" (click)="projectTab = 'draft'">Drafts</button>
          </div>
        </div>

        <!-- Projects List -->
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

      <!-- Recent Sales -->
      <div class="sales-card">
        <h3>Recent Sales</h3>
        <div class="sale-row" *ngFor="let sale of recentSales">
          <div class="sale-user">
            <div class="sale-avatar" [style.background]="sale.color">{{ sale.buyer.charAt(0) }}</div>
            <div>
              <strong>{{ sale.buyer }}</strong>
              <span>{{ sale.product }}</span>
            </div>
          </div>
          <div class="sale-amount">+\${{ sale.amount }}</div>
          <div class="sale-time">{{ sale.time }}</div>
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
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }
    .hero-row h1 { margin: 0 0 4px; }
    .hero-row p { margin: 0; }

    .admin-content { padding: 32px 0 64px; }

    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 24px;
    }
    .stat-card {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 20px;
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      border: 1px solid var(--pm-border-light);
      box-shadow: var(--pm-shadow-sm);
    }
    .stat-card-icon {
      width: 48px;
      height: 48px;
      border-radius: var(--pm-radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
    }
    .stat-card-value {
      display: block;
      font-size: 1.4rem;
      font-weight: 800;
      color: var(--pm-text-primary);
    }
    .stat-card-label {
      display: block;
      font-size: 0.75rem;
      color: var(--pm-text-muted);
    }
    .stat-card-change {
      margin-left: auto;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 3px 8px;
      border-radius: var(--pm-radius-full);
    }
    .stat-card-change.positive { background: rgba(16,185,129,0.1); color: #059669; }
    .stat-card-change.negative { background: rgba(239,68,68,0.1); color: #DC2626; }

    /* Chart */
    .chart-card {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      border: 1px solid var(--pm-border-light);
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: var(--pm-shadow-sm);
    }
    .chart-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
    .chart-header h3 { margin: 0; font-size: 1.1rem; }
    .chart-tabs { display: flex; gap: 4px; }
    .chart-tabs button {
      padding: 6px 14px;
      border: 1px solid var(--pm-border);
      border-radius: var(--pm-radius-full);
      background: var(--pm-surface);
      font-family: inherit;
      font-size: 0.78rem;
      color: var(--pm-text-secondary);
      cursor: pointer;
      transition: all var(--pm-transition-fast);
    }
    .chart-tabs button.active {
      background: var(--ion-color-primary);
      color: white;
      border-color: var(--ion-color-primary);
    }

    .chart-body { height: 240px; display: flex; flex-direction: column; }
    .chart-bars {
      flex: 1;
      display: flex;
      align-items: flex-end;
      gap: 8px;
      padding: 0 4px;
    }
    .chart-bar {
      flex: 1;
      background: var(--pm-gradient-primary);
      border-radius: 6px 6px 0 0;
      min-height: 8px;
      position: relative;
      cursor: pointer;
      transition: opacity 0.2s ease;
    }
    .chart-bar:hover { opacity: 0.85; }
    .bar-tooltip {
      position: absolute;
      top: -28px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--pm-text-primary);
      color: white;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 0.7rem;
      font-weight: 600;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    .chart-bar:hover .bar-tooltip { opacity: 1; }
    .chart-labels {
      display: flex;
      gap: 8px;
      padding: 8px 4px 0;
    }
    .chart-labels span {
      flex: 1;
      text-align: center;
      font-size: 0.7rem;
      color: var(--pm-text-muted);
    }

    /* Projects */
    .projects-card, .sales-card {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      border: 1px solid var(--pm-border-light);
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: var(--pm-shadow-sm);
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      flex-wrap: wrap;
      gap: 12px;
    }
    .card-header h3 { margin: 0; font-size: 1.1rem; }
    .header-tabs { display: flex; gap: 4px; }
    .header-tabs button {
      padding: 6px 14px;
      border: 1px solid var(--pm-border);
      border-radius: var(--pm-radius-full);
      background: var(--pm-surface);
      font-family: inherit;
      font-size: 0.78rem;
      color: var(--pm-text-secondary);
      cursor: pointer;
      transition: all var(--pm-transition-fast);
    }
    .header-tabs button.active {
      background: var(--ion-color-primary);
      color: white;
      border-color: var(--ion-color-primary);
    }

    .project-row {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 14px 0;
      border-bottom: 1px solid var(--pm-border-light);
    }
    .project-row:last-child { border-bottom: none; }
    .project-thumb {
      width: 44px;
      height: 44px;
      border-radius: var(--pm-radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      flex-shrink: 0;
    }
    .project-info { flex: 1; min-width: 0; }
    .project-title { display: block; font-size: 0.875rem; font-weight: 600; color: var(--pm-text-primary); }
    .project-desc {
      display: block; font-size: 0.75rem; color: var(--pm-text-muted);
      white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    }
    .status-badge {
      padding: 4px 12px;
      border-radius: var(--pm-radius-full);
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
    .status-published { background: rgba(16,185,129,0.1); color: #059669; }
    .status-pending { background: rgba(245,158,11,0.1); color: #D97706; }
    .status-draft { background: rgba(100,116,139,0.1); color: #64748B; }
    .status-rejected { background: rgba(239,68,68,0.1); color: #DC2626; }
    .project-price { font-weight: 700; font-size: 0.9rem; color: var(--pm-text-primary); width: 60px; }
    .project-date { font-size: 0.78rem; color: var(--pm-text-muted); width: 100px; }

    .empty-projects {
      padding: 32px;
      text-align: center;
      color: var(--pm-text-muted);
    }
    .empty-projects a { color: var(--ion-color-primary); }

    /* Sales */
    .sales-card h3 { margin: 0 0 20px; font-size: 1.1rem; }
    .sale-row {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 12px 0;
      border-bottom: 1px solid var(--pm-border-light);
    }
    .sale-row:last-child { border-bottom: none; }
    .sale-user { display: flex; align-items: center; gap: 10px; flex: 1; }
    .sale-avatar {
      width: 36px; height: 36px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: white; font-weight: 700; font-size: 0.8rem;
    }
    .sale-user strong { display: block; font-size: 0.85rem; color: var(--pm-text-primary); }
    .sale-user span { font-size: 0.75rem; color: var(--pm-text-muted); }
    .sale-amount { font-weight: 700; color: #10B981; }
    .sale-time { font-size: 0.78rem; color: var(--pm-text-muted); }

    @media (max-width: 1024px) {
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .stats-grid { grid-template-columns: 1fr; }
      .project-row { flex-wrap: wrap; }
      .project-date, .project-price { display: none; }
    }
  `],
})
export class AdminComponent {
  marketplace = inject(MarketplaceService);
  chartPeriod = '30d';
  projectTab = 'all';

  dashboardStats = [
    { icon: '💰', label: 'Total Revenue', value: '$12,480', change: 18.2, gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.15))' },
    { icon: '📦', label: 'Products Sold', value: '384', change: 12.5, gradient: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15))' },
    { icon: '👁️', label: 'Total Views', value: '28.4K', change: 22.1, gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(234,88,12,0.15))' },
    { icon: '⭐', label: 'Avg. Rating', value: '4.8', change: 2.3, gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))' },
  ];

  chartData = [
    { label: 'Jan', value: 1200, pct: 40 },
    { label: 'Feb', value: 1800, pct: 60 },
    { label: 'Mar', value: 1500, pct: 50 },
    { label: 'Apr', value: 2200, pct: 73 },
    { label: 'May', value: 2800, pct: 93 },
    { label: 'Jun', value: 2400, pct: 80 },
    { label: 'Jul', value: 3000, pct: 100 },
    { label: 'Aug', value: 2600, pct: 87 },
    { label: 'Sep', value: 2100, pct: 70 },
    { label: 'Oct', value: 2900, pct: 97 },
    { label: 'Nov', value: 2500, pct: 83 },
    { label: 'Dec', value: 2700, pct: 90 },
  ];

  allProjects = [
    { title: 'SuperApp — Flutter Multi-Service', shortDescription: 'Complete Flutter super-app with ride-hailing...', category: 'mobile-apps', price: 59, status: 'published', createdAt: new Date('2024-06-15') },
    { title: 'AdminPro — Angular Dashboard', shortDescription: 'Premium Angular 18 admin dashboard...', category: 'web-templates', price: 39, status: 'published', createdAt: new Date('2024-03-10') },
    { title: 'ChatBot AI Widget', shortDescription: 'Embeddable AI chatbot with GPT-4...', category: 'javascript', price: 44, status: 'pending', createdAt: new Date('2024-12-01') },
    { title: 'Flavor UI System', shortDescription: '120+ component design system...', category: 'ui-kits', price: 49, status: 'draft', createdAt: new Date('2025-01-20') },
  ];

  recentSales = [
    { buyer: 'Alex Morgan', product: 'SuperApp Flutter', amount: 59, time: '2 min ago', color: '#6366F1' },
    { buyer: 'Sarah Chen', product: 'AdminPro Angular (Extended)', amount: 117, time: '15 min ago', color: '#EC4899' },
    { buyer: 'James Wilson', product: 'ChatBot AI Widget', amount: 44, time: '1 hour ago', color: '#10B981' },
    { buyer: 'Maria Lopez', product: 'SuperApp Flutter + Reskin', amount: 258, time: '3 hours ago', color: '#F97316' },
    { buyer: 'David Kim', product: 'Flavor UI System', amount: 49, time: '5 hours ago', color: '#8B5CF6' },
  ];

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
    if (this.projectTab === 'all') return [...this.allProjects, ...this.marketplace.adminProjects().map(p => ({ ...p, createdAt: p.createdAt || new Date() }))];
    return this.allProjects.filter(p => p.status === this.projectTab);
  }
}

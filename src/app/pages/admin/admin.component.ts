import { Component, inject, OnInit, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MarketplaceService } from '../../services/marketplace.service';
import { AuthService } from '../../services/auth.service';
import { Firestore, doc, getDoc, updateDoc, setDoc, collection, collectionData, deleteDoc, addDoc, query, orderBy, serverTimestamp } from '@angular/fire/firestore';

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
          </div>          <div class="project-row" *ngFor="let project of getFilteredProjects()">
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
            <div class="project-price">{{'$'}}{{ project.price }}</div>
            <div class="project-date">{{ project.createdAt | date:'mediumDate' }}</div>
            <div class="project-actions">
              <a [routerLink]="['/product', project.id]" class="pm-btn pm-btn-ghost pm-btn-sm">View</a>
              <button class="pm-btn pm-btn-ghost pm-btn-sm" (click)="openEditProduct(project)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                Edit
              </button>
              <button class="pm-btn pm-btn-ghost pm-btn-sm" style="color: #EF4444" (click)="deleteProduct(project.id)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
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
                      <button class="pm-btn pm-btn-sm pm-btn-ghost" (click)="openBlogModal(blog)">
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
            <textarea id="blogExcerpt" [(ngModel)]="blogForm.excerpt" placeholder="Short description (appears in listings)" class="form-input" rows="3"></textarea>
          </div>
          <div class="form-group">
            <label for="blogContent">Content *</label>
            <textarea id="blogContent" [(ngModel)]="blogForm.content" placeholder="Full blog content (supports HTML)" class="form-input" rows="10"></textarea>
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

    <!-- Product Edit Modal -->
    <div class="modal-overlay" *ngIf="showEditModal" (click)="closeEditModal()">
      <div class="modal-content" style="max-width:700px;" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>✏️ Edit Product</h3>
          <button class="modal-close" (click)="closeEditModal()">&times;</button>
        </div>
        <div class="modal-body" style="max-height:70vh; overflow-y:auto;">
          <div class="form-group">
            <label>Title</label>
            <input type="text" [(ngModel)]="editForm.title" class="form-input" />
          </div>
          <div class="form-group">
            <label>Short Description</label>
            <textarea [(ngModel)]="editForm.shortDescription" class="form-input" rows="2"></textarea>
          </div>
          <div class="form-group">
            <label>Full Description</label>
            <textarea [(ngModel)]="editForm.fullDescription" class="form-input" rows="6"></textarea>
          </div>
          <div style="display:flex; gap:16px;">
            <div class="form-group" style="flex:1">
              <label>Price (USD)</label>
              <input type="number" [(ngModel)]="editForm.price" class="form-input" />
            </div>
            <div class="form-group" style="flex:1">
              <label>Original Price</label>
              <input type="number" [(ngModel)]="editForm.originalPrice" class="form-input" />
            </div>
            <div class="form-group" style="flex:1">
              <label>Version</label>
              <input type="text" [(ngModel)]="editForm.version" class="form-input" />
            </div>
          </div>
          <div style="display:flex; gap:16px;">
            <div class="form-group" style="flex:1">
              <label>Category</label>
              <select [(ngModel)]="editForm.category" class="form-input">
                <option *ngFor="let cat of marketplace.categories" [value]="cat.id">{{ cat.icon }} {{ cat.label }}</option>
              </select>
            </div>
            <div class="form-group" style="flex:1">
              <label>Status</label>
              <select [(ngModel)]="editForm.status" class="form-input">
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Demo URL</label>
            <input type="url" [(ngModel)]="editForm.demoUrl" class="form-input" placeholder="https://..." />
          </div>
          <div class="form-group">
            <label>Tags (comma separated)</label>
            <input type="text" [(ngModel)]="editForm.tagsStr" class="form-input" />
          </div>
          <div class="form-group">
            <label>Features (one per line)</label>
            <textarea [(ngModel)]="editForm.featuresStr" class="form-input" rows="4"></textarea>
          </div>
          <div class="form-group">
            <label>Tech Stack (comma separated)</label>
            <input type="text" [(ngModel)]="editForm.techStackStr" class="form-input" />
          </div>
          <div style="display:flex;gap:12px; align-items:center; margin-top:8px;">
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
              <input type="checkbox" [(ngModel)]="editForm.isFeatured" /> Featured
            </label>
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
              <input type="checkbox" [(ngModel)]="editForm.isBestseller" /> Bestseller
            </label>
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer">
              <input type="checkbox" [(ngModel)]="editForm.isNew" /> New
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button class="pm-btn pm-btn-ghost" (click)="closeEditModal()">Cancel</button>
          <button class="pm-btn pm-btn-primary" (click)="saveEditProduct()" [disabled]="!editForm.title">
            💾 Save Changes
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

    .admin-content {
      padding: 32px 0 64px;
    }

    /* Stats Grid */
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
      flex-shrink: 0;
    }
    .stat-card-info { flex: 1; }
    .stat-card-value {
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--pm-text-primary);
    }
    .stat-card-label {
      display: block;
      font-size: 0.85rem;
      color: var(--pm-text-muted);
    }
    .stat-card-change {
      font-size: 0.8rem;
      font-weight: 600;
      padding: 4px 8px;
      border-radius: var(--pm-radius-sm);
    }
    .stat-card-change.positive {
      background: rgba(16, 185, 129, 0.1);
      color: #10B981;
    }

    /* Chart Card */
    .chart-card {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      padding: 24px;
      border: 1px solid var(--pm-border-light);
      box-shadow: var(--pm-shadow-sm);
      margin-bottom: 32px;
    }
    .chart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      flex-wrap: wrap;
      gap: 12px;
    }
    .chart-header h3 { margin: 0; }
    .chart-tabs {
      display: flex;
      gap: 4px;
      background: var(--pm-surface-muted);
      padding: 4px;
      border-radius: var(--pm-radius-sm);
    }
    .chart-tabs button {
      padding: 8px 16px;
      border: none;
      background: transparent;
      border-radius: var(--pm-radius-sm);
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .chart-tabs button.active {
      background: white;
      box-shadow: var(--pm-shadow-sm);
    }
    .chart-body { min-height: 200px; }
    .chart-bars {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      height: 200px;
      padding-bottom: 8px;
    }
    .chart-bar {
      flex: 1;
      background: linear-gradient(180deg, #6366F1, #A855F7);
      border-radius: 4px 4px 0 0;
      min-height: 4px;
      position: relative;
      transition: height 0.3s ease;
    }
    .bar-tooltip {
      position: absolute;
      top: -24px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.7rem;
      background: #1F2937;
      color: white;
      padding: 2px 6px;
      border-radius: 4px;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.2s;
    }
    .chart-bar:hover .bar-tooltip { opacity: 1; }
    .chart-labels {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }
    .chart-labels span {
      flex: 1;
      text-align: center;
      font-size: 0.7rem;
      color: var(--pm-text-muted);
    }
    .empty-chart {
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--pm-text-muted);
      font-size: 0.9rem;
    }

    /* Projects Card */
    .projects-card {
      background: var(--pm-surface);
      border-radius: var(--pm-radius-lg);
      padding: 24px;
      border: 1px solid var(--pm-border-light);
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
      transition: all 0.2s;
    }
    .header-tabs button.active {
      background: var(--pm-surface-muted);
      color: var(--pm-text-primary);
    }

    .project-row {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 0;
      border-bottom: 1px solid var(--pm-border-light);
    }
    .project-row:last-child { border-bottom: none; }
    .project-thumb {
      width: 48px;
      height: 48px;
      border-radius: var(--pm-radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      flex-shrink: 0;
    }
    .project-info { flex: 1; min-width: 0; }
    .project-title {
      display: block;
      font-weight: 600;
      color: var(--pm-text-primary);
      margin-bottom: 2px;
    }
    .project-desc {
      display: block;
      font-size: 0.85rem;
      color: var(--pm-text-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .project-status { flex-shrink: 0; }
    .status-badge {
      padding: 4px 12px;
      border-radius: var(--pm-radius-full);
      font-size: 0.75rem;
      font-weight: 600;
    }
    .status-published { background: rgba(16, 185, 129, 0.1); color: #10B981; }
    .status-pending { background: rgba(245, 158, 11, 0.1); color: #F59E0B; }
    .status-draft { background: rgba(99, 102, 241, 0.1); color: #6366F1; }
    .status-rejected { background: rgba(239, 68, 68, 0.1); color: #EF4444; }
    .project-price {
      font-weight: 600;
      color: var(--pm-text-primary);
      flex-shrink: 0;
    }
    .project-date {
      font-size: 0.85rem;
      color: var(--pm-text-muted);
      flex-shrink: 0;
    }
    .project-actions { flex-shrink: 0; }
    .empty-projects {
      text-align: center;
      padding: 40px 20px;
      color: var(--pm-text-muted);
    }
    .empty-projects a { color: var(--ion-color-primary); }

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
    .fade-in { animation: fadeIn 0.3s ease-out; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

    /* Blog Management */
    .blog-management { margin-top: 20px; }
    .blog-actions { margin-bottom: 24px; }
    .blogs-list { display: flex; flex-direction: column; gap: 16px; }
    .blog-item {
      background: var(--pm-surface);
      border: 1px solid var(--pm-border-light);
      border-radius: var(--pm-radius-md);
      padding: 20px;
      transition: all var(--pm-transition-fast);
    }
    .blog-item:hover { border-color: var(--ion-color-primary); box-shadow: var(--pm-shadow-sm); }
    .blog-item-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
    .blog-item-header h4 { margin: 0; font-size: 1.1rem; color: var(--pm-text-primary); flex: 1; }
    .blog-item-header .blog-actions { display: flex; gap: 8px; margin: 0; }
    .blog-excerpt { margin: 0 0 12px; color: var(--pm-text-secondary); font-size: 0.9rem; line-height: 1.5; }
    .blog-meta { display: flex; align-items: center; gap: 12px; font-size: 0.8rem; }
    .blog-status { padding: 4px 8px; border-radius: var(--pm-radius-sm); font-weight: 600; font-size: 0.75rem; }
    .status-published { background: rgba(16, 185, 129, 0.1); color: #10B981; }
    .status-draft { background: rgba(245, 158, 11, 0.1); color: #F59E0B; }
    .blog-date { color: var(--pm-text-muted); }
    .empty-state { text-align: center; padding: 48px 24px; color: var(--pm-text-muted); }
    .empty-state svg { margin-bottom: 16px; color: var(--pm-border); }
    .empty-state h4 { margin: 0 0 8px; color: var(--pm-text-primary); }
    .empty-state p { margin: 0; }

    /* Modal Styles */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
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
      box-shadow: var(--pm-shadow-lg);
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      border-bottom: 1px solid var(--pm-border-light);
    }
    .modal-header h3 { margin: 0; font-size: 1.2rem; }
    .modal-close {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--pm-text-muted);
      padding: 0;
      line-height: 1;
    }
    .modal-close:hover { color: var(--pm-text-primary); }
    .modal-body { padding: 24px; }
    .modal-body .form-group { margin-bottom: 20px; }
    .modal-body .form-group label {
      display: block;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 8px;
      color: var(--pm-text-primary);
    }
    .modal-body .form-input {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid var(--pm-border);
      border-radius: var(--pm-radius-sm);
      font-family: inherit;
      font-size: 0.9rem;
      background: var(--pm-surface);
      color: var(--pm-text-primary);
      outline: none;
      transition: border-color 0.2s;
    }
    .modal-body .form-input:focus { border-color: var(--ion-color-primary); }
    .modal-body .checkbox-label {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }
    .modal-body .checkbox-label input { accent-color: var(--ion-color-primary); }
    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      padding: 16px 24px;
      border-top: 1px solid var(--pm-border-light);
    }

    @media (max-width: 768px) {
      .hero-row { flex-direction: column; align-items: flex-start; gap: 16px; }
      .hero-actions { width: 100%; justify-content: flex-start; }
      .tab-btn { padding: 8px 12px; font-size: 0.85rem; }
      .stats-grid { grid-template-columns: 1fr; gap: 12px; }
      .stat-card { padding: 16px; }
      .stat-card-icon { width: 48px; height: 48px; font-size: 1.25rem; }
      .chart-header { flex-direction: column; align-items: flex-start; gap: 12px; }
      .chart-tabs { width: 100%; justify-content: space-between; }
      .chart-tabs button { flex: 1; text-align: center; }
      .project-row { flex-wrap: wrap; gap: 12px; padding: 12px 0; }
      .project-thumb { width: 40px; height: 40px; font-size: 1rem; }
      .project-info { min-width: 0; }
      .project-title { font-size: 0.9rem; }
      .project-desc { font-size: 0.8rem; }
      .project-price, .project-date { display: none; }
      .form-grid { grid-template-columns: 1fr; }
      .form-group-row { flex-direction: column; }
      .modal-content { max-height: 100vh; border-radius: 0; margin: 0; width: 100%; }
      .settings-card { padding: 20px; }
      .blog-item-header { flex-direction: column; align-items: flex-start; gap: 12px; }
      .blog-item-header .blog-actions { width: 100%; justify-content: flex-start; }
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
  showBlogModal = false;
  blogForm = {
    title: '',
    content: '',
    excerpt: '',
    published: false
  };
  editingBlogId: string | null = null;

  // Product Edit Modal
  showEditModal = false;
  editingProductId: string | null = null;
  editForm: any = {};

  constructor() {
    // Reactively update stats when products change
    effect(() => {
      this.calculateStats();
    });
  }

  async ngOnInit() {
    this.allProjects = this.marketplace.products();
    this.calculateStats();
    
    // Set the current user's email
    const user = this.authService.currentUser();
    if (user) {
      this.newAdminEmail = user.email || '';
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
      { icon: '💰', label: 'Total Revenue', value: `\$${totalRev.toLocaleString()}`, change: 0, gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.15))' },
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
      // Update Firebase Auth email
      await this.authService.updateEmailWithReauth(normalizedEmail, this.currentPassword);
      alert('Email updated successfully!');
      this.currentPassword = '';
    } catch (e) {
      console.error(e);
      alert('Error updating email. Please check your password and try again.');
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

  // Product Edit/Delete
  openEditProduct(product: any) {
    this.editingProductId = product.id;
    this.editForm = {
      title: product.title || '',
      shortDescription: product.shortDescription || '',
      fullDescription: product.fullDescription || '',
      price: product.price || 0,
      originalPrice: product.originalPrice || null,
      version: product.version || '',
      category: product.category || '',
      status: product.status || 'published',
      demoUrl: product.demoUrl || '',
      tagsStr: (product.tags || []).join(', '),
      featuresStr: (product.features || []).join('\n'),
      techStackStr: (product.techStack || []).join(', '),
      isFeatured: product.isFeatured || false,
      isBestseller: product.isBestseller || false,
      isNew: product.isNew || false,
    };
    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
    this.editingProductId = null;
    this.editForm = {};
  }

  async saveEditProduct() {
    if (!this.editingProductId || !this.editForm.title) return;
    const updates: any = {
      title: this.editForm.title,
      shortDescription: this.editForm.shortDescription,
      fullDescription: this.editForm.fullDescription,
      price: Number(this.editForm.price),
      version: this.editForm.version,
      category: this.editForm.category,
      status: this.editForm.status,
      tags: this.editForm.tagsStr.split(',').map((t: string) => t.trim()).filter((t: string) => t),
      features: this.editForm.featuresStr.split('\n').filter((f: string) => f.trim()),
      techStack: this.editForm.techStackStr.split(',').map((t: string) => t.trim()).filter((t: string) => t),
      isFeatured: this.editForm.isFeatured,
      isBestseller: this.editForm.isBestseller,
      isNew: this.editForm.isNew,
    };
    if (this.editForm.originalPrice) {
      updates.originalPrice = Number(this.editForm.originalPrice);
      updates.discountPercent = Math.round((1 - updates.price / updates.originalPrice) * 100);
    }
    if (this.editForm.demoUrl) {
      updates.demoUrl = this.editForm.demoUrl;
    }
    try {
      await this.marketplace.updateProduct(this.editingProductId, updates);
      this.closeEditModal();
      alert('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product.');
    }
  }

  async deleteProduct(productId: string) {
    if (!confirm('Are you sure you want to permanently delete this product?')) return;
    try {
      await this.marketplace.deleteProduct(productId);
      alert('Product deleted.');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product.');
    }
  }

  // Blog Management Methods
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
      this.blogForm = {
        title: blog.title || '',
        content: blog.content || '',
        excerpt: blog.excerpt || '',
        published: blog.published || false
      };
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
        const blogRef = doc(this.firestore, `blogs/${this.editingBlogId}`);
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
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      }
      this.closeBlogModal();
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Failed to save blog post. Please check your Firestore rules.');
    }
  }

  async deleteBlog(blogId: string) {
    if (confirm('Are you sure you want to delete this blog post?')) {
      try {
        const blogRef = doc(this.firestore, `blogs/${blogId}`);
        await deleteDoc(blogRef);
      } catch (error) {
        console.error('Error deleting blog:', error);
        alert('Failed to delete blog post. Please check your Firestore rules.');
      }
    }
  }
}

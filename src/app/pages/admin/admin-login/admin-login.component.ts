import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { AdminAuthService } from '../../../services/admin-auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <main class="admin-login-page">
      <div class="pm-container">
        <div class="admin-login-wrapper">
          <div class="admin-login-card">
            <h1 class="admin-login-title">Admin Login</h1>
            <p class="admin-login-subtitle">Enter the authorized admin email and password.</p>

            <div class="error-msg" *ngIf="errorMessage">{{ errorMessage }}</div>

            <form class="admin-login-form" (ngSubmit)="onLogin()">
              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  [(ngModel)]="email"
                  required
                  class="pm-input"
                  autocomplete="email"
                />
              </div>

              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  [(ngModel)]="password"
                  required
                  class="pm-input"
                  autocomplete="current-password"
                />
              </div>

              <button type="submit" class="pm-btn pm-btn-primary pm-btn-lg w-full" [disabled]="isLoading">
                {{ isLoading ? 'Please wait...' : 'Login' }}
              </button>

              <div class="helper">
                <span>Unauthorized users will be redirected.</span>
                <a routerLink="/login">Back to user login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>

    <app-footer></app-footer>
  `,
  styles: [
    `
      .admin-login-page {
        padding: 80px 0 120px;
        min-height: calc(100vh - 200px);
        background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%);
        display: flex;
        align-items: center;
        margin-top: 0;
      }

      .admin-login-wrapper {
        max-width: 520px;
        margin: 0 auto;
      }

      .admin-login-card {
        background: var(--pm-surface);
        padding: 48px;
        border-radius: var(--pm-radius-xl);
        box-shadow: var(--pm-shadow-lg);
        border: 1px solid var(--pm-border-light);
      }

      .admin-login-title {
        font-size: 1.8rem;
        font-weight: 800;
        color: var(--pm-text-primary);
        margin: 0 0 8px;
        text-align: center;
      }

      .admin-login-subtitle {
        color: var(--pm-text-secondary);
        font-size: 0.95rem;
        text-align: center;
        margin: 0 0 28px;
        line-height: 1.5;
      }

      .admin-login-form {
        width: 100%;
      }

      .form-group {
        margin-bottom: 18px;
      }

      .form-group label {
        display: block;
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--pm-text-primary);
        margin-bottom: 8px;
      }

      .pm-input {
        width: 100%;
        padding: 12px 16px;
        border: 1px solid var(--pm-border);
        border-radius: var(--pm-radius-sm);
        font-family: inherit;
        font-size: 0.95rem;
        background: #F8FAFC;
        outline: none;
        transition: all var(--pm-transition-fast);
      }

      .pm-input:focus {
        background: white;
        border-color: var(--ion-color-primary);
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
      }

      .w-full { width: 100%; }

      .helper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 14px;
        font-size: 0.85rem;
        color: var(--pm-text-muted);
        gap: 12px;
        flex-wrap: wrap;
      }

      .helper a {
        color: var(--ion-color-primary);
        font-weight: 600;
        text-decoration: none;
      }

      .helper a:hover { text-decoration: underline; }

      .error-msg {
        background: #FEE2E2;
        color: #991B1B;
        padding: 12px;
        border-radius: var(--pm-radius-sm);
        margin-bottom: 20px;
        font-size: 0.85rem;
        border: 1px solid #FCA5A5;
      }

      @media (max-width: 640px) {
        .admin-login-card { padding: 32px 24px; }
        .admin-login-page { padding: 60px 0; }
      }
    `,
  ],
})
export class AdminLoginComponent {
  private router = inject(Router);
  private adminAuth = inject(AdminAuthService);

  email = '';
  password = '';

  isLoading = false;
  errorMessage = '';

  async onLogin() {
    if (this.isLoading) return;
    this.isLoading = true;
    this.errorMessage = '';

    try {
      const ok = await this.adminAuth.login(this.email, this.password);
      if (!ok) {
        this.errorMessage = 'Invalid admin credentials.';
        return;
      }
      this.router.navigate(['/admin']);
    } finally {
      this.isLoading = false;
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main class="login-page">
      <div class="pm-container">
        <div class="login-wrapper">
          <div class="login-card">
            <h1 class="login-title">{{ isRegisterMode ? 'Create an Account' : 'Welcome Back' }}</h1>
            <p class="login-subtitle">
              {{ isRegisterMode ? 'Join selljustcode to buy and download premium assets.' : 'Sign in to access your purchased products and account.' }}
            </p>

            <div class="social-login">
              <button class="pm-btn pm-btn-outline google-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
            </div>

            <div class="divider"><span>OR CONTINUE WITH EMAIL</span></div>

            <form class="login-form">
              <div class="form-group" *ngIf="isRegisterMode">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" name="name" [(ngModel)]="name" />
              </div>
              
              <div class="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" name="email" [(ngModel)]="email" />
              </div>

              <div class="form-group">
                <label>Password</label>
                <input type="password" placeholder="••••••••" name="password" [(ngModel)]="password" />
              </div>

              <div class="form-options" *ngIf="!isRegisterMode">
                <label class="remember-me">
                  <input type="checkbox" name="remember" /> 
                  <span>Remember me</span>
                </label>
                <a href="#" class="forgot-pwd">Forgot password?</a>
              </div>

              <button type="button" class="pm-btn pm-btn-primary pm-btn-lg w-full">
                {{ isRegisterMode ? 'Create Account' : 'Sign In' }}
              </button>
            </form>

            <div class="auth-switch">
              <span *ngIf="!isRegisterMode">Don't have an account? <a href="javascript:void(0)" (click)="toggleMode()">Sign up</a></span>
              <span *ngIf="isRegisterMode">Already have an account? <a href="javascript:void(0)" (click)="toggleMode()">Log in</a></span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .login-page {
      padding: 80px 0 120px;
      min-height: calc(100vh - 200px);
      background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%);
      display: flex;
      align-items: center;
      margin-top: 64px;
    }
    
    .login-wrapper {
      max-width: 480px;
      margin: 0 auto;
    }

    .login-card {
      background: var(--pm-surface);
      padding: 48px;
      border-radius: var(--pm-radius-xl);
      box-shadow: var(--pm-shadow-lg);
      border: 1px solid var(--pm-border-light);
    }

    .login-title {
      font-size: 1.8rem;
      font-weight: 800;
      color: var(--pm-text-primary);
      margin: 0 0 8px;
      text-align: center;
    }

    .login-subtitle {
      color: var(--pm-text-secondary);
      font-size: 0.95rem;
      text-align: center;
      margin: 0 0 32px;
      line-height: 1.5;
    }

    .social-login {
      margin-bottom: 24px;
    }

    .google-btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      height: 48px;
      font-size: 1rem;
      color: #334155;
      border-color: #E2E8F0;
    }
    .google-btn:hover {
      background: #F8FAFC;
    }

    .divider {
      position: relative;
      text-align: center;
      margin: 32px 0;
    }
    .divider::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 1px;
      background: var(--pm-border);
    }
    .divider span {
      position: relative;
      background: var(--pm-surface);
      padding: 0 12px;
      color: var(--pm-text-muted);
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.05em;
    }

    .form-group {
      margin-bottom: 20px;
    }
    .form-group label {
      display: block;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--pm-text-primary);
      margin-bottom: 8px;
    }
    .form-group input[type="text"],
    .form-group input[type="email"],
    .form-group input[type="password"] {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid var(--pm-border);
      border-radius: var(--pm-radius-sm);
      font-family: inherit;
      font-size: 0.95rem;
      background: #F8FAFC;
      transition: all var(--pm-transition-fast);
    }
    .form-group input:focus {
      background: white;
      border-color: var(--ion-color-primary);
      outline: none;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }

    .form-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }
    .remember-me {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      color: var(--pm-text-secondary);
      cursor: pointer;
    }
    .forgot-pwd {
      font-size: 0.85rem;
      color: var(--ion-color-primary);
      text-decoration: none;
      font-weight: 600;
    }
    .forgot-pwd:hover {
      text-decoration: underline;
    }

    .w-full { width: 100%; justify-content: center; }

    .auth-switch {
      text-align: center;
      margin-top: 24px;
      font-size: 0.9rem;
      color: var(--pm-text-secondary);
    }
    .auth-switch a {
      color: var(--ion-color-primary);
      font-weight: 600;
      text-decoration: none;
    }
    .auth-switch a:hover {
      text-decoration: underline;
    }
    
    @media (max-width: 640px) {
      .login-card { padding: 32px 24px; }
      .login-page { padding: 60px 0; }
    }
  `]
})
export class LoginComponent implements OnInit {
  isRegisterMode = false;
  name = '';
  email = '';
  password = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.isRegisterMode = params['register'] === 'true';
    });
  }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }
}

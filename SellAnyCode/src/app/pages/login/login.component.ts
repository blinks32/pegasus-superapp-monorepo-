import { Component, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonSpinner,
  ToastController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoGoogle, personOutline, sparklesOutline } from 'ionicons/icons';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, IonContent, IonButton, IonIcon, IonSpinner],
  template: `
    <ion-content class="login-content" [fullscreen]="true">
      <div class="login-wrapper">
        <!-- Animated background orbs -->
        <div class="bg-orb orb-1"></div>
        <div class="bg-orb orb-2"></div>
        <div class="bg-orb orb-3"></div>

        <div class="login-card glass-card">
          <div class="logo-section">
            <div class="logo-icon">
              <ion-icon name="sparkles-outline"></ion-icon>
            </div>
            <h1>Pegasus LMS</h1>
            <p class="tagline">Learn Through Play</p>
          </div>

          <div class="auth-buttons">
            <ion-button
              id="guest-signin-btn"
              expand="block"
              shape="round"
              fill="outline"
              class="guest-btn"
              (click)="signInAsGuest(false)"
              [disabled]="loading"
            >
              <ion-icon slot="start" name="person-outline"></ion-icon>
              Continue as Student (Guest)
            </ion-button>

            <ion-button
              id="teacher-signin-btn"
              expand="block"
              shape="round"
              fill="clear"
              class="teacher-btn"
              (click)="signInAsGuest(true)"
              [disabled]="loading"
            >
              Teacher Login
            </ion-button>
          </div>

          @if (loading) {
            <div class="loading-overlay">
              <ion-spinner name="crescent"></ion-spinner>
            </div>
          }
        </div>

        <p class="footer-text">Interactive learning, one topic at a time.</p>
      </div>
    </ion-content>
  `,
  styles: [`
    .login-content {
      --background: linear-gradient(135deg, #0a0a1a 0%, #1a1035 50%, #0d1b2a 100%);
    }

    .login-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100%;
      padding: 24px;
      position: relative;
      overflow: hidden;
    }

    /* Animated floating orbs */
    .bg-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.4;
      animation: float 8s ease-in-out infinite;
    }
    .orb-1 {
      width: 300px; height: 300px;
      background: #6C5CE7;
      top: -50px; left: -50px;
      animation-delay: 0s;
    }
    .orb-2 {
      width: 250px; height: 250px;
      background: #00B894;
      bottom: -30px; right: -30px;
      animation-delay: -3s;
    }
    .orb-3 {
      width: 200px; height: 200px;
      background: #E84393;
      top: 50%; left: 60%;
      animation-delay: -5s;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -20px) scale(1.05); }
      66% { transform: translate(-20px, 20px) scale(0.95); }
    }

    .login-card {
      position: relative;
      width: 100%;
      max-width: 400px;
      padding: 48px 32px;
      text-align: center;
      z-index: 1;
    }

    .logo-section {
      margin-bottom: 40px;
    }

    .logo-icon {
      width: 80px; height: 80px;
      margin: 0 auto 16px;
      border-radius: 24px;
      background: linear-gradient(135deg, #6C5CE7, #E84393);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      color: white;
      box-shadow: 0 8px 32px rgba(108, 92, 231, 0.4);
    }

    h1 {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      font-size: 2rem;
      color: white;
      margin: 0 0 8px;
      letter-spacing: -0.5px;
    }

    .tagline {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1rem;
      font-weight: 400;
      margin: 0;
    }

    .auth-buttons {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .google-btn {
      --background: #ffffff;
      --color: #333333;
      --border-radius: 16px;
      font-weight: 600;
      height: 52px;
      --box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    }

    .guest-btn {
      --border-color: rgba(255,255,255,0.3);
      --color: rgba(255,255,255,0.9);
      --border-radius: 16px;
      font-weight: 600;
      height: 52px;
    }
    .guest-btn:hover {
      --border-color: rgba(255,255,255,0.6);
    }

    .teacher-btn {
      --color: rgba(255,255,255,0.4);
      font-size: 0.85rem;
      margin-top: 8px;
      height: 40px;
    }

    .divider {
      display: flex;
      align-items: center;
      gap: 16px;
      color: rgba(255,255,255,0.4);
      font-size: 0.85rem;
    }
    .divider::before, .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: rgba(255,255,255,0.15);
    }

    .loading-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.5);
      backdrop-filter: blur(4px);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 24px;
      z-index: 10;
    }

    .footer-text {
      margin-top: 32px;
      color: rgba(255,255,255,0.3);
      font-size: 0.85rem;
      z-index: 1;
    }
  `],
})
export class LoginComponent {
  private authService = inject(AuthService);
  private toastCtrl = inject(ToastController);
  private router = inject(Router);
  loading = false;

  constructor() {
    addIcons({ logoGoogle, personOutline, sparklesOutline });

    // Auto-redirect if already logged in (or if redirect auth completes)
    effect(() => {
      if (this.authService.isLoggedIn()) {
        const isTeacher = localStorage.getItem('teacher_mode') === 'true';
        if (isTeacher) {
          this.router.navigate(['/teacher-dashboard']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      }
    });
  }

  async signInWithGoogle(): Promise<void> {
    this.loading = true;
    try {
      await this.authService.signInWithGoogle();
    } catch (error: any) {
      this.loading = false;
      this.showError(error.message || 'Google Auth Failed. Please ensure this domain is authorized in Firebase.');
    }
  }

  async signInAsGuest(isTeacher: boolean): Promise<void> {
    this.loading = true;
    try {
      if (isTeacher) {
        localStorage.setItem('teacher_mode', 'true');
      } else {
        localStorage.removeItem('teacher_mode');
      }
      await this.authService.signInAsGuest();
    } catch (error: any) {
      this.loading = false;
      this.showError(error.message || 'Guest Auth Failed. Please enable Anonymous Auth in Firebase.');
    }
  }

  private async showError(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 6000,
      color: 'danger',
      position: 'bottom',
      buttons: ['OK']
    });
    await toast.present();
  }
}

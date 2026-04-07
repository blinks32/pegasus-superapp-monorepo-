import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSpinner,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline, schoolOutline } from 'ionicons/icons';
import { Firestore, collectionGroup, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

interface TeacherScoreView {
  userId: string;
  topicId: string;
  score: number;
  total: number;
  timestamp: any;
}

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonButtons, IonButton, IonIcon, IonCard,
    IonCardHeader, IonCardTitle, IonCardContent,
    IonSpinner, IonList, IonItem, IonLabel, IonBadge,
  ],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="glass-toolbar">
        <ion-title>
          <span class="toolbar-title"><ion-icon name="school-outline"></ion-icon> Teacher Portal</span>
        </ion-title>
        <ion-buttons slot="end">
          <ion-button fill="clear" (click)="logout()">
            <ion-icon slot="icon-only" name="log-out-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="dashboard-content" [fullscreen]="true">
      <div class="dashboard-wrapper">
        <div class="bg-orb orb-1"></div>
        <div class="bg-orb orb-2"></div>

        <div class="welcome-section">
          <h1>Student Analytics</h1>
          <p>Real-time view of student quiz scores across all topics.</p>
        </div>

        <ion-card class="glass-card table-card">
          <ion-card-header>
            <ion-card-title>Recent Submissions</ion-card-title>
          </ion-card-header>
          
          <ion-card-content class="ion-no-padding">
            @if (scores$ | async; as scores) {
              @if (scores.length === 0) {
                <div class="empty-state">
                  <p>No student scores recorded yet.</p>
                </div>
              } @else {
                <ion-list class="score-list">
                  @for (score of scores; track score.userId + score.topicId + score.timestamp) {
                    <ion-item class="glass-item" lines="full">
                      <ion-label>
                        <h2>Student ID: <span class="student-id">{{ score.userId | slice:0:8 }}...</span></h2>
                        <p>Topic: <strong>{{ score.topicId }}</strong></p>
                        <p class="timestamp">{{ score.timestamp?.toDate() | date:'short' }}</p>
                      </ion-label>
                      <ion-badge slot="end" [color]="getScoreColor(score.score, score.total)" class="score-badge">
                        {{ score.score }} / {{ score.total }}
                      </ion-badge>
                    </ion-item>
                  }
                </ion-list>
              }
            } @else {
              <div class="loading-state">
                <ion-spinner name="crescent"></ion-spinner>
                <p>Loading scores...</p>
              </div>
            }
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  `,
  styles: [`
    .dashboard-content {
      --background: linear-gradient(135deg, #1e0a2d 0%, #2a0a2f 50%, #150821 100%);
    }

    .glass-toolbar {
      --background: rgba(255,255,255,0.05);
      --border-width: 0;
      backdrop-filter: blur(20px);
      --color: white;
    }

    .toolbar-title {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .dashboard-wrapper {
      padding: 16px;
      position: relative;
      overflow: hidden;
      min-height: 100%;
    }

    .bg-orb {
      position: fixed;
      border-radius: 50%;
      filter: blur(100px);
      opacity: 0.15;
      animation: float 10s ease-in-out infinite;
      pointer-events: none;
      z-index: 0;
    }
    .orb-1 { width: 400px; height: 400px; background: #e84393; top: -100px; right: -100px; }
    .orb-2 { width: 350px; height: 350px; background: #0984e3; bottom: -50px; left: -50px; animation-delay: -4s; }

    @keyframes float {
      0%, 100% { transform: translate(0,0) scale(1); }
      33% { transform: translate(20px,-15px) scale(1.03); }
      66% { transform: translate(-15px,10px) scale(0.97); }
    }

    .welcome-section {
      text-align: center;
      padding: 24px 16px;
      position: relative;
      z-index: 1;
    }
    .welcome-section h1 {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      font-size: 1.6rem;
      color: white;
      margin: 0 0 8px;
    }
    .welcome-section p {
      color: rgba(255,255,255,0.5);
      margin: 0;
      font-size: 0.95rem;
    }

    .table-card {
      max-width: 800px;
      margin: 0 auto;
      background: rgba(20, 20, 40, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      backdrop-filter: blur(20px);
      position: relative;
      z-index: 1;
    }
    
    ion-card-header {
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }
    ion-card-title {
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      font-family: 'Inter', sans-serif;
    }

    .score-list {
      background: transparent;
      padding: 0;
    }
    .glass-item {
      --background: transparent;
      --border-color: rgba(255,255,255,0.05);
    }
    .glass-item h2 {
      color: rgba(255,255,255,0.9);
      font-size: 0.95rem;
      font-family: monospace;
    }
    .student-id {
      color: #6c5ce7;
      font-weight: bold;
    }
    .glass-item p {
      color: rgba(255,255,255,0.6);
      font-size: 0.85rem;
    }
    .timestamp {
      font-size: 0.75rem !important;
      color: rgba(255,255,255,0.4) !important;
      margin-top: 4px;
    }

    .score-badge {
      font-size: 1rem;
      padding: 8px 12px;
      border-radius: 8px;
    }

    .empty-state, .loading-state {
      padding: 40px 20px;
      text-align: center;
      color: rgba(255,255,255,0.5);
    }
    .loading-state p {
      margin-top: 16px;
    }
  `]
})
export class TeacherDashboardComponent {
  authService = inject(AuthService);
  private firestore = inject(Firestore);
  private router = inject(Router);

  scores$: Observable<TeacherScoreView[]>;

  constructor() {
    addIcons({ logOutOutline, schoolOutline });
    
    // Fetch all documents from any subcollection named "scores" using Collection Group query.
    // WARNING: This requires specific Firestore Rules and an indexing rule if ordered.
    const scoresRef = collectionGroup(this.firestore, 'scores');
    this.scores$ = collectionData(scoresRef) as Observable<TeacherScoreView[]>;
  }

  getScoreColor(score: number, total: number): string {
    const pct = score / total;
    if (pct >= 0.8) return 'success';
    if (pct >= 0.5) return 'warning';
    return 'danger';
  }

  logout(): void {
    localStorage.removeItem('teacher_mode');
    this.authService.logout();
  }
}

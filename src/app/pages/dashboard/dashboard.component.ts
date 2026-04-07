import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
  IonButtons,
  IonChip,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  logOutOutline,
  trophyOutline,
  calculatorOutline,
  flaskOutline,
  earthOutline,
  bookOutline,
  codeSlashOutline,
  globeOutline,
} from 'ionicons/icons';
import { AuthService } from '../../services/auth.service';
import { QuizService } from '../../services/quiz.service';
import { LearningStateService } from '../../services/learning-state.service';
import { Topic } from '../../models/lms.models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonGrid, IonRow, IonCol, IonIcon, IonButton, IonButtons,
    IonChip, IonLabel,
  ],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="glass-toolbar">
        <ion-title>
          <span class="toolbar-title">🎓 Pegasus LMS</span>
        </ion-title>
        <ion-buttons slot="end">
          <ion-chip class="user-chip" id="user-profile-chip">
            <ion-label>{{ authService.getDisplayName() }}</ion-label>
          </ion-chip>
          <ion-button id="logout-btn" fill="clear" (click)="logout()">
            <ion-icon slot="icon-only" name="log-out-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="dashboard-content" [fullscreen]="true">
      <div class="dashboard-wrapper">
        <!-- Animated bg -->
        <div class="bg-orb orb-1"></div>
        <div class="bg-orb orb-2"></div>

        <!-- Welcome section -->
        <div class="welcome-section">
          <h1>Welcome back, {{ authService.getDisplayName() }}!</h1>
          <p>Continue your learning journey. Pick a topic to dive in.</p>

          <div class="stats-bar glass-card">
            <div class="stat-item">
              <ion-icon name="trophy-outline"></ion-icon>
              <div>
                <span class="stat-value">{{ learningState.overallProgress() }}%</span>
                <span class="stat-label">Overall</span>
              </div>
            </div>
            <div class="stat-item">
              <span class="stat-value">{{ topics.length }}</span>
              <span class="stat-label">Topics</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">{{ getCompletedCount() }}</span>
              <span class="stat-label">Completed</span>
            </div>
          </div>
        </div>

        <!-- Topic cards grid -->
        <ion-grid class="topics-grid">
          <ion-row>
            @for (topic of topics; track topic.id) {
              <ion-col size="12" size-md="6" size-lg="4">
                <div
                  class="topic-card glass-card"
                  [style.--card-accent]="topic.color"
                  (click)="openTopic(topic)"
                  id="topic-card-{{ topic.id }}"
                >
                  <!-- Progress ring & Thumbnail -->
                  <div class="progress-ring-container">
                    <svg class="progress-ring" viewBox="0 0 80 80">
                      <circle class="progress-ring-bg" cx="40" cy="40" r="34" />
                      <circle
                        class="progress-ring-fill"
                        cx="40" cy="40" r="34"
                        [style.stroke]="topic.color"
                        [style.stroke-dasharray]="getCircumference()"
                        [style.stroke-dashoffset]="getDashOffset(topic.id)"
                      />
                    </svg>
                    @if (topic.imageUrl) {
                      <div class="topic-thumbnail-wrapper">
                        <img [src]="topic.imageUrl" class="topic-thumbnail" alt="Topic image">
                      </div>
                    } @else {
                      <div class="ring-icon" [style.color]="topic.color">
                        <ion-icon [name]="topic.icon"></ion-icon>
                      </div>
                    }
                  </div>

                  <div class="card-content">
                    <h3>{{ topic.title }}</h3>
                    <p>{{ topic.description }}</p>
                    <div class="card-spacer"></div>
                    <div class="card-footer">
                      <span class="phase-badge" [class]="getPhaseClass(topic.id)">
                        {{ getPhaseLabel(topic.id) }}
                      </span>
                      <span class="question-count">
                        {{ topic.totalQuestions }} qs
                      </span>
                    </div>
                  </div>

                  <div class="card-glow" [style.background]="topic.color"></div>
                </div>
              </ion-col>
            }
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  `,
  styles: [`
    .dashboard-content {
      --background: linear-gradient(135deg, #0a0a1a 0%, #1a1035 50%, #0d1b2a 100%);
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
    }

    .user-chip {
      --background: rgba(255,255,255,0.1);
      --color: rgba(255,255,255,0.8);
      font-size: 0.8rem;
    }

    .dashboard-wrapper {
      padding: 16px;
      position: relative;
      overflow: hidden;
    }

    .bg-orb {
      position: fixed;
      border-radius: 50%;
      filter: blur(100px);
      opacity: 0.2;
      animation: float 10s ease-in-out infinite;
      pointer-events: none;
      z-index: 0;
    }
    .orb-1 { width: 400px; height: 400px; background: #6C5CE7; top: -100px; right: -100px; }
    .orb-2 { width: 350px; height: 350px; background: #00B894; bottom: -50px; left: -50px; animation-delay: -4s; }

    @keyframes float {
      0%, 100% { transform: translate(0,0) scale(1); }
      33% { transform: translate(20px,-15px) scale(1.03); }
      66% { transform: translate(-15px,10px) scale(0.97); }
    }

    .welcome-section {
      text-align: center;
      padding: 24px 16px 32px;
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
      margin: 0 0 24px;
      font-size: 0.95rem;
    }

    .stats-bar {
      display: flex;
      justify-content: space-around;
      padding: 20px;
      max-width: 500px;
      margin: 0 auto;
    }
    .stat-item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: white;
    }
    .stat-item ion-icon {
      font-size: 24px;
      color: #FDCB6E;
    }
    .stat-item div {
      display: flex;
      flex-direction: column;
    }
    .stat-value {
      font-weight: 700;
      font-size: 1.2rem;
      color: white;
    }
    .stat-label {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.5);
    }

    .topics-grid {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Fixed height alignment for generic display grid */
    ion-col {
      display: flex;
    }

    .topic-card {
      position: relative;
      padding: 24px;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      flex: 1; /* Match sibling card height */
      gap: 20px;
      align-items: center;
      text-align: center;
      min-height: 280px;
    }

    .topic-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.3);
    }
    .topic-card:active {
      transform: scale(0.98);
    }

    .card-glow {
      position: absolute;
      top: -50%; right: -50%;
      width: 100%; height: 100%;
      border-radius: 50%;
      opacity: 0.06;
      filter: blur(40px);
      pointer-events: none;
    }

    /* Progress ring */
    .progress-ring-container {
      position: relative;
      flex-shrink: 0;
      width: 80px;
      height: 80px;
    }
    .progress-ring {
      position: absolute;
      top: 0; left: 0;
      width: 80px;
      height: 80px;
      transform: rotate(-90deg);
      z-index: 2;
    }
    .progress-ring-bg {
      fill: none;
      stroke: rgba(255,255,255,0.1);
      stroke-width: 4;
    }
    .progress-ring-fill {
      fill: none;
      stroke-width: 4;
      stroke-linecap: round;
      transition: stroke-dashoffset 0.6s ease;
    }
    
    .topic-thumbnail-wrapper {
      position: absolute;
      top: 6px; left: 6px;
      width: 68px; height: 68px;
      border-radius: 50%;
      overflow: hidden;
      z-index: 1;
      background: #111;
    }
    .topic-thumbnail {
      width: 100%; height: 100%;
      object-fit: cover;
    }
    
    .ring-icon {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      font-size: 28px;
      z-index: 1;
    }

    .card-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .card-content h3 {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 1.1rem;
      color: white;
      margin: 0 0 6px;
    }
    .card-content p {
      color: rgba(255,255,255,0.5);
      font-size: 0.85rem;
      margin: 0;
      line-height: 1.4;
    }
    .card-spacer {
      flex-grow: 1;
    }

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-top: 16px;
      border-top: 1px solid rgba(255,255,255,0.1);
      padding-top: 16px;
    }
    .phase-badge {
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 4px 10px;
      border-radius: 12px;
    }
    .phase-intro {
      background: rgba(108,92,231,0.2);
      color: #a29bfe;
    }
    .phase-game {
      background: rgba(253,203,110,0.2);
      color: #fdcb6e;
    }
    .phase-quiz {
      background: rgba(0,184,148,0.2);
      color: #55efc4;
    }
    .phase-complete {
      background: rgba(232,67,147,0.2);
      color: #fd79a8;
    }
    .question-count {
      font-size: 0.75rem;
      color: rgba(255,255,255,0.35);
    }
  `],
})
export class DashboardComponent {
  authService = inject(AuthService);
  learningState = inject(LearningStateService);
  private quizService = inject(QuizService);
  private router = inject(Router);

  topics: Topic[] = [];

  private readonly circumference = 2 * Math.PI * 34; // r=34

  constructor() {
    addIcons({
      logOutOutline, trophyOutline,
      calculatorOutline, flaskOutline, earthOutline,
      bookOutline, codeSlashOutline, globeOutline,
    });
    this.topics = this.quizService.getTopics();

    // Initialize progress for all topics
    this.topics.forEach((t) => this.learningState.initTopic(t.id));
  }

  openTopic(topic: Topic): void {
    this.router.navigate(['/topic', topic.id]);
  }

  logout(): void {
    this.authService.logout();
  }

  getCircumference(): string {
    return `${this.circumference} ${this.circumference}`;
  }

  getDashOffset(topicId: string): string {
    const percent = this.learningState.getPhasePercent(topicId);
    const offset = this.circumference - (percent / 100) * this.circumference;
    return `${offset}`;
  }

  getCompletedCount(): number {
    let count = 0;
    this.learningState.topicProgress().forEach((p) => {
      if (p.phase === 'complete') count++;
    });
    return count;
  }

  getPhaseLabel(topicId: string): string {
    const p = this.learningState.getTopicProgress(topicId);
    switch (p.phase) {
      case 'intro': return 'Not Started';
      case 'game': return 'In Game';
      case 'quiz': return 'Quiz Ready';
      case 'complete': return 'Mastered ✓';
    }
  }

  getPhaseClass(topicId: string): string {
    const p = this.learningState.getTopicProgress(topicId);
    return `phase-${p.phase}`;
  }
}

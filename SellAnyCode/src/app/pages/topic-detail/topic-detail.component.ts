import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  playOutline,
  gameControllerOutline,
  clipboardOutline,
  checkmarkDoneOutline,
} from 'ionicons/icons';
import { LearningStateService } from '../../services/learning-state.service';
import { QuizService } from '../../services/quiz.service';
import { ScoreService } from '../../services/score.service';
import { Topic } from '../../models/lms.models';
import { GameContainerComponent } from '../../components/game-container/game-container.component';
import { QuizComponent } from '../../components/quiz/quiz.component';

@Component({
  selector: 'app-topic-detail',
  standalone: true,
  imports: [
    CommonModule,
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonBackButton, IonButtons, IonButton, IonIcon,
    GameContainerComponent, QuizComponent,
  ],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="glass-toolbar">
        <ion-buttons slot="start">
          <ion-back-button
            defaultHref="/dashboard"
            text=""
            id="topic-back-btn"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>{{ topic?.title || 'Topic' }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="topic-content" [fullscreen]="true">
      <div class="topic-wrapper">
        <div class="bg-orb orb-1" [style.background]="topic?.color || '#6C5CE7'"></div>
        <div class="bg-orb orb-2"></div>

        <!-- Phase stepper -->
        <div class="phase-stepper glass-card">
          <div class="step" [class.active]="phase === 'intro'" [class.done]="isPhaseAfter('intro')">
            <div class="step-dot"><span>1</span></div>
            <span class="step-label">Intro</span>
          </div>
          <div class="step-line" [class.filled]="isPhaseAfter('intro')"></div>
          <div class="step" [class.active]="phase === 'game'" [class.done]="isPhaseAfter('game')">
            <div class="step-dot"><span>2</span></div>
            <span class="step-label">Game</span>
          </div>
          <div class="step-line" [class.filled]="isPhaseAfter('game')"></div>
          <div class="step" [class.active]="phase === 'quiz'" [class.done]="isPhaseAfter('quiz')">
            <div class="step-dot"><span>3</span></div>
            <span class="step-label">Quiz</span>
          </div>
          <div class="step-line" [class.filled]="phase === 'complete'"></div>
          <div class="step" [class.active]="phase === 'complete'" [class.done]="phase === 'complete'">
            <div class="step-dot"><span>✓</span></div>
            <span class="step-label">Done</span>
          </div>
        </div>

        <!-- Phase Content -->
        @switch (phase) {
          @case ('intro') {
            <div class="phase-card glass-card intro-card" id="intro-phase">
              <div class="intro-icon" [style.color]="topic?.color">
                <ion-icon [name]="topic?.icon || 'book-outline'"></ion-icon>
              </div>
              <h2>{{ topic?.title }}</h2>
              <p class="intro-desc">{{ topic?.description }}</p>
              <div class="intro-info">
                <div class="info-item">
                  <ion-icon name="game-controller-outline"></ion-icon>
                  <span>Interactive game activity</span>
                </div>
                <div class="info-item">
                  <ion-icon name="clipboard-outline"></ion-icon>
                  <span>{{ topic?.totalQuestions }} quiz questions</span>
                </div>
                <div class="info-item">
                  <ion-icon name="checkmark-done-outline"></ion-icon>
                  <span>Earn a mastery certificate</span>
                </div>
              </div>
              <ion-button
                expand="block"
                shape="round"
                class="start-btn"
                (click)="startGame()"
                id="start-game-btn"
              >
                <ion-icon slot="start" name="play-outline"></ion-icon>
                Start Learning
              </ion-button>
            </div>
          }
          @case ('game') {
            <app-game-container
              [gameUrl]="topic?.gameUrl || ''"
              (onGameComplete)="onGameComplete()"
              id="game-phase"
            ></app-game-container>
          }
          @case ('quiz') {
            <app-quiz
              [topicId]="topicId"
              (onQuizComplete)="onQuizComplete($event)"
              id="quiz-phase"
            ></app-quiz>
          }
          @case ('complete') {
            <div class="phase-card glass-card complete-card" id="complete-phase">
              <div class="complete-emoji">🎓</div>
              <h2>Topic Complete!</h2>
              <p class="complete-msg">You've finished all phases. View your certificate or return to the dashboard.</p>
              <div class="complete-actions">
                <ion-button
                  expand="block"
                  shape="round"
                  class="certificate-btn"
                  (click)="viewCertificate()"
                  id="view-certificate-btn"
                >
                  View Certificate
                </ion-button>
                <ion-button
                  expand="block"
                  shape="round"
                  fill="outline"
                  class="back-btn"
                  (click)="backToDashboard()"
                  id="back-dashboard-btn"
                >
                  Back to Dashboard
                </ion-button>
              </div>
            </div>
          }
        }
      </div>
    </ion-content>
  `,
  styles: [`
    .topic-content {
      --background: linear-gradient(135deg, #0a0a1a 0%, #1a1035 50%, #0d1b2a 100%);
    }

    .glass-toolbar {
      --background: rgba(255,255,255,0.05);
      --border-width: 0;
      --color: white;
      backdrop-filter: blur(20px);
    }

    .topic-wrapper {
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
    }
    .orb-1 { width: 350px; height: 350px; top: -80px; right: -80px; }
    .orb-2 { width: 300px; height: 300px; background: #00B894; bottom: -50px; left: -50px; animation-delay: -3s; }

    @keyframes float {
      0%, 100% { transform: translate(0,0) scale(1); }
      33% { transform: translate(15px,-10px) scale(1.03); }
      66% { transform: translate(-10px,8px) scale(0.97); }
    }

    /* Phase stepper */
    .phase-stepper {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px 20px;
      margin-bottom: 24px;
      gap: 0;
      position: relative;
      z-index: 1;
    }
    .step {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
    .step-dot {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.8rem;
      color: rgba(255,255,255,0.4);
      transition: all 0.3s ease;
    }
    .step.active .step-dot {
      background: linear-gradient(135deg, #6C5CE7, #a29bfe);
      color: white;
      box-shadow: 0 4px 16px rgba(108,92,231,0.4);
    }
    .step.done .step-dot {
      background: #00B894;
      color: white;
    }
    .step-label {
      font-size: 0.7rem;
      color: rgba(255,255,255,0.4);
      font-weight: 600;
    }
    .step.active .step-label,
    .step.done .step-label {
      color: rgba(255,255,255,0.8);
    }
    .step-line {
      flex: 1;
      height: 2px;
      background: rgba(255,255,255,0.1);
      margin: 0 8px;
      margin-bottom: 22px;
      transition: background 0.3s ease;
    }
    .step-line.filled {
      background: #00B894;
    }

    /* Intro card */
    .intro-card {
      text-align: center;
      padding: 40px 24px;
      max-width: 500px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    .intro-icon {
      font-size: 56px;
      margin-bottom: 16px;
    }
    .intro-card h2 {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      font-size: 1.6rem;
      color: white;
      margin: 0 0 12px;
    }
    .intro-desc {
      color: rgba(255,255,255,0.6);
      font-size: 1rem;
      margin: 0 0 28px;
      line-height: 1.5;
    }

    .intro-info {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 28px;
      text-align: left;
    }
    .info-item {
      display: flex;
      align-items: center;
      gap: 12px;
      color: rgba(255,255,255,0.7);
      font-size: 0.9rem;
    }
    .info-item ion-icon {
      font-size: 20px;
      color: #a29bfe;
    }

    .start-btn {
      --background: linear-gradient(135deg, #6C5CE7, #E84393);
      --border-radius: 16px;
      font-weight: 600;
      height: 52px;
    }

    /* Complete card */
    .complete-card {
      text-align: center;
      padding: 48px 24px;
      max-width: 500px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }
    .complete-emoji {
      font-size: 72px;
      margin-bottom: 16px;
    }
    .complete-card h2 {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      font-size: 1.6rem;
      color: white;
      margin: 0 0 12px;
    }
    .complete-msg {
      color: rgba(255,255,255,0.5);
      margin: 0 0 28px;
    }
    .complete-actions {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .certificate-btn {
      --background: linear-gradient(135deg, #6C5CE7, #E84393);
      --border-radius: 16px;
      font-weight: 600;
      height: 52px;
    }
    .back-btn {
      --border-color: rgba(255,255,255,0.2);
      --color: rgba(255,255,255,0.7);
      --border-radius: 16px;
      height: 48px;
    }
  `],
})
export class TopicDetailComponent implements OnInit, OnDestroy {
  learningState = inject(LearningStateService);
  private quizService = inject(QuizService);
  private scoreService = inject(ScoreService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  topicId = '';
  topic: Topic | undefined;

  constructor() {
    addIcons({
      arrowBackOutline, playOutline, gameControllerOutline,
      clipboardOutline, checkmarkDoneOutline,
    });
  }

  get phase() {
    return this.learningState.currentPhase();
  }

  ngOnInit(): void {
    this.topicId = this.route.snapshot.paramMap.get('id') || '';
    this.topic = this.quizService.getTopic(this.topicId);
    this.learningState.initTopic(this.topicId);
  }

  ngOnDestroy(): void {
    this.resetOrientation();
  }

  isPhaseAfter(check: string): boolean {
    const order = ['intro', 'game', 'quiz', 'complete'];
    return order.indexOf(this.phase) > order.indexOf(check);
  }

  async startGame(): Promise<void> {
    this.learningState.advanceToGame(this.topicId);
    
    // Smoothly transition to immersive landscape mode on mobile
    const isMobile = window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
      try {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        }
        // Force landscape orientation (requires fullscreen active in most browsers)
        if (screen.orientation && (screen.orientation as any).lock) {
          await (screen.orientation as any).lock('landscape');
        }
      } catch (err) {
        console.warn('Orientation lock failed, falling back to standard view', err);
      }
    }
  }

  onGameComplete(): void {
    this.learningState.advanceToQuiz(this.topicId);
    this.resetOrientation();
  }

  async onQuizComplete(result: { score: number; total: number }): Promise<void> {
    this.learningState.markComplete(this.topicId, result.score, result.total);
    try {
      await this.scoreService.saveScore(this.topicId, result.score, result.total);
    } catch (e) {
      console.error('Failed to save score:', e);
    }
  }

  viewCertificate(): void {
    this.router.navigate(['/certificate', this.topicId]);
  }

  backToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  private resetOrientation(): void {
    try {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen();
      }
      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock();
      }
    } catch (err) {
      console.warn('Silent failure restoring orientation', err);
    }
  }
}

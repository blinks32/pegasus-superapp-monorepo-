import { Component, inject, OnInit } from '@angular/core';
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
import { shareOutline, arrowBackOutline } from 'ionicons/icons';
import { LearningStateService } from '../../services/learning-state.service';
import { QuizService } from '../../services/quiz.service';
import { ShareService } from '../../services/share.service';
import { Topic, TopicProgress } from '../../models/lms.models';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [
    CommonModule,
    IonContent, IonHeader, IonToolbar, IonTitle,
    IonBackButton, IonButtons, IonButton, IonIcon,
  ],
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar class="glass-toolbar">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/dashboard" text="" id="cert-back-btn"></ion-back-button>
        </ion-buttons>
        <ion-title>Mastery Certificate</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="cert-content" [fullscreen]="true">
      <div class="cert-wrapper">
        <div class="bg-orb orb-1"></div>
        <div class="bg-orb orb-2"></div>
        <div class="bg-orb orb-3"></div>

        <div class="certificate glass-card" id="certificate-card">
          <!-- Decorative border -->
          <div class="cert-border">
            <div class="cert-inner">
              <div class="cert-header">
                <span class="cert-award">🏆</span>
                <h1>Certificate of Mastery</h1>
                <div class="cert-divider"></div>
              </div>

              <div class="cert-body">
                <p class="cert-text">This certifies that the student has successfully mastered</p>
                <h2 class="cert-topic" [style.color]="topic?.color">
                  {{ topic?.title || 'Unknown Topic' }}
                </h2>
                <p class="cert-description">{{ topic?.description }}</p>
              </div>

              <div class="cert-score">
                <div class="score-circle" [style.border-color]="topic?.color">
                  <span class="score-num">{{ progress.quizScore }}</span>
                  <span class="score-sep">/</span>
                  <span class="score-den">{{ progress.quizTotal }}</span>
                </div>
                <span class="score-label">Quiz Score</span>
              </div>

              <div class="cert-footer">
                <div class="cert-date">
                  <span class="label">Completed</span>
                  <span class="value">{{ formatDate(progress.completedAt) }}</span>
                </div>
                <div class="cert-seal">
                  <span class="seal-icon">🎓</span>
                  <span class="seal-text">Pegasus LMS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cert-actions">
          <ion-button
            expand="block"
            shape="round"
            class="share-btn"
            (click)="shareCertificate()"
            id="share-certificate-btn"
          >
            <ion-icon slot="start" name="share-outline"></ion-icon>
            Share Certificate
          </ion-button>

          <ion-button
            expand="block"
            shape="round"
            fill="outline"
            class="back-btn"
            (click)="backToDashboard()"
            id="cert-back-dashboard-btn"
          >
            Back to Dashboard
          </ion-button>
        </div>
      </div>
    </ion-content>
  `,
  styles: [`
    .cert-content {
      --background: linear-gradient(135deg, #0a0a1a 0%, #1a1035 50%, #0d1b2a 100%);
    }

    .glass-toolbar {
      --background: rgba(255,255,255,0.05);
      --border-width: 0;
      --color: white;
      backdrop-filter: blur(20px);
    }

    .cert-wrapper {
      padding: 24px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    .bg-orb {
      position: fixed;
      border-radius: 50%;
      filter: blur(100px);
      opacity: 0.15;
      animation: float 10s ease-in-out infinite;
      pointer-events: none;
    }
    .orb-1 { width: 300px; height: 300px; background: #6C5CE7; top: 0; left: -50px; }
    .orb-2 { width: 250px; height: 250px; background: #E84393; top: 50%; right: -50px; animation-delay: -3s; }
    .orb-3 { width: 200px; height: 200px; background: #FDCB6E; bottom: 0; left: 50%; animation-delay: -6s; }

    @keyframes float {
      0%, 100% { transform: translate(0,0) scale(1); }
      33% { transform: translate(15px,-10px) scale(1.03); }
      66% { transform: translate(-10px,8px) scale(0.97); }
    }

    .certificate {
      width: 100%;
      max-width: 480px;
      padding: 4px;
      position: relative;
      z-index: 1;
    }

    .cert-border {
      border: 2px solid rgba(255,255,255,0.15);
      border-radius: 22px;
      padding: 4px;
    }

    .cert-inner {
      border: 1px dashed rgba(255,255,255,0.1);
      border-radius: 18px;
      padding: 32px 24px;
      text-align: center;
    }

    .cert-header {
      margin-bottom: 24px;
    }
    .cert-award {
      font-size: 48px;
      display: block;
      margin-bottom: 12px;
    }
    .cert-header h1 {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      font-size: 1.4rem;
      color: white;
      margin: 0 0 16px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .cert-divider {
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #6C5CE7, #E84393);
      margin: 0 auto;
      border-radius: 2px;
    }

    .cert-body {
      margin-bottom: 28px;
    }
    .cert-text {
      color: rgba(255,255,255,0.5);
      font-size: 0.9rem;
      margin: 0 0 12px;
    }
    .cert-topic {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      font-size: 1.8rem;
      margin: 0 0 8px;
    }
    .cert-description {
      color: rgba(255,255,255,0.4);
      font-size: 0.85rem;
      margin: 0;
    }

    .cert-score {
      margin-bottom: 28px;
    }
    .score-circle {
      width: 100px; height: 100px;
      border: 4px solid;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
      margin-bottom: 8px;
    }
    .score-num {
      font-weight: 800;
      font-size: 1.8rem;
      color: white;
    }
    .score-sep {
      font-size: 1.2rem;
      color: rgba(255,255,255,0.3);
    }
    .score-den {
      font-size: 1.2rem;
      font-weight: 600;
      color: rgba(255,255,255,0.5);
    }
    .score-label {
      display: block;
      color: rgba(255,255,255,0.4);
      font-size: 0.8rem;
      font-weight: 500;
    }

    .cert-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.08);
    }
    .cert-date {
      text-align: left;
    }
    .cert-date .label {
      display: block;
      font-size: 0.7rem;
      color: rgba(255,255,255,0.4);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .cert-date .value {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.7);
      font-weight: 500;
    }
    .cert-seal {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .seal-icon {
      font-size: 28px;
    }
    .seal-text {
      font-size: 0.65rem;
      color: rgba(255,255,255,0.4);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    /* Actions */
    .cert-actions {
      width: 100%;
      max-width: 480px;
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      position: relative;
      z-index: 1;
    }
    .share-btn {
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
export class CertificateComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private quizService = inject(QuizService);
  private learningState = inject(LearningStateService);
  private shareService = inject(ShareService);

  topic: Topic | undefined;
  progress: TopicProgress = {
    topicId: '',
    phase: 'complete',
    quizScore: 0,
    quizTotal: 0,
    completedAt: new Date(),
  };

  constructor() {
    addIcons({ shareOutline, arrowBackOutline });
  }

  ngOnInit(): void {
    const topicId = this.route.snapshot.paramMap.get('topicId') || '';
    this.topic = this.quizService.getTopic(topicId);
    this.progress = this.learningState.getTopicProgress(topicId);
  }

  formatDate(date: Date | null): string {
    if (!date) return 'N/A';
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }

  async shareCertificate(): Promise<void> {
    if (this.topic) {
      await this.shareService.shareCertificate(
        this.topic.title,
        this.topic.id,
        this.progress.quizScore || 0,
        this.progress.quizTotal || 0
      );
    }
  }

  backToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}

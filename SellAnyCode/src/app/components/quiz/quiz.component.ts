import { Component, inject, Input, Output, EventEmitter, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonButton,
  IonIcon,
  IonProgressBar,
  IonChip,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  checkmarkCircleOutline,
  closeCircleOutline,
  arrowForwardOutline,
  ribbonOutline,
} from 'ionicons/icons';
import { QuizService } from '../../services/quiz.service';
import { Question } from '../../models/lms.models';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, IonButton, IonIcon, IonProgressBar, IonChip, IonLabel],
  template: `
    <div class="quiz-container">
      @if (!quizComplete()) {
        <!-- Quiz in progress -->
        <div class="quiz-header glass-card">
          <div class="quiz-progress">
            <span class="question-counter">
              Question {{ currentIndex() + 1 }} of {{ questions.length }}
            </span>
            <ion-progress-bar
              [value]="progressValue()"
              color="tertiary"
            ></ion-progress-bar>
          </div>
        </div>

        @if (currentQuestion(); as q) {
          <div class="question-card glass-card" id="quiz-question-card">
            <h2 class="question-text">{{ q.text }}</h2>

            <div class="options-list">
              @for (opt of q.options; track $index) {
                <button
                  class="option-btn"
                  [class.selected]="selectedAnswer() === $index"
                  [class.correct]="showResult() && q.correctIndex === $index"
                  [class.wrong]="showResult() && selectedAnswer() === $index && q.correctIndex !== $index"
                  [disabled]="showResult()"
                  (click)="selectOption($index)"
                  [id]="'quiz-option-' + $index"
                >
                  <span class="option-letter">{{ getOptionLetter($index) }}</span>
                  <span class="option-text">{{ opt }}</span>
                  @if (showResult() && q.correctIndex === $index) {
                    <ion-icon name="checkmark-circle-outline" class="result-icon correct-icon"></ion-icon>
                  }
                  @if (showResult() && selectedAnswer() === $index && q.correctIndex !== $index) {
                    <ion-icon name="close-circle-outline" class="result-icon wrong-icon"></ion-icon>
                  }
                </button>
              }
            </div>

            @if (showResult() && currentQuestion()?.explanation) {
              <div class="explanation glass-card">
                <strong>💡 Explanation:</strong> {{ currentQuestion()?.explanation }}
              </div>
            }

            <div class="quiz-actions">
              @if (!showResult()) {
                <ion-button
                  expand="block"
                  shape="round"
                  [disabled]="selectedAnswer() === null"
                  (click)="checkAnswer()"
                  class="check-btn"
                  id="quiz-check-btn"
                >
                  Check Answer
                </ion-button>
              } @else {
                <ion-button
                  expand="block"
                  shape="round"
                  (click)="nextQuestion()"
                  class="next-btn"
                  id="quiz-next-btn"
                >
                  @if (currentIndex() < questions.length - 1) {
                    Next Question
                    <ion-icon slot="end" name="arrow-forward-outline"></ion-icon>
                  } @else {
                    See Results
                    <ion-icon slot="end" name="ribbon-outline"></ion-icon>
                  }
                </ion-button>
              }
            </div>
          </div>
        }
      } @else {
        <!-- Quiz complete - results -->
        <div class="results-card glass-card" id="quiz-results-card">
          <div class="results-icon">
            @if (scorePercent() >= 80) {
              🏆
            } @else if (scorePercent() >= 50) {
              ⭐
            } @else {
              📚
            }
          </div>

          <h2>Quiz Complete!</h2>

          <div class="score-display">
            <span class="score-number">{{ score() }}</span>
            <span class="score-divider">/</span>
            <span class="score-total">{{ questions.length }}</span>
          </div>

          <p class="score-percent">{{ scorePercent() }}% Correct</p>

          <div class="result-message">
            @if (scorePercent() >= 80) {
              <p class="success-msg">🎉 Outstanding! You've mastered this topic!</p>
            } @else if (scorePercent() >= 50) {
              <p class="good-msg">Good effort! Review and try again to master it.</p>
            } @else {
              <p class="try-msg">Keep learning! Review the material and try again.</p>
            }
          </div>

          <ion-button
            expand="block"
            shape="round"
            class="finish-btn"
            (click)="finishQuiz()"
            id="quiz-finish-btn"
          >
            <ion-icon slot="start" name="ribbon-outline"></ion-icon>
            {{ scorePercent() >= 80 ? 'View Certificate' : 'Back to Dashboard' }}
          </ion-button>
        </div>
      }
    </div>
  `,
  styles: [`
    .quiz-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 0 16px;
    }

    .quiz-header {
      padding: 16px 20px;
      margin-bottom: 20px;
    }
    .question-counter {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.6);
      display: block;
      margin-bottom: 8px;
    }
    ion-progress-bar {
      --background: rgba(255,255,255,0.1);
      border-radius: 8px;
      height: 6px;
    }

    .question-card {
      padding: 28px 24px;
    }
    .question-text {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 1.2rem;
      color: white;
      margin: 0 0 24px;
      line-height: 1.5;
    }

    .options-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 20px;
    }

    .option-btn {
      display: flex;
      align-items: center;
      gap: 14px;
      width: 100%;
      padding: 16px 20px;
      border-radius: 16px;
      border: 2px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.04);
      color: rgba(255,255,255,0.85);
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.2s ease;
      text-align: left;
    }
    .option-btn:hover:not(:disabled) {
      border-color: rgba(255,255,255,0.3);
      background: rgba(255,255,255,0.08);
    }
    .option-btn.selected {
      border-color: #6C5CE7;
      background: rgba(108,92,231,0.15);
    }
    .option-btn.correct {
      border-color: #00B894;
      background: rgba(0,184,148,0.15);
    }
    .option-btn.wrong {
      border-color: #E17055;
      background: rgba(225,112,85,0.15);
    }
    .option-btn:disabled {
      cursor: default;
    }

    .option-letter {
      width: 32px; height: 32px;
      border-radius: 10px;
      background: rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.85rem;
      flex-shrink: 0;
    }
    .option-text {
      flex: 1;
    }

    .result-icon {
      font-size: 20px;
    }
    .correct-icon { color: #00B894; }
    .wrong-icon { color: #E17055; }

    .explanation {
      padding: 14px 18px;
      margin-bottom: 16px;
      font-size: 0.85rem;
      color: rgba(255,255,255,0.7);
      border-left: 3px solid #FDCB6E;
      line-height: 1.5;
    }

    .quiz-actions {
      margin-top: 8px;
    }
    .check-btn {
      --background: linear-gradient(135deg, #6C5CE7, #a29bfe);
      --border-radius: 16px;
      font-weight: 600;
      height: 52px;
    }
    .next-btn {
      --background: linear-gradient(135deg, #00B894, #55efc4);
      --color: #111;
      --border-radius: 16px;
      font-weight: 600;
      height: 52px;
    }

    /* Results card */
    .results-card {
      padding: 40px 24px;
      text-align: center;
    }
    .results-icon {
      font-size: 64px;
      margin-bottom: 16px;
    }
    .results-card h2 {
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      font-size: 1.8rem;
      color: white;
      margin: 0 0 24px;
    }

    .score-display {
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 4px;
    }
    .score-number {
      font-size: 4rem;
      font-weight: 800;
      color: #6C5CE7;
    }
    .score-divider {
      font-size: 2rem;
      color: rgba(255,255,255,0.3);
    }
    .score-total {
      font-size: 2rem;
      font-weight: 600;
      color: rgba(255,255,255,0.5);
    }

    .score-percent {
      color: rgba(255,255,255,0.6);
      font-size: 1.1rem;
      margin: 8px 0 24px;
    }

    .result-message p {
      font-size: 1rem;
      margin: 0 0 24px;
    }
    .success-msg { color: #55efc4; }
    .good-msg { color: #fdcb6e; }
    .try-msg { color: rgba(255,255,255,0.6); }

    .finish-btn {
      --background: linear-gradient(135deg, #E84393, #fd79a8);
      --border-radius: 16px;
      font-weight: 600;
      height: 52px;
    }
  `],
})
export class QuizComponent implements OnInit {
  @Input({ required: true }) topicId!: string;
  @Output() onQuizComplete = new EventEmitter<{ score: number; total: number }>();

  private quizService = inject(QuizService);

  questions: Question[] = [];

  // Signals for reactive quiz state
  readonly currentIndex = signal(0);
  readonly selectedAnswer = signal<number | null>(null);
  readonly showResult = signal(false);
  readonly score = signal(0);
  readonly quizComplete = signal(false);

  readonly currentQuestion = computed(() => this.questions[this.currentIndex()]);
  readonly progressValue = computed(
    () => (this.currentIndex() + 1) / (this.questions.length || 1)
  );
  readonly scorePercent = computed(() =>
    this.questions.length
      ? Math.round((this.score() / this.questions.length) * 100)
      : 0
  );

  constructor() {
    addIcons({
      checkmarkCircleOutline,
      closeCircleOutline,
      arrowForwardOutline,
      ribbonOutline,
    });
  }

  ngOnInit(): void {
    this.quizService.getQuestions(this.topicId).subscribe((qs) => {
      this.questions = qs;
    });
  }

  getOptionLetter(index: number): string {
    return String.fromCharCode(65 + index); // A, B, C, D
  }

  selectOption(index: number): void {
    this.selectedAnswer.set(index);
  }

  checkAnswer(): void {
    const q = this.currentQuestion();
    if (!q || this.selectedAnswer() === null) return;
    this.showResult.set(true);
    if (this.selectedAnswer() === q.correctIndex) {
      this.score.update((s) => s + 1);
    }
  }

  nextQuestion(): void {
    if (this.currentIndex() < this.questions.length - 1) {
      this.currentIndex.update((i) => i + 1);
      this.selectedAnswer.set(null);
      this.showResult.set(false);
    } else {
      this.quizComplete.set(true);
    }
  }

  finishQuiz(): void {
    this.onQuizComplete.emit({
      score: this.score(),
      total: this.questions.length,
    });
  }
}

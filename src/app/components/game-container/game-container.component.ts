import { Component, HostListener, inject, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonSpinner,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { expandOutline, contractOutline } from 'ionicons/icons';

@Component({
  selector: 'app-game-container',
  standalone: true,
  imports: [CommonModule, IonButton, IonIcon, IonSpinner],
  template: `
    <div class="game-wrapper" [class.fullscreen]="isFullscreen">
      <div class="game-header glass-card">
        <span class="game-label">🎮 Interactive Game</span>
        <ion-button
          fill="clear"
          size="small"
          (click)="toggleFullscreen()"
          id="game-fullscreen-btn"
        >
          <ion-icon
            slot="icon-only"
            [name]="isFullscreen ? 'contract-outline' : 'expand-outline'"
          ></ion-icon>
        </ion-button>
      </div>

      @if (isLoading) {
        <div class="loading-container">
          <ion-spinner name="crescent" color="light"></ion-spinner>
          <p>Loading game...</p>
        </div>
      }

      <iframe
        class="game-iframe"
        [src]="sanitizedUrl"
        frameborder="0"
        allowfullscreen
        allow="autoplay; fullscreen *; gamepad; microphone"
        scrolling="no"
        (load)="onIframeLoad()"
        id="game-iframe"
      ></iframe>

      <div class="game-footer glass-card">
        <p class="hint-text">
          💡 Complete the game to unlock the assessment quiz
        </p>
        <ion-button
          fill="outline"
          size="small"
          class="skip-btn"
          (click)="onGameComplete.emit()"
          id="skip-game-btn"
        >
          Skip (Dev)
        </ion-button>
      </div>
    </div>
  `,
  styles: [`
    .game-wrapper {
      position: relative;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      border-radius: 20px;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .game-wrapper.fullscreen {
      position: fixed;
      top: 0; left: 0;
      width: 100vw;
      max-width: 100vw;
      height: 100vh;
      border-radius: 0;
      z-index: 9999;
    }

    .game-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
      border-radius: 20px 20px 0 0;
    }
    .game-label {
      font-weight: 600;
      color: white;
      font-size: 0.9rem;
    }
    .game-header ion-button {
      --color: rgba(255,255,255,0.7);
    }

    .game-iframe {
      width: 100%;
      height: 70vh;
      min-height: 500px;
      max-width: 1280px;
      display: block;
      background: #111;
      margin: 0 auto;
      border: none;
    }
    .fullscreen .game-iframe {
      height: 100vh;
      max-width: 100vw;
      max-height: 100vh;
      aspect-ratio: auto;
    }

    .loading-container {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 5;
    }
    .loading-container p {
      color: rgba(255,255,255,0.6);
      margin-top: 12px;
      font-size: 0.85rem;
    }

    .game-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 20px;
      border-radius: 0 0 20px 20px;
    }
    .hint-text {
      color: rgba(255,255,255,0.5);
      font-size: 0.8rem;
      margin: 0;
    }
    .skip-btn {
      --color: rgba(255,255,255,0.5);
      --border-color: rgba(255,255,255,0.2);
      font-size: 0.75rem;
    }
  `],
})
export class GameContainerComponent {
  @Input({ required: true }) gameUrl!: string;
  @Output() onGameComplete = new EventEmitter<void>();

  private sanitizer = inject(DomSanitizer);

  sanitizedUrl!: SafeResourceUrl;
  isLoading = true;
  isFullscreen = false;

  constructor() {
    addIcons({ expandOutline, contractOutline });
  }

  ngOnInit(): void {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.gameUrl
    );
  }

  /**
   * Listen for postMessage events from the itch.io game iframe.
   * The game should send: { type: 'GAME_COMPLETE', payload: { ... } }
   */
  @HostListener('window:message', ['$event'])
  onWindowMessage(event: MessageEvent): void {
    // Security: validate origin if known
    // if (event.origin !== 'https://itch.io') return;

    const data = event.data;
    if (!data) return;

    // Handle game completion messages
    if (
      data.type === 'GAME_COMPLETE' ||
      data.type === 'game-complete' ||
      data === 'game-complete'
    ) {
      this.onGameComplete.emit();
    }

    // Also handle common itch.io game engine message patterns
    if (data.type === 'gameEnd' || data.gameOver === true) {
      this.onGameComplete.emit();
    }
  }

  onIframeLoad(): void {
    this.isLoading = false;
  }

  toggleFullscreen(): void {
    this.isFullscreen = !this.isFullscreen;
  }
}

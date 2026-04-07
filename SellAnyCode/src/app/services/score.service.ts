import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  serverTimestamp,
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class ScoreService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  /**
   * Save a quiz score to the user_stats collection.
   * Path: user_stats/{userId}/scores/{auto-id}
   */
  async saveScore(
    topicId: string,
    score: number,
    total: number
  ): Promise<void> {
    const userId = this.authService.getUserId();
    if (!userId) {
      console.warn('Cannot save score: no authenticated user');
      return;
    }

    const scoresRef = collection(
      this.firestore,
      `user_stats/${userId}/scores`
    );

    await addDoc(scoresRef, {
      topicId,
      score,
      total,
      percentage: Math.round((score / total) * 100),
      timestamp: serverTimestamp(),
      userId,
    });
  }
}

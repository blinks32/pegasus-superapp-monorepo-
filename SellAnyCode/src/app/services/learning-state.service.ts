import { Injectable, signal, computed } from '@angular/core';
import { LearningPhase, TopicProgress } from '../models/lms.models';

@Injectable({ providedIn: 'root' })
export class LearningStateService {
  /** Current phase for the active topic */
  readonly currentPhase = signal<LearningPhase>('intro');

  /** Map of topicId → progress */
  readonly topicProgress = signal<Map<string, TopicProgress>>(new Map());

  /** Derived: overall completion percentage across all topics */
  readonly overallProgress = computed(() => {
    const map = this.topicProgress();
    if (map.size === 0) return 0;
    let completed = 0;
    map.forEach((p) => {
      if (p.phase === 'complete') completed++;
    });
    return Math.round((completed / map.size) * 100);
  });

  /** Get progress for a specific topic, or a default */
  getTopicProgress(topicId: string): TopicProgress {
    const existing = this.topicProgress().get(topicId);
    if (existing) return existing;
    return {
      topicId,
      phase: 'intro',
      quizScore: null,
      quizTotal: null,
      completedAt: null,
    };
  }

  /** Get the phase percentage for progress ring (0-100) */
  getPhasePercent(topicId: string): number {
    const p = this.getTopicProgress(topicId);
    switch (p.phase) {
      case 'intro':
        return 0;
      case 'game':
        return 33;
      case 'quiz':
        return 66;
      case 'complete':
        return 100;
    }
  }

  /** Initialize or reset to intro for a topic */
  initTopic(topicId: string): void {
    this.currentPhase.set('intro');
    const map = new Map(this.topicProgress());
    if (!map.has(topicId)) {
      map.set(topicId, {
        topicId,
        phase: 'intro',
        quizScore: null,
        quizTotal: null,
        completedAt: null,
      });
      this.topicProgress.set(map);
    } else {
      this.currentPhase.set(map.get(topicId)!.phase);
    }
  }

  /** Advance from intro → game */
  advanceToGame(topicId: string): void {
    this.currentPhase.set('game');
    this.updateTopicPhase(topicId, 'game');
  }

  /** Advance from game → quiz */
  advanceToQuiz(topicId: string): void {
    this.currentPhase.set('quiz');
    this.updateTopicPhase(topicId, 'quiz');
  }

  /** Mark topic as complete with quiz results */
  markComplete(topicId: string, score: number, total: number): void {
    this.currentPhase.set('complete');
    const map = new Map(this.topicProgress());
    map.set(topicId, {
      topicId,
      phase: 'complete',
      quizScore: score,
      quizTotal: total,
      completedAt: new Date(),
    });
    this.topicProgress.set(map);
  }

  /** Reset a topic back to intro */
  resetTopic(topicId: string): void {
    this.currentPhase.set('intro');
    const map = new Map(this.topicProgress());
    map.set(topicId, {
      topicId,
      phase: 'intro',
      quizScore: null,
      quizTotal: null,
      completedAt: null,
    });
    this.topicProgress.set(map);
  }

  private updateTopicPhase(topicId: string, phase: LearningPhase): void {
    const map = new Map(this.topicProgress());
    const existing = map.get(topicId);
    if (existing) {
      map.set(topicId, { ...existing, phase });
    } else {
      map.set(topicId, {
        topicId,
        phase,
        quizScore: null,
        quizTotal: null,
        completedAt: null,
      });
    }
    this.topicProgress.set(map);
  }
}

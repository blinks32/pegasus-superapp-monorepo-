import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LearningStateService } from '../services/learning-state.service';

/**
 * Prevents users from accessing the quiz phase directly
 * without first completing the game phase.
 */
export const masteryGuard: CanActivateFn = (route) => {
  const learningState = inject(LearningStateService);
  const router = inject(Router);
  const topicId = route.paramMap.get('id');

  if (!topicId) {
    router.navigate(['/dashboard']);
    return false;
  }

  const progress = learningState.getTopicProgress(topicId);

  // Allow if user has reached quiz or complete phase
  if (progress.phase === 'quiz' || progress.phase === 'complete') {
    return true;
  }

  // Otherwise, send back to topic detail to resume from current phase
  router.navigate(['/topic', topicId]);
  return false;
};

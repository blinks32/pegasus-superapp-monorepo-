import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';

@Injectable({ providedIn: 'root' })
export class ShareService {
  /**
   * Share a mastery certificate deep-link via native share sheet
   * or fallback to clipboard on web.
   */
  async shareCertificate(
    topicTitle: string,
    topicId: string,
    score: number,
    total: number
  ): Promise<void> {
    const url = `https://pegasus-lms.app/certificate/${topicId}`;
    const text = `🎓 I mastered "${topicTitle}" with a score of ${score}/${total} on Pegasus LMS!`;

    if (Capacitor.isNativePlatform()) {
      await Share.share({
        title: `Mastery Certificate — ${topicTitle}`,
        text,
        url,
        dialogTitle: 'Share your achievement',
      });
    } else {
      // Web fallback: use Web Share API or clipboard
      if (navigator.share) {
        await navigator.share({ title: topicTitle, text, url });
      } else {
        await navigator.clipboard.writeText(`${text}\n${url}`);
        // The calling component should show a toast
      }
    }
  }
}

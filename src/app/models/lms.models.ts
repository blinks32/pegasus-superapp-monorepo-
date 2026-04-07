/** Represents a learning topic / module */
export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;          // Ionicon name
  imageUrl?: string;     // URL to the AI generated thumbnail
  color: string;         // CSS color for the card accent
  gameUrl: string;       // itch.io embed URL
  totalQuestions: number;
}

/** Tracks progress through a single topic */
export interface TopicProgress {
  topicId: string;
  phase: LearningPhase;
  quizScore: number | null;
  quizTotal: number | null;
  completedAt: Date | null;
}

/** The three learning phases + completion */
export type LearningPhase = 'intro' | 'game' | 'quiz' | 'complete';

/** A single quiz question */
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

/** A saved score document */
export interface ScoreRecord {
  topicId: string;
  score: number;
  total: number;
  timestamp: Date;
  userId: string;
}

import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
  orderBy,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Question, Topic } from '../models/lms.models';

/** Sample topics for demo — in production these come from Firestore */
const SAMPLE_TOPICS: Topic[] = [
  {
    id: 'rounding-decimal',
    title: 'Rounding Decimals',
    description: 'Learn how to round decimals to the nearest whole number, tenth, and hundredth.',
    icon: 'calculator-outline',
    color: '#6C5CE7',
    imageUrl: 'assets/topics/topic_rounding.png',
    gameUrl: 'https://rounding-with-tom.vercel.app/',
    totalQuestions: 5,
  },
  {
    id: 'atoms-elements',
    title: 'Atoms and Elements',
    description: 'Explore the building blocks of matter.',
    icon: 'flask-outline',
    color: '#00B894',
    imageUrl: 'assets/topics/topic_atoms.png',
    gameUrl: 'https://astro-kappa-black.vercel.app/',
    totalQuestions: 5,
  },
  {
    id: 'plate-tectonics',
    title: 'Plate Tectonics',
    description: 'Discover how the Earth\'s crust moves and shapes our world.',
    icon: 'earth-outline',
    color: '#E17055',
    imageUrl: 'assets/topics/topic_plate_tectonics.png',
    gameUrl: 'https://escape-smoky-phi.vercel.app/',
    totalQuestions: 5,
  },
  {
    id: 'coding-basics',
    title: 'Coding Basics',
    description: 'Understand the fundamental logic blocks of programming.',
    icon: 'code-slash-outline',
    color: '#FDCB6E',
    imageUrl: 'assets/topics/topic_coding.png',
    gameUrl: '', // Placeholder, no game link provided
    totalQuestions: 5,
  },
  {
    id: 'geography-world',
    title: 'World Geography',
    description: 'Explore continents, oceans, and fascinating landmarks.',
    icon: 'globe-outline',
    color: '#E84393',
    imageUrl: 'assets/topics/topic_geography.png',
    gameUrl: '', 
    totalQuestions: 5,
  },
  {
    id: 'history-ancient',
    title: 'Ancient History',
    description: 'Journey through time to uncover ancient civilizations.',
    icon: 'book-outline',
    color: '#0984E3',
    imageUrl: 'assets/topics/topic_history.png',
    gameUrl: '', 
    totalQuestions: 5,
  }
];

/** Sample questions for demo */
const SAMPLE_QUESTIONS: Record<string, Question[]> = {
  'rounding-decimal': [
    { id: 'q1', text: 'Round 3.14 to the nearest tenth:', options: ['3.1', '3.2', '3.14', '3.0'], correctIndex: 0, explanation: 'The hundredths digit is 4, which is less than 5, so keep the tenths digit as 1.' },
    { id: 'q2', text: 'Round 15.68 to the nearest whole number:', options: ['15', '16', '15.6', '15.7'], correctIndex: 1, explanation: 'The tenths digit is 6 (≥ 5), so round up to 16.' },
    { id: 'q3', text: 'Round 0.999 to two decimal places:', options: ['0.99', '1.00', '0.90', '1.01'], correctIndex: 1, explanation: 'The third decimal is 9, rounding up making 0.99 become 1.00.' },
    { id: 'q4', text: 'Round 42.45 to one decimal place:', options: ['42.4', '42.5', '42', '43'], correctIndex: 1, explanation: 'The hundredths digit is 5, so round up the tenths digit.' },
    { id: 'q5', text: 'When rounding to the nearest ten, what does 85 become?', options: ['80', '90', '85', '100'], correctIndex: 1, explanation: 'Numbers ending in 5 round up.' },
  ],
  'atoms-elements': [
    { id: 'q1', text: 'What is the center of an atom called?', options: ['Electron cloud', 'Nucleus', 'Proton', 'Neutron'], correctIndex: 1 },
    { id: 'q2', text: 'Which particle has a negative charge?', options: ['Proton', 'Neutron', 'Electron', 'Nucleus'], correctIndex: 2 },
    { id: 'q3', text: 'What determines the element of an atom?', options: ['Number of Neutrons', 'Number of Protons', 'Number of Electrons', 'Atomic Mass'], correctIndex: 1 },
    { id: 'q4', text: 'Which element is H on the periodic table?', options: ['Helium', 'Hydrogen', 'Hafnium', 'Holmium'], correctIndex: 1 },
    { id: 'q5', text: 'What are isotopes?', options: ['Atoms with different electrons', 'Atoms with different protons', 'Atoms with different neutrons', 'Ions'], correctIndex: 2 },
  ],
  'plate-tectonics': [
    { id: 'q1', text: 'What causes tectonic plates to move?', options: ['Ocean currents', 'Mantle convection currents', 'Earth\'s rotation', 'Gravity'], correctIndex: 1 },
    { id: 'q2', text: 'The boundary where two plates collide is called:', options: ['Divergent', 'Convergent', 'Transform', 'Neutral'], correctIndex: 1 },
    { id: 'q3', text: 'The boundary where two plates pull apart is called:', options: ['Divergent', 'Convergent', 'Transform', 'Subduction'], correctIndex: 0 },
    { id: 'q4', text: 'Which boundary is famous for creating the mid-ocean ridge?', options: ['Transform', 'Convergent', 'Subduction', 'Divergent'], correctIndex: 3 },
    { id: 'q5', text: 'What phenomenon often occurs at transform boundaries like the San Andreas Fault?', options: ['Volcanoes', 'Earthquakes', 'Deep sea trenches', 'Mountain building'], correctIndex: 1 },
  ],
};

@Injectable({ providedIn: 'root' })
export class QuizService {
  private firestore = inject(Firestore);

  /** Get all available topics */
  getTopics(): Topic[] {
    return SAMPLE_TOPICS;
  }

  /** Get a single topic by ID */
  getTopic(topicId: string): Topic | undefined {
    return SAMPLE_TOPICS.find((t) => t.id === topicId);
  }

  /**
   * Fetch quiz questions for a topic.
   * In production, this queries Firestore: quizzes/{topicId}/questions
   * For demo, returns sample data.
   */
  getQuestions(topicId: string): Observable<Question[]> {
    const questions = SAMPLE_QUESTIONS[topicId];
    if (questions) {
      return of(questions);
    }
    // Firestore fallback
    const questionsRef = collection(
      this.firestore,
      `quizzes/${topicId}/questions`
    );
    return collectionData(questionsRef, { idField: 'id' }) as Observable<
      Question[]
    >;
  }
}

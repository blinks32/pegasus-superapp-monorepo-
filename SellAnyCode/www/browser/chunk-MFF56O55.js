import {
  Firestore,
  collection,
  collectionData
} from "./chunk-JKEEOWNQ.js";
import {
  computed,
  inject,
  of,
  signal,
  ɵɵdefineInjectable
} from "./chunk-FKDJJIOV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-5K356HEJ.js";

// src/app/services/quiz.service.ts
var SAMPLE_TOPICS = [
  {
    id: "math-fractions",
    title: "Fractions & Decimals",
    description: "Master fractions through interactive puzzles and quizzes",
    icon: "calculator-outline",
    color: "#6C5CE7",
    gameUrl: "https://itch.io/embed-upload/0000000?color=6C5CE7",
    totalQuestions: 5
  },
  {
    id: "science-cells",
    title: "Cell Biology",
    description: "Explore the building blocks of life in an interactive lab",
    icon: "flask-outline",
    color: "#00B894",
    gameUrl: "https://itch.io/embed-upload/0000000?color=00B894",
    totalQuestions: 5
  },
  {
    id: "history-ancient",
    title: "Ancient Civilizations",
    description: "Journey through time to discover ancient cultures",
    icon: "earth-outline",
    color: "#E17055",
    gameUrl: "https://itch.io/embed-upload/0000000?color=E17055",
    totalQuestions: 5
  },
  {
    id: "english-grammar",
    title: "Grammar Essentials",
    description: "Sharpen your grammar skills with fun word games",
    icon: "book-outline",
    color: "#0984E3",
    gameUrl: "https://itch.io/embed-upload/0000000?color=0984E3",
    totalQuestions: 5
  },
  {
    id: "coding-basics",
    title: "Coding Fundamentals",
    description: "Learn the basics of programming through puzzles",
    icon: "code-slash-outline",
    color: "#FDCB6E",
    gameUrl: "https://itch.io/embed-upload/0000000?color=FDCB6E",
    totalQuestions: 5
  },
  {
    id: "geography-world",
    title: "World Geography",
    description: "Explore continents, countries, and landmarks",
    icon: "globe-outline",
    color: "#E84393",
    gameUrl: "https://itch.io/embed-upload/0000000?color=E84393",
    totalQuestions: 5
  }
];
var SAMPLE_QUESTIONS = {
  "math-fractions": [
    { id: "q1", text: "What is 1/2 + 1/4?", options: ["1/4", "3/4", "2/4", "1/6"], correctIndex: 1, explanation: "1/2 = 2/4, so 2/4 + 1/4 = 3/4" },
    { id: "q2", text: "Convert 0.75 to a fraction:", options: ["3/4", "7/5", "1/2", "4/3"], correctIndex: 0, explanation: "0.75 = 75/100 = 3/4" },
    { id: "q3", text: "What is 3/5 \xD7 2?", options: ["3/10", "6/5", "6/10", "5/6"], correctIndex: 1, explanation: "3/5 \xD7 2 = 6/5 or 1 1/5" },
    { id: "q4", text: "Which is larger: 2/3 or 3/5?", options: ["2/3", "3/5", "They are equal", "Cannot determine"], correctIndex: 0, explanation: "2/3 \u2248 0.667, 3/5 = 0.6" },
    { id: "q5", text: "Simplify 8/12:", options: ["4/6", "2/3", "3/4", "1/2"], correctIndex: 1, explanation: "GCD of 8 and 12 is 4: 8\xF74 / 12\xF74 = 2/3" }
  ],
  "science-cells": [
    { id: "q1", text: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Cell Wall"], correctIndex: 1 },
    { id: "q2", text: "Which organelle contains DNA?", options: ["Ribosome", "Lysosome", "Nucleus", "Golgi body"], correctIndex: 2 },
    { id: "q3", text: "Plant cells have this but animal cells do not:", options: ["Nucleus", "Cell membrane", "Cell wall", "Cytoplasm"], correctIndex: 2 },
    { id: "q4", text: "What does the ribosome do?", options: ["Produce energy", "Synthesize proteins", "Store water", "Digest food"], correctIndex: 1 },
    { id: "q5", text: "The cell membrane is described as:", options: ["Rigid", "Selectively permeable", "Impermeable", "Absent"], correctIndex: 1 }
  ],
  "history-ancient": [
    { id: "q1", text: "The Great Pyramid was built in:", options: ["Rome", "Greece", "Egypt", "Mesopotamia"], correctIndex: 2 },
    { id: "q2", text: "Which civilization invented writing?", options: ["Egypt", "Sumer", "China", "India"], correctIndex: 1 },
    { id: "q3", text: "The Colosseum is in:", options: ["Athens", "Rome", "Sparta", "Cairo"], correctIndex: 1 },
    { id: "q4", text: "Democracy originated in:", options: ["Rome", "Egypt", "Athens", "Persia"], correctIndex: 2 },
    { id: "q5", text: "The Indus Valley civilization was in modern-day:", options: ["Iran", "Iraq", "Pakistan/India", "Turkey"], correctIndex: 2 }
  ],
  "english-grammar": [
    { id: "q1", text: 'Identify the noun: "The cat sat on the mat."', options: ["sat", "on", "cat", "the"], correctIndex: 2 },
    { id: "q2", text: "Which is a conjunction?", options: ["quickly", "and", "beautiful", "run"], correctIndex: 1 },
    { id: "q3", text: '"She runs fast." \u2014 "fast" is a(n):', options: ["Noun", "Verb", "Adjective", "Adverb"], correctIndex: 3 },
    { id: "q4", text: 'Past tense of "go":', options: ["goed", "went", "gone", "going"], correctIndex: 1 },
    { id: "q5", text: "Which sentence is correct?", options: ["Their going home.", "They're going home.", "There going home.", "Thier going home."], correctIndex: 1 }
  ],
  "coding-basics": [
    { id: "q1", text: "What does HTML stand for?", options: ["Hyper Tool Markup Language", "HyperText Markup Language", "Home Text Markup Language", "HyperText Machine Language"], correctIndex: 1 },
    { id: "q2", text: "Which is a programming language?", options: ["HTML", "CSS", "Python", "SQL"], correctIndex: 2 },
    { id: "q3", text: "A loop is used to:", options: ["Stop the program", "Repeat code", "Delete data", "Create files"], correctIndex: 1 },
    { id: "q4", text: "What is a variable?", options: ["A fixed value", "A named storage location", "A type of loop", "A comment"], correctIndex: 1 },
    { id: "q5", text: 'What does "==" mean?', options: ["Assignment", "Equality check", "Not equal", "Greater than"], correctIndex: 1 }
  ],
  "geography-world": [
    { id: "q1", text: "How many continents are there?", options: ["5", "6", "7", "8"], correctIndex: 2 },
    { id: "q2", text: "The largest ocean is:", options: ["Atlantic", "Indian", "Pacific", "Arctic"], correctIndex: 2 },
    { id: "q3", text: "Mount Everest is in:", options: ["Europe", "Asia", "Africa", "South America"], correctIndex: 1 },
    { id: "q4", text: "The Sahara Desert is in:", options: ["Asia", "Australia", "Africa", "South America"], correctIndex: 2 },
    { id: "q5", text: "Which country has the most people?", options: ["USA", "India", "China", "Russia"], correctIndex: 1 }
  ]
};
var QuizService = class _QuizService {
  constructor() {
    this.firestore = inject(Firestore);
  }
  /** Get all available topics */
  getTopics() {
    return SAMPLE_TOPICS;
  }
  /** Get a single topic by ID */
  getTopic(topicId) {
    return SAMPLE_TOPICS.find((t) => t.id === topicId);
  }
  /**
   * Fetch quiz questions for a topic.
   * In production, this queries Firestore: quizzes/{topicId}/questions
   * For demo, returns sample data.
   */
  getQuestions(topicId) {
    const questions = SAMPLE_QUESTIONS[topicId];
    if (questions) {
      return of(questions);
    }
    const questionsRef = collection(this.firestore, `quizzes/${topicId}/questions`);
    return collectionData(questionsRef, { idField: "id" });
  }
  static {
    this.\u0275fac = function QuizService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuizService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuizService, factory: _QuizService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/learning-state.service.ts
var LearningStateService = class _LearningStateService {
  constructor() {
    this.currentPhase = signal("intro");
    this.topicProgress = signal(/* @__PURE__ */ new Map());
    this.overallProgress = computed(() => {
      const map = this.topicProgress();
      if (map.size === 0)
        return 0;
      let completed = 0;
      map.forEach((p) => {
        if (p.phase === "complete")
          completed++;
      });
      return Math.round(completed / map.size * 100);
    });
  }
  /** Get progress for a specific topic, or a default */
  getTopicProgress(topicId) {
    const existing = this.topicProgress().get(topicId);
    if (existing)
      return existing;
    return {
      topicId,
      phase: "intro",
      quizScore: null,
      quizTotal: null,
      completedAt: null
    };
  }
  /** Get the phase percentage for progress ring (0-100) */
  getPhasePercent(topicId) {
    const p = this.getTopicProgress(topicId);
    switch (p.phase) {
      case "intro":
        return 0;
      case "game":
        return 33;
      case "quiz":
        return 66;
      case "complete":
        return 100;
    }
  }
  /** Initialize or reset to intro for a topic */
  initTopic(topicId) {
    this.currentPhase.set("intro");
    const map = new Map(this.topicProgress());
    if (!map.has(topicId)) {
      map.set(topicId, {
        topicId,
        phase: "intro",
        quizScore: null,
        quizTotal: null,
        completedAt: null
      });
      this.topicProgress.set(map);
    } else {
      this.currentPhase.set(map.get(topicId).phase);
    }
  }
  /** Advance from intro → game */
  advanceToGame(topicId) {
    this.currentPhase.set("game");
    this.updateTopicPhase(topicId, "game");
  }
  /** Advance from game → quiz */
  advanceToQuiz(topicId) {
    this.currentPhase.set("quiz");
    this.updateTopicPhase(topicId, "quiz");
  }
  /** Mark topic as complete with quiz results */
  markComplete(topicId, score, total) {
    this.currentPhase.set("complete");
    const map = new Map(this.topicProgress());
    map.set(topicId, {
      topicId,
      phase: "complete",
      quizScore: score,
      quizTotal: total,
      completedAt: /* @__PURE__ */ new Date()
    });
    this.topicProgress.set(map);
  }
  /** Reset a topic back to intro */
  resetTopic(topicId) {
    this.currentPhase.set("intro");
    const map = new Map(this.topicProgress());
    map.set(topicId, {
      topicId,
      phase: "intro",
      quizScore: null,
      quizTotal: null,
      completedAt: null
    });
    this.topicProgress.set(map);
  }
  updateTopicPhase(topicId, phase) {
    const map = new Map(this.topicProgress());
    const existing = map.get(topicId);
    if (existing) {
      map.set(topicId, __spreadProps(__spreadValues({}, existing), { phase }));
    } else {
      map.set(topicId, {
        topicId,
        phase,
        quizScore: null,
        quizTotal: null,
        completedAt: null
      });
    }
    this.topicProgress.set(map);
  }
  static {
    this.\u0275fac = function LearningStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LearningStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LearningStateService, factory: _LearningStateService.\u0275fac, providedIn: "root" });
  }
};

export {
  QuizService,
  LearningStateService
};
//# sourceMappingURL=chunk-MFF56O55.js.map

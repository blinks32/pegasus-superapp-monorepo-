import {
  LearningStateService,
  QuizService
} from "./chunk-MFF56O55.js";
import {
  addIcons,
  arrowBackOutline,
  arrowForwardOutline,
  checkmarkCircleOutline,
  checkmarkDoneOutline,
  clipboardOutline,
  closeCircleOutline,
  contractOutline,
  expandOutline,
  gameControllerOutline,
  playOutline,
  ribbonOutline
} from "./chunk-CGDY7BHT.js";
import {
  AuthService
} from "./chunk-CIKUY3S6.js";
import {
  Firestore,
  addDoc,
  collection,
  serverTimestamp
} from "./chunk-JKEEOWNQ.js";
import {
  ActivatedRoute,
  CommonModule,
  DomSanitizer,
  EventEmitter,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonProgressBar,
  IonSpinner,
  IonTitle,
  IonToolbar,
  Router,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-FKDJJIOV.js";
import "./chunk-5JYJ7K33.js";
import "./chunk-BARXMHI7.js";
import "./chunk-PNZEID6F.js";
import "./chunk-Z4KXYCID.js";
import "./chunk-3MR67STO.js";
import "./chunk-PYIFS7WQ.js";
import "./chunk-2NCJX5FR.js";
import "./chunk-WED6EE3F.js";
import "./chunk-RLLLK2NX.js";
import "./chunk-LCF4N3YM.js";
import "./chunk-KXQDCBXG.js";
import "./chunk-T2KHARD3.js";
import "./chunk-DVBWEDNF.js";
import {
  __async
} from "./chunk-5K356HEJ.js";

// src/app/services/score.service.ts
var ScoreService = class _ScoreService {
  constructor() {
    this.firestore = inject(Firestore);
    this.authService = inject(AuthService);
  }
  /**
   * Save a quiz score to the user_stats collection.
   * Path: user_stats/{userId}/scores/{auto-id}
   */
  saveScore(topicId, score, total) {
    return __async(this, null, function* () {
      const userId = this.authService.getUserId();
      if (!userId) {
        console.warn("Cannot save score: no authenticated user");
        return;
      }
      const scoresRef = collection(this.firestore, `user_stats/${userId}/scores`);
      yield addDoc(scoresRef, {
        topicId,
        score,
        total,
        percentage: Math.round(score / total * 100),
        timestamp: serverTimestamp(),
        userId
      });
    });
  }
  static {
    this.\u0275fac = function ScoreService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScoreService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScoreService, factory: _ScoreService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/game-container/game-container.component.ts
function GameContainerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "ion-spinner", 10);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading game...");
    \u0275\u0275elementEnd()();
  }
}
var GameContainerComponent = class _GameContainerComponent {
  constructor() {
    this.onGameComplete = new EventEmitter();
    this.sanitizer = inject(DomSanitizer);
    this.isLoading = true;
    this.isFullscreen = false;
    addIcons({ expandOutline, contractOutline });
  }
  ngOnInit() {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.gameUrl);
  }
  /**
   * Listen for postMessage events from the itch.io game iframe.
   * The game should send: { type: 'GAME_COMPLETE', payload: { ... } }
   */
  onWindowMessage(event) {
    const data = event.data;
    if (!data)
      return;
    if (data.type === "GAME_COMPLETE" || data.type === "game-complete" || data === "game-complete") {
      this.onGameComplete.emit();
    }
    if (data.type === "gameEnd" || data.gameOver === true) {
      this.onGameComplete.emit();
    }
  }
  onIframeLoad() {
    this.isLoading = false;
  }
  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
  static {
    this.\u0275fac = function GameContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GameContainerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GameContainerComponent, selectors: [["app-game-container"]], hostBindings: function GameContainerComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("message", function GameContainerComponent_message_HostBindingHandler($event) {
          return ctx.onWindowMessage($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, inputs: { gameUrl: "gameUrl" }, outputs: { onGameComplete: "onGameComplete" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 5, consts: [[1, "game-wrapper"], [1, "game-header", "glass-card"], [1, "game-label"], ["fill", "clear", "size", "small", "id", "game-fullscreen-btn", 3, "click"], ["slot", "icon-only", 3, "name"], [1, "loading-container"], ["frameborder", "0", "allowfullscreen", "", "allow", "autoplay; fullscreen *; gamepad; microphone", "scrolling", "no", "id", "game-iframe", 1, "game-iframe", 3, "load", "src"], [1, "game-footer", "glass-card"], [1, "hint-text"], ["fill", "outline", "size", "small", "id", "skip-game-btn", 1, "skip-btn", 3, "click"], ["name", "crescent", "color", "light"]], template: function GameContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "\u{1F3AE} Interactive Game");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ion-button", 3);
        \u0275\u0275listener("click", function GameContainerComponent_Template_ion_button_click_4_listener() {
          return ctx.toggleFullscreen();
        });
        \u0275\u0275element(5, "ion-icon", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, GameContainerComponent_Conditional_6_Template, 4, 0, "div", 5);
        \u0275\u0275elementStart(7, "iframe", 6);
        \u0275\u0275listener("load", function GameContainerComponent_Template_iframe_load_7_listener() {
          return ctx.onIframeLoad();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7)(9, "p", 8);
        \u0275\u0275text(10, " \u{1F4A1} Complete the game to unlock the assessment quiz ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "ion-button", 9);
        \u0275\u0275listener("click", function GameContainerComponent_Template_ion_button_click_11_listener() {
          return ctx.onGameComplete.emit();
        });
        \u0275\u0275text(12, " Skip (Dev) ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("fullscreen", ctx.isFullscreen);
        \u0275\u0275advance(5);
        \u0275\u0275property("name", ctx.isFullscreen ? "contract-outline" : "expand-outline");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isLoading ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.sanitizedUrl, \u0275\u0275sanitizeResourceUrl);
      }
    }, dependencies: [CommonModule, IonButton, IonIcon, IonSpinner], styles: ["\n\n.game-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 800px;\n  margin: 0 auto;\n  border-radius: 20px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.game-wrapper.fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  max-width: 100vw;\n  height: 100vh;\n  border-radius: 0;\n  z-index: 9999;\n}\n.game-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  border-radius: 20px 20px 0 0;\n}\n.game-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: white;\n  font-size: 0.9rem;\n}\n.game-header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --color: rgba(255,255,255,0.7);\n}\n.game-iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 500px;\n  display: block;\n  background: #111;\n}\n.fullscreen[_ngcontent-%COMP%]   .game-iframe[_ngcontent-%COMP%] {\n  height: calc(100vh - 120px);\n}\n.loading-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  z-index: 5;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  margin-top: 12px;\n  font-size: 0.85rem;\n}\n.game-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  border-radius: 0 0 20px 20px;\n}\n.hint-text[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 0.8rem;\n  margin: 0;\n}\n.skip-btn[_ngcontent-%COMP%] {\n  --color: rgba(255,255,255,0.5);\n  --border-color: rgba(255,255,255,0.2);\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=game-container.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GameContainerComponent, { className: "GameContainerComponent", filePath: "src\\app\\components\\game-container\\game-container.component.ts", lineNumber: 146 });
})();

// src/app/components/quiz/quiz.component.ts
function QuizComponent_Conditional_1_Conditional_5_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 17);
  }
}
function QuizComponent_Conditional_1_Conditional_5_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 18);
  }
}
function QuizComponent_Conditional_1_Conditional_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function QuizComponent_Conditional_1_Conditional_5_For_5_Template_button_click_0_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectOption($index_r2));
    });
    \u0275\u0275elementStart(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, QuizComponent_Conditional_1_Conditional_5_For_5_Conditional_5_Template, 1, 0, "ion-icon", 17)(6, QuizComponent_Conditional_1_Conditional_5_For_5_Conditional_6_Template, 1, 0, "ion-icon", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const q_r5 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r2.selectedAnswer() === $index_r2)("correct", ctx_r2.showResult() && q_r5.correctIndex === $index_r2)("wrong", ctx_r2.showResult() && ctx_r2.selectedAnswer() === $index_r2 && q_r5.correctIndex !== $index_r2);
    \u0275\u0275property("disabled", ctx_r2.showResult())("id", "quiz-option-" + $index_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getOptionLetter($index_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showResult() && q_r5.correctIndex === $index_r2 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showResult() && ctx_r2.selectedAnswer() === $index_r2 && q_r5.correctIndex !== $index_r2 ? 6 : -1);
  }
}
function QuizComponent_Conditional_1_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "strong");
    \u0275\u0275text(2, "\u{1F4A1} Explanation:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = ctx_r2.currentQuestion()) == null ? null : tmp_4_0.explanation, " ");
  }
}
function QuizComponent_Conditional_1_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 19);
    \u0275\u0275listener("click", function QuizComponent_Conditional_1_Conditional_5_Conditional_8_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.checkAnswer());
    });
    \u0275\u0275text(1, " Check Answer ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r2.selectedAnswer() === null);
  }
}
function QuizComponent_Conditional_1_Conditional_5_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Next Question ");
    \u0275\u0275element(1, "ion-icon", 21);
  }
}
function QuizComponent_Conditional_1_Conditional_5_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " See Results ");
    \u0275\u0275element(1, "ion-icon", 22);
  }
}
function QuizComponent_Conditional_1_Conditional_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 20);
    \u0275\u0275listener("click", function QuizComponent_Conditional_1_Conditional_5_Conditional_9_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.nextQuestion());
    });
    \u0275\u0275template(1, QuizComponent_Conditional_1_Conditional_5_Conditional_9_Conditional_1_Template, 2, 0, "ion-icon", 21)(2, QuizComponent_Conditional_1_Conditional_5_Conditional_9_Conditional_2_Template, 2, 0, "ion-icon", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.currentIndex() < ctx_r2.questions.length - 1 ? 1 : 2);
  }
}
function QuizComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h2", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275repeaterCreate(4, QuizComponent_Conditional_1_Conditional_5_For_5_Template, 7, 12, "button", 9, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, QuizComponent_Conditional_1_Conditional_5_Conditional_6_Template, 4, 1, "div", 10);
    \u0275\u0275elementStart(7, "div", 11);
    \u0275\u0275template(8, QuizComponent_Conditional_1_Conditional_5_Conditional_8_Template, 2, 1, "ion-button", 12)(9, QuizComponent_Conditional_1_Conditional_5_Conditional_9_Template, 3, 1, "ion-button", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const q_r5 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r5.text);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(q_r5.options);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.showResult() && ((tmp_5_0 = ctx_r2.currentQuestion()) == null ? null : tmp_5_0.explanation) ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.showResult() ? 8 : 9);
  }
}
function QuizComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "span", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "ion-progress-bar", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, QuizComponent_Conditional_1_Conditional_5_Template, 10, 3, "div", 6);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" Question ", ctx_r2.currentIndex() + 1, " of ", ctx_r2.questions.length, " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.progressValue());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_3_0 = ctx_r2.currentQuestion()) ? 5 : -1, tmp_3_0);
  }
}
function QuizComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F3C6} ");
  }
}
function QuizComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2B50 ");
  }
}
function QuizComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F4DA} ");
  }
}
function QuizComponent_Conditional_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, "\u{1F389} Outstanding! You've mastered this topic!");
    \u0275\u0275elementEnd();
  }
}
function QuizComponent_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31);
    \u0275\u0275text(1, "Good effort! Review and try again to master it.");
    \u0275\u0275elementEnd();
  }
}
function QuizComponent_Conditional_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1, "Keep learning! Review the material and try again.");
    \u0275\u0275elementEnd();
  }
}
function QuizComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 23);
    \u0275\u0275template(2, QuizComponent_Conditional_2_Conditional_2_Template, 1, 0)(3, QuizComponent_Conditional_2_Conditional_3_Template, 1, 0)(4, QuizComponent_Conditional_2_Conditional_4_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Quiz Complete!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 24)(8, "span", 25);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 26);
    \u0275\u0275text(11, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 27);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p", 28);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 29);
    \u0275\u0275template(17, QuizComponent_Conditional_2_Conditional_17_Template, 2, 0, "p", 30)(18, QuizComponent_Conditional_2_Conditional_18_Template, 2, 0, "p", 31)(19, QuizComponent_Conditional_2_Conditional_19_Template, 2, 0, "p", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-button", 33);
    \u0275\u0275listener("click", function QuizComponent_Conditional_2_Template_ion_button_click_20_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.finishQuiz());
    });
    \u0275\u0275element(21, "ion-icon", 34);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.scorePercent() >= 80 ? 2 : ctx_r2.scorePercent() >= 50 ? 3 : 4);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.score());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.questions.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.scorePercent(), "% Correct");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.scorePercent() >= 80 ? 17 : ctx_r2.scorePercent() >= 50 ? 18 : 19);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.scorePercent() >= 80 ? "View Certificate" : "Back to Dashboard", " ");
  }
}
var QuizComponent = class _QuizComponent {
  constructor() {
    this.onQuizComplete = new EventEmitter();
    this.quizService = inject(QuizService);
    this.questions = [];
    this.currentIndex = signal(0);
    this.selectedAnswer = signal(null);
    this.showResult = signal(false);
    this.score = signal(0);
    this.quizComplete = signal(false);
    this.currentQuestion = computed(() => this.questions[this.currentIndex()]);
    this.progressValue = computed(() => (this.currentIndex() + 1) / (this.questions.length || 1));
    this.scorePercent = computed(() => this.questions.length ? Math.round(this.score() / this.questions.length * 100) : 0);
    addIcons({
      checkmarkCircleOutline,
      closeCircleOutline,
      arrowForwardOutline,
      ribbonOutline
    });
  }
  ngOnInit() {
    this.quizService.getQuestions(this.topicId).subscribe((qs) => {
      this.questions = qs;
    });
  }
  getOptionLetter(index) {
    return String.fromCharCode(65 + index);
  }
  selectOption(index) {
    this.selectedAnswer.set(index);
  }
  checkAnswer() {
    const q = this.currentQuestion();
    if (!q || this.selectedAnswer() === null)
      return;
    this.showResult.set(true);
    if (this.selectedAnswer() === q.correctIndex) {
      this.score.update((s) => s + 1);
    }
  }
  nextQuestion() {
    if (this.currentIndex() < this.questions.length - 1) {
      this.currentIndex.update((i) => i + 1);
      this.selectedAnswer.set(null);
      this.showResult.set(false);
    } else {
      this.quizComplete.set(true);
    }
  }
  finishQuiz() {
    this.onQuizComplete.emit({
      score: this.score(),
      total: this.questions.length
    });
  }
  static {
    this.\u0275fac = function QuizComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuizComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizComponent, selectors: [["app-quiz"]], inputs: { topicId: "topicId" }, outputs: { onQuizComplete: "onQuizComplete" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[1, "quiz-container"], ["id", "quiz-results-card", 1, "results-card", "glass-card"], [1, "quiz-header", "glass-card"], [1, "quiz-progress"], [1, "question-counter"], ["color", "tertiary", 3, "value"], ["id", "quiz-question-card", 1, "question-card", "glass-card"], [1, "question-text"], [1, "options-list"], [1, "option-btn", 3, "selected", "correct", "wrong", "disabled", "id"], [1, "explanation", "glass-card"], [1, "quiz-actions"], ["expand", "block", "shape", "round", "id", "quiz-check-btn", 1, "check-btn", 3, "disabled"], ["expand", "block", "shape", "round", "id", "quiz-next-btn", 1, "next-btn"], [1, "option-btn", 3, "click", "disabled", "id"], [1, "option-letter"], [1, "option-text"], ["name", "checkmark-circle-outline", 1, "result-icon", "correct-icon"], ["name", "close-circle-outline", 1, "result-icon", "wrong-icon"], ["expand", "block", "shape", "round", "id", "quiz-check-btn", 1, "check-btn", 3, "click", "disabled"], ["expand", "block", "shape", "round", "id", "quiz-next-btn", 1, "next-btn", 3, "click"], ["slot", "end", "name", "arrow-forward-outline"], ["slot", "end", "name", "ribbon-outline"], [1, "results-icon"], [1, "score-display"], [1, "score-number"], [1, "score-divider"], [1, "score-total"], [1, "score-percent"], [1, "result-message"], [1, "success-msg"], [1, "good-msg"], [1, "try-msg"], ["expand", "block", "shape", "round", "id", "quiz-finish-btn", 1, "finish-btn", 3, "click"], ["slot", "start", "name", "ribbon-outline"]], template: function QuizComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, QuizComponent_Conditional_1_Template, 6, 4)(2, QuizComponent_Conditional_2_Template, 23, 6, "div", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.quizComplete() ? 1 : 2);
      }
    }, dependencies: [CommonModule, IonButton, IonIcon, IonProgressBar], styles: ['\n\n.quiz-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 0 16px;\n}\n.quiz-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  margin-bottom: 20px;\n}\n.question-counter[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.6);\n  display: block;\n  margin-bottom: 8px;\n}\nion-progress-bar[_ngcontent-%COMP%] {\n  --background: rgba(255,255,255,0.1);\n  border-radius: 8px;\n  height: 6px;\n}\n.question-card[_ngcontent-%COMP%] {\n  padding: 28px 24px;\n}\n.question-text[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: white;\n  margin: 0 0 24px;\n  line-height: 1.5;\n}\n.options-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.option-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 100%;\n  padding: 16px 20px;\n  border-radius: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.04);\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-align: left;\n}\n.option-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: rgba(255, 255, 255, 0.3);\n  background: rgba(255, 255, 255, 0.08);\n}\n.option-btn.selected[_ngcontent-%COMP%] {\n  border-color: #6C5CE7;\n  background: rgba(108, 92, 231, 0.15);\n}\n.option-btn.correct[_ngcontent-%COMP%] {\n  border-color: #00B894;\n  background: rgba(0, 184, 148, 0.15);\n}\n.option-btn.wrong[_ngcontent-%COMP%] {\n  border-color: #E17055;\n  background: rgba(225, 112, 85, 0.15);\n}\n.option-btn[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n.option-letter[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.option-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.result-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.correct-icon[_ngcontent-%COMP%] {\n  color: #00B894;\n}\n.wrong-icon[_ngcontent-%COMP%] {\n  color: #E17055;\n}\n.explanation[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n  margin-bottom: 16px;\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.7);\n  border-left: 3px solid #FDCB6E;\n  line-height: 1.5;\n}\n.quiz-actions[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.check-btn[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #6C5CE7,\n      #a29bfe);\n  --border-radius: 16px;\n  font-weight: 600;\n  height: 52px;\n}\n.next-btn[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #00B894,\n      #55efc4);\n  --color: #111;\n  --border-radius: 16px;\n  font-weight: 600;\n  height: 52px;\n}\n.results-card[_ngcontent-%COMP%] {\n  padding: 40px 24px;\n  text-align: center;\n}\n.results-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 16px;\n}\n.results-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  font-size: 1.8rem;\n  color: white;\n  margin: 0 0 24px;\n}\n.score-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  gap: 4px;\n}\n.score-number[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  font-weight: 800;\n  color: #6C5CE7;\n}\n.score-divider[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: rgba(255, 255, 255, 0.3);\n}\n.score-total[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.5);\n}\n.score-percent[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 1.1rem;\n  margin: 8px 0 24px;\n}\n.result-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0 0 24px;\n}\n.success-msg[_ngcontent-%COMP%] {\n  color: #55efc4;\n}\n.good-msg[_ngcontent-%COMP%] {\n  color: #fdcb6e;\n}\n.try-msg[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.finish-btn[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #E84393,\n      #fd79a8);\n  --border-radius: 16px;\n  font-weight: 600;\n  height: 52px;\n}\n/*# sourceMappingURL=quiz.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizComponent, { className: "QuizComponent", filePath: "src\\app\\components\\quiz\\quiz.component.ts", lineNumber: 336 });
})();

// src/app/pages/topic-detail/topic-detail.component.ts
function TopicDetailComponent_Case_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 17);
    \u0275\u0275element(2, "ion-icon", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 20)(8, "div", 21);
    \u0275\u0275element(9, "ion-icon", 22);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Interactive game activity");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 21);
    \u0275\u0275element(13, "ion-icon", 23);
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 21);
    \u0275\u0275element(17, "ion-icon", 24);
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Earn a mastery certificate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "ion-button", 25);
    \u0275\u0275listener("click", function TopicDetailComponent_Case_38_Template_ion_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startGame());
    });
    \u0275\u0275element(21, "ion-icon", 26);
    \u0275\u0275text(22, " Start Learning ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.topic == null ? null : ctx_r1.topic.color);
    \u0275\u0275advance();
    \u0275\u0275property("name", (ctx_r1.topic == null ? null : ctx_r1.topic.icon) || "book-outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.topic == null ? null : ctx_r1.topic.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.topic == null ? null : ctx_r1.topic.description);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r1.topic == null ? null : ctx_r1.topic.totalQuestions, " quiz questions");
  }
}
function TopicDetailComponent_Case_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-game-container", 27);
    \u0275\u0275listener("onGameComplete", function TopicDetailComponent_Case_39_Template_app_game_container_onGameComplete_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGameComplete());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("gameUrl", (ctx_r1.topic == null ? null : ctx_r1.topic.gameUrl) || "");
  }
}
function TopicDetailComponent_Case_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-quiz", 28);
    \u0275\u0275listener("onQuizComplete", function TopicDetailComponent_Case_40_Template_app_quiz_onQuizComplete_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onQuizComplete($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("topicId", ctx_r1.topicId);
  }
}
function TopicDetailComponent_Case_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 29);
    \u0275\u0275text(2, "\u{1F393}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Topic Complete!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 30);
    \u0275\u0275text(6, "You've finished all phases. View your certificate or return to the dashboard.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 31)(8, "ion-button", 32);
    \u0275\u0275listener("click", function TopicDetailComponent_Case_41_Template_ion_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewCertificate());
    });
    \u0275\u0275text(9, " View Certificate ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-button", 33);
    \u0275\u0275listener("click", function TopicDetailComponent_Case_41_Template_ion_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToDashboard());
    });
    \u0275\u0275text(11, " Back to Dashboard ");
    \u0275\u0275elementEnd()()();
  }
}
var TopicDetailComponent = class _TopicDetailComponent {
  constructor() {
    this.learningState = inject(LearningStateService);
    this.quizService = inject(QuizService);
    this.scoreService = inject(ScoreService);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.topicId = "";
    addIcons({
      arrowBackOutline,
      playOutline,
      gameControllerOutline,
      clipboardOutline,
      checkmarkDoneOutline
    });
  }
  get phase() {
    return this.learningState.currentPhase();
  }
  ngOnInit() {
    this.topicId = this.route.snapshot.paramMap.get("id") || "";
    this.topic = this.quizService.getTopic(this.topicId);
    this.learningState.initTopic(this.topicId);
  }
  isPhaseAfter(check) {
    const order = ["intro", "game", "quiz", "complete"];
    return order.indexOf(this.phase) > order.indexOf(check);
  }
  startGame() {
    this.learningState.advanceToGame(this.topicId);
  }
  onGameComplete() {
    this.learningState.advanceToQuiz(this.topicId);
  }
  onQuizComplete(result) {
    return __async(this, null, function* () {
      this.learningState.markComplete(this.topicId, result.score, result.total);
      try {
        yield this.scoreService.saveScore(this.topicId, result.score, result.total);
      } catch (e) {
        console.error("Failed to save score:", e);
      }
    });
  }
  viewCertificate() {
    this.router.navigate(["/certificate", this.topicId]);
  }
  backToDashboard() {
    this.router.navigate(["/dashboard"]);
  }
  static {
    this.\u0275fac = function TopicDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TopicDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopicDetailComponent, selectors: [["app-topic-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 27, consts: [[1, "ion-no-border"], [1, "glass-toolbar"], ["slot", "start"], ["defaultHref", "/dashboard", "text", "", "id", "topic-back-btn"], [1, "topic-content", 3, "fullscreen"], [1, "topic-wrapper"], [1, "bg-orb", "orb-1"], [1, "bg-orb", "orb-2"], [1, "phase-stepper", "glass-card"], [1, "step"], [1, "step-dot"], [1, "step-label"], [1, "step-line"], ["id", "intro-phase", 1, "phase-card", "glass-card", "intro-card"], ["id", "game-phase", 3, "gameUrl"], ["id", "quiz-phase", 3, "topicId"], ["id", "complete-phase", 1, "phase-card", "glass-card", "complete-card"], [1, "intro-icon"], [3, "name"], [1, "intro-desc"], [1, "intro-info"], [1, "info-item"], ["name", "game-controller-outline"], ["name", "clipboard-outline"], ["name", "checkmark-done-outline"], ["expand", "block", "shape", "round", "id", "start-game-btn", 1, "start-btn", 3, "click"], ["slot", "start", "name", "play-outline"], ["id", "game-phase", 3, "onGameComplete", "gameUrl"], ["id", "quiz-phase", 3, "onQuizComplete", "topicId"], [1, "complete-emoji"], [1, "complete-msg"], [1, "complete-actions"], ["expand", "block", "shape", "round", "id", "view-certificate-btn", 1, "certificate-btn", 3, "click"], ["expand", "block", "shape", "round", "fill", "outline", "id", "back-dashboard-btn", 1, "back-btn", 3, "click"]], template: function TopicDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
        \u0275\u0275element(3, "ion-back-button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ion-title");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "ion-content", 4)(7, "div", 5);
        \u0275\u0275element(8, "div", 6)(9, "div", 7);
        \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "span");
        \u0275\u0275text(14, "1");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "span", 11);
        \u0275\u0275text(16, "Intro");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(17, "div", 12);
        \u0275\u0275elementStart(18, "div", 9)(19, "div", 10)(20, "span");
        \u0275\u0275text(21, "2");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "span", 11);
        \u0275\u0275text(23, "Game");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(24, "div", 12);
        \u0275\u0275elementStart(25, "div", 9)(26, "div", 10)(27, "span");
        \u0275\u0275text(28, "3");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "span", 11);
        \u0275\u0275text(30, "Quiz");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(31, "div", 12);
        \u0275\u0275elementStart(32, "div", 9)(33, "div", 10)(34, "span");
        \u0275\u0275text(35, "\u2713");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "span", 11);
        \u0275\u0275text(37, "Done");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(38, TopicDetailComponent_Case_38_Template, 23, 6, "div", 13)(39, TopicDetailComponent_Case_39_Template, 1, 1, "app-game-container", 14)(40, TopicDetailComponent_Case_40_Template, 1, 1, "app-quiz", 15)(41, TopicDetailComponent_Case_41_Template, 12, 0, "div", 16);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_14_0;
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate((ctx.topic == null ? null : ctx.topic.title) || "Topic");
        \u0275\u0275advance();
        \u0275\u0275property("fullscreen", true);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("background", (ctx.topic == null ? null : ctx.topic.color) || "#6C5CE7");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.phase === "intro")("done", ctx.isPhaseAfter("intro"));
        \u0275\u0275advance(6);
        \u0275\u0275classProp("filled", ctx.isPhaseAfter("intro"));
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.phase === "game")("done", ctx.isPhaseAfter("game"));
        \u0275\u0275advance(6);
        \u0275\u0275classProp("filled", ctx.isPhaseAfter("game"));
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.phase === "quiz")("done", ctx.isPhaseAfter("quiz"));
        \u0275\u0275advance(6);
        \u0275\u0275classProp("filled", ctx.phase === "complete");
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.phase === "complete")("done", ctx.phase === "complete");
        \u0275\u0275advance(6);
        \u0275\u0275conditional((tmp_14_0 = ctx.phase) === "intro" ? 38 : tmp_14_0 === "game" ? 39 : tmp_14_0 === "quiz" ? 40 : tmp_14_0 === "complete" ? 41 : -1);
      }
    }, dependencies: [
      CommonModule,
      IonContent,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonBackButton,
      IonButtons,
      IonButton,
      IonIcon,
      GameContainerComponent,
      QuizComponent
    ], styles: ['\n\n.topic-content[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #0a0a1a 0%,\n      #1a1035 50%,\n      #0d1b2a 100%);\n}\n.glass-toolbar[_ngcontent-%COMP%] {\n  --background: rgba(255,255,255,0.05);\n  --border-width: 0;\n  --color: white;\n  backdrop-filter: blur(20px);\n}\n.topic-wrapper[_ngcontent-%COMP%] {\n  padding: 16px;\n  position: relative;\n  overflow: hidden;\n  min-height: 100%;\n}\n.bg-orb[_ngcontent-%COMP%] {\n  position: fixed;\n  border-radius: 50%;\n  filter: blur(100px);\n  opacity: 0.15;\n  animation: _ngcontent-%COMP%_float 10s ease-in-out infinite;\n  pointer-events: none;\n}\n.orb-1[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  top: -80px;\n  right: -80px;\n}\n.orb-2[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: #00B894;\n  bottom: -50px;\n  left: -50px;\n  animation-delay: -3s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(15px, -10px) scale(1.03);\n  }\n  66% {\n    transform: translate(-10px, 8px) scale(0.97);\n  }\n}\n.phase-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px 20px;\n  margin-bottom: 24px;\n  gap: 0;\n  position: relative;\n  z-index: 1;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.step-dot[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8rem;\n  color: rgba(255, 255, 255, 0.4);\n  transition: all 0.3s ease;\n}\n.step.active[_ngcontent-%COMP%]   .step-dot[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6C5CE7,\n      #a29bfe);\n  color: white;\n  box-shadow: 0 4px 16px rgba(108, 92, 231, 0.4);\n}\n.step.done[_ngcontent-%COMP%]   .step-dot[_ngcontent-%COMP%] {\n  background: #00B894;\n  color: white;\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.4);\n  font-weight: 600;\n}\n.step.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%], \n.step.done[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.step-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: rgba(255, 255, 255, 0.1);\n  margin: 0 8px;\n  margin-bottom: 22px;\n  transition: background 0.3s ease;\n}\n.step-line.filled[_ngcontent-%COMP%] {\n  background: #00B894;\n}\n.intro-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 24px;\n  max-width: 500px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 1;\n}\n.intro-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  margin-bottom: 16px;\n}\n.intro-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  font-size: 1.6rem;\n  color: white;\n  margin: 0 0 12px;\n}\n.intro-desc[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 1rem;\n  margin: 0 0 28px;\n  line-height: 1.5;\n}\n.intro-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 28px;\n  text-align: left;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.9rem;\n}\n.info-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #a29bfe;\n}\n.start-btn[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #6C5CE7,\n      #E84393);\n  --border-radius: 16px;\n  font-weight: 600;\n  height: 52px;\n}\n.complete-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n  max-width: 500px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 1;\n}\n.complete-emoji[_ngcontent-%COMP%] {\n  font-size: 72px;\n  margin-bottom: 16px;\n}\n.complete-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  font-size: 1.6rem;\n  color: white;\n  margin: 0 0 12px;\n}\n.complete-msg[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  margin: 0 0 28px;\n}\n.complete-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.certificate-btn[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #6C5CE7,\n      #E84393);\n  --border-radius: 16px;\n  font-weight: 600;\n  height: 52px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  --border-color: rgba(255,255,255,0.2);\n  --color: rgba(255,255,255,0.7);\n  --border-radius: 16px;\n  height: 48px;\n}\n/*# sourceMappingURL=topic-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopicDetailComponent, { className: "TopicDetailComponent", filePath: "src\\app\\pages\\topic-detail\\topic-detail.component.ts", lineNumber: 353 });
})();
export {
  TopicDetailComponent
};
//# sourceMappingURL=chunk-2UFRMB5S.js.map

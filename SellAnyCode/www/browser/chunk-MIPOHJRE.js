import {
  LearningStateService,
  QuizService
} from "./chunk-MFF56O55.js";
import {
  addIcons,
  bookOutline,
  calculatorOutline,
  codeSlashOutline,
  earthOutline,
  flaskOutline,
  globeOutline,
  logOutOutline,
  trophyOutline
} from "./chunk-CGDY7BHT.js";
import {
  AuthService
} from "./chunk-CIKUY3S6.js";
import "./chunk-JKEEOWNQ.js";
import {
  CommonModule,
  IonButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  Router,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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
import "./chunk-5K356HEJ.js";

// src/app/pages/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-col", 18)(1, "div", 19);
    \u0275\u0275listener("click", function DashboardComponent_For_41_Template_div_click_1_listener() {
      const topic_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTopic(topic_r2));
    });
    \u0275\u0275elementStart(2, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 21);
    \u0275\u0275element(4, "circle", 22)(5, "circle", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 24);
    \u0275\u0275element(7, "ion-icon", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 26)(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 27)(14, "span", 28);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 29);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(18, "div", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const topic_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("--card-accent", topic_r2.color);
    \u0275\u0275propertyInterpolate1("id", "topic-card-", topic_r2.id, "");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("stroke", topic_r2.color)("stroke-dasharray", ctx_r2.getCircumference())("stroke-dashoffset", ctx_r2.getDashOffset(topic_r2.id));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", topic_r2.color);
    \u0275\u0275advance();
    \u0275\u0275property("name", topic_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(topic_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(topic_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getPhaseClass(topic_r2.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getPhaseLabel(topic_r2.id), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", topic_r2.totalQuestions, " questions ");
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", topic_r2.color);
  }
}
var DashboardComponent = class _DashboardComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.learningState = inject(LearningStateService);
    this.quizService = inject(QuizService);
    this.router = inject(Router);
    this.topics = [];
    this.circumference = 2 * Math.PI * 34;
    addIcons({
      logOutOutline,
      trophyOutline,
      calculatorOutline,
      flaskOutline,
      earthOutline,
      bookOutline,
      codeSlashOutline,
      globeOutline
    });
    this.topics = this.quizService.getTopics();
    this.topics.forEach((t) => this.learningState.initTopic(t.id));
  }
  openTopic(topic) {
    this.router.navigate(["/topic", topic.id]);
  }
  logout() {
    this.authService.logout();
  }
  getCircumference() {
    return `${this.circumference} ${this.circumference}`;
  }
  getDashOffset(topicId) {
    const percent = this.learningState.getPhasePercent(topicId);
    const offset = this.circumference - percent / 100 * this.circumference;
    return `${offset}`;
  }
  getCompletedCount() {
    let count = 0;
    this.learningState.topicProgress().forEach((p) => {
      if (p.phase === "complete")
        count++;
    });
    return count;
  }
  getPhaseLabel(topicId) {
    const p = this.learningState.getTopicProgress(topicId);
    switch (p.phase) {
      case "intro":
        return "Not Started";
      case "game":
        return "In Game";
      case "quiz":
        return "Quiz Ready";
      case "complete":
        return "Mastered \u2713";
    }
  }
  getPhaseClass(topicId) {
    const p = this.learningState.getTopicProgress(topicId);
    return `phase-${p.phase}`;
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 6, consts: [[1, "ion-no-border"], [1, "glass-toolbar"], [1, "toolbar-title"], ["slot", "end"], ["id", "user-profile-chip", 1, "user-chip"], ["id", "logout-btn", "fill", "clear", 3, "click"], ["slot", "icon-only", "name", "log-out-outline"], [1, "dashboard-content", 3, "fullscreen"], [1, "dashboard-wrapper"], [1, "bg-orb", "orb-1"], [1, "bg-orb", "orb-2"], [1, "welcome-section"], [1, "stats-bar", "glass-card"], [1, "stat-item"], ["name", "trophy-outline"], [1, "stat-value"], [1, "stat-label"], [1, "topics-grid"], ["size", "12", "size-md", "6", "size-lg", "4"], [1, "topic-card", "glass-card", 3, "click", "id"], [1, "progress-ring-container"], ["viewBox", "0 0 80 80", 1, "progress-ring"], ["cx", "40", "cy", "40", "r", "34", 1, "progress-ring-bg"], ["cx", "40", "cy", "40", "r", "34", 1, "progress-ring-fill"], [1, "ring-icon"], [3, "name"], [1, "card-content"], [1, "card-footer"], [1, "phase-badge"], [1, "question-count"], [1, "card-glow"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-title")(3, "span", 2);
        \u0275\u0275text(4, "\u{1F393} Pegasus LMS");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "ion-buttons", 3)(6, "ion-chip", 4)(7, "ion-label");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "ion-button", 5);
        \u0275\u0275listener("click", function DashboardComponent_Template_ion_button_click_9_listener() {
          return ctx.logout();
        });
        \u0275\u0275element(10, "ion-icon", 6);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(11, "ion-content", 7)(12, "div", 8);
        \u0275\u0275element(13, "div", 9)(14, "div", 10);
        \u0275\u0275elementStart(15, "div", 11)(16, "h1");
        \u0275\u0275text(17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p");
        \u0275\u0275text(19, "Continue your learning journey. Pick a topic to dive in.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12)(21, "div", 13);
        \u0275\u0275element(22, "ion-icon", 14);
        \u0275\u0275elementStart(23, "div")(24, "span", 15);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 16);
        \u0275\u0275text(27, "Overall");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 13)(29, "span", 15);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 16);
        \u0275\u0275text(32, "Topics");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 13)(34, "span", 15);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span", 16);
        \u0275\u0275text(37, "Completed");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "ion-grid", 17)(39, "ion-row");
        \u0275\u0275repeaterCreate(40, DashboardComponent_For_41_Template, 19, 21, "ion-col", 18, _forTrack0);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.authService.getDisplayName());
        \u0275\u0275advance(3);
        \u0275\u0275property("fullscreen", true);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("Welcome back, ", ctx.authService.getDisplayName(), "!");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("", ctx.learningState.overallProgress(), "%");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.topics.length);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.getCompletedCount());
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.topics);
      }
    }, dependencies: [
      CommonModule,
      IonContent,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonGrid,
      IonRow,
      IonCol,
      IonIcon,
      IonButton,
      IonButtons,
      IonChip,
      IonLabel
    ], styles: ['\n\n.dashboard-content[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #0a0a1a 0%,\n      #1a1035 50%,\n      #0d1b2a 100%);\n}\n.glass-toolbar[_ngcontent-%COMP%] {\n  --background: rgba(255,255,255,0.05);\n  --border-width: 0;\n  backdrop-filter: blur(20px);\n  --color: white;\n}\n.toolbar-title[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.user-chip[_ngcontent-%COMP%] {\n  --background: rgba(255,255,255,0.1);\n  --color: rgba(255,255,255,0.8);\n  font-size: 0.8rem;\n}\n.dashboard-wrapper[_ngcontent-%COMP%] {\n  padding: 16px;\n  position: relative;\n  overflow: hidden;\n}\n.bg-orb[_ngcontent-%COMP%] {\n  position: fixed;\n  border-radius: 50%;\n  filter: blur(100px);\n  opacity: 0.2;\n  animation: _ngcontent-%COMP%_float 10s ease-in-out infinite;\n  pointer-events: none;\n  z-index: 0;\n}\n.orb-1[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  background: #6C5CE7;\n  top: -100px;\n  right: -100px;\n}\n.orb-2[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  background: #00B894;\n  bottom: -50px;\n  left: -50px;\n  animation-delay: -4s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(20px, -15px) scale(1.03);\n  }\n  66% {\n    transform: translate(-15px, 10px) scale(0.97);\n  }\n}\n.welcome-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px 16px 32px;\n  position: relative;\n  z-index: 1;\n}\n.welcome-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  font-size: 1.6rem;\n  color: white;\n  margin: 0 0 8px;\n}\n.welcome-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  margin: 0 0 24px;\n  font-size: 0.95rem;\n}\n.stats-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  padding: 20px;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: white;\n}\n.stat-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #FDCB6E;\n}\n.stat-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.stat-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: white;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(255, 255, 255, 0.5);\n}\n.topics-grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.topic-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 24px;\n  cursor: pointer;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  overflow: hidden;\n  display: flex;\n  gap: 20px;\n  align-items: flex-start;\n}\n.topic-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);\n}\n.topic-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.card-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50%;\n  right: -50%;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  opacity: 0.06;\n  filter: blur(40px);\n  pointer-events: none;\n}\n.progress-ring-container[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  width: 80px;\n  height: 80px;\n}\n.progress-ring[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  transform: rotate(-90deg);\n}\n.progress-ring-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: rgba(255, 255, 255, 0.1);\n  stroke-width: 4;\n}\n.progress-ring-fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 4;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.6s ease;\n}\n.ring-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 28px;\n}\n.card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 700;\n  font-size: 1.1rem;\n  color: white;\n  margin: 0 0 6px;\n}\n.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 0.85rem;\n  margin: 0 0 12px;\n  line-height: 1.4;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.phase-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  padding: 4px 10px;\n  border-radius: 12px;\n}\n.phase-intro[_ngcontent-%COMP%] {\n  background: rgba(108, 92, 231, 0.2);\n  color: #a29bfe;\n}\n.phase-game[_ngcontent-%COMP%] {\n  background: rgba(253, 203, 110, 0.2);\n  color: #fdcb6e;\n}\n.phase-quiz[_ngcontent-%COMP%] {\n  background: rgba(0, 184, 148, 0.2);\n  color: #55efc4;\n}\n.phase-complete[_ngcontent-%COMP%] {\n  background: rgba(232, 67, 147, 0.2);\n  color: #fd79a8;\n}\n.question-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(255, 255, 255, 0.35);\n}\n/*# sourceMappingURL=dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\pages\\dashboard\\dashboard.component.ts", lineNumber: 357 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-MIPOHJRE.js.map

import {
  LearningStateService,
  QuizService
} from "./chunk-MFF56O55.js";
import {
  addIcons,
  arrowBackOutline,
  shareOutline
} from "./chunk-CGDY7BHT.js";
import {
  Capacitor,
  registerPlugin
} from "./chunk-UFZXUGHM.js";
import "./chunk-JKEEOWNQ.js";
import {
  ActivatedRoute,
  CommonModule,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  Router,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
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
import {
  __async
} from "./chunk-5K356HEJ.js";

// node_modules/@capacitor/share/dist/esm/index.js
var Share = registerPlugin("Share", {
  web: () => import("./chunk-GGZ7O6DB.js").then((m) => new m.ShareWeb())
});

// src/app/services/share.service.ts
var ShareService = class _ShareService {
  /**
   * Share a mastery certificate deep-link via native share sheet
   * or fallback to clipboard on web.
   */
  shareCertificate(topicTitle, topicId, score, total) {
    return __async(this, null, function* () {
      const url = `https://pegasus-lms.app/certificate/${topicId}`;
      const text = `\u{1F393} I mastered "${topicTitle}" with a score of ${score}/${total} on Pegasus LMS!`;
      if (Capacitor.isNativePlatform()) {
        yield Share.share({
          title: `Mastery Certificate \u2014 ${topicTitle}`,
          text,
          url,
          dialogTitle: "Share your achievement"
        });
      } else {
        if (navigator.share) {
          yield navigator.share({ title: topicTitle, text, url });
        } else {
          yield navigator.clipboard.writeText(`${text}
${url}`);
        }
      }
    });
  }
  static {
    this.\u0275fac = function ShareService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShareService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ShareService, factory: _ShareService.\u0275fac, providedIn: "root" });
  }
};

// src/app/pages/certificate/certificate.component.ts
var CertificateComponent = class _CertificateComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.quizService = inject(QuizService);
    this.learningState = inject(LearningStateService);
    this.shareService = inject(ShareService);
    this.progress = {
      topicId: "",
      phase: "complete",
      quizScore: 0,
      quizTotal: 0,
      completedAt: /* @__PURE__ */ new Date()
    };
    addIcons({ shareOutline, arrowBackOutline });
  }
  ngOnInit() {
    const topicId = this.route.snapshot.paramMap.get("topicId") || "";
    this.topic = this.quizService.getTopic(topicId);
    this.progress = this.learningState.getTopicProgress(topicId);
  }
  formatDate(date) {
    if (!date)
      return "N/A";
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  }
  shareCertificate() {
    return __async(this, null, function* () {
      if (this.topic) {
        yield this.shareService.shareCertificate(this.topic.title, this.topic.id, this.progress.quizScore || 0, this.progress.quizTotal || 0);
      }
    });
  }
  backToDashboard() {
    this.router.navigate(["/dashboard"]);
  }
  static {
    this.\u0275fac = function CertificateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CertificateComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CertificateComponent, selectors: [["app-certificate"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 54, vars: 10, consts: [[1, "ion-no-border"], [1, "glass-toolbar"], ["slot", "start"], ["defaultHref", "/dashboard", "text", "", "id", "cert-back-btn"], [1, "cert-content", 3, "fullscreen"], [1, "cert-wrapper"], [1, "bg-orb", "orb-1"], [1, "bg-orb", "orb-2"], [1, "bg-orb", "orb-3"], ["id", "certificate-card", 1, "certificate", "glass-card"], [1, "cert-border"], [1, "cert-inner"], [1, "cert-header"], [1, "cert-award"], [1, "cert-divider"], [1, "cert-body"], [1, "cert-text"], [1, "cert-topic"], [1, "cert-description"], [1, "cert-score"], [1, "score-circle"], [1, "score-num"], [1, "score-sep"], [1, "score-den"], [1, "score-label"], [1, "cert-footer"], [1, "cert-date"], [1, "label"], [1, "value"], [1, "cert-seal"], [1, "seal-icon"], [1, "seal-text"], [1, "cert-actions"], ["expand", "block", "shape", "round", "id", "share-certificate-btn", 1, "share-btn", 3, "click"], ["slot", "start", "name", "share-outline"], ["expand", "block", "shape", "round", "fill", "outline", "id", "cert-back-dashboard-btn", 1, "back-btn", 3, "click"]], template: function CertificateComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-header", 0)(1, "ion-toolbar", 1)(2, "ion-buttons", 2);
        \u0275\u0275element(3, "ion-back-button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ion-title");
        \u0275\u0275text(5, "Mastery Certificate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "ion-content", 4)(7, "div", 5);
        \u0275\u0275element(8, "div", 6)(9, "div", 7)(10, "div", 8);
        \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "span", 13);
        \u0275\u0275text(16, "\u{1F3C6}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "h1");
        \u0275\u0275text(18, "Certificate of Mastery");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 15)(21, "p", 16);
        \u0275\u0275text(22, "This certifies that the student has successfully mastered");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "h2", 17);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p", 18);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 19)(28, "div", 20)(29, "span", 21);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 22);
        \u0275\u0275text(32, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 23);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "span", 24);
        \u0275\u0275text(36, "Quiz Score");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 25)(38, "div", 26)(39, "span", 27);
        \u0275\u0275text(40, "Completed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "span", 28);
        \u0275\u0275text(42);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 29)(44, "span", 30);
        \u0275\u0275text(45, "\u{1F393}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span", 31);
        \u0275\u0275text(47, "Pegasus LMS");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(48, "div", 32)(49, "ion-button", 33);
        \u0275\u0275listener("click", function CertificateComponent_Template_ion_button_click_49_listener() {
          return ctx.shareCertificate();
        });
        \u0275\u0275element(50, "ion-icon", 34);
        \u0275\u0275text(51, " Share Certificate ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "ion-button", 35);
        \u0275\u0275listener("click", function CertificateComponent_Template_ion_button_click_52_listener() {
          return ctx.backToDashboard();
        });
        \u0275\u0275text(53, " Back to Dashboard ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("fullscreen", true);
        \u0275\u0275advance(17);
        \u0275\u0275styleProp("color", ctx.topic == null ? null : ctx.topic.color);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", (ctx.topic == null ? null : ctx.topic.title) || "Unknown Topic", " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.topic == null ? null : ctx.topic.description);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("border-color", ctx.topic == null ? null : ctx.topic.color);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.progress.quizScore);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.progress.quizTotal);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.formatDate(ctx.progress.completedAt));
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
      IonIcon
    ], styles: ['\n\n.cert-content[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #0a0a1a 0%,\n      #1a1035 50%,\n      #0d1b2a 100%);\n}\n.glass-toolbar[_ngcontent-%COMP%] {\n  --background: rgba(255,255,255,0.05);\n  --border-width: 0;\n  --color: white;\n  backdrop-filter: blur(20px);\n}\n.cert-wrapper[_ngcontent-%COMP%] {\n  padding: 24px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n.bg-orb[_ngcontent-%COMP%] {\n  position: fixed;\n  border-radius: 50%;\n  filter: blur(100px);\n  opacity: 0.15;\n  animation: _ngcontent-%COMP%_float 10s ease-in-out infinite;\n  pointer-events: none;\n}\n.orb-1[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: #6C5CE7;\n  top: 0;\n  left: -50px;\n}\n.orb-2[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  background: #E84393;\n  top: 50%;\n  right: -50px;\n  animation-delay: -3s;\n}\n.orb-3[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background: #FDCB6E;\n  bottom: 0;\n  left: 50%;\n  animation-delay: -6s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(15px, -10px) scale(1.03);\n  }\n  66% {\n    transform: translate(-10px, 8px) scale(0.97);\n  }\n}\n.certificate[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  padding: 4px;\n  position: relative;\n  z-index: 1;\n}\n.cert-border[_ngcontent-%COMP%] {\n  border: 2px solid rgba(255, 255, 255, 0.15);\n  border-radius: 22px;\n  padding: 4px;\n}\n.cert-inner[_ngcontent-%COMP%] {\n  border: 1px dashed rgba(255, 255, 255, 0.1);\n  border-radius: 18px;\n  padding: 32px 24px;\n  text-align: center;\n}\n.cert-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.cert-award[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n}\n.cert-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  font-size: 1.4rem;\n  color: white;\n  margin: 0 0 16px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.cert-divider[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      #6C5CE7,\n      #E84393);\n  margin: 0 auto;\n  border-radius: 2px;\n}\n.cert-body[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.cert-text[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 0.9rem;\n  margin: 0 0 12px;\n}\n.cert-topic[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  font-size: 1.8rem;\n  margin: 0 0 8px;\n}\n.cert-description[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 0.85rem;\n  margin: 0;\n}\n.cert-score[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.score-circle[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border: 4px solid;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  margin-bottom: 8px;\n}\n.score-num[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.8rem;\n  color: white;\n}\n.score-sep[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: rgba(255, 255, 255, 0.3);\n}\n.score-den[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.5);\n}\n.score-label[_ngcontent-%COMP%] {\n  display: block;\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.cert-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 20px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n}\n.cert-date[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.cert-date[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.7rem;\n  color: rgba(255, 255, 255, 0.4);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.cert-date[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 500;\n}\n.cert-seal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.seal-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.seal-text[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: rgba(255, 255, 255, 0.4);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.cert-actions[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  margin-top: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  position: relative;\n  z-index: 1;\n}\n.share-btn[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #6C5CE7,\n      #E84393);\n  --border-radius: 16px;\n  font-weight: 600;\n  height: 52px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  --border-color: rgba(255,255,255,0.2);\n  --color: rgba(255,255,255,0.7);\n  --border-radius: 16px;\n  height: 48px;\n}\n/*# sourceMappingURL=certificate.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CertificateComponent, { className: "CertificateComponent", filePath: "src\\app\\pages\\certificate\\certificate.component.ts", lineNumber: 314 });
})();
export {
  CertificateComponent
};
//# sourceMappingURL=chunk-PKIQKRKL.js.map

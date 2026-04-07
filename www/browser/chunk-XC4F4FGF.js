import {
  addIcons,
  logoGoogle,
  personOutline,
  sparklesOutline
} from "./chunk-CGDY7BHT.js";
import {
  AuthService
} from "./chunk-CIKUY3S6.js";
import {
  CommonModule,
  IonButton,
  IonContent,
  IonIcon,
  IonSpinner,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
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

// src/app/pages/login/login.component.ts
function LoginComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "ion-spinner", 18);
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.loading = false;
    addIcons({ logoGoogle, personOutline, sparklesOutline });
  }
  signInWithGoogle() {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        yield this.authService.signInWithGoogle();
      } catch {
        this.loading = false;
      }
    });
  }
  signInAsGuest() {
    return __async(this, null, function* () {
      this.loading = true;
      try {
        yield this.authService.signInAsGuest();
      } catch {
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 4, consts: [[1, "login-content", 3, "fullscreen"], [1, "login-wrapper"], [1, "bg-orb", "orb-1"], [1, "bg-orb", "orb-2"], [1, "bg-orb", "orb-3"], [1, "login-card", "glass-card"], [1, "logo-section"], [1, "logo-icon"], ["name", "sparkles-outline"], [1, "tagline"], [1, "auth-buttons"], ["id", "google-signin-btn", "expand", "block", "shape", "round", 1, "google-btn", 3, "click", "disabled"], ["slot", "start", "name", "logo-google"], [1, "divider"], ["id", "guest-signin-btn", "expand", "block", "shape", "round", "fill", "outline", 1, "guest-btn", 3, "click", "disabled"], ["slot", "start", "name", "person-outline"], [1, "loading-overlay"], [1, "footer-text"], ["name", "crescent"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275elementStart(5, "div", 5)(6, "div", 6)(7, "div", 7);
        \u0275\u0275element(8, "ion-icon", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "h1");
        \u0275\u0275text(10, "Pegasus LMS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "p", 9);
        \u0275\u0275text(12, "Learn Through Play");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 10)(14, "ion-button", 11);
        \u0275\u0275listener("click", function LoginComponent_Template_ion_button_click_14_listener() {
          return ctx.signInWithGoogle();
        });
        \u0275\u0275element(15, "ion-icon", 12);
        \u0275\u0275text(16, " Continue with Google ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 13)(18, "span");
        \u0275\u0275text(19, "or");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "ion-button", 14);
        \u0275\u0275listener("click", function LoginComponent_Template_ion_button_click_20_listener() {
          return ctx.signInAsGuest();
        });
        \u0275\u0275element(21, "ion-icon", 15);
        \u0275\u0275text(22, " Continue as Guest ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(23, LoginComponent_Conditional_23_Template, 2, 0, "div", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p", 17);
        \u0275\u0275text(25, "Interactive learning, one topic at a time.");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("fullscreen", true);
        \u0275\u0275advance(14);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading ? 23 : -1);
      }
    }, dependencies: [CommonModule, IonContent, IonButton, IonIcon, IonSpinner], styles: ['\n\n.login-content[_ngcontent-%COMP%] {\n  --background:\n    linear-gradient(\n      135deg,\n      #0a0a1a 0%,\n      #1a1035 50%,\n      #0d1b2a 100%);\n}\n.login-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100%;\n  padding: 24px;\n  position: relative;\n  overflow: hidden;\n}\n.bg-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.4;\n  animation: _ngcontent-%COMP%_float 8s ease-in-out infinite;\n}\n.orb-1[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background: #6C5CE7;\n  top: -50px;\n  left: -50px;\n  animation-delay: 0s;\n}\n.orb-2[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  background: #00B894;\n  bottom: -30px;\n  right: -30px;\n  animation-delay: -3s;\n}\n.orb-3[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background: #E84393;\n  top: 50%;\n  left: 60%;\n  animation-delay: -5s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  33% {\n    transform: translate(30px, -20px) scale(1.05);\n  }\n  66% {\n    transform: translate(-20px, 20px) scale(0.95);\n  }\n}\n.login-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 400px;\n  padding: 48px 32px;\n  text-align: center;\n  z-index: 1;\n}\n.logo-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 16px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #6C5CE7,\n      #E84393);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  color: white;\n  box-shadow: 0 8px 32px rgba(108, 92, 231, 0.4);\n}\nh1[_ngcontent-%COMP%] {\n  font-family: "Inter", sans-serif;\n  font-weight: 800;\n  font-size: 2rem;\n  color: white;\n  margin: 0 0 8px;\n  letter-spacing: -0.5px;\n}\n.tagline[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 0;\n}\n.auth-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.google-btn[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --color: #333333;\n  --border-radius: 16px;\n  font-weight: 600;\n  height: 52px;\n  --box-shadow: 0 4px 16px rgba(0,0,0,0.1);\n}\n.guest-btn[_ngcontent-%COMP%] {\n  --border-color: rgba(255,255,255,0.3);\n  --color: rgba(255,255,255,0.9);\n  --border-radius: 16px;\n  font-weight: 600;\n  height: 52px;\n}\n.guest-btn[_ngcontent-%COMP%]:hover {\n  --border-color: rgba(255,255,255,0.6);\n}\n.divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 0.85rem;\n}\n.divider[_ngcontent-%COMP%]::before, \n.divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.15);\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 24px;\n  z-index: 10;\n}\n.footer-text[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 0.85rem;\n  z-index: 1;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\pages\\login\\login.component.ts", lineNumber: 227 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-XC4F4FGF.js.map

import {
  AuthService,
  DefaultValueAccessor,
  FooterComponent,
  FormsModule,
  HeaderComponent,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-LI3AJTG3.js";
import {
  ActivatedRoute,
  CommonModule,
  NgIf,
  __async,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-3B7JSY2Q.js";

// src/app/pages/login/login.component.ts
function LoginComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function LoginComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "label");
    \u0275\u0275text(2, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_22_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.name, $event) || (ctx_r0.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.name);
    \u0275\u0275property("required", ctx_r0.isRegisterMode);
  }
}
function LoginComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "label", 27);
    \u0275\u0275element(2, "input", 28);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Remember me");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 29);
    \u0275\u0275text(6, "Forgot password?");
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Don't have an account? ");
    \u0275\u0275elementStart(2, "a", 30);
    \u0275\u0275listener("click", function LoginComponent_span_35_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleMode());
    });
    \u0275\u0275text(3, "Sign up");
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_span_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Already have an account? ");
    \u0275\u0275elementStart(2, "a", 30);
    \u0275\u0275listener("click", function LoginComponent_span_36_Template_a_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleMode());
    });
    \u0275\u0275text(3, "Log in");
    \u0275\u0275elementEnd()();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(route, authService) {
    this.route = route;
    this.authService = authService;
    this.isRegisterMode = false;
    this.isLoading = false;
    this.errorMessage = "";
    this.name = "";
    this.email = "";
    this.password = "";
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.isRegisterMode = params["register"] === "true";
      this.errorMessage = "";
    });
  }
  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
    this.errorMessage = "";
  }
  onGoogleLogin() {
    return __async(this, null, function* () {
      this.isLoading = true;
      this.errorMessage = "";
      try {
        yield this.authService.loginWithGoogle();
      } catch (err) {
        this.errorMessage = err.message || "Error occurred during Google login.";
      } finally {
        this.isLoading = false;
      }
    });
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (!this.email || !this.password || this.isRegisterMode && !this.name) {
        this.errorMessage = "Please fill out all required fields.";
        return;
      }
      this.isLoading = true;
      this.errorMessage = "";
      try {
        if (this.isRegisterMode) {
          yield this.authService.registerWithEmail(this.email, this.password, this.name);
        } else {
          yield this.authService.loginWithEmail(this.email, this.password);
        }
      } catch (err) {
        this.errorMessage = err.message || "Authentication error. Please try again.";
      } finally {
        this.isLoading = false;
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 38, vars: 12, consts: [[1, "login-page"], [1, "pm-container"], [1, "login-wrapper"], [1, "login-card"], [1, "login-title"], [1, "login-subtitle"], [1, "social-login"], [1, "pm-btn", "pm-btn-outline", "google-btn", 3, "click", "disabled"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", "fill", "#4285F4"], ["d", "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", "fill", "#34A853"], ["d", "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", "fill", "#FBBC05"], ["d", "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", "fill", "#EA4335"], [1, "divider"], [1, "login-form", 3, "ngSubmit"], ["class", "error-msg", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], ["type", "email", "placeholder", "john@example.com", "name", "email", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "name", "password", "required", "", 3, "ngModelChange", "ngModel"], ["class", "form-options", 4, "ngIf"], ["type", "submit", 1, "pm-btn", "pm-btn-primary", "pm-btn-lg", "w-full", 3, "disabled"], [1, "auth-switch"], [4, "ngIf"], [1, "error-msg"], ["type", "text", "placeholder", "John Doe", "name", "name", 3, "ngModelChange", "ngModel", "required"], [1, "form-options"], [1, "remember-me"], ["type", "checkbox", "name", "remember"], ["href", "#", 1, "forgot-pwd"], ["href", "javascript:void(0)", 3, "click"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "main", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6)(10, "button", 7);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_10_listener() {
          return ctx.onGoogleLogin();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 8);
        \u0275\u0275element(12, "path", 9)(13, "path", 10)(14, "path", 11)(15, "path", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " Continue with Google ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "div", 13)(18, "span");
        \u0275\u0275text(19, "OR CONTINUE WITH EMAIL");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "form", 14);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_20_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275template(21, LoginComponent_div_21_Template, 2, 1, "div", 15)(22, LoginComponent_div_22_Template, 4, 2, "div", 16);
        \u0275\u0275elementStart(23, "div", 17)(24, "label");
        \u0275\u0275text(25, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_26_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 17)(28, "label");
        \u0275\u0275text(29, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(31, LoginComponent_div_31_Template, 7, 0, "div", 20);
        \u0275\u0275elementStart(32, "button", 21);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 22);
        \u0275\u0275template(35, LoginComponent_span_35_Template, 4, 0, "span", 23)(36, LoginComponent_span_36_Template, 4, 0, "span", 23);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(37, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.isRegisterMode ? "Create an Account" : "Welcome Back");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.isRegisterMode ? "Join selljustcode to buy and download premium assets." : "Sign in to access your purchased products and account.", " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.isLoading);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isRegisterMode);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isRegisterMode);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Please wait..." : ctx.isRegisterMode ? "Create Account" : "Sign In", " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.isRegisterMode);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isRegisterMode);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, HeaderComponent, FooterComponent], styles: ['\n\n.login-page[_ngcontent-%COMP%] {\n  padding: 80px 0 120px;\n  min-height: calc(100vh - 200px);\n  background:\n    linear-gradient(\n      135deg,\n      #F8FAFC 0%,\n      #E2E8F0 100%);\n  display: flex;\n  align-items: center;\n  margin-top: 0;\n}\n.login-wrapper[_ngcontent-%COMP%] {\n  max-width: 480px;\n  margin: 0 auto;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  padding: 48px;\n  border-radius: var(--pm-radius-xl);\n  box-shadow: var(--pm-shadow-lg);\n  border: 1px solid var(--pm-border-light);\n}\n.login-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--pm-text-primary);\n  margin: 0 0 8px;\n  text-align: center;\n}\n.login-subtitle[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  font-size: 0.95rem;\n  text-align: center;\n  margin: 0 0 32px;\n  line-height: 1.5;\n}\n.social-login[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.google-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  height: 48px;\n  font-size: 1rem;\n  color: #334155;\n  border-color: #E2E8F0;\n}\n.google-btn[_ngcontent-%COMP%]:hover {\n  background: #F8FAFC;\n}\n.divider[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin: 32px 0;\n}\n.divider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n  height: 1px;\n  background: var(--pm-border);\n}\n.divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--pm-surface);\n  padding: 0 12px;\n  color: var(--pm-text-muted);\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--pm-text-primary);\n  margin-bottom: 8px;\n}\n.form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-sm);\n  font-family: inherit;\n  font-size: 0.95rem;\n  background: #F8FAFC;\n  transition: all var(--pm-transition-fast);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background: white;\n  border-color: var(--ion-color-primary);\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.form-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.remember-me[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.85rem;\n  color: var(--pm-text-secondary);\n  cursor: pointer;\n}\n.forgot-pwd[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--ion-color-primary);\n  text-decoration: none;\n  font-weight: 600;\n}\n.forgot-pwd[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.auth-switch[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n  font-size: 0.9rem;\n  color: var(--pm-text-secondary);\n}\n.auth-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-switch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.error-msg[_ngcontent-%COMP%] {\n  background: #FEE2E2;\n  color: #991B1B;\n  padding: 12px;\n  border-radius: var(--pm-radius-sm);\n  margin-bottom: 20px;\n  font-size: 0.85rem;\n  border: 1px solid #FCA5A5;\n}\n@media (max-width: 640px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n  .login-page[_ngcontent-%COMP%] {\n    padding: 60px 0;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\pages\\login\\login.component.ts", lineNumber: 247 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-S63FKRPT.js.map

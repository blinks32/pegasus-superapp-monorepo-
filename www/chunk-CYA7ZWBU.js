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
  CommonModule,
  NgIf,
  Router,
  RouterLink,
  __async,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-3B7JSY2Q.js";

// src/app/pages/admin/admin-login/admin-login.component.ts
function AdminLoginComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
var AdminLoginComponent = class _AdminLoginComponent {
  constructor() {
    this.router = inject(Router);
    this.auth = inject(AuthService);
    this.email = "";
    this.password = "";
    this.isLoading = false;
    this.errorMessage = "";
  }
  onLogin() {
    return __async(this, null, function* () {
      if (this.isLoading)
        return;
      this.isLoading = true;
      this.errorMessage = "";
      try {
        yield this.auth.signInWithEmailRaw(this.email, this.password);
        this.router.navigate(["/admin"]);
      } catch (err) {
        this.errorMessage = err?.message || "Invalid admin credentials.";
      } finally {
        this.isLoading = false;
      }
    });
  }
  static {
    this.\u0275fac = function AdminLoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminLoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLoginComponent, selectors: [["app-admin-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 5, consts: [[1, "admin-login-page"], [1, "pm-container"], [1, "admin-login-wrapper"], [1, "admin-login-card"], [1, "admin-login-title"], [1, "admin-login-subtitle"], ["class", "error-msg", 4, "ngIf"], [1, "admin-login-form", 3, "ngSubmit"], [1, "form-group"], ["type", "email", "name", "email", "required", "", "autocomplete", "email", 1, "pm-input", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", "autocomplete", "current-password", 1, "pm-input", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "pm-btn", "pm-btn-primary", "pm-btn-lg", "w-full", 3, "disabled"], [1, "helper"], ["routerLink", "/login"], [1, "error-msg"]], template: function AdminLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "main", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1", 4);
        \u0275\u0275text(6, "Admin Login");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, "Enter the authorized admin email and password.");
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, AdminLoginComponent_div_9_Template, 2, 1, "div", 6);
        \u0275\u0275elementStart(10, "form", 7);
        \u0275\u0275listener("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_10_listener() {
          return ctx.onLogin();
        });
        \u0275\u0275elementStart(11, "div", 8)(12, "label");
        \u0275\u0275text(13, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 8)(16, "label");
        \u0275\u0275text(17, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function AdminLoginComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "button", 11);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 12)(22, "span");
        \u0275\u0275text(23, "Unauthorized users will be redirected.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "a", 13);
        \u0275\u0275text(25, "Back to user login");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275element(26, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.email);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.password);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.isLoading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Please wait..." : "Login", " ");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink, HeaderComponent, FooterComponent], styles: ["\n\n.admin-login-page[_ngcontent-%COMP%] {\n  padding: 80px 0 120px;\n  min-height: calc(100vh - 200px);\n  background:\n    linear-gradient(\n      135deg,\n      #F8FAFC 0%,\n      #E2E8F0 100%);\n  display: flex;\n  align-items: center;\n  margin-top: 0;\n}\n.admin-login-wrapper[_ngcontent-%COMP%] {\n  max-width: 520px;\n  margin: 0 auto;\n}\n.admin-login-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  padding: 48px;\n  border-radius: var(--pm-radius-xl);\n  box-shadow: var(--pm-shadow-lg);\n  border: 1px solid var(--pm-border-light);\n}\n.admin-login-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--pm-text-primary);\n  margin: 0 0 8px;\n  text-align: center;\n}\n.admin-login-subtitle[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  font-size: 0.95rem;\n  text-align: center;\n  margin: 0 0 28px;\n  line-height: 1.5;\n}\n.admin-login-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--pm-text-primary);\n  margin-bottom: 8px;\n}\n.pm-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-sm);\n  font-family: inherit;\n  font-size: 0.95rem;\n  background: #F8FAFC;\n  outline: none;\n  transition: all var(--pm-transition-fast);\n}\n.pm-input[_ngcontent-%COMP%]:focus {\n  background: white;\n  border-color: var(--ion-color-primary);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.helper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 14px;\n  font-size: 0.85rem;\n  color: var(--pm-text-muted);\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.helper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-weight: 600;\n  text-decoration: none;\n}\n.helper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.error-msg[_ngcontent-%COMP%] {\n  background: #FEE2E2;\n  color: #991B1B;\n  padding: 12px;\n  border-radius: var(--pm-radius-sm);\n  margin-bottom: 20px;\n  font-size: 0.85rem;\n  border: 1px solid #FCA5A5;\n}\n@media (max-width: 640px) {\n  .admin-login-card[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n  .admin-login-page[_ngcontent-%COMP%] {\n    padding: 60px 0;\n  }\n}\n/*# sourceMappingURL=admin-login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "src\\app\\pages\\admin\\admin-login\\admin-login.component.ts", lineNumber: 178 });
})();
export {
  AdminLoginComponent
};
//# sourceMappingURL=chunk-CYA7ZWBU.js.map

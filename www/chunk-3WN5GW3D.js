import {
  FooterComponent,
  HeaderComponent
} from "./chunk-N4X3KQAG.js";
import {
  CommonModule,
  DecimalPipe,
  HttpClient,
  NgForOf,
  NgIf,
  __spreadProps,
  __spreadValues,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VAWGWNLY.js";

// src/app/pages/guide/guide.component.ts
function GuideComponent_div_28_ng_container_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
  if (rf & 2) {
    const step_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classProp("completed", step_r2.completed);
  }
}
function GuideComponent_div_28_ng_container_1_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "code");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 33);
    \u0275\u0275listener("click", function GuideComponent_div_28_ng_container_1_div_1_div_16_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const step_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.copyToClipboard(step_r2.code));
    });
    \u0275\u0275element(4, "ion-icon", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r2.code);
  }
}
function GuideComponent_div_28_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22);
    \u0275\u0275element(3, "ion-icon", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, GuideComponent_div_28_ng_container_1_div_1_div_4_Template, 1, 2, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24)(6, "div", 25)(7, "div")(8, "h4");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, GuideComponent_div_28_ng_container_1_div_1_div_16_Template, 5, 1, "div", 27);
    \u0275\u0275elementStart(17, "div", 28);
    \u0275\u0275listener("click", function GuideComponent_div_28_ng_container_1_div_1_Template_div_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleStep(i_r5));
    });
    \u0275\u0275elementStart(18, "div", 29);
    \u0275\u0275element(19, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    const step_r2 = ctx_r5.$implicit;
    const i_r5 = ctx_r5.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("animation-delay", i_r5 * 100 + "ms");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("completed", step_r2.completed)("active", i_r5 === ctx_r3.currentStepIndex && !ctx_r3.showAllSteps);
    \u0275\u0275advance();
    \u0275\u0275property("name", step_r2.completed ? "checkmark-outline" : step_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r5 < ctx_r3.currentSteps.length - 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Phase ", i_r5 + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r2.title);
    \u0275\u0275advance();
    \u0275\u0275classProp("pm-badge-success", step_r2.completed)("pm-badge-primary", !step_r2.completed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r2.completed ? "Completed" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r2.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", step_r2.code);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("checked", step_r2.completed);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r2.completed ? "Step Synchronized" : "Confirm Completion");
  }
}
function GuideComponent_div_28_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, GuideComponent_div_28_ng_container_1_div_1_Template, 22, 20, "div", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.showAllSteps || i_r5 === ctx_r3.currentStepIndex);
  }
}
function GuideComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, GuideComponent_div_28_ng_container_1_Template, 2, 1, "ng-container", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.currentSteps);
  }
}
function GuideComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275element(2, "ion-icon", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "System Fully Aligned");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 38)(8, "button", 39);
    \u0275\u0275listener("click", function GuideComponent_div_29_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.resetProgress());
    });
    \u0275\u0275element(9, "ion-icon", 40);
    \u0275\u0275text(10, " Restart Protocol ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 41);
    \u0275\u0275listener("click", function GuideComponent_div_29_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setTab(ctx_r3.activeTab === "setup" ? "usage" : "setup"));
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("You have successfully completed the ", ctx_r3.activeTab, " protocols. Pegasus is ready for operation.");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r3.activeTab === "setup" ? "View Usage Guide" : "View Setup Guide", " ");
  }
}
var GuideComponent = class _GuideComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.setupSteps = [];
    this.usageSteps = [];
    this.activeTab = "setup";
    this.currentStepIndex = 0;
    this.showAllSteps = false;
    this.allCompleted = false;
  }
  get currentSteps() {
    return this.activeTab === "setup" ? this.setupSteps : this.usageSteps;
  }
  get progress() {
    if (this.currentSteps.length === 0)
      return 0;
    const completedCount = this.currentSteps.filter((s) => s.completed).length;
    return completedCount / this.currentSteps.length * 100;
  }
  ngOnInit() {
    this.http.get("assets/guide-data.json").subscribe((data) => {
      this.setupSteps = data.setupSteps.map((s) => __spreadProps(__spreadValues({}, s), { completed: false }));
      this.usageSteps = data.usageSteps.map((s) => __spreadProps(__spreadValues({}, s), { completed: false }));
    });
  }
  toggleStep(index) {
    if (this.showAllSteps) {
      this.currentSteps[index].completed = !this.currentSteps[index].completed;
    } else {
      this.currentSteps[index].completed = true;
      if (this.currentStepIndex < this.currentSteps.length - 1) {
        setTimeout(() => {
          this.currentStepIndex++;
        }, 300);
      } else {
        this.allCompleted = true;
      }
    }
  }
  setTab(tab) {
    this.activeTab = tab;
    this.currentStepIndex = 0;
    this.allCompleted = false;
  }
  toggleShowAll() {
    this.showAllSteps = !this.showAllSteps;
  }
  resetProgress() {
    this.currentSteps.forEach((s) => s.completed = false);
    this.currentStepIndex = 0;
    this.allCompleted = false;
  }
  copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }
  static {
    this.\u0275fac = function GuideComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GuideComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GuideComponent, selectors: [["app-guide"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 16, consts: [[1, "guide-page"], [1, "guide-container"], [1, "guide-header", "fade-in"], [1, "badge"], [1, "guide-tabs", "fade-in-up", 2, "animation-delay", "100ms"], [1, "tab-btn", 3, "click"], ["name", "construct-outline"], ["name", "flash-outline"], [1, "guide-card", "fade-in-up", 2, "animation-delay", "200ms"], [1, "card-top"], [1, "progress-info"], [1, "progress-bar-wrap"], [1, "progress-bar-fill"], [1, "view-toggle", 3, "click"], [3, "name"], ["class", "step-content", 4, "ngIf"], ["class", "success-screen", 4, "ngIf"], [1, "step-content"], [4, "ngFor", "ngForOf"], ["class", "step-item", 3, "animation-delay", 4, "ngIf"], [1, "step-item"], [1, "step-connector"], [1, "step-icon-circle"], ["class", "line", 3, "completed", 4, "ngIf"], [1, "step-details"], [1, "step-meta"], [1, "pm-badge"], ["class", "code-block", 4, "ngIf"], [1, "completion-check", 3, "click"], [1, "checkbox"], ["name", "checkmark-sharp"], [1, "line"], [1, "code-block"], ["title", "Copy to clipboard", 1, "copy-btn", 3, "click"], ["name", "copy-outline"], [1, "success-screen"], [1, "success-icon"], ["name", "trophy-outline"], [2, "display", "flex", "gap", "16px", "justify-content", "center"], [1, "pm-btn", "pm-btn-primary", 3, "click"], ["name", "refresh-outline"], [1, "pm-btn", "pm-btn-outline", 3, "click"]], template: function GuideComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "main", 0)(2, "div", 1)(3, "header", 2)(4, "span", 3);
        \u0275\u0275text(5, "MISSION PROTOCOL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "Pegasus Deployment Orbit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Synchronize your workstation with the Pegasus ecosystem using our interactive command guide.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 4)(11, "button", 5);
        \u0275\u0275listener("click", function GuideComponent_Template_button_click_11_listener() {
          return ctx.setTab("setup");
        });
        \u0275\u0275element(12, "ion-icon", 6);
        \u0275\u0275text(13, " System Setup ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 5);
        \u0275\u0275listener("click", function GuideComponent_Template_button_click_14_listener() {
          return ctx.setTab("usage");
        });
        \u0275\u0275element(15, "ion-icon", 7);
        \u0275\u0275text(16, " Operational Guide ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "span");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 11);
        \u0275\u0275element(24, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "button", 13);
        \u0275\u0275listener("click", function GuideComponent_Template_button_click_25_listener() {
          return ctx.toggleShowAll();
        });
        \u0275\u0275element(26, "ion-icon", 14);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, GuideComponent_div_28_Template, 2, 1, "div", 15)(29, GuideComponent_div_29_Template, 13, 2, "div", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(30, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275classProp("active", ctx.activeTab === "setup");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.activeTab === "usage");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("MISSION PROGRESS: ", \u0275\u0275pipeBind2(22, 13, ctx.progress, "1.0-0"), "%");
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("width", ctx.progress, "%");
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.showAllSteps);
        \u0275\u0275advance();
        \u0275\u0275property("name", ctx.showAllSteps ? "layers-outline" : "list-outline");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.showAllSteps ? "Sequential Mode" : "Show All Steps", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.allCompleted || ctx.showAllSteps);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.allCompleted && !ctx.showAllSteps);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, HeaderComponent, FooterComponent], styles: ['\n\n.guide-page[_ngcontent-%COMP%] {\n  padding: 120px 0 80px;\n  min-height: 100vh;\n  background: var(--pm-background);\n  position: relative;\n  overflow: hidden;\n}\n.guide-page[_ngcontent-%COMP%]::before, \n.guide-page[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  background: var(--pm-gradient-primary);\n  filter: blur(80px);\n  opacity: 0.1;\n  z-index: -1;\n}\n.guide-page[_ngcontent-%COMP%]::before {\n  top: 10%;\n  left: -100px;\n}\n.guide-page[_ngcontent-%COMP%]::after {\n  bottom: 10%;\n  right: -100px;\n  background: var(--pm-gradient-cool);\n}\n.guide-container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.guide-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 48px;\n}\n.guide-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 6px 16px;\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--ion-color-primary);\n  border-radius: 99px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  margin-bottom: 16px;\n  border: 1px solid rgba(99, 102, 241, 0.2);\n}\n.guide-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800;\n  background: var(--pm-gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-bottom: 16px;\n}\n.guide-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  font-size: 1.1rem;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.guide-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 40px;\n}\n.guide-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border-radius: 12px;\n  border: 1px solid var(--pm-border);\n  background: var(--pm-surface);\n  color: var(--pm-text-secondary);\n  font-weight: 600;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.guide-tabs[_ngcontent-%COMP%]   .tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--pm-gradient-primary);\n  color: white;\n  border-color: transparent;\n  box-shadow: 0 8px 16px rgba(99, 102, 241, 0.2);\n}\n.guide-tabs[_ngcontent-%COMP%]   .tab-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--pm-surface-muted);\n  transform: translateY(-2px);\n}\n.guide-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  border-radius: 24px;\n  padding: 40px;\n  box-shadow: var(--pm-shadow-xl);\n  position: relative;\n  min-height: 400px;\n}\n.guide-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.guide-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  color: var(--pm-text-muted);\n  margin-bottom: 4px;\n}\n.guide-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-bar-wrap[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 6px;\n  background: var(--pm-surface-muted);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.guide-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-bar-wrap[_ngcontent-%COMP%]   .progress-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--pm-gradient-primary);\n  transition: width 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.guide-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid var(--pm-border);\n  padding: 8px 16px;\n  border-radius: 8px;\n  color: var(--pm-text-secondary);\n  font-size: 0.85rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.guide-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .view-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--pm-surface-muted);\n}\n.guide-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .view-toggle.active[_ngcontent-%COMP%] {\n  background: var(--pm-surface-subtle);\n  color: var(--pm-text-primary);\n}\n.step-content.single-step[_ngcontent-%COMP%] {\n  animation: fadeIn 0.5s ease;\n}\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin-bottom: 32px;\n  opacity: 0;\n  animation: fadeInUp 0.5s ease forwards;\n}\n.step-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.step-item[_ngcontent-%COMP%]   .step-connector[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.step-item[_ngcontent-%COMP%]   .step-connector[_ngcontent-%COMP%]   .step-icon-circle[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--pm-surface-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  color: var(--pm-text-secondary);\n  border: 2px solid transparent;\n  transition: all 0.3s;\n}\n.step-item[_ngcontent-%COMP%]   .step-connector[_ngcontent-%COMP%]   .step-icon-circle.completed[_ngcontent-%COMP%] {\n  background: var(--pm-gradient-success);\n  color: white;\n}\n.step-item[_ngcontent-%COMP%]   .step-connector[_ngcontent-%COMP%]   .step-icon-circle.active[_ngcontent-%COMP%] {\n  background: white;\n  border-color: var(--ion-color-primary);\n  color: var(--ion-color-primary);\n  box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);\n}\n.step-item[_ngcontent-%COMP%]   .step-connector[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 2px;\n  background: var(--pm-border);\n  margin: 8px 0;\n}\n.step-item[_ngcontent-%COMP%]   .step-connector[_ngcontent-%COMP%]   .line.completed[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary);\n}\n.step-item[_ngcontent-%COMP%]   .step-details[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-bottom: 24px;\n}\n.step-item[_ngcontent-%COMP%]   .step-details[_ngcontent-%COMP%]   .step-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n.step-item[_ngcontent-%COMP%]   .step-details[_ngcontent-%COMP%]   .step-meta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 4px;\n  color: var(--pm-text-primary);\n}\n.step-item[_ngcontent-%COMP%]   .step-details[_ngcontent-%COMP%]   .step-meta[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--pm-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.step-item[_ngcontent-%COMP%]   .step-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  margin-bottom: 16px;\n  line-height: 1.6;\n}\n.step-item[_ngcontent-%COMP%]   .step-details[_ngcontent-%COMP%]   .code-block[_ngcontent-%COMP%] {\n  background: #1e1e2e;\n  border-radius: 12px;\n  padding: 16px;\n  position: relative;\n  margin-bottom: 16px;\n}\n.step-item[_ngcontent-%COMP%]   .step-details[_ngcontent-%COMP%]   .code-block[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  color: #cdd6f4;\n  font-family:\n    "Fira Code",\n    "Courier New",\n    monospace;\n  font-size: 0.9rem;\n  white-space: pre-wrap;\n}\n.step-item[_ngcontent-%COMP%]   .step-details[_ngcontent-%COMP%]   .code-block[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  color: #a6adc8;\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.step-item[_ngcontent-%COMP%]   .step-details[_ngcontent-%COMP%]   .code-block[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n.step-item[_ngcontent-%COMP%]   .step-details[_ngcontent-%COMP%]   .completion-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.step-item[_ngcontent-%COMP%]   .step-details[_ngcontent-%COMP%]   .completion-check[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border: 2px solid var(--pm-border);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n  color: transparent;\n}\n.step-item[_ngcontent-%COMP%]   .step-details[_ngcontent-%COMP%]   .completion-check[_ngcontent-%COMP%]   .checkbox.checked[_ngcontent-%COMP%] {\n  background: var(--ion-color-secondary);\n  border-color: var(--ion-color-secondary);\n  color: white;\n}\n.step-item[_ngcontent-%COMP%]   .step-details[_ngcontent-%COMP%]   .completion-check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: var(--pm-text-secondary);\n}\n.success-screen[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 0;\n  animation: scaleIn 0.5s ease;\n}\n.success-screen[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: var(--pm-gradient-success);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3rem;\n  margin: 0 auto 24px;\n  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);\n}\n.success-screen[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 12px;\n}\n.success-screen[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  margin-bottom: 32px;\n}\n@media (max-width: 768px) {\n  .guide-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.25rem;\n  }\n  .guide-card[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .guide-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 20px;\n    align-items: flex-start;\n  }\n  .guide-card[_ngcontent-%COMP%]   .card-top[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-bar-wrap[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 250px;\n  }\n}\n/*# sourceMappingURL=guide.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GuideComponent, { className: "GuideComponent", filePath: "src\\app\\pages\\guide\\guide.component.ts", lineNumber: 26 });
})();
export {
  GuideComponent
};
//# sourceMappingURL=chunk-3WN5GW3D.js.map

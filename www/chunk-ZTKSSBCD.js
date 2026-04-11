import {
  ProductCardComponent
} from "./chunk-OGALUAFF.js";
import {
  SeoService
} from "./chunk-JZOLBTDT.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-HAEO2BL6.js";
import {
  AuthService,
  FooterComponent,
  HeaderComponent,
  MarketplaceService
} from "./chunk-BQ6R7HPJ.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  DecimalPipe,
  DomSanitizer,
  HttpClient,
  NgForOf,
  NgIf,
  RouterLink,
  __async,
  __spreadProps,
  __spreadValues,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PLEPB4GM.js";

// src/app/components/guide-widget/guide-widget.component.ts
function GuideWidgetComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275element(1, "ion-icon", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Fresh: ", ctx_r0.lastRefreshed, " ");
  }
}
function GuideWidgetComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function GuideWidgetComponent_div_16_Template_div_click_0_listener() {
      const step_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openDetails(step_r3));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275element(2, "ion-icon", 19);
    \u0275\u0275elementStart(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 21)(6, "span", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 24);
    \u0275\u0275listener("click", function GuideWidgetComponent_div_16_Template_div_click_10_listener($event) {
      const i_r4 = \u0275\u0275restoreView(_r2).index;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleStep(i_r4, $event));
    });
    \u0275\u0275element(11, "ion-icon", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275classProp("completed", step_r3.completed);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", step_r3.completed ? "checkmark-circle" : step_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r3.subtitle);
    \u0275\u0275advance();
    \u0275\u0275classProp("checked", step_r3.completed);
  }
}
function GuideWidgetComponent_div_20_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "label");
    \u0275\u0275text(2, "EXECUTIVE COMMAND:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "code");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 45);
    \u0275\u0275listener("click", function GuideWidgetComponent_div_20_div_15_Template_button_click_6_listener() {
      let tmp_3_0;
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyCode((tmp_3_0 = ctx_r0.selectedStep()) == null ? null : tmp_3_0.code));
    });
    \u0275\u0275element(7, "ion-icon", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.selectedStep()) == null ? null : tmp_2_0.code);
  }
}
function GuideWidgetComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function GuideWidgetComponent_div_20_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDetails());
    });
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275listener("click", function GuideWidgetComponent_div_20_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 28)(3, "div", 29);
    \u0275\u0275element(4, "ion-icon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 30)(6, "span", 31);
    \u0275\u0275text(7, "MISSION BRIEFING");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 32);
    \u0275\u0275listener("click", function GuideWidgetComponent_div_20_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDetails());
    });
    \u0275\u0275text(11, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 33)(13, "p", 34);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, GuideWidgetComponent_div_20_div_15_Template, 8, 1, "div", 35);
    \u0275\u0275elementStart(16, "div", 36)(17, "label");
    \u0275\u0275text(18, "CORE OBJECTIVE:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 37);
    \u0275\u0275element(20, "ion-icon", 38);
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "div", 39)(24, "button", 40);
    \u0275\u0275listener("click", function GuideWidgetComponent_div_20_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDetails());
    });
    \u0275\u0275text(25, "Dismiss");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 41);
    \u0275\u0275listener("click", function GuideWidgetComponent_div_20_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.completeAndClose(ctx_r0.selectedStep()));
    });
    \u0275\u0275element(27, "ion-icon", 42);
    \u0275\u0275text(28, " Complete Mission ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("name", (tmp_1_0 = ctx_r0.selectedStep()) == null ? null : tmp_1_0.icon);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_2_0 = ctx_r0.selectedStep()) == null ? null : tmp_2_0.title);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((tmp_3_0 = ctx_r0.selectedStep()) == null ? null : tmp_3_0.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r0.selectedStep()) == null ? null : tmp_4_0.code);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r0.selectedStep()) == null ? null : tmp_5_0.subtitle);
  }
}
var GuideWidgetComponent = class _GuideWidgetComponent {
  constructor() {
    this.http = inject(HttpClient);
    this.steps = [];
    this.lastRefreshed = null;
    this.selectedStep = signal(null);
  }
  get progress() {
    if (this.steps.length === 0)
      return 0;
    const completed = this.steps.filter((s) => s.completed).length;
    return completed / this.steps.length * 100;
  }
  ngOnInit() {
    this.http.get("assets/guide-data.json").subscribe((data) => {
      this.lastRefreshed = data.lastRefreshed || null;
      this.steps = data.usageSteps.map((s) => __spreadProps(__spreadValues({}, s), { completed: false }));
      const saved = localStorage.getItem("pegasus_guide_progress");
      if (saved) {
        const completedIds = JSON.parse(saved);
        this.steps.forEach((s) => {
          if (completedIds.includes(s.id))
            s.completed = true;
        });
      }
    });
  }
  toggleStep(index, event) {
    if (event)
      event.stopPropagation();
    this.steps[index].completed = !this.steps[index].completed;
    this.saveProgress();
  }
  openDetails(step) {
    this.selectedStep.set(step);
  }
  closeDetails() {
    this.selectedStep.set(null);
  }
  completeAndClose(step) {
    const idx = this.steps.findIndex((s) => s.id === step.id);
    if (idx !== -1) {
      this.steps[idx].completed = true;
      this.saveProgress();
    }
    this.closeDetails();
  }
  copyCode(code) {
    navigator.clipboard.writeText(code);
  }
  resetProtocol() {
    this.steps.forEach((s) => s.completed = false);
    this.saveProgress();
  }
  saveProgress() {
    const completedIds = this.steps.filter((s) => s.completed).map((s) => s.id);
    localStorage.setItem("pegasus_guide_progress", JSON.stringify(completedIds));
  }
  static {
    this.\u0275fac = function GuideWidgetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GuideWidgetComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GuideWidgetComponent, selectors: [["app-guide-widget"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 9, consts: [[1, "guide-widget-card", "fade-in-up"], [1, "widget-header"], [1, "header-main"], [1, "protocol-badge"], ["class", "last-sync", 4, "ngIf"], [1, "progress-ring"], ["viewBox", "0 0 36 36", 1, "circular-chart"], ["d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle-bg"], ["d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle"], ["x", "18", "y", "20.35", 1, "percentage"], [1, "steps-compact"], ["class", "step-mini", 3, "completed", "click", 4, "ngFor", "ngForOf"], [1, "expand-btn", "pm-btn", "pm-btn-ghost", "pm-btn-sm", 3, "click"], ["name", "refresh-outline"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "last-sync"], ["name", "time-outline"], [1, "step-mini", 3, "click"], [1, "icon-box"], [3, "name"], [1, "step-num"], [1, "step-info"], [1, "step-title"], [1, "step-sub"], [1, "check-box", 3, "click"], ["name", "checkmark-sharp"], [1, "modal-overlay", 3, "click"], [1, "modal-content", "mission-briefing", 3, "click"], [1, "modal-header"], [1, "header-icon"], [1, "header-title"], [1, "badge"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "mission-desc"], ["class", "action-zone", 4, "ngIf"], [1, "objective-list"], [1, "objective-item"], ["name", "radio-button-on-outline"], [1, "modal-footer"], [1, "pm-btn", "pm-btn-outline", 3, "click"], [1, "pm-btn", "pm-btn-primary", 3, "click"], ["name", "checkmark-done-outline"], [1, "action-zone"], [1, "code-box"], [1, "copy-btn", 3, "click"], ["name", "copy-outline"]], template: function GuideWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "OPERATIONAL PROTOCOL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h3");
        \u0275\u0275text(6, "Deployment Guide");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, GuideWidgetComponent_span_7_Template, 3, 1, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 6);
        \u0275\u0275element(10, "path", 7)(11, "path", 8);
        \u0275\u0275elementStart(12, "text", 9);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "number");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(15, "div", 10);
        \u0275\u0275template(16, GuideWidgetComponent_div_16_Template, 12, 8, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 12);
        \u0275\u0275listener("click", function GuideWidgetComponent_Template_button_click_17_listener() {
          return ctx.resetProtocol();
        });
        \u0275\u0275element(18, "ion-icon", 13);
        \u0275\u0275text(19, " Reset Progress ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(20, GuideWidgetComponent_div_20_Template, 29, 5, "div", 14);
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.lastRefreshed);
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("stroke-dasharray", ctx.progress + ", 100");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 6, ctx.progress, "1.0-0"), "%");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.steps);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.selectedStep());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe], styles: ['\n\n.guide-widget-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-lg);\n  padding: 20px;\n  box-shadow: var(--pm-shadow-sm);\n  position: sticky;\n  top: 100px;\n  margin-left: 16px;\n  width: 280px;\n  animation: _ngcontent-%COMP%_fadeInUp 0.5s ease;\n}\n.widget-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.protocol-badge[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 800;\n  color: var(--pm-text-muted);\n  letter-spacing: 1px;\n  margin-bottom: 4px;\n}\n.header-main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0;\n  color: var(--pm-text-primary);\n}\n.last-sync[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 9px;\n  font-weight: 600;\n  color: #10B981;\n  margin-top: 4px;\n}\n.progress-ring[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n}\n.circular-chart[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n.circle-bg[_ngcontent-%COMP%] {\n  stroke: var(--pm-surface-muted);\n  stroke-width: 3.8;\n  fill: none;\n}\n.circle[_ngcontent-%COMP%] {\n  stroke: var(--ion-color-primary);\n  stroke-width: 3.8;\n  stroke-linecap: round;\n  fill: none;\n  transition: stroke-dasharray 0.3s ease;\n}\n.percentage[_ngcontent-%COMP%] {\n  fill: var(--pm-text-primary);\n  font-family: inherit;\n  font-size: 9px;\n  font-weight: 700;\n  text-anchor: middle;\n}\n.steps-compact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.step-mini[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px;\n  border-radius: var(--pm-radius-md);\n  background: var(--pm-surface-muted);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  border: 1px solid transparent;\n  &:hover {\n    background: white;\n    border-color: var(--pm-border);\n    transform: translateX(4px);\n  }\n  &.completed {\n    background: rgba(16, 185, 129, 0.05);\n    .icon-box {\n      background: var(--pm-gradient-success);\n      color: white;\n    }\n    .step-title {\n      color: var(--pm-text-muted);\n      text-decoration: line-through;\n    }\n  }\n}\n.icon-box[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: white;\n  color: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  position: relative;\n  box-shadow: var(--pm-shadow-sm);\n}\n.step-num[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  width: 16px;\n  height: 16px;\n  background: var(--pm-text-primary);\n  color: white;\n  font-size: 9px;\n  font-weight: 800;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid white;\n}\n.step-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.step-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--pm-text-primary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.step-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.check-box[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid var(--pm-border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: transparent;\n  transition: all 0.2s;\n  &:hover {\n    transform: scale(1.1);\n    border-color: var(--ion-color-secondary);\n  }\n  &.checked {\n    background: var(--ion-color-secondary);\n    border-color: var(--ion-color-secondary);\n    color: white;\n  }\n}\n.expand-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 16px;\n  font-size: 0.75rem;\n  justify-content: center;\n  gap: 6px;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.mission-briefing[_ngcontent-%COMP%] {\n  background: white;\n  width: 100%;\n  max-width: 450px;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  animation: _ngcontent-%COMP%_modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.modal-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #0f172a 100%);\n  padding: 24px;\n  color: white;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  position: relative;\n}\n.header-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  color: var(--ion-color-secondary);\n}\n.header-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));\n}\n.header-title[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 800;\n  color: var(--ion-color-secondary);\n  letter-spacing: 2px;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  color: white;\n  font-size: 20px;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &:hover {\n    background: rgba(255, 255, 255, 0.2);\n  }\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.mission-desc[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--pm-text-secondary);\n  line-height: 1.6;\n  margin-bottom: 24px;\n}\n.action-zone[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.objective-list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 800;\n  color: var(--pm-text-muted);\n  margin-bottom: 8px;\n  letter-spacing: 1px;\n}\n.code-box[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  padding: 12px 16px;\n  border-radius: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.code-box[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-weight: 600;\n  color: #1e293b;\n  font-size: 0.9rem;\n}\n.copy-btn[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e2e8f0;\n  padding: 6px;\n  border-radius: 8px;\n  cursor: pointer;\n  color: #64748b;\n  &:hover {\n    color: var(--ion-color-primary);\n    border-color: var(--ion-color-primary);\n  }\n}\n.objective-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 12px;\n  color: var(--pm-text-primary);\n  font-weight: 600;\n  font-size: 0.9rem;\n  ion-icon {\n    color: var(--ion-color-secondary);\n  }\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  background: #f8fafc;\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n}\n@keyframes _ngcontent-%COMP%_modalSlideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1200px) {\n  .guide-widget-card[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=guide-widget.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GuideWidgetComponent, { className: "GuideWidgetComponent", filePath: "src\\app\\components\\guide-widget\\guide-widget.component.ts", lineNumber: 409 });
})();

// src/app/pages/product-detail/product-detail.component.ts
var _c0 = (a0) => ({ category: a0 });
var _c1 = (a0) => ({ q: a0 });
function ProductDetailComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.maximizedImage = null);
    });
    \u0275\u0275elementStart(1, "div", 56);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_div_1_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(2, "img", 57);
    \u0275\u0275elementStart(3, "button", 58);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_div_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.maximizedImage = null);
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.maximizedImage, \u0275\u0275sanitizeUrl);
  }
}
function ProductDetailComponent_div_1_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryIcon());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.product.title.split("\u2014")[0]);
  }
}
function ProductDetailComponent_div_1_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.maximizedImage = ctx_r2.getRawPreviewUrl());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 62);
    \u0275\u0275element(2, "path", 63);
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_div_25_Template_div_click_0_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.activePreviewIndex = i_r6);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r7 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-image", "url(" + img_r7 + ")")("background-size", "cover")("background-position", "center");
    \u0275\u0275classProp("active", ctx_r2.activePreviewIndex === i_r6);
  }
}
function ProductDetailComponent_div_1_div_26_ng_container_2_a_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 73);
  }
  if (rf & 2) {
    const demo_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background-image", "url(" + demo_r8.thumbnailUrl + ")");
  }
}
function ProductDetailComponent_div_1_div_26_ng_container_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 68);
    \u0275\u0275template(1, ProductDetailComponent_div_1_div_26_ng_container_2_a_1_div_1_Template, 1, 2, "div", 69);
    \u0275\u0275elementStart(2, "div", 70)(3, "span", 71);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 72);
    \u0275\u0275text(6, "View Live Demo \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const demo_r8 = ctx.$implicit;
    \u0275\u0275property("href", demo_r8.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demo_r8.thumbnailUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(demo_r8.label);
  }
}
function ProductDetailComponent_div_1_div_26_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductDetailComponent_div_1_div_26_ng_container_2_a_1_Template, 7, 3, "a", 67);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.product.liveDemos);
  }
}
function ProductDetailComponent_div_1_div_26_ng_template_3_a_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 75);
    \u0275\u0275text(1, " \u{1F310} Live Demo ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("href", ctx_r2.product.demoUrl, \u0275\u0275sanitizeUrl);
  }
}
function ProductDetailComponent_div_1_div_26_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductDetailComponent_div_1_div_26_ng_template_3_a_0_Template, 2, 1, "a", 74);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r2.product.demoUrl);
  }
}
function ProductDetailComponent_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275template(2, ProductDetailComponent_div_1_div_26_ng_container_2_Template, 2, 1, "ng-container", 66)(3, ProductDetailComponent_div_1_div_26_ng_template_3_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const singleDemo_r9 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.product.liveDemos && ctx_r2.product.liveDemos.length > 0)("ngIfElse", singleDemo_r9);
  }
}
function ProductDetailComponent_div_1_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_button_30_Template_button_click_0_listener() {
      const tab_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.activeTab = tab_r11.id);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab === tab_r11.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r11.label, " ");
  }
}
function ProductDetailComponent_div_1_div_31_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "h2", 86);
    \u0275\u0275text(2, "Video Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 87);
    \u0275\u0275element(4, "iframe", 88);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r2.safeYoutubeUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function ProductDetailComponent_div_1_div_31_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 90);
    \u0275\u0275element(2, "polyline", 91);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r12 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", f_r12, " ");
  }
}
function ProductDetailComponent_div_1_div_31_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r13);
  }
}
function ProductDetailComponent_div_1_div_31_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r14);
  }
}
function ProductDetailComponent_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    \u0275\u0275template(2, ProductDetailComponent_div_1_div_31_div_2_Template, 5, 1, "div", 79);
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8, "Key Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 80);
    \u0275\u0275template(10, ProductDetailComponent_div_1_div_31_div_10_Template, 4, 1, "div", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h2");
    \u0275\u0275text(12, "Tech Stack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 82);
    \u0275\u0275template(14, ProductDetailComponent_div_1_div_31_span_14_Template, 2, 1, "span", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h2");
    \u0275\u0275text(16, "Compatibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 82);
    \u0275\u0275template(18, ProductDetailComponent_div_1_div_31_span_18_Template, 2, 1, "span", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "h2");
    \u0275\u0275text(20, "Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22, "Includes 6 months of premium support and lifetime updates. Our team responds within 24 hours.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.safeYoutubeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.product.shortDescription);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.product.features);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.product.techStack);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.product.compatibility);
  }
}
function ProductDetailComponent_div_1_div_32_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const s_r15 = ctx.$implicit;
    \u0275\u0275classMap(s_r15);
  }
}
function ProductDetailComponent_div_1_div_32_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "span", 109);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 110);
    \u0275\u0275element(4, "div", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 112);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", bar_r16.stars, "\u2605");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", bar_r16.pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bar_r16.count);
  }
}
function ProductDetailComponent_div_1_div_32_div_18_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275text(1, "\u2713 Verified Purchase");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_1_div_32_div_18_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 127);
  }
  if (rf & 2) {
    const s_r17 = ctx.$implicit;
    \u0275\u0275classMap(s_r17);
  }
}
function ProductDetailComponent_div_1_div_32_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "div", 114)(2, "div", 115)(3, "div", 116)(4, "div", 117);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProductDetailComponent_div_1_div_32_div_18_span_9_Template, 2, 0, "span", 118);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 119)(11, "div", 120);
    \u0275\u0275template(12, ProductDetailComponent_div_1_div_32_div_18_span_12_Template, 1, 2, "span", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 122);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "p", 123);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 124)(19, "button", 125);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const review_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ctx_r2.getReviewColor(review_r18.userName));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(review_r18.userName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r18.userName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", review_r18.verified);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.getStars(review_r18.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 9, review_r18.date, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r18.comment);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F44D} Helpful (", review_r18.helpful, ")");
  }
}
function ProductDetailComponent_div_1_div_32_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128)(1, "p");
    \u0275\u0275text(2, "No reviews yet. Be the first buyer to leave a review!");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 94)(2, "div", 95)(3, "span", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 97);
    \u0275\u0275template(6, ProductDetailComponent_div_1_div_32_span_6_Template, 1, 2, "span", 98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 99);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 100);
    \u0275\u0275template(11, ProductDetailComponent_div_1_div_32_div_11_Template, 7, 4, "div", 101);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 102);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 103);
    \u0275\u0275element(14, "circle", 104)(15, "path", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Only verified buyers can leave reviews after purchase.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ProductDetailComponent_div_1_div_32_div_18_Template, 21, 12, "div", 106)(19, ProductDetailComponent_div_1_div_32_div_19_Template, 3, 0, "div", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.product.rating);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getStars(ctx_r2.product.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 6, ctx_r2.product.totalRatings), " ratings");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.ratingBars);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r2.product.reviews);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.product.reviews.length === 0);
  }
}
function ProductDetailComponent_div_1_div_33_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 134)(1, "div", 115)(2, "div", 116)(3, "div", 117);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "span", 122);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 123);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r2.getReviewColor(c_r20.userName));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r20.userName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r20.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 6, c_r20.date, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r20.text);
  }
}
function ProductDetailComponent_div_1_div_33_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128)(1, "p");
    \u0275\u0275text(2, "No comments yet. Start the conversation!");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_1_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 129)(2, "h3");
    \u0275\u0275text(3, "\u{1F4AC} Leave a Comment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 130);
    \u0275\u0275twoWayListener("ngModelChange", function ProductDetailComponent_div_1_div_33_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCommentText, $event) || (ctx_r2.newCommentText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 131);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_div_33_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitComment());
    });
    \u0275\u0275text(6, " Post Comment ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 132);
    \u0275\u0275template(8, ProductDetailComponent_div_1_div_33_div_8_Template, 13, 9, "div", 133);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProductDetailComponent_div_1_div_33_div_9_Template, 3, 0, "div", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCommentText);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.newCommentText);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.comments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.comments.length === 0);
  }
}
function ProductDetailComponent_div_1_span_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", ctx_r2.product.originalPrice, "");
  }
}
function ProductDetailComponent_div_1_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", ctx_r2.product.discountPercent, "%");
  }
}
function ProductDetailComponent_div_1_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 137)(1, "label", 138)(2, "input", 139);
    \u0275\u0275twoWayListener("ngModelChange", function ProductDetailComponent_div_1_div_61_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.addReskin, $event) || (ctx_r2.addReskin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "\u{1F3A8} Add Reskin Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.addReskin);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Professional rebranding (+$", ctx_r2.product.reskinPrice, ")");
  }
}
function ProductDetailComponent_div_1_a_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 140);
    \u0275\u0275text(1, " View Cart \u2192 ");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_1_span_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 141);
    \u0275\u0275text(1, "\u2713 Verified Author");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_1_span_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.getBadgeIcon(b_r22), " ", ctx_r2.formatBadge(b_r22), "");
  }
}
function ProductDetailComponent_div_1_a_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 143);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r23 = ctx.$implicit;
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(2, _c1, tag_r23));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r23);
  }
}
function ProductDetailComponent_div_1_app_product_card_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 144);
  }
  if (rf & 2) {
    const p_r24 = ctx.$implicit;
    \u0275\u0275property("product", p_r24);
  }
}
function ProductDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, ProductDetailComponent_div_1_div_1_Template, 5, 1, "div", 3);
    \u0275\u0275elementStart(2, "nav", 4)(3, "a", 5);
    \u0275\u0275text(4, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 6);
    \u0275\u0275text(8, "Browse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 8);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "div", 11)(20, "div", 12);
    \u0275\u0275template(21, ProductDetailComponent_div_1_ng_container_21_Template, 5, 2, "ng-container", 13)(22, ProductDetailComponent_div_1_button_22_Template, 3, 0, "button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 15)(24, "div", 16);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_Template_div_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activePreviewIndex = -1);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ProductDetailComponent_div_1_div_25_Template, 1, 8, "div", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, ProductDetailComponent_div_1_div_26_Template, 5, 2, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 19)(28, "div", 20)(29, "div", 21);
    \u0275\u0275template(30, ProductDetailComponent_div_1_button_30_Template, 2, 3, "button", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, ProductDetailComponent_div_1_div_31_Template, 23, 5, "div", 23)(32, ProductDetailComponent_div_1_div_32_Template, 20, 8, "div", 23)(33, ProductDetailComponent_div_1_div_33_Template, 10, 4, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "app-guide-widget");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "aside", 24)(36, "div", 25)(37, "div", 26)(38, "span", 27);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(40, ProductDetailComponent_div_1_span_40_Template, 2, 1, "span", 28)(41, ProductDetailComponent_div_1_span_41_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 30)(43, "label", 31);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_Template_label_click_43_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedLicense = "regular");
    });
    \u0275\u0275element(44, "input", 32);
    \u0275\u0275elementStart(45, "div")(46, "strong");
    \u0275\u0275text(47, "Regular License");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49, "Use in a single end product");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "span", 33);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "label", 31);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_Template_label_click_52_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedLicense = "extended");
    });
    \u0275\u0275element(53, "input", 34);
    \u0275\u0275elementStart(54, "div")(55, "strong");
    \u0275\u0275text(56, "Extended License");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58, "Use in unlimited projects");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "span", 33);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(61, ProductDetailComponent_div_1_div_61_Template, 8, 2, "div", 35);
    \u0275\u0275elementStart(62, "button", 36);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_Template_button_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addToCart());
    });
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275template(64, ProductDetailComponent_div_1_a_64_Template, 2, 0, "a", 37);
    \u0275\u0275elementStart(65, "div", 38)(66, "div", 39)(67, "span");
    \u0275\u0275text(68, "\u{1F4B0} Sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "strong");
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 39)(73, "span");
    \u0275\u0275text(74, "\u{1F441}\uFE0F Views");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "strong");
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div", 39)(79, "span");
    \u0275\u0275text(80, "\u{1F4C5} Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "strong");
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 39)(85, "span");
    \u0275\u0275text(86, "\u{1F4E6} Version");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "strong");
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 39)(90, "span");
    \u0275\u0275text(91, "\u{1F4C1} File Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "strong");
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(94, "div", 40)(95, "div", 41)(96, "div", 42);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "div")(99, "strong");
    \u0275\u0275text(100);
    \u0275\u0275elementEnd();
    \u0275\u0275template(101, ProductDetailComponent_div_1_span_101_Template, 2, 0, "span", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "p", 44);
    \u0275\u0275text(103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 45)(105, "div")(106, "strong");
    \u0275\u0275text(107);
    \u0275\u0275pipe(108, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "span");
    \u0275\u0275text(110, "Sales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(111, "div")(112, "strong");
    \u0275\u0275text(113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "span");
    \u0275\u0275text(115, "Rating");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div")(117, "strong");
    \u0275\u0275text(118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "span");
    \u0275\u0275text(120, "Badges");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(121, "div", 46);
    \u0275\u0275template(122, ProductDetailComponent_div_1_span_122_Template, 2, 2, "span", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 48)(124, "h4");
    \u0275\u0275text(125, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "div", 49);
    \u0275\u0275template(127, ProductDetailComponent_div_1_a_127_Template, 2, 4, "a", 50);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(128, "section", 51)(129, "h2", 52);
    \u0275\u0275text(130, "Related Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "div", 53);
    \u0275\u0275template(132, ProductDetailComponent_div_1_app_product_card_132_Template, 1, 1, "app-product-card", 54);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.maximizedImage);
    \u0275\u0275advance(10);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(72, _c0, ctx_r2.product.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getCategoryLabel());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.product.title);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ctx_r2.activePreviewIndex === -1 ? ctx_r2.product.thumbnailUrl ? "none" : ctx_r2.getGradient() : "none")("background-image", ctx_r2.activePreviewIndex === -1 && ctx_r2.product.thumbnailUrl ? "url(" + ctx_r2.product.thumbnailUrl + ")" : ctx_r2.activePreviewIndex >= 0 ? "url(" + ctx_r2.product.previewImages[ctx_r2.activePreviewIndex] + ")" : "none")("background-size", "cover")("background-position", "center");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activePreviewIndex === -1 && !ctx_r2.product.thumbnailUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getRawPreviewUrl());
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.product.thumbnailUrl ? "none" : ctx_r2.getGradient())("background-image", ctx_r2.product.thumbnailUrl ? "url(" + ctx_r2.product.thumbnailUrl + ")" : "none")("background-size", "cover")("background-position", "center");
    \u0275\u0275classProp("active", ctx_r2.activePreviewIndex === -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.product.previewImages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.product.liveDemos == null ? null : ctx_r2.product.liveDemos.length) || ctx_r2.product.demoUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.tabs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "description");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "reviews");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "comments");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$", ctx_r2.product.price, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.product.originalPrice);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.product.discountPercent);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.selectedLicense === "regular");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selectedLicense === "regular");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", ctx_r2.product.price, "");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.selectedLicense === "extended");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.selectedLicense === "extended");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", ctx_r2.product.price * 3, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.product.hasReskinService);
    \u0275\u0275advance();
    \u0275\u0275classProp("added", ctx_r2.isInCart);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isInCart ? "\u2713 Added to Cart" : "\u{1F6D2} Add to Cart", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isInCart);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 63, ctx_r2.product.totalSales));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 65, ctx_r2.product.totalVisits));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 67, ctx_r2.product.lastUpdated, "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.product.version);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.product.fileSize);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", "linear-gradient(135deg, #6366F1, #A855F7)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.product.author.name.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.product.author.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.product.author.verified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.product.author.bio);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(108, 70, ctx_r2.product.author.totalSales));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.product.author.rating);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.product.author.badges.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.product.author.badges);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.product.tags);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.relatedProducts);
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  constructor() {
    this.marketplace = inject(MarketplaceService);
    this.auth = inject(AuthService);
    this.route = inject(ActivatedRoute);
    this.seo = inject(SeoService);
    this.sanitizer = inject(DomSanitizer);
    this.relatedProducts = [];
    this.activeTab = "description";
    this.selectedLicense = "regular";
    this.addReskin = false;
    this.isInCart = false;
    this.activePreviewIndex = -1;
    this.maximizedImage = null;
    this.newCommentText = "";
    this.comments = [];
    this.tabs = [
      { id: "description", label: "\u{1F4DD} Description" },
      { id: "reviews", label: "\u2B50 Reviews" },
      { id: "comments", label: "\u{1F4AC} Comments" }
    ];
    this.ratingBars = [
      { stars: 5, pct: 72, count: 245 },
      { stars: 4, pct: 18, count: 61 },
      { stars: 3, pct: 6, count: 20 },
      { stars: 2, pct: 3, count: 10 },
      { stars: 1, pct: 1, count: 6 }
    ];
    this.gradientMap = {
      "saas-boilerplates": "linear-gradient(135deg, #10B981, #34D399)",
      "b2b-systems": "linear-gradient(135deg, #3B82F6, #60A5FA)",
      "super-apps": "linear-gradient(135deg, #F97316, #FB923C)",
      "edtech-lms": "linear-gradient(135deg, #8B5CF6, #A78BFA)",
      "pvp-games": "linear-gradient(135deg, #EF4444, #F87171)"
    };
    this.categoryLabels = {
      "saas-boilerplates": "SaaS Boilerplates",
      "b2b-systems": "B2B Systems",
      "super-apps": "Super Apps",
      "edtech-lms": "EdTech LMS",
      "pvp-games": "PvP Games"
    };
    this.categoryIcons = {
      "saas-boilerplates": "\u{1F680}",
      "b2b-systems": "\u{1F3E2}",
      "super-apps": "\u{1F4F1}",
      "edtech-lms": "\u{1F393}",
      "pvp-games": "\u{1F3AE}"
    };
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params["id"];
      this.product = this.marketplace.getProductById(id);
      if (this.product) {
        this.marketplace.trackUniqueVisit(id);
        this.relatedProducts = this.marketplace.getRelatedProducts(this.product);
        this.isInCart = this.marketplace.isInCart(id);
        this.ratingBars = this.computeRatingBars();
        this.marketplace.getComments(id).then((c) => this.comments = c);
        this.seo.updateTitle(this.product.title);
        this.seo.updateDescription(this.product.shortDescription);
        this.seo.updateImage(this.product.thumbnailUrl);
        this.seo.setProductSchema({
          name: this.product.title,
          description: this.product.shortDescription,
          price: this.product.price,
          image: this.product.thumbnailUrl,
          url: `https://selljustcode.com/product/${this.product.id}`,
          rating: this.product.rating,
          ratingCount: this.product.totalRatings,
          seller: this.product.author?.name,
          category: this.product.category
        });
        if (this.product.youtubeUrl) {
          this.safeYoutubeUrl = this.getYoutubeEmbedUrl(this.product.youtubeUrl);
        }
      }
    });
  }
  getYoutubeEmbedUrl(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      const videoId = match[2];
      const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&shere=0`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
    return void 0;
  }
  getRawPreviewUrl() {
    if (!this.product)
      return null;
    if (this.activePreviewIndex === -1) {
      return this.product.thumbnailUrl || null;
    }
    return this.product.previewImages[this.activePreviewIndex] || null;
  }
  getGradient() {
    return this.gradientMap[this.product?.category || ""] || "linear-gradient(135deg, #6366F1, #A855F7)";
  }
  getCategoryLabel() {
    return this.categoryLabels[this.product?.category || ""] || "";
  }
  getCategoryIcon() {
    return this.categoryIcons[this.product?.category || ""] || "\u{1F4E6}";
  }
  getStars(rating) {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    for (let i = 0; i < full; i++)
      stars.push("pm-star-filled");
    if (half)
      stars.push("pm-star-half");
    while (stars.length < 5)
      stars.push("pm-star-empty");
    return stars;
  }
  getReviewColor(name) {
    const colors = ["#6366F1", "#EC4899", "#10B981", "#F97316", "#3B82F6"];
    return colors[name.length % colors.length];
  }
  getBadgeIcon(b) {
    const icons = { "power-elite": "\u{1F451}", "top-seller": "\u{1F3C6}", "trending": "\u{1F4C8}", "exclusive": "\u{1F48E}" };
    return icons[b] || "\u{1F3C5}";
  }
  formatBadge(b) {
    return b.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  }
  addToCart() {
    if (!this.product)
      return;
    this.marketplace.addToCart(this.product, this.selectedLicense, this.addReskin);
    this.isInCart = true;
  }
  submitComment() {
    return __async(this, null, function* () {
      if (!this.product || !this.newCommentText)
        return;
      const user = this.auth.userProfile();
      const comment = {
        userName: user?.displayName || "Anonymous",
        text: this.newCommentText,
        date: /* @__PURE__ */ new Date()
      };
      yield this.marketplace.addComment(this.product.id, comment);
      this.comments = [comment, ...this.comments];
      this.newCommentText = "";
    });
  }
  computeRatingBars() {
    if (!this.product)
      return this.ratingBars;
    const reviews = this.product.reviews;
    const total = reviews.length || 1;
    return [5, 4, 3, 2, 1].map((stars) => {
      const count = reviews.filter((r) => Math.floor(r.rating) === stars).length;
      return { stars, pct: count / total * 100, count };
    });
  }
  static {
    this.\u0275fac = function ProductDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [["singleDemo", ""], ["class", "pm-container page-enter", 4, "ngIf"], [1, "pm-container", "page-enter"], ["class", "lightbox-overlay", 3, "click", 4, "ngIf"], [1, "breadcrumb"], ["routerLink", "/"], ["routerLink", "/browse"], ["routerLink", "/browse", 3, "queryParams"], [1, "current"], [1, "detail-layout"], [1, "detail-main"], [1, "preview-card"], [1, "preview-image"], [4, "ngIf"], ["class", "maximize-btn", 3, "click", 4, "ngIf"], [1, "preview-thumbnails", "pm-gallery-strip"], [1, "thumb-item", 3, "click"], ["class", "thumb-item", 3, "active", "backgroundImage", "backgroundSize", "backgroundPosition", "click", 4, "ngFor", "ngForOf"], ["class", "demo-hub", 4, "ngIf"], [1, "tabs-layout"], [1, "tabs-main"], [1, "detail-tabs"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "tab-content", 4, "ngIf"], [1, "detail-sidebar"], [1, "purchase-card"], [1, "price-section"], [1, "pm-price", 2, "font-size", "2rem"], ["class", "pm-price-original", 4, "ngIf"], ["class", "pm-price-discount", 4, "ngIf"], [1, "license-select"], [1, "license-option", 3, "click"], ["type", "radio", "name", "license", "value", "regular", 3, "checked"], [1, "license-price"], ["type", "radio", "name", "license", "value", "extended", 3, "checked"], ["class", "reskin-option", 4, "ngIf"], [1, "pm-btn", "pm-btn-success", "pm-btn-lg", 2, "width", "100%", "margin-top", "8px", 3, "click"], ["routerLink", "/cart", "class", "pm-btn pm-btn-outline pm-btn-lg", "style", "width:100%; margin-top: 8px; text-align: center", 4, "ngIf"], [1, "purchase-meta"], [1, "meta-row"], [1, "author-card"], [1, "author-header"], [1, "author-av"], ["class", "author-verified", 4, "ngIf"], [1, "author-bio"], [1, "author-stats"], [1, "author-badges"], ["class", "a-badge", 4, "ngFor", "ngForOf"], [1, "tags-card"], [1, "tags-wrap"], ["routerLink", "/browse", "class", "tag-link", 3, "queryParams", 4, "ngFor", "ngForOf"], [1, "pm-section"], [1, "pm-heading-lg", 2, "margin-bottom", "24px"], [1, "related-grid"], [3, "product", 4, "ngFor", "ngForOf"], [1, "lightbox-overlay", 3, "click"], [1, "lightbox-content", 3, "click"], [3, "src"], [1, "lightbox-close", 3, "click"], [1, "preview-icon"], [1, "preview-title"], [1, "maximize-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"], [1, "demo-hub"], [1, "demo-links-grid"], [4, "ngIf", "ngIfElse"], ["target", "_blank", "class", "demo-link-card", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "demo-link-card", 3, "href"], ["class", "demo-thumb", 3, "backgroundImage", 4, "ngIf"], [1, "demo-info"], [1, "demo-label"], [1, "demo-action"], [1, "demo-thumb"], ["target", "_blank", "class", "pm-btn pm-btn-outline pm-btn-lg", "style", "width: 100%; text-align: center; display: flex; justify-content: center; align-items: center; gap: 8px; border-color: rgba(99,102,241,0.2);", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "pm-btn", "pm-btn-outline", "pm-btn-lg", 2, "width", "100%", "text-align", "center", "display", "flex", "justify-content", "center", "align-items", "center", "gap", "8px", "border-color", "rgba(99,102,241,0.2)", 3, "href"], [1, "tab-btn", 3, "click"], [1, "tab-content"], [1, "desc-card"], ["style", "margin-bottom: 24px;", 4, "ngIf"], [1, "features-grid"], ["class", "feature-item", 4, "ngFor", "ngForOf"], [1, "tags-row"], ["class", "tech-tag", 4, "ngFor", "ngForOf"], ["class", "compat-tag", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "24px"], [2, "margin-top", "0"], [1, "video-container"], ["width", "100%", "height", "100%", "frameborder", "0", "allowfullscreen", "", 3, "src"], [1, "feature-item"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#10B981", "stroke-width", "3"], ["points", "20 6 9 17 4 12"], [1, "tech-tag"], [1, "compat-tag"], [1, "reviews-summary"], [1, "rating-big"], [1, "rating-number"], [1, "rating-stars"], [3, "class", 4, "ngFor", "ngForOf"], [1, "rating-total"], [1, "rating-bars"], ["class", "bar-row", 4, "ngFor", "ngForOf"], [1, "purchase-notice"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 16v-4M12 8h.01"], ["class", "review-list", 4, "ngFor", "ngForOf"], ["class", "empty-reviews", 4, "ngIf"], [1, "bar-row"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill"], [1, "bar-count"], [1, "review-list"], [1, "review-card"], [1, "review-header"], [1, "review-user"], [1, "review-avatar"], ["class", "verified", 4, "ngIf"], [1, "review-meta"], [1, "review-stars"], ["style", "font-size:12px", 3, "class", 4, "ngFor", "ngForOf"], [1, "review-date"], [1, "review-comment"], [1, "review-actions"], [1, "pm-btn", "pm-btn-ghost", "pm-btn-sm"], [1, "verified"], [2, "font-size", "12px"], [1, "empty-reviews"], [1, "write-review"], ["placeholder", "Ask a question or share your thoughts...", "rows", "3", 1, "filter-input", 3, "ngModelChange", "ngModel"], [1, "pm-btn", "pm-btn-primary", "pm-btn-sm", 3, "click", "disabled"], [1, "comments-list"], ["class", "comment-card", 4, "ngFor", "ngForOf"], [1, "comment-card"], [1, "pm-price-original"], [1, "pm-price-discount"], [1, "reskin-option"], [1, "reskin-check"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["routerLink", "/cart", 1, "pm-btn", "pm-btn-outline", "pm-btn-lg", 2, "width", "100%", "margin-top", "8px", "text-align", "center"], [1, "author-verified"], [1, "a-badge"], ["routerLink", "/browse", 1, "tag-link", 3, "queryParams"], [3, "product"]], template: function ProductDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275template(1, ProductDetailComponent_div_1_Template, 133, 74, "div", 1);
        \u0275\u0275element(2, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.product);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterLink, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, HeaderComponent, FooterComponent, ProductCardComponent, GuideWidgetComponent], styles: ["\n\n.page-enter[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pageEnter 0.4s ease-out;\n}\n@keyframes _ngcontent-%COMP%_pageEnter {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 20px 0;\n  font-size: 0.8rem;\n  color: var(--pm-text-muted);\n  flex-wrap: wrap;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-primary);\n}\n.breadcrumb[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: var(--pm-text-primary);\n  font-weight: 500;\n}\n.detail-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding-bottom: 32px;\n}\n.detail-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.detail-sidebar[_ngcontent-%COMP%] {\n  width: 360px;\n  flex-shrink: 0;\n}\n.tabs-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  align-items: flex-start;\n}\n.tabs-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.preview-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  overflow: hidden;\n  box-shadow: var(--pm-shadow-card);\n  margin-bottom: 24px;\n}\n.preview-image[_ngcontent-%COMP%] {\n  height: 360px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  position: relative;\n}\n.maximize-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  padding: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background var(--pm-transition-fast);\n  backdrop-filter: blur(4px);\n}\n.maximize-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n.lightbox-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.lightbox-content[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 90vw;\n  max-height: 90vh;\n}\n.lightbox-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 90vh;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.lightbox-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -40px;\n  right: 0px;\n  background: none;\n  border: none;\n  color: white;\n  font-size: 2rem;\n  cursor: pointer;\n}\n.video-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  border-radius: var(--pm-radius-lg);\n  overflow: hidden;\n  box-shadow: var(--pm-shadow-sm);\n}\n.video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.preview-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));\n}\n.preview-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.1rem;\n  font-weight: 600;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 6px 20px;\n  border-radius: var(--pm-radius-full);\n  backdrop-filter: blur(4px);\n}\n.preview-thumbnails[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px;\n}\n.thumb-item[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 48px;\n  border-radius: var(--pm-radius-sm);\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all var(--pm-transition-fast);\n}\n.thumb-item.active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n}\n.thumb-item[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.pm-gallery-strip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  overflow-x: auto;\n  scrollbar-width: thin;\n  scrollbar-color: var(--pm-border) transparent;\n  scroll-behavior: smooth;\n}\n.pm-gallery-strip[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.pm-gallery-strip[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--pm-border);\n  border-radius: 4px;\n}\n.pm-gallery-strip[_ngcontent-%COMP%]   .thumb-item[_ngcontent-%COMP%] {\n  flex: 0 0 80px;\n  height: 60px;\n  box-shadow: var(--pm-shadow-sm);\n}\n.demo-hub[_ngcontent-%COMP%] {\n  padding: 0 16px 16px;\n}\n.demo-links-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.demo-link-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: var(--pm-surface-muted);\n  border: 1px solid var(--pm-border-light);\n  border-radius: var(--pm-radius-md);\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.demo-link-card[_ngcontent-%COMP%]:hover {\n  background: white;\n  border-color: var(--ion-color-primary);\n  transform: translateY(-2px);\n  box-shadow: var(--pm-shadow-sm);\n}\n.demo-thumb[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--pm-radius-sm);\n  background-size: cover;\n  background-position: center;\n  flex-shrink: 0;\n}\n.demo-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.demo-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  font-size: 0.85rem;\n  color: var(--pm-text-primary);\n}\n.demo-action[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--ion-color-primary);\n  font-weight: 500;\n}\n.detail-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 24px;\n  background: var(--pm-surface-muted);\n  border-radius: var(--pm-radius-md);\n  padding: 4px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border: none;\n  background: transparent;\n  font-family: inherit;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--pm-text-secondary);\n  cursor: pointer;\n  border-radius: var(--pm-radius-sm);\n  transition: all var(--pm-transition-fast);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  color: var(--ion-color-primary);\n  box-shadow: var(--pm-shadow-sm);\n}\n.desc-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 32px;\n  border: 1px solid var(--pm-border-light);\n}\n.desc-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 24px 0 12px;\n}\n.desc-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.desc-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  line-height: 1.6;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n  color: var(--pm-text-secondary);\n  padding: 8px 12px;\n  background: var(--pm-surface-muted);\n  border-radius: var(--pm-radius-sm);\n}\n.tags-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tech-tag[_ngcontent-%COMP%], \n.compat-tag[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--pm-radius-full);\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n.tech-tag[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.08);\n  color: #6366F1;\n}\n.compat-tag[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.08);\n  color: #059669;\n}\n.reviews-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding: 24px;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 24px;\n}\n.rating-big[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px 32px;\n}\n.rating-number[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800;\n  color: var(--pm-text-primary);\n  display: block;\n}\n.rating-stars[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #F59E0B;\n  margin: 4px 0;\n  display: flex;\n  gap: 2px;\n  justify-content: center;\n}\n.rating-total[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-muted);\n}\n.rating-bars[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  justify-content: center;\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--pm-text-muted);\n  width: 24px;\n}\n.bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: var(--pm-surface-muted);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #F59E0B;\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}\n.bar-count[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--pm-text-muted);\n  width: 32px;\n  text-align: right;\n}\n.write-review[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.write-review[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\ntextarea.filter-input[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.purchase-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 20px;\n  background: rgba(99, 102, 241, 0.06);\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  border-radius: var(--pm-radius-md);\n  margin-bottom: 20px;\n  font-size: 0.85rem;\n  color: var(--pm-text-secondary);\n}\n.empty-reviews[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--pm-text-muted);\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n}\n.comment-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  padding: 20px;\n  border-radius: var(--pm-radius-md);\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 12px;\n}\n.review-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  padding: 20px;\n  border-radius: var(--pm-radius-md);\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 12px;\n}\n.review-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.review-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.review-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n.review-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n}\n.verified[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #10B981;\n  font-weight: 500;\n}\n.review-meta[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.review-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1px;\n  justify-content: flex-end;\n}\n.review-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.review-comment[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--pm-text-secondary);\n  line-height: 1.6;\n  margin: 0 0 8px;\n}\n.purchase-card[_ngcontent-%COMP%], \n.author-card[_ngcontent-%COMP%], \n.tags-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-card);\n  margin-bottom: 16px;\n}\n.price-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.license-select[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.license-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border: 2px solid var(--pm-border);\n  border-radius: var(--pm-radius-md);\n  cursor: pointer;\n  transition: all var(--pm-transition-fast);\n}\n.license-option.active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.03);\n}\n.license-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--ion-color-primary);\n}\n.license-option[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.license-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n}\n.license-option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.license-price[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1rem;\n  color: var(--pm-text-primary);\n}\n.reskin-option[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.reskin-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.04),\n      rgba(168, 85, 247, 0.06));\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  border-radius: var(--pm-radius-md);\n  cursor: pointer;\n}\n.reskin-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--ion-color-primary);\n}\n.reskin-check[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n}\n.reskin-check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.pm-btn.added[_ngcontent-%COMP%] {\n  background: #10B981;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);\n}\n.purchase-meta[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid var(--pm-border-light);\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 7px 0;\n  font-size: 0.8rem;\n}\n.meta-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--pm-text-muted);\n}\n.meta-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--pm-text-primary);\n}\n.author-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.author-av[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.author-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n}\n.author-verified[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #10B981;\n}\n.author-bio[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-secondary);\n  line-height: 1.5;\n  margin: 0 0 16px;\n}\n.author-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 12px 0;\n  border-top: 1px solid var(--pm-border-light);\n  border-bottom: 1px solid var(--pm-border-light);\n  margin-bottom: 12px;\n}\n.author-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n}\n.author-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  color: var(--pm-text-primary);\n}\n.author-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--pm-text-muted);\n}\n.author-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.a-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  background: rgba(99, 102, 241, 0.08);\n  border-radius: var(--pm-radius-full);\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n.tags-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 0.9rem;\n}\n.tags-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tag-link[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background: var(--pm-surface-muted);\n  border-radius: var(--pm-radius-full);\n  font-size: 0.78rem;\n  color: var(--pm-text-secondary);\n  text-decoration: none;\n  transition: all var(--pm-transition-fast);\n}\n.tag-link[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.08);\n  color: var(--ion-color-primary);\n}\n.related-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n@media (max-width: 1024px) {\n  .detail-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .detail-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .reviews-summary[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src\\app\\pages\\product-detail\\product-detail.component.ts", lineNumber: 809 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=chunk-ZTKSSBCD.js.map

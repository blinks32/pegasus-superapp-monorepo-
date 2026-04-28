import {
  ProductCardComponent
} from "./chunk-CTZWXPCK.js";
import {
  FirestoreDatePipe
} from "./chunk-WKUWVWXY.js";
import {
  AuthService,
  FooterComponent,
  HeaderComponent,
  MarketplaceService
} from "./chunk-FLFQP357.js";
import {
  animate,
  environment,
  style,
  transition,
  trigger
} from "./chunk-NPPW327T.js";
import {
  SeoService
} from "./chunk-OC3PZCFA.js";
import {
  IonContent,
  ModalController
} from "./chunk-S4DXISLP.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-OLW2AZEG.js";
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
  SlicePipe,
  catchError,
  inject,
  interval,
  of,
  signal,
  startWith,
  switchMap,
  takeWhile,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
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
} from "./chunk-RHD5Y3BY.js";
import "./chunk-KWZAHRWA.js";
import "./chunk-BARXMHI7.js";
import "./chunk-BZUELC5Z.js";
import "./chunk-NIIMY5ZY.js";
import "./chunk-LGH3V3RI.js";
import "./chunk-6NWXNUG5.js";
import "./chunk-2NCJX5FR.js";
import "./chunk-WED6EE3F.js";
import "./chunk-RLLLK2NX.js";
import "./chunk-LCF4N3YM.js";
import "./chunk-ORHTZRIY.js";
import "./chunk-FWR7NPWV.js";
import "./chunk-DVBWEDNF.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-EGSMBJJY.js";

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

// src/app/services/ai-build.service.ts
var AiBuildService = class _AiBuildService {
  constructor() {
    this.http = inject(HttpClient);
    this.auth = inject(AuthService);
    this.baseUrl = environment.workerUrl;
  }
  getEffectiveUserId() {
    const user = this.auth.currentUser();
    if (user)
      return user.uid;
    let guestId = localStorage.getItem("ais_guest_id");
    if (!guestId) {
      guestId = `guest_${crypto.randomUUID()}`;
      localStorage.setItem("ais_guest_id", guestId);
    }
    return guestId;
  }
  triggerBuild(productId, productName, prompt, baseSchema) {
    const userId = this.getEffectiveUserId();
    const payload = {
      product_id: productId,
      product_name: productName,
      user_id: userId,
      user_prompt: prompt,
      base_schema: baseSchema,
      forbidden_fields: ["id", "author", "license"],
      // Example forbidden fields
      guardrails: "Ensure the theme fits a luxury aesthetic and the base fare is reasonable."
    };
    return this.http.post(`${this.baseUrl}/build`, payload);
  }
  getBuildStatus(buildId) {
    const userId = this.getEffectiveUserId();
    return this.http.get(`${this.baseUrl}/status?user_id=${userId}&build_id=${buildId}`);
  }
  getHistory() {
    const userId = this.getEffectiveUserId();
    return this.http.get(`${this.baseUrl}/history?user_id=${userId}`).pipe(catchError(() => of([])));
  }
  pollBuildStatus(buildId) {
    return interval(3e3).pipe(startWith(0), switchMap(() => this.getBuildStatus(buildId)), takeWhile((status) => status.status !== "success" && status.status !== "failed" && status.status !== "not_found", true));
  }
  static {
    this.\u0275fac = function AiBuildService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AiBuildService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AiBuildService, factory: _AiBuildService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/ai-build-studio/ai-build-studio.component.ts
function AIBuildStudioComponent_div_19_div_1_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "INITIATE AI BUILD \u{1F680}");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "ESTABLISHING CONNECTION... \u23F3");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "h2");
    \u0275\u0275text(3, "Configure Product: ");
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Instruct the AI to customize the source code architecture. Themes, fares, and logic will be re-baked in real-time.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 21)(9, "textarea", 22);
    \u0275\u0275twoWayListener("ngModelChange", function AIBuildStudioComponent_div_19_div_1_Template_textarea_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.prompt, $event) || (ctx_r1.prompt = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 23);
    \u0275\u0275element(11, "span", 24);
    \u0275\u0275text(12, " NEURAL LINK ACTIVE ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 25)(14, "div", 26)(15, "span");
    \u0275\u0275text(16, "LIVE SCHEMA PREVIEW");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "JSON_CONFIG_V4");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "pre", 27);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 28);
    \u0275\u0275listener("click", function AIBuildStudioComponent_div_19_div_1_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.initiateBuild());
    });
    \u0275\u0275template(23, AIBuildStudioComponent_div_19_div_1_span_23_Template, 2, 0, "span", 29)(24, AIBuildStudioComponent_div_19_div_1_span_24_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.productName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.prompt);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(21, 6, ctx_r1.baseSchema, 0, 300), "...");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.prompt || ctx_r1.isBuilding);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isBuilding);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isBuilding);
  }
}
function AIBuildStudioComponent_div_19_div_2_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F9E0}");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_2_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_2_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F6E0}\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_2_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_2_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4E6}");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_2_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "span", 32);
    \u0275\u0275text(3, "LIVE FACTORY FEED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Mission Control");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Tracking build execution across distributed clusters.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 33)(9, "div", 34)(10, "div", 35);
    \u0275\u0275template(11, AIBuildStudioComponent_div_19_div_2_span_11_Template, 2, 0, "span", 29)(12, AIBuildStudioComponent_div_19_div_2_span_12_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 36)(14, "h3");
    \u0275\u0275text(15, "AI Configuring");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17, "Analyzing requirements, validating schema, and provisioning.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 34)(19, "div", 35);
    \u0275\u0275template(20, AIBuildStudioComponent_div_19_div_2_span_20_Template, 2, 0, "span", 29)(21, AIBuildStudioComponent_div_19_div_2_span_21_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 36)(23, "h3");
    \u0275\u0275text(24, "Compiling");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26, "Triggering GitHub Actions & building application bundle.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 34)(28, "div", 35);
    \u0275\u0275template(29, AIBuildStudioComponent_div_19_div_2_span_29_Template, 2, 0, "span", 29)(30, AIBuildStudioComponent_div_19_div_2_span_30_Template, 2, 0, "span", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 36)(32, "h3");
    \u0275\u0275text(33, "Delivering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35, "Final packaging & delivery of secure link.");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("inactive", !ctx_r1.isCurrentStep("configuring") && !ctx_r1.isPastStep("configuring"));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.isCurrentStep("configuring"))("past", ctx_r1.isPastStep("configuring"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPastStep("configuring"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPastStep("configuring"));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.isCurrentStep("configuring"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("inactive", !ctx_r1.isCurrentStep("compiling") && !ctx_r1.isPastStep("compiling"));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.isCurrentStep("compiling"))("past", ctx_r1.isPastStep("compiling"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPastStep("compiling"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPastStep("compiling"));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.isCurrentStep("compiling"));
    \u0275\u0275advance(5);
    \u0275\u0275classProp("inactive", !ctx_r1.isCurrentStep("success"));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.isCurrentStep("success"))("past", ctx_r1.isPastStep("success"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.currentStatus == null ? null : ctx_r1.currentStatus.status) !== "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.currentStatus == null ? null : ctx_r1.currentStatus.status) === "success");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.isCurrentStep("success"));
  }
}
function AIBuildStudioComponent_div_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Build Ready");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your universal custom app has been successfully compiled and signed.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 39)(8, "a", 40);
    \u0275\u0275text(9, "DOWNLOAD APK \u{1F4F2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 41);
    \u0275\u0275listener("click", function AIBuildStudioComponent_div_19_div_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.viewState = "configurator";
      return \u0275\u0275resetView(ctx_r1.prompt = "");
    });
    \u0275\u0275text(11, "START NEW BUILD");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("href", ctx_r1.currentStatus == null ? null : ctx_r1.currentStatus.downloadUrl, \u0275\u0275sanitizeUrl);
  }
}
function AIBuildStudioComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, AIBuildStudioComponent_div_19_div_1_Template, 25, 10, "div", 15)(2, AIBuildStudioComponent_div_19_div_2_Template, 36, 30, "div", 16)(3, AIBuildStudioComponent_div_19_div_3_Template, 12, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewState === "configurator");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewState === "pipeline");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewState === "success");
  }
}
function AIBuildStudioComponent_div_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "p");
    \u0275\u0275text(2, "No previous builds found in history.");
    \u0275\u0275elementEnd()();
  }
}
function AIBuildStudioComponent_div_20_div_4_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "COMPLETED");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_20_div_4_a_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 54);
    \u0275\u0275text(1, "Download Link \u2192");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const build_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", build_r5.downloadUrl, \u0275\u0275sanitizeUrl);
  }
}
function AIBuildStudioComponent_div_20_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "time");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "fsDate");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 48);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 49);
    \u0275\u0275template(11, AIBuildStudioComponent_div_20_div_4_span_11_Template, 2, 0, "span", 50)(12, AIBuildStudioComponent_div_20_div_4_a_12_Template, 2, 1, "a", 51);
    \u0275\u0275elementStart(13, "button", 52);
    \u0275\u0275listener("click", function AIBuildStudioComponent_div_20_div_4_Template_button_click_13_listener() {
      const build_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reViewBuild(build_r5));
    });
    \u0275\u0275text(14, "View Details");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const build_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(build_r5.product_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, \u0275\u0275pipeBind1(6, 5, build_r5.timestamp), "short"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1('"', build_r5.prompt, '"');
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", build_r5.status === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", build_r5.downloadUrl);
  }
}
function AIBuildStudioComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "h2");
    \u0275\u0275text(2, "Build Archives");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AIBuildStudioComponent_div_20_div_3_Template, 3, 0, "div", 43)(4, AIBuildStudioComponent_div_20_div_4_Template, 15, 10, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.history().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.history());
  }
}
var AIBuildStudioComponent = class _AIBuildStudioComponent {
  constructor() {
    this.modalCtrl = inject(ModalController);
    this.buildService = inject(AiBuildService);
    this.activeTab = "studio";
    this.viewState = "configurator";
    this.prompt = "";
    this.isBuilding = false;
    this.currentStatus = null;
    this.history = signal([]);
  }
  ngOnInit() {
    this.loadHistory();
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
  loadHistory() {
    return __async(this, null, function* () {
      this.activeTab = "history";
      this.buildService.getHistory().subscribe((data) => {
        this.history.set(data.sort((a, b) => {
          const pipe = new FirestoreDatePipe();
          const timeA = pipe.transform(a.timestamp)?.getTime() || 0;
          const timeB = pipe.transform(b.timestamp)?.getTime() || 0;
          return timeB - timeA;
        }));
      });
    });
  }
  initiateBuild() {
    this.isBuilding = true;
    this.buildService.triggerBuild(this.productId, this.productName, this.prompt, this.baseSchema).subscribe({
      next: (res) => {
        const buildId = res.build_id;
        this.viewState = "pipeline";
        this.startPolling(buildId);
      },
      error: (err) => {
        console.error(err);
        this.isBuilding = false;
        alert("Failed to initiate build. Please check your neural link.");
      }
    });
  }
  startPolling(buildId) {
    this.buildService.pollBuildStatus(buildId).subscribe({
      next: (status) => {
        this.currentStatus = status;
        if (status.status === "success") {
          this.viewState = "success";
          this.isBuilding = false;
        }
      },
      error: (err) => {
        console.error(err);
        this.isBuilding = false;
      }
    });
  }
  reViewBuild(build) {
    alert(`Build ID: ${build.id}
Status: ${build.status}
Prompt: ${build.prompt}`);
  }
  // Stepper Logic
  isCurrentStep(step) {
    return this.currentStatus?.status === step;
  }
  isPastStep(step) {
    const steps = ["configuring", "compiling", "success"];
    const currentIndex = steps.indexOf(this.currentStatus?.status || "configuring");
    const stepIndex = steps.indexOf(step);
    return currentIndex > stepIndex;
  }
  static {
    this.\u0275fac = function AIBuildStudioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AIBuildStudioComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AIBuildStudioComponent, selectors: [["app-ai-build-studio"]], inputs: { productId: "productId", productName: "productName", baseSchema: "baseSchema" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 6, consts: [[1, "ais-root"], [1, "ais-header"], [1, "header-brand"], [1, "brand-icon"], [1, "header-text"], [1, "close-btn", 3, "click"], [1, "ais-nav"], [1, "nav-item", 3, "click"], [1, "ais-body"], ["class", "view-section", 4, "ngIf"], ["class", "history-view", 4, "ngIf"], [1, "ais-footer"], [1, "cluster-info"], [1, "pulse-dot"], [1, "view-section"], ["class", "space-y-8", 4, "ngIf"], ["class", "space-y-12", 4, "ngIf"], ["class", "success-view", 4, "ngIf"], [1, "space-y-8"], [1, "section-header"], [2, "color", "var(--ion-color-primary)"], [1, "prompt-container"], ["placeholder", "e.g., 'Modern dark theme with gold accents, set base fare to $5.00...'", 1, "prompt-textarea", 3, "ngModelChange", "ngModel"], [1, "prompt-status"], [1, "status-dot"], [1, "schema-preview"], [1, "preview-header"], [1, "preview-code"], [1, "ais-action-btn", 3, "click", "disabled"], [4, "ngIf"], [1, "space-y-12"], [1, "status-header"], [1, "status-tag"], [1, "ais-stepper"], [1, "step-item"], [1, "step-circle"], [1, "step-info"], [1, "success-view"], [1, "success-icon"], [1, "space-y-4"], ["target", "_blank", 1, "ais-action-btn", 2, "text-decoration", "none", "display", "block", 3, "href"], [1, "pm-btn", "pm-btn-ghost", 2, "width", "100%", 3, "click"], [1, "history-view"], ["style", "padding: 100px 0; text-align: center; color: var(--pm-text-muted)", 4, "ngIf"], ["class", "history-card", 4, "ngFor", "ngForOf"], [2, "padding", "100px 0", "text-align", "center", "color", "var(--pm-text-muted)"], [1, "history-card"], [1, "card-top"], [1, "card-prompt"], [1, "card-footer"], ["class", "status-pill ready", 4, "ngIf"], ["target", "_blank", "style", "color: var(--ion-color-primary)", 3, "href", 4, "ngIf"], [3, "click"], [1, "status-pill", "ready"], ["target", "_blank", 2, "color", "var(--ion-color-primary)", 3, "href"]], template: function AIBuildStudioComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-content")(1, "div", 0)(2, "header", 1)(3, "div", 2)(4, "div", 3);
        \u0275\u0275text(5, "\u2728");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4)(7, "h1");
        \u0275\u0275text(8, "AI BUILD STUDIO");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "Universal Factory Hub v2.0");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "button", 5);
        \u0275\u0275listener("click", function AIBuildStudioComponent_Template_button_click_11_listener() {
          return ctx.dismiss();
        });
        \u0275\u0275text(12, "\xD7");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "nav", 6)(14, "button", 7);
        \u0275\u0275listener("click", function AIBuildStudioComponent_Template_button_click_14_listener() {
          return ctx.activeTab = "studio";
        });
        \u0275\u0275text(15, "Studio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 7);
        \u0275\u0275listener("click", function AIBuildStudioComponent_Template_button_click_16_listener() {
          return ctx.loadHistory();
        });
        \u0275\u0275text(17, "Archives");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 8);
        \u0275\u0275template(19, AIBuildStudioComponent_div_19_Template, 4, 3, "div", 9)(20, AIBuildStudioComponent_div_20_Template, 5, 2, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "footer", 11)(22, "div", 12);
        \u0275\u0275element(23, "span", 13);
        \u0275\u0275text(24, " NEURAL-LINK-US-EAST-1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div");
        \u0275\u0275text(26, "POWERED BY SELLJUSTCODE");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275classProp("active", ctx.activeTab === "studio");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "history");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.activeTab === "studio");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "history");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IonContent, FirestoreDatePipe], styles: ['@charset "UTF-8";\n\n\n\n[_ngcontent-%COMP%]:root {\n  --ion-color-primary: #6366F1;\n  --ion-color-primary-rgb:\n    99,\n    102,\n    241;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb:\n    255,\n    255,\n    255;\n  --ion-color-primary-shade: #5558d5;\n  --ion-color-primary-tint: #737af2;\n  --ion-color-secondary: #10B981;\n  --ion-color-secondary-rgb:\n    16,\n    185,\n    129;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb:\n    255,\n    255,\n    255;\n  --ion-color-secondary-shade: #0ea372;\n  --ion-color-secondary-tint: #28c08e;\n  --ion-color-tertiary: #F59E0B;\n  --ion-color-tertiary-rgb:\n    245,\n    158,\n    11;\n  --ion-color-tertiary-contrast: #000000;\n  --ion-color-tertiary-contrast-rgb:\n    0,\n    0,\n    0;\n  --ion-color-tertiary-shade: #d88b0a;\n  --ion-color-tertiary-tint: #f6a823;\n  --ion-color-success: #10B981;\n  --ion-color-success-rgb:\n    16,\n    185,\n    129;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb:\n    255,\n    255,\n    255;\n  --ion-color-success-shade: #0ea372;\n  --ion-color-success-tint: #28c08e;\n  --ion-color-warning: #F59E0B;\n  --ion-color-warning-rgb:\n    245,\n    158,\n    11;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb:\n    0,\n    0,\n    0;\n  --ion-color-warning-shade: #d88b0a;\n  --ion-color-warning-tint: #f6a823;\n  --ion-color-danger: #EF4444;\n  --ion-color-danger-rgb:\n    239,\n    68,\n    68;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb:\n    255,\n    255,\n    255;\n  --ion-color-danger-shade: #d23c3c;\n  --ion-color-danger-tint: #f15757;\n  --ion-color-dark: #1E293B;\n  --ion-color-dark-rgb:\n    30,\n    41,\n    59;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb:\n    255,\n    255,\n    255;\n  --ion-color-dark-shade: #1a2434;\n  --ion-color-dark-tint: #353f4f;\n  --ion-color-light: #F8FAFC;\n  --ion-color-light-rgb:\n    248,\n    250,\n    252;\n  --ion-color-light-contrast: #1E293B;\n  --ion-color-light-contrast-rgb:\n    30,\n    41,\n    59;\n  --ion-color-light-shade: #daddde;\n  --ion-color-light-tint: #f9fbfc;\n  --ion-color-medium: #64748B;\n  --ion-color-medium-rgb:\n    100,\n    116,\n    139;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb:\n    255,\n    255,\n    255;\n  --ion-color-medium-shade: #58667a;\n  --ion-color-medium-tint: #748297;\n  --ion-font-family:\n    "Plus Jakarta Sans",\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  --ion-background-color: #F8FAFC;\n  --ion-background-color-rgb:\n    248,\n    250,\n    252;\n  --ion-text-color: #1E293B;\n  --ion-text-color-rgb:\n    30,\n    41,\n    59;\n  --ion-toolbar-background: #ffffff;\n  --ion-toolbar-color: #1E293B;\n  --ion-item-background: #ffffff;\n  --ion-card-background: #ffffff;\n  --pm-surface: #ffffff;\n  --pm-surface-elevated: #ffffff;\n  --pm-surface-muted: #F1F5F9;\n  --pm-surface-subtle: #E2E8F0;\n  --pm-border: #E2E8F0;\n  --pm-border-light: #F1F5F9;\n  --pm-text-primary: #0F172A;\n  --pm-text-secondary: #475569;\n  --pm-text-muted: #94A3B8;\n  --pm-text-inverse: #ffffff;\n  --pm-gradient-primary:\n    linear-gradient(\n      135deg,\n      #6366F1 0%,\n      #8B5CF6 50%,\n      #A855F7 100%);\n  --pm-gradient-warm:\n    linear-gradient(\n      135deg,\n      #F97316 0%,\n      #EF4444 50%,\n      #EC4899 100%);\n  --pm-gradient-cool:\n    linear-gradient(\n      135deg,\n      #06B6D4 0%,\n      #3B82F6 50%,\n      #6366F1 100%);\n  --pm-gradient-success:\n    linear-gradient(\n      135deg,\n      #10B981 0%,\n      #059669 100%);\n  --pm-gradient-hero:\n    linear-gradient(\n      135deg,\n      #667EEA 0%,\n      #764BA2 100%);\n  --pm-gradient-card-hover:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.03) 0%,\n      rgba(168, 85, 247, 0.06) 100%);\n  --pm-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.06);\n  --pm-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.06);\n  --pm-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.06);\n  --pm-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04);\n  --pm-shadow-glow: 0 0 20px rgba(99, 102, 241, 0.15);\n  --pm-shadow-card: 0 1px 3px rgba(0,0,0,.06), 0 6px 16px rgba(0,0,0,.04);\n  --pm-shadow-card-hover: 0 4px 12px rgba(0,0,0,.08), 0 12px 28px rgba(0,0,0,.06);\n  --pm-radius-sm: 8px;\n  --pm-radius-md: 12px;\n  --pm-radius-lg: 16px;\n  --pm-radius-xl: 24px;\n  --pm-radius-full: 9999px;\n  --pm-space-xs: 4px;\n  --pm-space-sm: 8px;\n  --pm-space-md: 16px;\n  --pm-space-lg: 24px;\n  --pm-space-xl: 32px;\n  --pm-space-2xl: 48px;\n  --pm-space-3xl: 64px;\n  --pm-text-xs: 0.75rem;\n  --pm-text-sm: 0.875rem;\n  --pm-text-base: 1rem;\n  --pm-text-lg: 1.125rem;\n  --pm-text-xl: 1.25rem;\n  --pm-text-2xl: 1.5rem;\n  --pm-text-3xl: 1.875rem;\n  --pm-text-4xl: 2.25rem;\n  --pm-text-5xl: 3rem;\n  --pm-transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  --pm-transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  --pm-transition-slow: 400ms cubic-bezier(0.4, 0, 0.2, 1);\n  --pm-transition-spring: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  --pm-cat-mobile: #F97316;\n  --pm-cat-web: #3B82F6;\n  --pm-cat-wordpress: #8B5CF6;\n  --pm-cat-javascript: #EAB308;\n  --pm-cat-uikit: #EC4899;\n  --pm-cat-fullstack: #10B981;\n}\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  background: var(--pm-surface);\n  color: var(--pm-text-primary);\n}\n.ais-root[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  background: var(--pm-surface);\n  overflow: hidden;\n}\n.ais-header[_ngcontent-%COMP%] {\n  padding: var(--pm-space-lg);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--pm-border-light);\n  background: #fff;\n}\n.header-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--pm-space-md);\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--pm-radius-md);\n  background: var(--pm-gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  box-shadow: var(--pm-shadow-glow);\n}\n.header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--pm-text-xl);\n  font-weight: 800;\n  margin: 0;\n  background: var(--pm-gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--pm-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 28px;\n  color: var(--pm-text-muted);\n  cursor: pointer;\n  transition: color var(--pm-transition-fast);\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: var(--pm-text-primary);\n}\n.ais-nav[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 var(--pm-space-lg);\n  gap: var(--pm-space-xl);\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.nav-item[_ngcontent-%COMP%] {\n  padding: var(--pm-space-md) 0;\n  font-weight: 600;\n  font-size: var(--pm-text-sm);\n  color: var(--pm-text-secondary);\n  background: none;\n  border: none;\n  border-bottom: 2px solid transparent;\n  cursor: pointer;\n  transition: all var(--pm-transition-base);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  border-bottom-color: var(--ion-color-primary);\n}\n.ais-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: var(--pm-space-lg);\n}\n.view-section[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-out;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--pm-space-xl);\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--pm-text-2xl);\n  margin-bottom: 8px;\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n}\n.prompt-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: var(--pm-space-xl);\n}\n.prompt-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 120px;\n  padding: var(--pm-space-lg);\n  background: var(--pm-surface-muted);\n  border: 2px solid var(--pm-border);\n  border-radius: var(--pm-radius-lg);\n  font-family: inherit;\n  font-size: var(--pm-text-base);\n  color: var(--pm-text-primary);\n  outline: none;\n  transition: all var(--pm-transition-base);\n  resize: vertical;\n}\n.prompt-textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--ion-color-primary);\n  background: #fff;\n  box-shadow: var(--pm-shadow-glow);\n}\n.prompt-status[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--pm-text-muted);\n  text-transform: uppercase;\n}\n.status-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: var(--ion-color-success);\n  border-radius: 50%;\n  box-shadow: 0 0 8px var(--ion-color-success);\n}\n.schema-preview[_ngcontent-%COMP%] {\n  background: #0F172A;\n  border-radius: var(--pm-radius-lg);\n  overflow: hidden;\n  margin-bottom: var(--pm-space-xl);\n  box-shadow: var(--pm-shadow-lg);\n}\n.schema-preview[_ngcontent-%COMP%]   .preview-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.05);\n  display: flex;\n  justify-content: space-between;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: rgba(255, 255, 255, 0.4);\n}\n.schema-preview[_ngcontent-%COMP%]   .preview-code[_ngcontent-%COMP%] {\n  padding: var(--pm-space-lg);\n  margin: 0;\n  font-family:\n    "Courier New",\n    Courier,\n    monospace;\n  font-size: 13px;\n  line-height: 1.6;\n  color: #A78BFA;\n  overflow-x: auto;\n}\n.ais-action-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 18px;\n  background: var(--pm-gradient-primary);\n  color: #fff;\n  border: none;\n  border-radius: var(--pm-radius-lg);\n  font-weight: 700;\n  font-size: var(--pm-text-base);\n  cursor: pointer;\n  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);\n  transition: all var(--pm-transition-base);\n}\n.ais-action-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);\n}\n.ais-action-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ais-stepper[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 40px;\n}\n.ais-stepper[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 19px;\n  top: 5px;\n  bottom: 5px;\n  width: 2px;\n  background: var(--pm-border);\n}\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--pm-space-lg);\n  margin-bottom: var(--pm-space-2xl);\n  position: relative;\n  transition: opacity 0.3s;\n}\n.step-item.inactive[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.step-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #fff;\n  border: 2px solid var(--pm-border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n  font-size: 18px;\n  transition: all 0.4s;\n}\n.step-circle.active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n  box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);\n}\n.step-circle.past[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary);\n  border-color: var(--ion-color-primary);\n  color: #fff;\n}\n.step-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--pm-text-lg);\n  margin-bottom: 4px;\n}\n.step-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--pm-text-sm);\n  color: var(--pm-text-muted);\n}\n.step-info.active[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.status-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--pm-space-2xl);\n}\n.status-header[_ngcontent-%COMP%]   .status-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 12px;\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--ion-color-primary);\n  border-radius: 99px;\n  font-size: 10px;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.success-view[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--pm-space-3xl) 0;\n}\n.success-view[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: var(--ion-color-success);\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 40px;\n  margin: 0 auto 32px;\n  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);\n}\n.success-view[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--pm-text-4xl);\n  margin-bottom: 16px;\n  font-weight: 800;\n}\n.success-view[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  margin-bottom: 32px;\n}\n.history-view[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: var(--pm-space-xl);\n}\n.history-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-lg);\n  padding: var(--pm-space-lg);\n  margin-bottom: var(--pm-space-md);\n  transition: all var(--pm-transition-base);\n}\n.history-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-primary);\n  box-shadow: var(--pm-shadow-md);\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.card-top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--pm-text-lg);\n  color: var(--ion-color-primary);\n}\n.card-top[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--pm-text-muted);\n  text-transform: uppercase;\n}\n.status-pill[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 10px;\n  font-weight: 800;\n}\n.status-pill.ready[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: var(--ion-color-success);\n}\n.card-prompt[_ngcontent-%COMP%] {\n  font-size: var(--pm-text-sm);\n  color: var(--pm-text-secondary);\n  font-style: italic;\n  margin-bottom: 16px;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--pm-space-lg);\n}\n.card-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: var(--pm-text-xs);\n  font-weight: 700;\n}\n.card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--pm-text-muted);\n  cursor: pointer;\n}\n.card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--pm-text-primary);\n}\n.ais-footer[_ngcontent-%COMP%] {\n  padding: var(--pm-space-lg);\n  border-top: 1px solid var(--pm-border-light);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: var(--pm-text-muted);\n}\n.cluster-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pulse-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  background: var(--ion-color-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n}\n/*# sourceMappingURL=ai-build-studio.component.css.map */'], data: { animation: [
      trigger("stateAnim", [
        transition(":enter", [
          style({ opacity: 0, transform: "scale(0.95)" }),
          animate("300ms ease-out", style({ opacity: 1, transform: "scale(1)" }))
        ])
      ])
    ] } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AIBuildStudioComponent, { className: "AIBuildStudioComponent", filePath: "src\\app\\components\\ai-build-studio\\ai-build-studio.component.ts", lineNumber: 190 });
})();

// src/app/pages/product-detail/product-detail.component.ts
var _c0 = (a0) => ({ category: a0 });
var _c1 = (a0) => ({ q: a0 });
function ProductDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275element(2, "div", 5);
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Initializing Pegasus Neural Link...");
    \u0275\u0275elementEnd()()();
  }
}
function ProductDetailComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.maximizedImage = null);
    });
    \u0275\u0275elementStart(1, "div", 77);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_div_1_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(2, "img", 78);
    \u0275\u0275elementStart(3, "button", 79);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_div_1_Template_button_click_3_listener() {
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
function ProductDetailComponent_div_3_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275element(1, "iframe", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.safeYoutubeUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function ProductDetailComponent_div_3_ng_container_53_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 83);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 84);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryIcon());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.product.title.split("\u2014")[0]);
  }
}
function ProductDetailComponent_div_3_ng_container_53_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_ng_container_53_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.maximizedImage = ctx_r2.getRawPreviewUrl());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 86);
    \u0275\u0275element(2, "path", 87);
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_3_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductDetailComponent_div_3_ng_container_53_ng_container_1_Template, 5, 2, "ng-container", 26)(2, ProductDetailComponent_div_3_ng_container_53_button_2_Template, 3, 0, "button", 82);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activePreviewIndex === -1 && !ctx_r2.product.thumbnailUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getRawPreviewUrl());
  }
}
function ProductDetailComponent_div_3_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_div_56_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.activePreviewIndex = "youtube");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 89);
    \u0275\u0275element(2, "path", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-image", "url(" + ctx_r2.getYoutubeThumbnailUrl() + ")")("background-size", "cover")("background-position", "center");
    \u0275\u0275classProp("active", ctx_r2.activePreviewIndex === "youtube");
  }
}
function ProductDetailComponent_div_3_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_div_57_Template_div_click_0_listener() {
      const i_r7 = \u0275\u0275restoreView(_r6).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.activePreviewIndex = i_r7);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r8 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-image", "url(" + img_r8 + ")")("background-size", "cover")("background-position", "center");
    \u0275\u0275classProp("active", ctx_r2.activePreviewIndex === i_r7);
  }
}
function ProductDetailComponent_div_3_div_58_ng_container_2_a_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 100);
  }
  if (rf & 2) {
    const demo_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background-image", "url(" + demo_r9.thumbnailUrl + ")");
  }
}
function ProductDetailComponent_div_3_div_58_ng_container_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 95);
    \u0275\u0275template(1, ProductDetailComponent_div_3_div_58_ng_container_2_a_1_div_1_Template, 1, 2, "div", 96);
    \u0275\u0275elementStart(2, "div", 97)(3, "span", 98);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 99);
    \u0275\u0275text(6, "View Live Demo \u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const demo_r9 = ctx.$implicit;
    \u0275\u0275property("href", demo_r9.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", demo_r9.thumbnailUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(demo_r9.label);
  }
}
function ProductDetailComponent_div_3_div_58_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductDetailComponent_div_3_div_58_ng_container_2_a_1_Template, 7, 3, "a", 94);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.product.liveDemos);
  }
}
function ProductDetailComponent_div_3_div_58_ng_template_3_a_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 102);
    \u0275\u0275text(1, " \u{1F310} Live Demo ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("href", ctx_r2.product.demoUrl, \u0275\u0275sanitizeUrl);
  }
}
function ProductDetailComponent_div_3_div_58_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductDetailComponent_div_3_div_58_ng_template_3_a_0_Template, 2, 1, "a", 101);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r2.product.demoUrl);
  }
}
function ProductDetailComponent_div_3_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92);
    \u0275\u0275template(2, ProductDetailComponent_div_3_div_58_ng_container_2_Template, 2, 1, "ng-container", 93)(3, ProductDetailComponent_div_3_div_58_ng_template_3_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const singleDemo_r10 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.product.liveDemos && ctx_r2.product.liveDemos.length > 0)("ngIfElse", singleDemo_r10);
  }
}
function ProductDetailComponent_div_3_div_59_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275element(1, "pre", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.formattedGuide, \u0275\u0275sanitizeHtml);
  }
}
function ProductDetailComponent_div_3_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_div_59_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.guideExpanded = !ctx_r2.guideExpanded);
    });
    \u0275\u0275elementStart(2, "div", 105)(3, "span", 106);
    \u0275\u0275text(4, "\u{1F4D6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 107);
    \u0275\u0275text(6, "Deployment Guide");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 108);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ProductDetailComponent_div_3_div_59_div_9_Template, 2, 1, "div", 109);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.guideExpanded ? "\u25B2 Collapse" : "\u25BC Expand");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.guideExpanded);
  }
}
function ProductDetailComponent_div_3_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 113);
    \u0275\u0275element(2, "polyline", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r12 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(f_r12);
  }
}
function ProductDetailComponent_div_3_button_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 115);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_button_74_Template_button_click_0_listener() {
      const tab_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.activeTab = tab_r14.id);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab === tab_r14.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r14.label, " ");
  }
}
function ProductDetailComponent_div_3_div_75_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r15);
  }
}
function ProductDetailComponent_div_3_div_75_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 124);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r16);
  }
}
function ProductDetailComponent_div_3_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "div", 117)(2, "div", 34)(3, "h3", 118);
    \u0275\u0275text(4, "Tech Stack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 119);
    \u0275\u0275template(6, ProductDetailComponent_div_3_div_75_span_6_Template, 2, 1, "span", 120);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 121)(8, "h3", 118);
    \u0275\u0275text(9, "Compatibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 119);
    \u0275\u0275template(11, ProductDetailComponent_div_3_div_75_span_11_Template, 2, 1, "span", 122);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 121)(13, "h3", 118);
    \u0275\u0275text(14, "Documentation & Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 36);
    \u0275\u0275text(16, "Includes 6 months of premium support and lifetime updates. Comprehensive documentation is included in the download package. Our team typically responds within 24 hours.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.product.techStack);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.product.compatibility);
  }
}
function ProductDetailComponent_div_3_div_76_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const s_r17 = ctx.$implicit;
    \u0275\u0275classMap(s_r17);
  }
}
function ProductDetailComponent_div_3_div_76_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "span", 140);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 141);
    \u0275\u0275element(4, "div", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 143);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", bar_r18.stars, "\u2605");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", bar_r18.pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bar_r18.count);
  }
}
function ProductDetailComponent_div_3_div_76_div_18_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 157);
    \u0275\u0275text(1, "\u2713 Verified Purchase");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_3_div_76_div_18_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 158);
  }
  if (rf & 2) {
    const s_r19 = ctx.$implicit;
    \u0275\u0275classMap(s_r19);
  }
}
function ProductDetailComponent_div_3_div_76_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144)(1, "div", 145)(2, "div", 146)(3, "div", 147)(4, "div", 148);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProductDetailComponent_div_3_div_76_div_18_span_9_Template, 2, 0, "span", 149);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 150)(11, "div", 151);
    \u0275\u0275template(12, ProductDetailComponent_div_3_div_76_div_18_span_12_Template, 1, 2, "span", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 153);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "fsDate");
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "p", 154);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 155)(20, "button", 156);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const review_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ctx_r2.getReviewColor(review_r20.userName));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(review_r20.userName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r20.userName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", review_r20.verified);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.getStars(review_r20.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 11, \u0275\u0275pipeBind1(15, 9, review_r20.date), "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r20.comment);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F44D} Helpful (", review_r20.helpful, ")");
  }
}
function ProductDetailComponent_div_3_div_76_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159)(1, "p");
    \u0275\u0275text(2, "No reviews yet. Be the first buyer to leave a review!");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_3_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "div", 125)(2, "div", 126)(3, "span", 127);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 128);
    \u0275\u0275template(6, ProductDetailComponent_div_3_div_76_span_6_Template, 1, 2, "span", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 130);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 131);
    \u0275\u0275template(11, ProductDetailComponent_div_3_div_76_div_11_Template, 7, 4, "div", 132);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 133);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 134);
    \u0275\u0275element(14, "circle", 135)(15, "path", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Only verified buyers can leave reviews after purchase.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ProductDetailComponent_div_3_div_76_div_18_Template, 22, 14, "div", 137)(19, ProductDetailComponent_div_3_div_76_div_19_Template, 3, 0, "div", 138);
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
function ProductDetailComponent_div_3_div_77_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 165)(1, "div", 146)(2, "div", 147)(3, "div", 148);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "span", 153);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "fsDate");
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "p", 154);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", ctx_r2.getReviewColor(c_r22.userName));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r22.userName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r22.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 8, \u0275\u0275pipeBind1(10, 6, c_r22.date), "mediumDate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r22.text);
  }
}
function ProductDetailComponent_div_3_div_77_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159)(1, "p");
    \u0275\u0275text(2, "No comments yet. Start the conversation!");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_3_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116)(1, "div", 160)(2, "h3");
    \u0275\u0275text(3, "\u{1F4AC} Leave a Comment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 161);
    \u0275\u0275twoWayListener("ngModelChange", function ProductDetailComponent_div_3_div_77_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCommentText, $event) || (ctx_r2.newCommentText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 162);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_div_77_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitComment());
    });
    \u0275\u0275text(6, " Post Comment ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 163);
    \u0275\u0275template(8, ProductDetailComponent_div_3_div_77_div_8_Template, 14, 11, "div", 164);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProductDetailComponent_div_3_div_77_div_9_Template, 3, 0, "div", 138);
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
function ProductDetailComponent_div_3_span_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 166);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", ctx_r2.product.originalPrice, "");
  }
}
function ProductDetailComponent_div_3_span_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 167);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", ctx_r2.product.discountPercent, "%");
  }
}
function ProductDetailComponent_div_3_div_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 168)(1, "label", 169)(2, "input", 170);
    \u0275\u0275twoWayListener("ngModelChange", function ProductDetailComponent_div_3_div_104_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r23);
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
function ProductDetailComponent_div_3_button_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 171);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_button_107_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.launchAiStudio());
    });
    \u0275\u0275element(1, "div", 172);
    \u0275\u0275elementStart(2, "span", 173)(3, "span", 174);
    \u0275\u0275text(4, "\u2728");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " AI Studio: Customize & Deploy ");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_3_a_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 175);
    \u0275\u0275text(1, " View Cart \u2192 ");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_3_span_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 176);
    \u0275\u0275text(1, "\u2713 Verified Author");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_3_span_167_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 177);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r25 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.getBadgeIcon(b_r25), " ", ctx_r2.formatBadge(b_r25), "");
  }
}
function ProductDetailComponent_div_3_a_172_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 178);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r26 = ctx.$implicit;
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(2, _c1, tag_r26));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r26);
  }
}
function ProductDetailComponent_div_3_app_product_card_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 179);
  }
  if (rf & 2) {
    const p_r27 = ctx.$implicit;
    \u0275\u0275property("product", p_r27);
  }
}
function ProductDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, ProductDetailComponent_div_3_div_1_Template, 5, 1, "div", 7);
    \u0275\u0275elementStart(2, "nav", 8)(3, "a", 9);
    \u0275\u0275text(4, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 10);
    \u0275\u0275text(8, "Browse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 13)(18, "div", 14)(19, "span", 15);
    \u0275\u0275text(20, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 16)(22, "span", 17);
    \u0275\u0275text(23, "\u2605\u2605\u2605\u2605\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 18);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(26, "div", 19);
    \u0275\u0275elementStart(27, "div", 14)(28, "span", 15);
    \u0275\u0275text(29, "Total Sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 20);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "div", 19);
    \u0275\u0275elementStart(34, "div", 14)(35, "span", 15);
    \u0275\u0275text(36, "Total Views");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 20);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(40, "div", 19);
    \u0275\u0275elementStart(41, "div", 14)(42, "span", 15);
    \u0275\u0275text(43, "Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 20);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "fsDate");
    \u0275\u0275pipe(47, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 21)(49, "div", 22)(50, "div", 23)(51, "div", 24);
    \u0275\u0275template(52, ProductDetailComponent_div_3_div_52_Template, 2, 1, "div", 25)(53, ProductDetailComponent_div_3_ng_container_53_Template, 3, 2, "ng-container", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 27)(55, "div", 28);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_Template_div_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activePreviewIndex = -1);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(56, ProductDetailComponent_div_3_div_56_Template, 3, 8, "div", 29)(57, ProductDetailComponent_div_3_div_57_Template, 1, 8, "div", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, ProductDetailComponent_div_3_div_58_Template, 5, 2, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(59, ProductDetailComponent_div_3_div_59_Template, 10, 2, "div", 32);
    \u0275\u0275elementStart(60, "div", 33)(61, "div", 34)(62, "h2", 35);
    \u0275\u0275text(63, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p", 36);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 34)(67, "h2", 35);
    \u0275\u0275text(68, "Key Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 37);
    \u0275\u0275template(70, ProductDetailComponent_div_3_div_70_Template, 5, 1, "div", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 39)(72, "div", 40)(73, "div", 41);
    \u0275\u0275template(74, ProductDetailComponent_div_3_button_74_Template, 2, 3, "button", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275template(75, ProductDetailComponent_div_3_div_75_Template, 17, 2, "div", 43)(76, ProductDetailComponent_div_3_div_76_Template, 20, 8, "div", 43)(77, ProductDetailComponent_div_3_div_77_Template, 10, 4, "div", 43);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "aside", 44)(79, "div", 45)(80, "div", 46)(81, "span", 47);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd();
    \u0275\u0275template(83, ProductDetailComponent_div_3_span_83_Template, 2, 1, "span", 48)(84, ProductDetailComponent_div_3_span_84_Template, 2, 1, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 50)(86, "label", 51);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_Template_label_click_86_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedLicense = "regular");
    });
    \u0275\u0275element(87, "input", 52);
    \u0275\u0275elementStart(88, "div")(89, "strong");
    \u0275\u0275text(90, "Regular License");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "span");
    \u0275\u0275text(92, "Use in a single end product");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "span", 53);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "label", 51);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_Template_label_click_95_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedLicense = "extended");
    });
    \u0275\u0275element(96, "input", 54);
    \u0275\u0275elementStart(97, "div")(98, "strong");
    \u0275\u0275text(99, "Extended License");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "span");
    \u0275\u0275text(101, "Use in unlimited projects");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "span", 53);
    \u0275\u0275text(103);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(104, ProductDetailComponent_div_3_div_104_Template, 8, 2, "div", 55);
    \u0275\u0275elementStart(105, "button", 56);
    \u0275\u0275listener("click", function ProductDetailComponent_div_3_Template_button_click_105_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addToCart());
    });
    \u0275\u0275text(106);
    \u0275\u0275elementEnd();
    \u0275\u0275template(107, ProductDetailComponent_div_3_button_107_Template, 6, 0, "button", 57)(108, ProductDetailComponent_div_3_a_108_Template, 2, 0, "a", 58);
    \u0275\u0275elementStart(109, "div", 59)(110, "div", 60)(111, "span");
    \u0275\u0275text(112, "\u{1F4B0} Sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "strong");
    \u0275\u0275text(114);
    \u0275\u0275pipe(115, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(116, "div", 60)(117, "span");
    \u0275\u0275text(118, "\u{1F441}\uFE0F Views");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "strong");
    \u0275\u0275text(120);
    \u0275\u0275pipe(121, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "div", 60)(123, "span");
    \u0275\u0275text(124, "\u{1F4C5} Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "strong");
    \u0275\u0275text(126);
    \u0275\u0275pipe(127, "fsDate");
    \u0275\u0275pipe(128, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 60)(130, "span");
    \u0275\u0275text(131, "\u{1F4E6} Version");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "strong");
    \u0275\u0275text(133);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "div", 60)(135, "span");
    \u0275\u0275text(136, "\u{1F4C1} File Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "strong");
    \u0275\u0275text(138);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(139, "div", 61)(140, "div", 62)(141, "div", 63);
    \u0275\u0275text(142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "div")(144, "strong");
    \u0275\u0275text(145);
    \u0275\u0275elementEnd();
    \u0275\u0275template(146, ProductDetailComponent_div_3_span_146_Template, 2, 0, "span", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "p", 65);
    \u0275\u0275text(148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "div", 66)(150, "div")(151, "strong");
    \u0275\u0275text(152);
    \u0275\u0275pipe(153, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "span");
    \u0275\u0275text(155, "Sales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "div")(157, "strong");
    \u0275\u0275text(158);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "span");
    \u0275\u0275text(160, "Rating");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(161, "div")(162, "strong");
    \u0275\u0275text(163);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "span");
    \u0275\u0275text(165, "Badges");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(166, "div", 67);
    \u0275\u0275template(167, ProductDetailComponent_div_3_span_167_Template, 2, 2, "span", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "div", 69)(169, "h4");
    \u0275\u0275text(170, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "div", 70);
    \u0275\u0275template(172, ProductDetailComponent_div_3_a_172_Template, 2, 4, "a", 71);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(173, "section", 72)(174, "h2", 73);
    \u0275\u0275text(175, "Related Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "div", 74);
    \u0275\u0275template(177, ProductDetailComponent_div_3_app_product_card_177_Template, 1, 1, "app-product-card", 75);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.maximizedImage);
    \u0275\u0275advance(10);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(92, _c0, ctx_r2.product.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getCategoryLabel());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.product.title);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r2.product.rating);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 72, ctx_r2.product.totalSales));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 74, ctx_r2.product.totalVisits));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 78, \u0275\u0275pipeBind1(46, 76, ctx_r2.product.lastUpdated), "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("background", ctx_r2.activePreviewIndex === -1 ? ctx_r2.product.thumbnailUrl ? "none" : ctx_r2.getGradient() : "none")("background-image", ctx_r2.activePreviewIndex === -1 && ctx_r2.product.thumbnailUrl ? "url(" + ctx_r2.product.thumbnailUrl + ")" : ctx_r2.activePreviewIndex !== -1 && ctx_r2.activePreviewIndex !== "youtube" ? "url(" + ctx_r2.product.previewImages[ctx_r2.activePreviewIndex] + ")" : "none")("background-size", "cover")("background-position", "center");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activePreviewIndex === "youtube");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activePreviewIndex !== "youtube");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r2.product.thumbnailUrl ? "none" : ctx_r2.getGradient())("background-image", ctx_r2.product.thumbnailUrl ? "url(" + ctx_r2.product.thumbnailUrl + ")" : "none")("background-size", "cover")("background-position", "center");
    \u0275\u0275classProp("active", ctx_r2.activePreviewIndex === -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.safeYoutubeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.product.previewImages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.product.liveDemos == null ? null : ctx_r2.product.liveDemos.length) || ctx_r2.product.demoUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.product.deploymentGuide);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.product.shortDescription);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.product.features);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.tabs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "description");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "reviews");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeTab === "comments");
    \u0275\u0275advance(5);
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
    \u0275\u0275textInterpolate1(" ", ctx_r2.isInCart ? "\u2713 Added to Cart" : "\u{1F6D2} Buy Source Code", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.product.aiDeploymentEnabled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isInCart);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(115, 81, ctx_r2.product.totalSales));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(121, 83, ctx_r2.product.totalVisits));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(128, 87, \u0275\u0275pipeBind1(127, 85, ctx_r2.product.lastUpdated), "mediumDate"));
    \u0275\u0275advance(7);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(153, 90, ctx_r2.product.author.totalSales));
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
    this.modalCtrl = inject(ModalController);
    this.relatedProducts = [];
    this.activeTab = "reviews";
    this.selectedLicense = "regular";
    this.addReskin = false;
    this.isInCart = false;
    this.activePreviewIndex = -1;
    this.isLoading = signal(false);
    this.maximizedImage = null;
    this.guideExpanded = false;
    this.newCommentText = "";
    this.comments = [];
    this.tabs = [
      { id: "reviews", label: "\u2B50 Reviews" },
      { id: "comments", label: "\u{1F4AC} Discussion" },
      { id: "description", label: "\u2699\uFE0F Tech Specs" }
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
    this.currentProductId = null;
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.currentProductId = params["id"];
      this.loadProduct(this.currentProductId);
    });
  }
  loadProduct(id) {
    this.isLoading.set(true);
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
    this.isLoading.set(false);
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
    if (this.activePreviewIndex === "youtube")
      return null;
    return this.product.previewImages[this.activePreviewIndex] || null;
  }
  getYoutubeThumbnailUrl() {
    if (!this.product?.youtubeUrl)
      return "";
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = this.product.youtubeUrl.match(regExp);
    if (match && match[2].length === 11) {
      return `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg`;
    }
    return "";
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
  get formattedGuide() {
    if (!this.product?.deploymentGuide)
      return "";
    let esc = this.product.deploymentGuide.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    esc = esc.replace(/^###\s*(.*)$/gim, '<h3 style="margin-top:20px; color:var(--pm-text-primary); font-size:1.1rem">$1</h3>');
    esc = esc.replace(/^##\s*(.*)$/gim, '<h2 style="margin-top:24px; color:var(--pm-text-primary); font-size:1.3rem; border-bottom:1px solid var(--pm-border-light); padding-bottom:4px">$1</h2>');
    esc = esc.replace(/^#\s*(.*)$/gim, '<h1 style="margin-top:28px; color:var(--pm-text-primary); font-size:1.6rem">$1</h1>');
    esc = esc.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--pm-text-primary)">$1</strong>');
    esc = esc.replace(/\*(.*?)\*/g, "<em>$1</em>");
    esc = esc.replace(/`(.*?)`/g, '<code style="background:var(--pm-surface-variant); padding:2px 6px; border-radius:4px; font-family:monospace; color:var(--ion-color-primary)">$1</code>');
    esc = esc.replace(/\[([^\]]+)\]\(([^\]]+)\)/g, '<a href="$2" target="_blank" style="color:var(--ion-color-primary); text-decoration:none">$1</a>');
    esc = esc.replace(/\[📸(.*?)\]/g, '<span class="guide-screenshot-marker">\u{1F4F8} $1</span>');
    return esc;
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
  launchAiStudio() {
    return __async(this, null, function* () {
      if (!this.product)
        return;
      const modal = yield this.modalCtrl.create({
        component: AIBuildStudioComponent,
        cssClass: "ais-slide-panel",
        componentProps: {
          productId: this.product.id,
          productName: this.product.title,
          baseSchema: this.product.aiBaseSchema || "{}"
        }
      });
      return yield modal.present();
    });
  }
  static {
    this.\u0275fac = function ProductDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [["singleDemo", ""], ["class", "loading-overlay", 4, "ngIf"], ["class", "pm-container page-enter", 4, "ngIf"], [1, "loading-overlay"], [1, "loader-content"], [1, "premium-spinner"], [1, "pm-container", "page-enter"], ["class", "lightbox-overlay", 3, "click", 4, "ngIf"], [1, "breadcrumb"], ["routerLink", "/"], ["routerLink", "/browse"], ["routerLink", "/browse", 3, "queryParams"], [1, "current"], [1, "stats-strip", "shadow-premium"], [1, "stat-pill"], [1, "pill-label"], [1, "pill-rating"], [1, "stars"], [1, "rating-val"], [1, "stat-divider"], [1, "pill-value"], [1, "detail-layout"], [1, "detail-main"], [1, "preview-card"], [1, "preview-image"], ["style", "width:100%; height:100%; border-radius: inherit; overflow:hidden;", 4, "ngIf"], [4, "ngIf"], [1, "preview-thumbnails", "pm-gallery-strip"], [1, "thumb-item", 3, "click"], ["class", "thumb-item", "style", "position: relative; display: flex; align-items: center; justify-content: center; background-color: #000;", 3, "active", "backgroundImage", "backgroundSize", "backgroundPosition", "click", 4, "ngIf"], ["class", "thumb-item", 3, "active", "backgroundImage", "backgroundSize", "backgroundPosition", "click", 4, "ngFor", "ngForOf"], ["class", "demo-hub", 4, "ngIf"], ["class", "deploy-guide-card shadow-premium", 4, "ngIf"], [1, "main-content-card", "shadow-premium"], [1, "content-section"], [1, "section-title"], [1, "section-text"], [1, "features-grid"], ["class", "feature-item", 4, "ngFor", "ngForOf"], [1, "tabs-layout"], [1, "tabs-main"], [1, "detail-tabs"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "tab-content", 4, "ngIf"], [1, "detail-sidebar"], [1, "purchase-card"], [1, "price-section"], [1, "pm-price", 2, "font-size", "2rem"], ["class", "pm-price-original", 4, "ngIf"], ["class", "pm-price-discount", 4, "ngIf"], [1, "license-select"], [1, "license-option", 3, "click"], ["type", "radio", "name", "license", "value", "regular", 3, "checked"], [1, "license-price"], ["type", "radio", "name", "license", "value", "extended", 3, "checked"], ["class", "reskin-option", 4, "ngIf"], [1, "pm-btn", "pm-btn-success", "pm-btn-lg", 2, "width", "100%", "margin-top", "8px", 3, "click"], ["class", "pm-btn pm-btn-lg ai-studio-trigger", "style", "width:100%; margin-top: 12px; position: relative; overflow: hidden; border: none; font-weight: 700; letter-spacing: 0.5px;", 3, "click", 4, "ngIf"], ["routerLink", "/cart", "class", "pm-btn pm-btn-outline pm-btn-lg", "style", "width:100%; margin-top: 8px; text-align: center", 4, "ngIf"], [1, "purchase-meta"], [1, "meta-row"], [1, "author-card"], [1, "author-header"], [1, "author-av"], ["class", "author-verified", 4, "ngIf"], [1, "author-bio"], [1, "author-stats"], [1, "author-badges"], ["class", "a-badge", 4, "ngFor", "ngForOf"], [1, "tags-card"], [1, "tags-wrap"], ["routerLink", "/browse", "class", "tag-link", 3, "queryParams", 4, "ngFor", "ngForOf"], [1, "pm-section"], [1, "pm-heading-lg", 2, "margin-bottom", "24px"], [1, "related-grid"], [3, "product", 4, "ngFor", "ngForOf"], [1, "lightbox-overlay", 3, "click"], [1, "lightbox-content", 3, "click"], [3, "src"], [1, "lightbox-close", 3, "click"], [2, "width", "100%", "height", "100%", "border-radius", "inherit", "overflow", "hidden"], ["width", "100%", "height", "100%", "frameborder", "0", "allowfullscreen", "", 3, "src"], ["class", "maximize-btn", 3, "click", 4, "ngIf"], [1, "preview-icon"], [1, "preview-title"], [1, "maximize-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"], [1, "thumb-item", 2, "position", "relative", "display", "flex", "align-items", "center", "justify-content", "center", "background-color", "#000", 3, "click"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "white", 2, "filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.5))", "pointer-events", "none"], ["d", "M8 5v14l11-7z"], [1, "demo-hub"], [1, "demo-links-grid"], [4, "ngIf", "ngIfElse"], ["target", "_blank", "class", "demo-link-card", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "demo-link-card", 3, "href"], ["class", "demo-thumb", 3, "backgroundImage", 4, "ngIf"], [1, "demo-info"], [1, "demo-label"], [1, "demo-action"], [1, "demo-thumb"], ["target", "_blank", "class", "pm-btn pm-btn-outline pm-btn-lg", "style", "width: 100%; text-align: center; display: flex; justify-content: center; align-items: center; gap: 8px; border-color: rgba(99,102,241,0.2);", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "pm-btn", "pm-btn-outline", "pm-btn-lg", 2, "width", "100%", "text-align", "center", "display", "flex", "justify-content", "center", "align-items", "center", "gap", "8px", "border-color", "rgba(99,102,241,0.2)", 3, "href"], [1, "deploy-guide-card", "shadow-premium"], [1, "dg-header", 3, "click"], [1, "dg-title"], [1, "dg-icon"], [1, "section-title", 2, "margin", "0"], [1, "dg-toggle"], ["class", "dg-body", 4, "ngIf"], [1, "dg-body"], [1, "dg-content", 3, "innerHTML"], [1, "feature-item"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#6366F1", "stroke-width", "2.5"], ["points", "20 6 9 17 4 12"], [1, "tab-btn", 3, "click"], [1, "tab-content"], [1, "desc-card"], [1, "section-subtitle"], [1, "tags-row"], ["class", "tech-tag", 4, "ngFor", "ngForOf"], [1, "content-section", 2, "margin-top", "32px"], ["class", "compat-tag", 4, "ngFor", "ngForOf"], [1, "tech-tag"], [1, "compat-tag"], [1, "reviews-summary"], [1, "rating-big"], [1, "rating-number"], [1, "rating-stars"], [3, "class", 4, "ngFor", "ngForOf"], [1, "rating-total"], [1, "rating-bars"], ["class", "bar-row", 4, "ngFor", "ngForOf"], [1, "purchase-notice"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 16v-4M12 8h.01"], ["class", "review-list", 4, "ngFor", "ngForOf"], ["class", "empty-reviews", 4, "ngIf"], [1, "bar-row"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill"], [1, "bar-count"], [1, "review-list"], [1, "review-card"], [1, "review-header"], [1, "review-user"], [1, "review-avatar"], ["class", "verified", 4, "ngIf"], [1, "review-meta"], [1, "review-stars"], ["style", "font-size:12px", 3, "class", 4, "ngFor", "ngForOf"], [1, "review-date"], [1, "review-comment"], [1, "review-actions"], [1, "pm-btn", "pm-btn-ghost", "pm-btn-sm"], [1, "verified"], [2, "font-size", "12px"], [1, "empty-reviews"], [1, "write-review"], ["placeholder", "Ask a question or share your thoughts...", "rows", "3", 1, "filter-input", 3, "ngModelChange", "ngModel"], [1, "pm-btn", "pm-btn-primary", "pm-btn-sm", 3, "click", "disabled"], [1, "comments-list"], ["class", "comment-card", 4, "ngFor", "ngForOf"], [1, "comment-card"], [1, "pm-price-original"], [1, "pm-price-discount"], [1, "reskin-option"], [1, "reskin-check"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "pm-btn", "pm-btn-lg", "ai-studio-trigger", 2, "width", "100%", "margin-top", "12px", "position", "relative", "overflow", "hidden", "border", "none", "font-weight", "700", "letter-spacing", "0.5px", 3, "click"], [1, "ai-glow"], [2, "position", "relative", "z-index", "1", "display", "flex", "align-items", "center", "justify-content", "center", "gap", "10px"], [1, "ai-sparkle"], ["routerLink", "/cart", 1, "pm-btn", "pm-btn-outline", "pm-btn-lg", 2, "width", "100%", "margin-top", "8px", "text-align", "center"], [1, "author-verified"], [1, "a-badge"], ["routerLink", "/browse", 1, "tag-link", 3, "queryParams"], [3, "product"]], template: function ProductDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "ion-content");
        \u0275\u0275template(2, ProductDetailComponent_div_2_Template, 5, 0, "div", 1)(3, ProductDetailComponent_div_3_Template, 178, 94, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isLoading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.product && !ctx.isLoading());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterLink, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, IonContent, HeaderComponent, FooterComponent, ProductCardComponent, FirestoreDatePipe], styles: ['\n\n.page-enter[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pageEnter 0.4s ease-out;\n}\n@keyframes _ngcontent-%COMP%_pageEnter {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 20px 0;\n  font-size: 0.8rem;\n  color: var(--pm-text-muted);\n  flex-wrap: wrap;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-primary);\n}\n.breadcrumb[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: var(--pm-text-primary);\n  font-weight: 500;\n}\n.detail-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding-bottom: 32px;\n}\n.detail-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.detail-sidebar[_ngcontent-%COMP%] {\n  width: 360px;\n  flex-shrink: 0;\n}\n.stats-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-md);\n  padding: 20px 32px;\n  margin-bottom: 24px;\n  border: 1px solid var(--pm-border-light);\n}\n.stat-pill[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.pill-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.pill-value[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: var(--pm-text-primary);\n}\n.pill-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pill-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  color: #F59E0B;\n  font-size: 1rem;\n}\n.pill-rating[_ngcontent-%COMP%]   .rating-val[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.15rem;\n}\n.stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: var(--pm-border-light);\n  margin: 0 24px;\n}\n.main-content-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 40px;\n  margin-bottom: 24px;\n  border: 1px solid var(--pm-border-light);\n}\n.content-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.content-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 900;\n  margin-bottom: 16px;\n  color: var(--pm-text-primary);\n  letter-spacing: -0.02em;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  margin-bottom: 16px;\n  color: var(--pm-text-primary);\n}\n.section-text[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 1.8;\n  color: var(--pm-text-secondary);\n}\n.tabs-layout[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  display: flex;\n  gap: 0;\n  align-items: flex-start;\n}\n.tabs-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.preview-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  overflow: hidden;\n  box-shadow: var(--pm-shadow-card);\n  margin-bottom: 24px;\n}\n.preview-image[_ngcontent-%COMP%] {\n  height: 360px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  position: relative;\n}\n.maximize-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  padding: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background var(--pm-transition-fast);\n  backdrop-filter: blur(4px);\n}\n.maximize-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n.lightbox-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.lightbox-content[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 90vw;\n  max-height: 90vh;\n}\n.lightbox-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 90vh;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.lightbox-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -40px;\n  right: 0px;\n  background: none;\n  border: none;\n  color: white;\n  font-size: 2rem;\n  cursor: pointer;\n}\n.video-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  border-radius: var(--pm-radius-lg);\n  overflow: hidden;\n  box-shadow: var(--pm-shadow-sm);\n}\n.video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.preview-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));\n}\n.preview-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.1rem;\n  font-weight: 600;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 6px 20px;\n  border-radius: var(--pm-radius-full);\n  backdrop-filter: blur(4px);\n}\n.preview-thumbnails[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px;\n}\n.thumb-item[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 48px;\n  border-radius: var(--pm-radius-sm);\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all var(--pm-transition-fast);\n}\n.thumb-item.active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n}\n.thumb-item[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.pm-gallery-strip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  overflow-x: auto;\n  scrollbar-width: thin;\n  scrollbar-color: var(--pm-border) transparent;\n  scroll-behavior: smooth;\n}\n.pm-gallery-strip[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.pm-gallery-strip[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--pm-border);\n  border-radius: 4px;\n}\n.pm-gallery-strip[_ngcontent-%COMP%]   .thumb-item[_ngcontent-%COMP%] {\n  flex: 0 0 80px;\n  height: 60px;\n  box-shadow: var(--pm-shadow-sm);\n}\n.demo-hub[_ngcontent-%COMP%] {\n  padding: 0 16px 16px;\n}\n.demo-links-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.demo-link-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: var(--pm-surface-muted);\n  border: 1px solid var(--pm-border-light);\n  border-radius: var(--pm-radius-md);\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.demo-link-card[_ngcontent-%COMP%]:hover {\n  background: white;\n  border-color: var(--ion-color-primary);\n  transform: translateY(-2px);\n  box-shadow: var(--pm-shadow-sm);\n}\n.demo-thumb[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--pm-radius-sm);\n  background-size: cover;\n  background-position: center;\n  flex-shrink: 0;\n}\n.demo-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.demo-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  font-size: 0.85rem;\n  color: var(--pm-text-primary);\n}\n.demo-action[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--ion-color-primary);\n  font-weight: 500;\n}\n.detail-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 24px;\n  background: var(--pm-surface-muted);\n  border-radius: var(--pm-radius-md);\n  padding: 4px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border: none;\n  background: transparent;\n  font-family: inherit;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--pm-text-secondary);\n  cursor: pointer;\n  border-radius: var(--pm-radius-sm);\n  transition: all var(--pm-transition-fast);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  color: var(--ion-color-primary);\n  box-shadow: var(--pm-shadow-sm);\n}\n.desc-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 32px;\n  border: 1px solid var(--pm-border-light);\n}\n.desc-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 24px 0 12px;\n}\n.desc-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.desc-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  line-height: 1.6;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n  color: var(--pm-text-secondary);\n  padding: 8px 12px;\n  background: var(--pm-surface-muted);\n  border-radius: var(--pm-radius-sm);\n}\n.tags-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tech-tag[_ngcontent-%COMP%], \n.compat-tag[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--pm-radius-full);\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n.tech-tag[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.08);\n  color: #6366F1;\n}\n.compat-tag[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.08);\n  color: #059669;\n}\n.reviews-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding: 24px;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 24px;\n}\n.rating-big[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px 32px;\n}\n.rating-number[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800;\n  color: var(--pm-text-primary);\n  display: block;\n}\n.rating-stars[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #F59E0B;\n  margin: 4px 0;\n  display: flex;\n  gap: 2px;\n  justify-content: center;\n}\n.rating-total[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-muted);\n}\n.rating-bars[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  justify-content: center;\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--pm-text-muted);\n  width: 24px;\n}\n.bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: var(--pm-surface-muted);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #F59E0B;\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}\n.bar-count[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--pm-text-muted);\n  width: 32px;\n  text-align: right;\n}\n.write-review[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.write-review[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\ntextarea.filter-input[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.purchase-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 20px;\n  background: rgba(99, 102, 241, 0.06);\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  border-radius: var(--pm-radius-md);\n  margin-bottom: 20px;\n  font-size: 0.85rem;\n  color: var(--pm-text-secondary);\n}\n.empty-reviews[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--pm-text-muted);\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n}\n.comment-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  padding: 20px;\n  border-radius: var(--pm-radius-md);\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 12px;\n}\n.review-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  padding: 20px;\n  border-radius: var(--pm-radius-md);\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 12px;\n}\n.review-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.review-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.review-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n.review-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n}\n.verified[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #10B981;\n  font-weight: 500;\n}\n.review-meta[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.review-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1px;\n  justify-content: flex-end;\n}\n.review-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.review-comment[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--pm-text-secondary);\n  line-height: 1.6;\n  margin: 0 0 8px;\n}\n.purchase-card[_ngcontent-%COMP%], \n.author-card[_ngcontent-%COMP%], \n.tags-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-card);\n  margin-bottom: 16px;\n}\n.price-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.license-select[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.license-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border: 2px solid var(--pm-border);\n  border-radius: var(--pm-radius-md);\n  cursor: pointer;\n  transition: all var(--pm-transition-fast);\n}\n.license-option.active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.03);\n}\n.license-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--ion-color-primary);\n}\n.license-option[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.license-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n}\n.license-option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.license-price[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1rem;\n  color: var(--pm-text-primary);\n}\n.reskin-option[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.reskin-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.04),\n      rgba(168, 85, 247, 0.06));\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  border-radius: var(--pm-radius-md);\n  cursor: pointer;\n}\n.reskin-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--ion-color-primary);\n}\n.reskin-check[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n}\n.reskin-check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.pm-btn.added[_ngcontent-%COMP%] {\n  background: #10B981;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);\n}\n.purchase-meta[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid var(--pm-border-light);\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 7px 0;\n  font-size: 0.8rem;\n}\n.meta-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--pm-text-muted);\n}\n.meta-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--pm-text-primary);\n}\n.author-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.author-av[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.author-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n}\n.author-verified[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #10B981;\n}\n.author-bio[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-secondary);\n  line-height: 1.5;\n  margin: 0 0 16px;\n}\n.author-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 12px 0;\n  border-top: 1px solid var(--pm-border-light);\n  border-bottom: 1px solid var(--pm-border-light);\n  margin-bottom: 12px;\n}\n.author-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n}\n.author-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  color: var(--pm-text-primary);\n}\n.author-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--pm-text-muted);\n}\n.author-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.a-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  background: rgba(99, 102, 241, 0.08);\n  border-radius: var(--pm-radius-full);\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n.tags-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 0.9rem;\n}\n.tags-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tag-link[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background: var(--pm-surface-muted);\n  border-radius: var(--pm-radius-full);\n  font-size: 0.78rem;\n  color: var(--pm-text-secondary);\n  text-decoration: none;\n  transition: all var(--pm-transition-fast);\n}\n.tag-link[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.08);\n  color: var(--ion-color-primary);\n}\n.related-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n@media (max-width: 1024px) {\n  .detail-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .detail-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .reviews-summary[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stats-strip[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n    padding: 16px;\n  }\n  .stat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .stat-pill[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .preview-image[_ngcontent-%COMP%] {\n    height: 240px;\n  }\n  .main-content-card[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .detail-tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    flex-wrap: nowrap;\n  }\n  .tab-btn[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    min-width: max-content;\n    padding: 10px 14px;\n    font-size: 0.8rem;\n  }\n  .breadcrumb[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding: 12px 0;\n  }\n  .desc-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .review-card[_ngcontent-%COMP%], \n   .comment-card[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .purchase-card[_ngcontent-%COMP%], \n   .author-card[_ngcontent-%COMP%], \n   .tags-card[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .pm-gallery-strip[_ngcontent-%COMP%]   .thumb-item[_ngcontent-%COMP%] {\n    flex: 0 0 64px;\n    height: 48px;\n  }\n  .demo-links-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.deploy-guide-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.dg-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.dg-header[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.02);\n}\n.dg-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.dg-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.dg-toggle[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n.dg-body[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--pm-border-light);\n  padding: 24px 32px;\n  max-height: 500px;\n  overflow-y: auto;\n}\n.dg-content[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.88rem;\n  line-height: 1.8;\n  color: var(--pm-text-secondary);\n  white-space: pre-wrap;\n  font-family: inherit;\n}\n.ai-studio-trigger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #A855F7,\n      #EC4899);\n  color: white !important;\n  box-shadow: 0 8px 25px rgba(236, 72, 153, 0.4);\n  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.ai-studio-trigger[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) scale(1.02);\n  box-shadow: 0 12px 30px rgba(236, 72, 153, 0.5);\n}\n.ai-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_ais-glow-rotate 4s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_ais-glow-rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ai-studio-workspace[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  display: flex;\n  justify-content: flex-end;\n  visibility: hidden;\n  transition: visibility 0s 0.4s;\n}\n.ai-studio-workspace.active[_ngcontent-%COMP%] {\n  visibility: visible;\n  transition: visibility 0s 0s;\n}\n.ais-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n}\n.ai-studio-workspace.active[_ngcontent-%COMP%]   .ais-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.ais-panel[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  height: 100%;\n  background: #09090B;\n  color: white;\n  transform: translateX(100%);\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n}\n.ai-studio-workspace.active[_ngcontent-%COMP%]   .ais-panel[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.ais-glow-top[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -100px;\n  right: -100px;\n  width: 400px;\n  height: 400px;\n  background: rgba(168, 85, 247, 0.15);\n  border-radius: 50%;\n  filter: blur(80px);\n  pointer-events: none;\n}\n.ais-glow-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -100px;\n  left: -100px;\n  width: 300px;\n  height: 300px;\n  background: rgba(59, 130, 246, 0.1);\n  border-radius: 50%;\n  filter: blur(80px);\n  pointer-events: none;\n}\n.ais-header[_ngcontent-%COMP%] {\n  padding: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  background: rgba(9, 9, 11, 0.5);\n  backdrop-filter: blur(10px);\n  z-index: 10;\n}\n.ais-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.ais-icon-box[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #A855F7,\n      #3B82F6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);\n}\n.ais-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: white;\n  letter-spacing: -0.5px;\n}\n.ais-subtitle[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #71717A;\n  letter-spacing: 1.5px;\n}\n.ais-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #71717A;\n  font-size: 2rem;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.ais-close[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.ais-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 40px 32px;\n  z-index: 5;\n}\n.ais-state-enter[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_ais-fade-up 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_ais-fade-up {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ais-heading[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  margin-bottom: 12px;\n  color: white;\n}\n.ais-text[_ngcontent-%COMP%] {\n  color: #A1A1AA;\n  font-size: 1rem;\n  line-height: 1.6;\n  margin-bottom: 32px;\n}\n.ais-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 160px;\n  background: #18181B;\n  border: 1px solid #27272A;\n  border-radius: 16px;\n  padding: 20px;\n  color: white;\n  font-family: inherit;\n  font-size: 1rem;\n  resize: none;\n  transition: all 0.3s;\n}\n.ais-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #A855F7;\n  box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.1);\n}\n.ais-input-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 32px;\n}\n.ais-input-meta[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ais-status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #A855F7;\n  animation: _ngcontent-%COMP%_ais-pulse 2s infinite;\n}\n.ais-status-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #52525B;\n  font-family: monospace;\n}\n@keyframes _ngcontent-%COMP%_ais-pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.ais-schema-view[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.ais-schema-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.ais-schema-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #52525B;\n  letter-spacing: 0.5px;\n}\n.ais-schema-tag[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.ais-code[_ngcontent-%COMP%] {\n  background: #18181B;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 20px;\n  color: #3B82F6;\n  font-family: monospace;\n  font-size: 0.85rem;\n  overflow-x: auto;\n  margin: 0;\n}\n.ais-btn-build[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #A855F7,\n      #3B82F6);\n  color: white;\n  font-weight: 800;\n  font-size: 1.1rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.25);\n}\n.ais-btn-build[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(168, 85, 247, 0.4);\n}\n.ais-btn-build[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ais-pipeline-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 48px;\n}\n.ais-loader-ring[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border: 4px solid rgba(168, 85, 247, 0.1);\n  border-top-color: #A855F7;\n  border-radius: 50%;\n  margin: 0 auto 24px;\n  animation: _ngcontent-%COMP%_ais-spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_ais-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ais-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  max-width: 320px;\n  margin: 0 auto 48px;\n  position: relative;\n}\n.ais-stepper[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 24px;\n  top: 10px;\n  bottom: 10px;\n  width: 1px;\n  background: #27272A;\n}\n.ais-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  opacity: 0.4;\n  transition: all 0.4s;\n}\n.ais-step.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.ais-step.done[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.ais-step-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: #18181B;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  z-index: 2;\n  border: 1px solid #27272A;\n}\n.ais-step.active[_ngcontent-%COMP%]   .ais-step-icon[_ngcontent-%COMP%] {\n  background: #A855F7;\n  color: white;\n  border-color: transparent;\n  box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);\n}\n.ais-step.done[_ngcontent-%COMP%]   .ais-step-icon[_ngcontent-%COMP%] {\n  background: #10B981;\n  color: white;\n  border-color: transparent;\n  font-size: 1rem;\n}\n.ais-step-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.1rem;\n  margin-bottom: 2px;\n}\n.ais-step-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #71717A;\n}\n.ais-estimate[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 12px;\n  font-size: 0.85rem;\n  color: #71717A;\n}\n.ais-estimate[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 700;\n}\n.ais-success[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 20px;\n}\n.ais-success-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 24px;\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  color: #10B981;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.5rem;\n  margin: 0 auto 32px;\n  box-shadow: 0 0 40px rgba(16, 185, 129, 0.15);\n}\n.ais-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.ais-btn-download[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 16px;\n  background: white;\n  color: black;\n  font-weight: 800;\n  font-size: 1.1rem;\n  text-decoration: none;\n  display: block;\n  transition: all 0.2s;\n}\n.ais-btn-download[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  background: #F4F4F5;\n}\n.ais-btn-docs[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 16px;\n  background: #18181B;\n  color: white;\n  font-weight: 700;\n  border: 1px solid #27272A;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ais-btn-docs[_ngcontent-%COMP%]:hover {\n  background: #27272A;\n}\n.ais-btn-reset[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #71717A;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.ais-footer[_ngcontent-%COMP%] {\n  padding: 32px;\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.ais-gpu-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #3F3F46;\n  font-family: monospace;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ais-gpu-dot[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #10B981;\n  box-shadow: 0 0 6px #10B981;\n}\n.ais-brand[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #27272A;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=product-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src\\app\\pages\\product-detail\\product-detail.component.ts", lineNumber: 1172 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=chunk-U5W4CB4Y.js.map

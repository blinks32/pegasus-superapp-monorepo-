import {
  menuController
} from "./chunk-YVKVXDXZ.js";
import {
  getTimeGivenProgression
} from "./chunk-ZXZ3SF7U.js";
import {
  setupConfig
} from "./chunk-OM2BEXEF.js";
import {
  actionSheetController,
  alertController,
  loadingController,
  modalController,
  pickerController,
  popoverController,
  toastController
} from "./chunk-T3OB4RHA.js";
import "./chunk-ENBZDT56.js";
import "./chunk-EUE5VIVC.js";
import "./chunk-DGXMPTHN.js";
import "./chunk-7BZLEOPR.js";
import "./chunk-VOEOF7YS.js";
import {
  createAnimation
} from "./chunk-662EYNNT.js";
import {
  animate,
  environment,
  style,
  transition,
  trigger
} from "./chunk-4W7LTIU3.js";
import {
  ProductCardComponent
} from "./chunk-SNG7MQSD.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel
} from "./chunk-SRBV76GZ.js";
import {
  AuthService,
  FooterComponent,
  HeaderComponent,
  MarketplaceService
} from "./chunk-VKHVXX2H.js";
import {
  SeoService
} from "./chunk-GARPURRS.js";
import {
  APP_INITIALIZER,
  ActivatedRoute,
  ApplicationRef,
  Attribute,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ChildrenOutletContexts,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DatePipe,
  DecimalPipe,
  Directive,
  DomSanitizer,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  HostListener,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  Location,
  LocationStrategy,
  NavigationCancel,
  NavigationError,
  NavigationStart,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Optional,
  Output,
  PRIMARY_OUTLET,
  Router,
  RouterLink,
  SkipSelf,
  SlicePipe,
  Subject,
  TemplateRef,
  UpperCasePipe,
  UrlSerializer,
  ViewChild,
  ViewContainerRef,
  __decorate,
  catchError,
  combineLatest,
  createComponent,
  distinctUntilChanged,
  effect,
  filter,
  forwardRef,
  fromEvent,
  inject,
  interval,
  of,
  reflectComponentType,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  takeWhile,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
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
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-3HEZZIL3.js";
import "./chunk-EQGDHUDA.js";
import "./chunk-QR455SR4.js";
import {
  c,
  e,
  l,
  n,
  r2 as r,
  s,
  t
} from "./chunk-5YFJZRA5.js";
import {
  initialize
} from "./chunk-HP74AG4X.js";
import "./chunk-OWVQ5LTT.js";
import {
  createGesture
} from "./chunk-5Y5NNO7P.js";
import "./chunk-JEPLCGF5.js";
import "./chunk-NBQOLU5Q.js";
import "./chunk-V4NIJZRY.js";
import {
  bootstrapLazy
} from "./chunk-X2AIKXEI.js";
import {
  __async,
  __objRest,
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
    const completed = this.steps.filter((s4) => s4.completed).length;
    return completed / this.steps.length * 100;
  }
  ngOnInit() {
    this.http.get("assets/guide-data.json").subscribe((data) => {
      this.lastRefreshed = data.lastRefreshed || null;
      this.steps = data.usageSteps.map((s4) => __spreadProps(__spreadValues({}, s4), { completed: false }));
      const saved = localStorage.getItem("pegasus_guide_progress");
      if (saved) {
        const completedIds = JSON.parse(saved);
        this.steps.forEach((s4) => {
          if (completedIds.includes(s4.id))
            s4.completed = true;
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
    const idx = this.steps.findIndex((s4) => s4.id === step.id);
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
    this.steps.forEach((s4) => s4.completed = false);
    this.saveProgress();
  }
  saveProgress() {
    const completedIds = this.steps.filter((s4) => s4.completed).map((s4) => s4.id);
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

// node_modules/@ionic/core/components/p-CDfQnFrd.js
var a = (o2) => l2(o2);
var s3 = (o2, i) => ("string" == typeof o2 && (i = o2, o2 = void 0), a(o2).includes(i));
var l2 = (o2 = window) => {
  if (void 0 === o2) return [];
  o2.Ionic = o2.Ionic || {};
  let i = o2.Ionic.platforms;
  return null == i && (i = o2.Ionic.platforms = c2(o2), i.forEach((i2) => o2.document.documentElement.classList.add(`plt-${i2}`))), i;
};
var c2 = (i) => {
  const t2 = n.get("platform");
  return Object.keys(j).filter((o2) => {
    const n2 = null == t2 ? void 0 : t2[o2];
    return "function" == typeof n2 ? n2(i) : j[o2](i);
  });
};
var u2 = (o2) => !!h(o2, /iPad/i) || !(!h(o2, /Macintosh/i) || !m(o2));
var p = (o2) => h(o2, /android|sink/i);
var m = (o2) => w(o2, "(any-pointer:coarse)");
var f = (o2) => v(o2) || b(o2);
var v = (o2) => !!(o2.cordova || o2.phonegap || o2.PhoneGap);
var b = (o2) => {
  const i = o2.Capacitor;
  return !!((null == i ? void 0 : i.isNative) || (null == i ? void 0 : i.isNativePlatform) && i.isNativePlatform());
};
var h = (o2, i) => i.test(o2.navigator.userAgent);
var w = (o2, i) => {
  var t2;
  return null === (t2 = o2.matchMedia) || void 0 === t2 ? void 0 : t2.call(o2, i).matches;
};
var j = {
  ipad: u2,
  iphone: (o2) => h(o2, /iPhone/i),
  ios: (o2) => h(o2, /iPhone|iPod/i) || u2(o2),
  android: p,
  phablet: (o2) => {
    const i = o2.innerWidth, t2 = o2.innerHeight, n2 = Math.min(i, t2), e3 = Math.max(i, t2);
    return n2 > 390 && n2 < 520 && e3 > 620 && e3 < 800;
  },
  tablet: (o2) => {
    const i = o2.innerWidth, t2 = o2.innerHeight, n2 = Math.min(i, t2), e3 = Math.max(i, t2);
    return u2(o2) || ((o3) => p(o3) && !h(o3, /mobile/i))(o2) || n2 > 460 && n2 < 820 && e3 > 780 && e3 < 1400;
  },
  cordova: v,
  capacitor: b,
  electron: (o2) => h(o2, /electron/i),
  pwa: (o2) => {
    var i;
    return !(!(null === (i = o2.matchMedia) || void 0 === i ? void 0 : i.call(o2, "(display-mode: standalone)").matches) && !o2.navigator.standalone);
  },
  mobile: m,
  mobileweb: (o2) => m(o2) && !f(o2),
  desktop: (o2) => !m(o2),
  hybrid: f
};

// node_modules/@ionic/angular/fesm2022/ionic-angular-common.mjs
var _c0 = ["tabsInner"];
var DomController = class _DomController {
  /**
   * Schedules a task to run during the READ phase of the next frame.
   * This task should only read the DOM, but never modify it.
   */
  read(cb) {
    getQueue().read(cb);
  }
  /**
   * Schedules a task to run during the WRITE phase of the next frame.
   * This task should write the DOM, but never READ it.
   */
  write(cb) {
    getQueue().write(cb);
  }
  /** @nocollapse */
  static \u0275fac = function DomController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DomController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _DomController,
    factory: _DomController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DomController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var getQueue = () => {
  const win = typeof window !== "undefined" ? window : null;
  if (win != null) {
    const Ionic = win.Ionic;
    if (Ionic?.queue) {
      return Ionic.queue;
    }
    return {
      read: (cb) => win.requestAnimationFrame(cb),
      write: (cb) => win.requestAnimationFrame(cb)
    };
  }
  return {
    read: (cb) => cb(),
    write: (cb) => cb()
  };
};
var MenuController = class {
  menuController;
  constructor(menuController2) {
    this.menuController = menuController2;
  }
  /**
   * Programmatically open the Menu.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return returns a promise when the menu is fully opened
   */
  open(menuId) {
    return this.menuController.open(menuId);
  }
  /**
   * Programmatically close the Menu. If no `menuId` is given as the first
   * argument then it'll close any menu which is open. If a `menuId`
   * is given then it'll close that exact menu.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return returns a promise when the menu is fully closed
   */
  close(menuId) {
    return this.menuController.close(menuId);
  }
  /**
   * Toggle the menu. If it's closed, it will open, and if opened, it
   * will close.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return returns a promise when the menu has been toggled
   */
  toggle(menuId) {
    return this.menuController.toggle(menuId);
  }
  /**
   * Used to enable or disable a menu. For example, there could be multiple
   * left menus, but only one of them should be able to be opened at the same
   * time. If there are multiple menus on the same side, then enabling one menu
   * will also automatically disable all the others that are on the same side.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns the instance of the menu, which is useful for chaining.
   */
  enable(shouldEnable, menuId) {
    return this.menuController.enable(shouldEnable, menuId);
  }
  /**
   * Used to enable or disable the ability to swipe open the menu.
   * @param shouldEnable  True if it should be swipe-able, false if not.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns the instance of the menu, which is useful for chaining.
   */
  swipeGesture(shouldEnable, menuId) {
    return this.menuController.swipeGesture(shouldEnable, menuId);
  }
  /**
   * @param [menuId] Optionally get the menu by its id, or side.
   * @return Returns true if the specified menu is currently open, otherwise false.
   * If the menuId is not specified, it returns true if ANY menu is currenly open.
   */
  isOpen(menuId) {
    return this.menuController.isOpen(menuId);
  }
  /**
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns true if the menu is currently enabled, otherwise false.
   */
  isEnabled(menuId) {
    return this.menuController.isEnabled(menuId);
  }
  /**
   * Used to get a menu instance. If a `menuId` is not provided then it'll
   * return the first menu found. If a `menuId` is `left` or `right`, then
   * it'll return the enabled menu on that side. Otherwise, if a `menuId` is
   * provided, then it'll try to find the menu using the menu's `id`
   * property. If a menu is not found then it'll return `null`.
   * @param [menuId]  Optionally get the menu by its id, or side.
   * @return Returns the instance of the menu if found, otherwise `null`.
   */
  get(menuId) {
    return this.menuController.get(menuId);
  }
  /**
   * @return Returns the instance of the menu already opened, otherwise `null`.
   */
  getOpen() {
    return this.menuController.getOpen();
  }
  /**
   * @return Returns an array of all menu instances.
   */
  getMenus() {
    return this.menuController.getMenus();
  }
  registerAnimation(name, animation) {
    return this.menuController.registerAnimation(name, animation);
  }
  isAnimating() {
    return this.menuController.isAnimating();
  }
  _getOpenSync() {
    return this.menuController._getOpenSync();
  }
  _createAnimation(type, menuCmp) {
    return this.menuController._createAnimation(type, menuCmp);
  }
  _register(menu) {
    return this.menuController._register(menu);
  }
  _unregister(menu) {
    return this.menuController._unregister(menu);
  }
  _setOpen(menu, shouldOpen, animated) {
    return this.menuController._setOpen(menu, shouldOpen, animated);
  }
};
var Platform = class _Platform {
  doc;
  _readyPromise;
  win;
  /**
   * @hidden
   */
  backButton = new Subject();
  /**
   * The keyboardDidShow event emits when the
   * on-screen keyboard is presented.
   */
  keyboardDidShow = new Subject();
  /**
   * The keyboardDidHide event emits when the
   * on-screen keyboard is hidden.
   */
  keyboardDidHide = new Subject();
  /**
   * The pause event emits when the native platform puts the application
   * into the background, typically when the user switches to a different
   * application. This event would emit when a Cordova app is put into
   * the background, however, it would not fire on a standard web browser.
   */
  pause = new Subject();
  /**
   * The resume event emits when the native platform pulls the application
   * out from the background. This event would emit when a Cordova app comes
   * out from the background, however, it would not fire on a standard web browser.
   */
  resume = new Subject();
  /**
   * The resize event emits when the browser window has changed dimensions. This
   * could be from a browser window being physically resized, or from a device
   * changing orientation.
   */
  resize = new Subject();
  constructor(doc, zone) {
    this.doc = doc;
    zone.run(() => {
      this.win = doc.defaultView;
      this.backButton.subscribeWithPriority = function(priority, callback) {
        return this.subscribe((ev) => {
          return ev.register(priority, (processNextHandler) => zone.run(() => callback(processNextHandler)));
        });
      };
      proxyEvent(this.pause, doc, "pause", zone);
      proxyEvent(this.resume, doc, "resume", zone);
      proxyEvent(this.backButton, doc, "ionBackButton", zone);
      proxyEvent(this.resize, this.win, "resize", zone);
      proxyEvent(this.keyboardDidShow, this.win, "ionKeyboardDidShow", zone);
      proxyEvent(this.keyboardDidHide, this.win, "ionKeyboardDidHide", zone);
      let readyResolve;
      this._readyPromise = new Promise((res) => {
        readyResolve = res;
      });
      if (this.win?.["cordova"]) {
        doc.addEventListener("deviceready", () => {
          readyResolve("cordova");
        }, {
          once: true
        });
      } else {
        readyResolve("dom");
      }
    });
  }
  /**
   * @returns returns true/false based on platform.
   * @description
   * Depending on the platform the user is on, `is(platformName)` will
   * return `true` or `false`. Note that the same app can return `true`
   * for more than one platform name. For example, an app running from
   * an iPad would return `true` for the platform names: `mobile`,
   * `ios`, `ipad`, and `tablet`. Additionally, if the app was running
   * from Cordova then `cordova` would be true, and if it was running
   * from a web browser on the iPad then `mobileweb` would be `true`.
   *
   * ```
   * import { Platform } from 'ionic-angular';
   *
   * @Component({...})
   * export MyPage {
   *   constructor(public platform: Platform) {
   *     if (this.platform.is('ios')) {
   *       // This will only print when on iOS
   *       console.log('I am an iOS device!');
   *     }
   *   }
   * }
   * ```
   *
   * | Platform Name   | Description                        |
   * |-----------------|------------------------------------|
   * | android         | on a device running Android.       |
   * | capacitor       | on a device running Capacitor.     |
   * | cordova         | on a device running Cordova.       |
   * | ios             | on a device running iOS.           |
   * | ipad            | on an iPad device.                 |
   * | iphone          | on an iPhone device.               |
   * | phablet         | on a phablet device.               |
   * | tablet          | on a tablet device.                |
   * | electron        | in Electron on a desktop device.   |
   * | pwa             | as a PWA app.                      |
   * | mobile          | on a mobile device.                |
   * | mobileweb       | on a mobile device in a browser.   |
   * | desktop         | on a desktop device.               |
   * | hybrid          | is a cordova or capacitor app.     |
   *
   */
  is(platformName) {
    return s3(this.win, platformName);
  }
  /**
   * @returns the array of platforms
   * @description
   * Depending on what device you are on, `platforms` can return multiple values.
   * Each possible value is a hierarchy of platforms. For example, on an iPhone,
   * it would return `mobile`, `ios`, and `iphone`.
   *
   * ```
   * import { Platform } from 'ionic-angular';
   *
   * @Component({...})
   * export MyPage {
   *   constructor(public platform: Platform) {
   *     // This will print an array of the current platforms
   *     console.log(this.platform.platforms());
   *   }
   * }
   * ```
   */
  platforms() {
    return a(this.win);
  }
  /**
   * Returns a promise when the platform is ready and native functionality
   * can be called. If the app is running from within a web browser, then
   * the promise will resolve when the DOM is ready. When the app is running
   * from an application engine such as Cordova, then the promise will
   * resolve when Cordova triggers the `deviceready` event.
   *
   * The resolved value is the `readySource`, which states which platform
   * ready was used. For example, when Cordova is ready, the resolved ready
   * source is `cordova`. The default ready source value will be `dom`. The
   * `readySource` is useful if different logic should run depending on the
   * platform the app is running from. For example, only Cordova can execute
   * the status bar plugin, so the web should not run status bar plugin logic.
   *
   * ```
   * import { Component } from '@angular/core';
   * import { Platform } from 'ionic-angular';
   *
   * @Component({...})
   * export MyApp {
   *   constructor(public platform: Platform) {
   *     this.platform.ready().then((readySource) => {
   *       console.log('Platform ready from', readySource);
   *       // Platform now ready, execute any required native code
   *     });
   *   }
   * }
   * ```
   */
  ready() {
    return this._readyPromise;
  }
  /**
   * Returns if this app is using right-to-left language direction or not.
   * We recommend the app's `index.html` file already has the correct `dir`
   * attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
   * [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
   */
  get isRTL() {
    return this.doc.dir === "rtl";
  }
  /**
   * Get the query string parameter
   */
  getQueryParam(key) {
    return readQueryParam(this.win.location.href, key);
  }
  /**
   * Returns `true` if the app is in landscape mode.
   */
  isLandscape() {
    return !this.isPortrait();
  }
  /**
   * Returns `true` if the app is in portrait mode.
   */
  isPortrait() {
    return this.win.matchMedia?.("(orientation: portrait)").matches;
  }
  testUserAgent(expression) {
    const nav = this.win.navigator;
    return !!(nav?.userAgent && nav.userAgent.indexOf(expression) >= 0);
  }
  /**
   * Get the current url.
   */
  url() {
    return this.win.location.href;
  }
  /**
   * Gets the width of the platform's viewport using `window.innerWidth`.
   */
  width() {
    return this.win.innerWidth;
  }
  /**
   * Gets the height of the platform's viewport using `window.innerHeight`.
   */
  height() {
    return this.win.innerHeight;
  }
  /** @nocollapse */
  static \u0275fac = function Platform_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Platform)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(NgZone));
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Platform,
    factory: _Platform.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: NgZone
    }];
  }, null);
})();
var readQueryParam = (url, key) => {
  key = key.replace(/[[\]\\]/g, "\\$&");
  const regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
  const results = regex.exec(url);
  return results ? decodeURIComponent(results[1].replace(/\+/g, " ")) : null;
};
var proxyEvent = (emitter, el, eventName, zone) => {
  if (el) {
    el.addEventListener(eventName, (ev) => {
      zone.run(() => {
        const value = ev != null ? ev.detail : void 0;
        emitter.next(value);
      });
    });
  }
};
var NavController = class _NavController {
  location;
  serializer;
  router;
  topOutlet;
  direction = DEFAULT_DIRECTION;
  animated = DEFAULT_ANIMATED;
  animationBuilder;
  guessDirection = "forward";
  guessAnimation;
  lastNavId = -1;
  constructor(platform, location, serializer, router) {
    this.location = location;
    this.serializer = serializer;
    this.router = router;
    if (router) {
      router.events.subscribe((ev) => {
        if (ev instanceof NavigationStart) {
          const id = ev.restoredState ? ev.restoredState.navigationId : ev.id;
          this.guessDirection = this.guessAnimation = id < this.lastNavId ? "back" : "forward";
          this.lastNavId = this.guessDirection === "forward" ? ev.id : id;
        }
        if (ev instanceof NavigationCancel || ev instanceof NavigationError) {
          this.direction = DEFAULT_DIRECTION;
          this.animated = DEFAULT_ANIMATED;
          this.animationBuilder = void 0;
        }
      });
    }
    platform.backButton.subscribeWithPriority(0, (processNextHandler) => {
      this.pop();
      processNextHandler();
    });
  }
  /**
   * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
   * it's equivalent to calling `this.router.navigateByUrl()`, but it's explicit about the **direction** of the transition.
   *
   * Going **forward** means that a new page is going to be pushed to the stack of the outlet (ion-router-outlet),
   * and that it will show a "forward" animation by default.
   *
   * Navigating forward can also be triggered in a declarative manner by using the `[routerDirection]` directive:
   *
   * ```html
   * <a routerLink="/path/to/page" routerDirection="forward">Link</a>
   * ```
   */
  navigateForward(url, options = {}) {
    this.setDirection("forward", options.animated, options.animationDirection, options.animation);
    return this.navigate(url, options);
  }
  /**
   * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
   * it's equivalent to calling:
   *
   * ```ts
   * this.navController.setDirection('back');
   * this.router.navigateByUrl(path);
   * ```
   *
   * Going **back** means that all the pages in the stack until the navigated page is found will be popped,
   * and that it will show a "back" animation by default.
   *
   * Navigating back can also be triggered in a declarative manner by using the `[routerDirection]` directive:
   *
   * ```html
   * <a routerLink="/path/to/page" routerDirection="back">Link</a>
   * ```
   */
  navigateBack(url, options = {}) {
    this.setDirection("back", options.animated, options.animationDirection, options.animation);
    return this.navigate(url, options);
  }
  /**
   * This method uses Angular's [Router](https://angular.io/api/router/Router) under the hood,
   * it's equivalent to calling:
   *
   * ```ts
   * this.navController.setDirection('root');
   * this.router.navigateByUrl(path);
   * ```
   *
   * Going **root** means that all existing pages in the stack will be removed,
   * and the navigated page will become the single page in the stack.
   *
   * Navigating root can also be triggered in a declarative manner by using the `[routerDirection]` directive:
   *
   * ```html
   * <a routerLink="/path/to/page" routerDirection="root">Link</a>
   * ```
   */
  navigateRoot(url, options = {}) {
    this.setDirection("root", options.animated, options.animationDirection, options.animation);
    return this.navigate(url, options);
  }
  /**
   * Same as [Location](https://angular.io/api/common/Location)'s back() method.
   * It will use the standard `window.history.back()` under the hood, but featuring a `back` animation
   * by default.
   */
  back(options = {
    animated: true,
    animationDirection: "back"
  }) {
    this.setDirection("back", options.animated, options.animationDirection, options.animation);
    return this.location.back();
  }
  /**
   * This methods goes back in the context of Ionic's stack navigation.
   *
   * It recursively finds the top active `ion-router-outlet` and calls `pop()`.
   * This is the recommended way to go back when you are using `ion-router-outlet`.
   *
   * Resolves to `true` if it was able to pop.
   */
  pop() {
    return __async(this, null, function* () {
      let outlet = this.topOutlet;
      while (outlet) {
        if (yield outlet.pop()) {
          return true;
        } else {
          outlet = outlet.parentOutlet;
        }
      }
      return false;
    });
  }
  /**
   * This methods specifies the direction of the next navigation performed by the Angular router.
   *
   * `setDirection()` does not trigger any transition, it just sets some flags to be consumed by `ion-router-outlet`.
   *
   * It's recommended to use `navigateForward()`, `navigateBack()` and `navigateRoot()` instead of `setDirection()`.
   */
  setDirection(direction, animated, animationDirection, animationBuilder) {
    this.direction = direction;
    this.animated = getAnimation(direction, animated, animationDirection);
    this.animationBuilder = animationBuilder;
  }
  /**
   * @internal
   */
  setTopOutlet(outlet) {
    this.topOutlet = outlet;
  }
  /**
   * @internal
   */
  consumeTransition() {
    let direction = "root";
    let animation;
    const animationBuilder = this.animationBuilder;
    if (this.direction === "auto") {
      direction = this.guessDirection;
      animation = this.guessAnimation;
    } else {
      animation = this.animated;
      direction = this.direction;
    }
    this.direction = DEFAULT_DIRECTION;
    this.animated = DEFAULT_ANIMATED;
    this.animationBuilder = void 0;
    return {
      direction,
      animation,
      animationBuilder
    };
  }
  navigate(url, options) {
    if (Array.isArray(url)) {
      return this.router.navigate(url, options);
    } else {
      const urlTree = this.serializer.parse(url.toString());
      if (options.queryParams !== void 0) {
        urlTree.queryParams = __spreadValues({}, options.queryParams);
      }
      if (options.fragment !== void 0) {
        urlTree.fragment = options.fragment;
      }
      return this.router.navigateByUrl(urlTree, options);
    }
  }
  /** @nocollapse */
  static \u0275fac = function NavController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavController)(\u0275\u0275inject(Platform), \u0275\u0275inject(Location), \u0275\u0275inject(UrlSerializer), \u0275\u0275inject(Router, 8));
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NavController,
    factory: _NavController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Platform
    }, {
      type: Location
    }, {
      type: UrlSerializer
    }, {
      type: Router,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var getAnimation = (direction, animated, animationDirection) => {
  if (animated === false) {
    return void 0;
  }
  if (animationDirection !== void 0) {
    return animationDirection;
  }
  if (direction === "forward" || direction === "back") {
    return direction;
  } else if (direction === "root" && animated === true) {
    return "forward";
  }
  return void 0;
};
var DEFAULT_DIRECTION = "auto";
var DEFAULT_ANIMATED = void 0;
var Config = class _Config {
  get(key, fallback) {
    const c3 = getConfig();
    if (c3) {
      return c3.get(key, fallback);
    }
    return null;
  }
  getBoolean(key, fallback) {
    const c3 = getConfig();
    if (c3) {
      return c3.getBoolean(key, fallback);
    }
    return false;
  }
  getNumber(key, fallback) {
    const c3 = getConfig();
    if (c3) {
      return c3.getNumber(key, fallback);
    }
    return 0;
  }
  /** @nocollapse */
  static \u0275fac = function Config_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Config)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _Config,
    factory: _Config.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Config, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfigToken = new InjectionToken("USERCONFIG");
var getConfig = () => {
  if (typeof window !== "undefined") {
    const Ionic = window.Ionic;
    if (Ionic?.config) {
      return Ionic.config;
    }
  }
  return null;
};
var NavParams = class {
  data;
  constructor(data = {}) {
    this.data = data;
    console.warn(`[Ionic Warning]: NavParams has been deprecated in favor of using Angular's input API. Developers should migrate to either the @Input decorator or the Signals-based input API.`);
  }
  /**
   * Get the value of a nav-parameter for the current view
   *
   * ```ts
   * import { NavParams } from 'ionic-angular';
   *
   * export class MyClass{
   *  constructor(public navParams: NavParams){
   *    // userParams is an object we have in our nav-parameters
   *    this.navParams.get('userParams');
   *  }
   * }
   * ```
   *
   * @param param Which param you want to look up
   */
  get(param) {
    return this.data[param];
  }
};
var IonModalToken = new InjectionToken("IonModalToken");
var AngularDelegate = class _AngularDelegate {
  zone = inject(NgZone);
  applicationRef = inject(ApplicationRef);
  config = inject(ConfigToken);
  create(environmentInjector, injector, elementReferenceKey, customInjector) {
    return new AngularFrameworkDelegate(environmentInjector, injector, this.applicationRef, this.zone, elementReferenceKey, this.config.useSetInputAPI ?? false, customInjector);
  }
  /** @nocollapse */
  static \u0275fac = function AngularDelegate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AngularDelegate)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AngularDelegate,
    factory: _AngularDelegate.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularDelegate, [{
    type: Injectable
  }], null, null);
})();
var AngularFrameworkDelegate = class {
  environmentInjector;
  injector;
  applicationRef;
  zone;
  elementReferenceKey;
  enableSignalsSupport;
  customInjector;
  elRefMap = /* @__PURE__ */ new WeakMap();
  elEventsMap = /* @__PURE__ */ new WeakMap();
  constructor(environmentInjector, injector, applicationRef, zone, elementReferenceKey, enableSignalsSupport, customInjector) {
    this.environmentInjector = environmentInjector;
    this.injector = injector;
    this.applicationRef = applicationRef;
    this.zone = zone;
    this.elementReferenceKey = elementReferenceKey;
    this.enableSignalsSupport = enableSignalsSupport;
    this.customInjector = customInjector;
  }
  attachViewToDom(container, component, params, cssClasses) {
    return this.zone.run(() => {
      return new Promise((resolve) => {
        const componentProps = __spreadValues({}, params);
        if (this.elementReferenceKey !== void 0) {
          componentProps[this.elementReferenceKey] = container;
        }
        const el = attachView(this.zone, this.environmentInjector, this.injector, this.applicationRef, this.elRefMap, this.elEventsMap, container, component, componentProps, cssClasses, this.elementReferenceKey, this.enableSignalsSupport, this.customInjector);
        resolve(el);
      });
    });
  }
  removeViewFromDom(_container, component) {
    return this.zone.run(() => {
      return new Promise((resolve) => {
        const componentRef = this.elRefMap.get(component);
        if (componentRef) {
          componentRef.destroy();
          this.elRefMap.delete(component);
          const unbindEvents = this.elEventsMap.get(component);
          if (unbindEvents) {
            unbindEvents();
            this.elEventsMap.delete(component);
          }
        }
        resolve();
      });
    });
  }
};
var attachView = (zone, environmentInjector, injector, applicationRef, elRefMap, elEventsMap, container, component, params, cssClasses, elementReferenceKey, enableSignalsSupport, customInjector) => {
  const providers = getProviders(params);
  if (container.tagName.toLowerCase() === "ion-modal") {
    providers.push({
      provide: IonModalToken,
      useValue: container
    });
  }
  const childInjector = Injector.create({
    providers,
    parent: customInjector ?? injector
  });
  const componentRef = createComponent(component, {
    environmentInjector,
    elementInjector: childInjector
  });
  const instance = componentRef.instance;
  const hostElement = componentRef.location.nativeElement;
  if (params) {
    if (elementReferenceKey && instance[elementReferenceKey] !== void 0) {
      console.error(`[Ionic Error]: ${elementReferenceKey} is a reserved property when using ${container.tagName.toLowerCase()}. Rename or remove the "${elementReferenceKey}" property from ${component.name}.`);
    }
    if (enableSignalsSupport === true && componentRef.setInput !== void 0) {
      const _a = params, {
        modal,
        popover
      } = _a, otherParams = __objRest(_a, [
        "modal",
        "popover"
      ]);
      for (const key in otherParams) {
        componentRef.setInput(key, otherParams[key]);
      }
      if (modal !== void 0) {
        Object.assign(instance, {
          modal
        });
      }
      if (popover !== void 0) {
        Object.assign(instance, {
          popover
        });
      }
    } else {
      Object.assign(instance, params);
    }
  }
  if (cssClasses) {
    for (const cssClass of cssClasses) {
      hostElement.classList.add(cssClass);
    }
  }
  const unbindEvents = bindLifecycleEvents(zone, instance, hostElement);
  container.appendChild(hostElement);
  applicationRef.attachView(componentRef.hostView);
  elRefMap.set(hostElement, componentRef);
  elEventsMap.set(hostElement, unbindEvents);
  return hostElement;
};
var LIFECYCLES = [r, t, s, c, l];
var bindLifecycleEvents = (zone, instance, element) => {
  return zone.run(() => {
    const unregisters = LIFECYCLES.filter((eventName) => typeof instance[eventName] === "function").map((eventName) => {
      const handler = (ev) => instance[eventName](ev.detail);
      element.addEventListener(eventName, handler);
      return () => element.removeEventListener(eventName, handler);
    });
    return () => unregisters.forEach((fn) => fn());
  });
};
var NavParamsToken = new InjectionToken("NavParamsToken");
var getProviders = (params) => {
  return [{
    provide: NavParamsToken,
    useValue: params
  }, {
    provide: NavParams,
    useFactory: provideNavParamsInjectable,
    deps: [NavParamsToken]
  }];
};
var provideNavParamsInjectable = (params) => {
  return new NavParams(params);
};
var proxyInputs = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach((item) => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => this.el[item] = val);
      }
    });
  });
};
var proxyMethods = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach((methodName) => {
    Prototype[methodName] = function() {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};
var proxyOutputs = (instance, el, events) => {
  events.forEach((eventName) => instance[eventName] = fromEvent(el, eventName));
};
function ProxyCmp(opts) {
  const decorator = function(cls) {
    const {
      defineCustomElementFn,
      inputs,
      methods
    } = opts;
    if (defineCustomElementFn !== void 0) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}
var MODAL_INPUTS = ["animated", "keepContentsMounted", "backdropBreakpoint", "backdropDismiss", "breakpoints", "canDismiss", "cssClass", "enterAnimation", "expandToScroll", "event", "focusTrap", "handle", "handleBehavior", "initialBreakpoint", "isOpen", "keyboardClose", "leaveAnimation", "mode", "presentingElement", "showBackdrop", "translucent", "trigger"];
var MODAL_METHODS = ["present", "dismiss", "onDidDismiss", "onWillDismiss", "setCurrentBreakpoint", "getCurrentBreakpoint"];
var IonModal = (
  /**
   * @Component extends from @Directive
   * so by defining the inputs here we
   * do not need to re-define them for the
   * lazy loaded popover.
   */
  class IonModal2 {
    z;
    // TODO(FW-2827): type
    template;
    isCmpOpen = false;
    el;
    constructor(c3, r2, z) {
      this.z = z;
      this.el = r2.nativeElement;
      this.el.addEventListener("ionMount", () => {
        this.isCmpOpen = true;
        c3.detectChanges();
      });
      this.el.addEventListener("didDismiss", () => {
        this.isCmpOpen = false;
        c3.detectChanges();
      });
      proxyOutputs(this, this.el, ["ionModalDidPresent", "ionModalWillPresent", "ionModalWillDismiss", "ionModalDidDismiss", "ionBreakpointDidChange", "didPresent", "willPresent", "willDismiss", "didDismiss", "ionDragStart", "ionDragMove", "ionDragEnd"]);
    }
    /** @nocollapse */
    static \u0275fac = function IonModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonModal2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
    };
    /** @nocollapse */
    static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: IonModal2,
      selectors: [["ion-modal"]],
      contentQueries: function IonModal_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, TemplateRef, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
        }
      },
      inputs: {
        animated: "animated",
        keepContentsMounted: "keepContentsMounted",
        backdropBreakpoint: "backdropBreakpoint",
        backdropDismiss: "backdropDismiss",
        breakpoints: "breakpoints",
        canDismiss: "canDismiss",
        cssClass: "cssClass",
        enterAnimation: "enterAnimation",
        expandToScroll: "expandToScroll",
        event: "event",
        focusTrap: "focusTrap",
        handle: "handle",
        handleBehavior: "handleBehavior",
        initialBreakpoint: "initialBreakpoint",
        isOpen: "isOpen",
        keyboardClose: "keyboardClose",
        leaveAnimation: "leaveAnimation",
        mode: "mode",
        presentingElement: "presentingElement",
        showBackdrop: "showBackdrop",
        translucent: "translucent",
        trigger: "trigger"
      }
    });
  }
);
IonModal = __decorate([
  ProxyCmp({
    inputs: MODAL_INPUTS,
    methods: MODAL_METHODS
  })
  /**
   * @Component extends from @Directive
   * so by defining the inputs here we
   * do not need to re-define them for the
   * lazy loaded popover.
   */
], IonModal);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonModal, [{
    type: Directive,
    args: [{
      selector: "ion-modal",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: MODAL_INPUTS
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    template: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: false
      }]
    }]
  });
})();
var POPOVER_INPUTS = ["alignment", "animated", "arrow", "keepContentsMounted", "backdropDismiss", "cssClass", "dismissOnSelect", "enterAnimation", "event", "focusTrap", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "translucent", "trigger", "triggerAction", "reference", "size", "side"];
var POPOVER_METHODS = ["present", "dismiss", "onDidDismiss", "onWillDismiss"];
var IonPopover = (
  /**
   * @Component extends from @Directive
   * so by defining the inputs here we
   * do not need to re-define them for the
   * lazy loaded popover.
   */
  class IonPopover2 {
    z;
    // TODO(FW-2827): type
    template;
    isCmpOpen = false;
    el;
    constructor(c3, r2, z) {
      this.z = z;
      this.el = r2.nativeElement;
      this.el.addEventListener("ionMount", () => {
        this.isCmpOpen = true;
        c3.detectChanges();
      });
      this.el.addEventListener("didDismiss", () => {
        this.isCmpOpen = false;
        c3.detectChanges();
      });
      proxyOutputs(this, this.el, ["ionPopoverDidPresent", "ionPopoverWillPresent", "ionPopoverWillDismiss", "ionPopoverDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
    }
    /** @nocollapse */
    static \u0275fac = function IonPopover_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IonPopover2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
    };
    /** @nocollapse */
    static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: IonPopover2,
      selectors: [["ion-popover"]],
      contentQueries: function IonPopover_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, TemplateRef, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
        }
      },
      inputs: {
        alignment: "alignment",
        animated: "animated",
        arrow: "arrow",
        keepContentsMounted: "keepContentsMounted",
        backdropDismiss: "backdropDismiss",
        cssClass: "cssClass",
        dismissOnSelect: "dismissOnSelect",
        enterAnimation: "enterAnimation",
        event: "event",
        focusTrap: "focusTrap",
        isOpen: "isOpen",
        keyboardClose: "keyboardClose",
        leaveAnimation: "leaveAnimation",
        mode: "mode",
        showBackdrop: "showBackdrop",
        translucent: "translucent",
        trigger: "trigger",
        triggerAction: "triggerAction",
        reference: "reference",
        size: "size",
        side: "side"
      }
    });
  }
);
IonPopover = __decorate([
  ProxyCmp({
    inputs: POPOVER_INPUTS,
    methods: POPOVER_METHODS
  })
  /**
   * @Component extends from @Directive
   * so by defining the inputs here we
   * do not need to re-define them for the
   * lazy loaded popover.
   */
], IonPopover);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPopover, [{
    type: Directive,
    args: [{
      selector: "ion-popover",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: POPOVER_INPUTS
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    template: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: false
      }]
    }]
  });
})();
var insertView = (views, view, direction) => {
  if (direction === "root") {
    return setRoot(views, view);
  } else if (direction === "forward") {
    return setForward(views, view);
  } else {
    return setBack(views, view);
  }
};
var setRoot = (views, view) => {
  views = views.filter((v2) => v2.stackId !== view.stackId);
  views.push(view);
  return views;
};
var setForward = (views, view) => {
  const index = views.indexOf(view);
  if (index >= 0) {
    views = views.filter((v2) => v2.stackId !== view.stackId || v2.id <= view.id);
  } else {
    views.push(view);
  }
  return views;
};
var setBack = (views, view) => {
  const index = views.indexOf(view);
  if (index >= 0) {
    return views.filter((v2) => v2.stackId !== view.stackId || v2.id <= view.id);
  } else {
    return setRoot(views, view);
  }
};
var getUrl = (router, activatedRoute) => {
  const urlTree = router.createUrlTree(["."], {
    relativeTo: activatedRoute
  });
  return router.serializeUrl(urlTree);
};
var isTabSwitch = (enteringView, leavingView) => {
  if (!leavingView) {
    return true;
  }
  return enteringView.stackId !== leavingView.stackId;
};
var computeStackId = (prefixUrl, url) => {
  if (!prefixUrl) {
    return void 0;
  }
  const segments = toSegments(url);
  for (let i = 0; i < segments.length; i++) {
    if (i >= prefixUrl.length) {
      return segments[i];
    }
    if (segments[i] !== prefixUrl[i]) {
      return void 0;
    }
  }
  return void 0;
};
var toSegments = (path) => {
  return path.split("/").map((s4) => s4.trim()).filter((s4) => s4 !== "");
};
var destroyView = (view) => {
  if (view) {
    view.ref.destroy();
    view.unlistenEvents();
  }
};
var StackController = class {
  containerEl;
  router;
  navCtrl;
  zone;
  location;
  views = [];
  runningTask;
  skipTransition = false;
  tabsPrefix;
  activeView;
  nextId = 0;
  constructor(tabsPrefix, containerEl, router, navCtrl, zone, location) {
    this.containerEl = containerEl;
    this.router = router;
    this.navCtrl = navCtrl;
    this.zone = zone;
    this.location = location;
    this.tabsPrefix = tabsPrefix !== void 0 ? toSegments(tabsPrefix) : void 0;
  }
  createView(ref, activatedRoute) {
    const url = getUrl(this.router, activatedRoute);
    const element = ref?.location?.nativeElement;
    const unlistenEvents = bindLifecycleEvents(this.zone, ref.instance, element);
    return {
      id: this.nextId++,
      stackId: computeStackId(this.tabsPrefix, url),
      unlistenEvents,
      element,
      ref,
      url
    };
  }
  getExistingView(activatedRoute) {
    const activatedUrlKey = getUrl(this.router, activatedRoute);
    const view = this.views.find((vw) => vw.url === activatedUrlKey);
    if (view) {
      view.ref.changeDetectorRef.reattach();
    }
    return view;
  }
  setActive(enteringView) {
    const consumeResult = this.navCtrl.consumeTransition();
    let {
      direction,
      animation,
      animationBuilder
    } = consumeResult;
    const leavingView = this.activeView;
    const tabSwitch = isTabSwitch(enteringView, leavingView);
    if (tabSwitch) {
      direction = "back";
      animation = void 0;
    }
    const viewsSnapshot = this.views.slice();
    let currentNavigation;
    const router = this.router;
    if (router.getCurrentNavigation) {
      currentNavigation = router.getCurrentNavigation();
    } else if (router.navigations?.value) {
      currentNavigation = router.navigations.value;
    }
    if (currentNavigation?.extras?.replaceUrl) {
      if (this.views.length > 0) {
        this.views.splice(-1, 1);
      }
    }
    const reused = this.views.includes(enteringView);
    const views = this.insertView(enteringView, direction);
    if (!reused) {
      enteringView.ref.changeDetectorRef.detectChanges();
    }
    const customAnimation = enteringView.animationBuilder;
    if (animationBuilder === void 0 && direction === "back" && !tabSwitch && customAnimation !== void 0) {
      animationBuilder = customAnimation;
    }
    if (leavingView) {
      leavingView.animationBuilder = animationBuilder;
    }
    return this.zone.runOutsideAngular(() => {
      return this.wait(() => {
        if (leavingView) {
          leavingView.ref.changeDetectorRef.detach();
        }
        enteringView.ref.changeDetectorRef.reattach();
        return this.transition(enteringView, leavingView, animation, this.canGoBack(1), false, animationBuilder).then(() => cleanupAsync(enteringView, views, viewsSnapshot, this.location, this.zone)).then(() => ({
          enteringView,
          direction,
          animation,
          tabSwitch
        }));
      });
    });
  }
  canGoBack(deep, stackId = this.getActiveStackId()) {
    return this.getStack(stackId).length > deep;
  }
  pop(deep, stackId = this.getActiveStackId()) {
    return this.zone.run(() => {
      const views = this.getStack(stackId);
      if (views.length <= deep) {
        return Promise.resolve(false);
      }
      const view = views[views.length - deep - 1];
      let url = view.url;
      const viewSavedData = view.savedData;
      if (viewSavedData) {
        const primaryOutlet = viewSavedData.get("primary");
        if (primaryOutlet?.route?._routerState?.snapshot.url) {
          url = primaryOutlet.route._routerState.snapshot.url;
        }
      }
      const {
        animationBuilder
      } = this.navCtrl.consumeTransition();
      return this.navCtrl.navigateBack(url, __spreadProps(__spreadValues({}, view.savedExtras), {
        animation: animationBuilder
      })).then(() => true);
    });
  }
  startBackTransition() {
    const leavingView = this.activeView;
    if (leavingView) {
      const views = this.getStack(leavingView.stackId);
      const enteringView = views[views.length - 2];
      const customAnimation = enteringView.animationBuilder;
      return this.wait(() => {
        return this.transition(
          enteringView,
          // entering view
          leavingView,
          // leaving view
          "back",
          this.canGoBack(2),
          true,
          customAnimation
        );
      });
    }
    return Promise.resolve();
  }
  endBackTransition(shouldComplete) {
    if (shouldComplete) {
      this.skipTransition = true;
      this.pop(1);
    } else if (this.activeView) {
      cleanup(this.activeView, this.views, this.views, this.location, this.zone);
    }
  }
  getLastUrl(stackId) {
    const views = this.getStack(stackId);
    return views.length > 0 ? views[views.length - 1] : void 0;
  }
  /**
   * @internal
   */
  getRootUrl(stackId) {
    const views = this.getStack(stackId);
    return views.length > 0 ? views[0] : void 0;
  }
  getActiveStackId() {
    return this.activeView ? this.activeView.stackId : void 0;
  }
  /**
   * @internal
   */
  getActiveView() {
    return this.activeView;
  }
  hasRunningTask() {
    return this.runningTask !== void 0;
  }
  destroy() {
    this.containerEl = void 0;
    this.views.forEach(destroyView);
    this.activeView = void 0;
    this.views = [];
  }
  getStack(stackId) {
    return this.views.filter((v2) => v2.stackId === stackId);
  }
  insertView(enteringView, direction) {
    this.activeView = enteringView;
    this.views = insertView(this.views, enteringView, direction);
    return this.views.slice();
  }
  transition(enteringView, leavingView, direction, showGoBack, progressAnimation, animationBuilder) {
    if (this.skipTransition) {
      this.skipTransition = false;
      return Promise.resolve(false);
    }
    if (leavingView === enteringView) {
      return Promise.resolve(false);
    }
    const enteringEl = enteringView ? enteringView.element : void 0;
    const leavingEl = leavingView ? leavingView.element : void 0;
    const containerEl = this.containerEl;
    if (enteringEl && enteringEl !== leavingEl) {
      enteringEl.classList.add("ion-page");
      enteringEl.classList.add("ion-page-invisible");
      if (containerEl.commit) {
        return containerEl.commit(enteringEl, leavingEl, {
          duration: direction === void 0 ? 0 : void 0,
          direction,
          showGoBack,
          progressAnimation,
          animationBuilder
        });
      }
    }
    return Promise.resolve(false);
  }
  wait(task) {
    return __async(this, null, function* () {
      if (this.runningTask !== void 0) {
        yield this.runningTask;
        this.runningTask = void 0;
      }
      const promise = this.runningTask = task();
      promise.finally(() => this.runningTask = void 0);
      return promise;
    });
  }
};
var cleanupAsync = (activeRoute, views, viewsSnapshot, location, zone) => {
  if (typeof requestAnimationFrame === "function") {
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        cleanup(activeRoute, views, viewsSnapshot, location, zone);
        resolve();
      });
    });
  }
  return Promise.resolve();
};
var cleanup = (activeRoute, views, viewsSnapshot, location, zone) => {
  zone.run(() => viewsSnapshot.filter((view) => !views.includes(view)).forEach(destroyView));
  views.forEach((view) => {
    const locationWithoutParams = location.path().split("?")[0];
    const locationWithoutFragment = locationWithoutParams.split("#")[0];
    if (view !== activeRoute && view.url !== locationWithoutFragment) {
      const element = view.element;
      element.setAttribute("aria-hidden", "true");
      element.classList.add("ion-page-hidden");
      view.ref.changeDetectorRef.detach();
    }
  });
};
var IonRouterOutlet = class _IonRouterOutlet {
  parentOutlet;
  nativeEl;
  activatedView = null;
  tabsPrefix;
  _swipeGesture;
  stackCtrl;
  // Maintain map of activated route proxies for each component instance
  proxyMap = /* @__PURE__ */ new WeakMap();
  // Keep the latest activated route in a subject for the proxy routes to switch map to
  currentActivatedRoute$ = new BehaviorSubject(null);
  activated = null;
  /** @internal */
  get activatedComponentRef() {
    return this.activated;
  }
  _activatedRoute = null;
  /**
   * The name of the outlet
   */
  name = PRIMARY_OUTLET;
  /** @internal */
  stackWillChange = new EventEmitter();
  /** @internal */
  stackDidChange = new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-rename
  activateEvents = new EventEmitter();
  // eslint-disable-next-line @angular-eslint/no-output-rename
  deactivateEvents = new EventEmitter();
  parentContexts = inject(ChildrenOutletContexts);
  location = inject(ViewContainerRef);
  environmentInjector = inject(EnvironmentInjector);
  inputBinder = inject(INPUT_BINDER, {
    optional: true
  });
  /** @nodoc */
  supportsBindingToComponentInputs = true;
  // Ionic providers
  config = inject(Config);
  navCtrl = inject(NavController);
  set animation(animation) {
    this.nativeEl.animation = animation;
  }
  set animated(animated) {
    this.nativeEl.animated = animated;
  }
  set swipeGesture(swipe) {
    this._swipeGesture = swipe;
    this.nativeEl.swipeHandler = swipe ? {
      canStart: () => this.stackCtrl.canGoBack(1) && !this.stackCtrl.hasRunningTask(),
      onStart: () => this.stackCtrl.startBackTransition(),
      onEnd: (shouldContinue) => this.stackCtrl.endBackTransition(shouldContinue)
    } : void 0;
  }
  constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
    this.parentOutlet = parentOutlet;
    this.nativeEl = elementRef.nativeElement;
    this.name = name || PRIMARY_OUTLET;
    this.tabsPrefix = tabs === "true" ? getUrl(router, activatedRoute) : void 0;
    this.stackCtrl = new StackController(this.tabsPrefix, this.nativeEl, router, this.navCtrl, zone, commonLocation);
    this.parentContexts.onChildOutletCreated(this.name, this);
  }
  ngOnDestroy() {
    this.stackCtrl.destroy();
    this.inputBinder?.unsubscribeFromRouteData(this);
  }
  getContext() {
    return this.parentContexts.getContext(this.name);
  }
  ngOnInit() {
    this.initializeOutletWithName();
  }
  // Note: Ionic deviates from the Angular Router implementation here
  initializeOutletWithName() {
    if (!this.activated) {
      const context = this.getContext();
      if (context?.route) {
        this.activateWith(context.route, context.injector);
      }
    }
    new Promise((resolve) => e(this.nativeEl, resolve)).then(() => {
      if (this._swipeGesture === void 0) {
        this.swipeGesture = this.config.getBoolean("swipeBackEnabled", this.nativeEl.mode === "ios");
      }
    });
  }
  get isActivated() {
    return !!this.activated;
  }
  get component() {
    if (!this.activated) {
      throw new Error("Outlet is not activated");
    }
    return this.activated.instance;
  }
  get activatedRoute() {
    if (!this.activated) {
      throw new Error("Outlet is not activated");
    }
    return this._activatedRoute;
  }
  get activatedRouteData() {
    if (this._activatedRoute) {
      return this._activatedRoute.snapshot.data;
    }
    return {};
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to detach the subtree
   */
  detach() {
    throw new Error("incompatible reuse strategy");
  }
  /**
   * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  attach(_ref, _activatedRoute) {
    throw new Error("incompatible reuse strategy");
  }
  deactivate() {
    if (this.activated) {
      if (this.activatedView) {
        const context = this.getContext();
        this.activatedView.savedData = new Map(context.children["contexts"]);
        const primaryOutlet = this.activatedView.savedData.get("primary");
        if (primaryOutlet && context.route) {
          primaryOutlet.route = __spreadValues({}, context.route);
        }
        this.activatedView.savedExtras = {};
        if (context.route) {
          const contextSnapshot = context.route.snapshot;
          this.activatedView.savedExtras.queryParams = contextSnapshot.queryParams;
          this.activatedView.savedExtras.fragment = contextSnapshot.fragment;
        }
      }
      const c3 = this.component;
      this.activatedView = null;
      this.activated = null;
      this._activatedRoute = null;
      this.deactivateEvents.emit(c3);
    }
  }
  activateWith(activatedRoute, environmentInjector) {
    if (this.isActivated) {
      throw new Error("Cannot activate an already activated outlet");
    }
    this._activatedRoute = activatedRoute;
    let cmpRef;
    let enteringView = this.stackCtrl.getExistingView(activatedRoute);
    if (enteringView) {
      cmpRef = this.activated = enteringView.ref;
      const saved = enteringView.savedData;
      if (saved) {
        const context = this.getContext();
        context.children["contexts"] = saved;
      }
      this.updateActivatedRouteProxy(cmpRef.instance, activatedRoute);
    } else {
      const snapshot = activatedRoute._futureSnapshot;
      const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
      const component$ = new BehaviorSubject(null);
      const activatedRouteProxy = this.createActivatedRouteProxy(component$, activatedRoute);
      const injector = new OutletInjector(activatedRouteProxy, childContexts, this.location.injector);
      const component = snapshot.routeConfig.component ?? snapshot.component;
      cmpRef = this.activated = this.outletContent.createComponent(component, {
        index: this.outletContent.length,
        injector,
        environmentInjector: environmentInjector ?? this.environmentInjector
      });
      component$.next(cmpRef.instance);
      enteringView = this.stackCtrl.createView(this.activated, activatedRoute);
      this.proxyMap.set(cmpRef.instance, activatedRouteProxy);
      this.currentActivatedRoute$.next({
        component: cmpRef.instance,
        activatedRoute
      });
    }
    this.inputBinder?.bindActivatedRouteToOutletComponent(this);
    this.activatedView = enteringView;
    this.navCtrl.setTopOutlet(this);
    const leavingView = this.stackCtrl.getActiveView();
    this.stackWillChange.emit({
      enteringView,
      tabSwitch: isTabSwitch(enteringView, leavingView)
    });
    this.stackCtrl.setActive(enteringView).then((data) => {
      this.activateEvents.emit(cmpRef.instance);
      this.stackDidChange.emit(data);
    });
  }
  /**
   * Returns `true` if there are pages in the stack to go back.
   */
  canGoBack(deep = 1, stackId) {
    return this.stackCtrl.canGoBack(deep, stackId);
  }
  /**
   * Resolves to `true` if it the outlet was able to sucessfully pop the last N pages.
   */
  pop(deep = 1, stackId) {
    return this.stackCtrl.pop(deep, stackId);
  }
  /**
   * Returns the URL of the active page of each stack.
   */
  getLastUrl(stackId) {
    const active = this.stackCtrl.getLastUrl(stackId);
    return active ? active.url : void 0;
  }
  /**
   * Returns the RouteView of the active page of each stack.
   * @internal
   */
  getLastRouteView(stackId) {
    return this.stackCtrl.getLastUrl(stackId);
  }
  /**
   * Returns the root view in the tab stack.
   * @internal
   */
  getRootView(stackId) {
    return this.stackCtrl.getRootUrl(stackId);
  }
  /**
   * Returns the active stack ID. In the context of ion-tabs, it means the active tab.
   */
  getActiveStackId() {
    return this.stackCtrl.getActiveStackId();
  }
  /**
   * Since the activated route can change over the life time of a component in an ion router outlet, we create
   * a proxy so that we can update the values over time as a user navigates back to components already in the stack.
   */
  createActivatedRouteProxy(component$, activatedRoute) {
    const proxy = new ActivatedRoute();
    proxy._futureSnapshot = activatedRoute._futureSnapshot;
    proxy._routerState = activatedRoute._routerState;
    proxy.snapshot = activatedRoute.snapshot;
    proxy.outlet = activatedRoute.outlet;
    proxy.component = activatedRoute.component;
    proxy._paramMap = this.proxyObservable(component$, "paramMap");
    proxy._queryParamMap = this.proxyObservable(component$, "queryParamMap");
    proxy.url = this.proxyObservable(component$, "url");
    proxy.params = this.proxyObservable(component$, "params");
    proxy.queryParams = this.proxyObservable(component$, "queryParams");
    proxy.fragment = this.proxyObservable(component$, "fragment");
    proxy.data = this.proxyObservable(component$, "data");
    return proxy;
  }
  /**
   * Create a wrapped observable that will switch to the latest activated route matched by the given component
   */
  proxyObservable(component$, path) {
    return component$.pipe(
      // First wait until the component instance is pushed
      filter((component) => !!component),
      switchMap((component) => this.currentActivatedRoute$.pipe(filter((current) => current !== null && current.component === component), switchMap((current) => current && current.activatedRoute[path]), distinctUntilChanged()))
    );
  }
  /**
   * Updates the activated route proxy for the given component to the new incoming router state
   */
  updateActivatedRouteProxy(component, activatedRoute) {
    const proxy = this.proxyMap.get(component);
    if (!proxy) {
      throw new Error(`Could not find activated route proxy for view`);
    }
    proxy._futureSnapshot = activatedRoute._futureSnapshot;
    proxy._routerState = activatedRoute._routerState;
    proxy.snapshot = activatedRoute.snapshot;
    proxy.outlet = activatedRoute.outlet;
    proxy.component = activatedRoute.component;
    this.currentActivatedRoute$.next({
      component,
      activatedRoute
    });
  }
  /** @nocollapse */
  static \u0275fac = function IonRouterOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonRouterOutlet)(\u0275\u0275injectAttribute("name"), \u0275\u0275injectAttribute("tabs"), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(_IonRouterOutlet, 12));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _IonRouterOutlet,
    selectors: [["ion-router-outlet"]],
    inputs: {
      animated: "animated",
      animation: "animation",
      mode: "mode",
      swipeGesture: "swipeGesture",
      name: "name"
    },
    outputs: {
      stackWillChange: "stackWillChange",
      stackDidChange: "stackDidChange",
      activateEvents: "activate",
      deactivateEvents: "deactivate"
    },
    exportAs: ["outlet"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRouterOutlet, [{
    type: Directive,
    args: [{
      selector: "ion-router-outlet",
      exportAs: "outlet",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "animation", "mode", "swipeGesture"]
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["name"]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Attribute,
        args: ["tabs"]
      }]
    }, {
      type: Location
    }, {
      type: ElementRef
    }, {
      type: Router
    }, {
      type: NgZone
    }, {
      type: ActivatedRoute
    }, {
      type: IonRouterOutlet,
      decorators: [{
        type: SkipSelf
      }, {
        type: Optional
      }]
    }];
  }, {
    name: [{
      type: Input
    }],
    stackWillChange: [{
      type: Output
    }],
    stackDidChange: [{
      type: Output
    }],
    activateEvents: [{
      type: Output,
      args: ["activate"]
    }],
    deactivateEvents: [{
      type: Output,
      args: ["deactivate"]
    }]
  });
})();
var OutletInjector = class {
  route;
  childContexts;
  parent;
  constructor(route, childContexts, parent) {
    this.route = route;
    this.childContexts = childContexts;
    this.parent = parent;
  }
  get(token, notFoundValue) {
    if (token === ActivatedRoute) {
      return this.route;
    }
    if (token === ChildrenOutletContexts) {
      return this.childContexts;
    }
    return this.parent.get(token, notFoundValue);
  }
};
var INPUT_BINDER = new InjectionToken("");
var RoutedComponentInputBinder = class _RoutedComponentInputBinder {
  outletDataSubscriptions = /* @__PURE__ */ new Map();
  bindActivatedRouteToOutletComponent(outlet) {
    this.unsubscribeFromRouteData(outlet);
    this.subscribeToRouteData(outlet);
  }
  unsubscribeFromRouteData(outlet) {
    this.outletDataSubscriptions.get(outlet)?.unsubscribe();
    this.outletDataSubscriptions.delete(outlet);
  }
  subscribeToRouteData(outlet) {
    const {
      activatedRoute
    } = outlet;
    const dataSubscription = combineLatest([activatedRoute.queryParams, activatedRoute.params, activatedRoute.data]).pipe(switchMap(([queryParams, params, data], index) => {
      data = __spreadValues(__spreadValues(__spreadValues({}, queryParams), params), data);
      if (index === 0) {
        return of(data);
      }
      return Promise.resolve(data);
    })).subscribe((data) => {
      if (!outlet.isActivated || !outlet.activatedComponentRef || outlet.activatedRoute !== activatedRoute || activatedRoute.component === null) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      const mirror = reflectComponentType(activatedRoute.component);
      if (!mirror) {
        this.unsubscribeFromRouteData(outlet);
        return;
      }
      for (const {
        templateName
      } of mirror.inputs) {
        outlet.activatedComponentRef.setInput(templateName, data[templateName]);
      }
    });
    this.outletDataSubscriptions.set(outlet, dataSubscription);
  }
  /** @nocollapse */
  static \u0275fac = function RoutedComponentInputBinder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoutedComponentInputBinder)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RoutedComponentInputBinder,
    factory: _RoutedComponentInputBinder.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoutedComponentInputBinder, [{
    type: Injectable
  }], null, null);
})();
var provideComponentInputBinding = () => {
  return {
    provide: INPUT_BINDER,
    useFactory: componentInputBindingFactory,
    deps: [Router]
  };
};
function componentInputBindingFactory(router) {
  if (router?.componentInputBindingEnabled) {
    return new RoutedComponentInputBinder();
  }
  return null;
}
var raf = (h2) => {
  if (typeof __zone_symbol__requestAnimationFrame === "function") {
    return __zone_symbol__requestAnimationFrame(h2);
  }
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame(h2);
  }
  return setTimeout(h2);
};
var ValueAccessor = class _ValueAccessor {
  injector;
  elementRef;
  onChange = () => {
  };
  onTouched = () => {
  };
  lastValue;
  statusChanges;
  constructor(injector, elementRef) {
    this.injector = injector;
    this.elementRef = elementRef;
  }
  writeValue(value) {
    this.elementRef.nativeElement.value = this.lastValue = value;
    setIonicClasses(this.elementRef);
  }
  /**
   * Notifies the ControlValueAccessor of a change in the value of the control.
   *
   * This is called by each of the ValueAccessor directives when we want to update
   * the status and validity of the form control. For example with text components this
   * is called when the ionInput event is fired. For select components this is called
   * when the ionChange event is fired.
   *
   * This also updates the Ionic form status classes on the element.
   *
   * @param el The component element.
   * @param value The new value of the control.
   */
  handleValueChange(el, value) {
    if (el === this.elementRef.nativeElement) {
      if (value !== this.lastValue) {
        this.lastValue = value;
        this.onChange(value);
      }
      setIonicClasses(this.elementRef);
    }
  }
  _handleBlurEvent(el) {
    if (el === this.elementRef.nativeElement) {
      this.onTouched();
      setIonicClasses(this.elementRef);
    } else if (el.closest("ion-radio-group") === this.elementRef.nativeElement) {
      this.onTouched();
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.elementRef.nativeElement.disabled = isDisabled;
  }
  ngOnDestroy() {
    if (this.statusChanges) {
      this.statusChanges.unsubscribe();
    }
  }
  ngAfterViewInit() {
    let ngControl;
    try {
      ngControl = this.injector.get(NgControl);
    } catch {
    }
    if (!ngControl) {
      return;
    }
    if (ngControl.statusChanges) {
      this.statusChanges = ngControl.statusChanges.subscribe(() => setIonicClasses(this.elementRef));
    }
    const formControl = ngControl.control;
    if (formControl) {
      const methodsToPatch = ["markAsTouched", "markAllAsTouched", "markAsUntouched", "markAsDirty", "markAsPristine"];
      methodsToPatch.forEach((method) => {
        if (typeof formControl[method] !== "undefined") {
          const oldFn = formControl[method].bind(formControl);
          formControl[method] = (...params) => {
            oldFn(...params);
            setIonicClasses(this.elementRef);
          };
        }
      });
    }
  }
  /** @nocollapse */
  static \u0275fac = function ValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ValueAccessor)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ElementRef));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _ValueAccessor,
    hostBindings: function ValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("ionBlur", function ValueAccessor_ionBlur_HostBindingHandler($event) {
          return ctx._handleBlurEvent($event.target);
        });
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueAccessor, [{
    type: Directive
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleBlurEvent: [{
      type: HostListener,
      args: ["ionBlur", ["$event.target"]]
    }]
  });
})();
var setIonicClasses = (element) => {
  raf(() => {
    const input = element.nativeElement;
    const hasValue = input.value != null && input.value.toString().length > 0;
    const classes = getClasses(input);
    setClasses(input, classes);
    const item = input.closest("ion-item");
    if (item) {
      if (hasValue) {
        setClasses(item, [...classes, "item-has-value"]);
      } else {
        setClasses(item, classes);
      }
    }
  });
};
var getClasses = (element) => {
  const classList = element.classList;
  const classes = [];
  for (let i = 0; i < classList.length; i++) {
    const item = classList.item(i);
    if (item !== null && startsWith(item, "ng-")) {
      classes.push(`ion-${item.substring(3)}`);
    }
  }
  return classes;
};
var setClasses = (element, classes) => {
  const classList = element.classList;
  classList.remove("ion-valid", "ion-invalid", "ion-touched", "ion-untouched", "ion-dirty", "ion-pristine");
  classList.add(...classes);
};
var startsWith = (input, search) => {
  return input.substring(0, search.length) === search;
};
var BACK_BUTTON_INPUTS = ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"];
var IonBackButton = class IonBackButton2 {
  routerOutlet;
  navCtrl;
  config;
  r;
  z;
  el;
  constructor(routerOutlet, navCtrl, config, r2, z, c3) {
    this.routerOutlet = routerOutlet;
    this.navCtrl = navCtrl;
    this.config = config;
    this.r = r2;
    this.z = z;
    c3.detach();
    this.el = this.r.nativeElement;
  }
  /**
   * @internal
   */
  onClick(ev) {
    const defaultHref = this.defaultHref || this.config.get("backButtonDefaultHref");
    if (this.routerOutlet?.canGoBack()) {
      this.navCtrl.setDirection("back", void 0, void 0, this.routerAnimation);
      this.routerOutlet.pop();
      ev.preventDefault();
    } else if (defaultHref != null) {
      this.navCtrl.navigateBack(defaultHref, {
        animation: this.routerAnimation
      });
      ev.preventDefault();
    }
  }
  /** @nocollapse */
  static \u0275fac = function IonBackButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBackButton2)(\u0275\u0275directiveInject(IonRouterOutlet, 8), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(Config), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: IonBackButton2,
    hostBindings: function IonBackButton_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function IonBackButton_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      color: "color",
      defaultHref: "defaultHref",
      disabled: "disabled",
      icon: "icon",
      mode: "mode",
      routerAnimation: "routerAnimation",
      text: "text",
      type: "type"
    }
  });
};
IonBackButton = __decorate([ProxyCmp({
  inputs: BACK_BUTTON_INPUTS
})], IonBackButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackButton, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: BACK_BUTTON_INPUTS
    }]
  }], function() {
    return [{
      type: IonRouterOutlet,
      decorators: [{
        type: Optional
      }]
    }, {
      type: NavController
    }, {
      type: Config
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var NAV_INPUTS = ["animated", "animation", "root", "rootParams", "swipeGesture"];
var NAV_METHODS = ["push", "insert", "insertPages", "pop", "popTo", "popToRoot", "removeIndex", "setRoot", "setPages", "getActive", "getByIndex", "canGoBack", "getPrevious"];
var IonNav = class IonNav2 {
  z;
  el;
  constructor(ref, environmentInjector, injector, angularDelegate, z, c3) {
    this.z = z;
    c3.detach();
    this.el = ref.nativeElement;
    ref.nativeElement.delegate = angularDelegate.create(environmentInjector, injector);
    proxyOutputs(this, this.el, ["ionNavDidChange", "ionNavWillChange"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonNav2)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(EnvironmentInjector), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(AngularDelegate), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: IonNav2,
    inputs: {
      animated: "animated",
      animation: "animation",
      root: "root",
      rootParams: "rootParams",
      swipeGesture: "swipeGesture"
    }
  });
};
IonNav = __decorate([ProxyCmp({
  inputs: NAV_INPUTS,
  methods: NAV_METHODS
})], IonNav);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNav, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: NAV_INPUTS
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: EnvironmentInjector
    }, {
      type: Injector
    }, {
      type: AngularDelegate
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var RouterLinkDelegateDirective = class _RouterLinkDelegateDirective {
  locationStrategy;
  navCtrl;
  elementRef;
  router;
  routerLink;
  routerDirection = "forward";
  routerAnimation;
  constructor(locationStrategy, navCtrl, elementRef, router, routerLink) {
    this.locationStrategy = locationStrategy;
    this.navCtrl = navCtrl;
    this.elementRef = elementRef;
    this.router = router;
    this.routerLink = routerLink;
  }
  ngOnInit() {
    this.updateTargetUrlAndHref();
    this.updateTabindex();
  }
  ngOnChanges() {
    this.updateTargetUrlAndHref();
  }
  /**
   * The `tabindex` is set to `0` by default on the host element when
   * the `routerLink` directive is used. This causes issues with Ionic
   * components that wrap an `a` or `button` element, such as `ion-item`.
   * See issue https://github.com/angular/angular/issues/28345
   *
   * This method removes the `tabindex` attribute from the host element
   * to allow the Ionic component to manage the focus state correctly.
   */
  updateTabindex() {
    const ionicComponents = ["ION-BACK-BUTTON", "ION-BREADCRUMB", "ION-BUTTON", "ION-CARD", "ION-FAB-BUTTON", "ION-ITEM", "ION-ITEM-OPTION", "ION-MENU-BUTTON", "ION-SEGMENT-BUTTON", "ION-TAB-BUTTON"];
    const hostElement = this.elementRef.nativeElement;
    if (ionicComponents.includes(hostElement.tagName)) {
      if (hostElement.getAttribute("tabindex") === "0") {
        hostElement.removeAttribute("tabindex");
      }
    }
  }
  updateTargetUrlAndHref() {
    if (this.routerLink?.urlTree) {
      const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
      this.elementRef.nativeElement.href = href;
    }
  }
  /**
   * @internal
   */
  onClick(ev) {
    this.navCtrl.setDirection(this.routerDirection, void 0, void 0, this.routerAnimation);
    ev.preventDefault();
  }
  /** @nocollapse */
  static \u0275fac = function RouterLinkDelegateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLinkDelegateDirective)(\u0275\u0275directiveInject(LocationStrategy), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(RouterLink, 8));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLinkDelegateDirective,
    selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
    hostBindings: function RouterLinkDelegateDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function RouterLinkDelegateDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      routerDirection: "routerDirection",
      routerAnimation: "routerAnimation"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkDelegateDirective, [{
    type: Directive,
    args: [{
      selector: ":not(a):not(area)[routerLink]"
    }]
  }], function() {
    return [{
      type: LocationStrategy
    }, {
      type: NavController
    }, {
      type: ElementRef
    }, {
      type: Router
    }, {
      type: RouterLink,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    routerDirection: [{
      type: Input
    }],
    routerAnimation: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var RouterLinkWithHrefDelegateDirective = class _RouterLinkWithHrefDelegateDirective {
  locationStrategy;
  navCtrl;
  elementRef;
  router;
  routerLink;
  routerDirection = "forward";
  routerAnimation;
  constructor(locationStrategy, navCtrl, elementRef, router, routerLink) {
    this.locationStrategy = locationStrategy;
    this.navCtrl = navCtrl;
    this.elementRef = elementRef;
    this.router = router;
    this.routerLink = routerLink;
  }
  ngOnInit() {
    this.updateTargetUrlAndHref();
  }
  ngOnChanges() {
    this.updateTargetUrlAndHref();
  }
  updateTargetUrlAndHref() {
    if (this.routerLink?.urlTree) {
      const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
      this.elementRef.nativeElement.href = href;
    }
  }
  /**
   * @internal
   */
  onClick() {
    this.navCtrl.setDirection(this.routerDirection, void 0, void 0, this.routerAnimation);
  }
  /** @nocollapse */
  static \u0275fac = function RouterLinkWithHrefDelegateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RouterLinkWithHrefDelegateDirective)(\u0275\u0275directiveInject(LocationStrategy), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(RouterLink, 8));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLinkWithHrefDelegateDirective,
    selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
    hostBindings: function RouterLinkWithHrefDelegateDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function RouterLinkWithHrefDelegateDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    },
    inputs: {
      routerDirection: "routerDirection",
      routerAnimation: "routerAnimation"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkWithHrefDelegateDirective, [{
    type: Directive,
    args: [{
      selector: "a[routerLink],area[routerLink]"
    }]
  }], function() {
    return [{
      type: LocationStrategy
    }, {
      type: NavController
    }, {
      type: ElementRef
    }, {
      type: Router
    }, {
      type: RouterLink,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    routerDirection: [{
      type: Input
    }],
    routerAnimation: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var IonTabs = class _IonTabs {
  navCtrl;
  tabsInner;
  /**
   * Emitted before the tab view is changed.
   */
  ionTabsWillChange = new EventEmitter();
  /**
   * Emitted after the tab view is changed.
   */
  ionTabsDidChange = new EventEmitter();
  tabBarSlot = "bottom";
  hasTab = false;
  selectedTab;
  leavingTab;
  constructor(navCtrl) {
    this.navCtrl = navCtrl;
  }
  ngAfterViewInit() {
    const firstTab = this.tabs.length > 0 ? this.tabs.first : void 0;
    if (firstTab) {
      this.hasTab = true;
      this.setActiveTab(firstTab.tab);
      this.tabSwitch();
    }
  }
  ngAfterContentInit() {
    this.detectSlotChanges();
  }
  ngAfterContentChecked() {
    this.detectSlotChanges();
  }
  /**
   * @internal
   */
  onStackWillChange({
    enteringView,
    tabSwitch
  }) {
    const stackId = enteringView.stackId;
    if (tabSwitch && stackId !== void 0) {
      this.ionTabsWillChange.emit({
        tab: stackId
      });
    }
  }
  /**
   * @internal
   */
  onStackDidChange({
    enteringView,
    tabSwitch
  }) {
    const stackId = enteringView.stackId;
    if (tabSwitch && stackId !== void 0) {
      if (this.tabBar) {
        this.tabBar.selectedTab = stackId;
      }
      this.ionTabsDidChange.emit({
        tab: stackId
      });
    }
  }
  /**
   * When a tab button is clicked, there are several scenarios:
   * 1. If the selected tab is currently active (the tab button has been clicked
   *    again), then it should go to the root view for that tab.
   *
   *   a. Get the saved root view from the router outlet. If the saved root view
   *      matches the tabRootUrl, set the route view to this view including the
   *      navigation extras.
   *   b. If the saved root view from the router outlet does
   *      not match, navigate to the tabRootUrl. No navigation extras are
   *      included.
   *
   * 2. If the current tab tab is not currently selected, get the last route
   *    view from the router outlet.
   *
   *   a. If the last route view exists, navigate to that view including any
   *      navigation extras
   *   b. If the last route view doesn't exist, then navigate
   *      to the default tabRootUrl
   */
  select(tabOrEvent) {
    const isTabString = typeof tabOrEvent === "string";
    const tab = isTabString ? tabOrEvent : tabOrEvent.detail.tab;
    if (this.hasTab) {
      this.setActiveTab(tab);
      this.tabSwitch();
      return;
    }
    const alreadySelected = this.outlet.getActiveStackId() === tab;
    const tabRootUrl = `${this.outlet.tabsPrefix}/${tab}`;
    if (!isTabString) {
      tabOrEvent.stopPropagation();
    }
    if (alreadySelected) {
      const activeStackId = this.outlet.getActiveStackId();
      const activeView = this.outlet.getLastRouteView(activeStackId);
      if (activeView?.url === tabRootUrl) {
        return;
      }
      const rootView = this.outlet.getRootView(tab);
      const navigationExtras = rootView && tabRootUrl === rootView.url && rootView.savedExtras;
      return this.navCtrl.navigateRoot(tabRootUrl, __spreadProps(__spreadValues({}, navigationExtras), {
        animated: true,
        animationDirection: "back"
      }));
    } else {
      const lastRoute = this.outlet.getLastRouteView(tab);
      const url = lastRoute?.url || tabRootUrl;
      const navigationExtras = lastRoute?.savedExtras;
      return this.navCtrl.navigateRoot(url, __spreadProps(__spreadValues({}, navigationExtras), {
        animated: true,
        animationDirection: "back"
      }));
    }
  }
  setActiveTab(tab) {
    const tabs = this.tabs;
    const selectedTab = tabs.find((t2) => t2.tab === tab);
    if (!selectedTab) {
      console.error(`[Ionic Error]: Tab with id: "${tab}" does not exist`);
      return;
    }
    this.leavingTab = this.selectedTab;
    this.selectedTab = selectedTab;
    this.ionTabsWillChange.emit({
      tab
    });
    selectedTab.el.active = true;
  }
  tabSwitch() {
    const {
      selectedTab,
      leavingTab
    } = this;
    if (this.tabBar && selectedTab) {
      this.tabBar.selectedTab = selectedTab.tab;
    }
    if (leavingTab?.tab !== selectedTab?.tab) {
      if (leavingTab?.el) {
        leavingTab.el.active = false;
      }
    }
    if (selectedTab) {
      this.ionTabsDidChange.emit({
        tab: selectedTab.tab
      });
    }
  }
  getSelected() {
    if (this.hasTab) {
      return this.selectedTab?.tab;
    }
    return this.outlet.getActiveStackId();
  }
  /**
   * Detects changes to the slot attribute of the tab bar.
   *
   * If the slot attribute has changed, then the tab bar
   * should be relocated to the new slot position.
   */
  detectSlotChanges() {
    this.tabBars.forEach((tabBar) => {
      const currentSlot = tabBar.el.getAttribute("slot");
      if (currentSlot !== this.tabBarSlot) {
        this.tabBarSlot = currentSlot;
        this.relocateTabBar();
      }
    });
  }
  /**
   * Relocates the tab bar to the new slot position.
   */
  relocateTabBar() {
    const tabBar = this.tabBar.el;
    if (this.tabBarSlot === "top") {
      this.tabsInner.nativeElement.before(tabBar);
    } else {
      this.tabsInner.nativeElement.after(tabBar);
    }
  }
  /** @nocollapse */
  static \u0275fac = function IonTabs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonTabs)(\u0275\u0275directiveInject(NavController));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _IonTabs,
    selectors: [["ion-tabs"]],
    viewQuery: function IonTabs_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7, ElementRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabsInner = _t.first);
      }
    },
    hostBindings: function IonTabs_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("ionTabButtonClick", function IonTabs_ionTabButtonClick_HostBindingHandler($event) {
          return ctx.select($event);
        });
      }
    },
    outputs: {
      ionTabsWillChange: "ionTabsWillChange",
      ionTabsDidChange: "ionTabsDidChange"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabs, [{
    type: Directive,
    args: [{
      selector: "ion-tabs"
    }]
  }], function() {
    return [{
      type: NavController
    }];
  }, {
    tabsInner: [{
      type: ViewChild,
      args: ["tabsInner", {
        read: ElementRef,
        static: true
      }]
    }],
    ionTabsWillChange: [{
      type: Output
    }],
    ionTabsDidChange: [{
      type: Output
    }],
    select: [{
      type: HostListener,
      args: ["ionTabButtonClick", ["$event"]]
    }]
  });
})();
var OverlayBaseController = class {
  ctrl;
  constructor(ctrl) {
    this.ctrl = ctrl;
  }
  /**
   * Creates a new overlay
   */
  create(opts) {
    return this.ctrl.create(opts || {});
  }
  /**
   * When `id` is not provided, it dismisses the top overlay.
   */
  dismiss(data, role, id) {
    return this.ctrl.dismiss(data, role, id);
  }
  /**
   * Returns the top overlay.
   */
  getTop() {
    return this.ctrl.getTop();
  }
};

// node_modules/@ionic/core/dist/esm/app-globals-DhZjtldk.js
var appGlobalScript = initialize || (() => {
});
var globalScripts = appGlobalScript;

// node_modules/@ionic/core/dist/esm/loader.js
var defineCustomElements = (win, options) => __async(void 0, null, function* () {
  if (typeof window === "undefined") return void 0;
  yield globalScripts();
  return bootstrapLazy(JSON.parse('[["ion-menu_3",[[289,"ion-menu-button",{"color":[513],"disabled":[4],"menu":[1],"autoHide":[4,"auto-hide"],"type":[1],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]],[289,"ion-menu",{"contentId":[513,"content-id"],"menuId":[513,"menu-id"],"type":[1025],"disabled":[1028],"side":[513],"swipeGesture":[4,"swipe-gesture"],"maxEdgeStart":[2,"max-edge-start"],"isPaneVisible":[32],"isEndSide":[32],"isOpen":[64],"isActive":[64],"open":[64],"close":[64],"toggle":[64],"setOpen":[64]},[[16,"ionSplitPaneVisible","onSplitPaneChanged"],[2,"click","onBackdropClick"]],{"type":[{"typeChanged":0}],"disabled":[{"disabledChanged":0}],"side":[{"sideChanged":0}],"swipeGesture":[{"swipeGestureChanged":0}]}],[257,"ion-menu-toggle",{"menu":[1],"autoHide":[4,"auto-hide"],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]]]],["ion-input-password-toggle",[[33,"ion-input-password-toggle",{"color":[513],"showIcon":[1,"show-icon"],"hideIcon":[1,"hide-icon"],"type":[1025]},null,{"type":[{"onTypeChange":0}]}]]],["ion-fab_3",[[289,"ion-fab-button",{"color":[513],"activated":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1],"show":[4],"translucent":[4],"type":[1],"size":[1],"closeIcon":[1,"close-icon"]}],[257,"ion-fab",{"horizontal":[1],"vertical":[1],"edge":[4],"activated":[1028],"close":[64],"toggle":[64]},null,{"activated":[{"activatedChanged":0}]}],[257,"ion-fab-list",{"activated":[4],"side":[1]},null,{"activated":[{"activatedChanged":0}]}]]],["ion-refresher_2",[[0,"ion-refresher-content",{"pullingIcon":[1025,"pulling-icon"],"pullingText":[1,"pulling-text"],"refreshingSpinner":[1025,"refreshing-spinner"],"refreshingText":[1,"refreshing-text"]}],[32,"ion-refresher",{"pullMin":[2,"pull-min"],"pullMax":[2,"pull-max"],"closeDuration":[1,"close-duration"],"snapbackDuration":[1,"snapback-duration"],"pullFactor":[2,"pull-factor"],"disabled":[4],"nativeRefresher":[32],"state":[32],"complete":[64],"cancel":[64],"getProgress":[64]},null,{"disabled":[{"disabledChanged":0}]}]]],["ion-back-button",[[33,"ion-back-button",{"color":[513],"defaultHref":[1025,"default-href"],"disabled":[516],"icon":[1],"text":[1],"type":[1],"routerAnimation":[16]}]]],["ion-toast",[[33,"ion-toast",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"color":[513],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"duration":[2],"header":[1],"layout":[1],"message":[1],"keyboardClose":[4,"keyboard-close"],"position":[1],"positionAnchor":[1,"position-anchor"],"buttons":[16],"translucent":[4],"animated":[4],"icon":[1],"htmlAttributes":[16],"swipeGesture":[1,"swipe-gesture"],"isOpen":[4,"is-open"],"trigger":[1],"revealContentToScreenReader":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"swipeGesture":[{"swipeGestureChanged":0}],"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}]}]]],["ion-card_5",[[289,"ion-card",{"color":[513],"button":[4],"type":[1],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}],[32,"ion-card-content"],[289,"ion-card-header",{"color":[513],"translucent":[4]}],[289,"ion-card-subtitle",{"color":[513]}],[289,"ion-card-title",{"color":[513]}]]],["ion-item-option_3",[[289,"ion-item-option",{"color":[513],"disabled":[4],"download":[1],"expandable":[4],"href":[1],"rel":[1],"target":[1],"type":[1]}],[32,"ion-item-options",{"side":[1],"fireSwipeEvent":[64]}],[0,"ion-item-sliding",{"disabled":[4],"state":[32],"getOpenAmount":[64],"getSlidingRatio":[64],"open":[64],"close":[64],"closeOpened":[64]},null,{"disabled":[{"disabledChanged":0}]}]]],["ion-accordion_2",[[305,"ion-accordion",{"value":[1],"disabled":[4],"readonly":[4],"toggleIcon":[1,"toggle-icon"],"toggleIconSlot":[1,"toggle-icon-slot"],"state":[32],"isNext":[32],"isPrevious":[32],"hasInteracted":[32]},null,{"value":[{"valueChanged":0}]}],[289,"ion-accordion-group",{"animated":[4],"multiple":[4],"value":[1025],"disabled":[4],"readonly":[4],"expand":[1],"requestAccordionToggle":[64],"getAccordions":[64]},[[0,"keydown","onKeydown"]],{"value":[{"valueChanged":0}],"disabled":[{"disabledChanged":0}],"readonly":[{"readonlyChanged":0}]}]]],["ion-infinite-scroll_2",[[32,"ion-infinite-scroll-content",{"loadingSpinner":[1025,"loading-spinner"],"loadingText":[1,"loading-text"]}],[0,"ion-infinite-scroll",{"threshold":[1],"disabled":[4],"position":[1],"isLoading":[32],"complete":[64]},null,{"threshold":[{"thresholdChanged":0}],"disabled":[{"disabledChanged":0}]}]]],["ion-reorder_2",[[289,"ion-reorder",null,[[2,"click","onClick"]]],[0,"ion-reorder-group",{"disabled":[4],"state":[32],"complete":[64]},null,{"disabled":[{"disabledChanged":0}]}]]],["ion-segment_2",[[289,"ion-segment-button",{"contentId":[513,"content-id"],"disabled":[1028],"layout":[1],"type":[1],"value":[8],"checked":[32],"setFocus":[64]},null,{"value":[{"valueChanged":0}]}],[289,"ion-segment",{"color":[513],"disabled":[4],"scrollable":[4],"swipeGesture":[4,"swipe-gesture"],"value":[1032],"selectOnFocus":[4,"select-on-focus"],"activated":[32]},[[16,"ionSegmentViewScroll","handleSegmentViewScroll"],[0,"keydown","onKeyDown"]],{"color":[{"colorChanged":0}],"swipeGesture":[{"swipeGestureChanged":0}],"value":[{"valueChanged":0}],"disabled":[{"disabledChanged":0}]}]]],["ion-chip",[[289,"ion-chip",{"color":[513],"outline":[4],"disabled":[4]}]]],["ion-input",[[294,"ion-input",{"color":[513],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearInputIcon":[1,"clear-input-icon"],"clearOnEdit":[4,"clear-on-edit"],"counter":[4],"counterFormatter":[16],"debounce":[2],"disabled":[516],"enterkeyhint":[1],"errorText":[1,"error-text"],"fill":[1],"inputmode":[1],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"max":[8],"maxlength":[2],"min":[8],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[516],"required":[4],"shape":[1],"spellcheck":[4],"step":[1],"type":[1],"value":[1032],"hasFocus":[32],"isInvalid":[32],"setFocus":[64],"getInputElement":[64]},[[2,"click","onClickCapture"]],{"debounce":[{"debounceChanged":0}],"type":[{"onTypeChange":0}],"value":[{"valueChanged":0}],"dir":[{"onDirChanged":0}]}]]],["ion-searchbar",[[34,"ion-searchbar",{"color":[513],"animated":[4],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"cancelButtonIcon":[1,"cancel-button-icon"],"cancelButtonText":[1,"cancel-button-text"],"clearIcon":[1,"clear-icon"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"searchIcon":[1,"search-icon"],"showCancelButton":[1,"show-cancel-button"],"showClearButton":[1,"show-clear-button"],"spellcheck":[4],"type":[1],"value":[1025],"focused":[32],"noAnimate":[32],"setFocus":[64],"getInputElement":[64]},null,{"lang":[{"onLangChanged":0}],"dir":[{"onDirChanged":0}],"debounce":[{"debounceChanged":0}],"value":[{"valueChanged":0}],"showCancelButton":[{"showCancelButtonChanged":0}]}]]],["ion-toggle",[[289,"ion-toggle",{"color":[513],"name":[1],"checked":[1028],"disabled":[4],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"value":[1],"enableOnOffLabels":[4,"enable-on-off-labels"],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"required":[4],"activated":[32],"isInvalid":[32],"hintTextId":[32]},null,{"disabled":[{"disabledChanged":0}]}]]],["ion-nav_2",[[257,"ion-nav",{"delegate":[16],"swipeGesture":[1028,"swipe-gesture"],"animated":[4],"animation":[16],"rootParams":[16],"root":[1],"push":[64],"insert":[64],"insertPages":[64],"pop":[64],"popTo":[64],"popToRoot":[64],"removeIndex":[64],"setRoot":[64],"setPages":[64],"setRouteId":[64],"getRouteId":[64],"getActive":[64],"getByIndex":[64],"canGoBack":[64],"getPrevious":[64],"getLength":[64]},null,{"swipeGesture":[{"swipeGestureChanged":0}],"root":[{"rootChanged":0}]}],[0,"ion-nav-link",{"component":[1],"componentProps":[16],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}]]],["ion-tab_2",[[257,"ion-tab",{"active":[1028],"delegate":[16],"tab":[1],"component":[1],"setActive":[64]},null,{"active":[{"changeActive":0}]}],[257,"ion-tabs",{"useRouter":[1028,"use-router"],"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64],"setRouteId":[64],"getRouteId":[64]}]]],["ion-textarea",[[294,"ion-textarea",{"color":[513],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[516],"fill":[1],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[516],"required":[4],"spellcheck":[4],"cols":[514],"rows":[2],"wrap":[1],"autoGrow":[516,"auto-grow"],"value":[1025],"counter":[4],"counterFormatter":[16],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"shape":[1],"hasFocus":[32],"isInvalid":[32],"setFocus":[64],"getInputElement":[64]},[[2,"click","onClickCapture"]],{"debounce":[{"debounceChanged":0}],"value":[{"valueChanged":0}],"dir":[{"onDirChanged":0}]}]]],["ion-backdrop",[[33,"ion-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]],["ion-loading",[[34,"ion-loading",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"message":[1],"cssClass":[1,"css-class"],"duration":[2],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"spinner":[1025],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}]}]]],["ion-breadcrumb_2",[[289,"ion-breadcrumb",{"collapsed":[4],"last":[4],"showCollapsedIndicator":[4,"show-collapsed-indicator"],"color":[1],"active":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"separator":[4],"target":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}],[289,"ion-breadcrumbs",{"color":[513],"maxItems":[2,"max-items"],"itemsBeforeCollapse":[2,"items-before-collapse"],"itemsAfterCollapse":[2,"items-after-collapse"],"collapsed":[32],"activeChanged":[32]},[[0,"collapsedClick","onCollapsedClick"]],{"maxItems":[{"maxItemsChanged":0}],"itemsBeforeCollapse":[{"maxItemsChanged":0}],"itemsAfterCollapse":[{"maxItemsChanged":0}]}]]],["ion-tab-bar_2",[[289,"ion-tab-button",{"disabled":[4],"download":[1],"href":[1],"rel":[1],"layout":[1025],"selected":[1028],"tab":[1],"target":[1]},[[8,"ionTabBarChanged","onTabBarChanged"]]],[289,"ion-tab-bar",{"color":[513],"selectedTab":[1,"selected-tab"],"translucent":[4],"keyboardVisible":[32]},null,{"selectedTab":[{"selectedTabChanged":0}]}]]],["ion-datetime-button",[[289,"ion-datetime-button",{"color":[513],"disabled":[516],"datetime":[1],"datetimePresentation":[32],"dateText":[32],"timeText":[32],"datetimeActive":[32],"selectedButton":[32]}]]],["ion-route_4",[[0,"ion-route",{"url":[1],"component":[1],"componentProps":[16],"beforeLeave":[16],"beforeEnter":[16]},null,{"url":[{"onUpdate":0}],"component":[{"onUpdate":0}],"componentProps":[{"onComponentProps":0}]}],[0,"ion-route-redirect",{"from":[1],"to":[1]},null,{"from":[{"propDidChange":0}],"to":[{"propDidChange":0}]}],[0,"ion-router",{"root":[1],"useHash":[4,"use-hash"],"canTransition":[64],"push":[64],"back":[64],"printDebug":[64],"navChanged":[64]},[[8,"popstate","onPopState"],[4,"ionBackButton","onBackButton"]]],[257,"ion-router-link",{"color":[513],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}]]],["ion-avatar_3",[[289,"ion-avatar"],[289,"ion-badge",{"color":[513]}],[257,"ion-thumbnail"]]],["ion-col_3",[[257,"ion-col",{"offset":[1],"offsetXs":[1,"offset-xs"],"offsetSm":[1,"offset-sm"],"offsetMd":[1,"offset-md"],"offsetLg":[1,"offset-lg"],"offsetXl":[1,"offset-xl"],"pull":[1],"pullXs":[1,"pull-xs"],"pullSm":[1,"pull-sm"],"pullMd":[1,"pull-md"],"pullLg":[1,"pull-lg"],"pullXl":[1,"pull-xl"],"push":[1],"pushXs":[1,"push-xs"],"pushSm":[1,"push-sm"],"pushMd":[1,"push-md"],"pushLg":[1,"push-lg"],"pushXl":[1,"push-xl"],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"]},[[9,"resize","onResize"]]],[257,"ion-grid",{"fixed":[4]}],[257,"ion-row"]]],["ion-img",[[1,"ion-img",{"alt":[1],"src":[1],"loadSrc":[32],"loadError":[32]},null,{"src":[{"srcChanged":0}]}]]],["ion-input-otp",[[294,"ion-input-otp",{"autocapitalize":[1],"color":[513],"disabled":[516],"fill":[1],"inputmode":[1],"length":[2],"pattern":[1],"readonly":[516],"separators":[1],"shape":[1],"size":[1],"type":[1],"value":[1032],"inputValues":[32],"hasFocus":[32],"previousInputValues":[32],"setFocus":[64]},null,{"value":[{"valueChanged":0}],"separators":[{"processSeparators":0}],"length":[{"processSeparators":0}]}]]],["ion-progress-bar",[[33,"ion-progress-bar",{"type":[1],"reversed":[4],"value":[2],"buffer":[2],"color":[513]}]]],["ion-range",[[289,"ion-range",{"color":[513],"debounce":[2],"name":[1],"label":[1],"dualKnobs":[4,"dual-knobs"],"min":[2],"max":[2],"pin":[4],"pinFormatter":[16],"snaps":[4],"step":[2],"ticks":[4],"activeBarStart":[1026,"active-bar-start"],"disabled":[4],"value":[1026],"labelPlacement":[1,"label-placement"],"ratioA":[32],"ratioB":[32],"activatedKnob":[32],"focusedKnob":[32],"hoveredKnob":[32],"pressedKnob":[32]},null,{"debounce":[{"debounceChanged":0}],"min":[{"minChanged":0}],"max":[{"maxChanged":0}],"step":[{"stepChanged":0}],"activeBarStart":[{"activeBarStartChanged":0}],"disabled":[{"disabledChanged":0}],"value":[{"valueChanged":0}]}]]],["ion-segment-content",[[257,"ion-segment-content"]]],["ion-segment-view",[[289,"ion-segment-view",{"disabled":[4],"swipeGesture":[4,"swipe-gesture"],"isManualScroll":[32],"setContent":[64]},[[1,"scroll","handleScroll"],[1,"touchstart","handleScrollStart"],[1,"touchend","handleTouchEnd"]]]]],["ion-split-pane",[[289,"ion-split-pane",{"contentId":[513,"content-id"],"disabled":[4],"when":[8],"visible":[32],"isVisible":[64]},null,{"visible":[{"visibleChanged":0}],"disabled":[{"updateState":0}],"when":[{"updateState":0}]}]]],["ion-text",[[257,"ion-text",{"color":[513]}]]],["ion-select-modal",[[34,"ion-select-modal",{"header":[1],"cancelText":[1,"cancel-text"],"multiple":[4],"options":[16]}]]],["ion-datetime_3",[[289,"ion-datetime",{"color":[1],"name":[1],"disabled":[4],"formatOptions":[16],"readonly":[4],"isDateEnabled":[16],"showAdjacentDays":[4,"show-adjacent-days"],"min":[1025],"max":[1025],"presentation":[1],"cancelText":[1,"cancel-text"],"doneText":[1,"done-text"],"clearText":[1,"clear-text"],"yearValues":[8,"year-values"],"monthValues":[8,"month-values"],"dayValues":[8,"day-values"],"hourValues":[8,"hour-values"],"minuteValues":[8,"minute-values"],"locale":[1],"firstDayOfWeek":[2,"first-day-of-week"],"titleSelectedDatesFormatter":[16],"multiple":[4],"highlightedDates":[16],"value":[1025],"showDefaultTitle":[4,"show-default-title"],"showDefaultButtons":[4,"show-default-buttons"],"showClearButton":[4,"show-clear-button"],"showDefaultTimeLabel":[4,"show-default-time-label"],"hourCycle":[1,"hour-cycle"],"size":[1],"preferWheel":[4,"prefer-wheel"],"showMonthAndYear":[32],"activeParts":[32],"workingParts":[32],"isTimePopoverOpen":[32],"forceRenderDate":[32],"confirm":[64],"reset":[64],"cancel":[64]},null,{"formatOptions":[{"formatOptionsChanged":0}],"disabled":[{"disabledChanged":0}],"min":[{"minChanged":0}],"max":[{"maxChanged":0}],"presentation":[{"presentationChanged":0}],"yearValues":[{"yearValuesChanged":0}],"monthValues":[{"monthValuesChanged":0}],"dayValues":[{"dayValuesChanged":0}],"hourValues":[{"hourValuesChanged":0}],"minuteValues":[{"minuteValuesChanged":0}],"value":[{"valueChanged":0}]}],[34,"ion-picker-legacy",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"columns":[16],"cssClass":[1,"css-class"],"duration":[2],"showBackdrop":[4,"show-backdrop"],"backdropDismiss":[4,"backdrop-dismiss"],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"getColumn":[64]},null,{"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}]}],[32,"ion-picker-legacy-column",{"col":[16]},null,{"col":[{"colChanged":0}]}]]],["ion-action-sheet",[[34,"ion-action-sheet",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"header":[1],"subHeader":[1,"sub-header"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"activeRadioId":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[0,"keydown","onKeydown"]],{"buttons":[{"buttonsChanged":0}],"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}]}]]],["ion-alert",[[34,"ion-alert",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"header":[1],"subHeader":[1,"sub-header"],"message":[1],"buttons":[16],"inputs":[1040],"backdropDismiss":[4,"backdrop-dismiss"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[4,"keydown","onKeydown"]],{"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}],"buttons":[{"buttonsChanged":0}],"inputs":[{"inputsChanged":0}]}]]],["ion-modal",[[289,"ion-modal",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"breakpoints":[16],"expandToScroll":[4,"expand-to-scroll"],"initialBreakpoint":[2,"initial-breakpoint"],"backdropBreakpoint":[2,"backdrop-breakpoint"],"handle":[4],"handleBehavior":[1,"handle-behavior"],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"presentingElement":[16],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"keepContentsMounted":[4,"keep-contents-mounted"],"focusTrap":[4,"focus-trap"],"canDismiss":[4,"can-dismiss"],"isSheetModal":[32],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"setCurrentBreakpoint":[64],"getCurrentBreakpoint":[64]},[[9,"resize","onWindowResize"]],{"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}]}]]],["ion-picker",[[289,"ion-picker",{"exitInputMode":[64]},[[1,"touchstart","preventTouchStartPropagation"]]]]],["ion-picker-column",[[257,"ion-picker-column",{"disabled":[4],"value":[1032],"color":[513],"numericInput":[4,"numeric-input"],"ariaLabel":[32],"isActive":[32],"scrollActiveItemIntoView":[64],"setValue":[64],"setFocus":[64]},null,{"aria-label":[{"ariaLabelChanged":0}],"value":[{"valueChange":0}]}]]],["ion-picker-column-option",[[289,"ion-picker-column-option",{"disabled":[4],"value":[8],"color":[513],"ariaLabel":[32]},null,{"aria-label":[{"onAriaLabelChange":0}]}]]],["ion-popover",[[289,"ion-popover",{"hasController":[4,"has-controller"],"delegate":[16],"overlayIndex":[2,"overlay-index"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"keyboardClose":[4,"keyboard-close"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"showBackdrop":[4,"show-backdrop"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"triggerAction":[1,"trigger-action"],"trigger":[1],"size":[1],"dismissOnSelect":[4,"dismiss-on-select"],"reference":[1],"side":[1],"alignment":[1025],"arrow":[4],"isOpen":[4,"is-open"],"keyboardEvents":[4,"keyboard-events"],"focusTrap":[4,"focus-trap"],"keepContentsMounted":[4,"keep-contents-mounted"],"presented":[32],"presentFromTrigger":[64],"present":[64],"dismiss":[64],"getParentPopover":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"trigger":[{"onTriggerChange":0}],"triggerAction":[{"onTriggerChange":0}],"isOpen":[{"onIsOpenChange":0}]}]]],["ion-checkbox",[[289,"ion-checkbox",{"color":[513],"name":[1],"checked":[1028],"indeterminate":[1028],"disabled":[4],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"value":[8],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"required":[4],"isInvalid":[32],"hasLabelContent":[32],"hintTextId":[32],"setFocus":[64]}]]],["ion-item_8",[[289,"ion-item-divider",{"color":[513],"sticky":[4]}],[32,"ion-item-group"],[289,"ion-note",{"color":[513]}],[1,"ion-skeleton-text",{"animated":[4]}],[294,"ion-label",{"color":[513],"position":[1],"noAnimate":[32]},null,{"color":[{"colorChanged":0}],"position":[{"positionChanged":0}]}],[289,"ion-list-header",{"color":[513],"lines":[1]}],[289,"ion-item",{"color":[513],"button":[4],"detail":[4],"detailIcon":[1,"detail-icon"],"disabled":[516],"download":[1],"href":[1],"rel":[1],"lines":[1],"routerAnimation":[16],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"multipleInputs":[32],"focusable":[32],"isInteractive":[32]},[[0,"ionColor","labelColorChanged"],[0,"ionStyle","itemStyle"]],{"button":[{"buttonChanged":0}]}],[32,"ion-list",{"lines":[1],"inset":[4],"closeSlidingItems":[64]}]]],["ion-app_8",[[0,"ion-app",{"setFocus":[64]}],[292,"ion-footer",{"collapse":[1],"translucent":[4],"keyboardVisible":[32]}],[257,"ion-router-outlet",{"mode":[1025],"delegate":[16],"animated":[4],"animation":[16],"swipeHandler":[16],"commit":[64],"setRouteId":[64],"getRouteId":[64]},null,{"swipeHandler":[{"swipeHandlerChanged":0}]}],[257,"ion-content",{"color":[513],"fullscreen":[4],"fixedSlotPlacement":[1,"fixed-slot-placement"],"forceOverscroll":[1028,"force-overscroll"],"scrollX":[4,"scroll-x"],"scrollY":[4,"scroll-y"],"scrollEvents":[4,"scroll-events"],"recalculateDimensions":[64],"getScrollElement":[64],"getBackgroundElement":[64],"scrollToTop":[64],"scrollToBottom":[64],"scrollByPoint":[64],"scrollToPoint":[64]},[[9,"resize","onResize"]]],[292,"ion-header",{"collapse":[1],"translucent":[4]}],[289,"ion-title",{"color":[513],"size":[1]},null,{"size":[{"sizeChanged":0}]}],[289,"ion-toolbar",{"color":[513]},[[0,"ionStyle","childrenStyle"]]],[294,"ion-buttons",{"collapse":[4]}]]],["ion-select_3",[[289,"ion-select",{"cancelText":[1,"cancel-text"],"color":[513],"compareWith":[1,"compare-with"],"disabled":[4],"fill":[1],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"interface":[1],"interfaceOptions":[8,"interface-options"],"justify":[1],"label":[1],"labelPlacement":[1,"label-placement"],"multiple":[4],"name":[1],"okText":[1,"ok-text"],"placeholder":[1],"selectedText":[1,"selected-text"],"toggleIcon":[1,"toggle-icon"],"expandedIcon":[1,"expanded-icon"],"shape":[1],"value":[1032],"required":[4],"isExpanded":[32],"hasFocus":[32],"isInvalid":[32],"hintTextId":[32],"open":[64]},null,{"disabled":[{"styleChanged":0}],"isExpanded":[{"styleChanged":0}],"placeholder":[{"styleChanged":0}],"value":[{"styleChanged":0}]}],[1,"ion-select-option",{"disabled":[4],"value":[8]}],[34,"ion-select-popover",{"header":[1],"subHeader":[1,"sub-header"],"message":[1],"multiple":[4],"options":[16]}]]],["ion-spinner",[[1,"ion-spinner",{"color":[513],"duration":[2],"name":[1],"paused":[4]}]]],["ion-radio_2",[[289,"ion-radio",{"color":[513],"name":[1],"disabled":[4],"value":[8],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"checked":[32],"buttonTabindex":[32],"setFocus":[64],"setButtonTabindex":[64]},null,{"value":[{"valueChanged":0}]}],[292,"ion-radio-group",{"allowEmptySelection":[4,"allow-empty-selection"],"compareWith":[1,"compare-with"],"name":[1],"value":[1032],"helperText":[1,"helper-text"],"errorText":[1,"error-text"],"isInvalid":[32],"hintTextId":[32],"setFocus":[64]},[[4,"keydown","onKeydown"]],{"value":[{"valueChanged":0}]}]]],["ion-ripple-effect",[[1,"ion-ripple-effect",{"type":[1],"addRipple":[64]}]]],["ion-button_2",[[289,"ion-button",{"color":[513],"buttonType":[1025,"button-type"],"disabled":[516],"expand":[513],"fill":[1537],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"download":[1],"href":[1],"rel":[1],"shape":[513],"size":[513],"strong":[4],"target":[1],"type":[1],"form":[1],"isCircle":[32]},null,{"disabled":[{"disabledChanged":0}],"aria-checked":[{"onAriaChanged":0}],"aria-label":[{"onAriaChanged":0}],"aria-pressed":[{"onAriaChanged":0}]}],[1,"ion-icon",{"mode":[1025],"color":[1],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[513],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32]},null,{"name":[{"loadIcon":0}],"src":[{"loadIcon":0}],"icon":[{"loadIcon":0}],"ios":[{"loadIcon":0}],"md":[{"loadIcon":0}]}]]]]'), options);
});

// node_modules/@ionic/core/loader/index.js
(function() {
  if ("undefined" !== typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var a2 = HTMLElement;
    window.HTMLElement = function() {
      return Reflect.construct(a2, [], this.constructor);
    };
    HTMLElement.prototype = a2.prototype;
    HTMLElement.prototype.constructor = HTMLElement;
    Object.setPrototypeOf(HTMLElement, a2);
  }
})();

// node_modules/@ionic/angular/fesm2022/ionic-angular.mjs
var _c02 = ["*"];
var _c1 = ["outletContent"];
var _c2 = ["outlet"];
var _c3 = [[["", "slot", "top"]], "*", [["ion-tab"]]];
var _c4 = ["[slot=top]", "*", "ion-tab"];
function IonTabs_ion_router_outlet_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-router-outlet", 5, 1);
    \u0275\u0275listener("stackWillChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackWillChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStackWillChange($event));
    })("stackDidChange", function IonTabs_ion_router_outlet_3_Template_ion_router_outlet_stackDidChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStackDidChange($event));
    });
    \u0275\u0275elementEnd();
  }
}
function IonTabs_ng_content_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2, ["*ngIf", "tabs.length > 0"]);
  }
}
function IonModal_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275elementContainer(1, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template);
  }
}
function IonPopover_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template);
  }
}
var BooleanValueAccessorDirective = class _BooleanValueAccessorDirective extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  writeValue(value) {
    this.elementRef.nativeElement.checked = this.lastValue = value;
    setIonicClasses(this.elementRef);
  }
  _handleIonChange(el) {
    this.handleValueChange(el, el.checked);
  }
  /** @nocollapse */
  static \u0275fac = function BooleanValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BooleanValueAccessorDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ElementRef));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BooleanValueAccessorDirective,
    selectors: [["ion-checkbox"], ["ion-toggle"]],
    hostBindings: function BooleanValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("ionChange", function BooleanValueAccessorDirective_ionChange_HostBindingHandler($event) {
          return ctx._handleIonChange($event.target);
        });
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _BooleanValueAccessorDirective,
      multi: true
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BooleanValueAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "ion-checkbox,ion-toggle",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: BooleanValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleIonChange: [{
      type: HostListener,
      args: ["ionChange", ["$event.target"]]
    }]
  });
})();
var NumericValueAccessorDirective = class _NumericValueAccessorDirective extends ValueAccessor {
  el;
  constructor(injector, el) {
    super(injector, el);
    this.el = el;
  }
  handleInputEvent(el) {
    this.handleValueChange(el, el.value);
  }
  registerOnChange(fn) {
    if (this.el.nativeElement.tagName === "ION-INPUT" || this.el.nativeElement.tagName === "ION-INPUT-OTP") {
      super.registerOnChange((value) => {
        fn(value === "" ? null : parseFloat(value));
      });
    } else {
      super.registerOnChange(fn);
    }
  }
  /** @nocollapse */
  static \u0275fac = function NumericValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NumericValueAccessorDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ElementRef));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NumericValueAccessorDirective,
    selectors: [["ion-input", "type", "number"], ["ion-input-otp", 3, "type", "text"], ["ion-range"]],
    hostBindings: function NumericValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("ionInput", function NumericValueAccessorDirective_ionInput_HostBindingHandler($event) {
          return ctx.handleInputEvent($event.target);
        });
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _NumericValueAccessorDirective,
      multi: true
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericValueAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "ion-input[type=number],ion-input-otp:not([type=text]),ion-range",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NumericValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    handleInputEvent: [{
      type: HostListener,
      args: ["ionInput", ["$event.target"]]
    }]
  });
})();
var SelectValueAccessorDirective = class _SelectValueAccessorDirective extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  _handleChangeEvent(el) {
    this.handleValueChange(el, el.value);
  }
  /** @nocollapse */
  static \u0275fac = function SelectValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectValueAccessorDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ElementRef));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectValueAccessorDirective,
    selectors: [["ion-select"], ["ion-radio-group"], ["ion-segment"], ["ion-datetime"]],
    hostBindings: function SelectValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("ionChange", function SelectValueAccessorDirective_ionChange_HostBindingHandler($event) {
          return ctx._handleChangeEvent($event.target);
        });
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _SelectValueAccessorDirective,
      multi: true
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectValueAccessorDirective, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "ion-select, ion-radio-group, ion-segment, ion-datetime",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: SelectValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleChangeEvent: [{
      type: HostListener,
      args: ["ionChange", ["$event.target"]]
    }]
  });
})();
var TextValueAccessorDirective = class _TextValueAccessorDirective extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  _handleInputEvent(el) {
    this.handleValueChange(el, el.value);
  }
  /** @nocollapse */
  static \u0275fac = function TextValueAccessorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextValueAccessorDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ElementRef));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TextValueAccessorDirective,
    selectors: [["ion-input", 3, "type", "number"], ["ion-input-otp", "type", "text"], ["ion-textarea"], ["ion-searchbar"]],
    hostBindings: function TextValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("ionInput", function TextValueAccessorDirective_ionInput_HostBindingHandler($event) {
          return ctx._handleInputEvent($event.target);
        });
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _TextValueAccessorDirective,
      multi: true
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextValueAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "ion-input:not([type=number]),ion-input-otp[type=text],ion-textarea,ion-searchbar",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: TextValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleInputEvent: [{
      type: HostListener,
      args: ["ionInput", ["$event.target"]]
    }]
  });
})();
var proxyInputs2 = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach((item) => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => this.el[item] = val);
      },
      /**
       * In the event that proxyInputs is called
       * multiple times re-defining these inputs
       * will cause an error to be thrown. As a result
       * we set configurable: true to indicate these
       * properties can be changed.
       */
      configurable: true
    });
  });
};
var proxyMethods2 = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach((methodName) => {
    Prototype[methodName] = function() {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};
var proxyOutputs2 = (instance, el, events) => {
  events.forEach((eventName) => instance[eventName] = fromEvent(el, eventName));
};
function ProxyCmp2(opts) {
  const decorator = function(cls) {
    const {
      defineCustomElementFn,
      inputs,
      methods
    } = opts;
    if (defineCustomElementFn !== void 0) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs2(cls, inputs);
    }
    if (methods) {
      proxyMethods2(cls, methods);
    }
    return cls;
  };
  return decorator;
}
var IonAccordion = class IonAccordion2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonAccordion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAccordion2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonAccordion2,
    selectors: [["ion-accordion"]],
    inputs: {
      disabled: "disabled",
      mode: "mode",
      readonly: "readonly",
      toggleIcon: "toggleIcon",
      toggleIconSlot: "toggleIconSlot",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonAccordion_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAccordion = __decorate([ProxyCmp2({
  inputs: ["disabled", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"]
})], IonAccordion);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAccordion, [{
    type: Component,
    args: [{
      selector: "ion-accordion",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonAccordionGroup = class IonAccordionGroup2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionChange"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonAccordionGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAccordionGroup2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonAccordionGroup2,
    selectors: [["ion-accordion-group"]],
    inputs: {
      animated: "animated",
      disabled: "disabled",
      expand: "expand",
      mode: "mode",
      multiple: "multiple",
      readonly: "readonly",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonAccordionGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAccordionGroup = __decorate([ProxyCmp2({
  inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"]
})], IonAccordionGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAccordionGroup, [{
    type: Component,
    args: [{
      selector: "ion-accordion-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonActionSheet = class IonActionSheet2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionActionSheetDidPresent", "ionActionSheetWillPresent", "ionActionSheetWillDismiss", "ionActionSheetDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonActionSheet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonActionSheet2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonActionSheet2,
    selectors: [["ion-action-sheet"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      buttons: "buttons",
      cssClass: "cssClass",
      enterAnimation: "enterAnimation",
      header: "header",
      htmlAttributes: "htmlAttributes",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      mode: "mode",
      subHeader: "subHeader",
      translucent: "translucent",
      trigger: "trigger"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonActionSheet_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonActionSheet = __decorate([ProxyCmp2({
  inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "subHeader", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonActionSheet);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonActionSheet, [{
    type: Component,
    args: [{
      selector: "ion-action-sheet",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "subHeader", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonAlert = class IonAlert2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionAlertDidPresent", "ionAlertWillPresent", "ionAlertWillDismiss", "ionAlertDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonAlert_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAlert2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonAlert2,
    selectors: [["ion-alert"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      buttons: "buttons",
      cssClass: "cssClass",
      enterAnimation: "enterAnimation",
      header: "header",
      htmlAttributes: "htmlAttributes",
      inputs: "inputs",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      message: "message",
      mode: "mode",
      subHeader: "subHeader",
      translucent: "translucent",
      trigger: "trigger"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonAlert_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAlert = __decorate([ProxyCmp2({
  inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "inputs", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "subHeader", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonAlert);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAlert, [{
    type: Component,
    args: [{
      selector: "ion-alert",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "inputs", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "subHeader", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonApp = class IonApp2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonApp_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonApp2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonApp2,
    selectors: [["ion-app"]],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonApp_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonApp = __decorate([ProxyCmp2({
  methods: ["setFocus"]
})], IonApp);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonApp, [{
    type: Component,
    args: [{
      selector: "ion-app",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonAvatar = class IonAvatar2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonAvatar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonAvatar2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonAvatar2,
    selectors: [["ion-avatar"]],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonAvatar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAvatar = __decorate([ProxyCmp2({})], IonAvatar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAvatar, [{
    type: Component,
    args: [{
      selector: "ion-avatar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonBackdrop = class IonBackdrop2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionBackdropTap"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonBackdrop_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBackdrop2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonBackdrop2,
    selectors: [["ion-backdrop"]],
    inputs: {
      stopPropagation: "stopPropagation",
      tappable: "tappable",
      visible: "visible"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonBackdrop_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBackdrop = __decorate([ProxyCmp2({
  inputs: ["stopPropagation", "tappable", "visible"]
})], IonBackdrop);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackdrop, [{
    type: Component,
    args: [{
      selector: "ion-backdrop",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["stopPropagation", "tappable", "visible"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonBadge = class IonBadge2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonBadge_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBadge2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonBadge2,
    selectors: [["ion-badge"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonBadge_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBadge = __decorate([ProxyCmp2({
  inputs: ["color", "mode"]
})], IonBadge);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBadge, [{
    type: Component,
    args: [{
      selector: "ion-badge",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonBreadcrumb = class IonBreadcrumb2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonBreadcrumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBreadcrumb2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonBreadcrumb2,
    selectors: [["ion-breadcrumb"]],
    inputs: {
      active: "active",
      color: "color",
      disabled: "disabled",
      download: "download",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      separator: "separator",
      target: "target"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonBreadcrumb_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBreadcrumb = __decorate([ProxyCmp2({
  inputs: ["active", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "separator", "target"]
})], IonBreadcrumb);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBreadcrumb, [{
    type: Component,
    args: [{
      selector: "ion-breadcrumb",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["active", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "separator", "target"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonBreadcrumbs = class IonBreadcrumbs2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionCollapsedClick"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonBreadcrumbs_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonBreadcrumbs2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonBreadcrumbs2,
    selectors: [["ion-breadcrumbs"]],
    inputs: {
      color: "color",
      itemsAfterCollapse: "itemsAfterCollapse",
      itemsBeforeCollapse: "itemsBeforeCollapse",
      maxItems: "maxItems",
      mode: "mode"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonBreadcrumbs_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBreadcrumbs = __decorate([ProxyCmp2({
  inputs: ["color", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "mode"]
})], IonBreadcrumbs);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBreadcrumbs, [{
    type: Component,
    args: [{
      selector: "ion-breadcrumbs",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonButton = class IonButton2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonButton2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonButton2,
    selectors: [["ion-button"]],
    inputs: {
      buttonType: "buttonType",
      color: "color",
      disabled: "disabled",
      download: "download",
      expand: "expand",
      fill: "fill",
      form: "form",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      shape: "shape",
      size: "size",
      strong: "strong",
      target: "target",
      type: "type"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonButton = __decorate([ProxyCmp2({
  inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"]
})], IonButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonButton, [{
    type: Component,
    args: [{
      selector: "ion-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonButtons = class IonButtons2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonButtons_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonButtons2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonButtons2,
    selectors: [["ion-buttons"]],
    inputs: {
      collapse: "collapse"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonButtons_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonButtons = __decorate([ProxyCmp2({
  inputs: ["collapse"]
})], IonButtons);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonButtons, [{
    type: Component,
    args: [{
      selector: "ion-buttons",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCard = class IonCard2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCard2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonCard2,
    selectors: [["ion-card"]],
    inputs: {
      button: "button",
      color: "color",
      disabled: "disabled",
      download: "download",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      target: "target",
      type: "type"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonCard_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCard = __decorate([ProxyCmp2({
  inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
})], IonCard);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCard, [{
    type: Component,
    args: [{
      selector: "ion-card",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCardContent = class IonCardContent2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonCardContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardContent2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonCardContent2,
    selectors: [["ion-card-content"]],
    inputs: {
      mode: "mode"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonCardContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardContent = __decorate([ProxyCmp2({
  inputs: ["mode"]
})], IonCardContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardContent, [{
    type: Component,
    args: [{
      selector: "ion-card-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCardHeader = class IonCardHeader2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonCardHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardHeader2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonCardHeader2,
    selectors: [["ion-card-header"]],
    inputs: {
      color: "color",
      mode: "mode",
      translucent: "translucent"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonCardHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardHeader = __decorate([ProxyCmp2({
  inputs: ["color", "mode", "translucent"]
})], IonCardHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardHeader, [{
    type: Component,
    args: [{
      selector: "ion-card-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCardSubtitle = class IonCardSubtitle2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonCardSubtitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardSubtitle2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonCardSubtitle2,
    selectors: [["ion-card-subtitle"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonCardSubtitle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardSubtitle = __decorate([ProxyCmp2({
  inputs: ["color", "mode"]
})], IonCardSubtitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardSubtitle, [{
    type: Component,
    args: [{
      selector: "ion-card-subtitle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCardTitle = class IonCardTitle2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonCardTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCardTitle2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonCardTitle2,
    selectors: [["ion-card-title"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonCardTitle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardTitle = __decorate([ProxyCmp2({
  inputs: ["color", "mode"]
})], IonCardTitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardTitle, [{
    type: Component,
    args: [{
      selector: "ion-card-title",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCheckbox = class IonCheckbox2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCheckbox2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonCheckbox2,
    selectors: [["ion-checkbox"]],
    inputs: {
      alignment: "alignment",
      checked: "checked",
      color: "color",
      disabled: "disabled",
      errorText: "errorText",
      helperText: "helperText",
      indeterminate: "indeterminate",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      name: "name",
      required: "required",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCheckbox = __decorate([ProxyCmp2({
  inputs: ["alignment", "checked", "color", "disabled", "errorText", "helperText", "indeterminate", "justify", "labelPlacement", "mode", "name", "required", "value"]
})], IonCheckbox);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCheckbox, [{
    type: Component,
    args: [{
      selector: "ion-checkbox",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "checked", "color", "disabled", "errorText", "helperText", "indeterminate", "justify", "labelPlacement", "mode", "name", "required", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonChip = class IonChip2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonChip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonChip2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonChip2,
    selectors: [["ion-chip"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      mode: "mode",
      outline: "outline"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonChip_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonChip = __decorate([ProxyCmp2({
  inputs: ["color", "disabled", "mode", "outline"]
})], IonChip);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonChip, [{
    type: Component,
    args: [{
      selector: "ion-chip",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "outline"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCol = class IonCol2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonCol_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonCol2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonCol2,
    selectors: [["ion-col"]],
    inputs: {
      offset: "offset",
      offsetLg: "offsetLg",
      offsetMd: "offsetMd",
      offsetSm: "offsetSm",
      offsetXl: "offsetXl",
      offsetXs: "offsetXs",
      pull: "pull",
      pullLg: "pullLg",
      pullMd: "pullMd",
      pullSm: "pullSm",
      pullXl: "pullXl",
      pullXs: "pullXs",
      push: "push",
      pushLg: "pushLg",
      pushMd: "pushMd",
      pushSm: "pushSm",
      pushXl: "pushXl",
      pushXs: "pushXs",
      size: "size",
      sizeLg: "sizeLg",
      sizeMd: "sizeMd",
      sizeSm: "sizeSm",
      sizeXl: "sizeXl",
      sizeXs: "sizeXs"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonCol_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCol = __decorate([ProxyCmp2({
  inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"]
})], IonCol);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCol, [{
    type: Component,
    args: [{
      selector: "ion-col",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonContent = class IonContent2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionScrollStart", "ionScroll", "ionScrollEnd"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonContent2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonContent2,
    selectors: [["ion-content"]],
    inputs: {
      color: "color",
      fixedSlotPlacement: "fixedSlotPlacement",
      forceOverscroll: "forceOverscroll",
      fullscreen: "fullscreen",
      scrollEvents: "scrollEvents",
      scrollX: "scrollX",
      scrollY: "scrollY"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonContent = __decorate([ProxyCmp2({
  inputs: ["color", "fixedSlotPlacement", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"],
  methods: ["getScrollElement", "scrollToTop", "scrollToBottom", "scrollByPoint", "scrollToPoint"]
})], IonContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonContent, [{
    type: Component,
    args: [{
      selector: "ion-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "fixedSlotPlacement", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonDatetime = class IonDatetime2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionCancel", "ionChange", "ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonDatetime_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonDatetime2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonDatetime2,
    selectors: [["ion-datetime"]],
    inputs: {
      cancelText: "cancelText",
      clearText: "clearText",
      color: "color",
      dayValues: "dayValues",
      disabled: "disabled",
      doneText: "doneText",
      firstDayOfWeek: "firstDayOfWeek",
      formatOptions: "formatOptions",
      highlightedDates: "highlightedDates",
      hourCycle: "hourCycle",
      hourValues: "hourValues",
      isDateEnabled: "isDateEnabled",
      locale: "locale",
      max: "max",
      min: "min",
      minuteValues: "minuteValues",
      mode: "mode",
      monthValues: "monthValues",
      multiple: "multiple",
      name: "name",
      preferWheel: "preferWheel",
      presentation: "presentation",
      readonly: "readonly",
      showAdjacentDays: "showAdjacentDays",
      showClearButton: "showClearButton",
      showDefaultButtons: "showDefaultButtons",
      showDefaultTimeLabel: "showDefaultTimeLabel",
      showDefaultTitle: "showDefaultTitle",
      size: "size",
      titleSelectedDatesFormatter: "titleSelectedDatesFormatter",
      value: "value",
      yearValues: "yearValues"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonDatetime_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonDatetime = __decorate([ProxyCmp2({
  inputs: ["cancelText", "clearText", "color", "dayValues", "disabled", "doneText", "firstDayOfWeek", "formatOptions", "highlightedDates", "hourCycle", "hourValues", "isDateEnabled", "locale", "max", "min", "minuteValues", "mode", "monthValues", "multiple", "name", "preferWheel", "presentation", "readonly", "showAdjacentDays", "showClearButton", "showDefaultButtons", "showDefaultTimeLabel", "showDefaultTitle", "size", "titleSelectedDatesFormatter", "value", "yearValues"],
  methods: ["confirm", "reset", "cancel"]
})], IonDatetime);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonDatetime, [{
    type: Component,
    args: [{
      selector: "ion-datetime",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cancelText", "clearText", "color", "dayValues", "disabled", "doneText", "firstDayOfWeek", "formatOptions", "highlightedDates", "hourCycle", "hourValues", "isDateEnabled", "locale", "max", "min", "minuteValues", "mode", "monthValues", "multiple", "name", "preferWheel", "presentation", "readonly", "showAdjacentDays", "showClearButton", "showDefaultButtons", "showDefaultTimeLabel", "showDefaultTitle", "size", "titleSelectedDatesFormatter", "value", "yearValues"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonDatetimeButton = class IonDatetimeButton2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonDatetimeButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonDatetimeButton2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonDatetimeButton2,
    selectors: [["ion-datetime-button"]],
    inputs: {
      color: "color",
      datetime: "datetime",
      disabled: "disabled",
      mode: "mode"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonDatetimeButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonDatetimeButton = __decorate([ProxyCmp2({
  inputs: ["color", "datetime", "disabled", "mode"]
})], IonDatetimeButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonDatetimeButton, [{
    type: Component,
    args: [{
      selector: "ion-datetime-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "datetime", "disabled", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonFab = class IonFab2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonFab_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFab2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonFab2,
    selectors: [["ion-fab"]],
    inputs: {
      activated: "activated",
      edge: "edge",
      horizontal: "horizontal",
      vertical: "vertical"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonFab_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFab = __decorate([ProxyCmp2({
  inputs: ["activated", "edge", "horizontal", "vertical"],
  methods: ["close"]
})], IonFab);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFab, [{
    type: Component,
    args: [{
      selector: "ion-fab",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "edge", "horizontal", "vertical"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonFabButton = class IonFabButton2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonFabButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFabButton2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonFabButton2,
    selectors: [["ion-fab-button"]],
    inputs: {
      activated: "activated",
      closeIcon: "closeIcon",
      color: "color",
      disabled: "disabled",
      download: "download",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      show: "show",
      size: "size",
      target: "target",
      translucent: "translucent",
      type: "type"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonFabButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFabButton = __decorate([ProxyCmp2({
  inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"]
})], IonFabButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFabButton, [{
    type: Component,
    args: [{
      selector: "ion-fab-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonFabList = class IonFabList2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonFabList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFabList2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonFabList2,
    selectors: [["ion-fab-list"]],
    inputs: {
      activated: "activated",
      side: "side"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonFabList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFabList = __decorate([ProxyCmp2({
  inputs: ["activated", "side"]
})], IonFabList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFabList, [{
    type: Component,
    args: [{
      selector: "ion-fab-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "side"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonFooter = class IonFooter2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonFooter2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonFooter2,
    selectors: [["ion-footer"]],
    inputs: {
      collapse: "collapse",
      mode: "mode",
      translucent: "translucent"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonFooter_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFooter = __decorate([ProxyCmp2({
  inputs: ["collapse", "mode", "translucent"]
})], IonFooter);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFooter, [{
    type: Component,
    args: [{
      selector: "ion-footer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse", "mode", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonGrid = class IonGrid2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonGrid_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonGrid2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonGrid2,
    selectors: [["ion-grid"]],
    inputs: {
      fixed: "fixed"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonGrid_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonGrid = __decorate([ProxyCmp2({
  inputs: ["fixed"]
})], IonGrid);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonGrid, [{
    type: Component,
    args: [{
      selector: "ion-grid",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["fixed"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonHeader = class IonHeader2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonHeader2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonHeader2,
    selectors: [["ion-header"]],
    inputs: {
      collapse: "collapse",
      mode: "mode",
      translucent: "translucent"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonHeader = __decorate([ProxyCmp2({
  inputs: ["collapse", "mode", "translucent"]
})], IonHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonHeader, [{
    type: Component,
    args: [{
      selector: "ion-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse", "mode", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonIcon = class IonIcon2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonIcon2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonIcon2,
    selectors: [["ion-icon"]],
    inputs: {
      color: "color",
      flipRtl: "flipRtl",
      icon: "icon",
      ios: "ios",
      lazy: "lazy",
      md: "md",
      mode: "mode",
      name: "name",
      sanitize: "sanitize",
      size: "size",
      src: "src"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonIcon = __decorate([ProxyCmp2({
  inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"]
})], IonIcon);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonIcon, [{
    type: Component,
    args: [{
      selector: "ion-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonImg = class IonImg2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionImgWillLoad", "ionImgDidLoad", "ionError"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonImg_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonImg2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonImg2,
    selectors: [["ion-img"]],
    inputs: {
      alt: "alt",
      src: "src"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonImg_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonImg = __decorate([ProxyCmp2({
  inputs: ["alt", "src"]
})], IonImg);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonImg, [{
    type: Component,
    args: [{
      selector: "ion-img",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alt", "src"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonInfiniteScroll = class IonInfiniteScroll2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionInfinite"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonInfiniteScroll_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInfiniteScroll2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonInfiniteScroll2,
    selectors: [["ion-infinite-scroll"]],
    inputs: {
      disabled: "disabled",
      position: "position",
      threshold: "threshold"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonInfiniteScroll_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInfiniteScroll = __decorate([ProxyCmp2({
  inputs: ["disabled", "position", "threshold"],
  methods: ["complete"]
})], IonInfiniteScroll);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInfiniteScroll, [{
    type: Component,
    args: [{
      selector: "ion-infinite-scroll",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "position", "threshold"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonInfiniteScrollContent = class IonInfiniteScrollContent2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonInfiniteScrollContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInfiniteScrollContent2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonInfiniteScrollContent2,
    selectors: [["ion-infinite-scroll-content"]],
    inputs: {
      loadingSpinner: "loadingSpinner",
      loadingText: "loadingText"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonInfiniteScrollContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInfiniteScrollContent = __decorate([ProxyCmp2({
  inputs: ["loadingSpinner", "loadingText"]
})], IonInfiniteScrollContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInfiniteScrollContent, [{
    type: Component,
    args: [{
      selector: "ion-infinite-scroll-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["loadingSpinner", "loadingText"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonInput = class IonInput2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionInput", "ionChange", "ionBlur", "ionFocus"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonInput_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInput2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonInput2,
    selectors: [["ion-input"]],
    inputs: {
      autocapitalize: "autocapitalize",
      autocomplete: "autocomplete",
      autocorrect: "autocorrect",
      autofocus: "autofocus",
      clearInput: "clearInput",
      clearInputIcon: "clearInputIcon",
      clearOnEdit: "clearOnEdit",
      color: "color",
      counter: "counter",
      counterFormatter: "counterFormatter",
      debounce: "debounce",
      disabled: "disabled",
      enterkeyhint: "enterkeyhint",
      errorText: "errorText",
      fill: "fill",
      helperText: "helperText",
      inputmode: "inputmode",
      label: "label",
      labelPlacement: "labelPlacement",
      max: "max",
      maxlength: "maxlength",
      min: "min",
      minlength: "minlength",
      mode: "mode",
      multiple: "multiple",
      name: "name",
      pattern: "pattern",
      placeholder: "placeholder",
      readonly: "readonly",
      required: "required",
      shape: "shape",
      spellcheck: "spellcheck",
      step: "step",
      type: "type",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonInput_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInput = __decorate([ProxyCmp2({
  inputs: ["autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearInputIcon", "clearOnEdit", "color", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "shape", "spellcheck", "step", "type", "value"],
  methods: ["setFocus", "getInputElement"]
})], IonInput);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInput, [{
    type: Component,
    args: [{
      selector: "ion-input",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearInputIcon", "clearOnEdit", "color", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "shape", "spellcheck", "step", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonInputOtp = class IonInputOtp2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionInput", "ionChange", "ionComplete", "ionBlur", "ionFocus"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonInputOtp_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInputOtp2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonInputOtp2,
    selectors: [["ion-input-otp"]],
    inputs: {
      autocapitalize: "autocapitalize",
      color: "color",
      disabled: "disabled",
      fill: "fill",
      inputmode: "inputmode",
      length: "length",
      pattern: "pattern",
      readonly: "readonly",
      separators: "separators",
      shape: "shape",
      size: "size",
      type: "type",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonInputOtp_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInputOtp = __decorate([ProxyCmp2({
  inputs: ["autocapitalize", "color", "disabled", "fill", "inputmode", "length", "pattern", "readonly", "separators", "shape", "size", "type", "value"],
  methods: ["setFocus"]
})], IonInputOtp);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInputOtp, [{
    type: Component,
    args: [{
      selector: "ion-input-otp",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autocapitalize", "color", "disabled", "fill", "inputmode", "length", "pattern", "readonly", "separators", "shape", "size", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonInputPasswordToggle = class IonInputPasswordToggle2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonInputPasswordToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonInputPasswordToggle2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonInputPasswordToggle2,
    selectors: [["ion-input-password-toggle"]],
    inputs: {
      color: "color",
      hideIcon: "hideIcon",
      mode: "mode",
      showIcon: "showIcon"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonInputPasswordToggle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInputPasswordToggle = __decorate([ProxyCmp2({
  inputs: ["color", "hideIcon", "mode", "showIcon"]
})], IonInputPasswordToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInputPasswordToggle, [{
    type: Component,
    args: [{
      selector: "ion-input-password-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "hideIcon", "mode", "showIcon"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItem = class IonItem2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItem2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonItem2,
    selectors: [["ion-item"]],
    inputs: {
      button: "button",
      color: "color",
      detail: "detail",
      detailIcon: "detailIcon",
      disabled: "disabled",
      download: "download",
      href: "href",
      lines: "lines",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      target: "target",
      type: "type"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItem = __decorate([ProxyCmp2({
  inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
})], IonItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItem, [{
    type: Component,
    args: [{
      selector: "ion-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItemDivider = class IonItemDivider2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonItemDivider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemDivider2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonItemDivider2,
    selectors: [["ion-item-divider"]],
    inputs: {
      color: "color",
      mode: "mode",
      sticky: "sticky"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonItemDivider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemDivider = __decorate([ProxyCmp2({
  inputs: ["color", "mode", "sticky"]
})], IonItemDivider);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemDivider, [{
    type: Component,
    args: [{
      selector: "ion-item-divider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "sticky"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItemGroup = class IonItemGroup2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonItemGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemGroup2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonItemGroup2,
    selectors: [["ion-item-group"]],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonItemGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemGroup = __decorate([ProxyCmp2({})], IonItemGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemGroup, [{
    type: Component,
    args: [{
      selector: "ion-item-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItemOption = class IonItemOption2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonItemOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemOption2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonItemOption2,
    selectors: [["ion-item-option"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      download: "download",
      expandable: "expandable",
      href: "href",
      mode: "mode",
      rel: "rel",
      target: "target",
      type: "type"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonItemOption_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemOption = __decorate([ProxyCmp2({
  inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"]
})], IonItemOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemOption, [{
    type: Component,
    args: [{
      selector: "ion-item-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItemOptions = class IonItemOptions2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionSwipe"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonItemOptions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemOptions2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonItemOptions2,
    selectors: [["ion-item-options"]],
    inputs: {
      side: "side"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonItemOptions_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemOptions = __decorate([ProxyCmp2({
  inputs: ["side"]
})], IonItemOptions);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemOptions, [{
    type: Component,
    args: [{
      selector: "ion-item-options",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["side"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItemSliding = class IonItemSliding2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionDrag"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonItemSliding_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonItemSliding2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonItemSliding2,
    selectors: [["ion-item-sliding"]],
    inputs: {
      disabled: "disabled"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonItemSliding_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemSliding = __decorate([ProxyCmp2({
  inputs: ["disabled"],
  methods: ["getOpenAmount", "getSlidingRatio", "open", "close", "closeOpened"]
})], IonItemSliding);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemSliding, [{
    type: Component,
    args: [{
      selector: "ion-item-sliding",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonLabel = class IonLabel2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonLabel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonLabel2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonLabel2,
    selectors: [["ion-label"]],
    inputs: {
      color: "color",
      mode: "mode",
      position: "position"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonLabel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonLabel = __decorate([ProxyCmp2({
  inputs: ["color", "mode", "position"]
})], IonLabel);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonLabel, [{
    type: Component,
    args: [{
      selector: "ion-label",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "position"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonList = class IonList2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonList2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonList2,
    selectors: [["ion-list"]],
    inputs: {
      inset: "inset",
      lines: "lines",
      mode: "mode"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonList = __decorate([ProxyCmp2({
  inputs: ["inset", "lines", "mode"],
  methods: ["closeSlidingItems"]
})], IonList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonList, [{
    type: Component,
    args: [{
      selector: "ion-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["inset", "lines", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonListHeader = class IonListHeader2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonListHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonListHeader2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonListHeader2,
    selectors: [["ion-list-header"]],
    inputs: {
      color: "color",
      lines: "lines",
      mode: "mode"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonListHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonListHeader = __decorate([ProxyCmp2({
  inputs: ["color", "lines", "mode"]
})], IonListHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonListHeader, [{
    type: Component,
    args: [{
      selector: "ion-list-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "lines", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonLoading = class IonLoading2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionLoadingDidPresent", "ionLoadingWillPresent", "ionLoadingWillDismiss", "ionLoadingDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonLoading_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonLoading2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonLoading2,
    selectors: [["ion-loading"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      cssClass: "cssClass",
      duration: "duration",
      enterAnimation: "enterAnimation",
      htmlAttributes: "htmlAttributes",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      message: "message",
      mode: "mode",
      showBackdrop: "showBackdrop",
      spinner: "spinner",
      translucent: "translucent",
      trigger: "trigger"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonLoading_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonLoading = __decorate([ProxyCmp2({
  inputs: ["animated", "backdropDismiss", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "showBackdrop", "spinner", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonLoading);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonLoading, [{
    type: Component,
    args: [{
      selector: "ion-loading",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "showBackdrop", "spinner", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonMenu = class IonMenu2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionWillOpen", "ionWillClose", "ionDidOpen", "ionDidClose"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonMenu2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonMenu2,
    selectors: [["ion-menu"]],
    inputs: {
      contentId: "contentId",
      disabled: "disabled",
      maxEdgeStart: "maxEdgeStart",
      menuId: "menuId",
      side: "side",
      swipeGesture: "swipeGesture",
      type: "type"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonMenu_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonMenu = __decorate([ProxyCmp2({
  inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"],
  methods: ["isOpen", "isActive", "open", "close", "toggle", "setOpen"]
})], IonMenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenu, [{
    type: Component,
    args: [{
      selector: "ion-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonMenuButton = class IonMenuButton2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonMenuButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonMenuButton2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonMenuButton2,
    selectors: [["ion-menu-button"]],
    inputs: {
      autoHide: "autoHide",
      color: "color",
      disabled: "disabled",
      menu: "menu",
      mode: "mode",
      type: "type"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonMenuButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonMenuButton = __decorate([ProxyCmp2({
  inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"]
})], IonMenuButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenuButton, [{
    type: Component,
    args: [{
      selector: "ion-menu-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonMenuToggle = class IonMenuToggle2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonMenuToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonMenuToggle2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonMenuToggle2,
    selectors: [["ion-menu-toggle"]],
    inputs: {
      autoHide: "autoHide",
      menu: "menu"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonMenuToggle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonMenuToggle = __decorate([ProxyCmp2({
  inputs: ["autoHide", "menu"]
})], IonMenuToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenuToggle, [{
    type: Component,
    args: [{
      selector: "ion-menu-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoHide", "menu"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonNavLink = class IonNavLink2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonNavLink_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonNavLink2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonNavLink2,
    selectors: [["ion-nav-link"]],
    inputs: {
      component: "component",
      componentProps: "componentProps",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonNavLink_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonNavLink = __decorate([ProxyCmp2({
  inputs: ["component", "componentProps", "routerAnimation", "routerDirection"]
})], IonNavLink);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNavLink, [{
    type: Component,
    args: [{
      selector: "ion-nav-link",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["component", "componentProps", "routerAnimation", "routerDirection"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonNote = class IonNote2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonNote_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonNote2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonNote2,
    selectors: [["ion-note"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonNote_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonNote = __decorate([ProxyCmp2({
  inputs: ["color", "mode"]
})], IonNote);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNote, [{
    type: Component,
    args: [{
      selector: "ion-note",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonPicker = class IonPicker2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonPicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPicker2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonPicker2,
    selectors: [["ion-picker"]],
    inputs: {
      mode: "mode"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonPicker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPicker = __decorate([ProxyCmp2({
  inputs: ["mode"]
})], IonPicker);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPicker, [{
    type: Component,
    args: [{
      selector: "ion-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonPickerColumn = class IonPickerColumn2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionChange"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonPickerColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPickerColumn2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonPickerColumn2,
    selectors: [["ion-picker-column"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      mode: "mode",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonPickerColumn_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPickerColumn = __decorate([ProxyCmp2({
  inputs: ["color", "disabled", "mode", "value"],
  methods: ["setFocus"]
})], IonPickerColumn);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerColumn, [{
    type: Component,
    args: [{
      selector: "ion-picker-column",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonPickerColumnOption = class IonPickerColumnOption2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonPickerColumnOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPickerColumnOption2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonPickerColumnOption2,
    selectors: [["ion-picker-column-option"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonPickerColumnOption_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPickerColumnOption = __decorate([ProxyCmp2({
  inputs: ["color", "disabled", "value"]
})], IonPickerColumnOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerColumnOption, [{
    type: Component,
    args: [{
      selector: "ion-picker-column-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonPickerLegacy = class IonPickerLegacy2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionPickerDidPresent", "ionPickerWillPresent", "ionPickerWillDismiss", "ionPickerDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonPickerLegacy_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonPickerLegacy2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonPickerLegacy2,
    selectors: [["ion-picker-legacy"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      buttons: "buttons",
      columns: "columns",
      cssClass: "cssClass",
      duration: "duration",
      enterAnimation: "enterAnimation",
      htmlAttributes: "htmlAttributes",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      mode: "mode",
      showBackdrop: "showBackdrop",
      trigger: "trigger"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonPickerLegacy_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPickerLegacy = __decorate([ProxyCmp2({
  inputs: ["animated", "backdropDismiss", "buttons", "columns", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss", "getColumn"]
})], IonPickerLegacy);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerLegacy, [{
    type: Component,
    args: [{
      selector: "ion-picker-legacy",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "columns", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonProgressBar = class IonProgressBar2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonProgressBar2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonProgressBar2,
    selectors: [["ion-progress-bar"]],
    inputs: {
      buffer: "buffer",
      color: "color",
      mode: "mode",
      reversed: "reversed",
      type: "type",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonProgressBar = __decorate([ProxyCmp2({
  inputs: ["buffer", "color", "mode", "reversed", "type", "value"]
})], IonProgressBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonProgressBar, [{
    type: Component,
    args: [{
      selector: "ion-progress-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["buffer", "color", "mode", "reversed", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRadio = class IonRadio2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonRadio_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRadio2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonRadio2,
    selectors: [["ion-radio"]],
    inputs: {
      alignment: "alignment",
      color: "color",
      disabled: "disabled",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      name: "name",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonRadio_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRadio = __decorate([ProxyCmp2({
  inputs: ["alignment", "color", "disabled", "justify", "labelPlacement", "mode", "name", "value"]
})], IonRadio);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRadio, [{
    type: Component,
    args: [{
      selector: "ion-radio",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "color", "disabled", "justify", "labelPlacement", "mode", "name", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRadioGroup = class IonRadioGroup2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionChange"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonRadioGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRadioGroup2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonRadioGroup2,
    selectors: [["ion-radio-group"]],
    inputs: {
      allowEmptySelection: "allowEmptySelection",
      compareWith: "compareWith",
      errorText: "errorText",
      helperText: "helperText",
      name: "name",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonRadioGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRadioGroup = __decorate([ProxyCmp2({
  inputs: ["allowEmptySelection", "compareWith", "errorText", "helperText", "name", "value"]
})], IonRadioGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRadioGroup, [{
    type: Component,
    args: [{
      selector: "ion-radio-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["allowEmptySelection", "compareWith", "errorText", "helperText", "name", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRange = class IonRange2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionChange", "ionInput", "ionFocus", "ionBlur", "ionKnobMoveStart", "ionKnobMoveEnd"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonRange_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRange2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonRange2,
    selectors: [["ion-range"]],
    inputs: {
      activeBarStart: "activeBarStart",
      color: "color",
      debounce: "debounce",
      disabled: "disabled",
      dualKnobs: "dualKnobs",
      label: "label",
      labelPlacement: "labelPlacement",
      max: "max",
      min: "min",
      mode: "mode",
      name: "name",
      pin: "pin",
      pinFormatter: "pinFormatter",
      snaps: "snaps",
      step: "step",
      ticks: "ticks",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonRange_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRange = __decorate([ProxyCmp2({
  inputs: ["activeBarStart", "color", "debounce", "disabled", "dualKnobs", "label", "labelPlacement", "max", "min", "mode", "name", "pin", "pinFormatter", "snaps", "step", "ticks", "value"]
})], IonRange);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRange, [{
    type: Component,
    args: [{
      selector: "ion-range",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activeBarStart", "color", "debounce", "disabled", "dualKnobs", "label", "labelPlacement", "max", "min", "mode", "name", "pin", "pinFormatter", "snaps", "step", "ticks", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRefresher = class IonRefresher2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionRefresh", "ionPull", "ionStart", "ionPullStart", "ionPullEnd"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonRefresher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRefresher2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonRefresher2,
    selectors: [["ion-refresher"]],
    inputs: {
      closeDuration: "closeDuration",
      disabled: "disabled",
      mode: "mode",
      pullFactor: "pullFactor",
      pullMax: "pullMax",
      pullMin: "pullMin",
      snapbackDuration: "snapbackDuration"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonRefresher_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRefresher = __decorate([ProxyCmp2({
  inputs: ["closeDuration", "disabled", "mode", "pullFactor", "pullMax", "pullMin", "snapbackDuration"],
  methods: ["complete", "cancel", "getProgress"]
})], IonRefresher);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRefresher, [{
    type: Component,
    args: [{
      selector: "ion-refresher",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["closeDuration", "disabled", "mode", "pullFactor", "pullMax", "pullMin", "snapbackDuration"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRefresherContent = class IonRefresherContent2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonRefresherContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRefresherContent2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonRefresherContent2,
    selectors: [["ion-refresher-content"]],
    inputs: {
      pullingIcon: "pullingIcon",
      pullingText: "pullingText",
      refreshingSpinner: "refreshingSpinner",
      refreshingText: "refreshingText"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonRefresherContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRefresherContent = __decorate([ProxyCmp2({
  inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"]
})], IonRefresherContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRefresherContent, [{
    type: Component,
    args: [{
      selector: "ion-refresher-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonReorder = class IonReorder2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonReorder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonReorder2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonReorder2,
    selectors: [["ion-reorder"]],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonReorder_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonReorder = __decorate([ProxyCmp2({})], IonReorder);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonReorder, [{
    type: Component,
    args: [{
      selector: "ion-reorder",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonReorderGroup = class IonReorderGroup2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionItemReorder", "ionReorderStart", "ionReorderMove", "ionReorderEnd"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonReorderGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonReorderGroup2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonReorderGroup2,
    selectors: [["ion-reorder-group"]],
    inputs: {
      disabled: "disabled"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonReorderGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonReorderGroup = __decorate([ProxyCmp2({
  inputs: ["disabled"],
  methods: ["complete"]
})], IonReorderGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonReorderGroup, [{
    type: Component,
    args: [{
      selector: "ion-reorder-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRippleEffect = class IonRippleEffect2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonRippleEffect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRippleEffect2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonRippleEffect2,
    selectors: [["ion-ripple-effect"]],
    inputs: {
      type: "type"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonRippleEffect_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRippleEffect = __decorate([ProxyCmp2({
  inputs: ["type"],
  methods: ["addRipple"]
})], IonRippleEffect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRippleEffect, [{
    type: Component,
    args: [{
      selector: "ion-ripple-effect",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRow = class IonRow2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonRow2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonRow2,
    selectors: [["ion-row"]],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRow = __decorate([ProxyCmp2({})], IonRow);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRow, [{
    type: Component,
    args: [{
      selector: "ion-row",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSearchbar = class IonSearchbar2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionInput", "ionChange", "ionCancel", "ionClear", "ionBlur", "ionFocus"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonSearchbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSearchbar2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSearchbar2,
    selectors: [["ion-searchbar"]],
    inputs: {
      animated: "animated",
      autocapitalize: "autocapitalize",
      autocomplete: "autocomplete",
      autocorrect: "autocorrect",
      cancelButtonIcon: "cancelButtonIcon",
      cancelButtonText: "cancelButtonText",
      clearIcon: "clearIcon",
      color: "color",
      debounce: "debounce",
      disabled: "disabled",
      enterkeyhint: "enterkeyhint",
      inputmode: "inputmode",
      maxlength: "maxlength",
      minlength: "minlength",
      mode: "mode",
      name: "name",
      placeholder: "placeholder",
      searchIcon: "searchIcon",
      showCancelButton: "showCancelButton",
      showClearButton: "showClearButton",
      spellcheck: "spellcheck",
      type: "type",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSearchbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSearchbar = __decorate([ProxyCmp2({
  inputs: ["animated", "autocapitalize", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"],
  methods: ["setFocus", "getInputElement"]
})], IonSearchbar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSearchbar, [{
    type: Component,
    args: [{
      selector: "ion-searchbar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "autocapitalize", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSegment = class IonSegment2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionChange"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonSegment_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegment2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSegment2,
    selectors: [["ion-segment"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      mode: "mode",
      scrollable: "scrollable",
      selectOnFocus: "selectOnFocus",
      swipeGesture: "swipeGesture",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSegment_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSegment = __decorate([ProxyCmp2({
  inputs: ["color", "disabled", "mode", "scrollable", "selectOnFocus", "swipeGesture", "value"]
})], IonSegment);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegment, [{
    type: Component,
    args: [{
      selector: "ion-segment",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "scrollable", "selectOnFocus", "swipeGesture", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSegmentButton = class IonSegmentButton2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonSegmentButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegmentButton2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSegmentButton2,
    selectors: [["ion-segment-button"]],
    inputs: {
      contentId: "contentId",
      disabled: "disabled",
      layout: "layout",
      mode: "mode",
      type: "type",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSegmentButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSegmentButton = __decorate([ProxyCmp2({
  inputs: ["contentId", "disabled", "layout", "mode", "type", "value"]
})], IonSegmentButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentButton, [{
    type: Component,
    args: [{
      selector: "ion-segment-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "layout", "mode", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSegmentContent = class IonSegmentContent2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonSegmentContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegmentContent2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSegmentContent2,
    selectors: [["ion-segment-content"]],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSegmentContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSegmentContent = __decorate([ProxyCmp2({})], IonSegmentContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentContent, [{
    type: Component,
    args: [{
      selector: "ion-segment-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSegmentView = class IonSegmentView2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionSegmentViewScroll"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonSegmentView_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSegmentView2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSegmentView2,
    selectors: [["ion-segment-view"]],
    inputs: {
      disabled: "disabled",
      swipeGesture: "swipeGesture"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSegmentView_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSegmentView = __decorate([ProxyCmp2({
  inputs: ["disabled", "swipeGesture"]
})], IonSegmentView);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentView, [{
    type: Component,
    args: [{
      selector: "ion-segment-view",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "swipeGesture"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSelect = class IonSelect2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionChange", "ionCancel", "ionDismiss", "ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonSelect_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSelect2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSelect2,
    selectors: [["ion-select"]],
    inputs: {
      cancelText: "cancelText",
      color: "color",
      compareWith: "compareWith",
      disabled: "disabled",
      errorText: "errorText",
      expandedIcon: "expandedIcon",
      fill: "fill",
      helperText: "helperText",
      interface: "interface",
      interfaceOptions: "interfaceOptions",
      justify: "justify",
      label: "label",
      labelPlacement: "labelPlacement",
      mode: "mode",
      multiple: "multiple",
      name: "name",
      okText: "okText",
      placeholder: "placeholder",
      required: "required",
      selectedText: "selectedText",
      shape: "shape",
      toggleIcon: "toggleIcon",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSelect_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSelect = __decorate([ProxyCmp2({
  inputs: ["cancelText", "color", "compareWith", "disabled", "errorText", "expandedIcon", "fill", "helperText", "interface", "interfaceOptions", "justify", "label", "labelPlacement", "mode", "multiple", "name", "okText", "placeholder", "required", "selectedText", "shape", "toggleIcon", "value"],
  methods: ["open"]
})], IonSelect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelect, [{
    type: Component,
    args: [{
      selector: "ion-select",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cancelText", "color", "compareWith", "disabled", "errorText", "expandedIcon", "fill", "helperText", "interface", "interfaceOptions", "justify", "label", "labelPlacement", "mode", "multiple", "name", "okText", "placeholder", "required", "selectedText", "shape", "toggleIcon", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSelectModal = class IonSelectModal2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonSelectModal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSelectModal2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSelectModal2,
    selectors: [["ion-select-modal"]],
    inputs: {
      cancelText: "cancelText",
      header: "header",
      multiple: "multiple",
      options: "options"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSelectModal_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSelectModal = __decorate([ProxyCmp2({
  inputs: ["cancelText", "header", "multiple", "options"]
})], IonSelectModal);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelectModal, [{
    type: Component,
    args: [{
      selector: "ion-select-modal",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cancelText", "header", "multiple", "options"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSelectOption = class IonSelectOption2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonSelectOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSelectOption2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSelectOption2,
    selectors: [["ion-select-option"]],
    inputs: {
      disabled: "disabled",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSelectOption_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSelectOption = __decorate([ProxyCmp2({
  inputs: ["disabled", "value"]
})], IonSelectOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelectOption, [{
    type: Component,
    args: [{
      selector: "ion-select-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSkeletonText = class IonSkeletonText2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonSkeletonText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSkeletonText2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSkeletonText2,
    selectors: [["ion-skeleton-text"]],
    inputs: {
      animated: "animated"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSkeletonText_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSkeletonText = __decorate([ProxyCmp2({
  inputs: ["animated"]
})], IonSkeletonText);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSkeletonText, [{
    type: Component,
    args: [{
      selector: "ion-skeleton-text",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSpinner = class IonSpinner2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonSpinner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSpinner2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSpinner2,
    selectors: [["ion-spinner"]],
    inputs: {
      color: "color",
      duration: "duration",
      name: "name",
      paused: "paused"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSpinner = __decorate([ProxyCmp2({
  inputs: ["color", "duration", "name", "paused"]
})], IonSpinner);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSpinner, [{
    type: Component,
    args: [{
      selector: "ion-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "duration", "name", "paused"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSplitPane = class IonSplitPane2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionSplitPaneVisible"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonSplitPane_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonSplitPane2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSplitPane2,
    selectors: [["ion-split-pane"]],
    inputs: {
      contentId: "contentId",
      disabled: "disabled",
      when: "when"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonSplitPane_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSplitPane = __decorate([ProxyCmp2({
  inputs: ["contentId", "disabled", "when"]
})], IonSplitPane);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSplitPane, [{
    type: Component,
    args: [{
      selector: "ion-split-pane",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "when"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonTab = class IonTab2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonTab_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTab2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonTab2,
    selectors: [["ion-tab"]],
    inputs: {
      component: "component",
      tab: "tab"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonTab_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTab = __decorate([ProxyCmp2({
  inputs: ["component", "tab"],
  methods: ["setActive"]
})], IonTab);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTab, [{
    type: Component,
    args: [{
      selector: "ion-tab",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["component", "tab"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonTabBar = class IonTabBar2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonTabBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTabBar2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonTabBar2,
    selectors: [["ion-tab-bar"]],
    inputs: {
      color: "color",
      mode: "mode",
      selectedTab: "selectedTab",
      translucent: "translucent"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonTabBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTabBar = __decorate([ProxyCmp2({
  inputs: ["color", "mode", "selectedTab", "translucent"]
})], IonTabBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabBar, [{
    type: Component,
    args: [{
      selector: "ion-tab-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "selectedTab", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonTabButton = class IonTabButton2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonTabButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTabButton2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonTabButton2,
    selectors: [["ion-tab-button"]],
    inputs: {
      disabled: "disabled",
      download: "download",
      href: "href",
      layout: "layout",
      mode: "mode",
      rel: "rel",
      selected: "selected",
      tab: "tab",
      target: "target"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonTabButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTabButton = __decorate([ProxyCmp2({
  inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"]
})], IonTabButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabButton, [{
    type: Component,
    args: [{
      selector: "ion-tab-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonText = class IonText2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonText2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonText2,
    selectors: [["ion-text"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonText_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonText = __decorate([ProxyCmp2({
  inputs: ["color", "mode"]
})], IonText);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonText, [{
    type: Component,
    args: [{
      selector: "ion-text",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonTextarea = class IonTextarea2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionChange", "ionInput", "ionBlur", "ionFocus"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonTextarea_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTextarea2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonTextarea2,
    selectors: [["ion-textarea"]],
    inputs: {
      autoGrow: "autoGrow",
      autocapitalize: "autocapitalize",
      autofocus: "autofocus",
      clearOnEdit: "clearOnEdit",
      color: "color",
      cols: "cols",
      counter: "counter",
      counterFormatter: "counterFormatter",
      debounce: "debounce",
      disabled: "disabled",
      enterkeyhint: "enterkeyhint",
      errorText: "errorText",
      fill: "fill",
      helperText: "helperText",
      inputmode: "inputmode",
      label: "label",
      labelPlacement: "labelPlacement",
      maxlength: "maxlength",
      minlength: "minlength",
      mode: "mode",
      name: "name",
      placeholder: "placeholder",
      readonly: "readonly",
      required: "required",
      rows: "rows",
      shape: "shape",
      spellcheck: "spellcheck",
      value: "value",
      wrap: "wrap"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonTextarea_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTextarea = __decorate([ProxyCmp2({
  inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "shape", "spellcheck", "value", "wrap"],
  methods: ["setFocus", "getInputElement"]
})], IonTextarea);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTextarea, [{
    type: Component,
    args: [{
      selector: "ion-textarea",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "shape", "spellcheck", "value", "wrap"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonThumbnail = class IonThumbnail2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonThumbnail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonThumbnail2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonThumbnail2,
    selectors: [["ion-thumbnail"]],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonThumbnail_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonThumbnail = __decorate([ProxyCmp2({})], IonThumbnail);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonThumbnail, [{
    type: Component,
    args: [{
      selector: "ion-thumbnail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonTitle = class IonTitle2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonTitle2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonTitle2,
    selectors: [["ion-title"]],
    inputs: {
      color: "color",
      size: "size"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonTitle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTitle = __decorate([ProxyCmp2({
  inputs: ["color", "size"]
})], IonTitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTitle, [{
    type: Component,
    args: [{
      selector: "ion-title",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "size"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonToast = class IonToast2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionToastDidPresent", "ionToastWillPresent", "ionToastWillDismiss", "ionToastDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonToast_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonToast2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonToast2,
    selectors: [["ion-toast"]],
    inputs: {
      animated: "animated",
      buttons: "buttons",
      color: "color",
      cssClass: "cssClass",
      duration: "duration",
      enterAnimation: "enterAnimation",
      header: "header",
      htmlAttributes: "htmlAttributes",
      icon: "icon",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      layout: "layout",
      leaveAnimation: "leaveAnimation",
      message: "message",
      mode: "mode",
      position: "position",
      positionAnchor: "positionAnchor",
      swipeGesture: "swipeGesture",
      translucent: "translucent",
      trigger: "trigger"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonToast_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonToast = __decorate([ProxyCmp2({
  inputs: ["animated", "buttons", "color", "cssClass", "duration", "enterAnimation", "header", "htmlAttributes", "icon", "isOpen", "keyboardClose", "layout", "leaveAnimation", "message", "mode", "position", "positionAnchor", "swipeGesture", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonToast);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToast, [{
    type: Component,
    args: [{
      selector: "ion-toast",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "buttons", "color", "cssClass", "duration", "enterAnimation", "header", "htmlAttributes", "icon", "isOpen", "keyboardClose", "layout", "leaveAnimation", "message", "mode", "position", "positionAnchor", "swipeGesture", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonToggle = class IonToggle2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
    proxyOutputs2(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonToggle2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonToggle2,
    selectors: [["ion-toggle"]],
    inputs: {
      alignment: "alignment",
      checked: "checked",
      color: "color",
      disabled: "disabled",
      enableOnOffLabels: "enableOnOffLabels",
      errorText: "errorText",
      helperText: "helperText",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      name: "name",
      required: "required",
      value: "value"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonToggle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonToggle = __decorate([ProxyCmp2({
  inputs: ["alignment", "checked", "color", "disabled", "enableOnOffLabels", "errorText", "helperText", "justify", "labelPlacement", "mode", "name", "required", "value"]
})], IonToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToggle, [{
    type: Component,
    args: [{
      selector: "ion-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "checked", "color", "disabled", "enableOnOffLabels", "errorText", "helperText", "justify", "labelPlacement", "mode", "name", "required", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonToolbar = class IonToolbar2 {
  z;
  el;
  constructor(c3, r2, z) {
    this.z = z;
    c3.detach();
    this.el = r2.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonToolbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || IonToolbar2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonToolbar2,
    selectors: [["ion-toolbar"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonToolbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonToolbar = __decorate([ProxyCmp2({
  inputs: ["color", "mode"]
})], IonToolbar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToolbar, [{
    type: Component,
    args: [{
      selector: "ion-toolbar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRouterOutlet2 = class _IonRouterOutlet extends IonRouterOutlet {
  parentOutlet;
  /**
   * `static: true` must be set so the query results are resolved
   * before change detection runs. Otherwise, the view container
   * ref will be ion-router-outlet instead of ng-container, and
   * the first view will be added as a sibling of ion-router-outlet
   * instead of a child.
   */
  outletContent;
  /**
   * We need to pass in the correct instance of IonRouterOutlet
   * otherwise parentOutlet will be null in a nested outlet context.
   * This results in APIs such as NavController.pop not working
   * in nested outlets because the parent outlet cannot be found.
   */
  constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
    super(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet);
    this.parentOutlet = parentOutlet;
  }
  /** @nocollapse */
  static \u0275fac = function IonRouterOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonRouterOutlet)(\u0275\u0275injectAttribute("name"), \u0275\u0275injectAttribute("tabs"), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(_IonRouterOutlet, 12));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IonRouterOutlet,
    selectors: [["ion-router-outlet"]],
    viewQuery: function IonRouterOutlet_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 7, ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.outletContent = _t.first);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 3,
    vars: 0,
    consts: [["outletContent", ""]],
    template: function IonRouterOutlet_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementContainerStart(0, null, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementContainerEnd();
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRouterOutlet2, [{
    type: Component,
    args: [{
      selector: "ion-router-outlet",
      template: "<ng-container #outletContent><ng-content></ng-content></ng-container>"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["name"]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Attribute,
        args: ["tabs"]
      }]
    }, {
      type: Location
    }, {
      type: ElementRef
    }, {
      type: Router
    }, {
      type: NgZone
    }, {
      type: ActivatedRoute
    }, {
      type: IonRouterOutlet2,
      decorators: [{
        type: SkipSelf
      }, {
        type: Optional
      }]
    }];
  }, {
    outletContent: [{
      type: ViewChild,
      args: ["outletContent", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();
var IonTabs2 = class _IonTabs extends IonTabs {
  outlet;
  tabBar;
  tabBars;
  tabs;
  /** @nocollapse */
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IonTabs_BaseFactory;
    return function IonTabs_Factory(__ngFactoryType__) {
      return (\u0275IonTabs_BaseFactory || (\u0275IonTabs_BaseFactory = \u0275\u0275getInheritedFactory(_IonTabs)))(__ngFactoryType__ || _IonTabs);
    };
  })();
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IonTabs,
    selectors: [["ion-tabs"]],
    contentQueries: function IonTabs_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, IonTabBar, 5);
        \u0275\u0275contentQuery(dirIndex, IonTabBar, 4);
        \u0275\u0275contentQuery(dirIndex, IonTab, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabBar = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabBars = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabs = _t);
      }
    },
    viewQuery: function IonTabs_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c2, 5, IonRouterOutlet2);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.outlet = _t.first);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c4,
    decls: 6,
    vars: 2,
    consts: [["tabsInner", ""], ["outlet", ""], [1, "tabs-inner"], ["tabs", "true", 3, "stackWillChange", "stackDidChange", 4, "ngIf"], [4, "ngIf"], ["tabs", "true", 3, "stackWillChange", "stackDidChange"]],
    template: function IonTabs_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c3);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2, 0);
        \u0275\u0275template(3, IonTabs_ion_router_outlet_3_Template, 2, 0, "ion-router-outlet", 3)(4, IonTabs_ng_content_4_Template, 1, 0, "ng-content", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(5, 1);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.tabs.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tabs.length > 0);
      }
    },
    dependencies: [NgIf, IonRouterOutlet2],
    styles: ["[_nghost-%COMP%]{display:flex;position:absolute;inset:0;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner[_ngcontent-%COMP%]{position:relative;flex:1;contain:layout size style}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabs2, [{
    type: Component,
    args: [{
      selector: "ion-tabs",
      template: `
    <ng-content select="[slot=top]"></ng-content>
    <div class="tabs-inner" #tabsInner>
      <ion-router-outlet
        *ngIf="tabs.length === 0"
        #outlet
        tabs="true"
        (stackWillChange)="onStackWillChange($event)"
        (stackDidChange)="onStackDidChange($event)"
      ></ion-router-outlet>
      <ng-content *ngIf="tabs.length > 0" select="ion-tab"></ng-content>
    </div>
    <ng-content></ng-content>
  `,
      styles: [":host{display:flex;position:absolute;inset:0;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner{position:relative;flex:1;contain:layout size style}\n"]
    }]
  }], null, {
    outlet: [{
      type: ViewChild,
      args: ["outlet", {
        read: IonRouterOutlet2,
        static: false
      }]
    }],
    tabBar: [{
      type: ContentChild,
      args: [IonTabBar, {
        static: false
      }]
    }],
    tabBars: [{
      type: ContentChildren,
      args: [IonTabBar]
    }],
    tabs: [{
      type: ContentChildren,
      args: [IonTab]
    }]
  });
})();
var IonBackButton3 = class _IonBackButton extends IonBackButton {
  constructor(routerOutlet, navCtrl, config, r2, z, c3) {
    super(routerOutlet, navCtrl, config, r2, z, c3);
  }
  /** @nocollapse */
  static \u0275fac = function IonBackButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonBackButton)(\u0275\u0275directiveInject(IonRouterOutlet2, 8), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(Config), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IonBackButton,
    selectors: [["ion-back-button"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonBackButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackButton3, [{
    type: Component,
    args: [{
      selector: "ion-back-button",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: IonRouterOutlet2,
      decorators: [{
        type: Optional
      }]
    }, {
      type: NavController
    }, {
      type: Config
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var IonNav3 = class _IonNav extends IonNav {
  constructor(ref, environmentInjector, injector, angularDelegate, z, c3) {
    super(ref, environmentInjector, injector, angularDelegate, z, c3);
  }
  /** @nocollapse */
  static \u0275fac = function IonNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonNav)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(EnvironmentInjector), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(AngularDelegate), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IonNav,
    selectors: [["ion-nav"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function IonNav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNav3, [{
    type: Component,
    args: [{
      selector: "ion-nav",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: EnvironmentInjector
    }, {
      type: Injector
    }, {
      type: AngularDelegate
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var RouterLinkDelegateDirective2 = class _RouterLinkDelegateDirective extends RouterLinkDelegateDirective {
  /** @nocollapse */
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RouterLinkDelegateDirective_BaseFactory;
    return function RouterLinkDelegateDirective_Factory(__ngFactoryType__) {
      return (\u0275RouterLinkDelegateDirective_BaseFactory || (\u0275RouterLinkDelegateDirective_BaseFactory = \u0275\u0275getInheritedFactory(_RouterLinkDelegateDirective)))(__ngFactoryType__ || _RouterLinkDelegateDirective);
    };
  })();
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLinkDelegateDirective,
    selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkDelegateDirective2, [{
    type: Directive,
    args: [{
      selector: ":not(a):not(area)[routerLink]"
    }]
  }], null, null);
})();
var RouterLinkWithHrefDelegateDirective2 = class _RouterLinkWithHrefDelegateDirective extends RouterLinkWithHrefDelegateDirective {
  /** @nocollapse */
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RouterLinkWithHrefDelegateDirective_BaseFactory;
    return function RouterLinkWithHrefDelegateDirective_Factory(__ngFactoryType__) {
      return (\u0275RouterLinkWithHrefDelegateDirective_BaseFactory || (\u0275RouterLinkWithHrefDelegateDirective_BaseFactory = \u0275\u0275getInheritedFactory(_RouterLinkWithHrefDelegateDirective)))(__ngFactoryType__ || _RouterLinkWithHrefDelegateDirective);
    };
  })();
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLinkWithHrefDelegateDirective,
    selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkWithHrefDelegateDirective2, [{
    type: Directive,
    args: [{
      selector: "a[routerLink],area[routerLink]"
    }]
  }], null, null);
})();
var IonModal3 = class _IonModal extends IonModal {
  /** @nocollapse */
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IonModal_BaseFactory;
    return function IonModal_Factory(__ngFactoryType__) {
      return (\u0275IonModal_BaseFactory || (\u0275IonModal_BaseFactory = \u0275\u0275getInheritedFactory(_IonModal)))(__ngFactoryType__ || _IonModal);
    };
  })();
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IonModal,
    selectors: [["ion-modal"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["class", "ion-delegate-host ion-page", 4, "ngIf"], [1, "ion-delegate-host", "ion-page"], [3, "ngTemplateOutlet"]],
    template: function IonModal_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, IonModal_div_0_Template, 2, 1, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonModal3, [{
    type: Component,
    args: [{
      selector: "ion-modal",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="ion-delegate-host ion-page" *ngIf="isCmpOpen || keepContentsMounted">
    <ng-container [ngTemplateOutlet]="template"></ng-container>
  </div>`
    }]
  }], null, null);
})();
var IonPopover3 = class _IonPopover extends IonPopover {
  /** @nocollapse */
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IonPopover_BaseFactory;
    return function IonPopover_Factory(__ngFactoryType__) {
      return (\u0275IonPopover_BaseFactory || (\u0275IonPopover_BaseFactory = \u0275\u0275getInheritedFactory(_IonPopover)))(__ngFactoryType__ || _IonPopover);
    };
  })();
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IonPopover,
    selectors: [["ion-popover"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"]],
    template: function IonPopover_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, IonPopover_ng_container_0_Template, 1, 1, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPopover3, [{
    type: Component,
    args: [{
      selector: "ion-popover",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container [ngTemplateOutlet]="template" *ngIf="isCmpOpen || keepContentsMounted"></ng-container>`
    }]
  }], null, null);
})();
var ION_MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IonMaxValidator),
  multi: true
};
var IonMaxValidator = class _IonMaxValidator extends MaxValidator {
  /** @nocollapse */
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IonMaxValidator_BaseFactory;
    return function IonMaxValidator_Factory(__ngFactoryType__) {
      return (\u0275IonMaxValidator_BaseFactory || (\u0275IonMaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_IonMaxValidator)))(__ngFactoryType__ || _IonMaxValidator);
    };
  })();
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _IonMaxValidator,
    selectors: [["ion-input", "type", "number", "max", "", "formControlName", ""], ["ion-input", "type", "number", "max", "", "formControl", ""], ["ion-input", "type", "number", "max", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function IonMaxValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
      }
    },
    features: [\u0275\u0275ProvidersFeature([ION_MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMaxValidator, [{
    type: Directive,
    args: [{
      selector: "ion-input[type=number][max][formControlName],ion-input[type=number][max][formControl],ion-input[type=number][max][ngModel]",
      providers: [ION_MAX_VALIDATOR],
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, null);
})();
var ION_MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IonMinValidator),
  multi: true
};
var IonMinValidator = class _IonMinValidator extends MinValidator {
  /** @nocollapse */
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IonMinValidator_BaseFactory;
    return function IonMinValidator_Factory(__ngFactoryType__) {
      return (\u0275IonMinValidator_BaseFactory || (\u0275IonMinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_IonMinValidator)))(__ngFactoryType__ || _IonMinValidator);
    };
  })();
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _IonMinValidator,
    selectors: [["ion-input", "type", "number", "min", "", "formControlName", ""], ["ion-input", "type", "number", "min", "", "formControl", ""], ["ion-input", "type", "number", "min", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function IonMinValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
      }
    },
    features: [\u0275\u0275ProvidersFeature([ION_MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMinValidator, [{
    type: Directive,
    args: [{
      selector: "ion-input[type=number][min][formControlName],ion-input[type=number][min][formControl],ion-input[type=number][min][ngModel]",
      providers: [ION_MIN_VALIDATOR],
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, null);
})();
var AlertController = class _AlertController extends OverlayBaseController {
  constructor() {
    super(alertController);
  }
  /** @nocollapse */
  static \u0275fac = function AlertController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlertController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AlertController,
    factory: _AlertController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var AnimationController = class _AnimationController {
  /**
   * Create a new animation
   */
  create(animationId) {
    return createAnimation(animationId);
  }
  /**
   * EXPERIMENTAL
   *
   * Given a progression and a cubic bezier function,
   * this utility returns the time value(s) at which the
   * cubic bezier reaches the given time progression.
   *
   * If the cubic bezier never reaches the progression
   * the result will be an empty array.
   *
   * This is most useful for switching between easing curves
   * when doing a gesture animation (i.e. going from linear easing
   * during a drag, to another easing when `progressEnd` is called)
   */
  easingTime(p0, p1, p2, p3, progression) {
    return getTimeGivenProgression(p0, p1, p2, p3, progression);
  }
  /** @nocollapse */
  static \u0275fac = function AnimationController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnimationController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationController,
    factory: _AnimationController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ActionSheetController = class _ActionSheetController extends OverlayBaseController {
  constructor() {
    super(actionSheetController);
  }
  /** @nocollapse */
  static \u0275fac = function ActionSheetController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionSheetController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ActionSheetController,
    factory: _ActionSheetController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var GestureController = class _GestureController {
  zone;
  constructor(zone) {
    this.zone = zone;
  }
  /**
   * Create a new gesture
   */
  create(opts, runInsideAngularZone = false) {
    if (runInsideAngularZone) {
      Object.getOwnPropertyNames(opts).forEach((key) => {
        if (typeof opts[key] === "function") {
          const fn = opts[key];
          opts[key] = (...props) => this.zone.run(() => fn(...props));
        }
      });
    }
    return createGesture(opts);
  }
  /** @nocollapse */
  static \u0275fac = function GestureController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GestureController)(\u0275\u0275inject(NgZone));
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _GestureController,
    factory: _GestureController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GestureController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: NgZone
    }];
  }, null);
})();
var LoadingController = class _LoadingController extends OverlayBaseController {
  constructor() {
    super(loadingController);
  }
  /** @nocollapse */
  static \u0275fac = function LoadingController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoadingController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _LoadingController,
    factory: _LoadingController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var MenuController2 = class _MenuController extends MenuController {
  constructor() {
    super(menuController);
  }
  /** @nocollapse */
  static \u0275fac = function MenuController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MenuController,
    factory: _MenuController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuController2, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var ModalController = class _ModalController extends OverlayBaseController {
  angularDelegate = inject(AngularDelegate);
  injector = inject(Injector);
  environmentInjector = inject(EnvironmentInjector);
  constructor() {
    super(modalController);
  }
  create(opts) {
    const _a = opts, {
      injector: customInjector
    } = _a, restOpts = __objRest(_a, [
      "injector"
    ]);
    return super.create(__spreadProps(__spreadValues({}, restOpts), {
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "modal", customInjector)
    }));
  }
  /** @nocollapse */
  static \u0275fac = function ModalController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModalController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ModalController,
    factory: _ModalController.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalController, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var PickerController = class _PickerController extends OverlayBaseController {
  constructor() {
    super(pickerController);
  }
  /** @nocollapse */
  static \u0275fac = function PickerController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PickerController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PickerController,
    factory: _PickerController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var PopoverController = class extends OverlayBaseController {
  angularDelegate = inject(AngularDelegate);
  injector = inject(Injector);
  environmentInjector = inject(EnvironmentInjector);
  constructor() {
    super(popoverController);
  }
  create(opts) {
    const _a = opts, {
      injector: customInjector
    } = _a, restOpts = __objRest(_a, [
      "injector"
    ]);
    return super.create(__spreadProps(__spreadValues({}, restOpts), {
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "popover", customInjector)
    }));
  }
};
var ToastController = class _ToastController extends OverlayBaseController {
  constructor() {
    super(toastController);
  }
  /** @nocollapse */
  static \u0275fac = function ToastController_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToastController,
    factory: _ToastController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var appInitialize = (config, doc, zone) => {
  return () => {
    const win = doc.defaultView;
    if (win && typeof window !== "undefined") {
      setupConfig(__spreadProps(__spreadValues({}, config), {
        _zoneGate: (h2) => zone.run(h2)
      }));
      const aelFn = "__zone_symbol__addEventListener" in doc.body ? "__zone_symbol__addEventListener" : "addEventListener";
      return defineCustomElements(win, {
        exclude: ["ion-tabs"],
        syncQueue: true,
        raf,
        jmp: (h2) => zone.runOutsideAngular(h2),
        ael(elm, eventName, cb, opts) {
          elm[aelFn](eventName, cb, opts);
        },
        rel(elm, eventName, cb, opts) {
          elm.removeEventListener(eventName, cb, opts);
        }
      });
    }
  };
};
var DIRECTIVES = [IonAccordion, IonAccordionGroup, IonActionSheet, IonAlert, IonApp, IonAvatar, IonBackdrop, IonBadge, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonInputOtp, IonInputPasswordToggle, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonLoading, IonMenu, IonMenuButton, IonMenuToggle, IonNavLink, IonNote, IonPicker, IonPickerColumn, IonPickerColumnOption, IonPickerLegacy, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonSelect, IonSelectModal, IonSelectOption, IonSkeletonText, IonSpinner, IonSplitPane, IonTab, IonTabBar, IonTabButton, IonText, IonTextarea, IonThumbnail, IonTitle, IonToast, IonToggle, IonToolbar];
var DECLARATIONS = [
  // generated proxies
  ...DIRECTIVES,
  // manual proxies
  IonModal3,
  IonPopover3,
  // ngModel accessors
  BooleanValueAccessorDirective,
  NumericValueAccessorDirective,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  // navigation
  IonTabs2,
  IonRouterOutlet2,
  IonBackButton3,
  IonNav3,
  RouterLinkDelegateDirective2,
  RouterLinkWithHrefDelegateDirective2,
  // validators
  IonMinValidator,
  IonMaxValidator
];
var IonicModule = class _IonicModule {
  static forRoot(config = {}) {
    return {
      ngModule: _IonicModule,
      providers: [{
        provide: ConfigToken,
        useValue: config
      }, {
        provide: APP_INITIALIZER,
        useFactory: appInitialize,
        multi: true,
        deps: [ConfigToken, DOCUMENT, NgZone]
      }, AngularDelegate, provideComponentInputBinding()]
    };
  }
  /** @nocollapse */
  static \u0275fac = function IonicModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IonicModule)();
  };
  /** @nocollapse */
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _IonicModule
  });
  /** @nocollapse */
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [ModalController, PopoverController],
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonicModule, [{
    type: NgModule,
    args: [{
      declarations: DECLARATIONS,
      exports: DECLARATIONS,
      providers: [ModalController, PopoverController],
      imports: [CommonModule]
    }]
  }], null, null);
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
    return interval(3e3).pipe(startWith(0), switchMap(() => this.getBuildStatus(buildId)), takeWhile((status) => status.status !== "ready" && status.status !== "failed" && status.status !== "not_found", true));
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
var _c03 = (a0, a1) => ({ "bg-green-500/10 text-green-500": a0, "bg-red-500/10 text-red-500": a1 });
function AIBuildStudioComponent_div_19_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "INITIATE AI BUILD \u{1F680}");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_1_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "ESTABLISHING CONNECTION... \u23F3");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "h2", 23);
    \u0275\u0275text(3, "Configure Product: ");
    \u0275\u0275elementStart(4, "span", 24);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 25);
    \u0275\u0275text(7, "Instruct the AI to customize the source code architecture. Themes, fares, and logic will be re-baked in real-time.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 26)(9, "textarea", 27);
    \u0275\u0275twoWayListener("ngModelChange", function AIBuildStudioComponent_div_19_div_1_Template_textarea_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.prompt, $event) || (ctx_r1.prompt = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 28);
    \u0275\u0275element(11, "span", 29);
    \u0275\u0275text(12, " NEURAL LINK ACTIVE ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 30)(14, "div", 31)(15, "span", 32);
    \u0275\u0275text(16, "LIVE SCHEMA PREVIEW");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 33);
    \u0275\u0275text(18, "JSON_CONFIG_V4");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 34)(20, "pre", 35);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "slice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 36);
    \u0275\u0275listener("click", function AIBuildStudioComponent_div_19_div_1_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.initiateBuild());
    });
    \u0275\u0275template(24, AIBuildStudioComponent_div_19_div_1_span_24_Template, 2, 0, "span", 37)(25, AIBuildStudioComponent_div_19_div_1_span_25_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.productName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.prompt);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(22, 6, ctx_r1.baseSchema, 0, 300), "...");
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
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_2_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2696\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_2_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_2_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u26A1");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_2_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_2_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F6E0}\uFE0F");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_2_span_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_2_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4E6}");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_2_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F389}");
    \u0275\u0275elementEnd();
  }
}
function AIBuildStudioComponent_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40);
    \u0275\u0275text(3, "LIVE FACTORY FEED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 41);
    \u0275\u0275text(5, "Mission Control");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 25);
    \u0275\u0275text(7, "Tracking build execution across distributed clusters.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 42)(9, "div", 43)(10, "div", 44);
    \u0275\u0275template(11, AIBuildStudioComponent_div_19_div_2_span_11_Template, 2, 0, "span", 37)(12, AIBuildStudioComponent_div_19_div_2_span_12_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h3", 45);
    \u0275\u0275text(15, "Analyzing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 46);
    \u0275\u0275text(17, "AI generating new configuration based on instructions.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 43)(19, "div", 44);
    \u0275\u0275template(20, AIBuildStudioComponent_div_19_div_2_span_20_Template, 2, 0, "span", 37)(21, AIBuildStudioComponent_div_19_div_2_span_21_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "h3", 45);
    \u0275\u0275text(24, "Validating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 46);
    \u0275\u0275text(26, "Security audit & schema integrity checks.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 43)(28, "div", 44);
    \u0275\u0275template(29, AIBuildStudioComponent_div_19_div_2_span_29_Template, 2, 0, "span", 37)(30, AIBuildStudioComponent_div_19_div_2_span_30_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div")(32, "h3", 45);
    \u0275\u0275text(33, "Provisioning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 46);
    \u0275\u0275text(35, "Triggering GitHub Build Engine & environment setup.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 43)(37, "div", 44);
    \u0275\u0275template(38, AIBuildStudioComponent_div_19_div_2_span_38_Template, 2, 0, "span", 37)(39, AIBuildStudioComponent_div_19_div_2_span_39_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div")(41, "h3", 45);
    \u0275\u0275text(42, "Compiling");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 46);
    \u0275\u0275text(44, "Real-time binary generation (may take 2-4 mins).");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "div", 43)(46, "div", 44);
    \u0275\u0275template(47, AIBuildStudioComponent_div_19_div_2_span_47_Template, 2, 0, "span", 37)(48, AIBuildStudioComponent_div_19_div_2_span_48_Template, 2, 0, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div")(50, "h3", 45);
    \u0275\u0275text(51, "Delivering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p", 46);
    \u0275\u0275text(53, "Final packaging & delivery of secure download link.");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("opacity-40", !ctx_r1.isCurrentStep("analyzing") && !ctx_r1.isPastStep("analyzing"));
    \u0275\u0275advance();
    \u0275\u0275classProp("border-violet-500", ctx_r1.isCurrentStep("analyzing"))("bg-violet-500", ctx_r1.isPastStep("analyzing"))("ais-step-active-glow", ctx_r1.isCurrentStep("analyzing"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPastStep("analyzing"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPastStep("analyzing"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-violet-500", ctx_r1.isCurrentStep("analyzing"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("opacity-40", !ctx_r1.isCurrentStep("validating") && !ctx_r1.isPastStep("validating"));
    \u0275\u0275advance();
    \u0275\u0275classProp("border-violet-500", ctx_r1.isCurrentStep("validating"))("bg-violet-500", ctx_r1.isPastStep("validating"))("ais-step-active-glow", ctx_r1.isCurrentStep("validating"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPastStep("validating"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPastStep("validating"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-violet-500", ctx_r1.isCurrentStep("validating"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("opacity-40", !ctx_r1.isCurrentStep("provisioning") && !ctx_r1.isPastStep("provisioning"));
    \u0275\u0275advance();
    \u0275\u0275classProp("border-violet-500", ctx_r1.isCurrentStep("provisioning"))("bg-violet-500", ctx_r1.isPastStep("provisioning"))("ais-step-active-glow", ctx_r1.isCurrentStep("provisioning"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPastStep("provisioning"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPastStep("provisioning"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-violet-500", ctx_r1.isCurrentStep("provisioning"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("opacity-40", !ctx_r1.isCurrentStep("compiling") && !ctx_r1.isPastStep("compiling"));
    \u0275\u0275advance();
    \u0275\u0275classProp("border-violet-500", ctx_r1.isCurrentStep("compiling"))("bg-violet-500", ctx_r1.isPastStep("compiling"))("ais-step-active-glow", ctx_r1.isCurrentStep("compiling"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isPastStep("compiling"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPastStep("compiling"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-violet-500", ctx_r1.isCurrentStep("compiling"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("opacity-40", !ctx_r1.isCurrentStep("ready"));
    \u0275\u0275advance();
    \u0275\u0275classProp("border-violet-500", ctx_r1.isCurrentStep("ready"))("bg-violet-500", ctx_r1.isCurrentStep("ready"))("ais-step-active-glow", ctx_r1.isCurrentStep("ready"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.currentStatus == null ? null : ctx_r1.currentStatus.status) !== "ready");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.currentStatus == null ? null : ctx_r1.currentStatus.status) === "ready");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("text-violet-500", ctx_r1.isCurrentStep("ready"));
  }
}
function AIBuildStudioComponent_div_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49)(4, "h2", 50);
    \u0275\u0275text(5, "Build Ready");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 25);
    \u0275\u0275text(7, "Your universal custom app has been successfully compiled and signed.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 51)(9, "a", 52);
    \u0275\u0275text(10, "DOWNLOAD CUSTOM APK \u{1F4F2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 53);
    \u0275\u0275listener("click", function AIBuildStudioComponent_div_19_div_3_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.viewState = "configurator";
      return \u0275\u0275resetView(ctx_r1.prompt = "");
    });
    \u0275\u0275text(12, "START NEW BUILD");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("href", ctx_r1.currentStatus == null ? null : ctx_r1.currentStatus.downloadUrl, \u0275\u0275sanitizeUrl);
  }
}
function AIBuildStudioComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, AIBuildStudioComponent_div_19_div_1_Template, 26, 10, "div", 18)(2, AIBuildStudioComponent_div_19_div_2_Template, 54, 60, "div", 19)(3, AIBuildStudioComponent_div_19_div_3_Template, 13, 1, "div", 20);
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
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58);
    \u0275\u0275text(2, "\u{1F5C4}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 59);
    \u0275\u0275text(4, "No previous builds found in history.");
    \u0275\u0275elementEnd()();
  }
}
function AIBuildStudioComponent_div_20_div_4_a_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 69);
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
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 61)(2, "div")(3, "h3", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 63);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 64);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 65);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 66);
    \u0275\u0275template(14, AIBuildStudioComponent_div_20_div_4_a_14_Template, 2, 1, "a", 67);
    \u0275\u0275elementStart(15, "button", 68);
    \u0275\u0275listener("click", function AIBuildStudioComponent_div_20_div_4_Template_button_click_15_listener() {
      const build_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reViewBuild(build_r5));
    });
    \u0275\u0275text(16, "View Schema Details");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const build_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(build_r5.product_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 6, build_r5.timestamp, "medium"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(11, _c03, build_r5.status === "ready", build_r5.status === "failed"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, build_r5.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1('"', build_r5.prompt, '"');
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", build_r5.downloadUrl);
  }
}
function AIBuildStudioComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "h2", 23);
    \u0275\u0275text(2, "Build Archives");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AIBuildStudioComponent_div_20_div_3_Template, 5, 0, "div", 55)(4, AIBuildStudioComponent_div_20_div_4_Template, 17, 14, "div", 56);
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
        this.history.set(data.sort((a2, b2) => new Date(b2.timestamp).getTime() - new Date(a2.timestamp).getTime()));
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
        if (status.status === "ready") {
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
    const steps = ["analyzing", "validating", "provisioning", "compiling", "ready"];
    const currentIndex = steps.indexOf(this.currentStatus?.status || "analyzing");
    const stepIndex = steps.indexOf(step);
    return currentIndex > stepIndex;
  }
  static {
    this.\u0275fac = function AIBuildStudioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AIBuildStudioComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AIBuildStudioComponent, selectors: [["app-ai-build-studio"]], inputs: { productId: "productId", productName: "productName", baseSchema: "baseSchema" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 10, consts: [[1, "ais-dark"], [1, "flex", "flex-col", "h-full", "bg-zinc-950", "text-zinc-100", "overflow-hidden"], [1, "p-6", "flex", "items-center", "justify-between", "border-b", "border-zinc-800", "ais-glass"], [1, "flex", "items-center", "gap-4"], [1, "w-10", "h-10", "rounded-xl", "bg-violet-500", "flex", "items-center", "justify-center", "text-xl", "ais-glow-violet"], [1, "text-xl", "font-bold", "ais-text-gradient"], [1, "text-xs", "text-zinc-500", "tracking-widest", "uppercase"], [1, "text-zinc-500", "hover:text-white", "transition-colors", "text-2xl", 3, "click"], [1, "flex", "px-6", "pt-4", "gap-8", "border-b", "border-zinc-800"], [1, "pb-3", "border-violet-500", "font-semibold", "transition-all", 3, "click"], [1, "flex-1", "overflow-y-auto", "p-6", "scroll-smooth"], ["class", "fade-in space-y-8", 4, "ngIf"], ["class", "fade-in space-y-6", 4, "ngIf"], [1, "p-6", "border-t", "border-zinc-800", "ais-glass", "flex", "items-center", "justify-between"], [1, "flex", "items-center", "gap-2", "text-[10px]", "font-bold", "text-zinc-600", "tracking-widest"], [1, "w-1.5", "h-1.5", "bg-violet-500", "rounded-full", "animate-pulse"], [1, "text-[10px]", "text-zinc-600", "font-bold", "tracking-widest", "uppercase"], [1, "fade-in", "space-y-8"], ["class", "space-y-6", 4, "ngIf"], ["class", "space-y-8 py-4", 4, "ngIf"], ["class", "text-center space-y-8 py-10", 4, "ngIf"], [1, "space-y-6"], [1, "space-y-2"], [1, "text-2xl", "font-bold"], [1, "text-violet-500"], [1, "text-zinc-400"], [1, "relative", "group"], ["rows", "4", "placeholder", "e.g., 'Modern dark theme with gold accents, set base fare to $5.00, and add a premium driver onboarding flow...'", 1, "w-full", "bg-zinc-900", "border", "border-zinc-800", "rounded-2xl", "p-6", "focus:border-violet-500", "focus:ring-1", "focus:ring-violet-500", "outline-none", "transition-all", "placeholder:text-zinc-600", 3, "ngModelChange", "ngModel"], [1, "absolute", "bottom-4", "right-4", "flex", "items-center", "gap-2", "text-xs", "text-zinc-500"], [1, "w-2", "h-2", "bg-green-500", "rounded-full"], [1, "ais-glass", "rounded-2xl", "overflow-hidden"], [1, "p-4", "border-b", "border-white/5", "flex", "justify-between", "items-center"], [1, "text-xs", "font-bold", "tracking-widest", "text-zinc-500"], [1, "px-2", "py-1", "bg-zinc-800", "rounded", "text-[10px]", "text-zinc-400"], [1, "p-6", "bg-zinc-900/50"], [1, "text-[13px]", "text-violet-400", "font-mono", "leading-relaxed", "overflow-x-auto"], [1, "w-full", "py-4", "bg-violet-600", "hover:bg-violet-500", "disabled:opacity-50", "disabled:cursor-not-allowed", "text-white", "font-bold", "rounded-2xl", "transition-all", "ais-glow-violet", "flex", "items-center", "justify-center", "gap-3", 3, "click", "disabled"], [4, "ngIf"], [1, "space-y-8", "py-4"], [1, "text-center", "space-y-2"], [1, "inline-block", "px-3", "py-1", "bg-violet-500/10", "text-violet-500", "rounded-full", "text-[10px]", "font-bold", "tracking-widest", "mb-2", "border", "border-violet-500/20"], [1, "text-3xl", "font-bold"], [1, "relative", "space-y-12", "before:absolute", "before:left-[19px]", "before:top-2", "before:bottom-2", "before:w-[2px]", "before:bg-zinc-800"], [1, "flex", "items-start", "gap-6", "relative"], [1, "w-10", "h-10", "rounded-full", "bg-zinc-900", "border-2", "border-zinc-800", "flex", "items-center", "justify-center", "z-10", "transition-all"], [1, "font-bold", "text-lg"], [1, "text-sm", "text-zinc-500"], [1, "text-center", "space-y-8", "py-10"], [1, "w-24", "h-24", "bg-green-500", "rounded-full", "flex", "items-center", "justify-center", "text-5xl", "mx-auto", "shadow-[0_0_50px_rgba(34,197,94,0.3)]", "animate-bounce"], [1, "space-y-4"], [1, "text-4xl", "font-extrabold", "uppercase", "tracking-tight"], [1, "flex", "flex-col", "gap-4"], ["target", "_blank", 1, "w-full", "py-4", "bg-green-600", "hover:bg-green-500", "text-white", "font-bold", "rounded-2xl", "transition-all", "shadow-[0_0_20px_rgba(34,197,94,0.2)]", 3, "href"], [1, "w-full", "py-4", "bg-zinc-900", "border", "border-zinc-800", "text-zinc-400", "hover:text-white", "rounded-2xl", "transition-all", 3, "click"], [1, "fade-in", "space-y-6"], ["class", "py-20 text-center space-y-4", 4, "ngIf"], ["class", "ais-glass rounded-2xl p-6 border border-white/5 space-y-4 hover:border-violet-500/30 transition-all", 4, "ngFor", "ngForOf"], [1, "py-20", "text-center", "space-y-4"], [1, "text-5xl", "opacity-20"], [1, "text-zinc-500"], [1, "ais-glass", "rounded-2xl", "p-6", "border", "border-white/5", "space-y-4", "hover:border-violet-500/30", "transition-all"], [1, "flex", "justify-between", "items-start"], [1, "font-bold", "text-lg", "text-violet-400"], [1, "text-[10px]", "text-zinc-500", "uppercase", "tracking-tighter"], [1, "px-2", "py-1", "rounded", "text-[10px]", "font-bold", 3, "ngClass"], [1, "text-sm", "text-zinc-400", "italic", "line-clamp-2"], [1, "pt-2", "flex", "gap-4"], ["target", "_blank", "class", "text-xs font-bold text-violet-500 hover:underline", 3, "href", 4, "ngIf"], [1, "text-xs", "font-bold", "text-zinc-500", "hover:text-white", 3, "click"], ["target", "_blank", 1, "text-xs", "font-bold", "text-violet-500", "hover:underline", 3, "href"]], template: function AIBuildStudioComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5, "\u2728");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div")(7, "h1", 5);
        \u0275\u0275text(8, "AI BUILD STUDIO");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, "Universal Factory Hub v2.0");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "button", 7);
        \u0275\u0275listener("click", function AIBuildStudioComponent_Template_button_click_11_listener() {
          return ctx.dismiss();
        });
        \u0275\u0275text(12, "\xD7");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "nav", 8)(14, "button", 9);
        \u0275\u0275listener("click", function AIBuildStudioComponent_Template_button_click_14_listener() {
          return ctx.activeTab = "studio";
        });
        \u0275\u0275text(15, "Studio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 9);
        \u0275\u0275listener("click", function AIBuildStudioComponent_Template_button_click_16_listener() {
          return ctx.loadHistory();
        });
        \u0275\u0275text(17, "Archives");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275template(19, AIBuildStudioComponent_div_19_Template, 4, 3, "div", 11)(20, AIBuildStudioComponent_div_20_Template, 5, 2, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "footer", 13)(22, "div", 14);
        \u0275\u0275element(23, "span", 15);
        \u0275\u0275text(24, " CLUSTER: NEURAL-US-EAST-1 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 16);
        \u0275\u0275text(26, " POWERED BY SELLJUSTCODE AI ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275classProp("text-violet-500", ctx.activeTab === "studio")("border-b-2", ctx.activeTab === "studio");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("text-violet-500", ctx.activeTab === "history")("border-b-2", ctx.activeTab === "history");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.activeTab === "studio");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "history");
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, UpperCasePipe, SlicePipe, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, IonicModule, IonContent], styles: ["\n\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=ai-build-studio.component.css.map */"], data: { animation: [
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AIBuildStudioComponent, { className: "AIBuildStudioComponent", filePath: "src\\app\\components\\ai-build-studio\\ai-build-studio.component.ts", lineNumber: 253 });
})();

// src/app/pages/product-detail/product-detail.component.ts
var _c04 = (a0) => ({ category: a0 });
var _c12 = (a0) => ({ q: a0 });
function ProductDetailComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_div_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.maximizedImage = null);
    });
    \u0275\u0275elementStart(1, "div", 73);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_div_1_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(2, "img", 74);
    \u0275\u0275elementStart(3, "button", 75);
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
function ProductDetailComponent_div_1_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "iframe", 77);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.safeYoutubeUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function ProductDetailComponent_div_1_ng_container_52_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 80);
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
function ProductDetailComponent_div_1_ng_container_52_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_ng_container_52_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.maximizedImage = ctx_r2.getRawPreviewUrl());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 82);
    \u0275\u0275element(2, "path", 83);
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_1_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductDetailComponent_div_1_ng_container_52_ng_container_1_Template, 5, 2, "ng-container", 22)(2, ProductDetailComponent_div_1_ng_container_52_button_2_Template, 3, 0, "button", 78);
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
function ProductDetailComponent_div_1_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_div_55_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.activePreviewIndex = "youtube");
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 85);
    \u0275\u0275element(2, "path", 86);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-image", "url(" + ctx_r2.getYoutubeThumbnailUrl() + ")")("background-size", "cover")("background-position", "center");
    \u0275\u0275classProp("active", ctx_r2.activePreviewIndex === "youtube");
  }
}
function ProductDetailComponent_div_1_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_div_56_Template_div_click_0_listener() {
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
function ProductDetailComponent_div_1_div_57_ng_container_2_a_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 96);
  }
  if (rf & 2) {
    const demo_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background-image", "url(" + demo_r9.thumbnailUrl + ")");
  }
}
function ProductDetailComponent_div_1_div_57_ng_container_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 91);
    \u0275\u0275template(1, ProductDetailComponent_div_1_div_57_ng_container_2_a_1_div_1_Template, 1, 2, "div", 92);
    \u0275\u0275elementStart(2, "div", 93)(3, "span", 94);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 95);
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
function ProductDetailComponent_div_1_div_57_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProductDetailComponent_div_1_div_57_ng_container_2_a_1_Template, 7, 3, "a", 90);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.product.liveDemos);
  }
}
function ProductDetailComponent_div_1_div_57_ng_template_3_a_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 98);
    \u0275\u0275text(1, " \u{1F310} Live Demo ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("href", ctx_r2.product.demoUrl, \u0275\u0275sanitizeUrl);
  }
}
function ProductDetailComponent_div_1_div_57_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ProductDetailComponent_div_1_div_57_ng_template_3_a_0_Template, 2, 1, "a", 97);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r2.product.demoUrl);
  }
}
function ProductDetailComponent_div_1_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88);
    \u0275\u0275template(2, ProductDetailComponent_div_1_div_57_ng_container_2_Template, 2, 1, "ng-container", 89)(3, ProductDetailComponent_div_1_div_57_ng_template_3_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const singleDemo_r10 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.product.liveDemos && ctx_r2.product.liveDemos.length > 0)("ngIfElse", singleDemo_r10);
  }
}
function ProductDetailComponent_div_1_div_58_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106);
    \u0275\u0275element(1, "pre", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.formattedGuide, \u0275\u0275sanitizeHtml);
  }
}
function ProductDetailComponent_div_1_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 99)(1, "div", 100);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_div_58_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.guideExpanded = !ctx_r2.guideExpanded);
    });
    \u0275\u0275elementStart(2, "div", 101)(3, "span", 102);
    \u0275\u0275text(4, "\u{1F4D6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 103);
    \u0275\u0275text(6, "Deployment Guide");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 104);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ProductDetailComponent_div_1_div_58_div_9_Template, 2, 1, "div", 105);
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
function ProductDetailComponent_div_1_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 109);
    \u0275\u0275element(2, "polyline", 110);
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
function ProductDetailComponent_div_1_button_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 111);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_button_73_Template_button_click_0_listener() {
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
function ProductDetailComponent_div_1_div_74_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r15);
  }
}
function ProductDetailComponent_div_1_div_74_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r16);
  }
}
function ProductDetailComponent_div_1_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "div", 30)(3, "h3", 114);
    \u0275\u0275text(4, "Tech Stack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 115);
    \u0275\u0275template(6, ProductDetailComponent_div_1_div_74_span_6_Template, 2, 1, "span", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 117)(8, "h3", 114);
    \u0275\u0275text(9, "Compatibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 115);
    \u0275\u0275template(11, ProductDetailComponent_div_1_div_74_span_11_Template, 2, 1, "span", 118);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 117)(13, "h3", 114);
    \u0275\u0275text(14, "Documentation & Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 32);
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
function ProductDetailComponent_div_1_div_75_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const s_r17 = ctx.$implicit;
    \u0275\u0275classMap(s_r17);
  }
}
function ProductDetailComponent_div_1_div_75_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "span", 136);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 137);
    \u0275\u0275element(4, "div", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 139);
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
function ProductDetailComponent_div_1_div_75_div_18_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 153);
    \u0275\u0275text(1, "\u2713 Verified Purchase");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_1_div_75_div_18_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 154);
  }
  if (rf & 2) {
    const s_r19 = ctx.$implicit;
    \u0275\u0275classMap(s_r19);
  }
}
function ProductDetailComponent_div_1_div_75_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140)(1, "div", 141)(2, "div", 142)(3, "div", 143)(4, "div", 144);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProductDetailComponent_div_1_div_75_div_18_span_9_Template, 2, 0, "span", 145);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 146)(11, "div", 147);
    \u0275\u0275template(12, ProductDetailComponent_div_1_div_75_div_18_span_12_Template, 1, 2, "span", 148);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 149);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "p", 150);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 151)(19, "button", 152);
    \u0275\u0275text(20);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 9, review_r20.date, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r20.comment);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F44D} Helpful (", review_r20.helpful, ")");
  }
}
function ProductDetailComponent_div_1_div_75_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155)(1, "p");
    \u0275\u0275text(2, "No reviews yet. Be the first buyer to leave a review!");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_1_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 121)(2, "div", 122)(3, "span", 123);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 124);
    \u0275\u0275template(6, ProductDetailComponent_div_1_div_75_span_6_Template, 1, 2, "span", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 126);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 127);
    \u0275\u0275template(11, ProductDetailComponent_div_1_div_75_div_11_Template, 7, 4, "div", 128);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 129);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 130);
    \u0275\u0275element(14, "circle", 131)(15, "path", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Only verified buyers can leave reviews after purchase.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ProductDetailComponent_div_1_div_75_div_18_Template, 21, 12, "div", 133)(19, ProductDetailComponent_div_1_div_75_div_19_Template, 3, 0, "div", 134);
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
function ProductDetailComponent_div_1_div_76_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 161)(1, "div", 142)(2, "div", 143)(3, "div", 144);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "span", 149);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 150);
    \u0275\u0275text(12);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 6, c_r22.date, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r22.text);
  }
}
function ProductDetailComponent_div_1_div_76_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155)(1, "p");
    \u0275\u0275text(2, "No comments yet. Start the conversation!");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_1_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 156)(2, "h3");
    \u0275\u0275text(3, "\u{1F4AC} Leave a Comment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 157);
    \u0275\u0275twoWayListener("ngModelChange", function ProductDetailComponent_div_1_div_76_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCommentText, $event) || (ctx_r2.newCommentText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 158);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_div_76_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitComment());
    });
    \u0275\u0275text(6, " Post Comment ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 159);
    \u0275\u0275template(8, ProductDetailComponent_div_1_div_76_div_8_Template, 13, 9, "div", 160);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProductDetailComponent_div_1_div_76_div_9_Template, 3, 0, "div", 134);
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
function ProductDetailComponent_div_1_span_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 162);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", ctx_r2.product.originalPrice, "");
  }
}
function ProductDetailComponent_div_1_span_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", ctx_r2.product.discountPercent, "%");
  }
}
function ProductDetailComponent_div_1_div_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 164)(1, "label", 165)(2, "input", 166);
    \u0275\u0275twoWayListener("ngModelChange", function ProductDetailComponent_div_1_div_103_Template_input_ngModelChange_2_listener($event) {
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
function ProductDetailComponent_div_1_button_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 167);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_button_106_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.launchAiStudio());
    });
    \u0275\u0275element(1, "div", 168);
    \u0275\u0275elementStart(2, "span", 169)(3, "span", 170);
    \u0275\u0275text(4, "\u2728");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " AI Studio: Customize & Deploy ");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_1_a_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 171);
    \u0275\u0275text(1, " View Cart \u2192 ");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_1_span_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 172);
    \u0275\u0275text(1, "\u2713 Verified Author");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_1_span_165_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 173);
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
function ProductDetailComponent_div_1_a_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 174);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r26 = ctx.$implicit;
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(2, _c12, tag_r26));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r26);
  }
}
function ProductDetailComponent_div_1_app_product_card_175_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 175);
  }
  if (rf & 2) {
    const p_r27 = ctx.$implicit;
    \u0275\u0275property("product", p_r27);
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
    \u0275\u0275elementStart(17, "div", 9)(18, "div", 10)(19, "span", 11);
    \u0275\u0275text(20, "Rating");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 12)(22, "span", 13);
    \u0275\u0275text(23, "\u2605\u2605\u2605\u2605\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 14);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(26, "div", 15);
    \u0275\u0275elementStart(27, "div", 10)(28, "span", 11);
    \u0275\u0275text(29, "Total Sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 16);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "div", 15);
    \u0275\u0275elementStart(34, "div", 10)(35, "span", 11);
    \u0275\u0275text(36, "Total Views");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 16);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(40, "div", 15);
    \u0275\u0275elementStart(41, "div", 10)(42, "span", 11);
    \u0275\u0275text(43, "Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 16);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 17)(48, "div", 18)(49, "div", 19)(50, "div", 20);
    \u0275\u0275template(51, ProductDetailComponent_div_1_div_51_Template, 2, 1, "div", 21)(52, ProductDetailComponent_div_1_ng_container_52_Template, 3, 2, "ng-container", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 23)(54, "div", 24);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_Template_div_click_54_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.activePreviewIndex = -1);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, ProductDetailComponent_div_1_div_55_Template, 3, 8, "div", 25)(56, ProductDetailComponent_div_1_div_56_Template, 1, 8, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, ProductDetailComponent_div_1_div_57_Template, 5, 2, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, ProductDetailComponent_div_1_div_58_Template, 10, 2, "div", 28);
    \u0275\u0275elementStart(59, "div", 29)(60, "div", 30)(61, "h2", 31);
    \u0275\u0275text(62, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p", 32);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 30)(66, "h2", 31);
    \u0275\u0275text(67, "Key Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 33);
    \u0275\u0275template(69, ProductDetailComponent_div_1_div_69_Template, 5, 1, "div", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(70, "div", 35)(71, "div", 36)(72, "div", 37);
    \u0275\u0275template(73, ProductDetailComponent_div_1_button_73_Template, 2, 3, "button", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(74, ProductDetailComponent_div_1_div_74_Template, 17, 2, "div", 39)(75, ProductDetailComponent_div_1_div_75_Template, 20, 8, "div", 39)(76, ProductDetailComponent_div_1_div_76_Template, 10, 4, "div", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "aside", 40)(78, "div", 41)(79, "div", 42)(80, "span", 43);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd();
    \u0275\u0275template(82, ProductDetailComponent_div_1_span_82_Template, 2, 1, "span", 44)(83, ProductDetailComponent_div_1_span_83_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 46)(85, "label", 47);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_Template_label_click_85_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedLicense = "regular");
    });
    \u0275\u0275element(86, "input", 48);
    \u0275\u0275elementStart(87, "div")(88, "strong");
    \u0275\u0275text(89, "Regular License");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span");
    \u0275\u0275text(91, "Use in a single end product");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "span", 49);
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "label", 47);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_Template_label_click_94_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedLicense = "extended");
    });
    \u0275\u0275element(95, "input", 50);
    \u0275\u0275elementStart(96, "div")(97, "strong");
    \u0275\u0275text(98, "Extended License");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "span");
    \u0275\u0275text(100, "Use in unlimited projects");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "span", 49);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(103, ProductDetailComponent_div_1_div_103_Template, 8, 2, "div", 51);
    \u0275\u0275elementStart(104, "button", 52);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_Template_button_click_104_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addToCart());
    });
    \u0275\u0275text(105);
    \u0275\u0275elementEnd();
    \u0275\u0275template(106, ProductDetailComponent_div_1_button_106_Template, 6, 0, "button", 53)(107, ProductDetailComponent_div_1_a_107_Template, 2, 0, "a", 54);
    \u0275\u0275elementStart(108, "div", 55)(109, "div", 56)(110, "span");
    \u0275\u0275text(111, "\u{1F4B0} Sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "strong");
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "div", 56)(116, "span");
    \u0275\u0275text(117, "\u{1F441}\uFE0F Views");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "strong");
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(121, "div", 56)(122, "span");
    \u0275\u0275text(123, "\u{1F4C5} Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "strong");
    \u0275\u0275text(125);
    \u0275\u0275pipe(126, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div", 56)(128, "span");
    \u0275\u0275text(129, "\u{1F4E6} Version");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "strong");
    \u0275\u0275text(131);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "div", 56)(133, "span");
    \u0275\u0275text(134, "\u{1F4C1} File Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "strong");
    \u0275\u0275text(136);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(137, "div", 57)(138, "div", 58)(139, "div", 59);
    \u0275\u0275text(140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "div")(142, "strong");
    \u0275\u0275text(143);
    \u0275\u0275elementEnd();
    \u0275\u0275template(144, ProductDetailComponent_div_1_span_144_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "p", 61);
    \u0275\u0275text(146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "div", 62)(148, "div")(149, "strong");
    \u0275\u0275text(150);
    \u0275\u0275pipe(151, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "span");
    \u0275\u0275text(153, "Sales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(154, "div")(155, "strong");
    \u0275\u0275text(156);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "span");
    \u0275\u0275text(158, "Rating");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(159, "div")(160, "strong");
    \u0275\u0275text(161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "span");
    \u0275\u0275text(163, "Badges");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(164, "div", 63);
    \u0275\u0275template(165, ProductDetailComponent_div_1_span_165_Template, 2, 2, "span", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(166, "div", 65)(167, "h4");
    \u0275\u0275text(168, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "div", 66);
    \u0275\u0275template(170, ProductDetailComponent_div_1_a_170_Template, 2, 4, "a", 67);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(171, "section", 68)(172, "h2", 69);
    \u0275\u0275text(173, "Related Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "div", 70);
    \u0275\u0275template(175, ProductDetailComponent_div_1_app_product_card_175_Template, 1, 1, "app-product-card", 71);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.maximizedImage);
    \u0275\u0275advance(10);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(88, _c04, ctx_r2.product.category));
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 76, ctx_r2.product.lastUpdated, "mediumDate"));
    \u0275\u0275advance(5);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(114, 79, ctx_r2.product.totalSales));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(120, 81, ctx_r2.product.totalVisits));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(126, 83, ctx_r2.product.lastUpdated, "mediumDate"));
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(151, 86, ctx_r2.product.author.totalSales));
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
    effect(() => {
      const all = this.marketplace.allProducts();
      if (this.currentProductId && !this.product && all.length > 0) {
        this.loadProduct(this.currentProductId);
      }
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.currentProductId = params["id"];
      this.loadProduct(this.currentProductId);
    });
  }
  loadProduct(id) {
    this.product = this.marketplace.getProductById(id);
    if (this.product) {
      this.marketplace.trackUniqueVisit(id);
      this.relatedProducts = this.marketplace.getRelatedProducts(this.product);
      this.isInCart = this.marketplace.isInCart(id);
      this.ratingBars = this.computeRatingBars();
      this.marketplace.getComments(id).then((c3) => this.comments = c3);
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
  getBadgeIcon(b2) {
    const icons = { "power-elite": "\u{1F451}", "top-seller": "\u{1F3C6}", "trending": "\u{1F4C8}", "exclusive": "\u{1F48E}" };
    return icons[b2] || "\u{1F3C5}";
  }
  formatBadge(b2) {
    return b2.split("-").map((w2) => w2.charAt(0).toUpperCase() + w2.slice(1)).join(" ");
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
      const count = reviews.filter((r2) => Math.floor(r2.rating) === stars).length;
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [["singleDemo", ""], ["class", "pm-container page-enter", 4, "ngIf"], [1, "pm-container", "page-enter"], ["class", "lightbox-overlay", 3, "click", 4, "ngIf"], [1, "breadcrumb"], ["routerLink", "/"], ["routerLink", "/browse"], ["routerLink", "/browse", 3, "queryParams"], [1, "current"], [1, "stats-strip", "shadow-premium"], [1, "stat-pill"], [1, "pill-label"], [1, "pill-rating"], [1, "stars"], [1, "rating-val"], [1, "stat-divider"], [1, "pill-value"], [1, "detail-layout"], [1, "detail-main"], [1, "preview-card"], [1, "preview-image"], ["style", "width:100%; height:100%; border-radius: inherit; overflow:hidden;", 4, "ngIf"], [4, "ngIf"], [1, "preview-thumbnails", "pm-gallery-strip"], [1, "thumb-item", 3, "click"], ["class", "thumb-item", "style", "position: relative; display: flex; align-items: center; justify-content: center; background-color: #000;", 3, "active", "backgroundImage", "backgroundSize", "backgroundPosition", "click", 4, "ngIf"], ["class", "thumb-item", 3, "active", "backgroundImage", "backgroundSize", "backgroundPosition", "click", 4, "ngFor", "ngForOf"], ["class", "demo-hub", 4, "ngIf"], ["class", "deploy-guide-card shadow-premium", 4, "ngIf"], [1, "main-content-card", "shadow-premium"], [1, "content-section"], [1, "section-title"], [1, "section-text"], [1, "features-grid"], ["class", "feature-item", 4, "ngFor", "ngForOf"], [1, "tabs-layout"], [1, "tabs-main"], [1, "detail-tabs"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "tab-content", 4, "ngIf"], [1, "detail-sidebar"], [1, "purchase-card"], [1, "price-section"], [1, "pm-price", 2, "font-size", "2rem"], ["class", "pm-price-original", 4, "ngIf"], ["class", "pm-price-discount", 4, "ngIf"], [1, "license-select"], [1, "license-option", 3, "click"], ["type", "radio", "name", "license", "value", "regular", 3, "checked"], [1, "license-price"], ["type", "radio", "name", "license", "value", "extended", 3, "checked"], ["class", "reskin-option", 4, "ngIf"], [1, "pm-btn", "pm-btn-success", "pm-btn-lg", 2, "width", "100%", "margin-top", "8px", 3, "click"], ["class", "pm-btn pm-btn-lg ai-studio-trigger", "style", "width:100%; margin-top: 12px; position: relative; overflow: hidden; border: none; font-weight: 700; letter-spacing: 0.5px;", 3, "click", 4, "ngIf"], ["routerLink", "/cart", "class", "pm-btn pm-btn-outline pm-btn-lg", "style", "width:100%; margin-top: 8px; text-align: center", 4, "ngIf"], [1, "purchase-meta"], [1, "meta-row"], [1, "author-card"], [1, "author-header"], [1, "author-av"], ["class", "author-verified", 4, "ngIf"], [1, "author-bio"], [1, "author-stats"], [1, "author-badges"], ["class", "a-badge", 4, "ngFor", "ngForOf"], [1, "tags-card"], [1, "tags-wrap"], ["routerLink", "/browse", "class", "tag-link", 3, "queryParams", 4, "ngFor", "ngForOf"], [1, "pm-section"], [1, "pm-heading-lg", 2, "margin-bottom", "24px"], [1, "related-grid"], [3, "product", 4, "ngFor", "ngForOf"], [1, "lightbox-overlay", 3, "click"], [1, "lightbox-content", 3, "click"], [3, "src"], [1, "lightbox-close", 3, "click"], [2, "width", "100%", "height", "100%", "border-radius", "inherit", "overflow", "hidden"], ["width", "100%", "height", "100%", "frameborder", "0", "allowfullscreen", "", 3, "src"], ["class", "maximize-btn", 3, "click", 4, "ngIf"], [1, "preview-icon"], [1, "preview-title"], [1, "maximize-btn", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"], [1, "thumb-item", 2, "position", "relative", "display", "flex", "align-items", "center", "justify-content", "center", "background-color", "#000", 3, "click"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "white", 2, "filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.5))", "pointer-events", "none"], ["d", "M8 5v14l11-7z"], [1, "demo-hub"], [1, "demo-links-grid"], [4, "ngIf", "ngIfElse"], ["target", "_blank", "class", "demo-link-card", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "demo-link-card", 3, "href"], ["class", "demo-thumb", 3, "backgroundImage", 4, "ngIf"], [1, "demo-info"], [1, "demo-label"], [1, "demo-action"], [1, "demo-thumb"], ["target", "_blank", "class", "pm-btn pm-btn-outline pm-btn-lg", "style", "width: 100%; text-align: center; display: flex; justify-content: center; align-items: center; gap: 8px; border-color: rgba(99,102,241,0.2);", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "pm-btn", "pm-btn-outline", "pm-btn-lg", 2, "width", "100%", "text-align", "center", "display", "flex", "justify-content", "center", "align-items", "center", "gap", "8px", "border-color", "rgba(99,102,241,0.2)", 3, "href"], [1, "deploy-guide-card", "shadow-premium"], [1, "dg-header", 3, "click"], [1, "dg-title"], [1, "dg-icon"], [1, "section-title", 2, "margin", "0"], [1, "dg-toggle"], ["class", "dg-body", 4, "ngIf"], [1, "dg-body"], [1, "dg-content", 3, "innerHTML"], [1, "feature-item"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#6366F1", "stroke-width", "2.5"], ["points", "20 6 9 17 4 12"], [1, "tab-btn", 3, "click"], [1, "tab-content"], [1, "desc-card"], [1, "section-subtitle"], [1, "tags-row"], ["class", "tech-tag", 4, "ngFor", "ngForOf"], [1, "content-section", 2, "margin-top", "32px"], ["class", "compat-tag", 4, "ngFor", "ngForOf"], [1, "tech-tag"], [1, "compat-tag"], [1, "reviews-summary"], [1, "rating-big"], [1, "rating-number"], [1, "rating-stars"], [3, "class", 4, "ngFor", "ngForOf"], [1, "rating-total"], [1, "rating-bars"], ["class", "bar-row", 4, "ngFor", "ngForOf"], [1, "purchase-notice"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 16v-4M12 8h.01"], ["class", "review-list", 4, "ngFor", "ngForOf"], ["class", "empty-reviews", 4, "ngIf"], [1, "bar-row"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill"], [1, "bar-count"], [1, "review-list"], [1, "review-card"], [1, "review-header"], [1, "review-user"], [1, "review-avatar"], ["class", "verified", 4, "ngIf"], [1, "review-meta"], [1, "review-stars"], ["style", "font-size:12px", 3, "class", 4, "ngFor", "ngForOf"], [1, "review-date"], [1, "review-comment"], [1, "review-actions"], [1, "pm-btn", "pm-btn-ghost", "pm-btn-sm"], [1, "verified"], [2, "font-size", "12px"], [1, "empty-reviews"], [1, "write-review"], ["placeholder", "Ask a question or share your thoughts...", "rows", "3", 1, "filter-input", 3, "ngModelChange", "ngModel"], [1, "pm-btn", "pm-btn-primary", "pm-btn-sm", 3, "click", "disabled"], [1, "comments-list"], ["class", "comment-card", 4, "ngFor", "ngForOf"], [1, "comment-card"], [1, "pm-price-original"], [1, "pm-price-discount"], [1, "reskin-option"], [1, "reskin-check"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "pm-btn", "pm-btn-lg", "ai-studio-trigger", 2, "width", "100%", "margin-top", "12px", "position", "relative", "overflow", "hidden", "border", "none", "font-weight", "700", "letter-spacing", "0.5px", 3, "click"], [1, "ai-glow"], [2, "position", "relative", "z-index", "1", "display", "flex", "align-items", "center", "justify-content", "center", "gap", "10px"], [1, "ai-sparkle"], ["routerLink", "/cart", 1, "pm-btn", "pm-btn-outline", "pm-btn-lg", 2, "width", "100%", "margin-top", "8px", "text-align", "center"], [1, "author-verified"], [1, "a-badge"], ["routerLink", "/browse", 1, "tag-link", 3, "queryParams"], [3, "product"]], template: function ProductDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275template(1, ProductDetailComponent_div_1_Template, 176, 90, "div", 1);
        \u0275\u0275element(2, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.product);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterLink, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, HeaderComponent, FooterComponent, ProductCardComponent], styles: ['\n\n.page-enter[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pageEnter 0.4s ease-out;\n}\n@keyframes _ngcontent-%COMP%_pageEnter {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 20px 0;\n  font-size: 0.8rem;\n  color: var(--pm-text-muted);\n  flex-wrap: wrap;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-primary);\n}\n.breadcrumb[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: var(--pm-text-primary);\n  font-weight: 500;\n}\n.detail-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding-bottom: 32px;\n}\n.detail-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.detail-sidebar[_ngcontent-%COMP%] {\n  width: 360px;\n  flex-shrink: 0;\n}\n.stats-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-md);\n  padding: 20px 32px;\n  margin-bottom: 24px;\n  border: 1px solid var(--pm-border-light);\n}\n.stat-pill[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.pill-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.pill-value[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: var(--pm-text-primary);\n}\n.pill-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pill-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  color: #F59E0B;\n  font-size: 1rem;\n}\n.pill-rating[_ngcontent-%COMP%]   .rating-val[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1.15rem;\n}\n.stat-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 32px;\n  background: var(--pm-border-light);\n  margin: 0 24px;\n}\n.main-content-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 40px;\n  margin-bottom: 24px;\n  border: 1px solid var(--pm-border-light);\n}\n.content-section[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.content-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 900;\n  margin-bottom: 16px;\n  color: var(--pm-text-primary);\n  letter-spacing: -0.02em;\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  margin-bottom: 16px;\n  color: var(--pm-text-primary);\n}\n.section-text[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 1.8;\n  color: var(--pm-text-secondary);\n}\n.tabs-layout[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  display: flex;\n  gap: 0;\n  align-items: flex-start;\n}\n.tabs-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.preview-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  overflow: hidden;\n  box-shadow: var(--pm-shadow-card);\n  margin-bottom: 24px;\n}\n.preview-image[_ngcontent-%COMP%] {\n  height: 360px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  position: relative;\n}\n.maximize-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: rgba(0, 0, 0, 0.5);\n  border: none;\n  border-radius: 8px;\n  color: white;\n  padding: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background var(--pm-transition-fast);\n  backdrop-filter: blur(4px);\n}\n.maximize-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n.lightbox-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.lightbox-content[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 90vw;\n  max-height: 90vh;\n}\n.lightbox-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 90vh;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.lightbox-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -40px;\n  right: 0px;\n  background: none;\n  border: none;\n  color: white;\n  font-size: 2rem;\n  cursor: pointer;\n}\n.video-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  border-radius: var(--pm-radius-lg);\n  overflow: hidden;\n  box-shadow: var(--pm-shadow-sm);\n}\n.video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.preview-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));\n}\n.preview-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.1rem;\n  font-weight: 600;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 6px 20px;\n  border-radius: var(--pm-radius-full);\n  backdrop-filter: blur(4px);\n}\n.preview-thumbnails[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px;\n}\n.thumb-item[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 48px;\n  border-radius: var(--pm-radius-sm);\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all var(--pm-transition-fast);\n}\n.thumb-item.active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n}\n.thumb-item[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.pm-gallery-strip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  overflow-x: auto;\n  scrollbar-width: thin;\n  scrollbar-color: var(--pm-border) transparent;\n  scroll-behavior: smooth;\n}\n.pm-gallery-strip[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.pm-gallery-strip[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--pm-border);\n  border-radius: 4px;\n}\n.pm-gallery-strip[_ngcontent-%COMP%]   .thumb-item[_ngcontent-%COMP%] {\n  flex: 0 0 80px;\n  height: 60px;\n  box-shadow: var(--pm-shadow-sm);\n}\n.demo-hub[_ngcontent-%COMP%] {\n  padding: 0 16px 16px;\n}\n.demo-links-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 12px;\n}\n.demo-link-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: var(--pm-surface-muted);\n  border: 1px solid var(--pm-border-light);\n  border-radius: var(--pm-radius-md);\n  text-decoration: none;\n  transition: all 0.2s;\n}\n.demo-link-card[_ngcontent-%COMP%]:hover {\n  background: white;\n  border-color: var(--ion-color-primary);\n  transform: translateY(-2px);\n  box-shadow: var(--pm-shadow-sm);\n}\n.demo-thumb[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--pm-radius-sm);\n  background-size: cover;\n  background-position: center;\n  flex-shrink: 0;\n}\n.demo-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.demo-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  font-size: 0.85rem;\n  color: var(--pm-text-primary);\n}\n.demo-action[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--ion-color-primary);\n  font-weight: 500;\n}\n.detail-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 24px;\n  background: var(--pm-surface-muted);\n  border-radius: var(--pm-radius-md);\n  padding: 4px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border: none;\n  background: transparent;\n  font-family: inherit;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--pm-text-secondary);\n  cursor: pointer;\n  border-radius: var(--pm-radius-sm);\n  transition: all var(--pm-transition-fast);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  color: var(--ion-color-primary);\n  box-shadow: var(--pm-shadow-sm);\n}\n.desc-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 32px;\n  border: 1px solid var(--pm-border-light);\n}\n.desc-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 24px 0 12px;\n}\n.desc-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.desc-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  line-height: 1.6;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n  color: var(--pm-text-secondary);\n  padding: 8px 12px;\n  background: var(--pm-surface-muted);\n  border-radius: var(--pm-radius-sm);\n}\n.tags-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tech-tag[_ngcontent-%COMP%], \n.compat-tag[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--pm-radius-full);\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n.tech-tag[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.08);\n  color: #6366F1;\n}\n.compat-tag[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.08);\n  color: #059669;\n}\n.reviews-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding: 24px;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 24px;\n}\n.rating-big[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px 32px;\n}\n.rating-number[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800;\n  color: var(--pm-text-primary);\n  display: block;\n}\n.rating-stars[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #F59E0B;\n  margin: 4px 0;\n  display: flex;\n  gap: 2px;\n  justify-content: center;\n}\n.rating-total[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-muted);\n}\n.rating-bars[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  justify-content: center;\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--pm-text-muted);\n  width: 24px;\n}\n.bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: var(--pm-surface-muted);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #F59E0B;\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}\n.bar-count[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--pm-text-muted);\n  width: 32px;\n  text-align: right;\n}\n.write-review[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.write-review[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\ntextarea.filter-input[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.purchase-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 20px;\n  background: rgba(99, 102, 241, 0.06);\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  border-radius: var(--pm-radius-md);\n  margin-bottom: 20px;\n  font-size: 0.85rem;\n  color: var(--pm-text-secondary);\n}\n.empty-reviews[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--pm-text-muted);\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n}\n.comment-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  padding: 20px;\n  border-radius: var(--pm-radius-md);\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 12px;\n}\n.review-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  padding: 20px;\n  border-radius: var(--pm-radius-md);\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 12px;\n}\n.review-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.review-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.review-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n.review-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n}\n.verified[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #10B981;\n  font-weight: 500;\n}\n.review-meta[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.review-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1px;\n  justify-content: flex-end;\n}\n.review-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.review-comment[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--pm-text-secondary);\n  line-height: 1.6;\n  margin: 0 0 8px;\n}\n.purchase-card[_ngcontent-%COMP%], \n.author-card[_ngcontent-%COMP%], \n.tags-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-card);\n  margin-bottom: 16px;\n}\n.price-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.license-select[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.license-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border: 2px solid var(--pm-border);\n  border-radius: var(--pm-radius-md);\n  cursor: pointer;\n  transition: all var(--pm-transition-fast);\n}\n.license-option.active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.03);\n}\n.license-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--ion-color-primary);\n}\n.license-option[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.license-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n}\n.license-option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.license-price[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1rem;\n  color: var(--pm-text-primary);\n}\n.reskin-option[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.reskin-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.04),\n      rgba(168, 85, 247, 0.06));\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  border-radius: var(--pm-radius-md);\n  cursor: pointer;\n}\n.reskin-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--ion-color-primary);\n}\n.reskin-check[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n}\n.reskin-check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.pm-btn.added[_ngcontent-%COMP%] {\n  background: #10B981;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);\n}\n.purchase-meta[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid var(--pm-border-light);\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 7px 0;\n  font-size: 0.8rem;\n}\n.meta-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--pm-text-muted);\n}\n.meta-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--pm-text-primary);\n}\n.author-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.author-av[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.author-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n}\n.author-verified[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #10B981;\n}\n.author-bio[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-secondary);\n  line-height: 1.5;\n  margin: 0 0 16px;\n}\n.author-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 12px 0;\n  border-top: 1px solid var(--pm-border-light);\n  border-bottom: 1px solid var(--pm-border-light);\n  margin-bottom: 12px;\n}\n.author-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n}\n.author-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  color: var(--pm-text-primary);\n}\n.author-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--pm-text-muted);\n}\n.author-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.a-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  background: rgba(99, 102, 241, 0.08);\n  border-radius: var(--pm-radius-full);\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n.tags-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 0.9rem;\n}\n.tags-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tag-link[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background: var(--pm-surface-muted);\n  border-radius: var(--pm-radius-full);\n  font-size: 0.78rem;\n  color: var(--pm-text-secondary);\n  text-decoration: none;\n  transition: all var(--pm-transition-fast);\n}\n.tag-link[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.08);\n  color: var(--ion-color-primary);\n}\n.related-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n@media (max-width: 1024px) {\n  .detail-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .detail-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .reviews-summary[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stats-strip[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 12px;\n    padding: 16px;\n  }\n  .stat-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .stat-pill[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .preview-image[_ngcontent-%COMP%] {\n    height: 240px;\n  }\n  .main-content-card[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .section-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .detail-tabs[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    flex-wrap: nowrap;\n  }\n  .tab-btn[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    min-width: max-content;\n    padding: 10px 14px;\n    font-size: 0.8rem;\n  }\n  .breadcrumb[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding: 12px 0;\n  }\n  .desc-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .review-card[_ngcontent-%COMP%], \n   .comment-card[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .purchase-card[_ngcontent-%COMP%], \n   .author-card[_ngcontent-%COMP%], \n   .tags-card[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .pm-gallery-strip[_ngcontent-%COMP%]   .thumb-item[_ngcontent-%COMP%] {\n    flex: 0 0 64px;\n    height: 48px;\n  }\n  .demo-links-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.deploy-guide-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 24px;\n  overflow: hidden;\n}\n.dg-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 32px;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.dg-header[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.02);\n}\n.dg-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.dg-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.dg-toggle[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n.dg-body[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--pm-border-light);\n  padding: 24px 32px;\n  max-height: 500px;\n  overflow-y: auto;\n}\n.dg-content[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.88rem;\n  line-height: 1.8;\n  color: var(--pm-text-secondary);\n  white-space: pre-wrap;\n  font-family: inherit;\n}\n.ai-studio-trigger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #A855F7,\n      #EC4899);\n  color: white !important;\n  box-shadow: 0 8px 25px rgba(236, 72, 153, 0.4);\n  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.ai-studio-trigger[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) scale(1.02);\n  box-shadow: 0 12px 30px rgba(236, 72, 153, 0.5);\n}\n.ai-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.2) 0%,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_ais-glow-rotate 4s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_ais-glow-rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ai-studio-workspace[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  display: flex;\n  justify-content: flex-end;\n  visibility: hidden;\n  transition: visibility 0s 0.4s;\n}\n.ai-studio-workspace.active[_ngcontent-%COMP%] {\n  visibility: visible;\n  transition: visibility 0s 0s;\n}\n.ais-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  backdrop-filter: blur(4px);\n  opacity: 0;\n  transition: opacity 0.4s ease;\n}\n.ai-studio-workspace.active[_ngcontent-%COMP%]   .ais-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.ais-panel[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 600px;\n  height: 100%;\n  background: #09090B;\n  color: white;\n  transform: translateX(100%);\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-left: 1px solid rgba(255, 255, 255, 0.1);\n}\n.ai-studio-workspace.active[_ngcontent-%COMP%]   .ais-panel[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.ais-glow-top[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -100px;\n  right: -100px;\n  width: 400px;\n  height: 400px;\n  background: rgba(168, 85, 247, 0.15);\n  border-radius: 50%;\n  filter: blur(80px);\n  pointer-events: none;\n}\n.ais-glow-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -100px;\n  left: -100px;\n  width: 300px;\n  height: 300px;\n  background: rgba(59, 130, 246, 0.1);\n  border-radius: 50%;\n  filter: blur(80px);\n  pointer-events: none;\n}\n.ais-header[_ngcontent-%COMP%] {\n  padding: 32px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  background: rgba(9, 9, 11, 0.5);\n  backdrop-filter: blur(10px);\n  z-index: 10;\n}\n.ais-title-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.ais-icon-box[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #A855F7,\n      #3B82F6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);\n}\n.ais-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: white;\n  letter-spacing: -0.5px;\n}\n.ais-subtitle[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #71717A;\n  letter-spacing: 1.5px;\n}\n.ais-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #71717A;\n  font-size: 2rem;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.ais-close[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.ais-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 40px 32px;\n  z-index: 5;\n}\n.ais-state-enter[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_ais-fade-up 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_ais-fade-up {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.ais-heading[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 800;\n  margin-bottom: 12px;\n  color: white;\n}\n.ais-text[_ngcontent-%COMP%] {\n  color: #A1A1AA;\n  font-size: 1rem;\n  line-height: 1.6;\n  margin-bottom: 32px;\n}\n.ais-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 160px;\n  background: #18181B;\n  border: 1px solid #27272A;\n  border-radius: 16px;\n  padding: 20px;\n  color: white;\n  font-family: inherit;\n  font-size: 1rem;\n  resize: none;\n  transition: all 0.3s;\n}\n.ais-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #A855F7;\n  box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.1);\n}\n.ais-input-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 32px;\n}\n.ais-input-meta[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ais-status-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #A855F7;\n  animation: _ngcontent-%COMP%_ais-pulse 2s infinite;\n}\n.ais-status-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #52525B;\n  font-family: monospace;\n}\n@keyframes _ngcontent-%COMP%_ais-pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.ais-schema-view[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.ais-schema-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.ais-schema-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #52525B;\n  letter-spacing: 0.5px;\n}\n.ais-schema-tag[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.ais-code[_ngcontent-%COMP%] {\n  background: #18181B;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: 12px;\n  padding: 20px;\n  color: #3B82F6;\n  font-family: monospace;\n  font-size: 0.85rem;\n  overflow-x: auto;\n  margin: 0;\n}\n.ais-btn-build[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      135deg,\n      #A855F7,\n      #3B82F6);\n  color: white;\n  font-weight: 800;\n  font-size: 1.1rem;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s;\n  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.25);\n}\n.ais-btn-build[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(168, 85, 247, 0.4);\n}\n.ais-btn-build[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.ais-pipeline-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 48px;\n}\n.ais-loader-ring[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border: 4px solid rgba(168, 85, 247, 0.1);\n  border-top-color: #A855F7;\n  border-radius: 50%;\n  margin: 0 auto 24px;\n  animation: _ngcontent-%COMP%_ais-spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_ais-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ais-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  max-width: 320px;\n  margin: 0 auto 48px;\n  position: relative;\n}\n.ais-stepper[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 24px;\n  top: 10px;\n  bottom: 10px;\n  width: 1px;\n  background: #27272A;\n}\n.ais-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  opacity: 0.4;\n  transition: all 0.4s;\n}\n.ais-step.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.ais-step.done[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.ais-step-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: #18181B;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  z-index: 2;\n  border: 1px solid #27272A;\n}\n.ais-step.active[_ngcontent-%COMP%]   .ais-step-icon[_ngcontent-%COMP%] {\n  background: #A855F7;\n  color: white;\n  border-color: transparent;\n  box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);\n}\n.ais-step.done[_ngcontent-%COMP%]   .ais-step-icon[_ngcontent-%COMP%] {\n  background: #10B981;\n  color: white;\n  border-color: transparent;\n  font-size: 1rem;\n}\n.ais-step-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.1rem;\n  margin-bottom: 2px;\n}\n.ais-step-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #71717A;\n}\n.ais-estimate[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 12px;\n  font-size: 0.85rem;\n  color: #71717A;\n}\n.ais-estimate[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 700;\n}\n.ais-success[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-top: 20px;\n}\n.ais-success-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 24px;\n  background: rgba(16, 185, 129, 0.1);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  color: #10B981;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2.5rem;\n  margin: 0 auto 32px;\n  box-shadow: 0 0 40px rgba(16, 185, 129, 0.15);\n}\n.ais-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.ais-btn-download[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 16px;\n  background: white;\n  color: black;\n  font-weight: 800;\n  font-size: 1.1rem;\n  text-decoration: none;\n  display: block;\n  transition: all 0.2s;\n}\n.ais-btn-download[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  background: #F4F4F5;\n}\n.ais-btn-docs[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-radius: 16px;\n  background: #18181B;\n  color: white;\n  font-weight: 700;\n  border: 1px solid #27272A;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.ais-btn-docs[_ngcontent-%COMP%]:hover {\n  background: #27272A;\n}\n.ais-btn-reset[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #71717A;\n  font-weight: 600;\n  font-size: 0.9rem;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.ais-footer[_ngcontent-%COMP%] {\n  padding: 32px;\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.ais-gpu-status[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #3F3F46;\n  font-family: monospace;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.ais-gpu-dot[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #10B981;\n  box-shadow: 0 0 6px #10B981;\n}\n.ais-brand[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: #27272A;\n  letter-spacing: 1px;\n}\n/*# sourceMappingURL=product-detail.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src\\app\\pages\\product-detail\\product-detail.component.ts", lineNumber: 1159 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=chunk-Q2Z7H3ET.js.map

import {
  ImageUploadService
} from "./chunk-LXTJKJX5.js";
import {
  AuthService,
  FooterComponent,
  HeaderComponent,
  MarketplaceService
} from "./chunk-L3MOXFDZ.js";
import {
  IonContent
} from "./chunk-7TFQUZIJ.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-XLO4FCJH.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  Firestore,
  NgForOf,
  NgIf,
  RouterLink,
  SlicePipe,
  TitleCasePipe,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  effect,
  getDocs,
  increment,
  inject,
  orderBy,
  query,
  serverTimestamp,
  signal,
  updateDoc,
  where,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OKV2NBY4.js";
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

// src/app/pages/admin/admin.component.ts
var _c0 = (a0) => ["/product", a0];
function AdminComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.marketplace.pendingProducts().length);
  }
}
function AdminComponent_div_29_div_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stat_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", stat_r3.change, "% ");
  }
}
function AdminComponent_div_29_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37)(4, "span", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminComponent_div_29_div_2_span_8_Template, 2, 1, "span", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stat_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", stat_r3.gradient);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stat_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r3.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r3.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r3.change);
  }
}
function AdminComponent_div_29_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r4 = ctx.$implicit;
    \u0275\u0275styleProp("height", bar_r4.pct, "%");
    \u0275\u0275attribute("data-label", bar_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind1(3, 4, bar_r4.value), "");
  }
}
function AdminComponent_div_29_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "p");
    \u0275\u0275text(2, "No sales data available for this period.");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_29_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bar_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bar_r5.label);
  }
}
function AdminComponent_div_29_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46);
    \u0275\u0275text(2, "\u231B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Loading projects...");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_29_ng_container_34_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getCategoryIcon(project_r7.category));
  }
}
function AdminComponent_div_29_ng_container_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275template(2, AdminComponent_div_29_ng_container_34_div_1_span_2_Template, 2, 1, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "span", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 54)(9, "span", 55);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 56);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 57);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 58)(18, "a", 59);
    \u0275\u0275text(19, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 60);
    \u0275\u0275listener("click", function AdminComponent_div_29_ng_container_34_div_1_Template_button_click_20_listener() {
      const project_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openEditProduct(project_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 61);
    \u0275\u0275element(22, "path", 62)(23, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "button", 64);
    \u0275\u0275listener("click", function AdminComponent_div_29_ng_container_34_div_1_Template_button_click_25_listener() {
      const project_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteProduct(project_r7.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 61);
    \u0275\u0275element(27, "path", 65);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const project_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", project_r7.thumbnailUrl ? "none" : ctx_r0.getProjectGradient(project_r7.category))("background-image", project_r7.thumbnailUrl ? "url(" + project_r7.thumbnailUrl + ")" : "none")("background-size", "cover")("background-position", "center");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !project_r7.thumbnailUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r7.shortDescription);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + (project_r7.status || "pending"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 18, project_r7.status || "pending"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", "$", "", project_r7.price, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 20, project_r7.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(23, _c0, project_r7.id));
  }
}
function AdminComponent_div_29_ng_container_34_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "p");
    \u0275\u0275text(2, "No projects submitted yet. ");
    \u0275\u0275elementStart(3, "a", 67);
    \u0275\u0275text(4, "Submit your first project \u2192");
    \u0275\u0275elementEnd()()();
  }
}
function AdminComponent_div_29_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminComponent_div_29_ng_container_34_div_1_Template, 28, 25, "div", 47)(2, AdminComponent_div_29_ng_container_34_div_2_Template, 5, 0, "div", 48);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.getFilteredProjects());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getFilteredProjects().length === 0);
  }
}
function AdminComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275template(2, AdminComponent_div_29_div_2_Template, 9, 6, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21)(5, "h3");
    \u0275\u0275text(6, "Revenue Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 22)(8, "button", 23);
    \u0275\u0275listener("click", function AdminComponent_div_29_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setChartPeriod("7d"));
    });
    \u0275\u0275text(9, "7 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 23);
    \u0275\u0275listener("click", function AdminComponent_div_29_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setChartPeriod("30d"));
    });
    \u0275\u0275text(11, "30 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 23);
    \u0275\u0275listener("click", function AdminComponent_div_29_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setChartPeriod("12m"));
    });
    \u0275\u0275text(13, "12 Months");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 24)(15, "div", 25);
    \u0275\u0275template(16, AdminComponent_div_29_div_16_Template, 4, 6, "div", 26)(17, AdminComponent_div_29_div_17_Template, 3, 0, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 28);
    \u0275\u0275template(19, AdminComponent_div_29_span_19_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 30)(21, "div", 31)(22, "h3");
    \u0275\u0275text(23, "My Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 32)(25, "button", 23);
    \u0275\u0275listener("click", function AdminComponent_div_29_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.projectTab = "all");
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 23);
    \u0275\u0275listener("click", function AdminComponent_div_29_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.projectTab = "published");
    });
    \u0275\u0275text(28, "Published");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 23);
    \u0275\u0275listener("click", function AdminComponent_div_29_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.projectTab = "pending");
    });
    \u0275\u0275text(30, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 23);
    \u0275\u0275listener("click", function AdminComponent_div_29_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.projectTab = "draft");
    });
    \u0275\u0275text(32, "Drafts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, AdminComponent_div_29_div_33_Template, 5, 0, "div", 33)(34, AdminComponent_div_29_ng_container_34_Template, 3, 2, "ng-container", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.dashboardStats);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r0.chartPeriod === "7d");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.chartPeriod === "30d");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.chartPeriod === "12m");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.chartData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.chartTotalRevenue === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.chartData);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r0.projectTab === "all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("All (", ctx_r0.getFilteredProjects().length, ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.projectTab === "published");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.projectTab === "pending");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.projectTab === "draft");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.marketplace.isLoadingProducts());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.marketplace.isLoadingProducts());
  }
}
function AdminComponent_div_30_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 73);
    \u0275\u0275element(2, "path", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4, "All clear!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No pending submissions to review.");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_30_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4E6}");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_30_div_8_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 80);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F464} ", p_r9.submittedBy.displayName, "");
  }
}
function AdminComponent_div_30_div_8_div_18_pre_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre", 90);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r9.deploymentGuide);
  }
}
function AdminComponent_div_30_div_8_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 88);
    \u0275\u0275listener("click", function AdminComponent_div_30_div_8_div_18_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const p_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleGuidePreview(p_r9.id));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "\u{1F4D6} Deployment Guide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AdminComponent_div_30_div_8_div_18_pre_6_Template, 2, 1, "pre", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.expandedGuides[p_r9.id] ? "\u25B2" : "\u25BC");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.expandedGuides[p_r9.id]);
  }
}
function AdminComponent_div_30_div_8_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1, " \u26A0\uFE0F No deployment guide submitted ");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_30_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "div", 76)(2, "div", 77);
    \u0275\u0275template(3, AdminComponent_div_30_div_8_span_3_Template, 2, 0, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 78)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 79)(10, "span", 80);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 80);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AdminComponent_div_30_div_8_span_14_Template, 2, 1, "span", 81);
    \u0275\u0275elementStart(15, "span", 80);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(18, AdminComponent_div_30_div_8_div_18_Template, 7, 2, "div", 82)(19, AdminComponent_div_30_div_8_div_19_Template, 2, 0, "div", 83);
    \u0275\u0275elementStart(20, "div", 84)(21, "a", 59);
    \u0275\u0275text(22, "\u{1F441}\uFE0F Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 85);
    \u0275\u0275listener("click", function AdminComponent_div_30_div_8_Template_button_click_23_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.approveProduct(p_r9.id));
    });
    \u0275\u0275text(24, " \u2705 Approve ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 86);
    \u0275\u0275listener("click", function AdminComponent_div_30_div_8_Template_button_click_25_listener() {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openRejectModal(p_r9.id, p_r9.title));
    });
    \u0275\u0275text(26, " \u274C Reject ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", p_r9.thumbnailUrl ? "url(" + p_r9.thumbnailUrl + ")" : "none")("background-size", "cover")("background-position", "center");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r9.thumbnailUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r9.shortDescription);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4B0} $", p_r9.price, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4C1} ", p_r9.category, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r9.submittedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4C5} ", \u0275\u0275pipeBind2(17, 16, p_r9.createdAt, "mediumDate"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r9.deploymentGuide);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r9.deploymentGuide);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c0, p_r9.id));
  }
}
function AdminComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 68)(2, "div", 69)(3, "h3");
    \u0275\u0275text(4, "\u{1F50D} Review Queue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Review and approve or reject seller submissions before they go live.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AdminComponent_div_30_div_7_Template, 7, 0, "div", 70)(8, AdminComponent_div_30_div_8_Template, 27, 21, "div", 71);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.marketplace.pendingProducts().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.marketplace.pendingProducts());
  }
}
function AdminComponent_div_31_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 98)(1, "div", 99)(2, "div", 100)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 93)(6, "button", 101);
    \u0275\u0275listener("click", function AdminComponent_div_31_div_13_div_1_Template_button_click_6_listener() {
      const blog_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openBlogModal(blog_r13));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 11);
    \u0275\u0275element(8, "path", 62)(9, "path", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "button", 102);
    \u0275\u0275listener("click", function AdminComponent_div_31_div_13_div_1_Template_button_click_11_listener() {
      const blog_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteBlog(blog_r13.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 11);
    \u0275\u0275element(13, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Delete ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "p", 103);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 104)(18, "span", 105);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 106);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const blog_r13 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(blog_r13.title || "Untitled Blog");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(blog_r13.excerpt || "No content");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(blog_r13.published ? "status-published" : "status-draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", blog_r13.published ? "Published" : "Draft", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 6, blog_r13.createdAt, "medium"));
  }
}
function AdminComponent_div_31_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 96);
    \u0275\u0275template(1, AdminComponent_div_31_div_13_div_1_Template, 23, 9, "div", 97);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.blogs);
  }
}
function AdminComponent_div_31_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 73);
    \u0275\u0275element(2, "path", 107)(3, "polyline", 108)(4, "line", 109)(5, "line", 110)(6, "polyline", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h4");
    \u0275\u0275text(8, "No blog posts yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10, "Create your first blog post to get started.");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 68)(2, "div", 69)(3, "h3");
    \u0275\u0275text(4, "Blog Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Create, edit, and manage blog posts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 92)(8, "div", 93)(9, "button", 94);
    \u0275\u0275listener("click", function AdminComponent_div_31_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openBlogModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 11);
    \u0275\u0275element(11, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " New Blog Post ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, AdminComponent_div_31_div_13_Template, 2, 1, "div", 95)(14, AdminComponent_div_31_div_14_Template, 11, 0, "div", 70);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r0.blogs.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.blogs.length === 0);
  }
}
function AdminComponent_div_32_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 117)(1, "td", 118);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 119);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 119)(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 119);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 120);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const view_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 8, view_r14.timestamp, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(6, 11, view_r14.productId, 0, 8));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(view_r14.ip);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", view_r14.city, ", ", view_r14.country, " ", view_r14.countryCode, "");
    \u0275\u0275advance();
    \u0275\u0275property("title", view_r14.device);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(view_r14.device);
  }
}
function AdminComponent_div_32_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "p");
    \u0275\u0275text(2, "No analytics events recorded yet.");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 68)(2, "div", 69)(3, "h3");
    \u0275\u0275text(4, "Geographic & Device Analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Real-time tracked views grouped by users.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 112)(8, "table", 113)(9, "thead")(10, "tr", 114)(11, "th", 115);
    \u0275\u0275text(12, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 115);
    \u0275\u0275text(14, "Product ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 115);
    \u0275\u0275text(16, "IP Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 115);
    \u0275\u0275text(18, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 115);
    \u0275\u0275text(20, "Device Data");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275template(22, AdminComponent_div_32_tr_22_Template, 14, 15, "tr", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, AdminComponent_div_32_div_23_Template, 3, 0, "div", 70);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(22);
    \u0275\u0275property("ngForOf", ctx_r0.analyticsEvents);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.analyticsEvents.length === 0);
  }
}
function AdminComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275listener("click", function AdminComponent_div_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBlogModal());
    });
    \u0275\u0275elementStart(1, "div", 122);
    \u0275\u0275listener("click", function AdminComponent_div_33_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 123)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 124);
    \u0275\u0275listener("click", function AdminComponent_div_33_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBlogModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 125)(8, "div", 126)(9, "label", 127);
    \u0275\u0275text(10, "Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 128);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_33_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.blogForm.title, $event) || (ctx_r0.blogForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 126)(13, "label", 129);
    \u0275\u0275text(14, "Excerpt *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 130);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_33_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.blogForm.excerpt, $event) || (ctx_r0.blogForm.excerpt = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 126)(17, "label", 131);
    \u0275\u0275text(18, "Content *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 132);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_33_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.blogForm.content, $event) || (ctx_r0.blogForm.content = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 126)(21, "label", 133)(22, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_33_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.blogForm.published, $event) || (ctx_r0.blogForm.published = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Published");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 135)(26, "button", 136);
    \u0275\u0275listener("click", function AdminComponent_div_33_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeBlogModal());
    });
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 137);
    \u0275\u0275listener("click", function AdminComponent_div_33_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveBlogFromModal());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editingBlogId ? "Edit Blog Post" : "New Blog Post");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.blogForm.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.blogForm.excerpt);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.blogForm.content);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.blogForm.published);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r0.blogForm.title || !ctx_r0.blogForm.excerpt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.editingBlogId ? "Update" : "Create", " ");
  }
}
function AdminComponent_div_34_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 167);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r17 = ctx.$implicit;
    \u0275\u0275property("value", cat_r17.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", cat_r17.icon, " ", cat_r17.label, "");
  }
}
function AdminComponent_div_34_div_67_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 177);
  }
  if (rf & 2) {
    const demo_r19 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background-image", "url(" + demo_r19.thumbnailUrl + ")");
  }
}
function AdminComponent_div_34_div_67_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 178);
    \u0275\u0275text(1, "\u{1F4F8}");
    \u0275\u0275elementEnd();
  }
}
function AdminComponent_div_34_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 168)(1, "div", 169);
    \u0275\u0275template(2, AdminComponent_div_34_div_67_div_2_Template, 1, 2, "div", 170);
    \u0275\u0275elementStart(3, "input", 171);
    \u0275\u0275listener("change", function AdminComponent_div_34_div_67_Template_input_change_3_listener($event) {
      const i_r20 = \u0275\u0275restoreView(_r18).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onDemoThumbnailSelect($event, i_r20));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminComponent_div_34_div_67_span_4_Template, 2, 0, "span", 172);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 173)(6, "input", 174);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_div_67_Template_input_ngModelChange_6_listener($event) {
      const demo_r19 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(demo_r19.label, $event) || (demo_r19.label = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 175);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_div_67_Template_input_ngModelChange_7_listener($event) {
      const demo_r19 = \u0275\u0275restoreView(_r18).$implicit;
      \u0275\u0275twoWayBindingSet(demo_r19.url, $event) || (demo_r19.url = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 176);
    \u0275\u0275listener("click", function AdminComponent_div_34_div_67_Template_button_click_8_listener() {
      const i_r20 = \u0275\u0275restoreView(_r18).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeEditDemo(i_r20));
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const demo_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", demo_r19.thumbnailUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !demo_r19.thumbnailUrl);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", demo_r19.label);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", demo_r19.url);
  }
}
function AdminComponent_div_34_div_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179);
    \u0275\u0275element(1, "img", 180);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.editForm.thumbnailPreview, \u0275\u0275sanitizeUrl);
  }
}
function AdminComponent_div_34_div_88_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 183);
    \u0275\u0275element(1, "img", 184);
    \u0275\u0275elementStart(2, "button", 185);
    \u0275\u0275listener("click", function AdminComponent_div_34_div_88_div_1_Template_button_click_2_listener() {
      const i_r22 = \u0275\u0275restoreView(_r21).index;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.removeEditScreenshot(i_r22));
    });
    \u0275\u0275text(3, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const img_r23 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", img_r23, \u0275\u0275sanitizeUrl);
  }
}
function AdminComponent_div_34_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 181);
    \u0275\u0275template(1, AdminComponent_div_34_div_88_div_1_Template, 4, 1, "div", 182);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.editForm.screenshotPreviews);
  }
}
function AdminComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275listener("click", function AdminComponent_div_34_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditModal());
    });
    \u0275\u0275elementStart(1, "div", 138);
    \u0275\u0275listener("click", function AdminComponent_div_34_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 123)(3, "h3");
    \u0275\u0275text(4, "\u270F\uFE0F Edit Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 124);
    \u0275\u0275listener("click", function AdminComponent_div_34_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 139)(8, "div", 126)(9, "label");
    \u0275\u0275text(10, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 140);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.title, $event) || (ctx_r0.editForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 126)(13, "label");
    \u0275\u0275text(14, "Short Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 141);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.shortDescription, $event) || (ctx_r0.editForm.shortDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 126)(17, "label");
    \u0275\u0275text(18, "Full Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 142);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.fullDescription, $event) || (ctx_r0.editForm.fullDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 143)(21, "div", 144)(22, "label");
    \u0275\u0275text(23, "Price (USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 145);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.price, $event) || (ctx_r0.editForm.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 144)(26, "label");
    \u0275\u0275text(27, "Original Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 145);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.originalPrice, $event) || (ctx_r0.editForm.originalPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 144)(30, "label");
    \u0275\u0275text(31, "Version");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 140);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.version, $event) || (ctx_r0.editForm.version = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 143)(34, "div", 144)(35, "label");
    \u0275\u0275text(36, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "select", 146);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.category, $event) || (ctx_r0.editForm.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(38, AdminComponent_div_34_option_38_Template, 2, 3, "option", 147);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 144)(40, "label");
    \u0275\u0275text(41, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 146);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.status, $event) || (ctx_r0.editForm.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(43, "option", 148);
    \u0275\u0275text(44, "Published");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 149);
    \u0275\u0275text(46, "Draft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 150);
    \u0275\u0275text(48, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option", 151);
    \u0275\u0275text(50, "Rejected");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 143)(52, "div", 144)(53, "label");
    \u0275\u0275text(54, "Fallback Demo URL (Legacy)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 152);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.demoUrl, $event) || (ctx_r0.editForm.demoUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 144)(57, "label");
    \u0275\u0275text(58, "YouTube Video URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "input", 153);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.youtubeUrl, $event) || (ctx_r0.editForm.youtubeUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "div", 154)(61, "div", 155)(62, "label", 156);
    \u0275\u0275text(63, "\u{1F310} Live Demos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 60);
    \u0275\u0275listener("click", function AdminComponent_div_34_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.addEditDemo());
    });
    \u0275\u0275text(65, "+ Add Demo Link");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 157);
    \u0275\u0275template(67, AdminComponent_div_34_div_67_Template, 10, 4, "div", 158);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 126)(69, "label");
    \u0275\u0275text(70, "Tags (comma separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "input", 140);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_input_ngModelChange_71_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.tagsStr, $event) || (ctx_r0.editForm.tagsStr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 126)(73, "label");
    \u0275\u0275text(74, "Features (one per line)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "textarea", 159);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_textarea_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.featuresStr, $event) || (ctx_r0.editForm.featuresStr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 126)(77, "label");
    \u0275\u0275text(78, "Tech Stack (comma separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "input", 140);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_input_ngModelChange_79_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.techStackStr, $event) || (ctx_r0.editForm.techStackStr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 126)(81, "label");
    \u0275\u0275text(82, "Cover Image");
    \u0275\u0275elementEnd();
    \u0275\u0275template(83, AdminComponent_div_34_div_83_Template, 2, 1, "div", 160);
    \u0275\u0275elementStart(84, "input", 161);
    \u0275\u0275listener("change", function AdminComponent_div_34_Template_input_change_84_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onEditThumbnailSelect($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 126)(86, "label");
    \u0275\u0275text(87, "Screenshots (Unlimited)");
    \u0275\u0275elementEnd();
    \u0275\u0275template(88, AdminComponent_div_34_div_88_Template, 2, 1, "div", 162);
    \u0275\u0275elementStart(89, "input", 163);
    \u0275\u0275listener("change", function AdminComponent_div_34_Template_input_change_89_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onEditScreenshotsSelect($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 164)(91, "label", 165)(92, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_input_ngModelChange_92_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.isFeatured, $event) || (ctx_r0.editForm.isFeatured = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, " Featured ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "label", 165)(95, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_input_ngModelChange_95_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.isBestseller, $event) || (ctx_r0.editForm.isBestseller = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(96, " Bestseller ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "label", 165)(98, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_34_Template_input_ngModelChange_98_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.isNew, $event) || (ctx_r0.editForm.isNew = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(99, " New ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "div", 135)(101, "button", 166);
    \u0275\u0275listener("click", function AdminComponent_div_34_Template_button_click_101_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEditModal());
    });
    \u0275\u0275text(102, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "button", 137);
    \u0275\u0275listener("click", function AdminComponent_div_34_Template_button_click_103_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveEditProduct());
    });
    \u0275\u0275text(104);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.shortDescription);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.fullDescription);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.originalPrice);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.version);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.marketplace.categories);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.status);
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.demoUrl);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.youtubeUrl);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r0.editForm.liveDemos);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.tagsStr);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.featuresStr);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.techStackStr);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.editForm.thumbnailPreview);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", (ctx_r0.editForm.screenshotPreviews == null ? null : ctx_r0.editForm.screenshotPreviews.length) > 0);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.isFeatured);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.isBestseller);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.isNew);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isSaving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.editForm.title || ctx_r0.isSaving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isSaving() ? "\u231B Saving Assets..." : "\u{1F4BE} Save Changes", " ");
  }
}
function AdminComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275listener("click", function AdminComponent_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeRejectModal());
    });
    \u0275\u0275elementStart(1, "div", 186);
    \u0275\u0275listener("click", function AdminComponent_div_35_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r24);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 123)(3, "h3");
    \u0275\u0275text(4, "\u274C Reject Submission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 124);
    \u0275\u0275listener("click", function AdminComponent_div_35_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeRejectModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 125)(8, "p", 187);
    \u0275\u0275text(9, "Rejecting: ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 126)(13, "label", 188);
    \u0275\u0275text(14, "Reason for Rejection *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 189);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_35_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.rejectionReason, $event) || (ctx_r0.rejectionReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 135)(17, "button", 136);
    \u0275\u0275listener("click", function AdminComponent_div_35_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeRejectModal());
    });
    \u0275\u0275text(18, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 190);
    \u0275\u0275listener("click", function AdminComponent_div_35_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.confirmReject());
    });
    \u0275\u0275text(20, " Confirm Rejection ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.rejectingTitle);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.rejectionReason);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r0.rejectionReason);
  }
}
var AdminComponent = class _AdminComponent {
  constructor() {
    this.marketplace = inject(MarketplaceService);
    this.authService = inject(AuthService);
    this.firestore = inject(Firestore);
    this.imageUpload = inject(ImageUploadService);
    this.activeTab = "dashboard";
    this.chartPeriod = "30d";
    this.projectTab = "all";
    this.isSaving = signal(false);
    this.dashboardStats = [];
    this.chartData = [];
    this.chartTotalRevenue = 0;
    this.allProjects = [];
    this.blogs = [];
    this.showBlogModal = false;
    this.blogForm = {
      title: "",
      content: "",
      excerpt: "",
      published: false
    };
    this.editingBlogId = null;
    this.showEditModal = false;
    this.editingProductId = null;
    this.editForm = {};
    this.showRejectModal = false;
    this.rejectingProductId = null;
    this.rejectingTitle = "";
    this.rejectionReason = "";
    this.expandedGuides = {};
    this.gradients = {
      "saas-boilerplates": "linear-gradient(135deg, #10B981, #34D399)",
      "b2b-systems": "linear-gradient(135deg, #3B82F6, #60A5FA)",
      "super-apps": "linear-gradient(135deg, #F97316, #FB923C)",
      "edtech-lms": "linear-gradient(135deg, #8B5CF6, #A78BFA)",
      "pvp-games": "linear-gradient(135deg, #EF4444, #F87171)"
    };
    this.icons = {
      "saas-boilerplates": "\u{1F680}",
      "b2b-systems": "\u{1F3E2}",
      "super-apps": "\u{1F4F1}",
      "edtech-lms": "\u{1F393}",
      "pvp-games": "\u{1F3AE}"
    };
    this.analyticsEvents = [];
    this.isGenerating = signal(false);
    effect(() => {
      this.calculateStats();
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.allProjects = this.marketplace.products();
      this.calculateStats();
      this.loadBlogs();
    });
  }
  calculateStats() {
    const products = this.marketplace.products();
    const totalRev = products.reduce((sum, p) => sum + p.price * (p.totalSales || 0), 0);
    const totalSales = products.reduce((sum, p) => sum + (p.totalSales || 0), 0);
    const totalVisits = products.reduce((sum, p) => sum + (p.totalVisits || 0), 0);
    const avgRating = products.length > 0 ? products.reduce((sum, p) => sum + (p.rating || 0), 0) / products.length : 0;
    this.dashboardStats = [
      { icon: "\u{1F4B0}", label: "Total Revenue", value: `$${totalRev.toLocaleString()}`, change: 0, gradient: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.15))" },
      { icon: "\u{1F4E6}", label: "Products Sold", value: totalSales.toString(), change: 0, gradient: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15))" },
      { icon: "\u{1F441}\uFE0F", label: "Total Views", value: this.formatViews(totalVisits), change: 0, gradient: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(234,88,12,0.15))" },
      { icon: "\u2B50", label: "Avg. Rating", value: avgRating.toFixed(1), change: 0, gradient: "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))" }
    ];
    this.chartData = this.buildRevenueChart(products, this.chartPeriod);
    this.chartTotalRevenue = this.chartData.reduce((sum, b) => sum + (b.value || 0), 0);
  }
  setChartPeriod(period) {
    this.chartPeriod = period;
    this.calculateStats();
  }
  buildRevenueChart(products, period) {
    const now = /* @__PURE__ */ new Date();
    const revenues = [];
    const labels = [];
    const addLabel = (d, mode) => {
      if (mode === "day") {
        return d.toLocaleDateString(void 0, { month: "short", day: "numeric" });
      }
      return d.toLocaleDateString(void 0, { month: "short" });
    };
    if (period === "7d") {
      const start = new Date(now);
      start.setDate(now.getDate() - 6);
      for (let i = 0; i < 7; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        labels.push(addLabel(d, "day"));
        revenues.push(0);
      }
      for (const p of products) {
        const createdAt = p.createdAt;
        if (!createdAt)
          continue;
        const diffDays = Math.floor((createdAt.getTime() - start.getTime()) / 864e5);
        if (diffDays < 0 || diffDays >= 7)
          continue;
        const revenue = (p.price || 0) * (p.totalSales || 0);
        revenues[diffDays] += revenue;
      }
    } else if (period === "12m") {
      const start = new Date(now.getFullYear(), now.getMonth() - 11, 1);
      for (let i = 0; i < 12; i++) {
        const d = new Date(start.getFullYear(), start.getMonth() + i, 1);
        labels.push(addLabel(d, "month"));
        revenues.push(0);
      }
      for (const p of products) {
        const createdAt = p.createdAt;
        if (!createdAt)
          continue;
        const idx = (createdAt.getFullYear() - start.getFullYear()) * 12 + (createdAt.getMonth() - start.getMonth());
        if (idx < 0 || idx >= 12)
          continue;
        const revenue = (p.price || 0) * (p.totalSales || 0);
        revenues[idx] += revenue;
      }
    } else {
      const start = new Date(now);
      start.setDate(now.getDate() - 29);
      const binCount = 10;
      const binSizeDays = 3;
      for (let i = 0; i < binCount; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i * binSizeDays);
        labels.push(addLabel(d, "day"));
        revenues.push(0);
      }
      for (const p of products) {
        const createdAt = p.createdAt;
        if (!createdAt)
          continue;
        const diffDays = Math.floor((createdAt.getTime() - start.getTime()) / 864e5);
        if (diffDays < 0)
          continue;
        const idx = Math.min(binCount - 1, Math.floor(diffDays / binSizeDays));
        const revenue = (p.price || 0) * (p.totalSales || 0);
        revenues[idx] += revenue;
      }
    }
    const maxRevenue = Math.max(...revenues, 0);
    return revenues.map((value, i) => ({
      label: labels[i] || "",
      value,
      pct: maxRevenue > 0 ? value / maxRevenue * 100 : 0
    }));
  }
  formatViews(v) {
    if (v >= 1e6)
      return (v / 1e6).toFixed(1) + "M";
    if (v >= 1e3)
      return (v / 1e3).toFixed(1) + "K";
    return v.toString();
  }
  getProjectGradient(cat) {
    return this.gradients[cat] || "linear-gradient(135deg, #6366F1, #A855F7)";
  }
  getCategoryIcon(cat) {
    return this.icons[cat] || "\u{1F4E6}";
  }
  getFilteredProjects() {
    const products = this.marketplace.products();
    if (this.projectTab === "all")
      return products;
    const desiredStatus = this.projectTab;
    return products.filter((p) => (p.status || "pending") === desiredStatus);
  }
  // Product Edit/Delete
  openEditProduct(product) {
    this.editingProductId = product.id;
    this.editForm = {
      title: product.title || "",
      shortDescription: product.shortDescription || "",
      fullDescription: product.fullDescription || "",
      price: product.price || 0,
      originalPrice: product.originalPrice || null,
      version: product.version || "",
      category: product.category || "",
      status: product.status || "published",
      demoUrl: product.demoUrl || "",
      youtubeUrl: product.youtubeUrl || "",
      tagsStr: (product.tags || []).join(", "),
      featuresStr: (product.features || []).join("\n"),
      techStackStr: (product.techStack || []).join(", "),
      isFeatured: product.isFeatured || false,
      isBestseller: product.isBestseller || false,
      isNew: product.isNew || false,
      thumbnailPreview: product.thumbnailUrl || "",
      newThumbnailData: null,
      screenshotPreviews: [...product.previewImages || []],
      newScreenshotData: [],
      liveDemos: product.liveDemos ? [...product.liveDemos] : []
    };
    this.showEditModal = true;
  }
  closeEditModal() {
    this.showEditModal = false;
    this.editingProductId = null;
    this.editForm = {};
  }
  saveEditProduct() {
    return __async(this, null, function* () {
      if (!this.editingProductId || !this.editForm.title)
        return;
      const updates = {
        title: this.editForm.title,
        shortDescription: this.editForm.shortDescription,
        fullDescription: this.editForm.fullDescription,
        price: Number(this.editForm.price),
        version: this.editForm.version,
        category: this.editForm.category,
        status: this.editForm.status,
        tags: this.editForm.tagsStr.split(",").map((t) => t.trim()).filter((t) => t),
        features: this.editForm.featuresStr.split("\n").filter((f) => f.trim()),
        techStack: this.editForm.techStackStr.split(",").map((t) => t.trim()).filter((t) => t),
        isFeatured: this.editForm.isFeatured,
        isBestseller: this.editForm.isBestseller,
        isNew: this.editForm.isNew
      };
      if (this.editForm.originalPrice) {
        updates.originalPrice = Number(this.editForm.originalPrice);
        updates.discountPercent = Math.round((1 - updates.price / updates.originalPrice) * 100);
      }
      if (!this.editingProductId)
        return;
      this.isSaving.set(true);
      try {
        let thumbnailUrl = this.editForm.thumbnailPreview;
        if (thumbnailUrl && thumbnailUrl.startsWith("data:")) {
          thumbnailUrl = yield this.imageUpload.upload(thumbnailUrl, "products/thumbnails");
        }
        const previewImages = [];
        for (const img of this.editForm.screenshotPreviews) {
          if (img.startsWith("data:")) {
            const uploadedUrl = yield this.imageUpload.upload(img, "products/screenshots");
            previewImages.push(uploadedUrl);
          } else {
            previewImages.push(img);
          }
        }
        const liveDemos = [];
        if (this.editForm.liveDemos) {
          for (const demo of this.editForm.liveDemos) {
            let demoThumb = demo.thumbnailUrl;
            if (demoThumb && demoThumb.startsWith("data:")) {
              demoThumb = yield this.imageUpload.upload(demoThumb, "products/demos");
            }
            liveDemos.push(__spreadProps(__spreadValues({}, demo), { thumbnailUrl: demoThumb }));
          }
        }
        const updates2 = {
          title: this.editForm.title,
          shortDescription: this.editForm.shortDescription,
          category: this.editForm.category,
          price: this.editForm.price,
          originalPrice: this.editForm.originalPrice,
          tags: this.editForm.tagsStr.split(",").map((t) => t.trim()).filter((t) => t),
          features: this.editForm.featuresStr.split("\n").filter((f) => f.trim()),
          techStack: this.editForm.techStackStr.split(",").map((t) => t.trim()).filter((t) => t),
          thumbnailUrl,
          previewImages,
          liveDemos,
          youtubeUrl: this.editForm.youtubeUrl || ""
        };
        const cleanedUpdates = this.marketplace.cleanForFirestore(updates2);
        yield this.marketplace.updateProduct(this.editingProductId, cleanedUpdates);
        this.closeEditModal();
        alert("Product updated successfully! All assets moved to cloud storage.");
      } catch (error) {
        console.error("Error updating product:", error);
        alert("Failed to update product assets. Check console for details.");
      } finally {
        this.isSaving.set(false);
      }
    });
  }
  deleteProduct(productId) {
    return __async(this, null, function* () {
      if (!confirm("Are you sure you want to permanently delete this product?"))
        return;
      try {
        yield this.marketplace.deleteProduct(productId);
        alert("Product deleted.");
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Failed to delete product.");
      }
    });
  }
  // Image handling for edit modal
  onEditThumbnailSelect(event) {
    const input = event.target;
    if (input.files?.length) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.editForm.thumbnailPreview = e.target?.result;
        this.editForm.newThumbnailData = e.target?.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  onEditScreenshotsSelect(event) {
    const input = event.target;
    if (input.files) {
      Array.from(input.files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.editForm.screenshotPreviews.push(e.target?.result);
        };
        reader.readAsDataURL(file);
      });
    }
  }
  removeEditScreenshot(index) {
    this.editForm.screenshotPreviews = this.editForm.screenshotPreviews.filter((_, i) => i !== index);
  }
  // Live Demo Management
  addEditDemo() {
    this.editForm.liveDemos.push({ label: "", url: "", thumbnailUrl: "" });
  }
  removeEditDemo(index) {
    this.editForm.liveDemos.splice(index, 1);
  }
  onDemoThumbnailSelect(event, index) {
    const input = event.target;
    if (input.files?.length) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.editForm.liveDemos[index].thumbnailUrl = e.target?.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  loadAnalytics() {
    return __async(this, null, function* () {
      try {
        const analyticsRef = collection(this.firestore, "site_analytics");
        const q = query(analyticsRef, orderBy("timestamp", "desc"));
        collectionData(q, { idField: "id" }).subscribe((events) => {
          this.analyticsEvents = events.map((ev) => __spreadProps(__spreadValues({}, ev), {
            timestamp: ev.timestamp?.toDate?.() || new Date(ev.timestamp)
          }));
        });
      } catch (e) {
        console.error("Failed to load analytics", e);
      }
    });
  }
  loadBlogs() {
    return __async(this, null, function* () {
      try {
        const blogsRef = collection(this.firestore, "Blogs");
        const q = query(blogsRef, orderBy("createdAt", "desc"));
        collectionData(q, { idField: "id" }).subscribe((data) => {
          this.blogs = data.map((blog) => __spreadProps(__spreadValues({}, blog), {
            createdAt: blog.createdAt?.toDate?.() || new Date(blog.createdAt)
          }));
        });
      } catch (error) {
        console.error("Error loading blogs:", error);
        this.blogs = [];
      }
    });
  }
  openBlogModal(blog) {
    if (blog) {
      this.editingBlogId = blog.id;
      this.blogForm = {
        title: blog.title || "",
        content: blog.content || "",
        excerpt: blog.excerpt || "",
        published: blog.published || false
      };
    } else {
      this.editingBlogId = null;
      this.blogForm = { title: "", content: "", excerpt: "", published: false };
    }
    this.showBlogModal = true;
  }
  closeBlogModal() {
    this.showBlogModal = false;
    this.editingBlogId = null;
    this.blogForm = { title: "", content: "", excerpt: "", published: false };
  }
  saveBlogFromModal() {
    return __async(this, null, function* () {
      if (!this.blogForm.title || !this.blogForm.excerpt)
        return;
      try {
        if (this.editingBlogId) {
          const blogRef = doc(this.firestore, `blogs/${this.editingBlogId}`);
          yield updateDoc(blogRef, {
            title: this.blogForm.title,
            excerpt: this.blogForm.excerpt,
            content: this.blogForm.content,
            published: this.blogForm.published,
            updatedAt: serverTimestamp()
          });
        } else {
          const blogsRef = collection(this.firestore, "Blogs");
          yield addDoc(blogsRef, {
            title: this.blogForm.title,
            excerpt: this.blogForm.excerpt,
            content: this.blogForm.content,
            published: this.blogForm.published,
            author: "Admin",
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
          });
        }
        this.closeBlogModal();
      } catch (error) {
        console.error("Error saving blog:", error);
        alert("Failed to save blog post. Please check your Firestore rules.");
      }
    });
  }
  deleteBlog(blogId) {
    return __async(this, null, function* () {
      if (confirm("Are you sure you want to delete this blog post?")) {
        try {
          const blogRef = doc(this.firestore, `blogs/${blogId}`);
          yield deleteDoc(blogRef);
        } catch (error) {
          console.error("Error deleting blog:", error);
          alert("Failed to delete blog post. Please check your Firestore rules.");
        }
      }
    });
  }
  resetGeneratedActivity() {
    return __async(this, null, function* () {
      if (this.isGenerating())
        return;
      if (!confirm("This will remove ALL generated reviews and comments. REAL user data will be preserved. Proceed?"))
        return;
      this.isGenerating.set(true);
      try {
        const projects = this.marketplace.products().filter((p) => !p.status || p.status === "published");
        for (const product of projects) {
          const productRef = doc(this.firestore, `products/${product.id}`);
          const existingReviews = Array.isArray(product.reviews) ? product.reviews : [];
          const filteredReviews = existingReviews.filter((r) => !r.id.startsWith("gen_") && !r.isGenerated);
          const totalRatings = filteredReviews.length;
          const sumRatings = filteredReviews.reduce((s, r) => s + (r.rating || 5), 0);
          const avgRating = totalRatings > 0 ? sumRatings / totalRatings : 0;
          yield updateDoc(productRef, {
            reviews: filteredReviews,
            rating: Math.round(avgRating * 10) / 10,
            totalRatings
          });
          const commentsRef = collection(this.firestore, `products/${product.id}/comments`);
          const q = query(commentsRef, where("isGenerated", "==", true));
          const snap = yield getDocs(q);
          for (const d of snap.docs) {
            yield deleteDoc(doc(this.firestore, `products/${product.id}/comments/${d.id}`));
          }
        }
        alert("Reset complete! All generated activity has been removed.");
      } catch (e) {
        console.error("Reset failed", e);
        alert("Failed to reset activity.");
      } finally {
        this.isGenerating.set(false);
      }
    });
  }
  generateSiteActivity() {
    return __async(this, null, function* () {
      if (this.isGenerating())
        return;
      if (!confirm("This will generate random views, reviews, and comments for ALL published projects. Proceed?"))
        return;
      this.isGenerating.set(true);
      try {
        const projects = this.marketplace.products().filter((p) => !p.status || p.status === "published");
        const names = [
          "Jonathan Sterling",
          "Sarah Van der Beek",
          "Marcus Thorne",
          "Elena de la Vega",
          "Alexander von Humboldt",
          "Catherine Saint-Claire",
          "Nicholas Barrington",
          "Eleanor Fitzalan",
          "Julian Thorne",
          "Alastair Sterling",
          "Beatrix Vane",
          "Leopoldo Rossi",
          "Genevieve Beaulieu",
          "Sebastian Nacht",
          "Octavia Vance",
          "Dominic Draken",
          "Valeria Volt",
          "Xavier Cross",
          "Antonia Moretti",
          "Maximilian Wolf",
          "Clara Eisenhardt",
          "Benedict Cumberbatch",
          "Freya Lund",
          "Hugo Blackwood",
          "Sienna Castel",
          "Arthur Pendragon",
          "Isabella d'Este"
        ];
        const reviewsPool = [
          { title: "Great work!", text: "The quality of this project is exceptional. Very satisfied with the purchase." },
          { title: "Highly recommend", text: "Clean code and very well organized. A great professional asset." },
          { title: "Outstanding", text: "Everything works as expected. The design is clean and modern." },
          { title: "Very useful", text: "This saved me a lot of effort. Highly recommend for any professional setup." },
          { title: "Excellent quality", text: "A top-tier project. The attention to detail is remarkable." },
          { title: "Impressive", text: "Very smooth implementation and great documentation. 5 stars!" }
        ];
        const commentsPool = [
          "Is there a detailed documentation included with the download?",
          "Does this project receive regular updates?",
          "Is there a community or Discord for support?",
          "Great job on this! Does it support mobile responsiveness?",
          "Could you clarify the license for commercial redistribution?",
          "Very clean implementation. Do you have a roadmap for future features?"
        ];
        const adminReplies = [
          "Thank you for the kind words! We strive for excellence.",
          "Glad you found it useful! Let us know if you need anything else.",
          "We appreciate the support. Updates are coming soon!",
          "Thank you! Your feedback is what keeps us improving.",
          "Happy to help! Feel free to reach out for any specific questions."
        ];
        for (const product of projects) {
          const extraViews = Math.floor(Math.random() * 50) + 20;
          const extraSales = Math.floor(Math.random() * 10) + 5;
          const productRef = doc(this.firestore, `products/${product.id}`);
          const numReviews = Math.floor(Math.random() * 4) + 3;
          const newReviews = [];
          for (let i = 0; i < numReviews; i++) {
            const name = names[Math.floor(Math.random() * names.length)];
            const reviewTemplate = reviewsPool[Math.floor(Math.random() * reviewsPool.length)];
            newReviews.push({
              id: "gen_" + Math.random().toString(36).substr(2, 9),
              userId: "user_" + Math.random().toString(36).substr(2, 5),
              userName: name,
              userAvatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
              rating: Math.floor(Math.random() * 2) + 4,
              // 4 or 5 stars
              title: reviewTemplate.title,
              comment: reviewTemplate.text,
              date: this.getRandomPastDate(),
              helpful: Math.floor(Math.random() * 25),
              verified: true,
              isGenerated: true,
              reply: {
                authorName: "Admin",
                comment: adminReplies[Math.floor(Math.random() * adminReplies.length)],
                date: /* @__PURE__ */ new Date()
              }
            });
          }
          const existingReviews = Array.isArray(product.reviews) ? product.reviews : [];
          const combinedReviews = [...newReviews, ...existingReviews];
          const totalRatings = combinedReviews.length;
          const sumRatings = combinedReviews.reduce((s, r) => s + (r.rating || 5), 0);
          const avgRating = totalRatings > 0 ? sumRatings / totalRatings : 5;
          yield updateDoc(productRef, {
            totalVisits: increment(extraViews),
            totalSales: increment(extraSales),
            reviews: combinedReviews,
            rating: Math.round(avgRating * 10) / 10,
            totalRatings
          });
          const numComments = Math.floor(Math.random() * 4) + 3;
          for (let i = 0; i < numComments; i++) {
            const name = names[Math.floor(Math.random() * names.length)];
            const text = commentsPool[Math.floor(Math.random() * commentsPool.length)];
            const commentDate = this.getRandomPastDate();
            const commentsRef = collection(this.firestore, `products/${product.id}/comments`);
            yield addDoc(commentsRef, {
              userName: name,
              text,
              date: commentDate,
              isGenerated: true
            });
            yield addDoc(commentsRef, {
              userName: "Admin",
              text: adminReplies[Math.floor(Math.random() * adminReplies.length)],
              date: /* @__PURE__ */ new Date(),
              isGenerated: true
            });
          }
        }
        alert(`Success! Generated deep activity (Sales, Views, Reviews, Comments) for ${projects.length} live projects.`);
      } catch (e) {
        console.error("Activity generation failed", e);
        alert("Failed to generate activity. Check the browser console for details.");
      } finally {
        this.isGenerating.set(false);
      }
    });
  }
  getRandomPastDate(daysMax = 60) {
    const date = /* @__PURE__ */ new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * daysMax));
    return date;
  }
  /* ═══════════ Review Queue Methods ═══════════ */
  toggleGuidePreview(productId) {
    this.expandedGuides[productId] = !this.expandedGuides[productId];
  }
  approveProduct(productId) {
    return __async(this, null, function* () {
      if (!confirm("Approve this product? It will be published to the marketplace."))
        return;
      try {
        yield this.marketplace.approveProduct(productId);
        alert("Product approved and published!");
      } catch (e) {
        console.error("Error approving:", e);
        alert("Failed to approve product.");
      }
    });
  }
  openRejectModal(productId, title) {
    this.rejectingProductId = productId;
    this.rejectingTitle = title;
    this.rejectionReason = "";
    this.showRejectModal = true;
  }
  closeRejectModal() {
    this.showRejectModal = false;
    this.rejectingProductId = null;
    this.rejectingTitle = "";
    this.rejectionReason = "";
  }
  confirmReject() {
    return __async(this, null, function* () {
      if (!this.rejectingProductId || !this.rejectionReason)
        return;
      try {
        yield this.marketplace.rejectProduct(this.rejectingProductId, this.rejectionReason);
        this.closeRejectModal();
        alert("Product rejected.");
      } catch (e) {
        console.error("Error rejecting:", e);
        alert("Failed to reject product.");
      }
    });
  }
  static {
    this.\u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 19, consts: [[1, "admin-hero"], [1, "pm-container"], [1, "hero-row"], [1, "pm-heading-lg"], [1, "pm-text-secondary"], [1, "hero-actions"], [1, "tab-btn", 3, "click"], ["class", "pending-badge", 4, "ngIf"], [1, "pm-btn", "pm-btn-ghost", "pm-btn-sm", 2, "border-color", "var(--pm-border)", "margin-right", "8px", 3, "click", "disabled"], [1, "pm-btn", "pm-btn-ghost", "pm-btn-sm", 2, "border-color", "#EF4444", "color", "#EF4444", "margin-right", "8px", 3, "click", "disabled"], ["routerLink", "/admin/submit", 1, "pm-btn", "pm-btn-primary"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 5v14M5 12h14"], [1, "pm-container", "admin-content"], ["class", "fade-in", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "pending-badge"], [1, "fade-in"], [1, "stats-grid", "stagger-children"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "chart-card"], [1, "chart-header"], [1, "chart-tabs"], [3, "click"], [1, "chart-body"], [1, "chart-bars"], ["class", "chart-bar", 3, "height", 4, "ngFor", "ngForOf"], ["class", "empty-chart", 4, "ngIf"], [1, "chart-labels"], [4, "ngFor", "ngForOf"], [1, "projects-card"], [1, "card-header"], [1, "header-tabs"], ["style", "padding: 40px; text-align: center; color: var(--pm-text-muted);", 4, "ngIf"], [4, "ngIf"], [1, "stat-card"], [1, "stat-card-icon"], [1, "stat-card-info"], [1, "stat-card-value"], [1, "stat-card-label"], ["class", "stat-card-change positive", 4, "ngIf"], [1, "stat-card-change", "positive"], [1, "chart-bar"], [1, "bar-tooltip"], [1, "empty-chart"], [2, "padding", "40px", "text-align", "center", "color", "var(--pm-text-muted)"], [1, "loading-spinner", 2, "margin-bottom", "12px"], ["class", "project-row", 4, "ngFor", "ngForOf"], ["class", "empty-projects", 4, "ngIf"], [1, "project-row"], [1, "project-thumb"], [1, "project-info"], [1, "project-title"], [1, "project-desc"], [1, "project-status"], [1, "status-badge"], [1, "project-price"], [1, "project-date"], [1, "project-actions"], [1, "pm-btn", "pm-btn-ghost", "pm-btn-sm", 3, "routerLink"], [1, "pm-btn", "pm-btn-ghost", "pm-btn-sm", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "pm-btn", "pm-btn-ghost", "pm-btn-sm", 2, "color", "#EF4444", 3, "click"], ["d", "M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], [1, "empty-projects"], ["routerLink", "/admin/submit"], [1, "settings-card"], [1, "settings-header"], ["class", "empty-state", 4, "ngIf"], ["class", "review-item", 4, "ngFor", "ngForOf"], [1, "empty-state"], ["width", "48", "height", "48", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "review-item"], [1, "review-item-header"], [1, "review-thumb"], [1, "review-info"], [1, "review-meta-row"], [1, "meta-tag"], ["class", "meta-tag", 4, "ngIf"], ["class", "guide-preview-mini", 4, "ngIf"], ["class", "no-guide-tag", 4, "ngIf"], [1, "review-actions-row"], [1, "pm-btn", "pm-btn-sm", 2, "background", "#10B981", "color", "white", "border", "none", 3, "click"], [1, "pm-btn", "pm-btn-sm", 2, "background", "#EF4444", "color", "white", "border", "none", 3, "click"], [1, "guide-preview-mini"], [1, "gpm-header", 3, "click"], ["class", "gpm-content", 4, "ngIf"], [1, "gpm-content"], [1, "no-guide-tag"], [1, "blog-management"], [1, "blog-actions"], [1, "pm-btn", "pm-btn-primary", 3, "click"], ["class", "blogs-list", 4, "ngIf"], [1, "blogs-list"], ["class", "blog-item", 4, "ngFor", "ngForOf"], [1, "blog-item"], [1, "blog-item-content"], [1, "blog-item-header"], [1, "pm-btn", "pm-btn-sm", "pm-btn-ghost", 3, "click"], [1, "pm-btn", "pm-btn-sm", "pm-btn-danger", 3, "click"], [1, "blog-excerpt"], [1, "blog-meta"], [1, "blog-status"], [1, "blog-date"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"], [2, "overflow-x", "auto"], [1, "pm-table", 2, "width", "100%", "border-collapse", "collapse", "text-align", "left"], [2, "border-bottom", "2px solid var(--pm-border-light)"], [2, "padding", "12px", "color", "var(--pm-text-muted)"], ["style", "border-bottom: 1px solid var(--pm-border-light);", 4, "ngFor", "ngForOf"], [2, "border-bottom", "1px solid var(--pm-border-light)"], [2, "padding", "12px", "white-space", "nowrap"], [2, "padding", "12px"], [2, "padding", "12px", "font-size", "0.8rem", "color", "var(--pm-text-secondary)", "max-width", "250px", "overflow", "hidden", "text-overflow", "ellipsis", "white-space", "nowrap", 3, "title"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "form-group"], ["for", "blogTitle"], ["id", "blogTitle", "type", "text", "placeholder", "Enter blog title", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "blogExcerpt"], ["id", "blogExcerpt", "placeholder", "Short description (appears in listings)", "rows", "3", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "blogContent"], ["id", "blogContent", "placeholder", "Full blog content (supports HTML)", "rows", "10", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "pm-btn", "pm-btn-ghost", 3, "click"], [1, "pm-btn", "pm-btn-primary", 3, "click", "disabled"], [1, "modal-content", 2, "max-width", "700px", 3, "click"], [1, "modal-body", 2, "max-height", "70vh", "overflow-y", "auto"], ["type", "text", 1, "form-input", 3, "ngModelChange", "ngModel"], ["rows", "2", 1, "form-input", 3, "ngModelChange", "ngModel"], ["rows", "6", 1, "form-input", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "gap", "16px"], [1, "form-group", 2, "flex", "1"], ["type", "number", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-input", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "published"], ["value", "draft"], ["value", "pending"], ["value", "rejected"], ["type", "url", "placeholder", "https://...", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "https://youtube.com/watch?v=...", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-section", 2, "margin", "0 0 20px 0"], [2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-bottom", "12px"], [2, "margin-bottom", "0", "font-weight", "700"], [1, "demo-edit-list", 2, "display", "flex", "flex-direction", "column", "gap", "12px"], ["class", "demo-edit-item", "style", "display:flex; gap:12px; align-items:flex-start; background:var(--pm-surface-muted); padding:12px; border-radius:8px; border:1px solid var(--pm-border); position:relative;", 4, "ngFor", "ngForOf"], ["rows", "4", 1, "form-input", 3, "ngModelChange", "ngModel"], ["style", "margin-bottom:8px", 4, "ngIf"], ["type", "file", "accept", "image/*", 1, "form-input", 3, "change"], ["style", "display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px", 4, "ngIf"], ["type", "file", "accept", "image/*", "multiple", "", 1, "form-input", 3, "change"], [2, "display", "flex", "gap", "12px", "align-items", "center", "margin-top", "8px"], [2, "display", "flex", "align-items", "center", "gap", "8px", "cursor", "pointer"], [1, "pm-btn", "pm-btn-ghost", 3, "click", "disabled"], [3, "value"], [1, "demo-edit-item", 2, "display", "flex", "gap", "12px", "align-items", "flex-start", "background", "var(--pm-surface-muted)", "padding", "12px", "border-radius", "8px", "border", "1px solid var(--pm-border)", "position", "relative"], [1, "demo-edit-thumb", 2, "width", "60px", "height", "60px", "background", "#e2e8f0", "border-radius", "8px", "display", "flex", "align-items", "center", "justify-content", "center", "position", "relative", "overflow", "hidden", "flex-shrink", "0"], ["class", "thumb-preview", "style", "position:absolute; inset:0; background-size:cover; background-position:center;", 3, "backgroundImage", 4, "ngIf"], ["type", "file", "title", "Change demo thumbnail", 2, "position", "absolute", "inset", "0", "opacity", "0", "cursor", "pointer", 3, "change"], ["style", "font-size:20px;", 4, "ngIf"], [1, "demo-edit-fields", 2, "flex", "1", "display", "flex", "flex-direction", "column", "gap", "8px"], ["type", "text", "placeholder", "Demo Name (e.g. Admin Panel)", 1, "form-input", 2, "padding", "8px 12px", 3, "ngModelChange", "ngModel"], ["type", "url", "placeholder", "Demo URL", 1, "form-input", 2, "padding", "8px 12px", 3, "ngModelChange", "ngModel"], [2, "background", "none", "border", "none", "color", "#EF4444", "font-size", "24px", "cursor", "pointer", "padding", "0 4px", "line-height", "1", 3, "click"], [1, "thumb-preview", 2, "position", "absolute", "inset", "0", "background-size", "cover", "background-position", "center"], [2, "font-size", "20px"], [2, "margin-bottom", "8px"], [2, "max-width", "200px", "max-height", "120px", "border-radius", "8px", "object-fit", "cover", 3, "src"], [2, "display", "flex", "gap", "8px", "flex-wrap", "wrap", "margin-bottom", "8px"], ["style", "position:relative", 4, "ngFor", "ngForOf"], [2, "position", "relative"], [2, "width", "100px", "height", "70px", "border-radius", "6px", "object-fit", "cover", 3, "src"], [2, "position", "absolute", "top", "-6px", "right", "-6px", "width", "20px", "height", "20px", "border-radius", "50%", "background", "#EF4444", "color", "white", "border", "none", "font-size", "12px", "cursor", "pointer", "display", "flex", "align-items", "center", "justify-content", "center", 3, "click"], [1, "modal-content", 2, "max-width", "500px", 3, "click"], [2, "color", "var(--pm-text-secondary)", "margin", "0 0 16px"], ["for", "rejectReason"], ["id", "rejectReason", "placeholder", "Explain why this submission is being rejected...", "rows", "4", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "pm-btn", 2, "background", "#EF4444", "color", "white", "border", "none", 3, "click", "disabled"]], template: function AdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "ion-content")(2, "section", 0)(3, "div", 1)(4, "div", 2)(5, "div")(6, "h1", 3);
        \u0275\u0275text(7, "\u{1F4CA} Author Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 4);
        \u0275\u0275text(9, "Manage your projects, track sales, and monitor performance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "button", 6);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_11_listener() {
          return ctx.activeTab = "dashboard";
        });
        \u0275\u0275text(12, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 6);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_13_listener() {
          return ctx.activeTab = "review";
        });
        \u0275\u0275text(14, " Review Queue ");
        \u0275\u0275template(15, AdminComponent_span_15_Template, 2, 1, "span", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 6);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_16_listener() {
          return ctx.activeTab = "Blogs";
        });
        \u0275\u0275text(17, "Blogs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 6);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_18_listener() {
          ctx.activeTab = "analytics";
          return ctx.loadAnalytics();
        });
        \u0275\u0275text(19, "Analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 8);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_20_listener() {
          return ctx.generateSiteActivity();
        });
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 9);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_22_listener() {
          return ctx.resetGeneratedActivity();
        });
        \u0275\u0275text(23, " \u{1F5D1}\uFE0F Reset Generated ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "a", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(25, "svg", 11);
        \u0275\u0275element(26, "path", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " Submit Project ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(28, "div", 13);
        \u0275\u0275template(29, AdminComponent_div_29_Template, 35, 21, "div", 14)(30, AdminComponent_div_30_Template, 9, 2, "div", 14)(31, AdminComponent_div_31_Template, 15, 2, "div", 14)(32, AdminComponent_div_32_Template, 24, 2, "div", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(33, AdminComponent_div_33_Template, 30, 7, "div", 15)(34, AdminComponent_div_34_Template, 105, 23, "div", 15)(35, AdminComponent_div_35_Template, 21, 3, "div", 15);
        \u0275\u0275element(36, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275classProp("active", ctx.activeTab === "dashboard");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "review");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.marketplace.pendingProducts().length > 0);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.activeTab === "Blogs");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "analytics");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.isGenerating());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.isGenerating() ? "\u231B Generating..." : "\u2728 Generate Activity", " ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.isGenerating());
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.activeTab === "dashboard");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "review");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "Blogs");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "analytics");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBlogModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showEditModal);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showRejectModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, SlicePipe, DecimalPipe, TitleCasePipe, DatePipe, RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, IonContent, HeaderComponent, FooterComponent], styles: ["\n\n.admin-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F8FAFC,\n      #EEF0FF);\n  padding: 32px 0;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.hero-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.admin-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n}\n.admin-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: var(--pm-radius-md);\n  border: none;\n  background: transparent;\n  color: var(--pm-text-secondary);\n  font-family: inherit;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--ion-color-primary);\n  box-shadow: var(--pm-shadow-sm);\n}\n.admin-content[_ngcontent-%COMP%] {\n  padding: 32px 0 64px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n  margin-bottom: 32px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-sm);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.stat-card-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: var(--pm-radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.stat-card-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stat-card-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--pm-text-primary);\n}\n.stat-card-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: var(--pm-text-muted);\n}\n.stat-card-change[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  padding: 4px 8px;\n  border-radius: var(--pm-radius-sm);\n}\n.stat-card-change.positive[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10B981;\n}\n.chart-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-sm);\n  margin-bottom: 32px;\n}\n.chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.chart-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.chart-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  background: var(--pm-surface-muted);\n  padding: 4px;\n  border-radius: var(--pm-radius-sm);\n}\n.chart-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  background: transparent;\n  border-radius: var(--pm-radius-sm);\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.chart-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: white;\n  box-shadow: var(--pm-shadow-sm);\n}\n.chart-body[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n.chart-bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  height: 200px;\n  padding-bottom: 8px;\n}\n.chart-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      180deg,\n      #6366F1,\n      #A855F7);\n  border-radius: 4px 4px 0 0;\n  min-height: 4px;\n  position: relative;\n  transition: height 0.3s ease;\n}\n.bar-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -24px;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 0.7rem;\n  background: #1F2937;\n  color: white;\n  padding: 2px 6px;\n  border-radius: 4px;\n  white-space: nowrap;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.chart-bar[_ngcontent-%COMP%]:hover   .bar-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.chart-labels[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 8px;\n}\n.chart-labels[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  font-size: 0.7rem;\n  color: var(--pm-text-muted);\n}\n.empty-chart[_ngcontent-%COMP%] {\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--pm-text-muted);\n  font-size: 0.9rem;\n}\n.projects-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-sm);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.header-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.header-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  background: transparent;\n  border-radius: var(--pm-radius-sm);\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  color: var(--pm-text-muted);\n  transition: all 0.2s;\n}\n.header-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--pm-surface-muted);\n  color: var(--pm-text-primary);\n}\n.project-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 0;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.project-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.project-thumb[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--pm-radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.project-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.project-title[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: var(--pm-text-primary);\n  margin-bottom: 2px;\n}\n.project-desc[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: var(--pm-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.project-status[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: var(--pm-radius-full);\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.status-published[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10B981;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.status-draft[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366F1;\n}\n.status-rejected[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.project-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--pm-text-primary);\n  flex-shrink: 0;\n}\n.project-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--pm-text-muted);\n  flex-shrink: 0;\n}\n.project-actions[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.empty-projects[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--pm-text-muted);\n}\n.empty-projects[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.settings-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n  padding: 32px;\n  box-shadow: var(--pm-shadow-sm);\n}\n.settings-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.settings-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 1.3rem;\n}\n.settings-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--pm-text-muted);\n}\n.form-section[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n.form-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1rem;\n}\n.section-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--pm-text-muted);\n  margin-bottom: 16px;\n}\n.form-group-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  max-width: 500px;\n}\n.pm-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 16px;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-md);\n  font-family: inherit;\n}\n.pm-input[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--ion-color-primary-transparent);\n  border-color: var(--ion-color-primary);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  max-width: 600px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.pm-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--pm-border-light);\n  margin: 32px 0;\n}\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.blog-management[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.blog-actions[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.blogs-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.blog-item[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border: 1px solid var(--pm-border-light);\n  border-radius: var(--pm-radius-md);\n  padding: 20px;\n  transition: all var(--pm-transition-fast);\n}\n.blog-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-primary);\n  box-shadow: var(--pm-shadow-sm);\n}\n.blog-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.blog-item-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: var(--pm-text-primary);\n  flex: 1;\n}\n.blog-item-header[_ngcontent-%COMP%]   .blog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin: 0;\n}\n.blog-excerpt[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: var(--pm-text-secondary);\n  font-size: 0.9rem;\n  line-height: 1.5;\n}\n.blog-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.8rem;\n}\n.blog-status[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: var(--pm-radius-sm);\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n.status-published[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10B981;\n}\n.status-draft[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.blog-date[_ngcontent-%COMP%] {\n  color: var(--pm-text-muted);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n  color: var(--pm-text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  color: var(--pm-border);\n}\n.empty-state[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: var(--pm-text-primary);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: var(--pm-shadow-lg);\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: var(--pm-text-muted);\n  padding: 0;\n  line-height: 1;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  color: var(--pm-text-primary);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: var(--pm-text-primary);\n}\n.modal-body[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid var(--pm-border);\n  border-radius: var(--pm-radius-sm);\n  font-family: inherit;\n  font-size: 0.9rem;\n  background: var(--pm-surface);\n  color: var(--pm-text-primary);\n  outline: none;\n  transition: border-color 0.2s;\n}\n.modal-body[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--ion-color-primary);\n}\n.modal-body[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.modal-body[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--ion-color-primary);\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--pm-border-light);\n}\n@media (max-width: 768px) {\n  .hero-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .hero-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n  .tab-btn[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 0.85rem;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .stat-card-icon[_ngcontent-%COMP%] {\n    width: 48px;\n    height: 48px;\n    font-size: 1.25rem;\n  }\n  .chart-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .chart-tabs[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: space-between;\n  }\n  .chart-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n    text-align: center;\n  }\n  .project-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 12px;\n    padding: 12px 0;\n  }\n  .project-thumb[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    font-size: 1rem;\n  }\n  .project-info[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .project-title[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .project-desc[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .project-price[_ngcontent-%COMP%], \n   .project-date[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-group-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .modal-content[_ngcontent-%COMP%] {\n    max-height: 100vh;\n    border-radius: 0;\n    margin: 0;\n    width: 100%;\n  }\n  .settings-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .blog-item-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .blog-item-header[_ngcontent-%COMP%]   .blog-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-start;\n  }\n}\n.pending-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 6px;\n  background: #EF4444;\n  color: white;\n  border-radius: 10px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  margin-left: 6px;\n}\n.review-item[_ngcontent-%COMP%] {\n  padding: 24px;\n  margin-bottom: 16px;\n  background: var(--pm-surface);\n  border: 1px solid var(--pm-border-light);\n  border-radius: var(--pm-radius-lg);\n  transition: all 0.2s;\n}\n.review-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-primary);\n  box-shadow: var(--pm-shadow-sm);\n}\n.review-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.review-thumb[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 60px;\n  border-radius: var(--pm-radius-sm);\n  background: var(--pm-surface-muted);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.review-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.review-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1rem;\n}\n.review-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 0.85rem;\n  color: var(--pm-text-secondary);\n}\n.review-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.meta-tag[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  background: var(--pm-surface-muted);\n  border-radius: var(--pm-radius-full);\n  font-size: 0.75rem;\n  color: var(--pm-text-secondary);\n  font-weight: 500;\n}\n.guide-preview-mini[_ngcontent-%COMP%] {\n  background: var(--pm-surface-muted);\n  border: 1px solid var(--pm-border-light);\n  border-radius: var(--pm-radius-md);\n  margin-bottom: 16px;\n  overflow: hidden;\n}\n.gpm-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 16px;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.gpm-header[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.gpm-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin: 0;\n  font-size: 0.8rem;\n  line-height: 1.6;\n  color: var(--pm-text-secondary);\n  white-space: pre-wrap;\n  font-family: inherit;\n  max-height: 200px;\n  overflow-y: auto;\n  border-top: 1px solid var(--pm-border-light);\n}\n.no-guide-tag[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  background: rgba(245, 158, 11, 0.06);\n  border: 1px solid rgba(245, 158, 11, 0.15);\n  border-radius: var(--pm-radius-md);\n  font-size: 0.82rem;\n  color: #D97706;\n  margin-bottom: 16px;\n}\n.review-actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=admin.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src\\app\\pages\\admin\\admin.component.ts", lineNumber: 1011 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=chunk-FG3OF64B.js.map

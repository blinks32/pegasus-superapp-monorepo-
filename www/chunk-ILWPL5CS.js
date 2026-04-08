import {
  AdminAuthService
} from "./chunk-2RFJ37WR.js";
import {
  DefaultValueAccessor,
  FooterComponent,
  FormsModule,
  HeaderComponent,
  MarketplaceService,
  NgControlStatus,
  NgModel
} from "./chunk-YSRYBUAR.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  Firestore,
  NgForOf,
  NgIf,
  RouterLink,
  TitleCasePipe,
  __async,
  doc,
  effect,
  getDoc,
  inject,
  setDoc,
  updateDoc,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HWE2I25U.js";

// src/app/pages/admin/admin.component.ts
var _c0 = (a0) => ["/product", a0];
function AdminComponent_div_19_div_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stat_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", stat_r2.change, "% ");
  }
}
function AdminComponent_div_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 32)(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AdminComponent_div_19_div_2_span_8_Template, 2, 1, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", stat_r2.gradient);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stat_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r2.change);
  }
}
function AdminComponent_div_19_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 38);
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
function AdminComponent_div_19_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "p");
    \u0275\u0275text(2, "No sales data available for this period.");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_19_span_19_Template(rf, ctx) {
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
function AdminComponent_div_19_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 45)(9, "span", 46);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 47);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 48);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 49)(18, "a", 50);
    \u0275\u0275text(19, " View ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.getProjectGradient(project_r6.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getCategoryIcon(project_r6.category), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r6.shortDescription);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + (project_r6.status || "pending"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 11, project_r6.status || "pending"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", project_r6.price, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 13, project_r6.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c0, project_r6.id));
  }
}
function AdminComponent_div_19_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "p");
    \u0275\u0275text(2, "No projects found. ");
    \u0275\u0275elementStart(3, "a", 52);
    \u0275\u0275text(4, "Submit your first project \u2192");
    \u0275\u0275elementEnd()()();
  }
}
function AdminComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275template(2, AdminComponent_div_19_div_2_Template, 9, 6, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15)(4, "div", 16)(5, "h3");
    \u0275\u0275text(6, "Revenue Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17)(8, "button", 18);
    \u0275\u0275listener("click", function AdminComponent_div_19_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setChartPeriod("7d"));
    });
    \u0275\u0275text(9, "7 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 18);
    \u0275\u0275listener("click", function AdminComponent_div_19_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setChartPeriod("30d"));
    });
    \u0275\u0275text(11, "30 Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 18);
    \u0275\u0275listener("click", function AdminComponent_div_19_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setChartPeriod("12m"));
    });
    \u0275\u0275text(13, "12 Months");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 19)(15, "div", 20);
    \u0275\u0275template(16, AdminComponent_div_19_div_16_Template, 4, 6, "div", 21)(17, AdminComponent_div_19_div_17_Template, 3, 0, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 23);
    \u0275\u0275template(19, AdminComponent_div_19_span_19_Template, 2, 1, "span", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 25)(21, "div", 26)(22, "h3");
    \u0275\u0275text(23, "My Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 27)(25, "button", 18);
    \u0275\u0275listener("click", function AdminComponent_div_19_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.projectTab = "all");
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 18);
    \u0275\u0275listener("click", function AdminComponent_div_19_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.projectTab = "published");
    });
    \u0275\u0275text(28, "Published");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 18);
    \u0275\u0275listener("click", function AdminComponent_div_19_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.projectTab = "pending");
    });
    \u0275\u0275text(30, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 18);
    \u0275\u0275listener("click", function AdminComponent_div_19_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.projectTab = "draft");
    });
    \u0275\u0275text(32, "Drafts");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, AdminComponent_div_19_div_33_Template, 20, 18, "div", 28)(34, AdminComponent_div_19_div_34_Template, 5, 0, "div", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.dashboardStats);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.chartPeriod === "7d");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.chartPeriod === "30d");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.chartPeriod === "12m");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.chartData);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.chartTotalRevenue === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.chartData);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.projectTab === "all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("All (", ctx_r2.getFilteredProjects().length, ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.projectTab === "published");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.projectTab === "pending");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.projectTab === "draft");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getFilteredProjects());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getFilteredProjects().length === 0);
  }
}
function AdminComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 53)(2, "div", 54)(3, "h3");
    \u0275\u0275text(4, "Admin Security Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Modify the authorized admin email and account credentials.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 55)(8, "div", 56)(9, "h4");
    \u0275\u0275text(10, "Authorized Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 57);
    \u0275\u0275text(12, "Only this email + password can access the admin dashboard.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 58)(14, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_20_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newAdminEmail, $event) || (ctx_r2.newAdminEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 60);
    \u0275\u0275listener("click", function AdminComponent_div_20_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateAdminEmail());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(17, "div", 61);
    \u0275\u0275elementStart(18, "div", 56)(19, "h4");
    \u0275\u0275text(20, "Change Account Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 57);
    \u0275\u0275text(22, "Update the password for your current admin account.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 62)(24, "div", 63)(25, "label");
    \u0275\u0275text(26, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_20_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newPassword, $event) || (ctx_r2.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 63)(29, "label");
    \u0275\u0275text(30, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_20_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.confirmPassword, $event) || (ctx_r2.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "button", 66);
    \u0275\u0275listener("click", function AdminComponent_div_20_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updatePassword());
    });
    \u0275\u0275text(33, " Update Password ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newAdminEmail);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isUpdating);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isUpdating ? "Updating..." : "Save Email", " ");
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newPassword);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.confirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isUpdating || !ctx_r2.newPassword);
  }
}
var AdminComponent = class _AdminComponent {
  constructor() {
    this.marketplace = inject(MarketplaceService);
    this.adminAuth = inject(AdminAuthService);
    this.firestore = inject(Firestore);
    this.activeTab = "dashboard";
    this.chartPeriod = "30d";
    this.projectTab = "all";
    this.dashboardStats = [];
    this.chartData = [];
    this.chartTotalRevenue = 0;
    this.allProjects = [];
    this.newAdminEmail = "";
    this.newPassword = "";
    this.confirmPassword = "";
    this.isUpdating = false;
    this.gradients = {
      "mobile-apps": "linear-gradient(135deg, #F97316, #FB923C)",
      "web-templates": "linear-gradient(135deg, #3B82F6, #60A5FA)",
      "wordpress": "linear-gradient(135deg, #8B5CF6, #A78BFA)",
      "javascript": "linear-gradient(135deg, #EAB308, #FDE047)",
      "ui-kits": "linear-gradient(135deg, #EC4899, #F472B6)",
      "full-stack": "linear-gradient(135deg, #10B981, #34D399)"
    };
    this.icons = {
      "mobile-apps": "\u{1F4F1}",
      "web-templates": "\u{1F310}",
      "wordpress": "\u{1F527}",
      "javascript": "\u26A1",
      "ui-kits": "\u{1F3A8}",
      "full-stack": "\u{1F680}"
    };
    effect(() => {
      this.calculateStats();
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.allProjects = this.marketplace.products();
      this.calculateStats();
      const snap = yield getDoc(doc(this.firestore, "settings/admin"));
      if (snap.exists()) {
        this.newAdminEmail = snap.data()["email"] || "";
      } else {
        this.newAdminEmail = "";
      }
    });
  }
  calculateStats() {
    const products = this.marketplace.products();
    const totalRev = products.reduce((sum, p) => sum + p.price * (p.totalSales || 0), 0);
    const totalSales = products.reduce((sum, p) => sum + (p.totalSales || 0), 0);
    const totalVisits = products.reduce((sum, p) => sum + (p.totalVisits || 0), 0);
    const avgRating = products.length > 0 ? products.reduce((sum, p) => sum + (p.rating || 0), 0) / products.length : 0;
    this.dashboardStats = [
      { icon: "\u{1F4B0}", label: "Total Revenue", value: `\${{ totalRev.toLocaleString() }}`, change: 0, gradient: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.15))" },
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
        const createdAt = this.parseDate(p.createdAt);
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
        const createdAt = this.parseDate(p.createdAt);
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
        const createdAt = this.parseDate(p.createdAt);
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
  parseDate(value) {
    if (!value)
      return null;
    if (value instanceof Date)
      return value;
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
  }
  formatViews(v) {
    if (v >= 1e6)
      return (v / 1e6).toFixed(1) + "M";
    if (v >= 1e3)
      return (v / 1e3).toFixed(1) + "K";
    return v.toString();
  }
  updateAdminEmail() {
    return __async(this, null, function* () {
      const normalizedEmail = (this.newAdminEmail || "").trim().toLowerCase();
      if (!normalizedEmail.includes("@")) {
        alert("Please enter a valid email.");
        return;
      }
      this.isUpdating = true;
      try {
        const ref = doc(this.firestore, "settings/admin");
        try {
          yield updateDoc(ref, { email: normalizedEmail });
        } catch {
          yield setDoc(ref, { email: normalizedEmail }, { merge: true });
        }
        alert("Authorized admin email updated successfully!");
      } catch (e) {
        console.error(e);
        alert("Error updating configuration. Make sure the document exists in Firestore.");
      } finally {
        this.isUpdating = false;
      }
    });
  }
  updatePassword() {
    return __async(this, null, function* () {
      if (this.newPassword !== this.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
      if (this.newPassword.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
      }
      this.isUpdating = true;
      try {
        const passwordHash = yield this.adminAuth.hashPassword(this.newPassword);
        const ref = doc(this.firestore, "settings/admin");
        const snap = yield getDoc(ref);
        const currentEmail = snap.exists() ? snap.data()?.email : this.newAdminEmail;
        try {
          yield updateDoc(ref, { passwordHash });
        } catch {
          yield setDoc(ref, { email: currentEmail || "", passwordHash }, { merge: true });
        }
        this.newPassword = "";
        this.confirmPassword = "";
        alert("Admin password updated successfully.");
      } catch (e) {
        alert("Error updating password.");
        console.error(e);
      } finally {
        this.isUpdating = false;
      }
    });
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
  static {
    this.\u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 6, consts: [[1, "admin-hero"], [1, "pm-container"], [1, "hero-row"], [1, "pm-heading-lg"], [1, "pm-text-secondary"], [1, "hero-actions"], [1, "tab-btn", 3, "click"], ["routerLink", "/admin/submit", 1, "pm-btn", "pm-btn-primary"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 5v14M5 12h14"], [1, "pm-container", "admin-content"], ["class", "fade-in", 4, "ngIf"], [1, "fade-in"], [1, "stats-grid", "stagger-children"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "chart-card"], [1, "chart-header"], [1, "chart-tabs"], [3, "click"], [1, "chart-body"], [1, "chart-bars"], ["class", "chart-bar", 3, "height", 4, "ngFor", "ngForOf"], ["class", "empty-chart", 4, "ngIf"], [1, "chart-labels"], [4, "ngFor", "ngForOf"], [1, "projects-card"], [1, "card-header"], [1, "header-tabs"], ["class", "project-row", 4, "ngFor", "ngForOf"], ["class", "empty-projects", 4, "ngIf"], [1, "stat-card"], [1, "stat-card-icon"], [1, "stat-card-info"], [1, "stat-card-value"], [1, "stat-card-label"], ["class", "stat-card-change positive", 4, "ngIf"], [1, "stat-card-change", "positive"], [1, "chart-bar"], [1, "bar-tooltip"], [1, "empty-chart"], [1, "project-row"], [1, "project-thumb"], [1, "project-info"], [1, "project-title"], [1, "project-desc"], [1, "project-status"], [1, "status-badge"], [1, "project-price"], [1, "project-date"], [1, "project-actions"], [1, "pm-btn", "pm-btn-ghost", "pm-btn-sm", 3, "routerLink"], [1, "empty-projects"], ["routerLink", "/admin/submit"], [1, "settings-card"], [1, "settings-header"], [1, "settings-form"], [1, "form-section"], [1, "section-desc"], [1, "form-group-row"], ["type", "email", "placeholder", "Admin email", 1, "pm-input", 3, "ngModelChange", "ngModel"], [1, "pm-btn", "pm-btn-primary", 3, "click", "disabled"], [1, "pm-divider"], [1, "form-grid"], [1, "form-group"], ["type", "password", "placeholder", "Enter new password", 1, "pm-input", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Repeat new password", 1, "pm-input", 3, "ngModelChange", "ngModel"], [1, "pm-btn", "pm-btn-primary", "mt-16", 3, "click", "disabled"]], template: function AdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "div")(5, "h1", 3);
        \u0275\u0275text(6, "\u{1F4CA} Author Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Manage your projects, track sales, and monitor performance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_10_listener() {
          return ctx.activeTab = "dashboard";
        });
        \u0275\u0275text(11, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_12_listener() {
          return ctx.activeTab = "settings";
        });
        \u0275\u0275text(13, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(15, "svg", 8);
        \u0275\u0275element(16, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " Submit Project ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275template(19, AdminComponent_div_19_Template, 35, 21, "div", 11)(20, AdminComponent_div_20_Template, 34, 6, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275classProp("active", ctx.activeTab === "dashboard");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "settings");
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.activeTab === "dashboard");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "settings");
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, TitleCasePipe, DatePipe, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, HeaderComponent, FooterComponent], styles: ["\n\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: var(--pm-radius-md);\n  border: none;\n  background: transparent;\n  color: var(--pm-text-secondary);\n  font-family: inherit;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--ion-color-primary);\n  box-shadow: var(--pm-shadow-sm);\n}\n.settings-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n  padding: 32px;\n  box-shadow: var(--pm-shadow-sm);\n}\n.settings-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.settings-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 1.3rem;\n}\n.settings-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--pm-text-muted);\n}\n.form-section[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n.form-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 1rem;\n}\n.section-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--pm-text-muted);\n  margin-bottom: 16px;\n}\n.form-group-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  max-width: 500px;\n}\n.pm-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 10px 16px;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-md);\n  font-family: inherit;\n}\n.pm-input[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--ion-color-primary-transparent);\n  border-color: var(--ion-color-primary);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  max-width: 600px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.pm-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: var(--pm-border-light);\n  margin: 32px 0;\n}\n.mt-16[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.empty-chart[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--pm-text-muted);\n  font-size: 0.9rem;\n}\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=admin.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src\\app\\pages\\admin\\admin.component.ts", lineNumber: 222 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=chunk-ILWPL5CS.js.map

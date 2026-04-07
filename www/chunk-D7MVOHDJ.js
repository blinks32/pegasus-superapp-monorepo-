import {
  FooterComponent,
  HeaderComponent,
  MarketplaceService
} from "./chunk-HPEEYXSC.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  RouterLink,
  TitleCasePipe,
  __spreadProps,
  __spreadValues,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-AKTLL2DV.js";

// src/app/pages/admin/admin.component.ts
function AdminComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 32);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", stat_r1.gradient);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stat_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("positive", stat_r1.change > 0)("negative", stat_r1.change < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", stat_r1.change > 0 ? "+" : "", "", stat_r1.change, "% ");
  }
}
function AdminComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r2 = ctx.$implicit;
    \u0275\u0275styleProp("height", bar_r2.pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind1(3, 3, bar_r2.value), "");
  }
}
function AdminComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bar_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bar_r3.label);
  }
}
function AdminComponent_div_45_Template(rf, ctx) {
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
    \u0275\u0275elementStart(8, "div", 40)(9, "span", 41);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 42);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 43);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 44)(18, "button", 45);
    \u0275\u0275text(19, "Edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r4.getProjectGradient(project_r4.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.getCategoryIcon(project_r4.category), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r4.shortDescription);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + project_r4.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, project_r4.status), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", project_r4.price, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 12, project_r4.createdAt, "mediumDate"));
  }
}
function AdminComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "p");
    \u0275\u0275text(2, "No projects found. ");
    \u0275\u0275elementStart(3, "a", 47);
    \u0275\u0275text(4, "Submit your first project \u2192");
    \u0275\u0275elementEnd()()();
  }
}
function AdminComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "div", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 51);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 52);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sale_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", sale_r6.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sale_r6.buyer.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(sale_r6.buyer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sale_r6.product);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+$", sale_r6.amount, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sale_r6.time);
  }
}
var AdminComponent = class _AdminComponent {
  constructor() {
    this.marketplace = inject(MarketplaceService);
    this.chartPeriod = "30d";
    this.projectTab = "all";
    this.dashboardStats = [
      { icon: "\u{1F4B0}", label: "Total Revenue", value: "$12,480", change: 18.2, gradient: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.15))" },
      { icon: "\u{1F4E6}", label: "Products Sold", value: "384", change: 12.5, gradient: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15))" },
      { icon: "\u{1F441}\uFE0F", label: "Total Views", value: "28.4K", change: 22.1, gradient: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(234,88,12,0.15))" },
      { icon: "\u2B50", label: "Avg. Rating", value: "4.8", change: 2.3, gradient: "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))" }
    ];
    this.chartData = [
      { label: "Jan", value: 1200, pct: 40 },
      { label: "Feb", value: 1800, pct: 60 },
      { label: "Mar", value: 1500, pct: 50 },
      { label: "Apr", value: 2200, pct: 73 },
      { label: "May", value: 2800, pct: 93 },
      { label: "Jun", value: 2400, pct: 80 },
      { label: "Jul", value: 3e3, pct: 100 },
      { label: "Aug", value: 2600, pct: 87 },
      { label: "Sep", value: 2100, pct: 70 },
      { label: "Oct", value: 2900, pct: 97 },
      { label: "Nov", value: 2500, pct: 83 },
      { label: "Dec", value: 2700, pct: 90 }
    ];
    this.allProjects = [
      { title: "SuperApp \u2014 Flutter Multi-Service", shortDescription: "Complete Flutter super-app with ride-hailing...", category: "mobile-apps", price: 59, status: "published", createdAt: /* @__PURE__ */ new Date("2024-06-15") },
      { title: "AdminPro \u2014 Angular Dashboard", shortDescription: "Premium Angular 18 admin dashboard...", category: "web-templates", price: 39, status: "published", createdAt: /* @__PURE__ */ new Date("2024-03-10") },
      { title: "ChatBot AI Widget", shortDescription: "Embeddable AI chatbot with GPT-4...", category: "javascript", price: 44, status: "pending", createdAt: /* @__PURE__ */ new Date("2024-12-01") },
      { title: "Flavor UI System", shortDescription: "120+ component design system...", category: "ui-kits", price: 49, status: "draft", createdAt: /* @__PURE__ */ new Date("2025-01-20") }
    ];
    this.recentSales = [
      { buyer: "Alex Morgan", product: "SuperApp Flutter", amount: 59, time: "2 min ago", color: "#6366F1" },
      { buyer: "Sarah Chen", product: "AdminPro Angular (Extended)", amount: 117, time: "15 min ago", color: "#EC4899" },
      { buyer: "James Wilson", product: "ChatBot AI Widget", amount: 44, time: "1 hour ago", color: "#10B981" },
      { buyer: "Maria Lopez", product: "SuperApp Flutter + Reskin", amount: 258, time: "3 hours ago", color: "#F97316" },
      { buyer: "David Kim", product: "Flavor UI System", amount: 49, time: "5 hours ago", color: "#8B5CF6" }
    ];
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
  }
  getProjectGradient(cat) {
    return this.gradients[cat] || "linear-gradient(135deg, #6366F1, #A855F7)";
  }
  getCategoryIcon(cat) {
    return this.icons[cat] || "\u{1F4E6}";
  }
  getFilteredProjects() {
    if (this.projectTab === "all")
      return [...this.allProjects, ...this.marketplace.adminProjects().map((p) => __spreadProps(__spreadValues({}, p), { createdAt: p.createdAt || /* @__PURE__ */ new Date() }))];
    return this.allProjects.filter((p) => p.status === this.projectTab);
  }
  static {
    this.\u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 21, consts: [[1, "admin-hero"], [1, "pm-container"], [1, "hero-row"], [1, "pm-heading-lg"], [1, "pm-text-secondary"], ["routerLink", "/admin/submit", 1, "pm-btn", "pm-btn-primary"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 5v14M5 12h14"], [1, "pm-container", "admin-content"], [1, "stats-grid", "stagger-children"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "chart-card"], [1, "chart-header"], [1, "chart-tabs"], [3, "click"], [1, "chart-body"], [1, "chart-bars"], ["class", "chart-bar", 3, "height", 4, "ngFor", "ngForOf"], [1, "chart-labels"], [4, "ngFor", "ngForOf"], [1, "projects-card"], [1, "card-header"], [1, "header-tabs"], ["class", "project-row", 4, "ngFor", "ngForOf"], ["class", "empty-projects", 4, "ngIf"], [1, "sales-card"], ["class", "sale-row", 4, "ngFor", "ngForOf"], [1, "stat-card"], [1, "stat-card-icon"], [1, "stat-card-info"], [1, "stat-card-value"], [1, "stat-card-label"], [1, "stat-card-change"], [1, "chart-bar"], [1, "bar-tooltip"], [1, "project-row"], [1, "project-thumb"], [1, "project-info"], [1, "project-title"], [1, "project-desc"], [1, "project-status"], [1, "status-badge"], [1, "project-price"], [1, "project-date"], [1, "project-actions"], [1, "pm-btn", "pm-btn-ghost", "pm-btn-sm"], [1, "empty-projects"], ["routerLink", "/admin/submit"], [1, "sale-row"], [1, "sale-user"], [1, "sale-avatar"], [1, "sale-amount"], [1, "sale-time"]], template: function AdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "div")(5, "h1", 3);
        \u0275\u0275text(6, "\u{1F4CA} Author Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Manage your projects, track sales, and monitor performance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "a", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 6);
        \u0275\u0275element(11, "path", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " Submit New Project ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "div", 8)(14, "div", 9);
        \u0275\u0275template(15, AdminComponent_div_15_Template, 10, 11, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 11)(17, "div", 12)(18, "h3");
        \u0275\u0275text(19, "Revenue Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 13)(21, "button", 14);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_21_listener() {
          return ctx.chartPeriod = "7d";
        });
        \u0275\u0275text(22, "7 Days");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 14);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_23_listener() {
          return ctx.chartPeriod = "30d";
        });
        \u0275\u0275text(24, "30 Days");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 14);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_25_listener() {
          return ctx.chartPeriod = "12m";
        });
        \u0275\u0275text(26, "12 Months");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 15)(28, "div", 16);
        \u0275\u0275template(29, AdminComponent_div_29_Template, 4, 5, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 18);
        \u0275\u0275template(31, AdminComponent_span_31_Template, 2, 1, "span", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 20)(33, "div", 21)(34, "h3");
        \u0275\u0275text(35, "My Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 22)(37, "button", 14);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_37_listener() {
          return ctx.projectTab = "all";
        });
        \u0275\u0275text(38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 14);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_39_listener() {
          return ctx.projectTab = "published";
        });
        \u0275\u0275text(40, "Published");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 14);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_41_listener() {
          return ctx.projectTab = "pending";
        });
        \u0275\u0275text(42, "Pending");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 14);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_43_listener() {
          return ctx.projectTab = "draft";
        });
        \u0275\u0275text(44, "Drafts");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(45, AdminComponent_div_45_Template, 20, 15, "div", 23)(46, AdminComponent_div_46_Template, 5, 0, "div", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 25)(48, "h3");
        \u0275\u0275text(49, "Recent Sales");
        \u0275\u0275elementEnd();
        \u0275\u0275template(50, AdminComponent_div_50_Template, 13, 7, "div", 26);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(51, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275property("ngForOf", ctx.dashboardStats);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.chartPeriod === "7d");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.chartPeriod === "30d");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.chartPeriod === "12m");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.chartData);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.chartData);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.projectTab === "all");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("All (", ctx.allProjects.length, ")");
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.projectTab === "published");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.projectTab === "pending");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.projectTab === "draft");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.getFilteredProjects());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.getFilteredProjects().length === 0);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.recentSales);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, TitleCasePipe, DatePipe, RouterLink, HeaderComponent, FooterComponent], styles: ["\n\n.admin-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F8FAFC,\n      #EEF0FF);\n  padding: 32px 0;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.hero-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.hero-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n}\n.hero-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.admin-content[_ngcontent-%COMP%] {\n  padding: 32px 0 64px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-sm);\n}\n.stat-card-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--pm-radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n}\n.stat-card-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--pm-text-primary);\n}\n.stat-card-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.stat-card-change[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 3px 8px;\n  border-radius: var(--pm-radius-full);\n}\n.stat-card-change.positive[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #059669;\n}\n.stat-card-change.negative[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #DC2626;\n}\n.chart-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: var(--pm-shadow-sm);\n}\n.chart-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.chart-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.chart-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.chart-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-full);\n  background: var(--pm-surface);\n  font-family: inherit;\n  font-size: 0.78rem;\n  color: var(--pm-text-secondary);\n  cursor: pointer;\n  transition: all var(--pm-transition-fast);\n}\n.chart-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary);\n  color: white;\n  border-color: var(--ion-color-primary);\n}\n.chart-body[_ngcontent-%COMP%] {\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n}\n.chart-bars[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  padding: 0 4px;\n}\n.chart-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--pm-gradient-primary);\n  border-radius: 6px 6px 0 0;\n  min-height: 8px;\n  position: relative;\n  cursor: pointer;\n  transition: opacity 0.2s ease;\n}\n.chart-bar[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.bar-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -28px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--pm-text-primary);\n  color: white;\n  padding: 3px 8px;\n  border-radius: 4px;\n  font-size: 0.7rem;\n  font-weight: 600;\n  white-space: nowrap;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\n.chart-bar[_ngcontent-%COMP%]:hover   .bar-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.chart-labels[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 8px 4px 0;\n}\n.chart-labels[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  font-size: 0.7rem;\n  color: var(--pm-text-muted);\n}\n.projects-card[_ngcontent-%COMP%], \n.sales-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: var(--pm-shadow-sm);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.header-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.header-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-full);\n  background: var(--pm-surface);\n  font-family: inherit;\n  font-size: 0.78rem;\n  color: var(--pm-text-secondary);\n  cursor: pointer;\n  transition: all var(--pm-transition-fast);\n}\n.header-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary);\n  color: white;\n  border-color: var(--ion-color-primary);\n}\n.project-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 14px 0;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.project-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.project-thumb[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--pm-radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n  flex-shrink: 0;\n}\n.project-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.project-title[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--pm-text-primary);\n}\n.project-desc[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: var(--pm-radius-full);\n  font-size: 0.7rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.status-published[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #059669;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #D97706;\n}\n.status-draft[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.1);\n  color: #64748B;\n}\n.status-rejected[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #DC2626;\n}\n.project-price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.9rem;\n  color: var(--pm-text-primary);\n  width: 60px;\n}\n.project-date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--pm-text-muted);\n  width: 100px;\n}\n.empty-projects[_ngcontent-%COMP%] {\n  padding: 32px;\n  text-align: center;\n  color: var(--pm-text-muted);\n}\n.empty-projects[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.sales-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 1.1rem;\n}\n.sale-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 12px 0;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.sale-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.sale-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n}\n.sale-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n.sale-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: var(--pm-text-primary);\n}\n.sale-user[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.sale-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #10B981;\n}\n.sale-time[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--pm-text-muted);\n}\n@media (max-width: 1024px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .project-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .project-date[_ngcontent-%COMP%], \n   .project-price[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=admin.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src\\app\\pages\\admin\\admin.component.ts", lineNumber: 377 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=chunk-D7MVOHDJ.js.map

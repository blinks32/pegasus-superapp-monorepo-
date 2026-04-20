import {
  AuthService,
  FooterComponent,
  HeaderComponent,
  MarketplaceService
} from "./chunk-VBYU2D6T.js";
import {
  CommonModule,
  DatePipe,
  NgForOf,
  NgIf,
  RouterLink,
  TitleCasePipe,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-FBYZR7PH.js";
import "./chunk-5K356HEJ.js";

// src/app/pages/sell/seller-dashboard.component.ts
var _c0 = (a0) => ["/product", a0];
function SellerDashboardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Sign in Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Sign in to view your submissions.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 5);
    \u0275\u0275text(9, "Sign In");
    \u0275\u0275elementEnd()()();
  }
}
function SellerDashboardComponent_ng_container_2_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275text(2, "\u{1F4ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No submissions yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Start selling by submitting your first product.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 11);
    \u0275\u0275text(8, "Submit a Product \u2192");
    \u0275\u0275elementEnd()();
  }
}
function SellerDashboardComponent_ng_container_2_div_49_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u{1F4E6}");
    \u0275\u0275elementEnd();
  }
}
function SellerDashboardComponent_ng_container_2_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275template(2, SellerDashboardComponent_ng_container_2_div_49_span_2_Template, 2, 0, "span", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 31);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 32)(9, "span", 33);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 34);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 35);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 36)(18, "a", 37);
    \u0275\u0275text(19, "View");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", p_r1.thumbnailUrl ? "url(" + p_r1.thumbnailUrl + ")" : "none")("background-size", "cover")("background-position", "center");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !p_r1.thumbnailUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.shortDescription);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + (p_r1.status || "pending"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 16, p_r1.status || "pending"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", "$", "", p_r1.price, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 18, p_r1.createdAt, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(21, _c0, p_r1.id));
  }
}
function SellerDashboardComponent_ng_container_2_div_50_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2, "Reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r2.rejectionReason);
  }
}
function SellerDashboardComponent_ng_container_2_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "span", 40);
    \u0275\u0275text(3, "Rejected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, SellerDashboardComponent_ng_container_2_div_50_div_6_Template, 5, 1, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r2.rejectionReason);
  }
}
function SellerDashboardComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 6)(2, "div", 7)(3, "div", 8)(4, "div")(5, "h1", 9);
    \u0275\u0275text(6, "\u{1F4CA} My Submissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 10);
    \u0275\u0275text(8, "Track the status of your submitted products");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 12);
    \u0275\u0275element(11, "path", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Submit New Product ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 14)(14, "div", 15)(15, "div", 16)(16, "span", 17);
    \u0275\u0275text(17, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 16)(24, "span", 18);
    \u0275\u0275text(25, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "Pending");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 16)(32, "span", 19);
    \u0275\u0275text(33, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div")(35, "strong");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "Published");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 16)(40, "span", 20);
    \u0275\u0275text(41, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div")(43, "strong");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "Rejected");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(47, "div", 21);
    \u0275\u0275template(48, SellerDashboardComponent_ng_container_2_div_48_Template, 9, 0, "div", 22)(49, SellerDashboardComponent_ng_container_2_div_49_Template, 20, 23, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, SellerDashboardComponent_ng_container_2_div_50_Template, 7, 2, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275textInterpolate(ctx_r2.myProducts.length);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.pendingCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.publishedCount);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.rejectedCount);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.myProducts.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.myProducts);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.rejectedProducts);
  }
}
var SellerDashboardComponent = class _SellerDashboardComponent {
  constructor() {
    this.marketplace = inject(MarketplaceService);
    this.auth = inject(AuthService);
  }
  get myProducts() {
    const user = this.auth.currentUser();
    if (!user)
      return [];
    return this.marketplace.getUserProducts(user.uid);
  }
  get pendingCount() {
    return this.myProducts.filter((p) => p.status === "pending").length;
  }
  get publishedCount() {
    return this.myProducts.filter((p) => !p.status || p.status === "published").length;
  }
  get rejectedCount() {
    return this.myProducts.filter((p) => p.status === "rejected").length;
  }
  get rejectedProducts() {
    return this.myProducts.filter((p) => p.status === "rejected");
  }
  static {
    this.\u0275fac = function SellerDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellerDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellerDashboardComponent, selectors: [["app-seller-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [["class", "pm-container auth-gate", 4, "ngIf"], [4, "ngIf"], [1, "pm-container", "auth-gate"], [1, "auth-card"], [1, "auth-icon"], ["routerLink", "/login", 1, "pm-btn", "pm-btn-primary", "pm-btn-lg"], [1, "dash-hero"], [1, "pm-container"], [1, "hero-row"], [1, "pm-heading-lg"], [1, "pm-text-secondary"], ["routerLink", "/sell", 1, "pm-btn", "pm-btn-primary"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 5v14M5 12h14"], [1, "pm-container", "dash-content"], [1, "stats-row"], [1, "mini-stat"], [1, "ms-icon", 2, "background", "rgba(99,102,241,0.1)", "color", "#6366F1"], [1, "ms-icon", 2, "background", "rgba(245,158,11,0.1)", "color", "#F59E0B"], [1, "ms-icon", 2, "background", "rgba(16,185,129,0.1)", "color", "#10B981"], [1, "ms-icon", 2, "background", "rgba(239,68,68,0.1)", "color", "#EF4444"], [1, "products-card"], ["class", "empty-state", 4, "ngIf"], ["class", "product-row", 4, "ngFor", "ngForOf"], ["class", "rejection-card", 4, "ngFor", "ngForOf"], [1, "empty-state"], [1, "empty-icon"], [1, "product-row"], [1, "product-thumb"], [1, "product-info"], [1, "product-title"], [1, "product-desc"], [1, "product-status"], [1, "status-badge"], [1, "product-price"], [1, "product-date"], [1, "product-actions"], [1, "pm-btn", "pm-btn-ghost", "pm-btn-sm", 3, "routerLink"], [1, "rejection-card"], [1, "rejection-header"], [1, "status-badge", "status-rejected"], ["class", "rejection-reason", 4, "ngIf"], [1, "rejection-reason"], [1, "reason-label"]], template: function SellerDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275template(1, SellerDashboardComponent_div_1_Template, 10, 0, "div", 0)(2, SellerDashboardComponent_ng_container_2_Template, 51, 7, "ng-container", 1);
        \u0275\u0275element(3, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.auth.currentUser());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.auth.currentUser());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, DatePipe, RouterLink, HeaderComponent, FooterComponent], styles: ["\n\n.auth-gate[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 60vh;\n  padding: 40px 20px;\n}\n.auth-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 40px;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-xl);\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-lg);\n  max-width: 480px;\n  width: 100%;\n}\n.auth-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n.auth-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\n.auth-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  margin: 0 0 28px;\n}\n.dash-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F8FAFC,\n      #EEF0FF);\n  padding: 32px 0;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.hero-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.dash-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n}\n.dash-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.dash-content[_ngcontent-%COMP%] {\n  padding: 32px 0 64px;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.mini-stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-sm);\n}\n.ms-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--pm-radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.mini-stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  color: var(--pm-text-primary);\n}\n.mini-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-muted);\n}\n.products-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-sm);\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: var(--pm-text-muted);\n}\n.product-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 0;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.product-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.product-thumb[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: var(--pm-radius-sm);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n  background: var(--pm-surface-muted);\n}\n.product-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.product-title[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: var(--pm-text-primary);\n  margin-bottom: 2px;\n}\n.product-desc[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: var(--pm-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.product-status[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: var(--pm-radius-full);\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.status-published[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10B981;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.status-draft[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366F1;\n}\n.status-rejected[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #EF4444;\n}\n.product-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--pm-text-primary);\n  flex-shrink: 0;\n}\n.product-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--pm-text-muted);\n  flex-shrink: 0;\n}\n.product-actions[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.rejection-card[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 20px;\n  background: rgba(239, 68, 68, 0.03);\n  border: 1px solid rgba(239, 68, 68, 0.15);\n  border-radius: var(--pm-radius-md);\n}\n.rejection-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.reason-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--pm-text-muted);\n}\n.rejection-reason[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.9rem;\n  color: var(--pm-text-secondary);\n  line-height: 1.5;\n}\n@media (max-width: 768px) {\n  .stats-row[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .hero-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .product-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n  .product-price[_ngcontent-%COMP%], \n   .product-date[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=seller-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellerDashboardComponent, { className: "SellerDashboardComponent", filePath: "src\\app\\pages\\sell\\seller-dashboard.component.ts", lineNumber: 219 });
})();
export {
  SellerDashboardComponent
};
//# sourceMappingURL=chunk-VISFVVDW.js.map

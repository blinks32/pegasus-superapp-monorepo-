import {
  ProductCardComponent
} from "./chunk-DLMPX2ZO.js";
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
  NgForOf,
  NgIf,
  RouterLink,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-HWE2I25U.js";

// src/app/pages/home/home.component.ts
var _c0 = (a0) => ({ q: a0 });
function HomeComponent_a_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(2, _c0, tag_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r1);
  }
}
function HomeComponent_div_27_app_product_card_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 24);
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275property("product", product_r2);
  }
}
function HomeComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, HomeComponent_div_27_app_product_card_1_Template, 1, 1, "app-product-card", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.marketplace.products().slice(0, 12));
  }
}
function HomeComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "h3");
    \u0275\u0275text(2, "No products found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Wait for new products to be uploaded.");
    \u0275\u0275elementEnd()();
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this.marketplace = inject(MarketplaceService);
    this.searchQuery = "";
    this.popularTags = ["Unity", "Ionic", "2D Game", "App Template"];
  }
  goSearch() {
    if (this.searchQuery.trim()) {
      window.location.href = "/browse?q=" + encodeURIComponent(this.searchQuery);
    }
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 4, consts: [[1, "hero"], [1, "pm-container", "hero-content"], [1, "hero-title", "fade-in-up"], [1, "hero-gradient-text"], [1, "hero-subtitle", "fade-in-up"], [1, "pm-search-bar", "hero-search", "fade-in-up"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94A3B8", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.3-4.3"], ["type", "text", "placeholder", "Search templates, scripts, plugins...", 3, "ngModelChange", "keyup.enter", "ngModel"], [3, "click"], [1, "hero-tags", "fade-in-up"], [1, "tag-label"], ["routerLink", "/browse", "class", "hero-tag", 3, "queryParams", 4, "ngFor", "ngForOf"], [1, "pm-section"], [1, "pm-container"], [1, "section-header"], [1, "pm-heading-lg"], ["routerLink", "/browse", 1, "pm-btn", "pm-btn-outline", "pm-btn-sm"], ["class", "products-grid stagger-children", 4, "ngIf"], ["class", "empty-state", "style", "text-align: center; padding: 40px; background: var(--pm-surface-muted); border-radius: var(--pm-radius-md);", 4, "ngIf"], ["routerLink", "/browse", 1, "hero-tag", 3, "queryParams"], [1, "products-grid", "stagger-children"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"], [1, "empty-state", 2, "text-align", "center", "padding", "40px", "background", "var(--pm-surface-muted)", "border-radius", "var(--pm-radius-md)"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "section", 0)(2, "div", 1)(3, "h1", 2)(4, "span", 3);
        \u0275\u0275text(5, "selljustcode");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, " Discover premium Unity Games and Ionic Apps. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(9, "svg", 6);
        \u0275\u0275element(10, "circle", 7)(11, "path", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function HomeComponent_Template_input_keyup_enter_12_listener() {
          return ctx.goSearch();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 10);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_13_listener() {
          return ctx.goSearch();
        });
        \u0275\u0275text(14, "Search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 11)(16, "span", 12);
        \u0275\u0275text(17, "Popular:");
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, HomeComponent_a_18_Template, 2, 4, "a", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "section", 14)(20, "div", 15)(21, "div", 16)(22, "div")(23, "h2", 17);
        \u0275\u0275text(24, "Latest Products");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "a", 18);
        \u0275\u0275text(26, "View All \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(27, HomeComponent_div_27_Template, 2, 1, "div", 19)(28, HomeComponent_div_28_Template, 5, 0, "div", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(29, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.popularTags);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.marketplace.products().length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.marketplace.products().length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, HeaderComponent, FooterComponent, ProductCardComponent], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 40px 0 30px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #F0F0FF 100%);\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  line-height: 1.1;\n  color: var(--pm-text-primary);\n  margin: 0 0 10px;\n  letter-spacing: -0.03em;\n}\n.hero-gradient-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366F1 0%,\n      #A855F7 40%,\n      #EC4899 80%,\n      #F97316 100%);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: gradientShift 4s ease infinite;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--pm-text-secondary);\n  max-width: 560px;\n  margin: 0 0 20px;\n  line-height: 1.6;\n}\n.hero-search[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.hero-tags[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.tag-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-muted);\n  font-weight: 500;\n}\n.hero-tag[_ngcontent-%COMP%] {\n  padding: 4px 14px;\n  background: rgba(99, 102, 241, 0.06);\n  border: 1px solid rgba(99, 102, 241, 0.12);\n  border-radius: var(--pm-radius-full);\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--pm-text-secondary);\n  text-decoration: none;\n  transition: all var(--pm-transition-fast);\n}\n.hero-tag[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--ion-color-primary);\n  border-color: var(--ion-color-primary);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n@media (max-width: 1024px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 16px;\n  }\n  .categories-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 177 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-KLRHYUXJ.js.map

import {
  ProductCardComponent
} from "./chunk-OGALUAFF.js";
import {
  SeoService
} from "./chunk-JZOLBTDT.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-HAEO2BL6.js";
import {
  FooterComponent,
  HeaderComponent,
  MarketplaceService
} from "./chunk-BQ6R7HPJ.js";
import {
  CommonModule,
  NgForOf,
  RouterLink,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-PLEPB4GM.js";

// src/app/pages/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ({ q: a0 });
var _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8];
function HomeComponent_a_19_Template(rf, ctx) {
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
function HomeComponent_Conditional_28_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementStart(2, "div", 24);
    \u0275\u0275element(3, "div", 25)(4, "div", 26)(5, "div", 27)(6, "div", 28);
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_28_For_2_Template, 7, 0, "div", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function HomeComponent_Conditional_29_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 29);
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275property("product", product_r2);
  }
}
function HomeComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, HomeComponent_Conditional_29_For_2_Template, 1, 1, "app-product-card", 29, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.marketplace.products().slice(0, 12));
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this.marketplace = inject(MarketplaceService);
    this.seo = inject(SeoService);
    this.searchQuery = "";
    this.popularTags = ["SaaS Boilerplate", "Super App", "Ride Booking", "PvP Multiplayer", "EdTech LMS"];
  }
  ngOnInit() {
    this.seo.updateTitle("");
    this.seo.updateDescription("selljustcode is the leading marketplace for complete business solutions, B2B ride booking systems, parcel delivery super apps, PvP games, SaaS boilerplates, and EdTech LMS curriculums tested by Legends of Learning.");
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 3, consts: [[1, "page-enter"], [1, "hero"], [1, "pm-container", "hero-content"], [1, "hero-title", "fade-in-up"], [1, "hero-gradient-text"], [1, "hero-subtitle", "fade-in-up"], [1, "pm-search-bar", "hero-search", "fade-in-up"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#94A3B8", "stroke-width", "2"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.3-4.3"], ["type", "text", "placeholder", "Search templates, scripts, plugins...", 3, "ngModelChange", "keyup.enter", "ngModel"], [3, "click"], [1, "hero-tags", "fade-in-up"], [1, "tag-label"], ["routerLink", "/browse", "class", "hero-tag", 3, "queryParams", 4, "ngFor", "ngForOf"], [1, "pm-section"], [1, "pm-container"], [1, "section-header"], [1, "pm-heading-lg"], ["routerLink", "/browse", 1, "pm-btn", "pm-btn-outline", "pm-btn-sm"], [1, "products-grid", "stagger-children"], ["routerLink", "/browse", 1, "hero-tag", 3, "queryParams"], [1, "product-skeleton", 2, "background", "var(--pm-surface)", "border-radius", "var(--pm-radius-lg)", "height", "330px", "animation", "pulse 1.5s infinite"], [2, "height", "160px", "background", "var(--pm-surface-muted)", "width", "100%"], [2, "padding", "16px"], [2, "height", "20px", "background", "var(--pm-surface-muted)", "width", "70%", "margin-bottom", "12px"], [2, "height", "14px", "background", "var(--pm-surface-muted)", "width", "100%", "margin-bottom", "8px"], [2, "height", "14px", "background", "var(--pm-surface-muted)", "width", "80%", "margin-bottom", "20px"], [2, "height", "24px", "background", "var(--pm-surface-muted)", "width", "40%"], [3, "product"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "div", 0)(2, "section", 1)(3, "div", 2)(4, "h1", 3)(5, "span", 4);
        \u0275\u0275text(6, "selljustcode");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8, " Buy and sell complete business solutions, B2B super apps, SaaS boilerplates & EdTech LMS. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(10, "svg", 7);
        \u0275\u0275element(11, "circle", 8)(12, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function HomeComponent_Template_input_keyup_enter_13_listener() {
          return ctx.goSearch();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 11);
        \u0275\u0275listener("click", function HomeComponent_Template_button_click_14_listener() {
          return ctx.goSearch();
        });
        \u0275\u0275text(15, "Search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 12)(17, "span", 13);
        \u0275\u0275text(18, "Popular:");
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, HomeComponent_a_19_Template, 2, 4, "a", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "section", 15)(21, "div", 16)(22, "div", 17)(23, "div")(24, "h2", 18);
        \u0275\u0275text(25, "Latest Products");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "a", 19);
        \u0275\u0275text(27, "View All \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, HomeComponent_Conditional_28_Template, 3, 1, "div", 20)(29, HomeComponent_Conditional_29_Template, 3, 0, "div", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(30, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.popularTags);
        \u0275\u0275advance(9);
        \u0275\u0275conditional(!ctx.marketplace.initialLoadComplete() ? 28 : 29);
      }
    }, dependencies: [CommonModule, NgForOf, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, HeaderComponent, FooterComponent, ProductCardComponent], styles: ["\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 40px 0 30px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #F0F0FF 100%);\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  line-height: 1.1;\n  color: var(--pm-text-primary);\n  margin: 0 0 10px;\n  letter-spacing: -0.03em;\n}\n.hero-gradient-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366F1 0%,\n      #A855F7 40%,\n      #EC4899 80%,\n      #F97316 100%);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: gradientShift 4s ease infinite;\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--pm-text-secondary);\n  max-width: 560px;\n  margin: 0 0 20px;\n  line-height: 1.6;\n}\n.hero-search[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.hero-tags[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.tag-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-muted);\n  font-weight: 500;\n}\n.hero-tag[_ngcontent-%COMP%] {\n  padding: 4px 14px;\n  background: rgba(99, 102, 241, 0.06);\n  border: 1px solid rgba(99, 102, 241, 0.12);\n  border-radius: var(--pm-radius-full);\n  font-size: 0.8rem;\n  font-weight: 500;\n  color: var(--pm-text-secondary);\n  text-decoration: none;\n  transition: all var(--pm-transition-fast);\n}\n.hero-tag[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--ion-color-primary);\n  border-color: var(--ion-color-primary);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n@media (max-width: 1024px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 16px;\n  }\n  .categories-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 194 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-774G3KKE.js.map

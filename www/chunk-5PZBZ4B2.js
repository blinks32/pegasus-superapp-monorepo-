import {
  ProductCardComponent
} from "./chunk-MRL6F657.js";
import {
  SeoService
} from "./chunk-WXC7DDYQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-NJH3IML7.js";
import {
  FooterComponent,
  HeaderComponent,
  MarketplaceService
} from "./chunk-BZ7Z3MH7.js";
import {
  ActivatedRoute,
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-A3WHKVNR.js";

// src/app/pages/browse/browse.component.ts
var _c0 = () => [4, 3, 2, 1];
var _c1 = () => [1, 2, 3, 4, 5, 6];
function BrowseComponent_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.marketplace.filteredProducts().length), " items found ");
  }
}
function BrowseComponent_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function BrowseComponent_button_24_Template_button_click_0_listener() {
      const cat_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectCategory(cat_r3.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.selectedCategory === cat_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", cat_r3.icon, " ", cat_r3.label, " ");
  }
}
function BrowseComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function BrowseComponent_button_37_Template_button_click_0_listener() {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setMinRating(r_r5));
    });
    \u0275\u0275elementStart(1, "span", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "& Up");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.minRating === r_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", "\u2605".repeat(r_r5), "", "\u2606".repeat(5 - r_r5), "");
  }
}
function BrowseComponent_Conditional_74_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "div", 49);
    \u0275\u0275elementStart(2, "div", 50);
    \u0275\u0275element(3, "div", 51)(4, "div", 52)(5, "div", 53);
    \u0275\u0275elementEnd()();
  }
}
function BrowseComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275repeaterCreate(1, BrowseComponent_Conditional_74_For_2_Template, 6, 0, "div", 48, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("list-view", ctx_r0.viewMode === "list");
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(2, _c1));
  }
}
function BrowseComponent_Conditional_75_app_product_card_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 55);
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    \u0275\u0275property("product", product_r6);
  }
}
function BrowseComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275template(1, BrowseComponent_Conditional_75_app_product_card_1_Template, 1, 1, "app-product-card", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("list-view", ctx_r0.viewMode === "list");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.marketplace.filteredProducts());
  }
}
var BrowseComponent = class _BrowseComponent {
  constructor() {
    this.marketplace = inject(MarketplaceService);
    this.route = inject(ActivatedRoute);
    this.seo = inject(SeoService);
    this.searchQuery = "";
    this.sortBy = "bestselling";
    this.viewMode = "grid";
    this.sidebarOpen = false;
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params["category"])
        this.selectedCategory = params["category"];
      if (params["q"])
        this.searchQuery = params["q"];
      if (params["sort"])
        this.sortBy = params["sort"];
      this.applyFilters();
      this.seo.updateTitle(this.getPageTitle());
      this.seo.updateDescription(`Browse ${this.getPageTitle()} on selljustcode. Find premium SaaS Boilerplates, Complete Business Systems, EdTech LMS, and PvP Multiplayer Games.`);
    });
  }
  getPageTitle() {
    if (this.selectedCategory) {
      const cat = this.marketplace.categories.find((c) => c.id === this.selectedCategory);
      return cat ? cat.label : "Browse Products";
    }
    if (this.searchQuery)
      return `Search: "${this.searchQuery}"`;
    return "Browse All Products";
  }
  selectCategory(cat) {
    this.selectedCategory = cat;
    this.applyFilters();
  }
  setMinRating(r) {
    this.minRating = this.minRating === r ? void 0 : r;
    this.applyFilters();
  }
  applyFilters() {
    this.marketplace.updateFilters({
      query: this.searchQuery,
      category: this.selectedCategory,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      minRating: this.minRating,
      sortBy: this.sortBy
    });
  }
  clearFilters() {
    this.searchQuery = "";
    this.selectedCategory = void 0;
    this.minPrice = void 0;
    this.maxPrice = void 0;
    this.minRating = void 0;
    this.sortBy = "bestselling";
    this.applyFilters();
  }
  static {
    this.\u0275fac = function BrowseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BrowseComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrowseComponent, selectors: [["app-browse"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 77, vars: 18, consts: [[1, "page-enter"], [1, "browse-hero"], [1, "pm-container"], [1, "pm-heading-lg"], ["class", "pm-text-secondary", 4, "ngIf"], [1, "pm-container", "browse-layout"], [1, "browse-sidebar"], [1, "sidebar-header"], [1, "sidebar-close", 3, "click"], [1, "filter-group"], ["type", "text", "placeholder", "Search products...", 1, "filter-input", 3, "ngModelChange", "input", "ngModel"], [1, "filter-chips"], [1, "filter-chip", 3, "click"], ["class", "filter-chip", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "price-inputs"], ["type", "number", "placeholder", "Min", 1, "filter-input", 3, "ngModelChange", "input", "ngModel"], ["type", "number", "placeholder", "Max", 1, "filter-input", 3, "ngModelChange", "input", "ngModel"], [1, "rating-filter"], ["class", "rating-option", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "pm-btn", "pm-btn-ghost", 2, "width", "100%", 3, "click"], [1, "browse-main"], [1, "sort-bar"], [1, "filter-toggle", "pm-btn", "pm-btn-outline", "pm-btn-sm", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"], [1, "sort-options"], [1, "sort-select", 3, "ngModelChange", "change", "ngModel"], ["value", "bestselling"], ["value", "newest"], ["value", "price-low"], ["value", "price-high"], ["value", "rating"], ["value", "trending"], [1, "view-toggle"], [3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "currentColor"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "3", "y", "4", "width", "18", "height", "4", "rx", "1"], ["x", "3", "y", "10", "width", "18", "height", "4", "rx", "1"], ["x", "3", "y", "16", "width", "18", "height", "4", "rx", "1"], [1, "products-grid", 3, "list-view"], [1, "pm-text-secondary"], [1, "rating-option", 3, "click"], [1, "stars-sm"], [1, "products-grid"], [1, "product-skeleton", 2, "background", "var(--pm-surface)", "border-radius", "var(--pm-radius-lg)", "height", "330px", "animation", "pulse 1.5s infinite"], [2, "height", "160px", "background", "var(--pm-surface-muted)", "width", "100%"], [2, "padding", "16px"], [2, "height", "20px", "background", "var(--pm-surface-muted)", "width", "70%", "margin-bottom", "12px"], [2, "height", "14px", "background", "var(--pm-surface-muted)", "width", "100%", "margin-bottom", "8px"], [2, "height", "14px", "background", "var(--pm-surface-muted)", "width", "80%", "margin-bottom", "20px"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"]], template: function BrowseComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "div", 0)(2, "section", 1)(3, "div", 2)(4, "h1", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, BrowseComponent_p_6_Template, 3, 3, "p", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "aside", 6)(9, "div", 7)(10, "h3");
        \u0275\u0275text(11, "Filters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 8);
        \u0275\u0275listener("click", function BrowseComponent_Template_button_click_12_listener() {
          return ctx.sidebarOpen = false;
        });
        \u0275\u0275text(13, "\u2715");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 9)(15, "label");
        \u0275\u0275text(16, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function BrowseComponent_Template_input_ngModelChange_17_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("input", function BrowseComponent_Template_input_input_17_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 9)(19, "label");
        \u0275\u0275text(20, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 11)(22, "button", 12);
        \u0275\u0275listener("click", function BrowseComponent_Template_button_click_22_listener() {
          return ctx.selectCategory(void 0);
        });
        \u0275\u0275text(23, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, BrowseComponent_button_24_Template, 2, 4, "button", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 9)(26, "label");
        \u0275\u0275text(27, "Price Range");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 14)(29, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function BrowseComponent_Template_input_ngModelChange_29_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.minPrice, $event) || (ctx.minPrice = $event);
          return $event;
        });
        \u0275\u0275listener("input", function BrowseComponent_Template_input_input_29_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span");
        \u0275\u0275text(31, "\u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "input", 16);
        \u0275\u0275twoWayListener("ngModelChange", function BrowseComponent_Template_input_ngModelChange_32_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.maxPrice, $event) || (ctx.maxPrice = $event);
          return $event;
        });
        \u0275\u0275listener("input", function BrowseComponent_Template_input_input_32_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(33, "div", 9)(34, "label");
        \u0275\u0275text(35, "Minimum Rating");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 17);
        \u0275\u0275template(37, BrowseComponent_button_37_Template, 5, 4, "button", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "button", 19);
        \u0275\u0275listener("click", function BrowseComponent_Template_button_click_38_listener() {
          return ctx.clearFilters();
        });
        \u0275\u0275text(39, "Clear All Filters");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "main", 20)(41, "div", 21)(42, "button", 22);
        \u0275\u0275listener("click", function BrowseComponent_Template_button_click_42_listener() {
          return ctx.sidebarOpen = !ctx.sidebarOpen;
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(43, "svg", 23);
        \u0275\u0275element(44, "path", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, " Filters ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(46, "div", 25)(47, "label");
        \u0275\u0275text(48, "Sort by:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "select", 26);
        \u0275\u0275twoWayListener("ngModelChange", function BrowseComponent_Template_select_ngModelChange_49_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
          return $event;
        });
        \u0275\u0275listener("change", function BrowseComponent_Template_select_change_49_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(50, "option", 27);
        \u0275\u0275text(51, "Best Selling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "option", 28);
        \u0275\u0275text(53, "Newest");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "option", 29);
        \u0275\u0275text(55, "Price: Low to High");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "option", 30);
        \u0275\u0275text(57, "Price: High to Low");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "option", 31);
        \u0275\u0275text(59, "Highest Rated");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "option", 32);
        \u0275\u0275text(61, "Trending");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(62, "div", 33)(63, "button", 34);
        \u0275\u0275listener("click", function BrowseComponent_Template_button_click_63_listener() {
          return ctx.viewMode = "grid";
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(64, "svg", 35);
        \u0275\u0275element(65, "rect", 36)(66, "rect", 37)(67, "rect", 38)(68, "rect", 39);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(69, "button", 34);
        \u0275\u0275listener("click", function BrowseComponent_Template_button_click_69_listener() {
          return ctx.viewMode = "list";
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(70, "svg", 35);
        \u0275\u0275element(71, "rect", 40)(72, "rect", 41)(73, "rect", 42);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(74, BrowseComponent_Conditional_74_Template, 3, 3, "div", 43)(75, BrowseComponent_Conditional_75_Template, 2, 3, "div", 43);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(76, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.getPageTitle());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.marketplace.initialLoadComplete());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("mobile-open", ctx.sidebarOpen);
        \u0275\u0275advance(9);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("active", !ctx.selectedCategory);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.marketplace.categories);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.minPrice);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.maxPrice);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(17, _c0));
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
        \u0275\u0275advance(14);
        \u0275\u0275classProp("active", ctx.viewMode === "grid");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.viewMode === "list");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.marketplace.initialLoadComplete() ? 74 : 75);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, HeaderComponent, FooterComponent, ProductCardComponent], styles: ["\n\n.browse-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F8FAFC,\n      #EEF0FF);\n  padding: 32px 0;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.browse-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n}\n.browse-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.browse-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding-top: 32px;\n  padding-bottom: 64px;\n}\n.browse-sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  flex-shrink: 0;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.sidebar-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.sidebar-close[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  color: var(--pm-text-muted);\n}\n.filter-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--pm-text-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n.filter-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-sm);\n  font-family: inherit;\n  font-size: 0.85rem;\n  background: var(--pm-surface);\n  color: var(--pm-text-primary);\n  outline: none;\n  transition: border-color var(--pm-transition-fast);\n}\n.filter-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--ion-color-primary);\n}\n.filter-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.filter-chip[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-full);\n  font-size: 0.78rem;\n  font-weight: 500;\n  background: var(--pm-surface);\n  color: var(--pm-text-secondary);\n  cursor: pointer;\n  transition: all var(--pm-transition-fast);\n  font-family: inherit;\n}\n.filter-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-primary);\n  color: var(--ion-color-primary);\n}\n.filter-chip.active[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary);\n  color: white;\n  border-color: var(--ion-color-primary);\n}\n.price-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.price-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.rating-filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.rating-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border: 1px solid var(--pm-border-light);\n  border-radius: var(--pm-radius-sm);\n  background: var(--pm-surface);\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-family: inherit;\n  color: var(--pm-text-secondary);\n  transition: all var(--pm-transition-fast);\n}\n.rating-option[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-primary);\n}\n.rating-option.active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.05);\n}\n.stars-sm[_ngcontent-%COMP%] {\n  color: #F59E0B;\n}\n.browse-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sort-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n  padding: 12px 16px;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-md);\n  border: 1px solid var(--pm-border-light);\n}\n.filter-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n.sort-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n}\n.sort-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-muted);\n  white-space: nowrap;\n}\n.sort-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-sm);\n  font-family: inherit;\n  font-size: 0.85rem;\n  background: var(--pm-surface);\n  color: var(--pm-text-primary);\n  outline: none;\n  cursor: pointer;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--pm-border-light);\n  border-radius: var(--pm-radius-sm);\n  background: var(--pm-surface);\n  color: var(--pm-text-muted);\n  cursor: pointer;\n  transition: all var(--pm-transition-fast);\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  border-color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.05);\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.products-grid.list-view[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  display: block;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-muted);\n  margin: 0 0 24px;\n}\n@media (max-width: 1024px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .browse-sidebar[_ngcontent-%COMP%] {\n    display: none;\n    position: fixed;\n    top: 64px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    background: var(--pm-surface);\n    z-index: 1001;\n    padding: 24px;\n    overflow-y: auto;\n  }\n  .browse-sidebar.mobile-open[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .sidebar-close[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .filter-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .sort-bar[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .sort-options[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n    justify-content: space-between;\n    flex-wrap: wrap;\n  }\n  .sort-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .sort-select[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n}\n@media (max-width: 480px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=browse.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrowseComponent, { className: "BrowseComponent", filePath: "src\\app\\pages\\browse\\browse.component.ts", lineNumber: 365 });
})();
export {
  BrowseComponent
};
//# sourceMappingURL=chunk-5PZBZ4B2.js.map

import {
  ProductCardComponent
} from "./chunk-XLCLV7J3.js";
import {
  DefaultValueAccessor,
  FooterComponent,
  FormsModule,
  HeaderComponent,
  MarketplaceService,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-ZJ43XY25.js";
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
} from "./chunk-RK6BMTR4.js";

// src/app/pages/browse/browse.component.ts
var _c0 = () => [4, 3, 2, 1];
function BrowseComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function BrowseComponent_button_25_Template_button_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCategory(cat_r2.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedCategory === cat_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", cat_r2.icon, " ", cat_r2.label, " ");
  }
}
function BrowseComponent_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function BrowseComponent_button_38_Template_button_click_0_listener() {
      const r_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setMinRating(r_r5));
    });
    \u0275\u0275elementStart(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "& Up");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.minRating === r_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", "\u2605".repeat(r_r5), "", "\u2606".repeat(5 - r_r5), "");
  }
}
function BrowseComponent_div_75_app_product_card_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 48);
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    \u0275\u0275property("product", product_r6);
  }
}
function BrowseComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, BrowseComponent_div_75_app_product_card_1_Template, 1, 1, "app-product-card", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("list-view", ctx_r2.viewMode === "list");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.marketplace.filteredProducts());
  }
}
function BrowseComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "span", 50);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No products found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try adjusting your filters or search terms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 51);
    \u0275\u0275listener("click", function BrowseComponent_div_76_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(8, "Clear Filters");
    \u0275\u0275elementEnd()();
  }
}
var BrowseComponent = class _BrowseComponent {
  constructor() {
    this.marketplace = inject(MarketplaceService);
    this.route = inject(ActivatedRoute);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrowseComponent, selectors: [["app-browse"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 78, vars: 21, consts: [[1, "browse-hero"], [1, "pm-container"], [1, "pm-heading-lg"], [1, "pm-text-secondary"], [1, "pm-container", "browse-layout"], [1, "browse-sidebar"], [1, "sidebar-header"], [1, "sidebar-close", 3, "click"], [1, "filter-group"], ["type", "text", "placeholder", "Search products...", 1, "filter-input", 3, "ngModelChange", "input", "ngModel"], [1, "filter-chips"], [1, "filter-chip", 3, "click"], ["class", "filter-chip", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "price-inputs"], ["type", "number", "placeholder", "Min", 1, "filter-input", 3, "ngModelChange", "input", "ngModel"], ["type", "number", "placeholder", "Max", 1, "filter-input", 3, "ngModelChange", "input", "ngModel"], [1, "rating-filter"], ["class", "rating-option", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "pm-btn", "pm-btn-ghost", 2, "width", "100%", 3, "click"], [1, "browse-main"], [1, "sort-bar"], [1, "filter-toggle", "pm-btn", "pm-btn-outline", "pm-btn-sm", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"], [1, "sort-options"], [1, "sort-select", 3, "ngModelChange", "change", "ngModel"], ["value", "bestselling"], ["value", "newest"], ["value", "price-low"], ["value", "price-high"], ["value", "rating"], ["value", "trending"], [1, "view-toggle"], [3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "currentColor"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "3", "y", "4", "width", "18", "height", "4", "rx", "1"], ["x", "3", "y", "10", "width", "18", "height", "4", "rx", "1"], ["x", "3", "y", "16", "width", "18", "height", "4", "rx", "1"], ["class", "products-grid", 3, "list-view", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "rating-option", 3, "click"], [1, "stars-sm"], [1, "products-grid"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"], [1, "empty-state"], [1, "empty-icon"], [1, "pm-btn", "pm-btn-primary", 3, "click"]], template: function BrowseComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "section", 0)(2, "div", 1)(3, "h1", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "number");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 4)(9, "aside", 5)(10, "div", 6)(11, "h3");
        \u0275\u0275text(12, "Filters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 7);
        \u0275\u0275listener("click", function BrowseComponent_Template_button_click_13_listener() {
          return ctx.sidebarOpen = false;
        });
        \u0275\u0275text(14, "\u2715");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 8)(16, "label");
        \u0275\u0275text(17, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 9);
        \u0275\u0275twoWayListener("ngModelChange", function BrowseComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return $event;
        });
        \u0275\u0275listener("input", function BrowseComponent_Template_input_input_18_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 8)(20, "label");
        \u0275\u0275text(21, "Category");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 10)(23, "button", 11);
        \u0275\u0275listener("click", function BrowseComponent_Template_button_click_23_listener() {
          return ctx.selectCategory(void 0);
        });
        \u0275\u0275text(24, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, BrowseComponent_button_25_Template, 2, 4, "button", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 8)(27, "label");
        \u0275\u0275text(28, "Price Range");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 13)(30, "input", 14);
        \u0275\u0275twoWayListener("ngModelChange", function BrowseComponent_Template_input_ngModelChange_30_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.minPrice, $event) || (ctx.minPrice = $event);
          return $event;
        });
        \u0275\u0275listener("input", function BrowseComponent_Template_input_input_30_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span");
        \u0275\u0275text(32, "\u2014");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function BrowseComponent_Template_input_ngModelChange_33_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.maxPrice, $event) || (ctx.maxPrice = $event);
          return $event;
        });
        \u0275\u0275listener("input", function BrowseComponent_Template_input_input_33_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 8)(35, "label");
        \u0275\u0275text(36, "Minimum Rating");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 16);
        \u0275\u0275template(38, BrowseComponent_button_38_Template, 5, 4, "button", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "button", 18);
        \u0275\u0275listener("click", function BrowseComponent_Template_button_click_39_listener() {
          return ctx.clearFilters();
        });
        \u0275\u0275text(40, "Clear All Filters");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "main", 19)(42, "div", 20)(43, "button", 21);
        \u0275\u0275listener("click", function BrowseComponent_Template_button_click_43_listener() {
          return ctx.sidebarOpen = !ctx.sidebarOpen;
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(44, "svg", 22);
        \u0275\u0275element(45, "path", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, " Filters ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(47, "div", 24)(48, "label");
        \u0275\u0275text(49, "Sort by:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "select", 25);
        \u0275\u0275twoWayListener("ngModelChange", function BrowseComponent_Template_select_ngModelChange_50_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.sortBy, $event) || (ctx.sortBy = $event);
          return $event;
        });
        \u0275\u0275listener("change", function BrowseComponent_Template_select_change_50_listener() {
          return ctx.applyFilters();
        });
        \u0275\u0275elementStart(51, "option", 26);
        \u0275\u0275text(52, "Best Selling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "option", 27);
        \u0275\u0275text(54, "Newest");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "option", 28);
        \u0275\u0275text(56, "Price: Low to High");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "option", 29);
        \u0275\u0275text(58, "Price: High to Low");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "option", 30);
        \u0275\u0275text(60, "Highest Rated");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "option", 31);
        \u0275\u0275text(62, "Trending");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(63, "div", 32)(64, "button", 33);
        \u0275\u0275listener("click", function BrowseComponent_Template_button_click_64_listener() {
          return ctx.viewMode = "grid";
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(65, "svg", 34);
        \u0275\u0275element(66, "rect", 35)(67, "rect", 36)(68, "rect", 37)(69, "rect", 38);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(70, "button", 33);
        \u0275\u0275listener("click", function BrowseComponent_Template_button_click_70_listener() {
          return ctx.viewMode = "list";
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(71, "svg", 34);
        \u0275\u0275element(72, "rect", 39)(73, "rect", 40)(74, "rect", 41);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(75, BrowseComponent_div_75_Template, 2, 3, "div", 42)(76, BrowseComponent_div_76_Template, 9, 0, "div", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(77, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.getPageTitle());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 18, ctx.marketplace.filteredProducts().length), " items found");
        \u0275\u0275advance(3);
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
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(20, _c0));
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.sortBy);
        \u0275\u0275advance(14);
        \u0275\u0275classProp("active", ctx.viewMode === "grid");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("active", ctx.viewMode === "list");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.marketplace.filteredProducts().length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.marketplace.filteredProducts().length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, HeaderComponent, FooterComponent, ProductCardComponent], styles: ["\n\n.browse-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F8FAFC,\n      #EEF0FF);\n  padding: 32px 0;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.browse-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n}\n.browse-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.browse-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding-top: 32px;\n  padding-bottom: 64px;\n}\n.browse-sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  flex-shrink: 0;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.sidebar-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.sidebar-close[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  color: var(--pm-text-muted);\n}\n.filter-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--pm-text-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n.filter-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-sm);\n  font-family: inherit;\n  font-size: 0.85rem;\n  background: var(--pm-surface);\n  color: var(--pm-text-primary);\n  outline: none;\n  transition: border-color var(--pm-transition-fast);\n}\n.filter-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--ion-color-primary);\n}\n.filter-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.filter-chip[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-full);\n  font-size: 0.78rem;\n  font-weight: 500;\n  background: var(--pm-surface);\n  color: var(--pm-text-secondary);\n  cursor: pointer;\n  transition: all var(--pm-transition-fast);\n  font-family: inherit;\n}\n.filter-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-primary);\n  color: var(--ion-color-primary);\n}\n.filter-chip.active[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary);\n  color: white;\n  border-color: var(--ion-color-primary);\n}\n.price-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.price-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.rating-filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.rating-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border: 1px solid var(--pm-border-light);\n  border-radius: var(--pm-radius-sm);\n  background: var(--pm-surface);\n  cursor: pointer;\n  font-size: 0.8rem;\n  font-family: inherit;\n  color: var(--pm-text-secondary);\n  transition: all var(--pm-transition-fast);\n}\n.rating-option[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-primary);\n}\n.rating-option.active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.05);\n}\n.stars-sm[_ngcontent-%COMP%] {\n  color: #F59E0B;\n}\n.browse-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sort-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 24px;\n  padding: 12px 16px;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-md);\n  border: 1px solid var(--pm-border-light);\n}\n.filter-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n.sort-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n}\n.sort-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-muted);\n  white-space: nowrap;\n}\n.sort-select[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-sm);\n  font-family: inherit;\n  font-size: 0.85rem;\n  background: var(--pm-surface);\n  color: var(--pm-text-primary);\n  outline: none;\n  cursor: pointer;\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--pm-border-light);\n  border-radius: var(--pm-radius-sm);\n  background: var(--pm-surface);\n  color: var(--pm-text-muted);\n  cursor: pointer;\n  transition: all var(--pm-transition-fast);\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  border-color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.05);\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.products-grid.list-view[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  display: block;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-muted);\n  margin: 0 0 24px;\n}\n@media (max-width: 1024px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .browse-sidebar[_ngcontent-%COMP%] {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    background: var(--pm-surface);\n    z-index: 1001;\n    padding: 24px;\n    overflow-y: auto;\n  }\n  .browse-sidebar.mobile-open[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .sidebar-close[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .filter-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 16px;\n  }\n}\n@media (max-width: 480px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=browse.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrowseComponent, { className: "BrowseComponent", filePath: "src\\app\\pages\\browse\\browse.component.ts", lineNumber: 343 });
})();
export {
  BrowseComponent
};
//# sourceMappingURL=chunk-O5R3JTYB.js.map

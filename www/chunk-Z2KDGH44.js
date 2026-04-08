import {
  ProductCardComponent
} from "./chunk-GUICZWTY.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FooterComponent,
  FormsModule,
  HeaderComponent,
  MarketplaceService,
  NgControlStatus,
  NgModel
} from "./chunk-LI3AJTG3.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgForOf,
  NgIf,
  RouterLink,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-3B7JSY2Q.js";

// src/app/pages/product-detail/product-detail.component.ts
var _c0 = (a0) => ({ category: a0 });
var _c1 = () => ["#3B82F6,#60A5FA", "#EC4899,#F472B6"];
var _c2 = () => [1, 2, 3, 4, 5];
var _c3 = (a0) => ({ q: a0 });
function ProductDetailComponent_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 50);
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275styleProp("background", "linear-gradient(135deg, " + c_r2 + ")");
  }
}
function ProductDetailComponent_div_1_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_button_28_Template_button_click_0_listener() {
      const tab_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.activeTab = tab_r4.id);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r4.activeTab === tab_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r4.label, " ");
  }
}
function ProductDetailComponent_div_1_div_29_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 60);
    \u0275\u0275element(2, "polyline", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", f_r6, " ");
  }
}
function ProductDetailComponent_div_1_div_29_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r7);
  }
}
function ProductDetailComponent_div_1_div_29_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r8);
  }
}
function ProductDetailComponent_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "h2");
    \u0275\u0275text(3, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7, "Key Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 54);
    \u0275\u0275template(9, ProductDetailComponent_div_1_div_29_div_9_Template, 4, 1, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h2");
    \u0275\u0275text(11, "Tech Stack");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 56);
    \u0275\u0275template(13, ProductDetailComponent_div_1_div_29_span_13_Template, 2, 1, "span", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h2");
    \u0275\u0275text(15, "Compatibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 56);
    \u0275\u0275template(17, ProductDetailComponent_div_1_div_29_span_17_Template, 2, 1, "span", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h2");
    \u0275\u0275text(19, "Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, "Includes 6 months of premium support and lifetime updates. Our team responds within 24 hours.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.product.shortDescription);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r4.product.features);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r4.product.techStack);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r4.product.compatibility);
  }
}
function ProductDetailComponent_div_1_div_30_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    \u0275\u0275classMap(s_r10);
  }
}
function ProductDetailComponent_div_1_div_30_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "span", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 81);
    \u0275\u0275element(4, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 83);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bar_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", bar_r11.stars, "\u2605");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", bar_r11.pct, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bar_r11.count);
  }
}
function ProductDetailComponent_div_1_div_30_span_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_div_30_span_16_Template_span_click_0_listener() {
      const s_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r4.newReviewRating = s_r13);
    });
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("filled", ctx_r4.newReviewRating >= s_r13);
  }
}
function ProductDetailComponent_div_1_div_30_div_21_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1, "\u2713 Verified Purchase");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_1_div_30_div_21_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 99);
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    \u0275\u0275classMap(s_r14);
  }
}
function ProductDetailComponent_div_1_div_30_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86)(2, "div", 87)(3, "div", 88)(4, "div", 89);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProductDetailComponent_div_1_div_30_div_21_span_9_Template, 2, 0, "span", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 91)(11, "div", 92);
    \u0275\u0275template(12, ProductDetailComponent_div_1_div_30_div_21_span_12_Template, 1, 2, "span", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 94);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "p", 95);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 96)(19, "button", 97);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const review_r15 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ctx_r4.getReviewColor(review_r15.userName));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(review_r15.userName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r15.userName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", review_r15.verified);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r4.getStars(review_r15.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 9, review_r15.date, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r15.comment);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F44D} Helpful (", review_r15.helpful, ")");
  }
}
function ProductDetailComponent_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 64)(2, "div", 65)(3, "span", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 67);
    \u0275\u0275template(6, ProductDetailComponent_div_1_div_30_span_6_Template, 1, 2, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 69);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 70);
    \u0275\u0275template(11, ProductDetailComponent_div_1_div_30_div_11_Template, 7, 4, "div", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 72)(13, "h3");
    \u0275\u0275text(14, "Write a Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 73);
    \u0275\u0275template(16, ProductDetailComponent_div_1_div_30_span_16_Template, 2, 2, "span", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function ProductDetailComponent_div_1_div_30_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r4.newReviewTitle, $event) || (ctx_r4.newReviewTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "textarea", 76);
    \u0275\u0275twoWayListener("ngModelChange", function ProductDetailComponent_div_1_div_30_Template_textarea_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r4.newReviewComment, $event) || (ctx_r4.newReviewComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 77);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_div_30_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.submitReview());
    });
    \u0275\u0275text(20, "Submit Review");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, ProductDetailComponent_div_1_div_30_div_21_Template, 21, 12, "div", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r4.product.rating);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.getStars(ctx_r4.product.rating));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 9, ctx_r4.product.totalRatings), " ratings");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r4.ratingBars);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(11, _c2));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.newReviewTitle);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.newReviewComment);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r4.newReviewComment);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.product.reviews);
  }
}
function ProductDetailComponent_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "h2");
    \u0275\u0275text(3, "Version History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 100)(5, "div", 101);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 102);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul")(11, "li");
    \u0275\u0275text(12, "Performance improvements and bug fixes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275text(14, "Updated dependencies to latest versions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16, "Added new UI components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li");
    \u0275\u0275text(18, "Improved documentation");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("v", ctx_r4.product.version, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 2, ctx_r4.product.lastUpdated, "mediumDate"));
  }
}
function ProductDetailComponent_div_1_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 103);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", ctx_r4.product.originalPrice, "");
  }
}
function ProductDetailComponent_div_1_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 104);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("-", ctx_r4.product.discountPercent, "%");
  }
}
function ProductDetailComponent_div_1_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 105)(1, "label", 106)(2, "input", 107);
    \u0275\u0275twoWayListener("ngModelChange", function ProductDetailComponent_div_1_div_58_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r4 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r4.addReskin, $event) || (ctx_r4.addReskin = $event);
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
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.addReskin);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Professional rebranding (+$", ctx_r4.product.reskinPrice, ")");
  }
}
function ProductDetailComponent_div_1_a_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 108);
    \u0275\u0275text(1, " View Cart \u2192 ");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_1_span_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 109);
    \u0275\u0275text(1, "\u2713 Verified Author");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_1_span_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 110);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r17 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r4.getBadgeIcon(b_r17), " ", ctx_r4.formatBadge(b_r17), "");
  }
}
function ProductDetailComponent_div_1_a_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 111);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r18 = ctx.$implicit;
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(2, _c3, tag_r18));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r18);
  }
}
function ProductDetailComponent_div_1_app_product_card_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-product-card", 112);
  }
  if (rf & 2) {
    const p_r19 = ctx.$implicit;
    \u0275\u0275property("product", p_r19);
  }
}
function ProductDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "nav", 2)(2, "a", 3);
    \u0275\u0275text(3, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 4);
    \u0275\u0275text(7, "Browse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 5);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 6);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 7)(17, "div", 8)(18, "div", 9)(19, "div", 10)(20, "span", 11);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 12);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 13);
    \u0275\u0275element(25, "div", 14);
    \u0275\u0275template(26, ProductDetailComponent_div_1_div_26_Template, 1, 2, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 16);
    \u0275\u0275template(28, ProductDetailComponent_div_1_button_28_Template, 2, 3, "button", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ProductDetailComponent_div_1_div_29_Template, 22, 4, "div", 18)(30, ProductDetailComponent_div_1_div_30_Template, 22, 12, "div", 18)(31, ProductDetailComponent_div_1_div_31_Template, 19, 5, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "aside", 19)(33, "div", 20)(34, "div", 21)(35, "span", 22);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, ProductDetailComponent_div_1_span_37_Template, 2, 1, "span", 23)(38, ProductDetailComponent_div_1_span_38_Template, 2, 1, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 25)(40, "label", 26);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_Template_label_click_40_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.selectedLicense = "regular");
    });
    \u0275\u0275element(41, "input", 27);
    \u0275\u0275elementStart(42, "div")(43, "strong");
    \u0275\u0275text(44, "Regular License");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "Use in a single end product");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "span", 28);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "label", 26);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_Template_label_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.selectedLicense = "extended");
    });
    \u0275\u0275element(50, "input", 29);
    \u0275\u0275elementStart(51, "div")(52, "strong");
    \u0275\u0275text(53, "Extended License");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55, "Use in unlimited projects");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "span", 28);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(58, ProductDetailComponent_div_1_div_58_Template, 8, 2, "div", 30);
    \u0275\u0275elementStart(59, "button", 31);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.addToCart());
    });
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(61, ProductDetailComponent_div_1_a_61_Template, 2, 0, "a", 32);
    \u0275\u0275elementStart(62, "div", 33)(63, "div", 34)(64, "span");
    \u0275\u0275text(65, "\u{1F4B0} Sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "strong");
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 34)(70, "span");
    \u0275\u0275text(71, "\u{1F441}\uFE0F Views");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "strong");
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 34)(76, "span");
    \u0275\u0275text(77, "\u{1F4C5} Last Updated");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "strong");
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 34)(82, "span");
    \u0275\u0275text(83, "\u{1F4E6} Version");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "strong");
    \u0275\u0275text(85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 34)(87, "span");
    \u0275\u0275text(88, "\u{1F4C1} File Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "strong");
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(91, "div", 35)(92, "div", 36)(93, "div", 37);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div")(96, "strong");
    \u0275\u0275text(97);
    \u0275\u0275elementEnd();
    \u0275\u0275template(98, ProductDetailComponent_div_1_span_98_Template, 2, 0, "span", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "p", 39);
    \u0275\u0275text(100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 40)(102, "div")(103, "strong");
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "span");
    \u0275\u0275text(107, "Sales");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div")(109, "strong");
    \u0275\u0275text(110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "span");
    \u0275\u0275text(112, "Rating");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "div")(114, "strong");
    \u0275\u0275text(115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "span");
    \u0275\u0275text(117, "Badges");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(118, "div", 41);
    \u0275\u0275template(119, ProductDetailComponent_div_1_span_119_Template, 2, 2, "span", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "div", 43)(121, "h4");
    \u0275\u0275text(122, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "div", 44);
    \u0275\u0275template(124, ProductDetailComponent_div_1_a_124_Template, 2, 4, "a", 45);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(125, "section", 46)(126, "h2", 47);
    \u0275\u0275text(127, "Related Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "div", 48);
    \u0275\u0275template(129, ProductDetailComponent_div_1_app_product_card_129_Template, 1, 1, "app-product-card", 49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(56, _c0, ctx_r4.product.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.getCategoryLabel());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r4.product.title);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ctx_r4.getGradient());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.getCategoryIcon());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.product.title.split("\u2014")[0]);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", ctx_r4.getGradient());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(58, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.tabs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.activeTab === "description");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.activeTab === "reviews");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.activeTab === "changelog");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("$", ctx_r4.product.price, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.product.originalPrice);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.product.discountPercent);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r4.selectedLicense === "regular");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r4.selectedLicense === "regular");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", ctx_r4.product.price, "");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r4.selectedLicense === "extended");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r4.selectedLicense === "extended");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("$", ctx_r4.product.price * 3, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.product.hasReskinService);
    \u0275\u0275advance();
    \u0275\u0275classProp("added", ctx_r4.isInCart);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.isInCart ? "\u2713 Added to Cart" : "\u{1F6D2} Add to Cart", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.isInCart);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 47, ctx_r4.product.totalSales));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 49, ctx_r4.product.totalVisits));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 51, ctx_r4.product.lastUpdated, "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r4.product.version);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.product.fileSize);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", "linear-gradient(135deg, #6366F1, #A855F7)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.product.author.name.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r4.product.author.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.product.author.verified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.product.author.bio);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(105, 54, ctx_r4.product.author.totalSales));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r4.product.author.rating);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r4.product.author.badges.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r4.product.author.badges);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r4.product.tags);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r4.relatedProducts);
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  constructor() {
    this.marketplace = inject(MarketplaceService);
    this.route = inject(ActivatedRoute);
    this.relatedProducts = [];
    this.activeTab = "description";
    this.selectedLicense = "regular";
    this.addReskin = false;
    this.isInCart = false;
    this.newReviewRating = 5;
    this.newReviewTitle = "";
    this.newReviewComment = "";
    this.tabs = [
      { id: "description", label: "\u{1F4DD} Description" },
      { id: "reviews", label: "\u2B50 Reviews" },
      { id: "changelog", label: "\u{1F4CB} Changelog" }
    ];
    this.ratingBars = [
      { stars: 5, pct: 72, count: 245 },
      { stars: 4, pct: 18, count: 61 },
      { stars: 3, pct: 6, count: 20 },
      { stars: 2, pct: 3, count: 10 },
      { stars: 1, pct: 1, count: 6 }
    ];
    this.gradientMap = {
      "mobile-apps": "linear-gradient(135deg, #F97316, #FB923C)",
      "web-templates": "linear-gradient(135deg, #3B82F6, #60A5FA)",
      "wordpress": "linear-gradient(135deg, #8B5CF6, #A78BFA)",
      "javascript": "linear-gradient(135deg, #EAB308, #FDE047)",
      "ui-kits": "linear-gradient(135deg, #EC4899, #F472B6)",
      "full-stack": "linear-gradient(135deg, #10B981, #34D399)",
      "plugins": "linear-gradient(135deg, #06B6D4, #22D3EE)",
      "themes": "linear-gradient(135deg, #F43F5E, #FB7185)"
    };
    this.categoryLabels = {
      "mobile-apps": "Mobile Apps",
      "web-templates": "Web Templates",
      "wordpress": "WordPress",
      "javascript": "JavaScript",
      "ui-kits": "UI Kits",
      "full-stack": "Full Stack"
    };
    this.categoryIcons = {
      "mobile-apps": "\u{1F4F1}",
      "web-templates": "\u{1F310}",
      "wordpress": "\u{1F527}",
      "javascript": "\u26A1",
      "ui-kits": "\u{1F3A8}",
      "full-stack": "\u{1F680}",
      "plugins": "\u{1F9E9}",
      "themes": "\u2728"
    };
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params["id"];
      this.product = this.marketplace.getProductById(id);
      if (this.product) {
        this.marketplace.incrementVisit(id);
        this.relatedProducts = this.marketplace.getRelatedProducts(this.product);
        this.isInCart = this.marketplace.isInCart(id);
        this.ratingBars = this.computeRatingBars();
      }
    });
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
  submitReview() {
    if (!this.product || !this.newReviewComment)
      return;
    this.marketplace.addReview(this.product.id, {
      userId: "guest",
      userName: "Guest User",
      userAvatar: "",
      rating: this.newReviewRating,
      title: this.newReviewTitle || "Review",
      comment: this.newReviewComment,
      verified: false
    });
    this.newReviewTitle = "";
    this.newReviewComment = "";
    this.newReviewRating = 5;
    this.product = this.marketplace.getProductById(this.product.id);
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
  static {
    this.\u0275fac = function ProductDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [["class", "pm-container", 4, "ngIf"], [1, "pm-container"], [1, "breadcrumb"], ["routerLink", "/"], ["routerLink", "/browse"], ["routerLink", "/browse", 3, "queryParams"], [1, "current"], [1, "detail-layout"], [1, "detail-main"], [1, "preview-card"], [1, "preview-image"], [1, "preview-icon"], [1, "preview-title"], [1, "preview-thumbnails"], [1, "thumb-item", "active"], ["class", "thumb-item", 3, "background", 4, "ngFor", "ngForOf"], [1, "detail-tabs"], ["class", "tab-btn", 3, "active", "click", 4, "ngFor", "ngForOf"], ["class", "tab-content", 4, "ngIf"], [1, "detail-sidebar"], [1, "purchase-card"], [1, "price-section"], [1, "pm-price", 2, "font-size", "2rem"], ["class", "pm-price-original", 4, "ngIf"], ["class", "pm-price-discount", 4, "ngIf"], [1, "license-select"], [1, "license-option", 3, "click"], ["type", "radio", "name", "license", "value", "regular", 3, "checked"], [1, "license-price"], ["type", "radio", "name", "license", "value", "extended", 3, "checked"], ["class", "reskin-option", 4, "ngIf"], [1, "pm-btn", "pm-btn-success", "pm-btn-lg", 2, "width", "100%", "margin-top", "16px", 3, "click"], ["routerLink", "/cart", "class", "pm-btn pm-btn-outline pm-btn-lg", "style", "width:100%; margin-top: 8px; text-align: center", 4, "ngIf"], [1, "purchase-meta"], [1, "meta-row"], [1, "author-card"], [1, "author-header"], [1, "author-av"], ["class", "author-verified", 4, "ngIf"], [1, "author-bio"], [1, "author-stats"], [1, "author-badges"], ["class", "a-badge", 4, "ngFor", "ngForOf"], [1, "tags-card"], [1, "tags-wrap"], ["routerLink", "/browse", "class", "tag-link", 3, "queryParams", 4, "ngFor", "ngForOf"], [1, "pm-section"], [1, "pm-heading-lg", 2, "margin-bottom", "24px"], [1, "related-grid"], [3, "product", 4, "ngFor", "ngForOf"], [1, "thumb-item"], [1, "tab-btn", 3, "click"], [1, "tab-content"], [1, "desc-card"], [1, "features-grid"], ["class", "feature-item", 4, "ngFor", "ngForOf"], [1, "tags-row"], ["class", "tech-tag", 4, "ngFor", "ngForOf"], ["class", "compat-tag", 4, "ngFor", "ngForOf"], [1, "feature-item"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#10B981", "stroke-width", "3"], ["points", "20 6 9 17 4 12"], [1, "tech-tag"], [1, "compat-tag"], [1, "reviews-summary"], [1, "rating-big"], [1, "rating-number"], [1, "rating-stars"], [3, "class", 4, "ngFor", "ngForOf"], [1, "rating-total"], [1, "rating-bars"], ["class", "bar-row", 4, "ngFor", "ngForOf"], [1, "write-review"], [1, "review-rating-select"], ["class", "selectable-star", 3, "filled", "click", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Review title...", 1, "filter-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Write your review...", "rows", "3", 1, "filter-input", 3, "ngModelChange", "ngModel"], [1, "pm-btn", "pm-btn-primary", "pm-btn-sm", 3, "click", "disabled"], ["class", "review-list", 4, "ngFor", "ngForOf"], [1, "bar-row"], [1, "bar-label"], [1, "bar-track"], [1, "bar-fill"], [1, "bar-count"], [1, "selectable-star", 3, "click"], [1, "review-list"], [1, "review-card"], [1, "review-header"], [1, "review-user"], [1, "review-avatar"], ["class", "verified", 4, "ngIf"], [1, "review-meta"], [1, "review-stars"], ["style", "font-size:12px", 3, "class", 4, "ngFor", "ngForOf"], [1, "review-date"], [1, "review-comment"], [1, "review-actions"], [1, "pm-btn", "pm-btn-ghost", "pm-btn-sm"], [1, "verified"], [2, "font-size", "12px"], [1, "changelog-item"], [1, "cl-version"], [1, "cl-date"], [1, "pm-price-original"], [1, "pm-price-discount"], [1, "reskin-option"], [1, "reskin-check"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["routerLink", "/cart", 1, "pm-btn", "pm-btn-outline", "pm-btn-lg", 2, "width", "100%", "margin-top", "8px", "text-align", "center"], [1, "author-verified"], [1, "a-badge"], ["routerLink", "/browse", 1, "tag-link", 3, "queryParams"], [3, "product"]], template: function ProductDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275template(1, ProductDetailComponent_div_1_Template, 130, 59, "div", 0);
        \u0275\u0275element(2, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.product);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, DatePipe, RouterLink, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, HeaderComponent, FooterComponent, ProductCardComponent], styles: ["\n\n.breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 20px 0;\n  font-size: 0.8rem;\n  color: var(--pm-text-muted);\n  flex-wrap: wrap;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  text-decoration: none;\n}\n.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-primary);\n}\n.breadcrumb[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: var(--pm-text-primary);\n  font-weight: 500;\n}\n.detail-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding-bottom: 32px;\n}\n.detail-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.detail-sidebar[_ngcontent-%COMP%] {\n  width: 360px;\n  flex-shrink: 0;\n}\n.preview-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  overflow: hidden;\n  box-shadow: var(--pm-shadow-card);\n  margin-bottom: 24px;\n}\n.preview-image[_ngcontent-%COMP%] {\n  height: 360px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n.preview-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2));\n}\n.preview-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.1rem;\n  font-weight: 600;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 6px 20px;\n  border-radius: var(--pm-radius-full);\n  backdrop-filter: blur(4px);\n}\n.preview-thumbnails[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 12px;\n}\n.thumb-item[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 48px;\n  border-radius: var(--pm-radius-sm);\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: all var(--pm-transition-fast);\n}\n.thumb-item.active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n}\n.thumb-item[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.detail-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 24px;\n  background: var(--pm-surface-muted);\n  border-radius: var(--pm-radius-md);\n  padding: 4px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 16px;\n  border: none;\n  background: transparent;\n  font-family: inherit;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--pm-text-secondary);\n  cursor: pointer;\n  border-radius: var(--pm-radius-sm);\n  transition: all var(--pm-transition-fast);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  color: var(--ion-color-primary);\n  box-shadow: var(--pm-shadow-sm);\n}\n.desc-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 32px;\n  border: 1px solid var(--pm-border-light);\n}\n.desc-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin: 24px 0 12px;\n}\n.desc-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.desc-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  line-height: 1.6;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.875rem;\n  color: var(--pm-text-secondary);\n  padding: 8px 12px;\n  background: var(--pm-surface-muted);\n  border-radius: var(--pm-radius-sm);\n}\n.tags-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tech-tag[_ngcontent-%COMP%], \n.compat-tag[_ngcontent-%COMP%] {\n  padding: 6px 14px;\n  border-radius: var(--pm-radius-full);\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n.tech-tag[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.08);\n  color: #6366F1;\n}\n.compat-tag[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.08);\n  color: #059669;\n}\n.reviews-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding: 24px;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 24px;\n}\n.rating-big[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16px 32px;\n}\n.rating-number[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 800;\n  color: var(--pm-text-primary);\n  display: block;\n}\n.rating-stars[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #F59E0B;\n  margin: 4px 0;\n  display: flex;\n  gap: 2px;\n  justify-content: center;\n}\n.rating-total[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-muted);\n}\n.rating-bars[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  justify-content: center;\n}\n.bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--pm-text-muted);\n  width: 24px;\n}\n.bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: var(--pm-surface-muted);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #F59E0B;\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}\n.bar-count[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--pm-text-muted);\n  width: 32px;\n  text-align: right;\n}\n.write-review[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.write-review[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n.review-rating-select[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.selectable-star[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #CBD5E1;\n  cursor: pointer;\n  transition: color var(--pm-transition-fast);\n}\n.selectable-star.filled[_ngcontent-%COMP%] {\n  color: #F59E0B;\n}\n.selectable-star[_ngcontent-%COMP%]:hover {\n  color: #F59E0B;\n}\ntextarea.filter-input[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n}\n.review-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  padding: 20px;\n  border-radius: var(--pm-radius-md);\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 12px;\n}\n.review-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.review-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.review-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 0.8rem;\n}\n.review-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n}\n.verified[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #10B981;\n  font-weight: 500;\n}\n.review-meta[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.review-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1px;\n  justify-content: flex-end;\n}\n.review-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.review-comment[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--pm-text-secondary);\n  line-height: 1.6;\n  margin: 0 0 8px;\n}\n.purchase-card[_ngcontent-%COMP%], \n.author-card[_ngcontent-%COMP%], \n.tags-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-card);\n  margin-bottom: 16px;\n}\n.price-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.license-select[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.license-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border: 2px solid var(--pm-border);\n  border-radius: var(--pm-radius-md);\n  cursor: pointer;\n  transition: all var(--pm-transition-fast);\n}\n.license-option.active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.03);\n}\n.license-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--ion-color-primary);\n}\n.license-option[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.license-option[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n}\n.license-option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.license-price[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1rem;\n  color: var(--pm-text-primary);\n}\n.reskin-option[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.reskin-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.04),\n      rgba(168, 85, 247, 0.06));\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  border-radius: var(--pm-radius-md);\n  cursor: pointer;\n}\n.reskin-check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--ion-color-primary);\n}\n.reskin-check[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n}\n.reskin-check[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.pm-btn.added[_ngcontent-%COMP%] {\n  background: #10B981;\n  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);\n}\n.purchase-meta[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid var(--pm-border-light);\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 7px 0;\n  font-size: 0.8rem;\n}\n.meta-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--pm-text-muted);\n}\n.meta-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--pm-text-primary);\n}\n.author-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.author-av[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.author-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n}\n.author-verified[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #10B981;\n}\n.author-bio[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-secondary);\n  line-height: 1.5;\n  margin: 0 0 16px;\n}\n.author-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 12px 0;\n  border-top: 1px solid var(--pm-border-light);\n  border-bottom: 1px solid var(--pm-border-light);\n  margin-bottom: 12px;\n}\n.author-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n}\n.author-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1rem;\n  color: var(--pm-text-primary);\n}\n.author-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--pm-text-muted);\n}\n.author-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.a-badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  background: rgba(99, 102, 241, 0.08);\n  border-radius: var(--pm-radius-full);\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n.tags-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 0.9rem;\n}\n.tags-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tag-link[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  background: var(--pm-surface-muted);\n  border-radius: var(--pm-radius-full);\n  font-size: 0.78rem;\n  color: var(--pm-text-secondary);\n  text-decoration: none;\n  transition: all var(--pm-transition-fast);\n}\n.tag-link[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.08);\n  color: var(--ion-color-primary);\n}\n.related-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.changelog-item[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: var(--pm-surface-muted);\n  border-radius: var(--pm-radius-md);\n  border-left: 3px solid var(--ion-color-primary);\n}\n.cl-version[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--ion-color-primary);\n}\n.cl-date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--pm-text-muted);\n  margin-bottom: 8px;\n}\n.changelog-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n}\n.changelog-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--pm-text-secondary);\n  padding: 3px 0;\n}\n@media (max-width: 1024px) {\n  .detail-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .detail-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .reviews-summary[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent", filePath: "src\\app\\pages\\product-detail\\product-detail.component.ts", lineNumber: 597 });
})();
export {
  ProductDetailComponent
};
//# sourceMappingURL=chunk-Z2KDGH44.js.map

import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ZYH2QR55.js";

// src/app/components/product-card/product-card.component.ts
var _c0 = (a0) => ["/product", a0];
function ProductCardComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "\u{1F525} Featured");
    \u0275\u0275elementEnd();
  }
}
function ProductCardComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "\u2728 New");
    \u0275\u0275elementEnd();
  }
}
function ProductCardComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "\u{1F3C6} Bestseller");
    \u0275\u0275elementEnd();
  }
}
function ProductCardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" -", ctx_r0.product.discountPercent, "% ");
  }
}
function ProductCardComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275classMap(s_r2);
  }
}
function ProductCardComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function ProductCardComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("$", ctx_r0.product.originalPrice, "");
  }
}
var ProductCardComponent = class _ProductCardComponent {
  constructor() {
    this.categoryLabels = {
      "mobile-apps": "Mobile Apps",
      "web-templates": "Web Templates",
      "wordpress": "WordPress",
      "javascript": "JavaScript",
      "ui-kits": "UI Kits",
      "full-stack": "Full Stack",
      "plugins": "Plugins",
      "themes": "Themes"
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
    this.gradients = {
      "mobile-apps": "linear-gradient(135deg, #F97316, #FB923C)",
      "web-templates": "linear-gradient(135deg, #3B82F6, #60A5FA)",
      "wordpress": "linear-gradient(135deg, #8B5CF6, #A78BFA)",
      "javascript": "linear-gradient(135deg, #EAB308, #FDE047)",
      "ui-kits": "linear-gradient(135deg, #EC4899, #F472B6)",
      "full-stack": "linear-gradient(135deg, #10B981, #34D399)",
      "plugins": "linear-gradient(135deg, #06B6D4, #22D3EE)",
      "themes": "linear-gradient(135deg, #F43F5E, #FB7185)"
    };
    this.authorColors = ["#6366F1", "#EC4899", "#10B981", "#F97316", "#3B82F6", "#8B5CF6"];
  }
  getCategoryLabel() {
    return this.categoryLabels[this.product.category] || this.product.category;
  }
  getCategoryIcon() {
    return this.categoryIcons[this.product.category] || "\u{1F4E6}";
  }
  getGradient() {
    return this.gradients[this.product.category] || "linear-gradient(135deg, #6366F1, #A855F7)";
  }
  getAuthorColor() {
    return this.authorColors[this.product.author.name.length % this.authorColors.length];
  }
  getStars() {
    const stars = [];
    const full = Math.floor(this.product.rating);
    const half = this.product.rating % 1 >= 0.5 ? 1 : 0;
    for (let i = 0; i < full; i++)
      stars.push("pm-star-filled");
    if (half)
      stars.push("pm-star-half");
    while (stars.length < 5)
      stars.push("pm-star-empty");
    return stars;
  }
  static {
    this.\u0275fac = function ProductCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 29, consts: [[1, "product-card", 3, "routerLink"], [1, "card-thumb"], [1, "thumb-overlay"], [1, "thumb-icon"], [1, "thumb-title"], [1, "card-badges"], ["class", "pm-badge pm-badge-featured", 4, "ngIf"], ["class", "pm-badge pm-badge-success", 4, "ngIf"], ["class", "pm-badge pm-badge-warning", 4, "ngIf"], ["class", "card-discount", 4, "ngIf"], [1, "card-body"], [1, "card-category"], [1, "card-title"], [1, "card-desc"], [1, "card-meta"], [1, "card-rating"], [1, "stars"], [3, "class", 4, "ngFor", "ngForOf"], [1, "rating-text"], [1, "rating-count"], [1, "card-stats"], [1, "stat"], [1, "card-footer-row"], [1, "card-author"], [1, "author-avatar"], ["class", "verified-badge", 4, "ngIf"], [1, "card-price-row"], [1, "pm-price"], ["class", "pm-price-original", 4, "ngIf"], [1, "pm-badge", "pm-badge-featured"], [1, "pm-badge", "pm-badge-success"], [1, "pm-badge", "pm-badge-warning"], [1, "card-discount"], [1, "verified-badge"], [1, "pm-price-original"]], template: function ProductCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "a", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275template(8, ProductCardComponent_span_8_Template, 2, 0, "span", 6)(9, ProductCardComponent_span_9_Template, 2, 0, "span", 7)(10, ProductCardComponent_span_10_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, ProductCardComponent_div_11_Template, 2, 1, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10)(13, "div", 11);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "h3", 12);
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p", 13);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 14)(20, "div", 15)(21, "span", 16);
        \u0275\u0275template(22, ProductCardComponent_span_22_Template, 1, 2, "span", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 18);
        \u0275\u0275text(24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 19);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 20)(29, "span", 21);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "number");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 22)(33, "div", 23)(34, "div", 24);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span");
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275template(38, ProductCardComponent_span_38_Template, 2, 0, "span", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 26)(40, "span", 27);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd();
        \u0275\u0275template(42, ProductCardComponent_span_42_Template, 2, 1, "span", 28);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(27, _c0, ctx.product.id));
        \u0275\u0275advance();
        \u0275\u0275styleProp("background", ctx.getGradient());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.getCategoryIcon());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.product.title.split("\u2014")[0]);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.product.isFeatured);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.product.isNew);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.product.isBestseller && !ctx.product.isFeatured);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.product.discountPercent);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.getCategoryLabel());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.product.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.product.shortDescription);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.getStars());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.product.rating);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(27, 23, ctx.product.totalRatings), ")");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\u{1F4B0} ", \u0275\u0275pipeBind1(31, 25, ctx.product.totalSales), " sales");
        \u0275\u0275advance(4);
        \u0275\u0275styleProp("background", ctx.getAuthorColor());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.product.author.name.charAt(0), " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.product.author.name);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.product.author.verified);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("$", ctx.product.price, "");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.product.originalPrice);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterLink], styles: ["\n\n.product-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  box-shadow: var(--pm-shadow-card);\n  border: 1px solid var(--pm-border-light);\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  text-decoration: none;\n  color: inherit;\n  height: 100%;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--pm-shadow-card-hover);\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.card-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.thumb-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  z-index: 1;\n}\n.thumb-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));\n}\n.thumb-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 0.8rem;\n  font-weight: 600;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 4px 12px;\n  border-radius: var(--pm-radius-full);\n  backdrop-filter: blur(4px);\n}\n.card-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  display: flex;\n  gap: 6px;\n  z-index: 2;\n}\n.card-discount[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  background: #EF4444;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 800;\n  padding: 4px 10px;\n  border-radius: var(--pm-radius-full);\n  z-index: 2;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.card-category[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--pm-text-primary);\n  margin: 0 0 8px;\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card-desc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-secondary);\n  line-height: 1.5;\n  margin: 0 0 12px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  flex: 1;\n}\n.card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n.card-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1px;\n  font-size: 12px;\n  color: #F59E0B;\n}\n.rating-text[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--pm-text-primary);\n}\n.rating-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.stat[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.card-footer-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 12px;\n  border-top: 1px solid var(--pm-border-light);\n}\n.card-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.78rem;\n  color: var(--pm-text-secondary);\n}\n.author-avatar[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: white;\n}\n.verified-badge[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary);\n  color: white;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.55rem;\n}\n.card-price-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=product-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent", filePath: "src\\app\\components\\product-card\\product-card.component.ts", lineNumber: 231 });
})();

export {
  ProductCardComponent
};
//# sourceMappingURL=chunk-HYQO5I3B.js.map

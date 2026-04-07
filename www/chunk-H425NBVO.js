import {
  FooterComponent,
  HeaderComponent,
  MarketplaceService
} from "./chunk-HPEEYXSC.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf,
  RouterLink,
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
  ɵɵtextInterpolate2
} from "./chunk-AKTLL2DV.js";

// src/app/pages/cart/cart.component.ts
var _c0 = (a0) => ["/product", a0];
var _c1 = () => ["Visa", "MC", "PayPal", "Stripe"];
function CartComponent_div_8_div_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3A8} Reskin Service (+$", item_r2.product.reskinPrice, ")");
  }
}
function CartComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 12)(5, "a", 13);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "span", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CartComponent_div_8_div_1_span_12_Template, 2, 1, "span", 17);
    \u0275\u0275elementStart(13, "span", 18);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 19)(16, "div", 20);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 21);
    \u0275\u0275listener("click", function CartComponent_div_8_div_1_Template_button_click_18_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeItem(item_r2.product.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 22);
    \u0275\u0275element(20, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.getGradient(item_r2.product.category));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getCategoryIcon(item_r2.product.category));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, item_r2.product.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.product.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.product.shortDescription);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("extended", item_r2.license === "extended");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.license === "extended" ? "\u{1F513} Extended" : "\u{1F4C4} Regular", " License ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.addReskin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("by ", item_r2.product.author.name, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", ctx_r2.getItemPrice(item_r2), "");
  }
}
function CartComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, CartComponent_div_8_div_1_Template, 22, 14, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.marketplace.cart());
  }
}
function CartComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275text(2, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Your cart is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Discover thousands of premium code assets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 27);
    \u0275\u0275text(8, "Browse Products");
    \u0275\u0275elementEnd()();
  }
}
function CartComponent_aside_10_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span");
    \u0275\u0275text(2, "Reskin Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(5, 1, ctx_r2.getReskinTotal(), "1.2-2"), "");
  }
}
function CartComponent_aside_10_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r5);
  }
}
function CartComponent_aside_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 28)(1, "div", 29)(2, "h3");
    \u0275\u0275text(3, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "div", 31)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, CartComponent_aside_10_div_11_Template, 6, 4, "div", 32);
    \u0275\u0275elementStart(12, "div", 31)(13, "span");
    \u0275\u0275text(14, "Platform Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16, "Free");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 31)(18, "span");
    \u0275\u0275text(19, "Taxes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21, "Calculated at checkout");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 33)(23, "span");
    \u0275\u0275text(24, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 34);
    \u0275\u0275listener("click", function CartComponent_aside_10_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.checkout());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 35)(31, "span");
    \u0275\u0275text(32, "Pay with:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 36);
    \u0275\u0275template(34, CartComponent_aside_10_span_34_Template, 2, 1, "span", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 39);
    \u0275\u0275element(37, "path", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "div")(39, "strong");
    \u0275\u0275text(40, "30-Day Money Back Guarantee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "No questions asked refund policy");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "button", 41);
    \u0275\u0275listener("click", function CartComponent_aside_10_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.marketplace.clearCart());
    });
    \u0275\u0275text(44, " Clear Cart ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 42)(46, "h4");
    \u0275\u0275text(47, "Have a coupon?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 43);
    \u0275\u0275element(49, "input", 44);
    \u0275\u0275elementStart(50, "button", 45);
    \u0275\u0275text(51, "Apply");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Subtotal (", ctx_r2.marketplace.cartCount(), " items)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(10, 6, ctx_r2.marketplace.cartTotal(), "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.hasReskin());
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(27, 9, ctx_r2.marketplace.cartTotal(), "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.checkingOut ? "\u2713 Order Placed!" : "\u{1F512} Secure Checkout", " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(12, _c1));
  }
}
var CartComponent = class _CartComponent {
  constructor() {
    this.marketplace = inject(MarketplaceService);
    this.checkingOut = false;
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
    this.icons = {
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
  getGradient(cat) {
    return this.gradients[cat] || "linear-gradient(135deg, #6366F1, #A855F7)";
  }
  getCategoryIcon(cat) {
    return this.icons[cat] || "\u{1F4E6}";
  }
  getItemPrice(item) {
    let price = item.license === "extended" ? item.product.price * 3 : item.product.price;
    if (item.addReskin && item.product.reskinPrice)
      price += item.product.reskinPrice;
    return price;
  }
  hasReskin() {
    return this.marketplace.cart().some((i) => i.addReskin);
  }
  getReskinTotal() {
    return this.marketplace.cart().filter((i) => i.addReskin).reduce((s, i) => s + (i.product.reskinPrice || 0), 0);
  }
  removeItem(id) {
    this.marketplace.removeFromCart(id);
  }
  checkout() {
    this.checkingOut = true;
    setTimeout(() => {
      this.marketplace.clearCart();
      this.checkingOut = false;
    }, 2e3);
  }
  static {
    this.\u0275fac = function CartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartComponent, selectors: [["app-cart"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 5, consts: [[1, "cart-hero"], [1, "pm-container"], [1, "pm-heading-lg"], [1, "pm-text-secondary"], [1, "pm-container", "cart-layout"], ["class", "cart-main", 4, "ngIf"], ["class", "cart-main empty-cart", 4, "ngIf"], ["class", "cart-sidebar", 4, "ngIf"], [1, "cart-main"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [1, "cart-item"], [1, "item-thumb"], [1, "item-info"], [1, "item-title", 3, "routerLink"], [1, "item-desc"], [1, "item-meta"], [1, "item-license"], ["class", "item-reskin", 4, "ngIf"], [1, "item-author"], [1, "item-right"], [1, "item-price"], [1, "remove-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], [1, "item-reskin"], [1, "cart-main", "empty-cart"], [1, "empty-icon"], ["routerLink", "/browse", 1, "pm-btn", "pm-btn-primary"], [1, "cart-sidebar"], [1, "summary-card"], [1, "summary-rows"], [1, "summary-row"], ["class", "summary-row", 4, "ngIf"], [1, "summary-total"], [1, "pm-btn", "pm-btn-success", "pm-btn-lg", "checkout-btn", 3, "click"], [1, "payment-methods"], [1, "pay-icons"], ["class", "pay-tag", 4, "ngFor", "ngForOf"], [1, "guarantee-box"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#10B981", "stroke-width", "2"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], [1, "pm-btn", "pm-btn-ghost", 2, "width", "100%", "margin-top", "8px", 3, "click"], [1, "coupon-card"], [1, "coupon-input"], ["type", "text", "placeholder", "Enter coupon code", 1, "filter-input"], [1, "pm-btn", "pm-btn-outline", "pm-btn-sm"], [1, "pay-tag"]], template: function CartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "section", 0)(2, "div", 1)(3, "h1", 2);
        \u0275\u0275text(4, "\u{1F6D2} Shopping Cart");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275template(8, CartComponent_div_8_Template, 2, 1, "div", 5)(9, CartComponent_div_9_Template, 9, 0, "div", 6)(10, CartComponent_aside_10_Template, 52, 13, "aside", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("", ctx.marketplace.cartCount(), " item", ctx.marketplace.cartCount() !== 1 ? "s" : "", " in your cart");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.marketplace.cart().length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.marketplace.cart().length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.marketplace.cart().length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterLink, HeaderComponent, FooterComponent], styles: ["\n\n.cart-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F8FAFC,\n      #EEF0FF);\n  padding: 32px 0;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.cart-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n}\n.cart-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.cart-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding-top: 32px;\n  padding-bottom: 64px;\n  align-items: flex-start;\n}\n.cart-main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cart-sidebar[_ngcontent-%COMP%] {\n  width: 360px;\n  flex-shrink: 0;\n  position: sticky;\n  top: 80px;\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  padding: 24px;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n  margin-bottom: 16px;\n  transition: all var(--pm-transition-base);\n  animation: fadeInUp 0.4s ease forwards;\n}\n.cart-item[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--pm-shadow-md);\n}\n.item-thumb[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 80px;\n  border-radius: var(--pm-radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  flex-shrink: 0;\n}\n.item-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.item-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--pm-text-primary);\n  text-decoration: none;\n  display: block;\n  margin-bottom: 4px;\n}\n.item-title[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-primary);\n}\n.item-desc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-muted);\n  margin: 0 0 8px;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.item-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.item-license[_ngcontent-%COMP%], \n.item-reskin[_ngcontent-%COMP%], \n.item-author[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 3px 10px;\n  border-radius: var(--pm-radius-full);\n  background: var(--pm-surface-muted);\n  color: var(--pm-text-secondary);\n}\n.item-license.extended[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.08);\n  color: #6366F1;\n}\n.item-reskin[_ngcontent-%COMP%] {\n  background: rgba(168, 85, 247, 0.08);\n  color: #8B5CF6;\n}\n.item-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.item-price[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: var(--ion-color-primary);\n}\n.remove-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-family: inherit;\n  padding: 4px 8px;\n  border-radius: var(--pm-radius-sm);\n  transition: all var(--pm-transition-fast);\n}\n.remove-btn[_ngcontent-%COMP%]:hover {\n  color: #EF4444;\n  background: rgba(239, 68, 68, 0.05);\n}\n.summary-card[_ngcontent-%COMP%], \n.coupon-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-card);\n  margin-bottom: 16px;\n}\n.summary-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 1.1rem;\n}\n.summary-rows[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--pm-border-light);\n  padding-bottom: 16px;\n  margin-bottom: 16px;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  font-size: 0.85rem;\n}\n.summary-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n}\n.summary-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--pm-text-primary);\n  font-weight: 600;\n}\n.summary-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.1rem;\n  margin-bottom: 20px;\n}\n.summary-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.summary-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--ion-color-primary);\n}\n.checkout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.payment-methods[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 16px;\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n  flex-wrap: wrap;\n}\n.pay-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.pay-tag[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  background: var(--pm-surface-muted);\n  border-radius: 4px;\n  font-size: 0.65rem;\n  font-weight: 600;\n}\n.guarantee-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px;\n  background: rgba(16, 185, 129, 0.05);\n  border: 1px solid rgba(16, 185, 129, 0.15);\n  border-radius: var(--pm-radius-md);\n  margin-top: 16px;\n}\n.guarantee-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: var(--pm-text-primary);\n}\n.guarantee-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--pm-text-muted);\n}\n.coupon-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 0.9rem;\n}\n.coupon-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.coupon-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.empty-cart[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 24px;\n}\n.empty-cart[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n.empty-cart[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n}\n.empty-cart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-muted);\n  margin: 0 0 24px;\n}\n.filter-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 14px;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-sm);\n  font-family: inherit;\n  font-size: 0.85rem;\n  background: var(--pm-surface);\n  color: var(--pm-text-primary);\n  outline: none;\n}\n.filter-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--ion-color-primary);\n}\n@media (max-width: 768px) {\n  .cart-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cart-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    position: static;\n  }\n  .cart-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .item-right[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=cart.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartComponent, { className: "CartComponent", filePath: "src\\app\\pages\\cart\\cart.component.ts", lineNumber: 323 });
})();
export {
  CartComponent
};
//# sourceMappingURL=chunk-H425NBVO.js.map

import {
  ImageUploadService
} from "./chunk-PKE474YB.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-HAEO2BL6.js";
import {
  AuthService,
  FooterComponent,
  HeaderComponent,
  MarketplaceService
} from "./chunk-S4AIQF2S.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  __async,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
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
} from "./chunk-PLEPB4GM.js";

// src/app/pages/sell/sell.component.ts
function SellComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    \u0275\u0275text(3, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "Sign in to Sell");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "You need an account to submit products for sale on the marketplace.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 7);
    \u0275\u0275text(9, "Sign In / Register");
    \u0275\u0275elementEnd()()();
  }
}
function SellComponent_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Product Submitted for Review!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Our team will review your submission within 2-3 business days. You'll be notified once it's approved.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 19)(8, "a", 20);
    \u0275\u0275text(9, "View My Submissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 21);
    \u0275\u0275listener("click", function SellComponent_ng_container_2_div_12_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resetForm());
    });
    \u0275\u0275text(11, "Submit Another");
    \u0275\u0275elementEnd()()();
  }
}
function SellComponent_ng_container_2_form_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function SellComponent_ng_container_2_form_13_div_2_Template_div_click_0_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToStep(i_r5));
    });
    \u0275\u0275elementStart(1, "div", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.currentStep() === i_r5)("completed", ctx_r1.currentStep() > i_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentStep() > i_r5 ? "\u2713" : i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r6);
  }
}
function SellComponent_ng_container_2_form_13_div_3_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r8 = ctx.$implicit;
    \u0275\u0275property("value", cat_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", cat_r8.icon, " ", cat_r8.label, "");
  }
}
function SellComponent_ng_container_2_form_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "h3");
    \u0275\u0275text(3, "\u{1F4DD} Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "label", 36);
    \u0275\u0275text(6, "Project Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_3_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.title, $event) || (ctx_r1.project.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 38);
    \u0275\u0275text(9, "Use a clear, descriptive name with framework/technology");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 35)(11, "label", 39);
    \u0275\u0275text(12, "Short Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 40);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_3_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.shortDescription, $event) || (ctx_r1.project.shortDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 38);
    \u0275\u0275text(15, "Max 200 characters. This appears in product cards.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 35)(17, "label", 41);
    \u0275\u0275text(18, "Full Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 42);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_3_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.fullDescription, $event) || (ctx_r1.project.fullDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 43)(21, "div", 35)(22, "label", 44);
    \u0275\u0275text(23, "Category *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_3_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.category, $event) || (ctx_r1.project.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "option", 46);
    \u0275\u0275text(26, "Select category...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, SellComponent_ng_container_2_form_13_div_3_option_27_Template, 2, 3, "option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 35)(29, "label", 48);
    \u0275\u0275text(30, "Version *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_3_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.version, $event) || (ctx_r1.project.version = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.title);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.shortDescription);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.fullDescription);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.category);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.marketplace.categories);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.version);
  }
}
function SellComponent_ng_container_2_form_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "h3");
    \u0275\u0275text(3, "\u{1F4B2} Pricing & Licensing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "div", 35)(6, "label", 51);
    \u0275\u0275text(7, "Regular Price (USD) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 52)(9, "span", 53);
    \u0275\u0275text(10, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_4_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.price, $event) || (ctx_r1.project.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 35)(13, "label", 55);
    \u0275\u0275text(14, "Original Price (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 52)(16, "span", 53);
    \u0275\u0275text(17, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_4_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.originalPrice, $event) || (ctx_r1.project.originalPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "span", 38);
    \u0275\u0275text(20, "Set higher to show a discount badge");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 35)(22, "label");
    \u0275\u0275text(23, "License Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 57)(25, "label", 58)(26, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_4_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.license, $event) || (ctx_r1.project.license = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 60)(28, "strong");
    \u0275\u0275text(29, "\u{1F4C4} Regular License");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "Single end product use");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "label", 58)(33, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_4_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.license, $event) || (ctx_r1.project.license = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 60)(35, "strong");
    \u0275\u0275text(36, "\u{1F513} Extended License");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "Multiple projects & commercial use");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.price);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.originalPrice);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("active", ctx_r1.project.license === "regular");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.license);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r1.project.license === "extended");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.license);
  }
}
function SellComponent_ng_container_2_form_13_div_5_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r11);
  }
}
function SellComponent_ng_container_2_form_13_div_5_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275template(1, SellComponent_ng_container_2_form_13_div_5_div_8_span_1_Template, 2, 1, "span", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.parseTags());
  }
}
function SellComponent_ng_container_2_form_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "h3");
    \u0275\u0275text(3, "\u2699\uFE0F Technical Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "label", 62);
    \u0275\u0275text(6, "Tags (comma separated) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_5_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.tagsInput, $event) || (ctx_r1.tagsInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, SellComponent_ng_container_2_form_13_div_5_div_8_Template, 2, 1, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 35)(10, "label", 65);
    \u0275\u0275text(11, "Key Features (one per line) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 66);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_5_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.featuresInput, $event) || (ctx_r1.featuresInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 35)(14, "label", 67);
    \u0275\u0275text(15, "Tech Stack (comma separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_5_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.techStackInput, $event) || (ctx_r1.techStackInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 43)(18, "div", 35)(19, "label", 69);
    \u0275\u0275text(20, "File Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_5_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.fileSize, $event) || (ctx_r1.project.fileSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 35)(23, "label", 71);
    \u0275\u0275text(24, "Live Demo URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_5_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.demoUrl, $event) || (ctx_r1.project.demoUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 35)(27, "label", 73);
    \u0275\u0275text(28, "YouTube Video URL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_5_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.youtubeUrl, $event) || (ctx_r1.project.youtubeUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tagsInput);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.tagsInput);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.featuresInput);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.techStackInput);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.fileSize);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.demoUrl);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.youtubeUrl);
  }
}
function SellComponent_ng_container_2_form_13_div_6_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "h4");
    \u0275\u0275text(2, "\u{1F4C4} Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 94)(4, "pre", 95);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.project.deploymentGuide);
  }
}
function SellComponent_ng_container_2_form_13_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "h3");
    \u0275\u0275text(3, "\u{1F4D6} Deployment Guide");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 78);
    \u0275\u0275text(5, "A deployment guide is ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "required");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " for all submissions. It helps buyers set up your project successfully.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 79)(10, "div", 80)(11, "span", 81);
    \u0275\u0275text(12, "\u{1F916}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h4");
    \u0275\u0275text(14, "How to Create Your Deployment Guide");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 82)(16, "div", 83)(17, "span", 84);
    \u0275\u0275text(18, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "strong");
    \u0275\u0275text(21, "Prompt AI to generate it");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23, "Use ChatGPT, Gemini, or any AI tool to create a comprehensive deployment guide for your specific project.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 83)(25, "span", 84);
    \u0275\u0275text(26, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div")(28, "strong");
    \u0275\u0275text(29, "Review & customize");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p");
    \u0275\u0275text(31, "Make sure the generated guide accurately reflects your project's setup process, dependencies, and configuration.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 83)(33, "span", 84);
    \u0275\u0275text(34, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div")(36, "strong");
    \u0275\u0275text(37, "Paste it below");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p");
    \u0275\u0275text(39, "Copy the final guide and paste it into the text area. It will be displayed on your product's detail page.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(40, "div", 85)(41, "div", 86)(42, "span");
    \u0275\u0275text(43, "\u{1F4CB} Example AI Prompt (click to copy)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 87);
    \u0275\u0275listener("click", function SellComponent_ng_container_2_form_13_div_6_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.copyPrompt());
    });
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "pre", 88);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 89)(49, "label", 90);
    \u0275\u0275text(50, "Deployment Guide Content *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "textarea", 91);
    \u0275\u0275twoWayListener("ngModelChange", function SellComponent_ng_container_2_form_13_div_6_Template_textarea_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.deploymentGuide, $event) || (ctx_r1.project.deploymentGuide = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 38);
    \u0275\u0275text(53, "Paste the AI generated text here. Leave the [\u{1F4F8} ...] markers so buyers know exactly where to reference your preview screenshots!");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(54, SellComponent_ng_container_2_form_13_div_6_div_54_Template, 6, 1, "div", 92);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(45);
    \u0275\u0275textInterpolate1(" ", ctx_r1.promptCopied ? "\u2705 Copied!" : "\u{1F4CB} Copy", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.aiPromptTemplate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.deploymentGuide);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.project.deploymentGuide);
  }
}
function SellComponent_ng_container_2_form_13_div_7_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "span", 104);
    \u0275\u0275text(2, "\u{1F5BC}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Drop thumbnail image here or click to browse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "PNG, JPG up to 5MB. Recommended: 600x400");
    \u0275\u0275elementEnd()();
  }
}
function SellComponent_ng_container_2_form_13_div_7_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "span", 104);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Click to change");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.thumbnailName);
  }
}
function SellComponent_ng_container_2_form_13_div_7_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "span", 104);
    \u0275\u0275text(2, "\u{1F4F8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Upload preview screenshots");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "PNG, JPG up to 5MB each");
    \u0275\u0275elementEnd()();
  }
}
function SellComponent_ng_container_2_form_13_div_7_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "span", 104);
    \u0275\u0275text(2, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Click to add more");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.screenshotNames.length, " file(s) selected");
  }
}
function SellComponent_ng_container_2_form_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "h3");
    \u0275\u0275text(3, "\u{1F4C1} Files & Media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35)(5, "label");
    \u0275\u0275text(6, "Thumbnail Image *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 96);
    \u0275\u0275listener("click", function SellComponent_ng_container_2_form_13_div_7_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const thumbInput_r14 = \u0275\u0275reference(9);
      return \u0275\u0275resetView(thumbInput_r14.click());
    });
    \u0275\u0275elementStart(8, "input", 97, 0);
    \u0275\u0275listener("change", function SellComponent_ng_container_2_form_13_div_7_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onThumbSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SellComponent_ng_container_2_form_13_div_7_div_10_Template, 7, 0, "div", 98)(11, SellComponent_ng_container_2_form_13_div_7_div_11_Template, 7, 1, "div", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 35)(13, "label");
    \u0275\u0275text(14, "Preview Screenshots");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 96);
    \u0275\u0275listener("click", function SellComponent_ng_container_2_form_13_div_7_Template_div_click_15_listener() {
      \u0275\u0275restoreView(_r13);
      const screenshotInput_r15 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(screenshotInput_r15.click());
    });
    \u0275\u0275elementStart(16, "input", 100, 1);
    \u0275\u0275listener("change", function SellComponent_ng_container_2_form_13_div_7_Template_input_change_16_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onScreenshotsSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, SellComponent_ng_container_2_form_13_div_7_div_18_Template, 7, 0, "div", 98)(19, SellComponent_ng_container_2_form_13_div_7_div_19_Template, 7, 1, "div", 99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 101)(21, "h4");
    \u0275\u0275text(22, "\u{1F4CB} Before You Submit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ul")(24, "li");
    \u0275\u0275text(25, "All submissions are reviewed by our team (2-3 business days)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "li");
    \u0275\u0275text(27, "Your deployment guide will be shown on the product page");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "li");
    \u0275\u0275text(29, "Ensure your code is well-documented and tested");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "li");
    \u0275\u0275text(31, "Remove any API keys or sensitive credentials");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "li");
    \u0275\u0275text(33, "You can track your submission status in ");
    \u0275\u0275elementStart(34, "a", 102);
    \u0275\u0275text(35, "My Submissions");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", !ctx_r1.thumbnailName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.thumbnailName);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.screenshotNames.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.screenshotNames.length > 0);
  }
}
function SellComponent_ng_container_2_form_13_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 106);
    \u0275\u0275listener("click", function SellComponent_ng_container_2_form_13_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275text(1, " \u2190 Previous ");
    \u0275\u0275elementEnd();
  }
}
function SellComponent_ng_container_2_form_13_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 107);
    \u0275\u0275listener("click", function SellComponent_ng_container_2_form_13_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(1, " Next Step \u2192 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", !ctx_r1.isStepValid() || ctx_r1.isUploading());
  }
}
function SellComponent_ng_container_2_form_13_button_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 108);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", !ctx_r1.isFormValid() || ctx_r1.isUploading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isUploading() ? "\u{1F680} Uploading..." : "\u{1F680} Submit for Review", " ");
  }
}
function SellComponent_ng_container_2_form_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 22);
    \u0275\u0275listener("ngSubmit", function SellComponent_ng_container_2_form_13_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275template(2, SellComponent_ng_container_2_form_13_div_2_Template, 5, 6, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SellComponent_ng_container_2_form_13_div_3_Template, 32, 6, "div", 25)(4, SellComponent_ng_container_2_form_13_div_4_Template, 39, 8, "div", 25)(5, SellComponent_ng_container_2_form_13_div_5_Template, 30, 7, "div", 25)(6, SellComponent_ng_container_2_form_13_div_6_Template, 55, 4, "div", 25)(7, SellComponent_ng_container_2_form_13_div_7_Template, 36, 4, "div", 25);
    \u0275\u0275elementStart(8, "div", 26);
    \u0275\u0275template(9, SellComponent_ng_container_2_form_13_button_9_Template, 2, 0, "button", 27);
    \u0275\u0275element(10, "div", 28);
    \u0275\u0275template(11, SellComponent_ng_container_2_form_13_button_11_Template, 2, 1, "button", 29)(12, SellComponent_ng_container_2_form_13_button_12_Template, 2, 2, "button", 30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.steps);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep() === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep() === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep() === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep() === 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep() === 4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentStep() > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentStep() < 4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep() === 4);
  }
}
function SellComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 8)(2, "div", 9)(3, "div", 10)(4, "div")(5, "h1", 11);
    \u0275\u0275text(6, "\u{1F4B0} Sell Your Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 12);
    \u0275\u0275text(8, "Submit your project and start earning. All submissions are reviewed before going live.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 13);
    \u0275\u0275text(10, "\u{1F4CA} My Submissions");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "div", 14);
    \u0275\u0275template(12, SellComponent_ng_container_2_div_12_Template, 12, 0, "div", 15)(13, SellComponent_ng_container_2_form_13_Template, 13, 9, "form", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.submitted());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submitted());
  }
}
var SellComponent = class _SellComponent {
  constructor() {
    this.marketplace = inject(MarketplaceService);
    this.auth = inject(AuthService);
    this.imageUpload = inject(ImageUploadService);
    this.router = inject(Router);
    this.currentStep = signal(0);
    this.submitted = signal(false);
    this.isUploading = signal(false);
    this.promptCopied = false;
    this.steps = ["Basic Info", "Pricing", "Details", "Deploy Guide", "Files"];
    this.aiPromptTemplate = `Generate a comprehensive, beginner-friendly deployment guide for my project called "[YOUR PROJECT NAME]" built with [YOUR TECH STACK].

CRITICAL INSTRUCTIONS:
- Whenever a step is complex or visual, insert a placeholder marker exactly like this: [\u{1F4F8} Insert Screenshot here: Describe exactly what the screenshot should show]
- End the guide with a mandatory "Common Issues & Troubleshooting" section listing 3-5 possible errors buyers might face and exact fixes.

Include these sections:
1. Prerequisites (required software, versions, accounts)
2. Installation steps (clone, install dependencies) - use [\u{1F4F8}] markers here
3. Environment variables setup (list all required env vars) - use [\u{1F4F8}] markers here
4. Database setup (if applicable)
5. Running locally (dev server commands)
6. Building for production
7. Deployment instructions (hosting platforms)
8. Common Issues & Troubleshooting (minimum 3 issues with fixes)

Make it clear, step-by-step, and highly visual.`;
    this.project = {
      title: "",
      shortDescription: "",
      fullDescription: "",
      category: "",
      price: 0,
      tags: [],
      features: [],
      techStack: [],
      compatibility: [],
      version: "",
      fileSize: "",
      license: "regular",
      hasReskinService: false,
      status: "pending",
      deploymentGuide: "",
      youtubeUrl: ""
    };
    this.tagsInput = "";
    this.featuresInput = "";
    this.techStackInput = "";
    this.thumbnailName = "";
    this.screenshotNames = [];
  }
  parseTags() {
    return this.tagsInput.split(",").map((t) => t.trim()).filter((t) => t.length > 0);
  }
  isStepValid() {
    switch (this.currentStep()) {
      case 0:
        return !!(this.project.title && this.project.shortDescription && this.project.category && this.project.version);
      case 1:
        return this.project.price > 0;
      case 2:
        return true;
      case 3:
        return !!(this.project.deploymentGuide && this.project.deploymentGuide.length > 50);
      default:
        return true;
    }
  }
  isFormValid() {
    return !!(this.project.title && this.project.shortDescription && this.project.category && this.project.version && this.project.price > 0 && this.project.deploymentGuide && this.project.deploymentGuide.length > 50);
  }
  nextStep() {
    if (this.currentStep() < 4)
      this.currentStep.update((v) => v + 1);
  }
  prevStep() {
    if (this.currentStep() > 0)
      this.currentStep.update((v) => v - 1);
  }
  goToStep(i) {
    if (i <= this.currentStep())
      this.currentStep.set(i);
  }
  copyPrompt() {
    navigator.clipboard.writeText(this.aiPromptTemplate);
    this.promptCopied = true;
    setTimeout(() => this.promptCopied = false, 2e3);
  }
  onThumbSelect(event) {
    const input = event.target;
    if (input.files?.length) {
      this.thumbnailName = input.files[0].name;
      const reader = new FileReader();
      reader.onload = (e) => this.project.thumbnailData = e.target?.result;
      reader.readAsDataURL(input.files[0]);
    }
  }
  onScreenshotsSelect(event) {
    const input = event.target;
    if (input.files) {
      if (!this.project.previewData)
        this.project.previewData = [];
      Array.from(input.files).forEach((file) => {
        this.screenshotNames.push(file.name);
        const reader = new FileReader();
        reader.onload = (e) => {
          this.project.previewData.push(e.target?.result);
        };
        reader.readAsDataURL(file);
      });
    }
  }
  onSubmit() {
    return __async(this, null, function* () {
      this.isUploading.set(true);
      try {
        if (this.project.thumbnailData && this.project.thumbnailData.startsWith("data:")) {
          this.project.thumbnailUrl = yield this.imageUpload.upload(this.project.thumbnailData, "products/thumbnails");
          delete this.project.thumbnailData;
        }
        if (this.project.previewData && this.project.previewData.length > 0) {
          if (!this.project.previewImages)
            this.project.previewImages = [];
          for (const img of this.project.previewData) {
            if (img.startsWith("data:")) {
              const url = yield this.imageUpload.upload(img, "products/screenshots");
              this.project.previewImages.push(url);
            } else {
              this.project.previewImages.push(img);
            }
          }
          delete this.project.previewData;
        }
        this.project.tags = this.parseTags();
        this.project.features = this.featuresInput.split("\n").filter((f) => f.trim());
        this.project.techStack = this.techStackInput.split(",").map((t) => t.trim()).filter((t) => t);
        this.project.status = "pending";
        const user = this.auth.currentUser();
        const profile = this.auth.userProfile();
        if (user) {
          this.project.submittedBy = {
            uid: user.uid,
            displayName: profile?.displayName || user.displayName || "Seller",
            email: user.email || ""
          };
        }
        const cleanedProject = this.marketplace.cleanForFirestore(this.project);
        yield this.marketplace.submitProject(cleanedProject);
        this.submitted.set(true);
      } catch (error) {
        console.error("Error submitting:", error);
        alert("Failed to submit. Check console for details.");
      } finally {
        this.isUploading.set(false);
      }
    });
  }
  resetForm() {
    this.submitted.set(false);
    this.currentStep.set(0);
    this.project = {
      title: "",
      shortDescription: "",
      fullDescription: "",
      category: "",
      price: 0,
      tags: [],
      features: [],
      techStack: [],
      compatibility: [],
      version: "",
      fileSize: "",
      license: "regular",
      hasReskinService: false,
      status: "pending",
      deploymentGuide: "",
      youtubeUrl: ""
    };
    this.tagsInput = "";
    this.featuresInput = "";
    this.techStackInput = "";
    this.thumbnailName = "";
    this.screenshotNames = [];
  }
  static {
    this.\u0275fac = function SellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SellComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SellComponent, selectors: [["app-sell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [["thumbInput", ""], ["screenshotInput", ""], ["class", "pm-container auth-gate", 4, "ngIf"], [4, "ngIf"], [1, "pm-container", "auth-gate"], [1, "auth-card"], [1, "auth-icon"], ["routerLink", "/login", 1, "pm-btn", "pm-btn-primary", "pm-btn-lg"], [1, "sell-hero"], [1, "pm-container"], [1, "hero-row"], [1, "pm-heading-lg"], [1, "pm-text-secondary"], ["routerLink", "/sell/dashboard", 1, "pm-btn", "pm-btn-outline"], [1, "pm-container", "sell-layout"], ["class", "success-card", 4, "ngIf"], ["class", "submit-form", 3, "ngSubmit", 4, "ngIf"], [1, "success-card"], [1, "success-icon"], [1, "success-actions"], ["routerLink", "/sell/dashboard", 1, "pm-btn", "pm-btn-primary"], [1, "pm-btn", "pm-btn-outline", 3, "click"], [1, "submit-form", 3, "ngSubmit"], [1, "progress-steps"], ["class", "step", 3, "active", "completed", "click", 4, "ngFor", "ngForOf"], ["class", "form-step", 4, "ngIf"], [1, "form-navigation"], ["type", "button", "class", "pm-btn pm-btn-ghost", 3, "click", 4, "ngIf"], [1, "nav-spacer"], ["type", "button", "class", "pm-btn pm-btn-primary", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "class", "pm-btn pm-btn-success pm-btn-lg", 3, "disabled", 4, "ngIf"], [1, "step", 3, "click"], [1, "step-num"], [1, "form-step"], [1, "form-card"], [1, "form-group"], ["for", "title"], ["id", "title", "type", "text", "name", "title", "placeholder", "e.g. SaaS Admin Dashboard \u2014 Angular + Firebase", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-hint"], ["for", "shortDesc"], ["id", "shortDesc", "name", "shortDesc", "placeholder", "Brief overview (1-2 sentences)", "rows", "3", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "fullDesc"], ["id", "fullDesc", "name", "fullDesc", "placeholder", "Detailed description of your project", "rows", "8", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["for", "category"], ["id", "category", "name", "category", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "version"], ["id", "version", "type", "text", "name", "version", "placeholder", "e.g. 1.0.0", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [3, "value"], ["for", "price"], [1, "price-input-wrap"], [1, "price-symbol"], ["id", "price", "type", "number", "name", "price", "placeholder", "49", "required", "", "min", "1", 1, "form-input", "price-field", 3, "ngModelChange", "ngModel"], ["for", "origPrice"], ["id", "origPrice", "type", "number", "name", "origPrice", "placeholder", "99", 1, "form-input", "price-field", 3, "ngModelChange", "ngModel"], [1, "license-options"], [1, "license-opt"], ["type", "radio", "name", "license", "value", "regular", 3, "ngModelChange", "ngModel"], [1, "license-opt-content"], ["type", "radio", "name", "license", "value", "extended", 3, "ngModelChange", "ngModel"], ["for", "tags"], ["id", "tags", "type", "text", "name", "tags", "placeholder", "angular, firebase, saas, dashboard", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "tag-preview", 4, "ngIf"], ["for", "features"], ["id", "features", "name", "features", "placeholder", "Real-time dashboard\nUser authentication\nPayment integration", "rows", "6", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "techStack"], ["id", "techStack", "type", "text", "name", "techStack", "placeholder", "Angular, Firebase, Node.js", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "fileSize"], ["id", "fileSize", "type", "text", "name", "fileSize", "placeholder", "e.g. 150MB", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "demoUrl"], ["id", "demoUrl", "type", "url", "name", "demoUrl", "placeholder", "https://your-demo.com", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "youtubeUrl"], ["id", "youtubeUrl", "type", "url", "name", "youtubeUrl", "placeholder", "https://youtube.com/watch?v=...", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "tag-preview"], ["class", "preview-tag", 4, "ngFor", "ngForOf"], [1, "preview-tag"], [1, "section-desc"], [1, "guide-instructions"], [1, "guide-instructions-header"], [1, "gi-icon"], [1, "guide-steps-list"], [1, "gi-step"], [1, "gi-num"], [1, "prompt-box"], [1, "prompt-header"], ["type", "button", 1, "copy-btn", 3, "click"], [1, "prompt-text"], [1, "form-group", 2, "margin-top", "24px"], ["for", "deployGuide"], ["id", "deployGuide", "name", "deployGuide", "placeholder", "Paste your AI-generated deployment guide here...\n\n## Prerequisites\n- Node.js 18+\n- npm or yarn\n\n## Installation\n1. Clone the repository...\n\n[\u{1F4F8} Insert Screenshot here: Output of successful install]...", "rows", "16", "required", "", 1, "form-input", "guide-textarea", 3, "ngModelChange", "ngModel"], ["class", "guide-preview", 4, "ngIf"], [1, "guide-preview"], [1, "preview-content"], [1, "guide-rendered"], [1, "file-upload", 3, "click"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["class", "upload-content", 4, "ngIf"], ["class", "upload-content selected", 4, "ngIf"], ["type", "file", "accept", "image/*", "multiple", "", "hidden", "", 3, "change"], [1, "guidelines-box"], ["routerLink", "/sell/dashboard"], [1, "upload-content"], [1, "upload-icon"], [1, "upload-content", "selected"], ["type", "button", 1, "pm-btn", "pm-btn-ghost", 3, "click"], ["type", "button", 1, "pm-btn", "pm-btn-primary", 3, "click", "disabled"], ["type", "submit", 1, "pm-btn", "pm-btn-success", "pm-btn-lg", 3, "disabled"]], template: function SellComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275template(1, SellComponent_div_1_Template, 10, 0, "div", 2)(2, SellComponent_ng_container_2_Template, 14, 2, "ng-container", 3);
        \u0275\u0275element(3, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.auth.currentUser());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.auth.currentUser());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, HeaderComponent, FooterComponent], styles: ['\n\n.auth-gate[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 60vh;\n  padding: 40px 20px;\n}\n.auth-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 40px;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-xl);\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-lg);\n  max-width: 480px;\n  width: 100%;\n}\n.auth-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n.auth-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\n.auth-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  margin: 0 0 28px;\n}\n.sell-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F0FDF4,\n      #ECFDF5,\n      #EEF0FF);\n  padding: 32px 0;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.hero-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.sell-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n}\n.sell-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.sell-layout[_ngcontent-%COMP%] {\n  padding: 32px 0 64px;\n  max-width: 800px;\n}\n.progress-steps[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 32px;\n  overflow-x: auto;\n}\n.step[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 14px;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-md);\n  border: 2px solid var(--pm-border);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.step.active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.04);\n}\n.step.completed[_ngcontent-%COMP%] {\n  border-color: #10B981;\n  background: rgba(16, 185, 129, 0.04);\n}\n.step-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  background: var(--pm-surface-muted);\n  color: var(--pm-text-muted);\n  flex-shrink: 0;\n}\n.step.active[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary);\n  color: white;\n}\n.step.completed[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: #10B981;\n  color: white;\n}\n.step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--pm-text-secondary);\n}\n.step.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.step.completed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 32px;\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-sm);\n  margin-bottom: 24px;\n}\n.form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  font-size: 1.2rem;\n}\n.section-desc[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--pm-text-secondary);\n  margin: -16px 0 24px;\n  line-height: 1.6;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--pm-text-primary);\n  margin-bottom: 6px;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid var(--pm-border);\n  border-radius: var(--pm-radius-sm);\n  font-family: inherit;\n  font-size: 0.9rem;\n  background: var(--pm-surface);\n  color: var(--pm-text-primary);\n  outline: none;\n  transition: border-color 0.2s;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--ion-color-primary);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--pm-text-muted);\n}\ntextarea.form-input[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  line-height: 1.5;\n}\nselect.form-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.form-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n  margin-top: 4px;\n  display: block;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.price-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.price-symbol[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-weight: 700;\n  color: var(--pm-text-muted);\n}\n.price-field[_ngcontent-%COMP%] {\n  padding-left: 32px;\n}\n.license-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.license-opt[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border: 2px solid var(--pm-border);\n  border-radius: var(--pm-radius-md);\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.license-opt.active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.03);\n}\n.license-opt[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--ion-color-primary);\n}\n.license-opt-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n}\n.license-opt-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.tag-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 8px;\n}\n.preview-tag[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  background: rgba(99, 102, 241, 0.08);\n  border-radius: var(--pm-radius-full);\n  font-size: 0.75rem;\n  color: #6366F1;\n}\n.guide-instructions[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.04),\n      rgba(16, 185, 129, 0.04));\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  margin-bottom: 8px;\n}\n.guide-instructions-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.gi-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.guide-instructions-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.guide-steps-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.gi-step[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n}\n.gi-num[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--ion-color-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.85rem;\n  flex-shrink: 0;\n}\n.gi-step[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  margin-bottom: 2px;\n}\n.gi-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  color: var(--pm-text-secondary);\n  line-height: 1.5;\n}\n.prompt-box[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-md);\n  overflow: hidden;\n}\n.prompt-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 16px;\n  background: var(--pm-surface-muted);\n  border-bottom: 1px solid var(--pm-border-light);\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--pm-text-secondary);\n}\n.copy-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-sm);\n  background: var(--pm-surface);\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.copy-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-primary);\n  color: var(--ion-color-primary);\n}\n.prompt-text[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin: 0;\n  font-size: 0.82rem;\n  line-height: 1.6;\n  color: var(--pm-text-secondary);\n  white-space: pre-wrap;\n  font-family: inherit;\n}\n.guide-textarea[_ngcontent-%COMP%] {\n  font-family: "Courier New", monospace;\n  font-size: 0.85rem;\n  line-height: 1.6;\n}\n.guide-preview[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background: var(--pm-surface-muted);\n  border: 1px solid var(--pm-border-light);\n  border-radius: var(--pm-radius-md);\n  overflow: hidden;\n}\n.guide-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 12px 16px;\n  font-size: 0.85rem;\n  background: var(--pm-surface);\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.preview-content[_ngcontent-%COMP%] {\n  padding: 16px;\n  max-height: 300px;\n  overflow-y: auto;\n}\n.guide-rendered[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  line-height: 1.7;\n  color: var(--pm-text-secondary);\n  white-space: pre-wrap;\n  font-family: inherit;\n}\n.file-upload[_ngcontent-%COMP%] {\n  border: 2px dashed var(--pm-border);\n  border-radius: var(--pm-radius-md);\n  padding: 32px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.file-upload[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.02);\n}\n.upload-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.upload-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.upload-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--pm-text-primary);\n}\n.upload-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.upload-content.selected[_ngcontent-%COMP%] {\n  color: #10B981;\n}\n.upload-content.selected[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.guidelines-box[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: rgba(16, 185, 129, 0.05);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  border-radius: var(--pm-radius-md);\n  margin-top: 8px;\n}\n.guidelines-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 0.9rem;\n}\n.guidelines-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n}\n.guidelines-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--pm-text-secondary);\n  padding: 3px 0;\n}\n.guidelines-box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.form-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.nav-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.success-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 32px;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-xl);\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-lg);\n  max-width: 560px;\n  margin: 48px auto;\n  animation: _ngcontent-%COMP%_scaleIn 0.4s ease;\n}\n.success-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n.success-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\n.success-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  margin: 0 0 28px;\n  line-height: 1.6;\n}\n.success-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .progress-steps[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n  .step[_ngcontent-%COMP%] {\n    min-width: 90px;\n    padding: 10px;\n  }\n  .step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n  }\n  .license-options[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .hero-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .guide-instructions[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=sell.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SellComponent, { className: "SellComponent", filePath: "src\\app\\pages\\sell\\sell.component.ts", lineNumber: 540 });
})();
export {
  SellComponent
};
//# sourceMappingURL=chunk-HGID4FO4.js.map

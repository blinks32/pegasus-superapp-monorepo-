import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FooterComponent,
  FormsModule,
  HeaderComponent,
  MarketplaceService,
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
} from "./chunk-HPEEYXSC.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  inject,
  signal,
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
} from "./chunk-AKTLL2DV.js";

// src/app/pages/admin/submit-project/submit-project.component.ts
function SubmitProjectComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275text(2, "\u{1F389}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Project Submitted Successfully!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your project has been submitted for review. Our team will review it within 2-3 business days.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13)(8, "a", 14);
    \u0275\u0275text(9, "View Dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 15);
    \u0275\u0275listener("click", function SubmitProjectComponent_div_10_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetForm());
    });
    \u0275\u0275text(11, "Submit Another");
    \u0275\u0275elementEnd()()();
  }
}
function SubmitProjectComponent_form_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function SubmitProjectComponent_form_11_div_2_Template_div_click_0_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToStep(i_r5));
    });
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.currentStep() === i_r5)("completed", ctx_r1.currentStep() > i_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.currentStep() > i_r5 ? "\u2713" : i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r6);
  }
}
function SubmitProjectComponent_form_11_div_3_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
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
function SubmitProjectComponent_form_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "h3");
    \u0275\u0275text(3, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "label", 31);
    \u0275\u0275text(6, "Project Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_3_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.title, $event) || (ctx_r1.project.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 33);
    \u0275\u0275text(9, "Use a clear, descriptive name with framework/technology");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 30)(11, "label", 34);
    \u0275\u0275text(12, "Short Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 35);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_3_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.shortDescription, $event) || (ctx_r1.project.shortDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 33);
    \u0275\u0275text(15, "Max 200 characters. This appears in product cards.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 30)(17, "label", 36);
    \u0275\u0275text(18, "Full Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 37);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_3_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.fullDescription, $event) || (ctx_r1.project.fullDescription = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 33);
    \u0275\u0275text(21, "Supports HTML formatting. Be thorough \u2014 good descriptions increase sales.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 38)(23, "div", 30)(24, "label", 39);
    \u0275\u0275text(25, "Category *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 40);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_3_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.category, $event) || (ctx_r1.project.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(27, "option", 41);
    \u0275\u0275text(28, "Select category...");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, SubmitProjectComponent_form_11_div_3_option_29_Template, 2, 3, "option", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 30)(31, "label", 43);
    \u0275\u0275text(32, "Version *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_3_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.version, $event) || (ctx_r1.project.version = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.title);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.shortDescription);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.fullDescription);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.category);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.marketplace.categories);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.version);
  }
}
function SubmitProjectComponent_form_11_div_4_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "label", 60);
    \u0275\u0275text(2, "Reskin Service Price (USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47)(4, "span", 48);
    \u0275\u0275text(5, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_4_div_44_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.reskinPrice, $event) || (ctx_r1.project.reskinPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.reskinPrice);
  }
}
function SubmitProjectComponent_form_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "h3");
    \u0275\u0275text(3, "Pricing & Licensing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38)(5, "div", 30)(6, "label", 46);
    \u0275\u0275text(7, "Regular Price (USD) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 47)(9, "span", 48);
    \u0275\u0275text(10, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_4_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.price, $event) || (ctx_r1.project.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 30)(13, "label", 50);
    \u0275\u0275text(14, "Original Price (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 47)(16, "span", 48);
    \u0275\u0275text(17, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_4_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.originalPrice, $event) || (ctx_r1.project.originalPrice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "span", 33);
    \u0275\u0275text(20, "Set higher to show discount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 30)(22, "label");
    \u0275\u0275text(23, "License Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 52)(25, "label", 53)(26, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_4_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.license, $event) || (ctx_r1.project.license = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 55)(28, "strong");
    \u0275\u0275text(29, "\u{1F4C4} Regular License");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "Single end product use");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "label", 53)(33, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_4_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.license, $event) || (ctx_r1.project.license = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 55)(35, "strong");
    \u0275\u0275text(36, "\u{1F513} Extended License");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "Multiple projects & commercial use");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(39, "div", 30)(40, "label", 57)(41, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_4_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.hasReskinService, $event) || (ctx_r1.project.hasReskinService = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43, "\u{1F3A8} Offer Reskin Service");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(44, SubmitProjectComponent_form_11_div_4_div_44_Template, 7, 1, "div", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
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
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.hasReskinService);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.project.hasReskinService);
  }
}
function SubmitProjectComponent_form_11_div_5_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r12);
  }
}
function SubmitProjectComponent_form_11_div_5_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275template(1, SubmitProjectComponent_form_11_div_5_div_10_span_1_Template, 2, 1, "span", 76);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.parseTags());
  }
}
function SubmitProjectComponent_form_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "h3");
    \u0275\u0275text(3, "Technical Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "label", 62);
    \u0275\u0275text(6, "Tags (comma separated) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_5_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.tagsInput, $event) || (ctx_r1.tagsInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 33);
    \u0275\u0275text(9, "Add relevant tags to help buyers find your product");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SubmitProjectComponent_form_11_div_5_div_10_Template, 2, 1, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 30)(12, "label", 65);
    \u0275\u0275text(13, "Key Features (one per line) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "textarea", 66);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_5_Template_textarea_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.featuresInput, $event) || (ctx_r1.featuresInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 30)(16, "label", 67);
    \u0275\u0275text(17, "Tech Stack (comma separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_5_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.techStackInput, $event) || (ctx_r1.techStackInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 30)(20, "label", 69);
    \u0275\u0275text(21, "Compatibility (comma separated)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_5_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.compatInput, $event) || (ctx_r1.compatInput = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 38)(24, "div", 30)(25, "label", 71);
    \u0275\u0275text(26, "File Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_5_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.fileSize, $event) || (ctx_r1.project.fileSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 30)(29, "label", 73);
    \u0275\u0275text(30, "Demo URL (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function SubmitProjectComponent_form_11_div_5_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.project.demoUrl, $event) || (ctx_r1.project.demoUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.tagsInput);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.tagsInput);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.featuresInput);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.techStackInput);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.compatInput);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.fileSize);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.project.demoUrl);
  }
}
function SubmitProjectComponent_form_11_div_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "span", 86);
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
function SubmitProjectComponent_form_11_div_6_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "span", 86);
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
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.thumbnailName);
  }
}
function SubmitProjectComponent_form_11_div_6_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "span", 86);
    \u0275\u0275text(2, "\u{1F4F8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Upload preview screenshots");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Up to 5 images. PNG, JPG up to 5MB each");
    \u0275\u0275elementEnd()();
  }
}
function SubmitProjectComponent_form_11_div_6_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "span", 86);
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
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.screenshotNames.length, " file(s) selected");
  }
}
function SubmitProjectComponent_form_11_div_6_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "span", 86);
    \u0275\u0275text(2, "\u{1F4C1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Upload your source code package");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "ZIP, RAR up to 500MB");
    \u0275\u0275elementEnd()();
  }
}
function SubmitProjectComponent_form_11_div_6_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "span", 86);
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
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.sourceName);
  }
}
function SubmitProjectComponent_form_11_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "h3");
    \u0275\u0275text(3, "Files & Media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "label");
    \u0275\u0275text(6, "Thumbnail Image *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 78);
    \u0275\u0275listener("click", function SubmitProjectComponent_form_11_div_6_Template_div_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const thumbInput_r14 = \u0275\u0275reference(9);
      return \u0275\u0275resetView(thumbInput_r14.click());
    });
    \u0275\u0275elementStart(8, "input", 79, 0);
    \u0275\u0275listener("change", function SubmitProjectComponent_form_11_div_6_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onThumbSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SubmitProjectComponent_form_11_div_6_div_10_Template, 7, 0, "div", 80)(11, SubmitProjectComponent_form_11_div_6_div_11_Template, 7, 1, "div", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 30)(13, "label");
    \u0275\u0275text(14, "Preview Screenshots");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 78);
    \u0275\u0275listener("click", function SubmitProjectComponent_form_11_div_6_Template_div_click_15_listener() {
      \u0275\u0275restoreView(_r13);
      const screenshotInput_r15 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(screenshotInput_r15.click());
    });
    \u0275\u0275elementStart(16, "input", 82, 1);
    \u0275\u0275listener("change", function SubmitProjectComponent_form_11_div_6_Template_input_change_16_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onScreenshotsSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, SubmitProjectComponent_form_11_div_6_div_18_Template, 7, 0, "div", 80)(19, SubmitProjectComponent_form_11_div_6_div_19_Template, 7, 1, "div", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 30)(21, "label");
    \u0275\u0275text(22, "Source Code (ZIP) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 78);
    \u0275\u0275listener("click", function SubmitProjectComponent_form_11_div_6_Template_div_click_23_listener() {
      \u0275\u0275restoreView(_r13);
      const sourceInput_r16 = \u0275\u0275reference(25);
      return \u0275\u0275resetView(sourceInput_r16.click());
    });
    \u0275\u0275elementStart(24, "input", 83, 2);
    \u0275\u0275listener("change", function SubmitProjectComponent_form_11_div_6_Template_input_change_24_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSourceSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, SubmitProjectComponent_form_11_div_6_div_26_Template, 7, 0, "div", 80)(27, SubmitProjectComponent_form_11_div_6_div_27_Template, 7, 1, "div", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 84)(29, "h4");
    \u0275\u0275text(30, "\u{1F4CB} Submission Guidelines");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "ul")(32, "li");
    \u0275\u0275text(33, "Ensure your code is well-documented and organized");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "li");
    \u0275\u0275text(35, "Include a README with setup instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "li");
    \u0275\u0275text(37, "Remove any API keys or sensitive credentials");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "li");
    \u0275\u0275text(39, "Test thoroughly before submitting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "li");
    \u0275\u0275text(41, "Review typically takes 2-3 business days");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", !ctx_r1.thumbnailName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.thumbnailName);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.screenshotNames.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.screenshotNames.length > 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", !ctx_r1.sourceName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sourceName);
  }
}
function SubmitProjectComponent_form_11_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 88);
    \u0275\u0275listener("click", function SubmitProjectComponent_form_11_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.prevStep());
    });
    \u0275\u0275text(1, " \u2190 Previous ");
    \u0275\u0275elementEnd();
  }
}
function SubmitProjectComponent_form_11_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function SubmitProjectComponent_form_11_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveDraft());
    });
    \u0275\u0275text(1, " \u{1F4BE} Save as Draft ");
    \u0275\u0275elementEnd();
  }
}
function SubmitProjectComponent_form_11_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 90);
    \u0275\u0275listener("click", function SubmitProjectComponent_form_11_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(1, " Next Step \u2192 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.isStepValid());
  }
}
function SubmitProjectComponent_form_11_button_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275text(1, " \u{1F680} Submit for Review ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.isFormValid());
  }
}
function SubmitProjectComponent_form_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 16);
    \u0275\u0275listener("ngSubmit", function SubmitProjectComponent_form_11_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275template(2, SubmitProjectComponent_form_11_div_2_Template, 5, 6, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SubmitProjectComponent_form_11_div_3_Template, 34, 6, "div", 19)(4, SubmitProjectComponent_form_11_div_4_Template, 45, 10, "div", 19)(5, SubmitProjectComponent_form_11_div_5_Template, 32, 7, "div", 19)(6, SubmitProjectComponent_form_11_div_6_Template, 42, 6, "div", 19);
    \u0275\u0275elementStart(7, "div", 20);
    \u0275\u0275template(8, SubmitProjectComponent_form_11_button_8_Template, 2, 0, "button", 21);
    \u0275\u0275element(9, "div", 22);
    \u0275\u0275template(10, SubmitProjectComponent_form_11_button_10_Template, 2, 0, "button", 23)(11, SubmitProjectComponent_form_11_button_11_Template, 2, 1, "button", 24)(12, SubmitProjectComponent_form_11_button_12_Template, 2, 1, "button", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
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
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentStep() > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.currentStep() === 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep() < 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.currentStep() === 3);
  }
}
var SubmitProjectComponent = class _SubmitProjectComponent {
  constructor() {
    this.marketplace = inject(MarketplaceService);
    this.router = inject(Router);
    this.currentStep = signal(0);
    this.submitted = signal(false);
    this.steps = ["Basic Info", "Pricing", "Details", "Files"];
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
      version: "1.0.0",
      fileSize: "",
      license: "regular",
      hasReskinService: false,
      status: "pending"
    };
    this.tagsInput = "";
    this.featuresInput = "";
    this.techStackInput = "";
    this.compatInput = "";
    this.thumbnailName = "";
    this.screenshotNames = [];
    this.sourceName = "";
  }
  parseTags() {
    return this.tagsInput.split(",").map((t) => t.trim()).filter((t) => t.length > 0);
  }
  isStepValid() {
    switch (this.currentStep()) {
      case 0:
        return !!(this.project.title && this.project.shortDescription && this.project.category);
      case 1:
        return this.project.price > 0;
      case 2:
        return true;
      default:
        return true;
    }
  }
  isFormValid() {
    return !!(this.project.title && this.project.shortDescription && this.project.category && this.project.price > 0);
  }
  nextStep() {
    if (this.currentStep() < 3)
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
  onThumbSelect(event) {
    const input = event.target;
    if (input.files?.length)
      this.thumbnailName = input.files[0].name;
  }
  onScreenshotsSelect(event) {
    const input = event.target;
    if (input.files)
      this.screenshotNames = Array.from(input.files).map((f) => f.name);
  }
  onSourceSelect(event) {
    const input = event.target;
    if (input.files?.length)
      this.sourceName = input.files[0].name;
  }
  saveDraft() {
    this.project.tags = this.parseTags();
    this.project.features = this.featuresInput.split("\n").filter((f) => f.trim());
    this.project.techStack = this.techStackInput.split(",").map((t) => t.trim()).filter((t) => t);
    this.project.compatibility = this.compatInput.split(",").map((c) => c.trim()).filter((c) => c);
    this.project.status = "draft";
    this.marketplace.submitProject(this.project);
    alert("Draft saved successfully!");
  }
  onSubmit() {
    this.project.tags = this.parseTags();
    this.project.features = this.featuresInput.split("\n").filter((f) => f.trim());
    this.project.techStack = this.techStackInput.split(",").map((t) => t.trim()).filter((t) => t);
    this.project.compatibility = this.compatInput.split(",").map((c) => c.trim()).filter((c) => c);
    this.project.status = "pending";
    this.marketplace.submitProject(this.project);
    this.submitted.set(true);
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
      version: "1.0.0",
      fileSize: "",
      license: "regular",
      hasReskinService: false,
      status: "pending"
    };
    this.tagsInput = "";
    this.featuresInput = "";
    this.techStackInput = "";
    this.compatInput = "";
    this.thumbnailName = "";
    this.screenshotNames = [];
    this.sourceName = "";
  }
  static {
    this.\u0275fac = function SubmitProjectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubmitProjectComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubmitProjectComponent, selectors: [["app-submit-project"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [["thumbInput", ""], ["screenshotInput", ""], ["sourceInput", ""], [1, "submit-hero"], [1, "pm-container"], ["routerLink", "/admin", 1, "back-link"], [1, "pm-heading-lg"], [1, "pm-text-secondary"], [1, "pm-container", "submit-layout"], ["class", "success-card", 4, "ngIf"], ["class", "submit-form", 3, "ngSubmit", 4, "ngIf"], [1, "success-card"], [1, "success-icon"], [1, "success-actions"], ["routerLink", "/admin", 1, "pm-btn", "pm-btn-primary"], [1, "pm-btn", "pm-btn-outline", 3, "click"], [1, "submit-form", 3, "ngSubmit"], [1, "progress-steps"], ["class", "step", 3, "active", "completed", "click", 4, "ngFor", "ngForOf"], ["class", "form-step", 4, "ngIf"], [1, "form-navigation"], ["type", "button", "class", "pm-btn pm-btn-ghost", 3, "click", 4, "ngIf"], [1, "nav-spacer"], ["type", "button", "class", "pm-btn pm-btn-outline", 3, "click", 4, "ngIf"], ["type", "button", "class", "pm-btn pm-btn-primary", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "class", "pm-btn pm-btn-success pm-btn-lg", 3, "disabled", 4, "ngIf"], [1, "step", 3, "click"], [1, "step-num"], [1, "form-step"], [1, "form-card"], [1, "form-group"], ["for", "title"], ["id", "title", "type", "text", "name", "title", "placeholder", "e.g., SuperApp \u2014 Flutter Multi-Service Platform", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-hint"], ["for", "shortDesc"], ["id", "shortDesc", "name", "shortDesc", "placeholder", "Brief overview of your product in 1-2 sentences...", "rows", "3", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "fullDesc"], ["id", "fullDesc", "name", "fullDesc", "placeholder", "Detailed description with features, tech stack, and usage instructions...", "rows", "8", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["for", "category"], ["id", "category", "name", "category", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "version"], ["id", "version", "type", "text", "name", "version", "placeholder", "e.g., 1.0.0", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [3, "value"], ["for", "price"], [1, "price-input-wrap"], [1, "price-symbol"], ["id", "price", "type", "number", "name", "price", "placeholder", "49", "required", "", "min", "1", 1, "form-input", "price-field", 3, "ngModelChange", "ngModel"], ["for", "origPrice"], ["id", "origPrice", "type", "number", "name", "origPrice", "placeholder", "99", 1, "form-input", "price-field", 3, "ngModelChange", "ngModel"], [1, "license-options"], [1, "license-opt"], ["type", "radio", "name", "license", "value", "regular", 3, "ngModelChange", "ngModel"], [1, "license-opt-content"], ["type", "radio", "name", "license", "value", "extended", 3, "ngModelChange", "ngModel"], [1, "checkbox-label"], ["type", "checkbox", "name", "reskin", 3, "ngModelChange", "ngModel"], ["class", "form-group", 4, "ngIf"], ["for", "reskinPrice"], ["id", "reskinPrice", "type", "number", "name", "reskinPrice", "placeholder", "199", 1, "form-input", "price-field", 3, "ngModelChange", "ngModel"], ["for", "tags"], ["id", "tags", "type", "text", "name", "tags", "placeholder", "flutter, firebase, multi-vendor, super-app", 1, "form-input", 3, "ngModelChange", "ngModel"], ["class", "tag-preview", 4, "ngIf"], ["for", "features"], ["id", "features", "name", "features", "placeholder", "Push Notifications\nPayment Gateway\nAdmin Dashboard\nReal-time Tracking", "rows", "6", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "techStack"], ["id", "techStack", "type", "text", "name", "techStack", "placeholder", "Flutter 3.x, Firebase, Dart, Google Maps API", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "compat"], ["id", "compat", "type", "text", "name", "compat", "placeholder", "iOS 13+, Android 8+, Web", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "fileSize"], ["id", "fileSize", "type", "text", "name", "fileSize", "placeholder", "e.g., 285 MB", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "demoUrl"], ["id", "demoUrl", "type", "url", "name", "demoUrl", "placeholder", "https://demo.example.com", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "tag-preview"], ["class", "preview-tag", 4, "ngFor", "ngForOf"], [1, "preview-tag"], [1, "file-upload", 3, "click"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], ["class", "upload-content", 4, "ngIf"], ["class", "upload-content selected", 4, "ngIf"], ["type", "file", "accept", "image/*", "multiple", "", "hidden", "", 3, "change"], ["type", "file", "accept", ".zip,.rar,.7z", "hidden", "", 3, "change"], [1, "guidelines-box"], [1, "upload-content"], [1, "upload-icon"], [1, "upload-content", "selected"], ["type", "button", 1, "pm-btn", "pm-btn-ghost", 3, "click"], ["type", "button", 1, "pm-btn", "pm-btn-outline", 3, "click"], ["type", "button", 1, "pm-btn", "pm-btn-primary", 3, "click", "disabled"], ["type", "submit", 1, "pm-btn", "pm-btn-success", "pm-btn-lg", 3, "disabled"]], template: function SubmitProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "section", 3)(2, "div", 4)(3, "a", 5);
        \u0275\u0275text(4, "\u2190 Back to Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1", 6);
        \u0275\u0275text(6, "\u{1F4E4} Submit New Project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 7);
        \u0275\u0275text(8, "Fill in the details below to submit your project for review");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275template(10, SubmitProjectComponent_div_10_Template, 12, 0, "div", 9)(11, SubmitProjectComponent_form_11_Template, 13, 9, "form", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.submitted());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.submitted());
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, NgModel, NgForm, HeaderComponent, FooterComponent], styles: ["\n\n.submit-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F8FAFC,\n      #EEF0FF);\n  padding: 32px 0;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.submit-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n}\n.submit-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.back-link[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--pm-text-muted);\n  text-decoration: none;\n  display: inline-block;\n  margin-bottom: 8px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-primary);\n}\n.submit-layout[_ngcontent-%COMP%] {\n  padding: 32px 0 64px;\n  max-width: 800px;\n}\n.submit-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.progress-steps[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 32px;\n}\n.step[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 16px;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-md);\n  border: 2px solid var(--pm-border);\n  cursor: pointer;\n  transition: all var(--pm-transition-fast);\n}\n.step.active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.04);\n}\n.step.completed[_ngcontent-%COMP%] {\n  border-color: #10B981;\n  background: rgba(16, 185, 129, 0.04);\n}\n.step-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  font-weight: 700;\n  background: var(--pm-surface-muted);\n  color: var(--pm-text-muted);\n  flex-shrink: 0;\n}\n.step.active[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary);\n  color: white;\n}\n.step.completed[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: #10B981;\n  color: white;\n}\n.step[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--pm-text-secondary);\n}\n.step.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.step.completed[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 32px;\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-sm);\n  margin-bottom: 24px;\n}\n.form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  font-size: 1.2rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--pm-text-primary);\n  margin-bottom: 6px;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid var(--pm-border);\n  border-radius: var(--pm-radius-sm);\n  font-family: inherit;\n  font-size: 0.9rem;\n  background: var(--pm-surface);\n  color: var(--pm-text-primary);\n  outline: none;\n  transition: border-color var(--pm-transition-fast);\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--ion-color-primary);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--pm-text-muted);\n}\ntextarea.form-input[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 80px;\n  line-height: 1.5;\n}\nselect.form-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.form-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n  margin-top: 4px;\n  display: block;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.form-row[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.price-input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.price-symbol[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-weight: 700;\n  color: var(--pm-text-muted);\n}\n.price-field[_ngcontent-%COMP%] {\n  padding-left: 32px;\n}\n.license-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.license-opt[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border: 2px solid var(--pm-border);\n  border-radius: var(--pm-radius-md);\n  cursor: pointer;\n  transition: all var(--pm-transition-fast);\n}\n.license-opt.active[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.03);\n}\n.license-opt[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--ion-color-primary);\n}\n.license-opt-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n}\n.license-opt-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--ion-color-primary);\n}\n.tag-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-top: 8px;\n}\n.preview-tag[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  background: rgba(99, 102, 241, 0.08);\n  border-radius: var(--pm-radius-full);\n  font-size: 0.75rem;\n  color: #6366F1;\n}\n.file-upload[_ngcontent-%COMP%] {\n  border: 2px dashed var(--pm-border);\n  border-radius: var(--pm-radius-md);\n  padding: 32px;\n  text-align: center;\n  cursor: pointer;\n  transition: all var(--pm-transition-fast);\n}\n.file-upload[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.02);\n}\n.upload-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.upload-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.upload-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--pm-text-primary);\n}\n.upload-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.upload-content.selected[_ngcontent-%COMP%] {\n  color: #10B981;\n}\n.upload-content.selected[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.guidelines-box[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: rgba(245, 158, 11, 0.05);\n  border: 1px solid rgba(245, 158, 11, 0.2);\n  border-radius: var(--pm-radius-md);\n  margin-top: 8px;\n}\n.guidelines-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 0.9rem;\n}\n.guidelines-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n}\n.guidelines-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--pm-text-secondary);\n  padding: 3px 0;\n}\n.form-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.nav-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.success-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 32px;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-xl);\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-lg);\n  max-width: 560px;\n  margin: 48px auto;\n  animation: _ngcontent-%COMP%_scaleIn 0.4s ease;\n}\n.success-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 16px;\n}\n.success-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\n.success-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  margin: 0 0 28px;\n}\n.success-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@media (max-width: 768px) {\n  .progress-steps[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0;\n  }\n  .license-options[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n/*# sourceMappingURL=submit-project.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubmitProjectComponent, { className: "SubmitProjectComponent", filePath: "src\\app\\pages\\admin\\submit-project\\submit-project.component.ts", lineNumber: 501 });
})();
export {
  SubmitProjectComponent
};
//# sourceMappingURL=chunk-RPXKPM3G.js.map

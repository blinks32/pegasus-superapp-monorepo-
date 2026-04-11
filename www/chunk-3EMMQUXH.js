import {
  FooterComponent,
  HeaderComponent
} from "./chunk-BQ6R7HPJ.js";
import {
  ActivatedRoute,
  CommonModule,
  DatePipe,
  Firestore,
  NgIf,
  RouterLink,
  __async,
  __spreadValues,
  doc,
  getDoc,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-PLEPB4GM.js";

// src/app/pages/blogs/blog-detail.component.ts
function BlogDetailComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9)(2, "div", 10)(3, "div", 11)(4, "div", 11)(5, "div", 12);
    \u0275\u0275elementEnd();
  }
}
function BlogDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h2");
    \u0275\u0275text(2, "Article Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "The requested blog post doesn't exist or has been removed.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 14);
    \u0275\u0275text(6, "View All Articles");
    \u0275\u0275elementEnd()();
  }
}
function BlogDetailComponent_article_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 15)(1, "header", 16)(2, "div", 17)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "h1", 19);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "div", 21);
    \u0275\u0275elementStart(15, "footer", 22)(16, "div", 23)(17, "h3");
    \u0275\u0275text(18, "Enjoyed this article?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20, "Follow us on Twitter for more insights and project releases.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 24);
    \u0275\u0275text(22, "Follow @selljustcode");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Published on ", \u0275\u0275pipeBind2(5, 5, (tmp_1_0 = ctx_r0.blog().createdAt) == null ? null : tmp_1_0.toDate(), "longDate"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("By ", ctx_r0.blog().author || "selljustcode team", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.blog().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.blog().excerpt);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.blog().content, \u0275\u0275sanitizeHtml);
  }
}
var BlogDetailComponent = class _BlogDetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.firestore = inject(Firestore);
    this.blog = signal(null);
    this.isLoading = signal(true);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const id = this.route.snapshot.paramMap.get("id");
      if (!id) {
        this.isLoading.set(false);
        return;
      }
      try {
        const blogDoc = doc(this.firestore, `Blogs/${id}`);
        const snap = yield getDoc(blogDoc);
        if (snap.exists()) {
          this.blog.set(__spreadValues({ id: snap.id }, snap.data()));
        }
      } catch (err) {
        console.error("Error fetching blog detail:", err);
      } finally {
        this.isLoading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function BlogDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogDetailComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogDetailComponent, selectors: [["app-blog-detail"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 3, consts: [[1, "blog-detail-page"], [1, "pm-container"], ["routerLink", "/blogs", 1, "back-link"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 12H5M12 19l-7-7 7-7"], ["class", "detail-skeleton", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "blog-content shadow-premium", 4, "ngIf"], [1, "detail-skeleton"], [1, "skel-meta"], [1, "skel-title"], [1, "skel-para"], [1, "skel-para", "short"], [1, "error-state"], ["routerLink", "/blogs", 1, "pm-btn", "pm-btn-primary"], [1, "blog-content", "shadow-premium"], [1, "blog-header"], [1, "blog-meta"], [1, "meta-separator"], [1, "blog-title"], [1, "blog-lead"], [1, "blog-body", 3, "innerHTML"], [1, "blog-footer"], [1, "share-info"], ["href", "https://twitter.com/selljustcode", "target", "_blank", 1, "pm-btn", "pm-btn-outline", "pm-btn-sm"]], template: function BlogDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "main", 0)(2, "div", 1)(3, "a", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 3);
        \u0275\u0275element(5, "path", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, " Back to Articles ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, BlogDetailComponent_div_7_Template, 6, 0, "div", 5)(8, BlogDetailComponent_div_8_Template, 7, 0, "div", 6)(9, BlogDetailComponent_article_9_Template, 23, 8, "article", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(10, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.isLoading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading() && !ctx.blog());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.blog());
      }
    }, dependencies: [CommonModule, NgIf, DatePipe, RouterLink, HeaderComponent, FooterComponent], styles: ["\n\n.blog-detail-page[_ngcontent-%COMP%] {\n  padding: 40px 0 100px;\n  background: var(--pm-background);\n  min-height: 80vh;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--pm-text-muted);\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.95rem;\n  margin-bottom: 32px;\n  transition: color 0.2s;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-primary);\n}\n.blog-content[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-xl);\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 60px;\n  border: 1px solid var(--pm-border-light);\n}\n.shadow-premium[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);\n}\n.blog-header[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.blog-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.9rem;\n  color: var(--pm-text-muted);\n  margin-bottom: 24px;\n  font-weight: 500;\n}\n.meta-separator[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.blog-title[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 900;\n  color: var(--pm-text-primary);\n  line-height: 1.1;\n  margin-bottom: 24px;\n  letter-spacing: -0.01em;\n}\n.blog-lead[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.6;\n  color: var(--pm-text-secondary);\n  font-weight: 500;\n  border-left: 4px solid var(--ion-color-primary-transparent);\n  padding-left: 24px;\n}\n.blog-body[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  line-height: 1.8;\n  color: var(--pm-text-primary);\n}\n  .blog-body p {\n  margin-bottom: 24px;\n}\n  .blog-body h2 {\n  font-size: 2rem;\n  font-weight: 800;\n  margin: 48px 0 20px;\n  letter-spacing: -0.01em;\n}\n  .blog-body ul, \n  .blog-body ol {\n  margin-bottom: 32px;\n  padding-left: 24px;\n}\n  .blog-body li {\n  margin-bottom: 12px;\n}\n  .blog-body img {\n  max-width: 100%;\n  border-radius: var(--pm-radius-md);\n  margin: 32px 0;\n}\n  .blog-body pre {\n  background: #1e293b;\n  color: #f8fafc;\n  padding: 24px;\n  border-radius: var(--pm-radius-md);\n  overflow-x: auto;\n  margin-bottom: 32px;\n}\n.blog-footer[_ngcontent-%COMP%] {\n  margin-top: 60px;\n  padding-top: 48px;\n  border-top: 1px solid var(--pm-border-light);\n}\n.share-info[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.share-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.share-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-muted);\n  margin-bottom: 24px;\n}\n.detail-skeleton[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: var(--pm-surface-muted);\n  border-radius: 4px;\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n  margin-bottom: 24px;\n}\n.skel-meta[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 300px;\n}\n.skel-title[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 80%;\n}\n.skel-para[_ngcontent-%COMP%] {\n  height: 20px;\n  width: 100%;\n}\n.skel-para.short[_ngcontent-%COMP%] {\n  width: 60%;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.6;\n  }\n}\n.error-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 100px 0;\n}\n@media (max-width: 768px) {\n  .blog-content[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n  }\n  .blog-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .blog-lead[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    padding-left: 16px;\n  }\n}\n/*# sourceMappingURL=blog-detail.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogDetailComponent, { className: "BlogDetailComponent", filePath: "src\\app\\pages\\blogs\\blog-detail.component.ts", lineNumber: 208 });
})();
export {
  BlogDetailComponent
};
//# sourceMappingURL=chunk-3EMMQUXH.js.map

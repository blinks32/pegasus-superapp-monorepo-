import {
  FooterComponent,
  HeaderComponent
} from "./chunk-BQ6R7HPJ.js";
import {
  CommonModule,
  DatePipe,
  Firestore,
  NgForOf,
  NgIf,
  RouterLink,
  collection,
  collectionData,
  inject,
  orderBy,
  query,
  signal,
  where,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-PLEPB4GM.js";

// src/app/pages/blogs/blogs.component.ts
var _c0 = () => [1, 2, 3, 4, 5, 6];
var _c1 = (a0) => ["/blog", a0];
function BlogsComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "div", 12);
    \u0275\u0275element(3, "div", 13)(4, "div", 14)(5, "div", 15);
    \u0275\u0275elementEnd()();
  }
}
function BlogsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275template(1, BlogsComponent_div_9_div_1_Template, 6, 0, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function BlogsComponent_div_10_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 18)(1, "div", 19)(2, "div", 20)(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h2", 22)(7, "a", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 25);
    \u0275\u0275text(12, " Read Article ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 26);
    \u0275\u0275element(14, "path", 27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 5, blog_r1.createdAt == null ? null : blog_r1.createdAt.toDate(), "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c1, blog_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(blog_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(blog_r1.excerpt);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c1, blog_r1.id));
  }
}
function BlogsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, BlogsComponent_div_10_article_1_Template, 15, 12, "article", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.blogs());
  }
}
function BlogsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275text(2, "\u{1F4F0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No articles yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Our writers are busy preparing some amazing content. Check back soon!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 30);
    \u0275\u0275text(8, "Back to Home");
    \u0275\u0275elementEnd()();
  }
}
var BlogsComponent = class _BlogsComponent {
  constructor() {
    this.firestore = inject(Firestore);
    this.blogs = signal([]);
    this.isLoading = signal(true);
  }
  ngOnInit() {
    const blogsRef = collection(this.firestore, "Blogs");
    const q = query(blogsRef, where("published", "==", true), orderBy("createdAt", "desc"));
    collectionData(q, { idField: "id" }).subscribe({
      next: (data) => {
        this.blogs.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error("Error fetching blogs:", err);
        this.isLoading.set(false);
      }
    });
  }
  static {
    this.\u0275fac = function BlogsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogsComponent, selectors: [["app-blogs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 3, consts: [[1, "blogs-page"], [1, "blogs-hero"], [1, "pm-container"], [1, "pm-heading-lg"], [1, "pm-text-secondary"], ["class", "blogs-grid", 4, "ngIf"], ["class", "blogs-grid stagger-children", 4, "ngIf"], ["class", "empty-blogs", 4, "ngIf"], [1, "blogs-grid"], ["class", "blog-skeleton", 4, "ngFor", "ngForOf"], [1, "blog-skeleton"], [1, "skeleton-img"], [1, "skeleton-content"], [1, "skeleton-title"], [1, "skeleton-text"], [1, "skeleton-text", "short"], [1, "blogs-grid", "stagger-children"], ["class", "blog-card", 4, "ngFor", "ngForOf"], [1, "blog-card"], [1, "blog-card-content"], [1, "blog-meta"], [1, "blog-date"], [1, "blog-title"], [3, "routerLink"], [1, "blog-excerpt"], [1, "read-more", 3, "routerLink"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "empty-blogs"], [1, "empty-icon"], ["routerLink", "/", 1, "pm-btn", "pm-btn-primary"]], template: function BlogsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "main", 0)(2, "section", 1)(3, "div", 2)(4, "h1", 3);
        \u0275\u0275text(5, "Developer Blog");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 4);
        \u0275\u0275text(7, "Insights, tutorials, and updates from the selljustcode team.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 2);
        \u0275\u0275template(9, BlogsComponent_div_9_Template, 2, 2, "div", 5)(10, BlogsComponent_div_10_Template, 2, 1, "div", 6)(11, BlogsComponent_div_11_Template, 9, 0, "div", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(12, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngIf", ctx.isLoading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isLoading() && ctx.blogs().length === 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DatePipe, RouterLink, HeaderComponent, FooterComponent], styles: ["\n\n.blogs-page[_ngcontent-%COMP%] {\n  padding: 60px 0 100px;\n  min-height: 70vh;\n  background: var(--pm-background);\n}\n.blogs-hero[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 60px;\n}\n.blogs-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.blogs-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 32px;\n}\n.blog-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-xl);\n  border: 1px solid var(--pm-border-light);\n  overflow: hidden;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n.blog-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--pm-shadow-lg);\n  border-color: var(--ion-color-primary-transparent);\n}\n.blog-card-content[_ngcontent-%COMP%] {\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.blog-meta[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--pm-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.blog-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin-bottom: 16px;\n  line-height: 1.3;\n}\n.blog-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--pm-text-primary);\n  text-decoration: none;\n  transition: color 0.2s;\n}\n.blog-card[_ngcontent-%COMP%]:hover   .blog-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.blog-excerpt[_ngcontent-%COMP%] {\n  color: var(--pm-text-secondary);\n  font-size: 1rem;\n  line-height: 1.6;\n  margin-bottom: 24px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.read-more[_ngcontent-%COMP%] {\n  margin-top: auto;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 700;\n  color: var(--ion-color-primary);\n  text-decoration: none;\n  font-size: 0.95rem;\n}\n.read-more[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n}\n.read-more[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.blog-skeleton[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-xl);\n  overflow: hidden;\n  border: 1px solid var(--pm-border-light);\n}\n.skeleton-img[_ngcontent-%COMP%] {\n  height: 200px;\n  background: var(--pm-surface-muted);\n}\n.skeleton-content[_ngcontent-%COMP%] {\n  padding: 32px;\n}\n.skeleton-title[_ngcontent-%COMP%] {\n  height: 24px;\n  background: var(--pm-surface-muted);\n  margin-bottom: 16px;\n  border-radius: 4px;\n  width: 80%;\n}\n.skeleton-text[_ngcontent-%COMP%] {\n  height: 14px;\n  background: var(--pm-surface-muted);\n  margin-bottom: 8px;\n  border-radius: 4px;\n}\n.skeleton-text.short[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.skeleton-img[_ngcontent-%COMP%], \n.skeleton-title[_ngcontent-%COMP%], \n.skeleton-text[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.6;\n  }\n}\n.empty-blogs[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 80px 20px;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 24px;\n}\n.empty-blogs[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 12px;\n}\n.empty-blogs[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--pm-text-muted);\n  margin-bottom: 32px;\n}\n@media (max-width: 768px) {\n  .blogs-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .blog-card-content[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .blog-title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=blogs.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogsComponent, { className: "BlogsComponent", filePath: "src\\app\\pages\\blogs\\blogs.component.ts", lineNumber: 228 });
})();
export {
  BlogsComponent
};
//# sourceMappingURL=chunk-4TI7HMLH.js.map

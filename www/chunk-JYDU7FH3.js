import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-JLNVYNUZ.js";
import {
  AuthService,
  FooterComponent,
  HeaderComponent,
  MarketplaceService
} from "./chunk-O7ABM3XC.js";
import {
  CommonModule,
  Firestore,
  NgForOf,
  NgIf,
  RouterLink,
  TitleCasePipe,
  __async,
  __spreadProps,
  __spreadValues,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  effect,
  inject,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-R4VRCTGY.js";

// src/app/pages/admin/admin.component.ts
function AdminComponent_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stat_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", stat_r2.gradient);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stat_r2.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stat_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r2.label);
  }
}
function AdminComponent_div_21_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 31)(7, "span", 32);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(project_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(project_r4.shortDescription);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + (project_r4.status || "pending"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, project_r4.status || "pending"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$ ", project_r4.price, "");
  }
}
function AdminComponent_div_21_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "p");
    \u0275\u0275text(2, "No projects found. ");
    \u0275\u0275elementStart(3, "a", 35);
    \u0275\u0275text(4, "Submit your first project \u2192");
    \u0275\u0275elementEnd()()();
  }
}
function AdminComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275template(2, AdminComponent_div_21_div_2_Template, 8, 5, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17)(5, "h3");
    \u0275\u0275text(6, "My Projects");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18)(8, "button", 19);
    \u0275\u0275listener("click", function AdminComponent_div_21_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.projectTab = "all");
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 19);
    \u0275\u0275listener("click", function AdminComponent_div_21_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.projectTab = "published");
    });
    \u0275\u0275text(11, "Published");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 19);
    \u0275\u0275listener("click", function AdminComponent_div_21_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.projectTab = "pending");
    });
    \u0275\u0275text(13, "Pending");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(14, AdminComponent_div_21_div_14_Template, 12, 8, "div", 20)(15, AdminComponent_div_21_div_15_Template, 5, 0, "div", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.dashboardStats);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.projectTab === "all");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("All (", ctx_r2.getFilteredProjects().length, ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.projectTab === "published");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.projectTab === "pending");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.getFilteredProjects());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.getFilteredProjects().length === 0);
  }
}
function AdminComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 36)(2, "div", 37)(3, "h3");
    \u0275\u0275text(4, "Admin Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Configure your admin preferences");
    \u0275\u0275elementEnd()()()();
  }
}
function AdminComponent_div_23_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "div", 46)(2, "div", 47)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39)(6, "button", 48);
    \u0275\u0275listener("click", function AdminComponent_div_23_div_13_div_1_Template_button_click_6_listener() {
      const blog_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openBlogModal(blog_r7));
    });
    \u0275\u0275text(7, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 49);
    \u0275\u0275listener("click", function AdminComponent_div_23_div_13_div_1_Template_button_click_8_listener() {
      const blog_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteBlog(blog_r7.id));
    });
    \u0275\u0275text(9, "Delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "p", 50);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 51)(13, "span", 52);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const blog_r7 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(blog_r7.title || "Untitled Blog");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(blog_r7.excerpt || "No content");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(blog_r7.published ? "status-published" : "status-draft");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", blog_r7.published ? "Published" : "Draft", " ");
  }
}
function AdminComponent_div_23_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, AdminComponent_div_23_div_13_div_1_Template, 15, 5, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.blogs);
  }
}
function AdminComponent_div_23_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "h4");
    \u0275\u0275text(2, "No blog posts yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Create your first blog post to get started.");
    \u0275\u0275elementEnd()();
  }
}
function AdminComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 36)(2, "div", 37)(3, "h3");
    \u0275\u0275text(4, "Blog Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Create, edit, and manage blog posts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38)(8, "div", 39)(9, "button", 40);
    \u0275\u0275listener("click", function AdminComponent_div_23_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openBlogModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 8);
    \u0275\u0275element(11, "path", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " New Blog Post ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, AdminComponent_div_23_div_13_Template, 2, 1, "div", 41)(14, AdminComponent_div_23_div_14_Template, 5, 0, "div", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx_r2.blogs.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.blogs.length === 0);
  }
}
function AdminComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("click", function AdminComponent_div_24_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeBlogModal());
    });
    \u0275\u0275elementStart(1, "div", 55);
    \u0275\u0275listener("click", function AdminComponent_div_24_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 56)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 57);
    \u0275\u0275listener("click", function AdminComponent_div_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeBlogModal());
    });
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 58)(8, "div", 59)(9, "label", 60);
    \u0275\u0275text(10, "Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_24_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.blogForm.title, $event) || (ctx_r2.blogForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 59)(13, "label", 62);
    \u0275\u0275text(14, "Excerpt *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "textarea", 63);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_24_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.blogForm.excerpt, $event) || (ctx_r2.blogForm.excerpt = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 59)(17, "label", 64);
    \u0275\u0275text(18, "Content *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 65);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_24_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.blogForm.content, $event) || (ctx_r2.blogForm.content = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 59)(21, "label", 66)(22, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function AdminComponent_div_24_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.blogForm.published, $event) || (ctx_r2.blogForm.published = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Published");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 68)(26, "button", 69);
    \u0275\u0275listener("click", function AdminComponent_div_24_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeBlogModal());
    });
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 70);
    \u0275\u0275listener("click", function AdminComponent_div_24_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveBlogFromModal());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.editingBlogId ? "Edit Blog Post" : "New Blog Post");
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.blogForm.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.blogForm.excerpt);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.blogForm.content);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.blogForm.published);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", !ctx_r2.blogForm.title || !ctx_r2.blogForm.excerpt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingBlogId ? "Update" : "Create", " ");
  }
}
var AdminComponent = class _AdminComponent {
  constructor() {
    this.marketplace = inject(MarketplaceService);
    this.authService = inject(AuthService);
    this.firestore = inject(Firestore);
    this.activeTab = "dashboard";
    this.projectTab = "all";
    this.dashboardStats = [];
    this.blogs = [];
    this.showBlogModal = false;
    this.blogForm = { title: "", content: "", excerpt: "", published: false };
    this.editingBlogId = null;
    effect(() => {
      this.calculateStats();
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.calculateStats();
      this.loadBlogs();
    });
  }
  calculateStats() {
    const products = this.marketplace.products();
    const totalRev = products.reduce((sum, p) => sum + p.price * (p.totalSales || 0), 0);
    const totalSales = products.reduce((sum, p) => sum + (p.totalSales || 0), 0);
    const totalVisits = products.reduce((sum, p) => sum + (p.totalVisits || 0), 0);
    const avgRating = products.length > 0 ? products.reduce((sum, p) => sum + (p.rating || 0), 0) / products.length : 0;
    this.dashboardStats = [
      { icon: "\u{1F4B0}", label: "Total Revenue", value: "$" + totalRev.toLocaleString(), gradient: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(5,150,105,0.15))" },
      { icon: "\u{1F4E6}", label: "Products Sold", value: totalSales.toString(), gradient: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15))" },
      { icon: "\u{1F441}\uFE0F", label: "Total Views", value: this.formatViews(totalVisits), gradient: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(234,88,12,0.15))" },
      { icon: "\u2B50", label: "Avg. Rating", value: avgRating.toFixed(1), gradient: "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(219,39,119,0.15))" }
    ];
  }
  formatViews(v) {
    if (v >= 1e6)
      return (v / 1e6).toFixed(1) + "M";
    if (v >= 1e3)
      return (v / 1e3).toFixed(1) + "K";
    return v.toString();
  }
  getFilteredProjects() {
    const products = this.marketplace.products();
    if (this.projectTab === "all")
      return products;
    return products.filter((p) => (p.status || "pending") === this.projectTab);
  }
  loadBlogs() {
    return __async(this, null, function* () {
      try {
        const blogsRef = collection(this.firestore, "blogs");
        const q = query(blogsRef, orderBy("createdAt", "desc"));
        collectionData(q, { idField: "id" }).subscribe((data) => {
          this.blogs = data.map((blog) => __spreadProps(__spreadValues({}, blog), {
            createdAt: blog.createdAt?.toDate?.() || new Date(blog.createdAt)
          }));
        });
      } catch (error) {
        console.error("Error loading blogs:", error);
        this.blogs = [];
      }
    });
  }
  openBlogModal(blog) {
    if (blog) {
      this.editingBlogId = blog.id;
      this.blogForm = { title: blog.title || "", content: blog.content || "", excerpt: blog.excerpt || "", published: blog.published || false };
    } else {
      this.editingBlogId = null;
      this.blogForm = { title: "", content: "", excerpt: "", published: false };
    }
    this.showBlogModal = true;
  }
  closeBlogModal() {
    this.showBlogModal = false;
    this.editingBlogId = null;
    this.blogForm = { title: "", content: "", excerpt: "", published: false };
  }
  saveBlogFromModal() {
    return __async(this, null, function* () {
      if (!this.blogForm.title || !this.blogForm.excerpt)
        return;
      try {
        if (this.editingBlogId) {
          const blogRef = doc(this.firestore, "blogs/" + this.editingBlogId);
          yield updateDoc(blogRef, {
            title: this.blogForm.title,
            excerpt: this.blogForm.excerpt,
            content: this.blogForm.content,
            published: this.blogForm.published,
            updatedAt: serverTimestamp()
          });
        } else {
          const blogsRef = collection(this.firestore, "blogs");
          yield addDoc(blogsRef, {
            title: this.blogForm.title,
            excerpt: this.blogForm.excerpt,
            content: this.blogForm.content,
            published: this.blogForm.published,
            author: "Admin",
            createdAt: serverTimestamp()
          });
        }
        this.closeBlogModal();
      } catch (error) {
        console.error("Error saving blog:", error);
        alert("Failed to save blog. Check Firestore rules.");
      }
    });
  }
  deleteBlog(blogId) {
    return __async(this, null, function* () {
      if (confirm("Delete this blog post?")) {
        try {
          const blogRef = doc(this.firestore, "blogs/" + blogId);
          yield deleteDoc(blogRef);
        } catch (error) {
          console.error("Error deleting blog:", error);
          alert("Failed to delete blog. Check Firestore rules.");
        }
      }
    });
  }
  static {
    this.\u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 10, consts: [[1, "admin-hero"], [1, "pm-container"], [1, "hero-row"], [1, "pm-heading-lg"], [1, "pm-text-secondary"], [1, "hero-actions"], [1, "tab-btn", 3, "click"], ["routerLink", "/admin/submit", 1, "pm-btn", "pm-btn-primary"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 5v14M5 12h14"], [1, "pm-container", "admin-content"], ["class", "fade-in", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "fade-in"], [1, "stats-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "projects-card"], [1, "card-header"], [1, "header-tabs"], [3, "click"], ["class", "project-row", 4, "ngFor", "ngForOf"], ["class", "empty-projects", 4, "ngIf"], [1, "stat-card"], [1, "stat-card-icon"], [1, "stat-card-info"], [1, "stat-card-value"], [1, "stat-card-label"], [1, "project-row"], [1, "project-info"], [1, "project-title"], [1, "project-desc"], [1, "project-status"], [1, "status-badge"], [1, "project-price"], [1, "empty-projects"], ["routerLink", "/admin/submit"], [1, "settings-card"], [1, "settings-header"], [1, "blog-management"], [1, "blog-actions"], [1, "pm-btn", "pm-btn-primary", 3, "click"], ["class", "blogs-list", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "blogs-list"], ["class", "blog-item", 4, "ngFor", "ngForOf"], [1, "blog-item"], [1, "blog-item-content"], [1, "blog-item-header"], [1, "pm-btn", "pm-btn-sm", "pm-btn-ghost", 3, "click"], [1, "pm-btn", "pm-btn-sm", "pm-btn-danger", 3, "click"], [1, "blog-excerpt"], [1, "blog-meta"], [1, "blog-status"], [1, "empty-state"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "form-group"], ["for", "blogTitle"], ["id", "blogTitle", "type", "text", "placeholder", "Enter blog title", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "blogExcerpt"], ["id", "blogExcerpt", "placeholder", "Short description", "rows", "3", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "blogContent"], ["id", "blogContent", "placeholder", "Full blog content", "rows", "10", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "checkbox-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "pm-btn", "pm-btn-ghost", 3, "click"], [1, "pm-btn", "pm-btn-primary", 3, "click", "disabled"]], template: function AdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header");
        \u0275\u0275elementStart(1, "section", 0)(2, "div", 1)(3, "div", 2)(4, "div")(5, "h1", 3);
        \u0275\u0275text(6, "\u{1F4CA} Author Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, "Manage your projects, track sales, and monitor performance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_10_listener() {
          return ctx.activeTab = "dashboard";
        });
        \u0275\u0275text(11, "Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_12_listener() {
          return ctx.activeTab = "blogs";
        });
        \u0275\u0275text(13, "Blogs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "button", 6);
        \u0275\u0275listener("click", function AdminComponent_Template_button_click_14_listener() {
          return ctx.activeTab = "settings";
        });
        \u0275\u0275text(15, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 7);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 8);
        \u0275\u0275element(18, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " Submit Project ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(20, "div", 10);
        \u0275\u0275template(21, AdminComponent_div_21_Template, 16, 10, "div", 11)(22, AdminComponent_div_22_Template, 7, 0, "div", 11)(23, AdminComponent_div_23_Template, 15, 2, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, AdminComponent_div_24_Template, 30, 7, "div", 12);
        \u0275\u0275element(25, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275classProp("active", ctx.activeTab === "dashboard");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "blogs");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeTab === "settings");
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.activeTab === "dashboard");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "settings");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.activeTab === "blogs");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showBlogModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, TitleCasePipe, RouterLink, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, HeaderComponent, FooterComponent], styles: ["\n\n.admin-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #F8FAFC,\n      #EEF0FF);\n  padding: 32px 0;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.hero-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.admin-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n}\n.admin-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: var(--pm-radius-md);\n  border: none;\n  background: transparent;\n  color: var(--pm-text-secondary);\n  font-family: inherit;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--ion-color-primary);\n  box-shadow: var(--pm-shadow-sm);\n}\n.admin-content[_ngcontent-%COMP%] {\n  padding: 32px 0 64px;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 20px;\n  margin-bottom: 32px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  border: 1px solid var(--pm-border-light);\n  box-shadow: var(--pm-shadow-sm);\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.stat-card-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: var(--pm-radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n}\n.stat-card-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.stat-card-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.stat-card-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: var(--pm-text-muted);\n}\n.projects-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  padding: 24px;\n  border: 1px solid var(--pm-border-light);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.header-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.header-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  background: transparent;\n  border-radius: var(--pm-radius-sm);\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  color: var(--pm-text-muted);\n}\n.header-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--pm-surface-muted);\n  color: var(--pm-text-primary);\n}\n.project-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 0;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.project-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.project-title[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n}\n.project-desc[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: var(--pm-text-muted);\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border-radius: var(--pm-radius-full);\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.status-published[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10B981;\n}\n.status-pending[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.project-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.empty-projects[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: var(--pm-text-muted);\n}\n.settings-card[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  border: 1px solid var(--pm-border-light);\n  padding: 32px;\n}\n.settings-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.settings-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n}\n.settings-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--pm-text-muted);\n}\n.blog-management[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.blog-actions[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.blogs-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.blog-item[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border: 1px solid var(--pm-border-light);\n  border-radius: var(--pm-radius-md);\n  padding: 20px;\n}\n.blog-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.blog-item-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.blog-excerpt[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: var(--pm-text-secondary);\n  font-size: 0.9rem;\n}\n.blog-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 0.8rem;\n}\n.blog-status[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: var(--pm-radius-sm);\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n.status-published[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10B981;\n}\n.status-draft[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #F59E0B;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 24px;\n  color: var(--pm-text-muted);\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-lg);\n  width: 100%;\n  max-width: 600px;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 24px;\n  border-bottom: 1px solid var(--pm-border-light);\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: var(--pm-text-muted);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.modal-body[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid var(--pm-border);\n  border-radius: var(--pm-radius-sm);\n  font-family: inherit;\n  font-size: 0.9rem;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--ion-color-primary);\n}\n.checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid var(--pm-border-light);\n}\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 768px) {\n  .hero-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .project-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .project-price[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=admin.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src\\app\\pages\\admin\\admin.component.ts", lineNumber: 366 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=chunk-JYDU7FH3.js.map

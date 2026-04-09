import {
  Auth,
  CommonModule,
  EmailAuthProvider,
  Firestore,
  GoogleAuthProvider,
  NgForOf,
  NgIf,
  Router,
  RouterLink,
  __async,
  __spreadProps,
  __spreadValues,
  addDoc,
  authState,
  collection,
  collectionData,
  computed,
  createUserWithEmailAndPassword,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  increment,
  inject,
  orderBy,
  query,
  reauthenticateWithCredential,
  setDoc,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signal,
  updateDoc,
  updateEmail,
  updatePassword,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QET7PT5I.js";

// src/app/services/marketplace.service.ts
var MarketplaceService = class _MarketplaceService {
  constructor() {
    this.firestore = inject(Firestore);
    this._products = signal(null);
    this._cart = signal([]);
    this._searchFilters = signal({ query: "", sortBy: "bestselling" });
    this._adminProjects = signal([]);
    this.products = this._products.asReadonly();
    this.cart = this._cart.asReadonly();
    this.searchFilters = this._searchFilters.asReadonly();
    this.adminProjects = this._adminProjects.asReadonly();
    this.cartTotal = computed(() => this._cart().reduce((sum, item) => {
      let price = item.license === "extended" ? item.product.price * 3 : item.product.price;
      if (item.addReskin && item.product.reskinPrice)
        price += item.product.reskinPrice;
      return sum + price * item.quantity;
    }, 0));
    this.cartCount = computed(() => this._cart().reduce((sum, item) => sum + item.quantity, 0));
    this.filteredProducts = computed(() => {
      const products = this._products();
      if (!products)
        return [];
      const filters = this._searchFilters();
      let result = [...products];
      if (filters.query) {
        const q2 = filters.query.toLowerCase();
        result = result.filter((p) => p.title.toLowerCase().includes(q2) || p.shortDescription.toLowerCase().includes(q2) || p.tags.some((t) => t.toLowerCase().includes(q2)));
      }
      if (filters.category)
        result = result.filter((p) => p.category === filters.category);
      if (filters.minPrice != null)
        result = result.filter((p) => p.price >= filters.minPrice);
      if (filters.maxPrice != null)
        result = result.filter((p) => p.price <= filters.maxPrice);
      if (filters.minRating != null)
        result = result.filter((p) => p.rating >= filters.minRating);
      switch (filters.sortBy) {
        case "newest":
          result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          break;
        case "bestselling":
          result.sort((a, b) => b.totalSales - a.totalSales);
          break;
        case "price-low":
          result.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          result.sort((a, b) => b.price - a.price);
          break;
        case "rating":
          result.sort((a, b) => b.rating - a.rating);
          break;
        case "trending":
          result.sort((a, b) => b.totalVisits - a.totalVisits);
          break;
      }
      return result;
    });
    this.featuredProducts = computed(() => {
      const products = this._products();
      return products ? products.filter((p) => p.isFeatured) : [];
    });
    this.bestsellerProducts = computed(() => {
      const products = this._products();
      return products ? [...products].sort((a, b) => b.totalSales - a.totalSales).slice(0, 8) : [];
    });
    this.newestProducts = computed(() => {
      const products = this._products();
      return products ? [...products].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 8) : [];
    });
    this.categories = [
      { id: "saas-boilerplates", label: "SaaS Boilerplates", icon: "\u{1F680}", color: "#10B981", gradient: "linear-gradient(135deg, #10B981, #34D399)", count: 0 },
      { id: "b2b-systems", label: "B2B Systems", icon: "\u{1F3E2}", color: "#3B82F6", gradient: "linear-gradient(135deg, #3B82F6, #60A5FA)", count: 0 },
      { id: "super-apps", label: "Super Apps", icon: "\u{1F4F1}", color: "#F97316", gradient: "linear-gradient(135deg, #F97316, #FB923C)", count: 0 },
      { id: "edtech-lms", label: "EdTech LMS", icon: "\u{1F393}", color: "#8B5CF6", gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)", count: 0 },
      { id: "pvp-games", label: "PvP Games", icon: "\u{1F3AE}", color: "#EF4444", gradient: "linear-gradient(135deg, #EF4444, #F87171)", count: 0 }
    ];
    this.authors = [];
    this.salesStats = [];
    const productsRef = collection(this.firestore, "products");
    const q = query(productsRef, orderBy("createdAt", "desc"));
    collectionData(q, { idField: "id" }).subscribe((data) => {
      this._products.set(data);
    });
    const saved = localStorage.getItem("pm_cart");
    if (saved) {
      try {
        this._cart.set(JSON.parse(saved));
      } catch {
      }
    }
  }
  /* ═══════════ Product CRUD ═══════════ */
  getProductById(id) {
    const products = this._products();
    if (!products)
      return void 0;
    return products.find((p) => p.id === id);
  }
  getProductBySlug(slug) {
    const products = this._products();
    if (!products)
      return void 0;
    return products.find((p) => p.slug === slug);
  }
  getProductsByCategory(cat) {
    const products = this._products();
    if (!products)
      return [];
    return products.filter((p) => p.category === cat);
  }
  getRelatedProducts(product, limit = 4) {
    const products = this._products();
    if (!products)
      return [];
    return products.filter((p) => p.id !== product.id && (p.category === product.category || p.tags.some((t) => product.tags.includes(t)))).slice(0, limit);
  }
  /* ═══════════ Search & Filter ═══════════ */
  updateFilters(filters) {
    this._searchFilters.update((f) => __spreadValues(__spreadValues({}, f), filters));
  }
  /* ═══════════ Cart ═══════════ */
  addToCart(product, license = "regular", addReskin = false) {
    this._cart.update((cart) => {
      const existing = cart.find((i) => i.product.id === product.id && i.license === license);
      if (existing)
        return cart;
      const updated = [...cart, { product, license, quantity: 1, addReskin }];
      localStorage.setItem("pm_cart", JSON.stringify(updated));
      return updated;
    });
  }
  removeFromCart(productId) {
    this._cart.update((cart) => {
      const updated = cart.filter((i) => i.product.id !== productId);
      localStorage.setItem("pm_cart", JSON.stringify(updated));
      return updated;
    });
  }
  clearCart() {
    this._cart.set([]);
    localStorage.removeItem("pm_cart");
  }
  isInCart(productId) {
    return this._cart().some((i) => i.product.id === productId);
  }
  /* ═══════════ Reviews ═══════════ */
  addReview(productId, review) {
    this._products.update((products) => {
      if (!products)
        return products;
      return products.map((p) => {
        if (p.id !== productId)
          return p;
        const newReview = __spreadProps(__spreadValues({}, review), { id: "r" + Date.now(), date: /* @__PURE__ */ new Date(), helpful: 0 });
        const newReviews = [newReview, ...p.reviews];
        const avgRating = newReviews.reduce((s, r) => s + r.rating, 0) / newReviews.length;
        return __spreadProps(__spreadValues({}, p), { reviews: newReviews, rating: Math.round(avgRating * 10) / 10, totalRatings: newReviews.length });
      });
    });
  }
  incrementVisit(productId) {
    this._products.update((products) => {
      if (!products)
        return products;
      return products.map((p) => p.id === productId ? __spreadProps(__spreadValues({}, p), { totalVisits: p.totalVisits + 1 }) : p);
    });
  }
  /**
   * Track a unique visit per product. Uses localStorage to prevent
   * counting the same user twice. Persists the increment to Firestore.
   */
  trackUniqueVisit(productId) {
    return __async(this, null, function* () {
      const key = `visited_${productId}`;
      if (localStorage.getItem(key))
        return;
      localStorage.setItem(key, "1");
      this.incrementVisit(productId);
      try {
        const productRef = doc(this.firestore, `products/${productId}`);
        yield updateDoc(productRef, { totalVisits: increment(1) });
        fetch("https://get.geojs.io/v1/ip/geo.json").then((resp) => __async(this, null, function* () {
          const geo = yield resp.json();
          const analyticsRef = collection(this.firestore, "site_analytics");
          yield addDoc(analyticsRef, {
            productId,
            timestamp: /* @__PURE__ */ new Date(),
            ip: geo.ip || "Unknown",
            country: geo.country || "Unknown",
            countryCode: geo.country_code || "",
            city: geo.city || "Unknown",
            device: navigator.userAgent
          });
        })).catch((e) => console.error("Geo tracking failed", e));
      } catch (e) {
        console.error("Failed to persist visit count:", e);
      }
    });
  }
  /* ═══════════ Comments ═══════════ */
  addComment(productId, comment) {
    return __async(this, null, function* () {
      try {
        const commentsRef = collection(this.firestore, `products/${productId}/comments`);
        yield addDoc(commentsRef, comment);
      } catch (e) {
        console.error("Error adding comment:", e);
      }
    });
  }
  getComments(productId) {
    return __async(this, null, function* () {
      try {
        const commentsRef = collection(this.firestore, `products/${productId}/comments`);
        const q = query(commentsRef, orderBy("date", "desc"));
        const snap = yield getDocs(q);
        return snap.docs.map((d) => {
          const data = d.data();
          return {
            userName: data.userName || "Anonymous",
            text: data.text || "",
            date: data.date?.toDate?.() || new Date(data.date)
          };
        });
      } catch (e) {
        console.error("Error loading comments:", e);
        return [];
      }
    });
  }
  /* ═══════════ Admin ═══════════ */
  submitProject(project) {
    return __async(this, null, function* () {
      const id = "prod_" + Date.now();
      const slug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      const now = /* @__PURE__ */ new Date();
      const newProduct = {
        id,
        title: project.title,
        slug,
        shortDescription: project.shortDescription,
        fullDescription: project.fullDescription,
        category: project.category,
        price: project.price,
        thumbnailUrl: project.thumbnailData || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
        previewImages: project.previewData && project.previewData.length > 0 ? project.previewData : [],
        rating: 0,
        totalRatings: 0,
        totalSales: 0,
        totalVisits: 0,
        tags: project.tags,
        features: project.features,
        techStack: project.techStack,
        compatibility: project.compatibility,
        lastUpdated: now,
        createdAt: now,
        version: project.version,
        fileSize: project.fileSize,
        author: {
          id: "admin",
          name: "Admin",
          avatar: "https://ui-avatars.com/api/?name=Admin&background=6366F1&color=fff",
          bio: "Platform Administrator",
          totalSales: 0,
          rating: 0,
          memberSince: now,
          badges: [],
          verified: true
        },
        reviews: [],
        isFeatured: false,
        isNew: true,
        isBestseller: false,
        frameworks: project.techStack,
        license: project.license,
        hasReskinService: project.hasReskinService,
        status: project.status || "published"
      };
      if (project.originalPrice) {
        newProduct.originalPrice = project.originalPrice;
        newProduct.discountPercent = Math.round((1 - project.price / project.originalPrice) * 100);
      }
      if (project.demoUrl) {
        newProduct.demoUrl = project.demoUrl;
      }
      if (project.hasReskinService && project.reskinPrice) {
        newProduct.reskinPrice = project.reskinPrice;
      }
      try {
        const projectRef = doc(this.firestore, `products/${id}`);
        yield setDoc(projectRef, newProduct);
        console.log("Project saved successfully:", id);
        return id;
      } catch (error) {
        console.error("Error saving project to Firestore:", error);
        throw error;
      }
    });
  }
  updateProjectStatus(id, status) {
    this._adminProjects.update((projects) => projects.map((p) => p.id === id ? __spreadProps(__spreadValues({}, p), { status, updatedAt: /* @__PURE__ */ new Date() }) : p));
  }
  getAdminStats() {
    const projects = this._adminProjects();
    return {
      total: projects.length,
      published: projects.filter((p) => p.status === "published").length,
      pending: projects.filter((p) => p.status === "pending").length,
      drafts: projects.filter((p) => p.status === "draft").length
    };
  }
  /* ═══════════ Update & Delete Products ═══════════ */
  updateProduct(id, data) {
    return __async(this, null, function* () {
      try {
        const productRef = doc(this.firestore, `products/${id}`);
        yield updateDoc(productRef, __spreadProps(__spreadValues({}, data), { lastUpdated: /* @__PURE__ */ new Date() }));
        console.log("Product updated successfully:", id);
      } catch (error) {
        console.error("Error updating product:", error);
        throw error;
      }
    });
  }
  deleteProduct(id) {
    return __async(this, null, function* () {
      try {
        const productRef = doc(this.firestore, `products/${id}`);
        yield deleteDoc(productRef);
        console.log("Product deleted successfully:", id);
      } catch (error) {
        console.error("Error deleting product:", error);
        throw error;
      }
    });
  }
  static {
    this.\u0275fac = function MarketplaceService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MarketplaceService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MarketplaceService, factory: _MarketplaceService.\u0275fac, providedIn: "root" });
  }
};

// src/app/services/auth.service.ts
var AuthService = class _AuthService {
  constructor() {
    this.auth = inject(Auth);
    this.firestore = inject(Firestore);
    this.router = inject(Router);
    this.currentUser = signal(null);
    this.userProfile = signal(null);
    this.isAuthLoaded = signal(false);
    authState(this.auth).subscribe((user) => __async(this, null, function* () {
      this.currentUser.set(user);
      if (user) {
        yield this.syncUserProfile(user);
      } else {
        this.userProfile.set(null);
      }
      this.isAuthLoaded.set(true);
    }));
  }
  syncUserProfile(user) {
    return __async(this, null, function* () {
      const userRef = doc(this.firestore, `users/${user.uid}`);
      const snap = yield getDoc(userRef);
      if (!snap.exists()) {
        const profile = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || "selljustcode user",
          photoURL: user.photoURL,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        yield setDoc(userRef, profile);
        this.userProfile.set(profile);
      } else {
        this.userProfile.set(snap.data());
      }
    });
  }
  loginWithGoogle() {
    return __async(this, null, function* () {
      try {
        const provider = new GoogleAuthProvider();
        yield signInWithPopup(this.auth, provider);
        this.router.navigate(["/"]);
      } catch (err) {
        console.error("Google Sign In Error:", err);
        throw err;
      }
    });
  }
  loginWithEmail(email, pass) {
    return __async(this, null, function* () {
      try {
        yield signInWithEmailAndPassword(this.auth, email, pass);
        this.router.navigate(["/"]);
      } catch (err) {
        console.error("Email Login Error:", err);
        throw err;
      }
    });
  }
  /**
   * Sign in without navigation (used by the admin login page).
   */
  signInWithEmailRaw(email, pass) {
    return __async(this, null, function* () {
      yield signInWithEmailAndPassword(this.auth, email, pass);
    });
  }
  getCurrentUserOrThrow() {
    const user = this.currentUser();
    if (!user)
      throw new Error("Not authenticated.");
    return user;
  }
  updateEmailWithReauth(newEmail, currentPassword) {
    return __async(this, null, function* () {
      const user = this.getCurrentUserOrThrow();
      const email = user.email;
      if (!email)
        throw new Error("Current user has no email.");
      const credential = EmailAuthProvider.credential(email, currentPassword);
      yield reauthenticateWithCredential(user, credential);
      yield updateEmail(user, newEmail);
    });
  }
  updatePasswordWithReauth(newPassword, currentPassword) {
    return __async(this, null, function* () {
      const user = this.getCurrentUserOrThrow();
      const email = user.email;
      if (!email)
        throw new Error("Current user has no email.");
      const credential = EmailAuthProvider.credential(email, currentPassword);
      yield reauthenticateWithCredential(user, credential);
      yield updatePassword(user, newPassword);
    });
  }
  registerWithEmail(email, pass, name) {
    return __async(this, null, function* () {
      try {
        const cred = yield createUserWithEmailAndPassword(this.auth, email, pass);
        const userRef = doc(this.firestore, `users/${cred.user.uid}`);
        const profile = {
          uid: cred.user.uid,
          email: cred.user.email,
          displayName: name,
          photoURL: null,
          createdAt: (/* @__PURE__ */ new Date()).toISOString()
        };
        yield setDoc(userRef, profile);
        this.userProfile.set(profile);
        this.router.navigate(["/"]);
      } catch (err) {
        console.error("Email Registration Error:", err);
        throw err;
      }
    });
  }
  logout() {
    return __async(this, null, function* () {
      yield signOut(this.auth);
      this.router.navigate(["/login"]);
    });
  }
  static {
    this.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

// src/app/components/header/header.component.ts
var _c0 = () => ({ register: true });
function HeaderComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.marketplace.cartCount());
  }
}
function HeaderComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 24);
    \u0275\u0275elementContainerEnd();
  }
}
function HeaderComponent_ng_container_24_ng_container_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 30);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", (tmp_5_0 = ctx_r0.auth.userProfile()) == null ? null : tmp_5_0.photoURL, \u0275\u0275sanitizeUrl);
  }
}
function HeaderComponent_ng_container_24_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((tmp_5_0 = ctx_r0.auth.userProfile()) == null ? null : tmp_5_0.displayName == null ? null : tmp_5_0.displayName.charAt(0)) || "U");
  }
}
function HeaderComponent_ng_container_24_ng_container_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "hr");
    \u0275\u0275elementStart(7, "a", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 35);
    \u0275\u0275element(9, "path", 36)(10, "circle", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "My Profile");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 38);
    \u0275\u0275listener("click", function HeaderComponent_ng_container_24_ng_container_1_div_6_Template_a_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.auth.logout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 35);
    \u0275\u0275element(15, "path", 39)(16, "polyline", 40)(17, "line", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "Log Out");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_5_0 = ctx_r0.auth.userProfile()) == null ? null : tmp_5_0.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_6_0 = ctx_r0.auth.userProfile()) == null ? null : tmp_6_0.email);
  }
}
function HeaderComponent_ng_container_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275listener("mouseenter", function HeaderComponent_ng_container_24_ng_container_1_Template_div_mouseenter_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showProfileDropdown.set(true));
    })("mouseleave", function HeaderComponent_ng_container_24_ng_container_1_Template_div_mouseleave_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.showProfileDropdown.set(false));
    });
    \u0275\u0275elementStart(2, "button", 27);
    \u0275\u0275template(3, HeaderComponent_ng_container_24_ng_container_1_img_3_Template, 1, 1, "img", 28)(4, HeaderComponent_ng_container_24_ng_container_1_ng_template_4_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, HeaderComponent_ng_container_24_ng_container_1_div_6_Template, 20, 2, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const initials_r4 = \u0275\u0275reference(5);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_4_0 = ctx_r0.auth.userProfile()) == null ? null : tmp_4_0.photoURL)("ngIfElse", initials_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.showProfileDropdown());
  }
}
function HeaderComponent_ng_container_24_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 42);
    \u0275\u0275text(1, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 43);
    \u0275\u0275text(3, " Create Account ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(1, _c0));
  }
}
function HeaderComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HeaderComponent_ng_container_24_ng_container_1_Template, 7, 3, "ng-container", 25)(2, HeaderComponent_ng_container_24_ng_template_2_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const loggedOut_r5 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.auth.userProfile())("ngIfElse", loggedOut_r5);
  }
}
var HeaderComponent = class _HeaderComponent {
  constructor() {
    this.marketplace = inject(MarketplaceService);
    this.auth = inject(AuthService);
    this.isScrolled = signal(false);
    this.showDropdown = signal(false);
    this.showProfileDropdown = signal(false);
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        this.isScrolled.set(window.scrollY > 10);
      });
    }
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 5, consts: [["loggedOut", ""], ["initials", ""], [1, "pm-header"], [1, "pm-container", "header-inner"], ["routerLink", "/", 1, "logo"], [1, "logo-icon"], ["width", "32", "height", "32", "viewBox", "0 0 32 32", "fill", "none"], ["id", "logoGrad", "x1", "0", "y1", "0", "x2", "32", "y2", "32"], ["offset", "0%", "stop-color", "#6366F1"], ["offset", "100%", "stop-color", "#A855F7"], ["width", "32", "height", "32", "rx", "8", "fill", "url(#logoGrad)"], ["x", "16", "y", "24", "font-family", "Plus Jakarta Sans, sans-serif", "font-size", "22", "font-weight", "800", "text-anchor", "middle", "fill", "white"], [1, "logo-text"], [1, "logo-accent"], [1, "header-actions"], ["routerLink", "/cart", "title", "Shopping Cart", 1, "cart-btn"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], ["class", "cart-badge", 4, "ngIf"], [4, "ngIf"], [1, "header-spacer"], [1, "cart-badge"], [1, "skeleton-avatar", 2, "width", "40px", "height", "40px", "border-radius", "50%", "background", "var(--pm-surface-muted)", "animation", "pulse 1.5s infinite"], [4, "ngIf", "ngIfElse"], [1, "user-profile", 3, "mouseenter", "mouseleave"], [1, "profile-btn"], ["class", "avatar-img", 3, "src", 4, "ngIf", "ngIfElse"], ["class", "dropdown-menu profile-dropdown", 4, "ngIf"], [1, "avatar-img", 3, "src"], [1, "avatar-initials"], [1, "dropdown-menu", "profile-dropdown"], [1, "profile-header"], ["routerLink", "/profile", 1, "dropdown-item"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "dropdown-item", 3, "click"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], ["routerLink", "/login", 1, "pm-btn", "pm-btn-ghost", "pm-btn-sm", "auth-btn"], ["routerLink", "/login", 1, "pm-btn", "pm-btn-primary", "pm-btn-sm", "auth-btn", "auth-btn-create", 3, "queryParams"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 2)(1, "div", 3)(2, "a", 4)(3, "span", 5);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 6)(5, "defs")(6, "linearGradient", 7);
        \u0275\u0275element(7, "stop", 8)(8, "stop", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(9, "rect", 10);
        \u0275\u0275elementStart(10, "text", 11);
        \u0275\u0275text(11, "S");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "span", 12);
        \u0275\u0275text(13, "selljust");
        \u0275\u0275elementStart(14, "span", 13);
        \u0275\u0275text(15, "code");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 14)(17, "a", 15);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(18, "svg", 16);
        \u0275\u0275element(19, "circle", 17)(20, "circle", 18)(21, "path", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275template(22, HeaderComponent_span_22_Template, 2, 1, "span", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, HeaderComponent_ng_container_23_Template, 2, 0, "ng-container", 21)(24, HeaderComponent_ng_container_24_Template, 4, 2, "ng-container", 21);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(25, "div", 22);
      }
      if (rf & 2) {
        \u0275\u0275classProp("scrolled", ctx.isScrolled());
        \u0275\u0275advance(22);
        \u0275\u0275property("ngIf", ctx.marketplace.cartCount() > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.auth.isAuthLoaded());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.auth.isAuthLoaded());
      }
    }, dependencies: [CommonModule, NgIf, RouterLink], styles: ["\n\n.pm-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-bottom: 1px solid transparent;\n  transition: all var(--pm-transition-base);\n}\n.pm-header.scrolled[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  border-bottom-color: var(--pm-border);\n  box-shadow: var(--pm-shadow-sm);\n}\n.header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 64px;\n  gap: 32px;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n  flex-shrink: 0;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--pm-text-primary);\n  letter-spacing: -0.02em;\n}\n.logo-accent[_ngcontent-%COMP%] {\n  background: var(--pm-gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.nav-links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--pm-text-secondary);\n  border-radius: var(--pm-radius-sm);\n  transition: all var(--pm-transition-fast);\n  text-decoration: none;\n}\n.nav-links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, \n.nav-links[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.06);\n}\n.nav-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.nav-dropdown-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 16px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: var(--pm-text-secondary);\n  background: none;\n  border: none;\n  cursor: pointer;\n  border-radius: var(--pm-radius-sm);\n  transition: all var(--pm-transition-fast);\n  font-family: inherit;\n}\n.nav-dropdown-trigger[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-primary);\n  background: rgba(99, 102, 241, 0.06);\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  min-width: 260px;\n  background: var(--pm-surface);\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-md);\n  box-shadow: var(--pm-shadow-xl);\n  padding: 8px;\n  animation: _ngcontent-%COMP%_scaleIn 0.2s ease;\n  z-index: 100;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: var(--pm-radius-sm);\n  text-decoration: none;\n  transition: all var(--pm-transition-fast);\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: var(--pm-surface-muted);\n}\n.cat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--pm-surface-muted);\n  border-radius: var(--pm-radius-sm);\n}\n.cat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--pm-text-primary);\n}\n.cat-count[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.cart-btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: var(--pm-radius-sm);\n  color: var(--pm-text-secondary);\n  transition: all var(--pm-transition-fast);\n  text-decoration: none;\n}\n.cart-btn[_ngcontent-%COMP%]:hover {\n  background: var(--pm-surface-muted);\n  color: var(--ion-color-primary);\n}\n.cart-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  width: 18px;\n  height: 18px;\n  background: var(--pm-gradient-warm);\n  color: white;\n  font-size: 0.65rem;\n  font-weight: 700;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.upload-btn[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.header-spacer[_ngcontent-%COMP%] {\n  height: 64px;\n}\n.user-profile[_ngcontent-%COMP%] {\n  position: relative;\n}\n.profile-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  margin-left: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.avatar-img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid var(--pm-border-light);\n}\n.avatar-initials[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--pm-gradient-primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n.profile-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  left: auto;\n  width: 240px;\n  padding: 8px 0;\n  top: calc(100% + 4px);\n  background: white;\n  border-radius: var(--pm-radius-md);\n  box-shadow: var(--pm-shadow-lg);\n  border: 1px solid var(--pm-border);\n  z-index: 1001;\n}\n.profile-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  display: flex;\n  flex-direction: column;\n}\n.profile-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--pm-text-primary);\n}\n.profile-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--pm-text-muted);\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.profile-dropdown[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid var(--pm-border-light);\n  margin: 4px 0;\n}\n.profile-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  color: var(--pm-text-secondary);\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  text-decoration: none;\n}\n.profile-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  background: var(--pm-surface-muted);\n  color: #EF4444;\n}\n@media (max-width: 768px) {\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n    position: fixed;\n    top: 64px;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: var(--pm-surface);\n    flex-direction: column;\n    padding: 24px;\n    gap: 8px;\n    z-index: 999;\n  }\n  .nav-links.mobile-open[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .nav-links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    padding: 14px 16px;\n    width: 100%;\n  }\n  .nav-dropdown[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .nav-dropdown-trigger[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 1.1rem;\n    padding: 14px 16px;\n  }\n  .dropdown-menu[_ngcontent-%COMP%] {\n    position: static;\n    box-shadow: none;\n    border: none;\n    padding-left: 20px;\n  }\n  .upload-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header-inner[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .header-actions[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .auth-btn-create[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.95) translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n/*# sourceMappingURL=header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\components\\header\\header.component.ts", lineNumber: 399 });
})();

// src/app/components/footer/footer.component.ts
function FooterComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pm_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", pm_r1.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pm_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pm_r1.name);
  }
}
var FooterComponent = class _FooterComponent {
  constructor() {
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.paymentMethods = [
      { name: "Visa", icon: "V", color: "#1A1F71" },
      { name: "Mastercard", icon: "MC", color: "#EB001B" },
      { name: "PayPal", icon: "PP", color: "#003087" },
      { name: "Stripe", icon: "S", color: "#635BFF" },
      { name: "Apple Pay", icon: "", color: "#000000" },
      { name: "Google Pay", icon: "G", color: "#4285F4" },
      { name: "Crypto", icon: "\u20BF", color: "#F7931A" }
    ];
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 121, vars: 2, consts: [[1, "pm-footer"], [1, "pm-container"], [1, "footer-grid"], [1, "footer-col", "footer-brand"], [1, "footer-logo"], ["width", "28", "height", "28", "viewBox", "0 0 32 32", "fill", "none"], ["id", "fLogoGrad", "x1", "0", "y1", "0", "x2", "32", "y2", "32"], ["offset", "0%", "stop-color", "#6366F1"], ["offset", "100%", "stop-color", "#A855F7"], ["width", "32", "height", "32", "rx", "8", "fill", "url(#fLogoGrad)"], ["x", "16", "y", "24", "font-family", "Plus Jakarta Sans, sans-serif", "font-size", "22", "font-weight", "800", "text-anchor", "middle", "fill", "white"], [1, "footer-desc"], [1, "social-links"], ["href", "#", "aria-label", "Twitter", 1, "social-link"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"], ["href", "#", "aria-label", "GitHub", 1, "social-link"], ["d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"], ["href", "#", "aria-label", "Discord", 1, "social-link"], ["d", "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"], ["href", "#", "aria-label", "YouTube", 1, "social-link"], ["d", "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"], [1, "footer-col"], [1, "footer-heading"], ["routerLink", "/browse"], ["routerLink", "/page/about"], ["routerLink", "/page/careers"], ["routerLink", "/page/blog"], ["routerLink", "/page/affiliate"], ["routerLink", "/page/press"], ["routerLink", "/page/contact"], ["routerLink", "/page/help"], ["routerLink", "/page/author-guide"], ["routerLink", "/page/buyer-faq"], ["routerLink", "/page/licensing"], ["routerLink", "/page/refund"], ["routerLink", "/page/report"], ["routerLink", "/page/terms"], ["routerLink", "/page/privacy"], ["routerLink", "/page/cookie"], ["routerLink", "/page/dmca"], ["routerLink", "/page/gdpr"], ["href", "#"], [1, "payment-section"], [1, "payment-label"], [1, "payment-icons"], ["class", "payment-icon", 4, "ngFor", "ngForOf"], [1, "footer-bottom"], [1, "footer-bottom-left"], [1, "footer-legal-detail"], [1, "footer-bottom-right"], [1, "footer-lang"], [1, "footer-currency"], [1, "payment-icon"], [1, "pay-logo"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(5, "svg", 5)(6, "defs")(7, "linearGradient", 6);
        \u0275\u0275element(8, "stop", 7)(9, "stop", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "rect", 9);
        \u0275\u0275elementStart(11, "text", 10);
        \u0275\u0275text(12, "S");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14, "selljust");
        \u0275\u0275elementStart(15, "strong");
        \u0275\u0275text(16, "code");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "p", 11);
        \u0275\u0275text(18, "The leading marketplace for SaaS Boilerplates, EdTech LMS, and Complete B2B Systems.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 12)(20, "a", 13);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(21, "svg", 14);
        \u0275\u0275element(22, "path", 15);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "a", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 14);
        \u0275\u0275element(25, "path", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(26, "a", 18);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(27, "svg", 14);
        \u0275\u0275element(28, "path", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(29, "a", 20);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(30, "svg", 14);
        \u0275\u0275element(31, "path", 21);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(32, "div", 22)(33, "h4", 23);
        \u0275\u0275text(34, "Marketplace");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "ul")(36, "li")(37, "a", 24);
        \u0275\u0275text(38, "All Products");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(39, "div", 22)(40, "h4", 23);
        \u0275\u0275text(41, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "ul")(43, "li")(44, "a", 25);
        \u0275\u0275text(45, "About Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "li")(47, "a", 26);
        \u0275\u0275text(48, "Careers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "li")(50, "a", 27);
        \u0275\u0275text(51, "Blog");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "li")(53, "a", 28);
        \u0275\u0275text(54, "Affiliate Program");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "li")(56, "a", 29);
        \u0275\u0275text(57, "Press Kit");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "li")(59, "a", 30);
        \u0275\u0275text(60, "Contact Us");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(61, "div", 22)(62, "h4", 23);
        \u0275\u0275text(63, "Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "ul")(65, "li")(66, "a", 31);
        \u0275\u0275text(67, "Help Center");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "li")(69, "a", 32);
        \u0275\u0275text(70, "Author Guide");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "li")(72, "a", 33);
        \u0275\u0275text(73, "Buyer FAQ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "li")(75, "a", 34);
        \u0275\u0275text(76, "Licensing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "li")(78, "a", 35);
        \u0275\u0275text(79, "Refund Policy");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "li")(81, "a", 36);
        \u0275\u0275text(82, "Report an Item");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(83, "div", 22)(84, "h4", 23);
        \u0275\u0275text(85, "Legal");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "ul")(87, "li")(88, "a", 37);
        \u0275\u0275text(89, "Terms of Service");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "li")(91, "a", 38);
        \u0275\u0275text(92, "Privacy Policy");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "li")(94, "a", 39);
        \u0275\u0275text(95, "Cookie Policy");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(96, "li")(97, "a", 40);
        \u0275\u0275text(98, "DMCA Policy");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "li")(100, "a", 41);
        \u0275\u0275text(101, "GDPR Compliance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "li")(103, "a", 42);
        \u0275\u0275text(104, "Accessibility");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(105, "div", 43)(106, "span", 44);
        \u0275\u0275text(107, "We Accept:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "div", 45);
        \u0275\u0275template(109, FooterComponent_div_109_Template, 5, 4, "div", 46);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "div", 47)(111, "div", 48)(112, "p");
        \u0275\u0275text(113);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "p", 49);
        \u0275\u0275text(115, "selljustcode LLC \u2022 EIN: 87-XXXXXXX \u2022 221 Market Street, Suite 300, San Francisco, CA 94105");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "div", 50)(117, "span", 51);
        \u0275\u0275text(118, "\u{1F30D} English (US)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "span", 52);
        \u0275\u0275text(120, "\u{1F4B2} USD");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(109);
        \u0275\u0275property("ngForOf", ctx.paymentMethods);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\xA9 ", ctx.currentYear, " selljustcode. All rights reserved. Registered in Delaware, USA.");
      }
    }, dependencies: [CommonModule, NgForOf, RouterLink], styles: ["\n\n.trust-bar[_ngcontent-%COMP%] {\n  background: var(--pm-surface-muted);\n  border-top: 1px solid var(--pm-border-light);\n  padding: 32px 0;\n}\n.trust-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.trust-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.trust-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--pm-surface);\n  border-radius: var(--pm-radius-md);\n  font-size: 1.4rem;\n  box-shadow: var(--pm-shadow-sm);\n}\n.trust-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: var(--pm-text-primary);\n}\n.trust-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--pm-text-muted);\n}\n.certifications-bar[_ngcontent-%COMP%] {\n  background: var(--pm-surface);\n  padding: 24px 0;\n  border-top: 1px solid var(--pm-border-light);\n}\n.cert-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 32px;\n  flex-wrap: wrap;\n}\n.cert-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 16px;\n  border: 1px solid var(--pm-border);\n  border-radius: var(--pm-radius-sm);\n  transition: all var(--pm-transition-base);\n}\n.cert-badge[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-primary);\n  box-shadow: var(--pm-shadow-sm);\n}\n.cert-icon-wrap[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cert-emoji[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.cert-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--pm-text-primary);\n}\n.cert-detail[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.65rem;\n  color: var(--pm-text-muted);\n}\n.pm-footer[_ngcontent-%COMP%] {\n  background: #0F172A;\n  color: #94A3B8;\n  padding: 64px 0 0;\n}\n.footer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;\n  gap: 40px;\n  padding-bottom: 48px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.footer-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 1.2rem;\n  color: white;\n  margin-bottom: 16px;\n}\n.footer-logo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #A5B4FC;\n}\n.footer-desc[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.7;\n  margin-bottom: 20px;\n}\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.social-link[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--pm-radius-sm);\n  background: rgba(255, 255, 255, 0.06);\n  color: #94A3B8;\n  transition: all var(--pm-transition-fast);\n  text-decoration: none;\n}\n.social-link[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.2);\n  color: #A5B4FC;\n  transform: translateY(-2px);\n}\n.footer-heading[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 700;\n  margin: 0 0 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.footer-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer-col[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.footer-col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #94A3B8;\n  font-size: 0.875rem;\n  text-decoration: none;\n  transition: color var(--pm-transition-fast);\n}\n.footer-col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.payment-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 24px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  flex-wrap: wrap;\n}\n.payment-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748B;\n}\n.payment-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.payment-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 10px;\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 6px;\n  font-size: 0.75rem;\n  color: #94A3B8;\n}\n.pay-logo[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 16px;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.6rem;\n  color: white;\n  font-weight: 700;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px 0;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n}\n.footer-legal-detail[_ngcontent-%COMP%] {\n  font-size: 0.7rem !important;\n  color: #475569;\n  margin-top: 4px !important;\n}\n.footer-bottom-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 0.8rem;\n}\n@media (max-width: 1024px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n  .footer-brand[_ngcontent-%COMP%] {\n    grid-column: span 3;\n  }\n}\n@media (max-width: 768px) {\n  .trust-inner[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .footer-brand[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n}\n@media (max-width: 480px) {\n  .trust-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .footer-brand[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\components\\footer\\footer.component.ts", lineNumber: 357 });
})();

export {
  MarketplaceService,
  AuthService,
  HeaderComponent,
  FooterComponent
};
//# sourceMappingURL=chunk-LLT3V3GV.js.map

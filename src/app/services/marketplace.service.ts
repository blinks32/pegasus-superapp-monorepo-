import { Injectable, signal, computed, inject } from '@angular/core';
import { Product, ProductCategory, CategoryInfo, Review, Author, CartItem, SearchFilters, AdminProject, SalesStat } from '../models/marketplace.models';
import { Firestore, collection, collectionData, doc, setDoc, query, orderBy } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class MarketplaceService {

  private firestore = inject(Firestore);

  /* ═══════════ State Signals ═══════════ */
  private _products = signal<Product[]>([]);
  private _cart = signal<CartItem[]>([]);
  private _searchFilters = signal<SearchFilters>({ query: '', sortBy: 'bestselling' });
  private _adminProjects = signal<AdminProject[]>([]);

  products = this._products.asReadonly();
  cart = this._cart.asReadonly();
  searchFilters = this._searchFilters.asReadonly();
  adminProjects = this._adminProjects.asReadonly();

  cartTotal = computed(() =>
    this._cart().reduce((sum, item) => {
      let price = item.license === 'extended' ? item.product.price * 3 : item.product.price;
      if (item.addReskin && item.product.reskinPrice) price += item.product.reskinPrice;
      return sum + price * item.quantity;
    }, 0)
  );

  cartCount = computed(() => this._cart().reduce((sum, item) => sum + item.quantity, 0));

  filteredProducts = computed(() => {
    const filters = this._searchFilters();
    let result = [...this._products()];

    if (filters.query) {
      const q = filters.query.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    if (filters.category) result = result.filter(p => p.category === filters.category);
    if (filters.minPrice != null) result = result.filter(p => p.price >= filters.minPrice!);
    if (filters.maxPrice != null) result = result.filter(p => p.price <= filters.maxPrice!);
    if (filters.minRating != null) result = result.filter(p => p.rating >= filters.minRating!);

    switch (filters.sortBy) {
      case 'newest': result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()); break;
      case 'bestselling': result.sort((a, b) => b.totalSales - a.totalSales); break;
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'rating': result.sort((a, b) => b.rating - a.rating); break;
      case 'trending': result.sort((a, b) => b.totalVisits - a.totalVisits); break;
    }
    return result;
  });

  featuredProducts = computed(() => this._products().filter(p => p.isFeatured));
  bestsellerProducts = computed(() => [...this._products()].sort((a, b) => b.totalSales - a.totalSales).slice(0, 8));
  newestProducts = computed(() => [...this._products()].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 8));

  /* ═══════════ Categories ═══════════ */
  categories: CategoryInfo[] = [
    { id: 'unity-games', label: 'Unity Games', icon: '🎮', color: '#10B981', gradient: 'linear-gradient(135deg, #10B981, #34D399)', count: 0 },
    { id: 'ionic-apps', label: 'Ionic Apps', icon: '📱', color: '#3B82F6', gradient: 'linear-gradient(135deg, #3B82F6, #60A5FA)', count: 0 },
  ];

  /* ═══════════ Collections ═══════════ */
  private authors: Author[] = []; // Real authors would come from a collection
  salesStats: SalesStat[] = []; // Calculated dynamically

  constructor() {
    const productsRef = collection(this.firestore, 'products');
    const q = query(productsRef, orderBy('createdAt', 'desc'));
    collectionData(q, { idField: 'id' }).subscribe((data: any) => {
      this._products.set(data as Product[]);
    });

    // Load cart from localStorage
    const saved = localStorage.getItem('pm_cart');
    if (saved) {
      try { this._cart.set(JSON.parse(saved)); } catch { }
    }
  }

  /* ═══════════ Product CRUD ═══════════ */

  getProductById(id: string): Product | undefined {
    return this._products().find(p => p.id === id);
  }

  getProductBySlug(slug: string): Product | undefined {
    return this._products().find(p => p.slug === slug);
  }

  getProductsByCategory(cat: ProductCategory): Product[] {
    return this._products().filter(p => p.category === cat);
  }

  getRelatedProducts(product: Product, limit = 4): Product[] {
    return this._products().filter(p => p.id !== product.id && (p.category === product.category || p.tags.some(t => product.tags.includes(t)))).slice(0, limit);
  }

  /* ═══════════ Search & Filter ═══════════ */

  updateFilters(filters: Partial<SearchFilters>) {
    this._searchFilters.update(f => ({ ...f, ...filters }));
  }

  /* ═══════════ Cart ═══════════ */

  addToCart(product: Product, license: 'regular' | 'extended' = 'regular', addReskin = false) {
    this._cart.update(cart => {
      const existing = cart.find(i => i.product.id === product.id && i.license === license);
      if (existing) return cart;
      const updated = [...cart, { product, license, quantity: 1, addReskin }];
      localStorage.setItem('pm_cart', JSON.stringify(updated));
      return updated;
    });
  }

  removeFromCart(productId: string) {
    this._cart.update(cart => {
      const updated = cart.filter(i => i.product.id !== productId);
      localStorage.setItem('pm_cart', JSON.stringify(updated));
      return updated;
    });
  }

  clearCart() {
    this._cart.set([]);
    localStorage.removeItem('pm_cart');
  }

  isInCart(productId: string): boolean {
    return this._cart().some(i => i.product.id === productId);
  }

  /* ═══════════ Reviews ═══════════ */

  addReview(productId: string, review: Omit<Review, 'id' | 'date' | 'helpful'>) {
    this._products.update(products => {
      return products.map(p => {
        if (p.id !== productId) return p;
        const newReview: Review = { ...review, id: 'r' + Date.now(), date: new Date(), helpful: 0 };
        const newReviews = [newReview, ...p.reviews];
        const avgRating = newReviews.reduce((s, r) => s + r.rating, 0) / newReviews.length;
        return { ...p, reviews: newReviews, rating: Math.round(avgRating * 10) / 10, totalRatings: newReviews.length };
      });
    });
  }

  incrementVisit(productId: string) {
    this._products.update(products =>
      products.map(p => p.id === productId ? { ...p, totalVisits: p.totalVisits + 1 } : p)
    );
  }

  /* ═══════════ Admin ═══════════ */

  async submitProject(project: AdminProject) {
    const id = 'proj_' + Date.now();
    const newProject = { ...project, id, status: 'pending' as const, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    const projectRef = doc(this.firestore, `products/${id}`);
    await setDoc(projectRef, newProject);
    return id;
  }

  updateProjectStatus(id: string, status: AdminProject['status']) {
    this._adminProjects.update(projects =>
      projects.map(p => p.id === id ? { ...p, status, updatedAt: new Date() } : p)
    );
  }

  getAdminStats() {
    const projects = this._adminProjects();
    return {
      total: projects.length,
      published: projects.filter(p => p.status === 'published').length,
      pending: projects.filter(p => p.status === 'pending').length,
      drafts: projects.filter(p => p.status === 'draft').length,
    };
  }

}

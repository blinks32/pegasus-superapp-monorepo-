import { Injectable, signal, computed, inject } from '@angular/core';
import { Product, ProductCategory, CategoryInfo, Review, Author, CartItem, SearchFilters, AdminProject, SalesStat } from '../models/marketplace.models';
import { Firestore, collection, collectionData, doc, setDoc, updateDoc, deleteDoc, query, orderBy, increment, addDoc, getDocs } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class MarketplaceService {

  private firestore = inject(Firestore);

  /* ═══════════ State Signals ═══════════ */
  private _products = signal<Product[]>([]); // Initialized as empty array
  private _isLoadingProducts = signal<boolean>(true);
  private _initialLoadComplete = signal<boolean>(false);
  private _cart = signal<CartItem[]>([]);
  private _searchFilters = signal<SearchFilters>({ query: '', sortBy: 'bestselling' });
  private _adminProjects = signal<AdminProject[]>([]);

  products = this._products.asReadonly();
  isLoadingProducts = this._isLoadingProducts.asReadonly();
  initialLoadComplete = this._initialLoadComplete.asReadonly();
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
    const products = this._products();
    if (!products) return [];

    const filters = this._searchFilters();
    let result = [...products];

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

  featuredProducts = computed(() => {
    const products = this._products();
    return products ? products.filter(p => p.isFeatured) : [];
  });

  bestsellerProducts = computed(() => {
    const products = this._products();
    return products ? [...products].sort((a, b) => b.totalSales - a.totalSales).slice(0, 8) : [];
  });

  newestProducts = computed(() => {
    const products = this._products();
    return products ? [...products].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 8) : [];
  });

  /* ═══════════ Categories ═══════════ */
  categories: CategoryInfo[] = [
    { id: 'saas-boilerplates', label: 'SaaS Boilerplates', icon: '🚀', color: '#10B981', gradient: 'linear-gradient(135deg, #10B981, #34D399)', count: 0 },
    { id: 'b2b-systems', label: 'B2B Systems', icon: '🏢', color: '#3B82F6', gradient: 'linear-gradient(135deg, #3B82F6, #60A5FA)', count: 0 },
    { id: 'super-apps', label: 'Super Apps', icon: '📱', color: '#F97316', gradient: 'linear-gradient(135deg, #F97316, #FB923C)', count: 0 },
    { id: 'edtech-lms', label: 'EdTech LMS', icon: '🎓', color: '#8B5CF6', gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)', count: 0 },
    { id: 'pvp-games', label: 'PvP Games', icon: '🎮', color: '#EF4444', gradient: 'linear-gradient(135deg, #EF4444, #F87171)', count: 0 },
  ];

  /* ═══════════ Collections ═══════════ */
  private authors: Author[] = []; // Real authors would come from a collection
  salesStats: SalesStat[] = []; // Calculated dynamically

  constructor() {
    const productsRef = collection(this.firestore, 'products');
    const q = query(productsRef, orderBy('createdAt', 'desc'));

    // Explicitly set loading to true before fetching
    this._isLoadingProducts.set(true);

    collectionData(q, { idField: 'id' }).subscribe((data: any) => {
      this._products.set(data as Product[]);
      // Important: Only flip loading states after we have at least one emission
      this._isLoadingProducts.set(false);
      this._initialLoadComplete.set(true);
    });

    // Load cart from localStorage
    const saved = localStorage.getItem('pm_cart');
    if (saved) {
      try { this._cart.set(JSON.parse(saved)); } catch { }
    }
  }

  /* ═══════════ Product CRUD ═══════════ */

  getProductById(id: string): Product | undefined {
    const products = this._products();
    if (!products) return undefined;
    return products.find(p => p.id === id);
  }

  getProductBySlug(slug: string): Product | undefined {
    const products = this._products();
    if (!products) return undefined;
    return products.find(p => p.slug === slug);
  }

  getProductsByCategory(cat: ProductCategory): Product[] {
    const products = this._products();
    if (!products) return [];
    return products.filter(p => p.category === cat);
  }

  getRelatedProducts(product: Product, limit = 4): Product[] {
    const products = this._products();
    if (!products) return [];
    return products.filter(p => p.id !== product.id && (p.category === product.category || p.tags.some(t => product.tags.includes(t)))).slice(0, limit);
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
      if (!products) return products;
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
    this._products.update(products => {
      if (!products) return products;
      return products.map(p => p.id === productId ? { ...p, totalVisits: p.totalVisits + 1 } : p);
    });
  }

  /**
   * Track a unique visit per product. Uses localStorage to prevent
   * counting the same user twice. Persists the increment to Firestore.
   */
  async trackUniqueVisit(productId: string) {
    const key = `visited_${productId}`;
    if (localStorage.getItem(key)) return; // Already counted this user

    localStorage.setItem(key, '1');
    // Optimistic local update
    this.incrementVisit(productId);

    // Persist to Firestore
    try {
      const productRef = doc(this.firestore, `products/${productId}`);
      await updateDoc(productRef, { totalVisits: increment(1) });

      // Geo analytics tracking
      fetch('https://get.geojs.io/v1/ip/geo.json').then(async (resp) => {
        const geo = await resp.json();
        const analyticsRef = collection(this.firestore, 'site_analytics');
        await addDoc(analyticsRef, {
          productId,
          timestamp: new Date(),
          ip: geo.ip || 'Unknown',
          country: geo.country || 'Unknown',
          countryCode: geo.country_code || '',
          city: geo.city || 'Unknown',
          device: navigator.userAgent
        });
      }).catch(e => console.error('Geo tracking failed', e));

    } catch (e) {
      console.error('Failed to persist visit count:', e);
    }
  }

  /* ═══════════ Comments ═══════════ */

  async addComment(productId: string, comment: { userName: string; text: string; date: Date }) {
    try {
      const commentsRef = collection(this.firestore, `products/${productId}/comments`);
      await addDoc(commentsRef, comment);
    } catch (e) {
      console.error('Error adding comment:', e);
    }
  }

  async getComments(productId: string): Promise<Array<{ userName: string; text: string; date: Date }>> {
    try {
      const commentsRef = collection(this.firestore, `products/${productId}/comments`);
      const q = query(commentsRef, orderBy('date', 'desc'));
      const snap = await getDocs(q);
      return snap.docs.map(d => {
        const data = d.data() as any;
        return {
          userName: data.userName || 'Anonymous',
          text: data.text || '',
          date: data.date?.toDate?.() || new Date(data.date),
        };
      });
    } catch (e) {
      console.error('Error loading comments:', e);
      return [];
    }
  }

  /* ═══════════ Admin ═══════════ */

  async submitProject(project: AdminProject) {
    const id = 'prod_' + Date.now();
    const slug = project.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const now = new Date();
    const newProduct: any = {
      id,
      title: project.title,
      slug,
      shortDescription: project.shortDescription,
      fullDescription: project.fullDescription,
      category: project.category,
      price: project.price,
      thumbnailUrl: project.thumbnailData || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
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
        id: 'admin',
        name: 'Admin',
        avatar: 'https://ui-avatars.com/api/?name=Admin&background=6366F1&color=fff',
        bio: 'Platform Administrator',
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
      status: project.status || 'published'
    };

    // Only include fields that have values
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
      await setDoc(projectRef, newProduct);
      console.log('Project saved successfully:', id);
      return id;
    } catch (error) {
      console.error('Error saving project to Firestore:', error);
      throw error;
    }
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

  /* ═══════════ Update & Delete Products ═══════════ */

  async updateProduct(id: string, data: Partial<Product>) {
    try {
      const productRef = doc(this.firestore, `products/${id}`);
      await updateDoc(productRef, { ...data, lastUpdated: new Date() });
      console.log('Product updated successfully:', id);
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  }

  async deleteProduct(id: string) {
    try {
      const productRef = doc(this.firestore, `products/${id}`);
      await deleteDoc(productRef);
      console.log('Product deleted successfully:', id);
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  }

}
import { Injectable, signal, computed } from '@angular/core';
import { Product, ProductCategory, CategoryInfo, Review, Author, CartItem, SearchFilters, AdminProject, SalesStat } from '../models/marketplace.models';

@Injectable({ providedIn: 'root' })
export class MarketplaceService {

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
    { id: 'mobile-apps', label: 'Mobile Apps', icon: '📱', color: '#F97316', gradient: 'linear-gradient(135deg, #F97316, #FB923C)', count: 342 },
    { id: 'web-templates', label: 'Web Templates', icon: '🌐', color: '#3B82F6', gradient: 'linear-gradient(135deg, #3B82F6, #60A5FA)', count: 528 },
    { id: 'wordpress', label: 'WordPress', icon: '🔧', color: '#8B5CF6', gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)', count: 415 },
    { id: 'javascript', label: 'JavaScript', icon: '⚡', color: '#EAB308', gradient: 'linear-gradient(135deg, #EAB308, #FDE047)', count: 289 },
    { id: 'ui-kits', label: 'UI Kits', icon: '🎨', color: '#EC4899', gradient: 'linear-gradient(135deg, #EC4899, #F472B6)', count: 176 },
    { id: 'full-stack', label: 'Full Stack', icon: '🚀', color: '#10B981', gradient: 'linear-gradient(135deg, #10B981, #34D399)', count: 203 },
    { id: 'plugins', label: 'Plugins', icon: '🧩', color: '#06B6D4', gradient: 'linear-gradient(135deg, #06B6D4, #22D3EE)', count: 312 },
    { id: 'themes', label: 'Themes', icon: '✨', color: '#F43F5E', gradient: 'linear-gradient(135deg, #F43F5E, #FB7185)', count: 198 },
  ];

  /* ═══════════ Mock Authors ═══════════ */
  private authors: Author[] = [
    { id: 'a1', name: 'Pegasus Labs', avatar: '', bio: 'Full-stack development studio crafting premium digital products.', totalSales: 12840, rating: 4.9, memberSince: new Date('2020-03-15'), badges: ['power-elite', 'top-seller'], verified: true },
    { id: 'a2', name: 'CodeCraft Studio', avatar: '', bio: 'Specialists in mobile and cross-platform applications.', totalSales: 8420, rating: 4.8, memberSince: new Date('2021-06-10'), badges: ['top-seller'], verified: true },
    { id: 'a3', name: 'PixelForge', avatar: '', bio: 'UI/UX design experts building beautiful interfaces.', totalSales: 6150, rating: 4.7, memberSince: new Date('2019-11-05'), badges: ['trending', 'exclusive'], verified: true },
    { id: 'a4', name: 'DevNova', avatar: '', bio: 'Innovative small team building next-gen web tools.', totalSales: 3890, rating: 4.6, memberSince: new Date('2022-01-20'), badges: ['trending'], verified: true },
  ];

  /* ═══════════ Sales Statistics ═══════════ */
  salesStats: SalesStat[] = [
    { label: 'Total Sales', value: 48250, change: 12.5, icon: '💰', color: '#10B981' },
    { label: 'Total Products', value: 2463, change: 8.3, icon: '📦', color: '#6366F1' },
    { label: 'Happy Customers', value: 31800, change: 15.2, icon: '😊', color: '#F59E0B' },
    { label: 'Total Reviews', value: 18920, change: 9.7, icon: '⭐', color: '#EC4899' },
  ];

  constructor() {
    this._products.set(this.generateDemoProducts());
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

  submitProject(project: AdminProject): string {
    const id = 'proj_' + Date.now();
    const newProject = { ...project, id, status: 'pending' as const, createdAt: new Date(), updatedAt: new Date() };
    this._adminProjects.update(p => [newProject, ...p]);
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

  /* ═══════════ Demo Data Generator ═══════════ */

  private generateDemoProducts(): Product[] {
    const now = new Date();
    const daysAgo = (d: number) => new Date(now.getTime() - d * 86400000);

    const makeReviews = (count: number): Review[] => {
      const names = ['Alex Morgan', 'Sarah Chen', 'James Wilson', 'Maria Lopez', 'David Kim', 'Emma Davis', 'Raj Patel', 'Lisa Wong', 'Carlos Rivera', 'Amy Foster'];
      const comments = [
        'Excellent code quality, well-documented. Saved me weeks of work!',
        'Great product, the support team is incredibly responsive.',
        'Clean architecture and modern design. Highly recommended.',
        'Perfect for my project. Easy to customize and extend.',
        'Best purchase I made this year. The code is clean and well organized.',
        'Very professional. The documentation is top-notch.',
        'Good value for money. Works exactly as described.',
        'Impressive attention to detail. Will buy more from this author.',
        'Exactly what I needed. The reskin service was amazing!',
        'Five stars! The live preview helped me decide to buy it.'
      ];
      return Array.from({ length: Math.min(count, 10) }, (_, i) => ({
        id: `rev_${i}`,
        userId: `u${i}`,
        userName: names[i % names.length],
        userAvatar: '',
        rating: 4 + Math.random(),
        title: comments[i % comments.length].substring(0, 40) + '...',
        comment: comments[i % comments.length],
        date: daysAgo(Math.floor(Math.random() * 90)),
        helpful: Math.floor(Math.random() * 50),
        verified: Math.random() > 0.3,
      }));
    };

    const productData: Partial<Product>[] = [
      {
        id: 'p1', title: 'SuperApp — Flutter Multi-Service Platform', slug: 'superapp-flutter',
        shortDescription: 'Complete Flutter super-app with ride-hailing, food delivery, groceries & more. Firebase-powered with admin panel.',
        category: 'mobile-apps', price: 59, originalPrice: 99, discountPercent: 40,
        rating: 4.9, totalRatings: 342, totalSales: 4850, totalVisits: 38200,
        tags: ['flutter', 'firebase', 'multi-vendor', 'super-app', 'dart'],
        features: ['Ride Hailing Module', 'Food Delivery', 'Grocery Shopping', 'Admin Dashboard', 'Push Notifications', 'Payment Gateway', 'Real-time Tracking', 'Multi-language'],
        techStack: ['Flutter 3.x', 'Firebase', 'Dart', 'Google Maps API'],
        compatibility: ['iOS 13+', 'Android 8+', 'Web'],
        version: '4.2.0', fileSize: '285 MB', isFeatured: true, isNew: false, isBestseller: true,
        frameworks: ['Flutter', 'Firebase'], hasReskinService: true, reskinPrice: 199,
        lastUpdated: daysAgo(3), createdAt: daysAgo(180),
      },
      {
        id: 'p2', title: 'AdminPro — Angular Material Dashboard', slug: 'adminpro-angular',
        shortDescription: 'Premium Angular 18 admin dashboard with 200+ components, charts, tables, auth pages & dark mode.',
        category: 'web-templates', price: 39, originalPrice: 69, discountPercent: 43,
        rating: 4.8, totalRatings: 256, totalSales: 3620, totalVisits: 29100,
        tags: ['angular', 'material', 'dashboard', 'admin', 'typescript'],
        features: ['200+ UI Components', 'Dark & Light Themes', 'Role-based Auth', 'ApexCharts', 'Data Tables', 'Form Builder', 'Calendar', 'Kanban Board'],
        techStack: ['Angular 18', 'Material Design', 'TypeScript', 'SCSS'],
        compatibility: ['Chrome', 'Firefox', 'Safari', 'Edge'],
        version: '7.1.0', fileSize: '48 MB', isFeatured: true, isNew: false, isBestseller: true,
        frameworks: ['Angular', 'Material'], hasReskinService: true, reskinPrice: 149,
        lastUpdated: daysAgo(5), createdAt: daysAgo(240),
      },
      {
        id: 'p3', title: 'ShopFlow — React eCommerce Starter', slug: 'shopflow-react',
        shortDescription: 'Next.js 14 e-commerce solution with Stripe, inventory management, and headless CMS integration.',
        category: 'full-stack', price: 49, originalPrice: 79, discountPercent: 38,
        rating: 4.7, totalRatings: 189, totalSales: 2840, totalVisits: 22500,
        tags: ['react', 'nextjs', 'ecommerce', 'stripe', 'tailwind'],
        features: ['Stripe Checkout', 'Product Variants', 'Inventory System', 'SEO Optimized', 'Headless CMS', 'Order Management', 'Customer Reviews', 'Analytics'],
        techStack: ['Next.js 14', 'React', 'Stripe', 'Prisma', 'PostgreSQL'],
        compatibility: ['Node 18+', 'Vercel', 'AWS'],
        version: '3.5.0', fileSize: '62 MB', isFeatured: true, isNew: false, isBestseller: false,
        frameworks: ['React', 'Next.js'], hasReskinService: true, reskinPrice: 179,
        lastUpdated: daysAgo(7), createdAt: daysAgo(120),
      },
      {
        id: 'p4', title: 'VueCMS — Headless Blog & Portfolio', slug: 'vuecms-headless',
        shortDescription: 'Beautiful Vue 3 + Nuxt 3 portfolio and blog system with MDX, animations, and full CMS backend.',
        category: 'web-templates', price: 29, originalPrice: 49, discountPercent: 41,
        rating: 4.6, totalRatings: 134, totalSales: 1920, totalVisits: 16800,
        tags: ['vuejs', 'nuxt', 'cms', 'blog', 'portfolio'],
        features: ['MDX Blog Engine', 'Portfolio Gallery', 'Contact Forms', 'SEO Tools', 'Dark Mode', 'i18n Support', 'RSS Feed', 'Sitemap'],
        techStack: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Tailwind CSS'],
        compatibility: ['Node 18+', 'Netlify', 'Vercel'],
        version: '2.8.0', fileSize: '34 MB', isFeatured: false, isNew: true, isBestseller: false,
        frameworks: ['Vue', 'Nuxt'], hasReskinService: false,
        lastUpdated: daysAgo(2), createdAt: daysAgo(14),
      },
      {
        id: 'p5', title: 'ChatBot AI — Conversational Widget', slug: 'chatbot-ai-widget',
        shortDescription: 'Embeddable AI chatbot widget with GPT-4 integration, custom training, analytics, and white-labeling.',
        category: 'javascript', price: 44, originalPrice: 69, discountPercent: 36,
        rating: 4.8, totalRatings: 201, totalSales: 3150, totalVisits: 25400,
        tags: ['ai', 'chatbot', 'gpt', 'widget', 'saas'],
        features: ['GPT-4 Integration', 'Custom Training', 'Analytics Dashboard', 'White Label', 'Multi-language', 'Lead Capture', 'File Upload', 'Typing Indicators'],
        techStack: ['TypeScript', 'OpenAI API', 'WebSockets', 'Node.js'],
        compatibility: ['Any website', 'React', 'Vue', 'Angular'],
        version: '2.3.0', fileSize: '12 MB', isFeatured: true, isNew: false, isBestseller: true,
        frameworks: ['Vanilla JS', 'Node.js'], hasReskinService: true, reskinPrice: 129,
        lastUpdated: daysAgo(4), createdAt: daysAgo(90),
      },
      {
        id: 'p6', title: 'LaravelKit — SaaS Boilerplate', slug: 'laravelkit-saas',
        shortDescription: 'Production-ready Laravel SaaS starter with subscriptions, team management, and API builder.',
        category: 'full-stack', price: 69, originalPrice: 99, discountPercent: 30,
        rating: 4.9, totalRatings: 276, totalSales: 4120, totalVisits: 31600,
        tags: ['laravel', 'saas', 'php', 'stripe', 'boilerplate'],
        features: ['Subscription Billing', 'Team Management', 'API Builder', 'Webhooks', 'Role Permissions', 'Email Templates', 'Activity Logs', '2FA Auth'],
        techStack: ['Laravel 11', 'PHP 8.3', 'Livewire', 'Alpine.js', 'MySQL'],
        compatibility: ['PHP 8.1+', 'MySQL 8+', 'Redis'],
        version: '5.0.0', fileSize: '78 MB', isFeatured: true, isNew: false, isBestseller: true,
        frameworks: ['Laravel', 'Livewire'], hasReskinService: true, reskinPrice: 249,
        lastUpdated: daysAgo(1), createdAt: daysAgo(365),
      },
      {
        id: 'p7', title: 'IconForge — SVG Icon Library', slug: 'iconforge-svg',
        shortDescription: '3000+ hand-crafted SVG icons with React, Vue & Angular components. Figma plugin included.',
        category: 'ui-kits', price: 24, originalPrice: 39, discountPercent: 38,
        rating: 4.7, totalRatings: 167, totalSales: 2580, totalVisits: 19200,
        tags: ['icons', 'svg', 'figma', 'design-system', 'react'],
        features: ['3000+ Icons', 'React Components', 'Vue Components', 'Angular Components', 'Figma Plugin', 'Customizable', 'Tree-shakeable', 'TypeScript'],
        techStack: ['SVG', 'React', 'Vue', 'Angular'],
        compatibility: ['All frameworks', 'Figma', 'Sketch'],
        version: '6.2.0', fileSize: '18 MB', isFeatured: false, isNew: false, isBestseller: false,
        frameworks: ['React', 'Vue', 'Angular'], hasReskinService: false,
        lastUpdated: daysAgo(10), createdAt: daysAgo(200),
      },
      {
        id: 'p8', title: 'FormBuilder Pro — Drag & Drop', slug: 'formbuilder-pro',
        shortDescription: 'Advanced drag-and-drop form builder with conditional logic, file uploads, and payment integration.',
        category: 'javascript', price: 34, originalPrice: 59, discountPercent: 42,
        rating: 4.5, totalRatings: 143, totalSales: 2190, totalVisits: 17600,
        tags: ['forms', 'drag-drop', 'react', 'builder', 'no-code'],
        features: ['Drag & Drop Builder', 'Conditional Logic', 'File Uploads', 'Payment Fields', 'Email Notifications', 'Webhook Integration', 'API', 'Templates'],
        techStack: ['React', 'TypeScript', 'DnD Kit', 'Zod'],
        compatibility: ['React 18+', 'Next.js', 'Remix'],
        version: '3.1.0', fileSize: '22 MB', isFeatured: false, isNew: true, isBestseller: false,
        frameworks: ['React'], hasReskinService: true, reskinPrice: 99,
        lastUpdated: daysAgo(6), createdAt: daysAgo(21),
      },
      {
        id: 'p9', title: 'DeliverEats — Food Delivery App', slug: 'delivereats-food',
        shortDescription: 'Complete food delivery solution with customer, restaurant & driver apps. React Native + Node.js backend.',
        category: 'mobile-apps', price: 79, originalPrice: 129, discountPercent: 39,
        rating: 4.8, totalRatings: 298, totalSales: 3950, totalVisits: 34100,
        tags: ['react-native', 'food-delivery', 'nodejs', 'mongodb', 'mobile'],
        features: ['Customer App', 'Restaurant Dashboard', 'Driver App', 'Real-time Tracking', 'Payment Gateway', 'Push Notifications', 'Admin Panel', 'Analytics'],
        techStack: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
        compatibility: ['iOS 14+', 'Android 9+'],
        version: '5.3.0', fileSize: '312 MB', isFeatured: true, isNew: false, isBestseller: true,
        frameworks: ['React Native', 'Node.js'], hasReskinService: true, reskinPrice: 299,
        lastUpdated: daysAgo(2), createdAt: daysAgo(150),
      },
      {
        id: 'p10', title: 'WPstarter — WordPress Theme Framework', slug: 'wpstarter-theme',
        shortDescription: 'Developer-first WordPress theme with Gutenberg blocks, ACF integration, and WooCommerce support.',
        category: 'wordpress', price: 39, originalPrice: 59, discountPercent: 34,
        rating: 4.6, totalRatings: 178, totalSales: 2760, totalVisits: 21300,
        tags: ['wordpress', 'gutenberg', 'woocommerce', 'php', 'theme'],
        features: ['50+ Gutenberg Blocks', 'ACF Pro Integration', 'WooCommerce Ready', 'Mega Menu', 'Speed Optimized', 'Schema Markup', 'Translation Ready', 'Child Theme'],
        techStack: ['WordPress', 'PHP 8', 'Gutenberg', 'SCSS'],
        compatibility: ['WordPress 6.4+', 'PHP 8.1+', 'WooCommerce 8+'],
        version: '4.0.0', fileSize: '45 MB', isFeatured: false, isNew: false, isBestseller: false,
        frameworks: ['WordPress'], hasReskinService: true, reskinPrice: 149,
        lastUpdated: daysAgo(8), createdAt: daysAgo(300),
      },
      {
        id: 'p11', title: 'ChartMaster — Data Visualization Kit', slug: 'chartmaster-viz',
        shortDescription: 'Beautiful chart components for React with 40+ chart types, real-time updates, and export options.',
        category: 'javascript', price: 29, originalPrice: 49, discountPercent: 41,
        rating: 4.7, totalRatings: 156, totalSales: 2340, totalVisits: 18900,
        tags: ['charts', 'react', 'd3', 'visualization', 'data'],
        features: ['40+ Chart Types', 'Real-time Updates', 'Export PDF/PNG', 'Responsive', 'Animations', 'Dark Mode', 'Custom Themes', 'Tooltips'],
        techStack: ['React', 'D3.js', 'TypeScript', 'Canvas API'],
        compatibility: ['React 17+', 'Next.js', 'Vite'],
        version: '2.9.0', fileSize: '15 MB', isFeatured: false, isNew: false, isBestseller: false,
        frameworks: ['React'], hasReskinService: false,
        lastUpdated: daysAgo(12), createdAt: daysAgo(165),
      },
      {
        id: 'p12', title: 'Flavor UI — Component Design System', slug: 'flavor-ui-system',
        shortDescription: 'Production-ready UI component library with 120+ components, Storybook, and Figma design kit.',
        category: 'ui-kits', price: 49, originalPrice: 89, discountPercent: 45,
        rating: 4.9, totalRatings: 312, totalSales: 5280, totalVisits: 42100,
        tags: ['design-system', 'react', 'components', 'figma', 'storybook'],
        features: ['120+ Components', 'Storybook Docs', 'Figma Kit', 'Accessibility', 'TypeScript', 'SSR Support', 'Theme Builder', 'Code Generator'],
        techStack: ['React', 'TypeScript', 'Storybook', 'Radix UI'],
        compatibility: ['React 18+', 'Next.js 14+', 'Remix'],
        version: '8.0.0', fileSize: '32 MB', isFeatured: true, isNew: false, isBestseller: true,
        frameworks: ['React'], hasReskinService: false,
        lastUpdated: daysAgo(1), createdAt: daysAgo(400),
      },
    ];

    const colors = ['#6366F1', '#EC4899', '#10B981', '#F97316', '#3B82F6', '#8B5CF6', '#EF4444', '#06B6D4', '#F59E0B', '#14B8A6', '#E11D48', '#7C3AED'];

    return productData.map((p, i) => ({
      ...p,
      author: this.authors[i % this.authors.length],
      reviews: makeReviews(Math.min(p.totalRatings || 5, 10)),
      license: 'regular' as const,
      thumbnailUrl: this.generateGradientUrl(colors[i % colors.length], colors[(i + 3) % colors.length]),
      previewImages: [
        this.generateGradientUrl(colors[i % colors.length], colors[(i + 1) % colors.length]),
        this.generateGradientUrl(colors[(i + 2) % colors.length], colors[(i + 4) % colors.length]),
      ],
      fullDescription: `<h2>Overview</h2><p>${p.shortDescription}</p><h2>Key Features</h2><ul>${(p.features || []).map(f => `<li>${f}</li>`).join('')}</ul><h2>Tech Stack</h2><p>Built with ${(p.techStack || []).join(', ')} for maximum performance and developer experience.</p><h2>Support</h2><p>Includes 6 months of premium support and lifetime updates. Our team responds within 24 hours.</p>`,
    } as Product));
  }

  private generateGradientUrl(c1: string, c2: string): string {
    return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:${c1}"/><stop offset="100%" style="stop-color:${c2}"/></linearGradient></defs><rect width="600" height="400" fill="url(#g)"/><text x="300" y="200" text-anchor="middle" fill="white" font-size="24" font-family="sans-serif" opacity="0.4">Preview</text></svg>`)}`;
  }
}

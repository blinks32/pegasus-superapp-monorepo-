/**
 * Pegasus Market — Data Models
 */

export interface LiveDemo {
  label: string;
  url: string;
  thumbnailUrl?: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  thumbnailUrl: string;
  previewImages: string[];
  demoUrl?: string;
  liveDemos?: LiveDemo[];
  youtubeUrl?: string;
  rating: number;
  totalRatings: number;
  totalSales: number;
  totalVisits: number;
  tags: string[];
  features: string[];
  techStack: string[];
  compatibility: string[];
  lastUpdated: Date;
  createdAt: Date;
  version: string;
  fileSize: string;
  author: Author;
  reviews: Review[];
  isFeatured: boolean;
  isNew: boolean;
  isBestseller: boolean;
  frameworks: string[];
  license: 'regular' | 'extended';
  hasReskinService: boolean;
  reskinPrice?: number;
  status?: 'draft' | 'pending' | 'published' | 'rejected';
}

export type ProductCategory = string;

export interface CategoryInfo {
  id: ProductCategory;
  label: string;
  icon: string;
  color: string;
  gradient: string;
  count: number;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  totalSales: number;
  rating: number;
  memberSince: Date;
  badges: AuthorBadge[];
  verified: boolean;
}

export type AuthorBadge = 'power-elite' | 'top-seller' | 'trending' | 'exclusive';

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  title: string;
  comment: string;
  date: Date;
  helpful: number;
  verified: boolean;
  reply?: {
    authorName: string;
    comment: string;
    date: Date;
  };
}

export interface CartItem {
  product: Product;
  license: 'regular' | 'extended';
  quantity: number;
  addReskin: boolean;
}

export interface SalesStat {
  label: string;
  value: number;
  change: number;
  icon: string;
  color: string;
}

export interface AdminProject {
  id?: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  tags: string[];
  features: string[];
  techStack: string[];
  compatibility: string[];
  version: string;
  fileSize: string;
  license: 'regular' | 'extended';
  hasReskinService: boolean;
  reskinPrice?: number;
  demoUrl?: string;
  liveDemos?: LiveDemo[];
  youtubeUrl?: string;
  status: 'draft' | 'pending' | 'published' | 'rejected';
  thumbnailFile?: File;
  previewFiles?: File[];
  sourceFile?: File;
  thumbnailData?: string;
  previewData?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface SearchFilters {
  query: string;
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  sortBy: 'newest' | 'bestselling' | 'price-low' | 'price-high' | 'rating' | 'trending';
  tags?: string[];
}

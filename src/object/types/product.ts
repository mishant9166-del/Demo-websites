export type ProductCategory =
  | 'bags'
  | 'home-living'
  | 'desk-work'
  | 'drinkware'
  | 'travel'
  | 'gifts';

export interface ProductVariant {
  id: string;
  name: string;
  colorName: string;
  colorHex: string;
  image?: string;
  inStock: boolean;
}

export interface ProductReview {
  id: string;
  author: string;
  rating: number; // 1 to 5
  date: string;
  title: string;
  comment: string;
  verifiedBuyer: boolean;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  fullStory?: string;
  priceINR: number;
  originalPriceINR?: number;
  isSale?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  featured?: boolean;
  inStock: boolean;
  inventoryCount: number;
  rating: number;
  reviewCount: number;
  heroImage: string;
  galleryImages: string[];
  colors: ProductVariant[];
  materials: string[];
  dimensions: string;
  weight?: string;
  origin?: string;
  careInstructions?: string;
  tags: string[];
  reviews?: ProductReview[];
}

export interface CategoryItem {
  slug: ProductCategory;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  itemCount: number;
}

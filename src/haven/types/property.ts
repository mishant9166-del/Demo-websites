export type ListingPurpose = 'buy' | 'rent';

export type PropertyType =
  | 'Apartment'
  | 'Villa'
  | 'Penthouse'
  | 'Townhouse'
  | 'Family Home'
  | 'Commercial Office'
  | 'Retail Space';

export interface PropertyAmenity {
  name: string;
  iconName?: string;
}

export interface PropertyItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  purpose: ListingPurpose;
  type: PropertyType;
  price: number; // In INR (e.g. 24500000 = 2.45 Cr, or 125000 = 1.25L/mo)
  priceFormatted: string; // "₹2.45 Cr" or "₹1.25 Lakh / mo"
  pricePerSqFt?: string; // "₹11,400 / sq ft"
  location: string; // "Bandra West, Mumbai"
  neighborhoodSlug: string; // "bandra-west"
  city: string; // "Mumbai"
  state: string; // "Maharashtra"
  pincode: string;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  areaFormatted: string; // "2,150 sq ft"
  yearBuilt?: number;
  parkingSpaces: number;
  featured?: boolean;
  isNew?: boolean;
  status: 'Available' | 'Under Offer' | 'Exclusive';
  heroImage: string;
  galleryImages: string[];
  floorPlanImage?: string;
  description: string;
  highlights: string[];
  amenities: string[];
  assignedAgentId: string;
}

export interface AgentItem {
  id: string;
  slug: string;
  name: string;
  role: string;
  experienceYears: number;
  phone: string;
  email: string;
  photo: string;
  bio: string;
  specialization: string[];
  areasOfFocus: string[];
  languages: string[];
}

export interface NeighborhoodItem {
  id: string;
  slug: string;
  name: string;
  city: string;
  tagline: string;
  heroImage: string;
  overview: string;
  lifestyleDescription: string;
  popularPropertyTypes: string[];
  highlights: string[];
  vibe: string;
  amenitiesOverview: string[];
  idealFor: string[];
}

export interface PropertyFilterParams {
  query?: string;
  purpose?: ListingPurpose | 'all';
  type?: PropertyType | 'all';
  neighborhood?: string | 'all';
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number | 'all';
  bathrooms?: number | 'all';
  minArea?: number;
  sortBy?: 'price-asc' | 'price-desc' | 'newest' | 'area-desc';
}

export interface SellerEnquiryFormData {
  ownerName: string;
  email: string;
  phone: string;
  propertyLocation: string;
  city: string;
  propertyType: PropertyType;
  purpose: ListingPurpose;
  approxAreaSqFt: string;
  bedrooms: string;
  expectedPriceINR: string;
  timeframe: string;
  additionalDetails: string;
}

export interface PropertyEnquiryFormData {
  propertyId: string;
  propertyTitle: string;
  fullName: string;
  email: string;
  phone: string;
  preferredContact: 'phone' | 'email' | 'whatsapp';
  message: string;
}

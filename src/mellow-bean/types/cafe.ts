export type MenuCategory =
  | 'Coffee'
  | 'Cold Drinks'
  | 'Tea'
  | 'Breakfast'
  | 'Brunch'
  | 'Bakery'
  | 'Desserts';

export type DietaryTag = 'Vegetarian' | 'Vegan' | 'Gluten-Free' | 'Chef Choice' | 'Contains Nuts';

export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  category: MenuCategory;
  price: number; // in INR ₹
  description: string;
  detailedDescription?: string;
  image: string;
  dietary: DietaryTag[];
  isFeatured?: boolean;
  isSeasonal?: boolean;
  preparationTime?: string;
  calories?: string;
  ingredients?: string[];
  allergens?: string[];
  flavorProfile?: string[];
  pairingSlug?: string;
}

export interface CartItem {
  menuItem: MenuItem;
  item: MenuItem; // convenience alias
  quantity: number;
  specialInstructions?: string;
}

export interface ReservationData {
  id?: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: string;
  occasion?: string;
  specialRequests?: string;
  createdAt?: string;
}

export interface PickupOrderData {
  id?: string;
  orderId?: string;
  orderNumber?: string;
  customerName: string;
  email?: string;
  customerEmail?: string;
  phone?: string;
  customerPhone?: string;
  pickupTime: string;
  items: CartItem[];
  subtotal: number;
  gst?: number;
  taxes?: number;
  total?: number;
  finalTotal?: number;
  notes?: string;
  createdAt: string;
}

export interface EventInquiryData {
  id?: string;
  name: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  estimatedGuests?: number;
  guestCount?: number;
  notes?: string;
  message?: string;
  createdAt?: string;
}

export interface CafeGalleryImage {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect?: string;
  caption: string;
}

export interface CafeFAQ {
  id: string | number;
  category: string;
  question: string;
  answer: string;
}

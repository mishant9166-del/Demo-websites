import type { ProductItem, ProductVariant } from './product';

export interface CartItem {
  id: string; // Composite: `${product.id}-${selectedVariant.id}`
  product: ProductItem;
  variant: ProductVariant;
  quantity: number;
  addedAt: string;
}

export interface DiscountCode {
  code: string;
  type: 'percentage' | 'fixed';
  value: number; // e.g. 10 for 10% or 200 for ₹200
  minOrderINR?: number;
  description: string;
}

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  streetAddress: string;
  apartment?: string;
  city: string;
  state: string;
  postalCode: string;
}

export type PaymentMethod = 'demo-upi' | 'demo-cod' | 'demo-card';

export interface SimulatedOrder {
  orderId: string;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  deliveryMethod: string;
  paymentMethod: PaymentMethod;
  subtotalINR: number;
  shippingFeeINR: number;
  discountINR: number;
  appliedDiscountCode?: string;
  totalINR: number;
  placedAt: string;
  estimatedDeliveryDate: string;
}

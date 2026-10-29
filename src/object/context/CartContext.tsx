import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CartItem, DiscountCode } from '../types/cart';
import type { ProductItem, ProductVariant } from '../types/product';
import { STORE_CONFIG } from '../config/storeConfig';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: ProductItem, variant: ProductVariant, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  appliedDiscount: DiscountCode | null;
  applyDiscountCode: (code: string) => { success: boolean; message: string };
  removeDiscountCode: () => void;
  subtotalINR: number;
  discountAmountINR: number;
  shippingFeeINR: number;
  finalTotalINR: number;
  totalItemCount: number;
  isCartDrawerOpen: boolean;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
  lastAddedItem: CartItem | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('object_form_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedDiscount, setAppliedDiscount] = useState<DiscountCode | null>(() => {
    try {
      const saved = localStorage.getItem('object_form_discount');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<CartItem | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('object_form_cart', JSON.stringify(items));
    } catch {
      // Ignore localStorage errors
    }
  }, [items]);

  // Sync discount to localStorage
  useEffect(() => {
    try {
      if (appliedDiscount) {
        localStorage.setItem('object_form_discount', JSON.stringify(appliedDiscount));
      } else {
        localStorage.removeItem('object_form_discount');
      }
    } catch {
      // Ignore localStorage errors
    }
  }, [appliedDiscount]);

  const addToCart = (product: ProductItem, variant: ProductVariant, quantity = 1) => {
    const compositeId = `${product.id}-${variant.id}`;

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === compositeId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        setLastAddedItem(updated[existingIndex]);
        return updated;
      } else {
        const newItem: CartItem = {
          id: compositeId,
          product,
          variant,
          quantity,
          addedAt: new Date().toISOString(),
        };
        setLastAddedItem(newItem);
        return [...prevItems, newItem];
      }
    });

    setIsCartDrawerOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
    setAppliedDiscount(null);
  };

  const subtotalINR = items.reduce(
    (total, item) => total + item.product.priceINR * item.quantity,
    0
  );

  const applyDiscountCode = (codeStr: string): { success: boolean; message: string } => {
    const cleanCode = codeStr.trim().toUpperCase();
    const matched = STORE_CONFIG.discountCodes.find((dc) => dc.code === cleanCode);

    if (!matched) {
      return { success: false, message: 'Invalid promotional code. Please try WELCOME10 or OBJECT200.' };
    }

    if (matched.minOrderINR && subtotalINR < matched.minOrderINR) {
      return {
        success: false,
        message: `Code ${matched.code} requires a minimum order of ₹${matched.minOrderINR.toLocaleString('en-IN')}.`,
      };
    }

    if (appliedDiscount?.code === matched.code) {
      return { success: false, message: 'Promo code is already applied to this order.' };
    }

    setAppliedDiscount(matched);
    return { success: true, message: `Promo code ${matched.code} applied successfully!` };
  };

  const removeDiscountCode = () => {
    setAppliedDiscount(null);
  };

  // Calculate discount amount
  let discountAmountINR = 0;
  if (appliedDiscount) {
    if (appliedDiscount.type === 'percentage') {
      discountAmountINR = Math.round((subtotalINR * appliedDiscount.value) / 100);
    } else if (appliedDiscount.type === 'fixed') {
      discountAmountINR = Math.min(appliedDiscount.value, subtotalINR);
    }
  }

  // Shipping Calculation
  const isFreeShipping =
    subtotalINR >= STORE_CONFIG.shipping.freeShippingThresholdINR || items.length === 0;
  const shippingFeeINR = isFreeShipping ? 0 : STORE_CONFIG.shipping.standardShippingFeeINR;

  const finalTotalINR = Math.max(0, subtotalINR - discountAmountINR + shippingFeeINR);
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        appliedDiscount,
        applyDiscountCode,
        removeDiscountCode,
        subtotalINR,
        discountAmountINR,
        shippingFeeINR,
        finalTotalINR,
        totalItemCount,
        isCartDrawerOpen,
        openCartDrawer: () => setIsCartDrawerOpen(true),
        closeCartDrawer: () => setIsCartDrawerOpen(false),
        lastAddedItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

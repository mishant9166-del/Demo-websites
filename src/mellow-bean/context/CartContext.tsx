import React, { createContext, useContext, useState, useEffect } from 'react';
import type { MenuItem, CartItem } from '../types/cafe';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, quantity?: number, specialInstructions?: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, newQty: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  taxes: number; // 5% GST
  finalTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'mellow_bean_cart_items_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      // normalize item alias
      return parsed.map((ci: any) => ({
        ...ci,
        item: ci.item || ci.menuItem,
        menuItem: ci.menuItem || ci.item,
      }));
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage error fallback
    }
  }, [items]);

  const addToCart = (item: MenuItem, quantity: number = 1, specialInstructions?: string) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => (i.item?.id || i.menuItem?.id) === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        if (specialInstructions) {
          updated[existingIndex].specialInstructions = specialInstructions;
        }
        return updated;
      }
      return [...prev, { menuItem: item, item, quantity, specialInstructions }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setItems((prev) => prev.filter((i) => (i.item?.id || i.menuItem?.id) !== itemId));
  };

  const updateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        (i.item?.id || i.menuItem?.id) === itemId ? { ...i, quantity: newQty } : i
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  // Calculations
  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => {
    const itemPrice = i.item?.price ?? i.menuItem?.price ?? 0;
    return sum + itemPrice * i.quantity;
  }, 0);
  const taxes = Math.round(subtotal * 0.05); // 5% GST
  const finalTotal = subtotal + taxes;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        taxes,
        finalTotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

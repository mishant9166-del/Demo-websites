import React, { createContext, useContext, useState, useEffect } from 'react';

interface WishlistContextType {
  wishlistSlugs: string[];
  toggleWishlist: (slug: string) => void;
  isInWishlist: (slug: string) => boolean;
  wishlistCount: number;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlistSlugs, setWishlistSlugs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('object_form_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('object_form_wishlist', JSON.stringify(wishlistSlugs));
    } catch {
      // Ignore
    }
  }, [wishlistSlugs]);

  const toggleWishlist = (slug: string) => {
    setWishlistSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const isInWishlist = (slug: string) => wishlistSlugs.includes(slug);

  const clearWishlist = () => setWishlistSlugs([]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistSlugs,
        toggleWishlist,
        isInWishlist,
        wishlistCount: wishlistSlugs.length,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

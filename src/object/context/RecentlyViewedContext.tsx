import React, { createContext, useContext, useState, useEffect } from 'react';

interface RecentlyViewedContextType {
  recentlyViewedSlugs: string[];
  addRecentlyViewed: (slug: string) => void;
}

const RecentlyViewedContext = createContext<RecentlyViewedContextType | undefined>(undefined);

export const RecentlyViewedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [recentlyViewedSlugs, setRecentlyViewedSlugs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('object_form_recent');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('object_form_recent', JSON.stringify(recentlyViewedSlugs));
    } catch {
      // Ignore
    }
  }, [recentlyViewedSlugs]);

  const addRecentlyViewed = (slug: string) => {
    setRecentlyViewedSlugs((prev) => {
      const filtered = prev.filter((s) => s !== slug);
      return [slug, ...filtered].slice(0, 8); // Keep up to 8 recent products
    });
  };

  return (
    <RecentlyViewedContext.Provider value={{ recentlyViewedSlugs, addRecentlyViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
};

export const useRecentlyViewed = () => {
  const context = useContext(RecentlyViewedContext);
  if (!context) {
    throw new Error('useRecentlyViewed must be used within a RecentlyViewedProvider');
  }
  return context;
};

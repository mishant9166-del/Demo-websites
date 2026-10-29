import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { EyewearItem } from '../types/visora';
import { eyewearCollection } from '../data/eyewear';

interface FavoritesContextType {
  favoriteIds: string[];
  favoriteItems: EyewearItem[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  clearFavorites: () => void;
  favoritesCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const STORAGE_KEY = 'visora_eyewear_favorites';

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : ['frame-1', 'frame-3'];
    } catch {
      return ['frame-1', 'frame-3'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favoriteIds]);

  const isFavorite = (id: string) => favoriteIds.includes(id);

  const toggleFavorite = (id: string) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const removeFavorite = (id: string) => {
    setFavoriteIds((prev) => prev.filter((item) => item !== id));
  };

  const clearFavorites = () => {
    setFavoriteIds([]);
  };

  const favoriteItems = eyewearCollection.filter((item) =>
    favoriteIds.includes(item.id)
  );

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        favoriteItems,
        isFavorite,
        toggleFavorite,
        removeFavorite,
        clearFavorites,
        favoritesCount: favoriteIds.length,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}

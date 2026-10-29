import { useState, useEffect, useCallback } from 'react';
import { getStorageItem, setStorageItem } from '../lib/storage';

const FAVORITES_KEY = 'velocity_favorites';
const FAVORITES_EVENT = 'velocity:favorites_updated';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    return getStorageItem<string[]>(FAVORITES_KEY, []);
  });

  useEffect(() => {
    const handleUpdate = () => {
      setFavorites(getStorageItem<string[]>(FAVORITES_KEY, []));
    };

    window.addEventListener(FAVORITES_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(FAVORITES_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const broadcastChange = (newFavorites: string[]) => {
    setFavorites(newFavorites);
    setStorageItem(FAVORITES_KEY, newFavorites);
    window.dispatchEvent(new Event(FAVORITES_EVENT));
  };

  const isFavorite = useCallback((id: string) => {
    return favorites.includes(id);
  }, [favorites]);

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter((item) => item !== id) : [...prev, id];
      setStorageItem(FAVORITES_KEY, updated);
      window.dispatchEvent(new Event(FAVORITES_EVENT));
      return updated;
    });
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const updated = prev.filter((item) => item !== id);
      setStorageItem(FAVORITES_KEY, updated);
      window.dispatchEvent(new Event(FAVORITES_EVENT));
      return updated;
    });
  }, []);

  const clearFavorites = useCallback(() => {
    broadcastChange([]);
  }, []);

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    removeFavorite,
    clearFavorites,
    count: favorites.length
  };
}

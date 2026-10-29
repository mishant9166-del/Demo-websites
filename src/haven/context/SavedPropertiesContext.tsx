import React, { createContext, useContext, useState, useEffect } from 'react';
import type { PropertyItem } from '../types/property';
import { HAVEN_PROPERTIES } from '../data/properties';

interface SavedPropertiesContextType {
  savedIds: string[];
  savedProperties: PropertyItem[];
  savedCount: number;
  isSaved: (id: string) => boolean;
  toggleSave: (id: string) => void;
  removeSaved: (id: string) => void;
  clearAll: () => void;
}

const SavedPropertiesContext = createContext<SavedPropertiesContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'haven_saved_properties_v1';

export const SavedPropertiesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Fallback
    }
    // Default 2 saved items so users immediately see a working shortlist if they explore
    return ['prop-horizon-penthouse', 'prop-glass-pavilion-assagao'];
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedIds));
    } catch {
      // Ignore write errors
    }
  }, [savedIds]);

  const toggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const removeSaved = (id: string) => {
    setSavedIds((prev) => prev.filter((item) => item !== id));
  };

  const clearAll = () => {
    setSavedIds([]);
  };

  const isSaved = (id: string) => savedIds.includes(id);

  const savedProperties = HAVEN_PROPERTIES.filter((p) => savedIds.includes(p.id));

  return (
    <SavedPropertiesContext.Provider
      value={{
        savedIds,
        savedProperties,
        savedCount: savedIds.length,
        isSaved,
        toggleSave,
        removeSaved,
        clearAll,
      }}
    >
      {children}
    </SavedPropertiesContext.Provider>
  );
};

export const useSavedProperties = (): SavedPropertiesContextType => {
  const context = useContext(SavedPropertiesContext);
  if (!context) {
    throw new Error('useSavedProperties must be used within a SavedPropertiesProvider');
  }
  return context;
};

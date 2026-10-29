import { useState, useEffect, useCallback } from 'react';
import { getStorageItem, setStorageItem } from '../lib/storage';

const COMPARISON_KEY = 'velocity_comparison';
const COMPARISON_EVENT = 'velocity:comparison_updated';
export const MAX_COMPARE = 3;

export function useComparison() {
  const [compareIds, setCompareIds] = useState<string[]>(() => {
    return getStorageItem<string[]>(COMPARISON_KEY, []);
  });
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleUpdate = () => {
      setCompareIds(getStorageItem<string[]>(COMPARISON_KEY, []));
    };

    window.addEventListener(COMPARISON_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(COMPARISON_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const broadcastChange = (newIds: string[]) => {
    setCompareIds(newIds);
    setStorageItem(COMPARISON_KEY, newIds);
    window.dispatchEvent(new Event(COMPARISON_EVENT));
  };

  const isInComparison = useCallback((id: string) => {
    return compareIds.includes(id);
  }, [compareIds]);

  const toggleComparison = useCallback((id: string) => {
    let result = { success: true, message: '' };

    setCompareIds((prev) => {
      if (prev.includes(id)) {
        const updated = prev.filter((item) => item !== id);
        setStorageItem(COMPARISON_KEY, updated);
        window.dispatchEvent(new Event(COMPARISON_EVENT));
        result = { success: true, message: 'Removed from comparison' };
        return updated;
      }

      if (prev.length >= MAX_COMPARE) {
        result = { 
          success: false, 
          message: `Comparison limit reached (Maximum ${MAX_COMPARE} vehicles). Remove a vehicle to add another.` 
        };
        setAlertMessage(result.message);
        setTimeout(() => setAlertMessage(null), 4000);
        return prev;
      }

      const updated = [...prev, id];
      setStorageItem(COMPARISON_KEY, updated);
      window.dispatchEvent(new Event(COMPARISON_EVENT));
      result = { success: true, message: 'Added to comparison' };
      return updated;
    });

    return result;
  }, []);

  const removeFromComparison = useCallback((id: string) => {
    setCompareIds((prev) => {
      const updated = prev.filter((item) => item !== id);
      setStorageItem(COMPARISON_KEY, updated);
      window.dispatchEvent(new Event(COMPARISON_EVENT));
      return updated;
    });
  }, []);

  const clearComparison = useCallback(() => {
    broadcastChange([]);
  }, []);

  return {
    compareIds,
    isInComparison,
    toggleComparison,
    removeFromComparison,
    clearComparison,
    count: compareIds.length,
    alertMessage,
    maxCompare: MAX_COMPARE
  };
}

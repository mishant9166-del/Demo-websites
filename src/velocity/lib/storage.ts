const memoryStore: Record<string, string> = {};

export function getStorageItem<T>(key: string, defaultValue: T): T {
  try {
    if (typeof window === 'undefined') return defaultValue;
    const item = window.localStorage.getItem(key);
    if (!item) return defaultValue;
    return JSON.parse(item) as T;
  } catch (error) {
    console.warn(`LocalStorage read error for key "${key}":`, error);
    if (memoryStore[key]) {
      try {
        return JSON.parse(memoryStore[key]) as T;
      } catch {
        return defaultValue;
      }
    }
    return defaultValue;
  }
}

export function setStorageItem<T>(key: string, value: T): void {
  try {
    const stringified = JSON.stringify(value);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, stringified);
    }
    memoryStore[key] = stringified;
  } catch (error) {
    console.warn(`LocalStorage write error for key "${key}":`, error);
    memoryStore[key] = JSON.stringify(value);
  }
}

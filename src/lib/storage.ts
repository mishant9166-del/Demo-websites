import type { ProjectChecklistState } from './types';

const STORAGE_KEY = 'web-studio-checklist-progress';

export const saveChecklistState = (projectId: number, state: ProjectChecklistState) => {
  try {
    const existing = getStoredData();
    existing[projectId] = state;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (error) {
    console.error('Error saving checklist state:', error);
  }
};

export const getChecklistState = (projectId: number): ProjectChecklistState => {
  try {
    const existing = getStoredData();
    return existing[projectId] || {};
  } catch (error) {
    console.error('Error getting checklist state:', error);
    return {};
  }
};

export const getAllStoredData = () => {
  return getStoredData();
};

const getStoredData = (): Record<number, ProjectChecklistState> => {
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    return item ? JSON.parse(item) : {};
  } catch {
    return {};
  }
};

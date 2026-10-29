import { useState, useEffect, useCallback } from 'react';
import type { ProjectChecklistState } from '../lib/types';
import { getChecklistState, saveChecklistState } from '../lib/storage';
import { qualityChecklist } from '../data/checklist';

export function useProjectChecklist(projectId: number) {
  const [state, setState] = useState<ProjectChecklistState>(() => getChecklistState(projectId));

  // Sync state when projectId changes
  useEffect(() => {
    setState(getChecklistState(projectId));
  }, [projectId]);

  const toggleItem = useCallback((itemId: string) => {
    setState((prev) => {
      const newState = {
        ...prev,
        [itemId]: !prev[itemId],
      };
      saveChecklistState(projectId, newState);
      return newState;
    });
  }, [projectId]);

  const resetChecklist = useCallback(() => {
    const newState: ProjectChecklistState = {};
    saveChecklistState(projectId, newState);
    setState(newState);
  }, [projectId]);

  const completedCount = qualityChecklist.filter(item => state[item.id]).length;
  const totalCount = qualityChecklist.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return {
    state,
    toggleItem,
    resetChecklist,
    completedCount,
    totalCount,
    percentage
  };
}

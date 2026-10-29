import type { Project, ProjectChecklistState } from './types';
import { qualityChecklist } from '../data/checklist';

export const calculateCompletionPercentage = (state: ProjectChecklistState): number => {
  if (!state) return 0;
  
  const totalItems = qualityChecklist.length;
  if (totalItems === 0) return 0;

  const completedItems = qualityChecklist.filter(item => state[item.id]).length;
  return Math.round((completedItems / totalItems) * 100);
};

export const determineProjectStatus = (project: Project, state: ProjectChecklistState): Project['status'] => {
  const percentage = calculateCompletionPercentage(state);
  
  if (percentage === 100) {
    // Requires demoUrl to be truly "Ready to Explore"
    if (project.demoUrl && project.demoUrl.trim() !== '') {
      return 'Ready to Explore';
    }
    return 'Checklist Review';
  } else if (percentage > 0) {
    return 'In Progress';
  }
  
  return 'Concept';
};

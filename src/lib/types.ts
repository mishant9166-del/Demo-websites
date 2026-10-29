export type ProjectCategory = 
  | 'Automotive' 
  | 'Medical & Healthcare' 
  | 'Food & Hospitality' 
  | 'Interior Design' 
  | 'Real Estate' 
  | 'E-commerce';

export type ProjectStatus = 'Concept' | 'In Progress' | 'Checklist Review' | 'Ready to Explore';

export interface Project {
  id: number;
  slug: string;
  category: ProjectCategory;
  name: string;
  description: string;
  previewImage?: string;
  status: ProjectStatus;
  demoUrl?: string;
  isResponsive: boolean;
}

export interface ChecklistItem {
  id: string;
  description: string;
}

export type ProjectChecklistState = Record<string, boolean>; // key is checklist item id, value is completed status

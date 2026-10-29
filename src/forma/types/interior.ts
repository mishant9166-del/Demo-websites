export type ProjectType =
  | 'Residential'
  | 'Villa'
  | 'Apartment'
  | 'Hospitality'
  | 'Commercial';

export interface MaterialSample {
  name: string;
  category: 'Stone' | 'Timber' | 'Metal' | 'Textile' | 'Plaster';
  description: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  type: ProjectType;
  year: string;
  area: string; // e.g., '4,800 sq ft'
  heroImage: string;
  secondaryImage: string;
  galleryImages: string[];
  overview: string;
  brief: string;
  approach: string;
  materials: MaterialSample[];
  featured?: boolean;
  layoutVariant?: 'wide' | 'split' | 'portrait';
}

export interface ServiceItem {
  id: string;
  slug: string;
  number: string; // e.g. '01'
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  suitableFor: string[];
  keyStages: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  relatedProjectSlugs: string[];
}

export interface ProcessStage {
  step: string; // e.g. '01'
  title: string;
  tagline: string;
  duration: string;
  description: string;
  deliverables: string[];
  quote?: string;
  image: string;
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Light & Space' | 'Materials' | 'Living Philosophy' | 'Spatial Planning';
  publishedDate: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  heroImage: string;
  content: {
    heading?: string;
    paragraphs: string[];
    quote?: string;
    image?: string;
    imageCaption?: string;
  }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  education: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  projectLocation: string;
  propertyType: 'Residential Villa' | 'Apartment / Penthouse' | 'Boutique Hospitality' | 'Full-Home Renovation' | 'Commercial Office';
  approxSize: string; // e.g. '2,500 - 5,000 sq ft'
  servicesRequired: string[];
  timeline: string;
  budgetRange: string; // e.g. '₹40L - ₹75L', '₹75L - ₹1.5 Cr', '₹1.5 Cr+'
  projectDescription: string;
}

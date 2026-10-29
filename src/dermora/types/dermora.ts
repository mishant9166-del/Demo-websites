export type TreatmentCategory =
  | 'Skin Health'
  | 'Cosmetic Dermatology'
  | 'Hair & Scalp'
  | 'General Dermatology';

export interface Treatment {
  id: string;
  slug: string;
  title: string;
  category: TreatmentCategory;
  shortDesc: string;
  heroImage: string;
  overview: string;
  commonReasons: string[];
  consultationIncludes: string[];
  questionsToAsk: string[];
  faqs?: { question: string; answer: string }[];
  durationMinutes: string;
  suitableFor: string;
}

export interface Specialist {
  id: string;
  slug: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  portrait: string;
  areasOfInterest: string[];
  consultationApproach: string;
  associatedTreatmentSlugs: string[];
  roomNumber: string;
}

export interface SkinConcern {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  commonSigns: string[];
  relatedTreatmentSlugs: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Clinic Interior' | 'Treatment Rooms' | 'Skincare Aesthetics' | 'Specialist Consultation';
  image: string;
  description: string;
  aspect: 'portrait' | 'landscape' | 'wide';
}

export interface FAQItem {
  id: string;
  category: 'General Consultations' | 'Treatments' | 'Hair & Scalp' | 'Appointments & Booking' | 'Preparation';
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone?: string;
  category: string;
  preferredSpecialist?: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

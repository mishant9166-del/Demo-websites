export type ServiceCategory =
  | 'Pain and Mobility'
  | 'Sports Rehabilitation'
  | 'Post-Operative Care'
  | 'Balance and Walking'
  | 'General Physiotherapy';

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  shortDesc: string;
  heroImage: string;
  overview: string;
  commonReasons: string[];
  initialConsultationSteps: string[];
  rehabilitationApproaches: string[];
  questionsToAsk: string[];
  faqs: { question: string; answer: string }[];
  durationMinutes: string;
  sessionFormat: string;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  image: string;
  targetAudience: string;
  durationWeeks: string;
  goals: string[];
  focusAreas: string[];
  progressReviews: string;
  associatedServiceSlugs: string[];
  faqs: { question: string; answer: string }[];
}

export interface Practitioner {
  id: string;
  slug: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  portrait: string;
  professionalApproach: string;
  areasOfInterest: string[];
  associatedServiceSlugs: string[];
  suiteNumber: string;
  availability: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Treatment Rooms' | 'Rehabilitation Exercises' | 'Sports Recovery' | 'Mobility & Balance' | 'Clinic Interior';
  image: string;
  description: string;
  aspect: 'portrait' | 'landscape' | 'wide';
}

export interface FAQItem {
  id: string;
  category: 'Consultation & Prep' | 'Services & Recovery' | 'Programs' | 'Appointments & Clinic';
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone?: string;
  serviceSlug: string;
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

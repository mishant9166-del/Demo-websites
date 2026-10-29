export type EyewearCategory =
  | 'Optical Frames'
  | 'Sunglasses'
  | 'Lightweight Titanium'
  | 'Acetate Classics';

export interface EyewearItem {
  id: string;
  slug: string;
  name: string;
  category: EyewearCategory;
  priceINR: number;
  description: string;
  material: string;
  frameShape: string;
  colorOptions: { name: string; hex: string }[];
  image: string;
  dimensions: string; // e.g. "49-20-145 mm"
  suitableFor: string;
  features: string[];
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface EyeService {
  id: string;
  slug: string;
  title: string;
  category: 'Diagnostic & Routine' | 'Specialist Consultation' | 'Pediatric & Vision';
  shortDesc: string;
  durationMinutes: string;
  overview: string;
  image: string;
  whatToExpect: string[];
  recommendedFrequency: string;
  diagnosticTechnology: string[];
  suitableFor: string[];
  faqs: { question: string; answer: string }[];
}

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  portrait: string;
  consultationApproach: string;
  areasOfExpertise: string[];
  qualificationsDisplay: string;
  roomNumber: string;
  availability: string;
}

export interface FAQItem {
  id: string;
  category: 'Eye Examinations' | 'Eyewear & Lenses' | 'Appointments & Insurance' | 'Clinic Guidance';
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  appointmentType: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

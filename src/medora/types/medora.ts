export interface Department {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  category: 'Internal Medicine' | 'Surgical Specialties' | 'Women & Children' | 'Diagnostics & Other';
  iconName: string;
  heroImage: string;
  overview: string;
  services: string[];
  conditions: string[];
  doctorSlugs: string[];
  faqs?: { question: string; answer: string }[];
}

export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  specialty: string;
  departmentSlug: string;
  departmentName: string;
  bio: string;
  experienceYears: number;
  areasOfPractice: string[];
  portrait: string;
  availableDays: string[];
  roomNumber: string;
  contactEmail: string;
}

export interface Facility {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Appointments' | 'Departments' | 'Facilities' | 'Preparation' | 'General';
}

export interface AppointmentFormData {
  patientName: string;
  email: string;
  phone: string;
  departmentSlug: string;
  doctorSlug: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  iconName: string;
  heroImage: string;
  overview: string;
  reasonsToSeek: string[];
  whatToExpect: string[];
  treatmentProcess: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSlugs: string[];
  duration?: string;
  category: 'General' | 'Cosmetic' | 'Restorative' | 'Specialized';
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  shortBio: string;
  fullBio: string;
  education: string[];
  areasOfPractice: string[];
  languages: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  comment: string;
  avatar?: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Treatments' | 'Appointments' | 'Care';
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceSlug: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

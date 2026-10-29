export type PetType = 'Dog' | 'Cat' | 'Puppy / Kitten' | 'Senior Pet' | 'All Pets' | 'Other';

export interface VetService {
  id: string;
  slug: string;
  name: string;
  title?: string;
  shortDescription: string;
  shortDesc?: string;
  category: string;
  duration: string;
  durationMinutes?: string;
  detailedDescription: string;
  overview?: string;
  image: string;
  whatToExpect: string[];
  includedInCare?: string[];
  preparation: string;
  preparationTips?: string[];
  recommendedFor: string;
  recommendedAge?: string;
  iconName: string;
  tags: string[];
  faqs?: { question: string; answer: string }[];
}

export interface Veterinarian {
  id: string;
  slug: string;
  name: string;
  role: string;
  specialties: string[];
  specialty?: string;
  bio: string;
  shortBio: string;
  image: string;
  portrait?: string;
  philosophy: string;
  approachToHandling?: string;
  handlingApproach: string;
  areasOfInterest?: string[];
  companionPet: string;
  petCompanions?: string;
  experience: string;
  consultationSuite: string;
  roomNumber?: string;
  availability: string;
}

export interface WellnessAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface WellnessContentSection {
  heading: string;
  body: string;
  tips?: string[];
}

export interface WellnessArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  summary?: string;
  image: string;
  publishedDate: string;
  author: WellnessAuthor;
  content: WellnessContentSection[];
  contentParagraphs?: string[];
  keyTakeaways: string[];
  tags: string[];
  relatedSlug?: string;
}

export interface Testimonial {
  id: string | number;
  petName: string;
  petType: string;
  ownerName: string;
  quote: string;
  comment?: string;
  visitType: string;
  tag?: string;
  photoUrl?: string;
}

export interface VetFAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export interface AppointmentRequestData {
  ownerName: string;
  email: string;
  phone: string;
  petName: string;
  petType: 'Dog' | 'Cat' | 'Other';
  preferredVet?: string;
  reasonForVisit: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface VetContactData {
  name: string;
  email: string;
  phone?: string;
  petName?: string;
  subject: string;
  message: string;
}

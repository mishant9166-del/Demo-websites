export type DestinationType = 'Mountains' | 'Coastal' | 'Rainforest' | 'Heritage';

export interface DestinationItem {
  id: string;
  slug: string;
  name: string;
  region: string;
  state: string;
  tagline: string;
  type: DestinationType;
  heroImage: string;
  galleryImages: string[];
  description: string;
  landscapeAtmosphere: string;
  bestTimeToVisit: string;
  featuredExperiences: string[];
  propertyIds: string[];
}

export interface RoomItem {
  id: string;
  slug: string;
  name: string;
  category: 'Suite' | 'Villa' | 'Pavilion' | 'Retreat Room';
  stayId: string;
  stayName: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  maxOccupancy: number; // e.g. 2 or 4
  bedConfig: string; // e.g. "King Bed with Egyptian Cotton"
  areaSqFt: number;
  pricePerNightINR: number; // e.g. 32000
  priceFormatted: string; // "₹32,000 / night"
  view: string; // "Panoramic Himalayan Valleys"
  description: string;
  amenities: string[];
  features: string[];
}

export interface StayItem {
  id: string;
  slug: string;
  name: string;
  destinationSlug: string;
  destinationName: string;
  location: string;
  propertyType: 'Mountain Resort' | 'Oceanfront Sanctuary' | 'Forest Estate' | 'Heritage Palace' | 'Private Villa';
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  startingPriceINR: number; // e.g. 24000
  startingPriceFormatted: string; // "From ₹24,000 / night"
  guestCapacity: string; // "Up to 4 guests per villa"
  shortDescription: string;
  fullDescription: string;
  amenities: string[];
  diningOptions: {
    name: string;
    description: string;
    cuisine: string;
  }[];
  wellnessFeatures: string[];
  localActivities: string[];
  roomSlugs: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  slug: string;
  title: string;
  category: 'Wellness & Spa' | 'Private Dining' | 'Nature & Trails' | 'Cultural Discovery' | 'Excursions';
  tagline: string;
  duration: string; // e.g. "3 Hours" or "Half Day"
  suitableFor: string; // e.g. "Couples, Solitary Seekers"
  heroImage: string;
  overview: string;
  inclusions: string[];
  locationNote: string;
}

export interface OfferItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  packageDescription: string;
  inclusions: string[];
  indicativeDemoPriceINR: number;
  indicativePriceFormatted: string; // "From ₹48,000 (2 Nights)"
  discountBadge: string; // "Curated Package"
  applicableStays: string[];
  terms: string[];
}

export interface BookingSearchCriteria {
  destination?: string;
  staySlug?: string;
  roomSlug?: string;
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  children: number;
  rooms: number;
}

export interface BookingRequestData {
  referenceId: string;
  staySlug: string;
  stayName: string;
  roomSlug?: string;
  roomName?: string;
  checkInDate: string;
  checkOutDate: string;
  nights: number;
  adults: number;
  children: number;
  roomCount: number;
  fullName: string;
  email: string;
  phone: string;
  specialRequests?: string;
  nightlyRateEstimate: number;
  estimatedSubtotalINR: number;
  submittedAt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Booking & Reservations' | 'Check-in & Stays' | 'Dining & Wellness' | 'Policies';
}

export interface GalleryImageItem {
  id: string;
  title: string;
  category: 'Resorts' | 'Rooms & Suites' | 'Dining' | 'Wellness & Pools' | 'Experiences';
  image: string;
  stayName?: string;
}

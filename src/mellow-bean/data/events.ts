export interface CafeEventInfo {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  capacity: string;
  timing: string;
  duration?: string;
  pricePerPerson?: string;
  description: string;
  features: string[];
  includes?: string[];
  image: string;
}

export const CAFE_EVENTS: CafeEventInfo[] = [
  {
    id: 'evt-1',
    slug: 'coffee-tasting-cupping',
    title: 'Weekend Sensory Coffee Cupping',
    tagline: 'Explore acidity, body, and tasting notes with our head roaster.',
    capacity: 'Up to 12 participants',
    timing: 'Saturdays, 10:30 AM – 12:00 PM',
    duration: '90 Minutes',
    pricePerPerson: '850',
    description:
      'A hands-on sensory journey exploring single-estate coffees from across the Western Ghats. You will learn to break the crust, assess aromatic fragrance, identify flavor notes, and discover the nuances of washed, honey, and natural processing methods.',
    features: [
      'Blind cupping of 5 distinct estate varietals',
      'Freshly baked butter croissant & pastry tasting',
      '250g bag of single-origin beans of your choice to take home',
      'Informative sensory flavor-wheel booklet',
    ],
    includes: [
      'Blind cupping of 5 distinct estate varietals',
      'Freshly baked butter croissant & pastry tasting',
      '250g bag of single-origin beans of your choice to take home',
      'Informative sensory flavor-wheel booklet',
    ],
    image:
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'evt-2',
    slug: 'private-garden-brunch',
    title: 'Private Garden Terrace Gatherings',
    tagline: 'Curated communal brunch spreads for intimate celebrations.',
    capacity: '15 to 35 guests',
    timing: 'Custom daytime slots (11:00 AM – 3:30 PM)',
    duration: '3 to 4 Hours',
    pricePerPerson: '1,200',
    description:
      'Reserve our leafy outdoor terrace for milestone birthdays, intimate baby showers, team celebrations, or family reunions. Enjoy communal wooden tables decorated with seasonal flowers, tailored brunch grazing platters, and limitless specialty coffee service.',
    features: [
      'Exclusive private access to our leafy garden terrace',
      'Multi-course brunch feast including shakshuka, pastries, and French toast',
      'Dedicated barista station serving unlimited pour-overs and iced lattes',
      'Custom chalkboard signage and ambient acoustic playlist',
    ],
    includes: [
      'Exclusive private access to our leafy garden terrace',
      'Multi-course brunch feast including shakshuka, pastries, and French toast',
      'Dedicated barista station serving unlimited pour-overs and iced lattes',
      'Custom chalkboard signage and ambient acoustic playlist',
    ],
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'evt-3',
    slug: 'artisan-sourdough-masterclass',
    title: 'Home Sourdough & Croissant Workshop',
    tagline: 'Learn the craft of wild yeast fermentation and lamination.',
    capacity: '8 participants per session',
    timing: 'Alternate Sundays, 9:00 AM – 1:00 PM',
    duration: '4 Hours Masterclass',
    pricePerPerson: '2,200',
    description:
      'Step behind our bakery counter with Head Baker Ananya. Learn how to feed and maintain a wild starter, master dough hydration, hand-stretch and fold, score rustic loaves, and laminate French butter croissants from scratch.',
    features: [
      'Hands-on baking with professional stone-hearth ovens',
      '4-year-old active "Matilda" sourdough starter jar to take home',
      'Banneton proofing basket and bread lame scoring razor',
      'Warm family-style bakery lunch with cold brew coffee',
    ],
    includes: [
      'Hands-on baking with professional stone-hearth ovens',
      '4-year-old active "Matilda" sourdough starter jar to take home',
      'Banneton proofing basket and bread lame scoring razor',
      'Warm family-style bakery lunch with cold brew coffee',
    ],
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
  },
];

export const cafeEvents = CAFE_EVENTS;

import type { OfferItem } from '../types/hospitality';

export const AURELIA_OFFERS: OfferItem[] = [
  {
    id: 'offer-himalayan-escape-two-nights',
    slug: 'two-night-himalayan-escape',
    title: 'Two-Night Himalayan Alpine Sanctuary',
    tagline: 'A restorative weekend of pine forest serenity, heated pools, and alpine dining.',
    heroImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    packageDescription:
      'Escape the urban rush for 48 unhurried hours above the clouds. Includes daily organic mountain breakfasts, a curated alpine foraging lunch, complimentary access to our heated cedar tubs, and private heli-deck sunrise meditation.',
    inclusions: [
      'Two nights in a Mountain View Retreat Suite',
      'Daily organic farm-to-table breakfast and multi-course hearth dinner',
      'One 60-minute Cedarwood Herbal Spa treatment per guest',
      'Complimentary airport transfers from Dehradun (DED)',
    ],
    indicativeDemoPriceINR: 58000,
    indicativePriceFormatted: 'From ₹58,000 for 2 Nights',
    discountBadge: 'Curated Alpine Package',
    applicableStays: ['aurelia-cloud-peak-himalayas'],
    terms: [
      'Illustrative demonstration package for testing.',
      'Flexible date modifications up to 72 hours prior to arrival.',
      'Includes all retreat amenities and guided morning activities.',
    ],
  },
  {
    id: 'offer-coastal-romance-retreat',
    slug: 'romantic-ocean-getaway',
    title: 'Romantic Coastal Reverie: Ocean Villa Journey',
    tagline: 'Private pool seclusion, sunset catamaran sailing, and beach candlelit dining.',
    heroImage:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    packageDescription:
      'Designed exclusively for couples seeking total coastal sanctuary. Unwind in your private pool ocean villa, toast the sunset with French Champagne on an exclusive dhow sail, and enjoy an unforgettable five-course private dinner on secluded sands.',
    inclusions: [
      'Three nights in a Private Pool Ocean Villa',
      'Bottle of chilled vintage Champagne and welcome tropical fruit basket',
      'Private twilight 5-course dinner on the ocean sandbar',
      'Couples Ayurvedic Abhyanga massage (90 minutes)',
    ],
    indicativeDemoPriceINR: 145000,
    indicativePriceFormatted: 'From ₹1,45,000 for 3 Nights',
    discountBadge: 'Signature Romance',
    applicableStays: ['aurelia-ocean-palm-goa'],
    terms: [
      'Demo rate based on double occupancy.',
      'Subject to demonstration reservation availability.',
      'Includes daily gourmet breakfast served in-villa or beachfront.',
    ],
  },
  {
    id: 'offer-ayurvedic-wellness-extended',
    slug: 'extended-wellness-retreat',
    title: 'Five-Day Ayurvedic Restoration Immersion',
    tagline: 'Complete sensory renewal guided by traditional vaidyas in the Western Ghats.',
    heroImage:
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    packageDescription:
      'A holistic panchakarma-inspired restorative journey. Following a comprehensive pulse diagnosis with our Ayurvedic physician, you will receive customized daily herbal therapies, organic dosha-specific nutrition, and private forest meditation sessions.',
    inclusions: [
      'Five nights in a Forest Canopy Treehouse Pavilion',
      'Daily personalized Ayurvedic treatments (120 minutes daily)',
      'Customized organic dosha-balancing meals designed by doctor and chef',
      'Daily yoga, pranayama, and guided forest stream bathing',
    ],
    indicativeDemoPriceINR: 125000,
    indicativePriceFormatted: 'From ₹1,25,000 for 5 Nights',
    discountBadge: '5-Day Immersion',
    applicableStays: ['aurelia-rainforest-sanctuary-kerala'],
    terms: [
      'Ideal for deep stress relief, sleep restoration, and metabolic recharge.',
      'Includes all consultations, herbal infusions, and yoga classes.',
      'Rates represent demonstration estimates.',
    ],
  },
  {
    id: 'offer-royal-heritage-palace-journey',
    slug: 'royal-heritage-journey',
    title: 'The Royal Rajputana Grand Tour',
    tagline: 'Palatial courtyards, ceremonial lake cruising, and private palace dining.',
    heroImage:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    packageDescription:
      'A four-night odyssey weaving together the royal heritage of Jaipur and Udaipur. Stay in historic palace suites, cruise Lake Pichola on our mahogany ceremonial barge, and dine in mirrored banquet halls with traditional sitar music.',
    inclusions: [
      'Two nights at Aurelia Haveli Palace (Jaipur) and two nights at Aurelia Lake Pavilion (Udaipur)',
      'Luxury private chauffeured transfer between royal destinations',
      'Private sunset barge cruise on Lake Pichola with champagne',
      'Traditional royal thali banquet served in private courtyard',
    ],
    indicativeDemoPriceINR: 168000,
    indicativePriceFormatted: 'From ₹1,68,000 for 4 Nights',
    discountBadge: 'Grand Dual-City Journey',
    applicableStays: ['aurelia-haveli-palace-jaipur', 'aurelia-lake-pavilion-udaipur'],
    terms: [
      'Inter-resort ground transportation included.',
      'All royal heritage experiences and private guided monument visits included.',
      'Illustrative demonstration rate.',
    ],
  },
];

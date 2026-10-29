export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  productName: string;
  rating: number;
  date: string;
  quote: string;
  story: string;
}

export const STORE_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Aarav Mehta',
    location: 'Mumbai',
    productName: 'Arc Everyday Tote & Orbit Desk Organizer',
    rating: 5,
    date: 'March 2026',
    quote: 'The craftsmanship is immediately obvious the moment you unbox it.',
    story:
      'The Arc Tote has become my daily work bag. The waxed canvas holds its shape even when loaded with my 15-inch laptop and camera, and the copper rivets give it an understated permanence.',
  },
  {
    id: 'rev-2',
    name: 'Tara Venkatesh',
    location: 'Bengaluru',
    productName: 'Pebble Ceramic Ambient Lamp',
    rating: 5,
    date: 'February 2026',
    quote: 'Transforms the evening mood of my living room completely.',
    story:
      'The texture of the unglazed ceramic feels so tactile and earthy. The warm light diffuser creates zero glare, making it the perfect lamp for nighttime reading.',
  },
  {
    id: 'rev-3',
    name: 'Rohan Deshmukh',
    location: 'New Delhi',
    productName: 'Form Vacuum Thermal Flask',
    rating: 5,
    date: 'January 2026',
    quote: 'The internal ceramic lining makes an unbelievable difference for espresso.',
    story:
      'Standard metal flasks always ruin the acidity of light roast pour-overs. This ceramic lining keeps the flavor crisp all day while keeping cold drinks freezing cold in Delhi summers.',
  },
];

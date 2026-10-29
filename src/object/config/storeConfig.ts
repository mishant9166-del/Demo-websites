import type { DiscountCode } from '../types/cart';

export const STORE_CONFIG = {
  brandName: 'OBJECT & FORM',
  tagline: 'Everyday objects. Exceptionally chosen.',
  description:
    'A contemporary editorial design store curating timeless carry, desk utility, tactile ceramics, and considered home objects.',
  colors: {
    cobaltBlue: '#2447E8',
    coralOrange: '#FF704F',
    softWhite: '#F7F7F4',
    pureWhite: '#FFFFFF',
    inkBlack: '#252525',
    mutedGrey: '#777872',
    lightBorder: '#E5E5E0',
  },
  shipping: {
    freeShippingThresholdINR: 2499,
    standardShippingFeeINR: 199,
    expressShippingFeeINR: 349,
  },
  discountCodes: [
    {
      code: 'WELCOME10',
      type: 'percentage',
      value: 10,
      description: '10% off your entire order',
    },
    {
      code: 'OBJECT200',
      type: 'fixed',
      value: 200,
      minOrderINR: 2000,
      description: '₹200 off on orders over ₹2,000',
    },
  ] as DiscountCode[],
  contact: {
    studio: 'OBJECT & FORM Studio, 42 Indiranagar 100ft Road, Bengaluru 560038, India',
    email: 'care@objectandform.store',
    phone: '+91 (080) 4122-8890',
    hours: 'Monday – Saturday, 10:00 AM – 7:00 PM IST',
  },
  demoNotice:
    'OBJECT & FORM is a fictional design store built for frontend engineering demonstration. No real financial payments are collected, and no actual packages are dispatched.',
};

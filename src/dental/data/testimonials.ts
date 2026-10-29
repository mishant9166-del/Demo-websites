import type { Testimonial } from '../types/dental';

export const testimonials: Testimonial[] = [
  {
    id: 'test-01',
    name: 'Ananya Mehta',
    treatment: 'Cosmetic Veneers & Whitening',
    comment: 'The team at SmileCare made me feel completely at ease from the very first consultation. Dr. Miller explained every detail with patience, and the results exceeded my highest expectations. My smile feels so natural and confident now.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    id: 'test-02',
    name: 'Rohan Deshmukh',
    treatment: 'Clear Aligner Orthodontics',
    comment: 'I had delayed orthodontic treatment for years because I didn’t want metal braces as a working professional. The 3D scan and clear aligners from Dr. Carter fit into my routine seamlessly. The clinic is pristine and incredibly welcoming.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 5
  },
  {
    id: 'test-03',
    name: 'Kavita Sundaram',
    treatment: 'Dental Implant Restoration',
    comment: 'Having a missing tooth had affected my chewing and confidence. Dr. Lee was remarkably gentle throughout the guided implant procedure. There was virtually zero discomfort, and the new tooth matches my smile perfectly.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    rating: 5
  }
];

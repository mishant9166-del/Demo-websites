import type { Doctor } from '../types/dental';

export const doctors: Doctor[] = [
  {
    id: 'doc-01',
    name: 'Dr. Sarah Miller',
    role: 'Principal Dentist & Cosmetic Lead',
    specialty: 'Aesthetic & Restorative Dentistry',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    shortBio: 'Dedicated to gentle restorative dentistry, custom porcelain veneers, and creating calm, comfortable experiences for nervous patients.',
    fullBio: 'Dr. Sarah Miller brings over 14 years of clinical experience with a focused passion for aesthetic smile harmony and minimally invasive dental restorations. She believes that compassionate communication and gentle technique transform the dental chair into an empowering, stress-free space.',
    education: [
      'Doctor of Dental Surgery (DDS) — Honors',
      'Postgraduate Diploma in Aesthetic Restorative Dentistry',
      'Advanced Fellow in Biomimetic Oral Rehabilitation'
    ],
    areasOfPractice: [
      'Comprehensive Smile Makeovers & Porcelain Veneers',
      'Minimally Invasive Composite Resin Artistry',
      'Complex Crown & Bridge Rehabilitation',
      'Gentle Preventative & Diagnostic Dentistry'
    ],
    languages: ['English', 'Spanish']
  },
  {
    id: 'doc-02',
    name: 'Dr. James Carter',
    role: 'Specialist Orthodontist',
    specialty: 'Orthodontics & Clear Aligner Therapy',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    shortBio: 'Specializing in digital orthodontic planning, invisible aligners, and balanced functional bite alignment for adults and teens.',
    fullBio: 'Dr. James Carter is an experienced specialist orthodontist focused on digital treatment planning. By combining 3D intraoral digital modeling with customized clear aligner mechanics, Dr. Carter delivers predictable, aesthetic alignment without disrupting his patients’ active lifestyles.',
    education: [
      'Master of Science in Orthodontics (MSc Ortho)',
      'Bachelor of Dental Science (BDS)',
      'Certified Digital Aligner Master Practitioner'
    ],
    areasOfPractice: [
      'Clear Aligner Orthodontics for Adults & Teens',
      'Interceptive Early Phase Orthodontics for Children',
      'Low-Profile Ceramic Aesthetic Brackets',
      'TMJ & Biomechanical Bite Correction'
    ],
    languages: ['English']
  },
  {
    id: 'doc-03',
    name: 'Dr. Priya Sharma',
    role: 'Pediatric & Family Dentistry Lead',
    specialty: 'Pediatric & Preventive Dentistry',
    image: 'https://images.unsplash.com/photo-1594824813583-ce5343419958?auto=format&fit=crop&w=800&q=80',
    shortBio: 'Focused on creating positive, fear-free visits for children, adolescents, and whole families through gentle, engaging care.',
    fullBio: 'Dr. Priya Sharma is dedicated to nurturing lifelong positive dental attitudes in young patients. Her warm, patient demeanor and "Tell-Show-Do" educational technique help children feel secure and empowered, ensuring early dental visits are filled with smiles rather than apprehension.',
    education: [
      'Doctor of Dental Medicine (DMD)',
      'Residency in Pediatric Oral Health',
      'Certificate in Behavioral Dental Communication'
    ],
    areasOfPractice: [
      'Infant & Child Dental Growth Milestone Exams',
      'Protective Pit-and-Fissure Sealants & Fluoride',
      'Gentle Pediatric Restorations & Space Maintainers',
      'Emergency Dental Care for Sports & Play Injuries'
    ],
    languages: ['English', 'Hindi']
  },
  {
    id: 'doc-04',
    name: 'Dr. Michael Lee',
    role: 'Oral Surgeon & Implantologist',
    specialty: 'Implantology & Periodontal Surgery',
    image: 'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=800&q=80',
    shortBio: 'Specializing in computer-guided dental implants, bone regeneration, and advanced surgical extractions with patient comfort prioritized.',
    fullBio: 'Dr. Michael Lee brings focused surgical expertise in 3D computer-guided dental implantology and complex oral reconstruction. He is recognized for his precise, micro-surgical approach that minimizes tissue disruption and ensures rapid, comfortable postoperative recovery.',
    education: [
      'Doctor of Dental Surgery (DDS)',
      'Fellowship in Oral Implantology & Bone Grafting',
      'Certificate in Advanced IV Conscious Sedation'
    ],
    areasOfPractice: [
      'Single & Multi-Tooth Dental Implant Placements',
      '3D Guided Immediate-Load Implant Restorations',
      'Atraumatic Wisdom Tooth Extractions',
      'Soft Tissue Gum Grafting & Bone Regeneration'
    ],
    languages: ['English', 'Mandarin']
  }
];

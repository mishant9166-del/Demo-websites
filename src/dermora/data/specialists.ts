import type { Specialist } from '../types/dermora';

export const specialists: Specialist[] = [
  {
    id: 'spec-1',
    slug: 'dr-elena-vance',
    name: 'Dr. Elena Vance, MD',
    title: 'Senior Consultant Dermatologist & Clinical Director',
    specialty: 'General & Medical Dermatology',
    bio: 'Dr. Elena Vance believes that exceptional skin care begins with deep listening and understanding the individual behind the skin. With over fifteen years of dedicated clinical practice, she specializes in acne management, inflammatory skin barriers, and comprehensive dermoscopic mole examinations.',
    portrait: 'https://images.unsplash.com/photo-1594824813587-f273295280b2?auto=format&fit=crop&w=800&q=80',
    areasOfInterest: [
      'Adult & Hormonal Acne Protocols',
      'Polarized Dermoscopic Mole Surveillance',
      'Rosacea & Chronic Cutaneous Flushing',
      'Stratum Corneum Lipid Barrier Recovery',
      'Evidence-Based Topical Formulations'
    ],
    consultationApproach: 'Dr. Vance takes a deliberate, unhurried diagnostic approach. She examines not only the presenting skin concern, but also lifestyle stressors, seasonal environmental factors, and previous product intolerances to craft a sustainable, gentle recovery plan.',
    associatedTreatmentSlugs: ['acne-consultation', 'sensitive-skin-consultation', 'general-dermatology'],
    roomNumber: 'Consultation Suite 101'
  },
  {
    id: 'spec-2',
    slug: 'dr-marcus-hayes',
    name: 'Dr. Marcus Hayes, MD',
    title: 'Specialist in Aesthetic Dermatology & Laser Technology',
    specialty: 'Cosmetic Dermatology & Laser Therapies',
    bio: 'Dr. Marcus Hayes focuses on natural, undetectable cosmetic dermatology. His approach champions regenerative aesthetics, utilizing tailored non-ablative laser technology, mild clinical peels, and targeted collagen remodeling rather than exaggerated volume.',
    portrait: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    areasOfInterest: [
      'Non-Ablative Laser Skin Rejuvenation',
      'Pigmentation & Melasma Clarification',
      'Gentle Multi-Acid Exfoliation Protocols',
      'Subtle Collagen & Elasticity Support',
      'Post-Inflammatory Textural Refinement'
    ],
    consultationApproach: 'Dr. Hayes emphasizes patient education and conservative treatment progression. He creates phased treatment roadmaps that prioritize skin health first, ensuring treatments look organic, refreshed, and seamlessly natural.',
    associatedTreatmentSlugs: ['skin-rejuvenation', 'chemical-peels', 'laser-hair-reduction', 'anti-ageing-treatments'],
    roomNumber: 'Aesthetic Laser Suite 204'
  },
  {
    id: 'spec-3',
    slug: 'dr-clara-lin',
    name: 'Dr. Clara Lin, MD',
    title: 'Consultant Dermatologist & Trichology Specialist',
    specialty: 'Hair & Scalp Health Care',
    bio: 'Dr. Clara Lin is recognized for her thoughtful, science-backed approach to hair thinning, telogen effluvium, and chronic scalp disorders. She combines digital trichoscopy with holistic nutritional assessments to support healthy follicular longevity.',
    portrait: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    areasOfInterest: [
      'High-Magnification Digital Trichoscopy',
      'Post-Stress & Post-Illness Telogen Effluvium',
      'Chronic Dandruff & Seborrheic Dermatitis',
      'Hormonally Mediated Hair Density Changes',
      'Scalp Microbiome & Barrier Equilibrium'
    ],
    consultationApproach: 'Dr. Lin believes hair and scalp concerns require compassionate attention and thorough root-cause investigations. She guides patients through detailed trichoscopy findings, clarifying expectations and dispelling online hair care myths.',
    associatedTreatmentSlugs: ['hair-scalp-consultation', 'sensitive-skin-consultation'],
    roomNumber: 'Trichology Center Suite 108'
  },
  {
    id: 'spec-4',
    slug: 'dr-sophia-reid',
    name: 'Dr. Sophia Reid, MD',
    title: 'Consultant Dermatologist & Pigmentary Disorder Specialist',
    specialty: 'Skin Health & Pigmentation Consultations',
    bio: 'Dr. Sophia Reid brings specialized focus to hyperpigmentation, atrophic acne scar remodeling, and complex skin tones. She is passionate about safe, inclusive dermatological care tailored for all Fitzpatrick phototypes.',
    portrait: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    areasOfInterest: [
      'Hormonal Melasma & Deep Pigment Mapping',
      'Atrophic & Boxcar Acne Scar Refinement',
      'Dermatology for Melanin-Rich Skin',
      'Topical Antioxidant & Peptide Synergies',
      'Gentle Mineral UV Defense Protocols'
    ],
    consultationApproach: 'Dr. Reid treats pigmentation with patience and precision. She avoids aggressive peeling that risks rebound hyperpigmentation, instead formulating steady, barrier-supporting regimens that deliver luminous, even-toned clarity.',
    associatedTreatmentSlugs: ['pigmentation-assessment', 'scar-assessment', 'acne-consultation'],
    roomNumber: 'Clinical Consultation Suite 103'
  }
];

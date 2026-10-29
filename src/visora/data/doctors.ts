import type { Doctor } from '../types/visora';

export const doctors: Doctor[] = [
  {
    id: 'doc-1',
    slug: 'dr-elena-vance',
    name: 'Dr. Elena Vance',
    role: 'Lead Optometrist & Vision Scientist',
    specialty: 'Refractive Precision & Corneal Topography',
    qualificationsDisplay: 'B.Optom (Hons), FAAO (Fictional Portfolio Profile)',
    bio:
      'Dr. Elena Vance leads our clinical refractive assessment protocols with an emphasis on high-precision wavefront refraction and digital eye strain mitigation. She combines gentle, conversational consultations with advanced corneal imaging to guide patients toward crystal-clear daily comfort.',
    portrait:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    consultationApproach:
      '“Vision care is personal. We never rush refractions or rely strictly on automated readings; we take the time to test your eyes in the exact postures and lighting environments you inhabit every day.”',
    areasOfExpertise: [
      'Complex Refractive Astigmatism',
      'Computer Vision Syndrome & Office Ergonomics',
      'High-Definition Wavefront Aberrometry',
      'Specialty Progressive Lens Fitting',
    ],
    roomNumber: 'Clinical Atelier Suite 01',
    availability: 'Mon, Wed, Fri & Alternate Saturdays',
  },
  {
    id: 'doc-2',
    slug: 'dr-marcus-lin',
    name: 'Dr. Marcus Lin',
    role: 'Senior Clinical Optometrist',
    specialty: 'Dry Eye Therapy & Ocular Surface Health',
    qualificationsDisplay: 'OD, Clinical Ocular Surface Fellow (Fictional Portfolio Profile)',
    bio:
      'Specializing in anterior segment evaluation and evaporative dry eye management, Dr. Lin oversees VISORA’s tear film diagnostic suite. He is known for clear explanations, practical at-home regimens, and evidence-informed meibomian gland rehabilitation.',
    portrait:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    consultationApproach:
      '“Modern indoor living and relentless screen exposure challenge the ocular tear film. Our approach restores natural ocular lubrication through targeted, non-invasive therapies rather than temporary drop reliance.”',
    areasOfExpertise: [
      'Meibomian Gland Dysfunction (MGD)',
      'Infrared Tear Film Interferometry',
      'Contact Lens Dryness Rehabilitation',
      'Allergic & Seasonal Ocular Surface Care',
    ],
    roomNumber: 'Clinical Atelier Suite 02',
    availability: 'Tue, Thu & Saturdays',
  },
  {
    id: 'doc-3',
    slug: 'dr-sophia-reyes',
    name: 'Dr. Sophia Reyes',
    role: 'Pediatric Optometrist & Binocular Specialist',
    specialty: 'Pediatric Vision Development & Myopia Management',
    qualificationsDisplay: 'OD, Pediatric Vision Specialist (Fictional Portfolio Profile)',
    bio:
      'With a warm and engaging clinical manner, Dr. Reyes specializes in early visual screening for school-aged children, binocular accommodation therapy, and modern myopia progression mitigation techniques including specialized optical defocus lenses.',
    portrait:
      'https://images.unsplash.com/photo-1594824813589-98285514b8a2?auto=format&fit=crop&w=800&q=80',
    consultationApproach:
      '“Children often do not realize their vision is blurry because they assume everyone sees the same way. Creating a fun, positive, and pressure-free environment makes all the difference in discovering early tracking challenges.”',
    areasOfExpertise: [
      'Pediatric Refraction & Amblyopia Screening',
      'Early Myopia Progression Control',
      'Binocular Tracking & Depth Perception',
      'Orthokeratology & Defocus Lens Consultation',
    ],
    roomNumber: 'Pediatric Vision Atelier Suite 03',
    availability: 'Mon, Tue, Thu & Alternate Sundays',
  },
  {
    id: 'doc-4',
    slug: 'dr-arjun-mehta',
    name: 'Dr. Arjun Mehta',
    role: 'Consultant Contact Lens Optometrist',
    specialty: 'Specialty Contact Lenses & Orthokeratology',
    qualificationsDisplay: 'M.Optom, Specialty Contact Lens Diplomate (Fictional Portfolio Profile)',
    bio:
      'Dr. Mehta brings over a decade of focus to challenging contact lens fittings, irregular corneas, post-graft fits, and high-astigmatic lenses. He works closely with our optical craftsmen to pair optimal physiological breathability with sharp visual optics.',
    portrait:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    consultationApproach:
      '“Every cornea has its own distinct topography. By modeling corneal elevation maps digitally, we achieve contact lens comfort that patients who previously struggled can enjoy from morning to night.”',
    areasOfExpertise: [
      'Toric & Multifocal Contact Lenses',
      'Rigid Gas Permeable (RGP) & Scleral Fitting',
      'Corneal Topographical Mapping',
      'High-Oxygen Breathable Silicone Hydrogels',
    ],
    roomNumber: 'Clinical Atelier Suite 04',
    availability: 'Wed, Thu, Fri & Saturdays',
  },
];

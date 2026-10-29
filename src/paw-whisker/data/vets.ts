import type { Veterinarian } from '../types/vet';

export const VETERINARIANS: Veterinarian[] = [
  {
    id: 'vet-1',
    slug: 'dr-clara-bennett',
    name: 'Dr. Clara Bennett, DVM',
    role: 'Medical Director & Small Animal Clinician',
    specialties: ['Preventive Care', 'Fear-Free Gentle Handling', 'Feline Medicine'],
    specialty: 'Preventive Care, Gentle Handling & Feline Medicine',
    bio:
      'Dr. Clara Bennett founded PAW & WHISKER with a simple belief: visits to the vet should feel like visiting a kind, knowledgeable neighbor. She brings over 12 years of clinical dedication to calm, low-stress examinations, preventive wellness, and supportive chronic care for aging cats and dogs.',
    shortBio:
      'Dedicated to low-stress handling and peaceful veterinary experiences. Expert in feline medicine and preventive longevity.',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    portrait:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    philosophy:
      '“I believe in letting animals set the pace. If a shy cat prefers to be examined nestled in their carrier base, that is where we do it.”',
    approachToHandling:
      '“I believe in letting animals set the pace. If a shy cat prefers to be examined while nestled in the bottom half of their carrier, or a dog feels safest sitting on their owner’s lap, that is exactly where the examination happens.”',
    handlingApproach:
      'Dr. Bennett uses touch-gradient exams, high-value treats, and feline facial pheromones. She spends the first five minutes greeting the pet at their level before lifting any instrument.',
    areasOfInterest: [
      'Low-Stress & Fear-Free Certified Handling',
      'Feline Lower Urinary & Kidney Wellness',
      'Puppy & Kitten Socialization Protocols',
      'Comprehensive Oral & Dental Health',
    ],
    companionPet: 'Two rescue cats named Pippin & Barnaby, and an elderly Basset Hound named Walter',
    petCompanions: 'Two rescue cats named Pippin & Barnaby, and an elderly Basset Hound named Walter.',
    experience: '12+ Years Experience',
    consultationSuite: 'Suite 01 (Quiet Feline-Friendly)',
    roomNumber: 'Consultation Suite 01 (Quiet Feline-Friendly)',
    availability: 'Monday, Tuesday, Thursday & Friday',
  },
  {
    id: 'vet-2',
    slug: 'dr-samuel-reed',
    name: 'Dr. Samuel Reed, DVM',
    role: 'Associate Veterinarian & Surgeon',
    specialties: ['Soft Tissue Surgery', 'Orthopedic Exams', 'Diagnostic Ultrasound'],
    specialty: 'Soft Tissue Surgery, Orthopedics & Diagnostic Imaging',
    bio:
      'Warm and attentive, Dr. Samuel Reed combines meticulous surgical precision with clear, compassionate communication. He focuses on modern multi-modal pain management, soft tissue procedures, and digital ultrasound diagnostics to give pet parents clear answers when their companions face unexpected illness.',
    shortBio:
      'Focuses on gentle soft tissue surgeries, abdominal ultrasound, and transparent, step-by-step owner communication.',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    portrait:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    philosophy:
      '“Clear communication removes fear. I explain every step and show owners images so we make decisions together.”',
    approachToHandling:
      '“Surgery and anesthesia can feel overwhelming for owners. I take the time to walk families through every monitoring step, pain control protocol, and recovery milestone so they feel completely supported.”',
    handlingApproach:
      'Dr. Reed believes calm voices and soothing touch make even difficult imaging procedures easy for animals. He relies heavily on pre-visit calming treats and soft warm towel wraps.',
    areasOfInterest: [
      'Soft Tissue Surgery & Wound Reconstruction',
      'Ultrasonography & Diagnostic Radiography',
      'Multi-Modal Perioperative Pain Management',
      'Canine Sports Injury Rehabilitation',
    ],
    companionPet: 'An energetic Australian Shepherd named Cedar who loves trail running',
    petCompanions: 'An energetic Australian Shepherd named Cedar who loves trail running.',
    experience: '9+ Years Experience',
    consultationSuite: 'Suite 02 (Surgical & Imaging Focus)',
    roomNumber: 'Consultation Suite 02 (Surgical & Imaging Focus)',
    availability: 'Tuesday, Wednesday, Friday & Saturday',
  },
  {
    id: 'vet-3',
    slug: 'dr-maya-chen',
    name: 'Dr. Maya Chen, DVM, CVA',
    role: 'Veterinarian & Integrative Medicine',
    specialties: ['Senior Pet Mobility', 'Acupuncture & Laser', 'Nutritional Counseling'],
    specialty: 'Acupuncture, Laser Therapy & Senior Wellness',
    bio:
      'Dr. Maya Chen brings a thoughtful integrative perspective to veterinary care. In addition to conventional medicine, she holds advanced certification in veterinary medical acupuncture and laser therapy, focusing on restoring comfortable mobility to senior companions living with chronic arthritis and spinal tension.',
    shortBio:
      'Certified in veterinary acupuncture and laser therapy, specializing in gentle pain relief and mobility for aging pets.',
    image:
      'https://images.unsplash.com/photo-1594824813579-994473e04739?auto=format&fit=crop&w=800&q=80',
    portrait:
      'https://images.unsplash.com/photo-1594824813579-994473e04739?auto=format&fit=crop&w=800&q=80',
    philosophy:
      '“Our senior pets have given us their whole hearts. They deserve our most thoughtful comfort in their golden years.”',
    approachToHandling:
      '“Older pets often experience aches that make clinical tables uncomfortable. I sit on the rug with them, using gentle massage and warming blankets to create a relaxed healing space.”',
    handlingApproach:
      'Dr. Chen provides examinations entirely on thick orthopedic memory-foam mats with non-slip surfaces. She pairs every acupuncture or laser session with tasty lick-mats.',
    areasOfInterest: [
      'Veterinary Medical Acupuncture',
      'Photobiomodulation (Class IV Therapeutic Laser)',
      'Geriatric Quality of Life & Cognitive Health',
      'Nutritional Support for Chronic Kidney Disease',
    ],
    companionPet: 'A 14-year-old rescued Domestic Shorthair cat named Mochi and a sweet deaf Pug named Bean',
    petCompanions: 'A 14-year-old rescued Domestic Shorthair cat named Mochi and a sweet deaf Pug named Bean.',
    experience: '11+ Years Experience',
    consultationSuite: 'Suite 03 (Integrative & Mobility Suite)',
    roomNumber: 'Consultation Suite 03 (Integrative & Mobility Suite)',
    availability: 'Monday, Wednesday, Thursday & Friday',
  },
  {
    id: 'vet-4',
    slug: 'dr-liam-oconnor',
    name: 'Dr. Liam O’Connor, DVM',
    role: 'Associate Small Animal Clinician',
    specialties: ['Dermatology & Allergies', 'Dental Health', 'Puppy/Kitten Care'],
    specialty: 'Dermatology, Dentistry & First-Year Companion Health',
    bio:
      'Passionate about first-time pet owners and solving chronic ear and skin allergies, Dr. Liam O’Connor takes pride in making veterinary medicine accessible and understandable. His easy-going, reassuring demeanor puts anxious pets immediately at ease, while his detailed care roadmaps empower owners.',
    shortBio:
      'Specializes in soothing chronic allergies, ear infections, and making puppy and kitten first exams joyous occasions.',
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    portrait:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    philosophy:
      '“Every appointment should be a conversation, not a lecture. When pet parents feel empowered, companions thrive.”',
    approachToHandling:
      '“I believe in high-value treats and playful curiosity. There is nothing a smear of organic peanut butter or chicken paste can’t help make easier during an ear exam.”',
    handlingApproach:
      'Dr. O’Connor loves floor interactions and uses squeeze treats to turn potentially scary procedures into fun training games.',
    areasOfInterest: [
      'Canine Atopic Dermatitis & Cytology',
      'Otitis Externa Management & Prevention',
      'Comprehensive Oral Health & Assessment (COHAT)',
      'First-Time Pet Parent Guidance',
    ],
    companionPet: 'A scruffy terrier mix named Finnegan adopted during veterinary school',
    petCompanions: 'A scruffy terrier mix named Finnegan adopted during veterinary school.',
    experience: '7+ Years Experience',
    consultationSuite: 'Suite 04 (Playful Companion Suite)',
    roomNumber: 'Consultation Suite 04 (Playful Companion Suite)',
    availability: 'Monday, Tuesday, Wednesday & Saturday',
  },
];

export const veterinarians = VETERINARIANS;

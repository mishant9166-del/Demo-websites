import type { Practitioner } from '../types/rehabora';

export const practitioners: Practitioner[] = [
  {
    id: 'prac-1',
    slug: 'marcus-thorne',
    name: 'Marcus Thorne, PT, DPT',
    title: 'Lead Physiotherapist & Clinical Director',
    specialty: 'Musculoskeletal Physiotherapy',
    bio: 'Marcus believes that effective rehabilitation starts by listening deeply to a patient’s daily challenges and personal goals. With an emphasis on movement biomechanics and manual mobilization, he specializes in spine health, persistent joint stiffness, and chronic muscle strain recovery.',
    portrait: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    professionalApproach:
      'Marcus takes a collaborative, educational approach. He explains the root mechanical drivers of discomfort in clear, relatable terms so patients feel empowered rather than overwhelmed. Every session includes actionable self-care tools.',
    areasOfInterest: [
      'Cervical and Lumbar Spinal Decompression',
      'Chronic Tendinopathy Loading Protocols',
      'Shoulder Impingement & Rotator Cuff Care',
      'Ergonomic Postural Re-education'
    ],
    associatedServiceSlugs: ['musculoskeletal-physiotherapy', 'back-and-neck-care', 'joint-mobility-rehabilitation'],
    suiteNumber: 'Clinical Suite 101',
    availability: 'Monday – Thursday (Morning & Afternoon)'
  },
  {
    id: 'prac-2',
    slug: 'sarah-jenkins',
    name: 'Sarah Jenkins, PT, SCS',
    title: 'Sports Rehabilitation Specialist',
    specialty: 'Sports Rehabilitation',
    bio: 'Sarah is passionate about helping runners, field athletes, and fitness enthusiasts rebuild athletic durability after acute injuries. She combines high-speed video gait analysis with reactive agility drills to ensure athletes return to sport with complete confidence.',
    portrait: 'https://images.unsplash.com/photo-1594824813587-f273295280b2?auto=format&fit=crop&w=800&q=80',
    professionalApproach:
      'Sarah treats rehabilitation as athletic training in reverse—identifying energy leaks, restoring symmetrical power distribution, and instilling mental resilience during the final return-to-play phase.',
    areasOfInterest: [
      'ACL Reconstruction & Knee Ligament Recovery',
      'Runner’s Kinetic Chain Biomechanics',
      'Hamstring & Groin Strain Rehabilitation',
      'Plyometric Deceleration & Landing Mechanics'
    ],
    associatedServiceSlugs: ['sports-injury-rehabilitation', 'gait-and-walking-rehabilitation'],
    suiteNumber: 'Sports Movement Studio 202',
    availability: 'Tuesday – Saturday (Full Day)'
  },
  {
    id: 'prac-3',
    slug: 'david-kim',
    name: 'David Kim, PT, GCS',
    title: 'Mobility & Neuromuscular Coordinator',
    specialty: 'Mobility and Balance',
    bio: 'David specializes in vestibular rehabilitation, fall prevention, and balance re-education for adults who want to preserve their independence. His patient, encouraging demeanor makes complex neuromuscular exercises approachable and rewarding.',
    portrait: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    professionalApproach:
      'David believes confidence is built one controlled step at a time. He designs micro-progressions that challenge balance safely, celebrating every increment of stability and improved stride.',
    areasOfInterest: [
      'Vestibular Balance & Vertigo Management',
      'Falls Risk Reduction & Stepping Reactions',
      'Active Ageing Functional Strength',
      'Sensory Neuropathy Gait Adaptation'
    ],
    associatedServiceSlugs: ['balance-and-mobility-training', 'senior-mobility-support'],
    suiteNumber: 'Balance Pavilion 104',
    availability: 'Monday – Friday (Morning Focused)'
  },
  {
    id: 'prac-4',
    slug: 'amara-patel',
    name: 'Amara Patel, PT, OCS',
    title: 'Orthopedic & Post-Operative Specialist',
    specialty: 'Post-Operative Rehabilitation',
    bio: 'Amara has extensive experience coordinating recovery plans following total hip and knee replacements, spinal fusions, and major tendon reconstructions. Her gentle manual touch and methodical protocol tracking ensure calm, steady healing.',
    portrait: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    professionalApproach:
      'Amara prioritizes patient reassurance and comfort above all else. She coordinates seamlessly with surgical guidelines, ensuring tissue healing timelines are respected while stiffness is gently dissolved.',
    areasOfInterest: [
      'Total Joint Arthroplasty (Hip & Knee) Milestones',
      'Post-Surgical Effusion & Scar Mobilization',
      'Safe Assistive Device Weaning Protocols',
      'Posture & Core Kinetic Chain Integration'
    ],
    associatedServiceSlugs: ['post-operative-rehabilitation', 'joint-mobility-rehabilitation', 'posture-and-movement-assessment'],
    suiteNumber: 'Orthopedic Recovery Suite 108',
    availability: 'Wednesday – Saturday (Full Day)'
  }
];

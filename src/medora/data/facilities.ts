import type { Facility } from '../types/medora';

export const facilities: Facility[] = [
  {
    id: 'fac-1',
    slug: 'executive-patient-rooms',
    title: 'Modern Patient Rooms & Private Recovery Suites',
    category: 'Patient Accommodation',
    description: 'Designed to foster peace and rapid healing, our private patient suites combine hospital-grade medical telemetry with ergonomic comfort, climate control, acoustic isolation, and dedicated family seating.',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Multi-Position Motorized Patient Beds with Pressure-Relief Mattresses',
      'Continuous Non-Invasive Wireless Telemetry Monitoring',
      'Private En-Suite Restrooms with Wheelchair-Accessible Roll-In Showers',
      'Independent HEPA-Filtered Climate & Air Exchange Systems',
      'Ergonomic Reclining Daybeds for Accompanying Family Members',
      'Touchscreen Bedside Entertainment & Call-Button Intercom'
    ]
  },
  {
    id: 'fac-2',
    slug: 'advanced-diagnostic-imaging',
    title: 'High-Field 3T MRI & 128-Slice CT Diagnostic Suite',
    category: 'Diagnostic Facilities',
    description: 'Our digital imaging suite provides ultra-high resolution cross-sectional views with reduced radiation protocols, supporting rapid clinical decisions in trauma, cardiovascular, and neurological care.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Wide-Bore 3.0 Tesla Silent MRI for Reduced Claustrophobia',
      'Ultra-Low Dose 128-Slice Spectral CT Scanner',
      'Instant Tele-Radiology Digital Archiving (PACS) Integration',
      'Ambient LED Visual Projection to Ease Patient Anxiety',
      'High-Resolution Digital Color Doppler Ultrasound Systems',
      'Dedicated Pediatric Imaging Protocols with Minimal Exposure'
    ]
  },
  {
    id: 'fac-3',
    slug: 'modular-surgical-theatres',
    title: 'Modular Ultra-Clean Surgical Operation Suites',
    category: 'Surgical Infrastructure',
    description: 'Engineered to international infection-control standards, our surgical theaters feature vertical laminar air flow, integrated 4K endoscopy towers, and ergonomic surgical layouts.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Positive-Pressure Laminar Airflow with Medical-Grade HEPA Filtration',
      'Anti-Static, Seamless Antibacterial Flooring and Wall Liners',
      'Ceiling-Suspended Gas & Power Articulating Booms',
      'Integrated High-Definition Video Displays for Laparoscopy & Endoscopy',
      'Centralized Real-Time Patient Vital Monitoring Stations',
      'Sterile Processing Department (SPD) Direct Dumbwaiter Connection'
    ]
  },
  {
    id: 'fac-4',
    slug: 'emergency-trauma-center',
    title: '24/7 Level-1 Emergency & Trauma Resuscitation Bays',
    category: 'Emergency Care',
    description: 'Equipped to manage acute cardiac crises, severe trauma, stroke emergencies, and acute medical illnesses with zero-delay triage protocols.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Dedicated Covered Ambulance Bay with Rapid Triage Reception',
      'Point-of-Care Blood Gas Analysis & Ultrasound Resuscitation Bays',
      'Cardiac Defibrillators & Advanced Airway Management Stations',
      'Direct Elevator Access to Surgical Suites and Cardiac Catheterization',
      'Isolation Negative-Pressure Bay for Airborne Infectious Cases',
      '24/7 On-Duty Emergency Physicians and Trauma Care Nurses'
    ]
  },
  {
    id: 'fac-5',
    slug: 'reception-waiting-lounges',
    title: 'Spacious Outpatient Reception & Family Lounges',
    category: 'Patient Support Areas',
    description: 'A welcoming, biophilic hospital atrium filled with natural daylight, intuitive wayfinding signage, digital queue counters, and calm reading lounges.',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Double-Height Natural Skylight Atrium with Indoor Botanical Greenery',
      'Digital Self-Check-In Kiosks and Multi-Language Assistance Desks',
      'Quiet Seating Zones with Ergonomic Healthcare Seating and Device Charging',
      'Comprehensive Wheelchair Accessibility Ramps and Wide Elevators',
      'Braille Directional Signage and Tactile Paving for Visually Impaired',
      'Dedicated Pharmacy Dispensing Counter & Clinical Help Desk'
    ]
  },
  {
    id: 'fac-6',
    slug: 'intensive-care-unit',
    title: 'Multi-Parameter Critical Care & ICU Telemetry Unit',
    category: 'Critical Care',
    description: 'High-dependency intensive care pods with 1-to-1 patient-to-nurse monitoring, continuous hemodynamics, and isolated visitor observation windows.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    features: [
      'High-Dependency Telemetry Beds with Invasive Arterial Line Support',
      'Advanced Mechanical Ventilation with Weaning Diagnostics',
      'Glass-Partitioned Individual Pods for Cross-Infection Control',
      'Continuous Renal Replacement Therapy (CRRT) Dialysis Capable',
      'Central Physician Oversight Console with Automated Alarm Routing',
      'Dedicated Family Consultation & Counseling Room'
    ]
  },
  {
    id: 'fac-7',
    slug: 'pediatric-play-pavilion',
    title: 'Family-Centered Pediatric Ward & Care Pavilion',
    category: 'Women & Children',
    description: 'A cheerful, non-intimidating healthcare environment featuring colorful murals, developmental toy corners, and family-inclusive treatment rooms.',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Child-Friendly Examination Rooms with Soothing Animal Murals',
      'Interactive Play Therapy Corner to Reduce Hospitalization Anxiety',
      'Pediatric Triage Observation Beds with Family Sleeper Chairs',
      'Dedicated Breastfeeding & Infant Feeding Sanctuary',
      'Child-Safe Rounded Furnishings and Anti-Microbial Surfaces',
      'Specialized Pediatric Nursing and Child-Life Specialists'
    ]
  },
  {
    id: 'fac-8',
    slug: 'rehabilitation-physiotherapy',
    title: 'Physical Therapy & Sports Mobility Gymnasium',
    category: 'Patient Support Areas',
    description: 'A comprehensive rehabilitation wing assisting post-surgical patients, stroke survivors, and sports athletes in reclaiming independence and bodily function.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Hydrotherapy Resistance Pool with Hoist Access',
      'Parallel Walking Bars & Body-Weight Supported Gait Training',
      'Therapeutic Ultrasound and Electrical Muscle Stimulation Devices',
      'Balance Rehabilitation Platforms & Proprioceptive Training Mats',
      'Ergonomic Hand Therapy & Fine Motor Skill Rehabilitation Stations',
      'Individual Exercise Prescription Counseling by Licensed Therapists'
    ]
  }
];

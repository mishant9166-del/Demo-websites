import type { Doctor } from '../types/medora';

export const doctors: Doctor[] = [
  {
    id: 'doc-1',
    slug: 'dr-sarah-khan',
    name: 'Dr. Sarah Khan',
    title: 'Consultant Cardiologist & Heart Specialist',
    specialty: 'Cardiology',
    departmentSlug: 'cardiology',
    departmentName: 'Cardiology',
    experienceYears: 14,
    bio: 'Dr. Sarah Khan focuses on preventive cardiology, non-invasive cardiac imaging, and long-term lipid management. She advocates for proactive cardiovascular screening, heart-healthy nutrition, and tailored exercise prescriptions.',
    areasOfPractice: [
      'Preventive Cardiovascular Screening',
      'Hypertension & Coronary Artery Disease',
      'Advanced 2D/3D Echocardiography',
      'Cardiac Stress Testing & Exercise Physiology',
      'Lipid & Cholesterol Optimization'
    ],
    portrait: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    availableDays: ['Monday', 'Wednesday', 'Friday'],
    roomNumber: 'Suite 204, East Wing',
    contactEmail: 'dr.sarah.khan@medorahospital.demo'
  },
  {
    id: 'doc-2',
    slug: 'dr-amit-sharma',
    name: 'Dr. Amit Sharma',
    title: 'Senior Orthopedic & Joint Surgeon',
    specialty: 'Orthopedics & Joint Care',
    departmentSlug: 'orthopedics',
    departmentName: 'Orthopedics & Joint Care',
    experienceYears: 18,
    bio: 'Dr. Amit Sharma specializes in minimally invasive joint surgery, ligament reconstruction, and degenerative musculoskeletal disorders. His care model emphasizes early rehabilitation to help patients regain mobility and active lifestyles.',
    areasOfPractice: [
      'Knee & Hip Arthroplasty Consultations',
      'Arthroscopic ACL & Meniscal Repair',
      'Sports Injury Prevention & Return-to-Play',
      'Degenerative Osteoarthritis Care',
      'Post-Trauma Orthopedic Reconstruction'
    ],
    portrait: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    availableDays: ['Tuesday', 'Thursday', 'Saturday'],
    roomNumber: 'Suite 310, Orthopedic Pavilion',
    contactEmail: 'dr.amit.sharma@medorahospital.demo'
  },
  {
    id: 'doc-3',
    slug: 'dr-priya-nair',
    name: 'Dr. Priya Nair',
    title: 'Consultant Neurologist',
    specialty: 'Neurology & Spine Care',
    departmentSlug: 'neurology',
    departmentName: 'Neurology & Spine Care',
    experienceYears: 12,
    bio: 'Dr. Priya Nair provides specialized diagnostic care for neurovascular conditions, chronic migraine syndromes, and clinical electrophysiology. She is passionate about patient education and holistic management of neurological wellness.',
    areasOfPractice: [
      'Complex Migraine & Facial Pain Syndromes',
      'Epilepsy & Seizure Disorder Management',
      'Stroke Secondary Prevention & Recovery',
      'Peripheral Neuropathy Diagnostics',
      'Clinical EEG & Electromyography Review'
    ],
    portrait: 'https://images.unsplash.com/photo-1594824813587-f273295280b2?auto=format&fit=crop&w=800&q=80',
    availableDays: ['Monday', 'Tuesday', 'Thursday'],
    roomNumber: 'Suite 412, Neuro Sciences Block',
    contactEmail: 'dr.priya.nair@medorahospital.demo'
  },
  {
    id: 'doc-4',
    slug: 'dr-rajesh-verma',
    name: 'Dr. Rajesh Verma',
    title: 'Chief Physician — Internal Medicine',
    specialty: 'General Medicine & Family Health',
    departmentSlug: 'general-medicine',
    departmentName: 'General Medicine & Family Health',
    experienceYears: 20,
    bio: 'Dr. Rajesh Verma is an experienced internist with two decades of experience treating adult patients for acute and chronic lifestyle illnesses. He believes in building lasting physician-patient partnerships centered on empathy and thorough clinical attention.',
    areasOfPractice: [
      'Metabolic Disorders & Diabetes Care',
      'Comprehensive Executive Health Audits',
      'Adult Preventive Immunology & Vaccines',
      'Cardiometabolic Risk Profiling',
      'Geriatric Health & Polypharmacy Review'
    ],
    portrait: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    availableDays: ['Monday', 'Wednesday', 'Thursday', 'Saturday'],
    roomNumber: 'Suite 105, Ground Floor OPD',
    contactEmail: 'dr.rajesh.verma@medorahospital.demo'
  },
  {
    id: 'doc-5',
    slug: 'dr-ananya-singh',
    name: 'Dr. Ananya Singh',
    title: 'Consultant Obstetrician & Gynecologist',
    specialty: 'Gynecology & Obstetrics',
    departmentSlug: 'gynecology',
    departmentName: 'Gynecology & Obstetrics',
    experienceYears: 15,
    bio: "Dr. Ananya Singh provides compassionate reproductive and maternity healthcare. She works closely with women through routine wellness checks, prenatal counseling, and minimally invasive treatments for pelvic health concerns.",
    areasOfPractice: [
      'Antenatal Care & Maternal Well-being',
      'PCOS & Hormonal Imbalance Strategies',
      'Well-Woman Screenings & Pap Cytology',
      'Adolescent Gynecological Counseling',
      'Perimenopause & Bone Health Guidance'
    ],
    portrait: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    availableDays: ['Tuesday', 'Wednesday', 'Friday'],
    roomNumber: 'Suite 218, Women’s Center',
    contactEmail: 'dr.ananya.singh@medorahospital.demo'
  },
  {
    id: 'doc-6',
    slug: 'dr-rahul-mehta',
    name: 'Dr. Rahul Mehta',
    title: 'Senior Pediatrician & Child Health Specialist',
    specialty: 'Pediatrics & Neonatal Care',
    departmentSlug: 'pediatrics',
    departmentName: 'Pediatrics & Neonatal Care',
    experienceYears: 16,
    bio: 'Dr. Rahul Mehta is dedicated to supporting infant development, child nutrition, and adolescent wellness. With a gentle demeanor, he ensures hospital visits are comfortable and encouraging for young patients and their parents.',
    areasOfPractice: [
      'Developmental Milestones & Growth Tracking',
      'Pediatric Respiratory & Allergy Plans',
      'Childhood Immunization Schedules',
      'Nutritional Deficiencies & Dietary Advice',
      'Preventive Pediatric Wellness Care'
    ],
    portrait: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
    availableDays: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    roomNumber: 'Suite 120, Pediatric Pavilion',
    contactEmail: 'dr.rahul.mehta@medorahospital.demo'
  },
  {
    id: 'doc-7',
    slug: 'dr-neha-verma',
    name: 'Dr. Neha Verma',
    title: 'Consultant Medical Oncologist',
    specialty: 'Oncology & Cancer Care',
    departmentSlug: 'oncology',
    departmentName: 'Oncology & Cancer Care',
    experienceYears: 13,
    bio: 'Dr. Neha Verma specializes in targeted medical therapies, early cancer diagnostics, and supportive oncology. She is committed to delivering evidence-based clinical protocols paired with compassionate psychological and nutritional support.',
    areasOfPractice: [
      'Solid Tumor Diagnostics & Staging',
      'Targeted Therapy & Immunotherapy Protocols',
      'Cancer Screening & High-Risk Surveillance',
      'Palliative & Symptom Control Medicine',
      'Multidisciplinary Tumor Board Care'
    ],
    portrait: 'https://images.unsplash.com/photo-1594824813587-f273295280b2?auto=format&fit=crop&w=800&q=80',
    availableDays: ['Wednesday', 'Thursday', 'Saturday'],
    roomNumber: 'Suite 502, Oncology Center',
    contactEmail: 'dr.neha.verma@medorahospital.demo'
  },
  {
    id: 'doc-8',
    slug: 'dr-sameer-khan',
    name: 'Dr. Sameer Khan',
    title: 'Chief of Diagnostic Radiology & Imaging',
    specialty: 'Radiology & Advanced Imaging',
    departmentSlug: 'radiology',
    departmentName: 'Radiology & Advanced Imaging',
    experienceYears: 17,
    bio: 'Dr. Sameer Khan brings deep expertise in multi-modality diagnostic imaging including 3T MRI, high-resolution CT, and ultrasound. He collaborates closely with clinical teams across departments to ensure precise, rapid diagnoses.',
    areasOfPractice: [
      'Neuro-Radiological MRI & CT Interpretation',
      'Musculoskeletal Trauma Imaging',
      'Abdominal & Pelvic Cross-Sectional Studies',
      'High-Resolution Vascular Color Doppler',
      'Low-Dose Radiation Protocol Optimization'
    ],
    portrait: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Friday'],
    roomNumber: 'Suite B1-04, Imaging Department',
    contactEmail: 'dr.sameer.khan@medorahospital.demo'
  }
];

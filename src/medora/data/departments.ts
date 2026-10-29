import type { Department } from '../types/medora';

export const departments: Department[] = [
  {
    id: 'dept-1',
    slug: 'cardiology',
    name: 'Cardiology',
    shortDesc: 'Comprehensive heart care, preventive screening, and advanced cardiac diagnostics.',
    description: 'Our cardiology department offers advanced diagnostics and personalized treatment options for all types of cardiovascular conditions, backed by experienced specialists and state-of-the-art telemetry.',
    category: 'Internal Medicine',
    iconName: 'Heart',
    heroImage: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1200&q=80',
    overview: 'The Cardiology Institute at Medora provides non-invasive diagnostic evaluations, interventional cardiology consultations, arrhythmia management, and heart failure rehabilitation. We emphasize early cardiovascular screening and holistic lifestyle counseling alongside modern medical therapies.',
    services: [
      'Comprehensive Cardiac Consultations & Risk Assessments',
      'Digital 12-Lead ECG & Holter Rhythm Monitoring',
      '2D & 3D Transthoracic Echocardiography',
      'Treadmill Exercise Stress Testing (TMT)',
      'Hypertension & Dyslipidemia Management Clinics',
      'Post-Angioplasty & Bypass Rehabilitation Support'
    ],
    conditions: [
      'Coronary Artery Disease',
      'Hypertension (High Blood Pressure)',
      'Cardiac Arrhythmias & Palpitations',
      'Heart Valve Disorders',
      'Congestive Heart Failure',
      'Atherosclerosis & Hyperlipidemia'
    ],
    doctorSlugs: ['dr-sarah-khan'],
    faqs: [
      {
        question: 'What should I bring to a cardiology consultation?',
        answer: 'Please bring your previous ECG reports, blood test results (especially lipid profiles), a complete list of current medications, and any relevant hospital discharge summaries.'
      },
      {
        question: 'How do I prepare for a treadmill stress test (TMT)?',
        answer: 'Wear comfortable walking clothes and running shoes. Avoid large meals and caffeinated beverages for 3 hours before the test. Continue your standard medications unless instructed otherwise.'
      }
    ]
  },
  {
    id: 'dept-2',
    slug: 'orthopedics',
    name: 'Orthopedics & Joint Care',
    shortDesc: 'Advanced bone, joint, and spine care, sports injury recovery, and mobility restoration.',
    description: 'Expert treatment for musculoskeletal trauma, joint degeneration, sports injuries, and complex spinal disorders using minimally invasive techniques.',
    category: 'Surgical Specialties',
    iconName: 'Bone',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    overview: 'The Orthopedic Center combines surgical precision with focused physical rehabilitation. Our specialists care for conditions affecting the knee, hip, shoulder, elbow, foot, and spine, striving to restore pain-free functional mobility for patients of all ages.',
    services: [
      'Total & Partial Knee and Hip Arthroplasty Consultations',
      'Arthroscopic Keyhole Surgery for Ligament Tears (ACL/PCL)',
      'Rotator Cuff & Shoulder Impingement Management',
      'Fracture Care & Musculoskeletal Trauma Stabilization',
      'Non-Surgical Osteoarthritis Therapy & Joint Injections',
      'Post-Operative Orthopedic Physiotherapy Planning'
    ],
    conditions: [
      'Osteoarthritis & Inflammatory Arthritis',
      'ACL, Meniscal & Sports Ligament Tears',
      'Cervical & Lumbar Disc Herniation',
      'Carpal Tunnel & Repetitive Strain Syndromes',
      'Bone Fractures & Dislocations',
      'Osteoporosis & Fragility Management'
    ],
    doctorSlugs: ['dr-amit-sharma'],
    faqs: [
      {
        question: 'When is joint replacement surgery considered necessary?',
        answer: 'Joint replacement is typically evaluated when chronic severe pain impairs daily mobility and conservative treatments (such as medication, physiotherapy, and lifestyle modification) no longer provide adequate relief.'
      },
      {
        question: 'Can sports ligament tears heal without open surgery?',
        answer: 'Many minor or partial tears respond well to dedicated physical therapy, bracing, and targeted strengthening. Complete tears or high-demand athletic goals may warrant arthroscopic reconstruction.'
      }
    ]
  },
  {
    id: 'dept-3',
    slug: 'neurology',
    name: 'Neurology & Spine Care',
    shortDesc: 'Specialized care for neurological disorders, migraines, stroke recovery, and epilepsy.',
    description: 'Comprehensive assessment and evidence-based therapeutic programs for disorders of the central and peripheral nervous systems.',
    category: 'Internal Medicine',
    iconName: 'Brain',
    heroImage: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    overview: 'Our Neurology Department treats complex neurological conditions through high-resolution neuro-imaging, clinical electrophysiology, and multidisciplinary neuro-rehabilitation. We work closely with neuroradiologists to ensure accurate, timely diagnosis.',
    services: [
      'Comprehensive Neurological Examinations & Cognitive Screenings',
      'Digital Video Electroencephalography (EEG)',
      'Nerve Conduction Studies & Electromyography (NCS/EMG)',
      'Headache & Intractable Migraine Protocols',
      'Stroke Post-Acute Care & Secondary Prevention',
      'Movement Disorder & Parkinsonism Evaluations'
    ],
    conditions: [
      'Chronic Migraines & Cluster Headaches',
      'Epilepsy & Seizure Disorders',
      'Ischemic Stroke & Transient Ischemic Attacks (TIA)',
      'Peripheral Neuropathies & Radiculopathy',
      'Multiple Sclerosis & Neuro-inflammatory Disorders',
      'Tremors & Parkinsonian Syndromes'
    ],
    doctorSlugs: ['dr-priya-nair'],
    faqs: [
      {
        question: 'How is an EEG test performed?',
        answer: 'An EEG is a painless, non-invasive procedure where small electrodes are placed on the scalp to measure electrical activity in brain cells. It usually takes between 30 to 60 minutes.'
      },
      {
        question: 'When should someone seek medical attention for frequent headaches?',
        answer: 'Sudden severe headaches, headaches accompanied by vision changes, numbness, weakness, confusion, or those waking you from sleep should be medically evaluated promptly.'
      }
    ]
  },
  {
    id: 'dept-4',
    slug: 'gynecology',
    name: 'Gynecology & Obstetrics',
    shortDesc: "Compassionate women's health, maternity care, and minimally invasive wellness solutions.",
    description: "Dedicated to supporting women's reproductive health, prenatal well-being, preventative screenings, and minimally invasive gynecologic procedures.",
    category: 'Women & Children',
    iconName: 'UserCheck',
    heroImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    overview: "The Department of Gynecology & Obstetrics at Medora provides compassionate, individualized care across every milestone of a woman's life. From adolescent gynecology and prenatal monitoring to menopausal transitions, our clinical team prioritizes patient comfort and privacy.",
    services: [
      'Routine Well-Woman Preventive Screenings & Pap Smears',
      'Comprehensive Antenatal & Postnatal Mother-Baby Care',
      'High-Resolution Obstetric & Gynecologic Ultrasound',
      'PCOS, Endometriosis & Menstrual Irregularity Management',
      'Minimally Invasive Hysteroscopy & Laparoscopy Consultations',
      'Perimenopause & Menopausal Health Support'
    ],
    conditions: [
      'Polycystic Ovary Syndrome (PCOS)',
      'Endometriosis & Chronic Pelvic Pain',
      'Uterine Fibroids & Polyps',
      'High-Risk Pregnancy Factors',
      'Menstrual Disorders & Heavy Bleeding',
      'Pelvic Organ Prolapse'
    ],
    doctorSlugs: ['dr-ananya-singh'],
    faqs: [
      {
        question: 'How often should women schedule routine gynecological checkups?',
        answer: 'Annual well-woman consultations are generally recommended for reproductive health checkups, pelvic assessments, and age-appropriate cervical cancer screening.'
      },
      {
        question: 'What is included in antenatal care packages?',
        answer: 'Antenatal care includes regular blood pressure and growth checks, ultrasound imaging, blood screenings, nutritional advice, and birth preparation guidance.'
      }
    ]
  },
  {
    id: 'dept-5',
    slug: 'pediatrics',
    name: 'Pediatrics & Neonatal Care',
    shortDesc: 'Gentle, friendly healthcare for infants, children, and growing adolescents.',
    description: 'Providing caring and expert healthcare tailored for babies, young children, and teenagers in a welcoming, family-centered clinical space.',
    category: 'Women & Children',
    iconName: 'Baby',
    heroImage: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80',
    overview: 'The Pediatric Pavilion at Medora offers a child-friendly environment designed to minimize anxiety for young patients and their families. Our pediatricians emphasize preventive pediatric health, developmental tracking, and timely childhood immunizations.',
    services: [
      'Well-Baby Clinics & Infant Growth Milestone Assessments',
      'Comprehensive Childhood Immunization & Vaccination Schedules',
      'Pediatric Respiratory & Asthma Action Plans',
      'Childhood Nutrition & Weight Management Guidance',
      'Neonatal Jaundice Monitoring & Outpatient Follow-up',
      'Adolescent Health & Developmental Screenings'
    ],
    conditions: [
      'Pediatric Asthma, Bronchitis & Allergies',
      'Childhood Infectious Fevers & Viral Illnesses',
      'Nutritional Deficiencies & Failure to Thrive',
      'Gastroenteritis & Pediatric Dehydration',
      'Eczema & Childhood Skin Rashes',
      'Developmental Speech & Motor Delays'
    ],
    doctorSlugs: ['dr-rahul-mehta'],
    faqs: [
      {
        question: 'What vaccines does my child need during early childhood?',
        answer: 'Children require standardized vaccines according to pediatric immunization guidelines, including DTaP, MMR, Polio, Hib, Rotavirus, and Hepatitis series. Your pediatrician will provide an updated tracker.'
      },
      {
        question: 'How can I prepare my toddler for a hospital checkup?',
        answer: 'Talk positively about the doctor, bring a favorite toy or blanket, and explain that the doctor is a friendly helper who counts heartbeats and checks ears.'
      }
    ]
  },
  {
    id: 'dept-6',
    slug: 'oncology',
    name: 'Oncology & Cancer Care',
    shortDesc: 'Compassionate cancer care with targeted therapies, screening, and patient support.',
    description: 'A multi-disciplinary cancer care unit focusing on early detection, evidence-based targeted medical therapies, and supportive oncology.',
    category: 'Surgical Specialties',
    iconName: 'Activity',
    heroImage: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1200&q=80',
    overview: 'The Oncology Care Team provides patient-centered cancer evaluations and therapeutic plans. Working alongside pathologists, surgical oncologists, and nutritionists, our medical oncologists develop tailored treatment courses while emphasizing patient comfort and dignity.',
    services: [
      'Early Cancer Screening & Biomarker Diagnostic Workups',
      'Medical Oncology Consultations & Second Opinions',
      'Day-Care Chemotherapy & Targeted Immunotherapy Suites',
      'Genetic Cancer Risk Assessments & Family Counseling',
      'Comprehensive Pain & Palliative Supportive Medicine',
      'Nutritional & Psychological Patient Support Services'
    ],
    conditions: [
      'Breast Cancer & Gynecologic Malignancies',
      'Colorectal & Gastrointestinal Cancers',
      'Lung Cancers & Thoracic Tumors',
      'Lymphomas & Hematologic Blood Disorders',
      'Prostate & Urologic Cancers',
      'Metastatic Disease Support'
    ],
    doctorSlugs: ['dr-neha-verma'],
    faqs: [
      {
        question: 'What is involved in an initial oncology consultation?',
        answer: 'The oncologist reviews biopsy findings, imaging scans, and laboratory reports to discuss staging, explain evidence-based treatment avenues, and answer family questions in depth.'
      },
      {
        question: 'Are cancer screenings beneficial for people without symptoms?',
        answer: 'Yes, routine mammograms, colonoscopies, and low-dose CT scans can detect pre-cancerous cellular changes and early-stage tumors when they are most treatable.'
      }
    ]
  },
  {
    id: 'dept-7',
    slug: 'gastroenterology',
    name: 'Gastroenterology & Endoscopy',
    shortDesc: 'Comprehensive care for the digestive system, liver, pancreas, and gastrointestinal tract.',
    description: 'Modern diagnostic endoscopy and clinical management of acute and chronic gastrointestinal, liver, and biliary disorders.',
    category: 'Internal Medicine',
    iconName: 'ShieldAlert',
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    overview: 'The Gastroenterology Center provides complete evaluations for upper and lower gastrointestinal concerns. With advanced endoscopic suites and strict disinfection protocols, we help patients overcome chronic digestive discomfort and maintain metabolic liver health.',
    services: [
      'Upper Gastrointestinal Endoscopy (Gastroscopy)',
      'Preventive Diagnostic & Therapeutic Colonoscopy',
      'Irritable Bowel Syndrome (IBS) Management Protocols',
      'Non-Alcoholic Fatty Liver Disease (NAFLD) Clinics',
      'Gastroesophageal Reflux Disease (GERD) Assessments',
      'Nutritional Consultation for Food Intolerances'
    ],
    conditions: [
      'Gastroesophageal Reflux (Acid Reflux/GERD)',
      'Peptic Ulcer Disease & H. Pylori Infections',
      'Irritable Bowel Syndrome & Chronic Constipation',
      'Fatty Liver Disease & Hepatitis Panels',
      'Gallbladder Stones & Biliary Colic',
      'Inflammatory Bowel Disease (Crohn’s / Ulcerative Colitis)'
    ],
    doctorSlugs: ['dr-rajesh-verma'],
    faqs: [
      {
        question: 'How should I prepare for a diagnostic colonoscopy?',
        answer: 'Proper bowel preparation is critical. You will follow a clear liquid diet the day prior and consume the prescribed bowel-cleansing solution as detailed in your prep instructions.'
      },
      {
        question: 'What lifestyle modifications alleviate persistent acid reflux?',
        answer: 'Avoiding late-night meals, reducing spicy or fatty trigger foods, elevating the head of the bed, and maintaining a healthy weight significantly improve symptoms.'
      }
    ]
  },
  {
    id: 'dept-8',
    slug: 'general-medicine',
    name: 'General Medicine & Family Health',
    shortDesc: 'Primary healthcare for individuals and families, preventive health, and chronic care.',
    description: 'Your trusted first point of contact for routine checkups, acute medical illnesses, lifestyle disorders, and long-term wellness.',
    category: 'Internal Medicine',
    iconName: 'Stethoscope',
    heroImage: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=80',
    overview: 'General Medicine provides comprehensive, compassionate clinical care for patients of all ages. From seasonal viral illnesses to lifelong conditions like diabetes and hypertension, our internists serve as your dedicated partners in maintaining vitality.',
    services: [
      'Annual Executive Health Checkups & Blood Profiles',
      'Diabetes Mellitus Diagnostic & Titration Clinics',
      'Hypertension & Metabolic Syndrome Screenings',
      'Acute Illness Evaluations (Fever, Infections, Coughs)',
      'Adult Vaccinations & Travel Immunization Advice',
      'Holistic Lifestyle, Sleep & Preventative Counseling'
    ],
    conditions: [
      'Type 1 & Type 2 Diabetes Mellitus',
      'Metabolic Syndrome & Weight Imbalances',
      'Acute Infectious Fevers & Dengue / Malaria',
      'Upper & Lower Respiratory Tract Infections',
      'Thyroid Dysfunction (Hypo/Hyperthyroidism)',
      'Fatigue, Anemia & Micronutrient Deficiencies'
    ],
    doctorSlugs: ['dr-rajesh-verma'],
    faqs: [
      {
        question: 'What is included in an annual executive wellness checkup?',
        answer: 'It includes a complete blood count, lipid profile, liver and kidney functional markers, HbA1c, thyroid panel, resting ECG, chest radiography, and a physician review.'
      },
      {
        question: 'When should I visit a general physician versus an emergency room?',
        answer: 'General physicians handle colds, fevers, aches, rash assessments, and chronic illnesses. Immediate emergency care is needed for chest pain, difficulty breathing, severe bleeding, or acute trauma.'
      }
    ]
  },
  {
    id: 'dept-9',
    slug: 'dermatology',
    name: 'Dermatology & Skin Wellness',
    shortDesc: 'Clinical care for skin, hair, and nail health, acne management, and allergy diagnostics.',
    description: 'Evidence-based clinical treatments for dermatological conditions, eczema, psoriasis, skin allergies, and preventative dermatologic health.',
    category: 'Diagnostics & Other',
    iconName: 'Sparkles',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    overview: 'The Dermatology Department combines medical dermatology with patient-first aesthetic care. Our dermatologists treat complex inflammatory skin diseases and offer early dermoscopic skin cancer surveillance.',
    services: [
      'Comprehensive Dermoscopic Skin Examinations',
      'Acne & Post-Inflammatory Hyperpigmentation Protocols',
      'Eczema, Psoriasis & Chronic Dermatitis Therapies',
      'Contact Dermatitis Allergy Testing & Patch Assessments',
      'Alopecia & Hair Fall Clinical Evaluations',
      'Minor Skin Biopsies & Cryotherapy for Benign Lesions'
    ],
    conditions: [
      'Severe & Hormonal Acne Vulgaris',
      'Atopic Dermatitis & Eczema Flares',
      'Psoriasis & Scalp Plaques',
      'Alopecia Areata & Telogen Effluvium',
      'Fungal & Bacterial Cutaneous Infections',
      'Pre-cancerous Actinic Keratosis'
    ],
    doctorSlugs: ['dr-sarah-khan'],
    faqs: [
      {
        question: 'How can I prevent chronic acne flare-ups?',
        answer: 'Use non-comedogenic cleansers, avoid picking at lesions, use daily broad-spectrum sunscreen, and consult a dermatologist for personalized topical or oral prescription therapies.'
      },
      {
        question: 'What causes sudden hair thinning and shedding?',
        answer: 'Acute shedding is frequently triggered by nutritional deficiencies (iron, vitamin D), thyroid imbalances, recent fever, or high physical stress (telogen effluvium).'
      }
    ]
  },
  {
    id: 'dept-10',
    slug: 'radiology',
    name: 'Radiology & Advanced Imaging',
    shortDesc: 'High-resolution MRI, multi-slice CT, ultrasound, and digital radiography for precise diagnosis.',
    description: 'Equipped with ultra-low radiation CT scanners, 3T MRI, and high-definition color Doppler ultrasound for swift, pinpoint diagnostic imaging.',
    category: 'Diagnostics & Other',
    iconName: 'Layers',
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    overview: 'The Department of Radiology operates around the clock to support all clinical and surgical specialties. By pairing advanced imaging technology with board-certified radiologic interpretation, we guarantee rapid turnaround times for both emergency and outpatient diagnostics.',
    services: [
      'High-Field 3.0 Tesla Magnetic Resonance Imaging (MRI)',
      '128-Slice Low-Dose Computed Tomography (CT)',
      'High-Resolution Color Doppler Vascular Ultrasonography',
      'Direct Digital Radiography (X-Ray) with Instant Tele-Reporting',
      'Ultrasound-Guided Soft Tissue & Joint Aspirations',
      'Dual-Energy X-ray Absorptiometry (DEXA Bone Densitometry)'
    ],
    conditions: [
      'Cranial, Spinal & Musculoskeletal Trauma',
      'Vascular Thrombosis & Arterial Stenosis',
      'Abdominal & Pelvic Acute Inflammations',
      'Bone Fractures & Degenerative Joint Disease',
      'Pulmonary Infiltrates & Pneumonia Screenings',
      'Osteopenia & Osteoporotic Fragility Risks'
    ],
    doctorSlugs: ['dr-sameer-khan'],
    faqs: [
      {
        question: 'Is fasting required before an abdominal ultrasound?',
        answer: 'Yes, patients are asked to fast for 6 to 8 hours prior to an upper abdominal ultrasound to minimize intestinal gas and allow optimal visualization of the gallbladder and liver.'
      },
      {
        question: 'Can patients with metal implants undergo an MRI scan?',
        answer: 'Safety depends on the specific implant material. Modern titanium surgical pins are usually MRI-conditional, but pacemakers and certain metallic clips require prior clearance from our radiologist.'
      }
    ]
  },
  {
    id: 'dept-11',
    slug: 'pulmonology',
    name: 'Pulmonology & Respiratory Medicine',
    shortDesc: 'Specialized diagnosis and management of asthma, chronic cough, and respiratory wellness.',
    description: 'Dedicated to preserving lung capacity and respiratory health through digital spirometry, allergy assessments, and modern inhaler therapy education.',
    category: 'Internal Medicine',
    iconName: 'Activity',
    heroImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    overview: 'Our Pulmonology Clinic manages disorders affecting the trachea, bronchi, lungs, and pleura. We emphasize preventive respiratory care, smoking cessation guidance, and customized allergy desensitization.',
    services: [
      'Computerized Spirometry & Pulmonary Function Testing (PFT)',
      'Bronchial Asthma & Chronic Bronchitis Clinics',
      'Post-COVID Respiratory Recovery & Rehabilitation',
      'Obstructive Sleep Apnea (OSA) Screenings',
      'Allergy Skin Prick Testing & Environmental Counseling',
      'Chest Physiotherapy & Inhalation Technique Optimization'
    ],
    conditions: [
      'Bronchial Asthma & Exercise-Induced Bronchospasm',
      'Chronic Obstructive Pulmonary Disease (COPD)',
      'Interstitial Lung Diseases (ILD)',
      'Pneumonia & Pleural Effusions',
      'Chronic Unexplained Cough & Wheezing',
      'Snoring & Obstructive Sleep Apnea'
    ],
    doctorSlugs: ['dr-rajesh-verma'],
    faqs: [
      {
        question: 'What is a Spirometry lung function test?',
        answer: 'Spirometry measures how much air you can inhale and how quickly you can exhale. It is a quick breathing test used to diagnose asthma and COPD.'
      },
      {
        question: 'Are asthma inhalers habit-forming?',
        answer: 'No. Inhalers deliver micro-doses of medication straight to the bronchial airways where it is needed, minimizing systemic side effects compared to oral pills.'
      }
    ]
  },
  {
    id: 'dept-12',
    slug: 'urology',
    name: 'Urology & Kidney Care',
    shortDesc: 'Comprehensive care for urinary tract conditions, kidney stones, and prostate health.',
    description: 'Providing advanced diagnostic and minimally invasive therapeutic management for conditions affecting the kidneys, ureters, bladder, and male reproductive system.',
    category: 'Surgical Specialties',
    iconName: 'ShieldCheck',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    overview: 'The Urology Center offers comprehensive evaluation for kidney stone prevention, urinary infections, and prostate wellness. We utilize non-invasive ultrasound and metabolic workups to formulate individualized long-term care plans.',
    services: [
      'Kidney Stone Evaluation & Metabolic Prevention Clinics',
      'Prostate Health Checkups & Uroflowmetry Testing',
      'Recurrent Urinary Tract Infection (UTI) Protocols',
      'Bladder Overactivity & Incontinence Consultations',
      'Minimally Invasive Endourology Second Opinions',
      'Kidney Function & Hydration Optimization Guidance'
    ],
    conditions: [
      'Renal & Ureteral Calculi (Kidney Stones)',
      'Benign Prostatic Hyperplasia (Enlarged Prostate)',
      'Recurrent Urinary Tract Infections',
      'Overactive Bladder & Urinary Urgency',
      'Hematuria (Blood in Urine) Assessments',
      'Urethral Strictures'
    ],
    doctorSlugs: ['dr-amit-sharma'],
    faqs: [
      {
        question: 'What causes kidney stones to form repeatedly?',
        answer: 'Chronic dehydration, high sodium or animal protein intake, and genetic metabolic factors can cause minerals to crystallize in the kidneys. Metabolic urine testing helps pinpoint the exact cause.'
      },
      {
        question: 'What is Uroflowmetry?',
        answer: 'It is a simple, non-invasive test measuring the volume and speed of urine flow over time to evaluate bladder and prostate obstruction.'
      }
    ]
  }
];

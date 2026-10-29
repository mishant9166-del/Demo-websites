import type { VetService } from '../types/vet';

export const VET_SERVICES: VetService[] = [
  {
    id: 'srv-1',
    slug: 'general-consultations',
    name: 'General Consultations & Exams',
    title: 'General Consultations & Exams',
    shortDescription:
      'Unhurried nose-to-tail health examinations assessing heart sounds, joint flexibility, coat condition, and vital reflexes.',
    shortDesc:
      'Unhurried nose-to-tail health examinations assessing heart sounds, joint flexibility, coat condition, and vital reflexes.',
    category: 'Consultation',
    duration: '35 mins',
    durationMinutes: '35 mins',
    detailedDescription:
      'Every thorough consultation begins with building calm trust. We examine your companion in a gentle, treat-forward environment, listening to heart and lung sounds, palpating abdominal organs, inspecting oral health, and discussing subtle shifts in energy, mobility, or appetite.',
    overview:
      'Every thorough consultation begins with building calm trust. We examine your companion in a gentle, treat-forward environment, listening to heart and lung sounds, palpating abdominal organs, inspecting oral health, and discussing subtle shifts in energy, mobility, or appetite.',
    image:
      'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Stethoscope',
    tags: ['Physical Exam', 'Heart Auscultation', 'Vital Signs', 'Abdominal Palpation'],
    whatToExpect: [
      'Warm greeting on non-slip yoga mats or comfortable lap seating',
      'Gentle weight assessment and baseline vital signs check',
      'Ophthalmoscopic eye and otoscopic ear examination',
      'Cardiac auscultation with specialized pediatric stethoscope',
      'Open discussion about diet, behavioral changes, and daily exercise',
    ],
    includedInCare: [
      'Comprehensive ocular, otoscopic, and oral inspection',
      'Cardiac and pulmonary auscultation',
      'Musculoskeletal and spinal mobility assessment',
    ],
    preparation:
      'Bring your pet on a hungry stomach so they eagerly accept our tasty liver or lick-mat rewards. Please write down any current supplements or recent subtle behavioral changes.',
    preparationTips: [
      'Bring high-value soft treats',
      'Note any subtle behavioral or appetite changes',
    ],
    recommendedFor: 'All dogs, cats, and small animals annually',
    recommendedAge: 'All ages (puppy to senior)',
    faqs: [
      {
        question: 'How long does a general consultation last?',
        answer:
          'Our standard appointment is scheduled for 35 minutes—nearly twice the typical clinic average. This gives nervous animals time to acclimate before physical checks begin.',
      },
      {
        question: 'Can you examine my anxious dog on the floor?',
        answer:
          'Yes, absolutely! We routinely examine larger or timid dogs on padded floor mats so they never feel trapped high on cold stainless steel examination tables.',
      },
    ],
  },
  {
    id: 'srv-2',
    slug: 'vaccinations',
    name: 'Vaccinations & Boosters',
    title: 'Vaccinations & Boosters',
    shortDescription:
      'Tailored immunization protocols balancing essential disease protection with your companion’s lifestyle.',
    shortDesc:
      'Tailored immunization protocols balancing essential disease protection with your companion’s lifestyle.',
    category: 'Preventive',
    duration: '25 mins',
    durationMinutes: '25 mins',
    detailedDescription:
      'Vaccines safeguard our companions against dangerous viral and bacterial diseases. We assess each pet individually, administering core inoculations (Rabies, Distemper, Parvovirus, Feline Panleukopenia) and recommending lifestyle protections (Bordetella, Leptospirosis, Lyme) only when indicated.',
    overview:
      'Vaccines safeguard our companions against dangerous viral and bacterial diseases. We assess each pet individually, administering core inoculations and recommending lifestyle protections only when indicated.',
    image:
      'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80',
    iconName: 'ShieldCheck',
    tags: ['Core Vaccines', 'Rabies', 'DHPP / FVRCP', 'Lifestyle Protection'],
    whatToExpect: [
      'Pre-vaccination health assessment to ensure animal is fever-free',
      'Administration using ultra-fine pediatric needles to minimize discomfort',
      'Treat distraction and gentle tactile soothing throughout',
      'Digital vaccine certificate issued with batch lot numbers and renewal dates',
    ],
    includedInCare: [
      'Pre-vaccine vitals check',
      'Core & lifestyle vaccination administration',
      'Digital vaccine passport documentation',
    ],
    preparation:
      'Bring any historical vaccine certificates or adoption papers so we can avoid repeating recently administered boosters.',
    preparationTips: [
      'Bring adoption records or previous vaccine logs',
      'Keep companion calm during the drive',
    ],
    recommendedFor: 'Puppies, kittens, and adult companions',
    recommendedAge: '6 weeks onwards',
    faqs: [
      {
        question: 'What is the difference between core and lifestyle vaccines?',
        answer:
          'Core vaccines protect against severe, widespread diseases that all animals should be shielded from. Lifestyle vaccines depend on whether your dog hikes in deer country, boards at daycares, or lives strictly indoors.',
      },
      {
        question: 'Are there side effects after vaccination?',
        answer:
          'Most pets feel slightly sleepy for 24 hours. Mild soreness at the injection site is normal and usually resolves with quiet rest and cuddles.',
      },
    ],
  },
  {
    id: 'srv-3',
    slug: 'preventive-health-checks',
    name: 'Preventive Health Checks',
    title: 'Preventive Health Checks',
    shortDescription:
      'Early detection screenings, baseline lab diagnostics, and proactive vitality assessments before symptoms emerge.',
    shortDesc:
      'Early detection screenings, baseline lab diagnostics, and proactive vitality assessments before symptoms emerge.',
    category: 'Preventive',
    duration: '40 mins',
    durationMinutes: '40 mins',
    detailedDescription:
      'Companion animals are experts at masking discomfort until conditions are advanced. Our preventive wellness screenings combine comprehensive physical checks with baseline blood panels, urinalysis, and blood pressure monitoring to catch metabolic and kidney changes at their earliest stages.',
    overview:
      'Companion animals are experts at masking discomfort until conditions are advanced. Our preventive wellness screenings combine comprehensive physical checks with baseline blood panels.',
    image:
      'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Heart',
    tags: ['Wellness Screening', 'Baseline Lab Panel', 'Blood Pressure', 'Organ Function'],
    whatToExpect: [
      'Detailed body condition score and muscle mass evaluation',
      'Gentle blood draw with minimal butterfly needle technique',
      'Blood pressure screening using high-definition Doppler ultrasound',
      'Clear, written lab report explaining organ health in plain English',
    ],
    includedInCare: [
      'Complete physical examination',
      'Biochemical blood panel and complete blood count',
      'Personalized vitality consultation',
    ],
    preparation:
      'A 6-hour mild fast is helpful for fasting blood sugar and lipid profiles, but always provide fresh water right up to the appointment.',
    preparationTips: [
      'Mild 6-hour fast prior to blood draw',
      'Always allow free access to fresh water',
    ],
    recommendedFor: 'Adult & maturing pets annually',
    recommendedAge: 'Adult (1–6 years)',
    faqs: [
      {
        question: 'Why perform bloodwork on a pet that looks perfectly healthy?',
        answer:
          'Baseline bloodwork establishes your companion’s personal normal values. When they are unwell later, we compare tests against their own healthy baseline rather than generic population averages.',
      },
    ],
  },
  {
    id: 'srv-4',
    slug: 'dental-care',
    name: 'Dental Care & Oral Hygiene',
    title: 'Dental Care & Oral Hygiene',
    shortDescription:
      'Gentle dental examinations, ultrasonic scaling, digital dental radiography, and at-home brushing coaching.',
    shortDesc:
      'Gentle dental examinations, ultrasonic scaling, digital dental radiography, and at-home brushing coaching.',
    category: 'Dental',
    duration: '30 mins (Exam) / 2 hrs (Cleaning)',
    durationMinutes: '30 mins',
    detailedDescription:
      'Over 75% of dogs and cats exhibit periodontal disease by three years of age. Chronic mouth pain often manifests subtly as reduced playfulness or bad breath. We provide conscious oral checks, dental cleanings under safe anesthesia, and practical home dental care coaching.',
    overview:
      'Over 75% of dogs and cats exhibit periodontal disease by three years of age. We provide conscious oral checks and dental cleanings under safe anesthesia.',
    image:
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Smile',
    tags: ['Oral Exam', 'Plaque & Tartar', 'Digital X-Rays', 'At-Home Coaching'],
    whatToExpect: [
      'Gingival inflammation and periodontal grading assessment',
      'Demonstration of pet-safe enzymatic toothpaste application',
      'Itemized dental estimate if professional ultrasonic cleaning is advised',
      'Review of dental chew toys and veterinary oral health council (VOHC) products',
    ],
    includedInCare: [
      'Comprehensive conscious oral check',
      'Plaque score grading',
      'At-home preventive oral care guide',
    ],
    preparation:
      'No special preparation is required for the initial conscious dental consultation. Simply bring note of any chewing hesitancy or head shyness.',
    preparationTips: [
      'Observe if pet drops kibble or avoids chew toys',
      'Bring pet’s current chew toys or treats for vet review',
    ],
    recommendedFor: 'Pets with tartar buildup, bad breath, or chewing difficulty',
    recommendedAge: '2 years onwards',
    faqs: [
      {
        question: 'Can you clean teeth without anesthesia?',
        answer:
          'Cosmetic anesthesia-free cleanings only scrape the visible tooth surface while leaving painful bacteria under the gumline where 80% of dental disease occurs. Safe, monitored anesthesia is the gold standard.',
      },
    ],
  },
  {
    id: 'srv-5',
    slug: 'diagnostic-testing',
    name: 'Diagnostic Testing & Imaging',
    title: 'Diagnostic Testing & Imaging',
    shortDescription:
      'In-house laboratory blood analysis, digital radiography, cytology, and ultrasound for swift, accurate answers.',
    shortDesc:
      'In-house laboratory blood analysis, digital radiography, cytology, and ultrasound for swift, accurate answers.',
    category: 'Diagnostics',
    duration: '45 mins',
    durationMinutes: '45 mins',
    detailedDescription:
      'When your companion feels unwell, waiting days for lab results increases worry. Our in-house diagnostic suite delivers complete blood counts, organ chemistry, digital X-rays, and microscopic cytology in under 30 minutes, allowing our team to formulate immediate treatment plans.',
    overview:
      'Our in-house diagnostic suite delivers complete blood counts, organ chemistry, digital X-rays, and microscopic cytology in under 30 minutes.',
    image:
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Activity',
    tags: ['In-House Labs', 'Digital Radiography', 'Ultrasound', 'Same-Day Answers'],
    whatToExpect: [
      'Gentle positioning with lead-free radiologic calming techniques',
      'Same-day results reviewed face-to-face on our clinic view screens',
      'Clear, written interpretation of all lab values with normal benchmarks',
      'Collaborative treatment planning without hidden diagnostic fees',
    ],
    includedInCare: [
      'Fast turnaround laboratory workups',
      'High-resolution digital radiography',
      'Veterinary doctor consultation on findings',
    ],
    preparation:
      'If abdominal imaging is scheduled, keeping your pet fasted for 8 hours helps obtain crisp, clear ultrasound views.',
    preparationTips: [
      'Keep companion fasted if abdominal ultrasound is scheduled',
      'Bring record of previous scans if done at emergency clinics',
    ],
    recommendedFor: 'Illness investigations, limping, lethargy, or chronic monitoring',
    recommendedAge: 'All ages when clinically indicated',
    faqs: [
      {
        question: 'How quickly do we receive test results?',
        answer:
          'Routine in-house bloodwork and digital X-rays are completed while you wait in the room. Specialized biopsy pathology sent to reference labs takes 3–5 business days.',
      },
    ],
  },
  {
    id: 'srv-6',
    slug: 'senior-pet-care',
    name: 'Senior Pet Care & Mobility',
    title: 'Senior Pet Care & Mobility',
    shortDescription:
      'Gentle arthritis management, cognitive wellness support, pain relief protocols, and quality-of-life counseling.',
    shortDesc:
      'Gentle arthritis management, cognitive wellness support, pain relief protocols, and quality-of-life counseling.',
    category: 'Senior Care',
    duration: '45 mins',
    durationMinutes: '45 mins',
    detailedDescription:
      'Older companions give us years of unconditional loyalty. As grey muzzles emerge, we focus on joint comfort, pain-free mobility, early renal screening, environmental home modifications, and mental enrichment so their golden years are joyful and peaceful.',
    overview:
      'Older companions give us years of unconditional loyalty. As grey muzzles emerge, we focus on joint comfort, pain-free mobility, and cognitive wellness.',
    image:
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Sparkles',
    tags: ['Arthritis Assessment', 'Mobility & Joints', 'Cognitive Support', 'Pain Management'],
    whatToExpect: [
      'Detailed orthopedic range-of-motion and spinal flexibility check',
      'Quality of life scale scoring tailored to your pet’s favorite routines',
      'Multi-modal pain management plan (supplements, modern monoclonal antibodies, NSAIDs)',
      'Recommendations for non-skid rugs, ramps, and orthopedic beds',
    ],
    includedInCare: [
      'Geriatric physical and mobility assessment',
      'Chronic pain grading',
      'Home modification and exercise adaptation guide',
    ],
    preparation:
      'Take a short 10-second smartphone video of your dog rising from a sleep or your cat jumping onto furniture to show our doctor real-world movement.',
    preparationTips: [
      'Film a short video of your pet walking at home',
      'List changes in sleeping patterns or confusion',
    ],
    recommendedFor: 'Dogs 7+ years old and cats 9+ years old',
    recommendedAge: 'Senior & Geriatric',
    faqs: [
      {
        question: 'Is slowing down just a normal part of pet aging?',
        answer:
          'While pets naturally play with less frantic energy as they age, stiff rising, reluctance to climb stairs, and sleeping more are often signs of treatable arthritis pain that we can relieve.',
      },
    ],
  },
  {
    id: 'srv-7',
    slug: 'nutrition-guidance',
    name: 'Nutrition & Weight Guidance',
    title: 'Nutrition & Weight Guidance',
    shortDescription:
      'Evidence-based nutritional counseling for life stages, therapeutic diets, allergy management, and safe weight loss.',
    shortDesc:
      'Evidence-based nutritional counseling for life stages, therapeutic diets, allergy management, and safe weight loss.',
    category: 'Wellness',
    duration: '30 mins',
    durationMinutes: '30 mins',
    detailedDescription:
      'With confusing marketing claims in pet food stores, owners often wonder what truly supports their animal’s health. We provide unbiased, science-grounded feeding plans tailored to puppy growth, digestive sensitivities, renal support, and healthy weight maintenance.',
    overview:
      'We provide unbiased, science-grounded feeding plans tailored to puppy growth, digestive sensitivities, renal support, and healthy weight maintenance.',
    image:
      'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1200&q=80',
    iconName: 'Heart',
    tags: ['Caloric Calculation', 'Life-Stage Diets', 'Food Allergies', 'Weight Management'],
    whatToExpect: [
      'Precise body condition scoring (BCS) and muscle condition assessment',
      'Customized daily caloric target calculation based on activity level',
      'Review of current kibble, wet food, treats, and home-cooked additions',
      'Practical measuring spoon guidelines and healthy low-calorie treat swaps',
    ],
    includedInCare: [
      'Body condition scoring and target weight charting',
      'Custom caloric calculation plan',
      'Transition roadmap for dietary changes',
    ],
    preparation:
      'Take a quick photo of the ingredient label and guaranteed analysis on your pet’s current food bag.',
    preparationTips: [
      'Photograph the ingredient panel of your current pet food',
      'Count the number and types of treats given each day',
    ],
    recommendedFor: 'Overweight companions, pets with digestive issues, growing pups',
    recommendedAge: 'All life stages',
    faqs: [
      {
        question: 'How do I know if my dog or cat is overweight?',
        answer:
          'You should easily feel your pet’s ribs under a gentle blanket of skin without pressing hard, and see a distinct waistline when looking down from above.',
      },
    ],
  },
  {
    id: 'srv-8',
    slug: 'parasite-prevention',
    name: 'Parasite Prevention & Screenings',
    title: 'Parasite Prevention & Screenings',
    shortDescription:
      'Year-round protection strategies against fleas, ticks, heartworms, and intestinal parasites for household health.',
    shortDesc:
      'Year-round protection strategies against fleas, ticks, heartworms, and intestinal parasites for household health.',
    category: 'Preventive',
    duration: '20 mins',
    durationMinutes: '20 mins',
    detailedDescription:
      'Parasites cause uncomfortable itching, transmit systemic tick-borne illnesses (Lyme, Anaplasmosis), and can pose zoonotic risks to human family members. We prescribe modern, highly effective oral chews and topical solutions matched to your pet’s exact weight and habits.',
    overview:
      'We prescribe modern, highly effective oral chews and topical solutions matched to your pet’s exact weight and habits.',
    image:
      'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=1200&q=80',
    iconName: 'ShieldCheck',
    tags: ['Flea & Tick', 'Heartworm Antigen', 'Fecal Floatation', 'Zoonotic Safety'],
    whatToExpect: [
      'Fast, gentle in-house heartworm and tick-borne antigen test',
      'Microscopic fecal examination for intestinal parasites and Giardia',
      'Selection of safe, palatable monthly or quarterly preventative chews',
      'Personalized reminder setup so you never miss a seasonal dose',
    ],
    includedInCare: [
      'Heartworm blood screening',
      'Intestinal parasite evaluation',
      'Preventive medication prescription',
    ],
    preparation:
      'Bringing a small, fresh (less than 12 hours old) stool sample in a clean zip-top bag is very helpful for fecal testing.',
    preparationTips: [
      'Collect a fresh fecal sample the morning of the exam',
      'Note previous reactions to topical flea medications',
    ],
    recommendedFor: 'All active outdoor dogs, indoor cats, and puppies/kittens',
    recommendedAge: '8 weeks onwards',
    faqs: [
      {
        question: 'Do indoor cats really need parasite prevention?',
        answer:
          'Yes! Fleas frequently hitchhike into homes on human socks and shoes, and mosquitoes capable of carrying fatal heartworms easily slip through open doors and window screens.',
      },
    ],
  },
];

export const vetServices = VET_SERVICES;

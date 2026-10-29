import type { Treatment } from '../types/dermora';

export const treatments: Treatment[] = [
  {
    id: 'trt-1',
    slug: 'acne-consultation',
    title: 'Acne Consultation & Management',
    category: 'Skin Health',
    shortDesc: 'A comprehensive evaluation of active blemishes, comedones, and underlying sebaceous patterns to develop an individualized topical or medical plan.',
    heroImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=80',
    overview: 'Acne is a multifaceted skin condition influenced by genetics, hormones, sebaceous lipid composition, and the follicular microbiome. During your consultation, your dermatologist examines inflammatory and non-inflammatory lesions, assesses barrier integrity, and creates a structured routine aimed at calming active breakouts while protecting skin barrier function.',
    commonReasons: [
      'Persistent hormonal cystic blemishes along the jawline and chin',
      'Congested pores, blackheads, and recurrent micro-comedones',
      'Post-inflammatory erythema (red marks) and textural irregularity',
      'Skin sensitivity caused by over-the-counter drying agents',
      'Desire for prescription topical retinoids or systemic guidance'
    ],
    consultationIncludes: [
      'Detailed dermoscopic examination of follicular congestion and skin oiliness',
      'Evaluation of current skincare products and potential pore-clogging triggers',
      'Discussion of medical options (topical retinoids, azelaic acid, or oral therapies)',
      'Customized AM/PM soothing routine plan designed to support barrier recovery'
    ],
    questionsToAsk: [
      'Which topical actives are safest for my specific skin sensitivity level?',
      'How long does an adjustment period typically last when starting a retinoid?',
      'What moisturizers will provide adequate hydration without triggering congestion?'
    ],
    faqs: [
      {
        question: 'Will an acne consultation involve an immediate clinical procedure?',
        answer: 'Our initial appointment focuses on accurate clinical diagnosis and creating an ongoing care plan. In-clinic treatments (such as gentle chemical peels or comedone extractions) are scheduled only when appropriate and safe for your current skin state.'
      },
      {
        question: 'Should I stop using my current skincare products before the appointment?',
        answer: 'Please bring a photo or list of all active cleansers, serums, and treatments you use. You do not need to abruptly stop them unless they cause severe irritation.'
      }
    ],
    durationMinutes: '45 Minutes',
    suitableFor: 'Adults and teenagers experiencing chronic or recurrent facial and body acne.'
  },
  {
    id: 'trt-2',
    slug: 'pigmentation-assessment',
    title: 'Pigmentation & Melasma Assessment',
    category: 'Skin Health',
    shortDesc: 'Precise analysis of sun damage, post-inflammatory hyperpigmentation, and hormonal melasma using polarized illumination.',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    overview: 'Hyperpigmentation occurs when melanocytes overproduce pigment in response to UV exposure, hormonal shifts, or prior cutaneous inflammation. We assess both epidermal and dermal depth to recommend tyrosinase-inhibiting formulations, specialized sun protection protocols, and staged brightening therapies.',
    commonReasons: [
      'Mottled sun spots and lentigines on high-exposure facial areas',
      'Bilateral hormonal melasma patches across the forehead and cheeks',
      'Lingering dark marks following acne resolution',
      'Uneven skin tone and dullness from cumulative photo-exposure'
    ],
    consultationIncludes: [
      'Polarized lighting and wood’s lamp inspection to determine pigment depth',
      'Comprehensive UV defense audit and mineral SPF education',
      'Selection of pigment-modulating actives (Tranexamic acid, Vitamin C, Niacinamide)',
      'Discussion of in-office gentle brightening treatments if clinically suitable'
    ],
    questionsToAsk: [
      'How can I distinguish between hormonal melasma and sun-induced lentigines?',
      'Why does heat (such as saunas or intense workouts) aggravate my pigmentation?',
      'What ingredients should I avoid when treating sensitive pigment-prone skin?'
    ],
    faqs: [
      {
        question: 'Can dark spots be eliminated in a single visit?',
        answer: 'Safe pigment correction requires patience and consistent daily sun protection. Rushing the process with aggressive peeling can trigger rebound hyperpigmentation.'
      }
    ],
    durationMinutes: '45 Minutes',
    suitableFor: 'Individuals seeking clarity on dark spots, uneven tone, or melasma patches.'
  },
  {
    id: 'trt-3',
    slug: 'skin-rejuvenation',
    title: 'Non-Ablative Skin Rejuvenation',
    category: 'Cosmetic Dermatology',
    shortDesc: 'Gentle, light-based and microneedling consultation designed to stimulate natural collagen, refine texture, and enhance radiance.',
    heroImage: 'https://images.unsplash.com/photo-1512290900672-1f416d84f23b?auto=format&fit=crop&w=1200&q=80',
    overview: 'Our non-ablative rejuvenation consultations focus on biological skin vitality without harsh peeling or prolonged downtime. We evaluate cellular turnover, dermal thickness, and hydration levels to suggest tailored radiofrequency, microneedling, or vascular light options.',
    commonReasons: [
      'Early loss of skin elasticity and subtle crepey texture',
      'Dull complexion and sluggish cellular turnover',
      'Enlarged pores and irregular surface bounce',
      'Desire for a natural, refreshed appearance without artificial volume'
    ],
    consultationIncludes: [
      'Assessment of cutaneous laxity, fine lines, and hydration reserves',
      'Comparison of treatment modalities (RF microneedling vs. vascular light)',
      'Review of expected recovery timelines, aftercare, and sun restrictions',
      'Formulation of a progressive 3-session clinical plan'
    ],
    questionsToAsk: [
      'What is the difference between ablative and non-ablative rejuvenation?',
      'How does collagen remodeling progress over the weeks following a session?',
      'Are these treatments safe for deeper Fitzpatrick skin types?'
    ],
    durationMinutes: '60 Minutes',
    suitableFor: 'Individuals looking to restore subtle bounce, refine pore appearance, and boost radiance.'
  },
  {
    id: 'trt-4',
    slug: 'chemical-peels',
    title: 'Clinical Chemical Peels',
    category: 'Cosmetic Dermatology',
    shortDesc: 'Carefully measured alpha and beta hydroxy acid solutions tailored to gently dissolve cellular glue and reveal smooth skin.',
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    overview: 'Clinical chemical peels utilize precise concentrations of lactic, mandelic, glycolic, and salicylic acids to accelerate exfoliation in a controlled medical setting. Our dermatologists customize the acid blend to match your skin barrier resilience, avoiding over-exfoliation.',
    commonReasons: [
      'Rough, flaky surface texture and uneven makeup application',
      'Persistent blackheads and superficial pore congestion',
      'Superficial sun spots and post-inflammatory marks',
      'Desire for a gentle, clinical-grade skin reset'
    ],
    consultationIncludes: [
      'Patch assessment of skin barrier reactivity to mild organic acids',
      'Selection of tailored acid formulation (AHA vs BHA vs PHA blends)',
      'Pre-peel conditioning instructions to prepare the stratum corneum',
      'Post-peel lipid recovery protocol and soothing balm guidance'
    ],
    questionsToAsk: [
      'Will my skin visibly peel, or is it a microscopic cellular exfoliation?',
      'How should I prepare my skin in the 5 days leading up to a peel?',
      'How soon after a peel can I resume active ingredients like retinoids?'
    ],
    durationMinutes: '45 Minutes',
    suitableFor: 'Those with dull, rough, or congested skin seeking controlled professional exfoliation.'
  },
  {
    id: 'trt-5',
    slug: 'laser-hair-reduction',
    title: 'Medical Laser Hair Reduction',
    category: 'Cosmetic Dermatology',
    shortDesc: 'Safe, progressive reduction of unwanted hair using medical-grade diode and Nd:YAG wavelengths suitable for diverse skin tones.',
    heroImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80',
    overview: 'Our laser hair reduction consultations pair advanced dual-wavelength technology with personalized fluence settings. By targeting melanin in the active hair bulb (anagen phase) while safeguarding epidermal pigment, we offer safe, long-term reduction across facial and body areas.',
    commonReasons: [
      'Recurrent ingrown hairs and painful folliculitis from shaving or waxing',
      'Hormonally influenced coarse hair growth along chin, neck, or body',
      'Desire for long-term reduction in grooming maintenance',
      'Seeking safe treatment on melanin-rich skin without risk of burns'
    ],
    consultationIncludes: [
      'Skin phototype assessment (Fitzpatrick I-VI) and hair coarseness evaluation',
      'Small test patch to observe immediate epidermal response and comfort',
      'Review of hormonal health factors that may influence hair cycles',
      'Personalized course projection and interval schedule (typically 6-8 sessions)'
    ],
    questionsToAsk: [
      'Why is the Nd:YAG wavelength safer for deeper skin tones?',
      'How do hair growth cycles affect the timing between appointments?',
      'What should I avoid before and immediately following a laser session?'
    ],
    durationMinutes: '30 - 45 Minutes',
    suitableFor: 'Anyone seeking a comfortable, lasting alternative to constant shaving or waxing.'
  },
  {
    id: 'trt-6',
    slug: 'hair-scalp-consultation',
    title: 'Hair & Scalp Health Consultation',
    category: 'Hair & Scalp',
    shortDesc: 'Trichoscopic evaluation of the scalp barrier, follicle density, shedding patterns, and chronic dandruff concerns.',
    heroImage: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80',
    overview: 'Healthy hair growth requires a nourished, balanced scalp micro-environment. Our trichology consultations utilize digital polarized trichoscopy to analyze follicular units, sebum balance, vascular erythema, and hair shaft caliber, formulating evidence-backed restoration roadmaps.',
    commonReasons: [
      'Sudden excessive shedding following illness or high stress (telogen effluvium)',
      'Gradual widening of the hair parting or crown thinning',
      'Chronic flaky scalp, persistent itching, or seborrheic dermatitis',
      'Recurrent scalp tenderness and follicular sensitivity'
    ],
    consultationIncludes: [
      'High-magnification digital trichoscopy across crown, temples, and occiput',
      'Review of relevant blood markers (ferritin, thyroid panel, vitamin D)',
      'Dietary and mechanical hair care audit (tensional styling, heat damage)',
      'Prescription or botanical therapeutic scalp regimen recommendation'
    ],
    questionsToAsk: [
      'Is my shedding related to seasonal cycles, nutritional status, or hormones?',
      'How can I distinguish between ordinary scalp dryness and seborrheic dermatitis?',
      'What topical ingredients have clinical evidence for supporting follicle vitality?'
    ],
    durationMinutes: '50 Minutes',
    suitableFor: 'Individuals noticing changes in hair density, unexpected shedding, or chronic scalp irritation.'
  },
  {
    id: 'trt-7',
    slug: 'anti-ageing-treatments',
    title: 'Graceful Ageing & Collagen Support',
    category: 'Cosmetic Dermatology',
    shortDesc: 'Holistic consultations exploring preventative skincare, antioxidant defense, peptide science, and subtle clinical treatments.',
    heroImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
    overview: 'At DERMORA, our anti-ageing philosophy centers on celebrating longevity and preserving structural skin resilience rather than erasing expression. We examine extracellular matrix changes, glycation factors, and UV degradation to design preventative and restorative interventions.',
    commonReasons: [
      'Softening of the jawline contour and subtle skin laxity',
      'Fine lines around the eyes, forehead, and perioral areas',
      'Dehydrated, thin skin with diminished natural bounce and lipids',
      'Interest in evidence-based preventative skincare without exaggerated results'
    ],
    consultationIncludes: [
      'Analysis of static vs. dynamic facial expression lines and skin thickness',
      'Comprehensive review of topical retinoids, peptides, and barrier lipids',
      'Discussion of non-surgical collagen stimulation modalities',
      'Guidance on lifestyle habits, sleep hygiene, and oxidative stress reduction'
    ],
    questionsToAsk: [
      'What are the most impactful topical ingredients for long-term skin firmness?',
      'At what age is it beneficial to incorporate collagen-supporting clinical treatments?',
      'How can I maintain skin elasticity through dietary and lifestyle choices?'
    ],
    durationMinutes: '50 Minutes',
    suitableFor: 'Adults looking to nurture skin resilience, maintain firmness, and age gracefully.'
  },
  {
    id: 'trt-8',
    slug: 'scar-assessment',
    title: 'Scar Assessment & Texture Refinement',
    category: 'Skin Health',
    shortDesc: 'Clinical evaluation of atrophic, rolling, boxcar, and hypertrophic scars to formulate multi-modality refinement strategies.',
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    overview: 'Scars represent the body’s natural fibrous healing response following tissue trauma or severe acne. Because most individuals have a mixture of scar types (atrophic, tethered, or pigmented), our dermatologists recommend combined modalities such as subcision, microneedling, and fractional light.',
    commonReasons: [
      'Textural depression or rolling scars resulting from past cystic acne',
      'Post-surgical or trauma scars with irregular pigmentation or thickness',
      'Desire to smooth facial texture under directional natural lighting',
      'Seeking realistic, multi-step expectations for scar improvement'
    ],
    consultationIncludes: [
      'Tangential lighting assessment to map scar depth and tethering',
      'Education on the biology of scar remodeling and collagen synthesis',
      'Personalized combination treatment roadmap (staged over several months)',
      'Pre- and post-procedure wound healing optimization protocols'
    ],
    questionsToAsk: [
      'What percentage of textural improvement is realistic for my scar type?',
      'Why is combination therapy usually more effective than a single laser session?',
      'How long does full collagen remodeling continue after a procedure?'
    ],
    durationMinutes: '45 Minutes',
    suitableFor: 'Anyone with post-acne textural irregularities or surgical scars seeking refinement.'
  },
  {
    id: 'trt-9',
    slug: 'sensitive-skin-consultation',
    title: 'Sensitive & Reactive Skin Care',
    category: 'General Dermatology',
    shortDesc: 'Gentle, barrier-first consultations for rosacea, flushing, contact dermatitis, and easily compromised skin.',
    heroImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80',
    overview: 'Sensitive skin often stems from an impaired stratum corneum, elevated trans-epidermal water loss (TEWL), or vascular hyper-reactivity (as seen in rosacea). Our gentle protocol eliminates common irritants, rebuilds essential ceramides, and calms neuro-sensory cutaneous discomfort.',
    commonReasons: [
      'Persistent stinging, burning, or redness when applying skincare products',
      'Facial flushing triggered by temperature changes, spicy food, or stress',
      'Suspected contact allergy to fragrances, preservatives, or botanical oils',
      'Tight, itchy, or chronically dehydrated skin that cannot tolerate actives'
    ],
    consultationIncludes: [
      'Skin barrier integrity testing and detailed ingredient intolerance audit',
      'Assessment for underlying rosacea, perioral dermatitis, or eczema',
      'Minimalist "skin reset" regimen formulation focusing on calming lipids',
      'Guidance on patch testing and slowly reintroducing active ingredients'
    ],
    questionsToAsk: [
      'How can I tell if my barrier is damaged or if I have clinical rosacea?',
      'What ingredients should I look for to soothe immediate facial burning?',
      'How can I protect reactive skin from sun and environmental pollution?'
    ],
    durationMinutes: '45 Minutes',
    suitableFor: 'Individuals with easily flushed, sensitive, stinging, or allergy-prone skin.'
  },
  {
    id: 'trt-10',
    slug: 'general-dermatology',
    title: 'General Dermatology & Skin Health Check',
    category: 'General Dermatology',
    shortDesc: 'Comprehensive full-body skin examinations, mole assessments, eczema management, and preventative screening.',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    overview: 'Our General Dermatology service provides attentive clinical evaluation for benign lesions, moles, eczema, psoriasis, and unexplained rashes. Regular skin checks allow for early identification of atypical cellular changes while offering peace of mind regarding your overall skin health.',
    commonReasons: [
      'Annual full-body mole check using polarized surface dermoscopy',
      'Evaluation of new, changing, or irregularly shaped pigmented lesions',
      'Diagnosis and management of chronic dry eczema or psoriasis plaques',
      'Treatment for stubborn viral warts, skin tags, or benign keratoses'
    ],
    consultationIncludes: [
      'Systematic head-to-toe or focused dermoscopic examination of moles',
      'Assessment of skin cancer risk factors (sun history, family history)',
      'Management strategies for chronic inflammatory skin conditions',
      'Personalized educational guide on self-monitoring using the ABCDE criteria'
    ],
    questionsToAsk: [
      'How frequently should I schedule a professional mole check?',
      'What specific changes in a spot warrant immediate medical review?',
      'What is the difference between physical and chemical sunscreen filters for daily wear?'
    ],
    durationMinutes: '45 Minutes',
    suitableFor: 'Adults and families seeking comprehensive dermatological screening and peace of mind.'
  }
];

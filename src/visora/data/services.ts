import type { EyeService } from '../types/visora';

export const eyeServices: EyeService[] = [
  {
    id: 'srv-1',
    slug: 'comprehensive-eye-examination',
    title: 'Comprehensive Eye Examination',
    category: 'Diagnostic & Routine',
    shortDesc:
      'A thorough 50-minute clinical evaluation of visual acuity, refractive precision, binocular coordination, and ocular health.',
    durationMinutes: '50 mins',
    recommendedFrequency: 'Every 12 to 24 months based on age and clinical risk profile.',
    overview:
      'Our flagship examination evaluates far more than your standard 20/20 prescription. Using non-invasive high-resolution imaging and biomicroscopy, our optometrists assess retinal health, corneal integrity, and internal intraocular pressure to detect early indicators of systemic and ocular conditions.',
    image:
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    whatToExpect: [
      'Digital auto-refraction and subjective lens verification',
      'Non-contact and applanation intraocular pressure measurement',
      'Ultra-widefield digital retinal photography (dilated or non-mydriatic)',
      'Slit-lamp biomicroscopy of anterior ocular structures',
      'Personalized review of visual fatigue, digital screen habits, and ergonomics',
    ],
    diagnosticTechnology: [
      'High-Definition Slit Lamp Biomicroscopy',
      'Digital Wavefront Aberrometer',
      'Automated Visual Field Analyzer',
    ],
    suitableFor: [
      'Adults seeking full baseline vision verification',
      'Individuals experiencing eye fatigue, blurred vision, or headaches',
      'Patients with family history of glaucoma or macular conditions',
    ],
    faqs: [
      {
        question: 'Will my pupils be dilated during this exam?',
        answer:
          'Pupillary dilation depends on your clinical history and symptoms. In many cases, our ultra-widefield imaging allows comprehensive internal retinal viewing without medicinal dilation.',
      },
      {
        question: 'Should I bring my current glasses or contacts?',
        answer:
          'Yes, please bring your existing prescription spectacles, sunglasses, and the packaging or foil blister of your contact lenses.',
      },
    ],
  },
  {
    id: 'srv-2',
    slug: 'digital-vision-assessment',
    title: 'Digital Vision Assessment & Screen Ergonomics',
    category: 'Diagnostic & Routine',
    shortDesc:
      'Specialized testing focused on computer vision syndrome, blue-light sensitivity, accommodation lag, and binocular alignment.',
    durationMinutes: '40 mins',
    recommendedFrequency: 'Annually or when workplace visual demands shift significantly.',
    overview:
      'Prolonged screen use introduces specific ocular stresses, including micro-fluctuations in accommodation, decreased blink frequency, and focal strain. This assessment custom-tailors lens geometries for intermediate desktop distances and dual-monitor workflows.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    whatToExpect: [
      'Exact workstation distance measurement and gaze angle assessment',
      'Binocular vergence testing at intermediate working range',
      'Tear breakup time evaluation under digital screen conditions',
      'Contrast sensitivity testing under varying office ambient lighting',
    ],
    diagnosticTechnology: [
      'Near-Point Accommodation Rule',
      'Non-Invasive Tear Film Analysis',
      'Digital Convergence Analyzer',
    ],
    suitableFor: [
      'Software engineers, designers, and office professionals',
      'Anyone working 6+ hours daily on screens experiencing end-of-day strain',
      'Patients seeking customized occupational office lenses',
    ],
    faqs: [
      {
        question: 'How do occupational lenses differ from standard reading glasses?',
        answer:
          'Occupational lenses offer a seamless depth of field extending from 40 cm (keyboard/documents) to 1.5–2 meters (desktop monitors), eliminating neck strain caused by standard readers.',
      },
    ],
  },
  {
    id: 'srv-3',
    slug: 'contact-lens-consultation',
    title: 'Contact Lens Consultation & Fitting',
    category: 'Specialist Consultation',
    shortDesc:
      'Custom corneal topography, tear film analysis, and precision fitting for daily disposables, astigmatic, multifocal, and rigid gas permeable lenses.',
    durationMinutes: '45 mins',
    recommendedFrequency: 'Annual contact lens check alongside standard examination.',
    overview:
      'Achieving all-day contact lens comfort begins with exact anatomical alignment. We map the unique curvature of your cornea using precise corneal keratometry to fit premium silicone hydrogel, toric, and multifocal designs tailored to your ocular tear profile.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    whatToExpect: [
      'Corneal curvature mapping and tear meniscus evaluation',
      'Trial fitting with high-oxygen breathable silicone hydrogels',
      'Slit-lamp fluoroscopy evaluation of lens movement and centering',
      'One-on-one insertion, removal, and hygiene guidance for new wearers',
    ],
    diagnosticTechnology: [
      'Digital Keratometer & Corneal Topographer',
      'Cobalt Blue Slit Lamp Fluoroscopy',
    ],
    suitableFor: [
      'First-time contact lens wearers seeking gentle guidance',
      'Existing wearers experiencing end-of-day dryness or lens rotation',
      'Individuals requiring astigmatism or presbyopia correction',
    ],
    faqs: [
      {
        question: 'Can I wear contacts if I have astigmatism or require bifocals?',
        answer:
          'Modern toric and multifocal contact lenses provide stable visual sharpness for both astigmatism and presbyopia with high comfort.',
      },
    ],
  },
  {
    id: 'srv-4',
    slug: 'dry-eye-consultation',
    title: 'Dry Eye Consultation & Meibomian Gland Therapy',
    category: 'Specialist Consultation',
    shortDesc:
      'Diagnostic evaluation of tear film evaporation, meibomian gland health, and non-invasive restorative management plans.',
    durationMinutes: '45 mins',
    recommendedFrequency: 'As required; review sessions typically scheduled after 8–12 weeks.',
    overview:
      'Ocular surface discomfort, gritty sensations, fluctuating vision, and reflex tearing are often driven by meibomian gland dysfunction (MGD). Our targeted protocol identifies whether your dry eye is evaporative or aqueous-deficient and establishes a gentle, restorative regimen.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    whatToExpect: [
      'Infrared meibography to assess gland morphology and blockages',
      'Non-invasive tear breakup time (NIBUT) computerized timing',
      'Lipid layer thickness interferometry',
      'Prescription ocular lubricant recommendations and eyelid warming protocols',
    ],
    diagnosticTechnology: [
      'Infrared Meibography Imaging',
      'Lipid Layer Interferometer',
      'Osmolarity Testing System',
    ],
    suitableFor: [
      'Anyone suffering from burning, stinging, or sandy eye sensations',
      'Post-refractive or contact lens wearers with surface discomfort',
      'Individuals spending extended time in air-conditioned environments',
    ],
    faqs: [
      {
        question: 'Why do my eyes water excessively if they are supposedly dry?',
        answer:
          'When the oily lipid layer of tears is deficient, underlying tears evaporate rapidly. The lacrimal gland then produces sudden bursts of watery reflex tears that lack the lubricating lipid barrier.',
      },
    ],
  },
  {
    id: 'srv-5',
    slug: 'childrens-eye-care',
    title: "Children's Pediatric Vision Assessment",
    category: 'Pediatric & Vision',
    shortDesc:
      'Gentle, engaging vision evaluations focused on visual acuity, tracking, depth perception, and early detection of amblyopia and myopia.',
    durationMinutes: '40 mins',
    recommendedFrequency: 'Prior to starting school, followed by annual reviews.',
    overview:
      'Over 80% of childhood learning occurs visually. Our pediatric vision examinations are friendly, interactive, and stress-free. We screen for early myopia onset, binocular coordination challenges, color vision variations, and accommodative efficiency using non-verbal methods.',
    image:
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
    whatToExpect: [
      'Engaging symbol, shape, and pictorial acuity charts (Lea Symbols)',
      'Ocular motor tracking, fixation, and convergence checks',
      'Stereoscopic 3D depth perception testing',
      'Early myopia control evaluation (orthokeratology / specialty peripheral defocus lenses)',
    ],
    diagnosticTechnology: [
      'Lea Symbols & Retinoscopic Refraction',
      'Lang Stereotest & Titmus 3D Depth Fly',
      'Ishihara & HRR Color Perception Plates',
    ],
    suitableFor: [
      'Children aged 4 and above prior to primary school entry',
      'Students experiencing reading fatigue, head tilting, or eye rubbing',
      'Children with parents who developed high childhood myopia',
    ],
    faqs: [
      {
        question: 'Does my child need to know the alphabet for an eye exam?',
        answer:
          'Not at all. We utilize validated pictorial symbols, matching games, and objective retinoscopy that do not require letter recognition.',
      },
    ],
  },
  {
    id: 'srv-6',
    slug: 'prescription-updates',
    title: 'Prescription Updates & Spectacle Lens Dispensing',
    category: 'Diagnostic & Routine',
    shortDesc:
      'Precision optical refraction paired with personal styling and high-index, anti-reflective, and progressive lens dispensing.',
    durationMinutes: '35 mins',
    recommendedFrequency: 'Whenever existing frames cause strain or vision feels soft.',
    overview:
      'An accurate prescription is only half of great optical performance; the matching of pupillary height, pantoscopic tilt, and vertex distance is equally critical. Our licensed dispensing opticians ensure your chosen frames hold lenses positioned with sub-millimeter precision.',
    image:
      'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1200&q=80',
    whatToExpect: [
      'Precise subjective refraction update in private examination suite',
      'Digital centration video measurement for pantoscopic angle and pupil heights',
      'High-index, photochromic, and blue-defense lens material review',
      'Custom frame alignment, temple bending, and nose pad adjustment',
    ],
    diagnosticTechnology: [
      'Digital 3D Video Centration Terminal',
      'Lensmeter Spectacle Verifier',
    ],
    suitableFor: [
      'Patients needing updated spectacle prescriptions for new frames',
      'Wearers adapting to progressive or occupational multifocal lenses',
      'Anyone desiring custom frame fitting and personalized styling',
    ],
    faqs: [
      {
        question: 'Can you fit new prescription lenses into my existing frames?',
        answer:
          'Yes, provided your existing frames are structurally sound and retain adequate hinge integrity, our laboratory can glaze new lenses into your preferred frames.',
      },
    ],
  },
];

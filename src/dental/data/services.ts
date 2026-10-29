import type { Service } from '../types/dental';

export const services: Service[] = [
  {
    id: 'srv-01',
    slug: 'general-dentistry',
    name: 'General Dentistry',
    shortDescription: 'Routine examinations, ultrasonic cleanings, preventive fluoride therapies, and diagnostic x-rays for enduring oral wellness.',
    category: 'General',
    iconName: 'ShieldCheck',
    duration: '45 – 60 mins',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80',
    overview: 'General dentistry forms the foundational cornerstone of lifelong oral vitality. Our gentle preventative care protocol focuses on early detection, meticulous plaque removal, and patient education to preserve natural tooth structure.',
    reasonsToSeek: [
      'Bi-annual preventive dental evaluation and digital imaging',
      'Removal of hardened tartar and surface stain accumulation',
      'Early detection of cavities, enamel erosion, or gum vulnerability',
      'Personalized oral hygiene coaching and sensitivity guidance'
    ],
    whatToExpect: [
      'Comprehensive examination of teeth, gums, tongue, and bite alignment',
      'Low-radiation digital radiography for hidden interdental diagnostics',
      'Gentle ultrasonic scaling and enamel polishing with remineralizing paste',
      'Clear, unhurried discussion of findings with personalized preventative recommendations'
    ],
    treatmentProcess: [
      {
        step: '01',
        title: 'Diagnostic Assessment',
        description: 'Visual checkup and high-definition intraoral camera review of all oral quadrants.'
      },
      {
        step: '02',
        title: 'Ultrasonic Debridement',
        description: 'Gentle, pain-free ultrasonic instrumentation to remove plaque and calcified deposits.'
      },
      {
        step: '03',
        title: 'Prophylaxis Polish & Fluoride',
        description: 'Enamel buffing to eliminate surface stains followed by protective mineral application.'
      }
    ],
    faqs: [
      {
        question: 'How often should I schedule a routine dental checkup?',
        answer: 'For most adults and children, a comprehensive examination and professional cleaning every six months is recommended to intercept potential concerns early.'
      },
      {
        question: 'Will a routine professional cleaning cause discomfort?',
        answer: 'Modern ultrasonic instruments use gentle micro-vibrations and water cooling. If you experience dental sensitivity, topical numbing gels ensure total relaxation.'
      }
    ],
    relatedSlugs: ['gum-care-periodontics', 'cosmetic-dentistry', 'teeth-whitening']
  },
  {
    id: 'srv-02',
    slug: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    shortDescription: 'Custom porcelain veneers, aesthetic composite bonding, and harmonious smile redesigns tailored to your unique facial contours.',
    category: 'Cosmetic',
    iconName: 'Sparkles',
    duration: '60 – 90 mins',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=80',
    overview: 'Cosmetic dentistry artfully balances aesthetic harmony with biological function. Through custom hand-crafted porcelain veneers and minimally invasive composite resin bonding, we enhance tooth proportions, shade, and symmetry.',
    reasonsToSeek: [
      'Chipped, worn, or unevenly proportioned incisal edges',
      'Deep intrinsic discoloration resistant to traditional bleaching',
      'Minor spacing, gaps, or mild crowding without extensive orthodontics',
      'Desire for a rejuvenated, radiant smile aesthetic'
    ],
    whatToExpect: [
      'Facial aesthetic analysis considering lip posture, smile arc, and symmetry',
      'Digital smile design preview showcasing anticipated outcomes before treatment',
      'Minimally invasive tooth preparation preserving natural enamel vitality',
      'Artisanal shade matching under calibrated clinical daylight lighting'
    ],
    treatmentProcess: [
      {
        step: '01',
        title: 'Aesthetic Consultation',
        description: 'Comprehensive discussion of your goals, facial photographs, and digital mock-up preview.'
      },
      {
        step: '02',
        title: 'Micro-Preparation & Scans',
        description: 'Sub-millimeter tooth refinement followed by optical 3D digital scanning.'
      },
      {
        step: '03',
        title: 'Precision Bonding & Final Polish',
        description: 'Custom ceramic verification, adhesive resin bonding, and micro-polishing for lifelike luster.'
      }
    ],
    faqs: [
      {
        question: 'How durable are porcelain veneers?',
        answer: 'High-grade ceramic veneers engineered with modern adhesive protocols routinely maintain their aesthetic integrity for 10 to 15 years or more with conscientious oral care.'
      },
      {
        question: 'Is tooth structure significantly reduced for veneers?',
        answer: 'Modern cosmetic protocols utilize ultra-thin ceramics requiring minimal enamel preparation—often as little as 0.3mm to 0.5mm.'
      }
    ],
    relatedSlugs: ['teeth-whitening', 'orthodontics', 'general-dentistry']
  },
  {
    id: 'srv-03',
    slug: 'teeth-whitening',
    name: 'Teeth Whitening',
    shortDescription: 'Advanced in-clinic laser brightening and customized take-home maintenance systems delivering luminous, natural shade lift.',
    category: 'Cosmetic',
    iconName: 'Sun',
    duration: '45 – 60 mins',
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1600&q=80',
    overview: 'Our professional teeth whitening treatments safely lift stubborn extrinsic stains caused by coffee, tea, and natural aging. Utilizing pH-neutral hydrogen peroxide formulations with desensitizing agents, we deliver luminous clarity while safeguarding delicate enamel.',
    reasonsToSeek: [
      'Noticeable yellowing, dullness, or dark extrinsic staining',
      'Upcoming milestone events, weddings, or professional presentations',
      'Gradual discoloration from dark beverages, spices, or lifestyle factors',
      'Seeking a fast, non-invasive boost in facial confidence'
    ],
    whatToExpect: [
      'Shade assessment using standard Vita guide to establish baseline color',
      'Application of protective light-cured resin barrier over gum tissues',
      'Professional whitening gel application activated with specialized LED light',
      'Immediate shade improvement of 4 to 8 tones in a single comfortable visit'
    ],
    treatmentProcess: [
      {
        step: '01',
        title: 'Prophylaxis & Baseline Match',
        description: 'Surface polishing to remove biofilm and precise baseline shade documentation.'
      },
      {
        step: '02',
        title: 'Gingival Barrier Protection',
        description: 'Isolation of gum margins using gentle dental dams to prevent irritation.'
      },
      {
        step: '03',
        title: 'Light-Activated Brightening',
        description: 'Three 15-minute cycles of professional whitening formulation with mineralizing post-rinse.'
      }
    ],
    faqs: [
      {
        question: 'Will whitening weaken my tooth enamel?',
        answer: 'No. Professional formulations operate by oxidizing organic pigment molecules within the enamel pores without altering mineral density or structural enamel integrity.'
      },
      {
        question: 'How long do professional whitening results last?',
        answer: 'Results typically remain vibrant for 12 to 24 months, especially when maintained with periodic home touch-up trays and conscientious dietary habits.'
      }
    ],
    relatedSlugs: ['cosmetic-dentistry', 'general-dentistry', 'orthodontics']
  },
  {
    id: 'srv-04',
    slug: 'orthodontics',
    name: 'Orthodontics & Clear Aligners',
    shortDescription: 'Modern clear aligner therapy and discreet low-profile brackets to correct crowding, crossbites, and misalignments comfortably.',
    category: 'Restorative',
    iconName: 'Maximize2',
    duration: '30 – 45 mins',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80',
    overview: 'Orthodontic therapy optimizes dental biomechanics, simplifies daily hygiene, and achieves balanced facial aesthetics. We specialize in digital clear aligner systems as well as ceramic low-profile appliances for adolescents and adults.',
    reasonsToSeek: [
      'Crowded, overlapping, or rotated teeth creating plaque traps',
      'Noticeable gaps or spacing between front teeth',
      'Overbite, underbite, or crossbite causing uneven tooth wear',
      'Desire for discreet, removable alignment solutions that fit active routines'
    ],
    whatToExpect: [
      '3D digital intraoral scan eliminating messy traditional impressions',
      'Dynamic digital simulation illustrating projected week-by-week tooth progression',
      'Custom fabricated clear aligners engineered from medical-grade polymer',
      'Convenient periodic progress checkups every 6 to 8 weeks'
    ],
    treatmentProcess: [
      {
        step: '01',
        title: 'Digital 3D Optical Scan',
        description: 'High-speed intraoral scanner captures thousands of data points of your dental arches.'
      },
      {
        step: '02',
        title: 'Virtual Biomechanical Plan',
        description: 'Our orthodontist designs calibrated micro-movements tailored to your facial symmetry.'
      },
      {
        step: '03',
        title: 'Aligner Handover & Guidance',
        description: 'Delivery of custom aligner sets with simple instructions for wear and hygienic care.'
      }
    ],
    faqs: [
      {
        question: 'How many hours daily must I wear clear aligners?',
        answer: 'For optimal predictable movement, aligners should be worn 20 to 22 hours per day, removed only when dining and brushing.'
      },
      {
        question: 'Is orthodontic treatment suitable for adult patients?',
        answer: 'Absolutely. Over 40% of our orthodontic patients are adults benefiting from modern, nearly invisible aligners that integrate seamlessly with professional life.'
      }
    ],
    relatedSlugs: ['cosmetic-dentistry', 'general-dentistry', 'pediatric-dentistry']
  },
  {
    id: 'srv-05',
    slug: 'dental-implants',
    name: 'Dental Implants',
    shortDescription: 'Permanent, biocompatible titanium and ceramic root replacements supporting lifelike crowns with maximum stability and jawbone preservation.',
    category: 'Restorative',
    iconName: 'Anchor',
    duration: '60 – 90 mins',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80',
    overview: 'Dental implants represent the gold standard in tooth replacement technology. Engineered from biocompatible titanium that integrates directly with natural bone, implants look, feel, and function identical to natural teeth.',
    reasonsToSeek: [
      'One or more missing teeth causing chewing difficulty or speech changes',
      'Prevention of adjacent teeth shifting and jawbone resorption',
      'Alternative to removable partial dentures or traditional dental bridges',
      'Desire for a permanent, non-removable solution that lasts a lifetime'
    ],
    whatToExpect: [
      '3D Cone Beam CT (CBCT) scan to evaluate bone volume and nerve pathways',
      'Computer-guided surgical planning for exact sub-millimeter implant placement',
      'Minimally invasive placement under profound local anesthesia',
      'Custom ceramic crown hand-shaded to match neighboring dentition'
    ],
    treatmentProcess: [
      {
        step: '01',
        title: 'CBCT 3D Bone Diagnostics',
        description: 'Three-dimensional volumetric bone mapping to calculate precise implant trajectory.'
      },
      {
        step: '02',
        title: 'Gentle Guided Placement',
        description: 'Microsurgical placement of the biocompatible root fixture with minimal tissue disruption.'
      },
      {
        step: '03',
        title: 'Custom Crown Integration',
        description: 'Following biological osseointegration, a hand-crafted zirconia crown is secured.'
      }
    ],
    faqs: [
      {
        question: 'How long does the dental implant process take from start to finish?',
        answer: 'Biological osseointegration typically requires 8 to 16 weeks depending on individual bone density, after which the permanent ceramic crown is secured.'
      },
      {
        question: 'Will dental implant surgery be painful?',
        answer: 'Patients are consistently surprised by how comfortable the procedure is. Because bone has minimal nerve endings, post-procedure recovery is typically comparable to a simple filling.'
      }
    ],
    relatedSlugs: ['root-canal-treatment', 'general-dentistry', 'gum-care-periodontics']
  },
  {
    id: 'srv-06',
    slug: 'root-canal-treatment',
    name: 'Root Canal Treatment',
    shortDescription: 'Gentle, modern endodontic therapy utilizing rotary instruments and digital apex locators to relieve pain and preserve natural teeth.',
    category: 'Restorative',
    iconName: 'Activity',
    duration: '45 – 75 mins',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=80',
    overview: 'Modern endodontics is completely pain-free, comfortable, and focused on saving your biological tooth. Utilizing rotary nickel-titanium instruments and 3D disinfection, we eliminate infected dental pulp while maintaining structural integrity.',
    reasonsToSeek: [
      'Persistent toothache, throbbing pain, or pain upon biting pressure',
      'Prolonged sensitivity to hot or cold temperatures',
      'Deep decay reaching the inner pulp chamber',
      'Dental trauma causing nerve damage or localized swelling'
    ],
    whatToExpect: [
      'Immediate comfort through targeted, profound local anesthesia',
      'Rubber dam isolation to maintain absolute sterile treatment conditions',
      'Rotary endodontic shaping and acoustic ultrasonic irrigant activation',
      'Hermetic biocompatible sealing followed by tooth restoration with a protective crown'
    ],
    treatmentProcess: [
      {
        step: '01',
        title: 'Diagnostic Radiography & Numbing',
        description: 'Pinpointing the exact root anatomy and administering painless local anesthesia.'
      },
      {
        step: '02',
        title: 'Microsurgical Canal Cleaning',
        description: 'Removal of inflamed nerve tissue and acoustic irrigation of micro-branches.'
      },
      {
        step: '03',
        title: 'Bioceramic Sealing',
        description: 'Three-dimensional obturation with gutta-percha and bioceramic sealer to prevent re-infection.'
      }
    ],
    faqs: [
      {
        question: 'Is a root canal painful?',
        answer: 'Contrary to old myths, modern root canal treatment relieves pain rather than causing it. With contemporary local anesthetics, the experience feels similar to receiving a standard dental filling.'
      },
      {
        question: 'Why not simply extract the affected tooth?',
        answer: 'Preserving your natural tooth is always the optimal health choice. Natural teeth provide superior chewing sensation, prevent bone loss, and eliminate the need for costly replacements.'
      }
    ],
    relatedSlugs: ['dental-implants', 'general-dentistry', 'gum-care-periodontics']
  },
  {
    id: 'srv-07',
    slug: 'pediatric-dentistry',
    name: 'Pediatric Dentistry',
    shortDescription: 'Gentle, positive dental care designed specifically for infants, children, and teens to build a lifetime of confident, cavity-free smiles.',
    category: 'Specialized',
    iconName: 'Smile',
    duration: '30 – 45 mins',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80',
    overview: 'We create uplifting, fear-free visits that inspire children to look forward to visiting the dentist. From primary tooth monitoring to protective dental sealants, our pediatric team uses child-friendly explanations and gentle positive reinforcement.',
    reasonsToSeek: [
      'First dental milestone visit around your child’s first birthday',
      'Routine dental exams and preventive cavity-resisting fluoride',
      'Application of protective pit-and-fissure sealants on developing molars',
      'Guidance on teething, thumb-sucking habits, and athletic mouthguards'
    ],
    whatToExpect: [
      'Warm, friendly introduction using "Tell-Show-Do" educational communication',
      'Gentle tooth count and non-threatening dental examination',
      'Fun interactive demonstration on plaque brushing technique',
      'Celebratory rewards and empowering reinforcement for good oral habits'
    ],
    treatmentProcess: [
      {
        step: '01',
        title: 'Welcoming Orientation',
        description: 'Familiarizing your child with the clinic environment and playful instruments.'
      },
      {
        step: '02',
        title: 'Gentle Plaque Cleansing',
        description: 'Gentle brushing and selective fluoride application with child-friendly flavors.'
      },
      {
        step: '03',
        title: 'Parent Partnership Chat',
        description: 'Discussion of diet, jaw development, and practical at-home brushing strategies.'
      }
    ],
    faqs: [
      {
        question: 'When should a child first visit the dentist?',
        answer: 'Major dental associations recommend scheduling the first visit when the first tooth emerges or by the child’s first birthday to monitor early jaw development.'
      },
      {
        question: 'Are baby teeth really important if they eventually fall out?',
        answer: 'Yes, vital! Primary teeth guide proper jaw growth, enable clear speech development, maintain space for adult teeth, and support proper childhood nutrition.'
      }
    ],
    relatedSlugs: ['general-dentistry', 'orthodontics', 'gum-care-periodontics']
  },
  {
    id: 'srv-08',
    slug: 'gum-care-periodontics',
    name: 'Gum Care & Periodontics',
    shortDescription: 'Targeted therapy for gingivitis, periodontitis, and gum recession to safeguard the bone and connective tissues that anchor your teeth.',
    category: 'Specialized',
    iconName: 'HeartPulse',
    duration: '45 – 60 mins',
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1600&q=80',
    overview: 'Healthy gums are the biological bedrock of every resilient smile. Our periodontal care protocols target bacterial biofilm beneath the gumline, arrest gum bleeding, and restore healthy connective tissue attachment.',
    reasonsToSeek: [
      'Gums that bleed during routine brushing or flossing',
      'Persistent bad breath (halitosis) despite diligent brushing',
      'Receding gumlines exposing sensitive root surfaces',
      'Tenderness, redness, or gum puffiness around specific teeth'
    ],
    whatToExpect: [
      'Comprehensive periodontal charting measuring pocket depths across all teeth',
      'Laser-assisted or ultrasonic deep root surface debridement (scaling & root planing)',
      'Subgingival antimicrobial therapy to neutralize destructive oral bacteria',
      'Customized periodontal maintenance schedule to preserve stable bone levels'
    ],
    treatmentProcess: [
      {
        step: '01',
        title: 'Microbial & Pocket Assessment',
        description: 'Six-point probe depth measurement to map areas of inflammation.'
      },
      {
        step: '02',
        title: 'Deep Ultrasonic Root Planing',
        description: 'Smoothing root surfaces under local comfort numbing to facilitate gum reattachment.'
      },
      {
        step: '03',
        title: 'Antimicrobial Rinse & Follow-Up',
        description: 'Localized medication application and scheduled 4-week healing review.'
      }
    ],
    faqs: [
      {
        question: 'Can gum disease be reversed?',
        answer: 'Early gingivitis is completely reversible with professional cleanings and diligent home care. Advanced periodontitis can be successfully arrested and managed to prevent tooth loss.'
      },
      {
        question: 'What causes gums to bleed when brushing?',
        answer: 'Bleeding is a primary indicator of bacterial biofilm buildup inflaming the delicate sulcular epithelium. Professional periodontal therapy removes this trigger.'
      }
    ],
    relatedSlugs: ['general-dentistry', 'dental-implants', 'root-canal-treatment']
  }
];

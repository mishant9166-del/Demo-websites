import type { Service } from '../types/rehabora';

export const services: Service[] = [
  {
    id: 'srv-1',
    slug: 'musculoskeletal-physiotherapy',
    title: 'Musculoskeletal Physiotherapy',
    category: 'Pain and Mobility',
    shortDesc: 'Comprehensive clinical evaluation and hands-on movement therapy for muscle sprains, joint discomfort, and connective tissue recovery.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Musculoskeletal physiotherapy targets the complex interplay of muscles, tendons, ligaments, and joints. We focus on identifying biomechanical imbalances, easing persistent stiffness, and establishing restorative movement patterns that help you return to daily activities with ease.',
    commonReasons: [
      'Chronic tendon discomfort in shoulders, elbows, or knees',
      'Persistent muscle tension after repetitive lifting or daily strain',
      'Stiffness or reduced joint range of motion following minor injury',
      'Desire to restore functional movement and biomechanical stability'
    ],
    initialConsultationSteps: [
      'Detailed discussion of your injury timeline, daily demands, and personal movement goals',
      'Physical assessment of joint articulation, passive/active flexibility, and localized muscular strength',
      'Functional movement screens assessing gait, squat mechanics, or reach limitations',
      'Collaborative design of an initial home exercise regimen and recovery plan'
    ],
    rehabilitationApproaches: [
      'Targeted manual therapy to mobilize restricted joints and soothe hypertonic musculature',
      'Progressive isometric and eccentric strengthening exercises',
      'Proprioceptive retraining to heighten neuromuscular control and balance',
      'Ergonomic and daily activity pacing strategies'
    ],
    questionsToAsk: [
      'What specific muscle groups or joints are contributing to my movement limitations?',
      'How should I modify my daily workouts or work routine while recovering?',
      'What indicators signify that I am ready to increase exercise resistance?'
    ],
    faqs: [
      {
        question: 'How many sessions are typically recommended?',
        answer: 'Because recovery depends on tissue healing and individual baseline fitness, session frequency varies. Most patients notice positive progression within 4 to 6 structured sessions accompanied by home practice.'
      },
      {
        question: 'Should I rest completely if I am experiencing soreness?',
        answer: 'Complete immobilization is rarely recommended for soft tissue strains. Controlled, gentle movement within pain-free boundaries often promotes circulation and speeds recovery.'
      }
    ],
    durationMinutes: '45–60 min',
    sessionFormat: 'One-on-One Dedicated Clinical Suite'
  },
  {
    id: 'srv-2',
    slug: 'sports-injury-rehabilitation',
    title: 'Sports Injury Rehabilitation',
    category: 'Sports Rehabilitation',
    shortDesc: 'Evidence-based conditioning and sport-specific biomechanical training designed to restore athletic performance and resilience.',
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Whether you are a recreational runner, court athlete, or weekend enthusiast, our sports injury program bridges the gap between acute tissue recovery and peak athletic return. We combine force plate feedback, dynamic plyometrics, and load management to keep you performing confidently.',
    commonReasons: [
      'Ligament sprains (ACL, MCL, ankle roll injuries)',
      'Rotator cuff or shoulder labral strains from overhead sports',
      'Hamstring, groin, or calf muscle strains',
      'Runner’s knee, shin splints, or plantar fasciitis'
    ],
    initialConsultationSteps: [
      'Sport-specific movement history and injury mechanism breakdown',
      'Bilateral limb symmetry testing and dynamic landing mechanics screening',
      'Evaluation of power generation, deceleration control, and fatigue threshold',
      'Establishment of measurable return-to-sport testing milestones'
    ],
    rehabilitationApproaches: [
      'Graduated eccentric loading protocols for tendon remodeling',
      'Agility ladder and reactive change-of-direction drills',
      'Sport-specific kinetic chain integration (throwing, kicking, jumping)',
      'Structured volume and intensity periodization'
    ],
    questionsToAsk: [
      'When can I safely resume light jogging, throwing, or sport drills?',
      'How can I address underlying muscular imbalances that led to this injury?',
      'What dynamic warm-up drills should I adopt before practice sessions?'
    ],
    faqs: [
      {
        question: 'Do you work with non-competitive or recreational athletes?',
        answer: 'Absolutely. We treat runners, hikers, recreational swimmers, gym members, and anyone passionate about staying physically active.'
      },
      {
        question: 'What is return-to-sport clearance?',
        answer: 'It is a structured battery of functional jump, balance, and strength tests confirming that your injured limb possesses at least 90% comparable capacity to your uninjured limb.'
      }
    ],
    durationMinutes: '60 min',
    sessionFormat: 'Supervised Clinical Studio & Gym'
  },
  {
    id: 'srv-3',
    slug: 'post-operative-rehabilitation',
    title: 'Post-Operative Rehabilitation',
    category: 'Post-Operative Care',
    shortDesc: 'Gentle, protocol-guided recovery following orthopedic surgery, arthroscopy, joint replacement, or tendon repairs.',
    heroImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Following orthopedic procedures, precise rehabilitation is crucial to prevent scar adhesion, restore physiological joint articulation, and rebuild supporting musculature. We coordinate closely with your surgical protocols to ensure safe, gradual recovery.',
    commonReasons: [
      'Total or partial knee and hip arthroplasty (joint replacement)',
      'Rotator cuff repair or shoulder subacromial decompression',
      'ACL reconstruction, meniscus repair, or cartilage grafts',
      'Spinal decompression, discectomy, or fusion recovery'
    ],
    initialConsultationSteps: [
      'Careful review of your surgical notes, surgeon protocols, and weight-bearing restrictions',
      'Gentle evaluation of incision healing, localized swelling, and baseline range of motion',
      'Safe transfer, crutch/walker gait verification, and home safety guidance',
      'Initiation of prescribed early-phase protective exercises'
    ],
    rehabilitationApproaches: [
      'Gentle passive and active-assisted range of motion mobilization',
      'Effusion (swelling) management via gentle lymphatic elevation techniques',
      'Closed-kinetic-chain isometric muscle recruitment to avoid surgical site strain',
      'Progressive weight-bearing and functional gait normalization'
    ],
    questionsToAsk: [
      'What movements or weights are strictly contraindicated at my current recovery week?',
      'How should I manage normal postoperative stiffness versus concerning pain?',
      'When is it appropriate to transition away from assistive walking devices?'
    ],
    faqs: [
      {
        question: 'When should I begin physiotherapy after surgery?',
        answer: 'This depends on your surgeon’s specific guidance. Many joint replacements start within days, whereas complex tendon repairs may require 2 to 6 weeks of brace protection before active movement.'
      },
      {
        question: 'Will rehabilitation be painful?',
        answer: 'Our focus is gentle, controlled restoration. While mild discomfort is normal when working through stiffness, we strictly avoid pushing into sharp or aggravating pain.'
      }
    ],
    durationMinutes: '45–60 min',
    sessionFormat: 'One-on-One Dedicated Suite'
  },
  {
    id: 'srv-4',
    slug: 'back-and-neck-care',
    title: 'Back and Neck Care',
    category: 'Pain and Mobility',
    shortDesc: 'Targeted spine mobilization, postural stabilization, and core endurance therapy to relieve disc pressure and cervical strain.',
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Spinal discomfort can impact every aspect of daily life. Our spine care protocols focus on decompressing sensitive neural tissues, stabilizing deep spinal stabilizers (transversus abdominis, multifidus), and retraining healthy bending, lifting, and desk postures.',
    commonReasons: [
      'Lumbar disc herniation, sciatica, or nerve root irritation',
      'Postural neck strain, tension headaches, and upper trapezius stiffness',
      'Facet joint irritation or age-related spinal spondylosis',
      'Acute back spasm triggered by lifting, twisting, or prolonged sitting'
    ],
    initialConsultationSteps: [
      'Neurological screening including sensory checks, motor reflexes, and nerve tension tests',
      'Directional preference assessment (McKenzie method: flexion vs. extension tolerance)',
      'Deep abdominal and pelvic floor activation screening',
      'Comprehensive workstation and daily postural habits assessment'
    ],
    rehabilitationApproaches: [
      'Gentle segmental spinal mobilization to restore hypomobile vertebrae',
      'Deep core endurance training (Bird-Dog, Side Plank, Dead Bug progressions)',
      'Neural dynamic gliding to ease sciatic or cervical nerve hypersensitivity',
      'Hip hinge mechanics retraining to protect the lumbar spine during lifts'
    ],
    questionsToAsk: [
      'Is my pain coming from disc pressure, muscular fatigue, or joint irritation?',
      'What sleeping positions and pillows offer the best spinal alignment for me?',
      'What micro-break exercises can I perform during long work desk hours?'
    ],
    faqs: [
      {
        question: 'Do I need an MRI before attending physiotherapy?',
        answer: 'In most non-traumatic cases, an MRI is not required to begin conservative physiotherapy. We screen for red-flag symptoms and will advise you if diagnostic imaging is recommended.'
      },
      {
        question: 'Can poor posture truly cause persistent neck pain?',
        answer: 'Yes. Sustained forward-head posture increases the gravitational load on cervical vertebrae and deep neck muscles, leading to chronic fatigue and tension.'
      }
    ],
    durationMinutes: '45 min',
    sessionFormat: 'Private Treatment Suite & Mat Area'
  },
  {
    id: 'srv-5',
    slug: 'joint-mobility-rehabilitation',
    title: 'Joint Mobility Rehabilitation',
    category: 'Pain and Mobility',
    shortDesc: 'Restorative capsular stretching, active range-of-motion routines, and gentle load distribution for osteoarthritis and stiff joints.',
    heroImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Healthy joints thrive on balanced movement, synovial fluid circulation, and strong surrounding musculature. We guide you through personalized mobility drills that increase joint lubrication, ease morning stiffness, and preserve longevity.',
    commonReasons: [
      'Mild-to-moderate hip, knee, or hand osteoarthritis',
      'Adhesive capsulitis (frozen shoulder) in freezing or thawing stages',
      'Ankle stiffness following sprains or immobilization casts',
      'Loss of thoracic spine rotation affecting breathing or golf swings'
    ],
    initialConsultationSteps: [
      'Goniometric measurement of physiological and accessory joint movements',
      'End-feel assessment (capsular resistance, muscular guarding, or bony block)',
      'Pain mapping during weight-bearing and non-weight-bearing states',
      'Identification of compensatory movement patterns in adjacent joints'
    ],
    rehabilitationApproaches: [
      'Low-velocity joint oscillations (Maitland grades I–IV) to calm joint nociceptors',
      'End-range isometric loading to build strength at newly unlocked angles',
      'Hydrotherapy or low-impact closed-chain cycling to stimulate synovial fluid',
      'Continuous daily mobility routines to maintain improvements between visits'
    ],
    questionsToAsk: [
      'How can I distinguish between safe joint stretching and harmful friction?',
      'Are hot packs or cold compresses more beneficial for my specific joint condition?',
      'How does muscle strengthening around the joint reduce cartilage wear?'
    ],
    faqs: [
      {
        question: 'Is exercise safe if I have diagnosed osteoarthritis?',
        answer: 'Yes, research overwhelmingly confirms that low-impact, supervised exercise strengthens supporting muscles, reduces pain, and maintains functional joint longevity.'
      },
      {
        question: 'How long does it take to thaw a frozen shoulder?',
        answer: 'Frozen shoulder recovery is gradual, typically progressing over several months. Physiotherapy helps preserve comfort and accelerate the restoration of overhead movement.'
      }
    ],
    durationMinutes: '45–60 min',
    sessionFormat: 'One-on-One Clinical Suite'
  },
  {
    id: 'srv-6',
    slug: 'balance-and-mobility-training',
    title: 'Balance and Mobility Training',
    category: 'Balance and Walking',
    shortDesc: 'Neuromuscular stability drills, vestibular exercises, and dynamic balance challenges to restore confidence on uneven surfaces.',
    heroImage: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Balance requires seamless collaboration between your vision, inner ear vestibular system, and proprioceptors in your ankles and feet. Our balanced-movement curriculum trains reactive stepping, center-of-gravity control, and dual-task coordination.',
    commonReasons: [
      'Unsteadiness or anxiety when stepping onto stairs, curbs, or grass',
      'Past history of near-falls or loss of balance when turning quickly',
      'Mild peripheral neuropathy causing decreased foot sensation',
      'General feeling of deconditioning after a prolonged illness or sedentary period'
    ],
    initialConsultationSteps: [
      'Standardized balance tests (Berg Balance Scale, Timed Up and Go, Romberg)',
      'Vestibular and visual tracking checks for dizziness or motion sensitivity',
      'Lower limb power assessment (sit-to-stand speed, calf raise endurance)',
      'Review of home footwear and tripping hazard management'
    ],
    rehabilitationApproaches: [
      'Tandem stance and single-leg balance on varied foam and wobble surfaces',
      'Perturbation training (recovering posture when gently nudged in a safe harness)',
      'Obstacle navigation, side-stepping, and multi-directional walking drills',
      'Vestibulo-ocular reflex stabilization exercises'
    ],
    questionsToAsk: [
      'What daily balance exercises can I perform safely next to my kitchen counter?',
      'How do supportive shoes versus bare feet impact my sensory balance?',
      'Are my balance challenges primarily vestibular, sensory, or muscular in origin?'
    ],
    faqs: [
      {
        question: 'Is it too late to improve balance as I get older?',
        answer: 'Never. The neuromuscular system adapts at any age. With consistent, progressive challenges, patients routinely make remarkable gains in stability and confidence.'
      },
      {
        question: 'Is balance training safe if I feel very wobbly?',
        answer: 'Yes. All sessions are conducted in a secure clinical setting with safety belts, parallel bars, and hands-on supervision at all times.'
      }
    ],
    durationMinutes: '45 min',
    sessionFormat: 'Studio Balance Pavilion'
  },
  {
    id: 'srv-7',
    slug: 'gait-and-walking-rehabilitation',
    title: 'Gait and Walking Rehabilitation',
    category: 'Balance and Walking',
    shortDesc: 'Video-assisted gait analysis, stride retraining, and cadence coaching to restore fluid, energy-efficient walking patterns.',
    heroImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Walking is one of the most natural yet intricate human movements. Following injuries, limps or asymmetries often persist subconsciously, causing secondary hip or low back fatigue. We analyze your foot-strike, swing phase, and push-off to rebuild symmetry.',
    commonReasons: [
      'Persistent antalgic limp following a healed fracture or ankle sprain',
      'Drop-foot or difficulty clearing the toes during the swing phase of walking',
      'Discomfort when walking distances greater than 10 to 15 minutes',
      'Asymmetrical stride length or trunk sway while walking'
    ],
    initialConsultationSteps: [
      'High-speed digital video recording of treadmill and overground walking',
      'Step cadence, ground contact time, and heel-to-toe progression evaluation',
      'Pelvic drop (Trendelenburg sign) and hip abductor strength assessment',
      'Inspection of shoe wear patterns for abnormal lateral or medial scuffing'
    ],
    rehabilitationApproaches: [
      'Real-time auditory metronome and mirror visual biofeedback during walking',
      'Gluteus medius and hip rotator activation in closed-kinetic chain',
      'Terminal knee extension and ankle dorsiflexion mobility work',
      'Gradual distance and variable incline conditioning'
    ],
    questionsToAsk: [
      'Why is my body compensating with a limp even though my pain has reduced?',
      'Would custom orthotic insoles or heel wedges support my walking symmetry?',
      'What stride pace is most energy-efficient for my height and anatomy?'
    ],
    faqs: [
      {
        question: 'How does video gait analysis help me?',
        answer: 'Seeing your own stride in slow-motion clarifies where your body is over-striding, leaning, or failing to push off, making neuromuscular corrections intuitive.'
      },
      {
        question: 'Can walking rehabilitation help post-stroke recovery?',
        answer: 'Yes, neuro-rehabilitative gait training helps re-educate stepping patterns, toe clearance, and weight transfer across affected limbs.'
      }
    ],
    durationMinutes: '60 min',
    sessionFormat: 'Gait Lab & Treadmill Suite'
  },
  {
    id: 'srv-8',
    slug: 'senior-mobility-support',
    title: 'Senior Mobility Support',
    category: 'General Physiotherapy',
    shortDesc: 'Compassionate, age-friendly physical therapy focused on independence, chair transfers, stair climbing, and vitality in later life.',
    heroImage: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Maintaining physical autonomy is the key to healthy ageing. Our senior mobility program honors your current fitness level while methodically building the leg power, grip strength, and stamina needed for shopping, gardening, and playing with grandchildren.',
    commonReasons: [
      'Difficulty rising from deep armchairs or low car seats without help',
      'Hesitation or knee fatigue when climbing or descending stairs',
      'Deconditioning following a seasonal flu, hospitalization, or winter season',
      'Desire to maintain bone density and muscular mass safely'
    ],
    initialConsultationSteps: [
      'Comprehensive functional assessment of essential daily activities',
      'Grip dynamometer and 30-second sit-to-stand repetition testing',
      'Review of home mobility, stair rails, and personal lifestyle interests',
      'Careful tailoring of heart rate zones and recovery rest intervals'
    ],
    rehabilitationApproaches: [
      'Functional resistance training using elastic bands, light dumbbells, and bodyweight',
      'Stair climbing technique training emphasizing quad and glute engagement',
      'Thoracic extension and postural awareness to counter kyphotic rounding',
      'Gentle breathing exercises and joint circulation routines'
    ],
    questionsToAsk: [
      'How frequently should I perform resistance exercises each week at home?',
      'What are the safest ways to lift groceries or grandchildren without back strain?',
      'Are there gentle community fitness programs that complement this care?'
    ],
    faqs: [
      {
        question: 'Is it safe to lift weights in my 70s or 80s?',
        answer: 'Yes! Scientific consensus confirms that resistance training is one of the most potent interventions to combat sarcopenia, maintain bone mineral density, and prevent falls.'
      },
      {
        question: 'Can family members or caregivers attend consultation sessions?',
        answer: 'Absolutely. We welcome family members so everyone is aligned on safe transfer techniques and supportive home exercise coaching.'
      }
    ],
    durationMinutes: '45 min',
    sessionFormat: 'Accessible Ground-Floor Clinic Suite'
  },
  {
    id: 'srv-9',
    slug: 'posture-and-movement-assessment',
    title: 'Posture & Movement Assessment',
    category: 'General Physiotherapy',
    shortDesc: 'Ergonomic screen and kinetic chain movement analysis identifying compensations before they develop into chronic strain.',
    heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Modern life places repetitive demands on the body—whether seated at laptops for eight hours, carrying children, or driving commutes. Our assessment decodes how your body distributes load, revealing tight stabilizers and dormant movers.',
    commonReasons: [
      'Persistent mid-back ache, rounded shoulders, or forward head carriage',
      'Pelvic tilt imbalances causing one leg to feel longer or hips to click',
      'Discomfort when adopting athletic postures in golf, tennis, or yoga',
      'Desire for an ergonomic tune-up before starting a new workout routine'
    ],
    initialConsultationSteps: [
      'Static plumb-line alignment analysis from sagittal, frontal, and transverse views',
      'Overhead squat, single-leg squat, and multi-segmental flexion screening (SFMA)',
      'Digital photo posture capture with angle measurements of cervical spine',
      'Detailed inquiry into desk setup, monitor height, chair lumbar support, and habits'
    ],
    rehabilitationApproaches: [
      'Pectoral and anterior hip flexor myofascial opening',
      'Rhomboid, lower trapezius, and posterior rotator cuff activation',
      'Thoracic foam roller extension and book-opening rotational stretches',
      'Customized ergonomic adjustments for office, vehicle, and home spaces'
    ],
    questionsToAsk: [
      'Is there such a thing as "perfect posture," or should I focus on movement variety?',
      'What specific chair or desk adjustments will relieve my upper back strain?',
      'Which three daily corrective exercises yield the highest ergonomic return?'
    ],
    faqs: [
      {
        question: 'Does having rounded shoulders always cause pain?',
        answer: 'Not necessarily. Posture is dynamic; problems typically arise when posture becomes rigid and tissues are deprived of regular movement transitions.'
      },
      {
        question: 'How quickly can postural habits be reshaped?',
        answer: 'With conscious ergonomic changes and targeted strengthening, most people experience noticeable comfort and postural improvements within 3 to 4 weeks.'
      }
    ],
    durationMinutes: '60 min',
    sessionFormat: 'Consultation & Screen Studio'
  },
  {
    id: 'srv-10',
    slug: 'general-rehabilitation-consultation',
    title: 'General Rehabilitation Consultation',
    category: 'General Physiotherapy',
    shortDesc: 'A comprehensive, unhurried initial physical therapy assessment for multiple concerns, second opinions, or wellness roadmaps.',
    heroImage: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80',
    overview:
      'If you have multiple aches, unclear symptoms, or are unsure which specific therapy path to choose, our general consultation provides a thorough, reassuring starting point. We listen attentively, examine thoroughly, and build a clear recovery plan.',
    commonReasons: [
      'Uncertainty about which body region or activity is triggering pain',
      'Seeking a second opinion after previous therapy plateaued elsewhere',
      'Desire for a physical wellness baseline check-up before returning to exercise',
      'Multiple co-occurring conditions (e.g., knee stiffness alongside low back tension)'
    ],
    initialConsultationSteps: [
      'In-depth, unhurried interview regarding your medical history and lifestyle',
      'Head-to-toe structural screening and vital mobility checks',
      'Explanation of pain neurophysiology and recovery timelines in clear terms',
      'Written rehabilitation roadmap outlining realistic milestones and options'
    ],
    rehabilitationApproaches: [
      'Identification of primary driver vs. secondary compensatory discomfort',
      'Establishment of realistic, meaningful recovery goals tailored to you',
      'Selection of appropriate clinical modalities, exercises, or program tracks',
      'Direct referrals or co-management recommendations if specialist care is needed'
    ],
    questionsToAsk: [
      'What is the root cause versus the symptom in my presentation?',
      'What realistic physical milestones should I expect over the next 60 days?',
      'What self-care tools (rollers, bands, heat/ice) are actually evidence-supported?'
    ],
    faqs: [
      {
        question: 'Do I need a doctor referral to book an initial consultation?',
        answer: 'In most jurisdictions with direct-access physical therapy, you can consult with a licensed physiotherapist without a prior physician referral. We will advise you of any local insurance guidelines.'
      },
      {
        question: 'What clothing should I wear to my first consultation?',
        answer: 'Wear comfortable, loose-fitting athletic clothing (shorts, t-shirt, athletic shoes) that allows unconstrained joint movement and easy visualization of the area being assessed.'
      }
    ],
    durationMinutes: '60 min',
    sessionFormat: 'Comprehensive Diagnostic Consultation'
  }
];

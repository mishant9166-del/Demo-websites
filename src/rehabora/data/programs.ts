import type { Program } from '../types/rehabora';

export const programs: Program[] = [
  {
    id: 'prg-1',
    slug: 'sports-recovery-program',
    title: 'Sports Recovery Program',
    shortDesc: 'A phased athletic rehabilitation roadmap restoring strength, cutting agility, and high-velocity resilience for runners and field athletes.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    targetAudience: 'Recreational athletes, club runners, court players, and active fitness enthusiasts returning from acute strains or chronic overuse.',
    durationWeeks: '8–12 Weeks (Phased Progression)',
    goals: [
      'Eliminate acute pain and restore full, pain-free athletic range of motion',
      'Achieve greater than 90% limb symmetry in jump and reactive force testing',
      'Build progressive tendon tolerance to high-impact deceleration forces',
      'Prevent recurring strains through sport-specific neuromuscular conditioning'
    ],
    focusAreas: [
      'Phase 1: Tissue De-loading, Swelling Management & Isometric Loading',
      'Phase 2: Heavy Slow Resistance (HSR) & Eccentric Tendon Remodeling',
      'Phase 3: Plyometric Rate-of-Force Development (RFD) & Agility Drills',
      'Phase 4: Simulated Match Demands & Return-to-Sport Objective Testing'
    ],
    progressReviews:
      'Bi-weekly functional movement evaluations, force output measurements, and video deceleration reviews ensure you advance safely through each tier.',
    associatedServiceSlugs: ['sports-injury-rehabilitation', 'musculoskeletal-physiotherapy'],
    faqs: [
      {
        question: 'How do you measure readiness to return to full competition?',
        answer: 'We utilize standardized jump tests (single-leg hop for distance, triple hop, crossover hop) and require at least 90% limb symmetry index before recommending full competitive return.'
      },
      {
        question: 'Can I continue cardiovascular training during this program?',
        answer: 'Yes. We prescribe cross-training options (cycling, swimming, rowing, elliptical) that maintain aerobic capacity without stressing healing connective tissues.'
      }
    ]
  },
  {
    id: 'prg-2',
    slug: 'mobility-and-flexibility-program',
    title: 'Mobility & Flexibility Program',
    shortDesc: 'A systematic restorative curriculum opening restricted joints, releasing fascial tightness, and expanding functional reach.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
    targetAudience: 'Individuals suffering from chronic stiffness, desk workers with tightened hips and spine, or athletes seeking greater movement efficiency.',
    durationWeeks: '6–8 Weeks',
    goals: [
      'Unlock restricted capsule and soft tissue mobility in hips, spine, and shoulders',
      'Re-educate motor control so newly unlocked range becomes strong and active',
      'Reduce morning stiffness and ease daily bending, reaching, and squatting',
      'Establish a 15-minute daily maintenance routine that sustains lifelong flexibility'
    ],
    focusAreas: [
      'Thoracic spine extension and rotational freedom for improved posture',
      'Deep hip capsule mobility (internal and external rotation)',
      'Hamstring, calf, and ankle dorsiflexion opening',
      'End-range isometric strength (Controlled Articular Rotations & PNF stretching)'
    ],
    progressReviews:
      'Digital goniometer measurements before and after each phase to track exact degree gains in joint articulation.',
    associatedServiceSlugs: ['joint-mobility-rehabilitation', 'back-and-neck-care'],
    faqs: [
      {
        question: 'Is this program passive stretching only?',
        answer: 'No. While passive stretching eases immediate tension, active motor control drills ensure your brain learns to stabilize and utilize your new range.'
      },
      {
        question: 'Will this program help with tight hamstrings and hips from sitting?',
        answer: 'Yes! Sedentary postures cause hip flexors and hamstrings to remain chronically shortened. This program systematically unglues these areas.'
      }
    ]
  },
  {
    id: 'prg-3',
    slug: 'post-surgical-rehabilitation-program',
    title: 'Post-Surgical Rehabilitation Program',
    shortDesc: 'Structured, surgeon-aligned recovery guiding you safely from hospital discharge back to pain-free independent living.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    targetAudience: 'Patients recovering from knee/hip replacement, ACL reconstruction, rotator cuff repair, spinal surgery, or fracture fixation.',
    durationWeeks: '12–16 Weeks (Coordinated with Surgeon Protocols)',
    goals: [
      'Safely respect tissue healing timelines while preventing joint contracture',
      'Eliminate postoperative swelling and restore normal lymphatic drainage',
      'Wean off assistive walking devices (crutches, walkers) with normalized gait',
      'Rebuild muscular volume and functional endurance for daily independence'
    ],
    focusAreas: [
      'Early Phase: Incision care awareness, passive motion, and isometric sets',
      'Intermediate Phase: Progressive weight-bearing, closed-chain squats, and balance',
      'Late Phase: Stair climbing mastery, outdoor terrain walking, and endurance',
      'Discharge Phase: Long-term home exercise maintenance and joint protection habits'
    ],
    progressReviews:
      'Formal progress reports shared directly with your orthopedic surgeon at 6-week and 12-week milestones.',
    associatedServiceSlugs: ['post-operative-rehabilitation', 'gait-and-walking-rehabilitation'],
    faqs: [
      {
        question: 'How do you coordinate with my orthopedic surgeon?',
        answer: 'We request your surgical operative notes and protocol sheets before starting, and send structured written status updates following key milestones.'
      },
      {
        question: 'What if my swelling persists after exercise sessions?',
        answer: 'We incorporate cold compression therapy, elevation guidance, and carefully modulate exercise dosage to keep post-session inflammation minimal.'
      }
    ]
  },
  {
    id: 'prg-4',
    slug: 'balance-and-walking-support-program',
    title: 'Balance & Walking Support Program',
    shortDesc: 'Evidence-backed stability and falls-prevention training building unwavering confidence on sidewalks, stairs, and uneven terrain.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
    targetAudience: 'Adults experiencing unsteadiness, sensory changes, dizziness when turning, or recovering from a fall.',
    durationWeeks: '8 Weeks',
    goals: [
      'Lower fall risk classification on standardized medical clinical assessments',
      'Strengthen ankle stabilizers and calf musculature for reactive balance recovery',
      'Eliminate hesitation when transitioning between pavement, carpets, and grass',
      'Foster psychological confidence and eliminate fear-avoidance behavior'
    ],
    focusAreas: [
      'Narrow base-of-support balance challenges (tandem, single-leg, foam pads)',
      'Dual-task training (stepping while counting or turning the head)',
      'Reactive stepping drills to catch yourself if momentarily thrown off-center',
      'Safe home environment assessment and assistive device optimization'
    ],
    progressReviews:
      'Re-testing on Berg Balance Scale and Timed Up and Go (TUG) at Week 4 and Week 8 to document measurable improvements.',
    associatedServiceSlugs: ['balance-and-mobility-training', 'gait-and-walking-rehabilitation'],
    faqs: [
      {
        question: 'What if I am nervous about falling during practice?',
        answer: 'Safety is paramount. All sessions occur with an attentive therapist within arm’s reach, adjacent to parallel safety rails and support belts.'
      },
      {
        question: 'Can this program help me walk without a cane?',
        answer: 'If your muscle strength and balance reach safe clearance criteria, we will guide a safe, gradual weaning protocol off walking aids.'
      }
    ]
  },
  {
    id: 'prg-5',
    slug: 'strength-and-functional-movement-program',
    title: 'Strength & Functional Movement Program',
    shortDesc: 'A progressive whole-body strength curriculum bridging clinical rehabilitation with everyday physical empowerment and resilience.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    targetAudience: 'Individuals ready to progress beyond basic rehabilitation into robust, whole-body functional capacity and injury resistance.',
    durationWeeks: '8–10 Weeks',
    goals: [
      'Master the fundamental human movement patterns: squat, hinge, push, pull, carry',
      'Build core and spinal endurance to handle unexpected lifting or twisting',
      'Increase bone mineral density and metabolic muscular tone',
      'Eliminate fear of lifting weights or participating in community fitness classes'
    ],
    focusAreas: [
      'Hip hinge mechanics: Kettlebell deadlifts and gluteal force transfer',
      'Squat mechanics: Joint-friendly goblet and box squat variations',
      'Loaded carries (Farmer’s walk) for rotational spinal stability and grip power',
      'Pacing, breathing synchronization, and fatigue management'
    ],
    progressReviews:
      'Weekly load tracking logs documenting strength increases, movement symmetry, and subjective rating of perceived exertion (RPE).',
    associatedServiceSlugs: ['musculoskeletal-physiotherapy', 'posture-and-movement-assessment'],
    faqs: [
      {
        question: 'I have never lifted weights before. Is this program appropriate?',
        answer: 'Yes! We begin with light resistance bands and bodyweight movements, only introducing weights when your technique is completely clean.'
      },
      {
        question: 'How does functional strength differ from bodybuilding?',
        answer: 'We train movements rather than isolated muscles—prioritizing coordination, joint safety, and real-world durability over pure cosmetic hypertrophy.'
      }
    ]
  },
  {
    id: 'prg-6',
    slug: 'active-ageing-program',
    title: 'Active Ageing Program',
    shortDesc: 'An inspiring, supportive wellness pathway designed to preserve energy, joint freedom, and social vitality through every decade.',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
    targetAudience: 'Seniors, retirees, and mature adults committed to staying active, travelling comfortably, and maintaining lifelong independence.',
    durationWeeks: 'Ongoing / 8-Week Foundations Track',
    goals: [
      'Preserve and enhance cardiovascular stamina and daily walking energy',
      'Protect joint cartilage through gentle, regular low-impact movement',
      'Retain independence in chair transfers, stair climbing, and household chores',
      'Foster a supportive, uplifting clinical environment that celebrates small wins'
    ],
    focusAreas: [
      'Functional leg power: Sit-to-stand transitions and step-ups',
      'Grip strength and upper limb reach mobility',
      'Postural extension drills to counteract stooping and cervical strain',
      'Pacing strategies for gardening, golfing, and long travel itineraries'
    ],
    progressReviews:
      'Monthly wellness check-ins measuring functional independence measures and overall movement comfort.',
    associatedServiceSlugs: ['senior-mobility-support', 'balance-and-mobility-training'],
    faqs: [
      {
        question: 'Are sessions adapted for medical conditions like hypertension or arthritis?',
        answer: 'Yes, our physiotherapists monitor vitals and customize every movement to accommodate joint replacements, blood pressure, and osteopenia.'
      },
      {
        question: 'Can I do this program alongside my spouse or friend?',
        answer: 'Yes! Many couples enjoy attending sequential appointments or taking the foundations track together to encourage mutual accountability.'
      }
    ]
  }
];

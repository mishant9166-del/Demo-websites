import type { ProcessStage } from '../types/interior';

export const FORMA_PROCESS: ProcessStage[] = [
  {
    step: '01',
    title: 'Initial Conversation & Spatial Dialogue',
    tagline: 'Listening deeply before proposing a single line.',
    duration: 'Week 1',
    description:
      'Every project begins with a candid, unhurried dialogue. We explore how you live, your morning and evening rituals, your tolerance for materials that age, and the emotional tone you wish your home to embody. We review budget parameters, timelines, and the fundamental purpose of the space.',
    deliverables: [
      'Project scope memorandum & aspirational alignment summary',
      'Initial fee proposal and phase breakdown',
      'Mutual timeline feasibility agreement',
    ],
    quote: '“Architecture starts not with a drawing, but with understanding the rhythm of a person’s day.”',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: '02',
    title: 'Brief Synthesis & Site Understanding',
    tagline: 'Deciphering sun angles, views, acoustics, and structural bones.',
    duration: 'Weeks 2 – 3',
    description:
      'We visit the site repeatedly at different times of day to study solar paths, prevailing breezes, acoustic intrusions, and surrounding sightlines. For existing structures, we measure every millimeter and investigate load-bearing elements, ceiling voids, and service shafts.',
    deliverables: [
      'Comprehensive measured as-built architectural CAD drawings',
      'Solar daylight path and shadow mapping study',
      'Acoustic and structural constraints report',
    ],
    quote: '“A room must listen to the light before it can respond with stone and timber.”',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: '03',
    title: 'Concept Development & Atmospheric Direction',
    tagline: 'Establishing the architectural language and tactile mood.',
    duration: 'Weeks 4 – 5',
    description:
      'We distill our findings into a singular conceptual vision. Through physical mood boards, spatial volume sketches, and curated materiality references, we define the dialogue between light, stone, timber, and air. This sets the artistic benchmark for every subsequent design decision.',
    deliverables: [
      'Atmospheric concept presentation and narrative dossier',
      'Physical curated material tray (raw stone, timber, lime plaster, textiles)',
      'Primary architectural section and volume sketches',
    ],
    quote: '“Concept is the compass that keeps hundreds of subsequent decisions aligned.”',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: '04',
    title: 'Spatial Planning & Volume Refinement',
    tagline: 'Solving circulation, proportions, and natural sightlines.',
    duration: 'Weeks 6 – 8',
    description:
      'With the concept established, we resolve the floorplan with mathematical discipline. We eliminate redundant hallways, establish clear visual axes that draw the eye toward daylight, align door headers, and design transitions that feel effortless to move through.',
    deliverables: [
      'Detailed 1:50 spatial layout options and final approved plan',
      'Sightline and circulation diagrams',
      'Ceiling height and datum alignment elevations',
    ],
    quote: '“True luxury in residential architecture is effortless circulation and generous proportion.”',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: '05',
    title: 'Material & Finish Curation',
    tagline: 'Selecting the genuine mineral surfaces you will touch daily.',
    duration: 'Weeks 9 – 11',
    description:
      'We visit quarries, timber stockyards, and metal workshops to select actual batches of limestone, travertine, and hardwoods. We examine them side-by-side on site under both morning dawn and warm evening incandescent light to guarantee tonal harmony.',
    deliverables: [
      'Complete physical material specification library box',
      'Testing results for stain resistance and stone absorption',
      'Source provenance documentation and supplier contacts',
    ],
    quote: '“Materials should feel authentic under bare feet and age with dignity.”',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: '06',
    title: 'Design Development & Joinery Detailing',
    tagline: 'Drafting millimeter-precise fabrication documentation.',
    duration: 'Weeks 12 – 16',
    description:
      'The soul of high-end interior architecture lives in the details: shadow gaps, invisible hinges, recessed baseboards, fluted stone edges, and custom wardrobe interiors. We produce hundreds of pages of rigorous construction drawings to ensure contractors build without guesswork.',
    deliverables: [
      'Comprehensive joinery package (kitchens, wardrobes, vanities, architectural screens)',
      'Lighting schematics, circuit loads, and automation integration specs',
      'Full bill of quantities (BOQ) and contractor tender package',
    ],
    quote: '“The cleanest minimalism requires the most exhaustive technical detailing.”',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80',
  },
  {
    step: '07',
    title: 'Site Realisation, Styling & Handover',
    tagline: 'Supervising the build and perfecting the space down to the final linen.',
    duration: 'Construction Phase through Completion',
    description:
      'We conduct systematic site inspections throughout execution, verifying stonework joints, plaster consistency, and joinery fit. Once building work concludes, we place curated furniture, dress the beds with washed Belgian linen, place sculptural ceramics, and hand over the keys to a calm, completed home.',
    deliverables: [
      'Weekly site inspection logs and snagging rectification schedules',
      'Final styling and art installation coordination',
      'Comprehensive Home Care & Material Maintenance Manual',
    ],
    quote: '“A home is only complete when the client steps inside and feels an immediate sense of belonging.”',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80',
  },
];

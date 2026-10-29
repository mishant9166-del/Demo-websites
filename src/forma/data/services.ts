import type { ServiceItem } from '../types/interior';

export const FORMA_SERVICES: ServiceItem[] = [
  {
    id: 'serv-residential',
    slug: 'residential-interior-design',
    number: '01',
    title: 'Residential Interior Design',
    tagline: 'Holistic interior architecture tailored to the rhythm of private living.',
    shortDescription:
      'Complete end-to-end design for bespoke homes, villas, and luxury apartments from spatial planning to custom joinery and lighting.',
    fullDescription:
      'Our primary discipline involves taking raw residential shells or existing architecture and sculpting spaces of enduring harmony. We do not apply decorative trends; rather, we interrogate how daylight enters your rooms, how family members circulate during morning routines, and where stillness is needed.',
    heroImage:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
    suitableFor: [
      'New-build villa and penthouse owners',
      'Families desiring timeless, custom-built environments',
      'Clients who value bespoke architectural joinery and natural materials',
    ],
    keyStages: [
      {
        title: 'Spatial Exploration & Life-Pattern Brief',
        description: 'Mapping daily rituals, acoustic needs, storage requirements, and spatial flow.',
      },
      {
        title: 'Architectural Volumes & 3D Spatial Modeling',
        description: 'Developing proportion studies, sightline calibrations, and ceiling geometries.',
      },
      {
        title: 'Material, Finish & Lighting Synthesis',
        description: 'Physical mood-board curation with raw stone slabs, timber oils, and linen drapery.',
      },
      {
        title: 'Technical Execution & Tender Documentation',
        description: 'Comprehensive electrical layouts, custom joinery details, and plumbing specifications.',
      },
      {
        title: 'Site Supervision & Handover',
        description: 'Rigorous site inspections ensuring millimeter alignment of joints and stone transitions.',
      },
    ],
    deliverables: [
      'Comprehensive 2D Architectural CAD drawings & elevations',
      'Detailed joinery drawings (wardrobes, kitchen, vanity units)',
      'Lighting and electrical switching schematics',
      'Physical material and finish sample board',
      'Sanitaryware and ironmongery schedules',
      'Periodic site progress supervision reports',
    ],
    relatedProjectSlugs: ['the-quiet-house', 'olive-courtyard', 'stillwater-residence'],
  },
  {
    id: 'serv-renovation',
    slug: 'renovation-and-remodelling',
    number: '02',
    title: 'Full-Home Renovation & Remodelling',
    tagline: 'Transforming tired structural envelopes into coherent modern dwellings.',
    shortDescription:
      'Stripping outdated floorplans down to their essence to introduce light, modern flow, improved acoustics, and thermal comfort.',
    fullDescription:
      'Renovating an existing property requires forensic sensitivity to its structural integrity coupled with a courageous reimagining of its spatial potential. We peel away superficial decades-old layers to reveal high ceilings, re-route services invisibly, and transform disjointed rooms into connected volumes.',
    heroImage:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
    suitableFor: [
      'Heritage bungalow and apartment buyers requiring modern thermal and acoustic standards',
      'Homeowners wishing to open up compartmentalized layouts',
      'Clients seeking to increase property longevity and investment value',
    ],
    keyStages: [
      {
        title: 'Structural Demolition & Feasibility Audit',
        description: 'Inspecting load-bearing elements, plumbing shafts, and structural slab tolerances.',
      },
      {
        title: 'Floorplan Optimization & Service Re-routing',
        description: 'Re-engineering HVAC ducting, plumbing lines, and electrical conduits.',
      },
      {
        title: 'Envelope Thermal & Acoustic Lining',
        description: 'Installing acoustic insulation, double-glazed fenestration, and moisture membranes.',
      },
      {
        title: 'Material Application & Finishes',
        description: 'Laying seamless stone flooring, custom architectural doors, and lime plaster coatings.',
      },
    ],
    deliverables: [
      'Demolition and structural reconfiguration drawings',
      'HVAC and MEP retrofitting coordination blueprints',
      'Window and door replacement schedules',
      'Complete interior architecture finish package',
    ],
    relatedProjectSlugs: ['raw-and-refined-loft', 'stillwater-residence'],
  },
  {
    id: 'serv-space-planning',
    slug: 'space-planning',
    number: '03',
    title: 'Spatial Architecture & Space Planning',
    tagline: 'Solving the geometry of volume, sightlines, and daily movement.',
    shortDescription:
      'Rigorous analysis and re-configuration of layouts to maximize daylight, cross-ventilation, functional privacy, and intuitive flow.',
    fullDescription:
      'Before choosing a single finish or fabric, a home must feel effortless in its circulation. Our space planning service re-evaluates proportions, eradicates awkward dead hallways, designs intuitive zones of rest and gathering, and establishes views that guide the eye toward natural light.',
    heroImage:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    suitableFor: [
      'Clients reviewing pre-construction developer floorplans',
      'Owners of complex, non-orthogonal or narrow residential footprints',
      'Families needing adaptive spaces that shift between privacy and entertaining',
    ],
    keyStages: [
      {
        title: 'Circulation & Flow Mapping',
        description: 'Analyzing user paths, entry vistas, cross-ventilation, and privacy hierarchy.',
      },
      {
        title: 'Multi-Option Spatial Scenarios',
        description: 'Presenting alternative structural layout concepts with pros and trade-offs.',
      },
      {
        title: 'Zoning & Micro-Architectural Partitions',
        description: 'Designing pocket doors, low-profile partitions, and acoustic screening.',
      },
    ],
    deliverables: [
      'Measured spatial layout options (1:50 scale)',
      'Circulation analysis diagrams',
      'Furniture dimension clearance schedules',
      'Partition and door location plan',
    ],
    relatedProjectSlugs: ['stillwater-residence', 'the-quiet-house'],
  },
  {
    id: 'serv-materials',
    slug: 'materials-and-finishes',
    number: '04',
    title: 'Material & Finish Curation',
    tagline: 'Tactile palettes of unpolished stone, honest hardwoods, and lime.',
    shortDescription:
      'Sourcing, testing, and curating mineral stone, handmade lime plasters, artisanal woods, and textiles that age with distinction.',
    fullDescription:
      'We believe materials should feel genuine beneath fingertips and barefoot mornings. We reject synthetic veneers, imitation printed tiles, and glossy lacquers. Instead, we collaborate directly with quarries, timber mills, and metalworkers to select materials that develop a rich, living patina.',
    heroImage:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80',
    suitableFor: [
      'Clients seeking low-VOC, breathable, and natural living environments',
      'Projects requiring authentic stone, lime, and timber sourcing',
      'Homeowners who appreciate imperfections and natural aging over sterile perfection',
    ],
    keyStages: [
      {
        title: 'Quarry & Mill Sourcing Dialogue',
        description: 'Selecting individual stone blocks and timber flitches for consistent grain character.',
      },
      {
        title: 'Physical Sample Curation',
        description: 'Creating bespoke mock-ups testing surface finishes under artificial and daylight conditions.',
      },
      {
        title: 'Specification Book & Maintenance Guide',
        description: 'Formulating protective sealant recipes using natural waxes and mineral silicates.',
      },
    ],
    deliverables: [
      'Custom boxed physical material palette library',
      'Detailed procurement specification sheets with supplier contacts',
      'Testing data for stone absorption, slip-resistance, and timber moisture',
      'Long-term maintenance and patination protocol guide',
    ],
    relatedProjectSlugs: ['olive-courtyard', 'the-quiet-house'],
  },
  {
    id: 'serv-furniture',
    slug: 'furniture-and-styling',
    number: '05',
    title: 'Bespoke Furniture & Architectural Styling',
    tagline: 'Sculptural pieces and curated vintage objects in dialogue with architecture.',
    shortDescription:
      'Commissioning one-of-a-kind timber pieces, sourcing sculptural contemporary lighting, and styling spaces with fine art and ceramics.',
    fullDescription:
      'Furniture should feel like an integral continuation of the interior architecture rather than decorative clutter dropped into a room. We design bespoke dining tables, low-slung armchairs, and monolithic vanities, partnering with master joiners and ceramicists to produce heirloom-grade pieces.',
    heroImage:
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=80',
    suitableFor: [
      'Homes that require custom furniture scaled to specific room geometries',
      'Clients seeking to build a focused collection of art, ceramics, and textiles',
      'Spaces that need architectural completion down to hardware and linen styling',
    ],
    keyStages: [
      {
        title: 'Furniture Scale & Silhouette Planning',
        description: 'Drafting custom pieces that harmonize with wall datums and window heights.',
      },
      {
        title: 'Artisan Prototyping & Joinery Inspection',
        description: 'Reviewing joinery mockups, foam densities, and upholstery tailoring.',
      },
      {
        title: 'Final Styling & Placement',
        description: 'Curating objects, botanical compositions, and fine art on site.',
      },
    ],
    deliverables: [
      'Bespoke furniture workshop fabrication drawings',
      'Fabric and leather upholstery specification schedule',
      'Procurement and installation logistics timeline',
      'On-site art and accessory curation',
    ],
    relatedProjectSlugs: ['stillwater-residence', 'the-limestone-retreat'],
  },
  {
    id: 'serv-hospitality',
    slug: 'hospitality-interiors',
    number: '06',
    title: 'Boutique Hospitality Interiors',
    tagline: 'Memorable, atmosphere-driven lodges, retreats, and private clubs.',
    shortDescription:
      'Crafting quiet luxury, sensory retreats, and intimate dining spaces that build deep guest affection through material authenticity.',
    fullDescription:
      'In a world of uniform commercial hospitality, memorable destinations differentiate themselves through soul, restraint, and local vernacular. We design intimate boutique hotels, alpine lodges, and heritage retreats that feel deeply rooted in their geography and provide guests with true sensory deceleration.',
    heroImage:
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=80',
    suitableFor: [
      'Boutique hotel owners and luxury wilderness retreat operators',
      'Developers creating private membership clubs and wellness sanctums',
      'Fine dining establishments requiring nuanced acoustic and lighting environments',
    ],
    keyStages: [
      {
        title: 'Brand Concept & Sensory Narrative',
        description: 'Defining the emotional journey of the guest from arrival to suite sanctuary.',
      },
      {
        title: 'Guest Suite & Public Volume Architecture',
        description: 'Calibrating acoustics, luggage flow, intuitive lighting, and luxury bathrooms.',
      },
      {
        title: 'Commercial Durability Engineering',
        description: 'Testing natural finishes for commercial wear without compromising tactile warmth.',
      },
    ],
    deliverables: [
      'Master concept presentation & guest journey narrative',
      'Complete architectural drawings for public and private zones',
      'Custom commercial-grade furniture and lighting schedules',
      'Operational handover and styling protocol',
    ],
    relatedProjectSlugs: ['the-limestone-retreat', 'coastal-pavilion'],
  },
];

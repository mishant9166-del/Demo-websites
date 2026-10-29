import type { ProjectItem } from '../types/interior';

export const FORMA_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-quiet-house',
    slug: 'the-quiet-house',
    title: 'The Quiet House',
    subtitle: 'Residential Sanctuary in Sal-Wood & Lime Plaster',
    location: 'Dehradun, Foothills',
    type: 'Residential',
    year: '2024',
    area: '5,400 sq ft',
    heroImage:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    secondaryImage:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1400&q=80',
    ],
    overview:
      'Set against the deodar slopes of Dehradun, The Quiet House is an exercise in acoustic stillness and tactile honesty. The home draws its palette from its surrounding riverbed gravel, unpolished limestone, and reclaimed sal timber, creating an unbroken continuity between the mountain fog and internal living volumes.',
    brief:
      'The clients, a couple dividing their time between New Delhi and the hills, sought a retreat devoid of visual noise. The brief prioritized quiet reading nooks, natural thermal retention through monolithic materials, concealed storage, and unobstructed views of the morning mist.',
    approach:
      'We pared down wall transitions, employing floor-to-ceiling lime plaster finishes with softly radiused corners. Joinery was integrated flush into partitions, while daylight was calibrated through deep clerestory reveals to prevent harsh noon glare.',
    materials: [
      {
        name: 'Honed Kota Stone',
        category: 'Stone',
        description: 'Velvety grey-green natural limestone laid in wide uninterrupted slabs.',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Reclaimed Sal Timber',
        category: 'Timber',
        description: 'Dense regional hardwood finished with cold-pressed natural linseed oils.',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Mineral Lime Plaster',
        category: 'Plaster',
        description: 'Breathable, matte wall coating with subtle tonal shifts that catch low light.',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Natural Raw Linen',
        category: 'Textile',
        description: 'Unbleached Belgian flax drapery providing diffused privacy and soft shadows.',
        image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80',
      },
    ],
    featured: true,
    layoutVariant: 'wide',
  },
  {
    id: 'proj-olive-courtyard',
    slug: 'olive-courtyard',
    title: 'Olive Courtyard',
    subtitle: 'Contemporary Sandstone Villa Organized Around Sky & Shadow',
    location: 'Jaipur, Rajasthan',
    type: 'Villa',
    year: '2023',
    area: '7,200 sq ft',
    heroImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    secondaryImage:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    ],
    overview:
      'Located on the arid outskirts of Jaipur, Olive Courtyard reimagines the traditional Haveli courtyard through a contemporary, sculptural lens. Massive Dholpur sandstone walls shield the home from desert heat, opening inward to a tranquil water basin and ancient olive trees.',
    brief:
      'The family required a multi-generational residence that could host large seasonal gatherings without sacrificing intimacy. Thermal efficiency, privacy from the street, and a seamless flow between shaded loggias and living spaces were paramount.',
    approach:
      'We anchored the plan with double-height rammed-earth and sandstone masonry, carving out deep verandas that temper harsh sunlight into soft, atmospheric glow. Custom low-slung oak banquettes and brass accents bring warmth to the cool stone surfaces.',
    materials: [
      {
        name: 'Dholpur Sandstone',
        category: 'Stone',
        description: 'Fine-grained golden beige sandstone, dressed by local stonemasons.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Smoked Oak',
        category: 'Timber',
        description: 'Thermal-treated oak with rich chocolate undertones and wire-brushed grain.',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Aged Bronze Hardware',
        category: 'Metal',
        description: 'Living patinated hardware designed to darken gracefully with daily touch.',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80',
      },
    ],
    featured: true,
    layoutVariant: 'split',
  },
  {
    id: 'proj-stillwater-residence',
    slug: 'stillwater-residence',
    title: 'Stillwater Residence',
    subtitle: 'High-Floor Coastal Apartment in Smoked Timber & Travertine',
    location: 'Worli Sea Face, Mumbai',
    type: 'Apartment',
    year: '2024',
    area: '3,850 sq ft',
    heroImage:
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
    secondaryImage:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=80',
    ],
    overview:
      'Occupying the 28th floor overlooking the Arabian Sea, Stillwater Residence is conceived as a tranquil cloud-level pavilion. The layout replaces traditional apartment partitions with sliding fluted-wood screens, creating fluid perspectives that follow the sun across Mumbai’s coastal horizon.',
    brief:
      'A collector couple desired a space where museum-grade Indian modern art could coexist with relaxed coastal everyday living. The original developer floorplan felt compartmentalized and dark despite large panoramic windows.',
    approach:
      'We stripped the interior down to its structural concrete core. We introduced continuous micro-cement flooring, a monolithic travertine kitchen island that doubles as a communal bar, and ceiling pockets for soft indirect linear lighting.',
    materials: [
      {
        name: 'Roman Silver Travertine',
        category: 'Stone',
        description: 'Cross-cut unfilled travertine displaying linear fossilized ocean beds.',
        image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Fluted American Walnut',
        category: 'Timber',
        description: 'Precision-milled acoustic wood panelling providing tactile warmth and depth.',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Brushed Stainless Steel',
        category: 'Metal',
        description: 'Non-reflective architectural grade metalwork in the scullery and prep kitchen.',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
      },
    ],
    featured: true,
    layoutVariant: 'portrait',
  },
  {
    id: 'proj-limestone-retreat',
    slug: 'the-limestone-retreat',
    title: 'The Limestone Retreat',
    subtitle: 'Boutique Forest Lodge Celebrating Alpine Restraint',
    location: 'Kasauli, Himachal Pradesh',
    type: 'Hospitality',
    year: '2023',
    area: '12,500 sq ft',
    heroImage:
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85',
    secondaryImage:
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
    ],
    overview:
      'Nestled on a wooded pine ridge, this eight-suite boutique lodge creates a sanctuary for travellers seeking restorative slowness. Dry-stacked mountain stone forms the spine of the architecture, punctured by floor-to-ceiling glass pavilions that bring the pine forest directly into every room.',
    brief:
      'The client envisioned an intimate mountain stay that eschewed colonial cliches in favour of a restrained, contemporary interpretation of Himalayan timber-and-stone building traditions.',
    approach:
      'Each guest suite is designed around an open-hearth fireplace and a sunken terrazzo bath overlooking the valley. We custom-designed every piece of furniture using local pine and raw brass, hand-buffed with beeswax.',
    materials: [
      {
        name: 'Dry-Stack Fieldstone',
        category: 'Stone',
        description: 'Unmortared local mountain stone that anchors the buildings to the ridge.',
        image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Charred Pine (Shou Sugi Ban)',
        category: 'Timber',
        description: 'Naturally preserved charred wood cladding with a silvery, weather-resistant sheen.',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Cast Terrazzo',
        category: 'Plaster',
        description: 'Aggregate terrazzo poured in situ with riverbed quartzite chips.',
        image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=600&q=80',
      },
    ],
    featured: true,
    layoutVariant: 'wide',
  },
  {
    id: 'proj-raw-refined-loft',
    slug: 'raw-and-refined-loft',
    title: 'Raw & Refined Loft',
    subtitle: 'Adaptive Reuse of an Industrial Brick Atelier',
    location: 'Okhla Industrial Area, New Delhi',
    type: 'Commercial',
    year: '2022',
    area: '4,200 sq ft',
    heroImage:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    secondaryImage:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=80',
    ],
    overview:
      'A former 1970s garment warehouse transformed into a hybrid design studio and private residence. The project celebrates the building’s original exposed kiln-burnt brick and reinforced concrete trusses while inserting delicate black-steel partitions and warm oak cabinetry.',
    brief:
      'To create an inspiring, multifunctional space for an industrial designer that balances working prototype workshops with serene living quarters and quiet acoustic separation.',
    approach:
      'We treated the warehouse volume as a protected shell, inserting floating timber mezzanine boxes that divide public presentation zones from private resting alcoves without blocking overhead sawtooth skylights.',
    materials: [
      {
        name: 'Exposed Kiln Brick',
        category: 'Stone',
        description: 'Historic terracotta brickwork restored and sealed with breathable matte wax.',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Blackened Steel',
        category: 'Metal',
        description: 'Hot-rolled steel profiles with exposed welded joints and bees-waxed patina.',
        image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80',
      },
    ],
    featured: false,
    layoutVariant: 'split',
  },
  {
    id: 'proj-coastal-pavilion',
    slug: 'coastal-pavilion',
    title: 'Coastal Pavilion',
    subtitle: 'Monolithic Seafront Villa in Cast Concrete & Teak',
    location: 'Awas Beach, Alibaug',
    type: 'Villa',
    year: '2024',
    area: '6,600 sq ft',
    heroImage:
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
    secondaryImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1400&q=80',
    ],
    overview:
      'Standing mere meters from the Arabian Sea, Coastal Pavilion was conceived as a monolithic concrete formation eroded by marine winds. Low cantilevered rooflines frame the horizon, while teak brise-soleil panels regulate the ocean breeze.',
    brief:
      'A multi-generational Mumbai family requested an effortless weekend escape that could withstand coastal salinity and heavy monsoon downpours while maintaining open-air indoor-outdoor flow.',
    approach:
      'All structural concrete was mixed with white aggregates and local sands. Custom solid teak pivot doors disappear entirely into perimeter pocket walls, unifying living areas with outdoor plunge pools and coconut groves.',
    materials: [
      {
        name: 'Cast Board-Formed Concrete',
        category: 'Stone',
        description: 'Tactile textured concrete retaining natural timber grain impressions.',
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80',
      },
      {
        name: 'Aged Coastal Teak',
        category: 'Timber',
        description: 'Naturally oil-rich plantation teak resistant to saline air and humidity.',
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80',
      },
    ],
    featured: false,
    layoutVariant: 'portrait',
  },
];

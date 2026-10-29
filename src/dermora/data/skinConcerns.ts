import type { SkinConcern } from '../types/dermora';

export const skinConcerns: SkinConcern[] = [
  {
    id: 'cn-1',
    slug: 'acne-and-breakouts',
    title: 'Acne, Congestion & Breakouts',
    category: 'Inflammatory Skin',
    summary: 'Understanding the biological mechanisms behind hormonal blemishes, comedones, and follicular inflammation.',
    description: 'Acne develops when hair follicles become plugged by dead epidermal cells and excess sebum. In response, natural cutaneous flora trigger localized inflammation, leading to papules, pustules, or tender cysts. Professional dermatological guidance helps balance sebum production, normalize cellular turnover, and avoid long-term textural scarring.',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    commonSigns: [
      'Recurrent inflammatory blemishes along the lower cheeks and jawline',
      'Non-inflammatory blackheads and closed micro-comedones',
      'Skin redness, sensitivity, and oiliness accompanied by underlying dehydration'
    ],
    relatedTreatmentSlugs: ['acne-consultation', 'chemical-peels', 'sensitive-skin-consultation']
  },
  {
    id: 'cn-2',
    slug: 'uneven-pigmentation',
    title: 'Uneven Pigmentation & Melasma',
    category: 'Pigmentary Concerns',
    summary: 'The science of melanogenesis, post-inflammatory marks, sun lentigines, and hormonal pigment patches.',
    description: 'Melanin protects cellular DNA from ultraviolet radiation. However, hormonal fluctuations, inflammatory acne, and cumulative daylight exposure can cause localized clusters of melanocytes to overproduce pigment. Successful management requires daily broad-spectrum photoprotection alongside gentle, tyrosinase-inhibiting formulations.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    commonSigns: [
      'Symmetrical brown or grayish patches on the forehead, cheeks, and upper lip',
      'Persistent dark spots remaining long after active blemishes heal',
      'Dullness and mottled freckling on areas exposed to frequent sunlight'
    ],
    relatedTreatmentSlugs: ['pigmentation-assessment', 'chemical-peels', 'skin-rejuvenation']
  },
  {
    id: 'cn-3',
    slug: 'dry-and-sensitive-skin',
    title: 'Dry, Reactive & Sensitive Skin',
    category: 'Barrier Health',
    summary: 'Restoring the stratum corneum lipid matrix when skin feels tight, stinging, or chronically flushed.',
    description: 'When the outermost layer of your skin lacks vital ceramides, cholesterol, and free fatty acids, trans-epidermal water loss increases significantly. Environmental irritants and active skincare can then penetrate unchecked, triggering burning sensations, erythema, and micro-flaking. Rebuilding your barrier requires soothing, minimalist formulations.',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    commonSigns: [
      'Stinging or tingling sensations when applying even basic moisturizers',
      'Visible surface flaking, tightness, and windburn vulnerability',
      'Facial flushing triggered by rapid temperature changes or mild stress'
    ],
    relatedTreatmentSlugs: ['sensitive-skin-consultation', 'general-dermatology']
  },
  {
    id: 'cn-4',
    slug: 'hair-thinning-and-scalp',
    title: 'Hair Thinning & Scalp Concerns',
    category: 'Trichology',
    summary: 'Exploring the hair cycle, diffuse shedding (telogen effluvium), and chronic scalp micro-inflammation.',
    description: 'Each hair follicle undergoes distinct phases of growth (anagen), regression (catagen), and rest (telogen). Physical illnesses, nutritional gaps, hormonal shifts, and chronic tension can push higher percentages of follicles prematurely into shedding. A detailed scalp and trichoscopic check identifies the underlying drivers of thinning.',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    commonSigns: [
      'Increased hair fall noticed in the shower or on hairbrushes',
      'Visible thinning along the central parting or temple recession',
      'Persistent scalp itchiness, flaking, or tender redness around roots'
    ],
    relatedTreatmentSlugs: ['hair-scalp-consultation', 'general-dermatology']
  },
  {
    id: 'cn-5',
    slug: 'skin-texture-and-pores',
    title: 'Skin Texture & Enlarged Pores',
    category: 'Structural Health',
    summary: 'How collagen density, sebum flow, and cellular exfoliation dictate skin smoothness.',
    description: 'Pores do not have muscles to open and close, but their visual prominence is dictated by follicular sebum congestion, loss of surrounding dermal collagen support, and sluggish dead cell shedding. Clinical hydroxy acid treatments and non-ablative rejuvenation help clear congestion and restore surface bounce.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f416d84f23b?auto=format&fit=crop&w=800&q=80',
    commonSigns: [
      'Rough, bumpy texture that prevents smooth makeup application',
      'Visible pore enlargement in the T-zone and central cheeks',
      'Sluggish cellular turnover causing a dull, lackluster appearance'
    ],
    relatedTreatmentSlugs: ['chemical-peels', 'skin-rejuvenation', 'acne-consultation']
  },
  {
    id: 'cn-6',
    slug: 'signs-of-skin-ageing',
    title: 'Collagen Longevity & Fine Lines',
    category: 'Longevity Care',
    summary: 'A preventative approach to preserving intrinsic elasticity and protecting structural resilience.',
    description: 'Beginning in our mid-twenties, endogenous collagen synthesis declines by approximately 1% each year. Environmental stressors (particularly UV radiation and air pollution) generate reactive oxygen species that accelerate elastin breakdown. Our care emphasizes antioxidant defense, topical peptides, and graceful collagen preservation.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    commonSigns: [
      'Fine expression lines around the eye contours and smile lines',
      'Gradual loss of cheek elasticity and subtle jawline softening',
      'Thinning, crepey texture on the neck and décolletage'
    ],
    relatedTreatmentSlugs: ['anti-ageing-treatments', 'skin-rejuvenation', 'pigmentation-assessment']
  },
  {
    id: 'cn-7',
    slug: 'scar-concerns',
    title: 'Post-Acne & Post-Surgical Scars',
    category: 'Textural Repair',
    summary: 'How biological wound remodeling impacts fibrous tissue and textural indentations.',
    description: 'When deep cutaneous inflammation destroys dermal tissue, the body repairs the wound with disordered collagen bundles, resulting in atrophic rolling, boxcar, or ice-pick depressions. Targeted micro-needling, subcision, and fractional light therapy trigger controlled micro-remodeling to lift and smooth indentations.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    commonSigns: [
      'Textural dips or shadowing visible in side-lighting',
      'Persistent pink, red, or dark discoloration within old scar sites',
      'Fibrotic tethering causing localized skin stiffening'
    ],
    relatedTreatmentSlugs: ['scar-assessment', 'skin-rejuvenation', 'chemical-peels']
  },
  {
    id: 'cn-8',
    slug: 'general-skin-health',
    title: 'General Skin Health & Sun Protection',
    category: 'Preventative Care',
    summary: 'The fundamentals of skin barrier preservation, daily UV filtering, and regular mole surveillance.',
    description: 'Skin is the human body’s largest sensory and protective organ. Sustaining its health requires consistent hydration, balanced cleansing, daily broad-spectrum sun filtering, and annual dermoscopic mole checks. Early detection of atypical changes is the cornerstone of lifelong skin safety.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    commonSigns: [
      'New or changing moles with irregular borders or varying shades',
      'Chronic dry patches that do not resolve with standard moisturizers',
      'Uncertainty regarding optimal daily sun protection practices'
    ],
    relatedTreatmentSlugs: ['general-dermatology', 'sensitive-skin-consultation']
  }
];

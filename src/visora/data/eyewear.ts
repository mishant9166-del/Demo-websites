import type { EyewearItem } from '../types/visora';

export const eyewearCollection: EyewearItem[] = [
  {
    id: 'frame-1',
    slug: 'lumina-titanium-round',
    name: 'Lumina 01 Round',
    category: 'Lightweight Titanium',
    priceINR: 14200,
    description:
      'Engineered in lightweight Japanese beta-titanium with laser-etched filigree and screwless barrel hinges. Featherlight on the bridge for uninterrupted everyday comfort.',
    material: 'Japanese β-Titanium & Medical Silicone Pads',
    frameShape: 'Pantoscopic Round',
    colorOptions: [
      { name: 'Brushed Pewter', hex: '#636569' },
      { name: 'Antique Gold', hex: '#C29F68' },
      { name: 'Midnight Matte', hex: '#15263B' },
    ],
    image:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80',
    dimensions: '48-21-145 mm',
    suitableFor: 'Medium to narrow face profiles; ideal for high negative prescriptions.',
    features: [
      'Ultra-light 11.2g total frame weight',
      'Hypoallergenic medical-grade titanium nose pads',
      'Micro-grooved rim wire preventing lens thickness flare',
      'Precision laser-cut flexible temples',
    ],
    isBestseller: true,
  },
  {
    id: 'frame-2',
    slug: 'artisan-acetate-crown-panto',
    name: 'Artisan Crown Panto',
    category: 'Acetate Classics',
    priceINR: 11800,
    description:
      'Handcrafted from 8mm cured Mazzucchelli cellulose acetate. Features a subtle bevel along the brow line and custom 5-barrel German rivets.',
    material: 'Italian Organic Bio-Acetate',
    frameShape: 'Crown Panto / Architectural Hex',
    colorOptions: [
      { name: 'Havana Tortoise', hex: '#704222' },
      { name: 'Smoky Olive', hex: '#4A5B48' },
      { name: 'Crystal Champagne', hex: '#E6DECE' },
    ],
    image:
      'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1000&q=80',
    dimensions: '47-22-145 mm',
    suitableFor: 'Universal fit; particularly flattering on oval and heart-shaped faces.',
    features: [
      'Sustainable vegetable-derived bio-acetate',
      'Reinforced core wire with custom engraving',
      'Hand-polished with organic walnut shell tumbling for 72 hours',
      'Compatible with high-index and progressive lenses',
    ],
    isNew: true,
  },
  {
    id: 'frame-3',
    slug: 'solis-polarized-navigator',
    name: 'Solis Polarized Navigator',
    category: 'Sunglasses',
    priceINR: 16500,
    description:
      'A refined contemporary interpretation of the classic pilot silhouette. Fitted with mineral glass polarized lenses offering 100% UVA/UVB protection and backside anti-reflective coating.',
    material: 'Stainless Steel & Acetate Temple Tips',
    frameShape: 'Modern Aviator / Navigator',
    colorOptions: [
      { name: 'Gunmetal / Forest Green Lens', hex: '#2C3A33' },
      { name: 'Rose Gold / Amber Gradient', hex: '#87513C' },
      { name: 'Matte Obsidian / Neutral Grey', hex: '#1C1F24' },
    ],
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80',
    dimensions: '53-18-142 mm',
    suitableFor: 'Medium to wide facial proportions; exceptional driving and waterside clarity.',
    features: [
      'Category 3 Japanese polarized mineral glass lenses',
      'Hydrophobic and oleophobic smudge-resistant coating',
      'Dual-bridge architecture with soldered titanium bridge clips',
      'Prescription sun-lens glazing available upon request',
    ],
    isBestseller: true,
  },
  {
    id: 'frame-4',
    slug: 'verve-minimalist-square',
    name: 'Verve Studio Square',
    category: 'Optical Frames',
    priceINR: 9800,
    description:
      'Understated square geometry crafted for everyday intellectual poise. Delicate rim edges and sculpted temple bevels keep the line quiet and comfortable throughout long studio days.',
    material: 'Ultra-Dense Japanese Acetate & Monel Core',
    frameShape: 'Soft Tailored Square',
    colorOptions: [
      { name: 'Pitch Black Gloss', hex: '#111214' },
      { name: 'Translucent Grey', hex: '#777A82' },
      { name: 'Deep Amber Horn', hex: '#8B5A2B' },
    ],
    image:
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=80',
    dimensions: '51-19-145 mm',
    suitableFor: 'Round and soft oval facial contours seeking defined architectural framing.',
    features: [
      'Engineered ergonomic keyhole bridge',
      'Comfort-tapered temple paddles',
      'Embedded anti-loosening Teflon hinge washers',
      'Directly compatible with digital blue-filter lenses',
    ],
  },
  {
    id: 'frame-5',
    slug: 'aero-rimless-silhouette',
    name: 'Aero Minimal Rimless',
    category: 'Lightweight Titanium',
    priceINR: 17900,
    description:
      'An invisible optical presence. Three-piece rimless chassis milled from medical-grade pure titanium, custom-shaped to your preferred lens contour and pupillary baseline.',
    material: 'Pure Grade-5 Titanium',
    frameShape: 'Custom Contour Rimless',
    colorOptions: [
      { name: 'Brushed Silver', hex: '#B8BABF' },
      { name: 'Satin Dark Teal', hex: '#3E7370' },
      { name: 'Warm Bronze', hex: '#7A5E3F' },
    ],
    image:
      'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1000&q=80',
    dimensions: 'Custom lens sizing (std: 50-19-145 mm)',
    suitableFor: 'Anyone seeking non-intrusive, weightless eyewear that does not alter facial features.',
    features: [
      'Incredible 7.8g chassis weight',
      'Patented compression mount bushing system (screw-free optics)',
      'Custom lens shape adaptation at time of order',
      'Ultra-durable memory-flex titanium bridge',
    ],
    isNew: true,
  },
  {
    id: 'frame-6',
    slug: 'marina-cat-eye-acetate',
    name: 'Marina Sculpted Cat-Eye',
    category: 'Acetate Classics',
    priceINR: 12400,
    description:
      'Softly lifted cat-eye contours with chamfered upper brows that draw gaze upward with natural elegance. Hand-finished with double diamond pin rivets.',
    material: 'Cured Italian Acetate',
    frameShape: 'Soft Sculpted Cat-Eye',
    colorOptions: [
      { name: 'Bordeaux Plum', hex: '#4A1D2B' },
      { name: 'Classic Dark Tortoise', hex: '#5E381A' },
      { name: 'Black Onyx', hex: '#181A1C' },
    ],
    image:
      'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=1000&q=80',
    dimensions: '52-17-140 mm',
    suitableFor: 'Square, oval, and heart-shaped faces seeking gentle facial lifting geometry.',
    features: [
      'Tapered bridge providing balanced weight distribution',
      'Beveled brow ridges creating rich light reflection',
      'Smooth hand-finished inner paddle edges',
      'Includes premium hard-shell calfskin case and microfiber cloth',
    ],
  },
  {
    id: 'frame-7',
    slug: 'nimbus-geometric-hex',
    name: 'Nimbus Geometric Wire',
    category: 'Optical Frames',
    priceINR: 13500,
    description:
      'Subtle octagonal silhouette formed from single-gauge stainless wire. A progressive aesthetic for creative professionals who appreciate balanced geometry.',
    material: 'Spring Stainless Steel & Acetate Windsor Rims',
    frameShape: 'Octagonal Geometric',
    colorOptions: [
      { name: 'Matte Rose Gold', hex: '#B88B7D' },
      { name: 'Brushed Charcoal', hex: '#3C4048' },
      { name: 'Honey Windsor Wire', hex: '#C4974F' },
    ],
    image:
      'https://images.unsplash.com/photo-1546180205-4ebd64f9c8f0?auto=format&fit=crop&w=1000&q=80',
    dimensions: '49-20-145 mm',
    suitableFor: 'Medium face widths seeking an intellectual, design-forward look.',
    features: [
      'High-precision octagonal profile with radiused angles',
      'Micro-screwed windsor rim with Italian acetate sleeve',
      'Flexible spring hinges engineered for 100,000 cycles',
      'Hypoallergenic acetate temple end covers',
    ],
  },
  {
    id: 'frame-8',
    slug: 'zephyr-sport-polarized-sunglass',
    name: 'Zephyr Active Sun',
    category: 'Sunglasses',
    priceINR: 15200,
    description:
      'Performance-grade sunglasses blending refined urban aesthetics with secure temple grips. Lightweight TR90 polymer paired with hydrophobic polarized optics.',
    material: 'TR-90 Swiss Memory Polymer & Titanium Hinges',
    frameShape: 'Wrap Hybrid Rectangular',
    colorOptions: [
      { name: 'Matte Slate / Deep Blue Mirror', hex: '#213347' },
      { name: 'Frosted Grey / Crimson Polarized', hex: '#585D64' },
      { name: 'Pitch Matte / Grey Polarized', hex: '#181A1D' },
    ],
    image:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80',
    dimensions: '55-17-142 mm',
    suitableFor: 'Active outdoor pursuits, cycling, sailing, and everyday glare mitigation.',
    features: [
      '100% polarized glare blocking for water and road surfaces',
      'Hydrophilic rubber nose bridge pads that grip securely under perspiration',
      'Impact-resistant polycarbonate Category 3 lenses',
      'Saltwater and sweat corrosion resistant titanium internal hinges',
    ],
  },
];

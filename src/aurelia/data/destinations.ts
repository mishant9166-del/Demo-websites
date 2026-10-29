import type { DestinationItem } from '../types/hospitality';

export const AURELIA_DESTINATIONS: DestinationItem[] = [
  {
    id: 'dest-himalayan-hideaway',
    slug: 'himalayan-hideaway',
    name: 'Himalayan Hideaway',
    region: 'Garhwal & Kumaon Foothills',
    state: 'Uttarakhand',
    tagline: 'Misty pine ridges, glacial cedar horizons, and meditative stillness.',
    type: 'Mountains',
    heroImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Perched at 6,800 feet above sea level, our Himalayan collection embraces the eternal quiet of old-growth deodar forests. Handcrafted stone fireplaces, heated cedar plunge pools, and floor-to-ceiling glass pavilions open directly to the snow-crested peaks of Nanda Devi.',
    landscapeAtmosphere:
      'Crisp alpine mountain air, whispering deodar pines, morning birdsong, and starry twilight over snow peaks.',
    bestTimeToVisit: 'October to May for clear Himalayan panoramas; July to August for lush monsoon mist.',
    featuredExperiences: [
      'Private Sunrise Pranayama on the Heli-Deck',
      'Alpine Foraging with the Executive Chef',
      'Himalayan Cedarwood Heated Bath Ritual',
    ],
    propertyIds: ['stay-cloud-peak-retreat'],
  },
  {
    id: 'dest-coastal-reverie',
    slug: 'coastal-reverie',
    name: 'Coastal Reverie',
    region: 'South Konkan & North Goa Coast',
    state: 'Goa',
    tagline: 'Golden hour surf, barefoot oceanfront cabanas, and coconut groves.',
    type: 'Coastal',
    heroImage:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Where the turquoise Arabian Sea brushes against unhurried sands, our coastal properties offer private beach access, freshwater infinity lagoons, and open-air pavilion dining. Every suite is framed by swaying palms, washed Belgian linens, and gentle ocean breezes.',
    landscapeAtmosphere:
      'Soft ocean roar, sun-bleached teak decks, warm sea breezes, and private barefoot beach seclusion.',
    bestTimeToVisit: 'November to April for balmy sunshine and tranquil ocean waters.',
    featuredExperiences: [
      'Private Dhow Sailing at Sunset',
      'Oceanfront Sandbar Candlelit Dinner',
      'Ayurvedic Kokum & Sea-Salt Exfoliation',
    ],
    propertyIds: ['stay-ocean-palm-sanctuary'],
  },
  {
    id: 'dest-forest-house',
    slug: 'the-forest-house',
    name: 'The Forest House',
    region: 'Western Ghats Rainforest',
    state: 'Kerala',
    tagline: 'Canopy treehouses, emerald cardamom valleys, and deep sensory restoration.',
    type: 'Rainforest',
    heroImage:
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'Set within an organic 150-acre bio-diverse sanctuary, The Forest House invites guests into intimate communion with the wild. Elevated timber villas hover beneath the tropical canopy, where private steam rooms, natural spring pools, and botanical teas offer profound restorative healing.',
    landscapeAtmosphere:
      'Dense jungle foliage, cascading natural streams, cooling rainfall, and intoxicating aromas of wild pepper and cardamom.',
    bestTimeToVisit: 'September to March for lush verdant jungle trails and mild canopy temperatures.',
    featuredExperiences: [
      'Guided Rainforest Night Walk with Naturalist',
      'Canopy Treehouse Breakfast Experience',
      'Medicinal Herbal Bath Infusion',
    ],
    propertyIds: ['stay-rainforest-sanctuary', 'stay-tea-valley-estate'],
  },
  {
    id: 'dest-heritage-residence',
    slug: 'the-heritage-residence',
    name: 'The Heritage Residence',
    region: 'Royal Mewar & Marwar',
    state: 'Rajasthan',
    tagline: 'Carved sandstone courtyards, regal lake reflections, and timeless ceremonial elegance.',
    type: 'Heritage',
    heroImage:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    ],
    description:
      'A sanctuary of royal grandeur, our heritage retreats honor centuries of artisanal masonry, marble fretwork, and mirrored jharokhas. Dine under frescoed ceilings, glide across moonlit lakes on vintage royal barges, and surrender to restorative marma spa treatments.',
    landscapeAtmosphere:
      'Quiet courtyards with trickling marble fountains, evening sitar melodies, glowing brass lanterns, and grand palace vistas.',
    bestTimeToVisit: 'October to March for pleasant sunny days and regal starlit desert evenings.',
    featuredExperiences: [
      'Private Royal Barge Lake Cruise at Twilight',
      'Chef-led Mewari Royal Thali Tasting',
      'Sitar & Tabla Classical Courtyard Concert',
    ],
    propertyIds: ['stay-haveli-palace', 'stay-lake-pavilion'],
  },
];

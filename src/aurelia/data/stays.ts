import type { StayItem } from '../types/hospitality';

export const AURELIA_STAYS: StayItem[] = [
  {
    id: 'stay-cloud-peak-retreat',
    slug: 'aurelia-cloud-peak-himalayas',
    name: 'Aurelia Cloud Peak',
    destinationSlug: 'himalayan-hideaway',
    destinationName: 'Himalayan Hideaway',
    location: 'Mussoorie Ridge, Uttarakhand',
    propertyType: 'Mountain Resort',
    tagline: 'An alpine sanctuary where deodar forests meet snowy Himalayan horizons.',
    heroImage:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    ],
    startingPriceINR: 32000,
    startingPriceFormatted: 'From ₹32,000 / night',
    guestCapacity: 'Up to 2 adults per suite',
    shortDescription:
      'Perched at 6,800 feet amidst towering deodar pines, Aurelia Cloud Peak offers heated infinity hydrotherapy pools, stone hearth lounges, and front-row seats to the Great Himalayan range.',
    fullDescription:
      'A sanctuary designed for sensory stillness, Aurelia Cloud Peak pairs regional slate and reclaimed pine architecture with modern alpine luxuries. Guests spend mornings practicing pranayama on cantilevered wooden decks above drifting valley clouds, afternoons foraging with our botanical chef, and evenings by crackling stone hearths sipping single-origin teas.',
    amenities: [
      'Heated Alpine Infinity Hydrotherapy Pool',
      'Cedarwood Herbal Sauna & Steam Sanctuary',
      'Himalayan Botanical Dining Pavilion',
      'Stargazing Observatory Deck & Telescope',
      'Library & Mountain Hearth Lounge',
      'Private Helipad Transfers',
    ],
    diningOptions: [
      {
        name: 'The Pine Hearth',
        description: 'Locally foraged Garhwali ingredients refined into contemporary multi-course tasting menus.',
        cuisine: 'Modern Alpine & Foraged Himalayan',
      },
      {
        name: 'Ridge Twilight Bar',
        description: 'Botanical infusions, smoked cedar cocktails, and organic small plates over valley views.',
        cuisine: 'Aperitifs & Mountain Tapas',
      },
    ],
    wellnessFeatures: [
      'Himalayan Rock Salt Inhalation Chamber',
      'Outdoor Hot Spring Cedar Plunge Tubs',
      'Daily Guided Morning Yoga & Meditation',
    ],
    localActivities: [
      'Guided Pine Forest Canopy Treks',
      'Artisanal Village Pottery & Weaving Visits',
      'Birdwatching with Resident Ornithologist',
    ],
    roomSlugs: ['mountain-view-retreat-suite'],
    featured: true,
  },
  {
    id: 'stay-ocean-palm-sanctuary',
    slug: 'aurelia-ocean-palm-goa',
    name: 'Aurelia Ocean Palm',
    destinationSlug: 'coastal-reverie',
    destinationName: 'Coastal Reverie',
    location: 'Ashwem Beach, North Goa',
    propertyType: 'Oceanfront Sanctuary',
    tagline: 'Barefoot luxury villas where coconut groves dissolve into the turquoise sea.',
    heroImage:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    ],
    startingPriceINR: 54000,
    startingPriceFormatted: 'From ₹54,000 / night',
    guestCapacity: 'Up to 3 guests per ocean villa',
    shortDescription:
      'Hidden behind secluded sand dunes and palm groves, Aurelia Ocean Palm features private pool pavilions, open-air beach cabanas, and restorative ocean-mineral spa rituals.',
    fullDescription:
      'A serene antidote to crowded beaches, Ocean Palm embraces the unhurried grace of the Konkan coastline. Each private villa features its own swimming pool, sun-bleached teak daybeds, and private wooden boardwalk leading directly onto soft sands with zero commercial vendors.',
    amenities: [
      'Private Beachfront with Daybed Cabanas',
      'Freshwater Lagoon Infinity Pool',
      'Ayurvedic Coastal Wellness Shala',
      'Oceanfront Candlelit Dining Deck',
      'Complimentary Sunset Catamaran Cruising',
      'Dedicated Villa Concierge',
    ],
    diningOptions: [
      {
        name: 'Sands & Smoke',
        description: 'Fresh seafood caught daily by local artisanal fishermen, prepared over open coconut-wood embers.',
        cuisine: 'Coastal Mediterranean & Goan Sea Table',
      },
      {
        name: 'The Palm Veranda',
        description: 'Tropical juices, light ceviches, and organic breakfast banquets under swaying palms.',
        cuisine: 'All-Day Tropical Brasserie',
      },
    ],
    wellnessFeatures: [
      'Ayurvedic Abhyanga with Herbal Warm Oils',
      'Oceanview Yoga Pavilion at Dawn',
      'Sound Bath & Tibetan Singing Bowl Therapy',
    ],
    localActivities: [
      'Private Dhow Sailing to Dolphin Bays',
      'Heritage Portuguese Latin Quarter Walking Excursions',
      'Stand-Up Paddleboarding in Mangrove Estuaries',
    ],
    roomSlugs: ['private-pool-ocean-villa'],
    featured: true,
  },
  {
    id: 'stay-rainforest-sanctuary',
    slug: 'aurelia-rainforest-sanctuary-kerala',
    name: 'Aurelia Rainforest Sanctuary',
    destinationSlug: 'the-forest-house',
    destinationName: 'The Forest House',
    location: 'Wayanad Foothills, Kerala',
    propertyType: 'Forest Estate',
    tagline: 'Treehouse pavilions hovering in the biodiverse canopy of the Western Ghats.',
    heroImage:
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80',
    ],
    startingPriceINR: 28000,
    startingPriceFormatted: 'From ₹28,000 / night',
    guestCapacity: 'Up to 2 adults per treehouse',
    shortDescription:
      'Elevated treehouse pavilions constructed from sustainable teak, overlooking cascading jungle streams and spice plantations.',
    fullDescription:
      'Immerse in one of the world’s eight biodiversity hotspots. At Aurelia Rainforest Sanctuary, architecture yields entirely to nature. Experience natural spring water pools, organic Ayurvedic medicine gardens, and open-air pavilion dining where mist and birdsong form the soundtrack.',
    amenities: [
      'Natural Springwater Rock Pool',
      'Canopy Suspension Walkways',
      'Heritage Ayurvedic Panchakarma Centre',
      'Organic Farm-to-Fork Herb Gardens',
      'Rainforest Library & Observation Tower',
    ],
    diningOptions: [
      {
        name: 'The Canopy Table',
        description: 'Traditional Kerala farm delicacies seasoned with spices harvested right on the estate.',
        cuisine: 'Keralite & Malabar Botanical',
      },
    ],
    wellnessFeatures: [
      'Customized 3 to 7 Day Ayurvedic Rejuvenation programs',
      'Meditation by Cascading Forest Waterfalls',
    ],
    localActivities: [
      'Guided Night Walks to spot bioluminescent fungi',
      'Spices & Cardamom Harvesting Workshops',
    ],
    roomSlugs: ['forest-canopy-treehouse-pavilion'],
    featured: true,
  },
  {
    id: 'stay-haveli-palace',
    slug: 'aurelia-haveli-palace-jaipur',
    name: 'Aurelia Haveli Palace',
    destinationSlug: 'the-heritage-residence',
    destinationName: 'The Heritage Residence',
    location: 'Old City Gates, Jaipur, Rajasthan',
    propertyType: 'Heritage Palace',
    tagline: 'A restored 18th-century Rajput palace radiating royal heritage poise.',
    heroImage:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    ],
    startingPriceINR: 42000,
    startingPriceFormatted: 'From ₹42,000 / night',
    guestCapacity: 'Up to 2 adults per courtyard suite',
    shortDescription:
      'Step through arched gateways into colonnaded marble verandas, mirrored royal chambers, and lantern-lit courtyards serenaded by classical sitarists.',
    fullDescription:
      'Meticulously preserved by royal restoration artisans over six years, Aurelia Haveli Palace preserves royal Rajasthani courtly traditions. Featuring pure marble courtyards with floating rose petals, frescoed ceiling domes, and a private royal hammam bathhouse.',
    amenities: [
      'Marble Lotus Fountain Courtyards',
      'Royal Hammam Bathhouse & Scented Pools',
      'Rooftop View Over Historic City Forts',
      'Private Vintage Car Transfers',
      'Evening Cultural Classical Performances',
    ],
    diningOptions: [
      {
        name: 'Darbar Banquet Hall',
        description: 'Imperial recipes from royal family archives served in hand-hammered brass and silver vessels.',
        cuisine: 'Imperial Royal Rajput',
      },
    ],
    wellnessFeatures: [
      'Rosewater and Sandalwood Royal Hammam Rituals',
      'Moonlit Courtyard Acoustic Sound Baths',
    ],
    localActivities: [
      'Curated Private Access to Artisan Block-Printing Guilds',
      'Early Morning Hot Air Balloon Over Amber Hills',
    ],
    roomSlugs: ['royal-heritage-courtyard-suite'],
    featured: false,
  },
  {
    id: 'stay-tea-valley-estate',
    slug: 'aurelia-tea-valley-munnar',
    name: 'Aurelia Tea Valley Estate',
    destinationSlug: 'the-forest-house',
    destinationName: 'The Forest House',
    location: 'Kanan Devan Hills, Munnar, Kerala',
    propertyType: 'Forest Estate',
    tagline: 'Colonial stone planters bungalows surrounded by endless rolling tea carpets.',
    heroImage:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    ],
    startingPriceINR: 24000,
    startingPriceFormatted: 'From ₹24,000 / night',
    guestCapacity: 'Up to 3 guests per garden villa',
    shortDescription:
      'Experience the calm of early morning mountain fog rolling through green tea hills, firelit libraries, and single-origin tea tastings.',
    fullDescription:
      'Set across an 80-acre private organic tea plantation at 5,500 feet, this colonial-modernist estate celebrates the craft of tea cultivation. Private stone bungalows feature expansive verandas overlooking endless emerald valleys.',
    amenities: [
      'Private Tea Garden Trails & Streams',
      'Wood-Fired Hearth Library Lounge',
      'Tea Sommelier Tasting Room',
      'Croquet Lawn & Sunset Veranda',
    ],
    diningOptions: [
      {
        name: 'The Planters Mess',
        description: 'Wholesome Anglo-Indian and South Indian hill-country cooking using plantation dairy and herbs.',
        cuisine: 'Plantation Cuisine & English Teas',
      },
    ],
    wellnessFeatures: [
      'Green Tea Leaf Antioxidant Body Polishes',
      'Pranayama Walks Through Tea Canopies',
    ],
    localActivities: [
      'Artisanal Tea Plucking & Micro-Batch Processing',
      'Trek to Anamudi Reserve Viewpoint',
    ],
    roomSlugs: ['deluxe-garden-tea-villa'],
    featured: false,
  },
  {
    id: 'stay-lake-pavilion',
    slug: 'aurelia-lake-pavilion-udaipur',
    name: 'Aurelia Lake Pavilion',
    destinationSlug: 'the-heritage-residence',
    destinationName: 'The Heritage Residence',
    location: 'Lake Pichola Western Shore, Udaipur',
    propertyType: 'Private Villa',
    tagline: 'Waterfront suites floating above the mirror waters of Lake Pichola.',
    heroImage:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    ],
    startingPriceINR: 48000,
    startingPriceFormatted: 'From ₹48,000 / night',
    guestCapacity: 'Up to 2 adults per lake suite',
    shortDescription:
      'Arrive by private ceremonial wooden barge to suites featuring direct waterfront verandas overlooking the illuminated City Palace.',
    fullDescription:
      'Positioned along the quiet western shores of Lake Pichola away from boat traffic, Aurelia Lake Pavilion reflects the eternal romance of Mewar. Waterfront marble verandas, private dining jetties, and an infinity pool that merges seamlessly with the lake horizon.',
    amenities: [
      'Private Mahogany Boat Jetty & Arrival Transfers',
      'Lakeview Infinity Pool Overlooking City Palace',
      'Rooftop Astrological Stargazing Lounge',
      'Private Mewari Dining Pavilions',
    ],
    diningOptions: [
      {
        name: 'Jal Tarang Pavilion',
        description: 'Candlelit dining on the lake edge with slow-cooked Rajasthani gravies and chilled sparkling wines.',
        cuisine: 'Royal Mewari & Mediterranean Grills',
      },
    ],
    wellnessFeatures: [
      'Lakefront Sunset Yoga on the Wooden Pier',
      'Aromatic Saffron & Sandalwood Abhyanga',
    ],
    localActivities: [
      'Twilight Lake Pichola Private Cruise',
      'Guided Architectural Heritage Walk of Old Havelis',
    ],
    roomSlugs: ['ocean-view-sunset-suite'],
    featured: true,
  },
];

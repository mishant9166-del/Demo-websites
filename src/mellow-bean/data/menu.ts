import type { MenuItem, MenuCategory } from '../types/cafe';

export const MENU_ITEMS: MenuItem[] = [
  // --- COFFEE ---
  {
    id: 'item-flat-white',
    slug: 'flat-white',
    name: 'Flat White',
    category: 'Coffee',
    price: 240,
    description:
      'Double ristretto of Chikmagalur Arabica crowned with velvety, micro-textured whole milk.',
    detailedDescription:
      'Our signature house flat white celebrates balance. We pull a double ristretto shot from our medium-roast estate beans, delivering sweet chocolate notes and mild stone fruit acidity, enveloped in dense, silky steamed milk.',
    image:
      'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian'],
    isFeatured: true,
    preparationTime: '4–6 mins',
    calories: '145 kcal',
    ingredients: ['Double Ristretto Espresso', 'Steamed Whole Milk (Oat/Almond option available)'],
    allergens: ['Dairy (substitutable with Oat/Almond)'],
    flavorProfile: ['Dark Chocolate', 'Toasted Hazelnut', 'Silky Crema'],
    pairingSlug: 'butter-croissant',
  },
  {
    id: 'item-espresso',
    slug: 'espresso',
    name: 'Double Espresso',
    category: 'Coffee',
    price: 180,
    description:
      'A dense, aromatic double shot with golden-hazel crema, pulled from our single-estate Arabica.',
    detailedDescription:
      'Extracted under 9 bars of pressure on our custom La Marzocco machine. Delivers rich notes of toasted caramel, candied citrus, and a long dark-cocoa finish.',
    image:
      'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegan', 'Gluten-Free'],
    isFeatured: true,
    preparationTime: '3 mins',
    calories: '5 kcal',
    ingredients: ['18g Single-Estate Ground Arabica', 'Filtered Mineral-Balanced Water'],
    allergens: [],
    flavorProfile: ['Brown Sugar', 'Candied Orange', 'Dark Cocoa'],
    pairingSlug: 'cinnamon-roll',
  },
  {
    id: 'item-cortado',
    slug: 'cortado',
    name: 'Cortado',
    category: 'Coffee',
    price: 210,
    description:
      'Equal parts bold espresso and lightly textured warm milk served in a faceted Gibraltar glass.',
    detailedDescription:
      'The Spanish classic that cuts espresso acidity with a gentle splash of steamed milk without drowning the coffee’s deep aromatics.',
    image:
      'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian'],
    isFeatured: false,
    preparationTime: '4 mins',
    calories: '80 kcal',
    ingredients: ['Double Espresso', 'Steamed Milk (1:1 ratio)'],
    allergens: ['Dairy'],
    flavorProfile: ['Bold Espresso', 'Warm Caramel'],
    pairingSlug: 'almond-frangipane-tart',
  },
  {
    id: 'item-pour-over',
    slug: 'pour-over-single-origin',
    name: 'V60 Pour Over (Single Origin)',
    category: 'Coffee',
    price: 260,
    description:
      'Hand-brewed filter coffee highlighting delicate floral, jasmine, and citrus notes of high-altitude beans.',
    detailedDescription:
      'Brewed gently over 3.5 minutes using precise water temperatures to extract transparent floral notes, crisp acidity, and a tea-like body.',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegan', 'Gluten-Free'],
    isFeatured: false,
    preparationTime: '6 mins',
    calories: '4 kcal',
    ingredients: ['Coarse Single-Origin Arabica', 'Pre-heated Water'],
    allergens: [],
    flavorProfile: ['Jasmine Floral', 'Lemon Bergamot', 'Honeyed Peach'],
    pairingSlug: 'butter-croissant',
  },
  {
    id: 'item-cardamom-latte',
    slug: 'cardamom-spiced-latte',
    name: 'Cardamom & Honey Spiced Latte',
    category: 'Coffee',
    price: 270,
    description:
      'Espresso infused with freshly ground green cardamom, raw wildflower honey, and steamed milk.',
    detailedDescription:
      'A warm morning comfort that pays subtle homage to South Indian coffeehouse traditions. Fragrant crushed green cardamom seeds steeped directly into hot espresso and blended with raw honey.',
    image:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian', 'Chef Choice'],
    isFeatured: false,
    isSeasonal: true,
    preparationTime: '5 mins',
    calories: '190 kcal',
    ingredients: ['Double Espresso', 'Green Cardamom Infusion', 'Wildflower Honey', 'Whole Milk'],
    allergens: ['Dairy'],
    flavorProfile: ['Fragrant Cardamom', 'Warm Honey', 'Creamy Espresso'],
    pairingSlug: 'cinnamon-roll',
  },

  // --- COLD DRINKS ---
  {
    id: 'item-iced-vanilla-latte',
    slug: 'iced-vanilla-latte',
    name: 'Iced Vanilla Bean Latte',
    category: 'Cold Drinks',
    price: 270,
    description:
      'Double espresso shaken over ice with Madagascar vanilla bean syrup and chilled creamy milk.',
    detailedDescription:
      'We steep whole split Madagascar vanilla beans in-house to make a fragrant syrup, shaken vigorously over ice with fresh double espresso and whole milk.',
    image:
      'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian'],
    isFeatured: true,
    preparationTime: '4 mins',
    calories: '210 kcal',
    ingredients: ['Double Espresso', 'House-made Vanilla Bean Syrup', 'Ice', 'Cold Whole Milk'],
    allergens: ['Dairy'],
    flavorProfile: ['Creamy Vanilla', 'Sweet Caramel', 'Chilled Roast'],
    pairingSlug: 'pancakes-seasonal-fruit',
  },
  {
    id: 'item-cold-brew',
    slug: 'cold-brew-orange',
    name: '18-Hour Cold Brew with Orange Peel',
    category: 'Cold Drinks',
    price: 240,
    description:
      'Slow-steeped cold brew served over a hand-carved ice sphere with expressed Valencia orange peel.',
    detailedDescription:
      'Coarsely ground beans steeped for 18 hours in cold filtered water. Virtually zero bitterness, exceptional chocolate depth, and bright natural citrus oils.',
    image:
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegan', 'Gluten-Free'],
    isFeatured: false,
    preparationTime: '3 mins',
    calories: '8 kcal',
    ingredients: ['18-Hour Cold Brew Coffee', 'Clear Ice Sphere', 'Valencia Orange Zest'],
    allergens: [],
    flavorProfile: ['Dark Chocolate', 'Citrus Zest', 'Smooth Molasses'],
    pairingSlug: 'avocado-toast',
  },
  {
    id: 'item-cascara-fizz',
    slug: 'cascara-sparkling-fizz',
    name: 'Cascara & Hibiscus Sparkling Fizz',
    category: 'Cold Drinks',
    price: 230,
    description:
      'Brewed dried coffee cherry tea (cascara), wild hibiscus flowers, sparkling soda, and mint.',
    detailedDescription:
      'Sustainably brewed from dried sun-ripened coffee cherry husks. Naturally rich in antioxidants with a refreshing cranberry-cider profile and gentle natural effervescence.',
    image:
      'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegan', 'Gluten-Free', 'Chef Choice'],
    isFeatured: false,
    isSeasonal: true,
    preparationTime: '3 mins',
    calories: '45 kcal',
    ingredients: ['Cascara Coffee Cherry Tea', 'Hibiscus Infusion', 'Sparkling Soda', 'Fresh Mint'],
    allergens: [],
    flavorProfile: ['Tart Cranberry', 'Floral Rosehip', 'Effervescent'],
    pairingSlug: 'grilled-sandwich',
  },

  // --- TEA ---
  {
    id: 'item-kahwa',
    slug: 'kashmiri-saffron-kahwa',
    name: 'Kashmiri Saffron & Almond Kahwa',
    category: 'Tea',
    price: 220,
    description:
      'Whole leaf green tea simmered with Kashmiri saffron strands, green cardamom, cinnamon, and slivered almonds.',
    detailedDescription:
      'A golden, fragrant Himalayan classic poured into clear glass. Delicate, invigorating, and beautifully scented.',
    image:
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegan', 'Gluten-Free', 'Contains Nuts'],
    isFeatured: false,
    preparationTime: '5 mins',
    calories: '60 kcal',
    ingredients: ['Kashmiri Green Tea', 'Saffron Stigmas', 'Cardamom', 'Cinnamon', 'Almond Slivers'],
    allergens: ['Tree Nuts (Almonds)'],
    flavorProfile: ['Golden Saffron', 'Spicy Cardamom', 'Nutty Almond'],
    pairingSlug: 'almond-frangipane-tart',
  },
  {
    id: 'item-masala-chai',
    slug: 'artisan-masala-chai',
    name: 'Mellow Masala Pot Chai',
    category: 'Tea',
    price: 180,
    description:
      'Single-estate Assam CTC brewed slow with fresh crushed ginger, black peppercorn, and whole milk.',
    detailedDescription:
      'Brewed to order in heavy copper pots with fresh ginger crushed right at the stove. Bold, deeply spiced, and never pre-sweetened.',
    image:
      'https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian'],
    isFeatured: false,
    preparationTime: '6 mins',
    calories: '110 kcal',
    ingredients: ['Assam Black Tea', 'Fresh Ginger', 'Cardamom', 'Cloves', 'Milk'],
    allergens: ['Dairy'],
    flavorProfile: ['Warming Ginger', 'Bold Malt', 'Creamy Spice'],
    pairingSlug: 'cinnamon-roll',
  },

  // --- BREAKFAST ---
  {
    id: 'item-avocado-toast',
    slug: 'avocado-toast',
    name: 'Sourdough Avocado Toast',
    category: 'Breakfast',
    price: 360,
    description:
      'Toasted country sourdough, smashed Hass avocado, pickled shallots, toasted sunflower seeds, and chili flakes.',
    detailedDescription:
      'Thick slice of naturally fermented artisan sourdough grilled with olive oil. Topped with ripe crushed avocado, tangy house-pickled shallots, crunchy seeds, and cold-pressed extra virgin olive oil.',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegan', 'Chef Choice'],
    isFeatured: true,
    preparationTime: '8–10 mins',
    calories: '340 kcal',
    ingredients: ['Rustic Sourdough', 'Hass Avocado', 'Pickled Shallots', 'Sunflower & Hemp Seeds', 'EVOO'],
    allergens: ['Gluten'],
    flavorProfile: ['Creamy Avocado', 'Zesty Pickle', 'Nutty Crunch', 'Tangy Sourdough'],
    pairingSlug: 'flat-white',
  },
  {
    id: 'item-shakshuka',
    slug: 'skillet-shakshuka',
    name: 'Cast-Iron Skillet Shakshuka',
    category: 'Breakfast',
    price: 390,
    description:
      'Poached free-range eggs in a spiced San Marzano tomato & red pepper stew with crumbled feta and warm sourdough.',
    detailedDescription:
      'Served sizzling directly in a cast iron skillet. The tomato sauce is simmered with toasted cumin, smoked paprika, and garlic, finished with two runny eggs and fresh coriander.',
    image:
      'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian'],
    isFeatured: false,
    preparationTime: '12 mins',
    calories: '420 kcal',
    ingredients: ['San Marzano Tomatoes', 'Red Bell Peppers', 'Free-Range Eggs', 'Feta Cheese', 'Sourdough'],
    allergens: ['Eggs', 'Dairy', 'Gluten'],
    flavorProfile: ['Smoky Paprika', 'Rich Tomato', 'Savory Feta'],
    pairingSlug: 'cortado',
  },

  // --- BRUNCH ---
  {
    id: 'item-pancakes',
    slug: 'pancakes-seasonal-fruit',
    name: 'Pancakes with Seasonal Fruit',
    category: 'Brunch',
    price: 380,
    description:
      'Fluffy buttermilk pancake stack with whipped vanilla mascarpone, wild berry compote, and pure maple syrup.',
    detailedDescription:
      'Triple-stacked golden buttermilk pancakes with a light, cloud-like crumb. Drizzled with warm Canadian maple syrup and crowned with macerated seasonal strawberries and blueberries.',
    image:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian', 'Chef Choice'],
    isFeatured: true,
    preparationTime: '10–12 mins',
    calories: '490 kcal',
    ingredients: ['Buttermilk Batter', 'Whipped Mascarpone', 'Seasonal Berries', 'Pure Maple Syrup'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    flavorProfile: ['Fluffy Vanilla', 'Tart Berries', 'Golden Maple'],
    pairingSlug: 'iced-vanilla-latte',
  },
  {
    id: 'item-grilled-sandwich',
    slug: 'grilled-sandwich',
    name: 'Three-Cheese Grilled Sourdough Sandwich',
    category: 'Brunch',
    price: 370,
    description:
      'Aged English cheddar, smoked scamorza, and mozzarella melted between buttered sourdough with tomato-chili jam.',
    detailedDescription:
      'Pressed slow on the griddle until the sourdough achieves a crispy, golden-brown crust and the artisanal cheese blend stretches gloriously. Served with house-pickled cucumbers.',
    image:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian'],
    isFeatured: true,
    preparationTime: '10 mins',
    calories: '530 kcal',
    ingredients: ['Artisan Sourdough', 'Aged Cheddar', 'Smoked Scamorza', 'Mozzarella', 'Tomato Jam'],
    allergens: ['Dairy', 'Gluten'],
    flavorProfile: ['Melted Savory Cheese', 'Crisp Butter Crust', 'Sweet-Spicy Jam'],
    pairingSlug: 'cold-brew-orange',
  },
  {
    id: 'item-french-toast',
    slug: 'brioche-french-toast',
    name: 'Brioche French Toast & Caramelized Bananas',
    category: 'Brunch',
    price: 390,
    description:
      'Thick-cut golden brioche soaked in custard, pan-caramelized bananas, candied pecans, and espresso whipped cream.',
    detailedDescription:
      'Rich, egg-soaked brioche seared in cultured butter. Served with warm cinnamon-dusted banana slices and espresso cream.',
    image:
      'https://images.unsplash.com/photo-1484723091739-0045614eb6c7?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian', 'Contains Nuts'],
    isFeatured: false,
    preparationTime: '12 mins',
    calories: '540 kcal',
    ingredients: ['Brioche Loaf', 'Vanilla Egg Custard', 'Bananas', 'Candied Pecans', 'Coffee Cream'],
    allergens: ['Dairy', 'Eggs', 'Gluten', 'Tree Nuts (Pecans)'],
    flavorProfile: ['Caramelized Banana', 'Buttery Brioche', 'Toasted Pecan'],
    pairingSlug: 'espresso',
  },

  // --- BAKERY ---
  {
    id: 'item-butter-croissant',
    slug: 'butter-croissant',
    name: 'Artisan Butter Croissant',
    category: 'Bakery',
    price: 180,
    description:
      'Laminated French-style butter croissant baked fresh twice daily. Crisp honeycomb layers and flaky golden crust.',
    detailedDescription:
      'Crafted over a three-day cold fermentation process using 84% fat cultured butter. Each bite shatters softly into golden flakes, revealing a warm, buttery, airy honeycomb crumb.',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian'],
    isFeatured: true,
    preparationTime: 'Fresh from counter',
    calories: '280 kcal',
    ingredients: ['French Wheat Flour', 'Cultured European Butter', 'Sea Salt', 'Wild Yeast'],
    allergens: ['Dairy', 'Gluten'],
    flavorProfile: ['Rich Cultured Butter', 'Crisp Flakes', 'Airy Honeycomb'],
    pairingSlug: 'flat-white',
  },
  {
    id: 'item-cinnamon-roll',
    slug: 'cinnamon-roll',
    name: 'Cardamom Cinnamon Brioche Roll',
    category: 'Bakery',
    price: 210,
    description:
      'Soft pillowy brioche swirled with Ceylon cinnamon, freshly ground cardamom, and vanilla bean cream glaze.',
    detailedDescription:
      'Warm, pull-apart brioche dough rolled with brown butter, cinnamon, and aromatic cardamom. Topped with a silky, melted cream cheese glaze while still warm from the oven.',
    image:
      'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian'],
    isFeatured: true,
    preparationTime: 'Warmed 2 mins',
    calories: '380 kcal',
    ingredients: ['Brioche Dough', 'Ceylon Cinnamon', 'Green Cardamom', 'Cream Cheese Glaze'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    flavorProfile: ['Warm Cinnamon', 'Fragrant Cardamom', 'Melted Vanilla Glaze'],
    pairingSlug: 'espresso',
  },
  {
    id: 'item-almond-tart',
    slug: 'almond-frangipane-tart',
    name: 'Almond & Pear Frangipane Tart',
    category: 'Bakery',
    price: 240,
    description:
      'Pâte sablée shortcrust pastry filled with roasted almond frangipane cream and poached sliced pears.',
    detailedDescription:
      'Buttery, crumbly tart shell filled with velvety almond meal frangipane and topped with gently poached seasonal pears, finished with toasted sliced almonds.',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian', 'Contains Nuts'],
    isFeatured: false,
    preparationTime: 'Fresh from counter',
    calories: '320 kcal',
    ingredients: ['Pâte Sablée Crust', 'Almond Frangipane', 'Poached Pears', 'Flaked Almonds'],
    allergens: ['Dairy', 'Gluten', 'Eggs', 'Tree Nuts (Almonds)'],
    flavorProfile: ['Toasted Almond', 'Poached Pear', 'Buttery Crust'],
    pairingSlug: 'cortado',
  },

  // --- DESSERTS ---
  {
    id: 'item-espresso-tiramisu',
    slug: 'espresso-tiramisu',
    name: 'Mellow Espresso Tiramisu',
    category: 'Desserts',
    price: 290,
    description:
      'House-baked savoiardi ladyfingers soaked in our double espresso, layered with whipped mascarpone and Valrhona cocoa.',
    detailedDescription:
      'Classic Italian dessert with an artisan café soul. We soak our house ladyfingers in freshly pulled espresso and dark chocolate liqueur, layered with airy whipped egg yolks and mascarpone.',
    image:
      'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian', 'Chef Choice'],
    isFeatured: false,
    isSeasonal: true,
    preparationTime: 'Fresh from patisserie fridge',
    calories: '360 kcal',
    ingredients: ['Ladyfingers', 'Espresso Soak', 'Mascarpone Cream', 'Valrhona Cocoa Powder'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    flavorProfile: ['Intense Espresso', 'Cloud-like Mascarpone', 'Bittersweet Cocoa'],
    pairingSlug: 'flat-white',
  },
  {
    id: 'item-basque-cheesecake',
    slug: 'basque-burnt-cheesecake',
    name: 'Basque Burnt Cheesecake with Salted Caramel',
    category: 'Desserts',
    price: 310,
    description:
      'Crustless San Sebastián style cheesecake baked at high heat for a caramelized exterior and molten center.',
    detailedDescription:
      'Caramelized top with a velvety, barely-set creamy center that melts on the tongue. Served with a drizzle of house sea salt caramel.',
    image:
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    dietary: ['Vegetarian', 'Gluten-Free'],
    isFeatured: false,
    preparationTime: 'Fresh from counter',
    calories: '390 kcal',
    ingredients: ['Cream Cheese', 'Heavy Cream', 'Sugar', 'Eggs', 'Sea Salt Caramel'],
    allergens: ['Dairy', 'Eggs'],
    flavorProfile: ['Caramelized Crust', 'Molten Cream', 'Flaky Sea Salt'],
    pairingSlug: 'pour-over-single-origin',
  },
];

export const menuItems = MENU_ITEMS;

export const MENU_CATEGORIES: ('All' | MenuCategory)[] = [
  'All',
  'Coffee',
  'Cold Drinks',
  'Tea',
  'Breakfast',
  'Brunch',
  'Bakery',
  'Desserts',
];

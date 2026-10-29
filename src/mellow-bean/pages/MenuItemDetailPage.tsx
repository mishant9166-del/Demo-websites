import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Plus,
  Minus,
  Check,
  Clock,
  Flame,
  ShieldAlert,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';
import { useCart } from '../context/CartContext';
import { PriceTag } from '../components/common/PriceTag';
import { Badge } from '../components/common/Badge';

export const MenuItemDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const item = MENU_ITEMS.find((i) => i.slug === slug);

  if (!item) {
    return (
      <div className="py-24 max-w-xl mx-auto px-4 text-center space-y-5">
        <span className="text-5xl">☕</span>
        <h2 className="text-3xl font-serif font-bold text-[#382820]">
          Dish or Drink Not Found
        </h2>
        <p className="text-[#382820]/70 text-sm">
          We could not locate this menu item. It may be out of season or retired from our kitchen.
        </p>
        <Link
          to="/mellow-bean/menu"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#382820] text-[#FFFEFA] text-sm font-medium hover:bg-[#382820]/90 transition-all shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Full Menu</span>
        </Link>
      </div>
    );
  }

  // Find paired item if specified
  const pairedItem = item.pairingSlug
    ? MENU_ITEMS.find((i) => i.slug === item.pairingSlug)
    : null;

  const handleAddToCart = () => {
    addToCart(item, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="py-10 sm:py-16 bg-[#F8F2E7] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#382820]/60">
          <Link to="/mellow-bean" className="hover:text-[#382820] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/mellow-bean/menu" className="hover:text-[#382820] transition-colors">
            Menu
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="hover:text-[#382820] transition-colors font-medium text-[#382820]/80">
            {item.category}
          </span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#382820] font-semibold truncate max-w-[160px] sm:max-w-none">
            {item.name}
          </span>
        </nav>

        {/* Main Item Showcase Card */}
        <div className="bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Product Photography */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#EADFCF] bg-[#382820]/5 aspect-[4/3] sm:aspect-[1/1] shadow-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Seasonal / Featured Badge */}
                {item.isSeasonal && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0D27A] text-[#382820] text-xs font-bold shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Seasonal Special</span>
                  </div>
                )}
              </div>

              {/* Dietary Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {item.dietary.map((d) => (
                  <Badge key={d} variant="dietary">
                    {d}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Right: Item Details & Order Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#B77A4A]">
                  {item.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#382820] mt-1 leading-tight">
                  {item.name}
                </h1>
                <div className="mt-3">
                  <PriceTag price={item.price} size="xl" className="text-[#382820]" />
                </div>
              </div>

              <div className="text-[#382820]/80 font-sans space-y-3 text-base leading-relaxed border-y border-[#EADFCF] py-5">
                <p>{item.detailedDescription || item.description}</p>
                <p className="text-xs text-[#382820]/60 italic">
                  Prepared fresh upon order in our open kitchen. Custom milk alternatives and sweetness levels available.
                </p>
              </div>

              {/* Prep Time & Calories */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#F8F2E7] border border-[#EADFCF]">
                  <span className="text-[#382820]/60 block mb-0.5">Est. Preparation</span>
                  <span className="font-semibold text-[#382820] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#B77A4A]" />
                    {item.preparationTime || '4–6 mins'}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#F8F2E7] border border-[#EADFCF]">
                  <span className="text-[#382820]/60 block mb-0.5">Energy</span>
                  <span className="font-semibold text-[#382820] flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#B77A4A]" />
                    {item.calories || '180 kcal'}
                  </span>
                </div>
              </div>

              {/* Tasting Notes */}
              {item.flavorProfile && item.flavorProfile.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#382820]/60">
                    Flavor Profile & Notes
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.flavorProfile.map((note, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#F8F2E7] text-[#382820] border border-[#EADFCF]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Ingredients & Allergens */}
              <div className="space-y-2 text-xs">
                {item.ingredients && item.ingredients.length > 0 && (
                  <div>
                    <span className="font-semibold text-[#382820]">Ingredients: </span>
                    <span className="text-[#382820]/75">{item.ingredients.join(', ')}</span>
                  </div>
                )}
                {item.allergens && item.allergens.length > 0 && (
                  <div className="flex items-center gap-1.5 text-[#B77A4A]">
                    <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      <strong>Allergen Notice:</strong> Contains {item.allergens.join(', ')}
                    </span>
                  </div>
                )}
              </div>

              {/* Quantity Controls & Add to Cart */}
              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-4">
                  {/* Quantity adjustment */}
                  <div className="flex items-center border border-[#EADFCF] rounded-full bg-[#F8F2E7] p-1 shadow-inner">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      disabled={quantity <= 1}
                      className="w-9 h-9 rounded-full flex items-center justify-center text-[#382820] hover:bg-[#FFFEFA] disabled:opacity-40 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-bold text-sm text-[#382820]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-9 h-9 rounded-full flex items-center justify-center text-[#382820] hover:bg-[#FFFEFA] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add to Basket Button */}
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={isAdded}
                    className={`flex-1 py-4 px-6 rounded-full font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2 ${
                      isAdded
                        ? 'bg-[#777B5A] text-[#FFFEFA]'
                        : 'bg-[#F0D27A] text-[#382820] hover:bg-[#F0D27A]/90 hover:scale-[1.01]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Basket</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>
                          Add to Basket &bull; ₹{item.price * quantity}
                        </span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-[#382820]/60 pt-2">
                  <span>Demo pickup ordering available at checkout</span>
                  <Link
                    to="/mellow-bean/menu"
                    className="text-[#382820] font-medium hover:underline inline-flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back to menu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pairing Recommendation */}
        {pairedItem && (
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFEFA] border border-[#EADFCF] shadow-sm">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#B77A4A] block mb-1">
              Barista Recommended Pairing
            </span>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={pairedItem.image}
                  alt={pairedItem.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-[#EADFCF]"
                />
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#382820]">
                    {pairedItem.name}
                  </h4>
                  <p className="text-xs text-[#382820]/70 max-w-md line-clamp-1 mt-0.5">
                    {pairedItem.description}
                  </p>
                  <div className="mt-1">
                    <PriceTag price={pairedItem.price} size="sm" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Link
                  to={`/mellow-bean/menu/${pairedItem.slug}`}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#382820] text-[#FFFEFA] text-xs font-semibold hover:bg-[#382820]/90 transition-all text-center"
                >
                  View Pairing
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItemDetailPage;

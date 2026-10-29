import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Plus, Check, Clock } from 'lucide-react';
import { PriceTag } from '../common/PriceTag';
import { useCart } from '../../context/CartContext';
import { MENU_ITEMS } from '../../data/menu';

export const SeasonalHighlight: React.FC = () => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  // Find the seasonal item from menu data
  const seasonalItem =
    MENU_ITEMS.find((item) => item.slug === 'cardamom-spiced-latte') || MENU_ITEMS[0];

  const handleAdd = () => {
    addToCart(seasonalItem);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#382820] text-[#FFFEFA] relative overflow-hidden">
      {/* Warm ambient backdrops */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F0D27A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#B77A4A]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#463329] border border-[#B77A4A]/30 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle watermarked label */}
          <span className="absolute -bottom-8 -right-8 text-8xl sm:text-9xl font-serif font-black text-[#FFFEFA]/5 select-none pointer-events-none">
            SEASON
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Image with organic borders */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#F0D27A]/30 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={seasonalItem.image}
                  alt={seasonalItem.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#382820]/70 via-transparent to-transparent" />
                
                {/* Seasonal Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F0D27A] text-[#382820] text-xs font-bold uppercase tracking-wider shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Winter & Monsoon Special</span>
                </div>

                {/* Price pill */}
                <div className="absolute bottom-4 left-4 bg-[#FFFEFA]/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#EADFCF] shadow-lg">
                  <PriceTag price={seasonalItem.price} size="lg" className="text-[#382820]" />
                </div>
              </div>

              {/* Decorative handwritten note */}
              <p className="font-handwriting text-2xl text-[#F0D27A] mt-3 text-center sm:text-left">
                "Ground green cardamom steeped directly into hot double espresso..."
              </p>
            </div>

            {/* Right Column: Description, Tasting Notes, Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#F0D27A]">
                  Barista Spotlight & Tasting Menu
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FFFEFA] leading-tight">
                  {seasonalItem.name}
                </h3>
              </div>

              <p className="text-[#FFFEFA]/80 font-sans text-base sm:text-lg leading-relaxed">
                {seasonalItem.detailedDescription}
              </p>

              {/* Flavor Profile Pills */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#FFFEFA]/60">
                  Dominant Tasting Notes
                </p>
                <div className="flex flex-wrap gap-2">
                  {seasonalItem.flavorProfile?.map((note, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#382820]/80 text-[#F0D27A] border border-[#F0D27A]/30"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ingredients & Prep */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#FFFEFA]/15">
                <div>
                  <span className="text-xs text-[#FFFEFA]/60 block">Prep Time</span>
                  <span className="text-sm font-medium text-[#FFFEFA] flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-4 h-4 text-[#F0D27A]" />
                    {seasonalItem.preparationTime}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-[#FFFEFA]/60 block">Optimal Pairing</span>
                  <Link
                    to="/mellow-bean/menu/cinnamon-roll"
                    className="text-sm font-medium text-[#F0D27A] hover:underline flex items-center gap-1 mt-0.5"
                  >
                    Swedish Cinnamon Roll &rarr;
                  </Link>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleAdd}
                  disabled={isAdded}
                  className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-medium text-sm transition-all shadow-md ${
                    isAdded
                      ? 'bg-[#777B5A] text-[#FFFEFA]'
                      : 'bg-[#F0D27A] text-[#382820] hover:bg-[#F0D27A]/90 hover:scale-102'
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
                      <span>Add to Basket ({`₹${seasonalItem.price}`})</span>
                    </>
                  )}
                </button>

                <Link
                  to={`/mellow-bean/menu/${seasonalItem.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#FFFEFA]/10 text-[#FFFEFA] hover:bg-[#FFFEFA]/20 border border-[#FFFEFA]/20 font-medium text-sm transition-all group"
                >
                  <span>Item Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

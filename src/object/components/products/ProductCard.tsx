import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Plus, Check, Star, Sparkles } from 'lucide-react';
import type { ProductItem } from '../../types/product';
import { PriceDisplay } from './PriceDisplay';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: ProductItem;
  viewMode?: 'grid' | 'list';
  badgeLabel?: string;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  viewMode = 'grid',
  badgeLabel,
  className = '',
}) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [isHovered, setIsHovered] = useState(false);
  const [quickAdded, setQuickAdded] = useState(false);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const isFavorited = isInWishlist(product.slug);
  const secondaryImage = product.galleryImages[1] || product.heroImage;
  const currentVariant = product.colors[selectedVariantIndex] || product.colors[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product, currentVariant, 1);
    setQuickAdded(true);
    setTimeout(() => setQuickAdded(false), 1600);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.slug);
  };

  const handleColorSelect = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedVariantIndex(index);
  };

  /* -------------------------------------------------------------------------- */
  /* List View Mode                                                             */
  /* -------------------------------------------------------------------------- */
  if (viewMode === 'list') {
    return (
      <div
        className={`group bg-white border border-[#E8E8E3] hover:border-[#2447E8]/40 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row gap-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(36,71,232,0.08)] transition-all duration-300 ${className}`}
      >
        <Link
          to={`/object/product/${product.slug}`}
          className="sm:w-48 aspect-square shrink-0 bg-gradient-to-b from-[#F8F8F5] to-[#EFEFEA] relative overflow-hidden rounded-xl block p-2"
        >
          <img
            src={product.heroImage}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-[#2447E8] text-white text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs">
              New
            </span>
          )}
        </Link>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#777872] tracking-wider mb-1">
              <span className="text-[#2447E8] font-mono">{product.categoryLabel}</span>
              <button
                type="button"
                onClick={handleWishlistToggle}
                className="p-1.5 rounded-full hover:bg-neutral-100 transition-colors"
                aria-label="Wishlist"
              >
                <Heart
                  className={`w-4 h-4 transition-colors ${
                    isFavorited ? 'fill-[#FF704F] text-[#FF704F]' : 'text-[#777872] hover:text-[#FF704F]'
                  }`}
                />
              </button>
            </div>

            <Link to={`/object/product/${product.slug}`}>
              <h3 className="text-base sm:text-lg font-bold text-[#18181B] group-hover:text-[#2447E8] transition-colors mb-1">
                {product.name}
              </h3>
            </Link>

            <p className="text-xs text-[#777872] line-clamp-2 mb-3 font-light leading-relaxed">
              {product.description}
            </p>

            <PriceDisplay
              priceINR={product.priceINR}
              originalPriceINR={product.originalPriceINR}
              isSale={product.isSale}
              size="md"
            />
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-[#EAEAE6] mt-3">
            <div className="flex items-center gap-1.5">
              {product.colors.map((c, idx) => (
                <button
                  type="button"
                  key={c.id}
                  onClick={(e) => handleColorSelect(e, idx)}
                  className={`w-3.5 h-3.5 rounded-full border border-black/15 transition-all ${
                    selectedVariantIndex === idx ? 'ring-2 ring-[#2447E8] ring-offset-1 scale-110' : ''
                  }`}
                  style={{ backgroundColor: c.colorHex }}
                  title={c.name}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleQuickAdd}
              className={`px-4 py-2 text-xs uppercase font-bold tracking-wider rounded-xl transition-all flex items-center gap-1.5 shadow-sm active:scale-95 ${
                quickAdded
                  ? 'bg-[#10B981] text-white'
                  : 'bg-[#18181B] hover:bg-[#2447E8] text-white'
              }`}
            >
              {quickAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* -------------------------------------------------------------------------- */
  /* Modern Luxury Card Frame (Grid & Carousel Mode)                            */
  /* -------------------------------------------------------------------------- */
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex flex-col justify-between bg-white border border-[#EAEAE6] hover:border-[#2447E8]/40 p-3 sm:p-3.5 rounded-3xl transition-all duration-500 ease-out shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(36,71,232,0.12)] hover:-translate-y-2 ${className}`}
    >
      {/* 1. Pedestal Gallery Inset Image Stage */}
      <Link
        to={`/object/product/${product.slug}`}
        className="relative aspect-square w-full bg-gradient-to-b from-[#F9F9F6] via-[#F2F2ED] to-[#EAEAE5] rounded-2xl overflow-hidden block"
      >
        {/* Primary and secondary hover image */}
        <img
          src={isHovered ? secondaryImage : product.heroImage}
          alt={product.name}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-108 transition-all duration-700 ease-out"
        />

        {/* Ambient Subtle Studio Sheen Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Floating Badges (Top Left) */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
          {badgeLabel ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#18181B] text-white text-[9px] font-mono font-bold tracking-wider uppercase shadow-md backdrop-blur-md">
              <Sparkles className="w-2.5 h-2.5 text-[#2447E8]" />
              {badgeLabel}
            </span>
          ) : product.isNew ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2447E8] text-white text-[9px] font-mono font-bold tracking-wider uppercase shadow-md shadow-[#2447E8]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              New In Studio
            </span>
          ) : product.isSale ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FF704F] text-white text-[9px] font-mono font-bold tracking-wider uppercase shadow-md shadow-[#FF704F]/30">
              Sale
            </span>
          ) : product.isBestSeller ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#18181B] text-[#FBBF24] text-[9px] font-mono font-bold tracking-wider uppercase shadow-md border border-[#FBBF24]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24]" />
              Studio Icon
            </span>
          ) : null}
        </div>

        {/* Wishlist Button (Top Right) */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
            isFavorited
              ? 'bg-white text-[#FF704F] shadow-md scale-105'
              : 'bg-white/85 backdrop-blur-md text-[#777872] hover:text-[#FF704F] hover:bg-white hover:scale-110 shadow-xs'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 transition-transform duration-200 ${isFavorited ? 'fill-[#FF704F] scale-110' : ''}`} />
        </button>

        {/* Quick Add Floating Pill (Bottom Center) */}
        <div className="absolute inset-x-3 bottom-3 z-10 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          <button
            type="button"
            onClick={handleQuickAdd}
            className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 backdrop-blur-md ${
              quickAdded
                ? 'bg-[#10B981] text-white shadow-[#10B981]/30'
                : 'bg-[#18181B]/95 hover:bg-[#2447E8] text-white hover:shadow-[#2447E8]/30'
            }`}
          >
            {quickAdded ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Quick Add</span>
              </>
            )}
          </button>
        </div>
      </Link>

      {/* 2. Product Metadata Section */}
      <div className="pt-3 px-1 flex-1 flex flex-col justify-between">
        <div>
          {/* Micro Category & Rating */}
          <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase mb-1">
            <span className="font-bold text-[#2447E8] truncate max-w-[170px]">
              {product.categoryLabel}
            </span>
            <span className="flex items-center gap-1 text-[#252525] font-sans font-semibold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating || '4.9'}</span>
            </span>
          </div>

          {/* Product Name */}
          <Link to={`/object/product/${product.slug}`} className="block">
            <h3 className="text-sm font-bold text-[#18181B] group-hover:text-[#2447E8] transition-colors leading-snug line-clamp-1 mb-1">
              {product.name}
            </h3>
          </Link>

          {/* Tagline / Materials Snippet */}
          <p className="text-[11px] text-[#777872] line-clamp-1 font-light mb-2.5">
            {product.tagline || product.materials?.[0] || 'Hand-finished in studio batches'}
          </p>
        </div>

        {/* 3. Bottom Price & Swatches Row */}
        <div className="pt-2 flex items-center justify-between border-t border-[#F0F0EB]">
          <PriceDisplay
            priceINR={product.priceINR}
            originalPriceINR={product.originalPriceINR}
            isSale={product.isSale}
            size="sm"
          />

          {/* Color Swatch Dots with Active Highlight */}
          {product.colors.length > 0 && (
            <div className="flex items-center gap-1.5">
              {product.colors.slice(0, 3).map((c, idx) => (
                <button
                  type="button"
                  key={c.id}
                  onClick={(e) => handleColorSelect(e, idx)}
                  className={`w-3 h-3 rounded-full border border-black/15 transition-all cursor-pointer ${
                    selectedVariantIndex === idx
                      ? 'ring-2 ring-[#2447E8] ring-offset-1 scale-110'
                      : 'hover:scale-125'
                  }`}
                  style={{ backgroundColor: c.colorHex }}
                  title={`${c.name} (${c.colorName})`}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-[9px] text-[#777872] font-mono font-semibold">
                  +{product.colors.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

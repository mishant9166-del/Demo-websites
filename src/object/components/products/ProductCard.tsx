import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Plus, Check } from 'lucide-react';
import type { ProductItem } from '../../types/product';
import { PriceDisplay } from './PriceDisplay';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: ProductItem;
  viewMode?: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [isHovered, setIsHovered] = useState(false);
  const [quickAdded, setQuickAdded] = useState(false);

  const isFavorited = isInWishlist(product.slug);
  const secondaryImage = product.galleryImages[1] || product.heroImage;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const selectedVariant = product.colors[0];
    addToCart(product, selectedVariant, 1);

    setQuickAdded(true);
    setTimeout(() => setQuickAdded(false), 1500);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.slug);
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white border border-[#E5E5E0] p-4 rounded-xs flex flex-col sm:flex-row gap-5 hover:border-[#2447E8] transition-all group">
        <Link
          to={`/object/product/${product.slug}`}
          className="sm:w-48 aspect-square shrink-0 bg-[#F7F7F4] relative overflow-hidden rounded-xs"
        >
          <img
            src={product.heroImage}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[10px] uppercase font-semibold text-[#777872] tracking-wider mb-1">
              <span>{product.categoryLabel}</span>
              <button
                type="button"
                onClick={handleWishlistToggle}
                className="text-[#777872] hover:text-[#FF704F]"
              >
                <Heart
                  className={`w-4 h-4 ${isFavorited ? 'fill-[#FF704F] text-[#FF704F]' : ''}`}
                />
              </button>
            </div>

            <Link to={`/object/product/${product.slug}`}>
              <h3 className="text-base sm:text-lg font-bold text-[#252525] group-hover:text-[#2447E8] transition-colors mb-1">
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

          <div className="pt-4 flex items-center justify-between border-t border-[#E5E5E0] mt-3">
            <div className="flex items-center gap-1.5">
              {product.colors.map((c) => (
                <span
                  key={c.id}
                  className="w-3 h-3 rounded-full border border-black/10 inline-block"
                  style={{ backgroundColor: c.colorHex }}
                  title={c.name}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleQuickAdd}
              className="px-4 py-2 bg-[#252525] hover:bg-[#2447E8] text-white text-xs uppercase font-semibold tracking-wider rounded-xs transition-colors flex items-center gap-1.5"
            >
              {quickAdded ? <Check className="w-3.5 h-3.5 text-white" /> : <Plus className="w-3.5 h-3.5" />}
              <span>{quickAdded ? 'Added' : 'Add to Bag'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white border border-[#E5E5E0] hover:border-[#2447E8] transition-all duration-300 rounded-xs overflow-hidden"
    >
      {/* Product Image Stage */}
      <Link
        to={`/object/product/${product.slug}`}
        className="relative aspect-square w-full bg-[#F7F7F4] overflow-hidden block"
      >
        <img
          src={isHovered ? secondaryImage : product.heroImage}
          alt={product.name}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />

        {/* Badges: Sale, New, Best Seller */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {product.isSale && (
            <span className="bg-[#FF704F] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-xs">
              Sale
            </span>
          )}
          {product.isNew && (
            <span className="bg-[#2447E8] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-xs">
              New
            </span>
          )}
          {product.isBestSeller && !product.isSale && !product.isNew && (
            <span className="bg-[#252525] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs shadow-xs">
              Bestseller
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full transition-all z-10 ${
            isFavorited
              ? 'bg-white text-[#FF704F] shadow-md'
              : 'bg-white/80 text-[#777872] hover:text-[#252525] hover:bg-white shadow-xs'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorited ? 'fill-[#FF704F]' : ''}`} />
        </button>

        {/* Quick Add Overlay on Desktop / Visible on Mobile */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 transition-all duration-300 lg:opacity-0 lg:translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full py-2.5 bg-[#252525]/95 hover:bg-[#2447E8] text-white text-xs uppercase font-semibold tracking-wider rounded-xs backdrop-blur-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
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

      {/* Meta Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
        <div>
          <span className="text-[10px] uppercase font-bold text-[#777872] tracking-wider block mb-1">
            {product.categoryLabel}
          </span>

          <Link to={`/object/product/${product.slug}`} className="block">
            <h3 className="text-sm font-bold text-[#252525] group-hover:text-[#2447E8] transition-colors leading-snug line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="flex items-center justify-between pt-1">
          <PriceDisplay
            priceINR={product.priceINR}
            originalPriceINR={product.originalPriceINR}
            isSale={product.isSale}
            size="sm"
          />

          {/* Color Swatches preview */}
          {product.colors.length > 1 && (
            <div className="flex items-center gap-1">
              {product.colors.slice(0, 3).map((c) => (
                <span
                  key={c.id}
                  className="w-2.5 h-2.5 rounded-full border border-black/15 inline-block shrink-0"
                  style={{ backgroundColor: c.colorHex }}
                  title={c.name}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-[9px] text-[#777872] font-mono">+{product.colors.length - 3}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

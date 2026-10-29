import { Link } from 'react-router-dom';
import { Heart, ArrowUpRight } from 'lucide-react';
import type { EyewearItem } from '../../types/visora';
import ImageWithFallback from '../common/ImageWithFallback';
import { useFavorites } from '../../context/FavoritesContext';

interface EyewearCardProps {
  item: EyewearItem;
}

export function EyewearCard({ item }: EyewearCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(item.id);

  return (
    <div className="group rounded-3xl bg-white border border-[#E4E4DE] overflow-hidden flex flex-col justify-between hover:border-[#5C9995] hover:shadow-md transition-all duration-300 relative">
      {/* Favorite Button */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleFavorite(item.id);
        }}
        className={`absolute top-4 right-4 z-20 p-2.5 rounded-full transition-all ${
          favorite
            ? 'bg-red-50 text-red-500 shadow-xs'
            : 'bg-white/80 backdrop-blur-xs text-[#687581] hover:text-red-500 hover:bg-white'
        }`}
        aria-label={favorite ? 'Remove from saved' : 'Save frame to favorites'}
      >
        <Heart className={`w-4 h-4 ${favorite ? 'fill-current' : ''}`} />
      </button>

      {/* Product Image Area */}
      <Link
        to={`/visora/eyewear/${item.slug}`}
        className="block relative aspect-[4/3] overflow-hidden bg-[#F7F5EF] p-4 flex items-center justify-center"
      >
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Badge: New / Bestseller */}
        {item.isBestseller && (
          <span className="absolute top-4 left-4 inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#15263B] text-white">
            Bestseller
          </span>
        )}
        {item.isNew && !item.isBestseller && (
          <span className="absolute top-4 left-4 inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#5C9995] text-white">
            New Atelier
          </span>
        )}
      </Link>

      {/* Frame Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-[#687581] uppercase tracking-wider mb-1.5">
            <span>{item.category}</span>
            <span>{item.dimensions}</span>
          </div>

          <Link to={`/visora/eyewear/${item.slug}`}>
            <h3 className="font-display text-xl text-[#15263B] group-hover:text-[#5C9995] transition-colors leading-snug">
              {item.name}
            </h3>
          </Link>

          <p className="mt-2 text-xs text-[#687581] line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {/* Color Swatches */}
          <div className="mt-4 flex items-center gap-1.5">
            {item.colorOptions.map((c) => (
              <span
                key={c.name}
                title={c.name}
                className="w-3.5 h-3.5 rounded-full border border-black/20"
                style={{ backgroundColor: c.hex }}
              />
            ))}
            <span className="text-[10px] text-[#687581] ml-1">
              {item.colorOptions.length} finishes
            </span>
          </div>
        </div>

        {/* Pricing and Action */}
        <div className="mt-6 pt-4 border-t border-[#E4E4DE] flex items-center justify-between">
          <div>
            <span className="text-[10px] text-[#687581] block">Frame Price</span>
            <span className="font-display text-lg font-medium text-[#15263B]">
              ₹{item.priceINR.toLocaleString('en-IN')}
            </span>
          </div>

          <Link
            to={`/visora/eyewear/${item.slug}`}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold bg-[#F7F5EF] text-[#15263B] group-hover:bg-[#15263B] group-hover:text-white transition-all shadow-xs"
          >
            <span>Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EyewearCard;

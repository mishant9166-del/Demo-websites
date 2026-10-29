import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Check, ArrowRight } from 'lucide-react';
import type { MenuItem } from '../../types/cafe';
import { PriceTag } from '../common/PriceTag';
import { Badge } from '../common/Badge';
import { useCart } from '../../context/CartContext';

interface MenuItemCardProps {
  item: MenuItem;
  variant?: 'standard' | 'compact' | 'featured';
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  variant = 'standard',
}) => {
  const { addToCart, items } = useCart();
  const existingItem = items.find((i) => i.menuItem.id === item.id);
  const inCartCount = existingItem ? existingItem.quantity : 0;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(item, 1);
  };

  if (variant === 'featured') {
    return (
      <div className="group bg-[#FFFEFA] rounded-3xl p-6 sm:p-7 border border-[#EADFCF] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F8F2E7]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {item.isSeasonal && (
              <span className="absolute top-3 left-3 bg-[#F0D27A] text-[#382820] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                Seasonal Special
              </span>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B77A4A]">
                {item.category}
              </span>
              <PriceTag amount={item.price} size="md" />
            </div>

            <h3 className="font-fraunces text-xl font-bold text-[#382820] group-hover:text-[#B77A4A] transition-colors">
              {item.name}
            </h3>

            <p className="text-xs sm:text-sm text-[#382820]/75 leading-relaxed line-clamp-2">
              {item.description}
            </p>
          </div>

          {/* Dietary tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.dietary.map((tag) => (
              <Badge key={tag} variant="caramel" size="xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-5 mt-5 border-t border-[#EADFCF] flex items-center justify-between gap-3">
          <Link
            to={`/mellow-bean/menu/${item.slug}`}
            className="text-xs font-bold text-[#382820]/80 hover:text-[#382820] flex items-center gap-1 group/link"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>

          <button
            onClick={handleQuickAdd}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs active:scale-95 ${
              inCartCount > 0
                ? 'bg-[#382820] text-white'
                : 'bg-[#F0D27A] text-[#382820] hover:bg-[#e6c669]'
            }`}
          >
            {inCartCount > 0 ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added ({inCartCount})</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Basket</span>
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-[#FFFEFA] rounded-3xl overflow-hidden border border-[#EADFCF] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      {/* Image container */}
      <div className="relative h-48 overflow-hidden bg-[#F8F2E7]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          <span className="bg-white/95 backdrop-blur-xs text-[#382820] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
            {item.category}
          </span>
          {item.isSeasonal && (
            <span className="bg-[#F0D27A] text-[#382820] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Seasonal
            </span>
          )}
        </div>
      </div>

      {/* Info Container */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-fraunces text-lg sm:text-xl font-bold text-[#382820] group-hover:text-[#B77A4A] transition-colors leading-snug">
              {item.name}
            </h3>
            <PriceTag amount={item.price} size="md" className="shrink-0" />
          </div>

          <p className="text-xs sm:text-sm text-[#382820]/75 leading-relaxed line-clamp-2">
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.dietary.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="butter" size="xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-[#EADFCF] flex items-center justify-between gap-2">
          <Link
            to={`/mellow-bean/menu/${item.slug}`}
            className="text-xs font-bold text-[#382820]/80 hover:text-[#382820] flex items-center gap-1 group/btn"
          >
            <span>View Recipe</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>

          <button
            onClick={handleQuickAdd}
            className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-2xs active:scale-95 ${
              inCartCount > 0
                ? 'bg-[#382820] text-white'
                : 'bg-[#F0D27A] text-[#382820] hover:bg-[#e6c669]'
            }`}
          >
            {inCartCount > 0 ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>In Basket ({inCartCount})</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

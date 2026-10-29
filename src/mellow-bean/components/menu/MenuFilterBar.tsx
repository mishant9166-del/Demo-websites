import { Search, X } from 'lucide-react';
import type { MenuCategory } from '../../types/cafe';

interface MenuFilterBarProps {
  categories: ('All' | MenuCategory)[];
  selectedCategory: 'All' | MenuCategory;
  onSelectCategory: (cat: 'All' | MenuCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedDietary: string;
  onSelectDietary: (diet: string) => void;
  sortBy: 'default' | 'price-asc' | 'price-desc';
  onSortChange: (sort: 'default' | 'price-asc' | 'price-desc') => void;
  onReset: () => void;
}

export const MenuFilterBar: React.FC<MenuFilterBarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  selectedDietary,
  onSelectDietary,
  sortBy,
  onSortChange,
  onReset,
}) => {
  const dietaryOptions = ['All Diets', 'Vegetarian', 'Vegan', 'Gluten-Free'];

  return (
    <div className="p-6 rounded-3xl bg-[#FFFEFA] border border-[#EADFCF] shadow-xs space-y-4">
      {/* Search & Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#B77A4A] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search our kitchen & espresso bar (e.g. flat white, croissant, avocado)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-xs sm:text-sm text-[#382820] placeholder-[#382820]/50 focus:outline-none focus:ring-2 focus:ring-[#382820]"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#382820]/60 hover:text-[#382820]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Dietary & Price Sort */}
        <div className="flex items-center gap-2 flex-wrap">
          <select
            value={selectedDietary}
            onChange={(e) => onSelectDietary(e.target.value)}
            className="px-3.5 py-2.5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-xs font-semibold text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820]"
          >
            {dietaryOptions.map((diet) => (
              <option key={diet} value={diet}>
                {diet}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as any)}
            className="px-3.5 py-2.5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-xs font-semibold text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820]"
          >
            <option value="default">Sort by: Curated</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>

          {(searchQuery || selectedCategory !== 'All' || selectedDietary !== 'All Diets' || sortBy !== 'default') && (
            <button
              onClick={onReset}
              className="px-3 py-2 text-xs font-bold text-[#B77A4A] hover:underline"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                active
                  ? 'bg-[#382820] text-white border-[#382820] shadow-2xs'
                  : 'bg-[#F8F2E7] text-[#382820]/80 border-[#EADFCF] hover:bg-[#F0D27A]/30'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

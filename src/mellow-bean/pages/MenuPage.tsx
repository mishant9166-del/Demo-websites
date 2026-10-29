import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, RotateCcw, Sparkles } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES } from '../data/menu';
import type { MenuCategory } from '../types/cafe';
import { MenuItemCard } from '../components/menu/MenuItemCard';
import { MenuFilterBar } from '../components/menu/MenuFilterBar';
import { SectionHeading } from '../components/common/SectionHeading';

export const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | MenuCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState('All Diets');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  const filteredItems = useMemo(() => {
    let result = [...MENU_ITEMS];

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          (item.flavorProfile && item.flavorProfile.some((f: string) => f.toLowerCase().includes(q)))
      );
    }

    // Dietary filter
    if (selectedDietary !== 'All Diets') {
      result = result.filter((item) =>
        item.dietary.includes(selectedDietary as any)
      );
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, searchQuery, selectedDietary, sortBy]);

  const handleReset = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSelectedDietary('All Diets');
    setSortBy('default');
  };

  const isFiltered =
    selectedCategory !== 'All' ||
    searchQuery.trim() !== '' ||
    selectedDietary !== 'All Diets' ||
    sortBy !== 'default';

  return (
    <div className="py-12 sm:py-16 bg-[#F8F2E7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionHeading
            badge="All-Day Fare"
            title="Our Coffee, Brunch & Bakery Menu"
            subtitle="Handcrafted single-estate coffee, slow-fermented wild sourdough, and comforting brunch plates cooked to order with local ingredients."
            className="mb-0"
          />
          <p className="font-handwriting text-2xl text-[#B77A4A]">
            “Made fresh every morning in our open kitchen.”
          </p>
        </div>

        {/* Filter Bar */}
        <MenuFilterBar
          categories={MENU_CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedDietary={selectedDietary}
          onSelectDietary={setSelectedDietary}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onReset={handleReset}
        />

        {/* Results Header Count */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-[#382820]/70 px-1">
          <span>
            Showing <strong className="text-[#382820] font-semibold">{filteredItems.length}</strong>{' '}
            {filteredItems.length === 1 ? 'item' : 'items'}
            {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
          </span>

          {isFiltered && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-[#B77A4A] hover:text-[#382820] font-medium transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset all filters</span>
            </button>
          )}
        </div>

        {/* Menu Grid or Empty State */}
        {filteredItems.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuItemCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 px-4 bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] shadow-sm max-w-lg mx-auto space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#F0D27A]/30 text-[#382820] flex items-center justify-center mx-auto">
              <Coffee className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#382820]">
              No dishes found matching your search
            </h3>
            <p className="text-sm text-[#382820]/70 max-w-sm mx-auto">
              We couldn't find anything matching "{searchQuery}". Try searching for our signature
              flat white, butter croissants, or sourdough toast.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-[#382820] text-[#FFFEFA] text-xs font-semibold hover:bg-[#382820]/90 transition-all shadow-sm"
            >
              View Full Menu
            </button>
          </div>
        )}

        {/* Dietary and Allergen Notice Footnote */}
        <div className="p-6 rounded-3xl bg-[#FFFEFA] border border-[#EADFCF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#382820]/75">
          <div className="space-y-1">
            <strong className="text-[#382820] block font-serif text-sm">
              Dietary & Allergy Considerations
            </strong>
            <p>
              Oat milk and almond milk alternatives available for all espresso and tea drinks (+₹40).
              While we take extreme care, our kitchen handles nuts, sesame, gluten, and dairy.
            </p>
          </div>
          <div className="shrink-0 text-[#777B5A] font-medium flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#F0D27A]" />
            <span>100% Unbleached Flours & Free-Range Eggs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;

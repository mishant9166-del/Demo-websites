import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { STORE_PRODUCTS } from '../../data/products';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const popularTags = ['Tote', 'Lamp', 'Flask', 'Desk', 'Leather', 'Canvas', 'Backpack', 'Gift'];

  const filteredProducts = query.trim()
    ? STORE_PRODUCTS.filter((p) => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        );
      }).slice(0, 6)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onClose();
      navigate(`/object/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleTagClick = (tag: string) => {
    onClose();
    navigate(`/object/search?q=${encodeURIComponent(tag)}`);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-start pt-16 sm:pt-24 px-4 sm:px-6 animate-fadeIn"
    >
      <div className="bg-[#FFFFFF] text-[#252525] rounded-xs max-w-3xl mx-auto w-full shadow-2xl border border-[#E5E5E0] overflow-hidden flex flex-col max-h-[80vh]">
        {/* Header / Input Box */}
        <form
          onSubmit={handleSearchSubmit}
          className="p-5 sm:p-6 border-b border-[#E5E5E0] flex items-center gap-3 relative"
        >
          <Search className="w-5 h-5 text-[#2447E8] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, materials, categories (e.g. tote, ceramic, lamp, desk)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-base sm:text-lg font-medium text-[#252525] placeholder:text-[#777872] focus:outline-none bg-transparent"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-[#777872] hover:text-[#252525] text-xs uppercase font-mono px-2"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 text-[#777872] hover:text-[#252525] hover:bg-[#F7F7F4] rounded-xs"
          >
            <X className="w-5 h-5" />
          </button>
        </form>

        {/* Results / Popular suggestions */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {query.trim() === '' ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#777872]">
                <Sparkles className="w-3.5 h-3.5 text-[#2447E8]" />
                <span>Popular Search Terms</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleTagClick(tag)}
                    className="px-3.5 py-1.5 bg-[#F7F7F4] hover:bg-[#2447E8] hover:text-white border border-[#E5E5E0] text-xs font-medium text-[#252525] rounded-xs transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#777872]">
                <span className="font-semibold uppercase tracking-wider">
                  Live Results ({filteredProducts.length})
                </span>
                <button
                  type="button"
                  onClick={handleSearchSubmit}
                  className="text-[#2447E8] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>View All Results</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredProducts.map((prod) => (
                  <Link
                    key={prod.id}
                    to={`/object/product/${prod.slug}`}
                    onClick={onClose}
                    className="flex items-center gap-3 p-2.5 rounded-xs hover:bg-[#F7F7F4] border border-transparent hover:border-[#E5E5E0] transition-all group"
                  >
                    <div className="w-16 h-16 bg-[#F7F7F4] shrink-0 rounded-xs overflow-hidden border border-[#E5E5E0]">
                      <img
                        src={prod.heroImage}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] uppercase font-semibold text-[#777872] block">
                        {prod.categoryLabel}
                      </span>
                      <h4 className="text-xs font-bold text-[#252525] truncate group-hover:text-[#2447E8] transition-colors">
                        {prod.name}
                      </h4>
                      <span className="text-xs font-semibold text-[#252525] block mt-0.5">
                        ₹{prod.priceINR.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-12 text-center text-[#777872]">
              <p className="text-sm">No products found matching &ldquo;{query}&rdquo;.</p>
              <p className="text-xs mt-1">Try searching for canvas, bag, mug, desk, or bottle.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#F7F7F4] border-t border-[#E5E5E0] text-[11px] text-[#777872] flex items-center justify-between px-6 font-mono">
          <span>Press ESC to close</span>
          <span>OBJECT & FORM Live Search</span>
        </div>
      </div>
    </div>
  );
};

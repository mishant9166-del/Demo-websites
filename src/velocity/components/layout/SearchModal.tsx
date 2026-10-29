import { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Gauge, Fuel } from 'lucide-react';
import { vehicles } from '../../data/vehicles';
import { formatCompactINR } from '../../lib/formatters';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKey);

      return () => {
        document.body.style.overflow = original;
        window.removeEventListener('keydown', handleKey);
      };
    }
  }, [isOpen, onClose]);

  const filtered = useMemo(() => {
    if (!query.trim()) return vehicles.slice(0, 4); // Suggestions if empty
    const q = query.toLowerCase().trim();
    return vehicles.filter(v => 
      v.make.toLowerCase().includes(q) ||
      v.model.toLowerCase().includes(q) ||
      v.category.toLowerCase().includes(q) ||
      v.fuelType.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSelect = (slug: string) => {
    onClose();
    navigate(`/velocity/vehicle/${slug}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Search Card */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#101315] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-10"
          >
            {/* Input Header */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
              <Search className="w-5 h-5 text-[#C8FF45] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search by make, model, electric, SUV, sports..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-none text-[#F5F7F7] placeholder-[#A0A7AC]/60 focus:outline-none text-base font-medium"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-full hover:bg-white/10 text-[#A0A7AC] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider text-[#A0A7AC] border border-white/10 rounded">
                ESC
              </span>
            </div>

            {/* Results List */}
            <div className="max-h-[60vh] overflow-y-auto p-3 divide-y divide-white/5">
              <div className="px-3 py-2 text-[11px] font-mono uppercase tracking-widest text-[#A0A7AC]/70">
                {query ? `Found ${filtered.length} vehicles` : 'Featured Recommendations'}
              </div>

              {filtered.length === 0 ? (
                <div className="py-12 text-center text-[#A0A7AC]">
                  <p className="font-medium text-base text-[#F5F7F7] mb-1">No vehicles matched "{query}"</p>
                  <p className="text-xs">Try searching for Porsche, Electric, SUV, or Mercedes.</p>
                </div>
              ) : (
                filtered.map((vehicle) => (
                  <button
                    key={vehicle.id}
                    onClick={() => handleSelect(vehicle.slug)}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#171B1E] transition-all group text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-16 h-12 rounded overflow-hidden shrink-0 border border-white/10">
                        <ImageWithFallback
                          src={vehicle.images[0]}
                          alt={vehicle.model}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-mono tracking-wider text-[#C8FF45] uppercase">
                            {vehicle.category}
                          </span>
                          <span className="text-[10px] text-[#A0A7AC]">•</span>
                          <span className="text-[10px] text-[#A0A7AC]">{vehicle.year}</span>
                        </div>
                        <h4 className="text-sm font-bold text-[#F5F7F7] group-hover:text-[#C8FF45] transition-colors">
                          {vehicle.make} {vehicle.model}
                        </h4>
                        <div className="flex items-center gap-3 text-[11px] text-[#A0A7AC] mt-0.5">
                          <span className="flex items-center gap-1">
                            <Fuel className="w-3 h-3 text-[#A0A7AC]/60" /> {vehicle.fuelType}
                          </span>
                          <span className="flex items-center gap-1">
                            <Gauge className="w-3 h-3 text-[#A0A7AC]/60" /> {vehicle.horsepower} BHP
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right pl-3 shrink-0">
                      <div className="text-sm font-bold text-[#F5F7F7]">
                        {formatCompactINR(vehicle.price)}
                      </div>
                      <span className="text-[10px] font-mono text-[#C8FF45] flex items-center gap-1 justify-end group-hover:translate-x-0.5 transition-transform">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-[#080A0B] border-t border-white/10 flex items-center justify-between text-[11px] text-[#A0A7AC]">
              <span>Navigate with your keyboard or mouse</span>
              <button
                onClick={() => {
                  onClose();
                  navigate('/velocity/inventory');
                }}
                className="text-[#C8FF45] font-semibold hover:underline"
              >
                View all inventory →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

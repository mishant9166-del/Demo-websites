import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Trash2, ArrowRight, Eye } from 'lucide-react';
import { useFavorites } from '../../context/FavoritesContext';
import ImageWithFallback from '../common/ImageWithFallback';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FavoritesDrawer({ isOpen, onClose }: FavoritesDrawerProps) {
  const { favoriteItems, removeFavorite, clearFavorites } = useFavorites();

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#15263B]/60 backdrop-blur-xs"
          />

          {/* Drawer container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#FAF7F2] border-l border-[#E4E4DE] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-5 border-b border-[#E4E4DE] flex items-center justify-between bg-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F7F5EF] text-[#5C9995] flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-[#15263B]">
                    Saved Eyewear ({favoriteItems.length})
                  </h3>
                  <p className="text-[11px] text-[#687581]">
                    Curated selection stored in your browser
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#F7F5EF] text-[#687581] hover:text-[#15263B] transition-colors"
                aria-label="Close saved eyewear drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {favoriteItems.length > 0 ? (
                favoriteItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-white border border-[#E4E4DE] shadow-xs flex gap-4 items-center group"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#F7F5EF] shrink-0 border border-[#E4E4DE]">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-sans uppercase tracking-wider text-[#5C9995] font-semibold block">
                        {item.category}
                      </span>
                      <Link
                        to={`/visora/eyewear/${item.slug}`}
                        onClick={onClose}
                        className="font-display text-base text-[#15263B] hover:text-[#5C9995] transition-colors truncate block"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs font-semibold text-[#15263B] mt-1">
                        ₹{item.priceINR.toLocaleString('en-IN')}
                      </p>
                      <p className="text-[10px] text-[#687581] mt-0.5">
                        {item.dimensions}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFavorite(item.id)}
                      className="p-2 rounded-lg text-[#687581] hover:text-red-500 hover:bg-red-50 transition-colors"
                      aria-label={`Remove ${item.name} from favorites`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              ) : (
                <div className="py-16 text-center">
                  <div className="w-14 h-14 rounded-full bg-white border border-[#E4E4DE] text-[#687581] flex items-center justify-center mx-auto mb-3 shadow-xs">
                    <Heart className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h4 className="font-display text-lg text-[#15263B]">
                    No Saved Frames Yet
                  </h4>
                  <p className="text-xs text-[#687581] mt-1 max-w-xs mx-auto">
                    Click the heart icon on any optical frame or sunglasses in our collection to save your favorite styles here.
                  </p>
                  <Link
                    to="/visora/eyewear"
                    onClick={onClose}
                    className="mt-5 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-medium bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors"
                  >
                    <span>Browse Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Footer */}
            {favoriteItems.length > 0 && (
              <div className="p-5 border-t border-[#E4E4DE] bg-white space-y-3">
                <div className="flex items-center justify-between text-xs text-[#687581]">
                  <span>Total Saved Styles:</span>
                  <span className="font-bold text-[#15263B]">
                    {favoriteItems.length} frames
                  </span>
                </div>

                <div className="flex gap-2">
                  <Link
                    to="/visora/book-appointment"
                    onClick={onClose}
                    className="flex-1 py-3 px-4 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] text-center transition-colors shadow-xs flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Try In Studio (Book Visit)</span>
                  </Link>

                  <button
                    type="button"
                    onClick={clearFavorites}
                    className="px-4 py-3 rounded-full text-xs font-medium text-[#687581] hover:text-red-500 border border-[#E4E4DE] hover:border-red-200 transition-colors"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default FavoritesDrawer;

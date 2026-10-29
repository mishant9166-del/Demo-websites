import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, X, ArrowRight, AlertCircle } from 'lucide-react';
import { useComparison } from '../../hooks/useComparison';
import { vehicles } from '../../data/vehicles';
import { ImageWithFallback } from '../common/ImageWithFallback';

export function CompareFloatingBar() {
  const { compareIds, removeFromComparison, clearComparison, alertMessage, count } = useComparison();
  const location = useLocation();

  // Don't show the floating bar if we are already on the compare page
  if (location.pathname === '/velocity/compare' || location.pathname === '/compare') {
    return null;
  }

  const selectedVehicles = vehicles.filter((v) => compareIds.includes(v.id));

  return (
    <>
      {/* Toast Alert for Max Limit */}
      <AnimatePresence>
        {alertMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-4 sm:right-8 z-50 bg-[#171B1E] border border-amber-500/50 text-[#F5F7F7] px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 text-xs max-w-sm"
          >
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{alertMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bar */}
      <AnimatePresence>
        {count > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl bg-[#101315]/95 backdrop-blur-md border border-white/15 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-3 sm:p-4 text-[#F5F7F7]"
          >
            <div className="flex items-center justify-between gap-3 sm:gap-6">
              {/* Left Details */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-[#C8FF45]/15 border border-[#C8FF45]/30 flex items-center justify-center text-[#C8FF45] shrink-0">
                  <Scale className="w-4 h-4" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#F5F7F7] uppercase tracking-wider">
                      Comparison ({count}/3)
                    </span>
                  </div>
                  <span className="text-[11px] text-[#A0A7AC] hidden sm:block">
                    {count === 1 ? 'Select at least 1 more vehicle to compare' : 'Ready to compare side by side'}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex items-center gap-2">
                {selectedVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="relative group w-12 h-9 sm:w-14 sm:h-10 rounded overflow-hidden border border-white/20 bg-[#171B1E]"
                  >
                    <ImageWithFallback
                      src={vehicle.images[0]}
                      alt={vehicle.model}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => removeFromComparison(vehicle.id)}
                      className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white"
                      aria-label={`Remove ${vehicle.model} from comparison`}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Right CTA Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={clearComparison}
                  className="px-2.5 py-1.5 text-[11px] font-semibold text-[#A0A7AC] hover:text-[#F5F7F7] transition-colors cursor-pointer"
                >
                  Clear
                </button>

                <Link
                  to="/velocity/compare"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#C8FF45] text-[#080A0B] text-xs font-bold uppercase tracking-wider hover:bg-[#b5eb3b] transition-colors"
                >
                  <span>Compare</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

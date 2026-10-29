import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Search, ArrowRight, ShieldCheck } from 'lucide-react';
import { velocityConfig } from '../../config/site';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
  favoritesCount: number;
}

export function MobileMenu({
  isOpen,
  onClose,
  onOpenSearch,
  favoritesCount
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative ml-auto w-full max-w-xs bg-[#101315] border-l border-white/10 h-full p-6 flex flex-col justify-between z-10 text-[#F5F7F7]"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-[#C8FF45] flex items-center justify-center text-[#080A0B] font-black text-sm tracking-tighter">
                    V/A
                  </div>
                  <span className="font-bold text-sm tracking-wider text-[#F5F7F7]">
                    VELOCITY
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 text-[#A0A7AC] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                <button
                  onClick={() => {
                    onClose();
                    onOpenSearch();
                  }}
                  className="flex items-center justify-center gap-2 p-3 rounded bg-[#171B1E] border border-white/10 text-xs font-semibold text-[#F5F7F7] hover:border-[#C8FF45]/50 transition-colors cursor-pointer"
                >
                  <Search className="w-4 h-4 text-[#C8FF45]" />
                  <span>Search</span>
                </button>

                <Link
                  to="/velocity/favorites"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 p-3 rounded bg-[#171B1E] border border-white/10 text-xs font-semibold text-[#F5F7F7] hover:border-[#C8FF45]/50 transition-colors"
                >
                  <Heart className="w-4 h-4 text-[#C8FF45]" />
                  <span>Saved ({favoritesCount})</span>
                </Link>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-1">
                {velocityConfig.navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    end={link.href === '/velocity'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded text-sm font-semibold tracking-wide transition-all ${
                        isActive
                          ? 'bg-[#C8FF45]/10 text-[#C8FF45] border-l-2 border-[#C8FF45]'
                          : 'text-[#A0A7AC] hover:text-[#F5F7F7] hover:bg-white/5'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </NavLink>
                ))}
                <NavLink
                  to="/velocity/compare"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded text-sm font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'bg-[#C8FF45]/10 text-[#C8FF45] border-l-2 border-[#C8FF45]'
                        : 'text-[#A0A7AC] hover:text-[#F5F7F7] hover:bg-white/5'
                    }`
                  }
                >
                  <span>Vehicle Comparison</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </NavLink>
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <Link
                to="/velocity/inventory"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded bg-[#C8FF45] text-[#080A0B] text-xs font-bold uppercase tracking-widest hover:bg-[#b5eb3b] transition-colors"
              >
                <span>Find Your Car</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="text-[11px] text-[#A0A7AC]/70 flex items-center gap-2 justify-center pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C8FF45]" />
                <span>Certified Pre-Screened Inventory</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

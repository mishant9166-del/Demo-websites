import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ArrowRight, Calendar, Phone } from 'lucide-react';
import { dentalConfig } from '../../config/site';
import { ToothIcon } from '../common/ToothIcon';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export function MobileMenu({ isOpen, onClose, onOpenSearch }: MobileMenuProps) {
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
            className="fixed inset-0 bg-[#152B32]/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative ml-auto w-full max-w-xs bg-white h-full p-6 flex flex-col justify-between z-10 shadow-2xl"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E3ECE9] mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E6F6F2] flex items-center justify-center text-[#080A0B]">
                    <ToothIcon className="w-5 h-5 text-[#0D9488]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm tracking-tight text-[#152B32] leading-none">
                      SmileCare
                    </span>
                    <span className="text-[9px] font-medium tracking-wider text-[#0D9488] uppercase mt-0.5">
                      Dental Clinic
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-[#F0F8F6] text-[#687A80] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Search */}
              <button
                onClick={() => {
                  onClose();
                  onOpenSearch();
                }}
                className="w-full flex items-center gap-2.5 p-3 rounded-xl bg-[#F0F8F6] border border-[#E3ECE9] text-xs font-semibold text-[#152B32] hover:border-[#0D9488]/40 transition-colors mb-6 cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#0D9488]" />
                <span>Search treatments & answers...</span>
              </button>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-1">
                {dentalConfig.navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    end={link.href === '/dental'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                        isActive
                          ? 'bg-[#E6F6F2] text-[#0D9488] font-bold'
                          : 'text-[#687A80] hover:text-[#152B32] hover:bg-[#F0F8F6]'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Bottom Book Appointment CTA */}
            <div className="pt-6 border-t border-[#E3ECE9] space-y-3">
              <Link
                to="/dental/appointment"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#115E59] transition-colors shadow-md shadow-[#0D9488]/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </Link>

              <div className="flex items-center justify-center gap-2 text-xs text-[#687A80] pt-1">
                <Phone className="w-3.5 h-3.5 text-[#0D9488]" />
                <span>{dentalConfig.clinic.phone}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { DermoraLogo } from '../common/DermoraLogo';
import { dermoraConfig } from '../../config/site';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export function MobileMenu({ isOpen, onClose, onOpenSearch }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const navLinks = [
    { label: 'Home', path: '/dermora' },
    { label: 'Treatments', path: '/dermora/treatments' },
    { label: 'Specialists', path: '/dermora/specialists' },
    { label: 'Skin Concerns', path: '/dermora/skin-concerns' },
    { label: 'About Clinic', path: '/dermora/about' },
    { label: 'Visual Gallery', path: '/dermora/gallery' },
    { label: 'Patient FAQs', path: '/dermora/faq' },
    { label: 'Contact', path: '/dermora/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#292A27]/60 backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-sm bg-[#FAF7F2] h-full shadow-2xl flex flex-col z-10 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-5 border-b border-[#E4DED4] flex items-center justify-between bg-white">
              <DermoraLogo size="sm" />
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-[#F0E9DF] flex items-center justify-center text-[#292A27] hover:bg-[#38473A] hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Trigger */}
            <div className="p-5 pb-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenSearch();
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white border border-[#E4DED4] text-[#77766F] text-xs font-sans hover:border-[#38473A] transition-colors"
              >
                <span>Search treatments, specialists, FAQs...</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#F0E9DF] text-[#38473A]">
                  Search
                </span>
              </button>
            </div>

            {/* Nav Links */}
            <nav className="p-5 space-y-1 flex-grow font-sans">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/dermora'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                      isActive
                        ? 'bg-[#38473A] text-white font-semibold'
                        : 'text-[#292A27] hover:bg-white hover:text-[#38473A]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Drawer Footer CTA */}
            <div className="p-5 border-t border-[#E4DED4] bg-white space-y-4">
              <NavLink
                to="/dermora/appointment"
                onClick={onClose}
                className="w-full py-3.5 px-4 rounded-full bg-[#38473A] hover:bg-[#292A27] text-white font-sans font-medium text-sm text-center flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#9BAA96]" />
                <span>Book a Consultation</span>
              </NavLink>

              <div className="pt-2 space-y-2 text-xs text-[#77766F] font-sans">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#B77962]" />
                  <span>{dermoraConfig.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#B77962]" />
                  <span>{dermoraConfig.contact.email}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B77962] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{dermoraConfig.contact.address.full}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

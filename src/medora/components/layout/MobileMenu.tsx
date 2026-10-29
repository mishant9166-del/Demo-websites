import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { HospitalLogo } from '../common/HospitalLogo';
import { medoraConfig } from '../../config/site';

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
    { label: 'Home', path: '/medora' },
    { label: 'Departments', path: '/medora/departments' },
    { label: 'Doctors', path: '/medora/doctors' },
    { label: 'Facilities', path: '/medora/facilities' },
    { label: 'About', path: '/medora/about' },
    { label: 'Contact', path: '/medora/contact' },
    { label: 'FAQs', path: '/medora/faq' },
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
            className="fixed inset-0 bg-[#102B46]/60 backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-5 border-b border-[#E1EAF0] flex items-center justify-between bg-[#F8FBFD]">
              <HospitalLogo size="sm" />
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white border border-[#E1EAF0] flex items-center justify-center text-[#183047] hover:bg-[#EAF5FC] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Search trigger button in mobile menu */}
            <div className="p-5 pb-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenSearch();
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#F8FBFD] border border-[#E1EAF0] text-[#6B7E8E] text-sm hover:border-[#1769AA] transition-colors"
              >
                <span>Search departments & doctors...</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white border border-[#E1EAF0] text-[#1769AA]">
                  Search
                </span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-5 space-y-1.5 flex-grow">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/medora'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-base transition-all ${
                      isActive
                        ? 'bg-[#EAF5FC] text-[#1769AA] font-bold border-l-4 border-[#1769AA]'
                        : 'text-[#183047] hover:bg-[#F8FBFD] hover:text-[#1769AA]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA & Contact info in Drawer footer */}
            <div className="p-5 border-t border-[#E1EAF0] bg-[#F8FBFD] space-y-4">
              <NavLink
                to="/medora/appointment"
                onClick={onClose}
                className="w-full py-3.5 px-4 rounded-xl bg-[#1769AA] hover:bg-[#125388] text-white font-bold text-center flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </NavLink>

              <div className="pt-2 space-y-2 text-xs text-[#6B7E8E]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#1769AA]" />
                  <span>Emergency: {medoraConfig.contact.emergencyPhone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#1769AA]" />
                  <span>{medoraConfig.contact.email}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#1769AA] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{medoraConfig.contact.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

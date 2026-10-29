import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { RehaboraLogo } from '../common/RehaboraLogo';
import { rehaboraConfig } from '../../config/site';

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const links = [
    { label: 'Home', path: '/rehabora' },
    { label: 'Services', path: '/rehabora/services' },
    { label: 'Programs', path: '/rehabora/programs' },
    { label: 'Our Team', path: '/rehabora/practitioners' },
    { label: 'About', path: '/rehabora/about' },
    { label: 'Gallery', path: '/rehabora/gallery' },
    { label: 'FAQ', path: '/rehabora/faq' },
    { label: 'Contact', path: '/rehabora/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#193D32]/70 backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#FAFBF8] border-l border-[#E1E8E2] shadow-2xl z-10 flex flex-col justify-between p-6 overflow-y-auto"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E1E8E2]">
                <Link to="/rehabora" onClick={onClose}>
                  <RehaboraLogo size="sm" />
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-[#E8F2EC] text-[#242C28] hover:bg-[#D4E5D9] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search button in mobile drawer */}
              <div className="mt-5">
                <button
                  onClick={() => {
                    onClose();
                    onOpenSearch();
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-[#E1E8E2] text-[#727C75] text-xs font-sans hover:border-[#285A49] transition-colors shadow-2xs"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#285A49]" />
                    <span>Search services, programs, team...</span>
                  </span>
                  <span className="text-[10px] bg-[#E8F2EC] text-[#285A49] font-mono px-2 py-0.5 rounded-md">
                    ⌘K
                  </span>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-1 font-heading">
                {links.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/rehabora'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-base font-bold transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[#E8F2EC] text-[#285A49]'
                          : 'text-[#242C28] hover:bg-white hover:text-[#285A49]'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[#727C75]">→</span>
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Bottom Actions & Contact Info */}
            <div className="mt-8 pt-6 border-t border-[#E1E8E2] space-y-4">
              <Link
                to="/rehabora/appointment"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#285A49] hover:bg-[#193D32] text-white text-sm font-heading font-bold shadow-sm transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#A8D5BC]" />
                <span>Book a Consultation</span>
              </Link>

              <div className="space-y-2 text-xs text-[#727C75] font-sans pt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#285A49]" />
                  <span>{rehaboraConfig.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#285A49]" />
                  <span>{rehaboraConfig.contact.email}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#285A49] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{rehaboraConfig.contact.address.full}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;

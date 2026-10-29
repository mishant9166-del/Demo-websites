import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Menu, Calendar } from 'lucide-react';
import { dentalConfig } from '../../config/site';
import { ToothIcon } from '../common/ToothIcon';
import { MobileMenu } from './MobileMenu';
import { SearchModal } from './SearchModal';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E3ECE9] py-3.5 shadow-xs'
            : 'bg-[#FAFCFB]/80 backdrop-blur-sm border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Tooth Logo & Wordmark */}
            <Link
              to="/dental"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] rounded-md"
              aria-label="SmileCare Dental Clinic Home"
            >
              <div className="w-9 h-9 rounded-full bg-[#E6F6F2] border border-[#0D9488]/30 flex items-center justify-center text-[#0D9488] group-hover:bg-[#0D9488] group-hover:text-white transition-all shadow-xs">
                <ToothIcon className="w-5 h-5 transition-colors" />
              </div>

              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-[#152B32] leading-none group-hover:text-[#0D9488] transition-colors">
                  SmileCare
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#0D9488] uppercase mt-0.5">
                  Dental Clinic
                </span>
              </div>
            </Link>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {dentalConfig.navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    end={link.href === '/dental'}
                    className={({ isActive }) =>
                      `relative text-xs uppercase tracking-wider font-semibold py-1.5 transition-colors ${
                        isActive
                          ? 'text-[#0D9488]'
                          : 'text-[#687A80] hover:text-[#152B32]'
                      }`
                    }
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeDentalNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D9488] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right: Controls & Appointment CTA */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 sm:p-2.5 rounded-full hover:bg-[#F0F8F6] text-[#687A80] hover:text-[#0D9488] transition-colors cursor-pointer"
                aria-label="Search treatments and FAQs"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Book Appointment CTA Button */}
              <Link
                to="/dental/appointment"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#115E59] shadow-sm shadow-[#0D9488]/20 transition-all duration-200"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-full lg:hidden hover:bg-[#F0F8F6] text-[#687A80] transition-colors"
                aria-label="Open mobile navigation"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, AlertCircle } from 'lucide-react';
import { PawLogo } from '../common/PawLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/paw-whisker' },
    { label: 'Our Services', path: '/paw-whisker/services' },
    { label: 'Our Vets', path: '/paw-whisker/our-vets' },
    { label: 'Pet Wellness', path: '/paw-whisker/pet-wellness' },
    { label: 'First Visit', path: '/paw-whisker/new-patients' },
    { label: 'Contact', path: '/paw-whisker/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/paw-whisker') {
      return location.pathname === '/paw-whisker' || location.pathname === '/paw-whisker/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF5EA]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD1]'
          : 'bg-[#FBF5EA] border-b border-[#E8DFD1]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <PawLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? 'text-[#C76F52] bg-[#F0D9CA]/50 font-semibold'
                      : 'text-[#343D30]/80 hover:text-[#343D30] hover:bg-[#F0D9CA]/30'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              to="/paw-whisker/emergency-care"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ml-1 ${
                location.pathname.includes('/emergency-care')
                  ? 'bg-red-100 text-red-800 border border-red-200'
                  : 'text-amber-800 bg-amber-100/70 hover:bg-amber-100 border border-amber-200/80'
              }`}
            >
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
              Emergency
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/paw-whisker/contact"
              className="text-[#343D30] hover:text-[#C76F52] p-2 rounded-xl hover:bg-[#F0D9CA]/30 transition-colors hidden xl:flex items-center gap-2 text-xs font-medium"
              title="Call Willow Creek Clinic"
            >
              <Phone className="w-4 h-4 text-[#82947A]" />
              <span>(555) 729-9447</span>
            </Link>

            <Link
              to="/paw-whisker/book-visit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#C76F52] text-white text-sm font-semibold shadow-sm hover:bg-[#b05d42] active:scale-[0.98] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Visit</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/paw-whisker/book-visit"
              className="px-3.5 py-1.5 rounded-xl bg-[#C76F52] text-white text-xs font-semibold shadow-sm hover:bg-[#b05d42] transition-colors sm:hidden"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#343D30] hover:bg-[#F0D9CA]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C76F52]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8DFD1] bg-[#FBF5EA] px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    active
                      ? 'bg-[#C76F52] text-white font-semibold'
                      : 'text-[#343D30] hover:bg-[#F0D9CA]/50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              to="/paw-whisker/emergency-care"
              className="flex items-center gap-2 px-4 py-3 rounded-xl text-base font-semibold text-amber-900 bg-amber-100/80 border border-amber-200 mt-2"
            >
              <AlertCircle className="w-4 h-4 text-amber-700" />
              Emergency Care Guidance
            </Link>

            <Link
              to="/paw-whisker/faq"
              className="block px-4 py-3 rounded-xl text-base font-medium text-[#343D30] hover:bg-[#F0D9CA]/50"
            >
              Frequently Asked Questions
            </Link>
          </div>

          <div className="pt-4 border-t border-[#E8DFD1] space-y-3">
            <Link
              to="/paw-whisker/book-visit"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C76F52] text-white font-semibold shadow-sm text-base text-center"
            >
              <Calendar className="w-4 h-4" />
              Book an Appointment
            </Link>

            <div className="text-center text-xs text-[#343D30]/70 pt-1">
              Willow Creek Clinic • (555) 729-9447
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

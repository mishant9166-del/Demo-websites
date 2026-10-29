import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, Calendar } from 'lucide-react';
import { HospitalLogo } from '../common/HospitalLogo';
import { SearchModal } from './SearchModal';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for Cmd+K or Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/medora' },
    { label: 'Departments', path: '/medora/departments' },
    { label: 'Doctors', path: '/medora/doctors' },
    { label: 'Facilities', path: '/medora/facilities' },
    { label: 'About', path: '/medora/about' },
    { label: 'Contact', path: '/medora/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E1EAF0] py-3'
            : 'bg-[#F8FBFD]/90 backdrop-blur-xs border-b border-[#E1EAF0]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link to="/medora" className="focus:outline-hidden">
            <HospitalLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/medora'
                  ? location.pathname === '/medora'
                  : location.pathname.startsWith(link.path);

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/medora'}
                  className={`relative px-3.5 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg group ${
                    isActive
                      ? 'text-[#1769AA]'
                      : 'text-[#183047] hover:text-[#1769AA] hover:bg-[#EAF5FC]/50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-[#1769AA] rounded-full" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Actions: Search & Book Appointment */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Search Icon Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-xl border border-[#E1EAF0] bg-white text-[#183047] hover:text-[#1769AA] hover:border-[#1769AA]/40 hover:bg-[#EAF5FC]/40 transition-all shadow-2xs flex items-center gap-2"
              aria-label="Search departments and doctors"
              title="Search (Cmd + K)"
            >
              <Search className="w-4 h-4" />
              <span className="hidden xl:inline text-xs text-[#6B7E8E] font-medium pr-1">
                Search <kbd className="text-[10px] bg-[#EAF5FC] px-1.5 py-0.5 rounded border border-[#E1EAF0] text-[#1769AA]">⌘K</kbd>
              </span>
            </button>

            {/* Book Appointment CTA */}
            <Link
              to="/medora/appointment"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1769AA] hover:bg-[#125388] text-white text-sm font-bold shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl border border-[#E1EAF0] bg-white text-[#183047] hover:bg-[#EAF5FC] transition-colors"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
    </>
  );
}

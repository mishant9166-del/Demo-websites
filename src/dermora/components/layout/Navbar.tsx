import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, Calendar } from 'lucide-react';
import { DermoraLogo } from '../common/DermoraLogo';
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

  // Cmd + K or Ctrl + K shortcut
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
    { label: 'Home', path: '/dermora' },
    { label: 'Treatments', path: '/dermora/treatments' },
    { label: 'Specialists', path: '/dermora/specialists' },
    { label: 'Skin Concerns', path: '/dermora/skin-concerns' },
    { label: 'About', path: '/dermora/about' },
    { label: 'Gallery', path: '/dermora/gallery' },
    { label: 'Contact', path: '/dermora/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-30 transition-all duration-300 font-sans ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-2xs border-b border-[#E4DED4] py-3.5'
            : 'bg-[#FAF7F2]/80 backdrop-blur-xs border-b border-[#E4DED4]/60 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link to="/dermora" className="focus:outline-hidden">
            <DermoraLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/dermora'
                  ? location.pathname === '/dermora'
                  : location.pathname.startsWith(link.path);

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/dermora'}
                  className={`relative px-3 py-2 text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg group ${
                    isActive
                      ? 'text-[#38473A] font-semibold'
                      : 'text-[#77766F] hover:text-[#292A27] hover:bg-[#F0E9DF]/50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#B77962] rounded-full" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-full border border-[#E4DED4] bg-white text-[#292A27] hover:text-[#38473A] hover:border-[#38473A]/40 transition-all shadow-2xs flex items-center gap-2 cursor-pointer"
              aria-label="Search treatments and specialists"
              title="Search (Cmd + K)"
            >
              <Search className="w-4 h-4" />
              <span className="hidden xl:inline text-xs text-[#77766F] pr-1">
                Search <kbd className="text-[10px] bg-[#F0E9DF] px-1.5 py-0.5 rounded text-[#38473A]">⌘K</kbd>
              </span>
            </button>

            {/* Book Consultation Button */}
            <Link
              to="/dermora/appointment"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#38473A] hover:bg-[#292A27] text-white text-xs sm:text-sm font-medium shadow-2xs hover:shadow-xs transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#9BAA96]" />
              <span>Book a Consultation</span>
            </Link>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-full border border-[#E4DED4] bg-white text-[#292A27] hover:bg-[#F0E9DF] transition-colors cursor-pointer"
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

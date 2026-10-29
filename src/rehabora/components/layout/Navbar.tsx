import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, Calendar } from 'lucide-react';
import { RehaboraLogo } from '../common/RehaboraLogo';
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
    { label: 'Home', path: '/rehabora' },
    { label: 'Services', path: '/rehabora/services' },
    { label: 'Programs', path: '/rehabora/programs' },
    { label: 'Our Team', path: '/rehabora/practitioners' },
    { label: 'About', path: '/rehabora/about' },
    { label: 'Contact', path: '/rehabora/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-30 transition-all duration-300 font-sans ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E1E8E2] py-3.5'
            : 'bg-[#FAFBF8]/80 backdrop-blur-xs border-b border-[#E1E8E2]/60 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link to="/rehabora" className="focus:outline-hidden">
            <RehaboraLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-heading">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/rehabora'
                  ? location.pathname === '/rehabora'
                  : location.pathname.startsWith(link.path);

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/rehabora'}
                  className={`relative px-3.5 py-2 text-xs xl:text-sm font-bold tracking-tight transition-colors duration-200 rounded-lg group ${
                    isActive
                      ? 'text-[#285A49]'
                      : 'text-[#727C75] hover:text-[#242C28] hover:bg-[#E8F2EC]/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-[#285A49] rounded-full" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-full border border-[#E1E8E2] bg-white text-[#242C28] hover:text-[#285A49] hover:border-[#285A49]/40 transition-all shadow-2xs flex items-center gap-2 cursor-pointer"
              aria-label="Search treatments and programs"
              title="Search (Cmd + K)"
            >
              <Search className="w-4 h-4" />
              <span className="hidden xl:inline text-xs text-[#727C75] pr-1 font-sans">
                Search <kbd className="text-[10px] bg-[#E8F2EC] px-1.5 py-0.5 rounded text-[#285A49]">⌘K</kbd>
              </span>
            </button>

            {/* Book Consultation Button */}
            <Link
              to="/rehabora/appointment"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#285A49] hover:bg-[#193D32] text-white text-xs sm:text-sm font-heading font-bold shadow-xs hover:shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#A8D5BC]" />
              <span>Book a Consultation</span>
            </Link>

            {/* Mobile Drawer Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-full border border-[#E1E8E2] bg-white text-[#242C28] hover:bg-[#E8F2EC] transition-colors cursor-pointer"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
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

export default Navbar;

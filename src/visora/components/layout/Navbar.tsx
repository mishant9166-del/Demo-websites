import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Heart, Menu, X, Calendar } from 'lucide-react';
import VisoraLogo from '../common/VisoraLogo';
import { useFavorites } from '../../context/FavoritesContext';
import FavoritesDrawer from './FavoritesDrawer';
import SearchModal from './SearchModal';

const NAV_LINKS = [
  { label: 'Home', path: '/visora' },
  { label: 'Services', path: '/visora/services' },
  { label: 'Eyewear', path: '/visora/eyewear' },
  { label: 'Specialists', path: '/visora/doctors' },
  { label: 'About', path: '/visora/about' },
  { label: 'Contact', path: '/visora/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  const { favoritesCount } = useFavorites();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E4E4DE]'
            : 'bg-[#F7F5EF] border-b border-[#E4E4DE]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between gap-6">
            {/* Left: Brand Logo */}
            <VisoraLogo />

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.path === '/visora'
                    ? location.pathname === '/visora'
                    : location.pathname.startsWith(link.path);

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`relative text-xs uppercase tracking-[0.12em] font-sans font-medium transition-colors py-1 ${
                      isActive
                        ? 'text-[#15263B] font-semibold'
                        : 'text-[#687581] hover:text-[#15263B]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#5C9995] rounded-full" />
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              {/* Search trigger */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-full text-[#15263B] hover:bg-white hover:text-[#5C9995] border border-transparent hover:border-[#E4E4DE] transition-all"
                aria-label="Search VISORA studio"
              >
                <Search className="w-4 h-4 stroke-[1.8]" />
              </button>

              {/* Saved frames / Favorites */}
              <button
                type="button"
                onClick={() => setIsFavoritesOpen(true)}
                className="relative p-2.5 rounded-full text-[#15263B] hover:bg-white hover:text-[#5C9995] border border-transparent hover:border-[#E4E4DE] transition-all"
                aria-label="Saved Eyewear"
              >
                <Heart className="w-4 h-4 stroke-[1.8]" />
                {favoritesCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#5C9995] text-white text-[10px] font-bold flex items-center justify-center leading-none">
                    {favoritesCount}
                  </span>
                )}
              </button>

              {/* Primary Appointment CTA */}
              <Link
                to="/visora/book-appointment"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-[#15263B] text-white hover:bg-[#5C9995] transition-all shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5 text-[#5C9995]" />
                <span>Book an Eye Test</span>
              </Link>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2.5 rounded-full text-[#15263B] hover:bg-white border border-[#E4E4DE] transition-colors"
                aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileOpen && (
          <div className="lg:hidden border-t border-[#E4E4DE] bg-[#FAF7F2] px-6 py-8 space-y-6 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileOpen(false)}
                  className="font-display text-2xl text-[#15263B] hover:text-[#5C9995] transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/visora/faq"
                onClick={() => setIsMobileOpen(false)}
                className="font-display text-xl text-[#687581] hover:text-[#15263B] transition-colors pt-2"
              >
                Frequently Asked Questions
              </Link>
            </nav>

            <div className="pt-6 border-t border-[#E4E4DE] flex flex-col gap-3">
              <Link
                to="/visora/book-appointment"
                onClick={() => setIsMobileOpen(false)}
                className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#15263B] text-white text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#5C9995]" />
                <span>Book an Eye Test</span>
              </Link>

              <button
                type="button"
                onClick={() => {
                  setIsMobileOpen(false);
                  setIsFavoritesOpen(true);
                }}
                className="w-full py-3 rounded-full text-xs font-semibold bg-white text-[#15263B] border border-[#E4E4DE] flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-[#5C9995]" />
                <span>Saved Eyewear ({favoritesCount})</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Overlays */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
      />
    </>
  );
}

export default Navbar;

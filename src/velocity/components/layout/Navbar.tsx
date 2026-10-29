import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Heart, Menu, ArrowRight } from 'lucide-react';
import { velocityConfig } from '../../config/site';
import { useFavorites } from '../../hooks/useFavorites';
import { MobileMenu } from './MobileMenu';
import { SearchModal } from './SearchModal';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { count: favoritesCount } = useFavorites();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
            ? 'bg-[#080A0B]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
            : 'bg-gradient-to-b from-[#080A0B]/90 via-[#080A0B]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Custom Geometric Velocity Logo */}
            <Link
              to="/velocity"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF45] rounded-sm"
              aria-label="Velocity Automotive Home"
            >
              <div className="relative w-8 h-8 rounded-sm bg-[#171B1E] border border-white/20 flex items-center justify-center overflow-hidden group-hover:border-[#C8FF45] transition-colors">
                {/* Geometric Velocity Speed Slash */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#C8FF45]/10 to-transparent" />
                <div className="flex items-center -space-x-1">
                  <div className="w-1.5 h-4 bg-[#C8FF45] skew-x-[-22deg] group-hover:translate-x-0.5 transition-transform" />
                  <div className="w-1 h-3 bg-[#F5F7F7] skew-x-[-22deg] opacity-80" />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-extrabold tracking-[0.2em] text-sm text-[#F5F7F7] leading-none group-hover:text-white transition-colors">
                  VELOCITY
                </span>
                <span className="text-[8px] font-mono tracking-[0.35em] text-[#A0A7AC] uppercase mt-0.5 group-hover:text-[#C8FF45] transition-colors">
                  AUTOMOTIVE
                </span>
              </div>
            </Link>

            {/* Center Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {velocityConfig.navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/velocity'}
                  className={({ isActive }) =>
                    `relative text-xs uppercase tracking-widest font-semibold transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-[#C8FF45]'
                        : 'text-[#A0A7AC] hover:text-[#F5F7F7]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeVelocityNav"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8FF45]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Desktop Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 text-[#A0A7AC] hover:text-[#F5F7F7] transition-colors cursor-pointer relative group"
                aria-label="Search vehicles"
              >
                <Search className="w-4 h-4" />
                <span className="sr-only">Search</span>
              </button>

              {/* Favorites Button with Dynamic Counter */}
              <Link
                to="/velocity/favorites"
                className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 text-[#A0A7AC] hover:text-[#F5F7F7] transition-colors relative group"
                aria-label={`View ${favoritesCount} saved vehicles`}
              >
                <Heart className={`w-4 h-4 transition-colors ${favoritesCount > 0 ? 'text-[#C8FF45] fill-[#C8FF45]/20' : ''}`} />
                {favoritesCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C8FF45] text-[#080A0B] rounded-full text-[9px] font-bold flex items-center justify-center font-mono shadow-sm"
                  >
                    {favoritesCount}
                  </motion.span>
                )}
                <span className="sr-only">Favorites</span>
              </Link>

              {/* Find Your Car CTA Button */}
              <Link
                to="/velocity/inventory"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#C8FF45] text-[#080A0B] text-xs font-bold uppercase tracking-widest hover:bg-[#b5eb3b] hover:shadow-[0_0_20px_rgba(200,255,69,0.3)] transition-all duration-300"
              >
                <span>Find Your Car</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-full lg:hidden hover:bg-white/10 text-[#A0A7AC] hover:text-[#F5F7F7] transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlays */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
        favoritesCount={favoritesCount}
      />
    </>
  );
}

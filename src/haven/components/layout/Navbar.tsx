import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HavenLogo } from '../common/HavenLogo';
import { useSavedProperties } from '../../context/SavedPropertiesContext';
import { Heart, Menu, X, PlusCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { savedCount } = useSavedProperties();

  const navLinks = [
    { label: 'Buy', path: '/haven/buy' },
    { label: 'Rent', path: '/haven/rent' },
    { label: 'Commercial', path: '/haven/commercial' },
    { label: 'Neighborhoods', path: '/haven/neighborhoods' },
    { label: 'Agents', path: '/haven/agents' },
    { label: 'About', path: '/haven/about' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E7DDCE] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <HavenLogo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.16em] font-sans font-semibold transition-colors ${
                    isActive ? 'text-[#254D3C] border-b-2 border-[#254D3C] pb-0.5' : 'text-[#292D2A]/80 hover:text-[#254D3C]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Icons: Saved Shortlist & List Your Property */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Saved Properties Shortlist with count */}
            <Link
              to="/haven/saved-properties"
              className="relative p-2.5 text-[#254D3C] hover:bg-[#E7DDCE]/50 rounded-sm transition-colors flex items-center gap-1.5"
              aria-label={`Saved properties shortlist (${savedCount} items)`}
              title="View your saved properties shortlist"
            >
              <Heart className="w-5 h-5 text-[#254D3C]" />
              <span className="hidden md:inline text-xs font-mono font-bold text-[#254D3C]">
                Saved
              </span>
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#254D3C] text-white text-[10px] font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FAF9F5]">
                  {savedCount}
                </span>
              )}
            </Link>

            {/* List Your Property Button */}
            <Link
              to="/haven/sell-your-property"
              className="px-5 py-2.5 bg-[#254D3C] text-white text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#1E3F31] transition-all rounded-xs shadow-xs flex items-center gap-2"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>List Your Property</span>
            </Link>
          </div>

          {/* Mobile Menu & Saved Shortlist Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/haven/saved-properties"
              className="relative p-2 text-[#254D3C] hover:bg-[#E7DDCE]/50 rounded-sm"
              aria-label="Saved properties"
            >
              <Heart className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#254D3C] text-white text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#254D3C] hover:bg-[#E7DDCE]/50 rounded-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] border-b border-[#E7DDCE] px-4 pt-3 pb-6 space-y-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-serif font-bold py-2 border-b border-[#E7DDCE]/50 ${
                    isActive ? 'text-[#254D3C] pl-2 border-l-4 border-l-[#254D3C]' : 'text-[#292D2A]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/haven/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-serif font-bold py-2 text-[#292D2A]"
            >
              Contact Advisory Desk
            </Link>
          </nav>

          <div className="pt-2 border-t border-[#E7DDCE] space-y-2">
            <Link
              to="/haven/sell-your-property"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-[#254D3C] text-white text-xs uppercase tracking-widest font-semibold text-center block rounded-xs"
            >
              List Your Property
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

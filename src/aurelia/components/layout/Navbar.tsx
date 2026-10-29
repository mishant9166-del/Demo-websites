import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AureliaLogo } from '../common/AureliaLogo';
import { Menu, X, CalendarCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Destinations', path: '/aurelia/destinations' },
    { label: 'Our Stays', path: '/aurelia/stays' },
    { label: 'Experiences', path: '/aurelia/experiences' },
    { label: 'Offers', path: '/aurelia/offers' },
    { label: 'Our Story', path: '/aurelia/our-story' },
    { label: 'Gallery', path: '/aurelia/gallery' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F8F5EF]/95 backdrop-blur-md border-b border-[#D5BE91]/30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <AureliaLogo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.2em] font-sans font-semibold transition-colors ${
                    isActive
                      ? 'text-[#173D32] border-b-2 border-[#D5BE91] pb-0.5'
                      : 'text-[#292B27]/75 hover:text-[#173D32]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Plan Your Stay Button */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/aurelia/booking"
              className="px-6 py-2.5 bg-[#173D32] text-[#F8F5EF] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#122F26] transition-all rounded-xs shadow-xs border border-[#D5BE91]/40 flex items-center gap-2"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#D5BE91]" />
              <span>Plan Your Stay</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/aurelia/booking"
              className="px-3 py-1.5 bg-[#173D32] text-[#F8F5EF] text-[10px] uppercase tracking-wider font-semibold rounded-xs"
            >
              Book Stay
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#173D32] hover:bg-[#D5BE91]/20 rounded-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F5EF] border-b border-[#D5BE91]/30 px-5 pt-4 pb-6 space-y-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-serif font-bold py-2 border-b border-[#D5BE91]/20 ${
                    isActive ? 'text-[#173D32] pl-2 border-l-4 border-l-[#173D32]' : 'text-[#292B27]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/aurelia/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-serif font-bold py-2 text-[#292B27]"
            >
              Concierge Contact
            </Link>
            <Link
              to="/aurelia/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-serif font-bold py-2 text-[#292B27]"
            >
              Guest FAQs
            </Link>
          </nav>

          <div className="pt-2 border-t border-[#D5BE91]/30">
            <Link
              to="/aurelia/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 bg-[#173D32] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold text-center block rounded-xs shadow-xs"
            >
              Plan Your Stay &rarr;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

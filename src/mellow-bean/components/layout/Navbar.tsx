import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, ShoppingBag } from 'lucide-react';
import { MellowLogo } from '../common/MellowLogo';
import { useCart } from '../../context/CartContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Menu', path: '/mellow-bean/menu' },
    { label: 'Our Story', path: '/mellow-bean/our-story' },
    { label: 'Gallery', path: '/mellow-bean/gallery' },
    { label: 'Private Events', path: '/mellow-bean/events' },
    { label: 'Contact', path: '/mellow-bean/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/mellow-bean') {
      return location.pathname === '/mellow-bean' || location.pathname === '/mellow-bean/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F2E7]/95 backdrop-blur-md shadow-xs border-b border-[#EADFCF]'
          : 'bg-[#F8F2E7] border-b border-[#EADFCF]/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <MellowLogo />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? 'text-[#382820] bg-[#F0D27A]/40 font-bold'
                      : 'text-[#382820]/80 hover:text-[#382820] hover:bg-[#F0D27A]/20'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls: Cart Bag & Table Reservation */}
          <div className="flex items-center gap-3">
            {/* Basket Button with live counter */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-2xl bg-white border border-[#EADFCF] text-[#382820] hover:bg-[#F0D27A]/30 transition-all active:scale-95 shadow-2xs flex items-center gap-2"
              aria-label={`Open shopping basket with ${totalCount} items`}
            >
              <ShoppingBag className="w-5 h-5 text-[#382820]" />
              <span className="hidden sm:inline text-xs font-bold text-[#382820]">
                Basket
              </span>
              {totalCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#B77A4A] text-white text-[10px] font-extrabold flex items-center justify-center animate-pulse">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Table Reservation Button */}
            <Link
              to="/mellow-bean/reservations"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#382820] text-[#FFFEFA] text-sm font-bold shadow-xs hover:bg-[#251a14] active:scale-[0.98] transition-all"
            >
              <Calendar className="w-4 h-4 text-[#F0D27A]" />
              <span>Reserve a Table</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#382820] hover:bg-[#F0D27A]/30 transition-colors focus:outline-none focus:ring-2 focus:ring-[#382820]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EADFCF] bg-[#F8F2E7] px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    active
                      ? 'bg-[#382820] text-white font-bold'
                      : 'text-[#382820] hover:bg-[#F0D27A]/30'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              to="/mellow-bean/faq"
              className="block px-4 py-3 rounded-xl text-base font-medium text-[#382820] hover:bg-[#F0D27A]/30"
            >
              Frequently Asked Questions
            </Link>
          </div>

          <div className="pt-3 border-t border-[#EADFCF] space-y-2">
            <Link
              to="/mellow-bean/reservations"
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#382820] text-white font-bold text-sm shadow-xs"
            >
              <Calendar className="w-4 h-4 text-[#F0D27A]" />
              <span>Reserve a Table</span>
            </Link>

            <Link
              to="/mellow-bean/order"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#F0D27A] text-[#382820] font-bold text-sm shadow-xs"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Pickup Ordering</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

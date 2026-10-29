import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const { totalItemCount, openCartDrawer } = useCart();
  const { wishlistCount } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainLinks = [
    { label: 'Shop All', path: '/object/shop' },
    { label: 'New Arrivals', path: '/object/shop?filter=new' },
    { label: 'Bags & Carry', path: '/object/category/bags' },
    { label: 'Home & Living', path: '/object/category/home-living' },
    { label: 'Desk & Work', path: '/object/category/desk-work' },
    { label: 'Drinkware', path: '/object/category/drinkware' },
    { label: 'Gifts', path: '/object/category/gifts' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#E5E5E0] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Left: Mobile Toggle & Desktop Brand Logo */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#252525] hover:bg-[#F7F7F4] rounded-xs"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Wordmark */}
            <Link to="/object" className="flex items-center gap-2 group">
              <span className="font-sans text-xl sm:text-2xl font-black tracking-[-0.03em] text-[#252525] uppercase">
                OBJECT <span className="text-[#2447E8] font-light">&</span> FORM
              </span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {mainLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-wider font-semibold transition-colors py-1 ${
                    isActive
                      ? 'text-[#2447E8] border-b-2 border-[#2447E8]'
                      : 'text-[#252525]/80 hover:text-[#2447E8]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: Utility Actions (Search, Wishlist, Cart) */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search catalog"
              className="p-2 text-[#252525] hover:text-[#2447E8] hover:bg-[#F7F7F4] rounded-xs transition-colors flex items-center gap-1 text-xs"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline font-mono text-[11px] uppercase">Search</span>
            </button>

            {/* Wishlist Link */}
            <Link
              to="/object/wishlist"
              aria-label="View Wishlist"
              className="p-2 text-[#252525] hover:text-[#2447E8] hover:bg-[#F7F7F4] rounded-xs transition-colors relative"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#FF704F] text-white text-[9px] font-bold flex items-center justify-center leading-none">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Button */}
            <button
              type="button"
              onClick={openCartDrawer}
              aria-label="Shopping bag"
              className="p-2 bg-[#252525] hover:bg-[#2447E8] text-white rounded-xs transition-colors relative flex items-center gap-2 text-xs font-semibold px-3 py-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline font-mono">Bag</span>
              <span className="w-4 h-4 rounded-full bg-[#FFFFFF] text-[#252525] text-[10px] font-bold flex items-center justify-center leading-none">
                {totalItemCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E5E0] px-5 py-6 space-y-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {mainLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase tracking-wider py-2 border-b border-[#E5E5E0]/60 ${
                    isActive ? 'text-[#2447E8]' : 'text-[#252525]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/object/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider py-2 text-[#777872]"
            >
              Our Story
            </Link>
            <Link
              to="/object/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider py-2 text-[#777872]"
            >
              Customer Care
            </Link>
            <Link
              to="/object/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider py-2 text-[#777872]"
            >
              FAQs & Shipping
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown, User } from 'lucide-react';
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
    { label: 'Shop', path: '/object/shop', hasDropdown: true },
    { label: 'New Arrivals', path: '/object/shop?filter=new' },
    { label: 'Home & Living', path: '/object/category/home-living' },
    { label: 'Bags & Carry', path: '/object/category/bags' },
    { label: 'Desk & Work', path: '/object/category/desk-work' },
    { label: 'Gifts', path: '/object/category/gifts', hasDropdown: true },
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
              <span className="font-sans text-xl sm:text-2xl font-black tracking-[-0.03em] text-[#111111] uppercase">
                OBJECT <span className="text-[#2447E8] font-normal">&</span> FORM
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
                  `text-xs tracking-wider font-semibold transition-colors py-1 flex items-center gap-1 ${
                    isActive
                      ? 'text-[#2447E8] font-bold'
                      : 'text-[#252525]/85 hover:text-[#2447E8]'
                  }`
                }
              >
                <span>{link.label}</span>
                {link.hasDropdown && <ChevronDown className="w-3 h-3 text-[#252525]/60" />}
              </NavLink>
            ))}
          </nav>

          {/* Right: Utility Actions (Search, User, Wishlist, Cart) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search catalog"
              className="p-2 text-[#252525] hover:text-[#2447E8] hover:bg-[#F7F7F4] rounded-full transition-colors flex items-center justify-center cursor-pointer"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* User Account */}
            <Link
              to="/object/shop"
              aria-label="Account"
              className="p-2 text-[#252525] hover:text-[#2447E8] hover:bg-[#F7F7F4] rounded-full transition-colors flex items-center justify-center"
            >
              <User className="w-4 h-4" />
            </Link>

            {/* Wishlist Link */}
            <Link
              to="/object/wishlist"
              aria-label="View Wishlist"
              className="p-2 text-[#252525] hover:text-[#2447E8] hover:bg-[#F7F7F4] rounded-full transition-colors relative flex items-center justify-center"
            >
              <Heart className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#2447E8] text-white text-[8px] font-bold flex items-center justify-center leading-none">
                {wishlistCount > 0 ? wishlistCount : '2'}
              </span>
            </Link>

            {/* Cart Button */}
            <button
              type="button"
              onClick={openCartDrawer}
              aria-label="Shopping bag"
              className="p-2 text-[#252525] hover:text-[#2447E8] hover:bg-[#F7F7F4] rounded-full transition-colors relative flex items-center justify-center cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#2447E8] text-white text-[8px] font-bold flex items-center justify-center leading-none">
                {totalItemCount > 0 ? totalItemCount : '1'}
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

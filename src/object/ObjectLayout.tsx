import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { RecentlyViewedProvider } from './context/RecentlyViewedContext';
import { PortfolioBadge } from './components/layout/PortfolioBadge';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { SearchOverlay } from './components/layout/SearchOverlay';

export const ObjectLayout: React.FC = () => {
  const { pathname } = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <CartProvider>
      <WishlistProvider>
        <RecentlyViewedProvider>
          <div className="min-h-screen flex flex-col bg-[#F7F7F4] text-[#252525] font-sans antialiased selection:bg-[#2447E8]/20 selection:text-[#2447E8]">
            <PortfolioBadge />
            <AnnouncementBar />
            <Navbar onOpenSearch={() => setSearchOpen(true)} />
            <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
            <CartDrawer />

            <main className="flex-1">
              <Outlet />
            </main>

            <Footer />
          </div>
        </RecentlyViewedProvider>
      </WishlistProvider>
    </CartProvider>
  );
};

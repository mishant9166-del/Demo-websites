import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { PortfolioBadge } from './components/layout/PortfolioBadge';
import { AnnouncementStrip } from './components/layout/AnnouncementStrip';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const MellowBeanLayout: React.FC = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#F8F2E7] text-[#382820] flex flex-col font-sans selection:bg-[#F0D27A] selection:text-[#382820] relative">
        <ScrollToTop />
        <PortfolioBadge />
        <AnnouncementStrip />
        <Navbar />
        <CartDrawer />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default MellowBeanLayout;

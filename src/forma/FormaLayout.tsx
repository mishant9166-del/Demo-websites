import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { PortfolioBadge } from './components/layout/PortfolioBadge';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const FormaLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#292B28] flex flex-col font-sans selection:bg-[#777A62]/25 selection:text-[#292B28] antialiased">
      <ScrollToTop />
      <PortfolioBadge />
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default FormaLayout;

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { PortfolioBadge } from './components/layout/PortfolioBadge';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

export const AureliaLayout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#292B27] font-sans antialiased selection:bg-[#D5BE91]/40 selection:text-[#173D32]">
      <PortfolioBadge />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

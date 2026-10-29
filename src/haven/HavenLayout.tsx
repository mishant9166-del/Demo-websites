import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SavedPropertiesProvider } from './context/SavedPropertiesContext';
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

export const HavenLayout: React.FC = () => {
  return (
    <SavedPropertiesProvider>
      <div className="min-h-screen bg-[#FAF9F5] text-[#292D2A] flex flex-col font-sans selection:bg-[#254D3C]/15 selection:text-[#254D3C] antialiased">
        <ScrollToTop />
        <PortfolioBadge />
        <Navbar />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </SavedPropertiesProvider>
  );
};

export default HavenLayout;

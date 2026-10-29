import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PortfolioBadge } from './components/layout/PortfolioBadge';

export const PawWhiskerLayout: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF5EA] text-[#343D30] font-sans selection:bg-[#F0D9CA] selection:text-[#C76F52] antialiased">
      {/* Back to main portfolio badge */}
      <PortfolioBadge />

      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Sticky Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Warm Earthy Footer */}
      <Footer />
    </div>
  );
};

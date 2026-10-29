import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PortfolioBadge } from './components/layout/PortfolioBadge';

export function DermoraLayout() {
  const { pathname } = useLocation();

  // Scroll to top automatically when navigating between pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#292A27] flex flex-col font-sans selection:bg-[#B77962] selection:text-white">
      {/* Portfolio Demo Navigation Header */}
      <PortfolioBadge />

      {/* Main Dermora Sticky Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Multi-Column Editorial Footer */}
      <Footer />
    </div>
  );
}

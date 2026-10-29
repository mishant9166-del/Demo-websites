import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PortfolioBadge } from './components/layout/PortfolioBadge';
import { CompareFloatingBar } from './components/layout/CompareFloatingBar';

export function VelocityLayout() {
  const { pathname } = useLocation();

  // Scroll to top automatically when navigating between pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#080A0B] text-[#F5F7F7] flex flex-col font-sans selection:bg-[#C8FF45] selection:text-[#080A0B]">
      {/* Portfolio Demo Navigation Header */}
      <PortfolioBadge />

      {/* Main Dealership Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Persistent Compare Drawer */}
      <CompareFloatingBar />

      {/* Multi-Column Dealership Footer */}
      <Footer />
    </div>
  );
}

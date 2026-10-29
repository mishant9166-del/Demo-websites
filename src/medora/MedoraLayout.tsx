import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

export function MedoraLayout() {
  const { pathname } = useLocation();

  // Scroll to top automatically when navigating between pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#F8FBFD] text-[#183047] flex flex-col font-sans selection:bg-[#18A9A0] selection:text-white">
      {/* Main Hospital Sticky Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Multi-Column Hospital Footer */}
      <Footer />
    </div>
  );
}

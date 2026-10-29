import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

export function DentalLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FAFCFB] text-[#152B32] flex flex-col font-sans selection:bg-[#E6F6F2] selection:text-[#0D9488]">
      {/* Sticky Dental Clinic Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Multi-Column Dental Footer */}
      <Footer />
    </div>
  );
}

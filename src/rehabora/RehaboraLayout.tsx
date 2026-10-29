import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PortfolioBadge from './components/layout/PortfolioBadge';

export function RehaboraLayout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#FAFBF8] text-[#242C28] flex flex-col font-sans antialiased selection:bg-[#E8F2EC] selection:text-[#285A49]">
      <PortfolioBadge />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RehaboraLayout;

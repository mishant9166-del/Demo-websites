import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PortfolioBadge from './components/layout/PortfolioBadge';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { FavoritesProvider } from './context/FavoritesContext';

export function VisoraLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <FavoritesProvider>
      <div className="min-h-screen bg-[#F7F5EF] text-[#15263B] flex flex-col font-sans antialiased selection:bg-[#5C9995] selection:text-white">
        <PortfolioBadge />
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </FavoritesProvider>
  );
}

export default VisoraLayout;

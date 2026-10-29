import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { FormaLogo } from '../common/FormaLogo';

const NAV_LINKS = [
  { name: 'Projects', to: '/forma/projects' },
  { name: 'Services', to: '/forma/services' },
  { name: 'Studio', to: '/forma/studio' },
  { name: 'Process', to: '/forma/process' },
  { name: 'Journal', to: '/forma/journal' },
  { name: 'Contact', to: '/forma/contact' },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-30 bg-[#F7F6F2]/90 backdrop-blur-md border-b border-[#E2DDD5] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark */}
          <FormaLogo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={`text-xs uppercase tracking-[0.18em] font-sans font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#292B28] font-semibold'
                      : 'text-[#292B28]/70 hover:text-[#292B28]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#292B28]" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/forma/consultation"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-[0.16em] font-sans font-medium text-[#292B28] border border-[#292B28] hover:bg-[#292B28] hover:text-[#FFFFFF] transition-all duration-300 rounded-none group"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#292B28] hover:text-[#777A62] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F7F6F2] border-b border-[#E2DDD5] px-6 py-8 space-y-6">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMobile}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.2em] font-sans py-2 border-b border-[#E2DDD5]/60 ${
                    isActive ? 'text-[#292B28] font-bold' : 'text-[#292B28]/70'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="pt-2">
            <Link
              to="/forma/consultation"
              onClick={closeMobile}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#292B28] text-[#FFFFFF] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#292B28]/90 transition-all"
            >
              <span>Discuss a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

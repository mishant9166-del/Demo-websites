import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { FormaLogo } from '../common/FormaLogo';
import { STUDIO_CONFIG } from '../../config/studioConfig';
import { HairlineDivider } from '../common/HairlineDivider';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E9E4DA] text-[#292B28] pt-16 sm:pt-20 pb-12 border-t border-[#D8D2C7] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Grid: Manifesto & Inquiries */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-6">
            <FormaLogo />
            <p className="font-serif text-lg sm:text-xl text-[#292B28]/85 leading-relaxed max-w-lg">
              “{STUDIO_CONFIG.manifesto}”
            </p>
            <div className="pt-2">
              <Link
                to="/forma/consultation"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#292B28] text-[#FFFFFF] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#292B28]/90 transition-all group"
              >
                <span>Initiate a Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Navigation & Address Columns */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs leading-relaxed">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#777A62] block">
                Index
              </span>
              <ul className="space-y-2">
                <li>
                  <Link to="/forma/projects" className="text-[#292B28]/80 hover:text-[#292B28] transition-colors">
                    Selected Projects (2022–2024)
                  </Link>
                </li>
                <li>
                  <Link to="/forma/services" className="text-[#292B28]/80 hover:text-[#292B28] transition-colors">
                    Design Disciplines & Scope
                  </Link>
                </li>
                <li>
                  <Link to="/forma/studio" className="text-[#292B28]/80 hover:text-[#292B28] transition-colors">
                    Studio Ethos & People
                  </Link>
                </li>
                <li>
                  <Link to="/forma/process" className="text-[#292B28]/80 hover:text-[#292B28] transition-colors">
                    The 7-Stage Process
                  </Link>
                </li>
                <li>
                  <Link to="/forma/journal" className="text-[#292B28]/80 hover:text-[#292B28] transition-colors">
                    Design Journal Essays
                  </Link>
                </li>
                <li>
                  <Link to="/forma/contact" className="text-[#292B28]/80 hover:text-[#292B28] transition-colors">
                    Atelier Location & Inquiries
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#777A62] block">
                The Atelier
              </span>
              <p className="text-[#292B28]/80">
                {STUDIO_CONFIG.contact.address.line1}
                <br />
                {STUDIO_CONFIG.contact.address.precinct}
                <br />
                {STUDIO_CONFIG.contact.address.locality}
                <br />
                {STUDIO_CONFIG.contact.address.postalCode}, India
              </p>

              <div className="pt-2 text-[#292B28]/75 space-y-1">
                <p>
                  <strong>Email:</strong> {STUDIO_CONFIG.contact.email}
                </p>
                <p>
                  <strong>Phone:</strong> {STUDIO_CONFIG.contact.phone}
                </p>
                <p className="text-[11px] text-[#777A62] pt-1">
                  {STUDIO_CONFIG.contact.visitingHours}
                </p>
              </div>
            </div>
          </div>
        </div>

        <HairlineDivider dark />

        {/* Bottom bar with demo disclaimer & copyright */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-[#292B28]/60">
          <p className="max-w-xl">
            <strong>Demonstration Notice:</strong> {STUDIO_CONFIG.disclaimer}
          </p>

          <div className="flex items-center gap-6 shrink-0">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-[#292B28] font-semibold hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All 12 Projects</span>
            </Link>
            <span>&copy; {new Date().getFullYear()} FORMA STUDIO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

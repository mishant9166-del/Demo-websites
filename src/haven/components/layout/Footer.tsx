import React from 'react';
import { Link } from 'react-router-dom';
import { HavenLogo } from '../common/HavenLogo';
import { HAVEN_CONFIG } from '../../config/agencyConfig';
import { Phone, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#292D2A] text-white pt-16 pb-12 border-t border-[#254D3C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid: Logo & Tagline + Quick Nav Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Dossier */}
          <div className="lg:col-span-4 space-y-5">
            <HavenLogo isDark={true} />
            <p className="text-sm font-serif italic text-white/80 max-w-sm leading-relaxed">
              “{HAVEN_CONFIG.tagline}”
            </p>
            <p className="text-xs text-white/60 font-sans leading-relaxed max-w-sm">
              A private real estate brokerage focused on high-value residential homes, modern urban apartments, coastal estates, and Grade-A commercial acquisitions across India.
            </p>
            <div className="pt-2 text-xs font-mono text-[#E7DDCE] space-y-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#899687]" />
                <span>{HAVEN_CONFIG.headquarters.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#899687]" />
                <span>{HAVEN_CONFIG.headquarters.email}</span>
              </div>
            </div>
          </div>

          {/* Nav: Property Portfolios */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-[#E7DDCE] font-semibold">
              Property Discovery
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-sans">
              <li>
                <Link to="/haven/buy" className="hover:text-white transition-colors">
                  Properties for Sale (Residential)
                </Link>
              </li>
              <li>
                <Link to="/haven/rent" className="hover:text-white transition-colors">
                  Long-Term Luxury Rentals
                </Link>
              </li>
              <li>
                <Link to="/haven/commercial" className="hover:text-white transition-colors">
                  Commercial Offices & Retail
                </Link>
              </li>
              <li>
                <Link to="/haven/properties?type=Penthouse" className="hover:text-white transition-colors">
                  Seafront & Skyline Penthouses
                </Link>
              </li>
              <li>
                <Link to="/haven/properties?type=Villa" className="hover:text-white transition-colors">
                  Independent Estates & Villas
                </Link>
              </li>
              <li>
                <Link to="/haven/saved-properties" className="hover:text-white transition-colors">
                  Saved Properties Shortlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav: Neighborhood Guides */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-[#E7DDCE] font-semibold">
              Regional Desks
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-sans">
              <li>
                <Link to="/haven/neighborhoods/bandra-west" className="hover:text-white transition-colors">
                  Bandra West, Mumbai
                </Link>
              </li>
              <li>
                <Link to="/haven/neighborhoods/golf-links" className="hover:text-white transition-colors">
                  Golf Links, New Delhi
                </Link>
              </li>
              <li>
                <Link to="/haven/neighborhoods/indiranagar" className="hover:text-white transition-colors">
                  Indiranagar, Bengaluru
                </Link>
              </li>
              <li>
                <Link to="/haven/neighborhoods/assagao" className="hover:text-white transition-colors">
                  Assagao, North Goa
                </Link>
              </li>
              <li>
                <Link to="/haven/neighborhoods" className="hover:text-white transition-colors font-semibold text-[#E7DDCE]">
                  All Neighborhood Guides &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav: Advisory & Agency */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-[#E7DDCE] font-semibold">
              The Agency
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-sans">
              <li>
                <Link to="/haven/about" className="hover:text-white transition-colors">
                  About Haven & Key
                </Link>
              </li>
              <li>
                <Link to="/haven/agents" className="hover:text-white transition-colors">
                  Our Advisory Team
                </Link>
              </li>
              <li>
                <Link to="/haven/sell-your-property" className="hover:text-white transition-colors text-[#E7DDCE] font-semibold">
                  List Your Property
                </Link>
              </li>
              <li>
                <Link to="/haven/contact" className="hover:text-white transition-colors">
                  Contact Advisory Desk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Banner Box */}
        <div className="p-5 bg-white/5 border border-white/10 rounded-xs flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-white/70">
          <ShieldCheck className="w-5 h-5 text-[#899687] shrink-0" />
          <p className="font-sans leading-relaxed">
            <strong>Demonstration Portfolio Notice:</strong> {HAVEN_CONFIG.disclaimer}
          </p>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <p>&copy; {new Date().getFullYear()} HAVEN & KEY Real Estate Advisory. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Project #10 &bull; Real Estate Agency</span>
            <Link to="/" className="text-[#E7DDCE] hover:text-white transition-colors">
              Agency Master Portfolio &rarr;
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

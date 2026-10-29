import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';
import { velocityConfig } from '../../config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080A0B] border-t border-white/10 text-[#A0A7AC] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/velocity" className="flex items-center gap-3 inline-block">
              <div className="w-8 h-8 rounded-sm bg-[#171B1E] border border-white/20 flex items-center justify-center">
                <div className="flex items-center -space-x-1">
                  <div className="w-1.5 h-4 bg-[#C8FF45] skew-x-[-22deg]" />
                  <div className="w-1 h-3 bg-[#F5F7F7] skew-x-[-22deg] opacity-80" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-[0.2em] text-sm text-[#F5F7F7]">
                  VELOCITY
                </span>
                <span className="text-[8px] font-mono tracking-[0.35em] text-[#C8FF45] uppercase">
                  AUTOMOTIVE
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#A0A7AC] leading-relaxed max-w-sm">
              {velocityConfig.description}
            </p>

            <div className="pt-2 text-xs text-[#A0A7AC] space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8FF45] shrink-0 mt-0.5" />
                <span>{velocityConfig.showroom.address}, {velocityConfig.showroom.state}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8FF45] shrink-0" />
                <span>{velocityConfig.showroom.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8FF45] shrink-0" />
                <span>{velocityConfig.showroom.conciergeEmail}</span>
              </div>
            </div>
          </div>

          {/* Inventory Categories */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F5F7F7] mb-4">
              The Collection
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/velocity/inventory?category=Sports+Car" className="hover:text-[#C8FF45] transition-colors">
                  Sports Cars
                </Link>
              </li>
              <li>
                <Link to="/velocity/inventory?category=Luxury+SUV" className="hover:text-[#C8FF45] transition-colors">
                  Luxury SUVs
                </Link>
              </li>
              <li>
                <Link to="/velocity/inventory?category=Electric" className="hover:text-[#C8FF45] transition-colors">
                  Electric Vehicles
                </Link>
              </li>
              <li>
                <Link to="/velocity/inventory?category=Performance+Sedan" className="hover:text-[#C8FF45] transition-colors">
                  Performance Sedans
                </Link>
              </li>
              <li>
                <Link to="/velocity/inventory?category=Grand+Tourer" className="hover:text-[#C8FF45] transition-colors">
                  Grand Tourers
                </Link>
              </li>
              <li>
                <Link to="/velocity/inventory" className="text-[#C8FF45] font-semibold hover:underline inline-flex items-center gap-1">
                  View Full Roster <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Dealership Discovery */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F5F7F7] mb-4">
              Experience
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/velocity/about" className="hover:text-[#C8FF45] transition-colors">
                  About Velocity
                </Link>
              </li>
              <li>
                <Link to="/velocity/compare" className="hover:text-[#C8FF45] transition-colors">
                  Vehicle Comparison
                </Link>
              </li>
              <li>
                <Link to="/velocity/favorites" className="hover:text-[#C8FF45] transition-colors">
                  Saved Vehicles
                </Link>
              </li>
              <li>
                <Link to="/velocity/contact" className="hover:text-[#C8FF45] transition-colors">
                  Showroom Inquiries
                </Link>
              </li>
              <li>
                <Link to="/velocity/contact?type=test-drive" className="hover:text-[#C8FF45] transition-colors">
                  Private Test Drive Request
                </Link>
              </li>
            </ul>
          </div>

          {/* Standards & Transparency */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F5F7F7] mb-4">
              Commitment
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8FF45] shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  Every vehicle undergoes rigorous mechanical inspection and digital telemetry diagnostics before handover.
                </span>
              </div>
              <div className="p-3 rounded bg-[#101315] border border-white/5 text-[11px] text-[#A0A7AC]/80">
                Transparent vehicle paperwork, verified mileage certifications, and pan-India enclosed flatbed transport.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <p className="text-[#A0A7AC]/70 text-[11px] leading-relaxed max-w-2xl">
            {velocityConfig.disclaimer}
          </p>

          <div className="text-[11px] font-mono text-[#A0A7AC]/60 shrink-0">
            © {currentYear} {velocityConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

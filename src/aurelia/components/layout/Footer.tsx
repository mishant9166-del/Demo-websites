import React from 'react';
import { Link } from 'react-router-dom';
import { AureliaLogo } from '../common/AureliaLogo';
import { AURELIA_CONFIG } from '../../config/retreatConfig';
import { Phone, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#173D32] text-[#F8F5EF] pt-16 pb-12 border-t border-[#D5BE91]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <AureliaLogo isDark={true} />
            <p className="text-sm font-serif italic text-[#D5BE91] max-w-sm leading-relaxed">
              “{AURELIA_CONFIG.tagline}”
            </p>
            <p className="text-xs text-white/70 font-sans leading-relaxed max-w-sm">
              A private collection of intimate nature sanctuaries, alpine deodar lodges, barefoot ocean villas, and restored royal Rajputana palaces across the Indian subcontinent.
            </p>
            <div className="pt-2 text-xs font-mono text-[#D5BE91] space-y-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D5BE91]" />
                <span>{AURELIA_CONFIG.concierge.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D5BE91]" />
                <span>{AURELIA_CONFIG.concierge.email}</span>
              </div>
            </div>
          </div>

          {/* Nav: Destinations */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-[#D5BE91] font-semibold">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-sans">
              <li>
                <Link to="/aurelia/destinations/himalayan-hideaway" className="hover:text-white transition-colors">
                  Himalayan Hideaway (Uttarakhand)
                </Link>
              </li>
              <li>
                <Link to="/aurelia/destinations/coastal-reverie" className="hover:text-white transition-colors">
                  Coastal Reverie (North Goa)
                </Link>
              </li>
              <li>
                <Link to="/aurelia/destinations/the-forest-house" className="hover:text-white transition-colors">
                  The Forest House (Kerala)
                </Link>
              </li>
              <li>
                <Link to="/aurelia/destinations/the-heritage-residence" className="hover:text-white transition-colors">
                  The Heritage Residence (Rajasthan)
                </Link>
              </li>
              <li>
                <Link to="/aurelia/destinations" className="hover:text-[#D5BE91] transition-colors font-semibold">
                  All Destination Guides &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav: Stays & Suites */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-[#D5BE91] font-semibold">
              Our Stays
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-sans">
              <li>
                <Link to="/aurelia/stays/aurelia-cloud-peak-himalayas" className="hover:text-white transition-colors">
                  Aurelia Cloud Peak (Mussoorie)
                </Link>
              </li>
              <li>
                <Link to="/aurelia/stays/aurelia-ocean-palm-goa" className="hover:text-white transition-colors">
                  Aurelia Ocean Palm (Ashwem)
                </Link>
              </li>
              <li>
                <Link to="/aurelia/stays/aurelia-rainforest-sanctuary-kerala" className="hover:text-white transition-colors">
                  Aurelia Rainforest (Wayanad)
                </Link>
              </li>
              <li>
                <Link to="/aurelia/stays/aurelia-haveli-palace-jaipur" className="hover:text-white transition-colors">
                  Aurelia Haveli Palace (Jaipur)
                </Link>
              </li>
              <li>
                <Link to="/aurelia/stays" className="hover:text-[#D5BE91] transition-colors font-semibold">
                  View All Stays & Villas &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav: Guest Journey & Brand */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono text-[#D5BE91] font-semibold">
              The Journey
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-sans">
              <li>
                <Link to="/aurelia/experiences" className="hover:text-white transition-colors">
                  Curated Experiences
                </Link>
              </li>
              <li>
                <Link to="/aurelia/offers" className="hover:text-white transition-colors">
                  Seasonal Offers
                </Link>
              </li>
              <li>
                <Link to="/aurelia/our-story" className="hover:text-white transition-colors">
                  Our Story & Ethos
                </Link>
              </li>
              <li>
                <Link to="/aurelia/gallery" className="hover:text-white transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/aurelia/faq" className="hover:text-white transition-colors">
                  Guest FAQs
                </Link>
              </li>
              <li>
                <Link to="/aurelia/contact" className="hover:text-white transition-colors">
                  Concierge Desk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="p-5 bg-white/5 border border-[#D5BE91]/20 rounded-xs flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-white/75">
          <ShieldCheck className="w-5 h-5 text-[#D5BE91] shrink-0" />
          <p className="font-sans leading-relaxed">
            <strong>Demonstration Portfolio Notice:</strong> {AURELIA_CONFIG.disclaimer}
          </p>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <p>&copy; {new Date().getFullYear()} AURELIA RETREATS &bull; Boutique Hotels & Luxury Stays.</p>
          <div className="flex items-center gap-6">
            <span>Project #11 &bull; Hospitality Portfolio</span>
            <Link to="/" className="text-[#D5BE91] hover:text-white transition-colors">
              Agency Master Portfolio &rarr;
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { MellowLogo } from '../common/MellowLogo';
import { MapPin, Phone, Mail, Clock, Calendar, ShoppingBag, Coffee } from 'lucide-react';
import { CAFE_INFO } from '../../config/cafeConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#382820] text-[#F8F2E7] pt-16 pb-12 border-t border-[#B77A4A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#F8F2E7]/15">
          {/* Column 1 & 2: Brand Story */}
          <div className="lg:col-span-2 space-y-5">
            <MellowLogo variant="light" size="lg" />
            <p className="text-sm text-[#F8F2E7]/80 leading-relaxed max-w-sm pt-1">
              An independent coffee roastery, all-day brunch kitchen, and wild sourdough bakery dedicated to slow mornings, unhurried craft, and warm community in Indiranagar.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/mellow-bean/reservations"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#F0D27A] text-[#382820] text-xs font-bold hover:bg-[#e6c669] transition-colors shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve a Table</span>
              </Link>
              <Link
                to="/mellow-bean/order"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-colors border border-white/20"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#F0D27A]" />
                <span>Pickup Order</span>
              </Link>
            </div>
          </div>

          {/* Column 3: The Café */}
          <div className="space-y-3">
            <h4 className="font-fraunces text-base font-bold text-[#FFFEFA]">
              The Café
            </h4>
            <ul className="space-y-2 text-sm text-[#F8F2E7]/75">
              <li>
                <Link to="/mellow-bean/menu" className="hover:text-white transition-colors">
                  Food &amp; Drink Menu
                </Link>
              </li>
              <li>
                <Link to="/mellow-bean/our-story" className="hover:text-white transition-colors">
                  Our Story &amp; Roastery
                </Link>
              </li>
              <li>
                <Link to="/mellow-bean/gallery" className="hover:text-white transition-colors">
                  Atmosphere Gallery
                </Link>
              </li>
              <li>
                <Link to="/mellow-bean/events" className="hover:text-white transition-colors">
                  Private Gatherings &amp; Cupping
                </Link>
              </li>
              <li>
                <Link to="/mellow-bean/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours of Operation */}
          <div className="space-y-3">
            <h4 className="font-fraunces text-base font-bold text-[#FFFEFA] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F0D27A]" />
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs text-[#F8F2E7]/80">
              <div className="flex justify-between py-1 border-b border-[#F8F2E7]/10">
                <span>Mon – Fri:</span>
                <span className="font-semibold text-white">{CAFE_INFO.hours.weekdays}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F8F2E7]/10">
                <span>Sat &amp; Sun:</span>
                <span className="font-semibold text-white">{CAFE_INFO.hours.weekends}</span>
              </div>
              <div className="pt-1 text-[11px] text-[#F0D27A]">
                Fresh Bakery Drop: 8:00 AM &amp; 2:30 PM daily
              </div>
            </div>
          </div>

          {/* Column 5: Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-fraunces text-base font-bold text-[#FFFEFA]">
              Find Our Table
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F8F2E7]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F0D27A] shrink-0 mt-0.5" />
                <span>
                  {CAFE_INFO.address.street},<br />
                  {CAFE_INFO.address.neighbourhood}, {CAFE_INFO.address.city} {CAFE_INFO.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F0D27A] shrink-0" />
                <span>{CAFE_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F0D27A] shrink-0" />
                <span>{CAFE_INFO.email}</span>
              </li>
              <li className="flex items-center gap-2.5 text-[11px] text-[#B77A4A] pt-1 font-handwriting text-base">
                <Coffee className="w-3.5 h-3.5" />
                <span>Good coffee. Slow mornings. Better company.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#F8F2E7]/60 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} MELLOW &amp; BEAN Coffee, Brunch &amp; Bakery. Fictional concept portfolio project.
          </p>
          <p className="max-w-xl text-[11px] text-[#F8F2E7]/50">
            {CAFE_INFO.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

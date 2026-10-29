import React from 'react';
import { Link } from 'react-router-dom';
import { PawLogo } from '../common/PawLogo';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../../config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#343D30] text-[#FBF5EA] pt-16 pb-12 border-t border-[#82947A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgent Emergency Warning Banner */}
        <div className="mb-12 p-5 rounded-2xl bg-[#C76F52]/20 border border-[#C76F52]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-[#C76F52] text-white shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-fraunces text-lg font-bold text-white">
                Immediate Urgent Veterinary Need?
              </h4>
              <p className="text-sm text-[#FBF5EA]/85 mt-0.5 max-w-2xl">
                If your companion is in severe distress, experiencing collapse, poisoning, or heavy bleeding, please visit a 24-hour veterinary emergency center immediately.
              </p>
            </div>
          </div>
          <Link
            to="/paw-whisker/emergency-care"
            className="shrink-0 px-4 py-2 rounded-xl bg-white text-[#343D30] text-sm font-semibold hover:bg-[#F0D9CA] transition-colors"
          >
            Emergency Guide &amp; Triage
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#82947A]/30">
          {/* Brand & Summary */}
          <div className="lg:col-span-2 space-y-4">
            <PawLogo variant="light" size="lg" />
            <p className="text-sm text-[#FBF5EA]/80 leading-relaxed max-w-sm pt-2">
              A gentle, independent neighbourhood veterinary clinic dedicated to preventive medicine, low-stress Fear-Free handling, and trusted relationships with pet families.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-[#82947A]">
              <ShieldCheck className="w-4 h-4 text-[#C76F52]" />
              <span>Fear-Free Certified Gentle Veterinary Handling</span>
            </div>

            <div className="pt-2">
              <Link
                to="/paw-whisker/book-visit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C76F52] text-white text-sm font-semibold hover:bg-[#b05d42] transition-colors shadow-sm"
              >
                <Heart className="w-4 h-4" />
                <span>Schedule a Companion Visit</span>
              </Link>
            </div>
          </div>

          {/* Practice Links */}
          <div className="space-y-3">
            <h4 className="font-fraunces text-base font-bold text-white">
              Our Practice
            </h4>
            <ul className="space-y-2 text-sm text-[#FBF5EA]/75">
              <li>
                <Link to="/paw-whisker/services" className="hover:text-white transition-colors">
                  Veterinary Services
                </Link>
              </li>
              <li>
                <Link to="/paw-whisker/our-vets" className="hover:text-white transition-colors">
                  Meet Our Veterinarians
                </Link>
              </li>
              <li>
                <Link to="/paw-whisker/pet-wellness" className="hover:text-white transition-colors">
                  Pet Wellness Library
                </Link>
              </li>
              <li>
                <Link to="/paw-whisker/new-patients" className="hover:text-white transition-colors">
                  New Patient Information
                </Link>
              </li>
              <li>
                <Link to="/paw-whisker/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/paw-whisker/contact" className="hover:text-white transition-colors">
                  Clinic Location &amp; Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinic Hours */}
          <div className="space-y-3">
            <h4 className="font-fraunces text-base font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#82947A]" />
              Clinic Hours
            </h4>
            <div className="space-y-1.5 text-xs text-[#FBF5EA]/80 leading-relaxed">
              <div className="flex justify-between py-1 border-b border-[#82947A]/20">
                <span>Mon – Fri</span>
                <span className="font-medium text-white">{CLINIC_INFO.hours.weekdays}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#82947A]/20">
                <span>Saturday</span>
                <span className="font-medium text-white">{CLINIC_INFO.hours.saturday}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Sunday</span>
                <span className="text-[#C76F52] font-semibold">{CLINIC_INFO.hours.sunday}</span>
              </div>
            </div>
            <p className="text-[11px] text-[#82947A] pt-2">
              Appointments recommended. Dedicated quiet cat hours available on Tuesday afternoons.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-fraunces text-base font-bold text-white">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FBF5EA]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C76F52] shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.address.street},<br />
                  {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#82947A] shrink-0" />
                <span>{CLINIC_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#82947A] shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Honest Demonstration Notice & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FBF5EA]/60 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} PAW &amp; WHISKER Veterinary Care &amp; Wellness. Fictional demo practice.
          </p>
          <p className="max-w-xl text-[11px] text-[#FBF5EA]/50">
            {CLINIC_INFO.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

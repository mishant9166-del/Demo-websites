import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { dentalConfig } from '../../config/site';
import { ToothIcon } from '../common/ToothIcon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E3ECE9] text-[#687A80] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#E3ECE9]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/dental" className="flex items-center gap-2.5 inline-block">
              <div className="w-8 h-8 rounded-full bg-[#E6F6F2] flex items-center justify-center text-[#0D9488]">
                <ToothIcon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-[#152B32] leading-none">
                  SmileCare
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#0D9488] uppercase mt-0.5">
                  Dental Clinic
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#687A80] leading-relaxed max-w-sm">
              {dentalConfig.description}
            </p>

            <div className="pt-2 text-xs text-[#687A80] space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span>{dentalConfig.clinic.address}, {dentalConfig.clinic.state}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>{dentalConfig.clinic.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>{dentalConfig.clinic.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>{dentalConfig.clinic.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#152B32] mb-4">
              Explore Clinic
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/dental" className="hover:text-[#0D9488] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dental/services" className="hover:text-[#0D9488] transition-colors">
                  All Treatments
                </Link>
              </li>
              <li>
                <Link to="/dental/doctors" className="hover:text-[#0D9488] transition-colors">
                  Our Dental Team
                </Link>
              </li>
              <li>
                <Link to="/dental/about" className="hover:text-[#0D9488] transition-colors">
                  About the Clinic
                </Link>
              </li>
              <li>
                <Link to="/dental/faq" className="hover:text-[#0D9488] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/dental/contact" className="hover:text-[#0D9488] transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Dental Treatments */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#152B32] mb-4">
              Key Treatments
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/dental/services/general-dentistry" className="hover:text-[#0D9488] transition-colors">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link to="/dental/services/cosmetic-dentistry" className="hover:text-[#0D9488] transition-colors">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link to="/dental/services/teeth-whitening" className="hover:text-[#0D9488] transition-colors">
                  Teeth Whitening
                </Link>
              </li>
              <li>
                <Link to="/dental/services/orthodontics" className="hover:text-[#0D9488] transition-colors">
                  Orthodontics & Aligners
                </Link>
              </li>
              <li>
                <Link to="/dental/services/dental-implants" className="hover:text-[#0D9488] transition-colors">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link to="/dental/services/root-canal-treatment" className="hover:text-[#0D9488] transition-colors">
                  Root Canal Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Appointment CTA Box */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#152B32]">
              Plan Your Visit
            </h4>
            <p className="text-xs text-[#687A80] leading-relaxed">
              Schedule your consultation with our experienced dental team today.
            </p>
            <Link
              to="/dental/appointment"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#115E59] transition-colors shadow-xs"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <p className="text-[#687A80]/80 text-[11px] leading-relaxed max-w-2xl">
            {dentalConfig.disclaimer}
          </p>

          <div className="text-[11px] text-[#687A80]/70 shrink-0">
            © {currentYear} {dentalConfig.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

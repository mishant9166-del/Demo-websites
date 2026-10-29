import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { HospitalLogo } from '../common/HospitalLogo';
import { medoraConfig } from '../../config/site';

export function Footer() {
  const quickLinks = [
    { label: 'Hospital Home', path: '/medora' },
    { label: 'All Departments', path: '/medora/departments' },
    { label: 'Doctors Directory', path: '/medora/doctors' },
    { label: 'Hospital Facilities', path: '/medora/facilities' },
    { label: 'About Medora', path: '/medora/about' },
    { label: 'Book Appointment', path: '/medora/appointment' },
    { label: 'Frequently Asked Questions', path: '/medora/faq' },
    { label: 'Contact Us', path: '/medora/contact' },
  ];

  const featuredDepts = [
    { label: 'Cardiology & Heart Care', path: '/medora/departments/cardiology' },
    { label: 'Orthopedics & Joint Surgery', path: '/medora/departments/orthopedics' },
    { label: 'Neurology & Spine Care', path: '/medora/departments/neurology' },
    { label: 'Gynecology & Obstetrics', path: '/medora/departments/gynecology' },
    { label: 'Pediatrics & Child Health', path: '/medora/departments/pediatrics' },
    { label: 'Oncology & Cancer Care', path: '/medora/departments/oncology' },
    { label: 'Radiology & 3T MRI Suite', path: '/medora/departments/radiology' },
    { label: 'General Family Medicine', path: '/medora/departments/general-medicine' },
  ];

  return (
    <footer className="bg-[#102B46] text-[#EAF5FC] border-t border-white/10 selection:bg-[#18A9A0] selection:text-white">
      {/* Emergency Notice Strip */}
      <div className="bg-[#0C2237] border-b border-white/10 py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-ping"></span>
            <span className="font-bold text-white">24/7 Emergency & Trauma Care Available</span>
            <span className="text-[#EAF5FC]/70 hidden md:inline">— Dedicated triage team on duty around the clock</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#EAF5FC]/80">Emergency Hotline:</span>
            <a
              href={`tel:${medoraConfig.contact.emergencyPhone.replace(/[^0-9+]/g, '')}`}
              className="font-bold text-[#18A9A0] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{medoraConfig.contact.emergencyPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <HospitalLogo variant="light" size="lg" />
            <p className="text-sm text-[#EAF5FC]/80 leading-relaxed max-w-sm mt-3">
              {medoraConfig.tagline} {medoraConfig.description}
            </p>
            <div className="pt-2">
              <Link
                to="/medora/appointment"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1769AA] hover:bg-[#18A9A0] text-white text-xs font-bold transition-all shadow-xs"
              >
                <span>Request Appointment Online</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#18A9A0] mb-4">
              Explore Hospital
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#EAF5FC]/80 hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Departments (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#18A9A0] mb-4">
              Clinical Specialties
            </h4>
            <ul className="space-y-2 text-sm">
              {featuredDepts.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#EAF5FC]/80 hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#18A9A0] mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs text-[#EAF5FC]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#18A9A0] shrink-0 mt-0.5" />
                <span>{medoraConfig.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#18A9A0] shrink-0" />
                <span>{medoraConfig.contact.generalPhone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#18A9A0] shrink-0" />
                <span>{medoraConfig.contact.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#18A9A0] shrink-0 mt-0.5" />
                <span>{medoraConfig.contact.opdHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fictional Showcase Notice & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#EAF5FC]/60">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-[#18A9A0] shrink-0" />
            <p>{medoraConfig.disclaimer}</p>
          </div>
          <div className="shrink-0 flex items-center gap-1">
            <span>© {new Date().getFullYear()} Medora Hospital Demo.</span>
            <span className="hidden sm:inline">Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#18A9A0] inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}

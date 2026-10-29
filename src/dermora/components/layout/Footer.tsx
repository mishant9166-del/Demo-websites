import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, Sparkles, Heart } from 'lucide-react';
import { DermoraLogo } from '../common/DermoraLogo';
import { dermoraConfig } from '../../config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const treatmentLinks = [
    { label: 'Acne Consultation', path: '/dermora/treatments/acne-consultation' },
    { label: 'Pigmentation & Melasma', path: '/dermora/treatments/pigmentation-assessment' },
    { label: 'Non-Ablative Rejuvenation', path: '/dermora/treatments/skin-rejuvenation' },
    { label: 'Clinical Chemical Peels', path: '/dermora/treatments/chemical-peels' },
    { label: 'Laser Hair Reduction', path: '/dermora/treatments/laser-hair-reduction' },
    { label: 'Hair & Scalp Health', path: '/dermora/treatments/hair-scalp-consultation' },
    { label: 'Graceful Ageing & Collagen', path: '/dermora/treatments/anti-ageing-treatments' },
    { label: 'Sensitive Skin & Barrier Reset', path: '/dermora/treatments/sensitive-skin-consultation' },
  ];

  const exploreLinks = [
    { label: 'All Treatments', path: '/dermora/treatments' },
    { label: 'Our Specialists', path: '/dermora/specialists' },
    { label: 'Skin Concerns Guide', path: '/dermora/skin-concerns' },
    { label: 'About the Clinic', path: '/dermora/about' },
    { label: 'Clinic Gallery', path: '/dermora/gallery' },
    { label: 'Patient FAQs', path: '/dermora/faq' },
    { label: 'Contact Us', path: '/dermora/contact' },
    { label: 'Book Consultation', path: '/dermora/appointment' },
  ];

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#E4DED4] text-[#292A27] font-sans selection:bg-[#B77962] selection:text-white">
      {/* Top Consultation Announcement Strip */}
      <div className="bg-[#F0E9DF] border-b border-[#E4DED4] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B77962]" />
            <span className="font-serif italic font-semibold text-[#38473A] text-base sm:text-lg">
              &ldquo;Care That Begins With Listening&rdquo;
            </span>
            <span className="hidden md:inline text-[#77766F] font-sans">
              — Personalized skin consultations by appointment
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/dermora/appointment"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38473A] hover:text-[#B77962] transition-colors"
            >
              <span>Schedule Initial Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <DermoraLogo size="lg" />
            <p className="text-xs sm:text-sm text-[#77766F] leading-relaxed max-w-sm mt-3">
              {dermoraConfig.description}
            </p>
            <div className="pt-2">
              <Link
                to="/dermora/appointment"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#38473A] hover:bg-[#292A27] text-white text-xs font-medium transition-all shadow-2xs"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Treatments Navigation (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B77962] mb-4">
              Clinical Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {treatmentLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#77766F] hover:text-[#38473A] hover:underline transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Explore (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B77962] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {exploreLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#77766F] hover:text-[#38473A] hover:underline transition-colors block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B77962] mb-4">
              Clinic & Inquiries
            </h4>
            <div className="space-y-3 text-xs text-[#77766F]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38473A] shrink-0 mt-0.5" />
                <span className="leading-snug">{dermoraConfig.contact.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38473A] shrink-0" />
                <span>{dermoraConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38473A] shrink-0" />
                <span>{dermoraConfig.contact.email}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#38473A] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-[#292A27]">Mon–Fri: {dermoraConfig.contact.hours.weekdays}</span>
                  <span className="text-[11px] block mt-0.5">Sat: {dermoraConfig.contact.hours.saturday} · Sun: {dermoraConfig.contact.hours.sunday}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Fictional Demonstration Disclaimer */}
        <div className="mt-12 pt-8 border-t border-[#E4DED4] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#77766F]">
          <div className="flex items-start sm:items-center gap-2 text-left">
            <Sparkles className="w-4 h-4 text-[#B77962] shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">{dermoraConfig.disclaimer}</p>
          </div>
          <div className="shrink-0 flex items-center gap-1">
            <span>© {currentYear} DERMORA Clinic.</span>
            <span className="hidden sm:inline">Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#B77962] inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { RehaboraLogo } from '../common/RehaboraLogo';
import { rehaboraConfig } from '../../config/site';

export function Footer() {
  const currentYear = 2026;

  const serviceLinks = [
    { label: 'Musculoskeletal Care', path: '/rehabora/services/musculoskeletal-physiotherapy' },
    { label: 'Sports Injury Recovery', path: '/rehabora/services/sports-injury-rehabilitation' },
    { label: 'Post-Operative Care', path: '/rehabora/services/post-operative-rehabilitation' },
    { label: 'Spine & Neck Therapy', path: '/rehabora/services/back-and-neck-care' },
    { label: 'Balance & Mobility', path: '/rehabora/services/balance-and-mobility-training' },
  ];

  const programLinks = [
    { label: 'Sports Recovery Program', path: '/rehabora/programs/sports-recovery-program' },
    { label: 'Mobility & Flexibility Track', path: '/rehabora/programs/mobility-and-flexibility-program' },
    { label: 'Post-Surgical Pathway', path: '/rehabora/programs/post-surgical-rehabilitation-program' },
    { label: 'Active Ageing Wellness', path: '/rehabora/programs/active-ageing-program' },
  ];

  return (
    <footer className="bg-[#193D32] text-white pt-16 pb-12 border-t border-[#285A49]/50 font-sans selection:bg-[#72A88A] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/rehabora" className="inline-block">
              <RehaboraLogo variant="light" size="lg" />
            </Link>

            <p className="text-xs sm:text-sm text-[#E8F2EC]/80 leading-relaxed font-light max-w-sm">
              Personalized physiotherapy and movement rehabilitation designed to rebuild strength, joint mobility, and enduring confidence in a calm, modern environment.
            </p>

            <div className="pt-2">
              <Link
                to="/rehabora/appointment"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E8F2EC] text-[#193D32] text-xs font-heading font-bold hover:bg-white transition-colors shadow-sm"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 font-sans">
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#A8D5BC] mb-4">
              Clinical Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8F2EC]/80">
              {serviceLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#72A88A] group-hover:bg-[#D8A66A] transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/rehabora/services"
                  className="text-[#D8A66A] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>View all 10 services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs & Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3 font-sans">
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#A8D5BC] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E8F2EC]/80">
              {programLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Link to="/rehabora/practitioners" className="hover:text-white transition-colors">
                  Our Practitioners
                </Link>
              </li>
              <li>
                <Link to="/rehabora/about" className="hover:text-white transition-colors">
                  About Clinic
                </Link>
              </li>
              <li>
                <Link to="/rehabora/gallery" className="hover:text-white transition-colors">
                  Clinic Gallery
                </Link>
              </li>
              <li>
                <Link to="/rehabora/faq" className="hover:text-white transition-colors">
                  Patient FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-[#A8D5BC] mb-4">
              Clinic Location & Hours
            </h4>
            <div className="space-y-3 text-xs text-[#E8F2EC]/80 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A8D5BC] shrink-0 mt-0.5" />
                <span className="leading-snug">{rehaboraConfig.contact.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A8D5BC] shrink-0" />
                <a href={`tel:${rehaboraConfig.contact.phone}`} className="hover:text-white">
                  {rehaboraConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A8D5BC] shrink-0" />
                <a href={`mailto:${rehaboraConfig.contact.email}`} className="hover:text-white">
                  {rehaboraConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#A8D5BC] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-white">Mon–Fri: {rehaboraConfig.contact.hours.weekdays}</span>
                  <span className="text-[11px] block mt-0.5">Sat: {rehaboraConfig.contact.hours.saturday} · Sun: {rehaboraConfig.contact.hours.sunday}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fictional Demonstration Notice */}
        <div className="pt-8 border-t border-white/10">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#E8F2EC]/70 flex items-start gap-3 leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-[#A8D5BC] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Portfolio Showcase Notice: </strong>
              {rehaboraConfig.disclaimer}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back Navigation */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8F2EC]/60">
          <p>© {currentYear} REHABORA Physiotherapy & Rehabilitation. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-[#A8D5BC] hover:underline flex items-center gap-1 font-semibold">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Agency Portfolio Showcase</span>
            </Link>
            <Link to="/rehabora/contact" className="hover:text-white transition-colors">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

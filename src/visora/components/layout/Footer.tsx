import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail, ShieldCheck, Check } from 'lucide-react';
import VisoraLogo from '../common/VisoraLogo';
import { siteConfig } from '../../config/site';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#15263B] text-white pt-16 sm:pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Atelier Identity */}
          <div className="lg:col-span-4 space-y-5">
            <VisoraLogo light={true} />
            <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed max-w-sm">
              A bespoke vision care clinic and curated optical atelier. Combining non-invasive diagnostic precision with handcrafted eyewear chosen to fit the way you live.
            </p>

            <div className="pt-2 text-xs text-white/60 space-y-1">
              <p>Independent Optical Practice</p>
              <p>Licensed Diagnostic Refraction &amp; Spectacle Dispensing</p>
            </div>
          </div>

          {/* Column 2: Clinical Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-base text-white tracking-wide">
              Clinical Eye Care
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link
                  to="/visora/services/comprehensive-eye-examination"
                  className="hover:text-[#5C9995] transition-colors"
                >
                  Comprehensive Eye Examination
                </Link>
              </li>
              <li>
                <Link
                  to="/visora/services/digital-vision-assessment"
                  className="hover:text-[#5C9995] transition-colors"
                >
                  Digital Vision &amp; Ergonomics
                </Link>
              </li>
              <li>
                <Link
                  to="/visora/services/contact-lens-consultation"
                  className="hover:text-[#5C9995] transition-colors"
                >
                  Contact Lens Consultation
                </Link>
              </li>
              <li>
                <Link
                  to="/visora/services/dry-eye-consultation"
                  className="hover:text-[#5C9995] transition-colors"
                >
                  Dry Eye &amp; Ocular Surface
                </Link>
              </li>
              <li>
                <Link
                  to="/visora/services/childrens-eye-care"
                  className="hover:text-[#5C9995] transition-colors"
                >
                  Children's Pediatric Assessment
                </Link>
              </li>
              <li>
                <Link
                  to="/visora/services/prescription-updates"
                  className="hover:text-[#5C9995] transition-colors"
                >
                  Prescription Refraction Update
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Atelier Eyewear & Studio */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-base text-white tracking-wide">
              Optical Studio
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <Link to="/visora/eyewear" className="hover:text-[#5C9995] transition-colors">
                  All Eyewear
                </Link>
              </li>
              <li>
                <Link to="/visora/eyewear?category=Lightweight+Titanium" className="hover:text-[#5C9995] transition-colors">
                  Japanese β-Titanium
                </Link>
              </li>
              <li>
                <Link to="/visora/eyewear?category=Acetate+Classics" className="hover:text-[#5C9995] transition-colors">
                  Mazzucchelli Bio-Acetate
                </Link>
              </li>
              <li>
                <Link to="/visora/eyewear?category=Sunglasses" className="hover:text-[#5C9995] transition-colors">
                  Polarized Sunglasses
                </Link>
              </li>
              <li>
                <Link to="/visora/doctors" className="hover:text-[#5C9995] transition-colors">
                  Our Specialists
                </Link>
              </li>
              <li>
                <Link to="/visora/about" className="hover:text-[#5C9995] transition-colors">
                  Studio Story &amp; Ethos
                </Link>
              </li>
              <li>
                <Link to="/visora/faq" className="hover:text-[#5C9995] transition-colors">
                  Patient FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Concierge */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-base text-white tracking-wide">
              Studio Journal
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Receive curated optical release notes, eyewear craftsmanship stories, and seasonal vision health perspectives.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-2.5 pr-10 rounded-full text-xs bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-hidden focus:border-[#5C9995] transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-[#5C9995] text-white hover:bg-white hover:text-[#15263B] transition-colors"
                    aria-label="Subscribe to Studio Journal"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[10px] text-white/50">
                  Demo simulation; no marketing emails will be dispatched.
                </p>
              </form>
            ) : (
              <div className="p-3 rounded-2xl bg-white/10 border border-[#5C9995]/50 flex items-center gap-2 text-xs text-[#5C9995]">
                <Check className="w-4 h-4" />
                <span>Thank you. Your demo subscription is recorded locally.</span>
              </div>
            )}

            <div className="pt-2 border-t border-white/10 space-y-1 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#5C9995]" />
                <span>{siteConfig.contact.address.line1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#5C9995]" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#5C9995]" />
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Ethical Medical Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/60">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#5C9995] shrink-0" />
            <p>
              <span className="font-semibold text-white/90">Portfolio Notice:</span>{' '}
              {siteConfig.disclaimer}
            </p>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <Link to="/visora" className="hover:text-white transition-colors">
              Privacy &amp; Terms
            </Link>
            <Link to="/visora/faq" className="hover:text-white transition-colors">
              Accessibility
            </Link>
            <span>© 2026 VISORA Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

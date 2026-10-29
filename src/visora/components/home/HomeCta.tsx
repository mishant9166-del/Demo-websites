import { Link } from 'react-router-dom';
import { Calendar, Glasses, Sparkles, MapPin } from 'lucide-react';
import ImageWithFallback from '../common/ImageWithFallback';
import { siteConfig } from '../../config/site';

export function HomeCta() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#15263B] text-white border border-[#E4E4DE]/20 overflow-hidden p-8 sm:p-12 lg:p-16 shadow-xl">
          {/* Subtle background decorative lens glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#5C9995]/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-white/5 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-sans font-medium tracking-wider uppercase bg-white/10 text-[#5C9995] border border-white/10 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BEGIN YOUR VISION JOURNEY</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
                Clearer vision starts with an{' '}
                <span className="italic text-[#5C9995]">unhurried consultation.</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-white/75 font-sans leading-relaxed max-w-xl">
                Experience comprehensive ocular evaluation paired with bespoke eyewear styling in our quiet Portland studio. We reserve dedicated consultation suites for each patient.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-white/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#5C9995]" />
                  <span>{siteConfig.contact.address.line1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#5C9995]" />
                  <span>No physician referral necessary</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/visora/book-appointment"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold bg-[#5C9995] text-white hover:bg-white hover:text-[#15263B] transition-all shadow-md hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an Eye Test</span>
                </Link>

                <Link
                  to="/visora/eyewear"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white hover:text-[#15263B] border border-white/20 transition-all shadow-xs hover:-translate-y-0.5"
                >
                  <Glasses className="w-4 h-4 text-[#5C9995]" />
                  <span>Explore Eyewear</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Editorial Atmosphere Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[4/3] bg-white/5">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1200&q=80"
                  alt="Precision optical trial lenses and delicate eyewear frames in studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15263B]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <p className="font-display text-sm font-medium">Bespoke Atelier Experience</p>
                  <p className="text-[11px] text-white/70">Custom lens centering &amp; pantoscopic adjustment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCta;

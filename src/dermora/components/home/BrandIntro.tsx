import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

export function BrandIntro() {
  const pillars = [
    {
      title: 'Professional Guidance',
      desc: 'All consultations are conducted by licensed dermatologists with comprehensive medical training.',
    },
    {
      title: 'Clear Explanations',
      desc: 'No confusing scientific jargon. We demystify your diagnosis so you understand the path forward.',
    },
    {
      title: 'Personalized Consultations',
      desc: 'Skin care is not one-size-fits-all. Every formulation and procedure aligns with your barrier resilience.',
    },
    {
      title: 'Comfortable Environment',
      desc: 'Boutique consultation suites designed for acoustic calm, privacy, and unhurried clinical conversations.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E4DED4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Consultation Room Photography (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#E4DED4] shadow-md bg-white p-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
                  alt="Calm, modern dermatology consultation room at DERMORA"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292A27]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-left font-sans">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#9BAA96] block">
                    Boutique Clinical Environment
                  </span>
                  <p className="font-serif italic text-sm text-white drop-shadow-xs mt-0.5">
                    Uncluttered, discreet spaces where patient comfort comes first.
                  </p>
                </div>
              </div>
            </div>

            {/* Overlapping small accent card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white border border-[#E4DED4] p-4 rounded-2xl shadow-lg items-center gap-3 max-w-xs text-left">
              <div className="w-10 h-10 rounded-xl bg-[#F0E9DF] text-[#38473A] flex items-center justify-center shrink-0">
                <span className="font-serif italic font-bold text-lg">D</span>
              </div>
              <div className="font-sans text-xs">
                <strong className="block text-[#292A27]">Barrier-First Philosophy</strong>
                <span className="text-[#77766F]">Restoring health before aggressive actives</span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0E9DF] border border-[#E4DED4] text-[#38473A] text-xs font-sans font-semibold tracking-[0.2em] uppercase">
              <span>THE DERMORA APPROACH</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#292A27] tracking-tight leading-tight">
              Skin care deserves a{' '}
              <span className="italic text-[#B77962]">thoughtful</span> approach.
            </h2>

            <p className="font-sans text-base text-[#77766F] leading-relaxed">
              Skin needs vary from person to person. At DERMORA, we believe the most impactful results emerge when clinical expertise is combined with transparent communication. We take the time to evaluate your barrier condition, lifestyle triggers, and previous experiences before suggesting tailored topical formulations or clinic procedures.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans">
              {pillars.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-white border border-[#E4DED4] text-left hover:border-[#9BAA96] transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#9BAA96] shrink-0" />
                    <h3 className="text-sm font-semibold text-[#292A27]">{item.title}</h3>
                  </div>
                  <p className="text-xs text-[#77766F] leading-relaxed pl-6">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/dermora/about"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#38473A] hover:text-[#B77962] transition-colors group"
              >
                <span>Read more about our clinic values and clinical director</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

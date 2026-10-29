import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

export function EditorialFeature() {
  return (
    <section className="py-20 sm:py-28 bg-[#38473A] text-white border-b border-white/10 relative overflow-hidden selection:bg-[#B77962] selection:text-white">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-[#9BAA96]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#B77962]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Headline & Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#9BAA96] text-xs font-sans font-semibold tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#B77962]" />
              <span>SKIN EDUCATION & BARRIER SCIENCE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-white">
              Good skin care begins with{' '}
              <span className="italic text-[#9BAA96] font-medium">understanding.</span>
            </h2>

            {/* Subtle animated accent line */}
            <div className="w-24 h-0.5 bg-[#B77962]" />

            <p className="font-sans text-base sm:text-lg text-[#FAF7F2]/85 leading-relaxed max-w-xl">
              Explore professional guidance, learn about available consultation options, and prepare informed questions for your dermatologist. We believe empowering you with physiological understanding is the first step toward lasting skin confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                to="/dermora/skin-concerns"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#F0E9DF] text-[#292A27] text-sm font-sans font-medium transition-all shadow-md transform hover:-translate-y-0.5"
              >
                <BookOpen className="w-4 h-4 text-[#38473A]" />
                <span>Browse Skin Concerns Guide</span>
              </Link>

              <Link
                to="/dermora/treatments"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-sans font-medium border border-white/20 transition-all"
              >
                <span>View Clinical Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#9BAA96]" />
              </Link>
            </div>
          </div>

          {/* Right: Skincare Editorial Still Life (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#292A27] p-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80"
                  alt="Minimalist skincare still life with textured stone and botanicals"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292A27]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-left font-sans">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9BAA96] block">
                    Formulation Purity
                  </span>
                  <span className="font-serif italic text-sm text-white">
                    Minimalist, barrier-supporting topical ingredients.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

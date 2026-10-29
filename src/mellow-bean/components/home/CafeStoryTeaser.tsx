import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, HeartHandshake, Sprout } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const CafeStoryTeaser: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F2E7] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#F0D27A]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#B77A4A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Editorial Photography */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative">
              {/* Main large sunlit interior photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#EADFCF] bg-[#382820]/5 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                  alt="Mellow & Bean sunlit interior with wooden tables and warm lighting"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#382820]/60 via-transparent to-transparent opacity-80" />
                
                {/* Floating caption badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FFFEFA]/95 backdrop-blur-md border border-[#EADFCF] shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#777B5A] animate-pulse" />
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#777B5A]">
                      Indiranagar Sanctum
                    </p>
                  </div>
                  <p className="text-sm text-[#382820] font-serif mt-1 italic">
                    "Morning light through arched glass, warm ceramic cups, and the gentle rhythm of the grinder."
                  </p>
                </div>
              </div>

              {/* Overlapping small accent card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-52 p-4 rounded-2xl bg-[#F0D27A] text-[#382820] shadow-xl border border-[#EADFCF] transform rotate-2 hover:rotate-0 transition-transform">
                <span className="text-[11px] font-bold uppercase tracking-wider block text-[#382820]/75">
                  Natural Fermentation
                </span>
                <p className="text-xl font-serif font-bold mt-0.5">36-Hour Sourdough</p>
                <p className="text-xs text-[#382820]/80 mt-1">Baked every sunrise in stone-hearth ovens.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              tagline="Our Philosophy"
              title="A conscious refusal to rush through your morning."
              align="left"
            />

            <div className="space-y-4 text-[#382820]/80 font-sans leading-relaxed text-base sm:text-lg">
              <p>
                MELLOW & BEAN began with a quiet conviction: that coffee is not mere fuel for frantic schedules, but an anchor of calm. A deliberate pause where conversation flows naturally, warm sourdough crunches under butter, and every cup honours the soil it came from.
              </p>
              <p className="text-sm sm:text-base text-[#382820]/75">
                We partner directly with high-elevation biodiverse estates across the Bababudangiri and Biligiriranga hills in Karnataka. Hand-selected cherries roasted in small 6kg batches, paired with artisan sourdough leavened for thirty-six slow hours.
              </p>
            </div>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EADFCF]">
              <div className="p-3.5 rounded-2xl bg-[#FFFEFA] border border-[#EADFCF]/80">
                <div className="w-8 h-8 rounded-xl bg-[#F0D27A]/30 flex items-center justify-center text-[#382820] mb-2">
                  <Sprout className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#382820]">Single-Estate</h4>
                <p className="text-xs text-[#382820]/70 mt-0.5">100% traceable specialty Arabica.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFFEFA] border border-[#EADFCF]/80">
                <div className="w-8 h-8 rounded-xl bg-[#F0D27A]/30 flex items-center justify-center text-[#382820] mb-2">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#382820]">Slow Fermented</h4>
                <p className="text-xs text-[#382820]/70 mt-0.5">Wild yeast, French butter, zero additives.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFFEFA] border border-[#EADFCF]/80">
                <div className="w-8 h-8 rounded-xl bg-[#F0D27A]/30 flex items-center justify-center text-[#382820] mb-2">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#382820]">True Community</h4>
                <p className="text-xs text-[#382820]/70 mt-0.5">Pups welcome, books encouraged.</p>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/mellow-bean/our-story"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#382820] text-[#FFFEFA] font-medium text-sm hover:bg-[#382820]/90 transition-all shadow-md group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <span className="font-handwriting text-xl text-[#B77A4A] hidden sm:inline-block">
                — Pull up a chair.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Coffee, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F2E7] pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle organic warm background glows */}
      <div
        className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#F0D27A]/25 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/3 -translate-y-1/4"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#B77A4A]/10 rounded-full blur-3xl -z-10 pointer-events-none -translate-x-1/4 translate-y-1/4"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0D27A] border border-[#E5C76E] text-xs font-bold text-[#382820] shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#382820]" />
              <span>Specialty Coffee &amp; Artisan Sourdough Bakery</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#382820] tracking-tight leading-[1.08]">
                Your little pause <br className="hidden sm:inline" />
                in a <span className="text-[#B77A4A] italic font-serif">busy day.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#382820]/80 font-normal max-w-xl leading-relaxed">
                Thoughtfully brewed coffee, fresh-from-the-oven pastries, and all-day brunch worth slowing down for. Baked with wild yeast, roasted with patience in Bengaluru.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/mellow-bean/menu"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#382820] text-[#FFFEFA] text-base font-bold shadow-md hover:bg-[#251a14] active:scale-[0.98] transition-all"
              >
                <span>Explore the Menu</span>
                <ArrowRight className="w-4 h-4 text-[#F0D27A]" />
              </Link>
              <Link
                to="/mellow-bean/reservations"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#FFFEFA] text-[#382820] border border-[#EADFCF] text-base font-bold hover:bg-[#F0D27A]/30 transition-all shadow-2xs"
              >
                <Calendar className="w-4 h-4 text-[#B77A4A]" />
                <span>Find Your Table</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#EADFCF] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-[#382820]/80">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#B77A4A] shrink-0" />
                <span>Chikmagalur Single-Estate Arabica</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B77A4A] shrink-0" />
                <span>36-Hour Sourdough Fermentation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#777B5A]" />
                <span>Walk-Ins &amp; Bookings Warmly Welcomed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Natural Sunlight Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative butter-yellow accent backdrop */}
              <div
                className="absolute inset-0 rounded-[2.5rem] bg-[#F0D27A]/60 transform rotate-2 translate-x-2 translate-y-2 -z-10"
                aria-hidden="true"
              />

              {/* Main Photo: Flat white coffee and flaky croissant on sunlit wood table */}
              <div className="rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl bg-white aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80"
                  alt="Sunlit cafe table with artisan flat white and freshly baked butter croissant"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating Coffee Note */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-3xl border border-[#EADFCF] shadow-lg max-w-[240px] hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F0D27A] text-[#382820] flex items-center justify-center shrink-0 font-bold">
                  ☕
                </div>
                <div>
                  <div className="font-fraunces font-bold text-sm text-[#382820]">
                    Roasted in small batches
                  </div>
                  <div className="text-[11px] text-[#B77A4A] mt-0.5 font-medium">
                    Sweet stone fruit &amp; chocolate finish
                  </div>
                </div>
              </div>

              {/* Handwritten Note Pin */}
              <div className="absolute -top-3 -right-3 sm:-right-5 bg-[#382820] text-[#FFFEFA] px-4 py-2 rounded-2xl shadow-md border border-[#F0D27A]/30 text-xs font-handwriting text-base">
                Slow mornings encouraged ~
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

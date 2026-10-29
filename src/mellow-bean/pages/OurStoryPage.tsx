import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Sun, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';

export const OurStoryPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#F8F2E7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Editorial Story Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <SectionHeading
            badge="Our Origins & Ethos"
            title="Good coffee. Slow mornings. Better company."
            subtitle="Founded on a simple idea: that modern life hurries through too much, and the morning cup deserves to be savoured with reverence."
            className="mb-0"
          />
          <p className="font-handwriting text-2xl text-[#B77A4A]">
            “An intentional pause in the bustle of Bengaluru.”
          </p>
        </div>

        {/* Section 1: The Beginning (Split layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B77A4A]">
              Chapter 01 &bull; 2021
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#382820] leading-snug">
              Born from a longing for unhurried morning light.
            </h2>
            <div className="space-y-4 text-[#382820]/80 font-sans leading-relaxed text-base">
              <p>
                In early 2021, our founders set out to build a space that stood in quiet opposition to the fast-casual drive-thru mentality. We wanted a sanctuary where the smell of freshly roasted single-estate beans and warm sourdough crust would welcome you before you even checked your watch.
              </p>
              <p>
                We chose a leafy bylane in Indiranagar, restoring an old residential bungalow with arched timber doorways, terrazzo flooring, and a sunlit garden patio where bird song mingles with the gentle hum of our espresso grinder.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#EADFCF] shadow-lg aspect-[4/3] bg-[#382820]/5">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                alt="Mellow & Bean café interior with natural sunlight"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FFFEFA]/90 backdrop-blur-sm p-3.5 rounded-2xl border border-[#EADFCF] text-xs text-[#382820]">
                <strong>The Sunroom:</strong> Where conversations linger and ideas take shape over double ristrettos.
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Coffee Philosophy & Sourcing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
          <div className="lg:col-span-6 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B77A4A]">
              Chapter 02 &bull; The Bean
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#382820] leading-snug">
              Direct partnerships with Chikmagalur smallholders.
            </h2>
            <div className="space-y-4 text-[#382820]/80 font-sans leading-relaxed text-base">
              <p>
                India produces some of the world's most fragrant shade-grown Arabicas, yet so much of it is historically exported or hidden in dark, bitter commercial roasts.
              </p>
              <p>
                We partner with high-altitude estates situated at 1,300 meters above sea level in the Western Ghats. Our cherries are hand-harvested only when fully crimson, slow-dried on raised African beds, and roasted lightly in small 6kg drum batches to showcase notes of wild berries, jaggery, cardamom, and toasted cacao.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FFFEFA] border border-[#EADFCF]">
                <Coffee className="w-5 h-5 text-[#B77A4A] mb-1" />
                <h4 className="font-serif font-bold text-sm text-[#382820]">Light–Medium Roasts</h4>
                <p className="text-xs text-[#382820]/70 mt-0.5">Retaining authentic terroir & fruity sweetness.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FFFEFA] border border-[#EADFCF]">
                <Sun className="w-5 h-5 text-[#B77A4A] mb-1" />
                <h4 className="font-serif font-bold text-sm text-[#382820]">100% Shade-Grown</h4>
                <p className="text-xs text-[#382820]/70 mt-0.5">Flourishing under silver oaks and pepper vines.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-[#EADFCF] shadow-lg aspect-[4/3] bg-[#382820]/5">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80"
                alt="Hand drip V60 specialty coffee brewing"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FFFEFA]/90 backdrop-blur-sm p-3.5 rounded-2xl border border-[#EADFCF] text-xs text-[#382820]">
                <strong>Precision Pour-Over:</strong> Manual extraction dialed in every morning to 93°C water.
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: The Bakery (36-Hour Sourdough Craft) */}
        <div className="bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B77A4A]">
                Chapter 03 &bull; The Oven
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#382820]">
                Flour, water, wild yeast, and 36 slow hours.
              </h2>
              <p className="text-[#382820]/80 text-base leading-relaxed">
                Commercial bread relies on fast industrial enzymes and chemical shelf stabilizers. At Mellow & Bean, our sourdough starter—lovingly nicknamed "Matilda"—has been nurtured continuously for over four years.
              </p>
              <p className="text-[#382820]/80 text-base leading-relaxed">
                Every loaf undergoes a thirty-six-hour cold fermentation in our walk-in proving room. This long rest breaks down phytates, makes the bread gentle on digestion, develops a rich caramelized blistered crust, and yields an airy, tender crumb.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#777B5A]">
                  <ShieldCheck className="w-4 h-4" />
                  Zero Chemical Improvers
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#777B5A]">
                  <ShieldCheck className="w-4 h-4" />
                  Pure European Butter
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#777B5A]">
                  <ShieldCheck className="w-4 h-4" />
                  Organic Stone-Ground Wheat
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#EADFCF] aspect-square shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
                  alt="Freshly baked artisan sourdough loaves"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: The Team Behind the Bar */}
        <div className="space-y-8 text-center">
          <SectionHeading
            badge="Hands & Hearts"
            title="Meet the team crafting your mornings."
            subtitle="Passionate roasters, sourdough bakers, and baristas dedicated to genuine hospitality."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div className="bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] p-6 shadow-xs space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#382820]/10 border border-[#EADFCF]">
                <img
                  src="https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80"
                  alt="Raghav Iyer, Head Roaster"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-[#382820]">Raghav Iyer</h4>
                <p className="text-xs font-semibold text-[#B77A4A]">Head Roaster & Q-Grader</p>
                <p className="text-xs text-[#382820]/75 mt-2 leading-relaxed">
                  Obsessed with micro-lot cuppings and roast curve profiles. Spent eight years working across Coorg and Chikmagalur estates.
                </p>
              </div>
            </div>

            <div className="bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] p-6 shadow-xs space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#382820]/10 border border-[#EADFCF]">
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80"
                  alt="Ananya Roy, Head of Bakery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-[#382820]">Ananya Roy</h4>
                <p className="text-xs font-semibold text-[#B77A4A]">Head of Patisserie & Sourdough</p>
                <p className="text-xs text-[#382820]/75 mt-2 leading-relaxed">
                  Trained in classic French viennoiserie, Ananya starts her morning bake at 4:30 AM so our croissants are still warm by 8:00 AM.
                </p>
              </div>
            </div>

            <div className="bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] p-6 shadow-xs space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#382820]/10 border border-[#EADFCF]">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80"
                  alt="Maya Nambiar, Guest Experience"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-[#382820]">Maya Nambiar</h4>
                <p className="text-xs font-semibold text-[#B77A4A]">Café Lead & Community Director</p>
                <p className="text-xs text-[#382820]/75 mt-2 leading-relaxed">
                  The welcoming smile who remembers your name, your dog's favourite biscuit, and your oat milk temperature preference.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Warm CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#382820] text-[#FFFEFA] text-center space-y-6 shadow-xl">
          <h3 className="text-3xl sm:text-4xl font-serif font-bold max-w-2xl mx-auto">
            Experience our table for yourself.
          </h3>
          <p className="text-sm sm:text-base text-[#FFFEFA]/80 max-w-xl mx-auto font-sans">
            Drop by for a morning espresso, pull up a book, or join us for Sunday brunch.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/mellow-bean/menu"
              className="px-7 py-3.5 rounded-full bg-[#F0D27A] text-[#382820] font-medium text-sm hover:bg-[#F0D27A]/90 transition-all shadow-md"
            >
              Browse The Menu
            </Link>
            <Link
              to="/mellow-bean/reservations"
              className="px-7 py-3.5 rounded-full bg-[#FFFEFA]/15 text-[#FFFEFA] hover:bg-[#FFFEFA]/25 border border-[#FFFEFA]/30 font-medium text-sm transition-all"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;

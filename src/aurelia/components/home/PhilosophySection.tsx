import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Feather, HeartHandshake, ShieldCheck } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: 'Sense of Place',
      description:
        'We never impose architecture upon nature. Each sanctuary is conceived in dialogue with the indigenous landscape, sourcing local basalt, reclaimed teak, and native limestone.',
    },
    {
      icon: Feather,
      title: 'Restorative Stillness',
      description:
        'In an accelerated world, tranquility is the ultimate luxury. Our retreats offer acoustic quietude, unhurried rhythms, and curated spaces designed for sensory recalibration.',
    },
    {
      icon: HeartHandshake,
      title: 'Intuitive Hospitality',
      description:
        'Service that anticipates rather than intrudes. Our retreat hosts provide genuine, gracious care that feels deeply personal, warm, and discreetly attentive.',
    },
    {
      icon: ShieldCheck,
      title: 'Earth Stewardship',
      description:
        'From gravity-fed rainwater harvesting to organic estate permaculture, every retreat operates in conscientious partnership with regional conservation initiatives.',
    },
  ];

  return (
    <section className="py-24 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#173D32]">
              The Aurelia Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#173D32] leading-tight">
              Hospitality as a form of <span className="italic font-normal">quiet poetry.</span>
            </h2>
            <p className="text-base text-[#292B27]/80 font-light leading-relaxed">
              Founded on the belief that travel should nourish rather than exhaust, Aurelia Retreats curates spaces where time slows, senses awaken, and genuine solitude is celebrated.
            </p>
            <p className="text-sm text-[#292B27]/70 font-light leading-relaxed">
              Whether watching mist dissolve over Himalayan pines or listening to the nocturnal hush of the Kerala rainforest, guests are held in a realm of considered calm and understated beauty.
            </p>
            <div className="pt-2">
              <Link
                to="/aurelia/our-story"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#173D32] text-[#F8F5EF] text-xs uppercase tracking-[0.2em] font-semibold rounded-xs hover:bg-[#122A22] transition-colors"
              >
                <span>Read Our Full Story</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 sm:p-8 bg-white rounded-xs border border-[#D5BE91]/30 hover:border-[#D5BE91] transition-all shadow-xs"
                >
                  <div className="w-10 h-10 rounded-full bg-[#173D32]/5 flex items-center justify-center text-[#173D32] mb-4">
                    <Icon className="w-5 h-5 text-[#173D32]" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#173D32] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292B27]/75 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

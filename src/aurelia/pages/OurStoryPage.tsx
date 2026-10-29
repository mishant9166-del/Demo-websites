import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, Feather, HeartHandshake, Shield, ArrowRight } from 'lucide-react';

export const OurStoryPage: React.FC = () => {
  const team = [
    {
      name: 'Gayatri Singhania',
      role: 'Founder & Creative Director',
      bio: 'Former architectural conservator who spent fifteen years studying vernacular mountain stone structures and heritage Rajput courtyards before conceptualizing Aurelia.',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Marcus Vance',
      role: 'Principal Architectural Director',
      bio: 'Pioneered low-impact biophilic timber design across East Asia. Oversees each retreat’s site alignment to preserve 100% of native canopy trees and natural groundwater paths.',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Dr. Arya Bhattacharya',
      role: 'Director of Holistic Wellness & Ayurveda',
      bio: 'Third-generation Ayurvedic physician and clinical researcher specializing in seasonal rasayana rejuvenative herbs, marma pulse diagnostics, and acoustic sound therapy.',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Chef Kavi Devasher',
      role: 'Executive Culinary Curator',
      bio: 'Celebrated for revitalizing ancient regional Indian preservation, open-fire hearth cooking, and bio-diverse estate permaculture across all Aurelia dining venues.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-[#F8F5EF] min-h-screen">
      {/* Editorial Hero */}
      <section className="bg-[#173D32] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D5BE91] mb-4">
            <Compass className="w-4 h-4" />
            <span>The Aurelia Ethos</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F8F5EF] leading-tight max-w-4xl mb-6">
            Crafted for those who seek the <span className="italic font-normal text-[#D5BE91]">poetry of stillness.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#F8F5EF]/85 font-light max-w-2xl leading-relaxed">
            Aurelia was born from a singular conviction: that the greatest luxury is not excess, but unhurried time in spaces intimately attuned to the natural world.
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#173D32]">
              Our Origins
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#173D32] leading-snug">
              Architecture that listens before it speaks.
            </h2>
            <p className="text-base text-[#292B27]/80 font-light leading-relaxed">
              When we began scouting retreat locations, we did not look for ready tourist corridors. We searched for spaces where the geology itself invited quietude—an alpine ridge in Garhwal where cedar needles hush the wind, an untouched Konkan cove accessible only by footbridge, an organic cardamom sanctuary in the Western Ghats.
            </p>
            <p className="text-base text-[#292B27]/80 font-light leading-relaxed">
              Every building in our collection is created with vernacular artisans: master stonemasons working local slate, carpenters hand-jointing reclaimed teak, and weavers cultivating natural plant dyes. We don’t build hotels; we create sanctuaries.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 rounded-xs overflow-hidden shadow-2xl border border-[#D5BE91]/40">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
                alt="Aurelia Himalayan architecture in the pine mist"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#173D32]/90 backdrop-blur-xs p-4 rounded-xs text-xs text-[#F8F5EF] font-light">
                <span className="font-serif font-bold text-[#D5BE91] block mb-0.5">Mussoorie Ridge Atelier</span>
                Crafted using local grey slate and hand-carved deodar beams.
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Tenets */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-xs border border-[#D5BE91]/30">
            <div className="w-10 h-10 rounded-full bg-[#173D32]/5 flex items-center justify-center text-[#173D32] mb-4">
              <Feather className="w-5 h-5 text-[#173D32]" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#173D32] mb-3">Quiet Luxury</h3>
            <p className="text-xs sm:text-sm text-[#292B27]/75 font-light leading-relaxed">
              No intrusive digital buzzers or ostentatious decor. Subtle linen textures, crackling fireplaces, hand-pressed botanical soaps, and private libraries curated for slow afternoons.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xs border border-[#D5BE91]/30">
            <div className="w-10 h-10 rounded-full bg-[#173D32]/5 flex items-center justify-center text-[#173D32] mb-4">
              <Sparkles className="w-5 h-5 text-[#D5BE91]" />
              </div>
            <h3 className="text-xl font-serif font-bold text-[#173D32] mb-3">Artisanal Terroir</h3>
            <p className="text-xs sm:text-sm text-[#292B27]/75 font-light leading-relaxed">
              Every dining table is an edible map of its surrounding soil. We grow our own heirloom herbs, partner with micro-fisherfolk, and roast single-estate beans on premises.
            </p>
          </div>

          <div className="p-8 bg-white rounded-xs border border-[#D5BE91]/30">
            <div className="w-10 h-10 rounded-full bg-[#173D32]/5 flex items-center justify-center text-[#173D32] mb-4">
              <HeartHandshake className="w-5 h-5 text-[#173D32]" />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#173D32] mb-3">Conscious Custody</h3>
            <p className="text-xs sm:text-sm text-[#292B27]/75 font-light leading-relaxed">
              Over 80% of our team members are recruited and trained from neighboring village communities, ensuring that hospitality directly enriches the heritage of each valley and coast.
            </p>
          </div>
        </div>

        {/* Fictional Team Showcase */}
        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#173D32] block mb-2">
              The Curators
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#173D32]">
              The minds behind the sanctuaries.
            </h2>
            <p className="text-xs text-[#292B27]/65 mt-2 font-light">
              Fictional demonstration leadership team created for the portfolio showcase.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xs border border-[#D5BE91]/30 overflow-hidden shadow-xs"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale-20 hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-serif font-bold text-[#173D32] mb-1">
                    {member.name}
                  </h4>
                  <span className="text-[10px] uppercase font-semibold text-[#B8B0A2] tracking-wider block mb-3">
                    {member.role}
                  </span>
                  <p className="text-xs text-[#292B27]/75 font-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-24 p-10 bg-[#173D32] text-white rounded-xs text-center flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-serif text-[#F8F5EF] mb-3">
            Experience the Aurelia philosophy firsthand.
          </h3>
          <p className="text-xs sm:text-sm text-[#F8F5EF]/80 font-light max-w-xl mb-8 leading-relaxed">
            Choose from six boutique sanctuaries across India, each crafted to help you rediscover your own kind of extraordinary.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/aurelia/stays"
              className="px-8 py-3 bg-[#D5BE91] text-[#173D32] text-xs uppercase tracking-widest font-semibold rounded-xs shadow-md hover:bg-[#E3D0A8] transition-colors flex items-center gap-2"
            >
              <span>Explore Our Stays</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/aurelia/destinations"
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-[#F8F5EF] border border-white/25 text-xs uppercase tracking-widest font-semibold rounded-xs transition-colors"
            >
              Discover Destinations
            </Link>
          </div>
        </div>

        {/* Demo Disclaimer */}
        <div className="mt-12 p-4 bg-white rounded-xs border border-[#D5BE91]/25 flex items-center gap-3">
          <Shield className="w-4 h-4 text-[#173D32] shrink-0" />
          <p className="text-xs text-[#292B27]/70 font-light">
            AURELIA RETREATS and its team members are fictional conceptual entities designed as a frontend React demonstration.
          </p>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartHandshake, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const WelcomeIntro: React.FC = () => {
  const pillars = [
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#C76F52]" />,
      title: 'Gentle, Unrushed Handling',
      description:
        'We give anxious pets time to sniff, adjust, and receive treats before any examination starts. No forced restraints.',
    },
    {
      icon: <Eye className="w-5 h-5 text-[#82947A]" />,
      title: 'Transparent Communication',
      description:
        'We explain diagnoses in clear language, provide itemized estimates beforehand, and walk you through every option.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#C76F52]" />,
      title: 'Lifelong Preventive Focus',
      description:
        'Catching subtle changes early through routine screenings, proactive nutrition, and tailored wellness plans saves lives.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Natural Clinic Interior & Interaction */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-lg border border-[#E8DFD1] bg-[#FBF5EA] aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=80"
                alt="Veterinarian kneeling down to greet an attentive dog with a warm smile"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#343D30]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#F0D9CA] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Fear-Free Certified Practice
                </div>
                <div className="font-fraunces text-xl font-bold mt-1">
                  &ldquo;A calm environment leads to better diagnoses and happier pets.&rdquo;
                </div>
              </div>
            </div>

            {/* Accent Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#FBF5EA] p-4 sm:p-5 rounded-2xl border border-[#E8DFD1] shadow-md max-w-[220px]">
              <div className="font-fraunces text-3xl font-bold text-[#C76F52]">15+</div>
              <div className="text-xs text-[#343D30]/80 mt-1 font-medium">
                Minutes average buffer time between appointments so pets never feel rushed.
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Explanation & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading
              badge="About Our Practice"
              badgeVariant="sage"
              alignment="left"
              title="A veterinary home where companions feel safe and owners feel heard."
              subtitle="Veterinary visits shouldn't feel like a high-stress medical assembly line. We built Paw & Whisker around natural daylight, soft exam mats, species-separated waiting nooks, and veterinarians who listen."
            />

            {/* 3 Core Pillars */}
            <div className="space-y-4 pt-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-[#FBF5EA] border border-[#E8DFD1] flex items-start gap-4 transition-colors hover:border-[#82947A]/50"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 border border-[#E8DFD1] shadow-xs">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-fraunces text-lg font-bold text-[#343D30]">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#343D30]/80 mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Link to New Patients page */}
            <div className="pt-2 flex items-center gap-4">
              <Link
                to="/paw-whisker/new-patients"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#C76F52] hover:text-[#a8583e] group"
              >
                <span>Learn about what happens on your first visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

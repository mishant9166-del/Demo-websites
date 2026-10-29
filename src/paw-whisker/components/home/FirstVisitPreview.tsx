import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Cookie, Heart, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const FirstVisitPreview: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: <FileText className="w-5 h-5 text-[#C76F52]" />,
      title: 'What to Bring',
      desc: 'Previous veterinary records, current medication or supplement bottles, and your companion’s favorite high-value soft treats.',
    },
    {
      step: '02',
      icon: <Cookie className="w-5 h-5 text-[#82947A]" />,
      title: 'Preparing a Sensitive Pet',
      desc: 'Keep cats cozy in a towel-draped carrier. For dogs, skip breakfast so delicious clinic treats create positive associations.',
    },
    {
      step: '03',
      icon: <Heart className="w-5 h-5 text-[#C76F52]" />,
      title: 'During the Consultation',
      desc: 'We examine your pet where they are most comfortable—on a soft floor mat, in your lap, or right inside the open carrier base.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="First-Time Visitors"
          badgeVariant="sage"
          title="Gentle beginnings make for lifelong veterinary trust."
          subtitle="We know visiting a new clinic can feel stressful for pets and owners alike. Here is how we ensure your first appointment is calm, clear, and reassuring."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative p-8 rounded-3xl bg-[#FBF5EA] border border-[#E8DFD1] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-[#E8DFD1] shadow-xs">
                    {item.icon}
                  </div>
                  <span className="font-fraunces text-2xl font-bold text-[#82947A]/40">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-fraunces text-xl font-bold text-[#343D30]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#343D30]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 text-xs font-semibold text-[#82947A] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C76F52]" />
                <span>Zero-force guarantee</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action card */}
        <div className="p-8 rounded-3xl bg-[#F0D9CA]/50 border border-[#E8DFD1] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-fraunces text-xl font-bold text-[#343D30] flex items-center gap-2 justify-center sm:justify-start">
              <Sparkles className="w-5 h-5 text-[#C76F52]" />
              Need help transferring previous vet records?
            </h4>
            <p className="text-sm text-[#343D30]/80">
              Our clinic concierge can contact your previous clinic directly and import vaccination histories.
            </p>
          </div>
          <Link
            to="/paw-whisker/new-patients"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#343D30] text-white text-sm font-semibold hover:bg-[#252c22] transition-colors shadow-sm"
          >
            <span>Read First-Visit Guide</span>
            <ArrowRight className="w-4 h-4 text-[#82947A]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

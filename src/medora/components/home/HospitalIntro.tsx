import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, HeartPulse, Building, Stethoscope } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

export function HospitalIntro() {
  const pillars = [
    {
      title: 'Multidisciplinary Medical Care',
      desc: 'Seamless coordination between specialized departments for holistic patient outcomes.',
      icon: Stethoscope,
    },
    {
      title: 'Modern Diagnostic Technology',
      desc: 'Equipped with low-radiation digital imaging, 3T MRI, and fully automated testing labs.',
      icon: Building,
    },
    {
      title: 'Patient-First Hospital Environment',
      desc: 'Comfortable recovery suites, natural daylight, and compassionate care staff.',
      icon: HeartPulse,
    },
    {
      title: 'Rigorous Clinical Protocols',
      desc: 'Evidence-based healthcare guidelines and strict infection control standards.',
      icon: Shield,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E1EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hospital Imagery (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#E1EAF0] aspect-[4/3] sm:aspect-[16/11]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
                alt="Medora Multispecialty Hospital Modern Building"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102B46]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#18A9A0] block">
                  Healthcare Campus
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white drop-shadow-xs">
                  A Modern Hospital for Modern Care
                </h4>
              </div>
            </div>

            {/* Overlapping small accent card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-[#F8FBFD] border border-[#E1EAF0] p-4 rounded-2xl shadow-lg items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-[#1769AA]/10 text-[#1769AA] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-left text-xs">
                <span className="font-bold text-[#102B46] block">24/7 Outpatient & Emergency</span>
                <span className="text-[#6B7E8E] block">Accessible healthcare support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Introduction & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF5FC] text-[#1769AA] text-xs font-bold tracking-wider uppercase border border-[#1769AA]/15">
              <span>ABOUT MEDORA HOSPITAL</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102B46] tracking-tight leading-tight">
              Dedicated to Excellence in Clinical Care & Compassion.
            </h2>

            <p className="text-base text-[#6B7E8E] leading-relaxed">
              At Medora Multispecialty Hospital, we bring together clinical expertise, modern infrastructure, and patient-centered empathy. Our vision is simple: provide every individual and family with accessible, transparent, and comprehensive healthcare under one roof.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-2xl bg-[#F8FBFD] border border-[#E1EAF0] hover:border-[#1769AA]/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white text-[#1769AA] border border-[#E1EAF0] flex items-center justify-center mb-3 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-[#102B46] mb-1">{pillar.title}</h3>
                    <p className="text-xs text-[#6B7E8E] leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                to="/medora/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1769AA] hover:text-[#18A9A0] transition-colors group"
              >
                <span>Read more about our clinical philosophy and values</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

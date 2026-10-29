import { ShieldCheck, Sparkles, Clock, Accessibility, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export function WhyMedora() {
  const values = [
    {
      title: 'Clear & Transparent Information',
      desc: 'No confusing medical jargon. We believe patient empowerment begins with open, honest communication about diagnostics and treatment options.',
      icon: Sparkles,
    },
    {
      title: 'Patient-Centered Architecture',
      desc: 'Our clinics and recovery rooms prioritize natural daylight, acoustic tranquility, and ergonomic furnishings to minimize clinical anxiety.',
      icon: Accessibility,
    },
    {
      title: 'Evidence-Based Modern Care',
      desc: 'Clinical protocols designed around international best practices, supported by continuous technological upgrades and advanced digital imaging.',
      icon: ShieldCheck,
    },
    {
      title: 'Accessible & Timely Attention',
      desc: 'From streamlined online requests to prompt in-person triage, we respect your time and provide zero-delay attention for acute clinical needs.',
      icon: Clock,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#102B46] text-white border-b border-white/10 selection:bg-[#18A9A0] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHY CHOOSE MEDORA"
          title="Designed for Patient Dignity &"
          highlight="Excellence."
          subtitle="Discover what distinguishes our healthcare model: a dedicated commitment to transparency, clinical rigor, and compassionate care."
          align="center"
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-[#18A9A0]/50 hover:bg-white/10 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#18A9A0]/20 text-[#18A9A0] border border-[#18A9A0]/30 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EAF5FC]/80 leading-relaxed">
                    {val.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-semibold text-[#18A9A0]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Clinical Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

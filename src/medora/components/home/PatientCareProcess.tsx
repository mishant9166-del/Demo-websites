import { Search, Calendar, UserCheck, HeartPulse } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export function PatientCareProcess() {
  const steps = [
    {
      step: '01',
      title: 'Explore Care',
      desc: 'Browse our specialized departments and review comprehensive treatment areas to identify the care you need.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Request Appointment',
      desc: 'Select your preferred department, doctor, and date through our simple, accessible request interface.',
      icon: Calendar,
    },
    {
      step: '03',
      title: 'Consult a Specialist',
      desc: 'Meet with your physician in a modern, comfortable consultation suite for in-depth clinical evaluation.',
      icon: UserCheck,
    },
    {
      step: '04',
      title: 'Follow Up & Recovery',
      desc: 'Receive clear post-consultation guidance, medication reviews, and personalized lifestyle counseling.',
      icon: HeartPulse,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E1EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SEAMLESS HEALTHCARE JOURNEY"
          title="Your Care Process,"
          highlight="Step by Step."
          subtitle="We designed every touchpoint to be straightforward, reassuring, and completely focused on your well-being."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-12">
          {/* Subtle connecting line across desktop */}
          <div className="hidden lg:block absolute top-1/4 left-16 right-16 h-0.5 bg-[#E1EAF0] -z-0" />

          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative z-10 bg-[#F8FBFD] border border-[#E1EAF0] rounded-2xl p-6 sm:p-7 text-left hover:border-[#1769AA]/40 transition-all shadow-2xs hover:shadow-sm group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E1EAF0] text-[#1769AA] group-hover:bg-[#1769AA] group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-extrabold text-[#E1EAF0] group-hover:text-[#18A9A0] transition-colors font-mono">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#102B46] mb-2 group-hover:text-[#1769AA] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B7E8E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E1EAF0]/60 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#18A9A0]">
                  <span>Step {item.step} Complete</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Calendar, MessageSquare, Lightbulb, CheckCheck } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Calendar,
    title: 'Book',
    description: 'Choose a preferred service and request an appointment online or by phone.'
  },
  {
    num: '02',
    icon: MessageSquare,
    title: 'Discuss',
    description: 'Describe your concerns and dental goals directly with your dentist in an unhurried consultation.'
  },
  {
    num: '03',
    icon: Lightbulb,
    title: 'Understand',
    description: 'Review treatment choices with digital imaging previews and transparent cost breakdowns.'
  },
  {
    num: '04',
    icon: CheckCheck,
    title: 'Follow Up',
    description: 'Receive thoughtful post-procedure guidance and ongoing preventative checkups.'
  }
];

export function PatientJourney() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFCFB] border-t border-[#E3ECE9] text-[#152B32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D9488] block mb-3">
            YOUR PATIENT JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152B32] tracking-tight">
            How Your Visit Unfolds
          </h2>
          <p className="text-sm sm:text-base text-[#687A80] mt-3 leading-relaxed">
            From your initial inquiry to your treatment follow-up, our process is designed to be clear, comfortable, and predictable.
          </p>
        </div>

        {/* Timeline Grid (Horizontal on Desktop, Stacked on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white border border-[#E3ECE9] rounded-2xl p-6 relative flex flex-col justify-between shadow-xs hover:border-[#0D9488]/40 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#0D9488]/30 group-hover:text-[#0D9488] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#E6F6F2] text-[#0D9488] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#152B32] mb-2">{step.title}</h3>
                  <p className="text-xs text-[#687A80] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

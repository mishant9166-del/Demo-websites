import { Link } from 'react-router-dom';
import { ShieldCheck, Cpu, Truck, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

const experiencePoints = [
  {
    icon: Cpu,
    title: 'Digital & Telemetry Diagnostics',
    description: 'Every sports car and electric vehicle undergoes live ECU interrogation, battery degradation auditing, and chassis stress verification.'
  },
  {
    icon: ShieldCheck,
    title: 'Clear History & Pedigree',
    description: '100% transparent ownership documentation, accident-free verification, and verified odometer logs with zero omissions.'
  },
  {
    icon: Truck,
    title: 'Enclosed Climate Transport',
    description: 'Nationwide delivery executed in custom enclosed low-approach flatbeds to ensure absolute pristine condition upon arrival.'
  }
];

export function ExperienceSection() {
  return (
    <section className="py-24 bg-[#101315] border-t border-white/10 text-[#F5F7F7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Gallery */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border border-white/15 h-[420px] sm:h-[480px] bg-[#171B1E] group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
                alt="Showroom inspection environment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-[#080A0B]/90 backdrop-blur-md border border-white/15">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C8FF45] block">
                      Standards Audit
                    </span>
                    <span className="text-sm font-bold text-[#F5F7F7]">
                      180-Point Engineering Protocol
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#C8FF45] text-[#080A0B] flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C8FF45] font-bold block mb-3">
                THE EXPERIENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Engineering transparency <br />
                into every acquisition.
              </h2>
              <p className="text-sm text-[#A0A7AC] mt-4 leading-relaxed font-normal">
                Selecting a performance or luxury automobile shouldn't involve ambiguity. We bridge high-calibre automotive enthusiasm with meticulous mechanical integrity.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {experiencePoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 rounded bg-[#171B1E] border border-white/5">
                    <div className="p-2.5 rounded bg-[#101315] border border-white/10 text-[#C8FF45] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#F5F7F7] mb-1">{point.title}</h4>
                      <p className="text-xs text-[#A0A7AC] leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                to="/velocity/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8FF45] hover:underline"
              >
                <span>Read our complete selection philosophy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

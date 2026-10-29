import SectionHeading from '../components/common/SectionHeading';
import ProgramCard from '../components/programs/ProgramCard';
import { programs } from '../data/programs';
import { ShieldCheck, Compass, Sparkles } from 'lucide-react';

export function ProgramsPage() {
  const featuredProgram = programs[0];
  const gridPrograms = programs.slice(1);

  return (
    <div className="py-12 sm:py-16 bg-[#FAFBF8] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <SectionHeading
            badge="STRUCTURED PATHWAYS"
            title="Rehabilitation Programs for Every Stage."
            subtitle="Explore our structured rehabilitation pathways designed to support gradual physical recovery, movement confidence, and long-term joint health."
          />
        </div>

        {/* Highlights banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white border border-[#E1E8E2] flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8F2EC] text-[#285A49] flex items-center justify-center shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#242C28]">Graded Milestones</h4>
              <p className="text-[11px] text-[#727C75] mt-0.5 leading-relaxed">
                Objective reviews every 2 to 3 weeks to monitor progress and adjust resistance.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E1E8E2] flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8F2EC] text-[#285A49] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#242C28]">Supervised &amp; Safe</h4>
              <p className="text-[11px] text-[#727C75] mt-0.5 leading-relaxed">
                Guided one-on-one sessions in our contemporary clinical movement gym.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E1E8E2] flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#E8F2EC] text-[#285A49] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#D8A66A]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#242C28]">Evidence-Guided</h4>
              <p className="text-[11px] text-[#727C75] mt-0.5 leading-relaxed">
                Incorporating contemporary physical therapy guidelines and functional loading.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Wide Program Card */}
        {featuredProgram && (
          <div className="mb-12">
            <div className="mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#72A88A]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#285A49]">
                Featured Program Spotlight
              </span>
            </div>
            <ProgramCard program={featuredProgram} featured={true} />
          </div>
        )}

        {/* Remaining Programs Grid */}
        <div className="mt-8">
          <h3 className="font-heading text-xl font-bold text-[#242C28] mb-6">
            Explore All Rehabilitation Pathways
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gridPrograms.map((prog, index) => (
              <ProgramCard key={prog.id} program={prog} index={index} />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 p-6 rounded-2xl bg-white border border-[#E1E8E2] text-center max-w-3xl mx-auto">
          <p className="text-xs text-[#727C75] leading-relaxed">
            <span className="font-bold text-[#242C28]">Illustrative Pathway Notice:</span> Program titles, durations, and focus areas represent illustrative models for clinical evaluation. No fixed timeline or outcome is guaranteed; individual progress is governed by qualified clinical judgment and personal physiological response.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProgramsPage;

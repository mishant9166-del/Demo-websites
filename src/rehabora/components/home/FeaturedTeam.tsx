import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import PractitionerCard from '../practitioners/PractitionerCard';
import { practitioners } from '../../data/practitioners';

export function FeaturedTeam() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAFBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="OUR CLINICIANS"
            title="Collaborative, evidence-informed care."
            subtitle="Meet our fictional clinical team specializing in musculoskeletal therapy, sports recovery, joint mobility, and post-operative progression."
          />

          <Link
            to="/rehabora/practitioners"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#E8F2EC] text-[#285A49] hover:bg-[#285A49] hover:text-white transition-all self-start md:self-auto shrink-0 shadow-xs"
          >
            Meet the Full Team
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Practitioner Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {practitioners.map((practitioner, index) => (
            <PractitionerCard
              key={practitioner.id}
              practitioner={practitioner}
              index={index}
            />
          ))}
        </div>

        {/* Fictional Portfolio Disclaimer */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-[#E1E8E2] text-center">
          <p className="text-[11px] text-[#727C75]">
            <span className="font-semibold text-[#242C28]">Portfolio Notice:</span>{' '}
            Practitioner profiles, bios, and portraits are fictional demonstrations designed for clinic website evaluation. No real clinical qualifications are claimed or verified.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTeam;

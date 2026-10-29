import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { treatments } from '../../data/treatments';
import { TreatmentCard } from '../treatments/TreatmentCard';
import { SectionHeading } from '../common/SectionHeading';

export function FeaturedTreatments() {
  const featured = treatments.slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-[#F0E9DF]/40 border-b border-[#E4DED4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="OUR TREATMENTS"
            title="Care for a range of skin and hair"
            highlight="concerns."
            subtitle="Explore thoughtful clinical services designed around your skin barrier, from acne assessment to gentle rejuvenation and trichology consultations."
            className="mb-0"
          />

          <Link
            to="/dermora/treatments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F0E9DF] text-[#38473A] text-xs sm:text-sm font-sans font-medium border border-[#E4DED4] shadow-2xs hover:shadow-xs transition-all shrink-0 self-start md:self-auto"
          >
            <span>View All Treatments</span>
            <ArrowRight className="w-4 h-4 text-[#B77962]" />
          </Link>
        </div>

        {/* 6 Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((t) => (
            <TreatmentCard key={t.id} treatment={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

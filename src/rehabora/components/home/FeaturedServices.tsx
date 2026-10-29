import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from '../services/ServiceCard';
import { services } from '../../data/services';

export function FeaturedServices() {
  const featured = services.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#FAFBF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="OUR SERVICES"
            title="Support for every stage of movement."
            subtitle="From acute injury recovery and post-surgical rehabilitation to preventative mobility work, our clinical team delivers individualized physical care."
          />

          <Link
            to="/rehabora/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#E8F2EC] text-[#285A49] hover:bg-[#285A49] hover:text-white transition-all self-start md:self-auto shrink-0 shadow-xs"
          >
            View All 10 Services
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Grid of 6 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom banner note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#E8F2EC]/60 border border-[#D4E5D9] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#242C28] text-center sm:text-left">
            <span className="font-bold">Not sure which service suits your current symptoms?</span>{' '}
            Our clinicians conduct comprehensive initial assessments to direct you to the most appropriate pathway.
          </p>
          <Link
            to="/rehabora/appointment"
            className="shrink-0 px-5 py-2.5 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors"
          >
            Request Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedServices;

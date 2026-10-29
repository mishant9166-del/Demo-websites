import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';
import { ServiceCard } from '../services/ServiceCard';

export function FeaturedServices() {
  return (
    <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-20 lg:pb-24 bg-[#FAFCFB] text-[#152B32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D9488] block mb-3">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#152B32] tracking-tight leading-tight">
              Complete Dental Care <br />
              <span className="text-[#0D9488]">for Every Smile.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#687A80] mt-4 leading-relaxed font-normal">
              From routine checkups to specialized treatments, explore dental services designed around your oral health needs.
            </p>
          </div>

          <Link
            to="/dental/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0D9488] hover:text-[#115E59] transition-colors group self-start md:self-end"
          >
            <span>View All Services ({services.length})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom CTA to Appointment */}
        <div className="mt-14 text-center">
          <Link
            to="/dental/appointment"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#115E59] transition-all shadow-md shadow-[#0D9488]/20"
          >
            <span>Need Guidance on Treatments? Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

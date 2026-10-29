import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ImageWithFallback from '../common/ImageWithFallback';
import { eyeServices } from '../../data/services';

export function FeaturedServices() {
  const spotlight = eyeServices[0]; // Comprehensive Eye Examination
  const serviceList = eyeServices.slice(1, 6);

  return (
    <section className="py-20 lg:py-28 bg-[#F7F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            badge="CLINICAL EYE CARE"
            title="Specialist Examinations for"
            italicWord="Every Visual Demand."
            subtitle="From advanced ocular health scans to workplace digital vision assessments, we provide unhurried clinical care with modern diagnostic clarity."
          />

          <Link
            to="/visora/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-white text-[#15263B] hover:bg-[#15263B] hover:text-white border border-[#E4E4DE] transition-all self-start md:self-auto shrink-0 shadow-xs"
          >
            <span>View All 6 Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial Asymmetrical Layout: Spotlight Card + Restrained Service List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Featured Wide Clinical Spotlight */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-[#E4E4DE] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#5C9995] transition-all group">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F5EF]">
              <ImageWithFallback
                src={spotlight.image}
                alt={spotlight.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#15263B] text-white">
                  Signature Assessment
                </span>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium bg-black/60 text-white backdrop-blur-xs">
                  <Clock className="w-3 h-3 text-[#5C9995]" />
                  {spotlight.durationMinutes}
                </span>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#5C9995] block mb-1">
                  {spotlight.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#15263B] group-hover:text-[#5C9995] transition-colors leading-tight">
                  {spotlight.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#687581] leading-relaxed">
                  {spotlight.overview}
                </p>

                <div className="mt-6 pt-4 border-t border-[#E4E4DE] space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#15263B] block">
                    Diagnostic Highlights:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#687581]">
                    {spotlight.whatToExpect.slice(0, 4).map((step, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5C9995] mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[#E4E4DE] flex items-center justify-between">
                <Link
                  to="/visora/book-appointment"
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors shadow-xs"
                >
                  Book Assessment
                </Link>

                <Link
                  to={`/visora/services/${spotlight.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#15263B] hover:text-[#5C9995] transition-colors"
                >
                  <span>Full Service Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Refined Service List (Editorial Rows) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-3">
            {serviceList.map((srv) => (
              <div
                key={srv.id}
                className="p-5 rounded-2xl bg-white border border-[#E4E4DE] hover:border-[#5C9995] hover:shadow-xs transition-all group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#5C9995]">
                      {srv.category}
                    </span>
                    <span className="text-[10px] text-[#687581]">•</span>
                    <span className="text-[10px] text-[#687581] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#5C9995]" />
                      {srv.durationMinutes}
                    </span>
                  </div>
                  <h4 className="font-display text-lg text-[#15263B] group-hover:text-[#5C9995] transition-colors truncate">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-[#687581] line-clamp-1 mt-0.5">
                    {srv.shortDesc}
                  </p>
                </div>

                <Link
                  to={`/visora/services/${srv.slug}`}
                  className="shrink-0 inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold bg-[#F7F5EF] text-[#15263B] group-hover:bg-[#15263B] group-hover:text-white transition-colors"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedServices;

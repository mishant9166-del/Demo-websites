import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Stethoscope } from 'lucide-react';
import type { EyeService } from '../../types/visora';
import ImageWithFallback from '../common/ImageWithFallback';

interface ServiceCardProps {
  service: EyeService;
  index?: number;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group rounded-3xl bg-white border border-[#E4E4DE] overflow-hidden flex flex-col justify-between hover:border-[#5C9995] hover:shadow-md transition-all duration-300">
      {/* Visual Asset Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#F7F5EF]">
        <ImageWithFallback
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans font-medium bg-white/95 text-[#15263B] backdrop-blur-xs shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5C9995]" />
            {service.category}
          </span>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-3.5 right-3.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-sans font-medium bg-black/60 text-white backdrop-blur-xs">
            <Clock className="w-3 h-3 text-[#5C9995]" />
            {service.durationMinutes}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-xl text-[#15263B] group-hover:text-[#5C9995] transition-colors leading-snug">
            {service.title}
          </h3>
          <p className="mt-2.5 text-xs text-[#687581] leading-relaxed line-clamp-3">
            {service.shortDesc}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E4E4DE] flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[11px] text-[#687581] font-medium">
            <Stethoscope className="w-3.5 h-3.5 text-[#5C9995]" />
            Diagnostic Protocol
          </span>

          <Link
            to={`/visora/services/${service.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#15263B] group-hover:text-[#5C9995] transition-colors"
          >
            <span>Learn More</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;

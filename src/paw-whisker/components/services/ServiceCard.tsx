import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, ShieldCheck, Heart, Sparkles, Activity, Smile, Eye, Stethoscope, Scissors } from 'lucide-react';
import type { VetService } from '../../types/vet';

interface ServiceCardProps {
  service: VetService;
  variant?: 'compact' | 'featured' | 'detailed';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  variant = 'compact',
}) => {
  // Dynamic icon selection
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Smile':
        return <Smile className="w-5 h-5" />;
      case 'Eye':
        return <Eye className="w-5 h-5" />;
      default:
        return <Scissors className="w-5 h-5" />;
    }
  };

  if (variant === 'featured') {
    return (
      <div className="group bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD1] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-[#F0D9CA] text-[#C76F52] flex items-center justify-center font-bold">
              {renderIcon(service.iconName)}
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#82947A]/15 text-[#343D30]">
              {service.duration}
            </span>
          </div>

          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#82947A]">
              {service.category}
            </span>
            <h3 className="font-fraunces text-2xl font-bold text-[#343D30] group-hover:text-[#C76F52] transition-colors mt-1">
              {service.name}
            </h3>
          </div>

          <p className="text-sm text-[#343D30]/80 leading-relaxed">
            {service.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {service.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-lg bg-[#FBF5EA] text-[#343D30]/80 border border-[#E8DFD1]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-[#E8DFD1] flex items-center justify-between">
          <span className="text-xs font-medium text-[#82947A]">
            Recommended for: {service.recommendedFor}
          </span>
          <Link
            to={`/paw-whisker/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C76F52] group-hover:translate-x-1 transition-all"
          >
            Learn more
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#E8DFD1] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      {/* Image header */}
      <div className="relative h-48 overflow-hidden bg-[#F0D9CA]/30">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold text-[#343D30] shadow-sm flex items-center gap-1.5">
          <span className="text-[#C76F52]">{renderIcon(service.iconName)}</span>
          <span>{service.category}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-[#82947A]">
            <Clock className="w-3.5 h-3.5" />
            <span>{service.duration}</span>
          </div>

          <h3 className="font-fraunces text-xl font-bold text-[#343D30] group-hover:text-[#C76F52] transition-colors leading-snug">
            {service.name}
          </h3>

          <p className="text-xs sm:text-sm text-[#343D30]/80 leading-relaxed line-clamp-3">
            {service.shortDescription}
          </p>
        </div>

        <div className="pt-4 border-t border-[#E8DFD1] flex items-center justify-between">
          <span className="text-xs text-[#82947A] font-medium">
            {service.recommendedFor}
          </span>
          <Link
            to={`/paw-whisker/services/${service.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#C76F52] group-hover:translate-x-0.5 transition-transform"
          >
            Details
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

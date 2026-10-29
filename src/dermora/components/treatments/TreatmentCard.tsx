import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import type { Treatment } from '../../types/dermora';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface TreatmentCardProps {
  treatment: Treatment;
  layout?: 'standard' | 'compact' | 'featured';
}

export function TreatmentCard({ treatment, layout = 'standard' }: TreatmentCardProps) {
  const isCompact = layout === 'compact';

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-3xl border border-[#E4DED4] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#9BAA96] transition-all flex flex-col h-full group text-left"
    >
      {/* Image with Category Badge */}
      <div
        className={`relative overflow-hidden bg-[#F0E9DF] ${
          isCompact ? 'aspect-[16/10]' : 'aspect-[4/3]'
        }`}
      >
        <ImageWithFallback
          src={treatment.heroImage}
          alt={treatment.title}
          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
        />
        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-sans font-semibold text-[#38473A] uppercase tracking-wider border border-[#E4DED4] shadow-2xs">
          {treatment.category}
        </div>

        <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-md bg-[#292A27]/80 backdrop-blur-xs text-[10px] font-sans font-medium text-white flex items-center gap-1">
          <Clock className="w-3 h-3 text-[#9BAA96]" />
          <span>{treatment.durationMinutes}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl text-[#292A27] group-hover:text-[#38473A] transition-colors leading-snug mb-2.5">
            {treatment.title}
          </h3>

          <p className="font-sans text-xs sm:text-sm text-[#77766F] leading-relaxed line-clamp-3 mb-4">
            {treatment.shortDesc}
          </p>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-[#E4DED4]/70 flex items-center justify-between font-sans">
          <Link
            to={`/dermora/treatments/${treatment.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38473A] group-hover:text-[#B77962] transition-colors"
          >
            <span>Explore Treatment</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="text-[11px] text-[#77766F]">Consultation</span>
        </div>
      </div>
    </motion.div>
  );
}

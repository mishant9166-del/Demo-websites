import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import type { Specialist } from '../../types/dermora';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface SpecialistCardProps {
  specialist: Specialist;
}

export function SpecialistCard({ specialist }: SpecialistCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-3xl border border-[#E4DED4] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#9BAA96] transition-all flex flex-col h-full group text-left"
    >
      {/* Portrait Image (4:5 aspect) */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F0E9DF]">
        <ImageWithFallback
          src={specialist.portrait}
          alt={specialist.name}
          className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-sans font-semibold text-[#38473A] uppercase tracking-wider border border-[#E4DED4] shadow-2xs">
          {specialist.specialty}
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-sans">
          <div className="px-2.5 py-0.5 rounded-md bg-[#292A27]/80 backdrop-blur-xs text-[10px] font-medium flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#9BAA96]" />
            <span>{specialist.roomNumber}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl text-[#292A27] group-hover:text-[#38473A] transition-colors leading-snug mb-1">
            {specialist.name}
          </h3>

          <p className="font-sans text-xs font-semibold text-[#B77962] mb-3">
            {specialist.title}
          </p>

          <p className="font-sans text-xs sm:text-sm text-[#77766F] leading-relaxed line-clamp-3 mb-4">
            {specialist.bio}
          </p>

          {/* Areas of Interest Pills */}
          <div className="mb-6 flex flex-wrap gap-1.5 font-sans">
            {specialist.areasOfInterest.slice(0, 3).map((area) => (
              <span
                key={area}
                className="text-[10px] font-medium px-2.5 py-0.5 rounded-md bg-[#F0E9DF] text-[#38473A] border border-[#E4DED4]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-[#E4DED4]/70 flex items-center justify-between font-sans">
          <Link
            to={`/dermora/specialists/${specialist.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#38473A] group-hover:text-[#B77962] transition-colors"
          >
            <span>View Profile</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            to={`/dermora/appointment?specialist=${specialist.slug}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2] hover:bg-[#38473A] hover:text-white text-[#38473A] text-xs font-medium border border-[#E4DED4] transition-colors"
          >
            <Calendar className="w-3 h-3" />
            <span>Consult</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

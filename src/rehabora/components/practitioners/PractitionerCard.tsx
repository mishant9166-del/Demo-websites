import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, MapPin } from 'lucide-react';
import type { Practitioner } from '../../types/rehabora';
import ImageWithFallback from '../common/ImageWithFallback';

interface PractitionerCardProps {
  practitioner: Practitioner;
  index?: number;
}

export function PractitionerCard({ practitioner, index = 0 }: PractitionerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative flex flex-col rounded-3xl bg-white border border-[#E1E8E2] overflow-hidden shadow-sm hover:shadow-md hover:border-[#72A88A]/60 transition-all duration-300"
    >
      {/* 4:5 Portrait Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#E8F2EC]">
        <ImageWithFallback
          src={practitioner.portrait}
          alt={practitioner.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

        {/* Location & Suite badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#285A49] backdrop-blur-sm shadow-xs">
            <MapPin className="w-3 h-3 text-[#72A88A]" />
            {practitioner.suiteNumber}
          </span>
        </div>

        {/* Name and title overlay on image */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#285A49]/90 text-[#D4E5D9] backdrop-blur-xs mb-1.5">
            {practitioner.specialty}
          </span>
          <h3 className="font-heading text-xl font-bold leading-tight drop-shadow-xs">
            {practitioner.name}
          </h3>
          <p className="text-xs text-white/80 mt-0.5">{practitioner.title}</p>
        </div>
      </div>

      {/* Bio & Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-[#727C75] line-clamp-3 leading-relaxed">
            {practitioner.bio}
          </p>

          {/* Area of Interest tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {practitioner.areasOfInterest.slice(0, 3).map((area, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#E8F2EC] text-[#285A49]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-[#E1E8E2] flex items-center justify-between">
          <span className="text-[11px] text-[#727C75] flex items-center gap-1">
            <Award className="w-3 h-3 text-[#D8A66A]" />
            {practitioner.availability}
          </span>

          <Link
            to={`/rehabora/practitioners/${practitioner.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#285A49] group-hover:text-[#193D32] transition-colors"
          >
            View Profile
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default PractitionerCard;

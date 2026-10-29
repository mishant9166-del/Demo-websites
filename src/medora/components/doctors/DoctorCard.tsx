import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Award, MapPin } from 'lucide-react';
import type { Doctor } from '../../types/medora';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl border border-[#E1EAF0] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#1769AA]/40 transition-all flex flex-col h-full group text-left"
    >
      {/* Portrait Image Container */}
      <div className="relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden bg-[#EAF5FC] border-b border-[#E1EAF0]">
        <ImageWithFallback
          src={doctor.portrait}
          alt={doctor.name}
          className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[#1769AA] uppercase tracking-wider border border-[#E1EAF0] shadow-2xs flex items-center gap-1">
          <Award className="w-3 h-3 text-[#18A9A0]" />
          <span>{doctor.experienceYears} Years Exp</span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
          <div className="px-2.5 py-0.5 rounded-md bg-[#102B46]/80 backdrop-blur-xs text-[11px] font-medium flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#18A9A0]" />
            <span>{doctor.roomNumber}</span>
          </div>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Department Tag */}
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#18A9A0] mb-1.5 block">
          {doctor.departmentName}
        </span>

        {/* Doctor Name */}
        <h3 className="text-lg font-bold text-[#102B46] group-hover:text-[#1769AA] transition-colors leading-snug">
          {doctor.name}
        </h3>

        {/* Subtitle / Title */}
        <p className="text-xs font-semibold text-[#6B7E8E] mb-3">
          {doctor.title}
        </p>

        {/* Short Bio */}
        <p className="text-xs text-[#6B7E8E] leading-relaxed mb-4 line-clamp-2">
          {doctor.bio}
        </p>

        {/* Areas of Practice Pills */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {doctor.areasOfPractice.slice(0, 3).map((area) => (
            <span
              key={area}
              className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#EAF5FC] text-[#1769AA] border border-[#1769AA]/10"
            >
              {area}
            </span>
          ))}
          {doctor.areasOfPractice.length > 3 && (
            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-[#F8FBFD] text-[#6B7E8E] border border-[#E1EAF0]">
              +{doctor.areasOfPractice.length - 3} more
            </span>
          )}
        </div>

        {/* Actions Footer */}
        <div className="pt-4 border-t border-[#E1EAF0] mt-auto flex items-center justify-between gap-2">
          <Link
            to={`/medora/doctors/${doctor.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#1769AA] group-hover:text-[#18A9A0] transition-colors"
          >
            <span>View Profile</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            to={`/medora/appointment?doctor=${doctor.slug}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EAF5FC] hover:bg-[#1769AA] hover:text-white text-[#1769AA] text-xs font-bold transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Consult</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

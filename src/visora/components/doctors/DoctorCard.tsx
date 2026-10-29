import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import type { Doctor } from '../../types/visora';
import ImageWithFallback from '../common/ImageWithFallback';

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="group rounded-3xl bg-white border border-[#E4E4DE] overflow-hidden flex flex-col justify-between hover:border-[#5C9995] hover:shadow-md transition-all duration-300">
      {/* Portrait Asset */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F7F5EF]">
        <ImageWithFallback
          src={doctor.portrait}
          alt={doctor.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Room badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-sans font-medium bg-white/95 text-[#15263B] backdrop-blur-xs shadow-xs">
            <MapPin className="w-3 h-3 text-[#5C9995]" />
            {doctor.roomNumber}
          </span>
        </div>

        {/* Name and specialty overlay on portrait */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#5C9995] text-white mb-1.5">
            {doctor.specialty}
          </span>
          <h3 className="font-display text-xl font-medium leading-tight">
            {doctor.name}
          </h3>
          <p className="text-xs text-white/80 mt-0.5">{doctor.role}</p>
        </div>
      </div>

      {/* Doctor Bio and Areas of Focus */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-[#687581] leading-relaxed line-clamp-3">
            {doctor.bio}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {doctor.areasOfExpertise.slice(0, 2).map((area, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-[#F7F5EF] text-[#15263B]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E4E4DE] flex items-center justify-between">
          <span className="text-[11px] text-[#687581] flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#5C9995]" />
            {doctor.availability}
          </span>

          <Link
            to={`/visora/doctors/${doctor.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#15263B] group-hover:text-[#5C9995] transition-colors"
          >
            <span>Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;

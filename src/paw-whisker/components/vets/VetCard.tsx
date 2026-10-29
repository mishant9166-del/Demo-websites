import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Sparkles, MapPin } from 'lucide-react';
import type { Veterinarian } from '../../types/vet';

interface VetCardProps {
  vet: Veterinarian;
}

export const VetCard: React.FC<VetCardProps> = ({ vet }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-[#E8DFD1] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      {/* Portrait */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F0D9CA]/30">
        <img
          src={vet.image}
          alt={vet.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#343D30] shadow-sm flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#C76F52]" />
          <span>{vet.experience}</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 bg-[#343D30]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-xs flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#82947A] shrink-0" />
          <span className="truncate">{vet.consultationSuite}</span>
        </div>
      </div>

      {/* Bio and Info */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C76F52]">
              {vet.role}
            </span>
            <h3 className="font-fraunces text-2xl font-bold text-[#343D30] group-hover:text-[#C76F52] transition-colors mt-0.5">
              {vet.name}
            </h3>
          </div>

          {/* Specialties */}
          <div className="flex flex-wrap gap-1.5">
            {vet.specialties.map((spec) => (
              <span
                key={spec}
                className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#82947A]/15 text-[#343D30]"
              >
                {spec}
              </span>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#343D30]/80 leading-relaxed line-clamp-3">
            {vet.shortBio}
          </p>

          {/* Companion Pet Note */}
          <div className="p-3 rounded-2xl bg-[#FBF5EA] border border-[#E8DFD1] text-xs text-[#343D30]/90 flex items-start gap-2">
            <Heart className="w-4 h-4 text-[#C76F52] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#343D30]">At Home: </span>
              <span>{vet.companionPet}</span>
            </div>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-[#E8DFD1] flex items-center justify-between">
          <span className="text-xs text-[#82947A] font-medium italic">
            &ldquo;{vet.philosophy.slice(0, 36)}...&rdquo;
          </span>
          <Link
            to={`/paw-whisker/our-vets/${vet.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#C76F52] group-hover:translate-x-0.5 transition-transform shrink-0 ml-2"
          >
            Full Profile
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

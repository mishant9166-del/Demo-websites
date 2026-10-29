import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UserCheck } from 'lucide-react';
import type { Doctor } from '../../types/dental';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { DoctorModal } from './DoctorModal';

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <motion.article
        layout
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="bg-white border border-[#E3ECE9] rounded-2xl overflow-hidden hover:border-[#0D9488]/40 hover:shadow-[0_15px_30px_rgba(13,148,136,0.08)] transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          {/* Portrait Image */}
          <div className="relative h-64 w-full bg-[#E6F6F2] overflow-hidden">
            <ImageWithFallback
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152B32]/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#0D9488] inline-block mb-1 shadow-xs">
                {doctor.specialty}
              </span>
              <h3 className="text-base font-bold text-white leading-tight">
                {doctor.name}
              </h3>
            </div>
          </div>

          {/* Body */}
          <div className="p-5">
            <span className="text-xs font-semibold text-[#0D9488] block mb-2">
              {doctor.role}
            </span>
            <p className="text-xs text-[#687A80] leading-relaxed line-clamp-3">
              {doctor.shortBio}
            </p>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-5 pt-0">
          <button
            onClick={() => setIsOpenModal(true)}
            className="w-full py-2.5 px-4 rounded-xl bg-[#F0F8F6] border border-[#E3ECE9] text-xs font-bold text-[#115E59] hover:bg-[#0D9488] hover:text-white hover:border-[#0D9488] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>View Doctor Profile</span>
            <ArrowRight className="w-3 h-3 ml-1" />
          </button>
        </div>
      </motion.article>

      <DoctorModal
        doctor={doctor}
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      />
    </>
  );
}

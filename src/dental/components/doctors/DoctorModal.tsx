import { Link } from 'react-router-dom';
import { CheckCircle2, GraduationCap, Calendar, Languages } from 'lucide-react';
import type { Doctor } from '../../types/dental';
import { Modal } from '../common/Modal';
import { ImageWithFallback } from '../common/ImageWithFallback';

interface DoctorModalProps {
  doctor: Doctor;
  isOpen: boolean;
  onClose: () => void;
}

export function DoctorModal({ doctor, isOpen, onClose }: DoctorModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={doctor.name} maxWidth="max-w-2xl">
      <div className="space-y-6">
        {/* Top Info Header */}
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 border border-[#E3ECE9] bg-[#E6F6F2]">
            <ImageWithFallback
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D9488] bg-[#E6F6F2] px-2.5 py-0.5 rounded-full inline-block mb-1">
              {doctor.specialty}
            </span>
            <h3 className="text-xl font-bold text-[#152B32]">{doctor.name}</h3>
            <p className="text-xs font-semibold text-[#687A80] mt-0.5">{doctor.role}</p>

            <div className="flex items-center gap-1.5 text-xs text-[#687A80] mt-2">
              <Languages className="w-3.5 h-3.5 text-[#0D9488]" />
              <span>Languages: {doctor.languages.join(', ')}</span>
            </div>
          </div>
        </div>

        {/* Biography */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#152B32] mb-2">
            Professional Biography
          </h4>
          <p className="text-xs sm:text-sm text-[#687A80] leading-relaxed">
            {doctor.fullBio}
          </p>
        </div>

        {/* Education & Credentials */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#152B32] mb-2 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-[#0D9488]" />
            <span>Clinical Education & Credentials</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-[#687A80]">
            {doctor.education.map((edu, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#0D9488] font-bold">•</span>
                <span>{edu}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas of Practice */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#152B32] mb-2">
            Focus Areas & Treatments
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {doctor.areasOfPractice.map((area, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-[#F0F8F6] text-xs text-[#152B32]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0" />
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="pt-4 border-t border-[#E3ECE9] flex items-center justify-between gap-4">
          <span className="text-xs text-[#687A80]">
            Consultations available by appointment
          </span>
          <Link
            to={`/dental/appointment?doctor=${encodeURIComponent(doctor.name)}`}
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#115E59] transition-colors shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book with {doctor.name.split(' ')[1]}</span>
          </Link>
        </div>
      </div>
    </Modal>
  );
}

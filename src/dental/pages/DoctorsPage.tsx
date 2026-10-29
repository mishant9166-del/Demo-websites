import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Info, Heart } from 'lucide-react';
import { doctors } from '../data/doctors';
import { DoctorCard } from '../components/doctors/DoctorCard';

export function DoctorsPage() {
  return (
    <div className="py-12 sm:py-16 bg-[#FAFCFB] text-[#152B32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#687A80] mb-8">
          <Link to="/dental" className="hover:text-[#0D9488] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-[#152B32] font-semibold">Our Dental Team</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D9488] block mb-2">
            MEET YOUR DENTAL TEAM
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Care Led by Professionals.
          </h1>
          <p className="text-sm sm:text-base text-[#687A80] mt-3 leading-relaxed">
            Our clinicians blend focused clinical experience with gentle, compassionate communication to ensure your visits are relaxed and personalized.
          </p>
        </div>

        {/* Fictional Profile Notice */}
        <div className="p-4 rounded-2xl bg-[#E6F6F2] border border-[#0D9488]/20 mb-10 flex items-center gap-3 text-xs text-[#115E59]">
          <Info className="w-4 h-4 text-[#0D9488] shrink-0" />
          <span>
            <strong>Portfolio Notice:</strong> Dentist profiles and biographies shown below are fictional sample demonstrations developed to showcase doctor profile cards and credential modals.
          </span>
        </div>

        {/* Doctor Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {/* Team Philosophy Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E3ECE9] shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D9488]">
              <Heart className="w-4 h-4" />
              <span>Our Patient Philosophy</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#152B32]">
              Every clinician shares a commitment to gentle dentistry.
            </h3>
            <p className="text-xs sm:text-sm text-[#687A80] leading-relaxed">
              We understand that visiting the dentist requires trust. Our practitioners prioritize open conversations, transparent treatment options, and unhurried appointments.
            </p>
          </div>

          <Link
            to="/dental/appointment"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#115E59] transition-colors shadow-md shadow-[#0D9488]/20 shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book with a Dentist</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

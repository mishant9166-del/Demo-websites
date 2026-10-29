import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import DoctorCard from '../doctors/DoctorCard';
import { doctors } from '../../data/doctors';

export function SpecialistsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F5EF] border-t border-[#E4E4DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="CLINICAL FACULTY"
            title="Experienced Vision Care,"
            italicWord="Unhurried Consultations."
            subtitle="Meet our fictional optometrists, corneal specialists, and vision scientists committed to thorough refractive precision and preventive ocular health."
          />

          <Link
            to="/visora/doctors"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-white text-[#15263B] hover:bg-[#15263B] hover:text-white border border-[#E4E4DE] transition-all self-start md:self-auto shrink-0 shadow-xs"
          >
            <span>Meet All Specialists</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Doctor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {doctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>

        {/* Ethical Portfolio Demonstration Notice */}
        <div className="mt-10 p-4 rounded-2xl bg-white border border-[#E4E4DE] text-center max-w-3xl mx-auto flex items-center justify-center gap-2">
          <UserCheck className="w-4 h-4 text-[#5C9995] shrink-0" />
          <p className="text-[11px] text-[#687581]">
            <span className="font-semibold text-[#15263B]">Demonstration Notice:</span>{' '}
            Doctor profiles and credentials are created solely for frontend portfolio design evaluation. No real medical endorsement is simulated.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SpecialistsPreview;

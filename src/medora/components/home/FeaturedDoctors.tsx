import { Link } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import { doctors } from '../../data/doctors';
import { DoctorCard } from '../doctors/DoctorCard';
import { SectionHeading } from '../common/SectionHeading';

export function FeaturedDoctors() {
  const featured = doctors.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E1EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="OUR MEDICAL FACULTY"
            title="Meet Our Specialist"
            highlight="Doctors."
            subtitle="Experienced physicians and surgeons dedicated to providing patient-first healthcare, proactive diagnosis, and evidence-based treatments."
            className="mb-0"
          />

          <Link
            to="/medora/doctors"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EAF5FC] hover:bg-[#1769AA] text-[#1769AA] hover:text-white text-sm font-bold transition-all shrink-0 self-start md:self-auto border border-[#1769AA]/15"
          >
            <Users className="w-4 h-4" />
            <span>View All Doctors</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      </div>
    </section>
  );
}

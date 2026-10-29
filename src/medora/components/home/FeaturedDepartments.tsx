import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { departments } from '../../data/departments';
import { DepartmentCard } from '../departments/DepartmentCard';
import { SectionHeading } from '../common/SectionHeading';

export function FeaturedDepartments() {
  const featured = departments.slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-[#F8FBFD] border-b border-[#E1EAF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="OUR CLINICAL DISCIPLINES"
            title="Specialized Care Across Multiple"
            highlight="Departments."
            subtitle="From routine preventative screenings to complex specialized interventions, our dedicated clinical teams support your health at every life stage."
            className="mb-0"
          />

          <Link
            to="/medora/departments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#EAF5FC] text-[#1769AA] text-sm font-bold border border-[#E1EAF0] shadow-2xs hover:shadow-sm transition-all shrink-0 self-start md:self-auto"
          >
            <span>View All Departments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((dept) => (
            <DepartmentCard key={dept.id} department={dept} showImage={false} />
          ))}
        </div>
      </div>
    </section>
  );
}

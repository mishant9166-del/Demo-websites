import { Hero } from '../components/home/Hero';
import { HospitalIntro } from '../components/home/HospitalIntro';
import { FeaturedDepartments } from '../components/home/FeaturedDepartments';
import { WhyMedora } from '../components/home/WhyMedora';
import { FacilitiesHighlight } from '../components/home/FacilitiesHighlight';
import { PatientCareProcess } from '../components/home/PatientCareProcess';
import { FeaturedDoctors } from '../components/home/FeaturedDoctors';
import { HomeCta } from '../components/home/HomeCta';

export function HomePage() {
  return (
    <div>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Hospital Introduction */}
      <HospitalIntro />

      {/* 3. Featured Departments */}
      <FeaturedDepartments />

      {/* 4. Why Medora Values (Contrasting Navy Section) */}
      <WhyMedora />

      {/* 5. Modern Facilities Highlight & Interactive Gallery */}
      <FacilitiesHighlight />

      {/* 6. Patient Care Process (4 Steps) */}
      <PatientCareProcess />

      {/* 7. Featured Doctors Directory */}
      <FeaturedDoctors />

      {/* 8. Final Call to Action */}
      <HomeCta />
    </div>
  );
}

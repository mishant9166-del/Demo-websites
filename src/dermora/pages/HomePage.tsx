import { Hero } from '../components/home/Hero';
import { BrandIntro } from '../components/home/BrandIntro';
import { FeaturedTreatments } from '../components/home/FeaturedTreatments';
import { EditorialFeature } from '../components/home/EditorialFeature';
import { FeaturedSpecialists } from '../components/home/FeaturedSpecialists';
import { HomeCta } from '../components/home/HomeCta';

export function HomePage() {
  return (
    <div>
      {/* 1. Asymmetrical Editorial Hero */}
      <Hero />

      {/* 2. Brand Introduction — The Dermora Approach */}
      <BrandIntro />

      {/* 3. Featured Treatments Preview */}
      <FeaturedTreatments />

      {/* 4. Deep Olive Editorial Feature Section */}
      <EditorialFeature />

      {/* 5. Featured Specialists Directory */}
      <FeaturedSpecialists />

      {/* 6. Final Call to Action */}
      <HomeCta />
    </div>
  );
}

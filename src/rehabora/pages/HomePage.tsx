import Hero from '../components/home/Hero';
import ApproachSection from '../components/home/ApproachSection';
import FeaturedServices from '../components/home/FeaturedServices';
import ProgramsFeature from '../components/home/ProgramsFeature';
import MovementFeature from '../components/home/MovementFeature';
import FeaturedTeam from '../components/home/FeaturedTeam';
import FaqPreview from '../components/home/FaqPreview';
import HomeCta from '../components/home/HomeCta';

export function HomePage() {
  return (
    <div>
      <Hero />
      <ApproachSection />
      <FeaturedServices />
      <ProgramsFeature />
      <MovementFeature />
      <FeaturedTeam />
      <FaqPreview />
      <HomeCta />
    </div>
  );
}

export default HomePage;

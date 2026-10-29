import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import FeaturedServices from '../components/home/FeaturedServices';
import CuratedEyewear from '../components/home/CuratedEyewear';
import SpecialistsPreview from '../components/home/SpecialistsPreview';
import ClinicIntro from '../components/home/ClinicIntro';
import HomeCta from '../components/home/HomeCta';

export function HomePage() {
  return (
    <div>
      <Hero />
      <TrustStrip />
      <FeaturedServices />
      <CuratedEyewear />
      <SpecialistsPreview />
      <ClinicIntro />
      <HomeCta />
    </div>
  );
}

export default HomePage;

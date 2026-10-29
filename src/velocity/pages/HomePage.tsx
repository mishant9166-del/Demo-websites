import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';
import { FeaturedVehicles } from '../components/home/FeaturedVehicles';
import { ExperienceSection } from '../components/home/ExperienceSection';
import { CallToAction } from '../components/home/CallToAction';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedVehicles />
      <ExperienceSection />
      <CallToAction />
    </>
  );
}

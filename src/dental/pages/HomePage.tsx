import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { PatientJourney } from '../components/home/PatientJourney';
import { TestimonialCarousel } from '../components/home/TestimonialCarousel';
import { CallToAction } from '../components/home/CallToAction';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedServices />
      <WhyChooseUs />
      <PatientJourney />
      <TestimonialCarousel />
      <CallToAction />
    </>
  );
}

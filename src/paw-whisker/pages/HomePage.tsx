import React from 'react';
import { Hero } from '../components/home/Hero';
import { WelcomeIntro } from '../components/home/WelcomeIntro';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { MeetVets } from '../components/home/MeetVets';
import { WellnessSpotlight } from '../components/home/WellnessSpotlight';
import { FirstVisitPreview } from '../components/home/FirstVisitPreview';
import { Testimonials } from '../components/home/Testimonials';
import { HomeCta } from '../components/home/HomeCta';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <WelcomeIntro />
      <ServicesOverview />
      <MeetVets />
      <WellnessSpotlight />
      <FirstVisitPreview />
      <Testimonials />
      <HomeCta />
    </div>
  );
};

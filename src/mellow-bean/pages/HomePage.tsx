import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedMenu } from '../components/home/FeaturedMenu';
import { CafeStoryTeaser } from '../components/home/CafeStoryTeaser';
import { SeasonalHighlight } from '../components/home/SeasonalHighlight';
import { AtmosphereGallery } from '../components/home/AtmosphereGallery';
import { VisitUs } from '../components/home/VisitUs';
import { ReservationCta } from '../components/home/ReservationCta';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <FeaturedMenu />
      <CafeStoryTeaser />
      <SeasonalHighlight />
      <AtmosphereGallery />
      <VisitUs />
      <ReservationCta />
    </div>
  );
};

export default HomePage;

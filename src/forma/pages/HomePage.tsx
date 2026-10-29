import React from 'react';
import { Hero } from '../components/home/Hero';
import { SelectedProjects } from '../components/home/SelectedProjects';
import { PhilosophySection } from '../components/home/PhilosophySection';
import { ServicesTeaser } from '../components/home/ServicesTeaser';
import { MaterialsSection } from '../components/home/MaterialsSection';
import { EnquiryBanner } from '../components/home/EnquiryBanner';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <SelectedProjects />
      <PhilosophySection />
      <ServicesTeaser />
      <MaterialsSection />
      <EnquiryBanner />
    </div>
  );
};

export default HomePage;

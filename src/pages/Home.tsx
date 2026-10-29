import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ProjectGrid } from '../components/ProjectGrid';
import { Services } from '../components/Services';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { QualityStandards } from '../components/QualityStandards';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProjectGrid />
        <Services />
        <ProcessTimeline />
        <QualityStandards />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

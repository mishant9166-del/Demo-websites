import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  Eye,
  Glasses,
  CheckCircle2,
  Cpu,
  Layers,
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import ImageWithFallback from '../components/common/ImageWithFallback';

export function AboutPage() {
  const pillars = [
    {
      title: 'Diagnostic Precision',
      desc: 'We utilize high-resolution wavefront aberrometry and retinal photography to measure ocular health beyond the standard 20/20 baseline.',
      icon: Cpu,
    },
    {
      title: 'Architectural Frame Craft',
      desc: 'Every optical silhouette is selected for structural proportion, durable screwless hinges, and hypoallergenic materials.',
      icon: Glasses,
    },
    {
      title: 'Unhurried Care',
      desc: 'We dedicate 50 minutes to comprehensive examinations, allowing ample time to understand your lifestyle and digital habits.',
      icon: Eye,
    },
    {
      title: 'Transparent Guidance',
      desc: 'No confusing optical upselling. We provide clear, evidence-based recommendations on lens coatings, indices, and ergonomic solutions.',
      icon: Layers,
    },
  ];

  return (
    <div className="bg-[#F7F5EF] min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E4E4DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-sans font-medium uppercase tracking-[0.16em] bg-[#F7F5EF] text-[#15263B] border border-[#E4E4DE] mb-5">
                <Sparkles className="w-3.5 h-3.5 text-[#5C9995]" />
                ABOUT VISORA STUDIO
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#15263B] tracking-tight leading-tight">
                A Clearer View of{' '}
                <span className="italic text-[#5C9995]">Everything.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#687581] font-sans leading-relaxed max-w-2xl">
                VISORA was conceptualized as an independent vision practice where rigorous clinical eye examinations meet the warm, discerning curation of an architectural eyewear studio.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/visora/book-appointment"
                  className="px-7 py-3.5 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors shadow-xs"
                >
                  Book an Eye Test
                </Link>
                <Link
                  to="/visora/eyewear"
                  className="px-6 py-3.5 rounded-full text-xs font-semibold text-[#15263B] hover:text-[#5C9995] bg-[#F7F5EF] border border-[#E4E4DE] transition-colors"
                >
                  Browse Collection
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-[#F7F5EF]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1200&q=80"
                  alt="Precision optical trial lenses and delicate craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundational Pillars */}
      <section className="py-20 lg:py-28 bg-[#F7F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading
              align="center"
              badge="FOUR GUIDING PRINCIPLES"
              title="How We Approach Vision &amp;"
              italicWord="Optical Craftsmanship"
              subtitle="From the moment you enter our reception to the final millimeter alignment of your frames, our practice operates with uncompromised precision."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-7 rounded-3xl bg-white border border-[#E4E4DE] hover:border-[#5C9995] transition-all flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#F7F5EF] text-[#5C9995] flex items-center justify-center mb-5 border border-[#E4E4DE]">
                      <IconComp className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <h3 className="font-display text-xl text-[#15263B]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-[#687581] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E4E4DE]">
                    <span className="text-[10px] font-bold text-[#5C9995] uppercase tracking-wider">
                      Pillar 0{idx + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Studio Atmosphere Section */}
      <section className="py-20 lg:py-28 bg-white border-y border-[#E4E4DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E4E4DE] aspect-[16/10] bg-[#F7F5EF]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern eyewear studio gallery and trial styling space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-sans font-medium uppercase tracking-wider bg-[#F7F5EF] text-[#15263B] border border-[#E4E4DE] mb-4">
                <span>THE ATELIER SPACE</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl text-[#15263B]">
                Designed for Serenity &amp; Careful Selection
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#687581] leading-relaxed">
                We consciously eliminated harsh neon lighting, cluttered turnstiles, and aggressive sales quotas. VISORA is a warm sanctuary of calibrated natural light, private testing rooms, and acoustic baffles where patients can converse comfortably with their optometrists.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-[#15263B]">
                  <CheckCircle2 className="w-4 h-4 text-[#5C9995]" />
                  <span>Private acoustic-shielded vision suites</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#15263B]">
                  <CheckCircle2 className="w-4 h-4 text-[#5C9995]" />
                  <span>On-site optical surfacing and edging laboratory</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#15263B]">
                  <CheckCircle2 className="w-4 h-4 text-[#5C9995]" />
                  <span>Bespoke frame fitting with pantoscopic tilt calibration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Disclaimer */}
      <section className="py-12 bg-[#F7F5EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-3xl bg-white border border-[#E4E4DE] flex items-start gap-4 shadow-xs">
            <ShieldCheck className="w-6 h-6 text-[#5C9995] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-display text-base text-[#15263B]">
                Portfolio Demonstration Notice
              </h4>
              <p className="mt-1 text-xs text-[#687581] leading-relaxed">
                VISORA is a concept eye clinic and optical store created for a 12-project frontend engineering portfolio. To maintain absolute clinical integrity, no real medical records are collected, no actual appointments are dispatched, and all products and prices in INR are simulated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;

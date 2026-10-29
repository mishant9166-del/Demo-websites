import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Ear,
  Target,
  Flame,
  MessageCircle,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import ImageWithFallback from '../components/common/ImageWithFallback';

export function AboutPage() {
  const coreValues = [
    {
      title: 'Listen First',
      desc: 'Before prescribing exercises, we take the time to hear your history, daily challenges, and what recovery truly means for your lifestyle.',
      icon: Ear,
      color: 'bg-[#E8F2EC] text-[#285A49]',
    },
    {
      title: 'Understand Individual Goals',
      desc: 'Whether your target is returning to competitive tennis or comfortably walking to the local market, your plan reflects personal priorities.',
      icon: Target,
      color: 'bg-[#E8F2EC] text-[#285A49]',
    },
    {
      title: 'Support Functional Movement',
      desc: 'We emphasize active, graded exercise that translates directly to real-world capability, stability, and biomechanical resilience.',
      icon: Flame,
      color: 'bg-[#E8F2EC] text-[#285A49]',
    },
    {
      title: 'Communicate Clearly',
      desc: 'No intimidating medical jargon. We explain what we observe, why specific movements matter, and what you can do at home with clarity.',
      icon: MessageCircle,
      color: 'bg-[#E8F2EC] text-[#285A49]',
    },
  ];

  return (
    <div className="bg-[#FAFBF8] min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E1E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F2EC] text-[#285A49] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#D8A66A]" />
                ABOUT REHABORA
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#242C28] tracking-tight leading-tight">
                Helping You Feel More Confident in{' '}
                <span className="text-[#285A49]">Every Movement.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#727C75] leading-relaxed max-w-2xl">
                REHABORA was conceptualized as a welcoming, movement-first physiotherapy and physical rehabilitation clinic. We believe recovery is a collaborative journey built on trust, active physical guidance, and steady progression.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/rehabora/appointment"
                  className="px-7 py-3.5 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors shadow-xs"
                >
                  Request Consultation
                </Link>
                <Link
                  to="/rehabora/services"
                  className="px-6 py-3.5 rounded-full text-xs font-bold text-[#242C28] hover:text-[#285A49] bg-[#FAFBF8] border border-[#E1E8E2] transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-[#E8F2EC]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80"
                  alt="Physiotherapy consultation at Rehabora"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-28 bg-[#FAFBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading
              align="center"
              badge="OUR GUIDING PRINCIPLES"
              title="Built on Four Foundational Values"
              subtitle="Our care philosophy steers every interaction from your initial assessment to long-term mobility maintenance."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="p-7 rounded-3xl bg-white border border-[#E1E8E2] hover:border-[#72A88A] transition-all flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#E8F2EC] text-[#285A49] flex items-center justify-center mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#242C28]">
                      {val.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-[#727C75] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E1E8E2]">
                    <span className="text-[11px] font-bold text-[#72A88A] uppercase tracking-wider">
                      Principle 0{idx + 1}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clinic Environment Section */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#E1E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E1E8E2] aspect-[16/10] bg-[#E8F2EC]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Rehabora clinic interior and reception"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F2EC] text-[#285A49] mb-4">
                <Building2 className="w-3.5 h-3.5 text-[#285A49]" />
                OUR SPACE
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#242C28]">
                A Calm, Modern Rehabilitation Environment
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#727C75] leading-relaxed">
                We consciously avoided sterile, intimidating hospital aesthetics. Rehabora features natural lighting, soft sage and mint surfaces, dedicated private consultation rooms, and a spacious movement studio equipped for functional recovery.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-[#242C28]">
                  <CheckCircle2 className="w-4 h-4 text-[#285A49]" />
                  <span>Private acoustic-shielded consultation suites</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#242C28]">
                  <CheckCircle2 className="w-4 h-4 text-[#285A49]" />
                  <span>Spacious movement gym with calibrated rehabilitation equipment</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#242C28]">
                  <CheckCircle2 className="w-4 h-4 text-[#285A49]" />
                  <span>Accessible ground-level design with step-free entry</span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/rehabora/gallery"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#285A49] hover:text-[#193D32]"
                >
                  Explore Clinic Gallery
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Disclaimer Notice */}
      <section className="py-12 bg-[#FAFBF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-3xl bg-[#E8F2EC]/60 border border-[#D4E5D9] flex items-start gap-4">
            <ShieldAlert className="w-6 h-6 text-[#285A49] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-heading text-sm font-bold text-[#285A49]">
                Portfolio Demonstration Notice
              </h4>
              <p className="mt-1 text-xs text-[#242C28] leading-relaxed">
                REHABORA is a concept physiotherapy website created for a 12-project frontend engineering portfolio. To maintain absolute integrity and avoid misrepresentation, this website deliberately avoids claiming real historical dates, awards, patient recovery totals, or certified hospital affiliations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Ear,
  MessageSquare,
  Compass,
  Heart,
  ArrowRight,
  Shield,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

const CORE_VALUES = [
  {
    icon: Ear,
    title: 'Listening First',
    description:
      'We believe an effective skin care journey begins with attentive listening. Your habits, sensitivities, and individual comfort guide every step.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description:
      'Medical terminology can be overwhelming. We demystify skin science into clear, actionable advice so you always understand the why behind each recommendation.',
  },
  {
    icon: Compass,
    title: 'Professional Guidance',
    description:
      'Navigating treatments and cosmetic trends requires grounded clinical judgment. We emphasize proven dermatological principles over transient fads.',
  },
  {
    icon: Heart,
    title: 'Respect for Individual Needs',
    description:
      'Every skin barrier is unique. We never adopt a one-size-fits-all protocol, choosing instead to personalize every recommendation to your lifestyle and goals.',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      {/* Editorial Header */}
      <section className="container mx-auto px-6 max-w-6xl mb-16">
        <SectionHeading
          eyebrow="ABOUT DERMORA"
          title="Thoughtful Skin Care,"
          highlight="Built Around You."
          subtitle="A contemporary clinical concept designed to bridge dermatological expertise with a calm, patient-first aesthetic experience."
          align="center"
        />

        {/* Hero Banner Image */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-[#E4DED4] aspect-[16/8] shadow-sm relative">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80"
            alt="Dermora modern consultation suite"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#292A27]/60 via-transparent to-transparent flex items-end p-8 md:p-12">
            <p className="text-white text-sm md:text-base font-serif italic max-w-xl">
              "We envision dermatology as an ongoing partnership—rooted in clarity, trust, and gentle clinical precision."
            </p>
          </div>
        </div>
      </section>

      {/* Brand Introduction & Care Philosophy */}
      <section className="py-16 bg-[#F0E9DF] border-y border-[#E4DED4]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#B77962]">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#292A27] font-normal leading-tight">
                Where clinical rigour meets serene comfort.
              </h2>
              <p className="text-[#77766F] text-sm md:text-base leading-relaxed font-light">
                DERMORA was conceived as an alternative to hurried, intimidating medical visits and overly commercialized beauty clinics. We unite thorough clinical knowledge with an environment that feels welcoming, serene, and unhurried.
              </p>
              <p className="text-[#77766F] text-sm md:text-base leading-relaxed font-light">
                Whether assessing chronic dermatological conditions or planning restorative skin treatments, our goal is to help you feel informed, confident, and supported throughout your skin health journey.
              </p>

              <div className="pt-2">
                <Link
                  to="/dermora/specialists"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#38473A] hover:text-[#B77962] group"
                >
                  Meet our dermatology team
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-[#E4DED4] aspect-[4/3] shadow-md">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                  alt="Dermora clinic interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B77962] block mb-2">
            GUIDING PRINCIPLES
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#292A27] font-normal">
            The values that define our practice.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-[#E4DED4] shadow-sm hover:border-[#38473A]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F0E9DF] text-[#38473A] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-lg text-[#292A27] font-semibold mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#77766F] leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Clinic Environment Section */}
      <section className="bg-[#38473A] text-white py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#9BAA96]">
                THE CLINICAL ENVIRONMENT
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-normal leading-tight">
                Designed to soothe your senses from the moment you arrive.
              </h2>
              <p className="text-[#F0E9DF]/80 text-sm md:text-base leading-relaxed font-light">
                Our clinic spaces are curated with warm ivory tones, soft diffused daylight, organic textures, and peaceful consultation suites. We minimize clinical intimidation while maintaining the highest hygiene standards.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-[#F0E9DF]">
                  <CheckCircle2 className="w-4 h-4 text-[#9BAA96]" />
                  <span>Private acoustic-insulated consultation suites</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#F0E9DF]">
                  <CheckCircle2 className="w-4 h-4 text-[#9BAA96]" />
                  <span>Calm waiting lounge with botanical accents</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#F0E9DF]">
                  <CheckCircle2 className="w-4 h-4 text-[#9BAA96]" />
                  <span>Hospital-grade sterilization with boutique warmth</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/dermora/gallery"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAF7F2] text-[#292A27] rounded-full text-xs font-semibold hover:bg-white transition"
                >
                  <Building2 className="w-4 h-4" />
                  Tour Our Clinic Gallery
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-[#9BAA96]/30 aspect-[4/3] shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern treatment room interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Notice Banner */}
      <section className="container mx-auto px-6 max-w-4xl mt-16">
        <div className="bg-[#FAF7F2] border border-[#E4DED4] rounded-2xl p-6 text-center text-xs text-[#77766F] leading-relaxed">
          <Shield className="w-5 h-5 text-[#38473A] mx-auto mb-2" />
          <p>
            <strong>Portfolio Demonstration Notice:</strong> DERMORA is a fictional dermatology clinic concept designed by a frontend engineer to showcase modern aesthetic healthcare UI/UX design. All clinical philosophies, doctor profiles, and service representations are created for portfolio presentation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

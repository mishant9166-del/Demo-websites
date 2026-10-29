import { Link } from 'react-router-dom';
import {
  Heart,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Calendar,
  ArrowRight,
  Sparkles,
  Building,
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export function AboutPage() {
  const coreValues = [
    {
      title: 'Compassion',
      desc: 'We treat every patient and family member with genuine warmth, empathy, and dignified respect throughout their medical care journey.',
      icon: Heart,
    },
    {
      title: 'Clear Communication',
      desc: 'We demystify complex clinical diagnoses and discuss treatment options transparently, empowering patients to make informed decisions.',
      icon: MessageSquare,
    },
    {
      title: 'Professional Care',
      desc: 'We uphold rigorous evidence-based medical standards, continuous clinical audits, and comprehensive patient safety guidelines.',
      icon: ShieldCheck,
    },
    {
      title: 'Continuous Improvement',
      desc: 'We actively modernize our diagnostic technologies, clinical proficiencies, and sanitation procedures to deliver state-of-the-art care.',
      icon: TrendingUp,
    },
  ];

  const experiencePrinciples = [
    {
      title: 'Prompt & Transparent Triage',
      desc: 'Minimizing waiting times through digital pre-registration and clear appointment windows.',
    },
    {
      title: 'Holistic Multidisciplinary Collaboration',
      desc: 'Our internists, surgeons, radiologists, and nurses consult closely on each care plan.',
    },
    {
      title: 'Acoustic & Environmental Comfort',
      desc: 'Biophilic daylight, peaceful recovery rooms, and quiet nursing stations to promote healing.',
    },
    {
      title: 'Thorough Follow-Up Support',
      desc: 'Post-consultation instructions, prescription reviews, and ongoing preventative guidance.',
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8FBFD] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Main Heading */}
        <SectionHeading
          eyebrow="ABOUT MEDORA MULTISPECIALTY HOSPITAL"
          title="Caring for You, Every Step of the"
          highlight="Way."
          subtitle="Medora Multispecialty Hospital was conceptualized with a single founding goal: to offer modern, trustworthy, and compassionate medical care in an uplifting healing environment."
          align="center"
        />

        {/* Overview Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-[#E1EAF0] shadow-md bg-white">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80"
              alt="Medora Hospital Campus View"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769AA] bg-[#EAF5FC] px-3 py-1 rounded-full border border-[#1769AA]/15 inline-block">
              OUR CARE PHILOSOPHY
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102B46] tracking-tight leading-tight">
              A Patient-First Model Where Clinical Rigor Meets Human Empathy.
            </h2>

            <p className="text-sm sm:text-base text-[#6B7E8E] leading-relaxed">
              Modern medicine is most effective when technical skill is paired with attentive listening. At Medora, we recognize that visiting a hospital can often feel overwhelming. That is why our clinical faculty, nursing teams, and support staff prioritize clear communication, patient dignity, and transparent treatment options.
            </p>

            <p className="text-sm sm:text-base text-[#6B7E8E] leading-relaxed">
              From our diagnostic imaging suites to our recovery rooms, every corner of our hospital has been designed around safety, infection prevention, and restorative comfort.
            </p>

            <div className="pt-2">
              <Link
                to="/medora/appointment"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1769AA] hover:bg-[#125388] text-white text-sm font-bold shadow-xs transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Request a Consultation</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Core Values Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#18A9A0] uppercase tracking-wider">
              GUIDING PRINCIPLES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102B46] mt-2">
              Our Four Core Values
            </h3>
            <p className="text-sm text-[#6B7E8E] mt-3">
              These fundamental tenets guide our decisions, clinical practices, and daily interactions with every patient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E1EAF0] shadow-2xs hover:shadow-md hover:border-[#1769AA]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF5FC] text-[#1769AA] flex items-center justify-center mb-5 border border-[#1769AA]/15">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-[#102B46] mb-2">{val.title}</h4>
                    <p className="text-xs sm:text-sm text-[#6B7E8E] leading-relaxed">{val.desc}</p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#E1EAF0]/60 flex items-center gap-1.5 text-[11px] font-bold text-[#18A9A0] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Medora Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Patient Experience Principles (Navy Contrast Strip) */}
        <div className="bg-[#102B46] text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#18A9A0] block mb-2">
              CLINICAL ENVIRONMENT
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Patient Experience Principles
            </h3>
            <p className="text-sm text-[#EAF5FC]/80 mt-3 leading-relaxed">
              We continually evaluate our operations against these standards to ensure our patients experience respectful, unhurried, and safe medical consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiencePrinciples.map((item, idx) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-lg font-bold text-[#18A9A0] font-mono mb-2 block">
                    0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-[#EAF5FC]/75 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links CTA */}
        <div className="text-center pt-6">
          <div className="inline-flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/medora/departments"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#EAF5FC] text-[#1769AA] text-sm font-bold border border-[#E1EAF0] shadow-2xs transition-colors"
            >
              <Building className="w-4 h-4" />
              <span>Explore All Departments</span>
            </Link>

            <Link
              to="/medora/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1769AA] hover:bg-[#125388] text-white text-sm font-bold shadow-xs transition-colors"
            >
              <span>Get in Touch with Hospital Reception</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ChevronRight, Heart, MessageSquare, ShieldCheck, TrendingUp, Calendar, Info } from 'lucide-react';
import { dentalConfig } from '../config/site';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

const valuesList = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We treat every patient like family, understanding anxieties and creating a calm, supportive clinical atmosphere.'
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'We demystify dental health by explaining treatment alternatives clearly with zero high-pressure recommendations.'
  },
  {
    icon: ShieldCheck,
    title: 'Professional Care',
    description: 'We adhere to the highest international sterilization benchmarks and evidence-based clinical protocols.'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'We invest continually in digital dentistry, low-radiation imaging, and advanced postgraduate training.'
  }
];

export function AboutPage() {
  return (
    <div className="py-12 sm:py-16 bg-[#FAFCFB] text-[#152B32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#687A80] mb-8">
          <Link to="/dental" className="hover:text-[#0D9488] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-[#152B32] font-semibold">About the Clinic</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D9488] block mb-3">
            ABOUT SMILECARE
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08]">
            Thoughtful Care. <br />
            <span className="text-[#0D9488]">Healthier Smiles.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#687A80] mt-6 leading-relaxed">
            SmileCare Dental Clinic was conceptualized around an essential idea: dental visits should be welcoming, transparent, and built on genuine clinician-patient partnerships.
          </p>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="relative rounded-3xl overflow-hidden border border-[#E3ECE9] h-80 sm:h-96 shadow-sm bg-[#E6F6F2]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
              alt="Gentle patient dental care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152B32]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E6F6F2] block mb-1">
                Patient Comfort
              </span>
              <p className="text-sm font-bold">
                A serene atmosphere engineered to replace dental anxiety with confidence.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-[#E3ECE9] h-80 sm:h-96 shadow-sm bg-[#E6F6F2]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80"
              alt="Modern treatment room environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152B32]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E6F6F2] block mb-1">
                Digital Facilities
              </span>
              <p className="text-sm font-bold">
                Low-radiation digital radiography and high-resolution 3D optical scanning.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D9488] block mb-2">
              OUR GUIDING PILLARS
            </span>
            <h2 className="text-3xl font-extrabold text-[#152B32] tracking-tight">
              Values That Define Our Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuesList.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E3ECE9] space-y-3 shadow-xs hover:border-[#0D9488]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E6F6F2] text-[#0D9488] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#152B32]">{val.title}</h3>
                  <p className="text-xs text-[#687A80] leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Portfolio Concept Disclaimer Box */}
        <div className="p-8 rounded-3xl bg-[#E6F6F2] border border-[#0D9488]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="p-3 rounded-full bg-white text-[#0D9488] shadow-xs shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#115E59]">
                Portfolio Concept Demonstration
              </h3>
              <p className="text-xs text-[#115E59]/80 mt-1 leading-relaxed">
                {dentalConfig.disclaimer} This website demonstrates high-quality responsive frontend development, medical UI patterns, and appointment validation for healthcare businesses.
              </p>
            </div>
          </div>

          <Link
            to="/dental/appointment"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#115E59] transition-colors shadow-xs shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

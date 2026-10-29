import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Eye, Shield, Sparkles, HeartHandshake } from 'lucide-react';
import { ImageWithFallback } from '../common/ImageWithFallback';

const advantages = [
  {
    icon: Eye,
    title: 'Clear Treatment Explanations',
    desc: 'We walk through intraoral digital photos with you, explaining every choice before starting.'
  },
  {
    icon: Shield,
    title: 'Patient-Focused Care',
    desc: 'Your comfort and pacing come first. We pause whenever you need and tailor anesthesia for pain-free visits.'
  },
  {
    icon: Sparkles,
    title: 'Modern Clinical Environment',
    desc: 'State-of-the-art dental chairs, low-noise equipment, and advanced HEPA filtration in every operatory.'
  },
  {
    icon: HeartHandshake,
    title: 'Friendly Professional Team',
    desc: 'Warm, approachable dentists and hygienists dedicated to creating calm, respectful experiences.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-20 bg-white border-t border-[#E3ECE9] text-[#152B32] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Clinic Environment Image with Layered Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#E3ECE9] shadow-xl aspect-[4/3] bg-[#E6F6F2] group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80"
                alt="Bright, serene dental operatory room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#152B32]/50 via-transparent to-transparent pointer-events-none" />

              {/* Inset Label Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E3ECE9] shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D9488] block">
                    Modern Operatory
                  </span>
                  <span className="text-sm font-bold text-[#152B32]">
                    State-of-the-Art Clinic Facilities
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E6F6F2] text-[#0D9488] flex items-center justify-center font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Advantages */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D9488] block mb-3">
                WHY CHOOSE SMILECARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#152B32] tracking-tight leading-tight">
                A Better Dental Experience <br />
                <span className="text-[#0D9488]">Starts Here.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#687A80] mt-4 leading-relaxed font-normal">
                We believe dental care should feel clear, comfortable, and personal. Our approach focuses on explaining treatment options, answering questions, and helping patients make informed decisions with their dentist.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {advantages.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-[#FAFCFB] border border-[#E3ECE9] space-y-2 hover:border-[#0D9488]/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#E6F6F2] text-[#0D9488] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-[#152B32]">{item.title}</h3>
                    <p className="text-[11px] text-[#687A80] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-3">
              <Link
                to="/dental/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#115E59] transition-colors shadow-xs"
              >
                <span>Discover Our Clinic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

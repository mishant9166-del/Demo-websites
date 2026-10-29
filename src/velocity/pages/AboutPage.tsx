import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Cpu, Award, ChevronRight, Info } from 'lucide-react';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { velocityConfig } from '../config/site';

const pillars = [
  {
    icon: Award,
    title: 'Curated Pedigree Only',
    desc: 'We reject over 90% of prospective inventory. Only vehicles with immaculate provenance, certified odometer records, and flawless chassis geometry join the roster.'
  },
  {
    icon: Cpu,
    title: 'Electronic & Battery Audits',
    desc: 'For high-voltage electric hyper-saloons and twin-turbo powertrains alike, our technicians verify battery degradation percentages, charging cycles, and ECU calibrations.'
  },
  {
    icon: ShieldCheck,
    title: 'Fixed Transparent Valuation',
    desc: 'Demonstration pricing reflects real-market valuation without hidden dealership documentation surcharges or opaque finance bundling.'
  },
  {
    icon: Sparkles,
    title: 'White-Glove Handover',
    desc: 'Every acquisition includes comprehensive pre-handover detailing, bespoke vehicle orientation, and nationwide climate-controlled enclosed transit.'
  }
];

export function AboutPage() {
  return (
    <div className="py-12 sm:py-16 bg-[#080A0B] text-[#F5F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#A0A7AC] mb-8">
          <Link to="/velocity" className="hover:text-[#C8FF45] transition-colors">
            Showroom
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-[#F5F7F7] font-semibold">
            About Velocity
          </span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C8FF45] font-bold block mb-3">
            OUR PURPOSE & APPROACH
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08]">
            More than a vehicle. <br />
            <span className="text-[#A0A7AC]">A better way to choose.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#A0A7AC] mt-6 leading-relaxed">
            Velocity Automotive is built around a singular premise: the acquisition of a luxury or performance automobile should feel as precise and elevated as the vehicle itself.
          </p>
        </div>

        {/* Editorial Visual Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden border border-white/10 bg-[#171B1E]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80"
              alt="Automotive design precision"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono text-[#C8FF45] uppercase tracking-wider block mb-1">
                Design Integrity
              </span>
              <p className="text-sm font-bold text-white">
                Every vehicle represents mechanical passion and aerodynamic craftsmanship.
              </p>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden border border-white/10 bg-[#171B1E]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80"
              alt="Engineering telemetry testing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono text-[#C8FF45] uppercase tracking-wider block mb-1">
                Engineering Diagnostics
              </span>
              <p className="text-sm font-bold text-white">
                180-point verification protocols across mechanical and digital subsystems.
              </p>
            </div>
          </div>
        </div>

        {/* The 4 Architectural Pillars */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C8FF45] font-bold block mb-2">
              THE PILLARS
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight">
              The principles that govern our collection.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-[#101315] border border-white/10 space-y-4 hover:border-[#C8FF45]/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded bg-[#171B1E] border border-white/10 flex items-center justify-center text-[#C8FF45]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#F5F7F7]">{pillar.title}</h3>
                  <p className="text-xs text-[#A0A7AC] leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Concept Disclaimer Callout Card */}
        <div className="p-6 sm:p-8 rounded-lg bg-[#101315] border border-white/15 mb-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="p-3 rounded-full bg-[#C8FF45]/10 text-[#C8FF45] shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#F5F7F7]">
                Frontend Portfolio Concept Notice
              </h3>
              <p className="text-xs text-[#A0A7AC] mt-1.5 leading-relaxed">
                {velocityConfig.disclaimer} This website demonstrates high-end interactive UI/UX architecture, responsive state management, and cinematic automotive presentation for client acquisition.
              </p>
            </div>
          </div>

          <Link
            to="/velocity/inventory"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#C8FF45] text-[#080A0B] text-xs font-bold uppercase tracking-widest hover:bg-[#b5eb3b] transition-colors shrink-0"
          >
            <span>Explore Inventory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Compass, Clock, Users, ArrowLeft, CheckCircle2, CalendarCheck, Shield } from 'lucide-react';
import { AURELIA_EXPERIENCES } from '../data/experiences';

export const ExperienceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const experience = AURELIA_EXPERIENCES.find((e) => e.slug === slug);

  if (!experience) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#F8F5EF] px-4 text-center">
        <Compass className="w-12 h-12 text-[#173D32] mb-4 stroke-1" />
        <h1 className="text-3xl font-serif text-[#173D32] mb-2">Experience Not Found</h1>
        <p className="text-sm text-[#292B27]/70 mb-6">
          The requested resort experience is not in our active demo collection.
        </p>
        <Link
          to="/aurelia/experiences"
          className="px-6 py-2.5 bg-[#173D32] text-[#F8F5EF] text-xs uppercase tracking-wider font-semibold rounded-xs"
        >
          &larr; Return to All Experiences
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F5EF] min-h-screen">
      {/* Hero Header */}
      <div className="relative min-h-[60vh] flex items-end bg-[#173D32] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={experience.heroImage}
            alt={experience.title}
            className="w-full h-full object-cover filter brightness-[0.72]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#122A22] via-[#173D32]/40 to-black/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <Link
            to="/aurelia/experiences"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#D5BE91] hover:text-white mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Resort Experiences</span>
          </Link>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#D5BE91] mb-2">
            <span className="px-2.5 py-0.5 bg-[#173D32]/80 backdrop-blur-xs rounded-xs border border-[#D5BE91]/30">
              {experience.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F8F5EF] mb-3 max-w-3xl">
            {experience.title}
          </h1>

          <p className="text-base sm:text-lg text-[#F8F5EF]/85 font-light max-w-2xl italic">
            &ldquo;{experience.tagline}&rdquo;
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Highlights Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-white rounded-xs border border-[#D5BE91]/40 shadow-xs">
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#B8B0A2] tracking-wider block mb-1">
                  Duration
                </span>
                <div className="flex items-center gap-1.5 text-[#173D32]">
                  <Clock className="w-4 h-4 text-[#D5BE91]" />
                  <span className="text-sm font-semibold">{experience.duration}</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#B8B0A2] tracking-wider block mb-1">
                  Guest Suitability
                </span>
                <div className="flex items-center gap-1.5 text-[#173D32]">
                  <Users className="w-4 h-4 text-[#D5BE91]" />
                  <span className="text-xs font-medium">{experience.suitableFor}</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#B8B0A2] tracking-wider block mb-1">
                  Location Venue
                </span>
                <div className="flex items-center gap-1.5 text-[#173D32]">
                  <Compass className="w-4 h-4 text-[#D5BE91]" />
                  <span className="text-xs font-medium">{experience.locationNote}</span>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-2xl font-serif text-[#173D32] mb-4">The Experience Journey</h2>
              <p className="text-base text-[#292B27]/80 font-light leading-relaxed mb-6">
                {experience.overview}
              </p>
            </div>

            {/* Inclusions */}
            <div>
              <h3 className="text-xl font-serif text-[#173D32] mb-4">Curated Inclusions</h3>
              <div className="space-y-3">
                {experience.inclusions.map((inc, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white rounded-xs border border-[#D5BE91]/30 flex items-start gap-3 text-xs text-[#292B27]/85"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#173D32] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-4 bg-white rounded-xs border-l-4 border-[#173D32] flex items-start gap-3">
              <Shield className="w-4 h-4 text-[#173D32] shrink-0 mt-0.5" />
              <p className="text-xs text-[#292B27]/70 font-light">
                This experience is a curated demonstration fixture for Aurelia Retreats. Fictional demonstration content for portfolio evaluation.
              </p>
            </div>
          </div>

          {/* Right Column: Enquiry Box */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-xs border border-[#D5BE91]/50 p-6 sm:p-8 shadow-md space-y-6">
              <h3 className="text-lg font-serif text-[#173D32] border-b border-[#D5BE91]/25 pb-3">
                Reserve Experience
              </h3>

              <div className="space-y-3 text-xs text-[#292B27]/75">
                <p>
                  Experiences can be arranged alongside your stay reservation or customized privately by our retreat concierge.
                </p>
                <div className="p-3 bg-[#F8F5EF] rounded-xs space-y-1">
                  <span className="text-[10px] uppercase font-semibold text-[#173D32] block">
                    Concierge Desk
                  </span>
                  <span className="font-mono text-xs text-[#173D32] block">
                    concierge@aureliaretreats.com
                  </span>
                  <span className="text-[11px] text-[#292B27]/60 block">
                    +91 (022) 4780-9900
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <Link
                  to={`/aurelia/booking`}
                  className="w-full py-3 bg-[#173D32] hover:bg-[#122A22] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold text-center block rounded-xs shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <CalendarCheck className="w-3.5 h-3.5 text-[#D5BE91]" />
                  <span>Plan Your Stay</span>
                </Link>

                <Link
                  to={`/aurelia/contact?enquiry=${encodeURIComponent(experience.title)}`}
                  className="w-full py-2.5 bg-[#F8F5EF] hover:bg-[#D5BE91]/20 text-[#173D32] border border-[#D5BE91]/40 text-xs uppercase tracking-wider font-semibold text-center block rounded-xs transition-colors"
                >
                  Submit Activity Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Heart,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  AlertCircle,
  Award,
} from 'lucide-react';
import { VETERINARIANS } from '../data/vets';

export const VetDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const vet = VETERINARIANS.find((v) => v.slug === slug);

  if (!vet) {
    return (
      <div className="py-24 text-center max-w-xl mx-auto px-4 space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#F0D9CA] text-[#C76F52] flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="font-fraunces text-3xl font-bold text-[#343D30]">
          Veterinarian Not Found
        </h1>
        <p className="text-sm text-[#343D30]/80">
          The doctor profile you are seeking is not available.
        </p>
        <Link
          to="/paw-whisker/our-vets"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#C76F52] text-white text-sm font-semibold hover:bg-[#b05d42] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Doctors</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          to="/paw-whisker/our-vets"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#82947A] hover:text-[#343D30] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Veterinarians</span>
        </Link>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl border border-[#E8DFD1] p-6 sm:p-10 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Photo */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-[#F0D9CA]/30 border-2 border-white shadow-md">
              <img
                src={vet.image}
                alt={vet.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Suite Pill */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#343D30]/90 backdrop-blur-sm text-white px-4 py-2 rounded-2xl text-xs flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#82947A] shrink-0" />
              <span>{vet.consultationSuite}</span>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82947A]/15 text-[#343D30] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#C76F52]" />
                <span>{vet.experience} of dedicated companion care</span>
              </div>
              <h1 className="font-fraunces text-3xl sm:text-4xl lg:text-5xl font-bold text-[#343D30]">
                {vet.name}
              </h1>
              <p className="text-base font-semibold text-[#C76F52]">
                {vet.role}
              </p>
            </div>

            {/* Specialties */}
            <div className="flex flex-wrap gap-2">
              {vet.specialties.map((spec) => (
                <span
                  key={spec}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-[#FBF5EA] text-[#343D30] border border-[#E8DFD1]"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* Philosophy quote */}
            <div className="p-4 rounded-2xl bg-[#FBF5EA] border-l-4 border-[#C76F52] text-sm text-[#343D30]/85 italic">
              &ldquo;{vet.philosophy}&rdquo;
            </div>

            {/* Companion at Home */}
            <div className="p-4 rounded-2xl bg-[#F0D9CA]/40 border border-[#E8DFD1] text-xs sm:text-sm text-[#343D30] flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 text-[#C76F52]">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="font-bold">Family companion: </span>
                <span>{vet.companionPet}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to={`/paw-whisker/book-visit?vet=${encodeURIComponent(vet.name)}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#C76F52] text-white text-sm font-bold shadow-sm hover:bg-[#b05d42] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book with {vet.name.split(' ')[1]}</span>
              </Link>
              <Link
                to="/paw-whisker/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-[#343D30] border border-[#E8DFD1] text-sm font-semibold hover:bg-[#F0D9CA]/30 transition-colors"
              >
                <span>Clinic Hours &amp; Location</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Detailed Biography & Handling Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-[#E8DFD1] space-y-4">
              <h2 className="font-fraunces text-2xl font-bold text-[#343D30] flex items-center gap-2">
                <Award className="w-6 h-6 text-[#82947A]" />
                Professional Biography
              </h2>
              <p className="text-sm sm:text-base text-[#343D30]/85 leading-relaxed font-normal">
                {vet.bio}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E8DFD1] space-y-4">
              <h2 className="font-fraunces text-2xl font-bold text-[#343D30] flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#C76F52]" />
                Approach to Animal Handling &amp; Patient Care
              </h2>
              <p className="text-sm sm:text-base text-[#343D30]/85 leading-relaxed font-normal">
                {vet.handlingApproach}
              </p>
            </div>
          </div>

          {/* Right Sidebar: Schedule & Demonstration Note */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FBF5EA] p-6 rounded-3xl border border-[#E8DFD1] space-y-4">
              <h3 className="font-fraunces text-lg font-bold text-[#343D30] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#82947A]" />
                Consultation Schedule
              </h3>
              <p className="text-xs text-[#343D30]/80">
                General consultation hours for {vet.name}:
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-[#E8DFD1]">
                  <span className="font-medium text-[#343D30]">Monday &amp; Tuesday</span>
                  <span className="text-[#82947A]">8:30 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E8DFD1]">
                  <span className="font-medium text-[#343D30]">Thursday &amp; Friday</span>
                  <span className="text-[#82947A]">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="font-medium text-[#343D30]">Alternating Saturdays</span>
                  <span className="text-[#82947A]">8:30 AM – 1:30 PM</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={`/paw-whisker/book-visit?vet=${encodeURIComponent(vet.name)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#343D30] text-white text-xs font-semibold hover:bg-[#232920] transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Specific Doctor</span>
                </Link>
              </div>
            </div>

            {/* Demo disclaimer */}
            <div className="p-4 rounded-2xl bg-white border border-[#E8DFD1] text-xs text-[#343D30]/70 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#C76F52] shrink-0 mt-0.5" />
              <span>
                Demonstration note: This veterinarian profile is fictional and constructed for portfolio demonstration. No real clinical appointments are booked.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

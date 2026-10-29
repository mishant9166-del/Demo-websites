import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  CheckCircle2,
  Cat,
  Dog,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';

export const NewPatientsPage: React.FC = () => {
  const checklist = [
    {
      title: 'Previous Veterinary Records',
      desc: 'Vaccine certificates, past surgeries, and lab results. If you don’t have them on hand, let us know and we will call your previous clinic directly.',
    },
    {
      title: 'Current Medications & Supplements',
      desc: 'Bring the actual bottles or take clear photos of the labels, including flea/tick/heartworm preventatives and any daily vitamins.',
    },
    {
      title: 'High-Value Favorite Treats',
      desc: 'While our clinic is stocked with peanut butter, squeeze-cheese, and chicken bites, your companion might prefer their home favorites.',
    },
    {
      title: 'Secure Leash or Cozy Carrier',
      desc: 'All dogs must be on non-retractable leashes. Cats should arrive in a secure hard carrier with the top unclipped or covered with a familiar towel.',
    },
  ];

  const fearFreeSteps = [
    {
      step: '1',
      title: 'Before You Leave Home',
      desc: 'Leave the carrier open at home days prior with a favorite blanket. For dogs, skip a heavy meal so they are enthusiastic about receiving treats during the appointment.',
    },
    {
      step: '2',
      title: 'Arriving at the Clinic',
      desc: 'We offer separated waiting areas for dogs and cats. If your dog is reactive to other animals, text our front desk and you can walk directly from the car into an exam room.',
    },
    {
      step: '3',
      title: 'In the Examination Room',
      desc: 'Our veterinarian does not rush in. We spend the first 5 minutes chatting with you while your companion explores, sniffs our shoes, and eats treats off a non-slip yoga mat.',
    },
    {
      step: '4',
      title: 'Nose-to-Tail Physical Exam',
      desc: 'We examine eyes, ears, dental surfaces, coat, heart, and joints gently. If your pet expresses fear or distress, we pause, adjust our technique, or take a break.',
    },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <SectionHeading
            badge="Welcome to Our Family"
            badgeVariant="terracotta"
            title="Everything you need for a gentle first veterinary visit."
            subtitle="We know that walking into a new clinic can trigger nervousness for both you and your pet. Here is exactly how we ensure a calm, Fear-Free experience from car to exam room."
          />

          <div className="pt-2">
            <Link
              to="/paw-whisker/book-visit"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#C76F52] text-white text-sm font-bold shadow-sm hover:bg-[#b05d42] transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your First Visit</span>
            </Link>
          </div>
        </div>

        {/* 2 Big Pillars: Dog vs Cat special considerations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Canine Visit */}
          <div className="bg-white rounded-3xl p-8 border border-[#E8DFD1] shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F0D9CA] text-[#C76F52] flex items-center justify-center">
                <Dog className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-fraunces text-2xl font-bold text-[#343D30]">
                  For Canine Companions
                </h3>
                <p className="text-xs text-[#82947A] font-semibold uppercase tracking-wider">
                  Gentle dog handling
                </p>
              </div>
            </div>

            <p className="text-sm text-[#343D30]/85 leading-relaxed">
              We never drag dogs onto cold stainless steel tables. Our canine exam rooms feature thick orthopedic rugs, lick mats with wet food, and doctors who sit right on the floor with them.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#343D30]/80">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#82947A] shrink-0 mt-0.5" />
                <span>Car-to-room check-in for excitable or dog-reactive companions.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#82947A] shrink-0 mt-0.5" />
                <span>Treat-forward exams using hypoallergenic options if needed.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#82947A] shrink-0 mt-0.5" />
                <span>Low-stress weighing on wide, non-skid floor scales.</span>
              </li>
            </ul>
          </div>

          {/* Feline Visit */}
          <div className="bg-white rounded-3xl p-8 border border-[#E8DFD1] shadow-xs space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#82947A]/20 text-[#343D30] flex items-center justify-center">
                <Cat className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-fraunces text-2xl font-bold text-[#343D30]">
                  For Feline Companions
                </h3>
                <p className="text-xs text-[#82947A] font-semibold uppercase tracking-wider">
                  Quiet Cat-Friendly Practice
                </p>
              </div>
            </div>

            <p className="text-sm text-[#343D30]/85 leading-relaxed">
              Cats have completely separate exam rooms away from barking dogs, equipped with synthetic feline facial pheromone diffusers (Feliway) and warm fleece blankets.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#343D30]/80">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#82947A] shrink-0 mt-0.5" />
                <span>Exams conducted inside the carrier base if that feels safer.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#82947A] shrink-0 mt-0.5" />
                <span>Quiet, soft-spoken staff trained in gentle low-stress handling.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#82947A] shrink-0 mt-0.5" />
                <span>Dedicated Tuesday afternoon &ldquo;Cat Hours&rdquo; with no canine patients.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* What to Bring Checklist */}
        <div className="bg-[#FBF5EA] rounded-3xl p-8 sm:p-12 border border-[#E8DFD1] space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C76F52]">
              Checklist
            </span>
            <h3 className="font-fraunces text-3xl font-bold text-[#343D30]">
              What to Bring to Your First Appointment
            </h3>
            <p className="text-sm text-[#343D30]/80">
              Having these ready ensures our team has the full picture of your pet’s health.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {checklist.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E8DFD1] space-y-2"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#82947A]/15 text-[#343D30] flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                  <h4 className="font-fraunces font-bold text-base text-[#343D30]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#343D30]/80 leading-relaxed pl-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Step by Step Fear-Free Walkthrough */}
        <div className="space-y-8">
          <SectionHeading
            badge="The First Visit Flow"
            badgeVariant="sage"
            title="Step-by-step through appointment day."
            subtitle="No surprises, no rush. Here is what your visit looks like from arrival to checkout."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fearFreeSteps.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-3xl p-6 border border-[#E8DFD1] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="font-fraunces text-4xl font-bold text-[#C76F52]">
                    {s.step}
                  </span>
                  <h4 className="font-fraunces text-lg font-bold text-[#343D30]">
                    {s.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#343D30]/80 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="pt-2 text-xs font-semibold text-[#82947A] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C76F52]" />
                  <span>Fear-Free Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Record Transfer Assistance banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#343D30] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h4 className="font-fraunces text-2xl font-bold">
              Want us to request previous records for you?
            </h4>
            <p className="text-xs sm:text-sm text-[#FBF5EA]/80 leading-relaxed">
              When booking your visit, simply provide your previous clinic’s name and town. Our reception concierge will handle the record transfer before you walk through our doors.
            </p>
          </div>
          <Link
            to="/paw-whisker/book-visit"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#C76F52] text-white font-bold text-sm hover:bg-[#b05d42] transition-colors shadow-md"
          >
            <span>Request Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

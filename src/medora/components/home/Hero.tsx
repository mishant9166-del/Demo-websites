import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, UserCheck, Building2, Heart, Sparkles, Activity } from 'lucide-react';

export function Hero() {
  const benefits = [
    {
      title: 'Experienced Specialists',
      desc: 'Expert care across medical fields',
      icon: UserCheck,
    },
    {
      title: 'Modern Medical Facilities',
      desc: 'Advanced diagnostic technology',
      icon: Building2,
    },
    {
      title: 'Patient-Focused Care',
      desc: 'Compassionate, personalized care',
      icon: Heart,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FBFD] via-[#F8FBFD] to-white pt-8 pb-16 sm:pt-12 sm:pb-24 border-b border-[#E1EAF0]">
      {/* Decorative blurred gradient shapes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1769AA]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#18A9A0]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Description & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
          >
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FC] border border-[#1769AA]/15 text-[#1769AA] text-xs font-bold tracking-wider uppercase shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#18A9A0]" />
              <span>COMPASSIONATE CARE · MODERN MEDICINE</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#102B46] leading-[1.12]">
              Advanced Healthcare for a{' '}
              <span className="text-[#18A9A0] relative inline-block">
                Healthier Tomorrow
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2 text-[#18A9A0]/30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#6B7E8E] leading-relaxed max-w-xl">
              Discover comprehensive medical care supported by modern facilities, experienced specialists, and a patient-focused approach.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                to="/medora/appointment"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1769AA] hover:bg-[#125388] text-white text-base font-bold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </Link>

              <Link
                to="/medora/departments"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-[#EAF5FC] text-[#102B46] hover:text-[#1769AA] text-base font-bold border border-[#E1EAF0] shadow-2xs transition-all duration-200"
              >
                <span>Explore Departments</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 Concise Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E1EAF0]/80">
              {benefits.map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF5FC] text-[#1769AA] flex items-center justify-center shrink-0 border border-[#1769AA]/15">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#102B46]">{benefit.title}</h4>
                      <p className="text-[11px] sm:text-xs text-[#6B7E8E] mt-0.5">{benefit.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Hero Visual & Floating Badge (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Rounded Image Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              {/* Doctor consulting with a patient in modern hospital */}
              <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80"
                  alt="Doctor consulting with patient in modern hospital"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102B46]/60 via-transparent to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-2">
                    <Activity className="w-3.5 h-3.5 text-[#18A9A0]" />
                    <span>Quality Care Standards</span>
                  </div>
                  <h3 className="text-lg font-bold text-white drop-shadow-xs">
                    Patient-Centered Clinical Excellence
                  </h3>
                </div>
              </div>
            </div>

            {/* Floating Information Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-[#E1EAF0] flex items-center gap-3.5 max-w-xs z-20"
            >
              <div className="w-12 h-12 rounded-xl bg-[#18A9A0]/10 border border-[#18A9A0]/20 text-[#18A9A0] flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 fill-[#18A9A0]" />
              </div>
              <div className="text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7E8E] block">
                  Trusted Healthcare
                </span>
                <span className="text-sm font-bold text-[#102B46] block leading-tight">
                  Your Health, Our Priority
                </span>
              </div>
            </motion.div>

            {/* Top Right Floating Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-[#E1EAF0] items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#18A9A0] animate-pulse"></span>
              <span className="text-xs font-bold text-[#102B46]">Modern Facilities</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

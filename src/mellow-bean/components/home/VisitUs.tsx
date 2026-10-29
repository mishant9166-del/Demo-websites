import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight, Compass, ShieldAlert } from 'lucide-react';
import { CAFE_CONFIG } from '../../config/cafeConfig';
import { SectionHeading } from '../common/SectionHeading';

export const VisitUs: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#FFFEFA] border-y border-[#EADFCF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hours & Contact Information */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              tagline="Neighbourhood Haven"
              title="Come sit by the sunlit window."
              description="Whether you are reading alone with a flat white or gathering friends for a lazy weekend brunch, our doors are open."
              align="left"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {/* Hours Card */}
              <div className="p-5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF]">
                <div className="flex items-center gap-2.5 text-[#382820] mb-3">
                  <Clock className="w-5 h-5 text-[#B77A4A]" />
                  <h4 className="font-serif font-bold text-base">Opening Hours</h4>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-[#382820]/80">
                  <div className="flex justify-between border-b border-[#EADFCF]/60 pb-1.5">
                    <span className="font-medium">Mon – Fri</span>
                    <span>7:30 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-[#EADFCF]/60 pb-1.5">
                    <span className="font-medium">Saturday</span>
                    <span>8:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>8:00 AM – 10:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF]">
                <div className="flex items-center gap-2.5 text-[#382820] mb-3">
                  <MapPin className="w-5 h-5 text-[#B77A4A]" />
                  <h4 className="font-serif font-bold text-base">Our Address</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#382820]/80 leading-relaxed">
                  {CAFE_CONFIG.address.street}
                  <br />
                  {CAFE_CONFIG.address.locality}
                  <br />
                  {CAFE_CONFIG.address.city}, {CAFE_CONFIG.address.postalCode}
                </p>
                <div className="mt-3 pt-3 border-t border-[#EADFCF]/60 flex items-center gap-2 text-xs text-[#777B5A] font-medium">
                  <Compass className="w-3.5 h-3.5" />
                  <span>5 mins from 100ft Road Metro</span>
                </div>
              </div>
            </div>

            {/* Contact details & Demo disclaimer */}
            <div className="p-4 rounded-2xl bg-[#F0D27A]/20 border border-[#F0D27A]/40 flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-[#B77A4A] shrink-0 mt-0.5" />
              <p className="text-xs text-[#382820]/80 leading-relaxed">
                <strong className="text-[#382820]">Fictional Demo Notice:</strong> MELLOW & BEAN is a showcase brand concept. The address and phone numbers are fictional placeholders. No live transactions or real table bookings occur.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/mellow-bean/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#382820] text-[#FFFEFA] hover:bg-[#382820]/90 transition-all font-medium text-sm shadow-md group"
              >
                <span>Get Directions & Inquiries</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/mellow-bean/reservations"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F0D27A] text-[#382820] hover:bg-[#F0D27A]/90 transition-all font-medium text-sm shadow-md"
              >
                <span>Book a Table</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Stylized Illustrated Map Graphic */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#EADFCF] shadow-lg bg-[#F8F2E7] p-8 text-center space-y-6">
              {/* Map Illustration Frame */}
              <div className="w-full h-72 sm:h-80 rounded-2xl bg-[#EFE7D8] border border-[#EADFCF] relative overflow-hidden flex flex-col items-center justify-center p-6">
                {/* Decorative Map Grid Lines */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#382820_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Stylized street lines */}
                <div className="absolute w-full h-3 bg-[#EADFCF] top-1/3 -rotate-3" />
                <div className="absolute h-full w-3 bg-[#EADFCF] left-1/2 rotate-6" />

                {/* Central pin marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#382820] text-[#F0D27A] flex items-center justify-center shadow-xl border-4 border-[#FFFEFA] animate-bounce">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div className="mt-3 bg-[#FFFEFA] px-4 py-2 rounded-xl shadow-md border border-[#EADFCF] text-center">
                    <p className="font-serif font-bold text-sm text-[#382820]">
                      MELLOW & BEAN
                    </p>
                    <p className="text-[11px] text-[#777B5A]">Indiranagar, Bengaluru</p>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[11px] text-[#382820]/60">
                  <span>Demo Map Projection</span>
                  <span className="font-mono">12.9716° N, 77.6412° E</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs text-[#382820]/80">
                <div className="p-2.5 rounded-xl bg-[#FFFEFA] border border-[#EADFCF]">
                  <span className="font-bold block text-sm text-[#382820]">Wi-Fi</span>
                  High-Speed Fibre
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFFEFA] border border-[#EADFCF]">
                  <span className="font-bold block text-sm text-[#382820]">Pups</span>
                  100% Pet Friendly
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFFEFA] border border-[#EADFCF]">
                  <span className="font-bold block text-sm text-[#382820]">Valet</span>
                  Weekend Assistance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

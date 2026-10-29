import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const messages = [
    'Complimentary standard delivery on all orders over ₹2,499 across India',
    'Thoughtfully selected. Made for everyday life.',
    'New Season Arrivals — Use code WELCOME10 for 10% off your first order',
    'Simulated e-commerce demo — Explore 26 curated design objects',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [messages.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  return (
    <div className="bg-[#2447E8] text-white text-[11px] font-sans font-medium tracking-wider uppercase py-2 px-4 relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous announcement"
          className="p-1 hover:text-[#FF704F] transition-colors hidden sm:block opacity-75 hover:opacity-100"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        <div className="flex-1 text-center overflow-hidden h-4 flex items-center justify-center">
          <span
            key={currentIndex}
            className="transition-all duration-500 ease-out inline-block animate-fadeIn"
          >
            {messages[currentIndex]}
          </span>
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next announcement"
          className="p-1 hover:text-[#FF704F] transition-colors hidden sm:block opacity-75 hover:opacity-100"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

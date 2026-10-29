import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import EyewearCard from '../eyewear/EyewearCard';
import { eyewearCollection } from '../../data/eyewear';
import type { EyewearCategory } from '../../types/visora';

const CATEGORIES: ('All' | EyewearCategory)[] = [
  'All',
  'Lightweight Titanium',
  'Acetate Classics',
  'Optical Frames',
  'Sunglasses',
];

export function CuratedEyewear() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | EyewearCategory>('All');

  const displayedFrames = useMemo(() => {
    if (selectedCategory === 'All') {
      return eyewearCollection.slice(0, 4);
    }
    return eyewearCollection
      .filter((item) => item.category === selectedCategory)
      .slice(0, 4);
  }, [selectedCategory]);

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-[#E4E4DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="CURATED EYEWEAR STORE"
            title="Sculpted Frames with"
            italicWord="Lasting Character."
            subtitle="Precision-crafted optical silhouettes in featherweight Japanese titanium and cured Italian organic bio-acetate. Designed for all-day comfort and bespoke lens glazing."
          />

          <Link
            to="/visora/eyewear"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-all self-start md:self-auto shrink-0 shadow-xs"
          >
            <span>View Full Collection</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <span className="text-xs font-medium text-[#687581] mr-2 flex items-center gap-1.5 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#5C9995]" />
            Filter Atelier:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#15263B] text-white shadow-xs font-semibold'
                  : 'bg-[#F7F5EF] text-[#687581] hover:text-[#15263B] hover:bg-[#E4E4DE] border border-[#E4E4DE]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {displayedFrames.map((frame) => (
            <EyewearCard key={frame.id} item={frame} />
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 rounded-3xl bg-[#F7F5EF] border border-[#E4E4DE] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#15263B] text-center sm:text-left leading-relaxed">
            <span className="font-semibold">Interested in in-studio frame styling?</span>{' '}
            Our dispensing opticians provide custom facial bridge measurements and bespoke lens recommendations during private styling appointments.
          </p>
          <Link
            to="/visora/book-appointment"
            className="shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors"
          >
            Reserve Atelier Styling
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CuratedEyewear;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { STORE_CATEGORIES } from '../../data/categories';

export const CategoryTiles: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F7F4] border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase font-bold text-[#2447E8] tracking-widest block mb-2 font-mono">
              The Department Directory
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#252525]">
              Explore by Category
            </h2>
          </div>

          <Link
            to="/object/shop"
            className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#2447E8] hover:text-[#1D3BC5] transition-colors"
          >
            <span>All 26 Objects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Category Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STORE_CATEGORIES.map((cat, idx) => (
            <Link
              key={cat.slug}
              to={`/object/category/${cat.slug}`}
              className="group relative block aspect-4/3 bg-[#FFFFFF] border border-[#E5E5E0] hover:border-[#2447E8] overflow-hidden rounded-xs transition-all shadow-xs hover:shadow-lg"
            >
              <img
                src={cat.heroImage}
                alt={cat.name}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.88] group-hover:brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

              <span className="absolute top-4 left-4 bg-white/90 text-[#252525] text-[10px] uppercase font-mono font-bold tracking-widest px-2.5 py-1 rounded-xs">
                0{idx + 1}
              </span>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#FF704F] font-bold block mb-1">
                  {cat.itemCount} Curated Pieces
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1 group-hover:text-[#FFFFFF] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-white/80 line-clamp-1 font-light">
                  {cat.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

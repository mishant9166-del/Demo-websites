import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { STORE_PRODUCTS } from '../../data/products';
import { ProductCard } from '../products/ProductCard';

export const FeaturedCollection: React.FC = () => {
  const featured = STORE_PRODUCTS.filter((p) => p.featured || p.isBestSeller).slice(0, 4);

  return (
    <section className="py-24 bg-[#2447E8] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#FF704F] mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Studio Signature Icons</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Design for the long term.
            </h2>
            <p className="mt-4 text-base text-white/80 font-light leading-relaxed">
              Objects engineered to outlast disposable seasons. Tested in daily use and refined with uncompromising material honesty.
            </p>
          </div>

          <Link
            to="/object/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2447E8] hover:bg-[#F7F7F4] text-xs uppercase tracking-widest font-bold rounded-xs shadow-md transition-all self-start md:self-end group"
          >
            <span>View Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((prod) => (
            <div key={prod.id} className="text-[#252525]">
              <ProductCard product={prod} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

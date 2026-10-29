import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { STORE_PRODUCTS } from '../../data/products';
import { ProductCard } from '../products/ProductCard';

export const BestSellers: React.FC = () => {
  const bestSellers = STORE_PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase font-bold text-[#FF704F] tracking-widest block mb-2 font-mono">
              Most Coveted Pieces
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#252525]">
              Best Sellers
            </h2>
          </div>

          <Link
            to="/object/shop?sort=rating"
            className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#2447E8] hover:text-[#1D3BC5] transition-colors"
          >
            <span>Top Rated & Coveted</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestSellers.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </section>
  );
};

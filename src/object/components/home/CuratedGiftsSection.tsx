import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, ArrowRight } from 'lucide-react';
import { STORE_PRODUCTS } from '../../data/products';
import { ProductCard } from '../products/ProductCard';

export const CuratedGiftsSection: React.FC = () => {
  const gifts = STORE_PRODUCTS.filter((p) => p.category === 'gifts').slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#FF704F] tracking-widest mb-2 font-mono">
              <Gift className="w-3.5 h-3.5" />
              <span>Thoughtful Giving</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#252525]">
              Curated Gift Objects
            </h2>
            <p className="text-xs sm:text-sm text-[#777872] mt-1 font-light max-w-lg">
              Enduring keepsakes boxed in solid paulownia wood and tied with raw cotton twill ribbon.
            </p>
          </div>

          <Link
            to="/object/category/gifts"
            className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#2447E8] hover:text-[#1D3BC5] transition-colors"
          >
            <span>Explore All Gifts</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {gifts.map((gift) => (
            <ProductCard key={gift.id} product={gift} />
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HeroBanner } from '../components/home/HeroBanner';
import { CategoryTiles } from '../components/home/CategoryTiles';
import { FeaturedCollection } from '../components/home/FeaturedCollection';
import { BestSellers } from '../components/home/BestSellers';
import { EditorialStory } from '../components/home/EditorialStory';
import { CuratedGiftsSection } from '../components/home/CuratedGiftsSection';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { STORE_PRODUCTS } from '../data/products';
import { ProductCard } from '../components/products/ProductCard';

export const HomePage: React.FC = () => {
  const newArrivals = STORE_PRODUCTS.filter((p) => p.isNew).slice(0, 4);

  return (
    <div className="bg-[#F7F7F4]">
      {/* 1. Hero Lifestyle Section */}
      <HeroBanner />

      {/* 2. New Arrivals Grid */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#2447E8] tracking-widest mb-2 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Just Landed in the Studio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#252525]">
                New Arrivals
              </h2>
            </div>

            <Link
              to="/object/shop?filter=new"
              className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#2447E8] hover:text-[#1D3BC5] transition-colors"
            >
              <span>Explore All New Arrivals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Category Discovery Tiles */}
      <CategoryTiles />

      {/* 4. Signature Icons (Cobalt Blue Featured Collection) */}
      <FeaturedCollection />

      {/* 5. Best Sellers Grid */}
      <BestSellers />

      {/* 6. Editorial Story: "Objects for a Better Everyday" */}
      <EditorialStory />

      {/* 7. Curated Gift Objects */}
      <CuratedGiftsSection />

      {/* 8. Verified Customer Reviews */}
      <ReviewsSection />
    </div>
  );
};

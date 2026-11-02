import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { HeroBanner } from '../components/home/HeroBanner';
import { CategoryTiles } from '../components/home/CategoryTiles';
import { FeaturedCollection } from '../components/home/FeaturedCollection';
import { BestSellers } from '../components/home/BestSellers';
import { EditorialStory } from '../components/home/EditorialStory';
import { CuratedGiftsSection } from '../components/home/CuratedGiftsSection';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { STORE_PRODUCTS } from '../data/products';
import { ProductCard } from '../components/products/ProductCard';
import type { ProductItem } from '../types/product';

export const HomePage: React.FC = () => {
  // Curate 8 diverse, striking products across categories for the New Arrivals carousel
  const newArrivals: ProductItem[] = [
    // 1. Tech sleeve
    STORE_PRODUCTS.find((p) => p.id === 'prod-grid-laptop-sleeve')!,
    // 2. Portable light
    STORE_PRODUCTS.find((p) => p.id === 'prod-soft-glow-table-light')!,
    // 3. Brass rollerball
    STORE_PRODUCTS.find((p) => p.id === 'prod-mechanical-brass-pen')!,
    // 4. Ceramic espresso cups
    STORE_PRODUCTS.find((p) => p.id === 'prod-stoneware-espresso-cups')!,
    // 5. Pebble lamp icon
    STORE_PRODUCTS.find((p) => p.id === 'prod-pebble-ceramic-lamp')!,
    // 6. Arc everyday tote
    STORE_PRODUCTS.find((p) => p.id === 'prod-arc-everyday-tote')!,
    // 7. Cast brass incense hearth
    STORE_PRODUCTS.find((p) => p.id === 'prod-sculptural-incense-burner')!,
    // 8. Flight ergonomic pillow
    STORE_PRODUCTS.find((p) => p.id === 'prod-memory-foam-neck-pillow')!,
  ].filter(Boolean);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(12);
  const [currentIndex, setCurrentIndex] = useState(1);

  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(progress);

    // Calculate approximate active card index (1-based)
    const cardWidth = 320;
    const index = Math.min(
      newArrivals.length,
      Math.max(1, Math.round(scrollLeft / cardWidth) + 1)
    );
    setCurrentIndex(index);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 340; // width of card + gap
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const getConceptTag = (product: ProductItem): string => {
    switch (product.id) {
      case 'prod-grid-laptop-sleeve':
        return 'TECH ACCESSORY';
      case 'prod-soft-glow-table-light':
        return 'CORDLESS LIGHT';
      case 'prod-mechanical-brass-pen':
        return 'PRECISION BRASS';
      case 'prod-stoneware-espresso-cups':
        return 'ARTISAN CERAMIC';
      case 'prod-pebble-ceramic-lamp':
        return 'STUDIO ICON';
      case 'prod-arc-everyday-tote':
        return 'WAXED CANVAS';
      case 'prod-sculptural-incense-burner':
        return 'CAST BRASS';
      case 'prod-memory-foam-neck-pillow':
        return 'TRAVEL MOBILITY';
      default:
        return product.isNew ? 'NEW RELEASE' : 'STUDIO EDITION';
    }
  };

  return (
    <div className="bg-[#F7F7F4]">
      {/* 1. Hero Lifestyle Section */}
      <HeroBanner />

      {/* 2. New Arrivals Carousel with Complete Left-Right Scroll */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-b border-[#E5E5E0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#2447E8] tracking-widest mb-2 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Just Landed in the Studio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#252525]">
                New Arrivals
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#777872] font-light max-w-xl">
                Minimalist objects engineered for enduring utility. Slide horizontally to explore each newly crafted release.
              </p>
            </div>

            {/* Navigation Controls: Explore Link & Circular Arrows */}
            <div className="flex items-center gap-4 self-start md:self-end">
              <Link
                to="/object/shop?filter=new"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#2447E8] hover:text-[#1D3BC5] transition-colors font-mono mr-2"
              >
                <span>Explore All ({STORE_PRODUCTS.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleScroll('left')}
                  disabled={!canScrollLeft}
                  className="w-11 h-11 rounded-full border border-[#E5E5E0] bg-white text-[#252525] hover:bg-[#2447E8] hover:border-[#2447E8] hover:text-white shadow-xs flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none active:scale-90"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll('right')}
                  disabled={!canScrollRight}
                  className="w-11 h-11 rounded-full border border-[#E5E5E0] bg-white text-[#252525] hover:bg-[#2447E8] hover:border-[#2447E8] hover:text-white shadow-xs flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none active:scale-90"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Horizontal Scroll Container */}
          <div
            ref={carouselRef}
            onScroll={updateScrollState}
            className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {newArrivals.map((prod) => (
              <div
                key={prod.id}
                className="w-[280px] sm:w-[310px] md:w-[330px] shrink-0 snap-start"
              >
                <ProductCard product={prod} badgeLabel={getConceptTag(prod)} />
              </div>
            ))}
          </div>

          {/* Bottom Progress Bar & Tracking Indicator */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#F0F0EB]">
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
              <div className="w-36 sm:w-56 h-1.5 bg-[#EAEAE6] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#2447E8] rounded-full transition-all duration-300"
                  style={{ width: `${Math.max(15, scrollProgress)}%` }}
                />
              </div>
              <span className="text-xs font-mono text-[#777872] tracking-wider font-semibold">
                Object {currentIndex} of {newArrivals.length}
              </span>
            </div>

            <div className="flex items-center justify-between w-full sm:w-auto gap-4">
              <span className="text-xs text-[#777872] font-mono flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#2447E8]/60 animate-ping" />
                <span>Swipe left / right or click arrows</span>
              </span>

              <Link
                to="/object/shop?filter=new"
                className="sm:hidden inline-flex items-center gap-1 text-xs uppercase font-bold text-[#2447E8] font-mono"
              >
                <span>View All</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
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

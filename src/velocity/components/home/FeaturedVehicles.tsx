import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { vehicles } from '../../data/vehicles';
import { VehicleCard } from '../vehicles/VehicleCard';
import type { VehicleCategory } from '../../types/vehicle';

const categoryTabs: ('All' | VehicleCategory)[] = [
  'All',
  'Sports Car',
  'Luxury SUV',
  'Electric',
  'Performance Sedan',
  'Grand Tourer'
];

export function FeaturedVehicles() {
  const [activeTab, setActiveTab] = useState<'All' | VehicleCategory>('All');

  // Filter 6 vehicles for the homepage collection
  const featuredList = useMemo(() => {
    let pool = vehicles;
    if (activeTab !== 'All') {
      pool = pool.filter((v) => v.category === activeTab);
    }
    return pool.slice(0, 6);
  }, [activeTab]);

  return (
    <section className="py-24 bg-[#080A0B] text-[#F5F7F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C8FF45] font-bold block mb-3">
              THE COLLECTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.12]">
              Exceptional vehicles. <br />
              <span className="text-[#A0A7AC]">Selected for you.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A0A7AC] mt-4 leading-relaxed font-normal">
              Explore vehicles chosen for their design, capability, comfort, and performance.
            </p>
          </div>

          <Link
            to="/velocity/inventory"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8FF45] hover:text-white transition-colors group self-start md:self-end"
          >
            <span>View Full Inventory ({vehicles.length})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Tabs Strip (Inspired by User's Reference Image 1) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categoryTabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-[#080A0B]'
                    : 'text-[#A0A7AC] hover:text-[#F5F7F7] bg-[#101315] border border-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFeaturedTab"
                    className="absolute inset-0 bg-[#C8FF45] rounded-sm -z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Vehicle Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {featuredList.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} viewMode="grid" />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA to Inventory */}
        <div className="text-center mt-16">
          <Link
            to="/velocity/inventory"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-sm bg-[#171B1E] border border-white/20 text-xs font-bold uppercase tracking-widest text-[#F5F7F7] hover:bg-[#C8FF45] hover:text-[#080A0B] hover:border-[#C8FF45] transition-all duration-300"
          >
            <span>Browse Complete Showroom Roster</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

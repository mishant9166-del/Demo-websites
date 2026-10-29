import { Link } from 'react-router-dom';
import { Scale, Sparkles, ChevronRight } from 'lucide-react';
import { useComparison } from '../hooks/useComparison';
import { vehicles } from '../data/vehicles';
import { ComparisonMatrix } from '../components/vehicles/ComparisonMatrix';
import { EmptyState } from '../components/common/EmptyState';

export function ComparePage() {
  const { compareIds, removeFromComparison, toggleComparison, clearComparison } = useComparison();

  const selectedVehicles = vehicles.filter((v) => compareIds.includes(v.id));

  // Quick helper to pre-fill comparison for instant demonstration
  const handleAddSamplePair = () => {
    // Add Porsche 911 GT3 RS and Audi RS e-tron GT or Mercedes-AMG GT R Pro
    const sampleIds = ['veh-01', 'veh-03'];
    clearComparison();
    sampleIds.forEach((id) => toggleComparison(id));
  };

  return (
    <div className="py-12 sm:py-16 bg-[#080A0B] text-[#F5F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#A0A7AC] mb-8">
          <Link to="/velocity" className="hover:text-[#C8FF45] transition-colors">
            Showroom
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-[#F5F7F7] font-semibold">
            Vehicle Comparison
          </span>
        </nav>

        {/* Comparison Header */}
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C8FF45] font-bold block mb-2">
            TECHNICAL COMPARISON
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Compare side by side.
          </h1>
          <p className="text-sm sm:text-base text-[#A0A7AC] mt-3 leading-relaxed">
            Evaluate engineering benchmarks, powertrains, acceleration, and luxury specifications across up to three selected vehicles.
          </p>
        </div>

        {/* Content Matrix or Empty State */}
        {selectedVehicles.length === 0 ? (
          <div className="space-y-6">
            <EmptyState
              icon={Scale}
              title="No vehicles currently selected for comparison"
              description="Browse the inventory and click the scale/compare icon on any vehicle card, or load a curated comparison pair below."
              actionLabel="Explore Inventory"
              actionHref="/velocity/inventory"
            />

            {/* Quick Demo Assist Button */}
            <div className="text-center">
              <button
                onClick={handleAddSamplePair}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#171B1E] border border-white/15 text-xs font-bold uppercase tracking-wider text-[#C8FF45] hover:bg-[#C8FF45] hover:text-[#080A0B] transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Load Sample Comparison (Porsche vs Mercedes-AMG)</span>
              </button>
            </div>
          </div>
        ) : selectedVehicles.length === 1 ? (
          <div className="space-y-8">
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-between gap-4">
              <span>You have selected 1 vehicle. Select at least one more vehicle to conduct a side-by-side comparison.</span>
              <Link
                to="/velocity/inventory"
                className="underline font-bold text-[#F5F7F7] shrink-0"
              >
                Browse Inventory
              </Link>
            </div>

            <ComparisonMatrix
              selectedVehicles={selectedVehicles}
              onRemove={removeFromComparison}
              onAdd={toggleComparison}
              onClear={clearComparison}
            />
          </div>
        ) : (
          <ComparisonMatrix
            selectedVehicles={selectedVehicles}
            onRemove={removeFromComparison}
            onAdd={toggleComparison}
            onClear={clearComparison}
          />
        )}
      </div>
    </div>
  );
}

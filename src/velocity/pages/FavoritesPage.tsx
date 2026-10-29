import { Link } from 'react-router-dom';
import { Heart, Trash2, ChevronRight } from 'lucide-react';
import { useFavorites } from '../hooks/useFavorites';
import { vehicles } from '../data/vehicles';
import { VehicleGrid } from '../components/vehicles/VehicleGrid';
import { EmptyState } from '../components/common/EmptyState';

export function FavoritesPage() {
  const { favorites, clearFavorites } = useFavorites();

  const savedVehicles = vehicles.filter((v) => favorites.includes(v.id));

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
            Saved Vehicles
          </span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C8FF45] font-bold block mb-2">
              YOUR SAVED GARAGE
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Saved Vehicles ({savedVehicles.length})
            </h1>
            <p className="text-sm sm:text-base text-[#A0A7AC] mt-3 leading-relaxed">
              Review saved vehicles, evaluate technical specifications, or compare candidates side by side.
            </p>
          </div>

          {savedVehicles.length > 0 && (
            <button
              onClick={clearFavorites}
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#171B1E] border border-white/10 text-xs font-semibold text-[#A0A7AC] hover:text-rose-400 hover:border-rose-500/30 transition-colors self-start sm:self-end cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All Saved</span>
            </button>
          )}
        </div>

        {/* Grid or Empty State */}
        {savedVehicles.length === 0 ? (
          <EmptyState
            icon={Heart}
            title="You haven't saved any vehicles yet"
            description="Click the heart icon on any vehicle card in the collection to bookmark it here for quick access."
            actionLabel="Discover The Collection"
            actionHref="/velocity/inventory"
          />
        ) : (
          <VehicleGrid vehicles={savedVehicles} viewMode="grid" />
        )}
      </div>
    </div>
  );
}

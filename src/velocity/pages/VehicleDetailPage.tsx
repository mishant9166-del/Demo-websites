import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Scale, Heart, Sparkles } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import { formatINR } from '../lib/formatters';
import { Badge } from '../components/common/Badge';
import { VehicleGallery } from '../components/vehicles/VehicleGallery';
import { VehicleSpecs } from '../components/vehicles/VehicleSpecs';
import { VehicleInquiryForm } from '../components/vehicles/VehicleInquiryForm';
import { VehicleCard } from '../components/vehicles/VehicleCard';
import { useFavorites } from '../hooks/useFavorites';
import { useComparison } from '../hooks/useComparison';
import { NotFoundPage } from './NotFoundPage';

export function VehicleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const vehicle = vehicles.find((v) => v.slug === slug);

  const { isFavorite, toggleFavorite } = useFavorites();
  const { isInComparison, toggleComparison } = useComparison();

  if (!vehicle) {
    return <NotFoundPage />;
  }

  const favorited = isFavorite(vehicle.id);
  const compared = isInComparison(vehicle.id);

  // Find 3 similar vehicles in the same category (or other featured vehicles)
  const similarVehicles = vehicles
    .filter((v) => v.id !== vehicle.id && (v.category === vehicle.category || v.featured))
    .slice(0, 3);

  return (
    <div className="py-10 sm:py-16 bg-[#080A0B] text-[#F5F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#A0A7AC] mb-8">
          <Link to="/velocity" className="hover:text-[#C8FF45] transition-colors">
            Showroom
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <Link to="/velocity/inventory" className="hover:text-[#C8FF45] transition-colors">
            The Collection
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-[#F5F7F7] font-semibold truncate max-w-xs">
            {vehicle.make} {vehicle.model}
          </span>
        </nav>

        {/* Vehicle Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge variant="lime">{vehicle.category}</Badge>
              <Badge variant="dark">{vehicle.condition}</Badge>
              <Badge variant="outline">{vehicle.year} Edition</Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {vehicle.make} {vehicle.model}
            </h1>
            <p className="text-sm sm:text-base text-[#A0A7AC] mt-2 font-normal max-w-2xl">
              {vehicle.tagline || vehicle.shortOverview}
            </p>
          </div>

          {/* Pricing & Quick Header Actions */}
          <div className="flex flex-col sm:flex-row sm:items-end lg:flex-col lg:items-end gap-4 shrink-0">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A0A7AC] block text-left sm:text-right">
                Illustrative Acquisition Offer
              </span>
              <div className="text-2xl sm:text-4xl font-extrabold text-[#F5F7F7] text-left sm:text-right">
                {formatINR(vehicle.price)}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleComparison(vehicle.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  compared
                    ? 'bg-[#C8FF45] text-[#080A0B]'
                    : 'bg-[#171B1E] text-[#A0A7AC] hover:text-white border border-white/10'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>{compared ? 'In Comparison' : 'Add to Compare'}</span>
              </button>

              <button
                onClick={() => toggleFavorite(vehicle.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  favorited
                    ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                    : 'bg-[#171B1E] text-[#A0A7AC] hover:text-white border border-white/10'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${favorited ? 'fill-current' : ''}`} />
                <span>{favorited ? 'Saved' : 'Save'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gallery & Sidebar Inquiry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          {/* Main Gallery Area */}
          <div className="lg:col-span-8">
            <VehicleGallery
              images={vehicle.images}
              vehicleId={vehicle.id}
              vehicleName={`${vehicle.make} ${vehicle.model}`}
            />

            {/* Vehicle Narrative Description */}
            <div className="mt-12 space-y-4">
              <h2 className="text-xl font-bold tracking-tight text-[#F5F7F7]">
                Curator's Overview
              </h2>
              <p className="text-sm sm:text-base text-[#A0A7AC] leading-relaxed font-normal">
                {vehicle.description}
              </p>
            </div>

            {/* Specifications & Equipment Checklist */}
            <div className="mt-12">
              <VehicleSpecs vehicle={vehicle} />
            </div>
          </div>

          {/* Sticky Inquiry Sidebar (Inspired by Reference Image 2) */}
          <div className="lg:col-span-4 sticky top-24 space-y-6">
            <VehicleInquiryForm vehicle={vehicle} />

            {/* Inspection Guarantee Card */}
            <div className="p-5 rounded-lg bg-[#101315] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C8FF45] font-bold">
                <Sparkles className="w-4 h-4" />
                <span>The Velocity Guarantee</span>
              </div>
              <p className="text-xs text-[#A0A7AC] leading-relaxed">
                Includes full vehicle digital inspection log, battery health telemetry (for electric drivetrains), independent paint thickness metering, and certified clear title history.
              </p>
            </div>
          </div>
        </div>

        {/* Similar Vehicles Recommendation Strip */}
        {similarVehicles.length > 0 && (
          <div className="pt-16 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C8FF45] block">
                  RECOMMENDED
                </span>
                <h3 className="text-2xl font-bold text-[#F5F7F7] mt-1">
                  Similar Exceptional Vehicles
                </h3>
              </div>

              <Link
                to="/velocity/inventory"
                className="text-xs font-bold uppercase tracking-wider text-[#C8FF45] hover:underline"
              >
                View all inventory →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarVehicles.map((similar) => (
                <VehicleCard key={similar.id} vehicle={similar} viewMode="grid" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

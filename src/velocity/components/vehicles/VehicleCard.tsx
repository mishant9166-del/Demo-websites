import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Scale, ArrowRight, Gauge, Fuel, Cog, Image as ImageIcon } from 'lucide-react';
import type { Vehicle } from '../../types/vehicle';
import { formatINR, formatCompactINR, formatMileage } from '../../lib/formatters';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { Badge } from '../common/Badge';
import { useFavorites } from '../../hooks/useFavorites';
import { useComparison } from '../../hooks/useComparison';

interface VehicleCardProps {
  vehicle: Vehicle;
  viewMode?: 'grid' | 'list';
}

export function VehicleCard({ vehicle, viewMode = 'grid' }: VehicleCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isInComparison, toggleComparison } = useComparison();

  const favorited = isFavorite(vehicle.id);
  const compared = isInComparison(vehicle.id);

  if (viewMode === 'list') {
    return (
      <motion.article
        layout
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98 }}
        className="group bg-[#101315] border border-white/10 rounded-lg overflow-hidden hover:border-[#C8FF45]/40 transition-all duration-300 flex flex-col md:flex-row shadow-lg hover:shadow-black/50"
      >
        {/* Image Area */}
        <div className="relative md:w-80 h-56 md:h-auto shrink-0 overflow-hidden bg-[#171B1E]">
          <Link to={`/velocity/vehicle/${vehicle.slug}`} className="block w-full h-full">
            <ImageWithFallback
              src={vehicle.images[0]}
              alt={`${vehicle.make} ${vehicle.model}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
            <Badge variant="lime">{vehicle.category}</Badge>
            <Badge variant="dark">{vehicle.year}</Badge>
          </div>

          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px] text-white/90 font-mono z-10">
            <ImageIcon className="w-3 h-3 text-[#C8FF45]" />
            <span>{vehicle.images.length} Photos</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#A0A7AC] uppercase block">
                  {vehicle.make}
                </span>
                <Link to={`/velocity/vehicle/${vehicle.slug}`}>
                  <h3 className="text-xl font-bold text-[#F5F7F7] group-hover:text-[#C8FF45] transition-colors leading-tight">
                    {vehicle.model}
                  </h3>
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => toggleComparison(vehicle.id)}
                  className={`p-2 rounded-full border transition-all cursor-pointer ${
                    compared
                      ? 'bg-[#C8FF45] border-[#C8FF45] text-[#080A0B]'
                      : 'bg-[#171B1E] border-white/10 text-[#A0A7AC] hover:text-white hover:border-white/30'
                  }`}
                  title={compared ? 'Remove from comparison' : 'Add to comparison'}
                  aria-label={`Compare ${vehicle.model}`}
                >
                  <Scale className="w-4 h-4" />
                </button>

                <button
                  onClick={() => toggleFavorite(vehicle.id)}
                  className={`p-2 rounded-full border transition-all cursor-pointer ${
                    favorited
                      ? 'bg-rose-500/20 border-rose-500/40 text-rose-400'
                      : 'bg-[#171B1E] border-white/10 text-[#A0A7AC] hover:text-rose-400 hover:border-rose-500/30'
                  }`}
                  title={favorited ? 'Remove from favorites' : 'Add to favorites'}
                  aria-label={`Favorite ${vehicle.model}`}
                >
                  <Heart className={`w-4 h-4 ${favorited ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            <p className="text-xs text-[#A0A7AC] line-clamp-2 mb-4 leading-relaxed">
              {vehicle.description}
            </p>

            {/* Spec Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 border-y border-white/5 text-xs text-[#A0A7AC]">
              <div className="flex items-center gap-2">
                <Gauge className="w-3.5 h-3.5 text-[#C8FF45]" />
                <span>{vehicle.horsepower} BHP</span>
              </div>
              <div className="flex items-center gap-2">
                <Fuel className="w-3.5 h-3.5 text-[#C8FF45]" />
                <span>{vehicle.fuelType}</span>
              </div>
              <div className="flex items-center gap-2">
                <Cog className="w-3.5 h-3.5 text-[#C8FF45]" />
                <span className="truncate">{vehicle.transmission.split(' ')[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C8FF45] font-mono text-[10px]">KM</span>
                <span>{formatMileage(vehicle.mileage)}</span>
              </div>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="flex items-center justify-between pt-4 mt-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#A0A7AC] block">
                Starting Offer
              </span>
              <div className="text-xl font-bold text-[#F5F7F7]">
                {formatINR(vehicle.price)}
              </div>
            </div>

            <Link
              to={`/velocity/vehicle/${vehicle.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#171B1E] border border-white/15 text-xs font-bold text-[#F5F7F7] uppercase tracking-wider group-hover:bg-[#C8FF45] group-hover:text-[#080A0B] group-hover:border-[#C8FF45] transition-all"
            >
              <span>Explore</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.article>
    );
  }

  // Grid View Mode
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="group bg-[#101315] border border-white/10 rounded-lg overflow-hidden flex flex-col h-full hover:border-[#C8FF45]/50 transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
    >
      {/* Top Media Area */}
      <div className="relative h-56 w-full bg-[#171B1E] overflow-hidden">
        <Link to={`/velocity/vehicle/${vehicle.slug}`} className="block w-full h-full">
          <ImageWithFallback
            src={vehicle.images[0]}
            alt={`${vehicle.make} ${vehicle.model}`}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
        </Link>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101315] via-transparent to-black/40 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10 pointer-events-none">
          {vehicle.featured && <Badge variant="lime">Featured</Badge>}
          <Badge variant="dark">{vehicle.year}</Badge>
        </div>

        {/* Action Controls in Top-Right */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <button
            onClick={() => toggleComparison(vehicle.id)}
            className={`p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
              compared
                ? 'bg-[#C8FF45] text-[#080A0B] shadow-md shadow-[#C8FF45]/30'
                : 'bg-black/60 text-white/80 hover:text-white hover:bg-black/80 border border-white/10'
            }`}
            title={compared ? 'In comparison' : 'Add to comparison'}
            aria-label={`Compare ${vehicle.model}`}
          >
            <Scale className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => toggleFavorite(vehicle.id)}
            className={`p-2 rounded-full backdrop-blur-md transition-all cursor-pointer ${
              favorited
                ? 'bg-rose-500/90 text-white shadow-md shadow-rose-500/30'
                : 'bg-black/60 text-white/80 hover:text-rose-400 hover:bg-black/80 border border-white/10'
            }`}
            title={favorited ? 'In favorites' : 'Add to favorites'}
            aria-label={`Favorite ${vehicle.model}`}
          >
            <Heart className={`w-3.5 h-3.5 ${favorited ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Bottom Image Info */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/80 z-10 pointer-events-none">
          <span className="text-[#C8FF45] uppercase tracking-wider font-semibold">
            {vehicle.category}
          </span>
          <span className="flex items-center gap-1 text-[10px] bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
            <ImageIcon className="w-3 h-3 text-[#C8FF45]" />
            {vehicle.images.length} Photos
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#A0A7AC] block mb-1">
            {vehicle.make}
          </span>

          <Link to={`/velocity/vehicle/${vehicle.slug}`} className="block mb-2">
            <h3 className="text-lg font-bold text-[#F5F7F7] group-hover:text-[#C8FF45] transition-colors leading-snug line-clamp-1">
              {vehicle.model}
            </h3>
          </Link>

          <p className="text-xs text-[#A0A7AC] line-clamp-2 mb-4 leading-relaxed font-normal">
            {vehicle.shortOverview || vehicle.tagline || vehicle.description}
          </p>
        </div>

        <div>
          {/* Key Specifications Grid */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 mb-4 text-center">
            <div className="px-1">
              <span className="block text-[9px] font-mono text-[#A0A7AC] uppercase">POWER</span>
              <span className="text-xs font-bold text-[#F5F7F7]">{vehicle.horsepower} BHP</span>
            </div>
            <div className="px-1 border-x border-white/10">
              <span className="block text-[9px] font-mono text-[#A0A7AC] uppercase">FUEL</span>
              <span className="text-xs font-bold text-[#F5F7F7] truncate block">{vehicle.fuelType}</span>
            </div>
            <div className="px-1">
              <span className="block text-[9px] font-mono text-[#A0A7AC] uppercase">0-100</span>
              <span className="text-xs font-bold text-[#C8FF45]">{vehicle.acceleration || '4.0s'}</span>
            </div>
          </div>

          {/* Pricing & Link */}
          <div className="flex items-end justify-between pt-1">
            <div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#A0A7AC] block">
                Offer Price
              </span>
              <div className="text-base sm:text-lg font-extrabold text-[#F5F7F7]">
                {formatCompactINR(vehicle.price)}
              </div>
            </div>

            <Link
              to={`/velocity/vehicle/${vehicle.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C8FF45] uppercase tracking-wider group-hover:translate-x-1 transition-transform"
            >
              <span>Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

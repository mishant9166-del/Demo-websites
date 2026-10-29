import { motion, AnimatePresence } from 'framer-motion';
import type { Vehicle } from '../../types/vehicle';
import { VehicleCard } from './VehicleCard';

interface VehicleGridProps {
  vehicles: Vehicle[];
  viewMode?: 'grid' | 'list';
}

export function VehicleGrid({ vehicles, viewMode = 'grid' }: VehicleGridProps) {
  if (viewMode === 'list') {
    return (
      <div className="flex flex-col space-y-4">
        <AnimatePresence mode="popLayout">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} viewMode="list" />
          ))}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <motion.div 
      layout 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      <AnimatePresence mode="popLayout">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} viewMode="grid" />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

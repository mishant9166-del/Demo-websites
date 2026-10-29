import { CheckCircle2, Zap, Gauge, Flame, Compass, Layers, Shield } from 'lucide-react';
import type { Vehicle } from '../../types/vehicle';
import { formatMileage } from '../../lib/formatters';

interface VehicleSpecsProps {
  vehicle: Vehicle;
}

export function VehicleSpecs({ vehicle }: VehicleSpecsProps) {
  return (
    <div className="space-y-10 text-[#F5F7F7]">
      {/* High-Impact Performance Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-[#101315] border border-white/10 rounded-lg p-4 sm:p-5">
          <div className="flex items-center gap-2 text-[#A0A7AC] text-xs font-mono uppercase mb-1">
            <Zap className="w-3.5 h-3.5 text-[#C8FF45]" />
            <span>0 – 100 KM/H</span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#C8FF45]">
            {vehicle.acceleration || '3.5s'}
          </div>
          <span className="text-[10px] text-[#A0A7AC]/60 block mt-0.5">Acceleration</span>
        </div>

        <div className="bg-[#101315] border border-white/10 rounded-lg p-4 sm:p-5">
          <div className="flex items-center gap-2 text-[#A0A7AC] text-xs font-mono uppercase mb-1">
            <Gauge className="w-3.5 h-3.5 text-[#C8FF45]" />
            <span>OUTPUT</span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F7]">
            {vehicle.horsepower}
            <span className="text-sm font-semibold text-[#A0A7AC] ml-1">BHP</span>
          </div>
          <span className="text-[10px] text-[#A0A7AC]/60 block mt-0.5">Peak Horsepower</span>
        </div>

        <div className="bg-[#101315] border border-white/10 rounded-lg p-4 sm:p-5">
          <div className="flex items-center gap-2 text-[#A0A7AC] text-xs font-mono uppercase mb-1">
            <Flame className="w-3.5 h-3.5 text-[#C8FF45]" />
            <span>TOP SPEED</span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F7]">
            {vehicle.topSpeed || '290 km/h'}
          </div>
          <span className="text-[10px] text-[#A0A7AC]/60 block mt-0.5">V-Max Governed</span>
        </div>

        <div className="bg-[#101315] border border-white/10 rounded-lg p-4 sm:p-5">
          <div className="flex items-center gap-2 text-[#A0A7AC] text-xs font-mono uppercase mb-1">
            <Compass className="w-3.5 h-3.5 text-[#C8FF45]" />
            <span>{vehicle.range ? 'RANGE' : 'ODOMETER'}</span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F7]">
            {vehicle.range ? `${vehicle.range} km` : formatMileage(vehicle.mileage)}
          </div>
          <span className="text-[10px] text-[#A0A7AC]/60 block mt-0.5">
            {vehicle.range ? 'Estimated WLTP Range' : 'Verified Mileage'}
          </span>
        </div>
      </div>

      {/* Technical Specifications Matrix */}
      <div>
        <h3 className="text-sm font-mono uppercase tracking-widest text-[#A0A7AC] mb-4 flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#C8FF45]" />
          <span>Technical Architecture</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 rounded-lg overflow-hidden border border-white/10">
          <div className="bg-[#101315] p-4">
            <span className="text-[10px] font-mono uppercase text-[#A0A7AC] block">Model Year</span>
            <span className="text-sm font-semibold text-[#F5F7F7] mt-0.5 block">{vehicle.year}</span>
          </div>

          <div className="bg-[#101315] p-4">
            <span className="text-[10px] font-mono uppercase text-[#A0A7AC] block">Condition</span>
            <span className="text-sm font-semibold text-[#F5F7F7] mt-0.5 block">{vehicle.condition}</span>
          </div>

          <div className="bg-[#101315] p-4">
            <span className="text-[10px] font-mono uppercase text-[#A0A7AC] block">Powertrain</span>
            <span className="text-sm font-semibold text-[#F5F7F7] mt-0.5 block">{vehicle.powertrain}</span>
          </div>

          <div className="bg-[#101315] p-4">
            <span className="text-[10px] font-mono uppercase text-[#A0A7AC] block">Transmission</span>
            <span className="text-sm font-semibold text-[#F5F7F7] mt-0.5 block">{vehicle.transmission}</span>
          </div>

          <div className="bg-[#101315] p-4">
            <span className="text-[10px] font-mono uppercase text-[#A0A7AC] block">Drivetrain</span>
            <span className="text-sm font-semibold text-[#F5F7F7] mt-0.5 block">{vehicle.drivetrain}</span>
          </div>

          <div className="bg-[#101315] p-4">
            <span className="text-[10px] font-mono uppercase text-[#A0A7AC] block">Seating Capacity</span>
            <span className="text-sm font-semibold text-[#F5F7F7] mt-0.5 block">{vehicle.seats} Occupants</span>
          </div>

          <div className="bg-[#101315] p-4">
            <span className="text-[10px] font-mono uppercase text-[#A0A7AC] block">Torque Rating</span>
            <span className="text-sm font-semibold text-[#F5F7F7] mt-0.5 block">{vehicle.torque || 'N/A'}</span>
          </div>

          <div className="bg-[#101315] p-4">
            <span className="text-[10px] font-mono uppercase text-[#A0A7AC] block">Exterior Finish</span>
            <span className="text-sm font-semibold text-[#F5F7F7] mt-0.5 block">{vehicle.exteriorColor}</span>
          </div>

          <div className="bg-[#101315] p-4">
            <span className="text-[10px] font-mono uppercase text-[#A0A7AC] block">Interior Upholstery</span>
            <span className="text-sm font-semibold text-[#F5F7F7] mt-0.5 block">{vehicle.interiorColor}</span>
          </div>
        </div>
      </div>

      {/* Equipment & Features Checklist (Inspired by Reference Image 2) */}
      <div>
        <h3 className="text-sm font-mono uppercase tracking-widest text-[#A0A7AC] mb-4 flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#C8FF45]" />
          <span>Specified Equipment & Packages</span>
        </h3>

        <div className="bg-[#101315] border border-white/10 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 gap-x-8">
            {vehicle.equipment.concat(vehicle.features).map((item, index) => (
              <div key={index} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8FF45] shrink-0 mt-0.5" />
                <span className="text-xs text-[#A0A7AC] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, ArrowRight } from 'lucide-react';
import type { Vehicle } from '../../types/vehicle';
import { formatINR, formatCompactINR, formatMileage } from '../../lib/formatters';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { Modal } from '../common/Modal';
import { vehicles as allVehicles } from '../../data/vehicles';
import { MAX_COMPARE } from '../../hooks/useComparison';

interface ComparisonMatrixProps {
  selectedVehicles: Vehicle[];
  onRemove: (id: string) => void;
  onAdd: (id: string) => void;
  onClear: () => void;
}

export function ComparisonMatrix({
  selectedVehicles,
  onRemove,
  onAdd,
  onClear
}: ComparisonMatrixProps) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const availableVehicles = allVehicles.filter(
    (v) => !selectedVehicles.some((selected) => selected.id === v.id)
  );

  const emptySlotsCount = Math.max(0, MAX_COMPARE - selectedVehicles.length);

  return (
    <div className="space-y-6">
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#C8FF45] font-semibold">
            Side-By-Side Technical Audit
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7F7]">
            Comparing {selectedVehicles.length} of {MAX_COMPARE} Vehicles
          </h2>
        </div>

        <div className="flex items-center gap-3">
          {selectedVehicles.length < MAX_COMPARE && (
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#C8FF45] text-[#080A0B] text-xs font-bold uppercase tracking-wider hover:bg-[#b5eb3b] transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Vehicle</span>
            </button>
          )}

          <button
            onClick={onClear}
            className="px-4 py-2 rounded bg-[#171B1E] border border-white/10 text-xs font-semibold text-[#A0A7AC] hover:text-white hover:border-white/20 transition-colors cursor-pointer"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Comparison Table Container with Horizontal Scroll */}
      <div className="overflow-x-auto rounded-lg border border-white/10 bg-[#101315]">
        <table className="w-full text-left border-collapse min-w-[700px]">
          {/* Table Header: Vehicle Cards */}
          <thead>
            <tr className="border-b border-white/10">
              <th className="p-5 text-xs font-mono uppercase tracking-wider text-[#A0A7AC] w-48 bg-[#080A0B]/50 sticky left-0 z-20">
                Specification
              </th>

              {selectedVehicles.map((vehicle) => (
                <th key={vehicle.id} className="p-5 align-top min-w-[240px] max-w-[280px]">
                  <div className="relative rounded-md overflow-hidden bg-[#171B1E] border border-white/10 mb-3 group">
                    <div className="h-36 w-full">
                      <ImageWithFallback
                        src={vehicle.images[0]}
                        alt={vehicle.model}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <button
                      onClick={() => onRemove(vehicle.id)}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-black/70 text-white hover:bg-rose-500 transition-colors cursor-pointer"
                      title="Remove from comparison"
                      aria-label={`Remove ${vehicle.model}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C8FF45]">
                    {vehicle.make}
                  </span>
                  <h3 className="text-base font-bold text-[#F5F7F7] leading-snug line-clamp-1">
                    {vehicle.model}
                  </h3>
                  <div className="text-sm font-extrabold text-[#F5F7F7] mt-1">
                    {formatINR(vehicle.price)}
                  </div>

                  <Link
                    to={`/velocity/vehicle/${vehicle.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C8FF45] mt-2 hover:underline"
                  >
                    <span>View Full Specs</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </th>
              ))}

              {/* Empty Slots */}
              {Array.from({ length: emptySlotsCount }).map((_, index) => (
                <th key={`empty-${index}`} className="p-5 align-top min-w-[240px] max-w-[280px]">
                  <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="w-full h-52 border-2 border-dashed border-white/15 rounded-md flex flex-col items-center justify-center p-4 hover:border-[#C8FF45]/50 transition-colors cursor-pointer group text-left"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#171B1E] flex items-center justify-center text-[#A0A7AC] group-hover:text-[#C8FF45] mb-2 transition-colors">
                      <Plus className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-[#F5F7F7] text-center">
                      Add Vehicle {selectedVehicles.length + index + 1}
                    </span>
                    <span className="text-[10px] text-[#A0A7AC] text-center mt-1">
                      Choose from showroom inventory
                    </span>
                  </button>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body Specifications */}
          <tbody className="divide-y divide-white/5 text-xs text-[#A0A7AC]">
            <tr>
              <td className="p-4 font-mono uppercase text-[11px] text-[#F5F7F7] bg-[#080A0B]/50 sticky left-0 z-10">
                Model Year
              </td>
              {selectedVehicles.map((v) => (
                <td key={v.id} className="p-4 text-[#F5F7F7] font-semibold">{v.year}</td>
              ))}
              {Array.from({ length: emptySlotsCount }).map((_, i) => (
                <td key={i} className="p-4 text-white/20">—</td>
              ))}
            </tr>

            <tr>
              <td className="p-4 font-mono uppercase text-[11px] text-[#F5F7F7] bg-[#080A0B]/50 sticky left-0 z-10">
                Category
              </td>
              {selectedVehicles.map((v) => (
                <td key={v.id} className="p-4 text-[#F5F7F7]">{v.category}</td>
              ))}
              {Array.from({ length: emptySlotsCount }).map((_, i) => (
                <td key={i} className="p-4 text-white/20">—</td>
              ))}
            </tr>

            <tr>
              <td className="p-4 font-mono uppercase text-[11px] text-[#F5F7F7] bg-[#080A0B]/50 sticky left-0 z-10">
                Condition
              </td>
              {selectedVehicles.map((v) => (
                <td key={v.id} className="p-4 text-[#F5F7F7]">{v.condition}</td>
              ))}
              {Array.from({ length: emptySlotsCount }).map((_, i) => (
                <td key={i} className="p-4 text-white/20">—</td>
              ))}
            </tr>

            <tr>
              <td className="p-4 font-mono uppercase text-[11px] text-[#F5F7F7] bg-[#080A0B]/50 sticky left-0 z-10">
                Powertrain & Fuel
              </td>
              {selectedVehicles.map((v) => (
                <td key={v.id} className="p-4 text-[#F5F7F7]">
                  <span className="font-semibold block">{v.fuelType}</span>
                  <span className="text-[11px] text-[#A0A7AC]">{v.powertrain}</span>
                </td>
              ))}
              {Array.from({ length: emptySlotsCount }).map((_, i) => (
                <td key={i} className="p-4 text-white/20">—</td>
              ))}
            </tr>

            <tr>
              <td className="p-4 font-mono uppercase text-[11px] text-[#F5F7F7] bg-[#080A0B]/50 sticky left-0 z-10">
                Peak Output
              </td>
              {selectedVehicles.map((v) => (
                <td key={v.id} className="p-4">
                  <span className="text-sm font-bold text-[#C8FF45]">{v.horsepower} BHP</span>
                </td>
              ))}
              {Array.from({ length: emptySlotsCount }).map((_, i) => (
                <td key={i} className="p-4 text-white/20">—</td>
              ))}
            </tr>

            <tr>
              <td className="p-4 font-mono uppercase text-[11px] text-[#F5F7F7] bg-[#080A0B]/50 sticky left-0 z-10">
                0 – 100 KM/H
              </td>
              {selectedVehicles.map((v) => (
                <td key={v.id} className="p-4 font-bold text-[#F5F7F7]">
                  {v.acceleration || 'N/A'}
                </td>
              ))}
              {Array.from({ length: emptySlotsCount }).map((_, i) => (
                <td key={i} className="p-4 text-white/20">—</td>
              ))}
            </tr>

            <tr>
              <td className="p-4 font-mono uppercase text-[11px] text-[#F5F7F7] bg-[#080A0B]/50 sticky left-0 z-10">
                Transmission
              </td>
              {selectedVehicles.map((v) => (
                <td key={v.id} className="p-4 text-[#F5F7F7]">{v.transmission}</td>
              ))}
              {Array.from({ length: emptySlotsCount }).map((_, i) => (
                <td key={i} className="p-4 text-white/20">—</td>
              ))}
            </tr>

            <tr>
              <td className="p-4 font-mono uppercase text-[11px] text-[#F5F7F7] bg-[#080A0B]/50 sticky left-0 z-10">
                Drivetrain
              </td>
              {selectedVehicles.map((v) => (
                <td key={v.id} className="p-4 text-[#F5F7F7]">{v.drivetrain}</td>
              ))}
              {Array.from({ length: emptySlotsCount }).map((_, i) => (
                <td key={i} className="p-4 text-white/20">—</td>
              ))}
            </tr>

            <tr>
              <td className="p-4 font-mono uppercase text-[11px] text-[#F5F7F7] bg-[#080A0B]/50 sticky left-0 z-10">
                Range / Mileage
              </td>
              {selectedVehicles.map((v) => (
                <td key={v.id} className="p-4 text-[#F5F7F7]">
                  {v.range ? `${v.range} km (WLTP)` : formatMileage(v.mileage)}
                </td>
              ))}
              {Array.from({ length: emptySlotsCount }).map((_, i) => (
                <td key={i} className="p-4 text-white/20">—</td>
              ))}
            </tr>

            <tr>
              <td className="p-4 font-mono uppercase text-[11px] text-[#F5F7F7] bg-[#080A0B]/50 sticky left-0 z-10">
                Seating Capacity
              </td>
              {selectedVehicles.map((v) => (
                <td key={v.id} className="p-4 text-[#F5F7F7]">{v.seats} Seats</td>
              ))}
              {Array.from({ length: emptySlotsCount }).map((_, i) => (
                <td key={i} className="p-4 text-white/20">—</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Selector Modal for Adding Vehicle */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add Vehicle to Comparison"
        maxWidth="max-w-2xl"
      >
        <div className="space-y-3 pt-2">
          {availableVehicles.map((v) => (
            <div
              key={v.id}
              className="flex items-center justify-between p-3 rounded-lg bg-[#171B1E] border border-white/10 hover:border-[#C8FF45]/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-10 rounded overflow-hidden shrink-0 border border-white/10">
                  <ImageWithFallback
                    src={v.images[0]}
                    alt={v.model}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#C8FF45] uppercase">{v.category}</span>
                  <h4 className="text-xs font-bold text-[#F5F7F7]">{v.make} {v.model}</h4>
                  <span className="text-[11px] text-[#A0A7AC]">{formatCompactINR(v.price)}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onAdd(v.id);
                  setIsAddModalOpen(false);
                }}
                className="px-3 py-1.5 rounded bg-[#C8FF45] text-[#080A0B] text-xs font-bold uppercase tracking-wider hover:bg-[#b5eb3b] transition-colors cursor-pointer"
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}

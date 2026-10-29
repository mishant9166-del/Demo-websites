export type VehicleCategory = 
  | 'Sports Car'
  | 'Luxury SUV'
  | 'Electric'
  | 'Performance Sedan'
  | 'Grand Tourer'
  | 'Executive';

export type FuelType = 'Petrol' | 'Electric' | 'Plug-in Hybrid' | 'Hybrid' | 'Diesel';
export type TransmissionType = 
  | 'Automatic' 
  | 'Dual-Clutch PDK' 
  | 'Dual-Clutch AMG SPEEDSHIFT' 
  | '8-Speed Steptronic' 
  | 'Single-Speed Fixed' 
  | 'Manual';

export type DrivetrainType = 'All-Wheel Drive (AWD)' | 'Rear-Wheel Drive (RWD)' | 'Front-Wheel Drive (FWD)';
export type ConditionType = 'Brand New' | 'Certified Pre-Owned';

export interface Vehicle {
  id: string;
  slug: string;
  make: string;
  model: string;
  year: number;
  price: number; // in INR
  category: VehicleCategory;
  condition: ConditionType;
  powertrain: string;
  fuelType: FuelType;
  transmission: TransmissionType;
  mileage: number; // in km (0 if new)
  range?: number; // in km (for EVs/Hybrids)
  engine?: string;
  horsepower: number; // in BHP
  acceleration?: string; // e.g. "3.2s" (0-100 km/h)
  topSpeed?: string; // e.g. "312 km/h"
  torque?: string; // e.g. "620 Nm"
  drivetrain: DrivetrainType;
  seats: number;
  exteriorColor: string;
  interiorColor: string;
  description: string;
  shortOverview: string;
  features: string[];
  equipment: string[];
  images: string[];
  featured: boolean;
  tagline?: string;
}

export interface VehicleFilterState {
  searchQuery: string;
  category: 'All' | VehicleCategory;
  make: string;
  minPrice: number;
  maxPrice: number;
  fuelType: 'All' | FuelType;
  transmission: 'All' | string;
  condition: 'All' | ConditionType;
  year: 'All' | number;
}

export type VehicleSortOption = 
  | 'featured'
  | 'price-asc'
  | 'price-desc'
  | 'year-desc'
  | 'name-asc';

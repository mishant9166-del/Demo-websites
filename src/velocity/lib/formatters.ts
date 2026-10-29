/**
 * Formats a numeric price into standard Indian Rupee notation (INR)
 * e.g. 38500000 -> ₹3,85,00,000
 */
export function formatINR(price: number): string {
  if (isNaN(price)) return '₹0';
  
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
}

/**
 * Returns compact Indian notation like ₹3.85 Cr or ₹72 Lakh
 */
export function formatCompactINR(price: number): string {
  if (price >= 10000000) {
    const cr = (price / 10000000).toFixed(2);
    return `₹${cr.replace(/\.00$/, '')} Cr`;
  }
  if (price >= 100000) {
    const lakh = (price / 100000).toFixed(2);
    return `₹${lakh.replace(/\.00$/, '')} Lakh`;
  }
  return formatINR(price);
}

/**
 * Formats kilometers into readable string e.g. 14,200 km
 */
export function formatMileage(km: number): string {
  if (!km || km === 0) return 'Delivery Mileage';
  return `${new Intl.NumberFormat('en-IN').format(km)} km`;
}

/**
 * Formats horsepower
 */
export function formatHP(hp: number): string {
  return `${hp} BHP`;
}

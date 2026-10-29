import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Heart,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  ChevronDown,
  Check,
} from 'lucide-react';
import { STORE_PRODUCTS } from '../data/products';
import { ProductGallery } from '../components/products/ProductGallery';
import { PriceDisplay } from '../components/products/PriceDisplay';
import { RatingStars } from '../components/common/RatingStars';
import { ProductCard } from '../components/products/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';
import { STORE_CONFIG } from '../config/storeConfig';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const product = STORE_PRODUCTS.find((p) => p.slug === slug);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { recentlyViewedSlugs, addRecentlyViewed } = useRecentlyViewed();

  // State
  const [selectedVariant, setSelectedVariant] = useState(
    product ? product.colors[0] : null
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [postalCode, setPostalCode] = useState<string>('');
  const [deliveryEstimate, setDeliveryEstimate] = useState<string | null>(null);
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  // Accordion state
  const [shippingAccordionOpen, setShippingAccordionOpen] = useState<boolean>(false);
  const [materialsAccordionOpen, setMaterialsAccordionOpen] = useState<boolean>(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.colors[0]);
      setQuantity(1);
      setDeliveryEstimate(null);
      addRecentlyViewed(product.slug);
    }
  }, [slug, product]);

  if (!product || !selectedVariant) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#F7F7F4] px-4 text-center">
        <h2 className="text-2xl font-bold text-[#252525] mb-2">Object Not Found</h2>
        <p className="text-xs text-[#777872] mb-6">
          The requested design piece is not in our active catalog.
        </p>
        <Link
          to="/object/shop"
          className="px-6 py-2.5 bg-[#2447E8] text-white text-xs uppercase font-bold rounded-xs"
        >
          &larr; Return to Shop
        </Link>
      </div>
    );
  }

  const isFavorited = isInWishlist(product.slug);

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedVariant, quantity);
    navigate('/object/checkout');
  };

  const handleCheckPostalCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (postalCode.trim().length >= 4) {
      const days = 3;
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + days);
      const formatted = targetDate.toLocaleDateString('en-IN', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });
      setDeliveryEstimate(`Estimated delivery to ${postalCode.trim()} by ${formatted} (Simulated)`);
    }
  };

  // Related products
  const relatedProducts = STORE_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  // Recently viewed
  const recentlyViewedProducts = STORE_PRODUCTS.filter(
    (p) => recentlyViewedSlugs.includes(p.slug) && p.slug !== product.slug
  ).slice(0, 4);

  const allImages = [product.heroImage, ...product.galleryImages];

  return (
    <div className="bg-[#FFFFFF] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#777872]">
          <Link to="/object" className="hover:text-[#252525]">
            Home
          </Link>
          <span>/</span>
          <Link to="/object/shop" className="hover:text-[#252525]">
            Shop
          </Link>
          <span>/</span>
          <Link to={`/object/category/${product.category}`} className="hover:text-[#252525]">
            {product.categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-[#252525] font-semibold truncate max-w-xs">{product.name}</span>
        </div>

        {/* Product Presentation Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery images={allImages} productName={product.name} />
          </div>

          {/* Right Column: Buying Console & Specifications */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs text-[#777872] uppercase font-bold tracking-wider mb-2">
                <span>{product.categoryLabel}</span>
                <span className="text-[#2447E8] font-mono">SKU: {product.id}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#252525] mb-2 leading-tight">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-[#777872] font-light leading-relaxed mb-4">
                {product.tagline}
              </p>

              <div className="flex items-center gap-4 py-2 border-y border-[#E5E5E0]">
                <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
                <span className="text-xs text-[#E5E5E0]">&bull;</span>
                <span className="text-xs text-[#2447E8] font-mono font-semibold">
                  {product.inStock ? 'In Stock (Demo)' : 'Backorder'}
                </span>
              </div>
            </div>

            {/* Price Block */}
            <div className="p-4 bg-[#F7F7F4] rounded-xs border border-[#E5E5E0]">
              <PriceDisplay
                priceINR={product.priceINR}
                originalPriceINR={product.originalPriceINR}
                isSale={product.isSale}
                size="xl"
              />
              <span className="text-[11px] text-[#777872] block mt-1">
                Taxes included. Free delivery on orders over ₹{STORE_CONFIG.shipping.freeShippingThresholdINR.toLocaleString('en-IN')}.
              </span>
            </div>

            {/* Color / Variant Selection */}
            {product.colors.length > 0 && (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase font-bold tracking-wider text-[#252525]">
                    Color Variant: <span className="text-[#2447E8]">{selectedVariant.name}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  {product.colors.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedVariant(c)}
                      className={`p-1.5 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedVariant.id === c.id
                          ? 'border-[#2447E8] scale-110 shadow-xs'
                          : 'border-transparent hover:border-[#E5E5E0]'
                      }`}
                      title={c.name}
                    >
                      <span
                        className="w-6 h-6 rounded-full border border-black/15 block"
                        style={{ backgroundColor: c.colorHex }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Action Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#E5E5E0] rounded-xs bg-[#FFFFFF] h-12 px-2">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 text-[#777872] hover:text-[#252525]"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 font-mono font-bold text-sm text-[#252525]">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 text-[#777872] hover:text-[#252525]"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 h-12 bg-[#252525] hover:bg-[#2447E8] text-white text-xs uppercase font-bold tracking-widest rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  {addedNotice ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  <span>{addedNotice ? 'Added to Bag' : 'Add to Bag'}</span>
                </button>

                {/* Wishlist Button */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(product.slug)}
                  aria-label="Wishlist"
                  className={`w-12 h-12 border rounded-xs flex items-center justify-center transition-colors ${
                    isFavorited
                      ? 'border-[#FF704F] bg-[#FF704F]/10 text-[#FF704F]'
                      : 'border-[#E5E5E0] hover:border-[#252525] text-[#777872]'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-[#FF704F]' : ''}`} />
                </button>
              </div>

              {/* Buy Now Direct Button */}
              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full h-12 bg-[#2447E8] hover:bg-[#1D3BC5] text-white text-xs uppercase font-bold tracking-widest rounded-xs shadow-md transition-colors"
              >
                Instant Checkout &rarr;
              </button>
            </div>

            {/* Postal Code Delivery Estimator (Simulated) */}
            <div className="p-4 bg-[#F7F7F4] rounded-xs border border-[#E5E5E0] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#252525]">
                <Truck className="w-4 h-4 text-[#2447E8]" />
                <span>Simulated Delivery Estimator</span>
              </div>
              <form onSubmit={handleCheckPostalCode} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter 6-digit PIN code..."
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-white border border-[#E5E5E0] rounded-xs text-xs font-mono focus:outline-none focus:border-[#2447E8]"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#252525] text-white text-xs font-semibold uppercase rounded-xs hover:bg-[#2447E8] transition-colors"
                >
                  Check
                </button>
              </form>
              {deliveryEstimate && (
                <p className="text-xs text-[#2447E8] font-medium pt-1 animate-fadeIn">
                  {deliveryEstimate}
                </p>
              )}
            </div>

            {/* Specifications Summary */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-[#E5E5E0]">
                <span className="text-[#777872] uppercase font-semibold">Dimensions</span>
                <span className="font-mono text-[#252525] font-medium">{product.dimensions}</span>
              </div>
              {product.materials.length > 0 && (
                <div className="flex justify-between py-1.5 border-b border-[#E5E5E0]">
                  <span className="text-[#777872] uppercase font-semibold">Primary Materials</span>
                  <span className="text-[#252525] font-medium text-right max-w-xs">
                    {product.materials.join(', ')}
                  </span>
                </div>
              )}
              {product.weight && (
                <div className="flex justify-between py-1.5 border-b border-[#E5E5E0]">
                  <span className="text-[#777872] uppercase font-semibold">Weight</span>
                  <span className="font-mono text-[#252525] font-medium">{product.weight}</span>
                </div>
              )}
              {product.origin && (
                <div className="flex justify-between py-1.5 border-b border-[#E5E5E0]">
                  <span className="text-[#777872] uppercase font-semibold">Studio Origin</span>
                  <span className="text-[#252525] font-medium">{product.origin}</span>
                </div>
              )}
            </div>

            {/* Accordions: Shipping & Returns + Care */}
            <div className="space-y-2 pt-2">
              {/* Shipping Accordion */}
              <div className="border border-[#E5E5E0] rounded-xs overflow-hidden">
                <button
                  type="button"
                  onClick={() => setShippingAccordionOpen(!shippingAccordionOpen)}
                  className="w-full p-3.5 text-left flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#252525] hover:bg-[#F7F7F4] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Truck className="w-3.5 h-3.5 text-[#2447E8]" />
                    Shipping & Returns Information
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      shippingAccordionOpen ? 'rotate-180 text-[#2447E8]' : 'text-[#777872]'
                    }`}
                  />
                </button>
                {shippingAccordionOpen && (
                  <div className="p-4 pt-1 text-xs text-[#777872] font-light leading-relaxed border-t border-[#E5E5E0] space-y-2 bg-[#F7F7F4]/50">
                    <p>
                      Orders over ₹2,499 receive complimentary standard shipping. Transit typically takes 2–5 business days within India.
                    </p>
                    <p>
                      30-day simulated returns accepted for unused objects in original packaging.
                    </p>
                  </div>
                )}
              </div>

              {/* Materials & Care Accordion */}
              <div className="border border-[#E5E5E0] rounded-xs overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMaterialsAccordionOpen(!materialsAccordionOpen)}
                  className="w-full p-3.5 text-left flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#252525] hover:bg-[#F7F7F4] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2447E8]" />
                    Craftsmanship & Maintenance
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      materialsAccordionOpen ? 'rotate-180 text-[#2447E8]' : 'text-[#777872]'
                    }`}
                  />
                </button>
                {materialsAccordionOpen && (
                  <div className="p-4 pt-1 text-xs text-[#777872] font-light leading-relaxed border-t border-[#E5E5E0] space-y-2 bg-[#F7F7F4]/50">
                    <p>{product.careInstructions || 'Clean gently with a soft micro-fiber cloth. Avoid harsh abrasive cleaners.'}</p>
                    <p>Constructed using uncompromised natural materials engineered to age gracefully.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Product Story */}
        {product.fullStory && (
          <div className="p-8 sm:p-12 bg-[#F7F7F4] rounded-xs border border-[#E5E5E0]">
            <div className="max-w-3xl">
              <span className="text-[10px] uppercase font-mono font-bold text-[#2447E8] tracking-widest block mb-2">
                Design & Engineering Philosophy
              </span>
              <h3 className="text-2xl font-black text-[#252525] mb-4">
                The Story Behind {product.name}
              </h3>
              <p className="text-sm text-[#777872] font-light leading-relaxed">
                {product.fullStory}
              </p>
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="pt-10 border-t border-[#E5E5E0]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-[#252525]">Related Objects</h3>
              <Link
                to={`/object/category/${product.category}`}
                className="text-xs uppercase font-bold text-[#2447E8] hover:underline"
              >
                View More in {product.categoryLabel} &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        {/* Recently Viewed Products */}
        {recentlyViewedProducts.length > 0 && (
          <div className="pt-10 border-t border-[#E5E5E0]">
            <h3 className="text-xl font-black text-[#252525] mb-8">Recently Viewed</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {recentlyViewedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

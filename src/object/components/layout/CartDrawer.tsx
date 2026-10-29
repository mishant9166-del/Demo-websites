import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { STORE_CONFIG } from '../../config/storeConfig';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartDrawerOpen,
    closeCartDrawer,
    updateQuantity,
    removeFromCart,
    subtotalINR,
    totalItemCount,
  } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isCartDrawerOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCartDrawer();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartDrawerOpen, closeCartDrawer]);

  if (!isCartDrawerOpen) return null;

  const threshold = STORE_CONFIG.shipping.freeShippingThresholdINR;
  const progressPercent = Math.min(100, Math.round((subtotalINR / threshold) * 100));
  const amountNeeded = Math.max(0, threshold - subtotalINR);

  const handleProceedToCheckout = () => {
    closeCartDrawer();
    navigate('/object/checkout');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end animate-fadeIn"
    >
      <div
        className="w-full max-w-md bg-[#FFFFFF] text-[#252525] h-full shadow-2xl flex flex-col justify-between animate-slideLeft border-l border-[#E5E5E0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E5E5E0] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#2447E8]" />
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#252525]">
              Shopping Bag ({totalItemCount})
            </h3>
          </div>
          <button
            type="button"
            onClick={closeCartDrawer}
            aria-label="Close cart drawer"
            className="p-1.5 text-[#777872] hover:text-[#252525] hover:bg-[#F7F7F4] rounded-xs"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#F7F7F4] p-3.5 border-b border-[#E5E5E0] text-xs">
          <div className="flex items-center gap-2 mb-1.5">
            <Truck className="w-4 h-4 text-[#2447E8] shrink-0" />
            <span className="font-medium text-[#252525]">
              {amountNeeded === 0 ? (
                <span className="text-[#2447E8] font-bold">
                  You’ve unlocked free standard shipping!
                </span>
              ) : (
                <>
                  Add <strong className="text-[#252525]">₹{amountNeeded.toLocaleString('en-IN')}</strong>{' '}
                  more for free delivery
                </>
              )}
            </span>
          </div>
          <div className="w-full bg-[#E5E5E0] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#2447E8] h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Item List / Empty State */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#E5E5E0] mx-auto stroke-1" />
              <h4 className="text-base font-bold text-[#252525]">Your bag is currently empty</h4>
              <p className="text-xs text-[#777872] max-w-xs mx-auto">
                Discover our curated collection of carry, lighting, and workspace tools.
              </p>
              <div className="pt-2">
                <Link
                  to="/object/shop"
                  onClick={closeCartDrawer}
                  className="inline-block px-5 py-2.5 bg-[#2447E8] text-white text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-[#1D3BC5] transition-colors"
                >
                  Explore The Shop
                </Link>
              </div>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3.5 pb-4 border-b border-[#E5E5E0] last:border-b-0"
              >
                {/* Product Thumbnail */}
                <div className="w-18 h-18 bg-[#F7F7F4] rounded-xs border border-[#E5E5E0] shrink-0 overflow-hidden">
                  <img
                    src={item.product.heroImage}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs font-bold text-[#252525] leading-snug truncate">
                      {item.product.name}
                    </h4>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#777872] hover:text-[#FF704F] p-0.5"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="text-[11px] text-[#777872] block mt-0.5">
                    Variant: {item.variant.name}
                  </span>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-[#E5E5E0] rounded-xs bg-[#FFFFFF]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-[#777872] hover:text-[#252525]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-mono font-medium">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-[#777872] hover:text-[#252525]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Price */}
                    <span className="text-xs font-bold text-[#252525]">
                      ₹{(item.product.priceINR * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#E5E5E0] bg-[#F7F7F4] space-y-3">
            <div className="flex items-center justify-between text-xs text-[#777872]">
              <span>Subtotal</span>
              <span className="text-sm font-bold text-[#252525]">
                ₹{subtotalINR.toLocaleString('en-IN')}
              </span>
            </div>
            <p className="text-[10px] text-[#777872]">
              Taxes calculated at checkout. Free shipping threshold: ₹{threshold.toLocaleString('en-IN')}.
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link
                to="/object/cart"
                onClick={closeCartDrawer}
                className="py-3 bg-white border border-[#E5E5E0] hover:border-[#252525] text-xs uppercase font-semibold text-center rounded-xs transition-colors"
              >
                View Full Bag
              </Link>
              <button
                type="button"
                onClick={handleProceedToCheckout}
                className="py-3 bg-[#2447E8] hover:bg-[#1D3BC5] text-white text-xs uppercase font-semibold tracking-wider text-center rounded-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

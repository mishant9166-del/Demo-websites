import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ArrowLeft, Tag, Truck, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_CONFIG } from '../config/storeConfig';

export const CartPage: React.FC = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    subtotalINR,
    discountAmountINR,
    shippingFeeINR,
    finalTotalINR,
    appliedDiscount,
    applyDiscountCode,
    removeDiscountCode,
  } = useCart();

  const navigate = useNavigate();
  const [promoInput, setPromoInput] = useState('');
  const [promoFeedback, setPromoFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoFeedback(null);

    const result = applyDiscountCode(promoInput);
    if (result.success) {
      setPromoFeedback({ type: 'success', message: result.message });
      setPromoInput('');
    } else {
      setPromoFeedback({ type: 'error', message: result.message });
    }
  };

  const threshold = STORE_CONFIG.shipping.freeShippingThresholdINR;
  const amountNeeded = Math.max(0, threshold - subtotalINR);

  return (
    <div className="bg-[#FFFFFF] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="border-b border-[#E5E5E0] pb-6 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase font-mono font-bold tracking-widest text-[#2447E8] block mb-1">
              Order Review
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#252525]">
              Shopping Bag ({items.length})
            </h1>
          </div>

          <Link
            to="/object/shop"
            className="text-xs uppercase font-bold text-[#2447E8] hover:underline flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="py-24 text-center space-y-4 max-w-md mx-auto">
            <ShoppingBag className="w-14 h-14 text-[#E5E5E0] mx-auto stroke-1" />
            <h3 className="text-xl font-bold text-[#252525]">Your shopping bag is empty</h3>
            <p className="text-xs text-[#777872]">
              You haven’t added any design pieces yet. Explore our latest arrivals or browse our departments.
            </p>
            <div className="pt-2">
              <Link
                to="/object/shop"
                className="px-6 py-3 bg-[#2447E8] text-white text-xs uppercase font-bold tracking-wider rounded-xs inline-block"
              >
                Start Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Items Table */}
            <div className="lg:col-span-8 space-y-6">
              {/* Free shipping banner */}
              <div className="p-4 bg-[#F7F7F4] rounded-xs border border-[#E5E5E0] flex items-center gap-3 text-xs">
                <Truck className="w-5 h-5 text-[#2447E8] shrink-0" />
                <div className="flex-1">
                  {amountNeeded === 0 ? (
                    <span className="font-bold text-[#2447E8]">
                      Congratulations! Your order qualifies for free standard delivery across India.
                    </span>
                  ) : (
                    <span>
                      Add <strong>₹{amountNeeded.toLocaleString('en-IN')}</strong> more to unlock free standard shipping (Orders over ₹{threshold.toLocaleString('en-IN')}).
                    </span>
                  )}
                </div>
              </div>

              {/* Items List */}
              <div className="border border-[#E5E5E0] rounded-xs divide-y divide-[#E5E5E0]">
                {items.map((item) => (
                  <div key={item.id} className="p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Link
                        to={`/object/product/${item.product.slug}`}
                        className="w-20 h-20 bg-[#F7F7F4] rounded-xs overflow-hidden border border-[#E5E5E0] shrink-0"
                      >
                        <img
                          src={item.product.heroImage}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#777872] block">
                          {item.product.categoryLabel}
                        </span>
                        <Link
                          to={`/object/product/${item.product.slug}`}
                          className="text-sm font-bold text-[#252525] hover:text-[#2447E8] transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <span className="text-xs text-[#777872] block mt-0.5">
                          Variant: <strong className="text-[#252525]">{item.variant.name}</strong>
                        </span>
                        <span className="text-xs font-mono font-bold text-[#252525] sm:hidden block mt-1">
                          ₹{item.product.priceINR.toLocaleString('en-IN')} each
                        </span>
                      </div>
                    </div>

                    {/* Quantity & Pricing */}
                    <div className="flex items-center justify-between w-full sm:w-auto gap-6 sm:gap-8 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#E5E5E0]">
                      <div className="flex items-center border border-[#E5E5E0] rounded-xs bg-[#FFFFFF]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-[#777872] hover:text-[#252525]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-mono font-bold text-[#252525]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 text-[#777872] hover:text-[#252525]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-bold font-mono text-[#252525] block">
                          ₹{(item.product.priceINR * item.quantity).toLocaleString('en-IN')}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-[11px] text-[#777872] hover:text-[#FF704F] flex items-center gap-1 mt-1 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Order Summary & Discount Box */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#F7F7F4] p-6 rounded-xs border border-[#E5E5E0] space-y-6">
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#252525] pb-3 border-b border-[#E5E5E0]">
                  Summary & Totals
                </h3>

                {/* Subtotal & Line Items */}
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-[#777872]">
                    <span>Bag Subtotal</span>
                    <span className="font-mono font-medium text-[#252525]">
                      ₹{subtotalINR.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {discountAmountINR > 0 && (
                    <div className="flex justify-between text-[#FF704F] font-semibold">
                      <span>Discount ({appliedDiscount?.code})</span>
                      <span className="font-mono">
                        -₹{discountAmountINR.toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-[#777872]">
                    <span>Shipping Fee</span>
                    <span className="font-mono font-medium text-[#252525]">
                      {shippingFeeINR === 0 ? (
                        <span className="text-[#2447E8] font-bold">FREE</span>
                      ) : (
                        `₹${shippingFeeINR.toLocaleString('en-IN')}`
                      )}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-[#E5E5E0] flex justify-between items-center text-sm font-bold text-[#252525]">
                    <span>Estimated Total</span>
                    <span className="text-xl font-mono text-[#252525]">
                      ₹{finalTotalINR.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Discount Code Form */}
                <div className="pt-2">
                  {appliedDiscount ? (
                    <div className="p-3 bg-white border border-[#2447E8] rounded-xs flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold font-mono text-[#2447E8] block">
                          {appliedDiscount.code}
                        </span>
                        <span className="text-[11px] text-[#777872]">
                          {appliedDiscount.description}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={removeDiscountCode}
                        className="text-xs text-[#FF704F] hover:underline uppercase font-bold"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyPromo} className="space-y-2">
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Tag className="w-3.5 h-3.5 text-[#777872] absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="Enter promo code (e.g. WELCOME10)"
                            value={promoInput}
                            onChange={(e) => setPromoInput(e.target.value)}
                            className="w-full pl-8 pr-2 py-2 bg-white border border-[#E5E5E0] rounded-xs text-xs font-mono uppercase focus:outline-none focus:border-[#2447E8]"
                          />
                        </div>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-[#252525] hover:bg-[#2447E8] text-white text-xs uppercase font-bold rounded-xs transition-colors"
                        >
                          Apply
                        </button>
                      </div>

                      {promoFeedback && (
                        <p
                          className={`text-[11px] ${
                            promoFeedback.type === 'success' ? 'text-[#2447E8]' : 'text-[#FF704F]'
                          }`}
                        >
                          {promoFeedback.message}
                        </p>
                      )}
                    </form>
                  )}
                </div>

                {/* Checkout CTA */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => navigate('/object/checkout')}
                    className="w-full py-4 bg-[#2447E8] hover:bg-[#1D3BC5] text-white text-xs uppercase font-bold tracking-widest rounded-xs shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-[#777872] justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#2447E8]" />
                  <span>Simulated frontend checkout &bull; No payment required</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

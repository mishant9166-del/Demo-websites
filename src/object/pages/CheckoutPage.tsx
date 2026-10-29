import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Shield,
  CreditCard,
  QrCode,
  Banknote,
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { PaymentMethod, ShippingAddress, SimulatedOrder } from '../types/cart';

export const CheckoutPage: React.FC = () => {
  const { items, subtotalINR, discountAmountINR, appliedDiscount, shippingFeeINR, finalTotalINR, clearCart } =
    useCart();
  const navigate = useNavigate();

  // Address State
  const [formData, setFormData] = useState<ShippingAddress>({
    fullName: '',
    email: '',
    phone: '',
    streetAddress: '',
    apartment: '',
    city: '',
    state: 'Karnataka',
    postalCode: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('demo-upi');
  const [deliveryMethod, setDeliveryMethod] = useState<'standard' | 'express'>('standard');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const indianStates = [
    'Karnataka',
    'Maharashtra',
    'Delhi NCR',
    'Tamil Nadu',
    'Telangana',
    'Gujarat',
    'Rajasthan',
    'Kerala',
    'West Bengal',
    'Uttar Pradesh',
    'Goa',
    'Punjab',
  ];

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#FFFFFF] px-4 text-center">
        <h2 className="text-2xl font-bold text-[#252525] mb-2">No Items in Shopping Bag</h2>
        <p className="text-xs text-[#777872] mb-6">
          Add design pieces to your cart before proceeding to checkout.
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

  const expressExtraFee = deliveryMethod === 'express' ? 150 : 0;
  const effectiveTotalINR = finalTotalINR + expressExtraFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full recipient name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid contact email.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMessage('Please enter a valid phone number for delivery coordination.');
      return;
    }
    if (!formData.streetAddress.trim()) {
      setErrorMessage('Please enter your street address.');
      return;
    }
    if (!formData.city.trim()) {
      setErrorMessage('Please enter your city.');
      return;
    }
    if (!formData.postalCode.trim() || formData.postalCode.length < 5) {
      setErrorMessage('Please enter a valid 6-digit PIN code.');
      return;
    }

    // Generate simulated order
    const orderId = 'OF-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    const estDelivery = new Date();
    estDelivery.setDate(estDelivery.getDate() + (deliveryMethod === 'express' ? 2 : 4));

    const simulatedOrder: SimulatedOrder = {
      orderId,
      items: [...items],
      shippingAddress: formData,
      deliveryMethod: deliveryMethod === 'express' ? 'Express Courier (2-3 Days)' : 'Standard Ground (3-5 Days)',
      paymentMethod,
      subtotalINR,
      shippingFeeINR: shippingFeeINR + expressExtraFee,
      discountINR: discountAmountINR,
      appliedDiscountCode: appliedDiscount?.code,
      totalINR: effectiveTotalINR,
      placedAt: new Date().toISOString(),
      estimatedDeliveryDate: estDelivery.toLocaleDateString('en-IN', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }),
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('object_form_orders') || '[]');
      existing.unshift(simulatedOrder);
      localStorage.setItem('object_form_orders', JSON.stringify(existing));
    } catch {
      // Ignore
    }

    // Clear cart and redirect
    clearCart();
    navigate(`/object/order-confirmation/${orderId}`, { state: { order: simulatedOrder } });
  };

  return (
    <div className="bg-[#F7F7F4] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/object/cart"
            className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#777872] hover:text-[#252525]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Shopping Bag</span>
          </Link>

          <span className="text-[11px] font-mono text-[#2447E8] font-bold uppercase">
            Simulated Checkout
          </span>
        </div>

        {errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xs text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmitOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Contact, Address & Simulated Payment */}
            <div className="lg:col-span-7 space-y-8">
              {/* 1. Contact & Shipping Address */}
              <div className="bg-white p-6 sm:p-8 rounded-xs border border-[#E5E5E0] shadow-xs space-y-4">
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#252525] pb-3 border-b border-[#E5E5E0]">
                  1. Contact & Shipping Address
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alistair Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F4] border border-[#E5E5E0] rounded-xs text-xs font-medium text-[#252525] focus:outline-none focus:border-[#2447E8]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alistair@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F4] border border-[#E5E5E0] rounded-xs text-xs font-medium text-[#252525] focus:outline-none focus:border-[#2447E8]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F4] border border-[#E5E5E0] rounded-xs text-xs font-medium text-[#252525] focus:outline-none focus:border-[#2447E8]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="House/Flat number, building, street, area..."
                      value={formData.streetAddress}
                      onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F4] border border-[#E5E5E0] rounded-xs text-xs font-medium text-[#252525] focus:outline-none focus:border-[#2447E8]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bengaluru"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F4] border border-[#E5E5E0] rounded-xs text-xs font-medium text-[#252525] focus:outline-none focus:border-[#2447E8]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-1">
                      State *
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F4] border border-[#E5E5E0] rounded-xs text-xs font-medium text-[#252525] focus:outline-none focus:border-[#2447E8]"
                    >
                      {indianStates.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] uppercase font-bold tracking-wider text-[#252525] block mb-1">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 560038"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#F7F7F4] border border-[#E5E5E0] rounded-xs text-xs font-mono font-medium text-[#252525] focus:outline-none focus:border-[#2447E8]"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Delivery Method */}
              <div className="bg-white p-6 sm:p-8 rounded-xs border border-[#E5E5E0] shadow-xs space-y-4">
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#252525] pb-3 border-b border-[#E5E5E0]">
                  2. Select Delivery Method
                </h3>

                <div className="space-y-3">
                  <label
                    className={`p-4 rounded-xs border flex items-center justify-between cursor-pointer transition-all ${
                      deliveryMethod === 'standard'
                        ? 'border-[#2447E8] bg-[#2447E8]/5'
                        : 'border-[#E5E5E0] hover:border-[#252525]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        checked={deliveryMethod === 'standard'}
                        onChange={() => setDeliveryMethod('standard')}
                        className="text-[#2447E8] focus:ring-0"
                      />
                      <div>
                        <span className="font-bold text-xs text-[#252525] block">
                          Standard Ground Delivery
                        </span>
                        <span className="text-[11px] text-[#777872]">
                          Transit in 3–5 business days
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#252525]">
                      {shippingFeeINR === 0 ? 'FREE' : `₹${shippingFeeINR}`}
                    </span>
                  </label>

                  <label
                    className={`p-4 rounded-xs border flex items-center justify-between cursor-pointer transition-all ${
                      deliveryMethod === 'express'
                        ? 'border-[#2447E8] bg-[#2447E8]/5'
                        : 'border-[#E5E5E0] hover:border-[#252525]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        checked={deliveryMethod === 'express'}
                        onChange={() => setDeliveryMethod('express')}
                        className="text-[#2447E8] focus:ring-0"
                      />
                      <div>
                        <span className="font-bold text-xs text-[#252525] block">
                          Priority Air Express
                        </span>
                        <span className="text-[11px] text-[#777872]">
                          Expedited transit in 1–2 business days
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#252525]">
                      +₹150
                    </span>
                  </label>
                </div>
              </div>

              {/* 3. Simulated Payment Method */}
              <div className="bg-white p-6 sm:p-8 rounded-xs border border-[#E5E5E0] shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E0]">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-[#252525]">
                    3. Simulated Payment Method
                  </h3>
                  <span className="text-[10px] text-[#FF704F] font-mono font-bold uppercase">
                    Demo Mode Only
                  </span>
                </div>

                <div className="space-y-3">
                  <label
                    className={`p-4 rounded-xs border flex items-center justify-between cursor-pointer transition-all ${
                      paymentMethod === 'demo-upi'
                        ? 'border-[#2447E8] bg-[#2447E8]/5'
                        : 'border-[#E5E5E0] hover:border-[#252525]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={paymentMethod === 'demo-upi'}
                        onChange={() => setPaymentMethod('demo-upi')}
                      />
                      <div>
                        <span className="font-bold text-xs text-[#252525] block">
                          Demo Instant UPI / QR Code
                        </span>
                        <span className="text-[11px] text-[#777872]">
                          Google Pay, PhonePe, Paytm simulation
                        </span>
                      </div>
                    </div>
                    <QrCode className="w-5 h-5 text-[#2447E8]" />
                  </label>

                  <label
                    className={`p-4 rounded-xs border flex items-center justify-between cursor-pointer transition-all ${
                      paymentMethod === 'demo-cod'
                        ? 'border-[#2447E8] bg-[#2447E8]/5'
                        : 'border-[#E5E5E0] hover:border-[#252525]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={paymentMethod === 'demo-cod'}
                        onChange={() => setPaymentMethod('demo-cod')}
                      />
                      <div>
                        <span className="font-bold text-xs text-[#252525] block">
                          Simulated Cash on Delivery (COD)
                        </span>
                        <span className="text-[11px] text-[#777872]">
                          Verify payment upon simulated courier arrival
                        </span>
                      </div>
                    </div>
                    <Banknote className="w-5 h-5 text-[#2447E8]" />
                  </label>

                  <label
                    className={`p-4 rounded-xs border flex items-center justify-between cursor-pointer transition-all ${
                      paymentMethod === 'demo-card'
                        ? 'border-[#2447E8] bg-[#2447E8]/5'
                        : 'border-[#E5E5E0] hover:border-[#252525]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={paymentMethod === 'demo-card'}
                        onChange={() => setPaymentMethod('demo-card')}
                      />
                      <div>
                        <span className="font-bold text-xs text-[#252525] block">
                          Simulated Credit / Debit Card
                        </span>
                        <span className="text-[11px] text-[#777872]">
                          Sandbox authorization (Zero real charge)
                        </span>
                      </div>
                    </div>
                    <CreditCard className="w-5 h-5 text-[#2447E8]" />
                  </label>
                </div>

                <div className="p-3 bg-[#F7F7F4] rounded-xs border border-[#E5E5E0] flex items-start gap-2.5 text-xs text-[#777872]">
                  <Shield className="w-4 h-4 text-[#2447E8] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    This is a frontend portfolio demonstration. No real card details are collected, and no real bank transaction will occur.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary & Place Order Button */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-xs border border-[#E5E5E0] shadow-sm space-y-6">
                <h3 className="font-bold text-sm uppercase tracking-wider text-[#252525] pb-3 border-b border-[#E5E5E0]">
                  Order Items ({items.length})
                </h3>

                {/* Items preview */}
                <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 text-xs">
                      <div className="w-12 h-12 rounded-xs overflow-hidden bg-[#F7F7F4] border border-[#E5E5E0] shrink-0">
                        <img
                          src={item.product.heroImage}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-bold text-[#252525] truncate block">
                          {item.product.name}
                        </span>
                        <span className="text-[11px] text-[#777872]">
                          {item.variant.name} &bull; Qty: {item.quantity}
                        </span>
                      </div>
                      <span className="font-mono font-bold text-[#252525]">
                        ₹{(item.product.priceINR * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price Line Items */}
                <div className="space-y-2.5 pt-4 border-t border-[#E5E5E0] text-xs">
                  <div className="flex justify-between text-[#777872]">
                    <span>Items Subtotal</span>
                    <span className="font-mono text-[#252525]">
                      ₹{subtotalINR.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {discountAmountINR > 0 && (
                    <div className="flex justify-between text-[#FF704F] font-semibold">
                      <span>Applied Promo ({appliedDiscount?.code})</span>
                      <span className="font-mono">
                        -₹{discountAmountINR.toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-[#777872]">
                    <span>Delivery Fee</span>
                    <span className="font-mono text-[#252525]">
                      {shippingFeeINR + expressExtraFee === 0 ? (
                        <span className="text-[#2447E8] font-bold">FREE</span>
                      ) : (
                        `₹${(shippingFeeINR + expressExtraFee).toLocaleString('en-IN')}`
                      )}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-[#E5E5E0] flex justify-between items-center text-sm font-bold text-[#252525]">
                    <span>Simulated Total</span>
                    <span className="text-2xl font-mono text-[#2447E8]">
                      ₹{effectiveTotalINR.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#2447E8] hover:bg-[#1D3BC5] text-white text-xs uppercase font-bold tracking-widest rounded-xs shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Place Simulated Order</span>
                </button>

                <p className="text-[11px] text-[#777872] text-center font-light">
                  By clicking Place Simulated Order, you acknowledge that this is a frontend prototype.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

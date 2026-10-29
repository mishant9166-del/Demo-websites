import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldAlert,
  Clock,
  AlertCircle,
  Coffee,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PriceTag } from '../components/common/PriceTag';
import { SectionHeading } from '../components/common/SectionHeading';
import type { PickupOrderData, CartItem } from '../types/cafe';

const PICKUP_TIME_OPTIONS = [
  'As soon as possible (~15–20 mins)',
  'In 30 minutes',
  'In 45 minutes',
  'In 1 hour',
  'Later today (Schedule upon arrival)',
];

export const OrderPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, subtotal, taxes, finalTotal } = useCart();
  const navigate = useNavigate();

  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupTime, setPickupTime] = useState(PICKUP_TIME_OPTIONS[0]);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!customerName.trim()) {
      errs.name = 'Please enter your name for the pickup counter.';
    }

    if (!customerEmail.trim()) {
      errs.email = 'Please provide an email address for your receipt.';
    } else if (!/\S+@\S+\.\S+/.test(customerEmail)) {
      errs.email = 'Please provide a valid email format.';
    }

    if (!customerPhone.trim()) {
      errs.phone = 'Please provide a contact phone number.';
    } else if (customerPhone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const orderId = `MB-ORD-${Math.floor(10000 + Math.random() * 90000)}`;

    const orderPayload: PickupOrderData = {
      orderId,
      orderNumber: orderId,
      customerName,
      customerEmail,
      email: customerEmail,
      customerPhone,
      phone: customerPhone,
      pickupTime,
      notes,
      items: [...items],
      subtotal,
      taxes,
      gst: taxes,
      total: finalTotal,
      finalTotal,
      createdAt: new Date().toISOString(),
    };

    // Store in localStorage for persistence
    try {
      localStorage.setItem('mellow_bean_last_order', JSON.stringify(orderPayload));
    } catch {
      // ignore storage error
    }

    // Navigate to confirmation page
    navigate('/mellow-bean/order/confirmation', { state: { order: orderPayload } });
  };

  if (items.length === 0) {
    return (
      <div className="py-20 bg-[#F8F2E7] min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-4 p-8 sm:p-10 rounded-3xl bg-[#FFFEFA] border border-[#EADFCF] shadow-sm text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-[#F0D27A]/30 text-[#382820] flex items-center justify-center mx-auto">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#382820]">
            Your Basket is Empty
          </h2>
          <p className="text-sm text-[#382820]/75 leading-relaxed">
            You have not added any coffee, pastries, or brunch items yet. Explore our open menu to start your pickup order.
          </p>
          <Link
            to="/mellow-bean/menu"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#382820] text-[#FFFEFA] text-sm font-medium hover:bg-[#382820]/90 transition-all shadow-md"
          >
            <Coffee className="w-4 h-4 text-[#F0D27A]" />
            <span>Explore the Menu</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-20 bg-[#F8F2E7] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <SectionHeading
            badge="Pickup Counter"
            title="Review Your Basket & Order"
            subtitle="Skip the counter queue. We prepare your coffee and oven-fresh pastries to be ready at our Indiranagar hatch."
            className="mb-0"
          />
        </div>

        {/* Demo Disclaimer Top Notice */}
        <div className="p-4 rounded-2xl bg-[#F0D27A]/25 border border-[#F0D27A]/50 flex items-start gap-3 text-xs sm:text-sm text-[#382820] max-w-4xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-[#B77A4A] shrink-0 mt-0.5" />
          <p>
            <strong>Frontend Demonstration Order:</strong> This ordering system is for portfolio showcase purposes. No real payments are processed, and no coffee will be brewed.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Items Review & Customer Details Form */}
          <div className="lg:col-span-7 space-y-8">
            {/* Basket Items List */}
            <div className="bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#EADFCF] pb-3">
                <h3 className="font-serif font-bold text-xl text-[#382820]">
                  Your Items ({items.length})
                </h3>
                <Link
                  to="/mellow-bean/menu"
                  className="text-xs text-[#B77A4A] hover:text-[#382820] font-medium"
                >
                  + Add more items
                </Link>
              </div>

              <div className="divide-y divide-[#EADFCF]/60">
                {items.map((cartItem: CartItem) => {
                  const menuItem = cartItem.item || cartItem.menuItem;
                  return (
                    <div
                      key={menuItem.id}
                      className="py-4 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3.5 flex-1 min-w-0">
                        <img
                          src={menuItem.image}
                          alt={menuItem.name}
                          className="w-16 h-16 rounded-2xl object-cover border border-[#EADFCF] shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="font-serif font-bold text-sm text-[#382820] truncate">
                            {menuItem.name}
                          </h4>
                          <span className="text-xs text-[#B77A4A] block">
                            ₹{menuItem.price} each
                          </span>
                        </div>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-3 shrink-0">
                        <div className="flex items-center border border-[#EADFCF] rounded-full bg-[#F8F2E7] p-0.5">
                          <button
                            type="button"
                            onClick={() => updateQuantity(menuItem.id, cartItem.quantity - 1)}
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[#382820] hover:bg-[#FFFEFA] transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-7 text-center font-bold text-xs text-[#382820]">
                            {cartItem.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(menuItem.id, cartItem.quantity + 1)}
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[#382820] hover:bg-[#FFFEFA] transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="font-bold text-sm text-[#382820] w-14 text-right">
                          ₹{menuItem.price * cartItem.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => removeFromCart(menuItem.id)}
                          className="p-1.5 text-[#382820]/40 hover:text-red-600 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Customer Details Form */}
            <div className="bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] p-6 sm:p-8 shadow-xs space-y-5">
              <h3 className="font-serif font-bold text-xl text-[#382820] border-b border-[#EADFCF] pb-3">
                Pickup Contact Information
              </h3>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#382820] mb-1">
                    Your Name (For counter pickup callout) *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Roshni Kapoor"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820] ${
                      errors.name ? 'border-red-400' : 'border-[#EADFCF]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#382820] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="roshni@example.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820] ${
                        errors.email ? 'border-red-400' : 'border-[#EADFCF]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#382820] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98450 12345"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className={`w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820] ${
                        errors.phone ? 'border-red-400' : 'border-[#EADFCF]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Pickup Time Choice */}
                <div>
                  <label className="block text-xs font-semibold text-[#382820] mb-1">
                    Estimated Pickup Time
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820]"
                  >
                    {PICKUP_TIME_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Barista Notes */}
                <div>
                  <label className="block text-xs font-semibold text-[#382820] mb-1">
                    Special Preparation Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Extra hot flat white, cutlery please, slice sourdough"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-xs sm:text-sm text-[#382820] focus:outline-none focus:ring-2 focus:ring-[#382820]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & Demo Checkout CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] p-6 sm:p-8 shadow-sm space-y-5 sticky top-28">
              <h3 className="font-serif font-bold text-xl text-[#382820] border-b border-[#EADFCF] pb-3">
                Order Summary
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-[#382820]/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#382820]">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5% Restaurant)</span>
                  <span className="font-semibold text-[#382820]">₹{taxes}</span>
                </div>
                <div className="flex justify-between">
                  <span>Eco-Packaging & Box</span>
                  <span className="text-[#777B5A] font-semibold">Complimentary</span>
                </div>
                <div className="pt-3 border-t border-[#EADFCF] flex justify-between items-baseline text-base sm:text-lg font-bold text-[#382820]">
                  <span>Total Amount</span>
                  <PriceTag price={finalTotal} size="lg" />
                </div>
              </div>

              {/* Checkout Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="w-full py-4 rounded-full bg-[#382820] text-[#FFFEFA] font-medium text-sm hover:bg-[#382820]/90 transition-all shadow-md flex items-center justify-center gap-2 group"
                >
                  <ShoppingBag className="w-4 h-4 text-[#F0D27A]" />
                  <span>Place Demo Pickup Order</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-xs text-[#382820]/75 space-y-1">
                <p className="font-semibold text-[#382820]">No Payment Information Required</p>
                <p>
                  This is a frontend demonstration. No payment gateway is attached and no charges will occur.
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-[#777B5A] font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>Ready for pickup at 42 Bloom Street hatch</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

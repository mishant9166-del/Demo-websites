import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  ShoppingBag,
  ArrowRight,
  Clock,
  MapPin,
  ShieldAlert,
  Coffee,
  Check,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PriceTag } from '../components/common/PriceTag';
import { CAFE_CONFIG } from '../config/cafeConfig';
import type { PickupOrderData, CartItem } from '../types/cafe';

export const OrderConfirmationPage: React.FC = () => {
  const location = useLocation();
  const { clearCart } = useCart();
  const [order, setOrder] = useState<PickupOrderData | null>(null);

  useEffect(() => {
    // Check if order was passed in navigation state
    if (location.state?.order) {
      setOrder(location.state.order);
      clearCart();
    } else {
      // Fallback: check localStorage
      try {
        const saved = localStorage.getItem('mellow_bean_last_order');
        if (saved) {
          setOrder(JSON.parse(saved));
        }
      } catch {
        // ignore
      }
    }
  }, [location.state, clearCart]);

  if (!order) {
    return (
      <div className="py-20 bg-[#F8F2E7] min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-4 p-8 rounded-3xl bg-[#FFFEFA] border border-[#EADFCF] shadow-sm text-center space-y-4">
          <ShoppingBag className="w-12 h-12 text-[#B77A4A] mx-auto" />
          <h2 className="text-2xl font-serif font-bold text-[#382820]">
            No Recent Order Found
          </h2>
          <p className="text-xs sm:text-sm text-[#382820]/70">
            It looks like no demo order has been placed in this session yet.
          </p>
          <Link
            to="/mellow-bean/menu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#382820] text-[#FFFEFA] text-xs font-semibold hover:bg-[#382820]/90 transition-all shadow-md"
          >
            <span>Browse Menu & Order</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  const orderNum = order.orderId || order.orderNumber || 'MB-ORD-DEMO';
  const displayTotal = order.finalTotal || order.total || 0;
  const displayTaxes = order.taxes || order.gst || 0;

  return (
    <div className="py-12 sm:py-20 bg-[#F8F2E7] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Receipt Card */}
        <div className="bg-[#FFFEFA] rounded-3xl border border-[#EADFCF] p-8 sm:p-12 shadow-sm space-y-8">
          {/* Top Success Badge */}
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#777B5A]/15 text-[#777B5A] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B77A4A]">
              Pickup Order Confirmed
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#382820]">
              Thank you, {order.customerName}!
            </h1>
            <p className="text-xs text-[#382820]/70">
              Demo Order Ref:{' '}
              <span className="font-mono font-bold text-[#382820]">{orderNum}</span>
            </p>
          </div>

          {/* Mandatory Demo Disclaimer Notice */}
          <div className="p-4 rounded-2xl bg-[#F0D27A]/30 border border-[#F0D27A]/60 flex items-start gap-3 text-xs sm:text-sm text-[#382820]">
            <ShieldAlert className="w-5 h-5 text-[#B77A4A] shrink-0 mt-0.5" />
            <p>
              <strong>Demo Status:</strong> Your demo order has been recorded in this browser. No real order has been placed. No live kitchen tickets were created or payment charged.
            </p>
          </div>

          {/* Order Details & Pickup Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] space-y-1">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B77A4A]">
                Pickup Timing
              </span>
              <p className="font-serif font-bold text-sm text-[#382820] flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#777B5A]" />
                {order.pickupTime}
              </p>
              <span className="text-xs text-[#382820]/60 block">
                Order Placed: {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] space-y-1">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B77A4A]">
                Pickup Counter
              </span>
              <p className="font-serif font-bold text-sm text-[#382820] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#777B5A]" />
                Mellow & Bean Hatch
              </p>
              <span className="text-xs text-[#382820]/60 block truncate">
                {CAFE_CONFIG.address.street}, Indiranagar
              </span>
            </div>
          </div>

          {/* Purchased Items List */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#382820] border-b border-[#EADFCF] pb-2">
              Itemized Order Receipt
            </h3>

            <div className="divide-y divide-[#EADFCF]/60">
              {order.items.map((cartItem: CartItem) => {
                const menuItem = cartItem.item || cartItem.menuItem;
                return (
                  <div
                    key={menuItem.id}
                    className="py-3 flex items-center justify-between text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-lg bg-[#F8F2E7] border border-[#EADFCF] text-[#382820] font-bold text-xs flex items-center justify-center">
                        {cartItem.quantity}×
                      </span>
                      <span className="font-medium text-[#382820]">{menuItem.name}</span>
                    </div>
                    <span className="font-semibold text-[#382820]">
                      ₹{menuItem.price * cartItem.quantity}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Calculations Breakdown */}
            <div className="pt-4 border-t border-[#EADFCF] space-y-2 text-xs sm:text-sm text-[#382820]/80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{order.subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Restaurant GST (5%)</span>
                <span>₹{displayTaxes}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#382820] pt-2 border-t border-[#EADFCF]">
                <span>Total Demo Amount</span>
                <PriceTag price={displayTotal} size="lg" />
              </div>
            </div>

            {order.notes && (
              <div className="p-3.5 rounded-xl bg-[#F8F2E7] border border-[#EADFCF] text-xs text-[#382820]/80">
                <span className="font-semibold text-[#382820] block mb-0.5">Barista Notes:</span>
                <p className="italic">"{order.notes}"</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#EADFCF]">
            <Link
              to="/mellow-bean/menu"
              className="flex-1 py-3.5 px-6 rounded-full bg-[#382820] text-[#FFFEFA] font-medium text-xs sm:text-sm hover:bg-[#382820]/90 transition-all text-center shadow-md flex items-center justify-center gap-2"
            >
              <Coffee className="w-4 h-4 text-[#F0D27A]" />
              <span>Order Another Item</span>
            </Link>
            <Link
              to="/mellow-bean/reservations"
              className="flex-1 py-3.5 px-6 rounded-full bg-[#F0D27A] text-[#382820] font-medium text-xs sm:text-sm hover:bg-[#F0D27A]/90 transition-all text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Reserve a Table Instead</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;

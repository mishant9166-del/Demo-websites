import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { CheckCircle2, Shield, ArrowRight, Package, Truck, MapPin } from 'lucide-react';
import type { SimulatedOrder } from '../types/cart';

export const OrderConfirmationPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const location = useLocation();

  // Try to read order from location state or localStorage
  let order: SimulatedOrder | null = location.state?.order || null;

  if (!order && orderId) {
    try {
      const stored = JSON.parse(localStorage.getItem('object_form_orders') || '[]');
      order = stored.find((o: SimulatedOrder) => o.orderId === orderId) || null;
    } catch {
      // Ignore
    }
  }

  return (
    <div className="bg-[#F7F7F4] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Success Card */}
        <div className="bg-white p-8 sm:p-12 rounded-xs border border-[#E5E5E0] shadow-md text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#2447E8] text-white flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs uppercase font-mono tracking-[0.25em] font-bold text-[#2447E8] block mb-2">
              Demonstration Order Placed
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#252525] mb-2">
              Thank You for Your Order
            </h1>
            <p className="text-xs sm:text-sm text-[#777872] font-light max-w-md mx-auto">
              Your simulated transaction has been logged locally in this browser. No real payment was processed.
            </p>
          </div>

          <div className="inline-block px-5 py-2.5 bg-[#F7F7F4] border border-[#E5E5E0] rounded-xs font-mono text-sm text-[#252525] font-bold">
            Demo Reference ID: {orderId || 'OF-DEMO-001'}
          </div>

          {/* Mandatory Demo Disclosure Banner */}
          <div className="p-4 bg-[#2447E8]/5 border border-[#2447E8]/30 rounded-xs text-left flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#2447E8] shrink-0 mt-0.5" />
            <div className="text-xs text-[#252525]/80 font-light leading-relaxed">
              <strong className="font-bold text-[#252525]">Frontend Demonstration Notice:</strong>{' '}
              This order was created inside your browser’s localStorage. No real financial transaction was executed, no card was charged, and no physical shipment will be dispatched.
            </div>
          </div>
        </div>

        {/* Order Details Breakdown */}
        {order && (
          <div className="bg-white p-6 sm:p-8 rounded-xs border border-[#E5E5E0] shadow-xs space-y-6">
            <h3 className="font-bold text-sm uppercase tracking-wider text-[#252525] pb-3 border-b border-[#E5E5E0] flex items-center gap-2">
              <Package className="w-4 h-4 text-[#2447E8]" />
              <span>Simulated Order Summary</span>
            </h3>

            {/* Items */}
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xs overflow-hidden bg-[#F7F7F4] border border-[#E5E5E0] shrink-0">
                      <img
                        src={item.product.heroImage}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="font-bold text-[#252525] block">{item.product.name}</span>
                      <span className="text-[11px] text-[#777872]">
                        {item.variant.name} &bull; Qty: {item.quantity}
                      </span>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-[#252525]">
                    ₹{(item.product.priceINR * item.quantity).toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>

            {/* Delivery & Destination Address */}
            <div className="pt-4 border-t border-[#E5E5E0] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-[#F7F7F4] rounded-xs space-y-1">
                <span className="font-bold text-[#252525] flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                  <MapPin className="w-3.5 h-3.5 text-[#2447E8]" />
                  Simulated Shipping Address
                </span>
                <p className="text-[#252525] font-semibold">{order.shippingAddress.fullName}</p>
                <p className="text-[#777872]">{order.shippingAddress.streetAddress}</p>
                <p className="text-[#777872]">
                  {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}
                </p>
                <p className="text-[11px] text-[#777872] font-mono">{order.shippingAddress.phone}</p>
              </div>

              <div className="p-4 bg-[#F7F7F4] rounded-xs space-y-1">
                <span className="font-bold text-[#252525] flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                  <Truck className="w-3.5 h-3.5 text-[#2447E8]" />
                  Delivery & Payment Details
                </span>
                <p className="text-[#252525]">
                  <strong>Method:</strong> {order.deliveryMethod}
                </p>
                <p className="text-[#252525]">
                  <strong>Estimated Delivery:</strong> {order.estimatedDeliveryDate}
                </p>
                <p className="text-[#252525]">
                  <strong>Payment Mode:</strong> {order.paymentMethod.toUpperCase()} (Simulated)
                </p>
              </div>
            </div>

            {/* Totals */}
            <div className="pt-4 border-t border-[#E5E5E0] space-y-2 text-xs">
              <div className="flex justify-between text-[#777872]">
                <span>Items Subtotal:</span>
                <span className="font-mono">₹{order.subtotalINR.toLocaleString('en-IN')}</span>
              </div>
              {order.discountINR > 0 && (
                <div className="flex justify-between text-[#FF704F] font-semibold">
                  <span>Discount Applied ({order.appliedDiscountCode}):</span>
                  <span className="font-mono">-₹{order.discountINR.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-[#777872]">
                <span>Delivery:</span>
                <span className="font-mono">
                  {order.shippingFeeINR === 0 ? 'FREE' : `₹${order.shippingFeeINR}`}
                </span>
              </div>
              <div className="pt-2 border-t border-[#E5E5E0] flex justify-between items-center text-sm font-bold text-[#252525]">
                <span>Total Simulated Amount:</span>
                <span className="text-xl font-mono text-[#2447E8]">
                  ₹{order.totalINR.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="text-center pt-2">
          <Link
            to="/object/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#252525] hover:bg-[#2447E8] text-white text-xs uppercase font-bold tracking-widest rounded-xs shadow-md transition-colors"
          >
            <span>Continue Shopping Objects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

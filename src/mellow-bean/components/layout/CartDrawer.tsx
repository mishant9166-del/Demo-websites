import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { PriceTag } from '../common/PriceTag';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    taxes,
    finalTotal,
    totalCount,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-[#382820]/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFEFA] shadow-2xl flex flex-col border-l border-[#EADFCF] animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-[#EADFCF] flex items-center justify-between bg-[#F8F2E7]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#F0D27A] text-[#382820] flex items-center justify-center font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-fraunces text-lg font-bold text-[#382820]">
                  Your Pickup Basket
                </h3>
                <p className="text-xs text-[#382820]/70 font-medium">
                  {totalCount} {totalCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-[#382820]/70 hover:text-[#382820] hover:bg-black/5 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F8F2E7] text-[#B77A4A] flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-fraunces text-lg font-bold text-[#382820]">
                    Your basket is empty
                  </h4>
                  <p className="text-xs text-[#382820]/70 max-w-xs leading-relaxed">
                    Explore our specialty coffees, fresh croissants, and brunch plates to begin a pickup order.
                  </p>
                </div>
                <Link
                  to="/mellow-bean/menu"
                  onClick={() => setIsCartOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-[#382820] text-[#FFFEFA] text-xs font-bold hover:bg-[#251a14] transition-colors"
                >
                  Browse Menu
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.menuItem.id}
                  className="p-4 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] flex gap-3.5 items-center justify-between"
                >
                  <img
                    src={item.menuItem.image}
                    alt={item.menuItem.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#EADFCF]"
                  />

                  <div className="flex-1 min-w-0 space-y-1">
                    <h5 className="font-fraunces font-bold text-sm text-[#382820] truncate">
                      {item.menuItem.name}
                    </h5>
                    <PriceTag amount={item.menuItem.price * item.quantity} size="sm" />

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-2 pt-1">
                      <div className="flex items-center rounded-lg border border-[#EADFCF] bg-white overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}
                          className="p-1 hover:bg-[#F8F2E7] text-[#382820] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#382820] min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                          className="p-1 hover:bg-[#F8F2E7] text-[#382820] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.menuItem.id)}
                        className="p-1 text-red-500 hover:text-red-700 transition-colors ml-auto"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#EADFCF] bg-[#F8F2E7] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#382820]/80">
                  <span>Subtotal:</span>
                  <PriceTag amount={subtotal} size="sm" />
                </div>
                <div className="flex justify-between text-[#382820]/80">
                  <span>Cafe GST (5%):</span>
                  <PriceTag amount={taxes} size="sm" />
                </div>
                <div className="flex justify-between text-base font-bold text-[#382820] pt-2 border-t border-[#EADFCF]">
                  <span>Total Amount:</span>
                  <PriceTag amount={finalTotal} size="md" />
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  to="/mellow-bean/order"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#F0D27A] text-[#382820] font-bold text-sm shadow-md hover:bg-[#e6c669] active:scale-[0.98] transition-all"
                >
                  <span>Proceed to Pickup Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <p className="text-[11px] text-center text-[#382820]/60">
                  Demo order simulation • No payment required
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

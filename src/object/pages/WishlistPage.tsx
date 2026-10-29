import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { STORE_PRODUCTS } from '../data/products';
import { PriceDisplay } from '../components/products/PriceDisplay';

export const WishlistPage: React.FC = () => {
  const { wishlistSlugs, toggleWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const savedProducts = STORE_PRODUCTS.filter((p) => wishlistSlugs.includes(p.slug));

  const handleMoveToCart = (product: (typeof STORE_PRODUCTS)[0]) => {
    addToCart(product, product.colors[0], 1);
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Header */}
      <section className="bg-[#F7F7F4] border-b border-[#E5E5E0] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FF704F] mb-1">
              <Heart className="w-3.5 h-3.5 fill-[#FF704F]" />
              <span>Saved Archive</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#252525]">
              My Wishlist ({savedProducts.length})
            </h1>
          </div>

          {savedProducts.length > 0 && (
            <button
              type="button"
              onClick={clearWishlist}
              className="text-xs uppercase font-bold text-[#777872] hover:text-[#FF704F] transition-colors"
            >
              Clear All Wishlist
            </button>
          )}
        </div>
      </section>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {savedProducts.length === 0 ? (
          <div className="py-24 text-center space-y-4 max-w-md mx-auto">
            <Heart className="w-12 h-12 text-[#E5E5E0] mx-auto stroke-1" />
            <h3 className="text-xl font-bold text-[#252525]">Your wishlist is empty</h3>
            <p className="text-xs text-[#777872]">
              Explore our everyday carry, ambient lighting, and desktop collections and tap the heart icon on any piece to save it for later.
            </p>
            <div className="pt-2">
              <Link
                to="/object/shop"
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#2447E8] text-white text-xs uppercase font-bold tracking-wider rounded-xs hover:bg-[#1D3BC5] transition-colors"
              >
                <span>Discover Objects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {savedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-[#E5E5E0] rounded-xs overflow-hidden flex flex-col justify-between group hover:border-[#2447E8] transition-all"
              >
                <div>
                  <div className="aspect-square relative overflow-hidden bg-[#F7F7F4]">
                    <img
                      src={product.heroImage}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      type="button"
                      onClick={() => toggleWishlist(product.slug)}
                      aria-label="Remove from wishlist"
                      className="absolute top-2.5 right-2.5 p-2 bg-white/90 text-[#FF704F] hover:bg-white rounded-full shadow-xs"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="p-4 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-[#777872] tracking-wider block">
                      {product.categoryLabel}
                    </span>
                    <Link to={`/object/product/${product.slug}`}>
                      <h4 className="text-sm font-bold text-[#252525] group-hover:text-[#2447E8] transition-colors line-clamp-1">
                        {product.name}
                      </h4>
                    </Link>
                    <PriceDisplay
                      priceINR={product.priceINR}
                      originalPriceINR={product.originalPriceINR}
                      isSale={product.isSale}
                      size="sm"
                    />
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    type="button"
                    onClick={() => handleMoveToCart(product)}
                    className="w-full py-2.5 bg-[#252525] hover:bg-[#2447E8] text-white text-xs uppercase font-bold tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Move to Bag</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

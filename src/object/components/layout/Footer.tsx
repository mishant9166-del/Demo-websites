import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { STORE_CONFIG } from '../../config/storeConfig';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#252525] text-[#F7F7F4] pt-16 pb-12 border-t border-[#383838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <Link to="/object" className="inline-block">
              <span className="font-sans text-2xl font-black tracking-tight text-white uppercase">
                OBJECT <span className="text-[#2447E8] font-light">&</span> FORM
              </span>
            </Link>
            <p className="text-xs uppercase tracking-widest text-[#FF704F] font-semibold">
              {STORE_CONFIG.tagline}
            </p>
            <p className="text-sm text-[#777872] max-w-sm font-light leading-relaxed">
              {STORE_CONFIG.description}
            </p>
          </div>

          <div className="lg:col-span-7 bg-[#1F1F1F] p-6 sm:p-8 rounded-xs border border-[#333333]">
            <h4 className="text-base font-bold text-white mb-2">
              Join the Object Journal
            </h4>
            <p className="text-xs text-[#777872] mb-4">
              Receive early access to seasonal product drops, studio stories, and design essays. Enjoy 10% off with code <strong className="text-white">WELCOME10</strong>.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-[#2447E8]/20 border border-[#2447E8] text-[#2447E8] rounded-xs text-xs">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you. You’ve been subscribed to our demo newsletter!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-[#252525] border border-[#383838] rounded-xs text-xs text-white placeholder:text-[#777872] focus:outline-none focus:border-[#2447E8]"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#2447E8] hover:bg-[#1D3BC5] text-white text-xs uppercase font-semibold tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-[#383838] text-xs">
          {/* Shop */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Shop</h5>
            <ul className="space-y-2 text-[#777872]">
              <li><Link to="/object/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/object/category/bags" className="hover:text-white transition-colors">Bags & Carry</Link></li>
              <li><Link to="/object/category/home-living" className="hover:text-white transition-colors">Home & Living</Link></li>
              <li><Link to="/object/category/desk-work" className="hover:text-white transition-colors">Desk & Work</Link></li>
              <li><Link to="/object/category/drinkware" className="hover:text-white transition-colors">Drinkware</Link></li>
              <li><Link to="/object/category/gifts" className="hover:text-white transition-colors">Curated Gifts</Link></li>
            </ul>
          </div>

          {/* About & Brand */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Brand</h5>
            <ul className="space-y-2 text-[#777872]">
              <li><Link to="/object/about" className="hover:text-white transition-colors">Our Philosophy</Link></li>
              <li><Link to="/object/about#materials" className="hover:text-white transition-colors">Material Standards</Link></li>
              <li><Link to="/object/shop?filter=sale" className="hover:text-white transition-colors">Curated Specials</Link></li>
              <li><Link to="/object/wishlist" className="hover:text-white transition-colors">Saved Wishlist</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Assistance</h5>
            <ul className="space-y-2 text-[#777872]">
              <li><Link to="/object/contact" className="hover:text-white transition-colors">Customer Care</Link></li>
              <li><Link to="/object/faq" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/object/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
              <li><Link to="/object/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/object/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Studio Details */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px]">Studio Atelier</h5>
            <p className="text-[#777872] leading-relaxed">
              {STORE_CONFIG.contact.studio}
            </p>
            <p className="text-[#777872] font-mono">
              {STORE_CONFIG.contact.email}
            </p>
            <p className="text-[#777872]">
              {STORE_CONFIG.contact.hours}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Disclaimer & Copyright */}
        <div className="pt-8 border-t border-[#383838] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#777872]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#2447E8] shrink-0" />
            <span>
              {STORE_CONFIG.demoNotice}
            </span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} OBJECT & FORM. Crafted for portfolio demonstration.
          </div>
        </div>
      </div>
    </footer>
  );
};

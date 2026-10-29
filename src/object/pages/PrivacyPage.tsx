import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <Link
            to="/object"
            className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#2447E8] hover:underline mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Store</span>
          </Link>
          <span className="text-[11px] uppercase font-mono font-bold tracking-widest text-[#777872] block mb-1">
            Legal & Trust
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#252525]">Privacy Policy</h1>
          <p className="text-xs text-[#777872] mt-1">Effective Date: October 2026 (Demonstration Draft)</p>
        </div>

        <div className="p-4 bg-[#F7F7F4] rounded-xs border-l-4 border-[#2447E8] flex items-start gap-3 text-xs text-[#777872]">
          <Shield className="w-5 h-5 text-[#2447E8] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Demonstration Notice:</strong> OBJECT & FORM is a frontend development portfolio prototype. No personal data, tracking cookies, or payment card records are transmitted to third-party databases. All cart and wishlist states exist exclusively within your browser’s localStorage.
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-[#777872] font-light leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#252525]">1. Information Stored Locally</h2>
            <p>
              When using this store demonstration, the application records temporary variables such as shopping cart items, selected product variants, wishlist favorites, and simulated checkout addresses inside your client browser’s <code className="bg-[#F7F7F4] px-1.5 py-0.5 text-[#252525] rounded font-mono text-xs">localStorage</code>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#252525]">2. Payment Information Security</h2>
            <p>
              No real financial payments are accepted or processed on this website. Forms requesting simulated UPI IDs, demo cash on delivery options, or simulated card credentials are sandboxed for UI demonstration purposes and never communicate with real banking APIs.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#252525]">3. Clearing Your Data</h2>
            <p>
              You can instantly reset all stored cart items, simulated order references, and saved wishlist items by clearing your browser cache or clicking "Clear" in the shopping cart and wishlist panels.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

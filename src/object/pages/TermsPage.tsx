import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';

export const TermsPage: React.FC = () => {
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
            Store Policies
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#252525]">Terms & Conditions</h1>
          <p className="text-xs text-[#777872] mt-1">Effective Date: October 2026 (Demonstration Terms)</p>
        </div>

        <div className="p-4 bg-[#F7F7F4] rounded-xs border-l-4 border-[#2447E8] flex items-start gap-3 text-xs text-[#777872]">
          <Shield className="w-5 h-5 text-[#2447E8] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Demonstration Notice:</strong> All products, pricing, inventory numbers, and order submissions shown on OBJECT & FORM are simulated components of a frontend developer portfolio showcase.
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-[#777872] font-light leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#252525]">1. Product Descriptions and Pricing</h2>
            <p>
              Product names, descriptions, images, and prices in Indian Rupees (INR) are curated demonstration fixtures designed to model a premium independent lifestyle design brand. They do not constitute binding commercial agreements or real inventory reservations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#252525]">2. Simulated Orders & Delivery Estimates</h2>
            <p>
              Completing the checkout flow creates a demonstration order record with an auto-generated reference number. No courier tracking number is registered with postal carriers, and no physical packages will be delivered.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#252525]">3. Intellectual Property & Photography</h2>
            <p>
              Lifestyle imagery used across this demo has been sourced from curated Unsplash royalty-free editorial photography to showcase responsive e-commerce web design.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

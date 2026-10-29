import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '../../data/menu';
import { SectionHeading } from '../common/SectionHeading';
import { MenuItemCard } from '../menu/MenuItemCard';

export const FeaturedMenu: React.FC = () => {
  // The 8 specifically requested featured products
  const targetSlugs = [
    'flat-white',
    'iced-vanilla-latte',
    'espresso',
    'butter-croissant',
    'cinnamon-roll',
    'avocado-toast',
    'pancakes-seasonal-fruit',
    'grilled-sandwich',
  ];

  const featuredList = targetSlugs
    .map((slug) => MENU_ITEMS.find((item) => item.slug === slug))
    .filter(Boolean) as typeof MENU_ITEMS;

  return (
    <section className="py-20 lg:py-28 bg-[#FFFEFA] border-y border-[#EADFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeading
            badge="The House Favourites"
            badgeVariant="butter"
            alignment="left"
            title="Morning staples &amp; all-day delights."
            subtitle="From velvety flat whites and crackly laminated croissants to hearty sourdough brunch platters, here are the eight dishes our regulars keep coming back for."
          />

          <Link
            to="/mellow-bean/menu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#F8F2E7] border border-[#EADFCF] text-sm font-bold text-[#382820] hover:bg-[#F0D27A]/30 transition-colors shadow-2xs shrink-0 self-start md:self-auto"
          >
            <span>Explore Full 20+ Item Menu</span>
            <ArrowRight className="w-4 h-4 text-[#B77A4A]" />
          </Link>
        </div>

        {/* 8 Featured Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredList.map((item) => (
            <MenuItemCard key={item.id} item={item} variant="standard" />
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import type { ProductItem } from '../../types/product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: ProductItem[];
  columns?: 2 | 3 | 4;
  viewMode?: 'grid' | 'list';
  emptyMessage?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  columns = 4,
  viewMode = 'grid',
  emptyMessage = 'No products found.',
}) => {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center bg-white border border-[#E5E5E0] rounded-xs p-8">
        <p className="text-sm font-medium text-[#252525]">{emptyMessage}</p>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} viewMode="list" />
        ))}
      </div>
    );
  }

  const columnClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <div className={`grid ${columnClass} gap-4 sm:gap-6`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} viewMode="grid" />
      ))}
    </div>
  );
};

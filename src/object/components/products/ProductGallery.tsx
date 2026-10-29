import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeImage = images[selectedIndex] || images[0];

  return (
    <div className="space-y-4">
      {/* Main Image Stage */}
      <div className="aspect-square w-full bg-[#FFFFFF] rounded-xs border border-[#E5E5E0] overflow-hidden relative group">
        <img
          src={activeImage}
          alt={`${productName} view ${selectedIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#252525] text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs border border-[#E5E5E0]">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`w-20 h-20 bg-white rounded-xs border-2 overflow-hidden shrink-0 transition-all ${
                selectedIndex === idx
                  ? 'border-[#2447E8] scale-102 shadow-xs'
                  : 'border-[#E5E5E0] opacity-75 hover:opacity-100'
              }`}
            >
              <img src={img} alt="thumb" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

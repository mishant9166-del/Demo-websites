import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Heart,
  ChevronRight,
  ShieldCheck,
  Ruler,
  Check,
  Calendar,
} from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';
import EyewearCard from '../components/eyewear/EyewearCard';
import { eyewearCollection } from '../data/eyewear';
import { useFavorites } from '../context/FavoritesContext';

export function EyewearDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const item = eyewearCollection.find((f) => f.slug === slug);

  const { isFavorite, toggleFavorite } = useFavorites();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  if (!item) {
    return <Navigate to="/visora/eyewear" replace />;
  }

  const favorite = isFavorite(item.id);
  const selectedColor = item.colorOptions[selectedColorIndex] || item.colorOptions[0];

  const relatedFrames = eyewearCollection
    .filter((f) => f.id !== item.id && (f.category === item.category || f.material === item.material))
    .concat(eyewearCollection.filter((f) => f.id !== item.id))
    .slice(0, 4);

  return (
    <div className="bg-[#F7F5EF] min-h-screen pb-20">
      {/* Breadcrumb Header */}
      <div className="border-b border-[#E4E4DE] bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#687581]">
            <Link to="/visora" className="hover:text-[#15263B]">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/visora/eyewear" className="hover:text-[#15263B]">
              Eyewear Atelier
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-[#15263B] truncate max-w-xs sm:max-w-md">
              {item.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Product Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Product Photography Display */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-[#E4E4DE] shadow-md aspect-[4/3] p-8 flex items-center justify-center">
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Badges */}
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#15263B] text-white">
                  {item.category}
                </span>
                {item.isBestseller && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#5C9995] text-white">
                    Bestseller
                  </span>
                )}
              </div>

              {/* Heart Toggle */}
              <button
                type="button"
                onClick={() => toggleFavorite(item.id)}
                className={`absolute top-6 right-6 p-3 rounded-full transition-all ${
                  favorite
                    ? 'bg-red-50 text-red-500 shadow-xs'
                    : 'bg-[#F7F5EF] text-[#687581] hover:text-red-500'
                }`}
                aria-label={favorite ? 'Remove from saved' : 'Save frame to favorites'}
              >
                <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* In-Studio Guarantee Note */}
            <div className="p-4 rounded-2xl bg-white border border-[#E4E4DE] flex items-center justify-between text-xs text-[#687581]">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#5C9995]" />
                Includes Calfskin Case &amp; Microfiber Lens Cloth
              </span>
              <span className="font-semibold text-[#15263B]">
                2-Year Atelier Structural Guarantee
              </span>
            </div>
          </div>

          {/* Right Column: Frame Specifications & Actions */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-[#E4E4DE] shadow-xs space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#5C9995]">
                {item.category}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl text-[#15263B] mt-1">
                {item.name}
              </h1>

              {/* Price display in INR */}
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-2xl sm:text-3xl font-medium text-[#15263B]">
                  ₹{item.priceINR.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[#687581]">
                  (Includes standard single-vision anti-reflective lenses)
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#687581] leading-relaxed pt-4 border-t border-[#E4E4DE]">
              {item.description}
            </p>

            {/* Color Finish Selector */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-xs font-semibold text-[#15263B] mb-3">
                <span>Color Finish:</span>
                <span className="text-[#5C9995]">{selectedColor.name}</span>
              </div>
              <div className="flex gap-3">
                {item.colorOptions.map((c, i) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedColorIndex(i)}
                    className={`relative w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColorIndex === i
                        ? 'border-[#15263B] ring-2 ring-[#5C9995]/50 scale-110'
                        : 'border-black/20 hover:scale-105'
                    }`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={`Select ${c.name} finish`}
                  >
                    {selectedColorIndex === i && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white shadow-xs" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="p-4 rounded-2xl bg-[#F7F5EF] border border-[#E4E4DE] space-y-2.5 text-xs">
              <div className="flex justify-between">
                <span className="text-[#687581]">Frame Silhouette:</span>
                <span className="font-semibold text-[#15263B]">{item.frameShape}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#687581]">Primary Material:</span>
                <span className="font-semibold text-[#15263B]">{item.material}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#687581]">Anatomical Dimensions:</span>
                <span className="font-semibold text-[#15263B] flex items-center gap-1">
                  <Ruler className="w-3.5 h-3.5 text-[#5C9995]" />
                  {item.dimensions}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#687581]">Face Profile Fit:</span>
                <span className="font-medium text-[#15263B] text-right max-w-[200px] truncate">
                  {item.suitableFor}
                </span>
              </div>
            </div>

            {/* Key Features List */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#15263B]">
                Craftsmanship Details:
              </span>
              <ul className="space-y-1.5 text-xs text-[#687581]">
                {item.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#5C9995] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#E4E4DE] space-y-3">
              <Link
                to={`/visora/book-appointment?service=prescription-updates`}
                className="w-full py-4 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#15263B] text-white hover:bg-[#5C9995] text-center transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#5C9995]" />
                <span>Reserve In-Studio Fitting &amp; Styling</span>
              </Link>

              <button
                type="button"
                onClick={() => toggleFavorite(item.id)}
                className={`w-full py-3 rounded-full text-xs font-semibold border transition-colors flex items-center justify-center gap-2 ${
                  favorite
                    ? 'border-red-200 bg-red-50 text-red-600'
                    : 'border-[#E4E4DE] bg-[#F7F5EF] text-[#15263B] hover:bg-white'
                }`}
              >
                <Heart className={`w-4 h-4 ${favorite ? 'fill-current' : ''}`} />
                <span>{favorite ? 'Saved in Your Favorites' : 'Save to Favorites List'}</span>
              </button>
            </div>

            {/* Honest Demo Store Disclaimer */}
            <div className="pt-2 text-[11px] text-[#687581] text-center leading-relaxed">
              <p>
                <strong>Demo Store Notice:</strong> VISORA is an interactive portfolio website. Products and prices in INR are illustrative. Frame fittings are confirmed during private in-studio appointments.
              </p>
            </div>
          </div>
        </div>

        {/* Related Eyewear Recommendations */}
        <div className="mt-20 pt-12 border-t border-[#E4E4DE]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#5C9995]">
                COMPLEMENTARY STYLES
              </span>
              <h3 className="font-display text-2xl text-[#15263B] mt-1">
                You May Also Appreciate
              </h3>
            </div>
            <Link
              to="/visora/eyewear"
              className="text-xs font-semibold text-[#15263B] hover:text-[#5C9995]"
            >
              All Eyewear →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedFrames.map((frame) => (
              <EyewearCard key={frame.id} item={frame} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EyewearDetailPage;

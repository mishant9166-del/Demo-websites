import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ImageWithFallback from '../common/ImageWithFallback';

export function ClinicIntro() {
  const values = [
    {
      title: 'Digital Wavefront Refraction',
      desc: 'Sub-millimeter mapping of corneal aberrations for sharper low-light and night vision.',
    },
    {
      title: 'Ergonomic Desktop Analysis',
      desc: 'Personalized focal tailoring for software developers, designers, and dual-monitor workers.',
    },
    {
      title: 'Curated Architectural Frames',
      desc: 'Sustainably sourced bio-acetates and medical-grade Japanese titanium tailored to facial width.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-[#E4E4DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Modern Examination Room Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E4E4DE] aspect-[4/3] bg-[#F7F5EF]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80"
                alt="Modern, serene VISORA optical examination suite with precision equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Inset Quote card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 max-w-[280px] bg-[#FAF7F2] border border-[#E4E4DE] rounded-2xl p-5 shadow-xl hidden sm:block">
              <span className="text-2xl text-[#5C9995] font-display leading-none">“</span>
              <p className="text-xs italic text-[#15263B] font-medium mt-1">
                Clarity is not merely 20/20 on a wall chart; it is effortless comfort in your daily environment.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#5C9995]" />
                <span className="text-[10px] font-bold text-[#15263B]">VISORA Clinical Philosophy</span>
              </div>
            </div>
          </div>

          {/* Right: Studio Story and Values */}
          <div className="lg:col-span-6">
            <SectionHeading
              badge="THE VISORA ETHOS"
              title="A Thoughtful Intersect of"
              italicWord="Science &amp; Style."
              subtitle="We established VISORA to challenge the sterile, rushed experience of commercial optical chains. In our studio, consultations are unhurried, diagnostic imaging is comprehensive, and frame selection is treated as personal architectural styling."
            />

            <div className="mt-8 space-y-4">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-[#F7F5EF] border border-[#E4E4DE] flex items-start gap-3.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-white text-[#5C9995] flex items-center justify-center shrink-0 border border-[#E4E4DE]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-base text-[#15263B]">
                      {v.title}
                    </h4>
                    <p className="text-xs text-[#687581] mt-0.5 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E4E4DE] flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs text-[#687581]">
                <Sparkles className="w-3.5 h-3.5 text-[#5C9995]" />
                <span>Private vision consultation suites</span>
              </div>

              <Link
                to="/visora/about"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#15263B] text-white hover:bg-[#5C9995] transition-colors shadow-xs"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClinicIntro;

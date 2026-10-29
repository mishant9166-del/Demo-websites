import { Eye, ShieldCheck, Sliders } from 'lucide-react';

export function TrustStrip() {
  const points = [
    {
      title: 'Comprehensive Vision Exams',
      desc: '50-minute clinical refractions with wavefront digital imaging and intraocular diagnostics.',
      icon: Eye,
    },
    {
      title: 'Experienced Eye-Care Team',
      desc: 'Licensed optometrists and vision scientists focused on clear, unhurried consultations.',
      icon: ShieldCheck,
    },
    {
      title: 'Curated Optical Collections',
      desc: 'Japanese titanium and Italian bio-acetate frames fitted with custom-surfaced lenses.',
      icon: Sliders,
    },
  ];

  return (
    <section className="bg-white border-y border-[#E4E4DE] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F5EF]/50 border border-[#E4E4DE]/60"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E4E4DE] text-[#15263B] flex items-center justify-center shrink-0 shadow-2xs">
                  <Icon className="w-5 h-5 text-[#5C9995]" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-[#15263B] leading-tight">
                    {pt.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#687581] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustStrip;

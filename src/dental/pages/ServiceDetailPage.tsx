import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Calendar, CheckCircle2, AlertCircle, HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { services } from '../data/services';
import { ServiceCard } from '../components/services/ServiceCard';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { Badge } from '../components/common/Badge';
import { NotFoundPage } from './NotFoundPage';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!service) {
    return <NotFoundPage />;
  }

  const relatedServices = services.filter((s) => service.relatedSlugs.includes(s.slug));

  return (
    <div className="py-12 sm:py-16 bg-[#FAFCFB] text-[#152B32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#687A80] mb-8">
          <Link to="/dental" className="hover:text-[#0D9488] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <Link to="/dental/services" className="hover:text-[#0D9488] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className="text-[#152B32] font-semibold">{service.name}</span>
        </nav>

        {/* Back Link */}
        <Link
          to="/dental/services"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D9488] hover:text-[#115E59] transition-colors mb-6 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Services</span>
        </Link>

        {/* Treatment Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E3ECE9] mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="teal">{service.category}</Badge>
              {service.duration && <Badge variant="slate">Typical Session: {service.duration}</Badge>}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#152B32]">
              {service.name}
            </h1>
            <p className="text-base text-[#687A80] mt-3 max-w-2xl font-normal leading-relaxed">
              {service.shortDescription}
            </p>
          </div>

          <Link
            to={`/dental/appointment?service=${service.slug}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0D9488] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#115E59] transition-colors shadow-md shadow-[#0D9488]/20 self-start lg:self-end shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule for this Treatment</span>
          </Link>
        </div>

        {/* Main Hero Visual & Clinical Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-[#E3ECE9] aspect-[16/10] bg-[#E6F6F2] shadow-md mb-8">
              <ImageWithFallback
                src={service.heroImage}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#152B32]">Treatment Overview</h2>
              <p className="text-sm sm:text-base text-[#687A80] leading-relaxed">
                {service.overview}
              </p>
            </div>
          </div>

          {/* Clinical Suitability Notice & Consultation Expectations */}
          <div className="lg:col-span-5 space-y-6">
            {/* Clinical Assessment Warning Box */}
            <div className="p-5 rounded-2xl bg-[#E6F6F2] border border-[#0D9488]/30 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#0D9488] shrink-0 mt-0.5" />
              <p className="text-xs text-[#115E59] leading-relaxed font-medium">
                <strong>Professional Medical Notice:</strong> Treatment suitability must be assessed in person by a qualified dental professional. Results vary based on individual oral anatomy and biological healing response.
              </p>
            </div>

            {/* Common Reasons to Seek Treatment */}
            <div className="bg-white border border-[#E3ECE9] rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#152B32]">
                Common Indications for Treatment
              </h3>
              <ul className="space-y-2.5">
                {service.reasonsToSeek.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#687A80] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to Expect During Consultation */}
            <div className="bg-white border border-[#E3ECE9] rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#152B32]">
                What to Expect at Your Visit
              </h3>
              <ul className="space-y-2.5">
                {service.whatToExpect.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#687A80] leading-relaxed">
                    <Sparkles className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3-Step Treatment Process */}
        <div className="mb-16 bg-white border border-[#E3ECE9] rounded-3xl p-8 sm:p-12 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0D9488] block mb-2">
              CLINICAL PROTOCOL
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#152B32]">
              General Treatment Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.treatmentProcess.map((step) => (
              <div key={step.step} className="p-5 rounded-2xl bg-[#FAFCFB] border border-[#E3ECE9] space-y-2">
                <span className="text-xl font-black text-[#0D9488]">
                  {step.step}
                </span>
                <h3 className="text-sm font-bold text-[#152B32]">{step.title}</h3>
                <p className="text-xs text-[#687A80] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Treatment Specific FAQs */}
        {service.faqs.length > 0 && (
          <div className="mb-16 max-w-3xl">
            <h2 className="text-2xl font-bold text-[#152B32] mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#0D9488]" />
              <span>Questions About {service.name}</span>
            </h2>

            <div className="space-y-3">
              {service.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-[#E3ECE9] rounded-2xl bg-white overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#152B32] hover:text-[#0D9488] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#0D9488] transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-[#687A80] leading-relaxed border-t border-[#E3ECE9]/60 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Related Treatments */}
        {relatedServices.length > 0 && (
          <div className="pt-12 border-t border-[#E3ECE9]">
            <h3 className="text-xl font-bold text-[#152B32] mb-6">
              Complementary Dental Treatments
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <ServiceCard key={rel.id} service={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

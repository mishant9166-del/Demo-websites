import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  Users,
  Target,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Activity,
  CheckCircle2,
  ShieldCheck,
  Award,
} from 'lucide-react';
import ImageWithFallback from '../components/common/ImageWithFallback';
import ServiceCard from '../components/services/ServiceCard';
import { programs } from '../data/programs';
import { services } from '../data/services';

export function ProgramDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return <Navigate to="/rehabora/programs" replace />;
  }

  // Find associated services
  const associatedServices = services.filter((s) =>
    program.associatedServiceSlugs.includes(s.slug)
  );

  return (
    <div className="bg-[#FAFBF8] min-h-screen pb-20">
      {/* Breadcrumb Header */}
      <div className="border-b border-[#E1E8E2] bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#727C75]">
            <Link to="/rehabora" className="hover:text-[#285A49]">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/rehabora/programs" className="hover:text-[#285A49]">
              Programs
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-[#285A49] truncate max-w-xs sm:max-w-md">
              {program.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Program Banner */}
      <section className="pt-10 pb-14 bg-white border-b border-[#E1E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F2EC] text-[#285A49] mb-4">
                <Users className="w-3.5 h-3.5 text-[#72A88A]" />
                Audience: {program.targetAudience}
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#242C28] tracking-tight leading-tight">
                {program.title}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-[#727C75] leading-relaxed">
                {program.shortDesc}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-[#E1E8E2]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#242C28]">
                  <Calendar className="w-4 h-4 text-[#D8A66A]" />
                  <span>Estimated Duration: {program.durationWeeks}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#285A49]">
                  <Activity className="w-4 h-4" />
                  <span>Graded Milestone Reviews</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/rehabora/appointment"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-[#D8A66A]" />
                  Request Program Consultation
                </Link>
                <Link
                  to="/rehabora/programs"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-[#727C75] hover:text-[#285A49] bg-[#FAFBF8] border border-[#E1E8E2] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  All Programs
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-[#E1E8E2] aspect-[4/3] bg-[#E8F2EC]">
                <ImageWithFallback
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-12">
            {/* Core Program Goals */}
            <div className="bg-white rounded-3xl p-8 border border-[#E1E8E2] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#E8F2EC] text-[#285A49] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#242C28]">
                  Core Program Goals
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#727C75] mb-6">
                Our rehabilitation programs establish realistic, functional objectives tailored to personal movement demands:
              </p>
              <div className="space-y-3">
                {program.goals.map((goal, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFBF8] border border-[#E1E8E2]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#285A49] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#242C28] leading-relaxed">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus Areas */}
            <div className="bg-white rounded-3xl p-8 border border-[#E1E8E2] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#E8F2EC] text-[#285A49] flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#242C28]">
                  Focus Areas &amp; Clinical Progressions
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#727C75] mb-6">
                Throughout the program, sessions incorporate progressive training stages:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {program.focusAreas.map((area, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#FAFBF8] border border-[#E1E8E2] flex items-center gap-2.5 text-xs font-semibold text-[#285A49]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#72A88A]" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How Progress Reviews Work */}
            <div className="bg-[#FAFBF8] rounded-3xl p-8 border border-[#D4E5D9]">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-[#D8A66A]" />
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#242C28]">
                  How Progress Reviews Work
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#727C75] leading-relaxed">
                {program.progressReviews}
              </p>
              <div className="mt-4 p-4 rounded-xl bg-white border border-[#E1E8E2] text-xs text-[#242C28]">
                <strong>Individualized Adaptation:</strong> Every participant responds differently to tissue loading. If you require extra time at any phase, our physiotherapist adjusts exercise complexity accordingly.
              </div>
            </div>

            {/* Program FAQs */}
            {program.faqs.length > 0 && (
              <div className="bg-white rounded-3xl p-8 border border-[#E1E8E2] shadow-xs">
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#242C28] mb-6">
                  Frequently Asked Questions About This Program
                </h2>
                <div className="space-y-4">
                  {program.faqs.map((faq, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#FAFBF8] border border-[#E1E8E2]">
                      <h4 className="font-heading text-sm font-bold text-[#242C28] mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-xs text-[#727C75] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-[#E1E8E2] shadow-sm sticky top-28">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F2EC] text-[#285A49] mb-3">
                Ready to begin?
              </span>
              <h3 className="font-heading text-lg font-bold text-[#242C28]">
                Start with a Comprehensive Assessment
              </h3>
              <p className="mt-2 text-xs text-[#727C75] leading-relaxed">
                Before initiating this program, our team performs a baseline consultation to confirm suitability and customize parameters.
              </p>

              <div className="mt-5 space-y-2.5 pt-4 border-t border-[#E1E8E2]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#727C75]">Duration:</span>
                  <span className="font-bold text-[#242C28]">{program.durationWeeks}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#727C75]">Target Audience:</span>
                  <span className="font-bold text-[#242C28]">{program.targetAudience}</span>
                </div>
              </div>

              <Link
                to="/rehabora/appointment"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#285A49] text-white hover:bg-[#193D32] transition-colors shadow-xs"
              >
                Request Program Assessment
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <div className="mt-6 p-4 rounded-xl bg-[#FAFBF8] border border-[#E1E8E2] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#72A88A] shrink-0 mt-0.5" />
                <p className="text-[11px] text-[#727C75] leading-relaxed">
                  Programs are tailored following an initial clinical examination. Timeline estimates vary based on healing rates and functional tolerance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Associated Services */}
        {associatedServices.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#E1E8E2]">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-[#72A88A]">
                INTEGRATED THERAPIES
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#242C28] mt-1">
                Complementary Services
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {associatedServices.map((srv, idx) => (
                <ServiceCard key={srv.id} service={srv} index={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgramDetailPage;

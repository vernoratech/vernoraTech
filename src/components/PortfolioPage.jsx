import React, { useEffect, useMemo, useCallback } from 'react';
import { domains } from '../data/projects';
import ScreenshotPlaceholder from './ScreenshotPlaceholder';
import { ArrowLeft, ExternalLink, Layers, ShieldCheck, TrendingUp, ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BackButton = React.memo(function BackButton({ fallbackToHome = true }) {
  const navigate = useNavigate();
  const location = useLocation();

  const backTarget = useMemo(() => {
    if (location.state?.from) {
      return location.state.from;
    }
    if (document.referrer && !document.referrer.includes(window.location.origin)) {
      return document.referrer;
    }
    return fallbackToHome ? '/' : null;
  }, [location.state?.from, fallbackToHome]);

  const handleBack = useCallback(() => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    if (backTarget?.startsWith('http') && backTarget.includes(window.location.origin)) {
      navigate(backTarget.replace(window.location.origin, ''));
      return;
    }

    if (backTarget?.startsWith('http')) {
      window.location.href = backTarget;
      return;
    }

    if (backTarget) {
      navigate(backTarget);
      return;
    }
  }, [backTarget, navigate]);

  return (
    <button
      type="button"
      onClick={handleBack}
      className="group inline-flex items-center gap-2 rounded-full border border-[#1A3A6F]/10 bg-white px-5 py-2 text-sm font-semibold text-[#1A3A6F] shadow-sm transition-all duration-200 hover:border-[#1A3A6F]/30 hover:bg-[#D9E4F2]/50 hover:pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DA3DB] focus-visible:ring-offset-2"
    >
      <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
      <span>Back to Home</span>
    </button>
  );
});

const heroHighlights = [
  'Discovery-to-launch partnership across strategy, design, and build',
  'Compliance-ready implementations tuned for scale and security',
  'Continuous optimization programs that compound growth over time',
];

const HeroHighlight = ({ icon: Icon, text }) => (
  <li className="flex items-start gap-3 rounded-2xl border border-[#D9E4F2] bg-white p-4 text-sm leading-relaxed text-[#6E7787] shadow-sm transition-colors hover:border-[#2DA3DB]/30">
    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#D9E4F2]">
      <Icon size={14} className="text-[#1A3A6F]" />
    </div>
    <span>{text}</span>
  </li>
);

const PortfolioPage = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#2DA3DB]/20">
      <main className="relative isolate overflow-hidden pt-28 pb-20">

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Top Gradient */}
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#D9E4F2]/40 via-[#FAFAFA] to-[#FAFAFA]" />

          {/* Orbs/Blobs */}
          <div className="absolute left-1/2 top-[-100px] -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#2DA3DB]/5 blur-3xl" />
          <div className="absolute right-0 top-40 -z-10 h-[400px] w-[400px] translate-x-1/3 rounded-full bg-[#1A3A6F]/5 blur-3xl" />
          <div className="absolute left-0 top-96 -z-10 h-[300px] w-[300px] -translate-x-1/3 rounded-full bg-[#2DA3DB]/10 blur-3xl" />
        </div>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header Section */}
          <div className="flex flex-col items-center text-center">
            <BackButton fallbackToHome={Boolean(props.onBackToHome)} />

            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#2DA3DB]/20 bg-[#2DA3DB]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#1A3A6F]">
              <span>Strategic Portfolio</span>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-[#1C1F26] sm:text-5xl lg:text-6xl tracking-tight">
              Domains We Power <span className="text-[#2DA3DB]">End-to-End</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6E7787]">
              Explore how VernoraTech partners with high-performing teams to architect, deliver, and scale solutions that create measurable business impact.
            </p>

            {/* Hero Highlights */}
            <ul className="mt-12 grid w-full max-w-5xl gap-4 text-left sm:grid-cols-3">
              <HeroHighlight
                icon={Layers}
                text="Discovery-to-launch partnership across strategy, design, and build"
              />
              <HeroHighlight
                icon={ShieldCheck}
                text="Compliance-ready implementations tuned for scale and security"
              />
              <HeroHighlight
                icon={TrendingUp}
                text="Continuous optimization programs that compound growth over time"
              />
            </ul>
          </div>

          {/* Projects Grid */}
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {domains.map((domain, index) => (
              <div
                key={index}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#D9E4F2] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#2DA3DB]/40 hover:shadow-xl hover:shadow-[#1A3A6F]/5 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Card Header: Number & Category */}
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-[#D9E4F2] transition-colors group-hover:text-[#2DA3DB]/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="rounded-full bg-[#FAFAFA] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1A3A6F] border border-[#D9E4F2]">
                    {domain.name}
                  </div>
                </div>

                {/* Image Area */}
                <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#D9E4F2]/50 bg-[#FAFAFA]">
                  <ScreenshotPlaceholder
                    label={domain.name}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                    imageSrc={domain.imageSrc}
                  />
                </div>
                {/* Content */}
                <div className="mt-6 flex flex-1 flex-col">
                  <h3 className="text-xl font-bold text-[#1C1F26] group-hover:text-[#2DA3DB] transition-colors">
                    {domain.headline}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6E7787]">
                    {domain.summary}
                  </p>

                  <div className="my-6 h-px w-full bg-[#D9E4F2]/60" />

                  {/* Focus Areas List */}
                  <ul className="space-y-2.5">
                    {domain.focusAreas.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2.5 text-sm text-[#6E7787]">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2DA3DB]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results Footer */}
                <div className="mt-6 rounded-xl bg-[#F0F7FF] border border-[#D9E4F2] p-4">
                  <p className="text-sm font-medium text-[#1A3A6F]">
                    <span className="block text-xs uppercase tracking-wider text-[#2DA3DB] font-bold mb-1">Impact</span>
                    {domain.results}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 flex flex-col items-center gap-8 text-center border-t border-[#D9E4F2] pt-16">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-[#1C1F26]">Ready to unlock similar outcomes?</h2>
              <p className="mt-3 text-[#6E7787]">
                Our team pairs with you from the first workshop to launch day and beyond. Let’s map the journey together.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <button
                onClick={props.onBackToHome}
                className="px-6 py-3 text-sm font-semibold text-[#6E7787] hover:text-[#1A3A6F] transition-colors"
              >
                Maybe later
              </button>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1A3A6F] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1A3A6F]/20 transition-all duration-200 hover:bg-[#2DA3DB] hover:shadow-[#2DA3DB]/30 hover:-translate-y-0.5"
              >
                <span>Connect with VernoraTech</span>
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PortfolioPage;

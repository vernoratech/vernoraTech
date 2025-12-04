import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Rocket,
  TrendingUp,
  Globe,
  BarChart3,
  ArrowRight,
  Check,
  CheckCircle2,
  Server,
  Megaphone,
  Settings,
  ChevronRight,
  Zap,
  Presentation
} from 'lucide-react';

const Phase_05 = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deliverables = [
    { title: "Live Production URL", desc: "Your fully functional application, accessible to the world." },
    { title: "Admin Training Session", desc: "Recorded workshop on how to manage your content." },
    { title: "Analytics Dashboard", desc: "Google Analytics 4 & Search Console integration." },
    { title: "SEO Foundation", desc: "Sitemap submission, robots.txt, and meta tag optimization." },
    { title: "Documentation Wiki", desc: "Technical guides for future developers or maintenance." },
    { title: "30-Day Warranty", desc: "Free bug fixes for any issues discovered post-launch." }
  ];

  const methods = [
    {
      id: "01",
      title: "Deployment Strategy",
      desc: "Zero-downtime release using CI/CD pipelines. We flip the switch without breaking the user experience.",
      icon: <Server className="w-5 h-5" />
    },
    {
      id: "02",
      title: "Analytics Integration",
      desc: "Setting up the data layer. We track conversions, user flows, and events so you can measure ROI immediately.",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      id: "03",
      title: "Performance Tuning",
      desc: "Final optimization pass. Minifying assets, enabling compression, and verifying Core Web Vitals.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: "04",
      title: "Handover & Training",
      desc: "Empowering your team. We walk you through the CMS/Admin panel so you aren't dependent on us for small edits.",
      icon: <Presentation className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1C1F26] selection:bg-[#2DA3DB]/20">

      {/* --- BACKGROUND GRID (Control Room Effect) --- */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#1C1F26 1px, transparent 1px), linear-gradient(90deg, #1C1F26 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 border-b border-gray-100 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-[#2DA3DB]" />
              <span className="text-[#2DA3DB] font-mono text-sm uppercase tracking-widest">Phase_05 // Liftoff</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#1C1F26] tracking-tight leading-tight mb-8">
              Launch & <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-2 h-4 bg-[#2DA3DB]/20 -z-10 transform -skew-x-12" />
                Scale
              </span>
            </h1>

            <p className="text-xl text-[#6E7787] max-w-2xl leading-relaxed">
              The build is done, but the journey is just beginning. Phase 05 is about a flawless go-live event, equipping your team for success, and turning on the growth engines.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button
                className="flex items-center gap-3 bg-[#1C1F26] text-white px-8 py-4 rounded-none border-2 border-[#1C1F26] hover:bg-white hover:text-[#1C1F26] transition-all group"
                onClick={() => navigate('/contact')}
              >
                <span className="font-bold tracking-wide">Initiate Launch</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="px-8 py-4 border-2 border-gray-200 flex items-center gap-3 text-[#6E7787]">
                <Globe size={18} />
                <span className="font-mono text-sm">Status: Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-[#FAFAFA] z-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white border border-[#D9E4F2] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-[#E8F1FC] flex items.center justify-center text-[#1A3A6F]">
                  <Rocket className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#6E7787]">
                  Primary Outcome
                </h3>
              </div>
              <p className="text-base font-semibold text-[#1C1F26] mb-2">
                A controlled launch with no surprises.
              </p>
              <p className="text-sm text-[#6E7787] leading-relaxed">
                From DNS to production deploys, we orchestrate the go-live so customers experience a smooth first impression.
              </p>
            </div>

            <div className="bg-white border border-[#D9E4F2] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-[#E8F1FC] flex items.center justify-center text-[#1A3A6F]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#6E7787]">
                  Growth Focus
                </h3>
              </div>
              <p className="text-base font-semibold text-[#1C1F26] mb-2">
                Launch with measurement baked in.
              </p>
              <p className="text-sm text-[#6E7787] leading-relaxed">
                Analytics, events, and funnels configured from day one so you can see whats working and double down.
              </p>
            </div>

            <div className="bg-white border border-[#D9E4F2] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-[#E8F1FC] flex items.center justify-center text-[#1A3A6F]">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#6E7787]">
                  Ideal For
                </h3>
              </div>
              <p className="text-base font-semibold text-[#1C1F26] mb-2">
                Teams who treat launch as the start, not the end.
              </p>
              <p className="text-sm text-[#6E7787] leading-relaxed">
                Use Phase 05 when you want a launch that sets you up for continuous improvement and experimentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- METHODOLOGY GRID --- */}
      <section className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-[#1C1F26] mb-2">The Growth Engine</h2>
              <p className="text-[#6E7787]">Ensuring your product succeeds in the wild.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-gray-200 mx-8 mb-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {methods.map((item) => (
              <div key={item.id} className="group relative bg-white border border-gray-200 p-8 hover:border-[#1A3A6F] transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-6xl font-black text-[#1C1F26]">{item.id}</span>
                </div>

                <div className="w-12 h-12 bg-[#F0F7FF] flex items-center justify-center mb-6 text-[#1A3A6F]">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#1C1F26] mb-3 group-hover:text-[#2DA3DB] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#6E7787] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DELIVERABLES (The "Manifest") --- */}
      <section className="relative py-24 bg-[#1C1F26] text-white z-10">
        {/* Technical decorations */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2DA3DB] to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2DA3DB] to-transparent opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">

            {/* Left: Context */}
            <div>
              <span className="text-[#2DA3DB] font-mono text-xs uppercase tracking-widest mb-4 block">Handover_Protocol.pdf</span>
              <h2 className="text-4xl font-bold mb-6">Total Ownership</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We don't lock you in. At the end of Phase 05, you hold the keys to the kingdom. We provide comprehensive documentation and training so you can manage your digital asset with confidence.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#2DA3DB]">
                <CheckCircle2 size={16} />
                <span>Lifetime Access to Code</span>
              </div>
            </div>

            {/* Right: The List */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="mt-1 w-5 h-5 rounded-full border border-[#2DA3DB] flex items-center justify-center text-[#2DA3DB] shrink-0">
                    <Check size={10} strokeWidth={4} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- FINAL CTA: The "Next Step" --- */}
      <section className="relative py-24 bg-white z-10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-16 mx-auto bg-[#2DA3DB]/10 flex items-center justify-center rounded-full mb-8">
            <Rocket size={32} className="text-[#2DA3DB]" />
          </div>
          <h2 className="text-3xl font-bold text-[#1C1F26] mb-6">Ready to Start Your Journey?</h2>
          <p className="text-[#6E7787] mb-10 text-lg">
            From the first sketch to the final launch, we are your dedicated technical partner. Let's build something remarkable together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-[#1A3A6F] text-white px-10 py-4 rounded-none hover:bg-[#2DA3DB] transition-colors font-bold tracking-wide"
          >
            Start Your Project
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Phase_05;
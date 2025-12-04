import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PenTool,
  Layout,
  Palette,
  MousePointer2,
  ArrowRight,
  Check,
  Layers,
  Smartphone,
  Monitor,
  Figma,
  ChevronRight,
  ScanFace,
  CheckCircle2
} from 'lucide-react';

const Phase_02 = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deliverables = [
    { title: "Information Architecture", desc: "Sitemap & navigation flow optimized for conversion." },
    { title: "Low-Fidelity Wireframes", desc: "Structural blueprints focusing on layout and functionality." },
    { title: "High-Fidelity UI", desc: "Pixel-perfect screens applying your brand identity." },
    { title: "Interactive Prototype", desc: "Clickable simulation of the final product for testing." },
    { title: "Design System", desc: "Component library (buttons, fonts, colors) for consistency." },
    { title: "Responsive Layouts", desc: "Adaptive designs for Mobile, Tablet, and Desktop." }
  ];

  const methods = [
    {
      id: "01",
      title: "User Flow Mapping",
      desc: "Charting the path a user takes to achieve their goal, removing friction points.",
      icon: <GitForkIcon className="w-5 h-5" />
    },
    {
      id: "02",
      title: "Wireframing",
      desc: "Drafting the skeletal framework. No colors, no distractions—just pure structure.",
      icon: <Layout className="w-5 h-5" />
    },
    {
      id: "03",
      title: "Visual Design",
      desc: "Applying typography, color theory, and imagery to breathe life into the structure.",
      icon: <Palette className="w-5 h-5" />
    },
    {
      id: "04",
      title: "Prototyping",
      desc: "Connecting screens to simulate the actual user experience before coding begins.",
      icon: <MousePointer2 className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1C1F26] selection:bg-[#2DA3DB]/20">

      {/* --- BACKGROUND GRID (Blueprint Effect) --- */}
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
              <span className="text-[#2DA3DB] font-mono text-sm uppercase tracking-widest">Phase_02 // Architecture</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#1C1F26] tracking-tight leading-tight mb-8">
              Design with <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-2 h-4 bg-[#2DA3DB]/20 -z-10 transform -skew-x-12" />
                Intent
              </span>
            </h1>

            <p className="text-xl text-[#6E7787] max-w-2xl leading-relaxed">
              We don't just make it look good; we make it work. Phase 02 transforms abstract requirements into tangible, interactive experiences that prioritize usability and conversion.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button
                className="flex items-center gap-3 bg-[#1C1F26] text-white px-8 py-4 rounded-none border-2 border-[#1C1F26] hover:bg-white hover:text-[#1C1F26] transition-all group"
                onClick={() => navigate('/contact')}
              >
                <span className="font-bold tracking-wide">Start Design Sprint</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="px-8 py-4 border-2 border-gray-200 flex items-center gap-3 text-[#6E7787]">
                <PenTool size={18} />
                <span className="font-mono text-sm">Est. Duration: 2-3 Weeks</span>
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
                <div className="h-10 w-10 rounded-full bg-[#E8F1FC] flex items-center justify-center text-[#1A3A6F]">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#6E7787]">
                  Primary Outcome
                </h3>
              </div>
              <p className="text-base font-semibold text-[#1C1F26] mb-2">
                Experiences that feel effortless and convert.
              </p>
              <p className="text-sm text-[#6E7787] leading-relaxed">
                Transform abstract requirements into clear, testable flows and interfaces your team can rally around.
              </p>
            </div>

            <div className="bg-white border border-[#D9E4F2] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-[#E8F1FC] flex items-center justify-center text-[#1A3A6F]">
                  <Figma className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#6E7787]">
                  Collaboration Format
                </h3>
              </div>
              <p className="text-base font-semibold text-[#1C1F26] mb-2">
                Figma-first, feedback-friendly.
              </p>
              <p className="text-sm text-[#6E7787] leading-relaxed">
                Structured review cycles in Figma with comments, async loom walkthroughs, and focused working sessions.
              </p>
            </div>

            <div className="bg-white border border-[#D9E4F2] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-[#E8F1FC] flex items-center justify-center text-[#1A3A6F]">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#6E7787]">
                  Ideal For
                </h3>
              </div>
              <p className="text-base font-semibold text-[#1C1F26] mb-2">
                Teams who want proof before build.
              </p>
              <p className="text-sm text-[#6E7787] leading-relaxed">
                Perfect if you need a shared vision, stakeholder buy-in, or user testing before committing engineering budget.
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
              <h2 className="text-3xl font-bold text-[#1C1F26] mb-2">The Design Stack</h2>
              <p className="text-[#6E7787]">From sketches to pixel-perfect production assets.</p>
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

      {/* --- DELIVERABLES (The "Design System") --- */}
      <section className="relative py-24 bg-[#1C1F26] text-white z-10">
        {/* Technical decorations */}
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-[#2DA3DB] to-transparent opacity-30" />
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-[#2DA3DB] to-transparent opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">

            {/* Left: Context */}
            <div>
              <span className="text-[#2DA3DB] font-mono text-xs uppercase tracking-widest mb-4 block">Assets_Export.zip</span>
              <h2 className="text-4xl font-bold mb-6">Tangible Results</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                You don't just get "pictures of a website". You get a fully documented design system and an interactive prototype that feels like the real thing.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#2DA3DB]">
                <CheckCircle2 size={16} />
                <span>Ready for Development Handoff</span>
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
            <Layers size={32} className="text-[#2DA3DB]" />
          </div>
          <h2 className="text-3xl font-bold text-[#1C1F26] mb-6">Visualize Your Product</h2>
          <p className="text-[#6E7787] mb-10 text-lg">
            Design is cheaper than code. Validate your ideas with a clickable prototype before committing to development.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-[#1A3A6F] text-white px-10 py-4 rounded-none hover:bg-[#2DA3DB] transition-colors font-bold tracking-wide"
          >
            Review Design Process
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
};

// Helper Icon for User Flow
const GitForkIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
    <path d="M12 12v3" />
  </svg>
);

export default Phase_02;
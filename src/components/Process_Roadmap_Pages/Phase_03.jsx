import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Code2,
  GitBranch,
  Terminal,
  Server,
  ArrowRight,
  Check,
  Cpu,
  CheckCircle2,
  Layers,
  Zap,
  Database,
  ChevronRight,
  Braces
} from 'lucide-react';

const Phase_03 = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deliverables = [
    { title: "Production-Ready Codebase", desc: "Clean, documented, and scalable code (React/Next.js)." },
    { title: "API Integration", desc: "Seamless connections to 3rd party services (Stripe, CMS, CRM)." },
    { title: "Database Schema", desc: "Optimized data structure for speed and reliability." },
    { title: "CI/CD Pipeline", desc: "Automated deployment workflows for instant updates." },
    { title: "Unit & Integration Tests", desc: "Automated testing suites to prevent regression bugs." },
    { title: "Staging Environment", desc: "A replica site for final review before going live." }
  ];

  const methods = [
    {
      id: "01",
      title: "Component Architecture",
      desc: "Building reusable, isolated UI components (Atomic Design) for maintainability.",
      icon: <Layers className="w-5 h-5" />
    },
    {
      id: "02",
      title: "API & Backend Logic",
      desc: "Developing the server-side logic, authentication, and database connections.",
      icon: <Server className="w-5 h-5" />
    },
    {
      id: "03",
      title: "State Management",
      desc: "Ensuring data flows correctly across the application (Redux, Context, Zustand).",
      icon: <Database className="w-5 h-5" />
    },
    {
      id: "04",
      title: "Performance Tuning",
      desc: "Optimizing load times, image rendering, and bundle sizes as we build.",
      icon: <Zap className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1C1F26] selection:bg-[#2DA3DB]/20">

      {/* --- BACKGROUND GRID (Matrix Effect) --- */}
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
              <span className="text-[#2DA3DB] font-mono text-sm uppercase tracking-widest">Phase_03 // Execution</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#1C1F26] tracking-tight leading-tight mb-8">
              Code with <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-2 h-4 bg-[#2DA3DB]/20 -z-10 transform -skew-x-12" />
                Structure
              </span>
            </h1>

            <p className="text-xl text-[#6E7787] max-w-2xl leading-relaxed">
              This is where the blueprint becomes reality. Phase 03 is about writing clean, semantic, and scalable code. We turn static designs into a living, breathing application.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button
                className="flex items-center gap-3 bg-[#1C1F26] text-white px-8 py-4 rounded-none border-2 border-[#1C1F26] hover:bg-white hover:text-[#1C1F26] transition-all group"
                onClick={() => navigate('/contact')}
              >
                <span className="font-bold tracking-wide">Start Build</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="px-8 py-4 border-2 border-gray-200 flex items-center gap-3 text-[#6E7787]">
                <Terminal size={18} />
                <span className="font-mono text-sm">Est. Duration: 4-8 Weeks</span>
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
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#6E7787]">
                  Primary Outcome
                </h3>
              </div>
              <p className="text-base font-semibold text-[#1C1F26] mb-2">
                A stable, scalable production codebase.
              </p>
              <p className="text-sm text-[#6E7787] leading-relaxed">
                Your product is implemented with modern patterns, ready for future features instead of quick hacks.
              </p>
            </div>

            <div className="bg-white border border-[#D9E4F2] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-[#E8F1FC] flex items-center justify-center text-[#1A3A6F]">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#6E7787]">
                  Build Rhythm
                </h3>
              </div>
              <p className="text-base font-semibold text-[#1C1F26] mb-2">
                Short sprints with visible progress.
              </p>
              <p className="text-sm text-[#6E7787] leading-relaxed">
                Weekly demos, preview links, and transparent board updates so you always know what shipped.
              </p>
            </div>

            <div className="bg-white border border-[#D9E4F2] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-[#E8F1FC] flex items-center justify-center text-[#1A3A6F]">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#6E7787]">
                  Ideal For
                </h3>
              </div>
              <p className="text-base font-semibold text-[#1C1F26] mb-2">
                Teams ready to move beyond prototypes.
              </p>
              <p className="text-sm text-[#6E7787] leading-relaxed">
                Best suited for products with validated designs that now need reliable, maintainable engineering.
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
              <h2 className="text-3xl font-bold text-[#1C1F26] mb-2">The Build Process</h2>
              <p className="text-[#6E7787]">Agile sprints focused on incremental delivery.</p>
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

      {/* --- DELIVERABLES (The "Repo") --- */}
      <section className="relative py-24 bg-[#1C1F26] text-white z-10">
        {/* Technical decorations */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2DA3DB] to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2DA3DB] to-transparent opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">

            {/* Left: Context */}
            <div>
              <span className="text-[#2DA3DB] font-mono text-xs uppercase tracking-widest mb-4 block">git push origin main</span>
              <h2 className="text-4xl font-bold mb-6">The Engine Room</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We deliver more than just a URL. You get a robust, tested, and documented codebase that your internal team (or future partners) can easily scale.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#2DA3DB]">
                <GitBranch size={16} />
                <span>Full Source Access</span>
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
            <Code2 size={32} className="text-[#2DA3DB]" />
          </div>
          <h2 className="text-3xl font-bold text-[#1C1F26] mb-6">Ready to Build?</h2>
          <p className="text-[#6E7787] mb-10 text-lg">
            Phase 03 is where the magic happens. Let's turn those wireframes into a high-performance product.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-[#1A3A6F] text-white px-10 py-4 rounded-none hover:bg-[#2DA3DB] transition-colors font-bold tracking-wide"
          >
            Start Development
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default Phase_03;
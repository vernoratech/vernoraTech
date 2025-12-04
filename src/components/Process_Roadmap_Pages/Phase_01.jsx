import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Target,
  Map,
  Users,
  ArrowRight,
  Check,
  Microscope,
  BrainCircuit,
  FileText,
  LayoutDashboard,
  ChevronRight,
  ScanSearch,
  CheckCircle2 // Added CheckCircle2 to imports
} from 'lucide-react';

const Phase_01 = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deliverables = [
    { title: "Stakeholder Canvas", desc: "Alignment on business goals & success metrics." },
    { title: "User Personas", desc: "Detailed profiles of your target audience segments." },
    { title: "Gap Analysis", desc: "Identification of market opportunities & competitor weaknesses." },
    { title: "Tech Stack Report", desc: "Architecture recommendations (React vs. Vue, Node vs. Python)." },
    { title: "Feature Roadmap", desc: "Prioritized list of MVP vs. V2 features." },
    { title: "Project Timeline", desc: "Sprint-by-sprint breakdown of the build phase." }
  ];

  const methods = [
    {
      id: "01",
      title: "Stakeholder Interviews",
      desc: "Deep-dive sessions with your leadership to extract the 'why' behind the product.",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: "02",
      title: "User Research",
      desc: "Analyzing support tickets, analytics, and user behavior to find the 'what'.",
      icon: <Search className="w-5 h-5" />
    },
    {
      id: "03",
      title: "Market Audit",
      desc: " dissecting competitors to ensure your product has a unique value proposition.",
      icon: <Microscope className="w-5 h-5" />
    },
    {
      id: "04",
      title: "Tech Feasibility",
      desc: "Engineers review the requirements to prevent 'impossible' promises.",
      icon: <BrainCircuit className="w-5 h-5" />
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
              <span className="text-[#2DA3DB] font-mono text-sm uppercase tracking-widest">Phase_01 // Initiation</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#1C1F26] tracking-tight leading-tight mb-8">
              The <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-2 h-4 bg-[#2DA3DB]/20 -z-10 transform -skew-x-12" />
                Blueprint
              </span> Phase
            </h1>

            <p className="text-xl text-[#6E7787] max-w-2xl leading-relaxed">
              We don't guess. We engineer. Phase 01 is about rigorous discovery to define the scope, reduce risk, and map the path to ROI before a single line of code is written.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button
                className="flex items-center gap-3 bg-[#1C1F26] text-white px-8 py-4 rounded-none border-2 border-[#1C1F26] hover:bg-white hover:text-[#1C1F26] transition-all group"
                onClick={() => navigate('/contact')}
              >
                <span className="font-bold tracking-wide">Start Discovery</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="px-8 py-4 border-2 border-gray-200 flex items-center gap-3 text-[#6E7787]">
                <ClockIcon size={18} />
                <span className="font-mono text-sm">Est. Duration: 1-2 Weeks</span>
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
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#6E7787]">
                  Primary Outcome
                </h3>
              </div>
              <p className="text-base font-semibold text-[#1C1F26] mb-2">
                A validated product direction your team agrees on.
              </p>
              <p className="text-sm text-[#6E7787] leading-relaxed">
                Move from ideas and assumptions to a concrete narrative that aligns founders, marketing, and engineering.
              </p>
            </div>

            <div className="bg-white border border-[#D9E4F2] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-[#E8F1FC] flex items-center justify-center text-[#1A3A6F]">
                  <Map className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#6E7787]">
                  Collaboration Format
                </h3>
              </div>
              <p className="text-base font-semibold text-[#1C1F26] mb-2">
                Focused workshops, not endless meetings.
              </p>
              <p className="text-sm text-[#6E7787] leading-relaxed">
                A mix of 60–90 minute sessions with your core stakeholders, async reviews, and our internal research sprints.
              </p>
            </div>

            <div className="bg-white border border-[#D9E4F2] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-[#E8F1FC] flex items-center justify-center text-[#1A3A6F]">
                  <LayoutDashboard className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-[#6E7787]">
                  Ideal For
                </h3>
              </div>
              <p className="text-base font-semibold text-[#1C1F26] mb-2">
                Teams about to commit real budget to a build.
              </p>
              <p className="text-sm text-[#6E7787] leading-relaxed">
                Whether you are validating a new product, replatforming, or rebuilding a legacy system, Phase 01 de-risks the next step.
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
              <h2 className="text-3xl font-bold text-[#1C1F26] mb-2">Discovery Modules</h2>
              <p className="text-[#6E7787]">The four pillars of our research process.</p>
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

      <section className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#1C1F26] mb-4">Inside a Typical Discovery</h2>
              <p className="text-[#6E7787] mb-6 leading-relaxed">
                Every engagement is tailored, but most Phase 01 projects follow a similar flow. By the end, your team has the
                clarity to say "yes" or "no" to scope with confidence instead of guesswork.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="mt-1 h-8 w-8 rounded-full bg-[#E8F1FC] flex items-center justify-center text-[#1A3A6F]">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1C1F26]">Alignment Workshop</h3>
                    <p className="text-sm text-[#6E7787] leading-relaxed">
                      Capture business goals, constraints, and success metrics from founders, product, and marketing in one room.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 h-8 w-8 rounded-full bg-[#E8F1FC] flex items-center justify-center text-[#1A3A6F]">
                    <Search className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1C1F26]">Evidence-Backed Research</h3>
                    <p className="text-sm text-[#6E7787] leading-relaxed">
                      Audit analytics, existing funnels, support insights, and competitor experiences to surface the real user problems.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 h-8 w-8 rounded-full bg-[#E8F1FC] flex items-center justify-center text-[#1A3A6F]">
                    <BrainCircuit className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1C1F26]">Technical Framing</h3>
                    <p className="text-sm text-[#6E7787] leading-relaxed">
                      Our engineers stress-test requirements, flag risks early, and recommend the tech stack that fits your constraints.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1 h-8 w-8 rounded-full bg-[#E8F1FC] flex items-center justify-center text-[#1A3A6F]">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1C1F26]">Prioritized Blueprint</h3>
                    <p className="text-sm text-[#6E7787] leading-relaxed">
                      We organize everything into a single, prioritized roadmap with clear trade-offs between MVP and later phases.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0F172A] text-white rounded-3xl p-8 border border-white/10 shadow-[0_24px_60px_rgba(15,23,42,0.7)]">
              <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-[#2DA3DB] mb-4">Sample 7–10 Day Schedule</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3 items-start border-b border-white/5 pb-3">
                  <span className="font-semibold text-white/90 w-20">Day 1–2</span>
                  <p className="text-white/70 flex-1">Kickoff, stakeholder alignment, and success metrics workshop.</p>
                </li>
                <li className="flex gap-3 items-start border-b border-white/5 pb-3">
                  <span className="font-semibold text-white/90 w-20">Day 3–4</span>
                  <p className="text-white/70 flex-1">User and market research, competitor audit, and opportunity mapping.</p>
                </li>
                <li className="flex gap-3 items-start border-b border-white/5 pb-3">
                  <span className="font-semibold text-white/90 w-20">Day 5–6</span>
                  <p className="text-white/70 flex-1">Technical feasibility review and architecture recommendations.</p>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="font-semibold text-white/90 w-20">Day 7–10</span>
                  <p className="text-white/70 flex-1">Synthesis, blueprint creation, feedback loop, and final presentation.</p>
                </li>
              </ul>
            </div>
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
              <span className="text-[#2DA3DB] font-mono text-xs uppercase tracking-widest mb-4 block">Output_Manifest.json</span>
              <h2 className="text-4xl font-bold mb-6 text-[#FAFAFA]">What You Walk Away With</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                At the end of Phase 01, you receive a comprehensive "Project Blueprint". This document is your property—a roadmap that any development team could execute on (though we hope you choose us).
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[#2DA3DB]">
                <CheckCircle2 size={16} />
                <span>100% IP Ownership</span>
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
            <ScanSearch size={32} className="text-[#2DA3DB]" />
          </div>
          <h2 className="text-3xl font-bold text-[#1C1F26] mb-6">Ready to Define Your Vision?</h2>
          <p className="text-[#6E7787] mb-10 text-lg">
            The Discovery phase is a low-risk, high-value engagement to validate your idea before committing to a full build.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 bg-[#1A3A6F] text-white px-10 py-4 rounded-none hover:bg-[#2DA3DB] transition-colors font-bold tracking-wide"
          >
            Schedule Workshop
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
};

// Helper Icons
const ClockIcon = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);

export default Phase_01;
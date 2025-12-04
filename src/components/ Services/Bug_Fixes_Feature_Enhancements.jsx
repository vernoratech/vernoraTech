import React, { useState, useEffect } from 'react';
import {
  Bug,
  Terminal,
  GitMerge,
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
  Rocket,
  MessageSquare,
  ChevronDown,
  RefreshCw,
  Wrench,
  Code2,
  Activity,
  ServerCrash,
  AlertTriangle,
  Clock,
  DollarSign,
  X,
  Check,
  Database,
  Server,
  Layers
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Bug_Fixes_Feature_Enhancements = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const painPoints = [
    {
      title: "Critical Errors",
      desc: "Checkout failures or blank screens costing you sales every minute.",
      icon: <ServerCrash className="w-6 h-6 text-red-500" />,
      bg: "bg-red-50 border-red-100"
    },
    {
      title: "Broken UI/UX",
      desc: "Layout shifts, non-responsive buttons, or mobile glitches hurting brand trust.",
      icon: <Layout className="w-6 h-6 text-orange-500" />,
      bg: "bg-orange-50 border-orange-100"
    },
    {
      title: "Tech Debt",
      desc: "Old, messy code making it impossible to add new features without breaking things.",
      icon: <Activity className="w-6 h-6 text-yellow-500" />,
      bg: "bg-yellow-50 border-yellow-100"
    }
  ];

  const services = [
    {
      title: "Emergency Debugging",
      description: "Fast-response troubleshooting for critical issues. We trace the error logs, identify the root cause, and deploy a hotfix immediately.",
      icon: <Bug className="w-6 h-6 text-white" />,
      color: "bg-red-500"
    },
    {
      title: "Feature Development",
      description: "Add new capabilities to your existing app. Whether it's a new payment gateway, user dashboard, or AI integration, we build it cleanly.",
      icon: <GitMerge className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "Legacy Refactoring",
      description: "Modernize your codebase. We update dependencies, rewrite spaghetti code, and improve maintainability for future growth.",
      icon: <RefreshCw className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Security Patching",
      description: "Close vulnerabilities before they are exploited. We audit your system for SQL injection, XSS, and outdated libraries.",
      icon: <ShieldAlert className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    }
  ];

  const workflow = [
    { step: "01", title: "Code Audit", desc: "We clone your repo and run a deep scan to understand the current architecture and issues." },
    { step: "02", title: "Diagnosis", desc: "We isolate the bug or map out the feature logic, ensuring no side effects on existing code." },
    { step: "03", title: "Development", desc: "We write clean, documented code in a staging environment, following best practices." },
    { step: "04", title: "QA & Merge", desc: "Rigorous testing (unit & integration) before deploying the solution to production." }
  ];

  const faqs = [
    {
      q: "Will you break my live site?",
      a: "Never. We strictly work on a staging/development copy of your site. Changes are only pushed to live (production) once you have tested and approved them on the staging server."
    },
    {
      q: "Can you work with another developer's code?",
      a: "Yes. 80% of our work involves taking over existing projects. We are experts at reading legacy code, understanding the logic, and cleaning it up without needing a full rewrite."
    },
    {
      q: "How do you charge for bug fixes?",
      a: "For small bugs, we offer hourly blocks or a fixed 'per ticket' price. For larger feature builds or refactoring, we provide a project-based quote after an initial audit."
    },
    {
      q: "What tech stacks do you support?",
      a: "We specialize in JavaScript ecosystems (React, Next.js, Node.js), PHP (WordPress, Laravel), and mobile frameworks (Flutter, React Native)."
    }
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#1C1F26]">

      {/* --- HERO: Code Health Monitor --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#1A3A6F]">
        {/* Background Decor */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2DA3DB]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2DA3DB]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2DA3DB]/30 bg-[#2DA3DB]/10 px-4 py-1.5 mb-8 backdrop-blur-md">
                <Terminal size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  Code Rescue & Upgrades
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Don't Let Bugs <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Break Your Business
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Whether it's a critical error killing conversions or a new feature you need yesterday, we provide expert engineering to stabilize and scale your software.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Fix My Issue
                  <Wrench size={18} />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  View Services
                </a>
              </div>
            </div>

            {/* Right Visual: Code Terminal Concept */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-md">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-3xl blur-[60px]" />
              <div className="relative bg-[#1C1F26] rounded-2xl shadow-2xl border border-white/10 overflow-hidden font-mono text-xs sm:text-sm">

                {/* Terminal Header */}
                <div className="bg-[#2D3342] p-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-gray-400">audit_logs.js</div>
                </div>

                {/* Terminal Body */}
                <div className="p-6 space-y-4 text-gray-300">
                  <div className="flex gap-2">
                    <span className="text-green-400">{'>'}</span>
                    <span>Running diagnostics...</span>
                  </div>
                  <div className="text-red-400 bg-red-900/20 p-2 rounded border border-red-500/30">
                    [ERROR] Uncaught TypeError: Cannot read property 'map' of undefined <br />
                    at CheckoutComponent (Line 42)
                  </div>
                  <div className="flex gap-2 opacity-50">
                    <span className="text-blue-400">{'>'}</span>
                    <span>Scanning dependencies...</span>
                  </div>
                  <div className="flex gap-2 animate-pulse">
                    <span className="text-purple-400">{'>'}</span>
                    <span className="text-white">Applying hotfix_v2.1...</span>
                  </div>

                  {/* Success Overlay Animation */}
                  <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded flex items-center gap-3 text-emerald-400">
                    <CheckCircle2 size={18} />
                    <span>System Stabilized. All tests passed.</span>
                  </div>
                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-[#D9E4F2] flex items-center gap-3 animate-bounce delay-1000">
                <div className="w-10 h-10 rounded-full bg-[#1A3A6F] flex items-center justify-center text-white">
                  <Rocket size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#6E7787] font-bold uppercase">Uptime</div>
                  <div className="text-xl font-black text-[#1C1F26]">99.99%</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Pain Points Grid --- */}
      <section className="relative z-20 -mt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-[#1A3A6F]/5 border border-[#D9E4F2] p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#D9E4F2]">
              {painPoints.map((point, idx) => (
                <div key={idx} className="flex flex-col items-center text-center pt-8 md:pt-0 px-4 first:pt-0">
                  <div className={`p-4 rounded-2xl mb-4 ${point.bg}`}>
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1F26] mb-2">{point.title}</h3>
                  <p className="text-sm text-[#6E7787] leading-relaxed max-w-xs">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: The Cost of Downtime --- */}
      <section className="py-24 bg-[#FAFAFA] border-b border-[#D9E4F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-500 font-bold text-xs uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 mb-4 inline-block">
              Urgency
            </span>
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">The Hidden Cost of "Waiting"</h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">
              Every minute your site is broken or outdated, you aren't just losing features—you're losing revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#D9E4F2] shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors">
                  <DollarSign className="w-6 h-6 text-red-500" />
                </div>
                <span className="text-4xl font-black text-[#1C1F26]">68%</span>
              </div>
              <h3 className="text-lg font-bold text-[#1C1F26] mb-2">Cart Abandonment</h3>
              <p className="text-sm text-[#6E7787]">Users leave immediately if a checkout button fails or a page lags.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#D9E4F2] shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-orange-50 rounded-xl group-hover:bg-orange-100 transition-colors">
                  <Activity className="w-6 h-6 text-orange-500" />
                </div>
                <span className="text-4xl font-black text-[#1C1F26]">-40%</span>
              </div>
              <h3 className="text-lg font-bold text-[#1C1F26] mb-2">SEO Traffic Drop</h3>
              <p className="text-sm text-[#6E7787]">Google penalizes sites with console errors and slow interaction times.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#D9E4F2] shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-yellow-50 rounded-xl group-hover:bg-yellow-100 transition-colors">
                  <ShieldAlert className="w-6 h-6 text-yellow-500" />
                </div>
                <span className="text-4xl font-black text-[#1C1F26]">High</span>
              </div>
              <h3 className="text-lg font-bold text-[#1C1F26] mb-2">Security Risk</h3>
              <p className="text-sm text-[#6E7787]">Outdated plugins and libraries are the #1 entry point for hackers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Chaos to Clarity (Visual) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="order-2 lg:order-1">
              <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">Technical Debt</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                From Spaghetti Code to <br />
                <span className="text-[#1A3A6F]">Scalable Architecture</span>
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                If adding a simple feature breaks three other things, you have a code structure problem. We untangle the mess, decouple dependencies, and document everything so your team can move fast again.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-500 shadow-sm">
                    <X className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1C1F26] text-sm">Before: Monolithic & Brittle</h4>
                    <p className="text-xs text-[#6E7787]">One error crashes the whole app.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-500 shadow-sm">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1C1F26] text-sm">After: Modular & Resilient</h4>
                    <p className="text-xs text-[#6E7787]">Isolated components for stability.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual: Chaos vs Order */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2DA3DB]/10 to-[#1A3A6F]/5 rounded-full blur-3xl" />

              <div className="relative bg-white rounded-2xl border border-[#D9E4F2] shadow-2xl p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xs font-bold text-[#6E7787] uppercase tracking-widest">Architecture Visualizer</div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse delay-75" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 h-64">
                  {/* Chaos Side */}
                  <div className="relative border-r border-[#D9E4F2] pr-8 flex items-center justify-center">
                    <div className="absolute top-0 left-0 text-xs font-bold text-red-400">Current State</div>
                    {/* CSS Art for Messy Lines */}
                    <div className="relative w-full h-full opacity-60">
                      <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-red-300 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
                      <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-red-300 transform -translate-x-1/2 -translate-y-1/2 -rotate-12" />
                      <div className="absolute top-1/4 left-1/4 w-24 h-0.5 bg-red-300 transform rotate-90" />
                      <div className="absolute bottom-1/4 right-1/4 w-full h-0.5 bg-red-300 transform -rotate-12" />
                      <div className="absolute w-4 h-4 bg-red-500 rounded-full top-1/3 left-1/3 animate-ping" />
                    </div>
                  </div>

                  {/* Order Side */}
                  <div className="relative flex flex-col justify-center gap-3">
                    <div className="absolute top-0 left-0 text-xs font-bold text-emerald-500">Optimized State</div>
                    <div className="flex justify-center gap-2">
                      <div className="w-12 h-8 rounded border border-emerald-200 bg-emerald-50" />
                      <div className="w-12 h-8 rounded border border-emerald-200 bg-emerald-50" />
                    </div>
                    <div className="flex justify-center">
                      <div className="w-0.5 h-4 bg-emerald-200" />
                    </div>
                    <div className="flex justify-center">
                      <div className="w-28 h-12 rounded border border-[#2DA3DB] bg-[#F0F7FF] flex items-center justify-center text-[10px] text-[#1A3A6F] font-bold shadow-sm">
                        Core Logic
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-0.5 h-4 bg-[#2DA3DB]/30" />
                    </div>
                    <div className="flex justify-center gap-2">
                      <div className="w-8 h-8 rounded-full border border-[#D9E4F2] bg-white" />
                      <div className="w-8 h-8 rounded-full border border-[#D9E4F2] bg-white" />
                      <div className="w-8 h-8 rounded-full border border-[#D9E4F2] bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section id="services" className="py-24 bg-[#FAFAFA] border-y border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Technical Maintenance Suite</h2>
            <p className="text-[#6E7787] mt-4">From putting out fires to building the future, we cover the full lifecycle.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 border border-[#D9E4F2] transition-all duration-300 hover:shadow-xl hover:shadow-[#1A3A6F]/5 hover:-translate-y-1 overflow-hidden"
              >
                <div className="flex items-start gap-6">
                  <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${service.color}`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1C1F26] mb-2">{service.title}</h3>
                    <p className="text-sm text-[#6E7787] leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Process Roadmap --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">How We Fix It</h2>
            <p className="text-[#6E7787] mt-4">A structured approach to ensure quality without breaking things further.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {workflow.map((step, i) => (
              <div key={i} className="relative pt-8 md:pt-0 text-center md:text-left group">
                {/* Connector Line */}
                {i !== workflow.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-[#D9E4F2] -z-10" />
                )}

                <div className="w-12 h-12 mx-auto md:mx-0 rounded-full bg-[#1A3A6F] text-white flex items-center justify-center font-bold text-lg border-4 border-white shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-[#1C1F26] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#6E7787]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Tech Stack --- */}
      <section className="py-20 bg-[#F0F7FF] border-y border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#6E7787] font-semibold uppercase tracking-widest text-xs mb-10">Languages & Frameworks We Speak</p>
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {['React.js', 'Node.js', 'Next.js', 'PHP / Laravel', 'Python', 'AWS'].map((tech, i) => (
              <span key={i} className="text-xl md:text-2xl font-bold text-[#1C1F26] hover:text-[#2DA3DB] transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#1C1F26] text-center mb-12">
            Developer FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white border border-[#D9E4F2] rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === idx ? 'shadow-md border-[#2DA3DB]' : 'hover:border-[#2DA3DB]/50'}`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h4 className={`text-lg font-bold flex items-start gap-3 ${openFaqIndex === idx ? 'text-[#1A3A6F]' : 'text-[#1C1F26]'}`}>
                    <MessageSquare size={20} className={`mt-0.5 shrink-0 ${openFaqIndex === idx ? 'text-[#1A3A6F]' : 'text-[#2DA3DB]'}`} />
                    {faq.q}
                  </h4>
                  <ChevronDown size={20} className={`text-[#6E7787] transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180 text-[#1A3A6F]' : ''}`} />
                </button>

                <div className={`px-6 pb-6 text-[#6E7787] leading-relaxed pl-[3.25rem] transition-all duration-300 ${openFaqIndex === idx ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Bottom CTA --- */}
      <section className="py-24 bg-[#1A3A6F] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#2DA3DB] rounded-full blur-[150px] opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Need a Quick Fix or a Big Feature?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Get a code audit or emergency support. We're ready to deploy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 transition-all cursor-pointer"
            >
              Request Support
              <Rocket size={20} />
            </a>
            <a
              href="https://wa.me/917397825850"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

// Helper for Layout icon (since it's used in painPoints)
const Layout = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <line x1="3" x2="21" y1="9" y2="9" />
    <line x1="9" x2="9" y1="21" y2="9" />
  </svg>
);

export default Bug_Fixes_Feature_Enhancements;
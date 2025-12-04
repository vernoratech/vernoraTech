import React, { useState, useEffect } from 'react';
import {
  Server,
  Cloud,
  ArrowRightLeft,
  ShieldCheck,
  Rocket,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Lock,
  Database,
  Globe,
  ChevronDown,
  HardDrive,
  Zap,
  Settings,
  Network
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Fix_Hosting_Issues_Migration = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- Data ---
  const painPoints = [
    {
      stat: "503",
      desc: "Service Unavailable errors killing your traffic during peak hours.",
      color: "text-red-500"
    },
    {
      stat: "Slow",
      desc: "Shared hosting throttling your CPU, making your site crawl.",
      color: "text-orange-500"
    },
    {
      stat: "Insecure",
      desc: "Outdated PHP versions or unpatched servers leaving you vulnerable.",
      color: "text-yellow-500"
    }
  ];

  const features = [
    {
      title: "Zero-Downtime Migration",
      description: "We move your site while it stays live. We use a staging proxy to ensure the new server is perfect before switching DNS.",
      icon: <ArrowRightLeft className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "Malware Removal",
      description: "If your host suspended you for malware, we clean the files, patch the backdoor, and get you back online fast.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Cloud Setup (AWS/DO)",
      description: "Move away from restrictive shared hosting. We set up scalable VPS environments on DigitalOcean, AWS, or Vercel.",
      icon: <Cloud className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    },
    {
      title: "SSL & DNS Fixes",
      description: "Browser showing 'Not Secure'? We fix SSL certificate chains and untangle complex DNS misconfigurations.",
      icon: <Lock className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    }
  ];

  const comparisonData = [
    { feature: "Resources", vernora: "Dedicated / Isolated", shared: "Shared with 1000s" },
    { feature: "Speed", vernora: "NVMe SSD + CDN", shared: "Slow HDD" },
    { feature: "Security", vernora: "Custom Firewall", shared: "Basic / None" },
    { feature: "Backups", vernora: "Daily Off-site", shared: "Weekly / Paid Add-on" },
    { feature: "Support", vernora: "Developer Direct", shared: "Call Center Script" }
  ];

  const workflow = [
    {
      step: "01",
      title: "Audit & Backup",
      desc: "We scan your current site and take a full off-site backup before touching anything.",
      icon: <HardDrive size={20} />
    },
    {
      step: "02",
      title: "Environment Setup",
      desc: "We provision a new, optimized server tailored to your traffic needs.",
      icon: <Server size={20} />
    },
    {
      step: "03",
      title: "Migration",
      desc: "We transfer files and databases, updating configuration paths and permalinks.",
      icon: <Database size={20} />
    },
    {
      step: "04",
      title: "DNS Switch",
      desc: "We point your domain to the new server. The world sees zero interruption.",
      icon: <Globe size={20} />
    }
  ];

  const faqs = [
    {
      q: "Will my emails stop working?",
      a: "No. We carefully migrate email records (MX records) or help you transition to professional email suites like Google Workspace to ensure no messages are lost."
    },
    {
      q: "How long does migration take?",
      a: "A standard website migration takes 24-48 hours. Emergency fixes (like site down) are prioritized and can often be resolved in under 4 hours."
    },
    {
      q: "Do you support GoDaddy/Bluehost?",
      a: "Yes, we can migrate you AWAY from them to better providers, or we can fix issues within their ecosystem if you are locked into a contract."
    },
    {
      q: "What if the migration fails?",
      a: "We offer a 100% success guarantee. If we cannot migrate your site for any technical reason, we revert everything to its original state and refund you fully."
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

      {/* --- HERO: The Server Rescue --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#1A3A6F]">
        {/* Background Decor */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#2DA3DB]/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2DA3DB]/5 rounded-full blur-[100px] translate-y-1/3 translate-x-1/4" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left relative z-20">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2DA3DB]/30 bg-[#2DA3DB]/10 px-4 py-1.5 mb-8 backdrop-blur-md">
                <Server size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  Infrastructure Expert
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Escaping Hosting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DA3DB] to-white">
                  Nightmares
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Is your site down, slow, or hacked? We fix server issues and migrate you to better hosting without losing a single byte of data.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Fix My Site
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  How Migration Works
                </a>
              </div>
            </div>

            {/* Right Visual: Server Migration Animation */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-md h-auto sm:h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />

              <div className="relative w-full flex flex-col gap-6 sm:h-full sm:flex-row sm:items-center sm:justify-between p-4">

                {/* Old Server (Left) */}
                <div className="w-full sm:w-32 h-48 bg-[#1C1F26] rounded-xl border-2 border-red-500/30 shadow-2xl flex flex-col items-center p-4 relative">
                  <div className="absolute -top-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">Risk</div>
                  <div className="w-full h-1 bg-red-500/50 rounded-full mb-2 animate-pulse" />
                  <div className="w-full h-1 bg-red-500/50 rounded-full mb-2 animate-pulse delay-75" />
                  <div className="mt-auto text-red-400 text-xs font-mono">CPU: 99%</div>
                  <Server size={40} className="text-red-500 mt-4 opacity-50" />
                </div>

                {/* Data Transfer Stream */}
                <div className="flex flex-col items-center gap-4 sm:flex-1 sm:h-20">
                  <div className="flex flex-col items-center gap-3 sm:hidden">
                    <div className="w-1 h-20 bg-[#1A3A6F] rounded-full relative overflow-hidden">
                      <div className="absolute inset-x-0 top-0 h-1/2 bg-[#2DA3DB]" />
                    </div>
                    <div className="bg-white text-[#1A3A6F] p-2 rounded-full shadow-lg animate-bounce">
                      <Database size={20} />
                    </div>
                  </div>
                  <div className="hidden sm:flex flex-1 h-20 items-center justify-center relative px-2">
                    {/* Pipeline */}
                    <div className="w-full h-2 bg-[#1A3A6F] rounded-full relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1/2 h-full bg-[#2DA3DB] animate-[slideRight_1s_infinite]" />
                    </div>
                    {/* Moving Packet */}
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-[#1A3A6F] p-2 rounded-full shadow-lg z-10 animate-bounce">
                      <Database size={20} />
                    </div>
                  </div>
                </div>

                {/* New Server (Right) */}
                <div className="w-full sm:w-32 h-48 bg-white rounded-xl border-4 border-[#2DA3DB] shadow-2xl shadow-[#2DA3DB]/20 flex flex-col items-center p-4 relative sm:scale-110">
                  <div className="absolute -top-3 bg-[#2DA3DB] text-white text-[10px] font-bold px-2 py-0.5 rounded">Optimized</div>
                  <div className="w-full flex gap-1 mb-2">
                    <div className="w-1 h-1 rounded-full bg-green-500" />
                    <div className="w-1 h-1 rounded-full bg-green-500" />
                  </div>
                  <div className="mt-auto text-emerald-600 text-xs font-mono font-bold">CPU: 12%</div>
                  <Cloud size={48} className="text-[#2DA3DB] mt-4" />
                </div>

              </div>

              {/* Floating Status Badge */}
              <div className="hidden sm:flex absolute bottom-12 left-1/2 -translate-x-1/2 bg-[#1C1F26] text-white px-4 py-2 rounded-full shadow-xl items-center gap-2 animate-pulse border border-white/10">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span className="text-xs font-bold">Migration Progress: 100%</span>
              </div>

              {/* Mobile Status Badge */}
              <div className="mt-2 w-full flex justify-center sm:hidden">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#1C1F26] text-white px-4 py-2 shadow-lg border border-white/10">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span className="text-xs font-bold">Migration Progress: 100%</span>
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
            <div className="text-center mb-10">
              <h3 className="text-xl font-bold text-[#1C1F26]">Signs You Need a New Host</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#D9E4F2]">
              {painPoints.map((point, idx) => (
                <div key={idx} className="flex flex-col items-center text-center pt-8 md:pt-0 px-4 first:pt-0 group">
                  <div className={`text-4xl lg:text-5xl font-black mb-2 ${point.color}`}>{point.stat}</div>
                  <p className="text-sm md:text-base text-[#6E7787] leading-relaxed max-w-xs">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section id="features" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Infrastructure Solutions</h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">We don't just move files. We upgrade your entire digital foundation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 border border-[#D9E4F2] transition-all duration-300 hover:shadow-xl hover:shadow-[#1A3A6F]/5 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color.replace('bg-', 'from-')}/20 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-50`} />
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1C1F26] mb-3">{feature.title}</h3>
                <p className="text-sm text-[#6E7787] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Comparison Table --- */}
      <section className="py-24 bg-[#1A3A6F] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#2DA3DB] rounded-full blur-[150px] opacity-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Why Move to Cloud/VPS?
            </h2>
            <p className="text-[#D9E4F2]/80 mt-4 max-w-2xl mx-auto">
              Shared hosting is like taking a bus. VPS is driving your own sports car.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-3 bg-[#F0F7FF] py-4 px-6 border-b border-[#D9E4F2]">
                  <div className="col-span-1 font-bold text-[#1C1F26]">Feature</div>
                  <div className="col-span-1 font-bold text-[#1A3A6F] text-center">Vernora Managed VPS</div>
                  <div className="col-span-1 font-bold text-gray-400 text-center">Cheap Shared Hosting</div>
                </div>
                {comparisonData.map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-4 px-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 items-center">
                    <div className="col-span-1 font-medium text-[#1C1F26] text-sm">{row.feature}</div>
                    <div className="col-span-1 text-center font-bold text-[#1A3A6F] text-sm bg-[#2DA3DB]/10 rounded py-1 flex items-center justify-center gap-2">
                      <CheckCircle2 size={14} className="text-[#2DA3DB]" /> {row.vernora}
                    </div>
                    <div className="col-span-1 text-center text-gray-500 text-sm py-1 flex items-center justify-center gap-2">
                      <AlertTriangle size={14} className="text-orange-400" /> {row.shared}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- The Workflow (Step-by-Step) --- */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="order-2 lg:order-1">
              <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">The Process</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                Safe, Secure, and <span className="text-[#2DA3DB]">Seamless</span>
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                We handle the scary DNS stuff. You just wake up to a faster website.
              </p>

              <div className="space-y-6">
                {workflow.map((step, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-[#D9E4F2] flex items-center justify-center text-[#1A3A6F] group-hover:border-[#2DA3DB] group-hover:text-[#2DA3DB] transition-colors shadow-sm z-10">
                        {step.icon}
                      </div>
                      {i !== workflow.length - 1 && (
                        <div className="w-0.5 h-full bg-[#D9E4F2] my-2 group-hover:bg-[#2DA3DB]/30 transition-colors" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h4 className="text-lg font-bold text-[#1C1F26] mb-1 group-hover:text-[#2DA3DB] transition-colors">{step.title}</h4>
                      <p className="text-sm text-[#6E7787]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual: Uptime Graph */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-[#2DA3DB]/10 rounded-full blur-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-[#D9E4F2] p-8">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold text-[#1C1F26]">Server Response Time</h4>
                  <div className="flex items-center gap-2 text-xs text-emerald-600 font-bold">
                    <Zap size={12} /> -75% Latency
                  </div>
                </div>

                {/* Line Chart Visual */}
                <div className="h-40 flex items-end justify-between gap-2 relative">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
                    <div className="w-full h-px bg-[#1C1F26]" />
                    <div className="w-full h-px bg-[#1C1F26]" />
                    <div className="w-full h-px bg-[#1C1F26]" />
                  </div>

                  {/* Before (Slow) */}
                  {[80, 75, 90, 85, 80].map((h, i) => (
                    <div key={`old-${i}`} style={{ height: `${h}%` }} className="w-6 bg-red-100 rounded-t-sm" />
                  ))}

                  {/* The Switch */}
                  <div className="w-px h-full bg-[#1C1F26] border-l border-dashed border-gray-400" />

                  {/* After (Fast) */}
                  {[20, 15, 18, 15, 12, 15].map((h, i) => (
                    <div key={`new-${i}`} style={{ height: `${h}%` }} className="w-6 bg-emerald-400 rounded-t-sm animate-[growUp_1s_ease-out]" />
                  ))}
                </div>

                <div className="mt-4 flex justify-between text-xs text-gray-400 font-mono">
                  <span>Old Host</span>
                  <span>Migration</span>
                  <span>New Cloud</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 bg-[#FAFAFA] border-t border-[#D9E4F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#1C1F26] text-center mb-12">
            Migration FAQs
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

      {/* --- CTA Section --- */}
      <section className="py-24 bg-[#1A3A6F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#2DA3DB] rounded-full blur-[150px] opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Emergency? Site Down?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            We offer priority 24/7 support for critical hosting issues. Get back online today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 transition-all cursor-pointer"
            >
              Request Emergency Fix
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

export default Fix_Hosting_Issues_Migration;
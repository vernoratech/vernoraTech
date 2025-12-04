import React, { useState, useEffect } from 'react';
import {
  Layout,
  Monitor,
  Smartphone,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Rocket,
  MessageSquare,
  Wrench,
  Code2,
  Search,
  Zap,
  ChevronDown,
  Layers,
  Eye,
  Maximize
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Broken_Pages_Layout_Fixes = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- Data ---
  const painPoints = [
    {
      stat: "88%",
      desc: "Of online consumers are less likely to return to a site after a bad experience.",
      color: "text-red-500"
    },
    {
      stat: "57%",
      desc: "Of internet users say they won’t recommend a business with a poorly designed mobile site.",
      color: "text-orange-500"
    },
    {
      stat: "SEO",
      desc: "Google uses mobile-first indexing. If your mobile view is broken, your ranking tanks.",
      color: "text-yellow-500"
    }
  ];

  const features = [
    {
      title: "Responsive Realignment",
      description: "Elements overlapping? Text cut off on mobile? We rewrite your CSS Grid and Flexbox layouts to ensure pixel-perfect rendering on every screen size.",
      icon: <Smartphone className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "JavaScript Debugging",
      description: "Fixing broken sliders, non-clickable buttons, and form validation errors. We trace the console logs and patch the script conflicts.",
      icon: <Code2 className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Cross-Browser Compatibility",
      description: "Your site might look great on Chrome but break on Safari. We test and fix rendering issues across all major browsers (Edge, Firefox, Safari).",
      icon: <GlobeIcon className="w-6 h-6 text-white" />,
      color: "bg-purple-500"
    },
    {
      title: "404 & Link Repair",
      description: "Broken links kill SEO. We scan your site, fix dead internal links, and set up proper 301 redirects to preserve your traffic.",
      icon: <Search className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Visual Audit",
      desc: "We manually review your site on 10+ device types to spot layout shifts and glitches.",
      icon: <Eye size={20} />
    },
    {
      step: "02",
      title: "Code Diagnosis",
      desc: "We inspect the DOM and console to find the root cause (CSS conflict or JS error).",
      icon: <Search size={20} />
    },
    {
      step: "03",
      title: "The Fix",
      desc: "We implement clean, semantic code fixes (no hacky patches) in a staging environment.",
      icon: <Wrench size={20} />
    },
    {
      step: "04",
      title: "QA Testing",
      desc: "We verify the fix across devices before pushing the clean code to your live site.",
      icon: <CheckCircle2 size={20} />
    }
  ];

  const faqs = [
    {
      q: "Do you fix WordPress themes?",
      a: "Yes. We can fix broken layouts in Elementor, Divi, Avada, or custom WordPress themes. We also handle conflict resolution between plugins."
    },
    {
      q: "How long does a typical fix take?",
      a: "Most visual glitches and layout issues are resolved within 24 hours. Complex JavaScript conflicts or sitewide responsiveness overhauls may take 48-72 hours."
    },
    {
      q: "Will the fix break something else?",
      a: "No. We follow 'defensive CSS' practices and test changes in a staging environment first to ensure our fix doesn't cause regressions elsewhere."
    },
    {
      q: "Is this a one-time fee?",
      a: "Yes. We quote per issue or per project. You only pay for the fix. However, we do offer monthly maintenance plans if you want ongoing peace of mind."
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

      {/* --- HERO: Visual Triage --- */}
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
            <div className="text-center lg:text-left relative z-20">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2DA3DB]/30 bg-[#2DA3DB]/10 px-4 py-1.5 mb-8 backdrop-blur-md">
                <Layout size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  UI/UX Restoration
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Broken Layouts <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28]">
                  Cost You Customers
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Is your menu broken on mobile? Images overlapping text? We fix visual bugs and responsiveness issues fast, restoring your brand's credibility.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Request a Fix
                  <Wrench size={18} />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  Our Process
                </a>
              </div>
            </div>

            {/* Right Visual: Broken vs Fixed Animation */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-md h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />

              <div className="relative w-full h-full flex items-center justify-center gap-4">

                {/* Broken View (Left/Back) */}
                <div className="absolute left-0 top-10 w-48 h-80 bg-white rounded-xl shadow-xl border border-red-200 transform -rotate-6 scale-90 opacity-80 z-0 flex flex-col overflow-hidden">
                  <div className="bg-red-50 p-2 border-b border-red-100 flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="text-[8px] text-red-400 font-bold uppercase">Broken UI</div>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="w-full h-20 bg-gray-200 rounded-lg relative overflow-hidden">
                      <div className="absolute -right-4 top-4 w-10 h-10 bg-red-400 rounded-full mix-blend-multiply" /> {/* Glitch visual */}
                    </div>
                    <div className="w-[120%] h-2 bg-gray-300 rounded ml-[-10px]" /> {/* Overflowing content */}
                    <div className="w-full h-2 bg-gray-300 rounded" />
                    <div className="w-1/2 h-8 bg-blue-200 rounded translate-x-20" /> {/* Misaligned button */}
                  </div>
                  <div className="absolute inset-0 bg-red-500/10 pointer-events-none" />
                </div>

                {/* Fixed View (Right/Front) */}
                <div className="absolute right-0 top-0 w-56 h-96 bg-white rounded-2xl shadow-2xl border-4 border-[#1C1F26] z-10 flex flex-col overflow-hidden transform rotate-3 transition-transform hover:rotate-0 duration-500">
                  <div className="bg-[#1C1F26] p-3 flex justify-center">
                    <div className="w-16 h-1 bg-gray-600 rounded-full" />
                  </div>
                  <div className="p-5 space-y-4 flex-1 bg-[#FAFAFA]">
                    <div className="w-full h-24 bg-[#F0F7FF] border border-[#2DA3DB]/20 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="text-[#2DA3DB]" size={24} />
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-2 bg-gray-200 rounded" />
                      <div className="w-3/4 h-2 bg-gray-200 rounded" />
                      <div className="w-5/6 h-2 bg-gray-200 rounded" />
                    </div>
                    <div className="w-full h-10 bg-[#1A3A6F] rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-md mt-auto">
                      Click Here
                    </div>
                  </div>

                  {/* Success Badge */}
                  <div className="absolute bottom-4 right-4 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg flex items-center gap-1">
                    <CheckCircle2 size={10} /> FIXED
                  </div>
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
              <h3 className="text-xl font-bold text-[#1C1F26]">Why You Need a Quick Fix</h3>
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

      {/* --- Features Grid --- */}
      <section id="features" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">What We Fix</h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">From minor CSS misalignments to major responsive failures.</p>
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
              Professional Fix vs. Band-Aid
            </h2>
            <p className="text-[#D9E4F2]/80 mt-4 max-w-2xl mx-auto">
              We treat the root cause in the code, ensuring the issue doesn't come back.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-3 bg-[#F0F7FF] py-4 px-6 border-b border-[#D9E4F2]">
                  <div className="col-span-1 font-bold text-[#1C1F26]">Feature</div>
                  <div className="col-span-1 font-bold text-[#1A3A6F] text-center">Vernora Fix</div>
                  <div className="col-span-1 font-bold text-gray-400 text-center">Quick Patch / DIY</div>
                </div>
                {[
                  { feature: "Code Quality", vernora: "Semantic & Clean", diy: "Hacky & Bloated" },
                  { feature: "Device Testing", vernora: "10+ Real Devices", diy: "Desktop Only" },
                  { feature: "Longevity", vernora: "Permanent Solution", diy: "Breaks on Update" },
                  { feature: "Turnaround", vernora: "24-48 Hours", diy: "Unpredictable" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-4 px-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 items-center">
                    <div className="col-span-1 font-medium text-[#1C1F26] text-sm">{row.feature}</div>
                    <div className="col-span-1 text-center font-bold text-[#1A3A6F] text-sm bg-[#2DA3DB]/10 rounded py-1 flex items-center justify-center gap-2">
                      <CheckCircle2 size={14} className="text-[#2DA3DB]" /> {row.vernora}
                    </div>
                    <div className="col-span-1 text-center text-gray-500 text-sm py-1 flex items-center justify-center gap-2">
                      <AlertTriangle size={14} className="text-orange-400" /> {row.diy}
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
                Diagnostic to <span className="text-[#2DA3DB]">Deployment</span>
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                We follow a strict protocol to ensure we fix the bug without breaking anything else.
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

            {/* Right Visual: Responsive Tester */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-[#2DA3DB]/10 rounded-full blur-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-[#D9E4F2] p-8 flex items-center justify-center h-[400px]">

                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Desktop Frame */}
                  <div className="absolute w-[320px] h-[200px] border-4 border-[#1C1F26] rounded-lg bg-white shadow-lg z-0 top-10 left-0 opacity-50">
                    <div className="w-full h-6 bg-gray-100 border-b border-gray-200 mb-2" />
                    <div className="p-2 space-y-2">
                      <div className="w-1/2 h-2 bg-gray-200 rounded" />
                      <div className="w-full h-20 bg-[#F0F7FF] rounded" />
                    </div>
                  </div>

                  {/* Tablet Frame */}
                  <div className="absolute w-[220px] h-[280px] border-4 border-[#1C1F26] rounded-xl bg-white shadow-xl z-10 right-4 top-4 opacity-80">
                    <div className="p-4 space-y-4">
                      <div className="w-full h-32 bg-[#1A3A6F]/10 rounded" />
                      <div className="space-y-2">
                        <div className="w-full h-2 bg-gray-200 rounded" />
                        <div className="w-3/4 h-2 bg-gray-200 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Frame (Focus) */}
                  <div className="absolute w-[140px] h-[280px] border-4 border-[#2DA3DB] rounded-[20px] bg-white shadow-2xl z-20 bottom-4 left-10 transform scale-110">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#2DA3DB] rounded-full" />
                    <div className="h-full flex flex-col pt-6 px-3 pb-3">
                      <div className="w-full h-24 bg-gradient-to-br from-[#2DA3DB] to-[#1A3A6F] rounded-lg mb-3" />
                      <div className="space-y-2">
                        <div className="w-full h-2 bg-gray-100 rounded" />
                        <div className="w-full h-2 bg-gray-100 rounded" />
                        <div className="w-2/3 h-2 bg-gray-100 rounded" />
                      </div>
                      <div className="mt-auto w-full h-8 bg-[#1A3A6F] rounded text-white text-[8px] flex items-center justify-center font-bold">
                        Perfectly Aligned
                      </div>
                    </div>
                  </div>

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
            Common Questions
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
            Site Looking Broken?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Get a quick diagnosis. We'll identify the issue and give you a fixed price to repair it.
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

// Helper for Globe Icon
const GlobeIcon = ({ className }) => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

export default Broken_Pages_Layout_Fixes;
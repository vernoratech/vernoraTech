import React, { useState, useEffect } from 'react';
import {
  Zap,
  Timer,
  TrendingUp,
  Search,
  Smartphone,
  Database,
  Globe,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Rocket,
  Activity,
  Server,
  Image as ImageIcon,
  MessageSquare,
  ChevronDown,
  Layers,
  Code,
  ShieldCheck,
  RefreshCcw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Fix_Slow_Website = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const painPoints = [
    {
      stat: "53%",
      desc: "of mobile users leave a site that takes longer than 3 seconds to load.",
      color: "text-red-500"
    },
    {
      stat: "-7%",
      desc: "drop in conversions for every 1-second delay in page response.",
      color: "text-orange-500"
    },
    {
      stat: "SEO",
      desc: "Google explicitly penalizes slow websites in search rankings.",
      color: "text-yellow-500"
    }
  ];

  const optimizationSteps = [
    {
      title: "Core Web Vitals Audit",
      desc: "We analyze LCP (Loading), FID (Interactivity), and CLS (Visual Stability) to find exactly what's breaking your score.",
      icon: <Activity className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "Asset Compression",
      desc: "Next-gen image formats (AVIF/WebP), lazy loading, and code splitting to reduce initial payload size by up to 70%.",
      icon: <ImageIcon className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Server-Side Caching",
      desc: "Implementing Redis or Varnish caching strategies so your database isn't hit for every single request.",
      icon: <Server className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    },
    {
      title: "CDN Distribution",
      desc: "Serving your content from edge locations globally (Cloudflare/AWS) to reduce latency for international users.",
      icon: <Globe className="w-6 h-6 text-white" />,
      color: "bg-purple-500"
    }
  ];

  const workflow = [
    { step: "01", title: "Diagnostic Audit", desc: "We run deep scans using Lighthouse, GTmetrix, and New Relic to identify bottlenecks." },
    { step: "02", title: "Staging Setup", desc: "We clone your site to a safe staging environment. Your live site stays up while we work." },
    { step: "03", title: "Optimization", desc: "We compress code, optimize databases, and configure caching layers." },
    { step: "04", title: "Testing & Launch", desc: "We verify the new scores, ensure functionality is perfect, and push live." }
  ];

  const faqs = [
    {
      q: "Will my site go down during optimization?",
      a: "No. We work on a staging environment (a clone of your site) first. Once everything is tested and approved, we push the changes live with zero downtime."
    },
    {
      q: "Do you guarantee a 100/100 score?",
      a: "We guarantee significant improvements (typically 90+ on desktop). However, some third-party scripts (like heavy chat widgets or ads) may make a perfect 100 impossible without removing them."
    },
    {
      q: "Is this a one-time fix or monthly?",
      a: "We offer both. A one-time 'Speed Sprint' fixes current issues. A monthly maintenance plan ensures your site stays fast as you add new content and plugins."
    },
    {
      q: "Does this work for WordPress/Shopify?",
      a: "Yes. While we specialize in custom code, we have deep expertise in optimizing CMS platforms by removing bloat, fixing themes, and optimizing databases."
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

      {/* --- HERO: The Speedometer Concept --- */}
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
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2DA3DB]/30 bg-[#2DA3DB]/10 px-4 py-1.5 mb-8 backdrop-blur-md">
                <Timer size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  Speed Optimization
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Is Your Slow Site <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28]">
                  Killing Sales?
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Don't let seconds cost you clients. We optimize code, images, and servers to achieve sub-second load times and 90+ Google PageSpeed scores.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Get Free Speed Audit
                  <Zap size={18} />
                </a>
                <a
                  href="#results"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  See Results
                </a>
              </div>
            </div>

            {/* Right Visual: Speed Gauge Card */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-md">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />
              <div className="relative bg-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden p-8 text-center">
                <div className="text-[#6E7787] text-sm font-bold uppercase tracking-widest mb-6">Current Performance</div>

                {/* Gauge Graphic (CSS) */}
                <div className="relative w-48 h-24 mx-auto mb-4 overflow-hidden">
                  <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[20px] border-[#F0F7FF] border-t-red-500 border-r-yellow-400 border-b-transparent border-l-transparent transform rotate-[-45deg]" />
                  <div className="absolute bottom-0 left-1/2 w-1 h-24 bg-[#1C1F26] origin-bottom transform -translate-x-1/2 rotate-[-60deg] transition-transform duration-1000 animate-[wiggle_3s_ease-in-out_infinite]" />
                </div>

                <div className="text-5xl font-black text-[#1C1F26] mb-2">34<span className="text-lg text-[#6E7787] font-normal">/100</span></div>
                <div className="text-red-500 font-bold text-sm bg-red-50 inline-block px-3 py-1 rounded-full mb-8">
                  Poor Performance
                </div>

                <div className="space-y-3 text-left">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6E7787]">LCP (Load Time)</span>
                    <span className="text-red-500 font-bold">4.2s</span>
                  </div>
                  <div className="w-full h-2 bg-[#FAFAFA] rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-red-500 rounded-full" />
                  </div>

                  <div className="flex justify-between text-sm mt-4">
                    <span className="text-[#6E7787]">CLS (Stability)</span>
                    <span className="text-yellow-500 font-bold">0.25</span>
                  </div>
                  <div className="w-full h-2 bg-[#FAFAFA] rounded-full overflow-hidden">
                    <div className="h-full w-[50%] bg-yellow-500 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating "After" Badge */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-4 rounded-2xl shadow-xl animate-bounce delay-700">
                <div className="text-xs font-bold uppercase opacity-80">Goal</div>
                <div className="text-2xl font-black">90+</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- The Cost of Slow (Metrics) --- */}
      <section className="relative z-20 -mt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-[#1A3A6F]/5 border border-[#D9E4F2] p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#D9E4F2]">
              {painPoints.map((point, idx) => (
                <div key={idx} className="flex flex-col items-center text-center pt-8 md:pt-0 px-4 first:pt-0">
                  <div className={`text-4xl lg:text-5xl font-black mb-2 ${point.color}`}>{point.stat}</div>
                  <p className="text-sm md:text-base text-[#6E7787] leading-relaxed max-w-xs">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Optimization Stack (Features) --- */}
      <section id="features" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">How We Make It Fly</h2>
            <p className="text-[#6E7787] mt-4">We don't just install a plugin. We re-engineer your site's delivery pipeline.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {optimizationSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 border border-[#D9E4F2] transition-all duration-300 hover:shadow-xl hover:shadow-[#1A3A6F]/5 hover:-translate-y-1 overflow-hidden"
              >
                <div className="flex items-start gap-6">
                  <div className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${step.color}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1C1F26] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#6E7787] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: The Optimization Workflow --- */}
      <section className="py-24 bg-white border-y border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">The Road to 100</h2>
            <p className="text-[#6E7787] mt-4">Our proven process to shave off seconds without breaking your site.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {workflow.map((step, i) => (
              <div key={i} className="relative pt-8 md:pt-0">
                {/* Connector Line */}
                {i !== workflow.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-[#D9E4F2] -z-10" />
                )}

                <div className="relative z-10 flex flex-row md:flex-col items-center gap-4 md:gap-0">
                  <div className="w-12 h-12 rounded-full bg-[#1A3A6F] text-white flex items-center justify-center font-bold text-lg border-4 border-white shadow-lg shrink-0">
                    {step.step}
                  </div>
                  <div className="md:text-center md:mt-6">
                    <h3 className="text-lg font-bold text-[#1C1F26] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#6E7787]">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Before & After Case Study --- */}
      <section id="results" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="order-2 lg:order-1">
              <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">Real Results</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                From "Sluggish" to <span className="text-[#2DA3DB]">Instant</span>
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                See how we transformed a heavy e-commerce site. We reduced the payload by 2MB and cut load times by 75%, resulting in a 24% increase in sales.
              </p>

              <div className="space-y-6">
                {[
                  { label: "Google PageSpeed Mobile", before: "32", after: "94" },
                  { label: "Load Time (LCP)", before: "4.8s", after: "0.9s" },
                  { label: "Total Page Size", before: "3.5MB", after: "800KB" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-[#D9E4F2] shadow-sm">
                    <div className="text-sm font-bold text-[#1C1F26] mb-2">{stat.label}</div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1 flex items-center gap-2 opacity-50">
                        <span className="text-red-500 font-bold text-xl">{stat.before}</span>
                        <span className="text-xs text-[#6E7787] uppercase">Before</span>
                      </div>
                      <ArrowRight size={16} className="text-[#2DA3DB]" />
                      <div className="flex-1 flex items-center gap-2">
                        <span className="text-emerald-500 font-bold text-xl">{stat.after}</span>
                        <span className="text-xs text-[#6E7787] uppercase">After</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual: Code/Speed */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-[#2DA3DB]/10 rounded-3xl transform rotate-3" />
              <div className="relative bg-[#1C1F26] rounded-3xl p-8 shadow-2xl text-white font-mono text-sm leading-relaxed overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-8 bg-[#2D3342] flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="mt-6 space-y-2 opacity-80">
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">optimizeAssets</span> = <span className="text-yellow-400">async</span> () ={">"} {"{"}</p>
                  <p className="pl-4"><span className="text-gray-400">// Compressing images to AVIF...</span></p>
                  <p className="pl-4"><span className="text-purple-400">await</span> <span className="text-blue-400">imagemin</span>(['images/*.jpg'], {"{"}</p>
                  <p className="pl-8">destination: <span className="text-green-400">'build/images'</span>,</p>
                  <p className="pl-8">plugins: [<span className="text-blue-400">mozjpeg</span>({"{ quality: 75 }"})]</p>
                  <p className="pl-4">{"});"}</p>
                  <p className="pl-4"><span className="text-gray-400">// Minifying JS bundles...</span></p>
                  <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-green-400">"Build Complete: 0.8s"</span>;</p>
                  <p>{"}"}</p>
                </div>
                {/* Success Overlay */}
                <div className="absolute bottom-8 right-8 bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 px-4 py-2 rounded-lg flex items-center gap-2 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <CheckCircle2 size={16} /> Optimization Complete
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Platforms We Support --- */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#6E7787] font-semibold uppercase tracking-widest text-sm mb-10">We Optimize Any Stack</p>
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all">
            {["WordPress", "Shopify", "React", "Next.js", "Magento", "Webflow"].map((platform, i) => (
              <span key={i} className="text-xl md:text-2xl font-bold text-[#1C1F26]">{platform}</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: The Guarantee --- */}
      <section className="py-16 bg-[#F0F7FF] border-y border-[#D9E4F2]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#2DA3DB]/20 shadow-sm mb-6">
            <ShieldCheck size={18} className="text-[#2DA3DB]" />
            <span className="font-bold text-[#1A3A6F] text-sm">Risk-Free Guarantee</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C1F26] mb-4">
            Faster or It's Free
          </h2>
          <p className="text-[#6E7787] text-lg leading-relaxed">
            We are so confident in our process that if we can't improve your Google PageSpeed score by at least 20 points (or reach 90+), we'll refund your audit fee. No questions asked.
          </p>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#1C1F26] text-center mb-12">
            Technical Questions
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
            Ready to Go Fast?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Get a free performance audit. We'll show you exactly what's slowing you down and how to fix it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 transition-all cursor-pointer"
            >
              Start Optimization
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

export default Fix_Slow_Website;
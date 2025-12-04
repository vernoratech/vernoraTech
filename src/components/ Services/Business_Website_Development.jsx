import React, { useEffect, useState } from 'react';
import {
  Smartphone,
  Search,
  ShieldCheck,
  Rocket,
  BarChart3,
  ArrowRight,
  Layout,
  Code2,
  Zap,
  MessageSquare,
  X,
  Check,
  ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Business_Website_Development = () => {

  const navigate = useNavigate()

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- Data ---
  const comparisonData = [
    { feature: "Load Speed", vernora: "Sub-second (90+ Score)", diy: "Slow (Bloated Code)" },
    { feature: "SEO Capabilities", vernora: "Advanced Schema & Meta", diy: "Basic / Limited" },
    { feature: "Mobile Responsiveness", vernora: "Perfect on All Devices", diy: "Often Breaks Layouts" },
    { feature: "Security", vernora: "Enterprise-grade SSL & Headers", diy: "Basic Standard" },
    { feature: "Ownership", vernora: "100% Code Ownership", diy: "Platform Lock-in" },
    { feature: "Custom Functionality", vernora: "Unlimited Integrations", diy: "Restricted by Plugins" }
  ];

  const features = [
    {
      title: "Mobile-First Architecture",
      description: "With over 60% of web traffic coming from mobile devices, we don't just 'fit' your site to small screens—we design for them first. Touch-friendly navigation, optimized images, and fluid layouts ensure a premium experience on every device.",
      icon: <Smartphone className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "SEO-Ready Core",
      description: "We build with semantic HTML5, server-side rendering (SSR), and automated sitemaps. Your site is engineered to rank higher on Google from day one, helping customers find you without expensive ads.",
      icon: <Search className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Blazing Performance",
      description: "Speed kills bounce rates. Using Next.js and edge caching, we target Core Web Vitals scores of 90+. No loading spinners, just instant content delivery that keeps visitors engaged.",
      icon: <Zap className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    },
    {
      title: "Bank-Grade Security",
      description: "Sleep easy knowing your digital asset is safe. We implement strict Content Security Policies (CSP), DDoS protection, and automated SSL rotation standard with every build.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "We dive deep into your business model. Who are your customers? What are your competitors doing? We map out a site structure designed to convert visitors into leads."
    },
    {
      step: "02",
      title: "UI/UX Design",
      desc: "Our designers create high-fidelity mockups aligned with your brand identity. You get to review and refine the look before a single line of code is written."
    },
    {
      step: "03",
      title: "Development",
      desc: "We code your site using modern frameworks (React/Next.js). This ensures clean, maintainable code that scales with your business, unlike clunky page builders."
    },
    {
      step: "04",
      title: "Launch & Growth",
      desc: "We handle the technical heavy lifting: domain connection, hosting setup on Vercel/Netlify, and Google Analytics integration for a smooth, stress-free go-live."
    }
  ];

  const faqs = [
    {
      q: "How is this different from Wix or WordPress?",
      a: "Wix and WordPress rely on heavy plugins that slow down your site and are prone to security hacks. We build custom coded sites (using React/Next.js) that are faster, more secure, and fully owned by you—no monthly platform fees for features you don't need."
    },
    {
      q: "How long does it take to build?",
      a: "For a standard 5-page business website, our typical turnaround is 2-3 weeks from the time we receive your content. Complex sites with custom booking engines or portals may take 4-6 weeks."
    },
    {
      q: "Will I be able to update the site myself?",
      a: "Yes! We can integrate a modern Headless CMS (like Sanity or Strapi) that allows you to easily edit text, post blogs, and swap images through a simple dashboard, without touching any code."
    }
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#1C1F26]">

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#1A3A6F]">
        {/* Background Decor */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2DA3DB]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2DA3DB]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2DA3DB]/30 bg-[#2DA3DB]/10 px-4 py-1.5 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DA3DB] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DA3DB]"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
              Accepting New Projects
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
            Websites That Do More Than <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DA3DB] to-white">
              Just Look Good
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#D9E4F2]/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            We engineer high-performance business websites that act as your 24/7 sales engine.
            Fast, secure, and built to convert visitors into loyal clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 cursor-pointer"
            >
              Start Your Project
              <ArrowRight size={18} />
            </a>
            <a
              href="#comparison"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              Why Choose Custom?
            </a>
          </div>
        </div>
      </section>

      {/* --- Bento Grid Features --- */}
      <section className="relative py-24 bg-white z-20 -mt-10 rounded-t-[40px] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26] mb-4">Core Technical Advantages</h2>
            <p className="text-[#6E7787]">We don't rely on drag-and-drop builders. Every line of code is optimized for performance and growth.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-[#FAFAFA] rounded-3xl p-8 border border-[#D9E4F2] transition-all duration-300 hover:shadow-xl hover:shadow-[#1A3A6F]/5 hover:bg-white overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color.replace('bg-', 'from-')}/20 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-50`} />

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md ${feature.color}`}>
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-[#1C1F26] mb-3 group-hover:text-[#1A3A6F] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#6E7787] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Feature Deep Dive (Tabs/Layout) --- */}
      <section className="py-20 bg-white overflow-hidden border-t border-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>
              <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">Why It Matters</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                More Than Just a Digital Brochure
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                Your website is your 24/7 salesperson. In today's digital economy, credibility is judged in seconds. We ensure your first impression counts.
              </p>

              <div className="space-y-6">
                {[
                  { icon: <Layout className="text-[#2DA3DB]" />, title: "Custom UX/UI", desc: "No cookie-cutter templates. Unique designs tailored to your brand." },
                  { icon: <Code2 className="text-[#2DA3DB]" />, title: "Clean Code", desc: "Built on React & Next.js for superior performance and scalability." },
                  { icon: <BarChart3 className="text-[#2DA3DB]" />, title: "Conversion Focused", desc: "Strategic layouts designed to guide visitors toward booking a call." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F0F7FF] flex items-center justify-center border border-[#D9E4F2]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1C1F26]">{item.title}</h4>
                      <p className="text-sm text-[#6E7787] mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2DA3DB] to-[#1A3A6F] rounded-3xl transform rotate-3 opacity-10" />
              <div className="relative bg-[#FAFAFA] rounded-3xl border border-[#D9E4F2] p-2 shadow-2xl">
                <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden relative">
                  {/* Abstract UI Representation */}
                  <div className="absolute top-0 left-0 w-full h-16 bg-[#F0F7FF] border-b border-[#D9E4F2] flex items-center px-6 gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4 h-8 bg-white rounded-md border border-[#D9E4F2]" />
                  </div>
                  <div className="p-8 mt-16 space-y-6">
                    <div className="flex gap-6">
                      <div className="w-2/3 space-y-3">
                        <div className="h-8 w-3/4 bg-[#1A3A6F] rounded-lg opacity-10" />
                        <div className="h-4 w-full bg-[#6E7787] rounded opacity-10" />
                        <div className="h-4 w-5/6 bg-[#6E7787] rounded opacity-10" />
                        <div className="h-10 w-32 bg-[#2DA3DB] rounded-lg opacity-20 mt-4" />
                      </div>
                      <div className="w-1/3 bg-[#D9E4F2] rounded-xl h-32 opacity-50" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map(k => (
                        <div key={k} className="h-24 bg-[#F0F7FF] rounded-xl border border-[#D9E4F2]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Comparison Section (The "VernoraTech Advantage") --- */}
      <section id="comparison" className="py-20 bg-[#F0F7FF] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2DA3DB]/10 rounded-full blur-[80px] -mr-20 -mt-20" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#2DA3DB] font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#2DA3DB]/20 shadow-sm">
              The Quality Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mt-6">
              VernoraTech vs. DIY Builders
            </h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">
              Why investing in custom development pays off compared to Wix, Squarespace, or generic WordPress templates.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-[#D9E4F2] overflow-hidden">
            <div className="grid grid-cols-3 bg-[#1A3A6F] text-white py-5 px-6 font-bold text-sm sm:text-base">
              <div className="col-span-1">Feature</div>
              <div className="col-span-1 text-center text-[#2DA3DB]">VernoraTech</div>
              <div className="col-span-1 text-center text-gray-400">DIY / Templates</div>
            </div>

            {comparisonData.map((item, idx) => (
              <div key={idx} className="grid grid-cols-3 py-5 px-6 border-b border-[#F0F7FF] hover:bg-[#FAFAFA] transition-colors last:border-0 items-center">
                <div className="col-span-1 font-semibold text-[#1C1F26] text-sm sm:text-base">{item.feature}</div>
                <div className="col-span-1 text-center flex justify-center items-center gap-2 font-bold text-[#1A3A6F] bg-[#F0F7FF]/50 py-1 rounded-lg">
                  <Check className="w-4 h-4 text-[#2DA3DB]" />
                  <span className="hidden sm:inline">{item.vernora}</span>
                </div>
                <div className="col-span-1 text-center text-[#6E7787] text-sm flex justify-center items-center gap-2">
                  <X className="w-4 h-4 text-red-400" />
                  <span className="hidden sm:inline">{item.diy}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Process Roadmap --- */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26]">
              From Concept to Launch
            </h2>
            <p className="text-[#6E7787] max-w-2xl mx-auto mt-4">
              A transparent, streamlined workflow designed to get your business online fast without cutting corners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-[#1A3A6F]/10 via-[#2DA3DB]/20 to-[#1A3A6F]/10 -z-10" />

            {processSteps.map((step, idx) => (
              <div key={idx} className="relative pt-8 group">
                <div className="w-12 h-12 rounded-2xl bg-[#1A3A6F] text-white flex items-center justify-center font-bold text-lg mb-6 border-4 border-white relative z-10 group-hover:scale-110 group-hover:bg-[#2DA3DB] transition-all duration-300 shadow-xl shadow-[#1A3A6F]/10">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#1C1F26] mb-3 group-hover:text-[#2DA3DB] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6E7787] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
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

      {/* --- Bottom CTA --- */}
      <section className="py-24 bg-[#1A3A6F] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#2DA3DB] rounded-full blur-[150px] opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to Upgrade Your <br /> Digital Presence?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Get a custom quote tailored to your specific needs. No hidden fees, just results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 transition-all cursor-pointer"
            >
              Get Your Free Quote
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

export default Business_Website_Development;
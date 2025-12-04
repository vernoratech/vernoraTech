import React, { useEffect, useState } from 'react';
import {
  MousePointer2,
  TrendingUp,
  Timer,
  Smartphone,
  Target,
  Zap,
  ArrowRight,
  CheckCircle2,
  XCircle,
  BarChart2,
  Eye,
  Megaphone,
  Rocket,
  Briefcase,
  ShoppingCart,
  Laptop,
  MessageSquare,
  ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Landing_Page_For_Ads = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const painPoints = [
    {
      title: "Slow Load Times",
      desc: "Every second delay reduces conversions by 7%. We build sub-second pages.",
      icon: <Timer className="w-6 h-6 text-red-400" />
    },
    {
      title: "Confusing Layouts",
      desc: "Cluttered menus distract users. We remove leaks to keep focus on the CTA.",
      icon: <XCircle className="w-6 h-6 text-red-400" />
    },
    {
      title: "Weak Headlines",
      desc: "If they don't get it in 3 seconds, they leave. We craft copy that hooks.",
      icon: <Eye className="w-6 h-6 text-red-400" />
    }
  ];

  const benefits = [
    {
      title: "Google Quality Score 10/10",
      description: "Faster pages + relevant content = cheaper clicks. We optimize specifically for ad algorithms.",
      icon: <Target className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "Persuasive Copywriting",
      description: "We don't just design; we sell. Our layouts use psychological triggers like scarcity and social proof.",
      icon: <Megaphone className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Pixel-Perfect Tracking",
      description: "Never miss a conversion. We expertly configure Facebook CAPI, GA4, and TikTok pixels.",
      icon: <BarChart2 className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    }
  ];

  const industries = [
    {
      title: "SaaS & Tech",
      desc: "Demo booking pages that qualify leads instantly.",
      icon: <Laptop className="w-6 h-6 text-[#2DA3DB]" />
    },
    {
      title: "E-Commerce",
      desc: "Single-product sales pages for viral TikTok ads.",
      icon: <ShoppingCart className="w-6 h-6 text-[#2DA3DB]" />
    },
    {
      title: "High-Ticket Services",
      desc: "Consultation funnels for coaches, agencies, and real estate.",
      icon: <Briefcase className="w-6 h-6 text-[#2DA3DB]" />
    }
  ];

  const comparisonData = [
    { feature: "Page Load Speed", vernora: "0.8s (Instant)", builder: "3s+ (Slow)" },
    { feature: "Mobile Experience", vernora: "Thumb-Driven Design", builder: "Generic Response" },
    { feature: "A/B Testing", vernora: "Code-Level Control", builder: "Limited Options" },
    { feature: "Conversion Rate", vernora: "Avg. 5% - 12%", builder: "Avg. 2% - 3%" },
  ];

  const processSteps = [
    { step: "01", title: "Ad Audit", desc: "We review your ad copy and targeting to ensure message match." },
    { step: "02", title: "Wireframe & Copy", desc: "Structuring the narrative to overcome objections fast." },
    { step: "03", title: "Rapid Build", desc: "Coding the page in Next.js for maximum speed and security." },
    { step: "04", title: "Pixel Setup", desc: "Installing and testing all tracking events before launch." }
  ];

  const faqs = [
    {
      q: "Do you write the copy or do I provide it?",
      a: "We offer both options. We have conversion copywriters who can craft headlines and body text that sells, or we can polish what you already have."
    },
    {
      q: "Can I use my own domain name?",
      a: "Yes. We set up the landing page on a subdomain (e.g., offer.yourbrand.com) or a dedicated campaign domain to keep your main site's SEO separate."
    },
    {
      q: "Does this include the ad management?",
      a: "This service focuses on the destination (the landing page). However, we can recommend trusted media buying partners if you need help running the ads themselves."
    },
    {
      q: "What if I need to change a headline later?",
      a: "We provide a simplified CMS dashboard or handle requests via our support plan, so you can run A/B tests on headlines without touching code."
    }
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])


  return (
    <div className="min-h-screen bg-white font-sans text-[#1C1F26]">

      {/* --- HERO: The "Stop Burning Money" Hook --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0F172A]">
        {/* Abstract "Target" Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#2DA3DB]/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#2DA3DB]/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#2DA3DB]/20 rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-1.5 mb-8 border border-red-500/20 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-red-400">
              Stop Wasting Ad Budget
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
            Don't Send Paid Traffic to <br className="hidden md:block" />
            <span className="text-[#2DA3DB] underline decoration-[#1A3A6F] decoration-4 underline-offset-8">
              Your Home Page
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            You pay for every click. We make sure they count. High-performance landing pages engineered specifically for Facebook, Instagram, and Google Ads campaigns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-[0_0_30px_-5px_rgba(45,163,219,0.4)] transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
            >
              Build My Landing Page
              <MousePointer2 size={18} />
            </a>
            <a
              href="#anatomy"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              See What Works
            </a>
          </div>
        </div>
      </section>

      {/* --- The Problem: The "Leaky Bucket" --- */}
      <section className="relative -mt-16 z-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-[#1A3A6F]/10 border border-[#D9E4F2] p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#D9E4F2]">
              {painPoints.map((point, idx) => (
                <div key={idx} className="flex flex-col items-center text-center pt-8 md:pt-0 px-4 first:pt-0">
                  <div className="mb-4 p-3 bg-red-50 rounded-2xl">{point.icon}</div>
                  <h3 className="text-lg font-bold text-[#1C1F26] mb-2">{point.title}</h3>
                  <p className="text-sm text-[#6E7787] leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Industries We Scale --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Campaigns We Optimize</h2>
            <p className="text-[#6E7787] mt-4">Different traffic sources need different page structures. We tailor the build to your niche.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-[#D9E4F2] hover:border-[#2DA3DB] bg-[#FAFAFA] hover:bg-white transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#2DA3DB]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {ind.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1C1F26] mb-2">{ind.title}</h3>
                <p className="text-[#6E7787] text-sm">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Anatomy of a High Converter --- */}
      <section id="anatomy" className="py-24 bg-[#FAFAFA] border-y border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="order-2 lg:order-1">
              <span className="text-[#1A3A6F] font-bold text-sm uppercase tracking-widest mb-2 block">The Blueprint</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                Anatomy of a <span className="text-[#2DA3DB]">Winner</span>
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                We don't guess. We use a proven structure that guides visitors from "Curiosity" to "Action" without distraction.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Zero Navigation", desc: "We remove the menu. The only way out is to convert or close the tab." },
                  { title: "Above the Fold Promise", desc: "Headline, Benefit, and CTA are visible instantly without scrolling." },
                  { title: "Social Proof Stack", desc: "Testimonials and trust badges placed strategically near friction points." }
                ].map((item, i) => (
                  <div key={i} className="group flex gap-4 p-4 rounded-xl border border-transparent hover:border-[#D9E4F2] hover:bg-white transition-all">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A3A6F] text-white flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1C1F26] group-hover:text-[#2DA3DB] transition-colors">{item.title}</h4>
                      <p className="text-sm text-[#6E7787] mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Wireframe Visual */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[80px] opacity-60" />
              <div className="relative bg-white rounded-2xl border-4 border-[#1C1F26] shadow-2xl overflow-hidden aspect-[9/16] w-[320px] mx-auto transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                {/* Navbar (Empty for Landing Page) */}
                <div className="h-14 border-b border-gray-100 flex items-center justify-center">
                  <div className="h-4 w-24 bg-[#1C1F26] rounded" />
                </div>
                {/* Hero */}
                <div className="p-6 text-center space-y-3 bg-[#F0F7FF] pb-8">
                  <div className="h-6 w-3/4 bg-[#1A3A6F] rounded mx-auto" />
                  <div className="h-6 w-1/2 bg-[#1A3A6F] rounded mx-auto" />
                  <div className="h-3 w-full bg-gray-300 rounded mt-4" />
                  <div className="h-3 w-5/6 bg-gray-300 rounded mx-auto" />
                  <div className="h-10 w-40 bg-[#2DA3DB] rounded-full mx-auto mt-4 shadow-lg shadow-[#2DA3DB]/30 flex items-center justify-center text-white text-xs font-bold uppercase tracking-wider">
                    Get Offer Now
                  </div>
                </div>
                {/* Social Proof */}
                <div className="p-4 border-b border-gray-100 flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                {/* Benefits */}
                <div className="p-6 space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex-shrink-0" />
                      <div className="space-y-2 flex-1">
                        <div className="h-3 w-1/2 bg-gray-800 rounded" />
                        <div className="h-2 w-full bg-gray-300 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-20 -right-4 bg-white p-3 rounded-xl shadow-lg border border-[#D9E4F2] flex items-center gap-2 animate-bounce">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-[#1C1F26]">Conversion +200%</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Core Benefits Grid --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-[#FAFAFA] border border-[#D9E4F2] hover:border-[#2DA3DB]/30 hover:shadow-xl hover:shadow-[#1A3A6F]/5 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1C1F26] mb-3">{item.title}</h3>
                <p className="text-[#6E7787] leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Comparison Table (Responsive) --- */}
      <section className="py-24 bg-[#1A3A6F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2DA3DB] rounded-full blur-[150px] opacity-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Why Not Use ClickFunnels?
            </h2>
            <p className="text-[#D9E4F2]/80 mt-4">
              Page builders are easy but slow. Speed is the #1 factor in Ad Quality Score.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Added overflow-x-auto for responsive scrolling table */}
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-3 bg-[#F0F7FF] py-4 px-6 border-b border-[#D9E4F2]">
                  <div className="col-span-1 font-bold text-[#1C1F26]">Metric</div>
                  <div className="col-span-1 font-bold text-[#1A3A6F] text-center">VernoraTech</div>
                  <div className="col-span-1 font-bold text-gray-400 text-center">Page Builders</div>
                </div>
                {comparisonData.map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-4 px-6 border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    <div className="col-span-1 font-medium text-[#1C1F26] text-sm">{row.feature}</div>
                    <div className="col-span-1 text-center font-bold text-[#1A3A6F] text-sm bg-[#2DA3DB]/10 rounded py-1">
                      {row.vernora}
                    </div>
                    <div className="col-span-1 text-center text-gray-500 text-sm py-1">
                      {row.builder}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: 5-Day Launch Roadmap (Responsive) --- */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Launch in 5 Days</h2>
            <p className="text-[#6E7787] mt-4">We move fast because ad trends change fast.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative pt-8 md:pt-0">
                {/* Mobile Connector */}
                {i !== processSteps.length - 1 && (
                  <div className="absolute left-6 top-10 bottom-[-2rem] w-0.5 bg-[#D9E4F2] md:hidden z-0" />
                )}
                {/* Desktop Connector */}
                {i !== processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-[#D9E4F2] -z-10" />
                )}

                <div className="relative z-10 flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-0">
                  <div className="w-12 h-12 rounded-full bg-[#1A3A6F] text-white flex items-center justify-center font-bold text-lg border-4 border-[#FAFAFA] shadow-lg shrink-0">
                    {step.step}
                  </div>
                  <div className="md:text-center md:mt-4">
                    <h3 className="text-lg font-bold text-[#1C1F26] mb-1 md:mb-2">{step.title}</h3>
                    <p className="text-sm text-[#6E7787]">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: FAQ --- */}
      <section className="py-24 bg-white border-t border-[#D9E4F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#1C1F26] text-center mb-12">
            Advertiser FAQs
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

      {/* --- Final CTA --- */}
      <section className="py-24 bg-white text-center border-t border-[#D9E4F2]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1C1F26] mb-6">
            Ready to Lower Your CPA?
          </h2>
          <p className="text-lg text-[#6E7787] mb-10">
            Get a free audit of your current landing page, or let's build a new high-converter from scratch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A3A6F] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-[#2DA3DB] transition-all hover:-translate-y-1 cursor-pointer"
            >
              Start Converting
              <Rocket size={20} />
            </a>
            <a
              href="https://wa.me/917397825850"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9E4F2] bg-white px-8 py-4 text-base font-bold text-[#1C1F26] hover:bg-[#FAFAFA] transition-all"
            >
              Chat Strategy
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

// Helper Icon
const StarIcon = ({ size, className }) => (
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
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default Landing_Page_For_Ads;
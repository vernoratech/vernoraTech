import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  Layers,
  WifiOff,
  Bell,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe,
  MessageSquare,
  Check,
  X,
  ChevronDown,
  Code2,
  ScanFace,
  CreditCard,
  LayoutGrid,
  Zap,
  TrendingUp,
  Menu,
  MapPin,
  ShoppingBag,
  BarChart3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Mobile_App_Development = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeTab, setActiveTab] = useState('cross-platform');

  // --- Data ---
  const features = [
    {
      title: "Universal Codebase",
      description: "Why pay for two teams? We write code once in Flutter or React Native and deploy native-grade apps to both iOS and Android stores.",
      icon: <Layers className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "Offline-First Data",
      description: "Users can browse products, read content, or draft messages even without a signal. Data syncs automatically when the connection returns.",
      icon: <WifiOff className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Device Hardware Access",
      description: "We deeply integrate with the phone's capabilities: FaceID for security, Camera for scanning, and GPS for real-time tracking.",
      icon: <ScanFace className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    },
    {
      title: "Smart Notifications",
      description: "Re-engage users who drift away. We set up targeted push notification flows (abandoned cart, new message, updates) to boost retention.",
      icon: <Bell className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    }
  ];

  // Visual components for different app types
  const EcommerceVisual = () => (
    <div className="bg-white h-full w-full flex flex-col">
      <div className="h-32 bg-gray-100 m-4 rounded-xl mb-2" />
      <div className="px-4 space-y-2">
        <div className="h-3 w-3/4 bg-gray-200 rounded" />
        <div className="h-3 w-1/4 bg-[#2DA3DB] rounded" />
      </div>
      <div className="mt-auto m-4 h-8 bg-[#1C1F26] rounded-lg flex items-center justify-center text-white text-[10px] font-bold">Add to Cart</div>
    </div>
  );

  const OnDemandVisual = () => (
    <div className="bg-gray-100 h-full w-full relative overflow-hidden">
      {/* Map Dots */}
      <div className="absolute top-4 left-8 w-2 h-2 bg-gray-300 rounded-full" />
      <div className="absolute top-12 right-12 w-2 h-2 bg-gray-300 rounded-full" />
      <div className="absolute bottom-20 left-4 w-2 h-2 bg-gray-300 rounded-full" />
      {/* Route Line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <path d="M40 40 Q 90 90 60 150" stroke="#2DA3DB" strokeWidth="3" fill="none" strokeDasharray="4 4" />
      </svg>
      {/* Car Pin */}
      <div className="absolute top-[140px] left-[50px] bg-[#1C1F26] p-1.5 rounded-full shadow-lg">
        <Rocket size={12} className="text-white" />
      </div>
      {/* Bottom Sheet */}
      <div className="absolute bottom-0 left-0 w-full bg-white p-4 rounded-t-xl shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full" />
          <div>
            <div className="h-2 w-20 bg-gray-800 rounded mb-1" />
            <div className="h-2 w-12 bg-gray-400 rounded" />
          </div>
        </div>
      </div>
    </div>
  );

  const InternalToolsVisual = () => (
    <div className="bg-white h-full w-full p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="h-3 w-16 bg-gray-800 rounded" />
        <div className="h-6 w-6 bg-gray-100 rounded-full" />
      </div>
      <div className="space-y-2 flex-1">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-10 border border-gray-100 rounded-lg flex items-center px-2 gap-2">
            <div className="w-4 h-4 rounded bg-[#2DA3DB]/20" />
            <div className="h-2 w-16 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
      <div className="mt-2 h-20 bg-[#F0F7FF] rounded-lg border border-[#2DA3DB]/20 flex items-end justify-around pb-2 px-2">
        <div className="w-3 h-8 bg-[#2DA3DB] rounded-t-sm opacity-40" />
        <div className="w-3 h-12 bg-[#2DA3DB] rounded-t-sm opacity-60" />
        <div className="w-3 h-6 bg-[#2DA3DB] rounded-t-sm opacity-40" />
        <div className="w-3 h-10 bg-[#2DA3DB] rounded-t-sm" />
      </div>
    </div>
  );

  const appTypes = [
    {
      title: "E-Commerce Apps",
      desc: "Full shopping experience with cart, wishlist, and Apple Pay.",
      visual: <EcommerceVisual />,
      color: "border-[#2DA3DB]",
      icon: <ShoppingBag size={20} />
    },
    {
      title: "On-Demand Services",
      desc: "Uber-style booking for cleaners, tutors, or technicians.",
      visual: <OnDemandVisual />,
      color: "border-[#1A3A6F]",
      icon: <MapPin size={20} />
    },
    {
      title: "Internal Business Tools",
      desc: "Streamline field operations with custom inventory or CRM apps.",
      visual: <InternalToolsVisual />,
      color: "border-emerald-500",
      icon: <BarChart3 size={20} />
    }
  ];

  const comparisonData = [
    { feature: "Time to Market", vernora: "Fast (Single Codebase)", native: "Slow (Two Codebases)" },
    { feature: "Development Cost", vernora: "Cost-Effective (1 Team)", native: "Expensive (2 Teams)" },
    { feature: "Performance", vernora: "Near-Native (60fps)", native: "Native" },
    { feature: "Maintenance", vernora: "Easy (One Fix Updates Both)", native: "Complex (Syncing Teams)" },
    { feature: "Hardware Access", vernora: "Full (Camera, GPS, Bio)", native: "Full" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "UX Blueprint",
      desc: "We map out user journeys and create low-fidelity wireframes to validate the flow before writing a single line of code."
    },
    {
      step: "02",
      title: "UI Design",
      desc: "Our designers craft stunning, intuitive interfaces that strictly follow Apple's Human Interface Guidelines and Google's Material Design."
    },
    {
      step: "03",
      title: "Hybrid Build",
      desc: "We build using Flutter or React Native, integrating complex logic, APIs, and device features like Camera and Biometrics."
    },
    {
      step: "04",
      title: "Store Launch",
      desc: "We handle the strict submission process, certificates, and compliance checks for the Apple App Store and Google Play Store."
    }
  ];

  const faqs = [
    {
      q: "Why choose Cross-Platform over Native?",
      a: "Cross-platform (Flutter/React Native) saves you ~40% in costs and time because we build one app for both iOS and Android. Performance is nearly identical for 95% of use cases."
    },
    {
      q: "Do I own the app code?",
      a: "Yes. Once the project is paid in full, you own 100% of the source code, design assets, and intellectual property. We act as your development partner, not your landlord."
    },
    {
      q: "What happens after launch?",
      a: "Apps require maintenance (OS updates, API changes). We offer support packages to keep your app running smoothly, or we can hand it off to your internal team."
    },
    {
      q: "What about App Store fees?",
      a: "Apple ($99/year) and Google ($25 one-time) charge developer fees directly to you. We guide you through setting up these accounts so you retain full ownership of your app listing."
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

      {/* --- HERO: Multi-Device Showcase --- */}
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
                <Smartphone size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  iOS & Android Solutions
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Your Business, Now in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DA3DB] to-white">
                  Every Pocket
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Don't just build an app; build a business asset. We create fast, scalable mobile experiences that users actually want to keep on their home screen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Estimate My App Cost
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#types"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  View App Types
                </a>
              </div>
            </div>

            {/* Right Visual: 3 Phone Mockups */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-lg h-[500px] flex items-center justify-center perspective-1000">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />

              {/* Left Phone (Android Style) */}
              <div className="absolute left-0 top-16 w-[220px] h-[440px] bg-[#1C1F26] rounded-[24px] border-[4px] border-[#333] shadow-2xl transform -rotate-[12deg] -translate-x-4 opacity-60 scale-90 z-0 hidden sm:block">
                {/* Hole Punch Camera */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full z-20" />
                {/* Content */}
                <div className="w-full h-full bg-white rounded-[20px] overflow-hidden flex flex-col">
                  <div className="h-14 bg-emerald-500 w-full flex items-center px-4">
                    <Menu className="text-white" size={16} />
                  </div>
                  <div className="p-3 space-y-2 flex-1 bg-gray-50">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-16 bg-white rounded-lg shadow-sm border border-gray-100" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Phone (Compact/Grid Style) */}
              <div className="absolute right-0 top-24 w-[220px] h-[440px] bg-[#1C1F26] rounded-[30px] border-[4px] border-[#333] shadow-2xl transform rotate-[12deg] translate-x-4 opacity-60 scale-90 z-0 hidden sm:block">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-b-lg z-20" />
                <div className="w-full h-full bg-white rounded-[26px] overflow-hidden flex flex-col">
                  <div className="h-full w-full bg-[#F0F7FF] p-3 grid grid-cols-2 gap-2 pt-8">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="bg-white rounded-xl h-24 shadow-sm" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Phone (Modern iPhone - Main Focus) */}
              <div className="relative w-[260px] h-[520px] bg-white rounded-[40px] border-[8px] border-[#1C1F26] shadow-2xl overflow-hidden transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 z-10">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#1C1F26] rounded-full z-20" />

                {/* App UI */}
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="h-32 bg-[#1A3A6F] p-6 flex flex-col justify-end">
                    <div className="flex justify-between items-center text-white">
                      <div>
                        <div className="text-xs opacity-70">Welcome back</div>
                        <div className="font-bold text-lg">Alex</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <Bell size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex-1 bg-[#FAFAFA] p-5 space-y-4">
                    {/* Stats Scroll */}
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                      <div className="min-w-[100px] h-24 bg-white rounded-2xl shadow-sm border border-[#D9E4F2] p-3 flex flex-col justify-between">
                        <div className="w-8 h-8 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#2DA3DB]"><Rocket size={14} /></div>
                        <div className="h-2 w-12 bg-[#E5E7EB] rounded" />
                      </div>
                      <div className="min-w-[100px] h-24 bg-white rounded-2xl shadow-sm border border-[#D9E4F2] p-3 flex flex-col justify-between">
                        <div className="w-8 h-8 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A]"><TrendingUp size={14} /></div>
                        <div className="h-2 w-12 bg-[#E5E7EB] rounded" />
                      </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-[#6E7787] uppercase tracking-wider">Live Updates</div>
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-16 bg-white rounded-xl shadow-sm border border-[#D9E4F2] flex items-center px-4 gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#F3F4F6]" />
                          <div className="flex-1 space-y-1.5">
                            <div className="h-2.5 w-24 bg-[#E5E7EB] rounded" />
                            <div className="h-2 w-16 bg-[#F3F4F6] rounded" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Nav Bar */}
                  <div className="h-20 bg-white border-t border-[#E5E7EB] flex justify-around items-start pt-4 px-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className={`w-8 h-8 rounded-lg flex items-center justify-center ${i === 1 ? 'text-[#1A3A6F]' : 'text-[#9CA3AF]'}`}>
                        <div className={`w-5 h-5 rounded-full ${i === 1 ? 'bg-[#1A3A6F]' : 'bg-gray-200'}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Status Badge */}
              <div className="absolute bottom-20 -left-4 bg-white p-3 rounded-xl shadow-xl border border-[#D9E4F2] flex items-center gap-3 animate-bounce delay-1000 z-20">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-[#6E7787] font-bold uppercase">Build Status</div>
                  <div className="text-xs font-black text-[#1C1F26]">Ready for Review</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Core Features Grid --- */}
      <section className="relative z-20 py-24 -mt-10 rounded-t-[40px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Why Build With Us?</h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">Mobile users have high standards. We ensure your app isn't just functional, but delightful to use.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-[#FAFAFA] rounded-3xl p-8 border border-[#D9E4F2] transition-all duration-300 hover:shadow-xl hover:shadow-[#1A3A6F]/5 hover:-translate-y-2 hover:bg-white overflow-hidden"
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

      {/* --- App Types Section (Enhanced Visuals) --- */}
      <section id="types" className="py-24 bg-[#FAFAFA] border-y border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2DA3DB] font-bold text-xs uppercase tracking-widest mb-2 block">Our Expertise</span>
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">What Can We Build?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {appTypes.map((type, i) => (
              <div key={i} className="group bg-white rounded-[32px] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#D9E4F2] flex flex-col">

                {/* Phone Mockup Header - Increased Height to reveal full phone */}
                <div className="relative h-[380px] bg-[#F3F4F6] flex items-end justify-center pt-8 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
                  <div className={`relative w-[180px] h-[340px] bg-[#1C1F26] rounded-[24px] border-[6px] border-[#1C1F26] shadow-xl transform translate-y-12 transition-transform duration-500 group-hover:translate-y-6 ${type.color}`}>
                    {/* Inner Screen */}
                    <div className="w-full h-full bg-white rounded-[18px] overflow-hidden">
                      {type.visual}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 relative z-10 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#F0F7FF] rounded-lg text-[#1A3A6F]">
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#1C1F26]">{type.title}</h3>
                  </div>
                  <p className="text-[#6E7787] text-sm mb-6 leading-relaxed">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Comparison Table --- */}
      <section className="py-24 bg-[#1A3A6F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2DA3DB] rounded-full blur-[150px] opacity-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              The "Smart Scale" Advantage
            </h2>
            <p className="text-[#D9E4F2]/80 mt-4 max-w-2xl mx-auto">
              Comparing our Hybrid approach (Flutter/React Native) vs. Old School Native development.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-3 bg-[#F0F7FF] py-4 px-6 border-b border-[#D9E4F2]">
                  <div className="col-span-1 font-bold text-[#1C1F26]">Metric</div>
                  <div className="col-span-1 font-bold text-[#1A3A6F] text-center">Vernora (Hybrid)</div>
                  <div className="col-span-1 font-bold text-gray-400 text-center">Traditional Native</div>
                </div>
                {comparisonData.map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-4 px-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 items-center">
                    <div className="col-span-1 font-medium text-[#1C1F26] text-sm">{row.feature}</div>
                    <div className="col-span-1 text-center font-bold text-[#1A3A6F] text-sm bg-[#2DA3DB]/10 rounded py-1 flex items-center justify-center gap-2">
                      <Check size={14} className="text-[#2DA3DB]" /> {row.vernora}
                    </div>
                    <div className="col-span-1 text-center text-gray-500 text-sm py-1 flex items-center justify-center gap-2">
                      {row.native.includes("Expensive") || row.native.includes("Slow") ? <X size={14} className="text-red-400" /> : <Check size={14} className="text-gray-400" />}
                      {row.native}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Process Roadmap --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">From Concept to App Store</h2>
            <p className="text-[#6E7787] mt-4">We handle the complex submission guidelines so you can focus on launch marketing.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative pt-8 md:pt-0 text-center md:text-left group">
                {/* Connector Line */}
                {i !== processSteps.length - 1 && (
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

      {/* --- FAQ Section --- */}
      <section className="py-24 bg-[#FAFAFA] border-t border-[#D9E4F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#1C1F26] text-center mb-12">
            Mobile FAQs
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
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#2DA3DB] rounded-full blur-[150px] opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Launch Your App?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Book a free consultation. We'll map out your user journey and give you a clear timeline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 transition-all cursor-pointer"
            >
              Get Your App Quote
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

export default Mobile_App_Development;
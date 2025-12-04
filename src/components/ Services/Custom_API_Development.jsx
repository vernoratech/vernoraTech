import React, { useState, useEffect } from 'react';
import {
  Database,
  Server,
  Share2,
  Lock,
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
  Key,
  Network,
  Zap,
  Settings,
  FileJson,
  Smartphone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Custom_API_Development = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- Data ---
  const features = [
    {
      title: "Secure Data Exchange",
      description: "We build RESTful and GraphQL APIs with bank-grade encryption (AES-256) and strict OAuth2 authentication, ensuring your data travels safely between systems.",
      icon: <Lock className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "High-Throughput Performance",
      description: "Engineered for scale. Our Node.js and Go-based architectures handle thousands of concurrent requests without latency, keeping your operations real-time.",
      icon: <Zap className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Legacy System Integration",
      description: "Don't rewrite your old software; connect to it. We build middleware layers that allow modern apps to talk to legacy databases (SQL, Oracle, SOAP).",
      icon: <Database className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    },
    {
      title: "Automated Documentation",
      description: "We deliver live Swagger/OpenAPI documentation with every project, so your internal team or third-party partners can integrate instantly.",
      icon: <FileJson className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    }
  ];

  const useCases = [
    {
      title: "Custom CRM Middleware",
      desc: "Sync leads from your website directly into Salesforce, HubSpot, or a custom dashboard.",
      tags: ["Webhooks", "Data Sanitization"]
    },
    {
      title: "ERP Automation",
      desc: "Automate inventory updates between your warehouse software and Shopify store.",
      tags: ["Cron Jobs", "Real-time Sync"]
    },
    {
      title: "Mobile App Backends",
      desc: "A robust server-side logic layer to power your iOS and Android applications.",
      tags: ["Auth", "Push Notifications"]
    }
  ];

  const comparisonData = [
    { feature: "Customizability", vernora: "100% Tailored Logic", lowcode: "Limited by Plugins" },
    { feature: "Data Ownership", vernora: "Your Database, Your Rules", lowcode: "Shared / Locked In" },
    { feature: "Recurring Costs", vernora: "Server Costs Only (Low)", lowcode: "Per-Action Fees (High)" },
    { feature: "Performance", vernora: "Millisecond Latency", lowcode: "Network Overhead" },
    { feature: "Security", vernora: "Custom Auth & VPC", lowcode: "Generic Standard" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Architecture Design",
      desc: "We map out data flows, database schemas (SQL/NoSQL), and endpoint structures to ensure efficiency."
    },
    {
      step: "02",
      title: "API Development",
      desc: "We code the core logic using Node.js, Python, or Go, implementing validation and error handling."
    },
    {
      step: "03",
      title: "Integration Testing",
      desc: "Rigorous testing with Postman and automated suites to ensure endpoints handle edge cases correctly."
    },
    {
      step: "04",
      title: "Documentation & Handoff",
      desc: "We provide full API keys, Swagger docs, and deployment guides for your dev team."
    }
  ];

  const faqs = [
    {
      q: "What is an API and why do I need a custom one?",
      a: "An API (Application Programming Interface) allows different software to talk to each other. You need a custom one if off-the-shelf tools (like Zapier) are too expensive, slow, or can't handle your specific business logic."
    },
    {
      q: "REST vs. GraphQL - which do you use?",
      a: "We use both depending on the use case. REST is great for standard resource caching and simplicity. GraphQL is excellent for complex front-ends where you want to fetch multiple resources in a single request to save bandwidth."
    },
    {
      q: "How do you handle security?",
      a: "Security is paramount. We implement JWT (JSON Web Tokens) for stateless authentication, rate limiting to prevent abuse, and SSL encryption for all data in transit."
    },
    {
      q: "Do you host the API for us?",
      a: "We can set up the hosting on your preferred cloud provider (AWS, Google Cloud, DigitalOcean) so you retain full control and ownership of the infrastructure."
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

      {/* --- HERO: The "Central Nervous System" --- */}
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
                <Network size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  Backend Engineering
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                The Invisible Engine of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DA3DB] to-white">
                  Your Business
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Connect your CRM, ERP, and Website into one seamless ecosystem. We build custom APIs that automate workflows and eliminate manual data entry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Discuss Integration
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#use-cases"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  See Use Cases
                </a>
              </div>
            </div>

            {/* Right Visual: Server/Node Animation */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-lg h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />

              {/* Central API Node */}
              <div className="relative w-32 h-32 bg-white rounded-2xl shadow-2xl flex items-center justify-center z-20 border-4 border-[#2DA3DB]">
                <div className="text-center">
                  <Settings className="w-10 h-10 text-[#1A3A6F] animate-spin-slow mx-auto mb-1" />
                  <span className="text-[10px] font-black uppercase text-[#1A3A6F] tracking-wider">Core API</span>
                </div>
                {/* Connecting Lines */}
                {[0, 90, 180, 270].map((deg) => (
                  <div
                    key={deg}
                    className="absolute top-1/2 left-1/2 w-[140px] h-1 bg-gradient-to-r from-[#2DA3DB] to-transparent origin-left -z-10"
                    style={{ transform: `translateY(-50%) rotate(${deg}deg)` }}
                  >
                    <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: `${deg / 90 * 0.5}s` }} />
                  </div>
                ))}
              </div>

              {/* Satellite Nodes */}
              <div className="absolute top-10 left-10 bg-[#1C1F26] p-3 rounded-xl shadow-lg border border-white/10 animate-float">
                <Database className="text-emerald-400 w-6 h-6" />
              </div>
              <div className="absolute bottom-16 right-12 bg-[#1C1F26] p-3 rounded-xl shadow-lg border border-white/10 animate-float delay-700">
                <Globe className="text-blue-400 w-6 h-6" />
              </div>
              <div className="absolute top-20 right-4 bg-[#1C1F26] p-3 rounded-xl shadow-lg border border-white/10 animate-float delay-300">
                <Smartphone className="text-purple-400 w-6 h-6" />
              </div>
              <div className="absolute bottom-10 left-20 bg-[#1C1F26] p-3 rounded-xl shadow-lg border border-white/10 animate-float delay-500">
                <Key className="text-orange-400 w-6 h-6" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Core Features Grid --- */}
      <section className="relative z-20 py-24 -mt-10 rounded-t-[40px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Why Custom Backend?</h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">Off-the-shelf tools break when you scale. Custom APIs give you control, speed, and security.</p>
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

      {/* --- Use Cases Section (Bento-ish) --- */}
      <section id="use-cases" className="py-24 bg-[#FAFAFA] border-y border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2DA3DB] font-bold text-xs uppercase tracking-widest mb-2 block">Real World Applications</span>
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">What Can We Connect?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-[#D9E4F2] hover:border-[#2DA3DB] transition-all hover:shadow-md group">
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-3 bg-[#F0F7FF] rounded-2xl text-[#1A3A6F] group-hover:bg-[#1A3A6F] group-hover:text-white transition-colors">
                    <Server size={24} />
                  </div>
                  <div className="text-[#D9E4F2] group-hover:text-[#2DA3DB] transition-colors">
                    <Code2 size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1C1F26] mb-3">{useCase.title}</h3>
                <p className="text-[#6E7787] text-sm mb-6 leading-relaxed">{useCase.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map((tag, t) => (
                    <span key={t} className="px-3 py-1 bg-[#FAFAFA] border border-[#E5E7EB] text-[#4B5563] text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Build vs Buy Comparison --- */}
      <section className="py-24 bg-[#1A3A6F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2DA3DB] rounded-full blur-[150px] opacity-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Custom Code vs. Low-Code Tools
            </h2>
            <p className="text-[#D9E4F2]/80 mt-4 max-w-2xl mx-auto">
              Why building your own API pays off compared to relying on expensive iPaaS tools like Zapier or MuleSoft.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-3 bg-[#F0F7FF] py-4 px-6 border-b border-[#D9E4F2]">
                  <div className="col-span-1 font-bold text-[#1C1F26]">Feature</div>
                  <div className="col-span-1 font-bold text-[#1A3A6F] text-center">Vernora (Custom)</div>
                  <div className="col-span-1 font-bold text-gray-400 text-center">Low-Code / Zapier</div>
                </div>
                {comparisonData.map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-4 px-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 items-center">
                    <div className="col-span-1 font-medium text-[#1C1F26] text-sm">{row.feature}</div>
                    <div className="col-span-1 text-center font-bold text-[#1A3A6F] text-sm bg-[#2DA3DB]/10 rounded py-1 flex items-center justify-center gap-2">
                      <Check size={14} className="text-[#2DA3DB]" /> {row.vernora}
                    </div>
                    <div className="col-span-1 text-center text-gray-500 text-sm py-1 flex items-center justify-center gap-2">
                      <X size={14} className="text-red-400" /> {row.lowcode}
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
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Architecture to Deployment</h2>
            <p className="text-[#6E7787] mt-4">We handle the backend complexity so you can focus on the frontend experience.</p>
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
            API FAQs
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
            Ready to Connect Your Systems?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Book a technical discovery call. We'll diagram your data flow and propose a custom architecture.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 transition-all cursor-pointer"
            >
              Plan My API
              <Rocket size={20} />
            </a>
            <a
              href="https://wa.me/917397825850"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-all"
            >
              Chat Tech Specs
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Custom_API_Development;
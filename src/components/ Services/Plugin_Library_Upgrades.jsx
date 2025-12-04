import React, { useState, useEffect } from 'react';
import {
  Package,
  GitBranch,
  ShieldAlert,
  RefreshCw,
  ArrowRight,
  Rocket,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Lock,
  Database,
  Globe,
  ChevronDown,
  Code2,
  Terminal,
  Layers,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Plugin_Library_Upgrades = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- Data ---
  const risks = [
    {
      stat: "High",
      desc: "Risk of security breaches via unpatched vulnerabilities in outdated npm/composer packages.",
      color: "text-red-500"
    },
    {
      stat: "Broken",
      desc: "Features stop working when 3rd party APIs deprecate old endpoints.",
      color: "text-orange-500"
    },
    {
      stat: "Slow",
      desc: "Developer velocity drops when teams are fighting legacy documentation and incompatibility.",
      color: "text-yellow-500"
    }
  ];

  const services = [
    {
      title: "Framework Migrations",
      description: "Major version jumps (e.g., React 16 to 18, Node 14 to 20). We handle the breaking changes and deprecated lifecycles.",
      icon: <Layers className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "Dependency Audits",
      description: "We scan your package.json or composer.json for vulnerabilities (CVEs) and bloated libraries that slow down your bundle.",
      icon: <ShieldAlert className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "API Integration Updates",
      description: "Stripe changed their API? Facebook Graph API v18 update? We update your integration code to keep payments and logins flowing.",
      icon: <Globe className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    },
    {
      title: "Automated Testing",
      description: "We set up regression test suites to ensure that updating a single button plugin doesn't break your entire checkout flow.",
      icon: <Code2 className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Audit & Plan",
      desc: "We analyze your dependency tree to identify high-risk packages and breaking changes.",
      icon: <SearchIcon size={20} />
    },
    {
      step: "02",
      title: "Sandbox Update",
      desc: "We clone your environment and apply updates in isolation. Your live site remains untouched.",
      icon: <GitBranch size={20} />
    },
    {
      step: "03",
      title: "Code Refactor",
      desc: "We rewrite components affecting by deprecations (e.g., converting Class components to Hooks).",
      icon: <Terminal size={20} />
    },
    {
      step: "04",
      title: "Regression QA",
      desc: "Full system testing to ensure parity with the old version before merging to production.",
      icon: <CheckCircle2 size={20} />
    }
  ];

  const faqs = [
    {
      q: "Why not just run 'npm update'?",
      a: "Automated commands often break applications because they don't account for major version changes (breaking changes). We manually verify changelogs and refactor code where necessary."
    },
    {
      q: "Do you handle WordPress plugins?",
      a: "Yes. We troubleshoot plugin conflicts, update WooCommerce extensions, and replace abandoned plugins with modern alternatives."
    },
    {
      q: "Will my site go down?",
      a: "No. We perform all upgrades on a staging server. Once the upgraded version is stable and tested, we swap it with the live site with zero or minimal downtime."
    },
    {
      q: "How often should we upgrade?",
      a: "We recommend a quarterly 'Health Check'. Security patches should be applied immediately, while major framework upgrades can be planned annually."
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

      {/* --- HERO: Dependency Hell to Heaven --- */}
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
                <Package size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  Tech Stack Modernization
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Stop Building on <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  Deprecated Code
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Keep your application secure and fast. We handle complex framework migrations, plugin updates, and dependency hell so your team doesn't have to.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Audit My Stack
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  See Upgrade Process
                </a>
              </div>
            </div>

            {/* Right Visual: Dependency Tree Animation */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-md h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />

              {/* Code Editor Window */}
              <div className="relative w-full bg-[#1C1F26] rounded-xl shadow-2xl border border-white/10 overflow-hidden font-mono text-sm">
                <div className="bg-[#2D3342] px-4 py-2 flex items-center justify-between">
                  <span className="text-gray-400 text-xs">package.json</span>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex justify-between text-gray-400">
                    <span>"dependencies": {"{"}</span>
                  </div>

                  {/* Line 1: React */}
                  <div className="flex justify-between items-center group pl-4">
                    <span className="text-blue-400">"react": <span className="text-red-400 line-through decoration-red-500 decoration-2">"^16.8.0"</span></span>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={14} className="text-[#2DA3DB]" />
                      <span className="text-emerald-400 font-bold">"^18.2.0"</span>
                    </div>
                  </div>

                  {/* Line 2: Node */}
                  <div className="flex justify-between items-center group pl-4">
                    <span className="text-blue-400">"node": <span className="text-yellow-400">"^14.x"</span></span>
                    <div className="flex items-center gap-2">
                      <AlertTriangle size={14} className="text-yellow-500 animate-pulse" />
                      <span className="text-xs text-yellow-500">Deprecated</span>
                    </div>
                  </div>

                  {/* Line 3: Lodash */}
                  <div className="flex justify-between items-center group pl-4">
                    <span className="text-blue-400">"lodash": <span className="text-red-400">"^3.10.1"</span></span>
                    <div className="flex items-center gap-2">
                      <ShieldAlert size={14} className="text-red-500 animate-bounce" />
                      <span className="text-xs text-red-500 font-bold">Critical CVE</span>
                    </div>
                  </div>

                  <div className="text-gray-400">{"}"}</div>

                  {/* Terminal Output at Bottom */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex gap-2">
                      <span className="text-emerald-400">➜</span>
                      <span className="text-white">npm audit fix --force</span>
                    </div>
                    <div className="text-gray-500 text-xs mt-2">
                      <span className="text-emerald-500">✔</span> Updated 142 packages <br />
                      <span className="text-emerald-500">✔</span> 0 vulnerabilities found
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 bg-white p-3 rounded-xl shadow-xl border border-[#D9E4F2] flex items-center gap-3 animate-bounce delay-1000 z-20">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#6E7787] font-bold uppercase">Status</div>
                  <div className="text-sm font-black text-[#1C1F26]">Up to Date</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* --- Risk Grid --- */}
      <section className="relative z-20 -mt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-[#1A3A6F]/5 border border-[#D9E4F2] p-8 lg:p-12">
            <div className="text-center mb-10">
              <h3 className="text-xl font-bold text-[#1C1F26]">The Cost of "Ignoring It"</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#D9E4F2]">
              {risks.map((risk, idx) => (
                <div key={idx} className="flex flex-col items-center text-center pt-8 md:pt-0 px-4 first:pt-0 group">
                  <div className={`text-4xl lg:text-5xl font-black mb-2 ${risk.color}`}>{risk.stat}</div>
                  <p className="text-sm md:text-base text-[#6E7787] leading-relaxed max-w-xs">{risk.desc}</p>
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
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Maintenance Capabilities</h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">From WordPress plugins to custom React architectures, we handle it all.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 border border-[#D9E4F2] transition-all duration-300 hover:shadow-xl hover:shadow-[#1A3A6F]/5 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color.replace('bg-', 'from-')}/20 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-50`} />
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1C1F26] mb-3">{service.title}</h3>
                <p className="text-sm text-[#6E7787] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Process Roadmap --- */}
      <section id="process" className="py-24 bg-white border-y border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="order-2 lg:order-1">
              <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">The Process</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                Safe, Isolated <br />
                <span className="text-[#2DA3DB]">Upgrades</span>
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                We never update on production first. Our sandbox method ensures your users never see a broken page.
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

            {/* Right Visual: Version Matrix */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-[#2DA3DB]/10 rounded-full blur-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-[#D9E4F2] p-8">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold text-[#1C1F26]">Compatibility Matrix</h4>
                  <div className="flex items-center gap-2 text-xs bg-red-50 text-red-600 px-2 py-1 rounded border border-red-100 font-bold">
                    <AlertTriangle size={12} /> 3 Conflicts Found
                  </div>
                </div>

                {/* Matrix Visual */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#FAFAFA] rounded-lg border border-[#D9E4F2]">
                    <span className="text-sm font-bold text-[#1C1F26]">Node.js v14</span>
                    <ArrowRight size={14} className="text-gray-400" />
                    <span className="text-sm font-bold text-[#1A3A6F]">Node.js v20</span>
                    <CheckCircle2 size={16} className="text-emerald-500" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                    <span className="text-sm font-bold text-[#1C1F26]">React v16</span>
                    <ArrowRight size={14} className="text-gray-400" />
                    <span className="text-sm font-bold text-[#1A3A6F]">React v18</span>
                    <XIcon size={16} className="text-red-500" />
                  </div>
                  <div className="ml-8 p-2 bg-white rounded border border-red-200 text-xs text-red-500 font-mono">
                    Error: Hydration mismatch in header.js
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#FAFAFA] rounded-lg border border-[#D9E4F2]">
                    <span className="text-sm font-bold text-[#1C1F26]">Stripe API</span>
                    <ArrowRight size={14} className="text-gray-400" />
                    <span className="text-sm font-bold text-[#1A3A6F]">2025-08-01</span>
                    <CheckCircle2 size={16} className="text-emerald-500" />
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button className="bg-[#1C1F26] text-white text-xs px-4 py-2 rounded-lg flex items-center gap-2">
                    <RefreshCw size={12} /> Run Auto-Fix
                  </button>
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
            Upgrade FAQs
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
            Is Your Site Vulnerable?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Get a free dependency audit. We'll show you exactly which packages are putting your business at risk.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 transition-all cursor-pointer"
            >
              Scan My Site
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

// Helper Icons
const SearchIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);

const XIcon = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
);

export default Plugin_Library_Upgrades;
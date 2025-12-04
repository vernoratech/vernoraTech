import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  RefreshCw,
  Server,
  Activity,
  ArrowRight,
  Rocket,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Lock,
  HardDrive,
  Globe,
  ChevronDown,
  Bug,
  Zap,
  Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Monthly_Website_Maintenance = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- Data ---
  const risks = [
    {
      stat: "30k+",
      desc: "Websites are hacked every day. 43% of cyber attacks target small businesses.",
      color: "text-red-500"
    },
    {
      stat: "-60%",
      desc: "Traffic drop when a site is down for just 24 hours due to SEO penalties.",
      color: "text-orange-500"
    },
    {
      stat: "Slow",
      desc: "Unoptimized databases and large images slow down your site over time.",
      color: "text-yellow-500"
    }
  ];

  const features = [
    {
      title: "Security & Malware Scans",
      description: "We run daily security scans to detect vulnerabilities. If your site gets hacked, we fix it for free.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "Core & Plugin Updates",
      description: "Outdated software is the #1 entry point for hackers. We safely update WordPress, plugins, and themes weekly.",
      icon: <RefreshCw className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Daily Cloud Backups",
      description: "Sleep easy. We take daily snapshots of your entire site and store them on an external, encrypted cloud server.",
      icon: <HardDrive className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    },
    {
      title: "Uptime Monitoring",
      description: "We check your site every 5 minutes. If it goes down, our team is alerted instantly to bring it back online.",
      icon: <Activity className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    }
  ];

  const tasks = [
    {
      title: "Technical Tasks",
      items: ["WordPress Core Updates", "Plugin Compatibility Checks", "PHP Version Upgrades", "Database Optimization", "404 Error Monitoring"]
    },
    {
      title: "Content & Support",
      items: ["Text & Image Swaps", "Blog Post Uploading", "Priority Email Support", "Monthly PDF Health Report", "1 Hour of Custom Dev Work"]
    },
    {
      title: "Security Suite",
      items: ["Firewall Configuration", "Brute Force Protection", "Spam Comment Filtering", "SSL Certificate Renewal", "Malware Removal"]
    }
  ];

  const faqs = [
    {
      q: "What happens if my site breaks during an update?",
      a: "We perform updates on a staging environment first or take a backup immediately before updating. If anything breaks, we roll back instantly and fix the compatibility issue manually."
    },
    {
      q: "Do unused support hours roll over?",
      a: "No, support hours (for content edits) reset every month. This encourages you to keep your site fresh and updated regularly."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. There are no long-term contracts. You can cancel or pause your maintenance plan with 30 days' notice."
    },
    {
      q: "Does this include hosting?",
      a: "Our standard maintenance plan does not include hosting fees, but we can migrate you to our high-performance managed servers for an additional fee."
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

      {/* --- HERO: The Security Shield --- */}
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
                <Shield size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  Website Insurance
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Protect Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DA3DB] to-white">
                  Digital Asset
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Don't let a hacked site destroy your reputation. We provide enterprise-grade security, updates, and backups for peace of mind.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Secure My Site
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#plans"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  View Plans
                </a>
              </div>
            </div>

            {/* Right Visual: Health Monitor */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-md h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />

              {/* Monitor Card */}
              <div className="relative w-full bg-[#1C1F26] rounded-2xl shadow-2xl border border-white/10 p-6 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-400 font-mono text-xs uppercase tracking-wider">System Optimal</span>
                  </div>
                  <div className="text-gray-500 text-xs font-mono">Last Scan: 2m ago</div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-gray-400 mb-1">Uptime (30d)</div>
                    <div className="text-2xl font-bold text-white">99.99%</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="text-xs text-gray-400 mb-1">Threats Blocked</div>
                    <div className="text-2xl font-bold text-[#2DA3DB]">142</div>
                  </div>
                </div>

                {/* Activity Log */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span className="text-gray-300">Core WordPress Updated (v6.4)</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span className="text-gray-300">Daily Backup Complete (3.2GB)</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <ShieldCheck size={14} className="text-[#2DA3DB]" />
                    <span className="text-gray-300">Malware Scan: Clean</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs opacity-50">
                    <Clock size={14} className="text-gray-400" />
                    <span className="text-gray-400">Scheduled DB Optimization...</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-8 -right-4 bg-white text-[#1C1F26] px-4 py-2 rounded-full shadow-xl flex items-center gap-2 animate-bounce delay-1000 z-20 border border-[#D9E4F2]">
                <Lock size={14} className="text-emerald-500" />
                <span className="text-xs font-bold">SSL Valid & Secure</span>
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
              <h3 className="text-xl font-bold text-[#1C1F26]">The Cost of Neglect</h3>
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

      {/* --- Features Grid --- */}
      <section id="features" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">What We Do Every Month</h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">We handle the technical heavy lifting so you can focus on running your business.</p>
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

      {/* --- Scope of Work (Detailed List) --- */}
      <section id="plans" className="py-24 bg-white border-y border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">Scope of Work</span>
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Complete Site Care</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tasks.map((category, i) => (
              <div key={i} className="bg-[#FAFAFA] border border-[#D9E4F2] rounded-2xl p-8 hover:border-[#2DA3DB] transition-all">
                <h3 className="text-xl font-bold text-[#1A3A6F] mb-6 flex items-center gap-2">
                  {i === 0 ? <Server size={20} /> : i === 1 ? <MessageSquare size={20} /> : <ShieldCheck size={20} />}
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item, t) => (
                    <li key={t} className="flex items-start gap-3 text-sm text-[#6E7787]">
                      <CheckCircle2 size={16} className="text-[#2DA3DB] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#1C1F26] text-center mb-12">
            Maintenance FAQs
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
            Need a Security Audit?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            We'll scan your site for vulnerabilities and performance issues for free before you commit to a plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 transition-all cursor-pointer"
            >
              Request Audit
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

export default Monthly_Website_Maintenance;
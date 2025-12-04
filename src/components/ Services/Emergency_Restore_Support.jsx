import React, { useState, useEffect } from 'react';
import {
  AlertOctagon,
  History,
  ServerCrash,
  ShieldCheck,
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
  HardDrive,
  Zap,
  Activity,
  Siren,
  LifeBuoy,
  Phone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Emergency_Restore_Support = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- Data ---
  const disasters = [
    {
      title: "Hacked / Defaced",
      desc: "Your site is redirecting to spam or showing a 'Hacked' warning.",
      icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
      bg: "bg-red-50 border-red-100"
    },
    {
      title: "Update Failed",
      desc: "A plugin or theme update caused a 'Critical Error' or white screen of death.",
      icon: <AlertOctagon className="w-6 h-6 text-orange-500" />,
      bg: "bg-orange-50 border-orange-100"
    },
    {
      title: "Accidental Deletion",
      desc: "Important files or the entire database were deleted by mistake.",
      icon: <Database className="w-6 h-6 text-yellow-500" />,
      bg: "bg-yellow-50 border-yellow-100"
    }
  ];

  const features = [
    {
      title: "24/7 Rapid Response",
      description: "Disasters don't wait for business hours. Our emergency team is on standby to jump on your ticket immediately.",
      icon: <Siren className="w-6 h-6 text-white" />,
      color: "bg-red-500"
    },
    {
      title: "Forensic Backup Search",
      description: "We hunt down the latest clean version of your site from your host, off-site backups, or archives you didn't know existed.",
      icon: <History className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Malware Cleanup",
      description: "Restoring isn't enough if the backdoor remains. We scan and clean infected files to prevent reinfection.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    },
    {
      title: "Host Negotiation",
      description: "We speak 'server admin'. We handle the technical back-and-forth with GoDaddy, AWS, or Bluehost support to get you unblocked.",
      icon: <ServerCrash className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Triage",
      desc: "We assess the damage and secure the compromised environment immediately.",
      icon: <Activity size={20} />
    },
    {
      step: "02",
      title: "Locate",
      desc: "We find the most recent viable backup point before the incident occurred.",
      icon: <SearchIcon size={20} />
    },
    {
      step: "03",
      title: "Restore",
      desc: "We carefully redeploy files and databases to a staging area first.",
      icon: <RefreshCwIcon size={20} />
    },
    {
      step: "04",
      title: "Harden",
      desc: "We patch the vulnerability and push the clean site back to live.",
      icon: <Lock size={20} />
    }
  ];

  const faqs = [
    {
      q: "How fast can you get my site back?",
      a: "We typically start work within 30 minutes of an emergency request. Most standard restores are completed within 2-4 hours, depending on the size of the site and severity of the hack."
    },
    {
      q: "I don't have a backup. Can you still help?",
      a: "Often, yes. Hosting providers usually keep hidden backups for 14-30 days. We can also attempt to recover data from cached versions or partial archives. Contact us immediately."
    },
    {
      q: "Will I lose my recent orders/data?",
      a: "We aim for zero data loss. If we have to restore a backup from yesterday, we can often manually export today's database orders/posts and merge them into the restored version."
    },
    {
      q: "Is there a guarantee?",
      a: "If we cannot restore your website or recover your data, we will refund 100% of the emergency service fee. You only pay for results."
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

      {/* --- HERO: The Situation Room --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#1A3A6F]">
        {/* Background Decor */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2DA3DB]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left relative z-20">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/10 px-4 py-1.5 mb-8 backdrop-blur-md animate-pulse">
                <AlertTriangle size={14} className="text-red-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                  Critical Incident Support
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Site Down? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  We Bring It Back.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Don't panic. Our emergency team specializes in restoring hacked, broken, or deleted websites fast. We stop the downtime so you stop losing money.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-red-500/30 transition-all hover:bg-white hover:text-red-600 hover:-translate-y-1"
                >
                  Start Emergency Restore
                  <LifeBuoy size={18} />
                </a>
                <a
                  href="tel:+917397825850"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </div>

            {/* Right Visual: System Restore UI */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-md h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />

              {/* Terminal Window */}
              <div className="relative w-full bg-[#0F172A] rounded-xl shadow-2xl border border-slate-700 overflow-hidden font-mono text-xs sm:text-sm">

                {/* Header */}
                <div className="bg-[#1E293B] p-4 flex items-center justify-between border-b border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-slate-400">root@recovery-server:~</div>
                </div>

                {/* Console Output */}
                <div className="p-6 space-y-3 text-slate-300">
                  <div className="flex gap-2">
                    <span className="text-green-400">$</span>
                    <span>initiate_recovery.sh --force</span>
                  </div>

                  <div className="text-yellow-400">
                    [WARN] Critical Error detected in /public_html/index.php
                  </div>

                  <div className="flex gap-2 opacity-70">
                    <span className="text-blue-400">{'>'}</span>
                    <span>Scanning for recent backups...</span>
                  </div>
                  <div className="text-emerald-400">
                    [SUCCESS] Backup found: snapshot_2025-10-24.tar.gz
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-1 text-slate-400">
                      <span>Restoring Database...</span>
                      <span>88%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[88%] animate-[loading_2s_ease-in-out_infinite]" />
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded flex items-center gap-3 text-emerald-400">
                    <CheckCircle2 size={18} />
                    <span>Site is LIVE. Security hardened.</span>
                  </div>
                </div>

              </div>

              {/* Floating Alert Badge */}
              <div className="absolute top-6 -right-4 bg-white p-3 rounded-xl shadow-xl border border-red-100 flex items-center gap-3 animate-pulse z-20">
                <div className="bg-red-100 p-2 rounded-full text-red-500">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase">Status</div>
                  <div className="text-sm font-black text-[#1C1F26]">Recovery Active</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* --- Disaster Types Grid --- */}
      <section className="relative z-20 -mt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-[#1A3A6F]/5 border border-[#D9E4F2] p-8 lg:p-12">
            <div className="text-center mb-10">
              <h3 className="text-xl font-bold text-[#1C1F26]">We Handle All Scenarios</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#D9E4F2]">
              {disasters.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center pt-8 md:pt-0 px-4 first:pt-0 group">
                  <div className={`p-4 rounded-2xl mb-4 ${item.bg} transition-transform group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1F26] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#6E7787] leading-relaxed max-w-xs">{item.desc}</p>
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
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Emergency Toolkit</h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">We don't just "fix" it; we investigate, restore, and prevent it from happening again.</p>
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

      {/* --- The Recovery Process --- */}
      <section className="py-24 bg-white border-y border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="order-2 lg:order-1">
              <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">The Protocol</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                Path to <span className="text-emerald-500">Recovery</span>
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                A structured, calm approach to a chaotic situation. We keep you updated every step of the way.
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

            {/* Right Visual: Success Metrics */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-[#D9E4F2] p-8">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="font-bold text-[#1C1F26]">Recovery Statistics</h4>
                  <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                    99.8% Success Rate
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#F0F7FF] p-4 rounded-xl border border-[#D9E4F2]">
                    <div className="text-xs text-gray-500 mb-1">Avg. Response</div>
                    <div className="text-2xl font-black text-[#1C1F26]">15 <span className="text-sm font-medium">mins</span></div>
                  </div>
                  <div className="bg-[#F0F7FF] p-4 rounded-xl border border-[#D9E4F2]">
                    <div className="text-xs text-gray-500 mb-1">Avg. Restore</div>
                    <div className="text-2xl font-black text-[#1C1F26]">3.2 <span className="text-sm font-medium">hours</span></div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-[#1C1F26] rounded-xl text-white text-sm flex gap-3 items-center">
                  <Lock size={20} className="text-[#2DA3DB]" />
                  <div>
                    <div className="font-bold">Guaranteed Fix</div>
                    <div className="text-xs text-gray-400">No fix, no fee policy applied.</div>
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
            Emergency FAQs
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
            Need Help Right Now?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Every minute counts. Contact our emergency team to start the recovery process immediately.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-red-600 hover:-translate-y-1 transition-all cursor-pointer"
            >
              Open Emergency Ticket
              <Rocket size={20} />
            </a>
            <a
              href="https://wa.me/917397825850"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-all"
            >
              Urgent WhatsApp Chat
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

const RefreshCwIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M3 21v-5h5" /></svg>
);

export default Emergency_Restore_Support;
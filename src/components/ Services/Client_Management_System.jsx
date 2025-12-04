import React, { useState, useEffect } from 'react';
import {
  Users,
  LayoutList,
  Mail,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Rocket,
  MessageSquare,
  Globe,
  Shield,
  Zap,
  ChevronDown,
  FolderOpen,
  Search,
  Kanban,
  History,
  Phone,
  X,
  Check,
  BarChart,
  Bell // Added Bell to imports
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Client_Management_System = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- Data ---
  const painPoints = [
    {
      stat: "71%",
      desc: "Of leads are never followed up on because they get lost in email inboxes.",
      color: "text-red-500"
    },
    {
      stat: "20hrs",
      desc: "Wasted monthly by teams searching for 'that one file' or client detail.",
      color: "text-orange-500"
    },
    {
      stat: "Zero",
      desc: "Visibility into your sales pipeline when using static spreadsheets.",
      color: "text-yellow-500"
    }
  ];

  const features = [
    {
      title: "360° Client View",
      description: "See everything in one place. Emails, meeting notes, contracts, and project status are attached directly to the client profile.",
      icon: <Users className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "Visual Sales Pipeline",
      description: "Stop guessing where deals stand. Drag and drop leads through stages (New, Contacted, Proposal, Won) on a clean Kanban board.",
      icon: <Kanban className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Automated Follow-ups",
      description: "Never drop the ball. Set automatic reminders or email sequences to nurture leads who haven't responded yet.",
      icon: <History className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    },
    {
      title: "Centralized Documents",
      description: "Ditch the scattered Google Drive links. Store proposals, invoices, and agreements directly within the client's record.",
      icon: <FolderOpen className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    }
  ];

  const comparisonData = [
    { feature: "Data Organization", vernora: "Centralized & Searchable", excel: "Scattered & messy" },
    { feature: "Access Control", vernora: "Role-based Permissions", excel: "Anyone can delete rows" },
    { feature: "Automation", vernora: "Auto-reminders & emails", excel: "100% Manual" },
    { feature: "Mobile Access", vernora: "Responsive App", excel: "Hard to edit on phone" },
    { feature: "Security", vernora: "Encrypted Cloud Database", excel: "File can be stolen/lost" }
  ];

  const workflow = [
    {
      step: "01",
      title: "Capture",
      desc: "Leads enter automatically via website forms, email, or manual entry.",
      icon: <Search size={20} />
    },
    {
      step: "02",
      title: "Organize",
      desc: "Auto-tagging and segmentation based on industry, budget, or source.",
      icon: <LayoutList size={20} />
    },
    {
      step: "03",
      title: "Nurture",
      desc: "Track interactions, schedule calls, and send follow-up materials.",
      icon: <Mail size={20} />
    },
    {
      step: "04",
      title: "Close",
      desc: "Convert lead to client, generate contract, and move to 'Active Project'.",
      icon: <CheckCircle2 size={20} />
    }
  ];

  const faqs = [
    {
      q: "Is this a custom CRM or a template?",
      a: "It's a custom-built solution tailored to your specific workflow. Unlike Salesforce or HubSpot which charge per user, this is your own asset with no monthly licensing fees."
    },
    {
      q: "Can I import my existing Excel data?",
      a: "Yes. We build a one-click CSV import tool to migrate all your existing contacts, companies, and deals into the new system instantly."
    },
    {
      q: "Is my client data secure?",
      a: "Absolutely. We use industry-standard encryption for the database, secure login authentication (including 2FA if requested), and regular backups."
    },
    {
      q: "Can it integrate with Gmail or Outlook?",
      a: "Yes. We can set up integrations so that emails sent to/from a client automatically appear in their CRM timeline, keeping your records up to date."
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

      {/* --- HERO: The Control Room --- */}
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
                <Users size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  Relationship Intelligence
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Stop Losing Leads in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DA3DB] to-white">
                  Messy Spreadsheets
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                A custom Mini-CRM that fits your business perfectly. Centralize your contacts, track your pipeline, and close more deals with less chaos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Build My CRM
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  View Features
                </a>
              </div>
            </div>

            {/* Right Visual: Kanban/Dashboard */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-lg h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />

              {/* Dashboard Panel */}
              <div className="relative w-full bg-[#F3F4F6] rounded-2xl shadow-2xl border border-white/20 p-4 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                {/* CRM Header */}
                <div className="flex justify-between items-center mb-4 px-2">
                  <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 rounded-lg bg-[#1A3A6F] flex items-center justify-center text-white"><LayoutList size={16} /></div>
                    <div className="font-bold text-[#1C1F26] text-sm">Sales Pipeline</div>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-300" />)}
                  </div>
                </div>

                {/* Kanban Columns */}
                <div className="grid grid-cols-3 gap-3 h-64">
                  {/* Col 1: Leads */}
                  <div className="bg-white rounded-xl p-2 flex flex-col gap-2 border border-gray-200">
                    <div className="text-[10px] font-bold uppercase text-gray-400 mb-1 flex justify-between">
                      <span>New Leads</span> <span className="bg-gray-100 px-1 rounded">3</span>
                    </div>
                    {[1, 2, 3].map(i => (
                      <div key={i} className="bg-white border border-gray-100 p-2 rounded-lg shadow-sm">
                        <div className="h-2 w-16 bg-[#1A3A6F]/20 rounded mb-1" />
                        <div className="h-1.5 w-full bg-gray-100 rounded" />
                      </div>
                    ))}
                  </div>

                  {/* Col 2: In Progress */}
                  <div className="bg-white rounded-xl p-2 flex flex-col gap-2 border border-gray-200">
                    <div className="text-[10px] font-bold uppercase text-gray-400 mb-1 flex justify-between">
                      <span>In Discussion</span> <span className="bg-blue-50 text-[#2DA3DB] px-1 rounded">2</span>
                    </div>
                    <div className="bg-white border-l-4 border-[#2DA3DB] p-2 rounded-lg shadow-md">
                      <div className="h-2 w-20 bg-[#1C1F26] rounded mb-1" />
                      <div className="flex gap-1 mt-2">
                        <div className="w-4 h-4 rounded-full bg-gray-200" />
                        <div className="text-[8px] text-gray-500 flex items-center">Call Today</div>
                      </div>
                    </div>
                  </div>

                  {/* Col 3: Won */}
                  <div className="bg-white rounded-xl p-2 flex flex-col gap-2 border border-gray-200">
                    <div className="text-[10px] font-bold uppercase text-gray-400 mb-1 flex justify-between">
                      <span>Closed Won</span> <span className="bg-emerald-50 text-emerald-600 px-1 rounded">1</span>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-100 p-2 rounded-lg shadow-sm opacity-80">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 size={12} className="text-emerald-600" />
                        <div className="h-2 w-12 bg-emerald-200 rounded" />
                      </div>
                      <div className="text-[10px] font-bold text-emerald-700">$12,500</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Notification */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-[#D9E4F2] flex items-center gap-3 animate-bounce delay-700 z-20">
                <div className="w-10 h-10 rounded-full bg-[#2DA3DB]/10 flex items-center justify-center text-[#2DA3DB]">
                  <Bell size={20} />
                </div>
                <div>
                  <div className="text-xs text-[#6E7787] font-bold uppercase">Alert</div>
                  <div className="text-sm font-bold text-[#1C1F26]">Follow up: Acme Corp</div>
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
              <h3 className="text-xl font-bold text-[#1C1F26]">The High Cost of Disorganization</h3>
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

      {/* --- Core Features Grid --- */}
      <section id="features" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Your Business Brain</h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">Designed to keep your data organized and your team aligned.</p>
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
              Upgrade from Excel
            </h2>
            <p className="text-[#D9E4F2]/80 mt-4 max-w-2xl mx-auto">
              Why managing clients in spreadsheets is holding your business back.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-3 bg-[#F0F7FF] py-4 px-6 border-b border-[#D9E4F2]">
                  <div className="col-span-1 font-bold text-[#1C1F26]">Feature</div>
                  <div className="col-span-1 font-bold text-[#1A3A6F] text-center">Vernora CRM</div>
                  <div className="col-span-1 font-bold text-gray-400 text-center">Spreadsheets</div>
                </div>
                {comparisonData.map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-4 px-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 items-center">
                    <div className="col-span-1 font-medium text-[#1C1F26] text-sm">{row.feature}</div>
                    <div className="col-span-1 text-center font-bold text-[#1A3A6F] text-sm bg-[#2DA3DB]/10 rounded py-1 flex items-center justify-center gap-2">
                      <Check size={14} className="text-[#2DA3DB]" /> {row.vernora}
                    </div>
                    <div className="col-span-1 text-center text-gray-500 text-sm py-1 flex items-center justify-center gap-2">
                      <X size={14} className="text-red-400" /> {row.excel}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- The Lifecycle (Workflow) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="order-2 lg:order-1">
              <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">Client Journey</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                From Lead to <span className="text-[#2DA3DB]">Loyal Customer</span>
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                A structured process ensures no opportunity falls through the cracks.
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

            {/* Right Visual: Detail View */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-[#2DA3DB]/10 rounded-full blur-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-[#D9E4F2] p-8">
                <div className="flex justify-between items-start mb-8 border-b border-gray-100 pb-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200" />
                    <div>
                      <h4 className="font-bold text-[#1C1F26] text-lg">Acme Corp</h4>
                      <p className="text-sm text-gray-500">Tech • San Francisco</p>
                    </div>
                  </div>
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Proposal Sent
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#F0F7FF] flex items-center justify-center text-[#2DA3DB] shrink-0"><Mail size={14} /></div>
                    <div>
                      <div className="text-xs text-gray-400">Last Interaction</div>
                      <div className="text-sm font-medium text-[#1C1F26]">Sent updated contract v2.pdf</div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#FFF7ED] flex items-center justify-center text-orange-500 shrink-0"><Phone size={14} /></div>
                    <div>
                      <div className="text-xs text-gray-400">Next Step</div>
                      <div className="text-sm font-medium text-[#1C1F26]">Follow-up call scheduled for tomorrow</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div className="text-xs text-gray-400">Deal Value</div>
                  <div className="text-xl font-black text-[#1C1F26]">$24,500</div>
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
            CRM FAQs
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
            Ready to Organize Your Business?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Stop letting opportunities slip through the cracks. Get a custom CRM built for your workflow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 transition-all cursor-pointer"
            >
              Start Building
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

export default Client_Management_System;
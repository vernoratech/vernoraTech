import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  ArrowRight,
  Rocket,
  MessageSquare,
  Globe,
  Database,
  Zap,
  ChevronDown,
  LayoutDashboard,
  FileText,
  Share2,
  Lock,
  Filter,
  Download,
  RefreshCcw,
  Layers,
  Check,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Custom_Dashboard_Reports = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- Data ---
  const painPoints = [
    {
      stat: "12hrs+",
      desc: "Spent weekly by managers manually copy-pasting data from CSVs into Excel.",
      color: "text-red-500"
    },
    {
      stat: "Delayed",
      desc: "Decisions are made on stale data because reports take days to generate.",
      color: "text-orange-500"
    },
    {
      stat: "Silos",
      desc: "Marketing data doesn't talk to Sales data, creating blind spots in strategy.",
      color: "text-yellow-500"
    }
  ];

  const features = [
    {
      title: "Unified Data Sources",
      description: "Connect everything. We blend data from your CRM, ERP, Google Ads, and SQL databases into a single source of truth.",
      icon: <Database className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "Real-Time Visualization",
      description: "Watch your business pulse. Live charts that update instantly as sales happen or leads come in. No more refreshing.",
      icon: <Activity className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Role-Based Access",
      description: "Control who sees what. Give executives the big picture while restricting sensitive financial data from junior staff.",
      icon: <Lock className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    },
    {
      title: "Automated PDF Reports",
      description: "Set it on autopilot. Schedule beautiful PDF or Excel summaries to be emailed to stakeholders every Monday morning.",
      icon: <FileText className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    }
  ];

  const comparisonData = [
    { feature: "Data Freshness", vernora: "Real-Time / Live", excel: "Stale (Manual Update)" },
    { feature: "Accessibility", vernora: "Any Device / Web", excel: "File Bound / Desktop" },
    { feature: "Security", vernora: "Row-Level Permissions", excel: "Password Protect File" },
    { feature: " interactivity", vernora: "Drill-down & Filters", excel: "Static Rows" },
    { feature: "Integrations", vernora: "Auto-Sync APIs", excel: "Manual CSV Import" }
  ];

  const workflow = [
    {
      step: "01",
      title: "Connect",
      desc: "We hook into your databases (SQL, Mongo) and APIs (Stripe, Salesforce).",
      icon: <Layers size={20} />
    },
    {
      step: "02",
      title: "Transform",
      desc: "We clean, aggregate, and calculate key metrics (e.g., LTV, churn rate).",
      icon: <RefreshCcw size={20} />
    },
    {
      step: "03",
      title: "Visualize",
      desc: "We design intuitive dashboards with filters tailored to your KPIs.",
      icon: <LayoutDashboard size={20} />
    },
    {
      step: "04",
      title: "Act",
      desc: "You get actionable insights instantly to pivot strategy or fix issues.",
      icon: <Zap size={20} />
    }
  ];

  const faqs = [
    {
      q: "Can I connect multiple data sources?",
      a: "Yes. The power of a custom dashboard is 'Data Blending'. We can pull sales from Shopify, ads from Facebook, and expenses from QuickBooks into one Profit & Loss view."
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. We build read-only connections where possible, use encrypted tunnels (SSL), and implement strict role-based authentication (SSO/OAuth) to protect sensitive intel."
    },
    {
      q: "Can I export the data?",
      a: "Yes. Every chart and table comes with 'Export to CSV/Excel/PDF' functionality so you can take your data offline or present it in board meetings."
    },
    {
      q: "Does it work on mobile?",
      a: "Our dashboards are responsive by default. You can check your daily sales or critical alerts from your phone while on the go."
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

      {/* --- HERO: The Intelligence Hub --- */}
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
                <BarChart3 size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  Business Intelligence
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Turn Your Data Into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DA3DB] to-white">
                  Decisions
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Stop drowning in spreadsheets. We build custom, real-time dashboards that give you a 360° view of your business at a glance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Build My Dashboard
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  View Live Demo
                </a>
              </div>
            </div>

            {/* Right Visual: Dashboard UI */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-lg h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />

              {/* Dashboard Panel */}
              <div className="relative w-full bg-white rounded-2xl shadow-2xl border border-white/10 p-6 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase">Executive Overview</div>
                    <div className="text-lg font-bold text-[#1C1F26]">Q3 Performance</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-[#F0F7FF] text-[#1A3A6F] text-[10px] font-bold rounded-full border border-[#2DA3DB]/20 flex items-center gap-1">
                      Last 30 Days <ChevronDown size={10} />
                    </div>
                    <div className="p-1.5 bg-[#1A3A6F] text-white rounded-lg">
                      <Download size={12} />
                    </div>
                  </div>
                </div>

                {/* KPI Row */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#FAFAFA] p-4 rounded-xl border border-gray-100">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs text-gray-500">Total Revenue</span>
                      <TrendingUpIcon size={14} className="text-emerald-500" />
                    </div>
                    <div className="text-2xl font-black text-[#1C1F26]">$128.4k</div>
                    <div className="text-[10px] text-emerald-600 font-bold">+12% vs last mo</div>
                  </div>
                  <div className="bg-[#FAFAFA] p-4 rounded-xl border border-gray-100">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs text-gray-500">Active Users</span>
                      <Activity size={14} className="text-[#2DA3DB]" />
                    </div>
                    <div className="text-2xl font-black text-[#1C1F26]">4,291</div>
                    <div className="text-[10px] text-gray-400">Stable trend</div>
                  </div>
                </div>

                {/* Charts Area */}
                <div className="flex gap-4 h-32">
                  {/* Bar Chart */}
                  <div className="flex-1 bg-white border border-gray-100 rounded-xl p-3 flex items-end justify-between gap-1 relative overflow-hidden group">
                    {[40, 70, 50, 90, 60, 85, 75].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#1A3A6F] rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity" />
                    ))}
                  </div>
                  {/* Donut Chart */}
                  <div className="w-32 bg-white border border-gray-100 rounded-xl p-3 flex items-center justify-center relative">
                    <div className="w-20 h-20 rounded-full border-8 border-[#F0F7FF] border-t-[#2DA3DB] border-r-[#1A3A6F] transform -rotate-45" />
                    <div className="absolute text-[10px] font-bold text-[#1C1F26]">78%</div>
                  </div>
                </div>
              </div>

              {/* Floating Filter Tooltip */}
              <div className="absolute -right-4 top-24 bg-[#1A3A6F] text-white p-3 rounded-xl shadow-xl border border-[#2DA3DB]/30 flex items-center gap-3 animate-bounce delay-1000 z-20">
                <Filter size={16} className="text-[#2DA3DB]" />
                <div>
                  <div className="text-[10px] font-bold uppercase opacity-70">Filter By</div>
                  <div className="text-xs font-bold">Region: North America</div>
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
              <h3 className="text-xl font-bold text-[#1C1F26]">Why Spreadsheets Are Failing You</h3>
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
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Insights on Autopilot</h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">Tools designed for leaders who need answers, not raw data.</p>
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
              Dashboard vs. Spreadsheet
            </h2>
            <p className="text-[#D9E4F2]/80 mt-4 max-w-2xl mx-auto">
              Why modern companies are moving away from static Excel files.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-3 bg-[#F0F7FF] py-4 px-6 border-b border-[#D9E4F2]">
                  <div className="col-span-1 font-bold text-[#1C1F26]">Feature</div>
                  <div className="col-span-1 font-bold text-[#1A3A6F] text-center">Vernora Dashboard</div>
                  <div className="col-span-1 font-bold text-gray-400 text-center">Excel / Sheets</div>
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
              <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">Data Pipeline</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                From Raw Data to <span className="text-[#2DA3DB]">Rich Insights</span>
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                We handle the messy backend work of connecting APIs and cleaning data so you just see the answers.
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

            {/* Right Visual: Data Flow */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-[#2DA3DB]/10 rounded-full blur-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-[#D9E4F2] p-8 flex flex-col items-center justify-center h-[400px]">
                {/* Sources */}
                <div className="flex gap-4 mb-8">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xs font-bold text-gray-500 border border-gray-200">SQL</div>
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-xs font-bold text-blue-500 border border-blue-100">API</div>
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-xs font-bold text-green-500 border border-green-100">CSV</div>
                </div>

                {/* Funnel Animation */}
                <div className="w-1 h-12 bg-[#D9E4F2] relative overflow-hidden mb-2">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#2DA3DB] animate-[slideDown_1.5s_infinite]" />
                </div>
                <div className="w-16 h-16 rounded-full bg-[#1A3A6F] flex items-center justify-center text-white shadow-lg z-10">
                  <RefreshCcw className="animate-spin-slow" size={24} />
                </div>
                <div className="w-1 h-12 bg-[#D9E4F2] relative overflow-hidden mt-2">
                  <div className="absolute top-0 left-0 w-full h-full bg-[#2DA3DB] animate-[slideDown_1.5s_infinite]" />
                </div>

                {/* Output */}
                <div className="mt-8 w-full bg-[#F0F7FF] rounded-xl border border-[#2DA3DB]/30 p-4 flex gap-3 items-center shadow-sm">
                  <div className="flex-1 h-2 bg-[#2DA3DB] rounded-full" />
                  <div className="flex-1 h-2 bg-[#2DA3DB]/50 rounded-full" />
                  <PieChart size={24} className="text-[#1A3A6F]" />
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
            Reporting FAQs
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
            Ready to Visualize Your Success?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Get a custom dashboard built for your specific KPIs. Stop guessing, start knowing.
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

// Helper Icon for TrendingUp
const TrendingUpIcon = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
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
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export default Custom_Dashboard_Reports;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Cpu,
  Server,
  ArrowRight,
  LayoutGrid,
  Zap,
  Shield,
  ChevronRight,
  Globe,
  CheckCircle2,
  Clock,
  Users,
  MessageSquare,
  ChevronDown,
  Rocket,
} from 'lucide-react';

// --- DATA: Services Blueprint (Preserved Exactly) ---
const servicesBlueprint = [
  {
    id: 'development',
    title: 'Development',
    description: 'Websites, landing pages, and applications focused on performance, clarity, and conversion.',
    icon: <Code2 className="w-6 h-6" />,
    color: "bg-[#2DA3DB]", // Light Blue Accent
    groups: [
      {
        label: 'Build & Launch',
        items: [
          { name: 'Business Website Development', href: '/services/business-website-development', summary: 'Corporate and marketing websites built to look premium, load fast, and convert visitors into leads.' },
          { name: 'E-Commerce Store Setup', href: '/services/ecommerce', summary: 'Online stores on Shopify or custom stacks with smooth checkout, product pages, and basic integrations.' },
          { name: 'Landing Page For Ads', href: '/services/landing-pages', summary: 'Single-page funnels crafted for paid campaigns, focused on speed, clarity, and strong calls-to-action.' },
          { name: 'Booking / Appointment System', href: '/services/booking-system', summary: 'Self-service online booking and scheduling with confirmations and reminders for service businesses.' },
          { name: 'Portfolio & Personal Branding', href: '/services/portfolio-sites', summary: 'Clean, modern portfolio sites that highlight your work, story, and credibility as a professional.' },
        ],
      },
      {
        label: 'Improve & Scale',
        items: [
          { name: 'Fix Slow Website (Speed)', href: '/services/speed', summary: 'Deep performance audit and fixes for slow websites, Core Web Vitals, and hosting bottlenecks.' },
          { name: 'Bug Fixes & Enhancements', href: '/services/bug-fixes', summary: 'Ongoing improvements to existing sites and apps without a full rebuild, from bugs to new features.' },
          { name: 'Mobile App Development', href: '/services/mobile-apps', summary: 'Mobile applications that extend your web experience to Android and iOS with a consistent UX.' },
          { name: 'Custom API Development', href: '/services/api-dev', summary: 'APIs that connect your website, CRM, ERP, and internal tools so data flows automatically.' },
        ],
      },
    ],
  },
  {
    id: 'business-tools',
    title: 'Business Tools',
    description: 'Lightweight internal tools that automate operations, tracking, and reporting for your team.',
    icon: <Cpu className="w-6 h-6" />,
    color: "bg-[#1A3A6F]", // Deep Blue
    groups: [
      {
        label: 'Operations & Automation',
        items: [
          { name: 'Inventory & Order Tracking', href: '/services/inventory-system', summary: 'Track inventory levels, orders, and fulfillment in one place with simple dashboards.' },
          { name: 'Invoice & Billing Generator', href: '/services/invoice-tool', summary: 'Generate invoices, quotes, and payment links quickly with reusable templates.' },
          { name: 'Client Management (CRM)', href: '/services/mini-crm', summary: 'A focused mini-CRM to organise leads, customers, and follow-ups without heavy complexity.' },
          { name: 'Staff Timesheets', href: '/services/timesheet', summary: 'Track attendance and hours for in-house or remote teams with exportable reports.' },
          { name: 'Custom Dashboard & Reports', href: '/services/dashboard', summary: 'Custom analytics dashboards that bring data from multiple systems into one clear view.' },
        ],
      },
    ],
  },
  {
    id: 'care-support',
    title: 'Care & Support',
    description: 'Long-term care, maintenance, optimisation, and emergency help to keep your systems healthy.',
    icon: <Server className="w-6 h-6" />,
    color: "bg-emerald-500", // Success Green for Trust
    groups: [
      {
        label: 'Ongoing Care',
        items: [
          { name: 'Monthly Website Maintenance', href: '/services/maintenance', summary: 'A recurring plan to keep your website, plugins, and dependencies updated and secure.' },
          { name: 'Fix Hosting Issues / Migration', href: '/services/hosting-fix', summary: 'Move to better hosting or fix downtime, SSL, and configuration issues without losing data.' },
          { name: 'Speed Optimization', href: '/services/speed', summary: 'Ongoing tuning of performance to keep pages snappy and search-engine friendly.' },
          { name: 'Broken Pages / Layout Fixes', href: '/services/fixes', summary: 'Repair layout issues, broken sections, and responsive bugs across devices.' },
          { name: 'Small Tasks & Support Plan', href: '/services/support', summary: 'A flexible support bucket for small content edits, checks, and quick fixes each month.' },
        ],
      },
      {
        label: 'Emergency & Growth',
        items: [
          { name: 'Website Care Plan', href: '/services/maintenance', summary: 'A higher-touch care plan covering backups, monitoring, updates, and priority response.' },
          { name: 'Bug Fixes & Updates', href: '/services/bug-fixes', summary: 'Rapid help when something breaks after a change, deployment, or plugin update.' },
          { name: 'Plugin / Library Upgrades', href: '/services/upgrades', summary: 'Structured upgrades of plugins, libraries, and frameworks with regression checks.' },
          { name: 'Emergency Restore Support', href: '/services/restore', summary: 'Assistance when you need to quickly restore a broken or hacked site from backups.' },
          { name: 'Small Monthly Changes', href: '/services/small-changes', summary: 'Frequent, smaller improvements that keep your website evolving every month.' },
        ],
      },
    ],
  },
];

// --- DATA: New Content Sections ---

const values = [
  {
    title: "Enterprise Grade",
    desc: "We don't cut corners. Every service is built on scalable, secure architecture designed to grow with you.",
    icon: <Shield size={24} className="text-emerald-500" />
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden fees or surprise hourly billing. We scope projects upfront or work on clear retainers.",
    icon: <CheckCircle2 size={24} className="text-[#2DA3DB]" />
  },
  {
    title: "Rapid Deployment",
    desc: "Our modular approach allows us to launch MVPs and fixes faster than traditional agencies.",
    icon: <Zap size={24} className="text-orange-500" />
  }
];

const process = [
  { step: "01", title: "Consult", desc: "We audit your needs and map them to the right service mix." },
  { step: "02", title: "Architect", desc: "Our engineers design a solution that fits your existing stack." },
  { step: "03", title: "Execute", desc: "Agile development sprints with regular check-ins." },
  { step: "04", title: "Support", desc: "Post-launch care to ensure long-term stability." }
];

const faqs = [
  {
    q: "Can I mix and match services?",
    a: "Absolutely. Most clients combine 'Development' with 'Care & Support'. For example, building a new website and adding a monthly maintenance plan for peace of mind."
  },
  {
    q: "Do you work with existing codebases?",
    a: "Yes. Our 'Improve & Scale' and 'Care & Support' tracks are specifically designed for taking over, fixing, and optimizing existing projects built by other teams."
  },
  {
    q: "What is your typical timeline?",
    a: "Small fixes take 24-48 hours. Landing pages take ~1 week. Full custom platforms or apps typically take 4-8 weeks depending on complexity."
  }
];

const Footer_Services_Page = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#1C1F26]">

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 bg-[#1A3A6F] overflow-hidden">
        {/* Background Decor */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2DA3DB] rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/4" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8 backdrop-blur-md">
            <LayoutGrid size={14} className="text-[#2DA3DB]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
              Service Blueprint
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            All Our Capabilities, <br className="hidden md:block" />
            <span className="text-[#2DA3DB]">One Clear View.</span>
          </h1>

          <p className="text-lg text-[#D9E4F2]/80 max-w-2xl mx-auto mb-10">
            From building your first MVP to scaling enterprise infrastructure. Explore our complete catalog of digital services designed for growth.
          </p>
        </div>
      </section>

      {/* --- "THE VERNORA STANDARD" (Why Us) --- */}
      <section className="relative z-20 -mt-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-[#D9E4F2] flex flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-4 p-3 bg-[#FAFAFA] rounded-xl border border-[#F0F7FF]">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1C1F26] mb-2">{val.title}</h3>
                <p className="text-sm text-[#6E7787] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES LIST --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#1C1F26]">Explore Categories</h2>
          <p className="text-[#6E7787] mt-4">Click any service to see full details.</p>
        </div>

        <div className="space-y-16">
          {servicesBlueprint.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-3xl border border-[#D9E4F2] shadow-lg overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-[#FAFAFA] border-b border-[#D9E4F2] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${category.color} text-white shrink-0`}>
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1C1F26] mb-2">{category.title}</h2>
                  <p className="text-[#6E7787] max-w-2xl text-base md:text-lg">{category.description}</p>
                </div>
              </div>

              {/* Sub-Groups Grid */}
              <div className="p-8 md:p-10 grid md:grid-cols-2 gap-12">
                {category.groups.map((group, gIdx) => (
                  <div key={gIdx} className="flex flex-col h-full">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB] mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#2DA3DB]" />
                      {group.label}
                    </h3>

                    <div className="space-y-4 flex-1">
                      {group.items.map((service, sIdx) => (
                        <Link
                          key={sIdx}
                          to={service.href}
                          className="group block p-5 rounded-xl border border-transparent hover:border-[#D9E4F2] hover:bg-[#F0F7FF]/50 transition-all duration-200"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-[#1C1F26] group-hover:text-[#1A3A6F] transition-colors text-base">
                              {service.name}
                            </h4>
                            <ChevronRight size={16} className="text-[#D9E4F2] group-hover:text-[#2DA3DB] transition-colors opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1" />
                          </div>
                          <p className="text-sm text-[#6E7787] leading-relaxed">
                            {service.summary}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- ENGAGEMENT MODELS --- */}
      <section className="py-24 bg-[#1C1F26] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A3A6F] rounded-full blur-[120px] opacity-30" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#2DA3DB] font-bold text-xs uppercase tracking-widest mb-4 block">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Flexible Engagement Models</h2>
              <p className="text-[#D9E4F2]/80 mb-8 leading-relaxed">
                Whether you need a one-off build or a long-term technical partner, we structure our contracts to fit your business stage.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="p-2 rounded-lg bg-[#2DA3DB] text-white"><Rocket size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold">Project Based</h4>
                    <p className="text-[#D9E4F2]/60 text-sm">Fixed price, fixed timeline. Best for new builds.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="p-2 rounded-lg bg-[#1A3A6F] text-white"><Clock size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold">Monthly Retainer</h4>
                    <p className="text-[#D9E4F2]/60 text-sm">Reserved hours for ongoing support & growth.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Visual */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-white font-bold mb-6">Unified Delivery Process</h3>
              <div className="space-y-8">
                {process.map((step, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-[#2DA3DB] text-white flex items-center justify-center font-bold text-sm shadow-lg z-10">
                        {step.step}
                      </div>
                      {i !== process.length - 1 && (
                        <div className="w-0.5 h-full bg-white/10 my-2 group-hover:bg-[#2DA3DB]/50 transition-colors" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{step.title}</h4>
                      <p className="text-[#D9E4F2]/60 text-xs mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-[#1C1F26] text-center mb-12">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white border border-[#D9E4F2] rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'shadow-md border-[#2DA3DB]' : 'hover:border-[#2DA3DB]/50'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h4 className={`text-lg font-bold flex items-start gap-3 ${openFaq === idx ? 'text-[#1A3A6F]' : 'text-[#1C1F26]'}`}>
                    <MessageSquare size={20} className={`mt-0.5 shrink-0 ${openFaq === idx ? 'text-[#1A3A6F]' : 'text-[#2DA3DB]'}`} />
                    {faq.q}
                  </h4>
                  <ChevronDown size={20} className={`text-[#6E7787] transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#1A3A6F]' : ''}`} />
                </button>
                <div className={`px-6 pb-6 text-[#6E7787] leading-relaxed pl-[3.25rem] transition-all duration-300 ${openFaq === idx ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="py-20 bg-white border-t border-[#D9E4F2]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-[#2DA3DB]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield size={32} className="text-[#2DA3DB]" />
          </div>
          <h2 className="text-3xl font-bold text-[#1C1F26] mb-6">Unsure Where to Start?</h2>
          <p className="text-[#6E7787] mb-8 text-lg max-w-xl mx-auto">
            Our solutions architects are happy to audit your current setup and recommend the right service mix for your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A3A6F] px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-[#2DA3DB] transition-all hover:-translate-y-1"
            >
              Talk to an Expert
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9E4F2] bg-white px-8 py-4 text-sm font-bold text-[#1C1F26] hover:bg-[#FAFAFA] hover:border-[#1A3A6F]/30 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Footer_Services_Page;
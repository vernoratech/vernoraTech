import React, { useState, useEffect } from 'react';
import {
  CalendarDays,
  RefreshCcw,
  FileText,
  Image as ImageIcon,
  ArrowRight,
  Rocket,
  MessageSquare,
  CheckCircle2,
  Clock,
  Search,
  UploadCloud,
  Type,
  ChevronDown,
  Zap,
  PenTool,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Small_Monthly_Changes = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- Data ---
  const benefits = [
    {
      title: "SEO Freshness Signals",
      description: "Google loves active sites. Regular content updates signal to search engines that your business is alive and relevant.",
      icon: <Search className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "Seasonal Promotions",
      description: "Never show a Christmas banner in July again. We keep your offers, visuals, and announcements perfectly timed.",
      icon: <CalendarDays className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "User Trust",
      description: "A copyright date of 2021 kills credibility. We ensure your footer, team bios, and news sections show you are active.",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    },
    {
      title: "Zero Technical Risk",
      description: "Don't let an intern break the layout trying to swap a photo. We update content while preserving the design integrity.",
      icon: <ShieldCheckIcon className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    }
  ];

  const updateMenu = [
    {
      category: "Text & Copy",
      items: ["Update pricing tables", "Modify service descriptions", "Post job openings", "Add client testimonials"]
    },
    {
      category: "Visual Assets",
      items: ["Swap hero banners", "Upload gallery images", "Update team headshots", "Add PDF brochures"]
    },
    {
      category: "Blog & News",
      items: ["Format & publish articles", "Add featured images", "Optimize meta tags", "Fix broken internal links"]
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Email Request",
      desc: "Simply email us the new text, images, or instructions. No login portals required.",
      icon: <MessageSquare size={20} />
    },
    {
      step: "02",
      title: "Pro Formatting",
      desc: "We crop images, format text for readability, and ensure mobile responsiveness.",
      icon: <Type size={20} />
    },
    {
      step: "03",
      title: "Live Update",
      desc: "Changes are pushed live within 24-48 business hours.",
      icon: <UploadCloud size={20} />
    },
    {
      step: "04",
      title: "Confirmation",
      desc: "We reply with a direct link to verify the changes. Done.",
      icon: <CheckCircle2 size={20} />
    }
  ];

  const faqs = [
    {
      q: "How many changes can I request?",
      a: "Our plans typically include a set number of hours (e.g., 2 hours/month). This covers about 4-8 standard text/image updates. We let you know if a request exceeds your quota."
    },
    {
      q: "Can you write the blog posts for me?",
      a: "This service focuses on *publishing* content you provide. However, we have copywriting partners if you need content creation services."
    },
    {
      q: "What if I don't use my hours?",
      a: "Hours reset monthly to ensure our team's availability. This encourages you to keep your site fresh regularly rather than letting it stagnate."
    },
    {
      q: "Can I make the changes myself?",
      a: "Of course! But many clients prefer us to handle it to ensure formatting consistency, image optimization, and to save their own valuable time."
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

      {/* --- HERO: Content Manager Visual --- */}
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
                <RefreshCcw size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  Active Maintenance
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Keep Your Site <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DA3DB] to-white">
                  Alive & Ranking
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                A static website is a dying website. We handle your monthly content updates—blogs, banners, and text edits—so your business always looks current.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Update My Site
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  What Can We Change?
                </a>
              </div>
            </div>

            {/* Right Visual: Content Calendar / Editor */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-md h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />

              {/* Editor Interface */}
              <div className="relative w-full bg-white rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform rotate-[2deg] hover:rotate-0 transition-transform duration-500">
                {/* Browser Header */}
                <div className="h-10 bg-[#F0F7FF] border-b border-[#D9E4F2] flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 h-5 w-48 bg-white rounded border border-[#D9E4F2] opacity-50" />
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-6">
                  {/* Before State (Ghosted) */}
                  <div className="opacity-30 space-y-2 pointer-events-none filter blur-[1px]">
                    <div className="h-4 w-1/3 bg-gray-400 rounded" />
                    <div className="h-2 w-full bg-gray-300 rounded" />
                    <div className="h-2 w-5/6 bg-gray-300 rounded" />
                  </div>

                  {/* Edit Action */}
                  <div className="relative pl-4 border-l-2 border-[#2DA3DB]">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-[#2DA3DB] rounded-full" />
                    <div className="text-xs text-[#2DA3DB] font-bold uppercase mb-1">Updating...</div>
                    <div className="h-6 w-2/3 bg-[#1A3A6F] rounded mb-2 animate-pulse" />
                    <div className="h-2 w-full bg-[#D9E4F2] rounded mb-1" />
                    <div className="h-2 w-3/4 bg-[#D9E4F2] rounded" />
                  </div>

                  {/* Image Swap */}
                  <div className="relative h-32 bg-[#F0F7FF] rounded-xl border border-dashed border-[#2DA3DB] flex items-center justify-center flex-col text-[#2DA3DB]">
                    <UploadCloud size={24} className="mb-2" />
                    <span className="text-xs font-bold">New_Banner_Oct25.jpg</span>
                  </div>
                </div>

                {/* Success Badge */}
                <div className="absolute bottom-6 right-6 bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 border border-emerald-200 shadow-sm">
                  <CheckCircle2 size={14} /> Published
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Importance Grid --- */}
      <section className="relative z-20 -mt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-[#1A3A6F]/5 border border-[#D9E4F2] p-8 lg:p-12">
            <div className="text-center mb-10">
              <h3 className="text-xl font-bold text-[#1C1F26]">Why "Set & Forget" Fails</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#D9E4F2]">
              <div className="flex flex-col items-center text-center pt-8 md:pt-0 px-4 first:pt-0">
                <div className="text-4xl lg:text-5xl font-black mb-2 text-red-500">404</div>
                <p className="text-sm md:text-base text-[#6E7787] leading-relaxed max-w-xs">Links break over time. We find and fix them before customers notice.</p>
              </div>
              <div className="flex flex-col items-center text-center pt-8 md:pt-0 px-4">
                <div className="text-4xl lg:text-5xl font-black mb-2 text-orange-500">Static</div>
                <p className="text-sm md:text-base text-[#6E7787] leading-relaxed max-w-xs">Google stops indexing sites that don't publish new content.</p>
              </div>
              <div className="flex flex-col items-center text-center pt-8 md:pt-0 px-4">
                <div className="text-4xl lg:text-5xl font-black mb-2 text-yellow-500">Old</div>
                <p className="text-sm md:text-base text-[#6E7787] leading-relaxed max-w-xs">Outdated copyright dates make customers doubt if you're still in business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Benefits Grid --- */}
      <section id="features" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">The Value of Freshness</h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">Regular updates do more than just look good—they drive traffic and trust.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((feature, idx) => (
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

      {/* --- Update Menu (Scope) --- */}
      <section id="menu" className="py-24 bg-white border-y border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">Update Menu</span>
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">What We Can Change</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {updateMenu.map((group, i) => (
              <div key={i} className="bg-[#FAFAFA] border border-[#D9E4F2] rounded-2xl p-8 hover:border-[#2DA3DB] transition-all">
                <h3 className="text-xl font-bold text-[#1A3A6F] mb-6 flex items-center gap-2">
                  {i === 0 ? <Type size={20} /> : i === 1 ? <ImageIcon size={20} /> : <PenTool size={20} />}
                  {group.category}
                </h3>
                <ul className="space-y-4">
                  {group.items.map((item, t) => (
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

      {/* --- The Workflow (Step-by-Step) --- */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">How It Works</h2>
            <p className="text-[#6E7787] mt-4">No meetings. No hassle. Just results.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {workflow.map((step, i) => (
              <div key={i} className="relative pt-8 md:pt-0 text-center md:text-left group">
                {/* Connector Line */}
                {i !== workflow.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-[#D9E4F2] -z-10" />
                )}

                <div className="w-12 h-12 mx-auto md:mx-0 rounded-full bg-[#1A3A6F] text-white flex items-center justify-center font-bold text-lg border-4 border-white shadow-lg shrink-0 group-hover:scale-110 transition-transform">
                  {step.icon}
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
      <section className="py-24 bg-white border-t border-[#D9E4F2]">
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

      {/* --- CTA Section --- */}
      <section className="py-24 bg-[#1A3A6F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#2DA3DB] rounded-full blur-[150px] opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Time for a Refresh?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Get a recurring plan or a one-time update pack. Keep your site looking as good as day one.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 transition-all cursor-pointer"
            >
              Request Update
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

// Helper for ShieldCheck
const ShieldCheckIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default Small_Monthly_Changes;
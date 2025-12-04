import React, { useState, useEffect } from 'react';
import {
  CheckSquare,
  Clock,
  MessageSquare,
  ArrowRight,
  Rocket,
  Zap,
  ChevronDown,
  FileText,
  Image as ImageIcon,
  Settings,
  Link,
  LifeBuoy,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Small_Tasks_Support_Plan = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- Data ---
  const taskExamples = [
    {
      category: "Content Updates",
      tasks: ["Upload new blog posts", "Change hero images", "Update team bios", "Fix typos & broken links"],
      icon: <FileText size={20} className="text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      category: "Design Tweaks",
      tasks: ["Adjust button colors", "Fix mobile padding", "Change font sizes", "Swap logo files"],
      icon: <ImageIcon size={20} className="text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      category: "Functionality",
      tasks: ["Configure contact forms", "Set up Google Analytics", "Install/Update plugins", "Fix menu navigation"],
      icon: <Settings size={20} className="text-white" />,
      color: "bg-emerald-500"
    },
    {
      category: "Performance",
      tasks: ["Compress new images", "Minify CSS/JS", "Check 404 errors", "Basic speed audit"],
      icon: <Zap size={20} className="text-white" />,
      color: "bg-orange-500"
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Submit Ticket",
      desc: "Send us a quick email or use our portal. 'Hey, can you swap the banner image on the About page?'",
      icon: <MessageSquare size={20} />
    },
    {
      step: "02",
      title: "We Execute",
      desc: "Most small tasks are completed within 24 hours. No meetings required.",
      icon: <Zap size={20} />
    },
    {
      step: "03",
      title: "Review & Close",
      desc: "We send you a preview link. You approve it, and we push it live instantly.",
      icon: <CheckCircle2 size={20} />
    }
  ];

  const faqs = [
    {
      q: "What exactly counts as a 'Small Task'?",
      a: "A small task is anything that takes less than 1 hour to complete. If it turns out to be bigger, we'll let you know upfront and provide a custom quote before starting."
    },
    {
      q: "What is the turnaround time?",
      a: "Standard turnaround is 24-48 hours for small tasks. Urgent requests can be prioritized for an additional fee."
    },
    {
      q: "Do I need a monthly retainer?",
      a: "Not necessarily. You can buy a 'Task Pack' (e.g., 5 hours) that never expires, or sign up for a monthly retainer for a lower hourly rate and priority support."
    },
    {
      q: "Can you fix backend code or server issues?",
      a: "Small tasks generally cover frontend, content, and basic config. Complex backend logic or server outages usually fall under our 'Development' or 'Hosting' services, but we can definitely triage it for you."
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

      {/* --- HERO: The Help Desk --- */}
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
                <LifeBuoy size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  On-Demand Tech Support
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Your Personal <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DA3DB] to-white">
                  IT Department
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Need a quick text change? A broken link fixed? Or a new plugin installed? We handle the small stuff so you can focus on the big picture.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Submit a Task
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#scope"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  What We Do
                </a>
              </div>
            </div>

            {/* Right Visual: Task Board Animation */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-md h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />

              {/* Board Card */}
              <div className="relative w-full bg-[#F3F4F6] rounded-2xl shadow-2xl border border-white/20 p-6 overflow-hidden transform rotate-[2deg] hover:rotate-0 transition-transform duration-500">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-sm font-bold text-[#1C1F26] uppercase tracking-wide">Task Queue</div>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-blue-200 border border-white" />
                    <div className="w-6 h-6 rounded-full bg-green-200 border border-white" />
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Task 1: Done */}
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 flex items-center gap-3 opacity-60">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <CheckCircle2 size={12} />
                    </div>
                    <div className="flex-1 text-xs text-gray-400 line-through">Update Hero Image</div>
                    <div className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500">Done</div>
                  </div>

                  {/* Task 2: In Progress */}
                  <div className="bg-white p-4 rounded-xl shadow-lg border-l-4 border-[#2DA3DB] flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                      <div className="font-bold text-sm text-[#1C1F26]">Fix Contact Form</div>
                      <div className="text-[10px] bg-blue-50 text-[#2DA3DB] px-2 py-0.5 rounded font-bold">In Progress</div>
                    </div>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-[#2DA3DB] animate-pulse" />
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-1">
                      <div className="w-4 h-4 rounded-full bg-[#1A3A6F] text-white flex items-center justify-center">Dev</div>
                      <span>Working on validation logic...</span>
                    </div>
                  </div>

                  {/* Task 3: Pending */}
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                    <div className="flex-1 text-xs text-gray-600">Change Footer Links</div>
                    <div className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500">Queued</div>
                  </div>

                  {/* Task 4: Pending */}
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                    <div className="flex-1 text-xs text-gray-600">Add Team Member</div>
                    <div className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500">Queued</div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-[#1C1F26] text-white px-4 py-2 rounded-lg shadow-xl flex items-center gap-2 animate-bounce delay-700 z-20 text-xs font-bold">
                  <Clock size={12} className="text-[#2DA3DB]" />
                  <span>Avg Time: 45m</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- What Is A Small Task? (Scope) --- */}
      <section id="scope" className="relative z-20 -mt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-[#1A3A6F]/5 border border-[#D9E4F2] p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-[#1C1F26]">What Counts as a "Small Task"?</h3>
              <p className="text-[#6E7787] mt-2">Basically, anything we can do in under an hour.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {taskExamples.map((group, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <div className={`flex items-center gap-3 font-bold text-[#1C1F26]`}>
                    <div className={`p-2 rounded-lg ${group.color} shadow-sm`}>
                      {group.icon}
                    </div>
                    {group.category}
                  </div>
                  <ul className="space-y-3">
                    {group.tasks.map((task, t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-[#6E7787]">
                        <CheckSquare size={16} className="text-[#2DA3DB] mt-0.5 shrink-0" />
                        <span className="leading-tight">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- How It Works --- */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Zero Friction Workflow</h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">No contracts to sign for every little thing. Just ask, and it gets done.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-[#D9E4F2] -z-10" />

            {workflow.map((step, i) => (
              <div key={i} className="relative pt-8 group text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white border-2 border-[#D9E4F2] flex items-center justify-center text-[#1A3A6F] shadow-lg group-hover:border-[#2DA3DB] group-hover:text-[#2DA3DB] transition-all mb-6 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1C1F26] mb-3">{step.title}</h3>
                <p className="text-sm text-[#6E7787] leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Pricing / Plans Section Concept --- */}
      <section className="py-24 bg-white border-y border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-[#1C1F26] mb-12">Simple Pricing Models</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pay As You Go */}
            <div className="border border-[#D9E4F2] rounded-3xl p-8 hover:border-[#2DA3DB] transition-all hover:shadow-xl text-left">
              <div className="inline-block px-3 py-1 bg-[#F0F7FF] text-[#1A3A6F] rounded-full text-xs font-bold mb-4">Flexible</div>
              <h3 className="text-2xl font-bold text-[#1C1F26] mb-2">Pay As You Go</h3>
              <p className="text-[#6E7787] text-sm mb-6">Perfect for occasional updates.</p>
              <div className="text-4xl font-black text-[#1C1F26] mb-6">$50<span className="text-lg font-medium text-[#6E7787]">/hr</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-[#4B5563]"><CheckCircle2 size={16} className="text-[#2DA3DB]" /> No monthly commitment</li>
                <li className="flex gap-2 text-sm text-[#4B5563]"><CheckCircle2 size={16} className="text-[#2DA3DB]" /> 48h Turnaround</li>
                <li className="flex gap-2 text-sm text-[#4B5563]"><CheckCircle2 size={16} className="text-[#2DA3DB]" /> Billed per task</li>
              </ul>
              <a href="#contact" className="block w-full py-3 text-center rounded-xl border-2 border-[#1A3A6F] text-[#1A3A6F] font-bold hover:bg-[#1A3A6F] hover:text-white transition-all">Get Started</a>
            </div>

            {/* Retainer */}
            <div className="border-2 border-[#2DA3DB] bg-[#F0F7FF] rounded-3xl p-8 shadow-lg relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 bg-[#2DA3DB] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">BEST VALUE</div>
              <div className="inline-block px-3 py-1 bg-[#2DA3DB]/10 text-[#2DA3DB] rounded-full text-xs font-bold mb-4">Priority</div>
              <h3 className="text-2xl font-bold text-[#1C1F26] mb-2">Monthly Support</h3>
              <p className="text-[#6E7787] text-sm mb-6">For businesses that need regular help.</p>
              <div className="text-4xl font-black text-[#1C1F26] mb-6">$200<span className="text-lg font-medium text-[#6E7787]">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-[#4B5563]"><CheckCircle2 size={16} className="text-[#2DA3DB]" /> Includes 5 hours work</li>
                <li className="flex gap-2 text-sm text-[#4B5563]"><CheckCircle2 size={16} className="text-[#2DA3DB]" /> 24h Priority Turnaround</li>
                <li className="flex gap-2 text-sm text-[#4B5563]"><CheckCircle2 size={16} className="text-[#2DA3DB]" /> Discounted hourly rate</li>
              </ul>
              <a href="#contact" className="block w-full py-3 text-center rounded-xl bg-[#2DA3DB] text-white font-bold hover:bg-[#1A3A6F] transition-all shadow-lg">Subscribe</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#1C1F26] text-center mb-12">
            Support FAQs
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
            Have a Task List Ready?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Send it over. We'll give you a time estimate and get to work immediately.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 transition-all cursor-pointer"
            >
              Submit a Task
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

export default Small_Tasks_Support_Plan;
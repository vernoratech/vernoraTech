import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Users,
  CreditCard,
  Bell,
  CheckCircle2,
  ArrowRight,
  Rocket,
  MessageSquare,
  Globe,
  Shield,
  Zap,
  ChevronDown,
  CalendarCheck,
  Video,
  Mail,
  Smartphone,
  X,
  Check,
  LayoutGrid
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Booking_Appointment_System = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const features = [
    {
      title: "24/7 Self-Booking",
      description: "Your business never sleeps. Let clients book appointments, classes, or consultations anytime, anywhere, without back-and-forth emails.",
      icon: <CalendarCheck className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "Zero No-Shows",
      description: "Automated SMS and Email reminders reduce missed appointments by up to 80%. We set up smart sequences that nudge clients before their slot.",
      icon: <Bell className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Upfront Payments",
      description: "Secure deposits or full payments at the time of booking. Integrate Stripe or PayPal to protect your time and cash flow.",
      icon: <CreditCard className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    },
    {
      title: "Global Sync",
      description: "We sync perfectly with Google Calendar, Outlook, and Zoom. Timezones are handled automatically, so you never double-book.",
      icon: <Globe className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    }
  ];

  const useCases = [
    {
      role: "Doctors & Clinics",
      desc: "HIPAA-compliant patient scheduling with intake forms.",
      icon: <Shield className="w-5 h-5 text-[#2DA3DB]" />
    },
    {
      role: "Consultants",
      desc: "Paid discovery calls with auto-generated Zoom links.",
      icon: <Video className="w-5 h-5 text-[#2DA3DB]" />
    },
    {
      role: "Salons & Spas",
      desc: "Multi-staff calendars with specific service durations.",
      icon: <Users className="w-5 h-5 text-[#2DA3DB]" />
    }
  ];

  const comparisonData = [
    { feature: "Booking Availability", automated: "24/7 Instant Booking", manual: "Business Hours Only" },
    { feature: "Payment Collection", automated: "Instant / Upfront", manual: "Manual / Chasing Invoices" },
    { feature: "No-Show Protection", automated: "Auto-Reminders & Deposits", manual: "None / High Risk" },
    { feature: "Admin Time/Week", automated: "< 1 Hour", manual: "10+ Hours" },
    { feature: "Client Experience", automated: "Professional & Seamless", manual: "Frustrating Phone Tag" },
  ];

  const integrations = [
    { name: "Google Calendar", icon: <Calendar className="w-6 h-6" />, color: "bg-blue-500" },
    { name: "Zoom / Meet", icon: <Video className="w-6 h-6" />, color: "bg-blue-400" },
    { name: "Stripe", icon: <CreditCard className="w-6 h-6" />, color: "bg-indigo-500" },
    { name: "Mailchimp", icon: <Mail className="w-6 h-6" />, color: "bg-yellow-500" },
    { name: "WhatsApp", icon: <MessageSquare className="w-6 h-6" />, color: "bg-green-500" },
    { name: "SMS Gateways", icon: <Smartphone className="w-6 h-6" />, color: "bg-purple-500" },
  ];

  const faqs = [
    {
      q: "Does it sync with my personal Google Calendar?",
      a: "Yes. The system checks your personal calendar for conflicts in real-time, so clients only see slots when you are actually free."
    },
    {
      q: "Can I accept payments for bookings?",
      a: "Absolutely. You can require a full payment, a partial deposit, or just keep a card on file for no-show protection using Stripe or PayPal."
    },
    {
      q: "Is this better than Calendly?",
      a: "Calendly is great for simple needs. Our custom solutions allow for branded experiences, complex workflows (e.g., multi-staff, resource management), and zero monthly platform fees."
    },
    {
      q: "Do I need a mobile app for this?",
      a: "No. Our booking systems are fully responsive web applications. You and your clients can manage everything from a mobile browser without downloading anything."
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

      {/* --- HERO: The Command Center --- */}
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
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2DA3DB]/30 bg-[#2DA3DB]/10 px-4 py-1.5 mb-8 backdrop-blur-md">
                <Calendar size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  Automated Scheduling
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Stop Playing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DA3DB] to-white">
                  Phone Tag
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Reclaim 20+ hours a week. We build custom booking engines that fill your calendar, collect payments, and send reminders—automatically.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Automate My Calendar
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  See Features
                </a>
              </div>
            </div>

            {/* Right Visual: Abstract Calendar UI */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-md">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />
              <div className="relative bg-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                {/* Calendar Header */}
                <div className="bg-[#F0F7FF] p-6 border-b border-[#D9E4F2] flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A3A6F] flex items-center justify-center text-white font-bold text-xs">Dr.</div>
                    <div>
                      <div className="h-2 w-24 bg-[#1C1F26] rounded mb-1 opacity-80" />
                      <div className="h-2 w-16 bg-[#2DA3DB] rounded opacity-60" />
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-[#1A3A6F] shadow-sm border border-[#D9E4F2]">
                    September 2025
                  </div>
                </div>
                {/* Calendar Grid */}
                <div className="p-6 grid grid-cols-4 gap-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`h-20 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${i === 2 || i === 5 ? 'bg-[#1A3A6F] border-[#1A3A6F] text-white shadow-lg scale-105' : 'bg-[#FAFAFA] border-[#D9E4F2] text-[#6E7787]'}`}>
                      <span className="text-xs font-bold">{10 + i}:00</span>
                      {i === 2 || i === 5 ? (
                        <span className="text-[10px] bg-[#2DA3DB] px-2 py-0.5 rounded text-white">Booked</span>
                      ) : (
                        <span className="text-[10px] opacity-50">Free</span>
                      )}
                    </div>
                  ))}
                </div>
                {/* Notification Toast */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1C1F26] text-white p-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-medium">New booking from Sarah J. (Paid)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Features Grid (Bento Style) --- */}
      <section id="features" className="py-24 bg-[#FAFAFA] -mt-10 rounded-t-[40px] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Smart Scheduling Core</h2>
            <p className="text-[#6E7787] mt-4">Built to handle complex logic while keeping the user experience simple.</p>
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

      {/* --- NEW SECTION: The Integration Ecosystem --- */}
      <section className="py-20 bg-white border-y border-[#D9E4F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>
              <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">Seamless Connection</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                Plays Nice With Your <br /> Favorite Tools
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                A booking system shouldn't be an island. We integrate directly with your calendar, payment processor, and video conferencing tools so your workflow is completely automated.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {integrations.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-[#FAFAFA] bg-[#FAFAFA] hover:bg-white hover:shadow-md hover:border-[#D9E4F2] transition-all">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${item.color}`}>
                      {item.icon}
                    </div>
                    <span className="font-semibold text-[#1C1F26] text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual: Integration Web */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2DA3DB]/10 to-[#1A3A6F]/5 rounded-full blur-3xl" />
              <div className="relative w-[350px] h-[350px] border border-[#D9E4F2] rounded-full flex items-center justify-center bg-white shadow-xl animate-[spin_60s_linear_infinite]">
                {/* Central Hub */}
                <div className="absolute inset-0 m-auto w-24 h-24 bg-[#1A3A6F] rounded-full flex items-center justify-center text-white shadow-lg z-10">
                  <LayoutGrid size={32} />
                </div>

                {/* Orbiting Icons */}
                {integrations.map((item, idx) => {
                  const angle = (idx * 360) / integrations.length;
                  const radius = 130;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <div
                      key={idx}
                      className="absolute w-14 h-14 bg-white border border-[#D9E4F2] rounded-full flex items-center justify-center shadow-md animate-[spin_60s_linear_infinite_reverse]"
                      style={{
                        transform: `translate(${x}px, ${y}px)`
                      }}
                    >
                      <div className={`text-[#1A3A6F]`}>
                        {React.cloneElement(item.icon, { size: 20, className: "text-[#1A3A6F]" })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Revenue Impact Calculator (Visual) --- */}
      <section className="py-24 bg-[#1A3A6F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2DA3DB] rounded-full blur-[150px] opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">The Cost of "Doing it Manually"</h2>
            <p className="text-[#D9E4F2]/80 mt-4 max-w-2xl mx-auto">
              Manual scheduling isn't free. It costs you time, lost leads, and no-show revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <div className="text-4xl font-black text-[#2DA3DB] mb-2">15 hrs</div>
              <p className="text-white font-bold">Lost Per Month</p>
              <p className="text-[#D9E4F2]/60 text-sm mt-2">Emailing back & forth to find a time.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <div className="text-4xl font-black text-red-400 mb-2">20%</div>
              <p className="text-white font-bold">No-Show Rate</p>
              <p className="text-[#D9E4F2]/60 text-sm mt-2">Without automated SMS reminders.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[#2DA3DB]/10" />
              <div className="text-4xl font-black text-emerald-400 mb-2">$0</div>
              <p className="text-white font-bold">Upfront Deposits</p>
              <p className="text-[#D9E4F2]/60 text-sm mt-2">Risky bookings with no commitment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Manual vs Automated Comparison --- */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#1A3A6F] font-bold text-xs uppercase tracking-widest bg-white px-4 py-1.5 rounded-full border border-[#1A3A6F]/10 shadow-sm">
              Upgrade Your Operations
            </span>
            <h2 className="text-3xl font-extrabold text-[#1C1F26] mt-6">
              Manual vs. Automated
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-[#D9E4F2] overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-3 bg-[#F0F7FF] py-4 px-6 border-b border-[#D9E4F2]">
                  <div className="col-span-1 font-bold text-[#1C1F26]">Feature</div>
                  <div className="col-span-1 font-bold text-[#1A3A6F] text-center">Vernora System</div>
                  <div className="col-span-1 font-bold text-gray-400 text-center">Manual / Email</div>
                </div>
                {comparisonData.map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-4 px-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 items-center">
                    <div className="col-span-1 font-medium text-[#1C1F26] text-sm">{row.feature}</div>
                    <div className="col-span-1 text-center font-bold text-[#1A3A6F] text-sm bg-[#2DA3DB]/10 rounded py-1 flex items-center justify-center gap-2">
                      <Check size={14} className="text-[#2DA3DB]" /> {row.automated}
                    </div>
                    <div className="col-span-1 text-center text-gray-500 text-sm py-1 flex items-center justify-center gap-2">
                      <X size={14} className="text-red-400" /> {row.manual}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- The Workflow (Step-by-Step) --- */}
      <section className="py-24 bg-white border-t border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="order-2 lg:order-1">
              <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">The Workflow</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                From Visitor to <span className="text-[#2DA3DB]">Paid Appointment</span>
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                A frictionless journey designed to maximize bookings and minimize administrative headaches.
              </p>

              <div className="space-y-8">
                {[
                  { title: "Client Selects Time", desc: "They see your real-time availability in their local timezone." },
                  { title: "Intake & Payment", desc: "We capture essential details and secure the deposit instantly." },
                  { title: "Auto-Confirmations", desc: "Calendar invites and Zoom links are sent to both parties immediately." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 relative">
                    {/* Line Connector */}
                    {i !== 2 && <div className="absolute left-[19px] top-10 h-full w-0.5 bg-[#F0F7FF]" />}

                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F0F7FF] border border-[#D9E4F2] flex items-center justify-center text-[#1A3A6F] font-bold text-sm z-10">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1C1F26]">{step.title}</h4>
                      <p className="text-sm text-[#6E7787] mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual: Use Cases */}
            <div className="order-1 lg:order-2">
              <div className="bg-[#1A3A6F] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl shadow-[#1A3A6F]/20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#2DA3DB] rounded-full blur-[80px] opacity-20" />

                <h3 className="text-2xl font-bold mb-8 relative z-10">Who Is This For?</h3>
                <div className="space-y-4 relative z-10">
                  {useCases.map((useCase, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center gap-4 hover:bg-white/20 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                        {useCase.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">{useCase.role}</h4>
                        <p className="text-[#D9E4F2]/70 text-xs">{useCase.desc}</p>
                      </div>
                    </div>
                  ))}
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
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#2DA3DB] rounded-full blur-[150px] opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Fill Your Calendar?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Stop losing hours to manual scheduling. Get a custom booking system that works as hard as you do.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 transition-all cursor-pointer"
            >
              Build My System
              <Rocket size={20} />
            </a>
            <a
              href="https://wa.me/917397825850"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-all"
            >
              Chat Strategy
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Booking_Appointment_System;
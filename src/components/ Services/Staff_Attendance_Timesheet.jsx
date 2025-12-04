import React, { useState, useEffect } from 'react';
import {
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Rocket,
  MessageSquare,
  Shield,
  Zap,
  ChevronDown,
  FileSpreadsheet,
  Fingerprint,
  Smartphone,
  UserCheck,
  AlertCircle,
  Briefcase,
  Building2,
  HardHat,
  X,
  Check
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Staff_Attendance_Timesheet = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- Data ---
  const painPoints = [
    {
      stat: "4.5hrs",
      desc: "Average time wasted per week by HR manually reconciling paper timesheets.",
      color: "text-red-500"
    },
    {
      stat: "20%",
      desc: "Of every dollar spent on hourly wages is lost to 'buddy punching' and time theft.",
      color: "text-orange-500"
    },
    {
      stat: "High",
      desc: "Compliance risk when overtime and breaks aren't accurately tracked for labor laws.",
      color: "text-yellow-500"
    }
  ];

  const features = [
    {
      title: "GPS Geofencing",
      description: "Ensure staff are actually on-site when they clock in. Set virtual perimeters around job sites or offices that enable the punch button.",
      icon: <MapPin className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "Biometric Verification",
      description: "Eliminate buddy punching. Require a selfie or FaceID scan to clock in, verifying the right person is on the job.",
      icon: <Fingerprint className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "One-Click Payroll",
      description: "Export approved hours directly to Excel, QuickBooks, or Xero. No more manual data entry or calculation errors.",
      icon: <FileSpreadsheet className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    },
    {
      title: "Shift Scheduling",
      description: "Drag-and-drop rostering. Notify employees of their shifts via the app and handle swap requests instantly.",
      icon: <Calendar className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    }
  ];

  const industries = [
    {
      title: "Construction & Field",
      desc: "Track crews across multiple job sites with GPS accuracy.",
      icon: <HardHat className="w-6 h-6 text-[#2DA3DB]" />
    },
    {
      title: "Retail & Hospitality",
      desc: "Manage shifts, breaks, and overtime for floor staff.",
      icon: <Building2 className="w-6 h-6 text-[#2DA3DB]" />
    },
    {
      title: "Remote Teams",
      desc: "Activity tracking and screen monitoring for work-from-home setups.",
      icon: <Briefcase className="w-6 h-6 text-[#2DA3DB]" />
    }
  ];

  const comparisonData = [
    { feature: "Accuracy", vernora: "GPS & Biometric Precise", manual: "Estimates / Guesses" },
    { feature: "Fraud Prevention", vernora: "Anti-Buddy Punching", manual: "None" },
    { feature: "Payroll Speed", vernora: "Instant Export", manual: "Hours of Data Entry" },
    { feature: "Overtime Alerts", vernora: "Real-time Notifications", manual: "Surprise at Month End" },
    { feature: "Leave Management", vernora: "In-App Request/Approve", manual: "Email Threads" }
  ];

  const faqs = [
    {
      q: "Do employees need a special device?",
      a: "No. Our system works on any standard smartphone (iOS/Android) as an app, or on any web browser. You can also set up a centralized tablet kiosk."
    },
    {
      q: "Does it track location all day?",
      a: "Privacy first. We only capture location data at the exact moment of clock-in and clock-out to verify presence. We do not track movements during personal time."
    },
    {
      q: "Can it handle complex overtime rules?",
      a: "Yes. You can configure daily, weekly, or double-time overtime rules specific to your local labor laws. The system calculates pay rates automatically."
    },
    {
      q: "What if the internet goes down?",
      a: "The mobile app has an offline mode. Punches are stored locally on the device and sync to the cloud immediately once connectivity is restored."
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

      {/* --- HERO: The "Clock-In" Experience --- */}
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
                <Clock size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  Smart Workforce Management
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Stop Chasing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DA3DB] to-white">
                  Timesheets
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Eliminate time theft and payroll errors. Track attendance with GPS precision, biometric verification, and real-time reporting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Start Free Trial
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  How It Works
                </a>
              </div>
            </div>

            {/* Right Visual: Mobile Attendance App */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-md h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />

              {/* Phone Visual */}
              <div className="relative w-[260px] h-[520px] bg-[#1C1F26] rounded-[40px] border-[8px] border-[#1C1F26] shadow-2xl overflow-hidden transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1C1F26] rounded-b-2xl z-20" />

                {/* App Screen */}
                <div className="h-full bg-white flex flex-col relative">
                  {/* Map Background */}
                  <div className="h-1/2 bg-[#F0F7FF] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2DA3DB 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                    {/* Geofence Circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#2DA3DB]/20 rounded-full border-2 border-[#2DA3DB] flex items-center justify-center animate-pulse">
                      <div className="bg-[#2DA3DB] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">Office Zone</div>
                    </div>
                    {/* User Pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform -mt-8 text-[#1A3A6F]">
                      <MapPin size={32} fill="#1A3A6F" />
                    </div>
                  </div>

                  {/* Clock In Card */}
                  <div className="flex-1 bg-white rounded-t-3xl -mt-6 p-6 relative z-10 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] flex flex-col items-center">
                    <div className="w-12 h-1 bg-gray-200 rounded-full mb-6" />

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-black text-[#1C1F26]">09:41 AM</h3>
                      <p className="text-sm text-gray-500">Monday, Oct 24</p>
                    </div>

                    <button className="w-32 h-32 rounded-full bg-gradient-to-b from-[#2DA3DB] to-[#1A3A6F] shadow-xl shadow-[#2DA3DB]/30 flex flex-col items-center justify-center text-white hover:scale-105 transition-transform active:scale-95 group">
                      <Fingerprint size={32} className="mb-2 group-hover:text-white" />
                      <span className="font-bold text-sm">Slide to <br /> Clock In</span>
                    </button>

                    <div className="mt-auto w-full pt-6 border-t border-gray-100 flex justify-between text-xs text-gray-500 font-medium">
                      <span>Shift: 9:00 - 5:00</span>
                      <span className="text-emerald-600">● On Time</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Success Toast */}
              <div className="absolute bottom-24 -right-12 bg-white p-3 rounded-xl shadow-xl border border-[#D9E4F2] flex items-center gap-3 animate-bounce delay-1000 z-20 max-w-[200px]">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-[#6E7787] font-bold uppercase">Verified</div>
                  <div className="text-xs font-bold text-[#1C1F26]">Face ID Matched</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* --- Pain Points Grid (The Cost of Manual) --- */}
      <section className="relative z-20 -mt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-[#1A3A6F]/5 border border-[#D9E4F2] p-8 lg:p-12">
            <div className="text-center mb-10">
              <h3 className="text-xl font-bold text-[#1C1F26]">The Hidden Cost of Paper Timesheets</h3>
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
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Complete Workforce Visibility</h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">Tools designed for managers who need to know who is where, when.</p>
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

      {/* --- Industries & Use Cases --- */}
      <section className="py-24 bg-white border-y border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2DA3DB] font-bold text-xs uppercase tracking-widest mb-2 block">Versatility</span>
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Built for Every Team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-[#D9E4F2] hover:border-[#2DA3DB] bg-[#FAFAFA] hover:bg-white transition-all hover:shadow-lg">
                <div className="w-14 h-14 rounded-xl bg-[#2DA3DB]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {ind.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1C1F26] mb-2">{ind.title}</h3>
                <p className="text-[#6E7787] text-sm leading-relaxed">{ind.desc}</p>
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
              Digital vs. Manual
            </h2>
            <p className="text-[#D9E4F2]/80 mt-4 max-w-2xl mx-auto">
              Why switching to an automated system pays for itself in the first month.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-3 bg-[#F0F7FF] py-4 px-6 border-b border-[#D9E4F2]">
                  <div className="col-span-1 font-bold text-[#1C1F26]">Feature</div>
                  <div className="col-span-1 font-bold text-[#1A3A6F] text-center">Vernora System</div>
                  <div className="col-span-1 font-bold text-gray-400 text-center">Paper / Excel</div>
                </div>
                {comparisonData.map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-4 px-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 items-center">
                    <div className="col-span-1 font-medium text-[#1C1F26] text-sm">{row.feature}</div>
                    <div className="col-span-1 text-center font-bold text-[#1A3A6F] text-sm bg-[#2DA3DB]/10 rounded py-1 flex items-center justify-center gap-2">
                      <Check size={14} className="text-[#2DA3DB]" /> {row.vernora}
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
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#2DA3DB] rounded-full blur-[150px] opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Modernize Your Workforce?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Get a custom attendance solution tailored to your team size and workflow.
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

export default Staff_Attendance_Timesheet;
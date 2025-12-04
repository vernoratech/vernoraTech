import React, { useState, useEffect } from 'react';
import {
  Receipt,
  CreditCard,
  Clock,
  CheckCircle2,
  ArrowRight,
  Rocket,
  MessageSquare,
  Globe,
  Shield,
  Zap,
  ChevronDown,
  FileText,
  RefreshCcw,
  PieChart,
  Mail,
  AlertCircle,
  Banknote,
  Calculator,
  X,
  Check
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Invoice_Billing_Generator = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- Data ---
  const painPoints = [
    {
      stat: "15 Days",
      desc: "Average delay in payment when using manual PDF invoices.",
      color: "text-red-500"
    },
    {
      stat: "4%",
      desc: "Of annual revenue is lost due to billing errors and uncollected payments.",
      color: "text-orange-500"
    },
    {
      stat: "12hrs",
      desc: "Spent monthly by small business owners just on reconciling accounts.",
      color: "text-yellow-500"
    }
  ];

  const features = [
    {
      title: "Smart Recurring Billing",
      description: "Set it and forget it. Automatically generate and send invoices for subscriptions, retainers, or payment plans on a schedule you define.",
      icon: <RefreshCcw className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "One-Click Payment Links",
      description: "Embed 'Pay Now' buttons directly into your invoices. Support Credit Cards, ACH, UPI, and Apple Pay for instant settlement.",
      icon: <CreditCard className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Automated Chasing",
      description: "Stop having awkward money conversations. Our system sends polite, escalating reminders to clients with overdue invoices automatically.",
      icon: <Mail className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    },
    {
      title: "Tax & Compliance",
      description: "Auto-calculate GST/VAT based on your client's location. Generate reports ready for your accountant at the click of a button.",
      icon: <Calculator className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    }
  ];

  const comparisonData = [
    { feature: "Payment Speed", vernora: "Instant (Payment Link)", manual: "Slow (Bank Transfer)" },
    { feature: "Recurring Bills", vernora: "100% Automated", manual: "Manual Creation" },
    { feature: "Reminders", vernora: "Auto-Scheduled", manual: "Manual Emailing" },
    { feature: "Branding", vernora: "Professional White-Label", manual: "Basic Excel/Word" },
    { feature: "Client Portal", vernora: "Included", manual: "None" }
  ];

  const workflow = [
    {
      step: "01",
      title: "Create Quote",
      desc: "Draft a beautiful proposal. Once accepted by the client, it auto-converts to an invoice.",
      icon: <FileText size={20} />
    },
    {
      step: "02",
      title: "Auto-Send",
      desc: "The invoice is emailed immediately or scheduled. Recurring bills handle themselves.",
      icon: <MessageSquare size={20} />
    },
    {
      step: "03",
      title: "Get Paid",
      desc: "Client pays via the integrated link. Money hits your bank account instantly.",
      icon: <Zap size={20} />
    },
    {
      step: "04",
      title: "Reconcile",
      desc: "The system marks the invoice as paid and syncs with your accounting software (QuickBooks/Xero).",
      icon: <CheckCircle2 size={20} />
    }
  ];

  const faqs = [
    {
      q: "Can I customize the invoice design?",
      a: "Yes. You can add your logo, brand colors, custom fields, and localized terms and conditions. The PDF output looks professionally designed, not like a generic template."
    },
    {
      q: "Which payment gateways do you support?",
      a: "We integrate seamlessly with Stripe, PayPal, Razorpay, Authorize.net, and Square. You can offer multiple payment methods on a single invoice."
    },
    {
      q: "Does it handle multi-currency?",
      a: "Absolutely. You can bill clients in USD, EUR, GBP, INR, or 100+ other currencies. The system handles the conversion rates automatically if needed."
    },
    {
      q: "Is my financial data secure?",
      a: "We use bank-grade 256-bit SSL encryption. We do not store credit card numbers directly; all sensitive data is tokenized via the payment processor (PCI-DSS Compliant)."
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

      {/* --- HERO: The Financial Hub --- */}
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
                <Receipt size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  Automated Finance
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Stop Chasing Invoices. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DA3DB] to-white">
                  Start Automating Cashflow.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Create professional invoices in seconds, accept payments globally, and let the system handle the follow-ups.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Build My Billing System
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  View Capabilities
                </a>
              </div>
            </div>

            {/* Right Visual: Live Invoice Preview */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-md h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />

              {/* Invoice Card */}
              <div className="relative w-full bg-white rounded-xl shadow-2xl border border-white/10 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                {/* Status Bar */}
                <div className="h-2 w-full bg-emerald-500" />

                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 bg-[#1A3A6F] rounded-lg flex items-center justify-center text-white font-bold text-lg">V</div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400 uppercase font-bold">Invoice #</div>
                      <div className="text-lg font-mono font-bold text-[#1C1F26]">INV-2025-001</div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-sm text-gray-600">Web Development Services</span>
                      <span className="text-sm font-bold text-[#1C1F26]">$2,500.00</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-sm text-gray-600">Hosting Setup (Annual)</span>
                      <span className="text-sm font-bold text-[#1C1F26]">$240.00</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span className="text-base font-bold text-[#1C1F26]">Total Due</span>
                      <span className="text-xl font-black text-[#1A3A6F]">$2,740.00</span>
                    </div>
                  </div>

                  {/* Pay Button Visual */}
                  <div className="bg-[#1C1F26] text-white rounded-lg py-3 flex items-center justify-center gap-2 shadow-lg cursor-default">
                    <CreditCard size={16} /> Pay Invoice Now
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-4 flex justify-center gap-4 opacity-40 grayscale">
                    <div className="h-4 w-10 bg-gray-400 rounded" />
                    <div className="h-4 w-10 bg-gray-400 rounded" />
                    <div className="h-4 w-10 bg-gray-400 rounded" />
                  </div>
                </div>

                {/* Floating Notification */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 animate-bounce delay-1000 z-20">
                  <CheckCircle2 size={16} /> Payment Received
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
              <h3 className="text-xl font-bold text-[#1C1F26]">The High Cost of "Sending a PDF"</h3>
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
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Billing Intelligence</h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">More than just a template. A complete financial operating system.</p>
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
              Why Automate?
            </h2>
            <p className="text-[#D9E4F2]/80 mt-4 max-w-2xl mx-auto">
              Manual billing bottlenecks your growth. Automation sets it free.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-3 bg-[#F0F7FF] py-4 px-6 border-b border-[#D9E4F2]">
                  <div className="col-span-1 font-bold text-[#1C1F26]">Feature</div>
                  <div className="col-span-1 font-bold text-[#1A3A6F] text-center">Vernora System</div>
                  <div className="col-span-1 font-bold text-gray-400 text-center">Manual / Excel</div>
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

      {/* --- The Lifecycle (Workflow) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="order-2 lg:order-1">
              <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">Cash Flow Cycle</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                The Life of a <span className="text-[#2DA3DB]">Paid Invoice</span>
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                Seamlessly move from proposal to payment without lifting a finger.
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

            {/* Right Visual: Financial Graph (FIXED) */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-[#2DA3DB]/10 rounded-full blur-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-[#D9E4F2] p-8">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="font-bold text-[#1C1F26]">Revenue Collected</h4>
                  <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                    +24% vs Last Mo
                  </div>
                </div>

                {/* Bar Chart Visual - Corrected Height Logic */}
                <div className="h-64 flex items-end justify-between gap-2 sm:gap-4">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="w-full h-full bg-[#F0F7FF] rounded-t-lg relative group overflow-hidden">
                      {/* Tooltip on Hover */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1C1F26] text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        ${h}k
                      </div>
                      {/* Animated Bar */}
                      <div
                        style={{ height: `${h}%` }}
                        className="absolute bottom-0 w-full bg-[#1A3A6F] rounded-t-lg transition-all duration-500 ease-out group-hover:bg-[#2DA3DB]"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-xs text-gray-400 font-mono">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
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
            Billing FAQs
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
            Ready to Get Paid Faster?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Get a custom billing solution tailored to your business model. One-time setup, lifetime efficiency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 transition-all cursor-pointer"
            >
              Start Automating
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

export default Invoice_Billing_Generator;
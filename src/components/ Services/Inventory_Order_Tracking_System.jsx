import React, { useState, useEffect } from 'react';
import {
  Package,
  Truck,
  BarChart3,
  ScanBarcode,
  ArrowRight,
  Rocket,
  MessageSquare,
  Globe,
  CheckCircle2,
  Box,
  ClipboardList,
  AlertTriangle,
  RefreshCw,
  ShoppingCart,
  Warehouse,
  MapPin,
  ChevronDown,
  X,
  Check,
  DollarSign,
  Activity,
  Factory,
  Store,
  Container
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Inventory_Order_Tracking_System = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- Data ---
  const painPoints = [
    {
      stat: "$1.75T",
      desc: "Lost annually by retailers due to out-of-stocks and overstocks worldwide.",
      color: "text-red-500"
    },
    {
      stat: "34%",
      desc: "Of businesses ship orders late because they sell items they don't actually have.",
      color: "text-orange-500"
    },
    {
      stat: "60%",
      desc: "Of supply chain tasks are still manual, leading to human error and slow fulfillment.",
      color: "text-yellow-500"
    }
  ];

  const features = [
    {
      title: "Real-Time Stock Sync",
      description: "Never oversell again. Our system syncs inventory levels across Amazon, Shopify, and your physical warehouse in real-time (sub-second latency).",
      icon: <RefreshCw className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "Barcode & QR Scanning",
      description: "Turn any smartphone into a powerful scanner. Your warehouse team can pick, pack, and ship orders with zero manual data entry errors.",
      icon: <ScanBarcode className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Multi-Warehouse Routing",
      description: "Automatically route orders to the nearest warehouse with stock. Reduce shipping costs and delivery times with smart logic.",
      icon: <Warehouse className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    },
    {
      title: "Low Stock Alerts",
      description: "Get notified before you run out. Set custom reorder points for each SKU and automate purchase orders to suppliers.",
      icon: <AlertTriangle className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    }
  ];

  const industries = [
    {
      title: "E-Commerce Brands",
      desc: "DTC brands managing high SKU counts across Shopify and Amazon.",
      icon: <Store className="w-6 h-6 text-[#2DA3DB]" />
    },
    {
      title: "Wholesale & B2B",
      desc: "Distributors handling bulk orders, pallets, and freight shipping.",
      icon: <Container className="w-6 h-6 text-[#2DA3DB]" />
    },
    {
      title: "Manufacturing",
      desc: "Tracking raw materials, work-in-progress, and finished goods.",
      icon: <Factory className="w-6 h-6 text-[#2DA3DB]" />
    }
  ];

  const comparisonData = [
    { feature: "Setup Cost", vernora: "One-time Build Fee", erp: "Expensive Licensing" },
    { feature: "Customization", vernora: "100% Tailored to You", erp: "Rigid / Hard to Change" },
    { feature: "User Experience", vernora: "Modern & Intuitive", erp: "Clunky & Dated" },
    { feature: "Integrations", vernora: "Custom APIs Built-in", erp: "Expensive Add-ons" },
    { feature: "Mobile Access", vernora: "Native Mobile Apps", erp: "Limited / Desktop First" }
  ];

  const workflow = [
    {
      step: "01",
      title: "Order Ingest",
      desc: "Orders flow in from your website, marketplaces, or B2B portal instantly.",
      icon: <ShoppingCart size={20} />
    },
    {
      step: "02",
      title: "Pick & Pack",
      desc: "Warehouse staff get optimized pick lists on their mobile devices.",
      icon: <ClipboardList size={20} />
    },
    {
      step: "03",
      title: "Label Generation",
      desc: "We auto-generate shipping labels (FedEx, UPS, DHL) and tracking numbers.",
      icon: <Package size={20} />
    },
    {
      step: "04",
      title: "Live Tracking",
      desc: "Customers receive a branded tracking page to watch their delivery arriving.",
      icon: <Truck size={20} />
    }
  ];

  const faqs = [
    {
      q: "Does this integrate with Shopify and WooCommerce?",
      a: "Yes. We have native, two-way integrations with Shopify, WooCommerce, Magento, and BigCommerce. Orders download automatically, and tracking numbers upload back to the store."
    },
    {
      q: "Can I use my own hardware scanners?",
      a: "Absolutely. Our system supports standard Zebra/Honeywell barcode scanners, but we also provide a mobile app that works on any iOS/Android device to save hardware costs."
    },
    {
      q: "Does it handle expiry dates or serial numbers?",
      a: "Yes. We support FIFO (First-In-First-Out) logic for perishable goods and full serial number tracking for electronics, ensuring complete traceability."
    },
    {
      q: "Is it cloud-based or on-premise?",
      a: "Our standard deployment is a secure, cloud-native solution (AWS/Azure) for accessibility anywhere. For enterprise clients, we can discuss on-premise deployment."
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

      {/* --- HERO: The Logistics Hub --- */}
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
                <Box size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  Supply Chain OS
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Stop Losing Stock. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DA3DB] to-white">
                  Start Tracking Revenue.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                From the moment an order is placed to the second it arrives at the doorstep. Complete visibility over your inventory, shipments, and returns.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Book a Demo
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  Explore Features
                </a>
              </div>
            </div>

            {/* Right Visual: Warehouse Dashboard */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-lg h-[450px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-full blur-[60px]" />

              {/* Dashboard Panel */}
              <div className="relative w-full bg-[#1C1F26] rounded-2xl shadow-2xl border border-white/10 p-6 overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <div className="flex gap-2 items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-gray-400 font-mono">inventory_v2.exe</span>
                  </div>
                  <div className="text-emerald-400 text-xs font-bold animate-pulse">● LIVE Syncing</div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <div className="text-xs text-gray-400 mb-1">Total Orders</div>
                    <div className="text-xl font-bold text-white">1,248</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <div className="text-xs text-gray-400 mb-1">Pending Ship</div>
                    <div className="text-xl font-bold text-orange-400">42</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                    <div className="text-xs text-gray-400 mb-1">Low Stock</div>
                    <div className="text-xl font-bold text-red-400">8</div>
                  </div>
                </div>

                {/* Map / Tracking Visual */}
                <div className="relative h-48 bg-[#2D3342] rounded-xl border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#4B5563 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  {/* Moving Dot */}
                  <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#2DA3DB] rounded-full shadow-[0_0_15px_rgba(45,163,219,0.8)] animate-ping" />
                  <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#2DA3DB] rounded-full" />
                  {/* Path Line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path d="M100 70 Q 200 120 350 90" stroke="#2DA3DB" strokeWidth="2" fill="none" strokeDasharray="4 4" opacity="0.5" />
                  </svg>
                  {/* Tooltip */}
                  <div className="absolute top-[25%] left-[28%] bg-white text-[#1C1F26] text-[10px] font-bold px-2 py-1 rounded shadow-lg">
                    Order #8821 • In Transit
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* --- Pain Points Grid (The Cost of Chaos) --- */}
      <section className="relative z-20 -mt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-[#1A3A6F]/5 border border-[#D9E4F2] p-8 lg:p-12">
            <div className="text-center mb-10">
              <h3 className="text-xl font-bold text-[#1C1F26]">Why You Can't Afford "Manual" Anymore</h3>
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
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Warehouse Intelligence</h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">Replace spreadsheets and guesswork with a system that thinks for you.</p>
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

      {/* --- Industries We Serve --- */}
      <section className="py-24 bg-white border-y border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#2DA3DB] font-bold text-xs uppercase tracking-widest mb-2 block">Sectors</span>
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Who Runs on Vernora?</h2>
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
              Why Custom vs. Legacy ERP?
            </h2>
            <p className="text-[#D9E4F2]/80 mt-4 max-w-2xl mx-auto">
              Traditional ERPs like SAP or Oracle are overkill for growing brands. We build lean, fast systems that fit your workflow.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-3 bg-[#F0F7FF] py-4 px-6 border-b border-[#D9E4F2]">
                  <div className="col-span-1 font-bold text-[#1C1F26]">Feature</div>
                  <div className="col-span-1 font-bold text-[#1A3A6F] text-center">Vernora System</div>
                  <div className="col-span-1 font-bold text-gray-400 text-center">Legacy ERP</div>
                </div>
                {comparisonData.map((row, i) => (
                  <div key={i} className="grid grid-cols-3 py-4 px-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 items-center">
                    <div className="col-span-1 font-medium text-[#1C1F26] text-sm">{row.feature}</div>
                    <div className="col-span-1 text-center font-bold text-[#1A3A6F] text-sm bg-[#2DA3DB]/10 rounded py-1 flex items-center justify-center gap-2">
                      <Check size={14} className="text-[#2DA3DB]" /> {row.vernora}
                    </div>
                    <div className="col-span-1 text-center text-gray-500 text-sm py-1 flex items-center justify-center gap-2">
                      {row.erp.includes("Expensive") || row.erp.includes("Rigid") || row.erp.includes("Clunky") ? <X size={14} className="text-red-400" /> : <Check size={14} className="text-gray-400" />}
                      {row.erp}
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
              <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">Operational Flow</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                From "Click" to "Delivered"
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                A streamlined path for every SKU. Eliminate bottlenecks in your fulfillment process.
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

            {/* Right Visual: Package Tracking UI */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-[#2DA3DB]/10 rounded-full blur-3xl" />
              <div className="relative bg-white rounded-2xl shadow-xl border border-[#D9E4F2] p-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <div className="text-xs text-[#6E7787] uppercase font-bold">Tracking ID</div>
                    <div className="text-xl font-mono font-bold text-[#1C1F26]">VN-8842-XJ</div>
                  </div>
                  <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                    In Transit
                  </div>
                </div>

                {/* Visual Map Path */}
                <div className="relative h-64 bg-[#F3F4F6] rounded-xl border border-[#D9E4F2] overflow-hidden">
                  {/* SVG Map Path */}
                  <svg className="absolute inset-0 w-full h-full">
                    <path d="M50 200 Q 150 50 350 80" stroke="#D9E4F2" strokeWidth="4" fill="none" />
                    <path d="M50 200 Q 150 50 260 65" stroke="#2DA3DB" strokeWidth="4" fill="none" strokeDasharray="5 5" className="animate-[dash_2s_linear_infinite]" />
                    <circle cx="50" cy="200" r="6" fill="#1A3A6F" />
                    <circle cx="350" cy="80" r="6" fill="#D9E4F2" />
                  </svg>

                  {/* Moving Truck Icon */}
                  <div className="absolute top-[45px] left-[240px] bg-white p-2 rounded-full shadow-md text-[#2DA3DB]">
                    <Truck size={20} />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6E7787]">Estimated Delivery</span>
                    <span className="font-bold text-[#1C1F26]">Tomorrow, 2:00 PM</span>
                  </div>
                  <div className="w-full bg-[#F3F4F6] rounded-full h-2">
                    <div className="bg-[#2DA3DB] h-2 rounded-full w-[75%]" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Integrations Section --- */}
      <section className="py-24 bg-[#F0F7FF] border-y border-[#D9E4F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26]">
              Connected Ecosystem
            </h2>
            <p className="text-[#6E7787] mt-4 max-w-2xl mx-auto">
              Our system plays nice with the tools you already use. No need to rip and replace.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Shopify', 'WooCommerce', 'Amazon FBA', 'QuickBooks', 'ShipStation', 'FedEx', 'Stripe'].map((tool, i) => (
              <div key={i} className="bg-white border border-[#D9E4F2] px-6 py-3 rounded-full text-[#1C1F26] font-bold text-sm hover:border-[#2DA3DB] hover:text-[#2DA3DB] hover:shadow-md transition-all cursor-default">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- New Section: Tech Stack --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[#6E7787] font-semibold uppercase tracking-widest text-xs mb-10">Built on Modern Infrastructure</p>
          <div className="flex justify-center gap-8 md:gap-16 flex-wrap opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {['React.js', 'Node.js', 'PostgreSQL', 'AWS Lambda', 'Redis', 'Docker'].map((tech, i) => (
              <span key={i} className="text-xl md:text-2xl font-bold text-[#1C1F26] hover:text-[#2DA3DB] transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#1C1F26] text-center mb-12">
            Logistics FAQs
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
            Ready to Streamline Your Operations?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Get a custom inventory solution tailored to your warehouse size and workflow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 transition-all cursor-pointer"
            >
              Request Proposal
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

export default Inventory_Order_Tracking_System;
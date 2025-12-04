import React, { useEffect, useState } from 'react';
import {
  ShoppingBag,
  CreditCard,
  Truck,
  BarChart3,
  Store,
  ShieldCheck,
  Rocket,
  ArrowRight,
  Check,
  X,
  Zap,
  Globe,
  Package,
  Layers,
  Code,
  Smartphone,
  Mail,
  RefreshCcw,
  Search,
  Users
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const E_Commerce_Store_Setup = () => {
  const navigate = useNavigate();
  const [activePlatform, setActivePlatform] = useState('shopify');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- Data ---
  const features = [
    {
      title: "Conversion-First UX",
      description: "We design product pages and checkout flows specifically optimized to reduce cart abandonment. Every pixel is placed to guide the user towards the 'Buy Now' button.",
      icon: <ShoppingBag className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "Global Payment Gateways",
      description: "Accept payments from anywhere. We integrate Stripe, PayPal, Razorpay, and localized wallets, ensuring secure, seamless transactions for your customers.",
      icon: <CreditCard className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Automated Inventory",
      description: "Stop worrying about stock levels. We set up automated inventory tracking that syncs across channels (Web, IG, FB), alerting you when supplies run low.",
      icon: <Truck className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    },
    {
      title: "Real-Time Analytics",
      description: "Know exactly what's selling. Our dashboard integrations give you clear insights into revenue, visitor demographics, and top-performing products.",
      icon: <BarChart3 className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    }
  ];

  const comparisonData = [
    { feature: "Transaction Fees", custom: "0% (Gateway fees only)", shopify: "Up to 2% + Gateway fees" },
    { feature: "Design Freedom", custom: "Unlimited Customization", shopify: "Restricted by Themes" },
    { feature: "Scalability", custom: "Enterprise Grade", shopify: "Gets Expensive Fast" },
    { feature: "SEO Control", custom: "Full Technical Access", shopify: "Limited URL Structure" },
    { feature: "Product Limits", custom: "Unlimited", shopify: "Tier Based" },
    { feature: "Monthly Cost", custom: "Hosting Only (Low)", shopify: "$29 - $299/mo" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Store Strategy",
      desc: "We analyze your product catalog and target audience to choose the right platform (Shopify, WooCommerce, or Custom Next.js)."
    },
    {
      step: "02",
      title: "Design & Branding",
      desc: "We craft a stunning storefront that reflects your brand. High-quality imagery and clean typography build immediate trust."
    },
    {
      step: "03",
      title: "Product Migration",
      desc: "We handle the tedious part—uploading your products, setting up variants (size/color), and organizing categories."
    },
    {
      step: "04",
      title: "Payment & Launch",
      desc: "We connect your bank, set up shipping zones, and run test transactions before handing you the keys to your new empire."
    }
  ];

  const faqs = [
    {
      q: "Should I use Shopify or a Custom Solution?",
      a: "It depends. Shopify is great for getting started quickly with less maintenance. A Custom Solution (Next.js/WooCommerce) is better if you want zero transaction fees, unique features, or have a very large inventory."
    },
    {
      q: "Can you migrate my store from another platform?",
      a: "Yes. We specialize in migrating data from platforms like Wix, Squarespace, or old WordPress sites to modern e-commerce stacks without losing your SEO rankings."
    },
    {
      q: "Do you help with product photography?",
      a: "While we focus on development, we have a network of partners for product photography and copywriting. We can also guide you on how to format images for the web."
    }
  ];

  const growthStack = [
    { icon: <Mail className="text-white" />, title: "Email Marketing", desc: "Klaviyo / Mailchimp setup for abandoned cart flows." },
    { icon: <Search className="text-white" />, title: "SEO Optimization", desc: "Schema markup for rich product snippets on Google." },
    { icon: <RefreshCcw className="text-white" />, title: "Subscriptions", desc: "Recurring billing setup for box services or memberships." },
    { icon: <Users className="text-white" />, title: "Loyalty Programs", desc: "Points and referral systems to increase LTV." },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-[#1C1F26]">

      {/* --- distinctive HERO: Dashboard Vibe --- */}
      <section className="relative pt-32 pb-32 lg:pt-48 lg:pb-64 overflow-hidden bg-[#1A3A6F]">
        {/* Abstract "Receipt" Pattern Background */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2DA3DB] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-8 backdrop-blur-md border border-white/10">
            <ShoppingBag size={14} className="text-[#2DA3DB]" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              Retail & Dropshipping Solutions
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
            Build Your <span className="text-[#2DA3DB]">Digital Empire</span>
          </h1>

          <p className="text-lg md:text-xl text-[#D9E4F2]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            From your first sale to your millionth. We engineer high-converting online stores using the world's most powerful commerce engines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#platform-choice" className="btn-primary bg-[#2DA3DB] hover:bg-white hover:text-[#1A3A6F] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-[#2DA3DB]/20 flex items-center gap-2">
              Start Selling <ArrowRight size={18} />
            </a>
          </div>

          {/* Floating Dashboard Visual (CSS Only) */}
          <div className="relative w-full max-w-4xl -mb-48 lg:-mb-64 px-2 sm:px-0">
            <div className="relative z-10 bg-white rounded-t-3xl shadow-2xl border border-white/20 overflow-hidden">
              {/* Dashboard Header */}
              <div className="h-12 bg-[#F0F7FF] border-b border-[#D9E4F2] flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="ml-4 h-6 w-32 sm:w-64 bg-white rounded-md border border-[#D9E4F2] opacity-50" />
              </div>
              {/* Dashboard Content */}
              <div className="p-4 sm:p-6 grid grid-cols-3 gap-4 sm:gap-6 h-[300px] lg:h-[400px]">
                {/* Stat Cards */}
                <div className="col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-[#FAFAFA] rounded-xl p-3 sm:p-4 border border-[#D9E4F2]">
                      <div className="h-2 sm:h-3 w-8 sm:w-12 bg-[#1A3A6F]/20 rounded mb-2" />
                      <div className="h-4 sm:h-6 w-16 sm:w-20 bg-[#1A3A6F] rounded" />
                    </div>
                  ))}
                </div>
                {/* Main Graph Area */}
                <div className="col-span-3 sm:col-span-2 bg-[#FAFAFA] rounded-xl border border-[#D9E4F2] relative overflow-hidden flex items-end px-4 pb-4 gap-2">
                  {[40, 60, 45, 70, 50, 80, 65, 90].map((h, i) => (
                    <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#2DA3DB] rounded-t-sm opacity-80" />
                  ))}
                </div>
                {/* Side Panel (Hidden on very small mobile) */}
                <div className="hidden sm:block col-span-1 bg-[#FAFAFA] rounded-xl border border-[#D9E4F2] p-4 space-y-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex gap-2 items-center">
                      <div className="w-8 h-8 rounded bg-[#D9E4F2]" />
                      <div className="flex-1 h-3 bg-[#D9E4F2] rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Glow Effect behind dashboard */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[90%] h-full bg-[#2DA3DB] blur-[80px] opacity-40 -z-10" />
          </div>
        </div>
      </section>

      {/* --- THE FORK: Platform Selection --- */}
      <section id="platform-choice" className="pt-64 pb-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Choose Your Engine</h2>
            <p className="text-[#6E7787] mt-4">We specialize in two distinct paths depending on your scale and needs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Shopify Card */}
            <div
              className={`relative overflow-hidden rounded-3xl p-8 border-2 transition-all cursor-pointer ${activePlatform === 'shopify' ? 'border-[#96bf48] bg-white shadow-xl' : 'border-transparent bg-white hover:border-[#96bf48]/30'}`}
              onClick={() => setActivePlatform('shopify')}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-[#96bf48]/10 rounded-xl flex items-center justify-center text-[#96bf48]">
                  <ShoppingBag size={24} />
                </div>
                {activePlatform === 'shopify' && <CheckCircle2 size={24} className="text-[#96bf48]" />}
              </div>
              <h3 className="text-2xl font-bold text-[#1C1F26] mb-2">Shopify / SaaS</h3>
              <p className="text-[#6E7787] mb-6 text-sm">Best for rapid launch, ease of use, and standard e-commerce features.</p>
              <ul className="space-y-3">
                {['Launch in 2-3 weeks', 'Easy Admin Dashboard', 'Thousands of Apps', 'Hosting Included'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-[#1C1F26]">
                    <Check size={16} className="text-[#96bf48]" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Custom Card */}
            <div
              className={`relative overflow-hidden rounded-3xl p-8 border-2 transition-all cursor-pointer ${activePlatform === 'custom' ? 'border-[#1A3A6F] bg-white shadow-xl scale-[1.02]' : 'border-transparent bg-white hover:border-[#1A3A6F]/30'}`}
              onClick={() => setActivePlatform('custom')}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-[#1A3A6F]/10 rounded-xl flex items-center justify-center text-[#1A3A6F]">
                  <Code size={24} />
                </div>
                {activePlatform === 'custom' && <CheckCircle2 size={24} className="text-[#1A3A6F]" />}
              </div>
              <h3 className="text-2xl font-bold text-[#1C1F26] mb-2">Custom Headless (Next.js)</h3>
              <p className="text-[#6E7787] mb-6 text-sm">Best for high-volume brands, unique UX, and avoiding transaction fees.</p>
              <ul className="space-y-3">
                {['Zero Transaction Fees', 'Unlimited Customization', 'Blazing Fast Speed', 'Full Code Ownership'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-[#1C1F26]">
                    <Check size={16} className="text-[#1A3A6F]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- ZIG-ZAG Features Section --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">

          {/* Feature 1: Payments */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-[#2DA3DB]/10 rounded-full blur-3xl transform -translate-x-10" />
              <div className="relative bg-[#FAFAFA] rounded-3xl border border-[#D9E4F2] p-6 sm:p-8 shadow-lg">
                {/* Visual Representation of Cards */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#D9E4F2] shadow-sm">
                    <div className="w-12 h-8 bg-[#1A3A6F] rounded shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="h-2 w-24 bg-[#D9E4F2] rounded mb-1" />
                      <div className="h-2 w-16 bg-[#D9E4F2]/50 rounded" />
                    </div>
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#D9E4F2] shadow-sm opacity-60">
                    <div className="w-12 h-8 bg-[#00457C] rounded shrink-0" /> {/* PayPal Blue */}
                    <div className="flex-1 min-w-0">
                      <div className="h-2 w-24 bg-[#D9E4F2] rounded mb-1" />
                      <div className="h-2 w-16 bg-[#D9E4F2]/50 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-4">
                <CreditCard size={16} /> Global Payments
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                Accept Money from Anywhere
              </h3>
              <p className="text-lg text-[#6E7787] leading-relaxed mb-8">
                Don't lose a sale because of payment friction. We integrate Stripe, PayPal, Razorpay, and localized wallets (Apple Pay, Google Pay) directly into your checkout flow.
              </p>
              <ul className="space-y-3">
                {['Multi-currency support', 'Fraud protection built-in', 'Instant payouts setup'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1C1F26] font-medium">
                    <div className="w-6 h-6 rounded-full bg-[#2DA3DB]/10 flex items-center justify-center text-[#2DA3DB] shrink-0"><Check size={14} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 2: Inventory (Reversed) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-16">
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-[#1A3A6F]/10 rounded-full blur-3xl transform translate-x-10" />
              <div className="relative bg-[#FAFAFA] rounded-3xl border border-[#D9E4F2] p-6 sm:p-8 shadow-lg">
                {/* Visual Representation of Inventory */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="bg-white p-3 rounded-xl border border-[#D9E4F2] flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-[#F0F7FF] rounded-lg mb-3 shrink-0" />
                      <div className="h-2 w-16 bg-[#D9E4F2] rounded mb-2" />
                      {/* Responsive Badge */}
                      <div className="bg-emerald-100 text-emerald-700 rounded-full px-3 py-1 text-[10px] font-bold whitespace-nowrap">
                        In Stock
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 text-[#1A3A6F] font-bold text-sm uppercase tracking-widest mb-4">
                <Package size={16} /> Automated Ops
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                Inventory That Manages Itself
              </h3>
              <p className="text-lg text-[#6E7787] leading-relaxed mb-8">
                Stop manually updating spreadsheets. Our systems sync your stock levels across your website, Instagram Shop, and Amazon in real-time.
              </p>
              <ul className="space-y-3">
                {['Low stock alerts', 'Auto-hide out of stock items', 'Bulk product upload'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#1C1F26] font-medium">
                    <div className="w-6 h-6 rounded-full bg-[#1A3A6F]/10 flex items-center justify-center text-[#1A3A6F] shrink-0"><Check size={14} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* --- NEW SECTION: The Growth Stack --- */}
      <section className="py-24 bg-[#1A3A6F] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#2DA3DB] rounded-full blur-[120px] opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">The Growth Stack</h2>
            <p className="text-[#D9E4F2]/80 mt-4 max-w-2xl mx-auto">
              We don't just build a store; we build a sales machine. Every setup includes these essential growth modules.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {growthStack.map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-[#2DA3DB] rounded-xl flex items-center justify-center mb-4 text-white shadow-lg shadow-[#2DA3DB]/30">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#D9E4F2]/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Mobile Dominance --- */}
      <section className="py-24 bg-[#FAFAFA] border-t border-[#D9E4F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">Mobile First</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                79% of Users Buy on Mobile. <br /> Is Your Store Ready?
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                Most themes break on mobile. Ours fly. We implement thumb-friendly navigation, sticky "Add to Cart" buttons, and one-tap checkout to capture impulse buys.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-[#1A3A6F]">300%</span>
                  <span className="text-xs text-[#6E7787] uppercase tracking-wider">Faster Load</span>
                </div>
                <div className="w-px h-12 bg-[#D9E4F2]" />
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-black text-[#1A3A6F]">40%</span>
                  <span className="text-xs text-[#6E7787] uppercase tracking-wider">Higher Conv.</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-[280px] h-[580px] bg-[#1C1F26] rounded-[3rem] border-8 border-[#1C1F26] shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-[#1C1F26] rounded-b-2xl z-20" />
                <div className="h-full w-full bg-white flex flex-col">
                  {/* Fake Mobile Header */}
                  <div className="h-16 bg-white border-b border-gray-100 flex items-end pb-3 px-4 justify-between">
                    <div className="w-6 h-6 rounded bg-gray-200" />
                    <div className="w-20 h-4 rounded bg-gray-200" />
                    <div className="w-6 h-6 rounded bg-[#2DA3DB]" />
                  </div>
                  {/* Fake Mobile Content */}
                  <div className="p-4 space-y-4 flex-1">
                    <div className="w-full h-48 bg-gray-100 rounded-xl" />
                    <div className="w-3/4 h-4 bg-gray-200 rounded" />
                    <div className="w-1/2 h-4 bg-gray-200 rounded" />
                    <div className="w-full h-12 bg-[#1A3A6F] rounded-lg mt-auto shadow-lg shadow-[#1A3A6F]/20 flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:bg-[#2DA3DB] ">
                      Add to Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Integrations Marquee --- */}
      <section className="py-16 bg-white border-y border-[#D9E4F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-10">
          <p className="text-[#6E7787] font-semibold uppercase tracking-widest text-sm">Powering your store with best-in-class tools</p>
        </div>
        <div className="flex justify-center gap-8 sm:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap px-4">
          <span className="text-xl sm:text-2xl font-bold text-[#1C1F26]">Shopify</span>
          <span className="text-xl sm:text-2xl font-bold text-[#1C1F26]">Stripe</span>
          <span className="text-xl sm:text-2xl font-bold text-[#1C1F26]">PayPal</span>
          <span className="text-xl sm:text-2xl font-bold text-[#1C1F26]">WooCommerce</span>
          <span className="text-xl sm:text-2xl font-bold text-[#1C1F26]">Razorpay</span>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-24 bg-[#1C1F26] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[#1A3A6F] opacity-20"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Stop Guessing, Start Selling.
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Whether you need a quick Shopify launch or a custom enterprise build, we have the team to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="btn-primary bg-[#2DA3DB] hover:bg-white hover:text-[#1A3A6F] text-white px-8 py-4 rounded-full font-bold shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Book Strategy Call <Rocket size={18} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

// Helper for check icon
function CheckCircle2({ size = 24, className }) {
  return (
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
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default E_Commerce_Store_Setup;
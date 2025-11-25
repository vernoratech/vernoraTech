import React from 'react';
import {
  Leaf,
  Wrench,
  BookOpen,
  ChefHat,
  Truck,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  CheckCircle2,
  Play,
  Home,
  Sparkles
} from 'lucide-react';

import ScreenshotPlaceholder from './ScreenshotPlaceholder'

const ClientShowcase = (props) => {
  const clients = [
    {
      name: 'UrbanNest Interiors',
      industry: 'Interior Design Studio',
      icon: <Home className="h-5 w-5" />,
      color: 'bg-slate-100 text-slate-700',
      testimonial:
        'The new portfolio site finally lets us show our projects properly. We’ve had more serious enquiries in the last month than the previous quarter.',
      representative: 'Creative Director'
    },
    {
      name: 'QuickSend Couriers',
      industry: 'Local Delivery Service',
      icon: <Truck className="h-5 w-5" />,
      color: 'bg-indigo-100 text-indigo-700',
      testimonial:
        'Customers can now request pickups online instead of calling all day. It saves us time and helps us handle more deliveries with the same team.',
      representative: 'Operations Manager'
    },
    {
      name: 'GlowCare Skincare',
      industry: 'D2C Beauty Brand',
      icon: <Sparkles className="h-5 w-5" />,
      color: 'bg-pink-100 text-pink-700',
      testimonial:
        'Our small e-commerce site works perfectly for new launches. We didn’t want something heavy — this gives us exactly what we need to sell smoothly.',
      representative: 'Brand Owner'
    },
    {
      name: 'SkillForge Academy',
      industry: 'Online Courses',
      icon: <BookOpen className="h-5 w-5" />,
      color: 'bg-blue-100 text-blue-700',
      testimonial:
        'Parents can browse classes and book demo sessions without messaging us repeatedly. It makes us look like a much bigger team.',
      representative: 'Founder'
    },
    {
      name: 'FreshCrate Organics',
      industry: 'Farm-to-Home Produce',
      icon: <Leaf className="h-5 w-5" />,
      color: 'bg-green-100 text-green-700',
      testimonial:
        'Weekly orders increased because customers can pre-book their vegetable baskets online. It’s simple and works every time.',
      representative: 'Farm Partner'
    }
  ];


  const industries = ['Technology', 'Healthcare', 'Education', 'Finance', 'Retail', 'Energy', 'Manufacturing', 'Real Estate'];

  const metrics = [
    {
      value: '95%',
      label: 'Client retention',
      description: 'Partners renew with us because we deliver measured outcomes.',
      icon: <Users className="h-5 w-5 text-[#2DA3DB]" />
    },
    {
      value: '4.9/5',
      label: 'Avg project rating',
      description: 'Consistently high satisfaction across design and delivery.',
      icon: <Star className="h-5 w-5 text-[#2DA3DB]" />
    },
    {
      value: '200%',
      label: 'Avg ROI uplift',
      description: 'Digital initiatives compound growth through optimization.',
      icon: <TrendingUp className="h-5 w-5 text-[#2DA3DB]" />
    }
  ];

  const handleStartProject = () => {
    if (props.onStartProject) {
      props.onStartProject();
      return;
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden py-24 bg-[#FAFAFA]">
      {/* Background Ambience */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#D9E4F2]/30 via-[#FAFAFA] to-[#FAFAFA]" aria-hidden="true" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#2DA3DB]/5 blur-3xl pointer-events-none" />

      <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">

          {/* Left Column: Context & CTA */}
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#2DA3DB]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1A3A6F]">
                Showcase pipeline
                <span className="h-2 w-2 rounded-full bg-[#2DA3DB] animate-pulse" />
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1C1F26] tracking-tight leading-[1.15]">
                Industry spotlights we’re <span className="text-[#2DA3DB]">preparing to share</span>
              </h2>
              <p className="text-lg text-[#6E7787] leading-relaxed">
                These are the partner stories moving through our review queue right now. Each collaboration highlights the momentum service brands gain when digital foundations align with their goals.
              </p>
            </div>

            {/* Criteria Box */}
            <div className="rounded-2xl border border-[#D9E4F2] bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#1A3A6F] mb-4">What makes it into our showcase?</h3>
              <ul className="space-y-3">
                {[
                  "Documented before/after impact aligned with goals",
                  "Collaborative teams willing to share metrics"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-medium text-[#6E7787]">
                    <CheckCircle2 className="h-5 w-5 text-[#2DA3DB] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dark CTA Box */}
            <div className="rounded-2xl bg-[#1A3A6F] text-white px-8 py-10 shadow-xl shadow-[#1A3A6F]/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-[#2DA3DB] blur-3xl opacity-20 transition-opacity group-hover:opacity-40" />

              <h3 className="relative z-10 text-xl font-bold tracking-tight text-[#D9E4F2]">Want your brand on the next release?</h3>
              <p className="relative z-10 mt-3 text-[#D9E4F2]/80 text-sm leading-relaxed max-w-md">
                Partner with us now and we’ll include your journey in the upcoming client premiere deck.
              </p>

              <button
                type="button"
                onClick={handleStartProject}
                className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1A3A6F] hover:bg-[#2DA3DB] hover:text-white transition-all duration-300 cursor-pointer shadow-lg"
              >
                Reserve a spot
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB] mb-6">Segments Queued</h3>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-lg border border-[#D9E4F2] bg-white px-3 py-1.5 text-xs font-medium text-[#6E7787] hover:border-[#2DA3DB]/50 hover:text-[#1A3A6F] transition-colors cursor-default"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#D9E4F2] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2DA3DB]/30 hover:shadow-lg hover:shadow-[#1A3A6F]/5"
                >
                  {/* Top Gradient Line */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1A3A6F] via-[#2DA3DB] to-[#FAFAFA]" />

                  <div className="mb-5">
                    <ScreenshotPlaceholder
                      title={`${client.name} preview`}
                      label="In-review snapshot"
                      className="aspect-[16/10]"
                      imageSrc="https://htmlburger.com/blog/wp-content/uploads/2024/03/beauty-website-design-examples.jpg"
                      imageAlt=""
                    />
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${client.color}`}>
                      {client.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#1C1F26] leading-tight">{client.name}</h3>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#2DA3DB] mt-0.5">In production</p>
                    </div>
                  </div>

                  <blockquote className="flex-1 text-sm text-[#6E7787] leading-relaxed mb-4">
                    “{client.testimonial}”
                  </blockquote>

                  <div className="mt-auto flex items-center justify-between border-t border-[#FAFAFA] pt-3">
                    <span className="text-xs font-semibold text-[#1A3A6F]">{client.industry}</span>
                    <span className="text-xs text-[#6E7787]">— {client.representative}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Section */}
        <div className="mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-[#1C1F26] px-8 py-12 sm:px-12 sm:py-16 shadow-2xl shadow-[#1A3A6F]/20">
            {/* Dark Background Effects */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-[#1A3A6F] blur-[100px] opacity-50" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-[#2DA3DB] blur-[100px] opacity-20" />

            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start md:items-center justify-between">

              <div className="max-w-xl">
                <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-white/5 text-[#2DA3DB] border border-white/10 mb-6">
                  Proof in the numbers
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Our Client Success Metrics</h3>
                <p className="text-[#D9E4F2]/70 text-lg leading-relaxed">
                  Performance dashboards keep every engagement accountable — we foreground the metrics that matter to your leadership team.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full md:w-auto">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:-translate-y-1"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A3A6F]/50 border border-[#2DA3DB]/20 text-[#2DA3DB]">
                      {metric.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#D9E4F2]/60 mb-3">{metric.label}</div>
                    <p className="text-xs text-[#D9E4F2]/50 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-[#1C1F26] mb-4">
            Ready to open your own spotlight?
          </h3>
          <p className="text-[#6E7787] mb-8 max-w-xl mx-auto">
            Let’s script your showcase chapter and put your metrics at center stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={handleStartProject}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A3A6F] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-[#1A3A6F]/20 transition-all hover:bg-[#2DA3DB] hover:shadow-[#2DA3DB]/30 hover:-translate-y-0.5 cursor-pointer"
            >
              Start Your Project
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold text-[#1C1F26] border border-[#D9E4F2] shadow-sm transition-all hover:bg-[#FAFAFA] hover:border-[#1A3A6F]/30 cursor-pointer"
            >
              <Play size={16} className="text-[#2DA3DB] fill-[#2DA3DB]" />
              Request Preview Deck
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
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
  Sparkles,
  Layers
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ScreenshotPlaceholder from './ScreenshotPlaceholder'

const ClientShowcase = (props) => {
  const navigate = useNavigate();
  const clients = [
    {
      name: 'UrbanNest Interiors',
      industry: 'Interior Design Studio',
      icon: <Home className="h-5 w-5" />,
      status: 'In review',
      color: 'bg-slate-100 text-slate-700',
      image: 'https://res.cloudinary.com/ddo1qupzg/image/upload/v1764906003/UrbanNest_Interiors_0A_mbexu1.jpg',
      testimonial:
        'The new portfolio site finally lets us show our projects properly. We’ve had more serious enquiries in the last month than the previous quarter.',
      representative: 'Creative Director'
    },
    {
      name: 'QuickSend Couriers', 
      industry: 'Local Delivery Service',
      icon: <Truck className="h-5 w-5" />,
      status: 'In development',
      color: 'bg-indigo-100 text-indigo-700',
      image: 'https://res.cloudinary.com/ddo1qupzg/image/upload/v1764905981/QuickSend_Couriers_0A_envh0g.jpg',
      testimonial:
        'Customers can now request pickups online instead of calling all day. It saves us time and helps us handle more deliveries with the same team.',
      representative: 'Operations Manager'
    },
    {
      name: 'GlowCare Skincare',
      industry: 'D2C Beauty Brand',
      icon: <Sparkles className="h-5 w-5" />,
      status: 'In development',
      color: 'bg-pink-100 text-pink-700',
      image: 'https://res.cloudinary.com/ddo1qupzg/image/upload/v1764905981/GlowCare_Skincare_hmnd27.jpg',
      testimonial:
        'Our small e-commerce site works perfectly for new launches. We didn’t want something heavy — this gives us exactly what we need to sell smoothly.',
      representative: 'Brand Owner'
    },
    {
      name: 'SkillForge Academy',
      industry: 'Online Courses',
      icon: <BookOpen className="h-5 w-5" />,
      status: 'In testing',
      color: 'bg-blue-100 text-blue-700',
      image: 'https://res.cloudinary.com/ddo1qupzg/image/upload/v1764905981/SkillForge_Academy_oqik7i.jpg',
      testimonial:
        'Parents can browse classes and book demo sessions without messaging us repeatedly. It makes us look like a much bigger team.',
      representative: 'Founder'
    },
    // {
    //   name: 'FreshCrate Organics',
    //   industry: 'Farm-to-Home Produce',
    //   icon: <Leaf className="h-5 w-5" />,
    //   color: 'bg-green-100 text-green-700',
    //   testimonial:
    //     'Weekly orders increased because customers can pre-book their vegetable baskets online. It’s simple and works every time.',
    //   representative: 'Farm Partner'
    // }
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
    navigate('/contact');
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

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#D9E4F2] bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#2DA3DB]/10 text-[#2DA3DB]">
                  <Layers size={20} />
                </div>
                <h3 className="text-base font-bold text-[#1C1F26] mb-4">How we collaborate</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-sm text-[#6E7787]">
                    <CheckCircle2 className="h-5 w-5 text-[#2DA3DB] shrink-0" />
                    Weekly milestone reviews with your stakeholders
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#6E7787]">
                    <CheckCircle2 className="h-5 w-5 text-[#2DA3DB] shrink-0" />
                    Shared playbooks for copy, visuals, and capture forms
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#D9E4F2] bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#2DA3DB]/10 text-[#2DA3DB]">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-base font-bold text-[#1C1F26] mb-4">What you can expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-sm text-[#6E7787]">
                    <CheckCircle2 className="h-5 w-5 text-[#2DA3DB] shrink-0" />
                    Transparent build timeline and deliverable tracker
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-[#6E7787]">
                    <CheckCircle2 className="h-5 w-5 text-[#2DA3DB] shrink-0" />
                    Optional add-ons for analytics and nurture flows
                  </li>
                </ul>
              </div>
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
                      imageSrc={client.image}
                      imageAlt=""
                    />
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${client.color}`}>
                      {client.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#1C1F26] leading-tight">{client.name}</h3> 
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#2DA3DB] mt-0.5">{client.status}</p>
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

        {/* Final CTA */}
        <div className="mt-16 text-center">
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
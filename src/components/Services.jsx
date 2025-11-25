import React from 'react';
import { 
  Target, 
  Book, 
  HardHat, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Launch-Ready Landing Pages',
      description: 'We are packaging our highest-performing page sections into a dependable starter kit.',
      icon: <Target className="h-6 w-6 text-white" />,
      status: 'In final review',
      highlights: ['Hero + offer pairing frameworks', 'Trust badges sourced from partner research', 'CTA layouts tuned for service inquiries']
    },
    {
      title: 'CA Practice Foundations',
      description: 'A compliant-first template set crafted with feedback from chartered accountancy mentors.',
      icon: <Book className="h-6 w-6 text-white" />,
      status: 'Partner preview',
      highlights: ['Secure document request flow', 'Services & expertise outline system', 'Credibility highlight banner']
    },
    {
      title: 'Contractor Visibility Suite',
      description: 'Showcase and quote tools engineered for builders preparing their next showcase phase.',
      icon: <HardHat className="h-6 w-6 text-white" />,
      status: 'Pilot installs',
      highlights: ['Project storytelling gallery', 'Guided quote request steps', 'Coverage map with service badges']
    },
    {
      title: 'Professional Booking Funnels',
      description: 'Focused intake experiences designed for advisors, clinics, and legal teams ready to scale.',
      icon: <Briefcase className="h-6 w-6 text-white" />,
      status: 'UX testing live',
      highlights: ['Smart consultation scheduler', 'Service spotlight page trio', 'Follow-up automation handoff']
    }
  ];

  return (
    <section id="services" className="relative overflow-hidden py-24 bg-[#FAFAFA]">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#D9E4F2/20_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#1A3A6F]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          
          {/* Left Column: Context & Process */}
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#2DA3DB]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1A3A6F]">
                Crafting the next launch wave
                <span className="h-2 w-2 rounded-full bg-[#2DA3DB] animate-pulse" />
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1C1F26] tracking-tight leading-[1.15]">
                Partnerships we’re <span className="text-[#2DA3DB]">actively shaping</span>
              </h2>
              <p className="text-lg text-[#6E7787] leading-relaxed">
                Each service stream is an honest snapshot of where we are investing build time right now. Tap into the track that matches your growth plan and co-create the final stretch with us.
              </p>
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

            {/* Dark CTA Box */}
            <div className="relative overflow-hidden rounded-2xl bg-[#1A3A6F] px-8 py-10 shadow-xl shadow-[#1A3A6F]/20 group">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 h-32 w-32 rounded-full bg-[#2DA3DB] blur-3xl opacity-20 transition-opacity group-hover:opacity-40" />
              
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm">
                  <Calendar size={20} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Schedule a discovery walkthrough</h3>
                <p className="mt-3 text-[#D9E4F2]/80 text-sm leading-relaxed max-w-md">
                  We’ll map your immediate goals to the service stream that fits best and outline how to make launch day effortless.
                </p>
                <a 
                  href="#contact" 
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1A3A6F] hover:bg-[#2DA3DB] hover:text-white transition-all duration-300 shadow-lg"
                >
                  Book a call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Service Cards */}
          <div className="grid gap-6 sm:grid-cols-2 content-start">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#D9E4F2] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2DA3DB]/30 hover:shadow-lg hover:shadow-[#1A3A6F]/5"
              >
                {/* Top Gradient Line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1A3A6F] via-[#2DA3DB] to-[#FAFAFA]" />
                
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                     <span className="inline-flex items-center rounded-md bg-[#F0F7FF] px-2 py-1 text-xs font-bold uppercase tracking-wide text-[#1A3A6F] border border-[#D9E4F2]">
                      {service.status}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A3A6F] shadow-md shadow-[#1A3A6F]/10 group-hover:bg-[#2DA3DB] transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#1C1F26] mb-3 group-hover:text-[#1A3A6F] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-[#6E7787] leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 pt-4 border-t border-[#FAFAFA]">
                    {service.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs font-medium text-[#4B5563]"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-[#2DA3DB]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
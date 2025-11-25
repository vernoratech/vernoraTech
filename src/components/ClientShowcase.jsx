// import React from 'react';
// import ScreenshotPlaceholder from './ScreenshotPlaceholder';

// const ClientShowcase = (props) => {
//   const clients = [
//     {
//       name: 'GreenSprout Nursery',
//       industry: 'Local Retail',
//       logo: '🪴',
//       testimonial: 'Our neighborhood plant shop now has an online catalog and booking form—customers love how easy it is.',
//       representative: 'Owner, GreenSprout Nursery'
//     },
//     {
//       name: 'FixIt Fast Repairs',
//       industry: 'Home Services',
//       logo: '🔧',
//       testimonial: 'The new landing page doubled our enquiry calls within two weeks. Perfect for small service teams like ours.',
//       representative: 'Lead Technician, FixIt Fast Repairs'
//     },
//     {
//       name: 'BrightPath Tutoring',
//       industry: 'Education',
//       logo: '📚',
//       testimonial: 'Parents can now schedule demo sessions instantly. The simple layout gives our small tutoring crew big credibility.',
//       representative: 'Founder, BrightPath Tutoring'
//     },
//     {
//       name: 'Tastebuds Home Bakery',
//       industry: 'Food & Beverage',
//       logo: '🧁',
//       testimonial: 'We showcase daily specials and accept pre-orders without any hassle. It feels tailor-made for our kitchen.',
//       representative: 'Head Baker, Tastebuds Home Bakery'
//     },
//     {
//       name: 'ShiftRight Movers',
//       industry: 'Local Logistics',
//       logo: '🚚',
//       testimonial: 'Customers can now request quotes online, which keeps our two-truck crew booked every weekend.',
//       representative: 'Co-owner, ShiftRight Movers'
//     }
//   ];

//   const industries = ['Technology', 'Healthcare', 'Education', 'Finance', 'Retail', 'Energy', 'Manufacturing', 'Real Estate'];

//   const metrics = [
//     {
//       value: '95%',
//       label: 'Client retention rate',
//       description: 'Partners renew with us because we deliver measured outcomes and transparent collaboration.'
//     },
//     {
//       value: '4.9/5',
//       label: 'Average project rating',
//       description: 'Consistently high satisfaction scores across design, engineering, and delivery squads.'
//     },
//     {
//       value: '200%',
//       label: 'Average ROI uplift',
//       description: 'Digital initiatives compound growth through performance optimizations and conversion strategy.'
//     }
//   ];

//   const handleStartProject = () => {
//     if (props.onStartProject) {
//       props.onStartProject();
//       return;
//     }
//     const contactSection = document.querySelector('#contact');
//     if (contactSection && contactSection.scrollIntoView) {
//       contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const handleViewCaseStudies = () => {
//     if (props.onViewCaseStudies) {
//       props.onViewCaseStudies();
//     }
//   };

//   return (
//     <section className="relative overflow-hidden py-20 bg-white">
//       <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-50/80 via-white" aria-hidden="true" />
//       <div className="relative container mx-auto px-4 lg:px-10">
//         <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
//           <div className="space-y-10">
//             <div className="space-y-4">
//               <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
//                 Showcase pipeline
//                 <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
//               </span>
//               <h2 className="text-3xl sm:text-4xl font-bold text-primary">
//                 Industry spotlights we’re preparing to share
//               </h2>
//               <p className="text-lg text-primary">
//                 These are the partner stories moving through our review queue right now. Each collaboration highlights the momentum service brands gain when digital foundations align with their goals.
//               </p>
//             </div>

//             <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm">
//               <h3 className="text-lg font-semibold text-primary">What makes it into our showcase?</h3>
//               <ul className="mt-4 space-y-3 text-sm text-primary">
//                 <li className="flex items-start gap-2">
//                   <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
//                   Documented before/after impact aligned with business goals
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
//                   Collaborative teams willing to share transparent metrics
//                 </li>
//               </ul>
//             </div>

//             <div className="rounded-2xl bg-primary text-white px-6 py-8 shadow-lg">
//               <h3 className="text-xl font-semibold text-white tracking-wider">Want your brand on the next release?</h3>
//               <p className="mt-3 text-sm text-white/80">
//                 Partner with us now and we’ll include your journey in the upcoming client premiere deck.
//               </p>
//               <button
//                 type="button"
//                 onClick={handleStartProject}
//                 className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white cursor-pointer border-2 border-white rounded-full px-8 py-3"
//               >
//                 Reserve a spot
//                 <span aria-hidden="true">→</span>
//               </button>
//             </div>
//           </div>

//           <div className="space-y-10">
//             <div>
//               <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-primary mb-4">Segments queued</h3>
//               <div className="flex flex-wrap gap-3">
//                 {industries.map((industry, index) => (
//                   <span
//                     key={index}
//                     className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/90 px-4 py-2 text-xs font-semibold text-primary/80"
//                   >
//                     <span className="h-1.5 w-1.5 rounded-full bg-primary" />
//                     {industry}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="grid gap-6 sm:grid-cols-2">
//               {clients.map((client, index) => (
//                 <div
//                   key={index}
//                   className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-[#FAFAFA] p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
//                 >
//                   <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/70 to-indigo-400" aria-hidden="true" />
//                   <div className="relative space-y-4">
//                     <ScreenshotPlaceholder
//                       title={`${client.name} preview`}
//                       label="In-review snapshot"
//                       aspectClass="aspect-[16/10]"
//                       className="bg-white/50"
//                     />
//                     <div className="flex items-center gap-3">
//                       <div className="text-4xl">{client.logo}</div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-primary">{client.name}</h3>
//                         <p className="text-xs uppercase tracking-[0.25em] text-primary/80">In production</p>
//                       </div>
//                     </div>
//                     <blockquote className="text-sm text-primary">
//                       “{client.testimonial}”
//                     </blockquote>
//                     <div className="text-xs font-semibold text-primary">{client.industry} cohort</div>
//                     <p className="text-xs text-primary">— {client.representative}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mt-16">
//           {/* Metrics Section */}
//           <div className="relative overflow-hidden rounded-3xl bg-[#1A3A6F] text-[#D9E4F2] px-8 py-12 sm:px-10 sm:py-14">
//             <div className="absolute inset-0  opacity-80" />
//             <div className="absolute -top-24 -right-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
//             <div className="absolute -bottom-28 -left-10 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

//             <div className="relative text-center mb-10">
//               <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.3em] bg-white/10 text-blue-100 border border-white/10">
//                 Proof in the numbers
//               </span>
//               <h3 className="mt-6 text-3xl sm:text-4xl font-bold text-[#D9E4F2]">Our Client Success Metrics</h3>
//               <p className="mt-3 text-base text-[#D9E4F2]/80 max-w-2xl mx-auto">
//                 Performance dashboards keep every engagement accountable — we foreground the metrics that matter to your leadership team.
//               </p>
//             </div>

//             <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
//               {metrics.map((metric, index) => (
//                 <div
//                   key={index}
//                   className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition-all duration-300 hover:border-white/30 hover:shadow-[0_25px_60px_-25px_rgba(15,23,42,0.7)]"
//                 >
//                   <div className="text-4xl font-bold text-[#D9E4F2]">{metric.value}</div>
//                   <div className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#D9E4F2]">{metric.label}</div>
//                   <p className="mt-3 text-sm text-[#D9E4F2]/80 leading-relaxed">
//                     {metric.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-16">
//           <h3 className="text-2xl font-bold text-primary mb-4">
//             Ready to open your own spotlight?
//           </h3>
//           <p className="text-primary mb-6 max-w-2xl mx-auto">
//             Let’s script your showcase chapter and put your metrics at center stage.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               type="button"
//               onClick={handleStartProject}
//               className="btn-primary px-8 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer"
//             >
//               Start Your Project
//             </button>
//             <button
//               type="button"
//               onClick={handleViewCaseStudies}
//               className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer"
//             >
//               Request the preview deck
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientShowcase;


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
  Play
} from 'lucide-react';

import ScreenshotPlaceholder from './ScreenshotPlaceholder'

const ClientShowcase = (props) => {
  const clients = [
    {
      name: 'GreenSprout Nursery',
      industry: 'Local Retail',
      icon: <Leaf className="h-5 w-5" />,
      color: 'bg-emerald-100 text-emerald-700',
      testimonial: 'Our neighborhood plant shop now has an online catalog and booking form—customers love how easy it is.',
      representative: 'Owner'
    },
    {
      name: 'FixIt Fast Repairs',
      industry: 'Home Services',
      icon: <Wrench className="h-5 w-5" />,
      color: 'bg-amber-100 text-amber-700',
      testimonial: 'The new landing page doubled our enquiry calls within two weeks. Perfect for small service teams.',
      representative: 'Lead Technician'
    },
    {
      name: 'BrightPath Tutoring',
      industry: 'Education',
      icon: <BookOpen className="h-5 w-5" />,
      color: 'bg-blue-100 text-blue-700',
      testimonial: 'Parents can now schedule demo sessions instantly. The simple layout gives our small tutoring crew big credibility.',
      representative: 'Founder'
    },
    {
      name: 'Tastebuds Bakery',
      industry: 'Food & Beverage',
      icon: <ChefHat className="h-5 w-5" />,
      color: 'bg-rose-100 text-rose-700',
      testimonial: 'We showcase daily specials and accept pre-orders without any hassle. It feels tailor-made for our kitchen.',
      representative: 'Head Baker'
    },
    {
      name: 'ShiftRight Movers',
      industry: 'Local Logistics',
      icon: <Truck className="h-5 w-5" />,
      color: 'bg-indigo-100 text-indigo-700',
      testimonial: 'Customers can now request quotes online, which keeps our two-truck crew booked every weekend.',
      representative: 'Co-owner'
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
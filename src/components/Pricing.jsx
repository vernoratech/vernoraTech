// import React, { useEffect } from 'react';

// const Pricing = (props) => {

//   const plans = [
//     {
//       name: 'Starter',
//       price: '₹14,999',
//       discountPrice: '₹9,999',
//       period: 'one-time',
//       freeFirstTime: true,
//       bestFor: 'Best for: Individuals / early startups who need quick web presence',
//       highlight: false,
//       terms: [
//         {
//           title: 'Scope & Deliverables',
//           items: [
//             'Includes 1-2 page landing website with contact form integration.',
//             'Basic SEO setup (meta title, description, and basic keywords).',
//             'Free SSL setup guidance and hosting assistance (no hosting included).'
//           ]
//         },
//         {
//           title: 'Revisions & Support',
//           items: [
//             'Up to 2 design/content revisions included.',
//             'Minor text/image updates within 7 days of delivery.'
//           ]
//         },
//         {
//           title: 'Timelines & Payment',
//           items: [
//             'Typical delivery: 5-7 business days after content is received.',
//             'Post first-time Free usage, standard pricing applies for new work.'
//           ]
//         }
//       ],
//       features: [
//         '1-2 Page Landing Website',
//         'Mobile Responsive Design',
//         'Basic SEO Setup',
//         'Contact Form Integration',
//         'Free SSL Setup & Hosting Guidance',
//         '2 Revisions'
//       ]
//     },
//     {
//       name: 'Professional',
//       price: '₹34,999',
//       discountPrice: '₹24,999',
//       period: 'one-time',
//       bestFor: 'Best for: Small businesses who want performance & conversions',
//       highlight: true,
//       terms: [
//         {
//           title: 'Scope & Deliverables',
//           items: [
//             'Up to 5 pages including Home, About, Services, Contact, and one custom page.',
//             'On-page SEO for titles, meta descriptions, and basic keyword mapping.',
//             'Performance & speed optimization (Core Web Vitals best practices).'
//           ]
//         },
//         {
//           title: 'Integrations & Analytics',
//           items: [
//             'Google Analytics and Search Console setup.',
//             'WhatsApp or lead form integration for inquiries.'
//           ]
//         },
//         {
//           title: 'Revisions & Support',
//           items: [
//             'Up to 4 revisions included.',
//             '3 months free support for bug fixes and minor tweaks.'
//           ]
//         },
//         {
//           title: 'Timelines & Payment',
//           items: [
//             'Typical delivery: 10-14 business days after content is received.',
//             'Content, branding assets, and domain/DNS access must be provided on time.'
//           ]
//         }
//       ],
//       features: [
//         'Upto 5 Pages Website',
//         'Conversion-Focused Copy Guidance',
//         'Performance & Speed Optimization',
//         'On-page SEO (Title, Meta, Keywords)',
//         'Google Analytics + Search Console Setup',
//         'WhatsApp/Lead Form Integration',
//         '3 Months Free Support',
//         '4 Revisions'
//       ]
//     },
//     {
//       name: 'Business',
//       price: '₹59,999',
//       discountPrice: '₹44,999',
//       period: 'one-time',
//       bestFor: 'Best for: Companies serious about scaling digitally',
//       highlight: false,
//       terms: [
//         {
//           title: 'Scope & Deliverables',
//           items: [
//             'Up to 10 pages including dynamic sections (e.g., blog or case studies).',
//             'Blog setup for content marketing with category and tag basics.',
//             'Lead capture and appointment booking integrations as needed.'
//           ]
//         },
//         {
//           title: 'SEO & Performance',
//           items: [
//             'Advanced SEO including schema markup and indexing fixes where applicable.',
//             'Speed optimization and best practices for scalability.'
//           ]
//         },
//         {
//           title: 'Maintenance & Support',
//           items: [
//             '6 months free maintenance for bug fixes and minor updates.',
//             'Priority support with faster response times.'
//           ]
//         },
//         {
//           title: 'Assumptions & Exclusions',
//           items: [
//             'Content writing, stock images, paid plugins, and third-party fees are excluded unless specified.',
//             'CMS or custom backend development is not included unless quoted separately.'
//           ]
//         }
//       ],
//       features: [
//         'Up to 10 Pages (Dynamic/Blog/Case Studies)',
//         'Lead Capture & Appointment Booking Integration',
//         'Advanced SEO (Schema, Speed, Indexing Fixes)',
//         'Blog Setup for Content Marketing',
//         'Priority Support (Fast Response)',
//         '6 Months Free Maintenance',
//         '5 Revisions',
//         'Free SSL + Basic Security Setup'
//       ]
//     }
//   ];

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <section id="pricing" className="bg-gray-50 section-padding reveal-up mt-10">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16 reveal-up">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Simple, one-time pricing tailored for service businesses. No hidden fees.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {plans.map((plan, idx) => (
//             <div
//               key={idx}
//               className={`rounded-lg p-8 bg-white border ${plan.highlight ? 'border-primary shadow-lg' : 'border-gray-200'
//                 } reveal-up`}
//               style={{ transitionDelay: `${80 + idx * 80}ms` }}
//             >
//               <div className="mb-4 text-sm font-semibold text-primary">{plan.highlight ? 'Most Popular' : ' '}</div>
//               <h3 className="text-2xl font-semibold text-gray-900 mb-1">{plan.name}</h3>
//               {plan.bestFor && (
//                 <>
//                   <p className="text-sm text-gray-600">{plan.bestFor}</p>
//                   <p className="text-xs text-red-600 mb-3">Prices shown don’t include applicable tax.</p>
//                 </>
//               )}
//               <div className="flex items-baseline gap-2 mb-6">
//                 {plan.freeFirstTime ? (
//                   <>
//                     <div className="text-xl sm:text-2xl font-semibold text-gray-500 line-through">{plan.price}</div>
//                     <div className="text-3xl sm:text-4xl font-bold text-primary">Free</div>
//                     <div className="text-gray-500 text-sm sm:text-base">(first-time)</div>
//                   </>
//                 ) : plan.discountPrice ? (
//                   <>
//                     <div className="text-xl sm:text-2xl font-semibold text-gray-500 line-through">{plan.price}</div>
//                     <div className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.discountPrice}</div>
//                     <div className="text-gray-500 text-sm sm:text-base">{plan.period}</div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</div>
//                     <div className="text-gray-500 text-sm sm:text-base">{plan.period}</div>
//                   </>
//                 )}
//               </div>
//               <ul className="space-y-3 mb-8">
//                 {plan.features.map((f, i) => (
//                   <li key={i} className="flex items-center text-gray-600">
//                     <span className="text-accent mr-2">✓</span>
//                     {f}
//                   </li>
//                 ))}
//               </ul>
//               <a href="#contact" className={`w-full inline-block text-center mt-2 ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}>
//                 Get Started
//               </a>
//               <p
//                 className="text-xs text-gray-500 hover:text-gray-800 mt-3 cursor-pointer hover:underline"
//                 role="button"
//                 tabIndex={0}
//                 onClick={() => props.onTermsClick && props.onTermsClick(plan)}
//                 onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && props.onTermsClick) props.onTermsClick(plan); }}
//               >
//                 Terms and conditions apply.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;



import React, { useEffect } from 'react';
import { Check, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';

const Pricing = (props) => {
  const plans = [
    {
      name: 'Starter',
      price: '₹14,999',
      discountPrice: '₹9,999',
      period: 'one-time',
      freeFirstTime: true,
      bestFor: 'Best for: Individuals / early startups who need quick web presence',
      highlight: false,
      icon: <Zap className="w-6 h-6 text-[#1A3A6F]" />,
      terms: [
        {
          title: 'Scope & Deliverables',
          items: [
            'Includes 1-2 page landing website with contact form integration.',
            'Basic SEO setup (meta title, description, and basic keywords).',
            'Free SSL setup guidance and hosting assistance (no hosting included).'
          ]
        },
        {
          title: 'Revisions & Support',
          items: [
            'Up to 2 design/content revisions included.',
            'Minor text/image updates within 7 days of delivery.'
          ]
        },
        {
          title: 'Timelines & Payment',
          items: [
            'Typical delivery: 5-7 business days after content is received.',
            'Post first-time Free usage, standard pricing applies for new work.'
          ]
        }
      ],
      features: [
        '1-2 Page Landing Website',
        'Mobile Responsive Design',
        'Basic SEO Setup',
        'Contact Form Integration',
        'Free SSL Setup & Hosting Guidance',
        '2 Revisions'
      ]
    },
    {
      name: 'Professional',
      price: '₹34,999',
      discountPrice: '₹24,999',
      period: 'one-time',
      bestFor: 'Best for: Small businesses who want performance & conversions',
      highlight: true,
      icon: <Sparkles className="w-6 h-6 text-white" />,
      terms: [
        {
          title: 'Scope & Deliverables',
          items: [
            'Up to 5 pages including Home, About, Services, Contact, and one custom page.',
            'On-page SEO for titles, meta descriptions, and basic keyword mapping.',
            'Performance & speed optimization (Core Web Vitals best practices).'
          ]
        },
        {
          title: 'Integrations & Analytics',
          items: [
            'Google Analytics and Search Console setup.',
            'WhatsApp or lead form integration for inquiries.'
          ]
        },
        {
          title: 'Revisions & Support',
          items: [
            'Up to 4 revisions included.',
            '3 months free support for bug fixes and minor tweaks.'
          ]
        },
        {
          title: 'Timelines & Payment',
          items: [
            'Typical delivery: 10-14 business days after content is received.',
            'Content, branding assets, and domain/DNS access must be provided on time.'
          ]
        }
      ],
      features: [
        'Upto 5 Pages Website',
        'Conversion-Focused Copy Guidance',
        'Performance & Speed Optimization',
        'On-page SEO (Title, Meta, Keywords)',
        'Google Analytics + Search Console Setup',
        'WhatsApp/Lead Form Integration',
        '3 Months Free Support',
        '4 Revisions'
      ]
    },
    {
      name: 'Business',
      price: '₹59,999',
      discountPrice: '₹44,999',
      period: 'one-time',
      bestFor: 'Best for: Companies serious about scaling digitally',
      highlight: false,
      icon: <Shield className="w-6 h-6 text-[#1A3A6F]" />,
      terms: [
        {
          title: 'Scope & Deliverables',
          items: [
            'Up to 10 pages including dynamic sections (e.g., blog or case studies).',
            'Blog setup for content marketing with category and tag basics.',
            'Lead capture and appointment booking integrations as needed.'
          ]
        },
        {
          title: 'SEO & Performance',
          items: [
            'Advanced SEO including schema markup and indexing fixes where applicable.',
            'Speed optimization and best practices for scalability.'
          ]
        },
        {
          title: 'Maintenance & Support',
          items: [
            '6 months free maintenance for bug fixes and minor updates.',
            'Priority support with faster response times.'
          ]
        },
        {
          title: 'Assumptions & Exclusions',
          items: [
            'Content writing, stock images, paid plugins, and third-party fees are excluded unless specified.',
            'CMS or custom backend development is not included unless quoted separately.'
          ]
        }
      ],
      features: [
        'Up to 10 Pages (Dynamic/Blog/Case Studies)',
        'Lead Capture & Appointment Booking Integration',
        'Advanced SEO (Schema, Speed, Indexing Fixes)',
        'Blog Setup for Content Marketing',
        'Priority Support (Fast Response)',
        '6 Months Free Maintenance',
        '5 Revisions',
        'Free SSL + Basic Security Setup'
      ]
    }
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="pricing" className="relative py-24 bg-[#FAFAFA] overflow-hidden mt-10">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#D9E4F2/30_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#2DA3DB]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#1A3A6F]/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1A3A6F] border border-[#1A3A6F]/10 mb-6">
            Investment Plans
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1C1F26] tracking-tight mb-6">
            Transparent Pricing, <span className="text-[#2DA3DB]">Measurable Value</span>
          </h2>
          <p className="text-lg text-[#6E7787] leading-relaxed">
            Simple, one-time investment tailored for service businesses. No hidden fees, just clear deliverables.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`group relative flex flex-col rounded-3xl transition-all duration-300 ${plan.highlight
                ? 'bg-white border-2 border-[#2DA3DB] shadow-2xl shadow-[#2DA3DB]/10 scale-100 lg:scale-105 z-10'
                : 'bg-white border border-[#D9E4F2] shadow-sm hover:shadow-xl hover:shadow-[#1A3A6F]/5 hover:-translate-y-1'
                }`}
            >
              {/* Popular Badge */}
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#2DA3DB] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="p-8 flex flex-col h-full">
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-2xl ${plan.highlight ? 'bg-[#1A3A6F]' : 'bg-[#F0F7FF]'}`}>
                    {plan.icon}
                  </div>
                  {plan.highlight && (
                    <span className="text-[10px] font-bold text-[#2DA3DB] bg-[#2DA3DB]/10 px-2 py-1 rounded">
                      RECOMMENDED
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-[#1C1F26] mb-2">{plan.name}</h3>
                <p className="text-sm text-[#6E7787] min-h-[40px] mb-6">{plan.bestFor}</p>

                {/* Price Display */}
                <div className="mb-8 p-4 rounded-2xl bg-[#FAFAFA] border border-[#D9E4F2]">
                  {plan.freeFirstTime ? (
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg text-[#6E7787] line-through decoration-red-400 decoration-2">
                          {plan.price}
                        </span>
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase rounded-md">
                          Limited Offer
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-[#1A3A6F]">Free</span>
                        <span className="text-sm font-medium text-[#6E7787]">/ first-time</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg text-[#6E7787] line-through">
                          {plan.price}
                        </span>
                        {plan.discountPrice && (
                          <span className="px-2 py-0.5 bg-[#2DA3DB]/10 text-[#2DA3DB] text-[10px] font-bold uppercase rounded-md">
                            Save {Math.round((parseInt(plan.price.replace(/[^\d]/g, '')) - parseInt(plan.discountPrice.replace(/[^\d]/g, ''))) / parseInt(plan.price.replace(/[^\d]/g, '')) * 100)}%
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-[#1A3A6F]">
                          {plan.discountPrice || plan.price}
                        </span>
                        <span className="text-sm font-medium text-[#6E7787]">+ GST</span>
                      </div>
                      <span className="text-xs text-[#6E7787] mt-1">One-time payment</span>
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="flex-1 mb-8">
                  <div className="text-xs font-bold text-[#1A3A6F] uppercase tracking-wider mb-4">
                    What's Included
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#4B5563]">
                        <div className={`mt-0.5 p-0.5 rounded-full ${plan.highlight ? 'bg-[#2DA3DB] text-white' : 'bg-[#D9E4F2] text-[#1A3A6F]'}`}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Footer */}
                <div className="mt-auto space-y-4">
                  <a
                    href="#contact"
                    className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-bold transition-all duration-200 ${plan.highlight
                      ? 'bg-[#1A3A6F] text-white hover:bg-[#2DA3DB] shadow-lg shadow-[#1A3A6F]/20'
                      : 'bg-white text-[#1C1F26] border-2 border-[#D9E4F2] hover:border-[#1A3A6F] hover:text-[#1A3A6F]'
                      }`}
                  >
                    Get Started
                    {plan.highlight && <ArrowRight size={16} />}
                  </a>

                  <button
                    type="button"
                    className="text-xs text-gray-500 hover:text-gray-800 mt-3 cursor-pointer hover:underline"
                    onClick={() => props.onTermsClick?.(plan)}
                  >
                    Terms and conditions apply.
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#6E7787] bg-white inline-block px-6 py-3 rounded-full border border-[#D9E4F2] shadow-sm">
            Need a custom solution? <a href="#contact" className="text-[#2DA3DB] font-bold hover:underline">Contact our team</a> for a tailored enterprise quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
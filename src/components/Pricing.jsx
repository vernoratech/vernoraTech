import React from 'react';

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
  ];

  return (
    <section id="pricing" className="bg-gray-50 section-padding reveal-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, one-time pricing tailored for service businesses. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-8 bg-white border ${plan.highlight ? 'border-primary shadow-lg' : 'border-gray-200'
                } reveal-up`}
              style={{ transitionDelay: `${80 + idx * 80}ms` }}
            >
              <div className="mb-4 text-sm font-semibold text-primary">{plan.highlight ? 'Most Popular' : ' '}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-1">{plan.name}</h3>
              {plan.bestFor && (
                <>
                  <p className="text-sm text-gray-600">{plan.bestFor}</p>
                  <p className="text-xs text-red-600 mb-3">Prices shown don’t include applicable tax.</p>
                </>
              )}
              <div className="flex items-baseline gap-2 mb-6">
                {plan.freeFirstTime ? (
                  <>
                    <div className="text-xl sm:text-2xl font-semibold text-gray-500 line-through">{plan.price}</div>
                    <div className="text-3xl sm:text-4xl font-bold text-primary">Free</div>
                    <div className="text-gray-500 text-sm sm:text-base">(first-time)</div>
                  </>
                ) : plan.discountPrice ? (
                  <>
                    <div className="text-xl sm:text-2xl font-semibold text-gray-500 line-through">{plan.price}</div>
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.discountPrice}</div>
                    <div className="text-gray-500 text-sm sm:text-base">{plan.period}</div>
                  </>
                ) : (
                  <>
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</div>
                    <div className="text-gray-500 text-sm sm:text-base">{plan.period}</div>
                  </>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="text-accent mr-2">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`w-full inline-block text-center mt-2 ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}>
                Get Started
              </a>
              <p
                className="text-xs text-gray-500 hover:text-gray-800 mt-3 cursor-pointer hover:underline"
                role="button"
                tabIndex={0}
                onClick={() => props.onTermsClick && props.onTermsClick(plan)}
                onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && props.onTermsClick) props.onTermsClick(plan); }}
              >
                Terms and conditions apply.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;



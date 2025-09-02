import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹14,999',
      period: 'one-time',
      highlight: false,
      features: [
        '1 Page Landing',
        'Responsive Design',
        'Basic SEO',
        'Contact Form',
        '3 Revisions'
      ]
    },
    {
      name: 'Professional',
      price: '₹34,999',
      period: 'one-time',
      highlight: true,
      features: [
        'Up to 5 Pages',
        'Conversion Copy Guidance',
        'Performance Optimization',
        'On-page SEO',
        'Analytics Setup'
      ]
    },
    {
      name: 'Business',
      price: '₹59,999',
      period: 'one-time',
      highlight: false,
      features: [
        'Up to 10 Pages',
        'Blog/Case Studies',
        'Appointment/Leads Integration',
        'Advanced SEO',
        'Priority Support'
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-8 bg-white border ${plan.highlight ? 'border-primary shadow-lg' : 'border-gray-200'
                } reveal-up`}
              style={{ transitionDelay: `${80 + idx * 80}ms` }}
            >
              <div className="mb-4 text-sm font-semibold text-primary">{plan.highlight ? 'Most Popular' : ' '}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-end gap-2 mb-6">
                <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                <div className="text-gray-500">{plan.period}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="text-accent mr-2">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`w-full inline-block text-center ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;



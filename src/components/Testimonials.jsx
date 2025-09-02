import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Anuj Sharma',
      role: 'Partner, Sharma & Associates (CA)',
      quote:
        'VesnoraTech delivered a clean, professional website that boosted our inquiries by 60% within two months.'
    },
    {
      name: 'Priya Mehta',
      role: 'Founder, BuildRight Construction',
      quote:
        'The project gallery and quote forms work flawlessly. We now get leads directly from the website every day.'
    },
    {
      name: 'Adv. R. Kulkarni',
      role: 'Principal, Legal Solutions',
      quote:
        'Great understanding of service businesses. The site looks credible and loads fast. Highly recommended.'
    }
  ];

  return (
    <section id="testimonials" className="bg-white section-padding reveal-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real businesses we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-6 sm:p-7 rounded-lg shadow-sm reveal-up" style={{ transitionDelay: `${80 + i * 80}ms` }}>
              <div className="text-gray-700 italic mb-6">“{t.quote}”</div>
              <div className="font-semibold text-gray-900">{t.name}</div>
              <div className="text-gray-500 text-sm">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;



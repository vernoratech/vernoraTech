import React from 'react';

const ClientShowcase = (props) => {
  const clients = [
    {
      name: 'TechCorp',
      industry: 'Technology',
      logo: '🏢',
      testimonial: 'Outstanding work! They delivered our project on time and exceeded our expectations.',
      representative: 'CEO, TechCorp'
    },
    {
      name: 'HealthFlow',
      industry: 'Healthcare',
      logo: '🏥',
      testimonial: 'Professional team with deep technical expertise. Highly recommended!',
      representative: 'CTO, HealthFlow'
    },
    {
      name: 'EduTech',
      industry: 'Education',
      logo: '🎓',
      testimonial: 'They transformed our vision into a beautiful, functional platform.',
      representative: 'Founder, EduTech'
    },
    {
      name: 'FinServe',
      industry: 'Finance',
      logo: '💳',
      testimonial: 'Exceptional quality and attention to detail. A pleasure to work with.',
      representative: 'Product Manager, FinServe'
    },
    {
      name: 'RetailPlus',
      industry: 'Retail',
      logo: '🛍️',
      testimonial: 'Our e-commerce platform increased sales by 300% in the first quarter.',
      representative: 'Marketing Director, RetailPlus'
    },
    {
      name: 'GreenEnergy',
      industry: 'Energy',
      logo: '⚡',
      testimonial: 'Innovative solutions that perfectly align with our sustainability goals.',
      representative: 'Operations Lead, GreenEnergy'
    }
  ];

  const industries = ['Technology', 'Healthcare', 'Education', 'Finance', 'Retail', 'Energy', 'Manufacturing', 'Real Estate'];

  const metrics = [
    {
      value: '95%',
      label: 'Client retention rate',
      description: 'Partners renew with us because we deliver measured outcomes and transparent collaboration.'
    },
    {
      value: '4.9/5',
      label: 'Average project rating',
      description: 'Consistently high satisfaction scores across design, engineering, and delivery squads.'
    },
    {
      value: '200%',
      label: 'Average ROI uplift',
      description: 'Digital initiatives compound growth through performance optimizations and conversion strategy.'
    }
  ];

  const handleStartProject = () => {
    if (props.onStartProject) {
      props.onStartProject();
      return;
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection && contactSection.scrollIntoView) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleViewCaseStudies = () => {
    if (props.onViewCaseStudies) {
      props.onViewCaseStudies();
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've had the privilege of working with amazing companies across various industries,
            helping them achieve their digital transformation goals.
          </p>
        </div>

        {/* Industry Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-pointer"
            >
              {industry}
            </span>
          ))}
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{client.logo}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.industry}</p>
                </div>
              </div>

              <blockquote className="text-gray-600 italic mb-4">
                "{client.testimonial}"
              </blockquote>

              <p className="text-sm text-gray-500 font-medium">
                — {client.representative}
              </p>
            </div>
          ))}
        </div>

        {/* Metrics Section */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white px-8 py-12 sm:px-10 sm:py-14">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-indigo-700/40 to-purple-600/50 opacity-80" />
          <div className="absolute -top-24 -right-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-28 -left-10 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="relative text-center mb-10">
            <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.3em] bg-white/10 text-blue-100 border border-white/10">
              Proof in the numbers
            </span>
            <h3 className="mt-6 text-3xl sm:text-4xl font-bold">Our Client Success Metrics</h3>
            <p className="mt-3 text-base text-slate-200/80 max-w-2xl mx-auto">
              Performance dashboards keep every engagement accountable — we foreground the metrics that matter to your leadership team.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition-all duration-300 hover:border-white/30 hover:shadow-[0_25px_60px_-25px_rgba(15,23,42,0.7)]"
              >
                <div className="text-4xl font-bold text-white">{metric.value}</div>
                <div className="mt-2 text-sm font-semibold uppercase tracking-wide text-blue-100">{metric.label}</div>
                <p className="mt-3 text-sm text-slate-200/80 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge web solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={handleStartProject}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
            >
              Start Your Project
            </button>
            <button
              type="button"
              onClick={handleViewCaseStudies}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;

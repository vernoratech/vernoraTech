import React from 'react';

const Process = () => {
  const steps = [
    {
      title: 'Discovery Call',
      desc: 'Understand your business, goals, and target audience',
      icon: '🧭'
    },
    {
      title: 'Proposal & Scope',
      desc: 'Define deliverables, timeline, and transparent pricing',
      icon: '📝'
    },
    {
      title: 'Design & Build',
      desc: 'Craft responsive, SEO-friendly pages tailored to your brand',
      icon: '🛠️'
    },
    {
      title: 'Launch & Support',
      desc: 'Deploy, monitor, and provide ongoing support',
      icon: '🚀'
    }
  ];

  return (
    <section id="process" className="bg-white section-padding reveal-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, proven workflow to deliver results for service businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 p-6 sm:p-7 rounded-lg hover:shadow-lg transition duration-300 reveal-up" style={{ transitionDelay: `${80 + index * 60}ms` }}>
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;



import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Landing Page Design',
      description: 'Custom-designed landing pages that convert visitors into clients',
      icon: '🎨',
      features: ['Mobile Responsive', 'Fast Loading', 'SEO Optimized']
    },
    {
      title: 'CA Firm Websites',
      description: 'Professional websites tailored for Chartered Accountants',
      icon: '📊',
      features: ['Client Portal', 'Service Showcase', 'Trust Elements']
    },
    {
      title: 'Construction Websites',
      description: 'Robust websites for construction and contractor businesses',
      icon: '🏗️',
      features: ['Project Gallery', 'Quote Forms', 'Service Areas']
    },
    {
      title: 'Professional Services',
      description: 'Websites for lawyers, doctors, consultants, and more',
      icon: '💼',
      features: ['Appointment Booking', 'Service Pages', 'Contact Forms']
    }
  ];

  return (
    <section id="services" className="bg-white section-padding reveal-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in creating professional websites that help service businesses
            attract more clients and grow their revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 sm:p-7 rounded-lg hover:shadow-lg transition duration-300 reveal-up" style={{ transitionDelay: `${80 + index * 60}ms` }}>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="text-accent mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

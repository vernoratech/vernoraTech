import React from 'react';

const ClientShowcase = () => {
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

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">
            Our Client Success Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Client Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200%</div>
              <div className="text-blue-100">Average ROI for Clients</div>
            </div>
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
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Start Your Project
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;

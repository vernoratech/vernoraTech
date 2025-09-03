import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: '500+',
      label: 'Websites Built',
      description: 'Successfully delivered projects'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Based on client feedback'
    },
    {
      number: '50+',
      label: 'Happy Clients',
      description: 'From startups to enterprises'
    },
    {
      number: '24/7',
      label: 'Support Available',
      description: 'Round the clock assistance'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've been building digital experiences that drive results. Here's what we've achieved so far.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

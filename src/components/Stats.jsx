import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: '25+',
      label: 'Landing Pages in Pipeline',
      description: 'Active build schedule for the next launch window.',
      detail: 'Onboarding sprint queue'
    },
    {
      number: '45',
      label: 'Discovery Calls Booked',
      description: 'Teams exploring how we can elevate their service brand.',
      detail: 'Q4 interest snapshot'
    },
    {
      number: '92%',
      label: 'Projected Satisfaction Score',
      description: 'Benchmark we are committed to meeting post-launch.',
      detail: 'Based on pilot feedback'
    },
    {
      number: '30d',
      label: 'Average Build Timeline Target',
      description: 'Goal for rolling out optimized landing experiences.',
      detail: 'Includes testing runway'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-100" aria-hidden="true" />
      <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Vision dashboard
            <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
          </div>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900">
            Momentum We’re Building Right Now
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            These are the milestones and targets guiding our upcoming launches—transparent goals we’re tracking day by day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-lg p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary text-2xl font-bold mb-4">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {stat.description}
                </p>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {stat.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Launch-Ready Landing Pages',
      description: 'We are packaging our highest-performing page sections into a dependable starter kit.',
      icon: '🎯',
      status: 'In final review',
      highlights: ['Hero + offer pairing frameworks', 'Trust badges sourced from partner research', 'CTA layouts tuned for service inquiries']
    },
    {
      title: 'CA Practice Foundations',
      description: 'A compliant-first template set crafted with feedback from chartered accountancy mentors.',
      icon: '📘',
      status: 'Partner preview',
      highlights: ['Secure document request flow', 'Services & expertise outline system', 'Credibility highlight banner']
    },
    {
      title: 'Contractor Visibility Suite',
      description: 'Showcase and quote tools engineered for builders preparing their next showcase phase.',
      icon: '🧱',
      status: 'Pilot installs',
      highlights: ['Project storytelling gallery', 'Guided quote request steps', 'Coverage map with service badges']
    },
    {
      title: 'Professional Booking Funnels',
      description: 'Focused intake experiences designed for advisors, clinics, and legal teams ready to scale.',
      icon: '💼',
      status: 'UX testing live',
      highlights: ['Smart consultation scheduler', 'Service spotlight page trio', 'Follow-up automation handoff']
    }
  ];

  return (
    <section id="services" className="relative overflow-hidden section-padding reveal-up">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Crafting the next launch wave
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Partnerships we’re actively shaping
              </h2>
              <p className="text-lg text-gray-600">
                Each service stream is an honest snapshot of where we are investing build time right now. Tap into the track that matches your growth plan and co-create the final stretch with us.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">How we collaborate</h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                    Weekly milestone reviews with your stakeholders
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                    Shared playbooks for copy, visuals, and capture forms
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">What you can expect</h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                    Transparent build timeline and deliverable tracker
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                    Optional add-ons for analytics and nurture flows
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-primary text-white px-6 py-8 shadow-lg">
              <h3 className="text-xl font-semibold">Schedule a discovery walkthrough</h3>
              <p className="mt-3 text-sm text-white/80">
                We’ll map your immediate goals to the service stream that fits best and outline how to make launch day effortless.
              </p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                Book a call
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white/95 p-7 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl reveal-up"
                style={{ transitionDelay: `${80 + index * 60}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/70 to-indigo-400" aria-hidden="true" />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between text-sm font-semibold text-primary/80">
                    <span>{service.status}</span>
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

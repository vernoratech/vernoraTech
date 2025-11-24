import React from 'react';
import ScreenshotPlaceholder from './ScreenshotPlaceholder';

const ClientShowcase = (props) => {
  const clients = [
    {
      name: 'GreenSprout Nursery',
      industry: 'Local Retail',
      logo: '🪴',
      testimonial: 'Our neighborhood plant shop now has an online catalog and booking form—customers love how easy it is.',
      representative: 'Owner, GreenSprout Nursery'
    },
    {
      name: 'FixIt Fast Repairs',
      industry: 'Home Services',
      logo: '🔧',
      testimonial: 'The new landing page doubled our enquiry calls within two weeks. Perfect for small service teams like ours.',
      representative: 'Lead Technician, FixIt Fast Repairs'
    },
    {
      name: 'BrightPath Tutoring',
      industry: 'Education',
      logo: '📚',
      testimonial: 'Parents can now schedule demo sessions instantly. The simple layout gives our small tutoring crew big credibility.',
      representative: 'Founder, BrightPath Tutoring'
    },
    {
      name: 'Tastebuds Home Bakery',
      industry: 'Food & Beverage',
      logo: '🧁',
      testimonial: 'We showcase daily specials and accept pre-orders without any hassle. It feels tailor-made for our kitchen.',
      representative: 'Head Baker, Tastebuds Home Bakery'
    },
    {
      name: 'ShiftRight Movers',
      industry: 'Local Logistics',
      logo: '🚚',
      testimonial: 'Customers can now request quotes online, which keeps our two-truck crew booked every weekend.',
      representative: 'Co-owner, ShiftRight Movers'
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
    <section className="relative overflow-hidden py-20 bg-white">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-50/80 via-white" aria-hidden="true" />
      <div className="relative container mx-auto px-4 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Showcase pipeline
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Industry spotlights we’re preparing to share
              </h2>
              <p className="text-lg text-gray-600">
                These are the partner stories moving through our review queue right now. Each collaboration highlights the momentum service brands gain when digital foundations align with their goals.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">What makes it into our showcase?</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  Documented before/after impact aligned with business goals
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                  Collaborative teams willing to share transparent metrics
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-primary text-white px-6 py-8 shadow-lg">
              <h3 className="text-xl font-semibold text-[#D9E4F2] tracking-wider">Want your brand on the next release?</h3>
              <p className="mt-3 text-sm text-[#D9E4F2]/80">
                Partner with us now and we’ll include your journey in the upcoming client premiere deck.
              </p>
              <button
                type="button"
                onClick={handleStartProject}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#D9E4F2] cursor-pointer"
              >
                Reserve a spot
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-primary mb-4">Segments queued</h3>
              <div className="flex flex-wrap gap-3">
                {industries.map((industry, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/90 px-4 py-2 text-xs font-semibold text-primary/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-[#FAFAFA] p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/70 to-indigo-400" aria-hidden="true" />
                  <div className="relative space-y-4">
                    <ScreenshotPlaceholder
                      title={`${client.name} preview`}
                      label="In-review snapshot"
                      aspectClass="aspect-[16/10]"
                      className="bg-white/50"
                    />
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{client.logo}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                        <p className="text-xs uppercase tracking-[0.25em] text-primary/80">In production</p>
                      </div>
                    </div>
                    <blockquote className="text-sm text-gray-600">
                      “{client.testimonial}”
                    </blockquote>
                    <div className="text-xs font-semibold text-gray-500">{client.industry} cohort</div>
                    <p className="text-xs text-gray-500">— {client.representative}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          {/* Metrics Section */}
          <div className="relative overflow-hidden rounded-3xl bg-[#1A3A6F] text-[#D9E4F2] px-8 py-12 sm:px-10 sm:py-14">
            <div className="absolute inset-0  opacity-80" />
            <div className="absolute -top-24 -right-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-28 -left-10 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

            <div className="relative text-center mb-10">
              <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.3em] bg-white/10 text-blue-100 border border-white/10">
                Proof in the numbers
              </span>
              <h3 className="mt-6 text-3xl sm:text-4xl font-bold text-[#D9E4F2]">Our Client Success Metrics</h3>
              <p className="mt-3 text-base text-[#D9E4F2]/80 max-w-2xl mx-auto">
                Performance dashboards keep every engagement accountable — we foreground the metrics that matter to your leadership team.
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition-all duration-300 hover:border-white/30 hover:shadow-[0_25px_60px_-25px_rgba(15,23,42,0.7)]"
                >
                  <div className="text-4xl font-bold text-[#D9E4F2]">{metric.value}</div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#D9E4F2]">{metric.label}</div>
                  <p className="mt-3 text-sm text-[#D9E4F2]/80 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to open your own spotlight?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let’s script your showcase chapter and put your metrics at center stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={handleStartProject}
              className="btn-primary px-8 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer"
            >
              Start Your Project
            </button>
            <button
              type="button"
              onClick={handleViewCaseStudies}
              className="border-2 border-[#2DA3DB] text-[#2DA3DB] px-8 py-3 rounded-lg font-semibold hover:bg-[#2DA3DB] hover:text-white transition-all duration-200 cursor-pointer"
            >
              Request the preview deck
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;

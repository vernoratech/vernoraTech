import React from 'react';

const BuildProcess = () => {
  const phases = [
    {
      step: 'Phase 01',
      title: 'Discovery',
      description:
        'We run immersive workshops to map goals, audiences, and competitive gaps so every decision has context.',
      highlights: [
        'Stakeholder interviews and journey mapping',
        'Opportunity backlog and success metrics',
        'Launch constraints, risks, and priorities'
      ],
      cta: 'Book Discovery Call'
    },
    {
      step: 'Phase 02',
      title: 'Experience Design',
      description:
        'Information architecture, wireframes, and visual systems that translate your brand into high-converting flows.',
      highlights: [
        'Messaging architecture and sitemap',
        'High-fidelity UI system and prototypes',
        'Content and asset production plan'
      ],
      cta: 'Review Design Sprint'
    },
    {
      step: 'Phase 03',
      title: 'Development',
      description:
        'Component-driven builds with automated checks ensure accessibility, performance, and maintainability.',
      highlights: [
        'Reusable component library with documentation',
        'Continuous integration and preview environments',
        'Integrated SEO, schema, and analytics setup'
      ],
      cta: 'View Build Checklist'
    },
    {
      step: 'Phase 04',
      title: 'Testing',
      description:
        'Rigorous QA across devices, flows, and integrations with clear sign-off gates for each stakeholder team.',
      highlights: [
        'Functional, device, and cross-browser testing',
        'Security and performance audits',
        'Regression suite connected to CI/CD'
      ],
      cta: 'Inspect QA Plan'
    },
    {
      step: 'Phase 05',
      title: 'Launch & Growth',
      description:
        'We choreograph launch, train your teams, and activate post-launch optimization loops to keep momentum high.',
      highlights: [
        'Go-live command center and rollback plan',
        'Knowledge transfer and playbooks',
        'Conversion optimization roadmap'
      ],
      cta: 'Schedule Launch Call'
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
            Process Roadmap
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Every launch moves through a proven rhythm
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From first conversation to post-launch optimization, we keep teams aligned and momentum steady with a five-step playbook.
          </p>
        </div>

        <div className="mt-16 grid gap-10">
          {phases.map((phase, index) => (
            <div
              key={phase.step}
              className="relative flex flex-col md:flex-row md:items-start md:gap-8 rounded-3xl border border-gray-100 bg-white shadow-lg shadow-primary/5 p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="absolute left-6 top-0 bottom-0 hidden md:block w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" aria-hidden="true" />
              <div className="flex w-full md:w-48 md:flex-col md:items-start items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary text-xl font-semibold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">
                    {phase.step}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-gray-900">{phase.title}</h3>
                </div>
              </div>

              <div className="mt-6 md:mt-0 flex-1">
                <p className="text-base text-gray-600 leading-relaxed">{phase.description}</p>
                <ul className="mt-6 space-y-3">
                  {phase.highlights.map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-slate-50 px-4 py-3 text-sm text-gray-700"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      window.location.href = '#contact';
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    {phase.cta}
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildProcess;

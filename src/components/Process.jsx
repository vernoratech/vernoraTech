import React from 'react';

const Process = () => {
  const phases = [
    {
      phase: 'Phase 01',
      title: 'Discovery & Strategy',
      icon: '🧭',
      summary: 'Immersion workshops align stakeholders on objectives, constraints, and user expectations.',
      outcomes: [
        'Stakeholder alignment canvas',
        'Prioritized opportunity map',
        'Success metrics defined'
      ]
    },
    {
      phase: 'Phase 02',
      title: 'Solution Blueprint',
      icon: '📝',
      summary: 'We translate strategy into an executable plan covering architecture, experience, and delivery milestones.',
      outcomes: [
        'Experience architecture and user flows',
        'Technical architecture and stack selection',
        'Roadmap with sprints and checkpoints'
      ]
    },
    {
      phase: 'Phase 03',
      title: 'Build & Iterate',
      icon: '🛠️',
      summary: 'Dedicated squads build, integrate, and iterate using rapid feedback loops and automated quality gates.',
      outcomes: [
        'Design system and component library',
        'Incremental releases on staging',
        'Automated QA and performance budgets'
      ]
    },
    {
      phase: 'Phase 04',
      title: 'Launch & Evolve',
      icon: '🚀',
      summary: 'We orchestrate launch, knowledge transfer, and optimization rituals to scale adoption post go-live.',
      outcomes: [
        'Launch readiness playbook',
        'Operational handover and documentation',
        'Post-launch analytics and enhancement backlog'
      ]
    }
  ];

  const deliveryHighlights = [
    { value: '48h', label: 'Average kickoff window' },
    { value: '3-4', label: 'Design & dev sprints' },
    { value: '100%', label: 'Release QA automation' }
  ];

  return (
    <section id="process" className="relative py-20 sm:py-24 bg-[#1C1F26] text-white overflow-hidden">
      <div className="absolute inset-0 " />
      <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl opacity-50" />
      <div className="absolute -bottom-40 -left-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm font-semibold bg-white/10 text-primary-100 border border-white/10 tracking-wide uppercase">
            Delivery methodology
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-[#D9E4F2]">Enterprise-grade execution, startup-paced delivery</h2>
          <p className="mt-4 text-lg text-[#D9E4F2] leading-relaxed">
            Each phase is designed to keep momentum high and feedback loops tight, ensuring your product ships with clarity, quality, and confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[320px_1fr] items-start">
          <aside className="space-y-8">
            <div className="rounded-3xl border border-[#D9E4F2]/10 bg-[#D9E4F2]/5 p-8 backdrop-blur">
              <h3 className="text-xl font-semibold text-[#D9E4F2]">How we collaborate</h3>
              <p className="mt-3 text-sm text-[#D9E4F2]/80 leading-relaxed">
                Embedded with your team from day zero, we operate with transparent rituals, measurable outcomes, and engineering best practices tuned for modern SaaS.
              </p>
              <div className="mt-6 grid gap-4">
                {deliveryHighlights.map((item, index) => (
                  <div key={index} className="flex items-center justify-between rounded-2xl bg-[#D9E4F2]/5 border border-[#D9E4F2]/10 px-4 py-3">
                    <span className="text-2xl font-bold text-[#D9E4F2]">{item.value}</span>
                    <span className="text-sm text-[#D9E4F2]/70 text-right leading-snug">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#D9E4F2]/30 bg-[#D9E4F2]/10 p-8 backdrop-blur">
              <h4 className="text-sm uppercase tracking-[0.3em] text-[#D9E4F2]/80">Rituals</h4>
              <ul className="mt-4 space-y-3 text-[#D9E4F2]/10 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#D9E4F2]/70" />
                  <span className="text-[#D9E4F2]">Weekly milestone review with exec-ready dashboards.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#D9E4F2]/70" />
                  <span className="text-[#D9E4F2]">Dedicated Slack channel with two-hour response commitment.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#D9E4F2]/70" />
                  <span className="text-[#D9E4F2]">Automated quality gates for accessibility, performance, and security.</span>
                </li>
              </ul>
            </div>
          </aside>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={phase.phase} className="group relative rounded-3xl border border-[#D9E4F2]/10 bg-[#D9E4F2]/5 p-8 backdrop-blur transition-all duration-300 hover:border-[#D9E4F2]/40 hover:shadow-[0_20px_60px_-20px_rgba(12,42,99,0.45)]">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D9E4F2]/20 text-3xl">
                      {phase.icon}
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9E4F2]/80">{phase.phase}</span>
                      <h3 className="mt-2 text-2xl font-semibold text-[#D9E4F2]">{phase.title}</h3>
                    </div>
                  </div>
                  <span className="text-4xl font-bold text-[#D9E4F2]/20 md:self-center">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <p className="mt-4 text-base text-[#D9E4F2]/80 leading-relaxed">{phase.summary}</p>
                <div className="mt-6 grid gap-3">
                  {phase.outcomes.map((outcome, outcomeIndex) => (
                    <div key={outcomeIndex} className="flex items-start gap-3 rounded-2xl border border-[#D9E4F2]/5 bg-[#D9E4F2]/5 px-4 py-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#D9E4F2]/70" />
                      <span className="text-sm text-[#D9E4F2] leading-relaxed">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;



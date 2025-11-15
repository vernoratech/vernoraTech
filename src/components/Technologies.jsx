import React from 'react';

const Technologies = () => {
  const techCategories = [
    {
      category: 'Frontend',
      description: 'Enterprise-grade interfaces, design systems, and micro-frontends built for performance and accessibility.',
      technologies: [
        { name: 'React', icon: '⚛️', level: 'Expert' },
        { name: 'Next.js', icon: '⚡', level: 'Expert' },
        { name: 'TypeScript', icon: '📘', level: 'Expert' },
        { name: 'Flutter', icon: '🦋', level: 'Advanced' }
      ]
    },
    {
      category: 'Backend',
      description: 'Robust APIs, serverless workloads, and event-driven architectures powering secure, scalable products.',
      technologies: [
        { name: 'Node.js', icon: '🟢', level: 'Expert' },
        { name: 'Python', icon: '🐍', level: 'Advanced' },
        // { name: 'PHP', icon: '🐘', level: 'Advanced' },
        // { name: 'Laravel', icon: '🔥', level: 'Expert' },
        { name: 'Express.js', icon: '🚂', level: 'Expert' },
        { name: 'FastAPI', icon: '⚡', level: 'Advanced' },
        { name: 'Spring Boot', icon: '🌱', level: 'Advanced' }
      ]
    },
    {
      category: 'Database',
      description: 'High-availability data solutions with tuned queries, replication strategies, and observability baked in.',
      technologies: [
        { name: 'MongoDB', icon: '🍃', level: 'Advanced' },
        { name: 'MySQL', icon: '🐬', level: 'Advanced' },
        { name: 'Redis', icon: '🔴', level: 'Advanced' }
      ]
    },
    // {
    //   category: 'Cloud & DevOps',
    //   technologies: [
    //     { name: 'AWS', icon: '☁️', level: 'Advanced' },
    //     { name: 'Docker', icon: '🐳', level: 'Advanced' },
    //     { name: 'Git', icon: '📚', level: 'Expert' },
    //     { name: 'CI/CD', icon: '🔄', level: 'Advanced' }
    //   ]
    // }
  ];

  const capabilityHighlights = [
    {
      title: 'Modern engineering stack',
      summary: 'Composable architecture patterns that balance rapid delivery with long-term maintainability.'
    },
    {
      title: 'Production-grade delivery',
      summary: 'Security reviews, performance budgets, and observability pillars embedded in every release cycle.'
    },
    {
      title: 'Co-creation with your team',
      summary: 'Pairing sessions, code reviews, and transparent documentation to empower in-house squads.'
    }
  ];

  const coreStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js','FastAPI','Redis','Spring boot', 'Flutter' ,'MongoDB', 'MySQL'];

  const levelToPercent = {
    Expert: 100,
    Advanced: 80,
    Intermediate: 60
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-emerald-100 text-emerald-700';
      case 'Advanced': return 'bg-sky-100 text-sky-700';
      case 'Intermediate': return 'bg-amber-100 text-amber-700';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/20 to-transparent blur-3xl opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-white/10 text-primary-100 border border-white/10">
            Full-stack craftsmanship
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Technologies We Master
          </h2>
          <p className="mt-4 text-lg text-slate-200">
            We blend proven platforms with emerging tooling to ship resilient, maintainable products that can evolve with your roadmap.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[320px_1fr] items-start">
          <aside className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur">
              <h3 className="text-2xl font-semibold">How we partner</h3>
              <p className="mt-3 text-sm text-slate-200/80">
                A pragmatic, delivery-driven model that keeps codebases future-ready while giving stakeholders complete visibility.
              </p>
              <div className="mt-6 space-y-5">
                {capabilityHighlights.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary/90 text-lg">
                      {index === 0 && '🧩'}
                      {index === 1 && '🚀'}
                      {index === 2 && '🤝'}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-200/80">{item.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur">
              <h4 className="text-sm uppercase tracking-[0.3em] text-slate-300">Core stack</h4>
              <div className="mt-5 flex flex-wrap gap-3">
                {coreStack.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            {techCategories.map((category, index) => (
              <div key={index} className="bg-white text-slate-900 rounded-3xl p-10 shadow-xl">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">
                      {category.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-slate-900">
                      {category.description}
                    </h3>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">
                    {category.technologies.length} core tools
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group relative rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{tech.icon}</span>
                          <span className="text-lg font-semibold text-slate-900">{tech.name}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(tech.level)}`}>
                          {tech.level}
                        </span>
                      </div>
                      <div className="mt-4 h-1.5 w-full rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-primary/80"
                          style={{ width: `${levelToPercent[tech.level] || 50}%` }}
                        />
                      </div>
                      <p className="mt-3 text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
                        Capability depth
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur">
          <h3 className="text-2xl font-semibold text-white">Evaluating a new toolchain?</h3>
          <p className="mt-3 text-sm text-slate-200/80">
            We assess fit-for-purpose technologies, provide comparative analysis, and co-create adoption roadmaps tailored to your delivery timelines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

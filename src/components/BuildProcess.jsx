import React from 'react';
import {
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BuildProcess = () => {

  const navigate = useNavigate();

  const phases = [
    {
      step: 'Phase 01',
      title: 'Discovery',
      icon: <Search className="h-6 w-6 text-white" />,
      description:
        'We run immersive workshops to map goals, audiences, and competitive gaps so every decision has context.',
      highlights: [
        'Stakeholder interviews and journey mapping',
        'Opportunity backlog and success metrics',
        'Launch constraints, risks, and priorities'
      ],
      cta: 'Book Discovery Call',
      link: () => navigate('/process/phase-01')
    },
    {
      step: 'Phase 02',
      title: 'Experience Design',
      icon: <PenTool className="h-6 w-6 text-white" />,
      description:
        'Information architecture, wireframes, and visual systems that translate your brand into high-converting flows.',
      highlights: [
        'Messaging architecture and sitemap',
        'High-fidelity UI system and prototypes',
        'Content and asset production plan'
      ],
      cta: 'Review Design Sprint',
      link: () => navigate('/process/phase-02')
    },
    {
      step: 'Phase 03',
      title: 'Development',
      icon: <Code2 className="h-6 w-6 text-white" />,
      description:
        'Component-driven builds with automated checks ensure accessibility, performance, and maintainability.',
      highlights: [
        'Reusable component library with documentation',
        'Continuous integration and preview environments',
        'Integrated SEO, schema, and analytics setup'
      ],
      cta: 'View Build Checklist',
      link: () => navigate('/process/phase-03')
    },
    {
      step: 'Phase 04',
      title: 'Testing',
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      description:
        'Rigorous QA across devices, flows, and integrations with clear sign-off gates for each stakeholder team.',
      highlights: [
        'Functional, device, and cross-browser testing',
        'Security and performance audits',
        'Regression suite connected to CI/CD'
      ],
      cta: 'Inspect QA Plan',
      link: () => navigate('/process/phase-04')
    },
    {
      step: 'Phase 05',
      title: 'Launch & Growth',
      icon: <Rocket className="h-6 w-6 text-white" />,
      description:
        'We choreograph launch, train your teams, and activate post-launch optimization loops to keep momentum high.',
      highlights: [
        'Go-live command center and rollback plan',
        'Knowledge transfer and playbooks',
        'Conversion optimization roadmap'
      ],
      cta: 'Schedule Launch Call',
      link: () => navigate('/process/phase-05')
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 bg-[#FAFAFA] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#D9E4F2/20_100%)] pointer-events-none" />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-[#2DA3DB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#1A3A6F]/5 text-[#1A3A6F] border border-[#1A3A6F]/10 uppercase tracking-widest">
            Process Roadmap
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold text-[#1C1F26] leading-tight tracking-tight">
            Every launch moves through <span className="text-[#2DA3DB]">a proven rhythm</span>
          </h2>
          <p className="mt-6 text-lg text-[#6E7787] leading-relaxed">
            From first conversation to post-launch optimization, we keep teams aligned and momentum steady with a five-step playbook.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="relative mt-16">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="absolute left-[2.25rem] top-8 bottom-8 hidden md:block w-px bg-gradient-to-b from-[#2DA3DB]/20 via-[#2DA3DB] to-[#2DA3DB]/20" aria-hidden="true" />

          <div className="no-scrollbar flex gap-6 overflow-x-auto px-4 pb-6 md:hidden snap-x snap-mandatory touch-pan-x scroll-smooth">
            {phases.map((phase, index) => (
              <div
                key={phase.step}
                className="snap-center group relative flex w-[85vw] min-w-[320px] max-w-md flex-col rounded-3xl border border-[#D9E4F2] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#1A3A6F]/5 hover:border-[#2DA3DB]/30 hover:-translate-y-1"
              >
                {/* Step Indicator */}
                <div className="flex items-center gap-4 shrink-0 z-10 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1A3A6F] text-white shadow-lg shadow-[#1A3A6F]/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#2DA3DB]">
                    {phase.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB] mb-1 block">
                        {phase.step}
                      </span>
                      <h3 className="text-xl font-bold text-[#1C1F26] group-hover:text-[#1A3A6F] transition-colors">
                        {phase.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-[#6E7787] leading-relaxed mb-4">
                    {phase.description}
                  </p>

                  {/* Highlights Container */}
                  <div className="bg-[#FAFAFA] rounded-xl border border-[#D9E4F2]/60 p-4 mb-4">
                    <ul className="grid gap-2">
                      {phase.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start gap-3 text-sm font-medium text-[#4B5563]"
                        >
                          <CheckCircle2 className="h-4 w-4 text-[#2DA3DB] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={phase.link}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#1A3A6F] border border-[#D9E4F2] shadow-sm transition-all.duration-200 group-hover:bg-[#1A3A6F] group-hover:text-white group-hover:border-[#1A3A6F]"
                  >
                    {phase.cta}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:grid gap-12">
            {phases.map((phase, index) => (
              <div
                key={phase.step}
                className="group relative flex flex-col md:flex-row md:items-start md:gap-10 rounded-3xl border border-[#D9E4F2] bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#1A3A6F]/5 hover:border-[#2DA3DB]/30 hover:-translate-y-1"
              >
                {/* Step Indicator */}
                <div className="flex items-center md:flex-col md:items-center gap-4 shrink-0 z-10">
                  <div className="flex h-14 w-14 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-[#1A3A6F] text-white shadow-lg shadow-[#1A3A6F]/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#2DA3DB]">
                    {phase.icon}
                  </div>
                  {/* Mobile Connector (Hidden on Desktop) */}
                  <div className="md:hidden h-px flex-1 bg-gradient-to-r from-[#2DA3DB]/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="mt-6 md:mt-0 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB] mb-1 block">
                        {phase.step}
                      </span>
                      <h3 className="text-2xl font-bold text-[#1C1F26] group-hover:text-[#1A3A6F] transition-colors">
                        {phase.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base text-[#6E7787] leading-relaxed mb-6 max-w-3xl">
                    {phase.description}
                  </p>

                  {/* Highlights Container */}
                  <div className="bg-[#FAFAFA] rounded-xl border border-[#D9E4F2]/60 p-5 mb-6">
                    <ul className="grid sm:grid-cols-1 gap-3">
                      {phase.highlights.map((highlight, highlightIndex) => (
                        <li
                          key={highlightIndex}
                          className="flex items-start gap-3 text-sm font-medium text-[#4B5563]"
                        >
                          <CheckCircle2 className="h-5 w-5 text-[#2DA3DB] shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={phase.link}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#1A3A6F] border border-[#D9E4F2] shadow-sm transition-all duration-200 group-hover:bg-[#1A3A6F] group-hover:text-white group-hover:border-[#1A3A6F] cursor-pointer"
                  >
                    {phase.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildProcess;
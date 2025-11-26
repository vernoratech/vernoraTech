import React from 'react';
import { Wrench } from 'lucide-react';
import { FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb';
import { SiFlutter, SiTailwindcss, SiExpress, SiFastapi, SiMongodb, SiMysql, SiDocker } from 'react-icons/si';
import { IoLogoPython } from 'react-icons/io5';
import { BiLogoSpringBoot } from 'react-icons/bi';
import { DiRedis } from 'react-icons/di';

// --- Component: MarqueeRow ---
const MarqueeRow = ({ items, direction = 'normal', speed = '20s', onSelect, activeTechName }) => {
  const scrollAreaRef = React.useRef(null);
  const resumeTimeoutRef = React.useRef(null);
  const [isInteracting, setIsInteracting] = React.useState(false);

  const scheduleResume = React.useCallback(() => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsInteracting(false);
    }, 1200);
  }, []);

  const handleInteractionStart = React.useCallback(() => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    setIsInteracting(true);
  }, []);

  const handleInteractionEnd = React.useCallback(() => {
    scheduleResume();
  }, [scheduleResume]);

  const handleScroll = React.useCallback(() => {
    handleInteractionStart();
    scheduleResume();
  }, [handleInteractionStart, scheduleResume]);

  React.useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const baseAnimationClass = direction === 'reverse' ? 'animate-scroll-reverse' : 'animate-scroll';
  const animationClass = `${baseAnimationClass} ${isInteracting ? 'pause-animation' : ''}`.trim();

  return (
    <div className="relative overflow-hidden group">
      <div
        ref={scrollAreaRef}
        className="no-scrollbar overflow-x-auto touch-pan-x scroll-smooth"
        onPointerDown={handleInteractionStart}
        onPointerUp={handleInteractionEnd}
        onPointerLeave={handleInteractionEnd}
        onWheel={handleScroll}
        onScroll={handleScroll}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
      >
        <div
          className={`flex w-max min-w-full gap-3 sm:gap-5 lg:gap-8 py-3 sm:py-4 ${animationClass}`}
          style={{ animationDuration: speed }}
        >
          {[...items, ...items, ...items].map((item, index) => {
            const isActive = activeTechName === item.name;
            return (
              <button
                key={`${item.name}-${index}`}
                type="button"
                onClick={() => onSelect?.(item)}
                onKeyDown={(event) => {
                  if ((event.key === 'Enter' || event.key === ' ') && onSelect) {
                    event.preventDefault();
                    onSelect(item);
                  }
                }}
                aria-pressed={isActive}
                className={`min-w-[140px] sm:min-w-[190px] md:min-w-[210px] flex items-center gap-2 sm:gap-3 rounded-2xl border px-4 py-2 text-xs font-semibold sm:text-sm sm:px-5 sm:py-3 md:px-6 md:py-4 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#2DA3DB] focus:ring-offset-2 focus:ring-offset-[#FAFAFA] ${isActive ? 'border-[#1A3A6F] bg-white shadow-lg shadow-[#1A3A6F]/15 scale-105 text-[#1A3A6F]' : 'border-[#D9E4F2] bg-white text-[#1C1F26] hover:border-[#2DA3DB] hover:shadow-md hover:scale-105'}`}
              >
                <div className={`flex h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 items-center justify-center ${item.color || 'text-[#1A3A6F]'}`}>
                  {item.icon}
                </div>
                <span className="text-xs sm:text-sm font-bold whitespace-nowrap">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      {/* Gradient Masks for Fade Effect */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-12 lg:w-20 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-12 lg:w-20 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />
    </div>
  );
};

const TechnologyStack = () => {
  const frontendStack = [
    {
      name: 'React',
      icon: <FaReact className="h-full w-full" />,
      color: 'text-[#61DAFB]',
      summary: 'Component-based UI framework for dynamic web experiences.',
      useCases: ['Marketing sites with animations', 'Complex dashboards', 'Design system-driven apps'],
      delivery: 'Reusable UI kit powered by React + TypeScript for consistency.'
    },
    {
      name: 'Next.js',
      icon: <TbBrandNextjs className="h-full w-full" />,
      color: 'text-[#000000]',
      summary: 'Production-grade React framework with SSR and edge rendering.',
      useCases: ['SEO-focused landing pages', 'Hybrid static/dynamic platforms', 'Content-heavy sites'],
      delivery: 'Blazing fast pages with smart caching and built-in analytics.'
    },
    {
      name: 'TypeScript',
      icon: <TbBrandTypescript className="h-full w-full" />,
      color: 'text-[#3178C6]',
      summary: 'Typed superset of JavaScript for reliability and developer velocity.',
      useCases: ['Large-scale apps', 'Shared component libraries', 'API-heavy integrations'],
      delivery: 'Strict typing prevents regressions and speeds collaboration.'
    },
    {
      name: 'Flutter',
      icon: <SiFlutter className="h-full w-full" />,
      color: 'text-[#02569B]',
      summary: 'Cross-platform UI toolkit for pixel-perfect mobile and web apps.',
      useCases: ['Mobile MVPs', 'Multi-platform dashboards', 'High-fidelity prototypes'],
      delivery: 'One codebase delivers native-quality experiences across platforms.'
    },
    {
      name: 'Tailwind',
      icon: <SiTailwindcss className="h-full w-full" />,
      color: 'text-[#38BDF8]',
      summary: 'Utility-first CSS system for rapid design iteration.',
      useCases: ['Design system implementation', 'Responsive marketing pages', 'Accessible UI components'],
      delivery: 'Polished interfaces built fast with your brand palette baked in.'
    }
  ];

  const backendStack = [
    {
      name: 'Node.js',
      icon: <FaNodeJs className="h-full w-full" />,
      color: 'text-[#68A063]',
      summary: 'Event-driven runtime for high-throughput APIs and microservices.',
      useCases: ['Real-time dashboards', 'API gateways', 'Serverless workloads'],
      delivery: 'Scalable services deployed with monitored Node clusters.'
    },
    {
      name: 'Python',
      icon: <IoLogoPython className="h-full w-full" />,
      color: 'text-[#3776AB]',
      summary: 'Versatile language powering automation, ML, and data workflows.',
      useCases: ['Data processing pipelines', 'ML model serving', 'Internal tooling'],
      delivery: 'Reliable Python services packaged with reproducible environments.'
    },
    {
      name: 'Spring Boot',
      icon: <BiLogoSpringBoot className="h-full w-full" />,
      color: 'text-[#6DB33F]',
      summary: 'Enterprise-grade Java framework with batteries included.',
      useCases: ['Mission-critical APIs', 'Legacy modernization', 'Enterprise integrations'],
      delivery: 'Robust JVM services with observability and strict SLAs.'
    },
    {
      name: 'Express.js',
      icon: <SiExpress className="h-full w-full" />,
      color: 'text-[#000000]',
      summary: 'Minimalist Node framework favored for APIs and microservices.',
      useCases: ['REST/GraphQL APIs', 'Server-rendered experiences', 'BFF layers'],
      delivery: 'Lean services with clean routing, validation, and monitoring.'
    },
    {
      name: 'FastAPI',
      icon: <SiFastapi className="h-full w-full" />,
      color: 'text-[#009688]',
      summary: 'High-performance Python framework built on async and type hints.',
      useCases: ['Async APIs', 'ML inference endpoints', 'Rapid prototypes'],
      delivery: 'Autodocumented APIs with blazing response times and async IO.'
    }
  ];

  const toolsStack = [
    {
      name: 'MongoDB',
      icon: <SiMongodb className="h-full w-full" />,
      color: 'text-[#4DB33D]',
      summary: 'Document database for flexible, fast iteration.',
      useCases: ['Product MVPs', 'Event logging', 'Content stores'],
      delivery: 'Managed clusters with backups, sharding, and schema governance.'
    },
    {
      name: 'MySQL',
      icon: <SiMysql className="h-full w-full" />,
      color: 'text-[#00758F]',
      summary: 'Battle-tested relational database for structured data.',
      useCases: ['Transactional systems', 'Reporting dashboards', 'Monolithic apps'],
      delivery: 'Performance-tuned SQL with migration pipelines and HA setups.'
    },
    {
      name: 'Redis',
      icon: <DiRedis className="h-full w-full" />,
      color: 'text-[#D82C20]',
      summary: 'In-memory datastore enabling sub-millisecond responses.',
      useCases: ['Caching layers', 'Real-time leaderboards', 'Rate limiting'],
      delivery: 'Highly available Redis with monitoring and eviction policies.'
    },
    {
      name: 'Docker',
      icon: <SiDocker className="h-full w-full" />,
      color: 'text-[#0db7ed]',
      summary: 'Container platform for reproducible environments.',
      useCases: ['CI/CD pipelines', 'Microservice orchestration', 'Developer onboarding'],
      delivery: 'Secure images and automated deployments across environments.'
    },
    {
      name: 'AWS',
      icon: <FaAws className="h-full w-full" />,
      color: 'text-[#FF9900]',
      summary: 'Cloud platform powering resilient, scalable infrastructure.',
      useCases: ['Global deployments', 'Serverless architectures', 'Data analytics workloads'],
      delivery: 'Well-architected AWS foundations with cost governance baked in.'
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('Frontend');
  const [selectedTech, setSelectedTech] = React.useState(frontendStack[0]);

  const handleTechSelect = React.useCallback((category, tech) => {
    setSelectedCategory(category);
    setSelectedTech(tech);
  }, []);

  return (
    <section className="relative py-12 sm:py-16 bg-[#FAFAFA] overflow-hidden">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll-reverse {
            animation: scroll-reverse 30s linear infinite;
          }
          .group:hover .animate-scroll,
          .group:hover .animate-scroll-reverse {
            animation-play-state: paused;
          }
          .pause-animation {
            animation-play-state: paused !important;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-[#2DA3DB]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#1A3A6F]/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1A3A6F] border border-[#1A3A6F]/10 mb-6">
          <Wrench size={14} className="text-[#2DA3DB]" />
          Tech Stack
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1C1F26] tracking-tight mb-6">
          Built with <span className="text-[#2DA3DB]">Modern Tooling</span>
        </h2>
        <p className="text-lg text-[#6E7787] max-w-2xl mx-auto">
          We leverage a battle-tested stack to ensure your applications are secure, scalable, and lightning fast.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-10">
        {/* Row 1: Frontend */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-10">
            <span className="bg-[#FAFAFA] px-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#6E7787]">Frontend</span>
          </div>
          <MarqueeRow
            items={frontendStack}
            direction="normal"
            speed="35s"
            onSelect={(tech) => handleTechSelect('Frontend', tech)}
            activeTechName={selectedTech?.name}
          />
        </div>

        {/* Row 2: Backend */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-10">
            <span className="bg-[#FAFAFA] px-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#6E7787]">Backend</span>
          </div>
          <MarqueeRow
            items={backendStack}
            direction="reverse"
            speed="40s"
            onSelect={(tech) => handleTechSelect('Backend', tech)}
            activeTechName={selectedTech?.name}
          />
        </div>

        {/* Row 3: Infrastructure & Data */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-10">
            <span className="bg-[#FAFAFA] px-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#6E7787]">Infrastructure & Data</span>
          </div>
          <MarqueeRow
            items={toolsStack}
            direction="normal"
            speed="45s"
            onSelect={(tech) => handleTechSelect('Infrastructure & Data', tech)}
            activeTechName={selectedTech?.name}
          />
        </div>
      </div>

      {selectedTech && (
        <div className="relative max-w-4xl mx-auto mt-12 sm:mt-16 px-4 sm:px-6 lg:px-0">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#E8F1FC] via-white to-[#FAFAFA] blur-2xl" aria-hidden="true" />
          <div className="relative rounded-3xl border border-[#D9E4F2] bg-white/90 backdrop-blur p-6 sm:p-8 shadow-xl shadow-[#0F172A]/5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-3 sm:gap-4 mb-6 text-left sm:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#1A3A6F]/5 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#1A3A6F] border border-[#1A3A6F]/10">
                {selectedCategory}
              </span>
              <div className="flex items-center gap-2 sm:gap-3 text-[#6E7787] text-xs sm:text-sm">
                <Wrench size={16} className="text-[#2DA3DB] flex-shrink-0" />
                <span className="leading-relaxed">Click any tool above to explore why we use it.</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-4 text-center sm:text-left">
                <div className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#F0F7FF] ${selectedTech.color || 'text-[#1A3A6F]'}`}>
                  <span className="text-4xl">{selectedTech.icon}</span>
                </div>
                <div className="w-full">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1C1F26] flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-3">
                    {selectedTech.name}
                    <span className="text-sm font-semibold text-[#2DA3DB] sm:whitespace-nowrap">Battle-tested in production</span>
                  </h3>
                  <p className="mt-2 text-sm text-[#4B5563] max-w-2xl mx-auto sm:mx-0">
                    {selectedTech.summary}
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FBFF] p-4 sm:p-5">
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#6E7787] mb-3">Ideal Use Cases</h4>
                  <ul className="space-y-2 text-[#1C1F26] text-xs sm:text-sm text-left">
                    {selectedTech.useCases?.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#2DA3DB] flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:p-5 shadow-sm text-left">
                  <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#6E7787] mb-3">What you get</h4>
                  <p className="text-[#1C1F26] text-xs sm:text-sm leading-relaxed">
                    {selectedTech.delivery}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechnologyStack;
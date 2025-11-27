import React, { useEffect, useMemo, useState } from 'react';
import { Layers, Phone, HeartHandshake, Clock, Activity } from 'lucide-react';

const MIN_PIPELINE = 5;
const MAX_PIPELINE = 15;
const PIPELINE_DELTAS = [3, -2, 2];
const UPDATE_INTERVAL_MS = 2 * 60 * 1000;

const getRandomPipeline = () =>
  Math.floor(Math.random() * (MAX_PIPELINE - MIN_PIPELINE + 1)) + MIN_PIPELINE;

const getNextPipeline = (current) => {
  const candidates = PIPELINE_DELTAS.map((delta) => current + delta).filter(
    (value) => value >= MIN_PIPELINE && value <= MAX_PIPELINE
  );

  if (candidates.length === 0) {
    return current;
  }

  const distinctCandidates = candidates.filter((value) => value !== current);
  const viable = distinctCandidates.length > 0 ? distinctCandidates : candidates;
  return viable[Math.floor(Math.random() * viable.length)];
};

const Stats = () => {
  const [pipelineCount, setPipelineCount] = useState(getRandomPipeline);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPipelineCount((previous) => getNextPipeline(previous));
    }, UPDATE_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  const stats = useMemo(() => {
    const pipelineDisplay = pipelineCount === MAX_PIPELINE ? `${pipelineCount}+` : `${pipelineCount}`;
    const discoveryCalls = Math.max(5, Math.round(pipelineCount * 0.7) + 3);
    const satisfactionScore = `${Math.min(98, 85 + Math.round(pipelineCount / 2))}%`;
    const buildTimelineTarget = `${Math.max(14, 24 - pipelineCount)}d`;

    return [
      {
        number: pipelineDisplay,
        label: 'Landing Pages in Pipeline',
        description: 'Active build schedule for the next launch window.',
        detail: 'Onboarding sprint queue',
        icon: <Layers className="h-6 w-6" />
      },
      {
        number: `${discoveryCalls}`,
        label: 'Discovery Calls Booked',
        description: 'Teams exploring how we can elevate their service brand.',
        detail: 'Q4 interest snapshot',
        icon: <Phone className="h-6 w-6" />
      },
      {
        number: satisfactionScore,
        label: 'Projected Satisfaction Score',
        description: 'Benchmark we are committed to meeting post-launch.',
        detail: 'Based on pilot feedback',
        icon: <HeartHandshake className="h-6 w-6" />
      },
      {
        number: buildTimelineTarget,
        label: 'Avg. Build Timeline Target',
        description: 'Goal for rolling out optimized landing experiences.',
        detail: 'Includes testing runway',
        icon: <Clock className="h-6 w-6" />
      }
    ];
  }, [pipelineCount]);

  return (
    <section className="relative py-24 overflow-hidden bg-[#FAFAFA]">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2DA3DB]/5 via-transparent to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2DA3DB]/20 bg-[#2DA3DB]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1A3A6F] mb-6">
            <Activity size={14} className="text-[#2DA3DB]" />
            Vision dashboard
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1F26] tracking-tight">
            Momentum We’re Building <span className="text-[#2DA3DB]">Right Now</span>
          </h2>
          <p className="mt-6 text-lg text-[#6E7787] max-w-3xl mx-auto leading-relaxed">
            These are the milestones and targets guiding our upcoming launches—transparent goals we’re tracking day by day.
          </p>
        </div>

        <div className="-mx-6 xl:mx-0">
          <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 sm:pb-6 xl:hidden">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 snap-center overflow-hidden rounded-3xl border border-[#D9E4F2] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2DA3DB]/30 hover:shadow-xl hover:shadow-[#1A3A6F]/5 w-72 sm:w-80"
              >
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1A3A6F] text-white shadow-lg shadow-[#1A3A6F]/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2DA3DB]">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black text-[#1C1F26] mb-2 tracking-tight">
                    {stat.number}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#2DA3DB] mb-4">
                    {stat.label}
                  </h3>
                  <p className="text-[#6E7787] text-sm leading-relaxed mb-6">
                    {stat.description}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-2 rounded-full bg-[#FAFAFA] border border-[#D9E4F2] px-3 py-1.5 text-xs font-semibold text-[#1A3A6F]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2DA3DB] animate-pulse" />
                    {stat.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden xl:grid xl:grid-cols-4 xl:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-[#D9E4F2] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2DA3DB]/30 hover:shadow-xl hover:shadow-[#1A3A6F]/5"
              >
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1A3A6F] text-white shadow-lg shadow-[#1A3A6F]/20 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2DA3DB]">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black text-[#1C1F26] mb-2 tracking-tight">
                    {stat.number}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#2DA3DB] mb-4">
                    {stat.label}
                  </h3>
                  <p className="text-[#6E7787] text-sm leading-relaxed mb-6">
                    {stat.description}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-2 rounded-full bg-[#FAFAFA] border border-[#D9E4F2] px-3 py-1.5 text-xs font-semibold text-[#1A3A6F]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2DA3DB] animate-pulse" />
                    {stat.detail}
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

export default Stats;
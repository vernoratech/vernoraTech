// import React from 'react';
// import { FaReact } from "react-icons/fa";
// import { TbBrandNextjs } from "react-icons/tb";
// import { TbBrandTypescript } from "react-icons/tb";
// import { SiFlutter } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
// import { IoLogoPython } from "react-icons/io5";
// import { SiExpress } from "react-icons/si";
// import { SiFastapi } from "react-icons/si";
// import { BiLogoSpringBoot } from "react-icons/bi";
// import { SiMongodb } from "react-icons/si";
// import { SiMysql } from "react-icons/si";
// import { DiRedis } from "react-icons/di";



// const Technologies = () => {
  // const techCategories = [
  //   {
  //     category: 'Frontend',
  //     description: 'Enterprise-grade interfaces, design systems, and micro-frontends built for performance and accessibility.',
  //     technologies: [
  //       { name: 'React', icon: <FaReact className='text-blue-800'/>, level: 'Expert' },
  //       { name: 'Next.js', icon: <TbBrandNextjs/>, level: 'Expert' },
  //       { name: 'TypeScript', icon: <TbBrandTypescript/>, level: 'Expert' },
  //       { name: 'Flutter', icon: <SiFlutter/>, level: 'Advanced' }
  //     ]
  //   },
  //   {
  //     category: 'Backend',
  //     description: 'Robust APIs, serverless workloads, and event-driven architectures powering secure, scalable products.',
  //     technologies: [
  //       { name: 'Node.js', icon: <FaNodeJs className='text-green-800'/>, level: 'Expert' },
  //       { name: 'Python', icon: <IoLogoPython className='text-blue-600'/>, level: 'Advanced' },
  //       { name: 'Express.js', icon: <SiExpress className='text-green-600'/>, level: 'Expert' },
  //       { name: 'FastAPI', icon: <SiFastapi className='text-[#009184]'/>, level: 'Advanced' },
  //       { name: 'Spring Boot', icon: <BiLogoSpringBoot className='text-blue-600'/>, level: 'Advanced' }
  //     ]
  //   },
  //   {
  //     category: 'Database',
  //     description: 'High-availability data solutions with tuned queries, replication strategies, and observability baked in.',
  //     technologies: [
  //       { name: 'MongoDB', icon: <SiMongodb className='text-green-800'/>, level: 'Advanced' },
  //       { name: 'MySQL', icon: <SiMysql className='text-blue-600'/>, level: 'Advanced' },
  //       { name: 'Redis', icon: <DiRedis className='text-blue-600'/>, level: 'Advanced' }
  //     ]
  //   }
  // ];

//   const capabilityHighlights = [
//     {
//       title: 'Modern engineering stack',
//       summary: 'Composable architecture patterns that balance rapid delivery with long-term maintainability.',
//       icon: '🧩'
//     },
//     {
//       title: 'Production-grade delivery',
//       summary: 'Security reviews, performance budgets, and observability pillars embedded in every release cycle.',
//       icon: '🚀'
//     },
//     {
//       title: 'Co-creation with your team',
//       summary: 'Pairing sessions, code reviews, and transparent documentation to empower in-house squads.',
//       icon: '🤝'
//     }
//   ];

//   const coreStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'FastAPI', 'Redis', 'Spring Boot', 'Flutter', 'MongoDB', 'MySQL'];

//   const levelToPercent = {
//     Expert: 100,
//     Advanced: 80,
//     Intermediate: 60
//   };

//   const getLevelColor = (level) => {
//     switch (level) {
//       case 'Expert': return 'bg-emerald-50 text-[#6E7787] border-emerald-200';
//       case 'Advanced': return 'bg-blue-50 text-[#6E7787] border-blue-200';
//       case 'Intermediate': return 'bg-amber-50 text-[#6E7787] border-amber-200';
//       default: return 'bg-gray-50 text-[#6E7787] border-gray-200';
//     }
//   };

//   const handleDiscussStackClick = () => {
//     const contactSection = document.querySelector('#contact');
//     if (contactSection && contactSection.scrollIntoView) {
//       contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
//           <span className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-secondary text-white border border-secondary">
//             Full-stack craftsmanship
//           </span>
//           <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
//             Technologies We Master
//           </h2>
//           <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#6E7787] leading-relaxed">
//             We blend proven platforms with emerging tooling to ship resilient, maintainable products that can evolve with your roadmap.
//           </p>
//         </div>

//         {/* Main Content Grid */}
//         <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
//           {/* Sidebar - Stacks on top on mobile/tablet */}
//           <aside className="lg:col-span-4 space-y-6 sm:space-y-8">
//             {/* Partnership Card */}
//             <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
//               <h3 className="text-xl sm:text-2xl font-bold text-[#6E7787]">How We Partner</h3>
//               <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#6E7787] leading-relaxed">
//                 A pragmatic, delivery-driven model that keeps codebases future-ready while giving stakeholders complete visibility.
//               </p>
//               <div className="mt-6 space-y-4 sm:space-y-5">
//                 {capabilityHighlights.map((item, index) => (
//                   <div key={index} className="flex gap-3 sm:gap-4">
//                     <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl">
//                       {item.icon}
//                     </div>
//                     <div className="min-w-0">
//                       <p className="font-semibold text-sm sm:text-base text-[#6E7787]">{item.title}</p>
//                       <p className="mt-1 text-xs sm:text-sm text-[#6E7787] leading-relaxed">{item.summary}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Core Stack Card */}
//             <div className="bg-slate-900 border-slate-800 border-2 rounded-2xl p-6 sm:p-8 shadow-sm">
//               <h4 className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#D9E4F2]">Core Stack</h4>
//               <div className="mt-4 sm:mt-5 flex flex-wrap gap-2 sm:gap-3">
//                 {coreStack.map((item, index) => (
//                   <span
//                     key={index}
//                     className="inline-flex items-center rounded-lg bg-slate-800 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white border border-slate-700"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </aside>

//           {/* Main Technology Cards */}
//           <div className="lg:col-span-8 space-y-6 sm:space-y-8">
//             {techCategories.map((category, index) => (
//               <div key={index} className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
//                 {/* Category Header */}
//                 <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between mb-6 sm:mb-8">
//                   <div>
//                     <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#6E7787]">
//                       {category.category}
//                     </p>
//                     <h3 className="mt-1 sm:mt-2 text-lg sm:text-xl lg:text-2xl font-bold text-[#6E7787] leading-tight">
//                       {category.description}
//                     </h3>
//                   </div>
//                   <span className="inline-flex items-center self-start md:self-auto rounded-full bg-slate-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 border border-slate-200 whitespace-nowrap">
//                     {category.technologies.length} core tools
//                   </span>
//                 </div>

//                 {/* Technology Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
//                   {category.technologies.map((tech, techIndex) => (
//                     <div
//                       key={techIndex}
//                       className="group relative rounded-xl border-2 border-slate-200 bg-slate-50 p-4 sm:p-5 transition-all duration-200 hover:border-blue-300 hover:shadow-md"
//                     >
//                       {/* Tech Header */}
//                       <div className="flex items-start justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
//                         <div className="flex items-center gap-2 sm:gap-3 min-w-0">
//                           <span className="text-xl sm:text-2xl shrink-0">{tech.icon}</span>
//                           <span className="text-base sm:text-lg font-bold text-[#6E7787] truncate">{tech.name}</span>
//                         </div>
//                         <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold border shrink-0 ${getLevelColor(tech.level)}`}>
//                           {tech.level}
//                         </span>
//                       </div>

//                       {/* Progress Bar */}
//                       <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
//                         <div
//                           className="h-full rounded-full bg-primary transition-all duration-300"
//                           style={{ width: `${levelToPercent[tech.level] || 50}%` }}
//                         />
//                       </div>

//                       {/* Capability Label */}
//                       <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#6E7787]">
//                         Capability depth
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom CTA Card */}
//         <div className="mt-12 sm:mt-16 lg:mt-20 rounded-2xl border-2 border-[#D9E4F2] bg-gradient-to-br from-[#FAFAFA] to-[#D9E4F2] p-6 sm:p-8 lg:p-10 text-center shadow-sm">
//           <h3 className="text-xl sm:text-2xl font-bold text-[#6E7787]">Evaluating a New Toolchain?</h3>
//           <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#6E7787] leading-relaxed max-w-2xl mx-auto">
//             We assess fit-for-purpose technologies, provide comparative analysis, and co-create adoption roadmaps tailored to your delivery timelines.
//           </p>
//           <button onClick={handleDiscussStackClick} className="btn-primary bg-gradient-to-br from-[#FAFAFA] to-[#D9E4F2] text-[#6E7787] mt-4">
//             Let's discuss your stack
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Technologies;



import React, { useEffect } from 'react';
import { Puzzle, Rocket, Handshake } from 'lucide-react';

import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { DiRedis } from "react-icons/di";

const Technologies = () => {
const techCategories = [
    {
      category: 'Frontend',
      description: 'Enterprise-grade interfaces, design systems, and micro-frontends built for performance and accessibility.',
      technologies: [
        { name: 'React', icon: <FaReact className='text-blue-800'/>, level: 'Expert' },
        { name: 'Next.js', icon: <TbBrandNextjs/>, level: 'Expert' },
        { name: 'TypeScript', icon: <TbBrandTypescript/>, level: 'Expert' },
        { name: 'Flutter', icon: <SiFlutter/>, level: 'Advanced' }
      ]
    },
    {
      category: 'Backend',
      description: 'Robust APIs, serverless workloads, and event-driven architectures powering secure, scalable products.',
      technologies: [
        { name: 'Node.js', icon: <FaNodeJs className='text-green-800'/>, level: 'Expert' },
        { name: 'Python', icon: <IoLogoPython className='text-blue-600'/>, level: 'Advanced' },
        { name: 'Express.js', icon: <SiExpress className='text-green-600'/>, level: 'Expert' },
        { name: 'FastAPI', icon: <SiFastapi className='text-[#009184]'/>, level: 'Advanced' },
        { name: 'Spring Boot', icon: <BiLogoSpringBoot className='text-blue-600'/>, level: 'Advanced' }
      ]
    },
    {
      category: 'Database',
      description: 'High-availability data solutions with tuned queries, replication strategies, and observability baked in.',
      technologies: [
        { name: 'MongoDB', icon: <SiMongodb className='text-green-800'/>, level: 'Advanced' },
        { name: 'MySQL', icon: <SiMysql className='text-blue-600'/>, level: 'Advanced' },
        { name: 'Redis', icon: <DiRedis className='text-blue-600'/>, level: 'Advanced' }
      ]
    }
  ];


  const capabilityHighlights = [
    {
      title: 'Modern engineering stack',
      summary: 'Composable architecture patterns that balance rapid delivery with long-term maintainability.',
      icon: <Puzzle size={24} className="text-[#1A3A6F]" />
    },
    {
      title: 'Production-grade delivery',
      summary: 'Security reviews, performance budgets, and observability pillars embedded in every release cycle.',
      icon: <Rocket size={24} className="text-[#1A3A6F]" />
    },
    {
      title: 'Co-creation with your team',
      summary: 'Pairing sessions, code reviews, and transparent documentation to empower in-house squads.',
      icon: <Handshake size={24} className="text-[#1A3A6F]" />
    }
  ];

  const coreStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'FastAPI', 'Redis', 'Spring Boot', 'Flutter', 'MongoDB', 'MySQL'];

  const levelToPercent = {
    Expert: 100,
    Advanced: 80,
    Intermediate: 60
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-emerald-50 text-[#6E7787] border-emerald-200';
      case 'Advanced': return 'bg-blue-50 text-[#6E7787] border-blue-200';
      case 'Intermediate': return 'bg-amber-50 text-[#6E7787] border-amber-200';
      default: return 'bg-gray-50 text-[#6E7787] border-gray-200';
    }
  };

  const handleDiscussStackClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection && contactSection.scrollIntoView) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section className="relative min-h-screen py-12 mt-16 sm:py-16 md:py-20 lg:py-24 bg-[#FAFAFA] text-[#1C1F26]">
      
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#D9E4F2]/40 via-[#FAFAFA] to-[#FAFAFA]" />
          <div className="absolute left-1/2 top-[-100px] -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#2DA3DB]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <span className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#2DA3DB] text-white border border-[#2DA3DB]/20 shadow-sm">
            Full-stack craftsmanship
          </span>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A3A6F]">
            Technologies We Master
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#6E7787] leading-relaxed">
            We blend proven platforms with emerging tooling to ship resilient, maintainable products that can evolve with your roadmap.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
          
          {/* Sidebar - Stacks on top on mobile/tablet */}
          <aside className="lg:col-span-4 space-y-6 sm:space-y-8">
            
            {/* Partnership Card */}
            <div className="bg-white border border-[#D9E4F2] rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A3A6F]">How We Partner</h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#6E7787] leading-relaxed">
                A pragmatic, delivery-driven model that keeps codebases future-ready while giving stakeholders complete visibility.
              </p>
              <div className="mt-8 space-y-6">
                {capabilityHighlights.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D9E4F2]/50 text-2xl border border-[#D9E4F2]">
                      {item.icon}
                    </div>
                    <div className="min-w-0 pt-1">
                      <p className="font-semibold text-sm sm:text-base text-[#1C1F26]">{item.title}</p>
                      <p className="mt-1 text-xs sm:text-sm text-[#6E7787] leading-relaxed">{item.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Stack Card */}
            <div className="bg-[#1A3A6F] border-[#1A3A6F] border rounded-3xl p-6 sm:p-8 shadow-lg shadow-[#1A3A6F]/20 relative overflow-hidden">
               {/* Decorative Circle in bg of card */}
               <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-[#2DA3DB] blur-3xl opacity-20 pointer-events-none"></div>

              <h4 className="text-xs sm:text-sm uppercase tracking-wider font-bold text-[#2DA3DB] mb-6">Core Stack</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3 relative z-10">
                {coreStack.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-lg bg-[#1C1F26]/30 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white border border-white/10 hover:bg-[#2DA3DB]/20 hover:border-[#2DA3DB]/50 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Technology Cards */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {techCategories.map((category, index) => (
              <div key={index} className="bg-white border border-[#D9E4F2] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Category Header */}
                <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-center md:justify-between mb-8 sm:mb-10 border-b border-[#D9E4F2]/60 pb-6">
                  <div>
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#2DA3DB] mb-2">
                      {category.category}
                    </p>
                    <h3 className="text-lg sm:text-xl font-medium text-[#6E7787] leading-relaxed max-w-2xl">
                      {category.description}
                    </h3>
                  </div>
                </div>

                {/* Technology Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group relative rounded-2xl border border-[#D9E4F2] bg-[#FAFAFA] p-4 sm:p-5 transition-all duration-200 hover:border-[#2DA3DB]/50 hover:bg-white hover:shadow-lg hover:shadow-[#1A3A6F]/5"
                    >
                      {/* Tech Header */}
                      <div className="flex items-start justify-between gap-2 sm:gap-3 mb-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white border border-[#D9E4F2] shadow-sm group-hover:scale-110 transition-transform duration-300">
                             <span className="text-2xl">{tech.icon}</span>
                          </div>
                          <span className="text-base sm:text-lg font-bold text-[#1C1F26] truncate">{tech.name}</span>
                        </div>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border shrink-0 ${getLevelColor(tech.level)}`}>
                          {tech.level}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-1.5 w-full rounded-full bg-[#D9E4F2] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-[#2DA3DB] transition-all duration-500 ease-out group-hover:bg-[#1A3A6F]"
                          style={{ width: `${levelToPercent[tech.level] || 50}%` }}
                        />
                      </div>

                      {/* Capability Label */}
                      <div className="mt-3 flex justify-between items-center">
                         <p className="text-[10px] font-semibold uppercase tracking-wider text-[#6E7787]/70 group-hover:text-[#2DA3DB] transition-colors">
                            Capability depth
                        </p>
                        <span className="text-xs font-bold text-[#1A3A6F] opacity-0 group-hover:opacity-100 transition-opacity">
                            {levelToPercent[tech.level]}%
                        </span>
                      </div>
                     
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 sm:mt-16 lg:mt-20 rounded-3xl border border-[#2DA3DB]/20 bg-gradient-to-br from-[#FAFAFA] to-[#D9E4F2]/30 p-8 sm:p-10 lg:p-12 text-center shadow-lg shadow-[#1A3A6F]/5">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#1A3A6F]">Evaluating a New Toolchain?</h3>
          <p className="mt-4 text-base sm:text-lg text-[#6E7787] leading-relaxed max-w-2xl mx-auto">
            We assess fit-for-purpose technologies, provide comparative analysis, and co-create adoption roadmaps tailored to your delivery timelines.
          </p>
          <button 
            onClick={handleDiscussStackClick} 
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1A3A6F] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1A3A6F]/20 transition-all duration-200 hover:bg-[#2DA3DB] hover:shadow-[#2DA3DB]/30 hover:-translate-y-0.5 cursor-pointer"
          >
            Let's discuss your stack
          </button>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
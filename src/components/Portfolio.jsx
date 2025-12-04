import React from 'react';
import ScreenshotPlaceholder from './ScreenshotPlaceholder';
import { domains } from '../data/projects';

const Portfolio = (props) => {

  const visibleDomains = domains.slice(0, 2);

  return (
    <section id="portfolio" className="bg-gray-50 section-padding reveal-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Industries We Empower
          </h2>
          <p className="text-xl text-primary max-w-2xl mx-auto">
            Explore the domains where we've delivered measurable outcomes,
            crafted tailored journeys, and accelerated digital growth.
          </p>
        </div>

        <div className="no-scrollbar flex gap-4 overflow-x-auto px-4 pb-6 md:hidden snap-x snap-mandatory touch-pan-x scroll-smooth">
          {visibleDomains.map((domain, index) => (
            <div
              key={index}
              className="snap-center bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 reveal-up w-[85vw] min-w-[320px] max-w-sm flex-none"
              style={{ transitionDelay: `${80 + index * 60}ms` }}
            >
              <div className="p-4 h-full flex flex-col gap-5">
                <ScreenshotPlaceholder
                  label={domain.name}
                  title={`${domain.name} showcase`}
                  aspectClass="aspect-[4/3]"
                  imageSrc={domain.imageSrc}
                  className="bg-gradient-to-br from-slate-900/5 via-primary/5 to-indigo-200/10"
                />
                {/* <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">
                  {domain.name} 
                </div> */}
                <h3 className="text-xl font-semibold text-primary">
                  {domain.headline}
                </h3>
                <p className="text-primary">
                  {domain.summary}
                </p>
                <ul className="space-y-1 text-primary text-sm">
                  {domain.focusAreas.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-2">
                      <span className="text-primary leading-6">•</span>
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4 border-gray-200 text-sm text-primary font-medium">
                  {domain.results}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {visibleDomains.map((domain, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 reveal-up"
              style={{ transitionDelay: `${80 + index * 60}ms` }}
            >
              <div className="p-6 h-full flex flex-col gap-5">
                <ScreenshotPlaceholder
                  label={domain.name}
                  title={`${domain.name} showcase`}
                  aspectClass="aspect-[4/3]"
                  imageSrc={domain.imageSrc}
                  className="bg-gradient-to-br from-slate-900/5 via-primary/5 to-indigo-200/10"
                />
                {/* <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">
                  {domain.name}
                </div> */}
                <h3 className="text-xl font-semibold text-primary">
                  {domain.headline}
                </h3>
                <p className="text-primary flex-1">
                  {domain.summary}
                </p>
                <ul className="space-y-1 text-primary text-sm">
                  {domain.focusAreas.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-2">
                      <span className="text-primary leading-6">•</span>
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-200 text-sm text-primary font-medium">
                  {domain.results}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <button
            onClick={props.onSeeAllProjects}
            className="btn-secondary w-full md:w-auto"
          >
            Explore All Domains
          </button>
          <a href="#contact" className="btn-primary w-full md:w-auto">
            Start Your Domain Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

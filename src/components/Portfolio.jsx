import React from 'react';
import ScreenshotPlaceholder from './ScreenshotPlaceholder';
import { domains } from '../data/projects';

const Portfolio = (props) => {

  const visibleDomains = domains.slice(0, 4);

  return (
    <section id="portfolio" className="bg-gray-50 section-padding reveal-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Empower
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the domains where we've delivered measurable outcomes,
            crafted tailored journeys, and accelerated digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {visibleDomains.map((domain, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 reveal-up"
              style={{ transitionDelay: `${80 + index * 60}ms` }}
            >
              <div className="p-6 h-full flex flex-col gap-5">
                {/* <ScreenshotPlaceholder
                  label={domain.name}
                  title={`${domain.name} showcase`}
                  aspectClass="aspect-[4/3]"
                  className="bg-gradient-to-br from-slate-900/5 via-primary/5 to-indigo-200/10"
                /> */}
                <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">
                  {domain.name}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {domain.headline}
                </h3>
                <p className="text-gray-600 mb-4 flex-1">
                  {domain.summary}
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {domain.focusAreas.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-2">
                      <span className="text-primary leading-6">•</span>
                      <span className="leading-6">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100 text-sm text-gray-500 font-medium">
                  {domain.results}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex items-center justify-center gap-4">
          <button
            onClick={props.onSeeAllProjects}
            className="btn-secondary"
          >
            Explore All Domains
          </button>
          <a href="#contact" className="btn-primary">
            Start Your Domain Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

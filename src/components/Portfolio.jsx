import React from 'react';
import { projects } from '../data/projects';

const Portfolio = (props) => {

  const visibleProjects = projects.slice(0, 4);

  return (
    <section id="portfolio" className="bg-gray-50 section-padding reveal-up">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent work and see how we've helped
            businesses like yours succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {visibleProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 reveal-up" style={{ transitionDelay: `${80 + index * 60}ms` }}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex items-center justify-center gap-4">
          <button
            onClick={props.onSeeAllProjects}
            className="btn-secondary"
          >
            See All Projects
          </button>
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

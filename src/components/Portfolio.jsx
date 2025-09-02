import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Sharma & Associates CA',
      category: 'Chartered Accountant',
      image: 'https://d3h2k7ug3o5pb3.cloudfront.net/image/2020-12-05/b3a6ac30-36b4-11eb-a219-73e9ca8fa2ef.jpg',
      description: 'Professional website with client portal and service showcase'
    },
    {
      title: 'BuildRight Construction',
      category: 'Construction',
      image: 'https://contentwriterireland.ie/wp-content/uploads/2021/11/5e5a34_77ddeffbc8da4613a26e2388b5be98d2_mv2.png',
      description: 'Modern construction website with project gallery'
    },
    {
      title: 'Legal Solutions',
      category: 'Legal Services',
      image: 'https://www.apexure.com/uploads/Group%207295.webp',
      description: 'Professional law firm website with case studies'
    },
    {
      title: 'MediCare Clinic',
      category: 'Healthcare',
      image: 'https://www.wordstream.com/wp-content/uploads/2022/09/b2b-website-design-examples-hunch.png',
      description: 'Healthcare website with appointment booking system'
    }
  ];

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
          {projects.map((project, index) => (
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

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

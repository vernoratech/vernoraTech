import React from 'react';

const Awards = () => {
  const awards = [
    {
      title: 'Best Web Development Company 2024',
      organization: 'Tech Awards Global',
      year: '2024',
      icon: '🏆',
      description: 'Recognized for excellence in web development and innovation',
      category: 'Industry Recognition'
    },
    {
      title: 'Google Partner Certification',
      organization: 'Google',
      year: '2023',
      icon: '🔍',
      description: 'Certified partner for Google Cloud Platform and development services',
      category: 'Partnership'
    },
    {
      title: 'AWS Advanced Consulting Partner',
      organization: 'Amazon Web Services',
      year: '2023',
      icon: '☁️',
      description: 'Advanced tier partner for cloud solutions and infrastructure',
      category: 'Partnership'
    },
    {
      title: 'ISO 27001 Certified',
      organization: 'International Standards Organization',
      year: '2023',
      icon: '🛡️',
      description: 'Information security management system certification',
      category: 'Security'
    },
    {
      title: 'Top 100 Digital Agencies',
      organization: 'Digital Agency Network',
      year: '2023',
      icon: '💯',
      description: 'Ranked among the top digital agencies worldwide',
      category: 'Industry Recognition'
    },
    {
      title: 'Microsoft Gold Partner',
      organization: 'Microsoft',
      year: '2022',
      icon: '🪟',
      description: 'Gold level partnership for Microsoft technologies and solutions',
      category: 'Partnership'
    }
  ];

  const certifications = [
    {
      name: 'React Certified Developer',
      issuer: 'Meta',
      icon: '⚛️',
      validUntil: '2025'
    },
    {
      name: 'AWS Solutions Architect',
      issuer: 'Amazon',
      icon: '☁️',
      validUntil: '2025'
    },
    {
      name: 'Google Cloud Professional',
      issuer: 'Google',
      icon: '🔍',
      validUntil: '2024'
    },
    {
      name: 'Certified Scrum Master',
      issuer: 'Scrum Alliance',
      icon: '📋',
      validUntil: '2024'
    }
  ];

  const milestones = [
    {
      year: '2024',
      achievement: 'Reached 500+ successful projects',
      icon: '🚀'
    },
    {
      year: '2023',
      achievement: 'Expanded to 3 new countries',
      icon: '🌍'
    },
    {
      year: '2022',
      achievement: 'Launched AI-powered development tools',
      icon: '🤖'
    },
    {
      year: '2021',
      achievement: 'Achieved 100% client satisfaction',
      icon: '💯'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and organizations worldwide.
          </p>
        </div> */}

        {/* Awards Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">{award.icon}</div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                  {award.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                {award.title}
              </h3>

              <p className="text-gray-600 text-sm mb-3 text-center">
                {award.description}
              </p>

              <div className="text-center">
                <p className="font-semibold text-gray-900">{award.organization}</p>
                <p className="text-blue-600 font-bold">{award.year}</p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Certifications Section */}
        {/* <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-4xl mb-3">{cert.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                <p className="text-blue-600 text-sm font-medium">Valid until {cert.validUntil}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Milestones Timeline */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Company Milestones
          </h3>
          <div className="relative">
           
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                >
                 
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                  
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                      <div className="text-3xl mb-3">{milestone.icon}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.year}</h4>
                      <p className="text-gray-600">{milestone.achievement}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* CTA Section */}
        {/* <div className="text-center">
          <div className="bg-gradient-to-r from-[#1A3A6F] to-[#1A3A6F] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work with an Award-Winning Team?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join the ranks of our satisfied clients and experience the quality that has earned us industry recognition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                View Our Work
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Awards;

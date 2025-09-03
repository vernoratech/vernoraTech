import React from 'react';

const Technologies = () => {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: '⚛️', level: 'Expert' },
        { name: 'Vue.js', icon: '💚', level: 'Advanced' },
        { name: 'Angular', icon: '🅰️', level: 'Advanced' },
        { name: 'Next.js', icon: '⚡', level: 'Expert' },
        { name: 'TypeScript', icon: '📘', level: 'Expert' }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Node.js', icon: '🟢', level: 'Expert' },
        { name: 'Python', icon: '🐍', level: 'Advanced' },
        // { name: 'PHP', icon: '🐘', level: 'Advanced' },
        // { name: 'Laravel', icon: '🔥', level: 'Expert' },
        { name: 'Express.js', icon: '🚂', level: 'Expert' }
      ]
    },
    {
      category: 'Database',
      technologies: [
        { name: 'MongoDB', icon: '🍃', level: 'Advanced' },
        // { name: 'PostgreSQL', icon: '🐘', level: 'Expert' },
        { name: 'MySQL', icon: '🐬', level: 'Advanced' },
        { name: 'Redis', icon: '🔴', level: 'Intermediate' }
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

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'text-green-600 bg-green-100';
      case 'Advanced': return 'text-blue-600 bg-blue-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technologies We Master
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stay ahead of the curve with cutting-edge technologies to deliver modern, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-medium text-gray-900">{tech.name}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(tech.level)}`}>
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Always learning, always growing
          </p>
          <div className="flex justify-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span className="text-2xl">💡</span>
            <span className="text-2xl">🔧</span>
            <span className="text-2xl">⚡</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

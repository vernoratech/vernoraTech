import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Lead Frontend Developer',
      expertise: 'React, Vue.js, UI/UX',
      experience: '8+ years',
      avatar: '👩‍💻',
      description: 'Passionate about creating beautiful, responsive user interfaces that users love.',
      skills: ['React', 'Vue.js', 'TypeScript', 'Figma']
    },
    {
      name: 'Michael Chen',
      role: 'Backend Architect',
      expertise: 'Node.js, Python, Cloud',
      experience: '10+ years',
      avatar: '👨‍💻',
      description: 'Expert in building scalable backend systems and cloud infrastructure.',
      skills: ['Node.js', 'Python', 'AWS', 'Docker']
    },
    {
      name: 'Emily Rodriguez',
      role: 'UI/UX Designer',
      expertise: 'Design Systems, Prototyping',
      experience: '6+ years',
      avatar: '🎨',
      description: 'Creating intuitive and engaging user experiences through thoughtful design.',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      expertise: 'CI/CD, Infrastructure',
      experience: '7+ years',
      avatar: '⚙️',
      description: 'Ensuring smooth deployments and reliable infrastructure for all projects.',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS']
    },
    {
      name: 'Lisa Thompson',
      role: 'Project Manager',
      expertise: 'Agile, Client Relations',
      experience: '9+ years',
      avatar: '📋',
      description: 'Keeping projects on track and clients happy through excellent communication.',
      skills: ['Agile', 'Scrum', 'Client Relations', 'Risk Management']
    },
    {
      name: 'Alex Morgan',
      role: 'Full Stack Developer',
      expertise: 'React, Node.js, Database',
      experience: '5+ years',
      avatar: '🚀',
      description: 'Versatile developer who can handle both frontend and backend challenges.',
      skills: ['React', 'Node.js', 'PostgreSQL', 'MongoDB']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Amazing Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a diverse group of passionate professionals dedicated to creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-1">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {member.expertise} • {member.experience}
                </p>
              </div>

              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {member.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              We're always looking for talented individuals who are passionate about technology and innovation.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 cursor-not-allowed">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 reveal-up">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center reveal-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Landing Pages for
            <span className="text-primary"> Service Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We create high-converting landing pages for CAs, Construction Companies,
            and Professional Services. Boost your online presence and get more clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#portfolio" className="btn-primary">
              View Our Work
            </a>
            <a href="#contact" className="btn-secondary">
              Start Your Project
            </a>
          </div>
        </div>

        {/* Hero Image/Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center reveal-up" style={{ transitionDelay: '80ms' }}>
            <div className="text-4xl font-bold text-primary">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center reveal-up" style={{ transitionDelay: '140ms' }}>
            <div className="text-4xl font-bold text-primary">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center reveal-up" style={{ transitionDelay: '200ms' }}>
            <div className="text-4xl font-bold text-primary">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

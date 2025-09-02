import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white section-padding reveal-up">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About VesnoraTech
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're a dedicated team of web designers and developers specializing in
              creating professional websites for service-based businesses. With years
              of experience in the industry, we understand what it takes to create
              websites that not only look great but also convert visitors into clients.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to help small and medium-sized businesses establish a
              strong online presence through custom-designed websites that reflect
              their professionalism and expertise.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Our Expertise</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Web Design & Development</li>
                  <li>• SEO Optimization</li>
                  <li>• Mobile Responsiveness</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Industries</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Chartered Accountants</li>
                  <li>• Construction</li>
                  <li>• Legal Services</li>
                  <li>• Healthcare</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg reveal-up" style={{ transitionDelay: '140ms' }}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose Us?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-accent text-xl mr-3">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Custom Design</h4>
                  <p className="text-gray-600">Tailored to your brand and industry</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-accent text-xl mr-3">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                  <p className="text-gray-600">Quick turnaround times</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-accent text-xl mr-3">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Ongoing Support</h4>
                  <p className="text-gray-600">We're here when you need us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

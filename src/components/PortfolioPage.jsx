import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { projects } from '../data/projects';

const PortfolioPage = (props) => {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-20">
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="mb-6">
                <button
                  onClick={props.onBackToHome}
                  className="inline-flex items-center text-white hover:text-primary-dark font-medium transition-colors duration-200 cursor-pointer px-8 py-3 bg-blue-500 rounded-md"
                >
                  ← Back to Home
                </button>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Our Complete Portfolio
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our diverse collection of successful projects across various industries.
                Each project represents our commitment to quality, innovation, and client success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="text-primary hover:text-primary-dark font-medium transition-colors duration-200">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <button
                onClick={props.onBackToHome}
                className="inline-flex items-center text-white hover:text-primary-dark font-medium transition-colors duration-200 cursor-pointer px-8 py-3 bg-blue-500 rounded-md"
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;

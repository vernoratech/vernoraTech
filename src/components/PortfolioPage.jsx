import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { domains } from '../data/projects';

const PortfolioPage = (props) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

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
                Domains We Power End-to-End
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the industries where we've delivered measurable transformation.
                Each domain highlights the depth of strategy, design, and technology we bring to the table.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {domains.map((domain, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {domain.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {domain.headline}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {domain.summary}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <ul className="space-y-2 text-gray-600 text-sm">
                        {domain.focusAreas.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex gap-2">
                            <span className="text-primary leading-6">•</span>
                            <span className="leading-6">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="text-sm text-gray-500 font-medium mt-4">
                        {domain.results}
                      </div>
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

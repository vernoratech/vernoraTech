import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import PortfolioPage from './components/PortfolioPage';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Stats from './components/Stats';
import Technologies from './components/Technologies';
import Team from './components/Team';
import ClientShowcase from './components/ClientShowcase';
import BlogInsights from './components/BlogInsights';
import Awards from './components/Awards';

function App() {
  const [isTermsOpen, setIsTermsOpen] = React.useState(false);
  const [activePlan, setActivePlan] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState('home');

  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPage(path === '/portfolio' ? 'portfolio' : 'home');
    };

    // Set initial page
    const path = window.location.pathname;
    setCurrentPage(path === '/portfolio' ? 'portfolio' : 'home');

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToPortfolio = () => {
    window.history.pushState({}, '', '/portfolio');
    setCurrentPage('portfolio');
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPage('home');
  };

  const openTerms = (plan) => {
    setActivePlan(plan);
    setIsTermsOpen(true);
  };

  const closeTerms = () => {
    setIsTermsOpen(false);
    setActivePlan(null);
  };

  const goToContact = (event) => {
    if (event) event.preventDefault();
    closeTerms();
    setTimeout(() => {
      const contactEl = document.querySelector('#contact');
      if (contactEl && contactEl.scrollIntoView) {
        contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.hash = '#contact';
      }
    }, 50);
  };

  React.useEffect(() => {
    if (isTermsOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isTermsOpen]);

  return (
    <div className="App">
      {currentPage === 'portfolio' ? (
        <PortfolioPage onBackToHome={navigateToHome} />
      ) : (
        <>
          <Header />
          <Hero />
          <Stats />
          <Services />
          <Technologies />
          <Process />
          <Portfolio onSeeAllProjects={navigateToPortfolio} />
          {/* <Team /> */}
          <ClientShowcase />
          <Pricing onTermsClick={openTerms} />
          <Testimonials />
          <Awards />
          <BlogInsights />
          <FAQ />
          <About />
          <Contact />
          <Footer />
        </>
      )}

      {isTermsOpen && activePlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto" onClick={closeTerms} />
          <div className="relative bg-white rounded-lg shadow-xl w-11/12 max-w-2xl p-6 pointer-events-auto">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900">{activePlan.name} — Terms & Conditions</h4>
                <p className="text-xs text-gray-500">Prices shown don’t include applicable tax.</p>
              </div>
              <button
                aria-label="Close"
                className="ml-4 text-gray-400 hover:text-gray-700"
                onClick={closeTerms}
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              {activePlan.terms && activePlan.terms.map((section, i) => (
                <div key={i}>
                  <h5 className="text-sm font-semibold text-gray-800 mb-1">{section.title}</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-end gap-3">
              <button className="btn-secondary" onClick={closeTerms}>Close</button>
              <a href="#contact" className="btn-primary" onClick={goToContact}>Contact us</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

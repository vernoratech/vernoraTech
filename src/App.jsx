import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import PortfolioPage from './components/PortfolioPage';
import BlogPage from './components/BlogPage';
import CaseStudiesPage from './components/CaseStudiesPage';
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
  const [currentBlogId, setCurrentBlogId] = React.useState(null);
  const homeScrollPosRef = React.useRef(0);

  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/blog/')) {
        const blogId = path.replace('/blog/', '');
        setCurrentBlogId(blogId);
        setCurrentPage('blog');
      } else if (path === '/case-studies') {
        setCurrentPage('caseStudies');
      } else if (path === '/portfolio') {
        homeScrollPosRef.current = window.scrollY || 0;
        setCurrentPage('portfolio');
      } else {
        setCurrentPage('home');
      }
    };

    const path = window.location.pathname;
    if (path.startsWith('/blog/')) {
      const blogId = path.replace('/blog/', '');
      setCurrentBlogId(blogId);
      setCurrentPage('blog');
    } else if (path === '/case-studies') {
      setCurrentPage('caseStudies');
    } else if (path === '/portfolio') {
      homeScrollPosRef.current = window.scrollY || 0;
      setCurrentPage('portfolio');
    } else {
      setCurrentPage('home');
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  React.useEffect(() => {
    if (currentPage === 'home') {
      window.scrollTo({ top: homeScrollPosRef.current, behavior: 'auto' });
    }
  }, [currentPage]);

  const navigateToPortfolio = () => {
    homeScrollPosRef.current = window.scrollY || 0;
    window.history.pushState({}, '', '/portfolio');
    setCurrentPage('portfolio');
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPage('home');
  };

  const navigateToBlog = (blogId) => {
    homeScrollPosRef.current = window.scrollY || 0;
    window.history.pushState({}, '', `/blog/${blogId}`);
    setCurrentBlogId(blogId);
    setCurrentPage('blog');
  };

  const navigateToCaseStudies = () => {
    homeScrollPosRef.current = window.scrollY || 0;
    window.history.pushState({}, '', '/case-studies');
    setCurrentPage('caseStudies');
  };

  const navigateToContactSection = () => {
    const scrollToContact = () => {
      const contactEl = document.querySelector('#contact');
      if (contactEl && contactEl.scrollIntoView) {
        contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.hash = '#contact';
      }
    };

    if (currentPage !== 'home') {
      homeScrollPosRef.current = 0;
      window.history.pushState({}, '', '/');
      setCurrentPage('home');
      setTimeout(scrollToContact, 120);
    } else {
      scrollToContact();
    }
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
    setTimeout(navigateToContactSection, 50);
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
      ) : currentPage === 'blog' ? (
        <BlogPage blogId={currentBlogId} onBackToHome={navigateToHome} onNavigateToBlog={navigateToBlog} />
      ) : currentPage === 'caseStudies' ? (
        <CaseStudiesPage onBackToHome={navigateToHome} />
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
          <ClientShowcase onStartProject={navigateToContactSection} onViewCaseStudies={navigateToCaseStudies} />
          <Pricing onTermsClick={openTerms} />
          <Testimonials />
          <Awards />
          <BlogInsights onReadBlog={navigateToBlog} />
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

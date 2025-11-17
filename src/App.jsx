import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import BuildProcess from './components/BuildProcess';
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
import WelcomePopup from './components/WelcomePopup';

function App() {
  const [isTermsOpen, setIsTermsOpen] = React.useState(false);
  const [activePlan, setActivePlan] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState('home');
  const [currentBlogId, setCurrentBlogId] = React.useState(null);
  const [isWelcomeOpen, setIsWelcomeOpen] = React.useState(false);
  const homeScrollPosRef = React.useRef(0);
  const welcomeResetTimerRef = React.useRef(null);

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

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const hasSeen = window.localStorage.getItem('vernoratech_welcome_seen');

    if (!hasSeen) {
      const timer = window.setTimeout(() => {
        setIsWelcomeOpen(true);
      }, 3000);

      return () => window.clearTimeout(timer);
    }

    setIsWelcomeOpen(false);
    return undefined;
  }, []);

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

  const markWelcomeSeen = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('vernoratech_welcome_seen', 'true');
      if (welcomeResetTimerRef.current) {
        window.clearTimeout(welcomeResetTimerRef.current);
      }
      welcomeResetTimerRef.current = window.setTimeout(() => {
        window.localStorage.removeItem('vernoratech_welcome_seen');
        welcomeResetTimerRef.current = null;
      }, 5 * 60 * 1000);
    }
  };

  const closeWelcome = () => {
    markWelcomeSeen();
    setIsWelcomeOpen(false);
  };

  const startFreeBuild = () => {
    closeWelcome();
    navigateToContactSection();
  };

  React.useEffect(() => {
    if (isTermsOpen || isWelcomeOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return undefined;
  }, [isTermsOpen, isWelcomeOpen]);

  React.useEffect(() => () => {
    if (welcomeResetTimerRef.current) {
      window.clearTimeout(welcomeResetTimerRef.current);
    }
  }, []);

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
          <BuildProcess />
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

      <WelcomePopup isOpen={isWelcomeOpen} onClose={closeWelcome} onStart={startFreeBuild} />

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

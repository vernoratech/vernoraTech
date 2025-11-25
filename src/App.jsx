import React from 'react';
import { Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import PortfolioPage from './components/PortfolioPage';
import BlogPage from './components/BlogPage';
import CaseStudiesPage from './components/CaseStudiesPage';
import Footer from './components/Footer';
import WelcomePopup from './components/WelcomePopup';
import LoadingOverlay from './components/LoadingOverlay';
import Home from './components/Home';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import BlogInsights from './components/BlogInsights';

function App() {
  const [isTermsOpen, setIsTermsOpen] = React.useState(false);
  const [activePlan, setActivePlan] = React.useState(null);
  const [isWelcomeOpen, setIsWelcomeOpen] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(true);
  const [hasVisited, setHasVisited] = React.useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    return Boolean(window.localStorage.getItem('vernoratech_loader_shown'));
  });
  const homeScrollPosRef = React.useRef(0);
  const welcomeResetTimerRef = React.useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const pathName = location.pathname;
  const isBlogDetailView = pathName.startsWith('/blog/');

  React.useEffect(() => {
    if (pathName === '/') {
      window.scrollTo({ top: homeScrollPosRef.current, behavior: 'auto' });
    }
  }, [pathName]);

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    if (hasVisited) {
      setShowLoading(false);
      return undefined;
    }

    const loaderTimer = window.setTimeout(() => {
      window.localStorage.setItem('vernoratech_loader_shown', 'true');
      setHasVisited(true);
      setShowLoading(false);
    }, 1800);

    return () => window.clearTimeout(loaderTimer);
  }, [hasVisited]);

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const hasSeen = window.localStorage.getItem('vernoratech_welcome_seen');

    if (!hasSeen) {
      const timer = window.setTimeout(() => {
        setIsWelcomeOpen(true);
      }, 7000);

      return () => window.clearTimeout(timer);
    }

    setIsWelcomeOpen(false);
    return undefined;
  }, []);

  const navigateToPortfolio = () => {
    homeScrollPosRef.current = window.scrollY || 0;
    navigate('/portfolio', { state: { from: pathName } });
  };

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToBlog = (blogId) => {
    homeScrollPosRef.current = window.scrollY || 0;
    navigate(`/blog/${blogId}`, { state: { from: pathName } });
  };

  const navigateToCaseStudies = () => {
    homeScrollPosRef.current = window.scrollY || 0;
    navigate('/case-studies');
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

    if (pathName !== '/') {
      homeScrollPosRef.current = 0;
      navigate('/', { replace: false });
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

  const testRouteContent = (
    <div className="App min-h-screen flex items-center justify-center">
      <Link to="/">
        <h1 className="text-3xl font-semibold text-gray-900">Test route placeholder</h1>
      </Link>
    </div>
  );

  const BlogDetailRoute = () => {
    const { blogId } = useParams();
    return (
      <BlogPage
        blogId={blogId}
        onBackToHome={navigateToHome}
        onNavigateToBlog={navigateToBlog}
      />
    );
  };

  const homeElement = (
    <Home
      onNavigateToPortfolio={navigateToPortfolio}
      onNavigateToContactSection={navigateToContactSection}
      onNavigateToCaseStudies={navigateToCaseStudies}
      onOpenTerms={openTerms}
      onNavigateToBlog={navigateToBlog}
    />
  );

  return (
    <div className="App">
      <LoadingOverlay isVisible={showLoading} />

      {!isBlogDetailView && <Header />}

      <Routes>
        <Route path="/test" element={testRouteContent} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<BlogInsights onReadBlog={navigateToBlog} />} />
        <Route path="/blog/:blogId" element={<BlogDetailRoute />} />
        <Route path="/portfolio" element={<PortfolioPage onBackToHome={navigateToHome} />} />
        <Route path="/case-studies" element={<CaseStudiesPage onBackToHome={navigateToHome} />} />
        <Route path="/pricing" element={<Pricing onTermsClick={openTerms} />} />
        <Route path="/" element={homeElement} />
        <Route path="*" element={homeElement} />
      </Routes>

      <Footer />

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

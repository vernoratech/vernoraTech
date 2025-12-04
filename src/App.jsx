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
import New_Faq from './components/New_Faq';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Business_Website_Development from './components/ Services/Business_Website_Development';
import E_Commerce_Store_Setup from './components/ Services/E_Commerce_Store_Setup';
import Landing_Page_For_Ads from './components/ Services/Landing_Page_For_Ads';
import Booking_Appointment_System from './components/ Services/Booking_Appointment_System';
import Portfolio_Personal_Branding_Sites from './components/ Services/Portfolio_Personal_Branding_Sites';
import Fix_Slow_Website from './components/ Services/Fix_Slow_Website';
import Bug_Fixes_Feature_Enhancements from './components/ Services/Bug_Fixes_Feature_Enhancements';
import Mobile_App_Development from './components/ Services/Mobile_App_Development';
import Custom_API_Development from './components/ Services/Custom_API_Development';
import Inventory_Order_Tracking_System from './components/ Services/Inventory_Order_Tracking_System';
import Invoice_Billing_Generator from './components/ Services/Invoice_Billing_Generator';
import Client_Management_System from './components/ Services/Client_Management_System';
import Staff_Attendance_Timesheet from './components/ Services/Staff_Attendance_Timesheet';
import Custom_Dashboard_Reports from './components/ Services/Custom_Dashboard_Reports';
import Monthly_Website_Maintenance from './components/ Services/Monthly_Website_Maintenance';
import Fix_Hosting_Issues_Migration from './components/ Services/Fix_Hosting_Issues_Migration';
import Speed_Optimization from './components/ Services/Speed_Optimization';
import Malware_Cleanup_Security_Hardening from './components/ Services/Malware_Cleanup_Security_Hardening';
import Broken_Pages_Layout_Fixes from './components/ Services/Broken_Pages_Layout_Fixes';
import Small_Tasks_Support_Plan from './components/ Services/Small_Tasks_Support_Plan';
import Website_Care_Plan from './components/ Services/Website_Care_Plan';
import Plugin_Library_Upgrades from './components/ Services/Plugin_Library_Upgrades';
import Emergency_Restore_Support from './components/ Services/Emergency_Restore_Support';
import Small_Monthly_Changes from './components/ Services/Small_Monthly_Changes';
import Phase_01 from './components/Process_Roadmap_Pages/Phase_01';
import Phase_02 from './components/Process_Roadmap_Pages/Phase_02';
import Phase_03 from './components/Process_Roadmap_Pages/Phase_03';
import Phase_04 from './components/Process_Roadmap_Pages/Phase_04';
import Phase_05 from './components/Process_Roadmap_Pages/Phase_05';
import Footer_Services_Page from './components/ Services/Footer_Services_Page';

function App() {
  const [isTermsOpen, setIsTermsOpen] = React.useState(false);
  const [activePlan, setActivePlan] = React.useState(null);
  const [isWelcomeOpen, setIsWelcomeOpen] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(true);
  const [showCookieConsent, setShowCookieConsent] = React.useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    const consent = window.localStorage.getItem('vernoratech_cookie_consent');
    if (!consent) return true;
    const timestamp = parseInt(consent, 10);
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    if (Number.isNaN(timestamp) || (now - timestamp) > twentyFourHours) {
      window.localStorage.removeItem('vernoratech_cookie_consent');
      return true;
    }
    return false;
  });
  const [cookieBannerVisible, setCookieBannerVisible] = React.useState(false);
  const [hasVisited, setHasVisited] = React.useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    const stored = window.localStorage.getItem('vernoratech_loader_shown');
    if (!stored) return false;
    const timestamp = parseInt(stored, 10);
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;
    if (Number.isNaN(timestamp) || (now - timestamp) > twentyFourHours) {
      window.localStorage.removeItem('vernoratech_loader_shown');
      return false;
    }
    return true;
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
      window.localStorage.setItem('vernoratech_loader_shown', Date.now().toString());
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
    const timestamp = hasSeen ? parseInt(hasSeen, 10) : NaN;
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    const isExpired = !hasSeen || Number.isNaN(timestamp) || (now - timestamp) > twentyFourHours;

    if (isExpired) {
      if (hasSeen) {
        window.localStorage.removeItem('vernoratech_welcome_seen');
      }

      const timer = window.setTimeout(() => {
        setIsWelcomeOpen(true);
        window.localStorage.setItem('vernoratech_welcome_seen', Date.now().toString());
      }, 7000);

      return () => window.clearTimeout(timer);
    }

    setIsWelcomeOpen(false);
    return undefined;
  }, []);

  React.useEffect(() => {
    if (showCookieConsent && !showLoading) {
      const timer = setTimeout(() => setCookieBannerVisible(true), 600);
      return () => clearTimeout(timer);
    } else {
      setCookieBannerVisible(false);
    }
  }, [showCookieConsent, showLoading]);

  const handleAcceptCookies = () => {
    setCookieBannerVisible(false);
    setTimeout(() => {
      window.localStorage.setItem('vernoratech_cookie_consent', Date.now().toString());
      setShowCookieConsent(false);
    }, 300);
  };

  const handleDeclineCookies = () => {
    setCookieBannerVisible(false);
    setTimeout(() => {
      window.localStorage.setItem('vernoratech_cookie_consent', Date.now().toString());
      setShowCookieConsent(false);
    }, 300);
  };

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
      window.localStorage.setItem('vernoratech_welcome_seen', Date.now().toString());
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
      isInitialLoading={showLoading}
    />
  );

  return (
    <div className="App">
      <LoadingOverlay isVisible={showLoading} />

      {!isBlogDetailView && <Header />}

      <Routes>
        <Route path="/test" element={testRouteContent} />
        <Route path="/faq" element={<New_Faq />} />
        <Route path="/blog" element={<BlogInsights onReadBlog={navigateToBlog} />} />
        <Route path="/blog/:blogId" element={<BlogDetailRoute />} />
        <Route path="/portfolio" element={<PortfolioPage onBackToHome={navigateToHome} />} />
        <Route path="/case-studies" element={<CaseStudiesPage onBackToHome={navigateToHome} />} />
        <Route path="/pricing" element={<Pricing onTermsClick={openTerms} />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={homeElement} />
        <Route path="*" element={homeElement} />
        {/* Services routes */}
        <Route path="/services/business-website-development" element={<Business_Website_Development />} />
        <Route path="/services/ecommerce" element={<E_Commerce_Store_Setup />} />
        <Route path="/services/landing-pages" element={<Landing_Page_For_Ads />} />
        <Route path="/services/booking-system" element={<Booking_Appointment_System />} />
        <Route path="/services/portfolio-sites" element={<Portfolio_Personal_Branding_Sites />} />
        <Route path="/services/speed" element={<Fix_Slow_Website />} />
        <Route path="/services/bug-fixes" element={<Bug_Fixes_Feature_Enhancements />} />
        <Route path="/services/mobile-apps" element={<Mobile_App_Development />} />
        <Route path="/services/api-dev" element={<Custom_API_Development />} />
        <Route path="/services/inventory-system" element={<Inventory_Order_Tracking_System />} />
        <Route path="/services/invoice-tool" element={<Invoice_Billing_Generator />} />
        <Route path="/services/mini-crm" element={<Client_Management_System />} />
        <Route path="/services/timesheet" element={<Staff_Attendance_Timesheet />} />
        <Route path="/services/dashboard" element={<Custom_Dashboard_Reports />} />
        <Route path="/services/maintenance" element={<Monthly_Website_Maintenance />} />
        <Route path="/services/hosting-fix" element={<Fix_Hosting_Issues_Migration />} />
        <Route path="/services/security" element={<Malware_Cleanup_Security_Hardening />} />
        <Route path="/services/fixes" element={<Broken_Pages_Layout_Fixes />} />
        <Route path="/services/support" element={<Small_Tasks_Support_Plan />} />
        <Route path="/services/upgrades" element={<Plugin_Library_Upgrades />} />
        <Route path="/services/restore" element={<Emergency_Restore_Support />} />
        <Route path="/services/small-changes" element={<Small_Monthly_Changes />} />
        <Route path="/services/footer" element={<Footer_Services_Page />} />

        {/* Process Roadmap Routes */}
        <Route path="/process/phase-01" element={<Phase_01 />} />
        <Route path="/process/phase-02" element={<Phase_02 />} />
        <Route path="/process/phase-03" element={<Phase_03 />} />
        <Route path="/process/phase-04" element={<Phase_04 />} />
        <Route path="/process/phase-05" element={<Phase_05 />} />

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

      {showCookieConsent && (
        <div className={`fixed bottom-0 left-0 right-0 bg-[#1C1F26] text-white z-50 shadow-lg transform transition-transform duration-300 ease-out ${cookieBannerVisible ? 'translate-y-0' : 'translate-y-full'
          }`}>
          <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[#D9E4F2]/90 max-w-3xl">
              This site uses cookies to improve your user experience.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleAcceptCookies}
                className="px-3 py-1 bg-[#2DA3DB] text-white rounded font-medium text-xs hover:bg-[#1A3A6F] transition-colors"
              >
                Accept
              </button>
              <button
                onClick={handleDeclineCookies}
                className="px-3 py-1 bg-transparent text-[#D9E4F2] border border-[#D9E4F2]/30 rounded font-medium text-xs hover:bg-white/10 transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

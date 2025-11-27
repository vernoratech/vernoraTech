import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Code2,
  Database,
  Server,
  Layout,
  Cpu,
  ChevronRight
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [animateDrawer, setAnimateDrawer] = useState(false);

  // Handle auto-unmount after close animation
  useEffect(() => {
    if (isMenuOpen) {
      // Step 1: Mount drawer
      setDrawerVisible(true);

      // Step 2: After mount → trigger open animation
      requestAnimationFrame(() => {
        setAnimateDrawer(true);
      });

    } else {
      // Step 1: Start closing animation
      setAnimateDrawer(false);

      // Step 2: After animation → unmount
      const timeout = setTimeout(() => {
        setDrawerVisible(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isMenuOpen]);


  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown by name
  const [isServicesExpanded, setIsServicesExpanded] = useState(false); // Track Services expansion in drawer

  // Handle scroll effect for glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Prevent body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        // Restore body scroll and position
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      };
    }
  }, [isMenuOpen]);

  // --- Navigation Data Configuration ---
  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      type: 'mega', // New type for Mega Menu
      megaData: {
        featured: {
          title: "Bespoke Solutions for Your Digital Success",
          description: "We don't just build solutions — we bring your ideas to life with precision. Experience a seamless collaborative journey from concept to launch.",
          image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
          ctaText: "Explore All Services",
          ctaLink: "/services"
        },
        columns: [
          {
            title: "Development",
            icon: <Code2 className="w-5 h-5" />,
            description: "Accelerate growth with scalable, secure solutions.",
            items: [
              { name: "AI/ML Integration", href: "/services/ai-ml" },
              { name: "Mobile App Development", href: "/services/mobile-apps" },
              { name: "Web Platform Engineering", href: "/services/web-development" },
              { name: "DevOps Services", href: "/services/devops" },
            ]
          },
          {
            title: "Data & Analytics",
            icon: <Database className="w-5 h-5" />,
            description: "Turn data into actionable intelligence.",
            items: [
              { name: "Data Strategy", href: "/services/data-strategy" },
              { name: "Data Governance", href: "/services/data-governance" },
              { name: "Data Engineering", href: "/services/data-engineering" },
              { name: "Visualization", href: "/services/data-visualization" },
            ]
          },
          {
            title: "Managed Services",
            icon: <Server className="w-5 h-5" />,
            description: "Proactive services to keep infra performing.",
            items: [
              { name: "App Managed Services", href: "/services/app-management" },
              { name: "Website Maintenance", href: "/services/maintenance" },
              { name: "Cloud Infrastructure", href: "/services/cloud-infra" },
              { name: "IT Helpdesk", href: "/services/it-support" },
            ]
          }
        ]
      }
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Technologies', href: '/technologies' },
    // { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  const handleGetQuote = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  const navigate = useNavigate();


  return (
    <>
      {/* Header Container */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-[#1A3A6F]/5 border border-[#D9E4F2]'
          : 'bg-white/80 backdrop-blur-md border border-white/20'
          } rounded-2xl`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">

            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2 group">
                {/* Logo Placeholder - Replace src with your actual logo path */}
                <div className="h-8 w-8 sm:h-10 sm:w-10 bg-[#1A3A6F] text-white rounded-lg flex items-center justify-center font-bold text-xl">
                  V
                </div>
                <span className="font-bold text-xl tracking-tight text-[#1C1F26] group-hover:text-[#1A3A6F] transition-colors">
                  Vernora<span className="text-[#2DA3DB]">Tech</span>
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 h-full">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative h-full flex items-center"
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${activeDropdown === item.name
                      ? 'text-[#1A3A6F] bg-[#F0F7FF]'
                      : 'text-[#6E7787] hover:text-[#1A3A6F] hover:bg-[#F0F7FF]'
                      }`}
                    onClick={() => {
                      if (item.type === 'mega') {
                        // Toggle dropdown if it's the same item, close if different item
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      } else {
                        // Navigate to non-mega items
                        navigate(item.href);
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    {item.name}
                    {item.type === 'mega' && (
                      <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    )}
                  </button>

                  {/* Mega Menu Dropdown */}
                  {item.type === 'mega' && activeDropdown === item.name && (
                    <div
                      className="absolute top-[calc(100%+0.5rem)] left-1/8 -translate-x-1/3 w-[900px] lg:w-[1200px] bg-white rounded-3xl shadow-2xl shadow-[#1A3A6F]/10 border border-[#D9E4F2] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                    >
                      <div className="flex">
                        {/* Left Featured Column */}
                        <div className="w-1/3 bg-[#F0F7FF] p-8 flex flex-col relative overflow-hidden">
                          <div className="relative z-10 h-full flex flex-col">
                            <div className="w-full h-40 rounded-xl overflow-hidden mb-6 shadow-md">
                              <img
                                src={item.megaData.featured.image}
                                alt="Featured"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="text-lg font-bold text-[#1A3A6F] mb-3 leading-tight">
                              {item.megaData.featured.title}
                            </h3>
                            <p className="text-sm text-[#6E7787] mb-6 leading-relaxed flex-1">
                              {item.megaData.featured.description}
                            </p>
                            <Link
                              to={item.megaData.featured.ctaLink}
                              onClick={() => setActiveDropdown(null)}
                              className="inline-flex items-center text-sm font-bold text-[#2DA3DB] hover:text-[#1A3A6F] transition-colors group"
                            >
                              {item.megaData.featured.ctaText}
                              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                          {/* Decor */}
                          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#2DA3DB]/10 rounded-full blur-2xl -mr-10 -mb-10" />
                        </div>

                        {/* Right Service Columns */}
                        <div className="w-2/3 p-8 grid grid-cols-3 gap-8">
                          {item.megaData.columns.map((col, idx) => (
                            <div key={idx} className="space-y-4">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="p-2 rounded-lg bg-[#1A3A6F]/5 text-[#1A3A6F]">
                                  {col.icon}
                                </div>
                                <h4 className="font-bold text-[#1C1F26]">{col.title}</h4>
                              </div>
                              <p className="text-xs text-[#6E7787] leading-relaxed mb-3 h-10">
                                {col.description}
                              </p>
                              <ul className="space-y-2">
                                {col.items.map((subItem, subIdx) => (
                                  <li key={subIdx}>
                                    <Link
                                      to={subItem.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="flex items-center text-sm text-[#6E7787] hover:text-[#2DA3DB] transition-colors py-1"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9E4F2] mr-2 hover:bg-[#2DA3DB]" />
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={handleGetQuote}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-[#1A3A6F] rounded-full hover:bg-[#2DA3DB] transition-colors shadow-lg shadow-[#1A3A6F]/20 hover:shadow-[#2DA3DB]/30 hover:-translate-y-0.5"
              >
                Get Quote
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-[#1C1F26] hover:bg-[#F0F7FF] hover:text-[#1A3A6F] transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>



      </header>

      {/* Mobile Drawer */}
      {(isMenuOpen || drawerVisible) && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className={`absolute inset-0 bg-[#1A3A6F]/5 backdrop-blur-sm transition-opacity duration-300
              ${animateDrawer ? 'opacity-100' : 'opacity-0'}
            `} onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer */}
          <div className={`absolute inset-0 h-full w-full bg-[#F8F9FA] shadow-2xl transition-transform duration-300 ease-in-out 
              ${animateDrawer ? 'translate-x-0' : 'translate-x-full'}
            `}
          >

            <div className="flex items-center justify-between p-4 border-b border-[#D9E4F2] bg-[#F8F9FA]">
              <div className="flex items-center gap-2">
                <div
                  className="h-8 w-8 bg-[#1A3A6F] text-white rounded-lg flex items-center justify-center font-bold text-sm">
                  V
                </div>
                <span className="font-bold text-lg text-[#1C1F26]">
                  Vernora<span className="text-[#2DA3DB]">Tech</span>
                </span>
              </div>
              <button onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-[#6E7787] hover:bg-[#F0F7FF] hover:text-[#1A3A6F] transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col h-[calc(100vh-64px)] overflow-y-auto bg-white p-4 space-y-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitScrollbar: 'none' }}>
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.type === 'mega' ? (
                    <div className="space-y-3">
                      {/* Services Header - Clickable */}
                      <button
                        onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                        className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-[#1A3A6F] rounded-lg transition-colors"
                      >
                        {item.name}
                        <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Service Categories - Collapsible */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isServicesExpanded ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="space-y-4 pl-2 pt-2">
                          {item.megaData.columns.map((col, idx) => (
                            <div key={idx} className="space-y-2">
                              <div className="flex items-center gap-2 px-4 py-2">
                                <div className="p-1.5 rounded-lg bg-[#1A3A6F]/5 text-[#1A3A6F]">
                                  {col.icon}
                                </div>
                                <h5 className="font-bold text-sm text-[#1C1F26]">{col.title}</h5>
                              </div>
                              <ul className="space-y-1 pl-6">
                                {col.items.map((subItem, subIdx) => (
                                  <li key={subIdx}>
                                    <Link
                                      to={subItem.href}
                                      className="block py-2 text-sm text-[#6E7787] hover:text-[#2DA3DB] transition-colors"
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        // Navigate after closing drawer
                                        setTimeout(() => {
                                          navigate(subItem.href);
                                        }, 300);
                                      }}
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-4 py-3 text-base font-medium text-[#1C1F26] hover:text-[#1A3A6F] hover:bg-[#F0F7FF] rounded-xl transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        // Navigate after closing drawer
                        setTimeout(() => {
                          navigate(item.href);
                        }, 300);
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 mt-6 border-t border-[#D9E4F2]">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      navigate('/contact');
                    }, 300);
                  }}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-bold text-white bg-[#1A3A6F] rounded-xl hover:bg-[#2DA3DB] transition-colors shadow-md"
                >
                  Get Quote
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* keep your EXACT drawer content */}
            {/* {drawerContent} */}
          </div>
        </div>
      )}

    </>
  );
};

export default Header;
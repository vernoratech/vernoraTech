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
  ChevronRight,
  Rocket
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
  const [activeCategory, setActiveCategory] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

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
          title: "Build Your First Website — 100% FREE",
          description:
            "Launch your first website for free. Fast, responsive, and professionally designed.",
          image:
            "/offer_img_2.png",
          ctaText: "Claim Your Free Slot",
          ctaLink: "/contact"
        }
        ,
        columns: [
          {
            title: "Development",
            icon: <Code2 className="w-5 h-5" />,
            first_link_description: "We build fast, modern websites that convert visitors into customers.",
            second_link_description: "We also fix, upgrade, and scale existing apps.",
            items: {
              first: [
                { name: "Business Website Development", href: "/services/business-website-development" },
                { name: "E-Commerce Store Setup (Shopify / Custom)", href: "/services/ecommerce" },
                { name: "Landing Page For Ads (High Conversion)", href: "/services/landing-pages" },
                { name: "Booking / Appointment System", href: "/services/booking-system" },
                { name: "Portfolio & Personal Branding Sites", href: "/services/portfolio-sites" },
              ],
              second: [
                { name: "Fix Slow Website (Speed Optimization)", href: "/services/speed" },
                { name: "Bug Fixes & Feature Enhancements", href: "/services/bug-fixes" },
                { name: "Mobile App Development (Basic to Mid)", href: "/services/mobile-apps" },
                { name: "Custom API Development (CRM/ERP)", href: "/services/api-dev" },
              ]
            }
          }
          ,
          {
            title: "Business Tools  ",
            icon: <Cpu className="w-5 h-5" />,
            first_link_description: "Custom tools that simplify daily business operations.",
            items: {
              first: [
                { name: "Inventory & Order Tracking System", href: "/services/inventory-system" },
                { name: "Invoice & Billing Generator", href: "/services/invoice-tool" },
                { name: "Client Management System (Mini CRM)", href: "/services/mini-crm" },
                { name: "Staff Attendance / Timesheet", href: "/services/timesheet" },
                { name: "Custom Dashboard & Reports", href: "/services/dashboard" }
              ]
            }
          }
          ,
          {
            title: "Care & Support",
            icon: <Server className="w-5 h-5" />,
            first_link_description: "We keep your website running smoothly, updated, and secure.",
            items: {
              first: [
                { name: "Monthly Website Maintenance", href: "/services/maintenance" },
                { name: "Fix Hosting Issues / Migration", href: "/services/hosting-fix" },
                { name: "Speed Optimization (Core Web Vitals)", href: "/services/speed" },
                // { name: "Malware Cleanup & Security Hardening", href: "/services/security" },
                { name: "Broken Pages / Layout Fixes", href: "/services/fixes" },
                { name: "Small Tasks & Support Plan", href: "/services/support" }
              ],
              second: [
                { name: "Website Care Plan", href: "/services/maintenance" },
                { name: "Bug Fixes & Updates", href: "/services/bug-fixes" },
                { name: "Plugin / Library Upgrades", href: "/services/upgrades" },
                { name: "Emergency Restore Support", href: "/services/restore" },
                { name: "Small Monthly Changes", href: "/services/small-changes" }
              ]
            }
          }

        ]
      }
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Technologies', href: '/technologies' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate('/contact');
    setIsMenuOpen(false);
  };

  const MegaMenuContent = ({ item, activeCategory, setActiveCategory, setActiveDropdown, activeDropdown }) => {
    if (activeDropdown !== 'Services') return null;

    const services = item.megaData;

    return (
      <div className="absolute top-[90px] left-1/2 -translate-x-1/2 w-full max-w-[1450px] bg-white border border-[#E5EAF3] rounded-2xl shadow-2xl shadow-black/5 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden z-[999]">

        <div className="flex relative min-h-[280px]">
          {/* LEFT CATEGORY LIST */}
          <div className="w-[260px] bg-[#F7FAFF] border-r border-[#E5EAF3] py-6 px-4">
            <h3 className="text-xs font-semibold text-[#6E7787] tracking-wide mb-4 px-2">CATEGORIES</h3>

            <ul className="space-y-2">
              {services.columns.map((col, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setActiveCategory(idx)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition 
                    ${activeCategory === idx ? "bg-[#EAF3FF] text-[#1A3A6F]" : "text-[#1C1F26] hover:bg-[#EAF3FF]"}
                  `}
                  >
                    <span className="p-1.5 rounded-md bg-[#1A3A6F]/10 text-[#1A3A6F]">
                      {col.icon}
                    </span>
                    {col.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>




          <div className="flex-1 flex">
            {/* FIRST MIDDLE CONTENT AREA */}

            {
              services.columns[activeCategory].items.first.length > 0 && (
                <div className="flex-1 flex flex-col p-8">
                  <h3 className="text-lg font-semibold text-[#1A3A6F]">
                    {services.columns[activeCategory].title}
                  </h3>

                  <p className="text-xs text-[#6E7787] leading-relaxed mt-2">
                    {services.columns[activeCategory].first_link_description}
                  </p>

                  <ul className="space-y-2 mt-4">
                    {services.columns[activeCategory].items.first.map((sub, i) => (
                      <li key={i}>
                        <Link
                          to={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center text-sm text-[#3A4353] hover:text-[#2DA3DB] transition"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D9E4F2] mr-2" />
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                </div>
              )
            }

            {/* SECOND MIDDLE CONTENT AREA */}
            {Array.isArray(services.columns[activeCategory].items?.second) &&
              services.columns[activeCategory].items.second.length > 0 && (
                <div className="flex-1 flex flex-col p-8">
                  {/* <h3 className="text-lg font-semibold text-[#1A3A6F]">
              {services.columns[activeCategory].title}
            </h3> */}

                  <p className="text-xs text-[#6E7787] leading-relaxed mt-10">
                    {services.columns[activeCategory].second_link_description}
                  </p>

                  <ul className="space-y-2 mt-4">
                    {services.columns[activeCategory].items.second.map((sub, i) => (
                      <li key={i}>
                        <Link
                          to={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center text-sm text-[#3A4353] hover:text-[#2DA3DB] transition"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D9E4F2] mr-2" />
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            }


            {/* RIGHT FEATURED SECTION */}
            <div className="w-[260px] bg-[#F7FAFF] border-l border-[#E5EAF3] py-6 px-4">
              {services.featured && (
                <>
                  <h3 className="text-xs font-semibold text-[#6E7787] tracking-wide mb-4 px-2">LIMITED OFFER - CLICK TO VIEW</h3>

                  <div
                    className="w-full h-32 rounded-lg overflow-hidden mb-4 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setIsImageModalOpen(true)}
                  >
                    <img
                      src={services.featured.image}
                      alt={services.featured.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-sm font-semibold text-[#1A3A6F] mb-2">
                    {services.featured.title}
                  </h3>

                  <p className="text-xs text-[#6E7787] leading-relaxed mb-4">
                    {services.featured.description}
                  </p>

                  <Link
                    to={services.featured.ctaLink}
                    onClick={() => setActiveDropdown(null)}
                    className="group inline-flex items-center text-sm font-medium text-[#3A4353] hover:text-[#2DA3DB] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9E4F2] mr-2" />

                    <span className="flex items-center gap-2">
                      {services.featured.ctaText}
                      <Rocket className="w-4 h-4 rotate-315 group-hover:rotate-360 group-hover:-translate-y-3 group-hover:translate-x-2 transition-all duration-200 group-hover:text-[#2DA3DB] group-hover:scale-125" />
                    </span>
                  </Link>


                </>
              )}
            </div>

          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Header Container */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[98%] max-w-[1600px] transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-[#1A3A6F]/5 border border-[#D9E4F2]'
          : 'bg-white/80 backdrop-blur-md border border-white/20'
          } rounded-2xl`}
      >
        {/* IMPORTANT: relative wrapper */}
        <div className="relative w-full">

          {/* Header Row */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-20">

              {/* Logo */}
              <div className="flex-shrink-0 flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2 group">
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
                  <div key={item.name} className="relative h-full flex items-center">
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${activeDropdown === item.name
                        ? 'text-[#1A3A6F] bg-[#F0F7FF]'
                        : 'text-[#6E7787] hover:text-[#1A3A6F] hover:bg-[#F0F7FF]'
                        }`}
                      onClick={() => {
                        if (item.type === 'mega') {
                          setActiveDropdown(activeDropdown === item.name ? null : item.name);
                        } else {
                          navigate(item.href);
                          setActiveDropdown(null);
                        }
                      }}
                    >
                      {item.name}
                      {item.type === 'mega' && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                        />
                      )}
                    </button>
                  </div>
                ))}
              </nav>

              {/* CTA */}
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

          {/* REAL WORKING Mega Menu */}
          <MegaMenuContent
            item={navItems.find((n) => n.name === 'Services')}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
        </div>
      </header>


      {/* {activeDropdown === "Services" && (
        <MegaMenuContent
          item={navItems.find(n => n.name === "Services")}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeDropdown={activeDropdown}
          setActiveDropdown={setActiveDropdown}
        />
      )} */}

      {/* Mobile Drawer */}
      {(isMenuOpen || drawerVisible) && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className={`absolute inset-0 bg-[#1A3A6F]/5 backdrop-blur-sm transition-opacity duration-300
              ${animateDrawer ? 'opacity-100' : 'opacity-0'}
            `} onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer */}
          <div className={`absolute inset-0 flex flex-col bg-[#F8F9FA] shadow-2xl transition-transform duration-300 ease-in-out 
            ${animateDrawer ? 'translate-x-0' : 'translate-x-full'}
          }`}>

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

            <div
              className="
                flex-1 
                overflow-y-auto 
                pb-[env(safe-area-inset-bottom)]
                bg-white p-4 space-y-2
              "
              style={{ WebkitOverflowScrolling: 'touch' }}
            >

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
                                {/* FIRST GROUP */}
                                {Array.isArray(col.items?.first) &&
                                  col.items.first.map((subItem, subIdx) => (
                                    <li key={`first-${subIdx}`}>
                                      <Link
                                        to={subItem.href}
                                        className="block py-2 text-sm text-[#6E7787] hover:text-[#2DA3DB] transition-colors"
                                        onClick={() => {
                                          setIsMenuOpen(false);
                                          setTimeout(() => navigate(subItem.href), 300);
                                        }}
                                      >
                                        {subItem.name}
                                      </Link>
                                    </li>
                                  ))}

                                {/* SECOND GROUP */}
                                {Array.isArray(col.items?.second) &&
                                  col.items.second.map((subItem, subIdx) => (
                                    <li key={`second-${subIdx}`}>
                                      <Link
                                        to={subItem.href}
                                        className="block py-2 text-sm text-[#6E7787] hover:text-[#2DA3DB] transition-colors"
                                        onClick={() => {
                                          setIsMenuOpen(false);
                                          setTimeout(() => navigate(subItem.href), 300);
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
                      className="block px-4 py-3 text-base font-medium text-[#1C1F26] hover:text-[#1A3A6F] hover:bg-[#F0F7FF] rounded-xl transition-colors "
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
              <div className="pt-4 mt-6 mb-5 border-t border-[#D9E4F2]">
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
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isImageModalOpen && (() => {
        const servicesItem = navItems.find(item => item.name === 'Services');
        return servicesItem?.megaData?.featured;
      })() && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative max-w-4xl max-h-[90vh] p-4 animate-in zoom-in-95 duration-200">
              {/* Close Button */}
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute -top-2 -right-2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Close image"
              >
                <X size={20} className="text-gray-700" />
              </button>

              {/* Image */}
              <img
                src={(() => {
                  const servicesItem = navItems.find(item => item.name === 'Services');
                  return servicesItem?.megaData?.featured?.image;
                })()}
                alt={(() => {
                  const servicesItem = navItems.find(item => item.name === 'Services');
                  return servicesItem?.megaData?.featured?.title;
                })()}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <h4 className="text-sm font-semibold text-[#1A3A6F] mb-1">
                  {(() => {
                    const servicesItem = navItems.find(item => item.name === 'Services');
                    return servicesItem?.megaData?.featured?.title;
                  })()}
                </h4>
                <p className="text-xs text-[#6E7787] line-clamp-2">
                  {(() => {
                    const servicesItem = navItems.find(item => item.name === 'Services');
                    return servicesItem?.megaData?.featured?.description;
                  })()}
                </p>
              </div>
            </div>

            {/* Backdrop */}
            <div
              className="absolute inset-0"
              onClick={() => setIsImageModalOpen(false)}
            />
          </div>
        )}
    </>
  );
};

export default Header;
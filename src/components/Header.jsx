import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-xl fixed top-2 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl px-4 sm:px-6 lg:px-8 max-w-7xl w-[96%]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <img src="/VernoraTech.png" alt="VernoraTech" className="h-8 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="btn-primary">
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" className="block btn-primary text-center mt-4">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

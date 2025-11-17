import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white reveal-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">VernoraTech</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating professional websites for service businesses.
              We help CAs, construction companies, and professional services
              grow their online presence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/vernoratech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                LinkedIn
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Twitter
              </a> */}
              <a
                href="https://www.instagram.com/vernoratech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition duration-300">Landing Pages</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">CA Websites</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Construction Sites</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Professional Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition duration-300">Home</a></li>
              <li><a href="#services" className="hover:text-white transition duration-300">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition duration-300">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 VernoraTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

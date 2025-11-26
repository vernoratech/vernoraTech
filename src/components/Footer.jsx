import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import { IoRocketOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#fafafa] text-[#1A3A6F] reveal-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">VernoraTech</div>
            <p className="text-[#1A3A6F] mb-6 max-w-md">
              Creating professional websites for service businesses.
              We help CAs, construction companies, and professional services
              grow their online presence.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/company/vernoratech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-3 py-1 text-[#1A3A6F] hover:text-[#1A3A6F] hover:border-secondary transition duration-300"
              >
                <FaLinkedin className="text-base" />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/vernoratech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-3 py-1 text-[#1A3A6F] hover:text-[#1A3A6F] hover:border-secondary transition duration-300"
              >
                <FiInstagram className="text-base" />
                Instagram
              </a>
              <a
                href="https://wa.me/917397825850"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-primary rounded-full border px-3 py-1 text-[#1A3A6F] hover:text-[#1A3A6F] hover:border-secondary transition duration-300"
              >
                <FaWhatsapp className="text-base" />
                WhatsApp
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs text-[#1A3A6F] uppercase tracking-[0.25em]">
              <span>Trusted launch partner</span>
              <span className="h-1 w-1 rounded-full bg-primary/60" aria-hidden="true" />
              <span>Service-first delivery</span>
            </div>
            <div className="mt-6 inline-flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <span className="text-sm text-[#1A3A6F] border-b border-[#1A3A6F] flex items-center gap-1">Ready to launch? <IoRocketOutline className="text-base" /></span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#1A3A6F] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#1A3A6F]/40 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1A3A6F]/90"
              >
                Book a free build slot →
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#1A3A6F]">Services</h4>
            <ul className="space-y-2 text-[#1A3A6F]">
              <li><a href="#services" className="hover:text-[#1A3A6F] transition duration-300">Landing Page Sprints</a></li>
              <li><a href="#pricing" className="hover:text-[#1A3A6F] transition duration-300">Website Care Plans</a></li>
              <li><a href="#process" className="hover:text-[#1A3A6F] transition duration-300">Launch Process</a></li>
              <li><a href="#technologies" className="hover:text-[#1A3A6F] transition duration-300">Technology Stack</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#1A3A6F]">Quick Links</h4>
            <ul className="space-y-2 text-[#1A3A6F]">
              <li><a href="#home" className="hover:text-[#1A3A6F] transition duration-300">Home</a></li>
              <li><a href="#services" className="hover:text-[#1A3A6F] transition duration-300">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#1A3A6F] transition duration-300">Portfolio</a></li>
              <li><a href="#blog" className="hover:text-[#1A3A6F] transition duration-300">Insights</a></li>
              <li><a href="#contact" className="hover:text-[#1A3A6F] transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#1A3A6F]">Contact</h4>
            <ul className="space-y-3 text-[#1A3A6F]">
              <li>
                <a href="mailto:vernoratech@gmail.com" className="flex items-center gap-3 text-[#1A3A6F] hover:text-[#1A3A6F] transition duration-300">
                  <span className="text-primary"><MdOutlineMailOutline /></span>
                  vernoratech@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917397825850" className="flex items-center gap-3 text-[#1A3A6F] hover:text-[#1A3A6F] transition duration-300">
                  <span className="text-primary"><FaPhone /></span>
                  +91 73978 25850
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-[#1A3A6F]">
                  <span className="text-primary"><IoLocationOutline className='text-2xl' /></span>
                  Mumbai · Remote across India
                </span>
              </li>
              <li>
                <span className="flex items-center gap-3 text-[#1A3A6F]">
                  <span className="text-primary"><LuClock4 className='text-xl' /></span>
                  Mon - Sat · 9:00 AM – 7:00 PM IST
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-[#1A3A6F]">Growth Notes</h4>
            <p className="text-[#1A3A6F] text-sm mb-4">
              Monthly playbooks on how service brands close more projects with modern web funnels.
            </p>
            <form className="space-y-3">
              <label className="block text-sm text-[#1A3A6F]" htmlFor="newsletter-email">
                Enter your work email
              </label>
              <div className="flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 rounded-full border border-[#1A3A6F] bg-white/10 px-4 py-2 text-sm text-[#1A3A6F] placeholder:text-[#1A3A6F] focus:border-[#1A3A6F] focus:outline-none"
                />
                <button
                  type="button"
                  className="rounded-full bg-[#1A3A6F] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#1A3A6F]/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1A3A6F]/90 cursor-pointer"
                >
                  Join
                </button>
              </div>
              <p className="text-xs text-[#1A3A6F]">
                No spam. Just one actionable breakdown every month.
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between text-sm text-[#1A3A6F] gap-4">
          <p className='text-[#1A3A6F]'>&copy; 2025 VernoraTech. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <p onClick={() => navigate('/faq')} className="hover:text-[#1A3A6F] cursor-pointer transition duration-300">FAQs</p>
            <span className="text-[#1A3A6F]">|</span>
            <p onClick={() => navigate('/support')} className="hover:text-[#1A3A6F] cursor-pointer transition duration-300">Support</p>
            <span className="text-[#1A3A6F]">|</span>
            <p onClick={() => navigate('/pricing')} className="hover:text-[#1A3A6F] cursor-pointer transition duration-300">Pricing</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

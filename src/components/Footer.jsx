import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white reveal-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">VernoraTech</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating professional websites for service businesses.
              We help CAs, construction companies, and professional services
              grow their online presence.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/company/vernoratech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-gray-300 hover:text-white hover:border-primary transition duration-300"
              >
                <FaLinkedin className="text-base" />
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/vernoratech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-gray-300 hover:text-white hover:border-primary transition duration-300"
              >
                <FiInstagram className="text-base" />
                Instagram
              </a>
              <a
                href="https://wa.me/917397825850"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-gray-300 hover:text-white hover:border-primary transition duration-300"
              >
                <FaWhatsapp className="text-base" />
                WhatsApp
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs text-gray-400 uppercase tracking-[0.25em]">
              <span>Trusted launch partner</span>
              <span className="h-1 w-1 rounded-full bg-primary/60" aria-hidden="true" />
              <span>Service-first delivery</span>
            </div>
            <div className="mt-6 inline-flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <span className="text-sm text-gray-400 mb-2 ml-1">Ready to launch?</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Book a free build slot →
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition duration-300">Landing Page Sprints</a></li>
              <li><a href="#pricing" className="hover:text-white transition duration-300">Website Care Plans</a></li>
              <li><a href="#process" className="hover:text-white transition duration-300">Launch Process</a></li>
              <li><a href="#technologies" className="hover:text-white transition duration-300">Technology Stack</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition duration-300">Home</a></li>
              <li><a href="#services" className="hover:text-white transition duration-300">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition duration-300">Portfolio</a></li>
              <li><a href="#blog" className="hover:text-white transition duration-300">Insights</a></li>
              <li><a href="#contact" className="hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="mailto:vernoratech@gmail.com" className="flex items-center gap-3 hover:text-white transition duration-300">
                  <span className="text-primary"><MdOutlineMailOutline /></span>
                  vernoratech@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917397825850" className="flex items-center gap-3 hover:text-white transition duration-300">
                  <span className="text-primary"><FaPhone /></span>
                  +91 73978 25850
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-gray-400">
                  <span className="text-primary"><IoLocationOutline /></span>
                  Mumbai · Remote across India
                </span>
              </li>
              <li>
                <span className="flex items-center gap-3 text-gray-400">
                  <span className="text-primary"><LuClock4 /></span>
                  Mon - Sat · 9:00 AM – 7:00 PM IST
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Growth Notes</h4>
            <p className="text-gray-400 text-sm mb-4">
              Monthly playbooks on how service brands close more projects with modern web funnels.
            </p>
            <form className="space-y-3">
              <label className="block text-sm text-gray-400" htmlFor="newsletter-email">
                Enter your work email
              </label>
              <div className="flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-gray-400 focus:border-primary focus:outline-none"
                />
                <button
                  type="button"
                  className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90 cursor-pointer"
                >
                  Join
                </button>
              </div>
              <p className="text-xs text-gray-500">
                No spam. Just one actionable breakdown every month.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-sm text-gray-300">
          <div className="flex flex-col items-start gap-1">
            <span className="text-3xl font-semibold text-white">48h</span>
            <span>Average kickoff once paperwork is signed.</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-3xl font-semibold text-white">92%</span>
            <span>Projects launch within two sprint cycles.</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-3xl font-semibold text-white">4.9/5</span>
            <span>Client rating across latest 30 engagements.</span>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>&copy; 2025 VernoraTech. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#faq" className="hover:text-white transition duration-300">FAQs</a>
            <span className="text-gray-700">|</span>
            <a href="#contact" className="hover:text-white transition duration-300">Support</a>
            <span className="text-gray-700">|</span>
            <a href="#pricing" className="hover:text-white transition duration-300">Pricing</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

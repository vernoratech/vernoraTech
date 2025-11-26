import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { LuClock2 } from "react-icons/lu";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your backend or email service
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFeedbackMessage('Email service is not configured. Please contact us directly.');
      return;
    }

    setIsSubmitting(true);
    setFeedbackMessage('');

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_email: 'vernoratech@gmail.com'
        },
        {
          publicKey
        }
      );

      setFeedbackMessage('Thank you! Your message has been sent.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setFeedbackMessage('Something went wrong while sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 section-padding reveal-up mt-10 md:mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl font-bold text-[#1A3A6F] mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to take your business online? Contact us for a free consultation
            and let's discuss how we can help you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md reveal-up">
            <h3 className="text-2xl font-semibold text-[#1A3A6F] mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#1A3A6F] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A3A6F] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A3A6F] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A3A6F] mb-2">
                  Service Needed
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full appearance-none px-4 py-3 pe-12 border border-gray-200 rounded-lg bg-white shadow-sm text-gray-700 transition-all duration-200 focus:border-primary focus:ring-4 focus:ring-primary/20 hover:border-primary/60"
                  >
                    <option value="">Select a service</option>
                    <option value="landing-page">Landing Page (1-page site)</option>
                    <option value="business-website">Business Website (3–5 pages)</option>
                    <option value="online-store">Online Store (E-commerce)</option>
                    <option value="portfolio">Portfolio / Personal Website</option>
                    <option value="booking-website">Booking Website (Appointments)</option>
                    <option value="blog">Blog / Content Website</option>
                    <option value="revamp">Redesign My Existing Website</option>
                    <option value="marketing-funnel">Marketing Funnel / Lead Capture</option>
                    <option value="company-profile">Company Profile Website</option>
                    <option value="other">Other (Tell Us More)</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.24a.75.75 0 01-1.06 0l-4.24-4.24a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Choose the project type that best matches your needs so we can tailor our consultation.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A3A6F] mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary cursor-pointer disabled:opacity-70" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {feedbackMessage && (
                <p className="text-sm text-center text-gray-600">
                  {feedbackMessage}
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8 reveal-up" style={{ transitionDelay: '120ms' }}>
              <h3 className="text-2xl font-semibold text-[#1A3A6F] mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-primary text-xl mr-4"><MdOutlineEmail className='text-blue-600 text-2xl' /></span>
                  <div>
                    <div className="font-medium text-[#1A3A6F]">Email</div>
                    <div className="text-gray-600 cursor-pointer hover:text-blue-600" onClick={() => window.location.href = 'mailto:vernoratech@gmail.com'}>vernoratech@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-primary text-xl mr-4"><BsWhatsapp className='text-green-600' /></span>
                  <div>
                    <div className="font-medium text-[#1A3A6F]">WhatsApp</div>
                    <div className="text-gray-600 cursor-pointer hover:text-blue-600" onClick={() => window.open('https://wa.me/917397825850', '_blank')}>+91 73978 25850</div>
                    <div className="text-gray-600 cursor-pointer hover:text-blue-600" onClick={() => window.open('https://wa.me/918767425955', '_blank')}>+91 87674 25955</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-primary text-xl mr-4"><LuClock2 className='text-gray-600 text-2xl' /></span>
                  <div>
                    <div className="font-medium text-[#1A3A6F]">Business Hours</div>
                    <div className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-6 md:p-8 rounded-lg reveal-up" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-semibold mb-4 text-[#D9E4F2]">
                Free Consultation
              </h3>
              <p className="mb-6 text-[#D9E4F2]">
                Not sure where to start? Book a free 30-minute consultation
                and we'll discuss your project requirements and provide
                personalized recommendations.
              </p>
              <button className="bg-white text-primary hover:bg-[#2DA3DB] hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300 cursor-pointer">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';

const FAQ = () => {
  const items = [
    {
      q: 'How long does a website project take?',
      a: 'Most landing pages take 1-2 weeks. Multi-page business sites usually take 3-5 weeks depending on content readiness.'
    },
    {
      q: 'Do you provide content and images?',
      a: 'We guide your copy and structure. We can use royalty-free images or work with your assets.'
    },
    {
      q: 'Is SEO included?',
      a: 'All plans include on-page SEO best practices like meta tags, semantic HTML, performance and mobile optimization.'
    },
    {
      q: 'Can you maintain the site after launch?',
      a: 'Yes, we offer affordable monthly care plans for updates, backups, monitoring, and enhancements.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-gray-50 section-padding reveal-up">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quick answers to common questions about our service.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <span className="font-semibold text-gray-900">{item.q}</span>
                  <span className="text-primary">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;



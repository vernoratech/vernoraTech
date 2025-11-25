import React, { useEffect, useRef, useState } from 'react';

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
  const contentRefs = useRef([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpenIndex(-1);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="faq" className="bg-[#fafafa] section-padding reveal-up mt-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl font-bold text-[#1A3A6F] mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-[#1A3A6F] max-w-2xl mx-auto">
            Quick answers to common questions about our service.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-[#fafafa] rounded-lg shadow-sm">
                <button
                  type="button"
                  className="w-full text-left px-6 py-4 flex items-center justify-between cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-trigger-${idx}`}
                >
                  <span className="font-semibold text-[#1A3A6F] ">{item.q}</span>
                  <span className="text-[#1A3A6F]">{isOpen ? '−' : '+'}</span>
                </button>
                <div
                  ref={(el) => (contentRefs.current[idx] = el)}
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${idx}`}
                  className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'
                    }`}
                  style={{
                    maxHeight: isOpen
                      ? isMounted && contentRefs.current[idx]
                        ? `${contentRefs.current[idx].scrollHeight}px`
                        : '500px'
                      : '0px'
                  }}
                >
                  <div className="px-6 pb-6 text-[#1A3A6F]">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;



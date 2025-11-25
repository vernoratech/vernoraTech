import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const FAQ_ITEMS = [
  {
    q: 'How long does a website project take?',
    a: 'Most landing pages take 1–2 weeks. Multi-page business sites usually take 3–5 weeks depending on how quickly we receive your content.'
  },
  {
    q: 'Do you provide content and images?',
    a: 'We help you with structure and copy suggestions. For images, we can use high-quality royalty-free visuals or your own photos.'
  },
  {
    q: 'Is SEO included?',
    a: 'Every project includes essential on-page SEO such as meta tags, clean code, performance optimization, and mobile-friendly design.'
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes, we offer optional monthly care plans for updates, backups, security checks, and small improvements.'
  },

  // ---- Friendly Legal / Policy Items ----
  {
    q: 'How does the payment process work?',
    a: 'To get started, we take a 50% advance so we can reserve your project slot. The remaining amount is due at completion before final delivery.'
  },
  {
    q: 'Do you offer refunds?',
    a: 'We try our best to make sure you’re happy with the work. Once the project has started, refunds aren’t available, but we always handle concerns promptly.'
  },
  {
    q: 'Who owns the website after it’s completed?',
    a: 'Once the project is fully paid, the website and all approved assets are completely yours.'
  },
  {
    q: 'What if I need extra features later?',
    a: 'No problem — we can add anything you need. Extra features are simply billed separately with a clear estimate before we start.'
  },
  {
    q: 'Is hosting or domain included?',
    a: 'Hosting and domain are purchased separately so you stay in full control. If you need help choosing a provider, we’ll guide you.'
  },
  {
    q: 'Do you provide any warranty?',
    a: 'Yes, we include a free 30-day support window after launch for small fixes or adjustments.'
  }
];

const FAQ = () => {
  const location = useLocation();
  const isStandalonePage = location?.pathname === '/faq';
  const items = useMemo(() => (isStandalonePage ? FAQ_ITEMS : FAQ_ITEMS.slice(0, 3)), [isStandalonePage]);


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
    if (isStandalonePage) {
      window.scrollTo(0, 0);
    }
  }, [isStandalonePage]);

  useEffect(() => {
    if (openIndex >= items.length) {
      setOpenIndex(items.length ? 0 : -1);
    }
  }, [items.length, openIndex]);

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



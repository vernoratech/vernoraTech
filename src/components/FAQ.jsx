import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { FAQ_ASSISTANT_SYSTEM_PROMPT } from '../config/aiPrompts';

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
  const [chatMessages, setChatMessages] = useState([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Hi! Ask anything about our services, timelines, pricing, or process.',
    },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatSending, setIsChatSending] = useState(false);
  const chatScrollRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const el = chatScrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [chatMessages]);

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

  const handleChatSubmit = async (event) => {
    event.preventDefault();
    const trimmed = chatInput.trim();
    if (!trimmed || isChatSending) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput('');
    setIsChatSending(true);

    const lower = trimmed.toLowerCase();
    const match = FAQ_ITEMS.find(
      (item) =>
        item.q.toLowerCase().includes(lower) || item.a.toLowerCase().includes(lower)
    );

    const fallbackReply = match
      ? `Here's something that might help:\n\n${match.q}\n${match.a}`
      : 'Thanks for your question. Our team will review it and get back to you soon.';

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    if (!apiKey) {
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            id: `assistant-${Date.now()}`,
            sender: 'assistant',
            text: fallbackReply,
          },
        ]);
        setIsChatSending(false);
      }, 400);
      return;
    }

    try {
      const historyForApi = [
        ...chatMessages.map((msg) => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text,
        })),
        { role: 'user', content: trimmed },
      ];

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            {
              role: 'system',
              content: FAQ_ASSISTANT_SYSTEM_PROMPT,
            },
            ...historyForApi,
          ],
          temperature: 0.4,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to call Groq API');
      }

      const data = await response.json();
      const replyText =
        data?.choices?.[0]?.message?.content?.trim() || fallbackReply;

      setChatMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          sender: 'assistant',
          text: replyText,
        },
      ]);
    } catch (error) {
      setChatMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          sender: 'assistant',
          text: fallbackReply,
        },
      ]);
    } finally {
      setIsChatSending(false);
    }
  };

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

        <div className="mt-12 bg-white rounded-2xl shadow-md border border-[#E2E8F0] p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1A3A6F]">
                Still have questions? Chat with us
              </h3>
              <p className="text-sm text-[#4B5563]">
                Ask follow-up questions in this chat. You can later connect this to your live LLM support bot.
              </p>
            </div>
          </div>

          <div
            ref={chatScrollRef}
            className="mb-4 h-56 sm:h-64 rounded-xl border border-[#E2E8F0] bg-[#F8FAFF] overflow-y-auto px-3 py-3 space-y-3"
          >
            {chatMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm whitespace-pre-line ${msg.sender === 'user'
                    ? 'bg-[#1A3A6F] text-white rounded-br-sm'
                    : 'bg-white text-[#1A3A6F] border border-[#D9E4F2] rounded-bl-sm'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isChatSending && (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-2 rounded-2xl bg-white text-[#6E7787] border border-[#D9E4F2] px-3 py-2 text-xs">
                  <span className="h-2 w-2 rounded-full bg-[#2DA3DB] animate-pulse" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleChatSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              className="flex-1 rounded-full border border-[#D9E4F2] px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2DA3DB] focus:border-transparent"
              placeholder="Type your question here..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            <button
              type="submit"
              disabled={isChatSending || !chatInput.trim()}
              className="inline-flex items-center justify-center rounded-full bg-[#1A3A6F] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2DA3DB] transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

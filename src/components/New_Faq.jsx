import React, { useEffect, useState } from 'react';
import {
  Plus,
  Minus,
  MessageCircle,
  ShieldCheck,
  CreditCard,
  Code2,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const New_Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('General');

  const categories = ['General', 'Technical', 'Pricing & Legal'];

  const faqs = [
    {
      category: 'General',
      question: 'How does the "Free First-Time" offer work?',
      answer: 'For eligible startups and individuals, we waive the standard development fee for the "Starter" package. You only pay for your domain and hosting (which you own). This allows us to build a relationship and showcase our quality without upfront risk to you.'
    },
    {
      category: 'General',
      question: 'Do you work with non-tech founders?',
      answer: 'Absolutely. We specialize in translating business goals into technical reality. You focus on the vision and market; we handle the architecture, code, and deployment. We speak plain English, not just jargon.'
    },
    {
      category: 'Technical',
      question: 'Do I own the code and intellectual property?',
      answer: 'Yes. Upon final payment, 100% of the intellectual property (IP) and source code is transferred to you. We do not hold your project hostage. We can also sign NDAs before we begin discussion.'
    },
    {
      category: 'Technical',
      question: 'What tech stack do you primarily use?',
      answer: 'We prioritize modern, scalable stacks. For web, we use React, Next.js, and Node.js. For mobile, we use Flutter or React Native. This ensures your product is fast, SEO-friendly, and easy to hire for in the future.'
    },
    {
      category: 'Technical',
      question: 'Can you take over an existing codebase?',
      answer: 'Yes, but we first conduct a code audit. If the legacy code is scalable, we will refactor and build upon it. If it poses security or performance risks, we may recommend a strategic rebuild.'
    },
    {
      category: 'Pricing & Legal',
      question: 'Are there any hidden maintenance fees?',
      answer: 'No hidden fees. Our "Professional" and "Business" plans include free support periods (3-6 months). After that, you can choose a monthly maintenance retainer or pay ad-hoc per hour. You are also free to manage it yourself.'
    },
    {
      category: 'Pricing & Legal',
      question: 'What is your typical payment schedule?',
      answer: 'For standard projects, we typically work on a 50/50 split: 50% upfront to reserve the development pod, and 50% upon final delivery and sign-off. For larger enterprise builds, we can structure milestone-based payments.'
    }
  ];

  const filteredFaqs = faqs.filter(f => f.category === activeCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <section id="faq" className="relative py-24 bg-white overflow-hidden mt-10">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#F0F7FF] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-[#2DA3DB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#1A3A6F]/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1A3A6F] border border-[#1A3A6F]/10 mb-6">
            <MessageCircle size={14} className="text-[#2DA3DB]" />
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1F26] tracking-tight mb-6">
            Everything You Need to <span className="text-[#2DA3DB]">Know</span>
          </h2>
          <p className="text-lg text-[#6E7787]">
            Transparent answers to help you make an informed decision about your tech partnership.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(0); }}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border ${activeCategory === cat
                  ? 'bg-[#1A3A6F] text-white border-[#1A3A6F] shadow-lg shadow-[#1A3A6F]/20'
                  : 'bg-white text-[#6E7787] border-[#D9E4F2] hover:border-[#2DA3DB] hover:text-[#1A3A6F]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className={`group rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                  ? 'bg-white border-[#2DA3DB] shadow-xl shadow-[#1A3A6F]/5'
                  : 'bg-[#FAFAFA] border-transparent hover:bg-white hover:border-[#D9E4F2]'
                }`}
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-[#1A3A6F]' : 'text-[#1C1F26]'
                  }`}>
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 p-2 rounded-full transition-colors ${openIndex === index ? 'bg-[#1A3A6F] text-white' : 'bg-[#D9E4F2] text-[#1A3A6F] group-hover:bg-[#2DA3DB] group-hover:text-white'
                  }`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-6 text-[#6E7787] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-[#F0F7FF] border border-[#D9E4F2] text-center">
          <h3 className="text-xl font-bold text-[#1C1F26] mb-2">Still have questions?</h3>
          <p className="text-[#6E7787] mb-6">
            We’d be happy to hop on a quick call and clarify your specific requirements.
          </p>
          <a
            onClick={()=>navigate('/contact')}
            className="inline-flex items-center gap-2 text-[#1A3A6F] font-bold hover:text-[#2DA3DB] transition-colors cursor-pointer"
          >
            Chat with our lead engineer
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default New_Faq;
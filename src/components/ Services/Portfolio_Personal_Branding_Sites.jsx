import React, { useState, useEffect } from 'react';
import {
  User,
  Briefcase,
  PenTool,
  Award,
  Share2,
  ArrowRight,
  Rocket,
  MessageSquare,
  Globe,
  CheckCircle2,
  Layout,
  Image,
  FileText,
  Linkedin,
  Instagram,
  Twitter,
  ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio_Personal_Branding_Sites = () => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const features = [
    {
      title: "Visual Storytelling",
      description: "We don't just dump your resume on a page. We craft a narrative arc that highlights your journey, philosophy, and unique value proposition.",
      icon: <Layout className="w-6 h-6 text-white" />,
      color: "bg-[#2DA3DB]"
    },
    {
      title: "Dynamic Project Gallery",
      description: "Showcase your work in high definition. Filterable galleries for case studies, photography, or design mockups that load instantly.",
      icon: <Image className="w-6 h-6 text-white" />,
      color: "bg-[#1A3A6F]"
    },
    {
      title: "Thought Leadership Blog",
      description: "Establish authority in your niche. A clean, readable blog section optimized for SEO so your ideas get found by the right people.",
      icon: <PenTool className="w-6 h-6 text-white" />,
      color: "bg-emerald-500"
    },
    {
      title: "Press & Media Kit",
      description: "Make it easy for journalists and event organizers to feature you. Downloadable bio, high-res headshots, and featured talks.",
      icon: <Award className="w-6 h-6 text-white" />,
      color: "bg-orange-500"
    }
  ];

  const useCases = [
    {
      role: "Freelancers & Creatives",
      desc: "Turn your portfolio into a lead generation machine that pre-sells your services.",
      icon: <Briefcase className="w-5 h-5 text-[#2DA3DB]" />
    },
    {
      role: "Executives & Founders",
      desc: "Control your Google search results and attract speaking engagements or investors.",
      icon: <User className="w-5 h-5 text-[#2DA3DB]" />
    },
    {
      role: "Consultants & Coaches",
      desc: "Build trust through testimonials and case studies, leading directly to booking calls.",
      icon: <MessageSquare className="w-5 h-5 text-[#2DA3DB]" />
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Brand Audit",
      desc: "We analyze your current digital footprint and define your core message and target audience."
    },
    {
      step: "02",
      title: "Content Strategy",
      desc: "We help structure your case studies, bio, and service offerings for maximum impact."
    },
    {
      step: "03",
      title: "Design & Build",
      desc: "Creating a unique visual identity that reflects your personality, built on a fast tech stack."
    },
    {
      step: "04",
      title: "Launch & SEO",
      desc: "Optimizing your name for search engines and connecting your social profiles."
    }
  ];

  const faqs = [
    {
      q: "Can I update the portfolio myself?",
      a: "Yes. We build on user-friendly platforms (like Next.js with a headless CMS or customized WordPress) so you can easily add new projects or blog posts without coding."
    },
    {
      q: "Do I need professional photos?",
      a: "Highly recommended. A personal brand site relies heavily on your image. If you don't have them, we can recommend photographers or work with high-quality stock tailored to your vibe."
    },
    {
      q: "Does this include a logo?",
      a: "Our standard package focuses on the website UI/UX. However, we offer a 'Brand Identity' add-on that includes logo design, color palette, and typography selection."
    },
    {
      q: "How long does it take?",
      a: "Typically 2-3 weeks. The timeline largely depends on how quickly we receive your content (bio, project images, testimonials)."
    }
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#1C1F26]">

      {/* --- HERO: Own Your Narrative --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#1A3A6F]">
        {/* Background Decor */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2DA3DB]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2DA3DB]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2DA3DB]/30 bg-[#2DA3DB]/10 px-4 py-1.5 mb-8 backdrop-blur-md">
                <User size={14} className="text-[#2DA3DB]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2DA3DB]">
                  Personal Branding
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Own Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DA3DB] to-white">
                  Digital Narrative
                </span>
              </h1>

              <p className="text-lg md:text-xl text-[#D9E4F2]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                You are your best asset. We build stunning personal websites that position you as the authority in your field.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#2DA3DB]/20 transition-all hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1"
                >
                  Build My Brand
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  See What's Included
                </a>
              </div>
            </div>

            {/* Right Visual: Digital Card Profile */}
            <div className="relative mx-auto lg:mx-0 w-full max-w-md perspective-1000 group">
              <div className="absolute inset-0 bg-[#2DA3DB]/20 rounded-[40px] blur-[60px] group-hover:bg-[#2DA3DB]/30 transition-all duration-500" />

              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-8 shadow-2xl transform transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-6">

                {/* Profile Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2DA3DB] to-[#1A3A6F] p-1">
                    <div className="w-full h-full bg-white rounded-xl overflow-hidden relative">
                      {/* Placeholder Avatar */}
                      <div className="absolute inset-0 bg-gray-200" />
                      <User className="absolute inset-0 m-auto text-gray-400 w-10 h-10" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 hover:bg-[#2DA3DB] transition-colors cursor-pointer">
                      <Linkedin size={18} className="text-white" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 hover:bg-[#E1306C] transition-colors cursor-pointer">
                      <Instagram size={18} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="space-y-2 mb-8">
                  <div className="h-4 w-32 bg-[#2DA3DB] rounded-full opacity-80" />
                  <div className="h-8 w-48 bg-white rounded-lg opacity-90" />
                  <div className="h-4 w-64 bg-white/50 rounded-full" />
                </div>

                {/* Stats / Skills */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/10 text-center">
                      <div className="h-5 w-8 bg-white/80 rounded mx-auto mb-1" />
                      <div className="h-2 w-12 bg-white/30 rounded mx-auto" />
                    </div>
                  ))}
                </div>

                {/* Featured Project */}
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex justify-between items-center mb-3">
                    <div className="h-3 w-24 bg-gray-300 rounded" />
                    <ArrowRight size={14} className="text-[#1A3A6F]" />
                  </div>
                  <div className="h-32 bg-[#F0F7FF] rounded-xl border border-[#D9E4F2] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#1A3A6F]/10 to-transparent" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Features Grid (Bento Style) --- */}
      <section id="features" className="py-24 bg-[#FAFAFA] -mt-10 rounded-t-[40px] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">Build Authority</h2>
            <p className="text-[#6E7787] mt-4">More than a CV. A platform that sells you while you sleep.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-8 border border-[#D9E4F2] transition-all duration-300 hover:shadow-xl hover:shadow-[#1A3A6F]/5 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color.replace('bg-', 'from-')}/20 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-50`} />
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1C1F26] mb-3">{feature.title}</h3>
                <p className="text-sm text-[#6E7787] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Use Cases / Who is this for --- */}
      <section className="py-24 bg-white border-y border-[#D9E4F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div>
              <span className="text-[#2DA3DB] font-bold text-sm uppercase tracking-widest mb-2 block">Target Audience</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1F26] mb-6">
                Who Needs a <span className="text-[#2DA3DB]">Personal Brand Site?</span>
              </h2>
              <p className="text-lg text-[#6E7787] mb-8 leading-relaxed">
                In a digital-first world, Google is your new resume. If people can't find you, or don't like what they see, opportunities are lost.
              </p>

              <div className="space-y-4">
                {useCases.map((useCase, idx) => (
                  <div key={idx} className="bg-[#FAFAFA] border border-[#D9E4F2] p-5 rounded-2xl flex items-start gap-4 hover:border-[#2DA3DB]/50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white border border-[#D9E4F2] flex items-center justify-center shadow-sm shrink-0">
                      {useCase.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1C1F26] text-base">{useCase.role}</h4>
                      <p className="text-[#6E7787] text-sm mt-1">{useCase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual: Social Proof Web */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2DA3DB]/10 to-[#1A3A6F]/5 rounded-full blur-3xl" />

              {/* Central Abstract Phone */}
              <div className="relative z-10 w-64 bg-white rounded-[2.5rem] border-[6px] border-[#1C1F26] shadow-2xl p-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1C1F26] rounded-b-xl z-20" />
                <div className="mt-6 flex justify-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full animate-pulse" />
                </div>
                <div className="mt-4 space-y-2 text-center">
                  <div className="h-4 w-32 bg-gray-200 rounded mx-auto" />
                  <div className="h-3 w-24 bg-gray-100 rounded mx-auto" />
                </div>
                <div className="mt-6 space-y-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-12 w-full bg-[#1A3A6F] rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#1A3A6F]/10 transform hover:scale-105 transition-transform duration-300">
                      Link / Project {i}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Social Icons */}
              <div className="absolute -top-10 right-10 bg-white p-3 rounded-full shadow-lg border border-[#D9E4F2] animate-bounce delay-100">
                <Linkedin size={24} className="text-[#0077B5]" />
              </div>
              <div className="absolute bottom-20 -left-4 bg-white p-3 rounded-full shadow-lg border border-[#D9E4F2] animate-bounce delay-300">
                <Twitter size={24} className="text-[#1DA1F2]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Process Roadmap --- */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-[#1C1F26]">From Unknown to Unforgettable</h2>
            <p className="text-[#6E7787] mt-4">Our structured process to define and amplify your personal brand.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative pt-8 md:pt-0">
                {/* Connector Line */}
                {i !== processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-[#D9E4F2] -z-10" />
                )}

                <div className="relative z-10 flex flex-row md:flex-col items-center gap-4 md:gap-0">
                  <div className="w-12 h-12 rounded-full bg-[#1A3A6F] text-white flex items-center justify-center font-bold text-lg border-4 border-[#FAFAFA] shadow-lg shrink-0">
                    {step.step}
                  </div>
                  <div className="md:text-center md:mt-6">
                    <h3 className="text-lg font-bold text-[#1C1F26] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#6E7787]">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-24 bg-white border-t border-[#D9E4F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#1C1F26] text-center mb-12">
            Common Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white border border-[#D9E4F2] rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === idx ? 'shadow-md border-[#2DA3DB]' : 'hover:border-[#2DA3DB]/50'}`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h4 className={`text-lg font-bold flex items-start gap-3 ${openFaqIndex === idx ? 'text-[#1A3A6F]' : 'text-[#1C1F26]'}`}>
                    <MessageSquare size={20} className={`mt-0.5 shrink-0 ${openFaqIndex === idx ? 'text-[#1A3A6F]' : 'text-[#2DA3DB]'}`} />
                    {faq.q}
                  </h4>
                  <ChevronDown size={20} className={`text-[#6E7787] transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180 text-[#1A3A6F]' : ''}`} />
                </button>

                <div className={`px-6 pb-6 text-[#6E7787] leading-relaxed pl-[3.25rem] transition-all duration-300 ${openFaqIndex === idx ? 'block' : 'hidden'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24 bg-[#1A3A6F] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[#1C1F26] opacity-30"
          style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Stand Out?
          </h2>
          <p className="text-lg text-[#D9E4F2] mb-10 max-w-2xl mx-auto">
            Stop being the best-kept secret in your industry. Let's build a platform that does your skills justice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2DA3DB] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-white hover:text-[#1A3A6F] hover:-translate-y-1 transition-all cursor-pointer"
            >
              Start Your Project
              <Rocket size={20} />
            </a>
            <a
              href="https://wa.me/917397825850"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio_Personal_Branding_Sites;
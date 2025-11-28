import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Palette, 
  Zap, 
  Headphones,
  Code2,
  Cpu,
  Globe,
  BarChart3
} from 'lucide-react';

const About = () => {
  const features = [
    {
      title: "Custom Design",
      description: "Tailored to your brand DNA, not generic templates.",
      icon: <Palette className="w-5 h-5 text-white" />
    },
    {
      title: "Fast Delivery",
      description: "Agile sprints ensure rapid turnaround times.",
      icon: <Zap className="w-5 h-5 text-white" />
    },
    {
      title: "Ongoing Support",
      description: "We don't disappear after launch. We're your tech partners.",
      icon: <Headphones className="w-5 h-5 text-white" />
    }
  ];

  const expertise = [
    "Web Design & Development",
    "SEO Optimization",
    "Mobile Responsiveness",
    "Performance Tuning"
  ];

  const industries = [
    "Chartered Accountants",
    "Construction & Real Estate",
    "Legal Services",
    "Healthcare & Clinics"
  ];

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#F0F7FF] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-[#2DA3DB]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          
          {/* Left Column: Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1A3A6F]/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#1A3A6F] border border-[#1A3A6F]/10 mb-6">
              <Globe size={14} className="text-[#2DA3DB]" />
              Who We Are
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1C1F26] tracking-tight mb-6">
              About <span className="text-[#2DA3DB]">VernoraTech</span>
            </h2>
            
            <p className="text-lg text-[#6E7787] mb-6 leading-relaxed">
              We're a dedicated team of web designers and developers specializing in
              creating professional websites for service-based businesses. With years
              of experience in the industry, we understand what it takes to create
              websites that not only look great but also convert visitors into clients.
            </p>
            
            <p className="text-lg text-[#6E7787] mb-10 leading-relaxed">
              Our mission is to help small and medium-sized businesses establish a
              strong online presence through custom-designed websites that reflect
              their professionalism and expertise.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="flex items-center gap-2 font-bold text-[#1C1F26] mb-4">
                  <Code2 size={18} className="text-[#2DA3DB]" /> Our Expertise
                </h4>
                <ul className="space-y-2">
                  {expertise.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#6E7787]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DA3DB]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="flex items-center gap-2 font-bold text-[#1C1F26] mb-4">
                  <BarChart3 size={18} className="text-[#2DA3DB]" /> Industries
                </h4>
                <ul className="space-y-2">
                  {industries.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#6E7787]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A3A6F]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: "Why Choose Us" Card */}
          <div className="relative">
            {/* Decorative offset border/shadow */}
            <div className="absolute inset-0 bg-[#2DA3DB] rounded-3xl transform translate-x-4 translate-y-4 opacity-10" />
            
            <div className="relative bg-[#1A3A6F] rounded-3xl p-8 sm:p-10 shadow-2xl shadow-[#1A3A6F]/20 overflow-hidden text-white">
              {/* Internal Gradients */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2DA3DB] rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-5 transform -translate-x-1/2 translate-y-1/2"  />

              <h3 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-3 text-white">
                <CheckCircle2 className="text-[#2DA3DB]" />
                Why Choose Us?
              </h3>

              <div className="space-y-6 relative z-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-[#2DA3DB] transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">{feature.title}</h4>
                      <p className="text-[#D9E4F2]/80 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Decoration */}
              <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-medium text-[#D9E4F2]">
                <ShieldCheck size={14} />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
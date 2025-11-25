// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { name: 'Home', href: '/' },
//     { name: 'Services', href: '/services' },
//     { name: 'Portfolio', href: '/portfolio' },
//     { name: 'Pricing', href: '/pricing' },
//     { name: 'Blog', href: '/blog' },
//     { name: 'FAQ', href: '/faq' },
//   ];

//   return (
//     <header className="bg-white/90 backdrop-blur-md shadow-xl fixed top-2 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl px-4 sm:px-6 lg:px-8 max-w-7xl w-[96%]">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <img src="/logo2.png" alt="VernoraTech" className="h-8 w-auto" />
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.href}
//                 className="text-gray-700 hover:text-primary transition duration-300"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* CTA Button */}
//           <div className="hidden md:block">
//             <a href="#contact" className="btn-primary">
//               Get Quote
//             </a>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-700 hover:text-primary"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div className="md:hidden">
//           <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className="block px-3 py-2 text-gray-700 hover:text-primary transition duration-300"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <a href="#contact" onClick={() => { setIsMenuOpen(false); }} className="block btn-primary text-center mt-4">
//                 Get Quote
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <>
      {/* Fixed Header Container 
        - max-w-7xl to match your other sections
        - top-4 for the "floating" look
      */}
      <header 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-[#1A3A6F]/5 border border-[#D9E4F2]/50' 
            : 'bg-white/70 backdrop-blur-sm border border-transparent'
        } rounded-2xl`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <a href="/" className="flex items-center gap-2 group">
                {/* Logo Placeholder - Replace src with your actual logo path */}
                <div className="h-8 w-8 sm:h-10 sm:w-10 bg-[#1A3A6F] text-white rounded-lg flex items-center justify-center font-bold text-xl">
                  V
                </div>
                <span className="font-bold text-xl tracking-tight text-[#1C1F26] group-hover:text-[#1A3A6F] transition-colors">
                  Vernora<span className="text-[#2DA3DB]">Tech</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-[#6E7787] hover:text-[#1A3A6F] rounded-full hover:bg-[#F0F7FF] transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#1A3A6F] rounded-full hover:bg-[#2DA3DB] transition-colors shadow-lg shadow-[#1A3A6F]/20"
              >
                Get Quote
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-[#1C1F26] hover:bg-[#F0F7FF] hover:text-[#1A3A6F] transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[400px] opacity-100 border-t border-[#D9E4F2]' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-6 space-y-3 bg-white/50 backdrop-blur-xl rounded-b-2xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-[#1C1F26] hover:text-[#1A3A6F] hover:bg-[#F0F7FF] rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-[#D9E4F2]">
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-bold text-white bg-[#1A3A6F] rounded-xl hover:bg-[#2DA3DB] transition-colors shadow-md"
              >
                Get Quote
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
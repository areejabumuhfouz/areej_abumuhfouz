import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';
import { FaBehance } from 'react-icons/fa';
import CV from "../assets/Areej_Abumuhfouz.pdf"
import Logo from '../Assets/Logo.png';
export default function ResponsiveHeader() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    // { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    // { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
  { Icon: Github, href: 'https://github.com/areejabumuhfouz', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/areejabumuhfouz/', label: 'LinkedIn' },
  { Icon: Mail, href: 'mailto:areejabumahfouz@gmail.com', label: 'Email' },
  { Icon: FaBehance, href: 'https://www.behance.net/areejabumahfouz', label: 'Behance' }
];


  return (
    <>
      <header 
        className={`fixed top-4 mx-12 rounded-xl left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 20 
            ? 'bg-[#22063d]/95 backdrop-blur-xl shadow-2xl shadow-black/20 py-3 border border-[#a548ff]/10' 
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              className="group flex items-center gap-2 sm:gap-3 relative z-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {/* <div className="relative">
                <div className="w-16 h-16 sm:w-12 sm:h-12 flex items-center justify-center font-black text-lg sm:text-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
               
                  <img src={Logo} alt="" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#cbd5e1] to-[#a548ff] opacity-0 group-hover:opacity-50 blur-xl transition-all duration-300" />
              </div> */}
              <div className="space-y-4">
                <h3 className="text-4xl font-black">
                  <span className="block bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent">
                    ARJ
                  </span>
                </h3>
              </div>
            
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 xl:px-5 py-2 text-white/80 hover:text-white font-medium transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] group-hover:w-3/4 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Desktop CTA & Social */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              {/* Social Links */}
              <div className="hidden xl:flex items-center gap-2">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#cbd5e1]/50 hover:scale-110 transition-all duration-300 group"
                  >
                    <Icon className="w-4 h-4 text-white/70 group-hover:text-[#cbd5e1] transition-colors" />
                  </a>
                ))}
              </div>

              
              <div className="flex gap-3">
  {/* Open in new tab */}
 
  <a
    href={CV}
    download
    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-white/20 text-white font-semibold 
               hover:bg-white/5 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
  >
    <Download className="w-4 h-4" />
    <span>CV</span>
  </a>
</div>


              {/* Hire Me Button */}
              <a
                href="/contact"
                className="relative px-6 py-2.5 rounded-xl font-semibold text-white overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#cbd5e1]/50 transition-all duration-300 relative z-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[#22063d]/98 backdrop-blur-2xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col justify-center items-center px-6 py-20">
          {/* Decorative gradient orbs */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#cbd5e1]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#a548ff]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

          {/* Navigation Items */}
          <nav className="relative z-10 flex flex-col items-center gap-2 sm:gap-3 w-full max-w-md mb-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group w-full text-center py-4 sm:py-5 text-2xl sm:text-3xl md:text-4xl font-bold text-white/80 hover:text-white transition-all duration-300 relative"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#cbd5e1]/10 to-[#a548ff]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />
              </a>
            ))}
          </nav>

          {/* Mobile CTAs */}
          <div 
            className="relative z-10 flex flex-col sm:flex-row gap-4 w-full max-w-md px-4"
            style={{animation: 'slideIn 0.5s ease-out 0.5s both'}}
          >
            <a
              href="#resume"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border-2 border-white/20 text-white font-bold text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 relative px-6 py-4 rounded-2xl font-bold text-lg text-white overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#cbd5e1] to-[#a548ff]" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Hire Me
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div 
            className="relative z-10 flex items-center gap-4 mt-10"
            style={{animation: 'slideIn 0.5s ease-out 0.6s both'}}
          >
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                onClick={() => setMobileMenuOpen(false)}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#cbd5e1]/50 hover:scale-110 transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/70 group-hover:text-[#cbd5e1] transition-colors" />
              </a>
            ))}
          </div>

          {/* Email */}
          <a
            href="mailto:areejabumahfouz@gmail.com"
            onClick={() => setMobileMenuOpen(false)}
            className="relative z-10 mt-8 text-gray-400 hover:text-[#cbd5e1] transition-colors text-sm sm:text-base"
            style={{animation: 'slideIn 0.5s ease-out 0.7s both'}}
          >
            areejabumahfouz@gmail.com
          </a>
        </div>
      </div>

      {/* Demo Content to show scroll behavior */}
     

      <style jsx>{`
        // @keyframes slideIn {
        //   from {
        //     opacity: 0;
        //     transform: translateY(30px);
        //   }
        //   to {
        //     opacity: 1;
        //     transform: translateY(0);
        //   }
        // }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          50% { transform: translateY(-30px) translateX(20px); opacity: 0.4; }
        }

        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-wave {
          animation: wave 20s linear infinite;
        }
      `}</style>
      
    </>
  );
}
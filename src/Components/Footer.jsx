import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/areejabumuhfouz', color: '#a548ff' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/areejabumuhfouz/', color: '#cbd5e1' },
    // { name: 'Twitter', icon: '🐦', url: '#', color: '#a548ff' },
    { name: 'Email', icon: '📧', url: 'mailto:areejabumahfouz@gmail.com', color: '#cbd5e1' }
  ];

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '#about' },
    { name: 'Services', url: '/services' },
    { name: 'Projects', url: '/projects' },
    { name: 'Skills', url: '#skills' },
    { name: 'Contact', url: '#contact' }
  ];
const services = [
  'Full Stack Web Development',
  'RPA Automation',
  'API Development',
  'UI/UX Design',
  'Database Design & Management',
  'E-commerce Platforms',
  'Secure Authentication Systems'
];

  return (
    <footer 
      className="relative bg-gradient-to-b from-[#22063d] via-[#1a0530] to-[#0f0220] overflow-hidden"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-20"
            style={{
              background: i % 2 === 0 ? '#a548ff' : '#cbd5e1',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${15 + Math.random() * 30}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}

        {/* Gradient orbs */}
        {/* <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, #a548ff 0%, transparent 70%)',
            left: `${mousePos.x / 20}px`,
            top: `${mousePos.y / 20}px`
          }}
        /> */}
        {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#cbd5e1] opacity-10 rounded-full blur-3xl animate-pulse" /> */}
      </div>

      {/* Wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a548ff" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a548ff" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path 
            d="M0,64 C320,96 480,32 720,64 C960,96 1120,32 1200,64 L1200,0 L0,0 Z" 
            fill="url(#waveGradient)"
            className="animate-wave"
          />
        </svg>
      </div>

      <div className="relative pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-4xl font-black">
                  <span className="text-white">Areej</span>
                  <span className="block bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent">
                    Abumuhfouz
                  </span>
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Full Stack Developer & RPA Specialist crafting innovative digital solutions in Jordan.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <p className="text-sm font-bold text-gray-300 uppercase tracking-wider">Connect With Me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      className="group relative w-12 h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:border-[#a548ff]/40 transition-all duration-300 hover:scale-110"
                    >
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"
                        style={{ background: `radial-gradient(circle, ${social.color}40, transparent)` }}
                      />
                      <span className="relative text-xl group-hover:scale-125 transition-transform duration-300">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              {/* <div className="flex items-start gap-3 text-gray-400">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-semibold text-white">Based in</p>
                  <p className="text-sm">Zarqa, Jordan</p>
                </div>
              </div> */}
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-[#a548ff] to-[#cbd5e1] rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <a 
                      href={link.url}
                      className="group flex items-center gap-2 text-gray-400 hover:text-[#cbd5e1] transition-colors duration-300"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] group-hover:w-4 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-[#cbd5e1] to-[#a548ff] rounded-full" />
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a548ff]" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-[#a548ff] to-[#cbd5e1] rounded-full" />
                Stay Updated
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Subscribe to get updates about new projects and opportunities.
              </p>
              
              <div className="space-y-3">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#a548ff]/50 focus:outline-none transition-all duration-300 backdrop-blur-xl"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#a548ff]/20 to-[#cbd5e1]/20 opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                </div>
                
                <button
                  onClick={handleSubscribe}
                  className="group relative w-full px-6 py-3 rounded-xl font-bold text-white overflow-hidden transition-all duration-500 hover:scale-105"
                  disabled={isSubscribed}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#a548ff] to-[#cbd5e1]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubscribed ? (
                      <>
                        <span>✓</span>
                        Subscribed!
                      </>
                    ) : (
                      <>
                        Subscribe
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>

              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping" />
                </div>
                <span className="text-xs font-semibold text-green-400">Available for Projects</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] w-32 h-0.5 rounded-full" />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © {currentYear} <span className="font-bold text-[#cbd5e1]">Areej Abumuhfouz</span>. All rights reserved.
              </p>
              <p className="text-xs mt-1 text-gray-500">
                Crafted with <span className="text-red-500 animate-pulse">❤️</span> and lots of <span className="text-[#a548ff]">☕</span>
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#a548ff] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#cbd5e1] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#a548ff] transition-colors duration-300">
                Cookie Policy
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group relative w-12 h-12 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:border-[#a548ff]/40 transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#a548ff]/20 to-[#cbd5e1]/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
              <svg 
                className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>

          {/* Tech Stack Badge */}
          {/* <div className="mt-12 text-center">
            <p className="text-xs text-gray-500 mb-3">Built with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React', 'Node.js', 'MongoDB', 'Tailwind'].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 font-medium backdrop-blur-xl hover:border-[#a548ff]/30 hover:text-[#cbd5e1] transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
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
    </footer>
  );
}
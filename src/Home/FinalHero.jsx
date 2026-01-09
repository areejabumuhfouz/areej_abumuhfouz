import React, { useState, useEffect, useRef } from 'react';

export default function PortfolioHero() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        color: i % 3 === 0 ? '#cbd5e1' : i % 3 === 1 ? '#a548ff' : '#cbd5e1'
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(165, 72, 255, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 1.0;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      });
    }
  };

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#22063d]  overflow-hidden flex items-center justify-center"
    >
      {/* Canvas for particle network */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />

    

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 opacity-0 mt-20" style={{ animation: 'fadeInUp 1s ease-out 0.2s forwards' }}>
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#cbd5e1]/10 to-[#a548ff]/10 border border-[#cbd5e1]/40 backdrop-blur-xl shadow-lg shadow-[#cbd5e1]/5">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-[#cbd5e1] animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-[#a548ff] animate-ping" />
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] bg-clip-text text-transparent tracking-wide ">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            {/* Name with huge impact */}
            <div className="space-y-5">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight">
                <span className="block text-white drop-shadow-2xl">Areej</span>
                <span 
                  className=" bg-gradient-to-r from-[#a548ff] via-[#cbd5e1] to-[#a548ff] bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '200% auto',
                    animation: 'shimmer 8s linear infinite',
                    WebkitTextStroke: '0.1px rgba(165, 72, 255, 0.8)'
                  }}
                >
                  Abumuhf
                </span>
                <span 
                  className="  bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '20% auto',
                    animation: 'shimmer 8s linear infinite',
                    WebkitTextStroke: '0.8px rgba(165, 72, 255, 0.8)'
                  }}
                >
                  ouz
                </span>
              </h1>
              
              {/* Title with underline effect */}
              <div className="relative inline-block">
                <h2 className="text-2xl md:text-4xl font-bold text-white/90 tracking-wide">
                  Full Stack Developer
                </h2>
                <div 
                  className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-[#cbd5e1] via-[#a548ff] to-transparent rounded-full shadow-lg shadow-[#a548ff]/50"
                  style={{
                    width: '100%',
                    animation: 'expandWidth 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both'
                  }}
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
              Full Stack Developer crafting{' '}
              <span className="font-bold text-[#cbd5e1] drop-shadow-glow ">scalable</span>,{' '}
              <span className="font-bold text-[#a548ff] drop-shadow-glow">secure</span>, and{' '}
              <span className="font-bold text-[#cbd5e1] drop-shadow-glow">high-performance</span>{' '}
              web applications. Leading teams to transform business needs into exceptional digital experiences.
            </p>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
  Full Stack{' '}
  <span className="font-bold text-[#cbd5e1] drop-shadow-glow">MERN & PERN</span>{' '}
  Developer with{' '}
  <span className="font-bold text-[#a548ff] drop-shadow-glow">3+ years</span>{' '}
  of experience building{' '}
  <span className="font-bold text-[#cbd5e1] drop-shadow-glow">scalable</span>,{' '}
  <span className="font-bold text-[#a548ff] drop-shadow-glow">secure</span>, and{' '}
  <span className="font-bold text-[#cbd5e1] drop-shadow-glow">high-performance</span>{' '}
  web applications. Also experienced as an{' '}
  <span className="font-bold text-[#a548ff] drop-shadow-glow">RPA Developer (1 year)</span>{' '}
  and{' '}
  <span className="font-bold text-[#cbd5e1] drop-shadow-glow">Graphic Designer (1 year)</span>, 
  delivering complete, business-focused digital solutions.
</p>


           

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5 pt-6">
              <button className="group relative px-10 py-5 rounded-2xl font-bold text-lg text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#cbd5e1]/40">
                <div className="absolute inset-0 bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-3">
                  View Portfolio
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button className="group px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 text-white hover:bg-white hover:text-[#22063d] backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right side - 3D Vector illustration */}
          <div className="relative ml-12 " style={{ animation: 'fadeInUp 1s ease-out 0.4s forwards' }}>
             {/* Floating card effect */}
             <div
              className="relative"
            //   style={{
            //     transform: `perspective(1500px) rotateY(${(mousePos.x - 0.5) * 15}deg) rotateX(${(mousePos.y - 0.5) * -15}deg)`,
            //     transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            //   }}
            >
              {/* Main illustration container */}
              <div className="relative w-full  max-w-xl mx-auto">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] opacity-30 blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
          
                {/* SVG Illustration */}
                <svg viewBox="0 0 500 500" className="w-full h-full relative z-10 drop-shadow-2xl">
                  {/* Background circles */}
                  {/* <circle cx="250" cy="250" r="220" fill="url(#grad1)" opacity="0.08" />
                  <circle cx="250" cy="250" r="180" fill="url(#grad2)" opacity="0.08" />
                  <circle cx="250" cy="250" r="140" fill="url(#grad1)" opacity="0.08" />
                   */}
                  {/* Code brackets with glow */}
                  <g filter="url(#glow)">
                    <path d="M 130 170 L 95 250 L 130 330" stroke="#a548ff" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" />
                    <path d="M 370 170 L 405 250 L 370 330" stroke="#cbd5e1" strokeWidth="10" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                  </g>
                  
                  {/* Central laptop/screen with depth */}
                  <g filter="url(#shadow)">
                    <rect x="165" y="190" width="170" height="120" rx="12" fill="#ffffff" stroke="url(#grad1)" strokeWidth="4" />
                    <rect x="175" y="200" width="150" height="90" fill="url(#grad3)" opacity="0.4" rx="6" />
                  </g>
                  
                  {/* Code lines with animation */}
                  <g className="code-lines">
                    <line x1="190" y1="220" x2="270" y2="220" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
                    <line x1="190" y1="238" x2="300" y2="238" stroke="#a548ff" strokeWidth="4" strokeLinecap="round" />
                    <line x1="190" y1="256" x2="250" y2="256" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
                    <line x1="190" y1="274" x2="310" y2="274" stroke="#a548ff" strokeWidth="4" strokeLinecap="round" />
                  </g>
                  
                  {/* Floating elements with depth */}
                  {/* <g filter="url(#glow)">
                    <circle cx="120" cy="140" r="16" fill="#cbd5e1" className="animate-bounce" />
                    <circle cx="380" cy="160" r="14" fill="#a548ff" className="animate-bounce" style={{animationDelay: '0.3s'}} />
                    <circle cx="390" cy="340" r="18" fill="#cbd5e1" className="animate-bounce" style={{animationDelay: '0.6s'}} />
                    <circle cx="110" cy="350" r="15" fill="#a548ff" className="animate-bounce" style={{animationDelay: '0.9s'}} />
                    <circle cx="350" cy="250" r="12" fill="#e0b3ff" className="animate-bounce" style={{animationDelay: '1.2s'}} />
                  </g> */}
                  
                  {/* Terminal cursor */}
                  <rect x="315" y="271" width="10" height="10" rx="2" fill="#a548ff" className="animate-pulse" />
                  
                  {/* Gradients and filters */}
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#cbd5e1" />
                      <stop offset="100%" stopColor="#a548ff" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#a548ff" />
                      <stop offset="100%" stopColor="#cbd5e1" />
                    </linearGradient>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#a548ff" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.6" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="shadow">
                      <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3"/>
                    </filter>
                  </defs>
                </svg>

                {/* Orbiting elements */}
                <div className="absolute inset-0">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 -mt-2 -ml-2 rounded-full shadow-lg"
                      style={{
                        width: '16px',
                        height: '16px',
                        background: i % 2 === 0 ? 'linear-gradient(135deg, #a548ff, #cbd5e1)' : 'linear-gradient(135deg, #a548ff, #8030cc)',
                        boxShadow: `0 0 20px ${i % 2 === 0 ? '#cbd5e1' : '#a548ff'}`,
                        animation: `orbit ${10 + i * 3}s linear infinite`,
                        animationDelay: `${i * 1.5}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements around illustration */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#cbd5e1]/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#a548ff]/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}} />
          </div>
          
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0" style={{ animation: 'fadeInUp 1s ease-out 1s forwards' }}>
          <span className="text-sm text-gray-400 font-medium tracking-wider uppercase">Scroll to explore</span>
          <div className="w-7 h-12 rounded-full border-2 border-[#a548ff]/50 flex items-start justify-center p-2 backdrop-blur-sm bg-white/5 shadow-lg shadow-[#a548ff]/10">
            <div className="w-2 h-4 rounded-full bg-gradient-to-b from-[#cbd5e1] to-[#a548ff] animate-bounce shadow-lg shadow-[#a548ff]/50" style={{animationDuration: '2s'}} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.05); }
        }
        
        @keyframes expandWidth {
          from { width: 0; opacity: 0; }
          to { width: 100%; opacity: 1; }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(140px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(140px) rotate(-360deg);
          }
        }

        .drop-shadow-glow {
          filter: drop-shadow(0 0 10px currentColor);
        }

        .code-lines line {
          animation: codeAppear 0.6s ease-out forwards;
          opacity: 0;
        }

        .code-lines line:nth-child(1) { animation-delay: 1.2s; }
        .code-lines line:nth-child(2) { animation-delay: 1.4s; }
        .code-lines line:nth-child(3) { animation-delay: 1.6s; }
        .code-lines line:nth-child(4) { animation-delay: 1.8s; }

        @keyframes codeAppear {
          from {
            opacity: 0;
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }
          to {
            opacity: 1;
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
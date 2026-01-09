
import React, { useState, useEffect, useRef } from 'react';

export default function PortfolioHero() {
  // const [scrollY, setScrollY] = useState(0);
  // const canvasRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;
    
  //   const ctx = canvas.getContext('2d');
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;

  //   const particles = [];
  //   const particleCount = 60;

  //   for (let i = 0; i < particleCount; i++) {
  //     particles.push({
  //       x: Math.random() * canvas.width,
  //       y: Math.random() * canvas.height,
  //       radius: Math.random() * 1.2 + 0.4,
  //       vx: (Math.random() - 0.5) * 0.2,
  //       vy: (Math.random() - 0.5) * 0.2,
  //       color: i % 2 === 0 ? '#cbd5e1' : '#a548ff'
  //     });
  //   }

  //   function animate() {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
      
  //     particles.forEach((p, i) => {
  //       p.x += p.vx;
  //       p.y += p.vy;

  //       if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
  //       if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

  //       ctx.beginPath();
  //       ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
  //       ctx.fillStyle = p.color;
  //       ctx.fill();

  //       particles.forEach((p2, j) => {
  //         if (i === j) return;
  //         const dx = p.x - p2.x;
  //         const dy = p.y - p2.y;
  //         const dist = Math.sqrt(dx * dx + dy * dy);

  //         if (dist < 100) {
  //           ctx.beginPath();
  //           ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - dist / 100)})`;
  //           ctx.lineWidth = 0.5;
  //           ctx.moveTo(p.x, p.y);
  //           ctx.lineTo(p2.x, p2.y);
  //           ctx.stroke();
  //         }
  //       });
  //     });

  //     requestAnimationFrame(animate);
  //   }

  //   animate();

  //   const handleResize = () => {
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //   };
  //   window.addEventListener('resize', handleResize);

  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

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
            className="relative min-h-screen bg-[#22063d]  overflow-hidden flex items-center justify-center pt-12"

    
    // className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden flex items-center">
     > {/* Subtle particle network */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
               <span className="text-sm font-semibold bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] bg-clip-text text-transparent tracking-wide ">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            {/* Name */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-white">Areej</span>
                <span 
                className=" bg-gradient-to-r from-[#a548ff] via-[#cbd5e1] to-[#a548ff] bg-clip-text text-transparent"

                // className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400"
                >
                  Abumuhfouz
                </span>
              </h1>
              
              {/* Title */}
              {/* <h2 className="text-2xl md:text-3xl font-semibold text-slate-300">
                Full Stack Developer
              </h2> */}
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
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed max-w-xl">
              <p>
                Full Stack <span className="text-[#cbd5e1] drop-shadow-glow  font-medium">MERN & PERN</span> Developer with{' '}
                <span className="text-[#a548ff] drop-shadow-glow font-medium">3+ years</span> of experience building{' '}
                <span className="text-[#cbd5e1] drop-shadow-glow font-medium">scalable</span>,{' '}
                <span className="text-[#cbd5e1] drop-shadow-glow font-medium">secure</span>, and{' '}
                <span className="text-[#cbd5e1] drop-shadow-glow font-medium">high-performance</span> web applications.
              </p>
              <p>
                Also experienced as an <span className="text-[#cbd5e1] drop-shadow-glow  font-medium">RPA Developer</span> and{' '}
                <span className="text-[#cbd5e1] drop-shadow-glow  font-medium">Graphic Designer</span>, delivering complete, business-focused digital solutions.
              </p>
            </div>
              <div className="flex flex-wrap gap-4 pt-4">
              <button className="group relative px-8 py-5 rounded-2xl font-bold text-lg text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#cbd5e1]/40">
                <div className="absolute inset-0 bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-3">
                  View Portfolio
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button className="group px-6 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 text-white hover:bg-white hover:text-[#22063d] backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                Contact Me
              </button>
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-wrap gap-4 pt-4">
              <button className="group px-8 py-3.5 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5">
                View Portfolio
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button className="px-8 py-3.5 rounded-lg font-semibold text-slate-300 border border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5">
                Contact Me
              </button>
            </div> */}

            {/* Tech stack indicators */}
            {/* <div className="flex flex-wrap gap-3 pt-4 opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.6s forwards' }}>
              {['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'TypeScript'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 text-sm font-medium text-slate-400 bg-slate-800/30 border border-slate-700/50 rounded-md">
                  {tech}
                </span>
              ))}
            </div> */}
          </div>

          {/* Right side - Professional illustration */}
          <div className="relative opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl" />
          
              {/* SVG Illustration */}
              <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
                {/* Code window */}
                <g>
                  {/* Window frame */}
                  <rect x="60" y="80" width="280" height="200" rx="12" fill="#1e293b" stroke="#a548ff"  strokeWidth="2" />
                  
                  {/* Window header */}
                  <rect x="60" y="80" width="280" height="32" rx="12" fill="#334155" />
                  <circle cx="80" cy="96" r="4" fill="#ef4444" />
                  <circle cx="96" cy="96" r="4" fill="#f59e0b" />
                  <circle cx="112" cy="96" r="4" fill="#10b981" />
                  
                  {/* Code lines */}
                  <g className="code-lines">
                    <line x1="80" y1="140" x2="180" y2="140" stroke="#a548ff"  strokeWidth="3" strokeLinecap="round" />
                    <line x1="80" y1="165" x2="240" y2="165" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                    <line x1="80" y1="190" x2="200" y2="190" stroke="#a548ff"  strokeWidth="3" strokeLinecap="round" />
                    <line x1="80" y1="215" x2="260" y2="215" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                    <line x1="80" y1="240" x2="220" y2="240" stroke="#a548ff"  strokeWidth="3" strokeLinecap="round" />
                  </g>
                  
                  {/* Cursor */}
                  <rect x="270" y="237" width="8" height="12" rx="1" fill="#a548ff" className="cursor-blink" />
                </g>
                
                {/* Floating elements */}
                <g className="floating-elements">
                  <circle cx="320" cy="120" r="8" fill="#a548ff" opacity="0.6" className="float-1" />
                  <circle cx="80" cy="300" r="6" fill="#cbd5e1" opacity="0.6" className="float-2" />
                  <rect x="310" y="280" width="12" height="12" fill="#a548ff" opacity="0.6" className="float-3" />
                  <circle cx="90" cy="60" r="7" fill="#cbd5e1" opacity="0.6" className="float-4" />
                </g>

                {/* Code brackets */}
                <path d="M 30 140 L 15 200 L 30 260" stroke="#a548ff"  strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.3" />
                <path d="M 370 140 L 385 200 L 370 260" stroke="#a548ff"  strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out 1s forwards' }}>
          <span className="text-xs text-[#cbd5e1] font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-slate-400 animate-bounce" />
          </div>
        </div>
      </div>

      <style jsx>{`
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
          @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 10px currentColor);
        }
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(140px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(140px) rotate(-360deg);
          }
        }

        .code-lines line {
          animation: codeAppear 0.6s ease-out forwards;
          opacity: 0;
        }

        // .code-lines line:nth-child(1) { animation-delay: 0.8s; }
        // .code-lines line:nth-child(2) { animation-delay: 1s; }
        // .code-lines line:nth-child(3) { animation-delay: 1.2s; }
        // .code-lines line:nth-child(4) { animation-delay: 1.4s; }
        // .code-lines line:nth-child(5) { animation-delay: 1.6s; }
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

        .cursor-blink {
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .float-1 {
          animation: float 4s ease-in-out infinite;
        }

        .float-2 {
          animation: float 5s ease-in-out infinite 0.5s;
        }

        .float-3 {
          animation: float 4.5s ease-in-out infinite 1s;
        }

        .float-4 {
          animation: float 5.5s ease-in-out infinite 1.5s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
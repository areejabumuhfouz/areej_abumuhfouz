// import { useEffect, useRef, useState } from 'react';

// // ── Link data ──────────────────────────────────────────────────────────────
// const LINKS = [
//   {
//     section: 'Contact',
//     items: [
//       {
//         label: 'Phone',
//         value: '+962 78 290 7153',
//         href: 'tel:+962782907153',
//         icon: (
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//             <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.17 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.08-.54a2 2 0 012.11.45 16 16 0 002.81.7A2 2 0 0122 16.92z"/>
//           </svg>
//         ),
//       },
//       {
//         label: 'Email',
//         value: 'AreejAbumahfouz@gmail.com',
//         href: 'mailto:AreejAbumahfouz@gmail.com',
//         icon: (
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//             <rect x="2" y="4" width="20" height="16" rx="2"/>
//             <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
//           </svg>
//         ),
//       },
//     ],
//   },
//   {
//     section: 'Online',
//     items: [
//       {
//         label: 'Portfolio',
//         value: 'AreejAbumuhfouz.site',
//         href: 'https://www.AreejAbumuhfouz.site',
//         icon: (
//           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//             <circle cx="12" cy="12" r="10"/>
//             <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
//           </svg>
//         ),
//       },
//       {
//         label: 'LinkedIn',
//         value: 'in/areejabumuhfouz',
//         href: 'https://www.linkedin.com/in/areejabumuhfouz',
//         icon: (
//           <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//             <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//           </svg>
//         ),
//       },
//       {
//         label: 'GitHub',
//         value: 'github.com/areejabumuhfouz',
//         href: 'https://github.com/areejabumuhfouz',
//         icon: (
//           <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
//             <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
//           </svg>
//         ),
//       },
//     ],
//   },
// ];

// // ── Arrow icon ─────────────────────────────────────────────────────────────
// function ArrowIcon() {
//   return (
//     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4 flex-shrink-0">
//       <path d="M5 12h14M12 5l7 7-7 7"/>
//     </svg>
//   );
// }

// // ── Particle canvas background ─────────────────────────────────────────────
// function ParticleCanvas() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     let animId;

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener('resize', resize);

//     const particles = Array.from({ length: 55 }, (_, i) => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       r: Math.random() * 1.4 + 0.4,
//       vx: (Math.random() - 0.5) * 0.25,
//       vy: (Math.random() - 0.5) * 0.25,
//       color: i % 3 === 0 ? '#a548ff' : '#cbd5e1',
//     }));

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((p, i) => {
//         p.x += p.vx;
//         p.y += p.vy;
//         if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = p.color;
//         ctx.fill();

//         particles.forEach((p2, j) => {
//           if (j <= i) return;
//           const dx = p.x - p2.x, dy = p.y - p2.y;
//           const dist = Math.hypot(dx, dy);
//           if (dist < 110) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(165,72,255,${0.12 * (1 - dist / 110)})`;
//             ctx.lineWidth = 0.8;
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.stroke();
//           }
//         });
//       });
//       animId = requestAnimationFrame(draw);
//     };
//     draw();

//     return () => {
//       cancelAnimationFrame(animId);
//       window.removeEventListener('resize', resize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="fixed inset-0 opacity-25 pointer-events-none" />;
// }

// // ── QR Code canvas (pure JS — no library needed) ───────────────────────────
// // We embed the URL as a simple visual placeholder styled to match the brand.
// // For a real scannable QR, install `qrcode` (npm i qrcode) and swap this out.
// function QRCanvas({ url }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     // Try to use the global QRCode if the script is present, otherwise show a styled placeholder
//     const canvas = ref.current;
//     if (!canvas) return;

//     // Attempt dynamic import of qrcode library
//     import('qrcode').then((QRCode) => {
//       QRCode.toCanvas(canvas, url, {
//         width: 160,
//         margin: 2,
//         color: { dark: '#22063d', light: '#ffffff' },
//       });
//     }).catch(() => {
//       // Fallback: draw branded placeholder
//       const ctx = canvas.getContext('2d');
//       const s = canvas.width;
//       ctx.fillStyle = '#fff';
//       ctx.fillRect(0, 0, s, s);

//       // Corner squares
//       const drawCorner = (x, y) => {
//         ctx.fillStyle = '#22063d';
//         ctx.fillRect(x, y, 36, 36);
//         ctx.fillStyle = '#fff';
//         ctx.fillRect(x + 4, y + 4, 28, 28);
//         ctx.fillStyle = '#a548ff';
//         ctx.fillRect(x + 10, y + 10, 16, 16);
//       };
//       drawCorner(10, 10);
//       drawCorner(114, 10);
//       drawCorner(10, 114);

//       // Dot grid
//       ctx.fillStyle = '#22063d';
//       for (let r = 0; r < 7; r++) {
//         for (let c = 0; c < 7; c++) {
//           if (Math.random() > 0.45) {
//             ctx.fillRect(60 + c * 14, 10 + r * 14, 10, 10);
//           }
//           if (Math.random() > 0.45) {
//             ctx.fillRect(10 + c * 14, 60 + r * 14, 10, 10);
//           }
//           if (Math.random() > 0.45) {
//             ctx.fillRect(60 + c * 14, 60 + r * 14, 10, 10);
//           }
//         }
//       }

//       // Center brand dot
//       ctx.fillStyle = '#a548ff';
//       ctx.beginPath();
//       ctx.arc(s / 2, s / 2, 12, 0, Math.PI * 2);
//       ctx.fill();
//     });
//   }, [url]);

//   return <canvas ref={ref} width={160} height={160} className="rounded-lg block" />;
// }

// // ── Link card ──────────────────────────────────────────────────────────────
// function LinkCard({ label, value, href, icon, delay }) {
//   return (
//     <a
//       href={href}
//       target={href.startsWith('http') ? '_blank' : undefined}
//       rel="noopener noreferrer"
//       className="group flex items-center gap-4 px-5 py-4 rounded-2xl border border-[#a548ff]/20 bg-white/[0.03] backdrop-blur-sm hover:bg-[#a548ff]/10 hover:border-[#a548ff]/50 transition-all duration-300 hover:-translate-y-0.5"
//       style={{ animation: `fadeUp 0.55s ease both ${delay}s` }}
//     >
//       {/* Icon box */}
//       <div className="w-11 h-11 rounded-xl bg-[#a548ff]/15 border border-[#a548ff]/30 flex items-center justify-center flex-shrink-0 text-[#a548ff] group-hover:bg-[#a548ff]/25 transition-colors duration-300">
//         {icon}
//       </div>

//       {/* Text */}
//       <div className="flex-1 min-w-0">
//         <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#9d8abf] mb-0.5 font-mono">
//           {label}
//         </p>
//         <p className="text-sm font-semibold text-white/90 truncate">
//           {value}
//         </p>
//       </div>

//       {/* Arrow */}
//       <span className="text-[#a548ff]/50 group-hover:text-[#a548ff] group-hover:translate-x-1 transition-all duration-300">
//         <ArrowIcon />
//       </span>
//     </a>
//   );
// }

// // ── Main page ──────────────────────────────────────────────────────────────
// export default function QRPage() {
//   const [copied, setCopied] = useState(false);
//   const portfolioUrl = 'https://www.AreejAbumuhfouz.site';

//   const handleCopy = () => {
//     navigator.clipboard.writeText(portfolioUrl).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     });
//   };

//   let delay = 0.05;
//   const nextDelay = (step = 0.08) => { delay += step; return delay; };

//   return (
//     <div className="relative min-h-screen bg-[#22063d] overflow-x-hidden flex flex-col items-center">

//       {/* Particle background */}
//       <ParticleCanvas />

//       {/* Gradient mesh */}
//       <div className="fixed inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#a548ff]/12 rounded-full blur-3xl" />
//         <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#a548ff]/10 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#cbd5e1]/5 rounded-full blur-3xl" />
//       </div>

//       {/* Grid overlay */}
//       <div
//         className="fixed inset-0 pointer-events-none opacity-[0.04]"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(0deg, #a548ff 0, #a548ff 1px, transparent 1px, transparent 40px),
//             repeating-linear-gradient(90deg, #a548ff 0, #a548ff 1px, transparent 1px, transparent 40px)
//           `,
//         }}
//       />

//       {/* ── Content ── */}
//       <div className="relative z-10 w-full max-w-md mx-auto px-5 pt-14 pb-20 flex flex-col items-center gap-8">

//         {/* ── Identity ── */}
//         <div className="flex flex-col items-center gap-4" style={{ animation: 'fadeUp 0.6s ease both 0.05s' }}>
//           {/* Avatar */}
//           <div className="relative">
//             <div
//               className="w-24 h-24 rounded-full p-[3px]"
//               style={{ background: 'linear-gradient(135deg, #a548ff, #cbd5e1, #a548ff)', animation: 'spinHue 8s linear infinite' }}
//             >
//               <div className="w-full h-full rounded-full bg-[#2e0852] flex items-center justify-center">
//                 <span
//                   className="text-3xl font-black tracking-tighter"
//                   style={{ background: 'linear-gradient(135deg, #cbd5e1, #a548ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
//                 >
//                   AA
//                 </span>
//               </div>
//             </div>
//             {/* Pulse ring */}
//             <div className="absolute inset-0 rounded-full border-2 border-[#a548ff]/30 animate-ping" style={{ animationDuration: '2.5s' }} />
//           </div>

//           {/* Name */}
//           <div className="text-center">
//             <h1
//               className="text-3xl sm:text-4xl font-black tracking-tight leading-none mb-2"
//               style={{ background: 'linear-gradient(90deg, #fff 0%, #cbd5e1 45%, #a548ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
//             >
//               Areej Abumuhfouz
//             </h1>

//             {/* Status badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#a548ff]/30 backdrop-blur-sm mt-1">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
//               </span>
//               <span className="text-xs font-semibold text-[#cbd5e1] tracking-widest font-mono uppercase">
//                 Full Stack Developer
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* ── Link sections ── */}
//         <div className="w-full flex flex-col gap-5">
//           {LINKS.map(({ section, items }) => (
//             <div key={section} className="flex flex-col gap-2">
//               {/* Section label */}
//               <p
//                 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#9d8abf] font-mono px-1"
//                 style={{ animation: `fadeUp 0.5s ease both ${nextDelay(0.06)}s` }}
//               >
//                 {section}
//               </p>

//               {items.map((item) => (
//                 <LinkCard key={item.label} {...item} delay={nextDelay(0.07)} />
//               ))}

//               {/* Divider between sections */}
//               <div className="h-px bg-gradient-to-r from-transparent via-[#a548ff]/20 to-transparent mt-1" />
//             </div>
//           ))}
//         </div>

//         {/* ── QR Code ── */}
//         <div
//           className="flex flex-col items-center gap-4 w-full"
//           style={{ animation: `fadeUp 0.6s ease both ${nextDelay(0.1)}s` }}
//         >
//           <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#9d8abf] font-mono">
//             Scan to visit portfolio
//           </p>

//           {/* QR frame */}
//           <div className="relative p-4 bg-white rounded-2xl shadow-[0_0_40px_rgba(165,72,255,0.25)] border-2 border-[#a548ff]/40">
//             {/* Corner accents */}
//             <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#a548ff] rounded-tl-xl" />
//             <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#a548ff] rounded-tr-xl" />
//             <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#a548ff] rounded-bl-xl" />
//             <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#a548ff] rounded-br-xl" />
//             <QRCanvas url={portfolioUrl} />
//           </div>

//           {/* URL + copy */}
//           <button
//             onClick={handleCopy}
//             className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#a548ff]/40 hover:bg-[#a548ff]/10 transition-all duration-300"
//           >
//             <span className="text-xs text-[#9d8abf] group-hover:text-[#cbd5e1] font-mono transition-colors">
//               {portfolioUrl.replace('https://', '')}
//             </span>
//             {copied ? (
//               <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" className="w-3.5 h-3.5 flex-shrink-0">
//                 <path d="M20 6L9 17l-5-5"/>
//               </svg>
//             ) : (
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5 flex-shrink-0 text-[#9d8abf] group-hover:text-[#a548ff] transition-colors">
//                 <rect x="9" y="9" width="13" height="13" rx="2"/>
//                 <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* ── Footer ── */}
//         <p
//           className="text-[11px] text-[#9d8abf]/60 font-mono tracking-wider text-center"
//           style={{ animation: `fadeUp 0.5s ease both ${nextDelay(0.08)}s` }}
//         >
//           © {new Date().getFullYear()} Areej Abumuhfouz
//         </p>
//       </div>

//       {/* Global keyframes */}
//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(22px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes spinHue {
//           to { filter: hue-rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// }




import { useEffect, useRef, useState } from 'react';

// ── Particle canvas ────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 60 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.4,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      color: i % 2 === 0 ? '#cbd5e1' : '#a548ff',
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        particles.forEach((p2, j) => {
          if (j <= i) return;
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,102,241,${0.1 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex:0, opacity:0.3 }} />;
}

// ── QR canvas ──────────────────────────────────────────────────────────────
function QRCanvas({ url }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    import('qrcode').then((QRCode) => {
      QRCode.toCanvas(canvas, url, { width:160, margin:2, color:{ dark:'#22063d', light:'#ffffff' } });
    }).catch(() => {
      const ctx = canvas.getContext('2d');
      const s = canvas.width;
      ctx.fillStyle = '#fff'; ctx.fillRect(0,0,s,s);
      const dc = (x,y) => {
        ctx.fillStyle='#22063d'; ctx.fillRect(x,y,36,36);
        ctx.fillStyle='#fff';    ctx.fillRect(x+4,y+4,28,28);
        ctx.fillStyle='#a548ff'; ctx.fillRect(x+10,y+10,16,16);
      };
      dc(10,10); dc(114,10); dc(10,114);
      ctx.fillStyle='#22063d';
      for(let r=0;r<7;r++) for(let c=0;c<7;c++){
        if(Math.random()>0.45) ctx.fillRect(60+c*14,10+r*14,10,10);
        if(Math.random()>0.45) ctx.fillRect(10+c*14,60+r*14,10,10);
        if(Math.random()>0.45) ctx.fillRect(60+c*14,60+r*14,10,10);
      }
      ctx.fillStyle='#a548ff';
      ctx.beginPath(); ctx.arc(s/2,s/2,12,0,Math.PI*2); ctx.fill();
    });
  }, [url]);
  return <canvas ref={ref} width={160} height={160} className="block rounded-lg" />;
}

// ── Link card ──────────────────────────────────────────────────────────────
function LinkCard({ label, value, href, icon, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-4 px-5 py-4 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 no-underline"
      style={{
        background: hovered ? 'rgba(165,72,255,0.12)' : 'rgba(255,255,255,0.04)',
        border: `1px solid ${hovered ? 'rgba(165,72,255,0.6)' : 'rgba(165,72,255,0.25)'}`,
        animation: `fadeUp 0.6s ease both ${delay}s`,
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
        style={{
          background: hovered ? 'rgba(165,72,255,0.25)' : 'rgba(165,72,255,0.15)',
          border: '1px solid rgba(165,72,255,0.3)',
          color: '#a548ff',
        }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-1" style={{ color:'#9d8abf', fontFamily:'JetBrains Mono, monospace' }}>
          {label}
        </p>
        <p className="text-sm font-semibold truncate" style={{ color:'rgba(255,255,255,0.9)' }}>
          {value}
        </p>
      </div>
      <span
        className="transition-all duration-300"
        style={{
          color: hovered ? '#a548ff' : 'rgba(165,72,255,0.6)',
          transform: hovered ? 'translateX(3px)' : 'translateX(0)',
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </span>
    </a>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function QRPage() {
  const [copied, setCopied] = useState(false);
  const portfolioUrl = 'https://www.AreejAbumuhfouz.site';

  const handleCopy = () => {
    navigator.clipboard.writeText(portfolioUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Icons
  const phoneIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.17 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.08-.54a2 2 0 012.11.45 16 16 0 002.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
  const emailIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
    </svg>
  );
  const globeIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  );
  const linkedinIcon = (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden flex flex-col items-center" style={{ background:'#22063d' }}>

      {/* Particles */}
      <ParticleCanvas />

      {/* Radial glows */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex:0 }}>
        <div style={{ position:'absolute', top:0, left:'20%', width:'60%', height:'50%', background:'radial-gradient(ellipse at center, rgba(165,72,255,0.18) 0%, transparent 70%)' }} />
        <div style={{ position:'absolute', bottom:0, right:'20%', width:'50%', height:'60%', background:'radial-gradient(ellipse at center, rgba(165,72,255,0.12) 0%, transparent 70%)' }} />
        <div style={{ position:'absolute', top:'50%', left:0, width:'40%', height:'40%', background:'radial-gradient(ellipse at center, rgba(203,213,225,0.04) 0%, transparent 70%)' }} />
      </div>

      {/* Grid lines */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex:0,
          backgroundImage:`repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(165,72,255,0.04) 39px,rgba(165,72,255,0.04) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(165,72,255,0.04) 39px,rgba(165,72,255,0.04) 40px)`,
        }}
      />

      {/* ── Content ── */}
      <div className="relative w-full max-w-[420px] mx-auto px-5 pt-12 pb-20 flex flex-col items-center" style={{ zIndex:1 }}>

        {/* Identity */}
        <div className="flex flex-col items-center mb-10" style={{ animation:'fadeUp 0.7s ease both 0.05s' }}>

          {/* Avatar ring */}
          <div
            className="w-24 h-24 rounded-full mb-5"
            style={{ padding:'3px', background:'linear-gradient(135deg, #a548ff, #cbd5e1, #a548ff)', animation:'spinHue 8s linear infinite' }}
          >
            <div
              className="w-full h-full rounded-full flex items-center justify-center"
              style={{ background:'linear-gradient(135deg, #2e0852, #3a0a66)' }}
            >
              <span
                className="text-3xl font-black tracking-tighter"
                style={{ fontFamily:'Sora, sans-serif', background:'linear-gradient(135deg, #cbd5e1, #a548ff)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}
              >
                AA
              </span>
            </div>
          </div>

          {/* Name */}
          <h1
            className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-center mb-3"
            style={{ fontFamily:'Sora, sans-serif', background:'linear-gradient(90deg, #ffffff 0%, #cbd5e1 45%, #a548ff 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}
          >
            Areej Abumuhfouz
          </h1>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
            style={{ background:'rgba(255,255,255,0.05)', borderColor:'rgba(165,72,255,0.35)' }}
          >
            <div className="relative w-2 h-2 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping" style={{ animationDuration:'1.4s' }} />
              <div className="relative w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color:'#cbd5e1', fontFamily:'JetBrains Mono, monospace' }}
            >
              Full Stack Developer
            </span>
          </div>
        </div>

        {/* ── Contact ── */}
        <div className="w-full flex flex-col gap-3 mb-2">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase px-1" style={{ color:'#9d8abf', fontFamily:'JetBrains Mono, monospace', animation:'fadeUp 0.5s ease both 0.12s' }}>
            Contact
          </p>
          <LinkCard label="Phone" value="+962 78 290 7153"          href="tel:+962782907153"                        icon={phoneIcon} delay={0.18} />
          <LinkCard label="Email" value="AreejAbumahfouz@gmail.com" href="mailto:AreejAbumahfouz@gmail.com"         icon={emailIcon} delay={0.25} />
        </div>

        {/* Divider */}
        <div className="w-full h-px my-4" style={{ background:'linear-gradient(90deg, transparent, rgba(165,72,255,0.3), transparent)' }} />

        {/* ── Online ── */}
        <div className="w-full flex flex-col gap-3 mb-2">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase px-1" style={{ color:'#9d8abf', fontFamily:'JetBrains Mono, monospace', animation:'fadeUp 0.5s ease both 0.30s' }}>
            Online
          </p>
          <LinkCard label="Portfolio" value="AreejAbumuhfouz.site" href="https://www.AreejAbumuhfouz.site"             icon={globeIcon}    delay={0.36} />
          <LinkCard label="LinkedIn"  value="in/areejabumuhfouz"   href="https://www.linkedin.com/in/areejabumuhfouz"  icon={linkedinIcon} delay={0.43} />
        </div>

        {/* ── QR ── */}
        <div className="flex flex-col items-center gap-4 mt-9 w-full" style={{ animation:'fadeUp 0.6s ease both 0.52s' }}>
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase" style={{ color:'#9d8abf', fontFamily:'JetBrains Mono, monospace' }}>
            Scan to visit portfolio
          </p>

          {/* White QR frame with purple glow */}
          <div
            className="relative p-4 rounded-2xl border-2"
            style={{ background:'#ffffff', borderColor:'rgba(165,72,255,0.5)', boxShadow:'0 0 40px rgba(165,72,255,0.2)' }}
          >
            <QRCanvas url={portfolioUrl} />
          </div>

          {/* Copy URL */}
          <button
            onClick={handleCopy}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 cursor-pointer"
            style={{ background:'rgba(255,255,255,0.05)', borderColor:'rgba(255,255,255,0.1)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(165,72,255,0.4)'; e.currentTarget.style.background='rgba(165,72,255,0.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; e.currentTarget.style.background='rgba(255,255,255,0.05)'; }}
          >
            <span className="text-xs font-mono" style={{ color:'#9d8abf' }}>
              {portfolioUrl.replace('https://', '')}
            </span>
            {copied ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" className="w-3.5 h-3.5 flex-shrink-0">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="#9d8abf" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5 flex-shrink-0">
                <rect x="9" y="9" width="13" height="13" rx="2"/>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
              </svg>
            )}
          </button>
        </div>

        {/* Footer */}
        <p
          className="text-[11px] text-center mt-12"
          style={{ color:'rgba(157,138,191,0.6)', fontFamily:'JetBrains Mono, monospace', letterSpacing:'0.05em', animation:'fadeUp 0.5s ease both 0.65s' }}
        >
          © {new Date().getFullYear()} Areej Abumuhfouz · Full Stack Developer
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800;900&family=JetBrains+Mono:wght@400;600&display=swap');
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes spinHue {
          to { filter: hue-rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

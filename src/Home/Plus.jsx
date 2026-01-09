import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#22063d] text-white overflow-hidden">
      {/* Custom Cursor Effect */}
      <div
        className="fixed w-8 h-8 border-2 border-purple-300 rounded-full pointer-events-none z-50 transition-transform duration-150 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          opacity: 0.6
        }}
      />
      
      {/* Animated Background Gradient */}
      <div 
        className="fixed inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.4), transparent 50%)`
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            <span className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-sm font-light tracking-widest">
              WELCOME TO MY PORTFOLIO
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
            <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
              Creative
            </span>
            <br />
            <span className="text-white">Developer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
            Crafting beautiful digital experiences with elegant code and innovative design
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
            <button
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="px-8 py-4 border border-purple-400/50 rounded-full font-medium hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-16 flex gap-6 justify-center opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
            {[
              { Icon: Github, href: '#' },
              { Icon: Linkedin, href: '#' },
              { Icon: Mail, href: '#' }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="w-12 h-12 border border-purple-400/30 rounded-full flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[fadeIn_0.8s_ease-out_1.2s_forwards]">
            <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-purple-400 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a passionate developer who loves creating stunning web experiences that merge beautiful design with powerful functionality.
              </p>
              <p className="text-lg leading-relaxed">
                With expertise in modern technologies and a keen eye for detail, I bring ideas to life through clean, efficient code and engaging user interfaces.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['React', 'TypeScript', 'Node.js', 'Tailwind', 'Next.js'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm backdrop-blur-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm border border-purple-400/30" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((project) => (
              <div
                key={project}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group relative bg-purple-900/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 hover:border-purple-400 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">Project {project}</h3>
                <p className="text-gray-400 mb-4">
                  A beautiful application showcasing modern design and functionality
                </p>
                <div className="flex items-center gap-2 text-purple-400 group-hover:text-pink-400 transition-colors">
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
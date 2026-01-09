import React, { useState, useEffect, useRef } from 'react';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.dataset.section]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // const handleMouseMove = (e) => {
  //   setMousePos({
  //     x: (e.clientX / window.innerWidth) * 100,
  //     y: (e.clientY / window.innerHeight) * 100
  //   });
  // };

  const services = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      icon: '🚀',
      gradient: 'from-[#a548ff] to-[#6b21a8]',
      description: 'End-to-end web application development using cutting-edge technologies',
      features: [
        'MERN & PERN Stack Applications',
        'React.js & Next.js Development',
        'RESTful API Design & Integration',
        'Real-time Features with WebSockets',
        'Database Architecture & Optimization',
        'Responsive UI/UX Implementation'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Express', 'Next.js'],
      deliverables: ['Scalable Architecture', 'Clean Code', 'Documentation', 'Testing'],
      bgPattern: '💻'
    },
    {
      id: 2,
      title: 'Robotic Process Automation',
      icon: '🤖',
      gradient: 'from-[#cbd5e1] to-[#64748b]',
      description: 'Intelligent automation solutions to streamline business processes',
      features: [
        'UiPath Bot Development',
        'Workflow Automation Design',
        'Process Mining & Analysis',
        'Legacy System Integration',
        'Attended & Unattended Bots',
        'ROI-Focused Solutions'
      ],
      technologies: ['UiPath', 'Python', 'API Integration', 'OCR', 'AI/ML'],
      deliverables: ['Automated Workflows', 'Process Documentation', 'Training', 'Support'],
      bgPattern: '⚙️'
    },
    {
      id: 3,
      title: 'E-commerce Solutions',
      icon: '🛒',
      gradient: 'from-[#8030cc] to-[#a548ff]',
      description: 'Complete online store development with payment integration',
      features: [
        'Custom Shopping Cart Development',
        'Stripe & PayPal Integration',
        'Inventory Management Systems',
        'Order Tracking & Analytics',
        'Admin Dashboard Creation',
        'Mobile-Responsive Design'
      ],
      technologies: ['React', 'Node.js', 'Stripe', 'Firebase', 'MongoDB'],
      deliverables: ['Full E-commerce Platform', 'Payment Gateway', 'Admin Panel', 'SEO'],
      bgPattern: '🛍️'
    },
    {
      id: 4,
      title: 'Chatbot Development',
      icon: '💬',
      gradient: 'from-[#e0b3ff] to-[#a548ff]',
      description: 'Intelligent conversational interfaces powered by AI',
      features: [
        'AI-Powered Chatbots',
        'Natural Language Processing',
        'Multi-Platform Integration',
        'Smartly.ai Implementation',
        'Custom Conversation Flows',
        'Analytics & Insights'
      ],
      technologies: ['Node.js', 'NLP', 'Smartly.ai', 'API Integration'],
      deliverables: ['Chatbot System', 'Integration', 'Training Data', 'Analytics'],
      bgPattern: '🗨️'
    },
    {
      id: 5,
      title: 'API Development & Integration',
      icon: '🔌',
      gradient: 'from-[#6b21a8] to-[#cbd5e1]',
      description: 'Robust backend services and third-party integrations',
      features: [
        'RESTful API Architecture',
        'Authentication & Authorization',
        'Third-Party API Integration',
        'Google Cloud APIs',
        'Microservices Design',
        'API Documentation'
      ],
      technologies: ['Express', 'Node.js', 'JWT', 'OAuth', 'Postman'],
      deliverables: ['API Endpoints', 'Documentation', 'Security', 'Testing'],
      bgPattern: '🔗'
    },
    {
      id: 6,
      title: 'UI/UX Design & Development',
      icon: '🎨',
      gradient: 'from-[#a548ff] to-[#cbd5e1]',
      description: 'Beautiful, intuitive interfaces that users love',
      features: [
        'Modern UI/UX Design',
        'Figma to Code Conversion',
        'Responsive Web Design',
        'Tailwind CSS Styling',
        'Animation & Interactions',
        'Design System Creation'
      ],
      technologies: ['Figma', 'React', 'Tailwind CSS', 'CSS3', 'Animation'],
      deliverables: ['UI Design', 'Prototype', 'Responsive Code', 'Style Guide'],
      bgPattern: '🎭'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understanding your vision, goals, and requirements',
      icon: '🔍',
      color: '#a548ff'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Creating roadmap, timeline, and technical architecture',
      icon: '📋',
      color: '#cbd5e1'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Agile development with regular updates and feedback',
      icon: '⚡',
      color: '#8030cc'
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Comprehensive testing for quality and performance',
      icon: '🧪',
      color: '#e0b3ff'
    },
    {
      number: '05',
      title: 'Deployment',
      description: 'Launch with monitoring and documentation',
      icon: '🚀',
      color: '#a548ff'
    },
    {
      number: '06',
      title: 'Support',
      description: 'Ongoing maintenance and feature enhancements',
      icon: '🛠️',
      color: '#cbd5e1'
    }
  ];

  const whyChooseMe = [
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Agile methodology ensures quick turnaround without compromising quality'
    },
    {
      icon: '🎯',
      title: 'Result-Driven',
      description: 'Focus on business goals and measurable outcomes'
    },
    {
      icon: '💎',
      title: 'Quality Code',
      description: 'Clean, maintainable, and well-documented codebase'
    },
    {
      icon: '🔒',
      title: 'Security First',
      description: 'Industry-standard security practices and compliance'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Pixel-perfect across all devices and screen sizes'
    },
    {
      icon: '🤝',
      title: 'Clear Communication',
      description: 'Regular updates and transparent collaboration'
    }
  ];

  return (
    <>
    <Header />
        <div 
      className="relative min-h-screen bg-[#22063d] overflow-hidden"
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
    <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />

      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-3xl opacity-20 transition-all duration-700"
          style={{
            background: 'radial-gradient(circle, #a548ff 0%, transparent 70%)',
            left: `${mousePos.x - 20}%`,
            top: `${mousePos.y - 20}%`
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-15 transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, #cbd5e1 0%, transparent 70%)',
            right: `${100 - mousePos.x - 10}%`,
            bottom: `${100 - mousePos.y - 10}%`
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#a548ff]/10 to-[#cbd5e1]/10 border border-[#a548ff]/30 backdrop-blur-xl mb-8"
            style={{ animation: 'fadeInUp 0.8s ease-out' }}
          >
            {/* <span className="text-2xl">✨</span> */}
            <div className="w-2 h-2 bg-[#a548ff] rounded-full animate-pulse" />

            <span className="text-sm font-bold bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] bg-clip-text text-transparent tracking-wider uppercase">
              Services That Transform
            </span>
          </div>

          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
          >
            What I{' '}
            <span 
              className="bg-gradient-to-r from-[#cbd5e1] via-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% auto',
                animation: 'shimmer 3s linear infinite'
              }}
            >
              Create
            </span>
          </h1>

          <p 
            className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
          >
            From concept to deployment, I build digital solutions that drive{' '}
            <span className="text-[#a548ff] font-bold">growth</span>,{' '}
            <span className="text-[#cbd5e1] font-bold">efficiency</span>, and{' '}
            <span className="text-[#a548ff] font-bold">innovation</span>
          </p>

          <div 
            className="flex flex-wrap justify-center gap-6"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}
          >
            <button className="group px-10 py-5 rounded-2xl font-bold text-lg text-white bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] hover:shadow-2xl hover:shadow-[#a548ff]/40 hover:scale-105 transition-all duration-500">
              <span className="flex items-center gap-3">
                View All Services
                <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </button>
            <button className="px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/30 text-white hover:bg-white hover:text-[#22063d] backdrop-blur-xl transition-all duration-500 hover:scale-105">
              Get a Quote
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-14 rounded-full border-2 border-[#a548ff]/50 flex items-start justify-center p-2">
              <div className="w-2 h-4 rounded-full bg-gradient-to-b from-[#cbd5e1] to-[#a548ff]" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section 
        ref={(el) => (sectionRefs.current[0] = el)}
        data-section="services"
        className="relative py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:border-[#a548ff]/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
                onClick={() => setActiveService(index)}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 text-9xl flex items-center justify-center overflow-hidden rounded-3xl">
                  {service.bgPattern}
                </div>

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-3xl`} />

                <div className="relative z-10">
                  {/* Icon and title */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`text-6xl group-hover:scale-110 transition-transform duration-500`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#cbd5e1] group-hover:to-[#a548ff] group-hover:bg-clip-text transition-all duration-500">
                          {service.title}
                        </h3>
                        <div className={`h-1 bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-700 mt-2 rounded-full`} />
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors duration-300"
                      >
                        <svg className="w-5 h-5 text-[#a548ff] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className={`px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r ${service.gradient} text-white opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full py-4 rounded-xl font-bold text-white bg-white/5 border border-white/20 hover:bg-gradient-to-r hover:from-[#a548ff] hover:to-[#cbd5e1] hover:border-transparent transition-all duration-500 group-hover:scale-105">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={(el) => (sectionRefs.current[1] = el)}
        data-section="process"
        className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#1a0530]/50 to-transparent"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures success from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#a548ff]/40 transition-all duration-700 hover:scale-105 ${
                  isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                {/* Number badge */}
                <div 
                  className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a548ff] to-[#cbd5e1] flex items-center justify-center text-white font-black text-2xl shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  style={{ boxShadow: `0 10px 40px ${step.color}60` }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#cbd5e1] group-hover:to-[#a548ff] group-hover:bg-clip-text transition-all duration-500">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting line for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#a548ff] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section 
        ref={(el) => (sectionRefs.current[2] = el)}
        data-section="why"
        className="relative py-32 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible.why ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              Why{' '}
              <span className="bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent">
                Choose Me
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What sets my services apart from the rest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseMe.map((item, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-[#cbd5e1]/60 transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  isVisible.why ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#a548ff] transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#a548ff]/0 to-[#cbd5e1]/0 group-hover:from-[#a548ff]/10 group-hover:to-[#cbd5e1]/10 rounded-3xl transition-all duration-700 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#a548ff]/20 to-[#cbd5e1]/20 backdrop-blur-xl border border-[#a548ff]/30 rounded-[3rem] p-16 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 text-9xl">🚀</div>
              <div className="absolute bottom-10 right-10 text-9xl">💎</div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                Ready to{' '}
                <span className="bg-gradient-to-r from-[#cbd5e1] via-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent" style={{ backgroundSize: '200% auto', animation: 'shimmer 3s linear infinite' }}>
                  Start Your Project?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how I can help transform your ideas into powerful digital solutions
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <button className="group px-12 py-6 rounded-2xl font-bold text-xl text-white bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] hover:shadow-2xl hover:shadow-[#a548ff]/50 hover:scale-110 transition-all duration-500">
                  <span className="flex items-center gap-3">
                    Get Started
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button className="px-12 py-6 rounded-2xl font-bold text-xl border-2 border-white/30 text-white hover:bg-white hover:text-[#22063d] backdrop-blur-xl transition-all duration-500 hover:scale-110">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
}
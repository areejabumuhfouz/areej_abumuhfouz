import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

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
const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = () => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setSubmitStatus('success');
  //     setFormData({
  //       name: '',
  //       email: '',
  //       subject: '',
  //       message: '',
  //       budget: '',
  //       timeline: ''
  //     });
      
  //     setTimeout(() => {
  //       setSubmitStatus(null);
  //     }, 5000);
  //   }, 2000);
  // };


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      budget: formData.budget || 'Not specified',
      timeline: formData.timeline || 'Not specified',
      time: new Date().toLocaleString()
    };

    emailjs.send(
      'service_t74ello',    // Replace with your EmailJS Service ID
      'template_vyr2rcq',   // Replace with your EmailJS Template ID
      templateParams,
      'ySPHwdlRNbvsHt2TZ'     // Replace with your EmailJS Public Key
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    })
    .catch((err) => {
      console.error('Failed to send email:', err);
      setIsSubmitting(false);
      setSubmitStatus('error');
    });
  };
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'AreejAbumahfouz@gmail.com',
      link: 'mailto:AreejAbumahfouz@gmail.com',
      gradient: 'from-[#fbbf24] to-[#f59e0b]',
      description: 'Send me an email anytime'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'Areej Abumahfouz Linked In',
      link: 'https://www.linkedin.com/in/areejabumuhfouz/',
      gradient: 'from-[#3b82f6] to-[#1d4ed8]',
      description: 'Let\'s connect professionally'
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: 'github.com/areejabumuhfouz',
      link: 'https://github.com/areejabumuhfouz',
      gradient: 'from-[#8b5cf6] to-[#6d28d9]',
      description: 'Check out my code'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+962 78 290 7153',
      link: 'tel:+962782907153',
      gradient: 'from-[#ec4899] to-[#be185d]',
      description: 'Call me directly'
    }
  ];

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Full-stack web applications with modern technologies',
      features: ['React.js', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      icon: '🤖',
      title: 'Automation',
      description: 'RPA solutions and workflow automation',
      features: ['UiPath', 'Process Automation', 'API Development']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces',
      features: ['Figma', 'Responsive Design', 'User Research']
    }
  ];

//   const faqs = [
//     {
//       question: 'What is your typical response time?',
//       answer: 'I usually respond to inquiries within 24 hours during business days.'
//     },
//     {
//       question: 'Do you work on freelance projects?',
//       answer: 'Yes! I\'m available for freelance work and consulting projects.'
//     },
//     {
//       question: 'What technologies do you specialize in?',
//       answer: 'I specialize in React.js, Node.js, MongoDB, Express.js, and automation tools like UiPath.'
//     },
//     {
//       question: 'Can you help with existing projects?',
//       answer: 'Absolutely! I can help with debugging, optimization, or adding new features to existing projects.'
//     }
//   ];

const faqs = [
  {
    question: "What is your typical response time?",
    answer:
      "I aim to respond to all inquiries within 24 hours on business days, ensuring clear and timely communication throughout the project."
  },
  {
    question: "Do you offer freelance or consulting services?",
    answer:
      "Yes, I provide freelance development and technical consulting services, working closely with clients to deliver scalable and reliable solutions."
  },
  {
    question: "Which technologies do you specialize in?",
    answer:
      "My core expertise includes React.js, Node.js, Express.js, MongoDB (MERN stack), along with process automation using UiPath."
  },
  {
    question: "Can you work on or improve existing projects?",
    answer:
      "Absolutely. I can review existing codebases, fix issues, optimize performance, and implement new features to enhance overall product quality."
  }
];
  
const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Header />

   
    <div 
    ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#22063d] overflow-hidden py-12"
    >
      {/* Animated background */}
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#a548ff] rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div> */}
      {/* <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#22063d]  overflow-hidden flex items-center justify-center"
    > */}
      {/* Canvas for particle network */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#a548ff]/10 to-[#cbd5e1]/10 border border-[#a548ff]/30 backdrop-blur-xl mb-8">
            {/* <span className="text-2xl">✉️</span> */}
            <div className="w-2 h-2 bg-[#a548ff] rounded-full animate-pulse" />

            <span className="text-sm font-bold bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] bg-clip-text text-transparent tracking-wider uppercase">
              Get In Touch
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight">
            Let's{' '}
            <span className="bg-gradient-to-r from-[#cbd5e1] via-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Have a project in mind or just want to chat?{' '}
            <span className="text-[#a548ff] font-bold">I'd love to hear from you!</span>{' '}
            Drop me a message and let's create something{' '}
            <span className="text-[#cbd5e1] font-bold">amazing together</span>
          </p>

          {/* Quick contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#a548ff]/40 transition-all duration-500 hover:scale-105"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                <p className="text-xs text-gray-400 mb-3">{method.description}</p>
                <p className={`text-sm font-bold bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent break-all`}>
                  {method.value}
                </p>
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <div className="w-8 h-14 rounded-full border-2 border-[#a548ff]/50 flex items-start justify-center p-2 mx-auto">
              <div className="w-2 h-4 rounded-full bg-gradient-to-b from-[#cbd5e1] to-[#a548ff] animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
 
  <section 
  ref={(el) => (sectionRefs.current[0] = el)}
  data-section="form"
  className="relative py-20 px-6"
>
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12">
      
      {/* Contact Form */}
      <div className={`transition-all duration-1000 ${isVisible.form ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <form 
          onSubmit={handleSubmit} 
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 space-y-6"
        >
          <h2 className="text-4xl font-black text-white mb-4">
            Send a{' '}
            <span className="bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent">
              Message
            </span>
          </h2>
          <p className="text-gray-300 mb-8">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>

          {/* Name */}
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Your Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#a548ff]/50 focus:bg-white/10 transition-all duration-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#a548ff]/50 focus:bg-white/10 transition-all duration-300"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Subject *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Inquiry"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#a548ff]/50 focus:bg-white/10 transition-all duration-300"
              required
            />
          </div>

          {/* Budget & Timeline */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">Budget (Optional)</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#a548ff]/50 focus:bg-white/10 transition-all duration-300"
              >
                <option value="">Select budget</option>
                <option value="<1000">Less than $1,000</option>
                <option value="1000-5000">$1,000 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000+">$10,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2">Timeline (Optional)</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#a548ff]/50 focus:bg-white/10 transition-all duration-300"
              >
                <option value="">Select timeline</option>
                <option value="urgent">Urgent (1-2 weeks)</option>
                <option value="normal">Normal (1 month)</option>
                <option value="flexible">Flexible (2-3 months)</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#a548ff]/50 focus:bg-white/10 transition-all duration-300 resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] hover:shadow-2xl hover:scale-105 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <span className="flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </span>
          </button>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="bg-gradient-to-r from-[#10b981]/20 to-[#047857]/20 border border-[#10b981]/30 rounded-2xl p-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-[#10b981] font-bold">Message sent successfully!</p>
                <p className="text-sm text-gray-300">I'll get back to you soon.</p>
              </div>
            </div>
          )}
        </form>
      </div>
      </div>
      </div>
      </section>
      

      {/* Services & Info (unchanged) */}
     


      {/* FAQ Section */}
      <section 
        ref={(el) => (sectionRefs.current[1] = el)}
        data-section="faq"
        className="relative py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300">Quick answers to common questions</p>
          </div>

          <div className={`space-y-4 transition-all duration-1000 ${isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#a548ff]/30 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-300"
                >
                  <span className="text-lg font-bold text-white">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-[#a548ff] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#a548ff]/20 to-[#cbd5e1]/20 backdrop-blur-xl border border-[#a548ff]/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Start Your{' '}
              <span className="bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent">
                Project?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's turn your ideas into reality. Get in touch today and let's create something amazing together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] hover:shadow-2xl hover:scale-105 transition-all duration-500"
              >
                <span className="flex items-center gap-2">
                  Send a Message
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <a
                href="mailto:areejabumahfouz@gmail.com"
                className="px-8 py-4 rounded-2xl font-bold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Email Me
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
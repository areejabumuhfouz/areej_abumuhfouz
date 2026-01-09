
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../Components/Footer';
import SolarEye from '../assets/SolarEye.png';
function ProjectDetailsModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    
       <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#22063d] border border-white/20 rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto p-8 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="space-y-8">
          {/* Header */}
          <div>
            <div className="text-7xl mb-6">{project.image}</div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] text-white">
                {project.year}
              </span>
              <span className="px-4 py-2 rounded-full text-sm font-bold bg-white/10 text-gray-300">
                {project.duration}
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
              {project.title}
            </h2>
            <p className="text-xl text-gray-300 mb-4">{project.tagline}</p>
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-[#cbd5e1]">Role:</span> {project.role}
            </p>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">About</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
          </div>

          {/* Stats */}
          {/* <div>
            <h3 className="text-2xl font-bold text-white mb-4">Key Metrics</h3>
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(project.stats).map(([key, value]) => (
                <div 
                  key={key}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 text-center border border-white/10"
                >
                  <div className={`text-3xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {value}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mt-2">
                    {key}
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Features</h3>
            <div className="space-y-3">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#a548ff] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, i) => (
                <span 
                  key={i}
                  className="px-5 py-2 rounded-full text-sm font-bold bg-white/10 text-gray-300 border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span>💪</span> Challenges
            </h3>
            <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
          </div>

          {/* Outcome */}
          <div className={`bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-2xl p-6 border border-[#a548ff]/30`}>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span>🎯</span> Outcome
            </h3>
            <p className="text-gray-300 leading-relaxed">{project.outcome}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r ${project.gradient} hover:shadow-2xl hover:scale-105 transition-all duration-500 flex items-center gap-2`}
              >
                View Live
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl font-bold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 flex items-center gap-2"
              >
                GitHub
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [hoveredProject, setHoveredProject] = useState(null);
  // const sectionRefs = useRef([]);
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

const projects = [
    {
    id: 1,
    title: 'SolarEye Project',
    category: 'frontend',
    featured: true,
    tagline: 'Climate Tech Innovation',
    description: 'Innovative climate technology project focused on converting solar energy into electrical energy to promote sustainable energy solutions.',
    role: 'Head of Programming',
    image:SolarEye,
    gradient: 'from-[#f59e0b] to-[#d97706]',
    stats: {
      award: '1st Place',
      impact: 'High',
      stage: 'Incubation'
    },
    tech: ['MERN Stack', 'IoT Integration', 'Figma'],
    features: [
      'Solar energy conversion monitoring',
      'Real-time data analytics',
      'IoT hardware integration',
      'Predictive maintenance',
      'Sustainability reporting'
    ],
    challenges: 'Integrating hardware with software and ensuring accurate energy data tracking.',
    outcome: 'Currently incubated with Seedstars. Recognized for innovative climate solutions.',
    github: '',
    live: 'https://SolarEye.info',
    year: '2025',
    duration: '1 month',
    color: '#f59e0b'
  },
    {
    id: 2,
    title: 'Al Khatem Inventory System',
    category: 'fullstack',
    featured: true,
    tagline: 'School Resource Management',
    description: 'Full-stack web application and dashboard for managing school resources in the UAE, allowing staff to track, manage, and analyze inventory efficiently.',
    role: 'Full Stack Developer',
    image: '🏫',
    gradient: 'from-[#14b8a6] to-[#0f766e]',
    stats: {
      users: '200+',
      uptime: '99%',
      completion: '100%'
    },
    tech: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Knex.js', 'Firebase', 'Cloudinary'],
    features: [
      'Inventory tracking and management',
      'Dashboard analytics',
      'User authentication and role management',
      'Real-time updates',
      'Media storage with Firebase and Cloudinary'
    ],
    challenges: 'Integrating real-time updates and ensuring secure multi-role access.',
    outcome: 'Successfully deployed for school staff, improving inventory efficiency.',
    github: '',
    live: '',
    year: '2024',
    duration: '4 months',
    color: '#14b8a6'
  },

  {
    id: 3,
    title: 'BeeWise',
    category: 'innovation',
    featured: true,
    tagline: 'Empowering Beekeepers Worldwide',
    description: 'A comprehensive platform designed to empower individuals in starting and thriving in the beekeeping business. Provides essential tools, resources, and community support for both new and experienced beekeepers.',
    role: 'Project Owner & Lead Developer',
    image: '🐝',
    gradient: 'from-[#fbbf24] to-[#f59e0b]',
    stats: {
      users: '500+',
      rating: '4.8/5',
      completion: '100%'
    },
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Firebase', 'Stripe'],
    features: [
      'User authentication with Google Sign-In',
      'E-commerce functionality with Stripe integration',
      'Community forum and resources',
      'Real-time beekeeping guides',
      'Product marketplace',
      'Firebase storage for media'
    ],
    challenges: 'Integrating complex payment systems and creating an intuitive UX for users of varying technical skills.',
    outcome: 'Successfully incubated by Ministry of Digital Economy. Platform serving 500+ beekeepers.',
    github: 'https://github.com/areej/beewise',
    live: 'https://beewise.app',
    year: '2024',
    duration: '4 months',
    color: '#fbbf24'
  },
  {
    id: 6,
    title: 'Entakheb',
    category: 'fullstack',
    featured: false,
    tagline: 'Democratic Engagement Platform',
    description: 'A Jordanian election simulation platform that allows users to vote, create lists, request debates, and display ads, fostering active citizen engagement in the electoral process.',
    role: 'Full Stack Developer',
    image: '🗳️',
    gradient: 'from-[#3b82f6] to-[#1d4ed8]',
    stats: {
      users: '1000+',
      uptime: '99.9%',
      completion: '100%'
    },
    tech: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Knex.js'],
    features: [
      'Secure voting system',
      'List creation and management',
      'Debate scheduling platform',
      'Advertisement management',
      'Real-time vote counting',
      'Admin dashboard'
    ],
    challenges: 'Ensuring vote security and preventing fraud while maintaining user privacy.',
    outcome: 'Deployed successfully with 1000+ active users during simulation period.',
    github: 'https://github.com/areej/entakheb',
    year: '2024',
    duration: '3 months',
    color: '#3b82f6'
  },
  {
    id: 5,
    title: 'Festiva JO',
    category: 'frontend',
    featured: false,
    tagline: 'Jordan\'s Festival Marketplace',
    description: 'A platform for discovering and purchasing tickets to festivals in Jordan, bringing the country\'s vibrant festival culture closer to users.',
    role: 'Scrum Master & Frontend Developer',
    image: '🎉',
    gradient: 'from-[#ec4899] to-[#be185d]',
    stats: {
      events: '50+',
      tickets: '2000+',
      completion: '100%'
    },
    tech: ['React.js', 'Firebase', 'Tailwind CSS', 'Figma'],
    features: [
      'Festival discovery and search',
      'Ticket purchasing system',
      'Event calendar integration',
      'Firebase authentication',
      'Real-time availability',
      'Mobile-responsive design'
    ],
    challenges: 'Creating a seamless ticket booking experience with real-time inventory management.',
    outcome: 'Live platform serving Jordan\'s festival community with 2000+ tickets sold.',
    github: 'https://github.com/areej/festiva',
    live: 'https://festiva-jo.com',
    year: '2024',
    duration: '2 months',
    color: '#ec4899'
  },
  // {
  //   id: 2,
  //   title: 'Al Khatem Inventory System',
  //   category: 'fullstack',
  //   featured: false,
  //   tagline: 'School Resource Management',
  //   description: 'Full-stack web application and dashboard for managing school resources in the UAE, allowing staff to track, manage, and analyze inventory efficiently.',
  //   role: 'Full Stack Developer',
  //   image: '🏫',
  //   gradient: 'from-[#14b8a6] to-[#0f766e]',
  //   stats: {
  //     users: '200+',
  //     uptime: '99%',
  //     completion: '100%'
  //   },
  //   tech: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Knex.js', 'Firebase', 'Cloudinary'],
  //   features: [
  //     'Inventory tracking and management',
  //     'Dashboard analytics',
  //     'User authentication and role management',
  //     'Real-time updates',
  //     'Media storage with Firebase and Cloudinary'
  //   ],
  //   challenges: 'Integrating real-time updates and ensuring secure multi-role access.',
  //   outcome: 'Successfully deployed for school staff, improving inventory efficiency.',
  //   github: '',
  //   live: '',
  //   year: '2024',
  //   duration: '4 months',
  //   color: '#14b8a6'
  // },
  // {
  //   id: 1,
  //   title: 'SolarEye Project',
  //   category: 'frontend',
  //   featured: false,
  //   tagline: 'Climate Tech Innovation',
  //   description: 'Innovative climate technology project focused on converting solar energy into electrical energy to promote sustainable energy solutions.',
  //   role: 'Head of Programming',
  //   image: '☀️',
  //   gradient: 'from-[#f59e0b] to-[#d97706]',
  //   stats: {
  //     award: '1st Place',
  //     impact: 'High',
  //     stage: 'Incubation'
  //   },
  //   tech: ['MERN Stack', 'IoT Integration', 'Figma'],
  //   features: [
  //     'Solar energy conversion monitoring',
  //     'Real-time data analytics',
  //     'IoT hardware integration',
  //     'Predictive maintenance',
  //     'Sustainability reporting'
  //   ],
  //   challenges: 'Integrating hardware with software and ensuring accurate energy data tracking.',
  //   outcome: 'Currently incubated with Seedstars. Recognized for innovative climate solutions.',
  //   github: '',
  //   live: '',
  //   year: '2024',
  //   duration: '3 months',
  //   color: '#f59e0b'
  // },
  {
    id: 4,
  title: 'Greens',
  category: 'fullstack',
  featured: false,
  tagline: 'Sustainable Agriculture Platform',
  description: 'A platform designed to support sustainable agriculture initiatives, helping farmers monitor crops, manage resources efficiently, and promote eco-friendly practices.',
  role: 'Full Stack Developer',
  image: '🌱',
  gradient: 'from-[#22c55e] to-[#16a34a]',
  stats: {
    users: '300+',
    impact: 'High',
    completion: '100%'
  },
  tech: ['React.js', 'Node.js', 'PostgreSQL', 'Express.js', 'Tailwind CSS', 'Firebase'],
  features: [
    'Crop monitoring dashboard',
    'Resource management tools',
    'Sustainable practice recommendations',
    'User authentication and roles',
    'Data analytics and reporting'
  ],
  challenges: 'Integrating real-time monitoring and predictive analytics for crop management.',
  outcome: 'Empowered farmers to adopt sustainable practices and improve resource efficiency.',
  github: '',
  live: '',
  year: '2025',
  duration: '4 months',
  color: '#22c55e'
  },
  // {
  //   id: 7,
  //   title: 'RPA Automation Suite',
  //   category: 'automation',
  //   featured: false,
  //   tagline: 'Business Process Automation',
  //   description: 'Comprehensive RPA solutions developed using UiPath to automate manual and repetitive business processes at Orange Jordan.',
  //   role: 'RPA Developer',
  //   image: '⚙️',
  //   gradient: 'from-[#10b981] to-[#047857]',
  //   stats: {
  //     processes: '15+',
  //     timeSaved: '1000h',
  //     efficiency: '+85%'
  //   },
  //   tech: ['UiPath', 'Python', 'API Integration', 'OCR', 'Excel Automation'],
  //   features: [
  //     'Automated data entry workflows',
  //     'Document processing with OCR',
  //     'Email automation',
  //     'Report generation',
  //     'API integrations',
  //     'Process monitoring'
  //   ],
  //   challenges: 'Handling complex business logic and ensuring reliability across different system states.',
  //   outcome: 'Automated 15+ processes, saving 1000+ hours of manual work annually.',
  //   year: '2024-2025',
  //   duration: 'Ongoing',
  //   color: '#10b981'
  // }
];


  const filters = [
    { id: 'all', label: 'All Projects', icon: '🎯' },
    { id: 'fullstack', label: 'Full Stack', icon: '💻' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    // { id: 'automation', label: 'Automation', icon: '🤖' },
    { id: 'innovation', label: 'Innovation', icon: '💡' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const stats = [
    { label: 'Projects Completed', value: '25+', icon: '✅' },
    { label: 'Lines of Code', value: '50K+', icon: '💻' },
    { label: 'Happy Clients', value: '15+', icon: '😊' },
    { label: 'Technologies', value: '20+', icon: '🛠️' }
  ];

  return (
    <><Header/> 
    <div 
     ref={heroRef}
      onMouseMove={handleMouseMove}
    className="relative min-h-screen bg-[#22063d] overflow-hidden">
    <canvas ref={canvasRef} className="absolute inset-0 opacity-70" />


      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#a548ff]/10 to-[#cbd5e1]/10 border border-[#a548ff]/30 backdrop-blur-xl mb-8 animate-fade-in"
          >
            {/* <span className="text-2xl">🚀</span> */}
            <div className="w-2 h-2 bg-[#a548ff] rounded-full animate-pulse" />

            <span className="text-sm font-bold bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] bg-clip-text text-transparent tracking-wider uppercase">
              Portfolio Showcase
            </span>
          </div>

          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight"
          >
            My{' '}
            <span 
              className="bg-gradient-to-r from-[#cbd5e1] via-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent"
            >
              Projects
            </span>
          </h1>

          <p 
            className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            From beekeeping platforms to election systems, explore the{' '}
            <span className="text-[#a548ff] font-bold">innovative solutions</span>{' '}
            I've built to solve{' '}
            <span className="text-[#cbd5e1] font-bold">real-world problems</span>
          </p>

          {/* Stats */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12"
          >
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#a548ff]/40 transition-all duration-500 hover:scale-110"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
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

      {/* Filter Section */}
      <section 
        ref={(el) => (sectionRefs.current[0] = el)}
        data-section="filters"
        className="relative py-12 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 ${isVisible.filters ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {filters.map((filter, index) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] text-white shadow-2xl shadow-[#a548ff]/30'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="flex items-center gap-3">
                  <span className="text-2xl">{filter.icon}</span>
                  {filter.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
    

      {/* Other Projects Grid */}
      <section 
        ref={(el) => (sectionRefs.current[2] = el)}
        data-section="other"
        className="relative py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          {/* <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.other ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              More{' '}
              <span className="bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.filter(p => !p.featured).map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#a548ff]/40 transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  isVisible.other ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-3xl`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-7xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {project.image}
                  </div>
                  
                  {/* Year badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] text-white">
                      {project.year}
                    </span>
                  </div>

                  <h3 className={`text-2xl font-black mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#cbd5e1] font-semibold mb-3">{project.tagline}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>
                  
                  {/* Tech preview */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-gray-300">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Click hint */}
                  <div className="mt-6 text-sm text-[#a548ff] font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click for details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    

      {/* Project Details Modal */}
      <ProjectDetailsModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
    < Footer/>
   </>
  );
}
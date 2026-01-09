import React, { useState, useEffect, useRef } from 'react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = {
    frontend: {
      title: 'Front-End',
      icon: '🎨',
      color: '#a548ff',
      skills: [
        { name: 'React.js', level: 95, icon: '⚛️' },
        { name: 'Next.js', level: 90, icon: '▲' },
        { name: 'JavaScript', level: 95, icon: '📜' },
        { name: 'Tailwind CSS', level: 98, icon: '🎨' },
        { name: 'Redux', level: 85, icon: '🔄' },
        { name: 'HTML/CSS', level: 98, icon: '🌐' }
      ]
    },
    backend: {
      title: 'Back-End',
      icon: '⚙️',
      color: '#cbd5e1',
      skills: [
        { name: 'Node.js', level: 92, icon: '🟢' },
        { name: 'Express.js', level: 90, icon: '🚂' },
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'Java Spring Boot', level: 75, icon: '☕' },
        { name: 'REST APIs', level: 95, icon: '🔌' }
      ]
    },
    database: {
      title: 'Databases',
      icon: '🗄️',
      color: '#8030cc',
      skills: [
        { name: 'MongoDB', level: 90, icon: '🍃' },
        { name: 'PostgreSQL', level: 88, icon: '🐘' },
        { name: 'MySQL', level: 85, icon: '🐬' },
        { name: 'Firebase', level: 92, icon: '🔥' },
        { name: 'Sequelize', level: 85, icon: '📊' }
      ]
    },
    automation: {
      title: 'Automation & RPA',
      icon: '🤖',
      color: '#e0b3ff',
      skills: [
        { name: 'UiPath', level: 88, icon: '🤖' },
        { name: 'Process Automation', level: 90, icon: '⚡' },
        { name: 'Workflow Design', level: 92, icon: '🔄' }
      ]
    },
    tools: {
      title: 'Tools & DevOps',
      icon: '🛠️',
      color: '#a548ff',
      skills: [
        { name: 'Git & GitHub', level: 95, icon: '📦' },
        { name: 'Vercel/Netlify', level: 90, icon: '🚀' },
        { name: 'Postman', level: 92, icon: '📮' },
        { name: 'Figma', level: 85, icon: '🎭' },
        { name: 'Agile/Scrum', level: 88, icon: '🏃' }
      ]
    }
  };

  const softSkills = [
    { name: 'Problem Solving', icon: '🧩', color: '#a548ff' },
    { name: 'Team Collaboration', icon: '🤝', color: '#cbd5e1' },
    { name: 'Critical Thinking', icon: '🧠', color: '#8030cc' },
    { name: 'Adaptability', icon: '🔄', color: '#e0b3ff' },
    { name: 'Communication', icon: '💬', color: '#a548ff' },
    { name: 'Time Management', icon: '⏱️', color: '#cbd5e1' },
    { name: 'Creativity', icon: '💡', color: '#8030cc' },
    { name: 'Learning Agility', icon: '📚', color: '#e0b3ff' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-[#22063d] via-[#1a0530] to-[#22063d] py-24 overflow-hidden"
      id="skills"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#a548ff] rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#a548ff] rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#cbd5e1] rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#a548ff]/10 to-[#cbd5e1]/10 border border-[#a548ff]/30 backdrop-blur-xl mb-6">
            <span className="text-2xl">⚡</span>
            <span className="text-sm font-bold bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] bg-clip-text text-transparent tracking-wider uppercase">
              Technical Arsenal
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Skills &{' '}
            <span className="bg-gradient-to-r from-[#cbd5e1] via-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent" style={{ backgroundSize: '200% auto', animation: 'shimmer 3s linear infinite' }}>
              Expertise
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning full-stack development, automation, and modern DevOps practices
          </p>
        </div>

        {/* Category tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {Object.keys(skillCategories).map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] text-white shadow-2xl shadow-[#a548ff]/30'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">{skillCategories[category].icon}</span>
                {skillCategories[category].title}
              </span>
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className={`grid lg:grid-cols-2 gap-8 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#a548ff]/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#a548ff]/20"
              style={{
                animation: `slideInRight 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#cbd5e1] transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-3xl font-black bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] bg-clip-text text-transparent">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] rounded-full transition-all duration-1000 ease-out shadow-lg"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    boxShadow: `0 0 20px ${skillCategories[activeCategory].color}`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer" />
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#a548ff]/0 to-[#cbd5e1]/0 group-hover:from-[#a548ff]/5 group-hover:to-[#cbd5e1]/5 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Soft skills section */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
              Soft{' '}
              <span className="bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent">
                Skills
              </span>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Essential interpersonal abilities that drive team success and project excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#cbd5e1]/40 transition-all duration-500 hover:scale-110 hover:shadow-2xl cursor-default"
                style={{
                  animation: `popIn 0.5s ease-out ${0.5 + index * 0.05}s both`,
                  boxShadow: `0 0 0 ${skill.color}00`
                }}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#cbd5e1] transition-colors duration-300">
                    {skill.name}
                  </h4>
                </div>

                {/* Animated border gradient */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${skill.color}30, transparent)`,
                    filter: 'blur(10px)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Certification/Experience callout */}
        {/* <div className={`mt-20 relative bg-gradient-to-r from-[#a548ff]/10 to-[#cbd5e1]/10 backdrop-blur-xl border border-[#a548ff]/30 rounded-3xl p-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#a548ff]/5 to-[#cbd5e1]/5 rounded-3xl blur-xl" />
          
          <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-5xl font-black bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] bg-clip-text text-transparent">
                10+
              </div>
              <div className="text-lg text-gray-300 font-semibold">Projects Completed</div>
            </div>
            
            <div className="space-y-3">
              <div className="text-5xl font-black bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent">
                3+
              </div>
              <div className="text-lg text-gray-300 font-semibold">Years Experience</div>
            </div>
            
            <div className="space-y-3">
              <div className="text-5xl font-black bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-lg text-gray-300 font-semibold">Technologies Mastered</div>
            </div>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
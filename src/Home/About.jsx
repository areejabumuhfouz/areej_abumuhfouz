
import React, { useState, useEffect, useRef } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

  const sectionRef = useRef(null);

  const achievements = [
    { number: "25+", label: "Projects Completed", icon: "🚀" },
    { number: "3+", label: "Years Experience", icon: "💼" },
    { number: "3", label: "Incubated Startups", icon: "🏆" },
    { number: "100%", label: "Client Satisfaction", icon: "⭐" },
  ];

  // Counter values state
  const [counts, setCounts] = useState(
    achievements.map(() => 0)
  );

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    achievements.forEach((item, index) => {
      const endValue = parseInt(item.number);
      let start = 0;
      const duration = 1500;
      const increment = endValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = endValue;
            return updated;
          });
          clearInterval(timer);
        } else {
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = Math.floor(start);
            return updated;
          });
        }
      }, 16);
    });
  }, [isVisible]);
    
    // const skills = {
    //   frontend: [
    //     { name: 'React.js', level: 95 },
    //     { name: 'Next.js', level: 90 },
    //     { name: 'Tailwind CSS', level: 95 },
    //     { name: 'JavaScript', level: 92 },
    //     { name: 'Redux', level: 88 }
    //   ],
    //   backend: [
    //     { name: 'Node.js', level: 93 },
    //     { name: 'Express.js', level: 92 },
    //     { name: 'Python', level: 85 },
    //     { name: 'MongoDB', level: 90 },
    //     { name: 'PostgreSQL', level: 88 }
    //   ],
    //   tools: [
    //     { name: 'UiPath RPA', level: 87 },
    //     { name: 'Git & GitHub', level: 93 },
    //     { name: 'Firebase', level: 90 },
    //     { name: 'Docker', level: 82 },
    //     { name: 'CI/CD', level: 85 }
    //   ]
    // };
  //   const experiences = [
  //   {
  //     role: 'Node.js Developer',
  //     company: 'Orange Jordan - Chatbot Team',
  //     period: 'Feb 2025 - Jul 2025',
  //     color: '#a548ff',
  //     achievements: [
  //       'Built backend APIs with Java Spring Boot and frontend with Node.js',
  //       'Integrated multiple APIs and optimized chatbot performance',
  //       'Resolved critical frontend issues improving system stability'
  //     ]
  //   },
  //   {
  //     role: 'RPA Developer',
  //     company: 'Orange Jordan - Automation Team',
  //     period: 'Nov 2024 - Present',
  //     color: '#cbd5e1',
  //     achievements: [
  //       'Developed RPA solutions using UiPath automating business processes',
  //       'Collaborated with analysts to translate requirements into workflows',
  //       'Improved operational efficiency through intelligent automation'
  //     ]
  //   },
  //   {
  //     role: 'Full Stack Trainee',
  //     company: 'Coding Academy by Orange',
  //     period: 'May 2024 - Nov 2024',
  //     color: '#a548ff',
  //     achievements: [
  //       'Enhanced UX/UI design skills and user engagement strategies',
  //       'Collaborated on IT team projects improving front-end and back-end systems',
  //       'Developed database management solutions improving data integrity'
  //     ]
  //   }
  // ];

//   const skills = {
//   frontend: [
//     { name: 'React.js', level: 95 },
//     { name: 'Next.js', level: 90 },
//     { name: 'Tailwind CSS', level: 95 },
//     { name: 'JavaScript', level: 92 }
//   ],
//   backend: [
//     { name: 'Node.js', level: 93 },
//     { name: 'Express.js', level: 92 },
//     { name: 'Python', level: 88 },
//     { name: 'MongoDB', level: 90 },
//     { name: 'PostgreSQL', level: 88 }
//   ],
//   automation: [
//     { name: 'UiPath RPA', level: 88 },
//     { name: 'Selenium', level: 85 }
//   ],
//   tools: [
//     { name: 'Git & GitHub', level: 93 },
//     { name: 'Firebase', level: 90 }
    
//   ],
//   design: [
//     { name: 'Canva (Reels & Graphics)', level: 90 }
//   ]
// };



const skills = {
  development: [
    { name: 'React.js', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'JavaScript', level: 92 },
    { name: 'Node.js', level: 93 },
    { name: 'Express.js', level: 92 },
    { name: 'Python', level: 88 },
    { name: 'MongoDB', level: 90 },
    { name: 'PostgreSQL', level: 88 },
    { name: 'API Development', level: 90 }
  ],
  automation: [
    { name: 'UiPath RPA', level: 88 },
    { name: 'Selenium', level: 85 },
    { name: 'Workflow Optimization', level: 87 }
  ],
  design: [
    { name: 'Figma', level: 90 },
    { name: 'Canva (Reels & Graphics)', level: 90 }
  ]
};


  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#22063d] py-24 px-6 overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#a548ff] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

   
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#a548ff]/20 to-[#cbd5e1]/20 border border-[#a548ff]/40 backdrop-blur-xl mb-6"> */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#a548ff]/20 to-[#cbd5e1]/20 border border-[#a548ff]/40 backdrop-blur-xl mb-6">
            <div className="w-2 h-2 bg-[#a548ff] rounded-full animate-pulse" />
            <span className="text-sm font-bold text-[#cbd5e1] tracking-wider uppercase">About Me</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Know Me <span className="bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent">Better</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
  A results-driven full-stack developer building scalable web applications and smart automation solutions that help businesses grow.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Story */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Profile Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] rounded-3xl blur-3xl opacity-30 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#a548ff]/40 transition-all duration-500">
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a548ff] to-[#cbd5e1] flex items-center justify-center text-4xl font-black text-white shadow-2xl">
                      A
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-[#22063d] flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Areej Abumuhfouz</h3>
                    <p className="text-[#cbd5e1] font-semibold">Full Stack Web Developer</p>
                  </div>
                </div>

                
<div className="space-y-4 text-gray-300 leading-relaxed">
  <p>
    I'm a <span className="text-[#a548ff] font-semibold">Computer Science graduate</span> and a{' '}
    <span className="text-[#cbd5e1] font-semibold">Full-Stack MERN & PERN Developer</span>{' '}
    with experience in{' '}
    <span className="text-[#a548ff] font-semibold">RPA automation</span>. 
    I build scalable, secure, and high-performance web applications, design responsive user interfaces, 
    develop reliable backends, and integrate APIs seamlessly. I also help businesses optimize workflows 
    through intelligent automation—delivering efficient, results-driven digital solutions.
  </p>
</div>



                
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
  <a
    href="mailto:areejabumahfouz@gmail.com"
    className="flex items-center gap-2 text-gray-300 hover:text-[#a548ff] transition-colors"
  >
    <span className="text-xl">📧</span>
    <span className="text-sm">Email</span>
  </a>

  <a
    href="tel:+962782907153"
    className="flex items-center gap-2 text-gray-300 hover:text-[#cbd5e1] transition-colors"
  >
    <span className="text-xl">📱</span>
    <span className="text-sm">Phone</span>
  </a>

  <a
    href="https://www.linkedin.com/in/areejabumuhfouz/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-300 hover:text-[#a548ff] transition-colors"
  >
    <span className="text-xl">💼</span>
    <span className="text-sm">LinkedIn</span>
  </a>

  <a
    href="https://github.com/areejabumuhfouz"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-300 hover:text-[#cbd5e1] transition-colors"
  >
    <span className="text-xl">🐙</span>
    <span className="text-sm">GitHub</span>
  </a>
</div>

              </div>
            </div>

            
          </div>

          {/* Right Column - Skills & Experience */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Skills Tabs */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] rounded-3xl blur-xl opacity-20" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                {/* Tab Navigation */}
                <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
                  {/* {['overview', 'frontend', 'backend', 'tools'].map((tab) => ( */}
{['overview', 'development', 'automation', 'design'].map((tab) => (

                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-300 ${
                        activeTab === tab
                          ? 'bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] text-white shadow-lg shadow-[#a548ff]/60'
                          : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="space-y-4">
                  {activeTab === 'overview' && (
                    <div className="space-y-6 animate-fadeIn">
                      <h4 className="text-xl font-bold text-white mb-4">Core Competencies</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {/* {['MERN Stack', 'RPA/UiPath', 'API Development', 'Cloud Services', 'Agile/Scrum'].map((skill, i) => ( */}
                         {[
  'MERN & PERN Stack',
  'RPA (UiPath & Selenium)',
  'API Development',
  'Firebase Services',
  'Figma UI Design',
  'Automation & Workflow Optimization'
].map((skill, i) => (

                          <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group">
                            <div className="w-2 h-2 bg-[#a548ff] rounded-full group-hover:scale-150 transition-transform duration-300" />
                            <span className="text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {['development', 'design', 'automation'].includes(activeTab) && (
                    <div className="space-y-4 animate-fadeIn">
                      {skills[activeTab].map((skill, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 font-semibold">{skill.name}</span>
                            <span className="text-[#cbd5e1] text-sm font-bold">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] rounded-full transition-all duration-1000 ease-out"
                              style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Education Card */}
            {/* <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#cbd5e1]/20 to-[#a548ff]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#cbd5e1]/40 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#cbd5e1] to-[#a548ff] rounded-xl flex items-center justify-center text-2xl">
                    🎓
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">Education & Training</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-[#cbd5e1] font-semibold">Full-Stack Web Development</p>
                        <p className="text-gray-400">Coding Academy by Orange • 2024</p>
                      </div>
                      <div>
                        <p className="text-[#a548ff] font-semibold">B.Sc. Computer Science</p>
                        <p className="text-gray-400">Al Albayt University • 2018-2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <section ref={sectionRef}>
      <div className="grid grid-cols-4 gap-4 my-12">
        {achievements.map((item, i) => {
          const suffix = item.number.replace(/[0-9]/g, "");

          return (
            <div
              key={i}
              className={`relative group transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#a548ff]/20 to-[#cbd5e1]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#a548ff]/40 transition-all duration-500 hover:scale-105">
                <div className="text-4xl mb-2">{item.icon}</div>

                <div className="text-3xl font-black bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent mb-1">
                  {counts[i]}
                  {suffix}
                </div>

                <div className="text-sm text-gray-400 font-medium">
                  {item.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>

        {/* Experience Timeline */}
        {/* <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> */}
          {/* <h3 className="text-4xl font-black text-white mb-12 text-center">
            Professional <span className="bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent">Journey</span>
          </h3> */}
          
          {/* <div className="relative">
            {/* Timeline line */}
            {/* <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#a548ff] via-[#cbd5e1] to-[#a548ff] opacity-30 hidden md:block" /> */}

            {/* <div className="space-y-8"> */}
              {/* {experiences.map((exp, i)  */}
              {/* => ( */}

                
                 {/* <div key={i} className="relative">
                   <div className="flex gap-8 items-start">  */}
                     {/* Timeline dot */}
                     {/* <div className="hidden md:flex items-center justify-center w-16 flex-shrink-0">
                       <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] shadow-lg shadow-[#a548ff]/50 relative z-10">
                         <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] animate-ping opacity-30" /> */}
                       {/* </div>
                     </div> */}

                    {/* Experience Card */}
                    {/* <div className="flex-1 group">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${exp.color}40, #cbd5e140)` }} />
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500">
                          <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                              <p className="font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                            </div>
                            <span className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-sm font-medium border border-white/10">
                              {exp.period}
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, j) => (
                              <li key={j} className="flex items-start gap-3 text-gray-300">
                                <span className="text-[#a548ff] mt-1">▹</span>
                                <span className="flex-1">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div> */}
                  {/* </div>
                </div>
              ))}
            </div> */}
          {/* </div>
        </div> */}

        {/* CTA Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] rounded-3xl blur-2xl opacity-40 animate-pulse" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm always excited to collaborate on innovative projects and explore new opportunities in web development and automation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="group relative px-8 py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#a548ff] to-[#cbd5e1]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#cbd5e1] to-[#a548ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <button className="px-8 py-4 rounded-xl font-bold border-2 border-white/30 text-white hover:bg-white hover:text-[#22063d] backdrop-blur-xl transition-all duration-500 hover:scale-105">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(50px, -50px); opacity: 0.6; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
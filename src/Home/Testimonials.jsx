 <section 
        ref={(el) => (sectionRefs.current[1] = el)}
        data-section="featured"
        className="relative py-12 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible.featured ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
              Featured{' '}
              <span className="bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-xl text-gray-300">My most impactful projects</p>
          </div>

          <div className="space-y-12">
            {filteredProjects.filter(p => p.featured).map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] overflow-hidden hover:border-[#a548ff]/40 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                  isVisible.featured ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700`} />

                <div className="grid lg:grid-cols-2 gap-8 p-10 lg:p-16">
                  {/* Left side - Visual */}
                  <div className="relative">
                    <div className="relative aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-3xl flex items-center justify-center overflow-hidden border border-white/20 group-hover:border-[#a548ff]/40 transition-all duration-700">
                      <div 
                        className="text-[12rem] transition-all duration-700 group-hover:scale-110 group-hover:rotate-12"
                        style={{ 
                          filter: hoveredProject === project.id ? `drop-shadow(0 0 40px ${project.color})` : 'none'
                        }}
                      >
                        {/* {project.image} */}
                        <img src={project.image} alt="" />
                      </div>
                      
                      {/* Floating tech badges */}
                      <div className="absolute inset-0 p-6">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <div
                            key={i}
                            className={`absolute bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl`}
                            style={{
                              top: `${20 + i * 25}%`,
                              right: `${10 + i * 5}%`,
                              opacity: hoveredProject === project.id ? 1 : 0,
                              transition: 'opacity 0.5s'
                            }}
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    {/* <div className="grid grid-cols-3 gap-4 mt-6">
                      {Object.entries(project.stats).map(([key, value], i) => (
                        <div 
                          key={key}
                          className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 text-center border border-white/10 group-hover:bg-white/10 transition-all duration-500"
                        >
                          <div className={`text-2xl font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                            {value}
                          </div>
                          <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div> */}
                  </div>

                  {/* Right side - Content */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-[#a548ff] to-[#cbd5e1] text-white">
                              {project.year}
                            </span>
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-gray-300">
                              {project.duration}
                            </span>
                          </div>
                          <h3 className="text-4xl md:text-5xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#cbd5e1] group-hover:to-[#a548ff] group-hover:bg-clip-text transition-all duration-500 mb-2">
                            {project.title}
                          </h3>
                          <p className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                            {project.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                        <span className="font-semibold text-[#cbd5e1]">Role:</span>
                        <span>{project.role}</span>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.slice(0, 4).map((feature, i) => (
                          <div 
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <svg className="w-5 h-5 text-[#a548ff] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-4 py-2 rounded-full text-sm font-bold bg-white/10 text-gray-300 hover:bg-gradient-to-r hover:from-[#a548ff] hover:to-[#cbd5e1] hover:text-white transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Outcome */}
                    {/* <div className="bg-gradient-to-r from-[#a548ff]/10 to-[#cbd5e1]/10 rounded-2xl p-6 border border-[#a548ff]/20">
                      <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <span>🎯</span> Outcome
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {project.outcome}
                      </p>
                    </div> */}

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      {project.live && (
                        <button className={`group px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r ${project.gradient} hover:shadow-2xl hover:scale-105 transition-all duration-500`}>
                          <span className="flex items-center gap-2">
                            View Live
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </span>
                        </button>
                      )}
                      {project.github && (
                        <button className="px-8 py-4 rounded-2xl font-bold text-white bg-white/5 border border-white/20 hover:bg-white/10 hover:border-[#cbd5e1]/40 transition-all duration-500 hover:scale-105">
                          <span className="flex items-center gap-2">
                            GitHub
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
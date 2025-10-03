const ProjectsSection = () => {
  const projects = [
    {
      title: "Smart Contact Manager",
      description: "Built a microservices-based contact management system with secure authentication (Signup, Google, GitHub OAuth2 & JWT). Features contact CRUD, search, pagination, Excel export, mailing, dark/light theme toggle, and an Admin Dashboard for user/system monitoring.",
      features: [
        "OAuth2 Authentication",
        "Admin Dashboard", 
        "Excel Export",
        "Dark/Light Theme",
        "Microservices Architecture"
      ],
      techStack: [
        "Java 21",
        "Spring Boot 3.x", 
        "Spring Security",
        "MySQL",
        "React.js",
        "TailwindCSS",
        "OAuth2",
        "JWT"
      ],
      github: "https://github.com/akshay75760/SmartConactManager",
      live: "#",
      icon: "👤",
      color: "bg-slate-600"
    },
    {
      title: "Healthify Android App", 
      description: "Healthcare app using Java, XML, and SQLite with features for medicine purchase, appointment booking, lab test scheduling, and comprehensive health management functionality.",
      features: [
        "Medicine Purchase",
        "Appointment Booking",
        "Lab Test Scheduling", 
        "SQLite Database",
        "Android UI/UX"
      ],
      techStack: [
        "Java",
        "Android",
        "XML", 
        "SQLite",
        "Android SDK"
      ],
      github: "https://github.com/akshay75760/Healthify-Android-App",
      live: "#",
      icon: "📱",
      color: "bg-slate-600"
    },
    {
      title: "Realtime Code Editor",
      description: "Built a real-time web application for writing and executing code with a side-by-side editor and output view.",
      features: [
      "Instant code execution ",
      "Multi-language support ",
      "Real-time collaboration ",
      "Clean split-screen UI"
    ],
      techStack: [
        "HTML",
        "CSS", 
        "JavaScript",
      ],
      github: "https://github.com/akshay75760/Realtime",
      live: "#", 
      icon: "💾",
      color: "bg-slate-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gray-400 dark:bg-gray-600 mx-auto mb-6 rounded-full transition-colors duration-300"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            A showcase of my technical projects and development experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transform hover:-translate-y-3 hover:scale-[1.02] group relative overflow-hidden backdrop-blur-sm">
              
              {/* Subtle shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full transform skew-x-12"></div>
              
              {/* Professional border highlight */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-700 rounded-2xl transition-colors duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Project Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 ${project.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-4 shadow-md transform group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/25`}>
                    <div className="transform group-hover:rotate-6 transition-transform duration-300">
                      {project.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                    Key Features:
                  </h4>
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="inline-block">
                        <span className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 inline-block transition-all duration-200 hover:bg-green-100 dark:hover:bg-green-900/50 hover:scale-105 border border-green-200/50 dark:border-green-700/50 cursor-pointer hover:shadow-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:scale-105 border border-blue-200/50 dark:border-blue-700/50 cursor-pointer hover:shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 font-medium flex-1 justify-center hover:scale-105 hover:shadow-lg transform group/btn"
                >
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all duration-300 font-medium flex-1 justify-center hover:scale-105 hover:shadow-lg transform group/btn"
                  >
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
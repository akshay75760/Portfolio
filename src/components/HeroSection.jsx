const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-6 py-20 transition-all duration-500 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-100 dark:bg-gray-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-200 dark:bg-gray-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-150 dark:bg-gray-750 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-12">
          <div className="relative inline-block group">
            {/* Animated rings */}
            <div className="absolute inset-0 w-40 h-40 rounded-full border-4 border-gray-200 dark:border-gray-600 animate-spin-slow group-hover:border-blue-400 transition-colors duration-500"></div>
            <div className="absolute inset-1 w-38 h-38 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-500 animate-spin-slow group-hover:border-blue-300 transition-colors duration-500" style={{animationDirection: 'reverse'}}></div>
            
            {/* Main profile circle */}
            <div className="w-40 h-40 mx-auto bg-gray-600 dark:bg-gray-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:rotate-3 border-4 border-white dark:border-gray-800 relative z-10">
              <span className="text-5xl font-bold text-white">AK</span>
            </div>
            
            {/* Floating particles */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-6 right-4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute bottom-4 left-6 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-yellow-400 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-800 animation-delay-200"></div>
          </div>
        </div>

        {/* Greeting */}
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold shadow-lg">
            👋 Hello, I'm
          </span>
        </div>

        {/* Name and Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
          Akshay Kumar
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 mb-8 font-semibold transition-colors duration-300">
          Full Stack Developer & Software Engineer
        </h2>

        {/* Enhanced Divider */}
        <div className="flex items-center justify-center mb-10">
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-sm"></div>
        </div>

        {/* Enhanced Description */}
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 transition-colors duration-300 font-medium">
          Computer Science graduate and PG-DAC trainee with expertise in modern web technologies. 
          Specialized in{' '}
          <span className="inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md font-semibold mx-1">Java</span>
          ,{' '}
          <span className="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md font-semibold mx-1">Spring Boot</span>
          ,{' '}
          <span className="inline-flex items-center px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-md font-semibold mx-1">React</span>
          , and{' '}
          <span className="inline-flex items-center px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-md font-semibold mx-1">MySQL</span>
          . Passionate about creating scalable web applications and contributing to innovative software development projects.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#projects"
            className="group relative inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-600"
          >
            <span className="relative flex items-center">
              View My Work
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
          
          <a
            href="#contact"
            className="group inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold text-lg rounded-2xl border-2 border-gray-300 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:border-gray-500 dark:hover:border-gray-400"
          >
            Let's Connect
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Projects Completed</div>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Technologies Mastered</div>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">∞</div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">Learning & Growing</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
const ActionButtons = () => {
  const handleViewWork = () => {
    // Add logic to navigate to projects section or external portfolio
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // Add logic to download CV
    // For now, it will just show an alert
    alert('CV download functionality will be implemented');
  };

  return (
    <section className="py-8 px-6 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        {/* Scroll Down Indicator */}
        <div className="mb-8">
          <div className="w-px h-16 bg-gray-300 dark:bg-gray-600 mx-auto mb-4 transition-colors duration-300"></div>
          <div className="w-6 h-6 border-2 border-gray-400 dark:border-gray-500 rounded-full mx-auto animate-bounce transition-colors duration-300">
            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mx-auto mt-1 transition-colors duration-300"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* View My Work Button */}
          <button
            onClick={handleViewWork}
            className="group px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            View My Work
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* Download CV Button */}
          <button
            onClick={handleDownloadCV}
            className="group px-8 py-4 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold text-lg hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            <svg 
              className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActionButtons;
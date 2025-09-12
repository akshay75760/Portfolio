import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' }, 
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Enhanced Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <span className="text-white font-bold text-lg">AK</span>
          </div>
          <div className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
            Akshay Kumar
          </div>
        </div>

        {/* Enhanced Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Enhanced Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="relative p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 text-gray-600 dark:text-gray-300 shadow-md hover:shadow-lg transform hover:scale-110"
            aria-label="Toggle dark mode"
          >
            <div className="relative w-5 h-5">
              {isDarkMode ? (
                <svg className="w-5 h-5 transition-transform duration-300 rotate-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 transition-transform duration-300 rotate-180" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </div>
          </button>

          {/* Enhanced Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 text-gray-600 dark:text-gray-300 shadow-md hover:shadow-lg transform hover:scale-110"
          >
            <svg className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mx-4 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 font-medium rounded-lg"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
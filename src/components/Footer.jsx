import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © 2025 Vishal Gurung - Goblin
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="interactive text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="interactive text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
              Terms
            </a>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Available for work</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

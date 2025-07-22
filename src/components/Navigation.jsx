import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import AnimatedThemeToggle from "./AnimatedThemeToggle";

const Navigation = ({
  activeSection,
  onSectionChange,
  isDark,
  onThemeToggle,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 bg-opacity-80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* <div className="text-xl font-bold text-gray-900 dark:text-white">
              <a href="#home">Vishal Gurung</a>
            </div> */}
            <div className="w-10 h-10 relative">
              <a href="#home">
                <img
                  src="public/assets/images/goblin.webp"
                  alt="Logo"
                  className="w-full h-full object-contain scale-[1.2] transition-transform duration-300 hover:scale-125"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`interactive text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-black dark:text-white"
                      : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
                  onClick={() => onSectionChange(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop Controls */}
            <div className="hidden md:flex items-center gap-4">
              <AnimatedThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-2">
              <AnimatedThemeToggle isDark={isDark} onToggle={onThemeToggle} />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="interactive p-2 text-gray-700 dark:text-gray-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onSectionChange={onSectionChange}
      />
    </>
  );
};

export default Navigation;

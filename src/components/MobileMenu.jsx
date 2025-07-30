import React from "react";
import { Link } from "react-router-dom";
import AnimatedThemeToggle from "./AnimatedThemeToggle";

const MobileMenu = ({
  isOpen,
  onClose,
  activeSection,
  isDark,
  onThemeToggle,
  onSectionClick,
}) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="absolute right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl flex flex-col justify-between">
        <div className="p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="mt-12 space-y-6">
            {navItems.map((item) =>
              item.path && item.id === "contact" ? ( // Contact stays as Link
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={onClose}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "bg-black text-white dark:bg-gray-700 dark:text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => {
                    onClose();
                    onSectionClick(item.id);
                  }}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "bg-black text-white dark:bg-gray-700 dark:text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>

        {/* Social icons + theme toggle inside menu at bottom-left */}
        <div className="p-6 flex justify-between items-center border-t border-gray-200 dark:border-gray-700">
          {/* Social Icons */}
          <div className="flex gap-4">
            {/* GitHub Icon Link */}
            <a
              href="https://github.com/g0GobliN"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.334-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404 11.52 11.52 0 013.003.404c2.292-1.552 3.298-1.23 3.298-1.23.654 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.63-5.475 5.922.43.372.814 1.103.814 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* Instagram Icon Link */}
            <a
              href="https://instagram.com/goblin01_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <rect
                  width="20"
                  height="20"
                  x="2"
                  y="2"
                  rx="5"
                  ry="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11.37a4 4 0 11-7.999-.001 4 4 0 017.999 0z"
                />
                <line
                  x1="17.5"
                  y1="6.5"
                  x2="17.5"
                  y2="6.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Theme toggle on the right side */}
          <div>
            <AnimatedThemeToggle isDark={isDark} onToggle={onThemeToggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

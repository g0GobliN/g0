import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AnimatedThemeToggle from "./AnimatedThemeToggle";
import { ChevronRight } from "lucide-react";

const MobileMenu = ({
  isOpen,
  onClose,
  activeSection,
  isDark,
  onThemeToggle,
  onSectionClick,
}) => {
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Project" },
    { id: "article", label: "Articles", path: "/articles" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  // Your actual article data (simplified example)
  const actualArticle = {
    date: "2025-07-25",
    title: "Hello World",
    description: "This is the featured article preview shown inside mobile menu.",
    readTime: "5 min read",
    path: "/articles/hello-world",
  };

  // Format date helper (optional)
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className="absolute right-0 top-0 h-full w-64 
                   bg-white dark:bg-black
                   shadow-xl flex flex-col justify-between
                   transition-colors duration-300"
      >
        <div className="p-6 relative overflow-y-auto flex flex-col flex-grow">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
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

          {/* Nav Links */}
          <div className="mt-12 space-y-6">
            {navItems.map((item) =>
              item.path ? (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={onClose}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "bg-black text-white dark:bg-gray-800 dark:text-white"
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
                      ? "bg-black text-white dark:bg-gray-800 dark:text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* Feature Preview */}
          <div
            onClick={() => {
              onClose();
              navigate(actualArticle.path);
            }}
            className="mt-8 cursor-pointer rounded-md border border-gray-300 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <div className="flex items-center mb-2">
              <div className="w-8 h-px bg-blue-600 dark:bg-cyan-400 mr-4"></div>
              <span className="text-blue-600 dark:text-cyan-400 text-sm font-medium">
                {formatDate(actualArticle.date)}
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
              {actualArticle.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
              {actualArticle.description}
            </p>
            <div className="flex items-center justify-between text-blue-600 dark:text-cyan-400 text-sm font-medium">
              <span>{actualArticle.readTime}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Social icons + theme toggle */}
        <div className="p-6 flex justify-between items-center border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-4">
            {/* Github & Instagram icons */}
            {/* Your existing icons here */}
          </div>

          <AnimatedThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

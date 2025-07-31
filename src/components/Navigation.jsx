import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import AnimatedThemeToggle from "./AnimatedThemeToggle";
import goblinLogo from "/assets/images/goblin.webp";

const Navigation = ({ isDark, onThemeToggle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home"); // single active instead of visited trail
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Project" },
    { id: "article", label: "Articles", path: "/articles" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  // Detect if we're on a route (articles/contact)
  useEffect(() => {
    const routeMatch = navItems.find(
      (item) => item.path === location.pathname
    );
    if (routeMatch) {
      setActiveItem(routeMatch.id);
    }
  }, [location.pathname]);

  const scrollToSectionWithOffset = (id, offset = 80) => {
    const element = document.getElementById(id);
    if (!element) return;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const scrollPosition = elementPosition - offset;
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToSectionWithOffset("home", 80);
      setActiveItem("home");
    } else {
      navigate("/");
      setActiveItem("home");
    }
  };

  const handleSectionClick = (id) => {
    setIsMobileMenuOpen(false);
    setActiveItem(id);

    if (location.pathname === "/") {
      scrollToSectionWithOffset(id, 80);
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToSectionWithOffset(id, 80);
      }, 150);
    }
  };

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    setActiveItem(id);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-black bg-opacity-80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="w-10 h-10 relative">
              <a href="/" onClick={handleLogoClick}>
                <img
                  src={goblinLogo}
                  alt="Logo"
                  className="w-full h-full object-contain scale-[1.2] transition-transform duration-300 hover:scale-125"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) =>
                item.path ? (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`interactive text-sm font-gotham-book transition-colors ${
                      activeItem === item.id
                        ? "text-black dark:text-white crossed-text"
                        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    }`}
                    onClick={() => handleLinkClick(item.id)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleSectionClick(item.id)}
                    className={`interactive text-sm font-medium transition-colors ${
                      activeItem === item.id
                        ? "text-black dark:text-white crossed-text"
                        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>

            {/* Desktop Controls */}
            <div className="hidden md:flex items-center gap-4">
              <AnimatedThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-2">
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

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeItem}
        isDark={isDark}
        onThemeToggle={onThemeToggle}
        onSectionClick={handleSectionClick}
      />

      {/* Fixed theme toggle on mobile */}
      {isMobileMenuOpen && (
        <div
          className={`fixed bottom-6 right-6 md:hidden z-50 transition-opacity ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <AnimatedThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        </div>
      )}
    </>
  );
};

export default Navigation;

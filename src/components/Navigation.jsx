import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import AnimatedThemeToggle from "./AnimatedThemeToggle";
import goblinLogo from "/assets/images/goblin.webp";

const Navigation = ({
  activeSection,
  onSectionChange,
  isDark,
  onThemeToggle,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  // Scroll helper with offset for fixed navbar
  const scrollToSectionWithOffset = (id, offset = 80) => {
    const element = document.getElementById(id);
    if (!element) return;

    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const scrollPosition = elementPosition - offset;

    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  };

  // When logo clicked: scroll home if on "/", else navigate "/"
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scrollToSectionWithOffset("home", 80);
      onSectionChange?.("home");
    } else {
      navigate("/");
    }
  };

  // Handle Home/About/Work clicks
  const handleSectionClick = (id) => {
    setIsMobileMenuOpen(false);

    if (location.pathname === "/") {
      // Already on home page, scroll with offset
      scrollToSectionWithOffset(id, 80);
      onSectionChange?.(id);
    } else {
      // Navigate to home first, then scroll with offset after short delay
      navigate("/", { replace: false });
      setTimeout(() => {
        scrollToSectionWithOffset(id, 80);
        onSectionChange?.(id);
      }, 150);
    }
  };

  return (
    <>
      <nav
       className="
        fixed top-0 left-0 right-0 z-40
        bg-white dark:bg-black
        bg-opacity-80 backdrop-blur-md
        border-b border-gray-200 dark:border-gray-700
        transition-colors duration-300
      "
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
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
                      activeSection === item.id
                        ? "text-black dark:text-white crossed-text"
                        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleSectionClick(item.id)}
                    className={`interactive text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-black dark:text-white crossed-text"
                        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>

            {/* Desktop Controls (Theme toggle + Social Icons) */}
            <div className="hidden md:flex items-center gap-4">
              {/* Social Icons */}

              {/* Dark Mode Toggle */}
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

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        isDark={isDark}
        onThemeToggle={onThemeToggle}
        onSectionClick={handleSectionClick}
      />

      {/* Fixed bottom-right theme toggle on mobile */}
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

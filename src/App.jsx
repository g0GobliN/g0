import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import CursorFollower from "./components/CursorFollower";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ErrorPage from "./components/ErrorPage";
import LogoSplash from "./components/logoSplash";

import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ProjectSection from "./sections/ProjectSection";
import ContactSection from "./sections/ContactSection";
import ArticleSection from "./sections/ArticleSection";

import HelloWorld from "./data/HelloWorld";

function MainPage({ scrollY, onSectionChange }) {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.replace("/", "");
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <HomeSection
        scrollY={scrollY}
        id="home"
        onSectionChange={onSectionChange}
      />
      <AboutSection id="about" />
      <ProjectSection id="project" />
    </>
  );
}

export default function ModernPortfolio() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const [pendingSection, setPendingSection] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // default to dark if nothing saved
    localStorage.setItem("theme", "dark");
    return true;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ["home", "about", "project", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);

    if (sectionId === "contact") {
      navigate("/contact");
    } else {
      if (location.pathname !== "/") {
        setPendingSection(sectionId);
        navigate("/");
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  useEffect(() => {
    if (pendingSection && location.pathname === "/") {
      const element = document.getElementById(pendingSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setPendingSection(null);
      }
    }
  }, [location.pathname, pendingSection]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  if (loading) {
    return <LogoSplash onAnimationEnd={() => setLoading(false)} />;
  }

  return (
    <div
      className={`transition-colors duration-300 ${
        isDarkMode
          ? "dark bg-black text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <CursorFollower />
      <Navigation
        isDark={isDarkMode}
        onSectionChange={handleSectionChange}
        onThemeToggle={toggleTheme}
        activeSection={activeSection}
      />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              scrollY={scrollY}
              onSectionChange={handleSectionChange}
            />
          }
        />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/articles" element={<ArticleSection />} />
        <Route path="/articles/hello-world" element={<HelloWorld />} />
        <Route
          path="*"
          element={<ErrorPage onNavigateHome={() => navigate("/")} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

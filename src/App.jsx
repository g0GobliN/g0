import React, { useState, useEffect } from "react";

// Import components
import CursorFollower from "./components/CursorFollower";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Import sections
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import WorkSection from "./sections/WorkSection";
import ContactSection from "./sections/ContactSection";

export default function ModernPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);
  
  useEffect(() => {
    // Update HTML class and localStorage when theme changes
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'work', 'contact'];
      const currentSection = sections.find(section => {
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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
      isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <CursorFollower />
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange}
        isDark={isDarkMode}
        onThemeToggle={toggleTheme}
      />
      
      <HomeSection scrollY={scrollY} onSectionChange={handleSectionChange} />
      <AboutSection />     
      <WorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
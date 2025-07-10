import React, { useState, useEffect, useRef } from "react";

// Smooth cursor follower
const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  
  return (
    <div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
        transform: `scale(${isHovering ? 1.5 : 1})`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      <div className="w-5 h-5 bg-white rounded-full"></div>
    </div>
  );
};

// Text reveal animation
const TextReveal = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => observer.disconnect();
  }, [delay]);
  
  return (
    <div ref={elementRef} className={`overflow-hidden ${className}`}>
      <div
        className={`transition-transform duration-700 ease-out ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

// Navigation Component
const Navigation = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900"> <a href="#home">
            Vishal Gurung
          </a></div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`interactive text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-black' : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => onSectionChange(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          
        <a
        href={`${import.meta.env.BASE_URL}/assets/Vishal_Gurung_Portfolio_Resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        >
        <button className="interactive px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Resume
        </button>
        </a>


        </div>
      </div>
    </nav>
  );
};

// ===============================
// HOME SECTION
// ===============================
const HomeSection = ({ scrollY, onSectionChange }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      
      <div className="relative z-10 text-center max-w-4xl px-6">
        <TextReveal className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Creative Developer
            <br />
            <span className="text-gray-500">& Tech Enthusiast</span>
          </h1>
        </TextReveal>
        
        <TextReveal delay={200} className="mb-8">
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm Vishal Gurung, a passionate developer crafting digital experiences 
            that bridge technology and human connection.
          </p>
        </TextReveal>
        
        <TextReveal delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="interactive px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors" 
            onClick={() => onSectionChange('work')}>
              View My Work
            </button>
            <button className="interactive px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors"
            onClick={() => onSectionChange('contact')}>
              Get In Touch
            </button>
          </div>
        </TextReveal>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 opacity-60 animate-pulse delay-1000"></div>
    </section>
  );
};

// ===============================
// ABOUT SECTION
// ===============================
const SkillsGrid = () => {
  const skills = [
    { name: "Frontend Development", level: 90, category: "Technical" },
    { name: "React/TailwindCSS", level: 85, category: "Technical" },
    { name: "JavaScript", level: 88, category: "Technical" },
    { name: "UI/UX Design", level: 75, category: "Design" },
    { name: "Node.js", level: 80, category: "Technical" },
    { name: "Git & Version Control", level: 85, category: "Technical" }
  ];
  
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div key={skill.name} className="group">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-900">{skill.name}</span>
            <span className="text-sm text-gray-500">{skill.category}</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-white dark:bg-black transition-all duration-1000 delay-200"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <TextReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About Me
              </h2>
            </TextReveal>
            
            <TextReveal delay={100}>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Currently studying in Japan, I've immersed myself in a culture that values 
                precision, craftsmanship, and continuous improvement. This experience has 
                profoundly shaped my approach to development.
              </p>
            </TextReveal>
            
            <TextReveal delay={200}>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I believe in creating technology that doesn't just function, but inspires. 
                Every project is an opportunity to blend technical excellence with 
                thoughtful design.
              </p>
            </TextReveal>
            
            <TextReveal delay={300}>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">2+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">1+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black">🇳🇵</div>
                  <div className="text-sm text-gray-500">Based in Nepal</div>
                </div>
              </div>
            </TextReveal>
          </div>
          
          <div className="space-y-8">
            <TextReveal delay={400}>
              <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
            </TextReveal>
            
            <TextReveal delay={500}>
              <SkillsGrid />
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

// ===============================
// WORK SECTION
// ===============================
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 `} 
    //   ${
    //     index % 2 === 0 ? 'md:mt-8' : 'md:mt-0'
    //   }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    > 
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-50 group-hover:opacity-100 transition-opacity">
            {project.icon}
          </div>
        </div>
      </div>
      
      <div className="p-10 flex flex-col h-full justify-between">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <div className="text-sm text-gray-500">2024</div>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="interactive flex items-center gap-2 text-black font-medium hover:gap-3 transition-all">
            View Project
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const WorkSection = () => {
  const projects = [
    {
      title: "Random Dog Generator",
      description: "A delightful web application that brings joy through random dog images. Built with modern JavaScript and integrated with the Dog CEO API for seamless data fetching.",
      tags: ["JavaScript", "API", "CSS", "HTML"],
      icon: "🐕",
      url: `${import.meta.env.BASE_URL}dog-demo.html` 
    },
    {
      title: "Interactive Portfolio",
      description: "A sophisticated personal portfolio showcasing modern web development techniques. Features smooth animations, responsive design, and interactive elements.",
      tags: ["React", "Tailwind", "JavaScript"],
      icon: "💼",
      url: "https://github.com/g0GobliN/g0"
    }
    // {
    //   title: "Digital Experiments",
    //   description: "A collection of creative coding experiments exploring the intersection of technology and art. Built with various modern web technologies.",
    //   tags: ["Three.js", "Canvas", "Animation"],
    //   icon: "🎨"
    // }
  ];

  return (
    <section id="work" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Selected Work
            </h2>
          </TextReveal>
          
          <TextReveal delay={100}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A curated collection of projects that showcase my journey 
              as a developer and designer.
            </p>
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:translate-x-[187px]">
          {projects.map((project, index) => (
            <TextReveal key={project.title} delay={index * 100}>
              <ProjectCard project={project} index={index} />
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// ===============================
// CONTACT SECTION
// ===============================
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <TextReveal>
         
         <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
        </TextReveal>
        
        <TextReveal delay={100}>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative projects and 
            explore new opportunities. Let's create something amazing together.
          </p>
        </TextReveal>
        
        <TextReveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:grgvishal.gurung17@gmail.com"
              className="interactive flex items-center gap-3 px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586l-8 4.5-8-4.5V4zm0 4.414V19a1 1 0 001 1h16a1 1 0 001-1V8.414l-8 4.5-8-4.5z"/>
              </svg>
              Email Me
            </a>
            
            <a
              href="https://github.com/g0GobliN"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive flex items-center gap-3 px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            
            <a
              href="https://instagram.com/goblin01_"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive flex items-center gap-3 px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>
        </TextReveal>
      </div>
    </section>
  );
};

// ===============================
// FOOTER COMPONENT
// ===============================
const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">
            © 2025 Vishal Gurung - Goblin Tinkerer Extraordinaire.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="interactive text-gray-600 hover:text-black transition-colors">
              Privacy
            </a>
            <a href="#" className="interactive text-gray-600 hover:text-black transition-colors">
              Terms
            </a>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500">Available for work</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ===============================
// MAIN APP COMPONENT
// ===============================
export default function ModernPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  
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
  
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <CursorFollower />
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <HomeSection scrollY={scrollY} onSectionChange={handleSectionChange} />
      <AboutSection/>
      <WorkSection/>
      <ContactSection/>
      <Footer />
    </div>
  );
}
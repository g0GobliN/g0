// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// // Smooth cursor follower (desktop only)
// const CursorFollower = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
  
//  useEffect(() => {
//   // Check if device is mobile
//   const checkMobile = () => {
//     setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
//   };

//   checkMobile();
//   window.addEventListener('resize', checkMobile);

//   if (isMobile) return;

//   const handleMouseMove = (e) => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   const handleMouseEnter = () => setIsHovering(true);
//   const handleMouseLeave = () => setIsHovering(false);

//   window.addEventListener('mousemove', handleMouseMove);

//   const interactiveElements = document.querySelectorAll('a, button, .interactive');
//   interactiveElements.forEach(el => {
//     el.addEventListener('mouseenter', handleMouseEnter);
//     el.addEventListener('mouseleave', handleMouseLeave);
//   });

//   return () => {
//     window.removeEventListener('mousemove', handleMouseMove);
//     window.removeEventListener('resize', checkMobile);
//     interactiveElements.forEach(el => {
//       el.removeEventListener('mouseenter', handleMouseEnter);
//       el.removeEventListener('mouseleave', handleMouseLeave);
//     });
//   };
// }, [isMobile]);

//   // Don't render on mobile
//   if (isMobile) return null;
  
//   return (
//     <div
//       className="fixed pointer-events-none z-50 mix-blend-difference"
//       style={{
//         left: mousePosition.x - 10,
//         top: mousePosition.y - 10,
//         transform: `scale(${isHovering ? 1.5 : 1})`,
//         transition: 'transform 0.2s ease-out'
//       }}
//     >
//       <div className="w-5 h-5 bg-white rounded-full"></div>
//     </div>
//   );
// };



// // Text reveal animation
// const TextReveal = ({ children, className = "", delay = 0 }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef(null);
  
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setTimeout(() => setIsVisible(true), delay);
//         }
//       },
//       { threshold: 0.1 }
//     );
    
//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }
    
//     return () => observer.disconnect();
//   }, [delay]);
  
//   return (
//     <div ref={elementRef} className={`overflow-hidden ${className}`}>
//       <div
//         className={`transition-transform duration-700 ease-out ${
//           isVisible ? 'translate-y-0' : 'translate-y-full'
//         }`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// // Mobile Menu Component
// const MobileMenu = ({ isOpen, onClose, activeSection, onSectionChange }) => {
//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'work', label: 'Work' },
//     { id: 'contact', label: 'Contact' }
//   ];

//   return (
//     <div className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ${
//       isOpen ? 'translate-x-0' : 'translate-x-full'
//     }`}>
//       <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
//       <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl">
//         <div className="p-6">
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
          
//           <div className="mt-12 space-y-6">
//             {navItems.map(item => (
//               <button
//                 key={item.id}
//                 className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
//                   activeSection === item.id 
//                     ? 'bg-black text-white' 
//                     : 'text-gray-700 hover:bg-gray-100'
//                 }`}
//                 onClick={() => {
//                   onSectionChange(item.id);
//                   onClose();
//                 }}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Theme Toggle Component
// const AnimatedThemeToggle = ({ isDark, onToggle }) => {
//   return (
//     <motion.button
//       onClick={onToggle}
//       className={`w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300 ${
//         isDark ? "bg-gray-600" : "bg-yellow-300"
//       }`}
//       animate={{ backgroundColor: isDark ? "#4B5563" : "#FCD34D" }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       title={isDark ? "Switch to light mode" : "Switch to dark mode"}
//     >
//       <motion.div
//         className="w-6 h-6 rounded-full flex items-center justify-center text-sm"
//         animate={{
//           x: isDark ? 24 : 0,
//           backgroundColor: isDark ? "#f19e18" : "#ffffff",
//           color: isDark ? "#ffffff" : "#f59e0b"
//         }}
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       >
//         {isDark ? "🌙" : "☀️"}
//       </motion.div>
//     </motion.button>
//   );
// };

// // Navigation Component
// const Navigation = ({ activeSection, onSectionChange, isDark, onThemeToggle }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'work', label: 'Work' },
//     { id: 'contact', label: 'Contact' }
//   ];
  
//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 bg-opacity-80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
//         <div className="max-w-6xl mx-auto px-6 py-4">
//           <div className="flex justify-between items-center">
//             <div className="text-xl font-bold text-gray-900 dark:text-white">
//               <a href="#home">Vishal Gurung</a>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center gap-8">
//               {navItems.map(item => (
//                 <button
//                   key={item.id}
//                   className={`interactive text-sm font-medium transition-colors ${
//                     activeSection === item.id 
//                       ? 'text-black dark:text-white' 
//                       : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
//                   }`}
//                   onClick={() => onSectionChange(item.id)}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//             </div>
            
//             {/* Desktop Controls */}
//             <div className="hidden md:flex items-center gap-4">
//               <AnimatedThemeToggle isDark={isDark} onToggle={onThemeToggle} />

//             </div>

//             {/* Mobile Controls */}
//             <div className="md:hidden flex items-center gap-2">
//               <AnimatedThemeToggle isDark={isDark} onToggle={onThemeToggle} />
//               <button
//                 onClick={() => setIsMobileMenuOpen(true)}
//                 className="interactive p-2 text-gray-700 dark:text-gray-300"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>
      
//       <MobileMenu 
//         isOpen={isMobileMenuOpen}
//         onClose={() => setIsMobileMenuOpen(false)}
//         activeSection={activeSection}
//         onSectionChange={onSectionChange}
//       />
//     </>
//   );
// };

// // ===============================
// // HOME SECTION
// // ===============================
// const HomeSection = ({ scrollY, onSectionChange }) => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       <div 
//         className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
//         style={{ transform: `translateY(${scrollY * 0.3}px)` }}
//       />
      
//       <div className="relative z-10 text-center max-w-4xl px-6">
//         <TextReveal className="mb-6">
//           <h1 className="text-4xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
//             Creative Developer
//             <br />
//             <span className="text-gray-500 dark:text-gray-400">& Tech Enthusiast</span>
//           </h1>
//         </TextReveal>
        
//         <TextReveal delay={200} className="mb-8">
//           <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
//             I'm Vishal Gurung, a passionate developer crafting digital experiences 
//             that bridge technology and human connection.
//           </p>
//         </TextReveal>
        
//         <TextReveal delay={400}>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button 
//               className="interactive px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors" 
//               onClick={() => onSectionChange('work')}
//             >
//               View My Work
//             </button>
//             <button 
//               className="interactive px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
//               onClick={() => onSectionChange('contact')}
//             >
//               Get In Touch
//             </button>
//           </div>
//         </TextReveal>
//       </div>
      
//       {/* Floating elements */}
//       <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 opacity-60 animate-pulse"></div>
//       <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 opacity-60 animate-pulse delay-1000"></div>
//     </section>
//   );
// };

// // ===============================
// // ABOUT SECTION
// // ===============================
// const SkillsGrid = () => {
//   const skills = [
//     { name: "Frontend Development", level: 90, category: "Technical" },
//     { name: "React/TailwindCSS", level: 85, category: "Technical" },
//     { name: "JavaScript", level: 88, category: "Technical" },
//     { name: "UI/UX Design", level: 75, category: "Design" },
//     { name: "Node.js", level: 80, category: "Technical" },
//     { name: "Git & Version Control", level: 85, category: "Technical" }
//   ];
  
//   return (
//     <div className="grid md:grid-cols-2 gap-6">
//       {skills.map((skill, index) => (
//         <div key={skill.name} className="group">
//           <div className="flex justify-between items-center mb-2">
//             <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
//             <span className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</span>
//           </div>
//           <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
//             <div
//               className="h-full bg-black dark:bg-white transition-all duration-1000 delay-200"
//               style={{ width: `${skill.level}%` }}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const AboutSection = () => {
//   return (
//     <section id="about" className="py-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div>
//             <TextReveal>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
//                 About Me
//               </h2>
//             </TextReveal>
            
//             <TextReveal delay={100}>
//               <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
//                 Currently studying in Japan, I've immersed myself in a culture that values 
//                 precision, craftsmanship, and continuous improvement. This experience has 
//                 profoundly shaped my approach to development.
//               </p>
//             </TextReveal>
            
//             <TextReveal delay={200}>
//               <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
//                 I believe in creating technology that doesn't just function, but inspires. 
//                 Every project is an opportunity to blend technical excellence with 
//                 thoughtful design.
//               </p>
//             </TextReveal>
            
//             <TextReveal delay={300}>
//               <div className="flex items-center gap-6">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-black dark:text-white">2+</div>
//                   <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-black dark:text-white">Exp.</div>
//                   <div className="text-sm text-gray-500 dark:text-gray-400">Developing</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-black dark:text-white">🇳🇵</div>
//                   <div className="text-sm text-gray-500 dark:text-gray-400">Based in Nepal</div>
//                 </div>
//               </div>
//             </TextReveal>
//           </div>
          
//           <div className="space-y-8">
//             <TextReveal delay={400}>
//               <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Skills & Expertise</h3>
//             </TextReveal>
            
//             <TextReveal delay={500}>
//               <SkillsGrid />
//             </TextReveal>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ===============================
// // WORK SECTION
// // ===============================
// const ProjectCard = ({ project, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div
//       className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     > 
//       <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-6xl opacity-50 group-hover:opacity-100 transition-opacity">
//             {project.icon}
//           </div>
//         </div>
//       </div>
      
//       <div className="p-8 flex flex-col h-full justify-between">
//         <div className="flex items-center gap-3 mb-3">
//           <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
//           <div className="text-sm text-gray-500 dark:text-gray-400">2024</div>
//         </div>
        
//         <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
        
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.tags.map((tag, i) => (
//             <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
//               {tag}
//             </span>
//           ))}
//         </div>
        
//         <div className="flex gap-4">
//           <a 
//             href={project.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="interactive flex items-center gap-2 text-black dark:text-white font-medium hover:gap-3 transition-all"
//           >
//             View Project
//             <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M7 17L17 7M17 7H7M17 7V17"/>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// const WorkSection = () => {
//   const projects = [
//     {
//       title: "Random Dog Generator",
//       description: "A delightful web application that brings joy through random dog images. Built with modern JavaScript and integrated with the Dog CEO API for seamless data fetching.",
//       tags: ["JavaScript", "API", "CSS", "HTML"],
//       icon: "🐕",
//       url: `${import.meta.env.BASE_URL}dog-demo.html`
//     },
//     {
//       title: "Interactive Portfolio",
//       description: "A sophisticated personal portfolio showcasing modern web development techniques. Features smooth animations, responsive design, and interactive elements.",
//       tags: ["React", "Tailwind", "JavaScript"],
//       icon: "💼",
//       url: "https://github.com/g0GobliN/g0"
//     }
//   ];

//   return (
//     <section id="work" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <TextReveal>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
//               Selected Work
//             </h2>
//           </TextReveal>
          
//           <TextReveal delay={100}>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//               A curated collection of projects that showcase my journey 
//               as a developer and designer.
//             </p>
//           </TextReveal>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {projects.map((project, index) => (
//             <TextReveal key={project.title} delay={index * 100}>
//               <ProjectCard project={project} index={index} />
//             </TextReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ===============================
// // CONTACT SECTION
// // ===============================

// // Add this ContactForm component RIGHT BEFORE your ContactSection component
// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitStatus('Thank you for your message! I\'ll get back to you soon.');
//       setFormData({ name: '', email: '', message: '' });
      
//       // Clear success message after 5 seconds
//       setTimeout(() => setSubmitStatus(''), 5000);
//     }, 1000);
//   };

//   return (
//     <div className="max-w-2xl mx-auto mt-16">
//       <TextReveal delay={300}>
//         <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
//           <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
//             Send me a message
//           </h3>
          
//           {submitStatus && (
//             <div className="mb-6 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg text-green-800 dark:text-green-200 text-center">
//               {submitStatus}
//             </div>
//           )}
          
//           <form 
//           action="https://formsubmit.co/grgvishal.gurung17@gmail.com"
//           method="POST"
//           className="space-y-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-colors"
//                 placeholder="Your name"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-colors"
//                 placeholder="your.email@example.com"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={5}
//                 className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent transition-colors resize-none"
//                 placeholder="Tell me about your project or just say hello..."
//               />
//             </div>
            
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full interactive px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? 'Sending...' : 'Send Message'}
//             </button>
//           </form>
//         </div>
//       </TextReveal>
//     </div>
//   );
// };

// const ContactSection = () => {
//   return (
//     <section id="contact" className="py-20 px-6">
//       <div className="max-w-4xl mx-auto text-center">
//         <TextReveal>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
//             Let's Work Together
//           </h2>
//         </TextReveal>
        
//         <TextReveal delay={100}>
//           <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
//             I'm always excited to collaborate on innovative projects and 
//             explore new opportunities. Let's create something amazing together.
//           </p>
//         </TextReveal>

//         <ContactForm />
        
//         <TextReveal delay={200}>
//           <div className="flex flex-wrap gap-4 justify-center items-center">
//             {/* <a
//               href="mailto:grgvishal.gurung17@gmail.com"
//               className="interactive flex items-center gap-3 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586l-8 4.5-8-4.5V4zm0 4.414V19a1 1 0 001 1h16a1 1 0 001-1V8.414l-8 4.5-8-4.5z"/>
//               </svg>
//               Email Me
//             </a>
//              */}
//             <a
//               href="https://github.com/g0GobliN"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="interactive flex items-center gap-3 px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//               </svg>
//               GitHub
//             </a>
            
//             <a
//               href="https://instagram.com/goblin01_"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="interactive flex items-center gap-3 px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//               </svg>
//               Instagram
//             </a>
            
//             <a
//               href={`${import.meta.env.BASE_URL}/assets/Vishal_Gurung_Portfolio_Resume.pdf`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="interactive flex items-center gap-3 px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
//             >
//               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
//                 <polyline points="14,2 14,8 20,8"/>
//                 <line x1="16" y1="13" x2="8" y2="13"/>
//                 <line x1="16" y1="17" x2="8" y2="17"/>
//                 <polyline points="10,9 9,9 8,9"/>
//               </svg>
//               Resume
//             </a>
//           </div>
//         </TextReveal>
//       </div>
//     </section>
//   );
// };

// // ===============================
// // FOOTER COMPONENT
// // ===============================
// const Footer = () => {
//   return (
//     <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-700">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
//             © 2025 Vishal Gurung - Goblin
//           </div>
          
//           <div className="flex items-center gap-6">
//             <a href="#" className="interactive text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
//               Privacy
//             </a>
//             <a href="#" className="interactive text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
//               Terms
//             </a>
//             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//             <span className="text-sm text-gray-500 dark:text-gray-400">Available for work</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// // ===============================
// // MAIN APP COMPONENT
// // ===============================
// export default function ModernPortfolio() {
//   const [scrollY, setScrollY] = useState(0);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isDarkMode, setIsDarkMode] = useState(false);
  
//   useEffect(() => {
//     // Check for saved theme preference or default to light mode
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setIsDarkMode(savedTheme === 'dark');
//     } else {
//       // Check system preference
//       const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//       setIsDarkMode(prefersDark);
//     }
//   }, []);
  
//   useEffect(() => {
//     // Update HTML class and localStorage when theme changes
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//       localStorage.setItem('theme', 'light');
//     }
//   }, [isDarkMode]);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
      
//       // Update active section based on scroll position
//       const sections = ['home', 'about', 'work', 'contact'];
//       const currentSection = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
      
//       if (currentSection) {
//         setActiveSection(currentSection);
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   const handleSectionChange = (sectionId) => {
//     setActiveSection(sectionId);
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
  
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };
  
//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${
//       isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
//     }`}>
//       <CursorFollower />
//       <Navigation 
//         activeSection={activeSection} 
//         onSectionChange={handleSectionChange}
//         isDark={isDarkMode}
//         onThemeToggle={toggleTheme}
//       />
      
//       <HomeSection scrollY={scrollY} onSectionChange={handleSectionChange} />
//       <AboutSection/>
//       <WorkSection/>
//       <ContactSection/>
//       <Footer />
//     </div>
//   );
// }
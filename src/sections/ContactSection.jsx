import React, { useState, useEffect } from "react";
import TextReveal from "../components/TextReveal";
import ContactForm from "../components/ContactForm";
import BackgroundGrid from "../components/BackgroundGrid";  // <-- import added

const ContactSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const loopHeight = 600;
  const scrollYLooped = scrollY % loopHeight;

  const getParticleColors = (index) => {
    const colorSets = [
      "from-green-400 to-blue-400",
      "from-purple-400 to-pink-400",
      "from-yellow-400 to-red-400",
      "from-blue-400 to-purple-400",
    ];
    return colorSets[index % colorSets.length];
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background grid as a background */}
      <BackgroundGrid
        scrollY={scrollYLooped}
        mousePos={mousePos}
        getParticleColors={getParticleColors}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <TextReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Let's Work Together
          </h2>
        </TextReveal>

        <TextReveal delay={100}>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative projects and
            explore new opportunities. Let's create something amazing together.
          </p>
        </TextReveal>

        <ContactForm />

        <TextReveal delay={200}>
          <div className="flex flex-wrap gap-4 justify-center items-center mt-5">
            <a
              href="https://github.com/g0GobliN"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive flex items-center gap-3 px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
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
              className="interactive flex items-center gap-3 px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            
            <a
              href={`${import.meta.env.BASE_URL}/assets/Vishal_Gurung_Portfolio_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive flex items-center gap-3 px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
              Resume
            </a>
          </div>
        </TextReveal>
      </div>
    </section>
  );
};

export default ContactSection;
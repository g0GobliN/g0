import React, { useState, useEffect } from "react";

import IntroScreen from "./components/IntroScreen.jsx";
import ParticlesBackground from "./components/ParticlesBackground.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Background from "./components/Background.jsx";


export default function App() {
  const [fadeOut, setFadeOut] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1500);
    const removeTimer = setTimeout(() => setShowIntro(false), 1500); // 1.5s after fade

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen px-4 overflow-x-hidden text-white font-sans">
      <ParticlesBackground />

      <Background visible={!showIntro} />

      {showIntro && <IntroScreen fadeOut={fadeOut} />}

      {!showIntro && (
        <div className="animate-fade-in">
          <Header />
          <main className="max-w-4xl mx-auto flex flex-col gap-12 mb-12">
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <footer className="text-center text-gray-400 mb-8 select-none">
            © 2025 Vishal Gurung
          </footer>
        </div>
      )}
    </div>
  );
}

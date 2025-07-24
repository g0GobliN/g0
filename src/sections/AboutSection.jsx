import React, { useState, useEffect } from "react";
import TextReveal from "../components/TextReveal";
import BackgroundGrid from "../components/BackgroundGrid";
import SkillsGrid from "../components/SkillsGrid";

const AboutSection = () => {
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
    <section id="about" className="relative py-20 px-6 overflow-hidden min-h-screen">
      <BackgroundGrid
        scrollY={scrollYLooped}
        mousePos={mousePos}
        getParticleColors={getParticleColors}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <TextReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                About Me
              </h2>
            </TextReveal>

            <TextReveal delay={100}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Hi, I'm Vishal Gurung. Currently studying in Japan, I've immersed myself in a culture that values precision, craftsmanship, and continuous improvement. This experience has profoundly shaped my approach to development.
              </p>
            </TextReveal>

            <TextReveal delay={200}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I believe in creating technology that doesn't just function, but inspires. Every project is an opportunity to blend technical excellence with thoughtful design.
              </p>
            </TextReveal>

            <TextReveal delay={300}>
              <div className="flex items-center gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black dark:text-white">2+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black dark:text-white">Exp.</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Developing</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black dark:text-white">🇳🇵</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Based in Nepal</div>
                </div>
              </div>
            </TextReveal>
          </div>

{/* Right Column - Photo */}
<div className="relative overflow-visible">
  <TextReveal delay={400}>
    <div className="relative">
  
      {/* Photo Container with vertical text overlay */}
      <div className="relative rounded-2xl  aspect-[4/5] max-w-sm">
        <img
          src="/assets/images/IMG_4027.jpg"
          alt="Vishal Gurung"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          style={{ transform: 'translateY(12px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

        {/* Vertical Text attached to right edge */}
        <div 
          className="absolute inset-y-0 right-0 "
          style={{ transform: 'translate(40%, 38%) scale(1.28)' }}
        >
          <div
            className="text-5xl md:text-5xl lg:text-6xl font-bold text-[#f1f1b9]"
            style={{
              rotate: '270deg',
            }}
          >
            プロフィール
          </div>
        </div>
      </div>
    </div>
  </TextReveal>
  
</div>

        </div>

        {/* Skills Section - Moved below for better layout */}
        <div className="mt-20">
          <TextReveal delay={500}>
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white text-center">
              Skills & Expertise
            </h3>
          </TextReveal>

          <TextReveal delay={600}>
            <SkillsGrid />
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import React, { useState, useEffect } from "react";
import TextReveal from "../components/TextReveal";
import BackgroundGrid from "../components/BackgroundGrid"

const SkillsGrid = () => {
  const skills = [
    { name: "Frontend Development", level: 90, category: "Technical" },
    { name: "React/TailwindCSS", level: 85, category: "Technical" },
    { name: "JavaScript", level: 88, category: "Technical" },
    { name: "UI/UX Design", level: 75, category: "Design" },
    { name: "Node.js", level: 80, category: "Technical" },
    { name: "Git & Version Control", level: 85, category: "Technical" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((skill) => (
        <div key={skill.name} className="group">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-900 dark:text-white">
              {skill.name}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {skill.category}
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-black dark:bg-white transition-all duration-1000 delay-200"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

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
  const scrollYLooped = scrollY % loopHeight; // <-- loop scrollY here

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
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <TextReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                About Me
              </h2>
            </TextReveal>

            <TextReveal delay={100}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Currently studying in Japan, I've immersed myself in a culture that values precision, craftsmanship, and continuous improvement. This experience has profoundly shaped my approach to development.
              </p>
            </TextReveal>

            <TextReveal delay={200}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I believe in creating technology that doesn't just function, but inspires. Every project is an opportunity to blend technical excellence with thoughtful design.
              </p>
            </TextReveal>

            <TextReveal delay={300}>
              <div className="flex items-center gap-6">
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

          <div className="space-y-8">
            <TextReveal delay={400}>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Skills & Expertise
              </h3>
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

export default AboutSection;

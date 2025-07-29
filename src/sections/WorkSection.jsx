import React, { useState, useEffect } from "react";
import TextReveal from "../components/TextReveal";
import ProjectCard from "../components/ProjectCard";
import BackgroundGrid from "../components/BackgroundGrid";  // <-- import added

const WorkSection = () => {
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

  const projects = [
    {
      title: "Random Dog Generator",
      description:
        "A delightful web application that brings joy through random dog images. Built with modern JavaScript and integrated with the Dog CEO API for seamless data fetching.",
      tags: ["JavaScript", "API", "CSS", "HTML"],
      icon: "🐕",
      url: `${import.meta.env.BASE_URL}dog-demo.html`,
    },
    {
      title: "Interactive Portfolio",
      description:
        "A sophisticated personal portfolio showcasing modern web development techniques. Features smooth animations, responsive design, and interactive elements.",
      tags: ["React", "Tailwind", "JavaScript"],
      icon: "💼",
      url: "https://github.com/g0GobliN/g0",
    },
  ];

  return (
    <section
      id="work"
      className="py-20 px-6 bg-white-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background grid */}
      <BackgroundGrid
        scrollY={scrollYLooped}
        mousePos={mousePos}
        getParticleColors={getParticleColors}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Selected Work
            </h2>
          </TextReveal>

          <TextReveal delay={100}>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A curated collection of projects that showcase my journey as a
              developer and designer.
            </p>
          </TextReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

export default WorkSection;

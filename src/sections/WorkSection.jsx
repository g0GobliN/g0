import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import BackgroundGrid from "../components/BackgroundGrid";

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
      description: "A delightful web application that brings joy through random dog images.",
      longDescription: "Built with modern JavaScript and integrated with the Dog CEO API...",
      tags: ["JavaScript", "API", "CSS", "HTML"],
      year: "2024",
      role: "Frontend Development",
      url: `${import.meta.env.BASE_URL}dog-demo.html`,
      modelUrl: "/model/dog.glb",
    },
    {
      title: "Interactive Portfolio",
      description: "A sophisticated personal portfolio showcasing modern web development techniques.",
      longDescription: "Features smooth animations, responsive design, and interactive elements...",
      tags: ["React", "Tailwind", "JavaScript", "CSS"],
      year: "2025",
      role: "Full Stack Development",
      url: "https://github.com/g0GobliN/g0",
      modelUrl: "/model/treasure.glb",
    },
  ];

  return (
    <section id="work" className="relative min-h-screen">
      <BackgroundGrid
        scrollY={scrollYLooped}
        mousePos={mousePos}
        getParticleColors={getParticleColors}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl mb-24 mx">
          <h1 className="text-5xl md:text-6xl font-medium text-zinc-900 dark:text-zinc-100 mb-6 leading-tight">
            Selected Work
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A collection of projects that showcase my approach to solving problems 
            through thoughtful design and clean code.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

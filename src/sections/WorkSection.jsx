import React from "react";
import TextReveal from "../components/TextReveal";
import ProjectCard from "../components/ProjectCard";

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
  ];

  return (
    <section id="work" className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Selected Work
            </h2>
          </TextReveal>
          
          <TextReveal delay={100}>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A curated collection of projects that showcase my journey 
              as a developer and designer.
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

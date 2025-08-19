import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import TextReveal from "../components/TextReveal"; // ✅ Import TextReveal

const AnimatedProjectVisual = ({ type, gifUrl, onClick }) => {
  if (gifUrl) {
    return (
      <div
        className="w-full max-w-sm mx-auto h-48 bg-gradient-to-br from-gray-800 to-gray-900 
                   rounded-xl overflow-hidden border border-gray-700/50 cursor-pointer hover:scale-105 
                   transform transition-transform duration-300"
        onClick={onClick}
      >
        <img
          src={gifUrl}
          alt="Project demo"
          className={`w-full h-full object-cover rounded-xl scale-150 ${
            type === "dog-api" ? "translate-x-4" : ""
          }`}
        />
      </div>
    );
  }

  // Example fallback visuals
  if (type === "dog-api") {
    return (
      <div
        onClick={onClick}
        className="w-full max-w-sm mx-auto h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl 
                   flex items-center justify-center border border-gray-700/50 overflow-hidden relative 
                   cursor-pointer hover:scale-105 transform transition-transform duration-300"
      >
        <div className="absolute inset-0">
          <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div
            className="absolute top-6 right-6 w-2 h-2 bg-cyan-400 rounded-full animate-ping"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-4 left-6 w-2 h-2 bg-cyan-400 rounded-full animate-ping"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-3 border border-cyan-400/30 rounded flex items-center justify-center">
            <div className="text-cyan-400 font-mono text-xs font-medium">
              API
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const ProjectsSection = () => {
  const [fullscreenProject, setFullscreenProject] = useState(null);

  const projects = [
    {
      title: "Dog API",
      description:
        "Interactive web application that fetches and displays random dog images using REST API integration",
      type: "dog-api",
      gifUrl: "./assets/gif/dog.gif",
      url: "/dog-demo.html",
    },
    {
      title: "Responsive Portfolio",
      description:
        "Modern and fully responsive portfolio website showcasing projects with clean design and smooth animations",
      type: "portfolio",
      gifUrl: "./assets/gif/portfolio.gif",
      url: "https://github.com/g0GobliN/g0",
    },
  ];

  return (
    <section
      id="project"
      className="min-h-screen py-20 px-6 bg-gray-50 text-gray-900 dark:bg-black dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`mb-20 ${
              index % 2 === 0
                ? "lg:flex lg:items-center lg:space-x-12"
                : "lg:flex lg:flex-row-reverse lg:items-center lg:space-x-reverse lg:space-x-12"
            }`}
          >
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <TextReveal delay={index * 100}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-px bg-gray-800 dark:bg-cyan-400"></div>
                  <span className="ml-3 text-gray-800 dark:text-cyan-400 font-gotham-book-italic text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </TextReveal>

              <AnimatedProjectVisual
                type={project.type}
                gifUrl={project.gifUrl}
                onClick={() => setFullscreenProject(project)}
              />
            </div>

            <div className="lg:w-1/3">
              <TextReveal delay={index * 100 + 200}>
                <h3 className="text-lg md:text-xl font-gotham-book text-black dark:text-white mb-5 leading-snug">
                  {project.title}
                </h3>
              </TextReveal>

              <TextReveal delay={index * 100 + 300}>
                <p className="text-[13px] md:text-[14px] text-gray-700 dark:text-gray-400 font-gotham-book mb-5 leading-relaxed max-w-md">
                  {project.description}
                </p>
              </TextReveal>

              <TextReveal delay={index * 100 + 400}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gray-800 dark:bg-cyan-400 
               text-white dark:text-black px-4 py-2.5 rounded-lg 
               text-xs font-gotham hover:bg-gray-600 
               dark:hover:bg-cyan-300 transition-colors duration-300"
                >
                  <span>View website</span>
                  <ArrowRight size={14} />
                </a>
              </TextReveal>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenProject && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <button
            className="absolute top-6 right-6 text-white hover:text-cyan-400 transition"
            onClick={() => setFullscreenProject(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full">
            <img
              src={fullscreenProject.gifUrl}
              alt={fullscreenProject.title}
              className="w-full h-auto rounded-lg shadow-2xl transform scale-105 transition-transform duration-500"
            />
            <h2 className="text-white text-xl mt-6">
              {fullscreenProject.title}
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              {fullscreenProject.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;

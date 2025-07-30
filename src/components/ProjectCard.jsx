import React, { useState } from "react";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} space-y-8`}>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.role}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-medium text-zinc-900 dark:text-zinc-100 leading-tight">
              {project.title}
            </h2>
            
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.description}
            </p>
            
            <p className="text-zinc-500 dark:text-zinc-500 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, i) => (
              <span 
                key={i}
                className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-medium hover:gap-4 transition-all duration-300"
            >
              <span>View Project</span>
              <svg 
                className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
            
            <button className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Visual */}
        <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} relative`}>
          <div className="aspect-[4/3] bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 rounded-2xl overflow-hidden relative group-hover:shadow-2xl transition-all duration-700">
            {/* Overlay */}
            <div className={`absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-all duration-500`} />
            
            {/* Icon/Image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`text-8xl opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500`}>
                {project.image}
              </div>
            </div>

            {/* Floating details */}
            <div className={`absolute bottom-6 left-6 right-6 transform ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            } transition-all duration-500`}>
              <div className="bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>

            {/* Corner accent */}
            <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-emerald-400 transform ${
              isHovered ? 'scale-150' : 'scale-100'
            } transition-transform duration-300`} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
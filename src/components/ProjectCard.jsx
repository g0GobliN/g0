import React, { useState } from "react";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    > 
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-50 group-hover:opacity-100 transition-opacity">
            {project.icon}
          </div>
        </div>
      </div>
      
      <div className="p-8 flex flex-col h-full justify-between">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
          <div className="text-sm text-gray-500 dark:text-gray-400">2024</div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive flex items-center gap-2 text-black dark:text-white font-medium hover:gap-3 transition-all"
          >
            View Project
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

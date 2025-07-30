import React from "react";

const SkillsGrid = () => {
  const skills = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden py-8">
      <div
        className="flex animate-scroll space-x-6 sm:space-x-8 md:space-x-12"
        style={{ width: `${duplicatedSkills.length * 160}px` }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-20 sm:w-24 md:w-28 lg:w-32"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain mb-2"
            />
            <p className="text-xs sm:text-sm md:text-base font-gotham-book text-gray-700 dark:text-gray-300 text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      <style jsx ={true}>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SkillsGrid;

import React from "react";

const SkillsGrid = () => {
  const skills = [
    { name: "Frontend Development", level: 90, category: "Technical" },
    { name: "React/TailwindCSS", level: 85, category: "Technical" },
    { name: "JavaScript", level: 88, category: "Technical" },
    { name: "UI/UX Design", level: 75, category: "Design" },
    { name: "Java", level: 80, category: "Technical" },
    { name: "Git & Version Control", level: 85, category: "Technical" }
  ];
  
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((skill) => (
        <div key={skill.name} className="group">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</span>
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

export default SkillsGrid;

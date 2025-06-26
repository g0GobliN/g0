import React from "react";

export default function Skills() {
  return (
    <section className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg backdrop-blur-sm max-w-4xl md:ml-32 ml-0 flex flex-col md:flex-row gap-16 text-left">
      <div className="flex-1 bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
        <h2 className="font-serif font-bold text-3xl mb-4 text-yellow-400 border-b-2 border-yellow-400 w-fit pb-1">
          Skills
        </h2>
        <ul className="list-disc list-inside text-gray-200 text-base max-w-prose space-y-1">
          <li>Java</li>
          <li>HTML / CSS</li>
          <li>JavaScript / React</li>
          <li>ES Modules (ESM)</li>
        </ul>
      </div>
      <div className="flex-1 bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
        <h2 className="font-serif font-bold text-3xl mb-4 text-yellow-400 border-b-2 border-yellow-400 w-fit pb-1">
          Technologies
        </h2>
        <ul className="list-disc list-inside text-gray-200 text-base max-w-prose space-y-1">
          <li>Tailwind CSS</li>
          <li>Vite</li>
          <li>React</li>
          <li>Node.js / npm</li>
          <li>Git / GitHub</li>
        </ul>
      </div>
    </section>
  );
}

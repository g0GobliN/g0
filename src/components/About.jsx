import React from "react";

export default function About() {
  return (
    <section className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg backdrop-blur-sm max-w-3xl mx-auto">
      <h2 className="font-serif font-bold text-3xl mb-4 text-yellow-400 border-b-2 border-yellow-400 w-fit pb-1">
        About Me
      </h2>
      <p className="text-gray-200 text-base leading-relaxed whitespace-pre-line">
        {`I’m a student developer passionate about crafting clean, creative projects with a nostalgic touch.
          I focus on making software that’s simple, enjoyable, and easy to use.

          When I’m not coding, I explore open-source projects to sharpen my skills and fuel my creativity.
          I’m fascinated by how simplicity and clever design can make technology accessible and enjoyable.
          Currently studying in Japan, I’m embracing the culture and work ethic here, which inspires me to approache challenges 
          with discipline and creativity.Living abroad has broadened my perspective, fueling my passion to build software that 
          bridges cultural gaps and connects people globally.

          I believe in lifelong learning and enjoy solving problems with others to build elegant, useful apps.
          My goal? To make tech that’s both functional and memorable.`}
      </p>
    </section>
  );
}

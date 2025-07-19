import React from "react";
import TextReveal from "../components/TextReveal";

const HomeSection = ({ scrollY, onSectionChange }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />

      <div className="relative z-10 text-center max-w-4xl px-6">
        <TextReveal className="mb-6">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
            Creative Developer
            <br />
            <span className="text-gray-500 dark:text-gray-400">
              & Tech Enthusiast
            </span>
          </h1>
        </TextReveal>

        <TextReveal delay={200} className="mb-8">
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I'm Vishal Gurung, a passionate developer crafting digital
            experiences that bridge technology and human connection.
          </p>
        </TextReveal>

        <TextReveal delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="interactive px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              onClick={() => onSectionChange("work")}
            >
              View My Work
            </button>
            <button
              className="interactive px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-full font-medium hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
              onClick={() => onSectionChange("contact")}
            >
              Get In Touch
            </button>
          </div>
        </TextReveal>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 opacity-60 animate-pulse delay-1000"></div>
    </section>
  );
};

export default HomeSection;

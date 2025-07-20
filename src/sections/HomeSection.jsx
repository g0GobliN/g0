import React, { useState, useEffect } from "react";
import TextReveal from "../components/TextReveal";
import { Typewriter } from "react-simple-typewriter";
// import * as Tone from "tone";

const HomeSection = ({ scrollY, onSectionChange }) => {
  scrollY = scrollY || 0;
  onSectionChange = onSectionChange || (() => {});
  const [currentScene, setCurrentScene] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const scenes = [
    { title: "Once upon a time...", subtitle: "there was a developer", visual: "terminal" },
    { title: "Who loved to create", subtitle: "digital experiences", visual: "code" },
    { title: "Bridging worlds", subtitle: "of technology & humanity", visual: "bridge" },
    { title: "Meet Vishal", subtitle: "Your creative developer", visual: "profile" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

//   useEffect(() => {
//     const synth = new Tone.Synth().toDestination();
//     Tone.start().then(() => {
//       synth.volume.value = -27; // Set volume 
//       synth.triggerAttackRelease("C5", "8n");
//     });
//   }, [currentScene]);

  const TerminalVisual = () => (
    <div className="w-80 h-48 bg-gray-900 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm shadow-2xl">
      <div className="flex gap-2 mb-3">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="text-green-400">
        <div className="animate-pulse">┌──(goblin01@g0)-[~/]</div>
        <div className="animate-pulse delay-500">└─$ whoami</div>
        <div className="animate-pulse delay-1000 text-white">creative_developer</div>
        <div className="animate-pulse delay-1500">└─$ ls dreams/</div>
        <div className="animate-pulse delay-2000 text-blue-400">
          innovation.js creativity.css passion.html
        </div>
      </div>
    </div>
  );

  const CodeVisual = () => (
    <div className="w-80 h-48 bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg p-4 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-xs animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {["<div>", "function()", "{ }", "const", "return", "&&", "||"][
              Math.floor(Math.random() * 7)
            ]}
          </div>
        ))}
      </div>
      <div className="relative z-10">
        <div className="text-pink-400 animate-pulse">const magic = () =&gt; &#123;</div>
        <div className="text-blue-400 animate-pulse delay-300 ml-4">
          return dreams + code;
        </div>
        <div className="text-pink-400 animate-pulse delay-600">&#125;</div>
      </div>
    </div>
  );

  const BridgeVisual = () => (
    <div className="relative w-80 h-48">
      <svg viewBox="0 0 300 180" className="w-full h-full">
        <defs>
          <linearGradient id="bridgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100scene%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path
          d="M20 140 Q150 60 280 140"
          stroke="url(#bridgeGradient)"
          strokeWidth="4"
          fill="none"
          className="animate-pulse"
        />
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1={40 + i * 30}
            y1={140 - Math.sin((i * 30) / 240 * Math.PI) * 80}
            x2={40 + i * 30}
            y2={140}
            stroke="url(#bridgeGradient)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <circle
            key={i}
            cx={30 + i * 20}
            cy={120 + Math.sin(i) * 20}
            r="2"
            fill="#60a5fa"
            className="animate-bounce"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>
    </div>
  );

  const ProfileVisual = () => (
    <div className="relative w-80 h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10 animate-ping"
          style={{
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: "3s",
          }}
        />
      ))}
      <div className="relative z-10 text-center text-white">
        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 animate-pulse backdrop-blur-sm flex items-center justify-center text-2xl font-bold">
          VG
        </div>
        <div className="text-sm font-medium animate-pulse">Ready to create magic</div>
      </div>
    </div>
  );

  const renderVisual = () => {
    switch (scenes[currentScene]?.visual) {
      case "terminal":
        return <TerminalVisual />;
      case "code":
        return <CodeVisual />;
      case "bridge":
        return <BridgeVisual />;
      case "profile":
        return <ProfileVisual />;
      default:
        return <TerminalVisual />;
    }
  };

  const getParticleColors = (index) => {
    const colorSets = [
      "from-green-400 to-blue-400",
      "from-purple-400 to-pink-400",
      "from-yellow-400 to-red-400",
      "from-blue-400 to-purple-400",
    ];
    return colorSets[currentScene % colorSets.length];
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-1000"
        style={{
          transform: `translateY(${scrollY * 0.3}px) translateX(${mousePos.x * 10}px)`,
        }}
      >
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relativescene z-10 w-full max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="mb-6">
            <TextReveal key={currentScene} className="mb-2">
              <h1 className="text-3xl md:text-5xl font-light text-gray-800 dark:text-gray-200 leading-tight">
                {currentScene === 0 ? (
                  <Typewriter words={[scenes[0].title]} typeSpeed={50} />
                ) : (
                  scenes[currentScene]?.title
                )}
              </h1>
            </TextReveal>

            <TextReveal key={`${currentScene}-sub`} delay={200} className="mb-8">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
                {scenes[currentScene]?.subtitle}
              </p>
            </TextReveal>
          </div>

          <div className="flex justify-center lg:justify-start gap-2 mb-8">
            {scenes.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentScene(i)}
                className={`cursor-pointer h-1 rounded-full transition-all duration-500 ${
                  i === currentScene ? "w-8 bg-blue-500" : "w-2 bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>

          <TextReveal
            delay={400}
            className={`transition-opacity duration-500 ${currentScene === 3 ? "opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="interactive px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={() => onSectionChange("work")}
              >
                Explore My Work
              </button>
              <button
                className="interactive px-8 py-3 border-2 border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300"
                onClick={() => onSectionChange("contact")}
              >
                Start a Conversation
              </button>
            </div>
          </TextReveal>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div
            className="transform transition-all duration-1000 hover:scale-105"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${mousePos.y * -5}deg)`,
            }}
          >
            {renderVisual()}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          >
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getParticleColors(i % 3)}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;

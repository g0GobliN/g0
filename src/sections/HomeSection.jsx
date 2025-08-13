import React, { useState, useEffect } from "react";
import { ArrowRight, Play, Pause } from "lucide-react";
import TextReveal from "../components/TextReveal";
import { Typewriter } from "react-simple-typewriter";

const HomeSection = ({ scrollY, onSectionChange }) => {
  scrollY = scrollY || 0;
  onSectionChange = onSectionChange || (() => {});
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const scenes = [
    {
      title: "Digital Craftsman",
      subtitle: "Building with purpose",
      description:
        "I create clean, functional experiences that solve real problems.",
      visual: "terminal",
    },
    {
      title: "Code Artist",
      subtitle: "Where logic meets creativity",
      description: "Turning complex ideas into simple, elegant solutions.",
      visual: "code",
    },
    {
      title: "Problem Solver",
      subtitle: "Connecting dots, building bridges",
      description:
        "Every challenge is an opportunity to create something meaningful.",
      visual: "bridge",
    },
    {
      title: "Vishal Gurung",
      subtitle: "Ready to build together",
      description: "Let's create something that makes a difference.",
      visual: "profile",
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const TerminalVisual = () => (
    <div className="w-full h-40 sm:h-48 md:h-64 bg-gray-900 dark:bg-gray-800 rounded-xl p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm shadow-xl">
      <div className="flex gap-1 sm:gap-2 mb-2 sm:mb-4">
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="space-y-1 sm:space-y-2">
        <div className="text-green-400 animate-pulse">$ whoami</div>
        <div className="text-cyan-400 animate-pulse delay-500">
          vishal_gurung
        </div>
        <div className="text-green-400 animate-pulse delay-1000">
          $ cat mission.txt
        </div>
        <div className="text-white animate-pulse delay-1500">
          Building digital experiences
        </div>
        <div className="text-green-400 animate-pulse delay-2000">$ status</div>
        <div className="text-yellow-400 animate-pulse delay-2500">
          Ready to create_
        </div>
      </div>
    </div>
  );

  const CodeVisual = () => (
    <div className="w-full h-40 sm:h-48 md:h-64 bg-gray-900 dark:bg-gray-800 rounded-xl p-3 sm:p-4 md:p-6 overflow-hidden">
      <div className="space-y-1 sm:space-y-2 md:space-y-3 font-mono text-xs sm:text-sm">
        <div className="text-purple-400 animate-pulse">
          <span className="text-pink-400">const</span> developer = &#123;
        </div>
        <div className="text-blue-400 animate-pulse delay-300 ml-2 sm:ml-4">
          name: <span className="text-green-400">'Vishal'</span>,
        </div>
        <div className="text-blue-400 animate-pulse delay-600 ml-2 sm:ml-4">
          craft: <span className="text-green-400">'Digital experiences'</span>,
        </div>
        <div className="text-blue-400 animate-pulse delay-900 ml-2 sm:ml-4">
          approach: <span className="text-green-400">'Clean & purposeful'</span>
        </div>
        <div className="text-purple-400 animate-pulse delay-1200">&#125;</div>
        <div className="text-gray-500 animate-pulse delay-1500 text-xs">
          // Always learning, always building
        </div>
      </div>
    </div>
  );

  const BridgeVisual = () => (
    <div className="w-full h-40 sm:h-48 md:h-64 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-3 sm:p-4 md:p-6 flex items-center justify-center">
      <svg viewBox="0 0 300 150" className="w-full h-full opacity-90">
        <defs>
          <linearGradient id="bridgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>

        <path
          d="M30 120 Q150 60 270 120"
          stroke="url(#bridgeGradient)"
          strokeWidth="3"
          fill="none"
          className="animate-pulse"
        />

        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={i}
            x1={60 + i * 35}
            y1={120 - Math.sin(((i * 35) / 240) * Math.PI) * 60}
            x2={60 + i * 35}
            y2={120}
            stroke="url(#bridgeGradient)"
            strokeWidth="1"
            className="animate-pulse opacity-60"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}

        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={i}
            cx={50 + i * 25}
            cy={90 + Math.sin(i * 0.7) * 20}
            r="2"
            fill="#06b6d4"
            className="animate-bounce opacity-40"
            style={{ animationDelay: `${i * 0.4}s`, animationDuration: "3s" }}
          />
        ))}
      </svg>
    </div>
  );

  const ProfileVisual = () => (
    <div className="w-full h-40 sm:h-48 md:h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center overflow-hidden relative">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-cyan-400/5 animate-ping"
          style={{
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
            animationDelay: `${i * 2}s`,
            animationDuration: "4s",
          }}
        />
      ))}

      <div className="relative z-10 text-center text-white">
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full mx-auto mb-2 sm:mb-4 flex items-center justify-center backdrop-blur-sm border border-cyan-400/20">
          <span className="text-lg sm:text-xl md:text-2xl font-bold font-gotham-medium text-cyan-400">
            VG
          </span>
        </div>
        <div className="text-xs sm:text-sm font-medium animate-pulse font-gotham-book opacity-80">
          Let's create something amazing
        </div>
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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-4 px-6 
                 bg-gray-50 text-gray-900 
                 dark:bg-black dark:text-white 
                 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-start lg:items-center md:space-x-36 justify-center">
          {/* Left Column - Visual */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start lg:justify-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              {/* Section Label */}
              <TextReveal>
                <div
                  className="
                  flex items-center mb-8 sm:mb-12 md:mb-16 transform
                  lg:-translate-x-2
                  xl:-translate-x-28"
                >
                   <div className="w-12 h-px bg-black dark:bg-cyan-400"></div>
                  <span className="ml-2 sm:ml-3 text-black dark:text-cyan-400 text-xs tracking-wider">
                    HOME
                  </span>
                </div>
              </TextReveal>

              {/* Visual Container */}
              <div className="relative md:mt-8 lg:mt-0">
                <div
                  className="transition-all duration-700 transform hover:scale-105"
                  style={{
                    transform: `perspective(1000px) rotateY(${
                      mousePos.x * 3
                    }deg) rotateX(${mousePos.y * -3}deg)`,
                  }}
                >
                  {renderVisual()}
                </div>

                {/* Play/Pause Control */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  ) : (
                    <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-0.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className="
              md:w-1/2 
              w-full
              max-w-xs 
              mx-auto 
              md:max-w-md 
              mt-12 
              md:mt-16 
              text-left 
              px-4 
              md:px-0 
              ml-25
              lg:ml-0
            "
          >
            <TextReveal delay={200}>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-4 sm:mb-6 leading-tight font-gotham-book">
                {currentScene === 0 ? (
                  <Typewriter
                    words={[scenes[0].title]}
                    typeSpeed={50}
                    cursor={false}
                  />
                ) : (
                  scenes[currentScene]?.title
                )}
              </h1>
            </TextReveal>

            <TextReveal delay={300}>
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <p className="text-base sm:text-lg md:text-xl text-black dark:text-cyan-400 font-gotham-book">
                  {scenes[currentScene]?.subtitle}
                </p>

                <p className="text-sm md:text-base text-black dark:text-gray-400 leading-relaxed font-gotham-book max-w-md mx-auto md:mx-0">
                  {scenes[currentScene]?.description}
                </p>
              </div>
            </TextReveal>

            <TextReveal delay={500}>
              <div className="flex flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <button
                  onClick={() => onSectionChange("project")}
                  className="
                    inline-flex items-center space-x-2
                    bg-gray-800 dark:bg-cyan-400
                    text-white dark:text-black
                    px-6 lg:px-8 py-2 lg:py-3
                    rounded-lg
                    text-sm
                    font-gotham
                    hover:bg-gray-600 dark:hover:bg-cyan-300
                    transition-all duration-300
                    transform hover:scale-105
                  "
                >
                  <span>View Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSectionChange("contact")}
                  className="
                    inline-flex items-center space-x-2
                    border-2 border-gray-400 dark:border-gray-600
                    text-gray-700 dark:text-gray-300
                    px-6 lg:px-14 py-2 lg:py-3
                    rounded-lg
                    text-sm
                    font-gotham
                    hover:border-black dark:hover:border-white 
                    hover:text-black dark:hover:text-white
                    transition-all duration-300
                    transform hover:scale-105
                  "
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </TextReveal>

            <TextReveal delay={600}>
              <div className="flex justify-center md:justify-start gap-2 sm:gap-3">
                {scenes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentScene(i)}
                    className={`h-1 rounded-full transition-all duration-500 hover:scale-y-150 ${
                      i === currentScene
                        ? "w-6 sm:w-8 bg-cyan-400"
                        : "w-2 bg-gray-400 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

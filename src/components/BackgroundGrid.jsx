import React from "react";

const BackgroundGrid = ({ scrollY = 0, mousePos = { x: 0, y: 0 }, getParticleColors }) => {
  // Grid tile size (match your SVG pattern size)
  const tileSize = 60;

  // Calculate vertical offset with modulo to loop grid infinitely
  const offsetY = scrollY % tileSize;

  return (
    <>
      {/* Background grid div */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-1000 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: `${tileSize}px ${tileSize}px`,
          // Move background-position to simulate scroll loop + mouse x offset
          backgroundPosition: `${mousePos.x * 10}px ${offsetY}px`,
          color: "rgba(156, 163, 175, 0.1)", // Tailwind gray-400 opacity low for subtle grid lines
        }}
      />

      {/* Floating particles */}
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
            <div
              className={`w-2 h-2 rounded-full bg-gradient-to-r ${getParticleColors(
                i % 3
              )}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BackgroundGrid;

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000",
        },
        particles: {
          number: {
            value: 80,
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#f1c40f" },
          shape: { type: "circle" },
          opacity: {
            value: 0.2,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            out_mode: "bounce",
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
          },
          modes: {
            repulse: { distance: 60, duration: 0.4 },
          },
        },
      }}
    />
  );
}

import React from "react";

export default function IntroScreen({ fadeOut }) {
  return (
    <div
      id="intro-screen"
      className={`fixed inset-0 flex justify-center items-center z-50 ${
        fadeOut ? "animate-fade-out" : ""
      }`}
      style={{ fontFamily: "'VT323', monospace" }}
    >
      <h1
        className="text-yellow-400 text-2xl md:text-4xl font-semibold tracking-wide text-center"
        style={{ textShadow: "0 0 4px #bfa94e88" }}
      >
        👾 Welcome to Goblin 👾
      </h1>
    </div>
  );
}

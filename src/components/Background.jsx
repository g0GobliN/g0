import React from "react";

export default function Background({ visible }) {
  return (
    <div
      className={`fixed inset-0 bg-center bg-no-repeat bg-fixed bg-[length:50%] pointer-events-none z-[-1] transition-opacity duration-[1500ms] ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: "url('/assets/images/background7.gif')" }}
    />
  );
}

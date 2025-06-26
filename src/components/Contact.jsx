import React from "react";

export default function Contact() {
  // Resume PDF open handler
  function openResume() {
    window.open("/assets/Vishal_Gurung_Portfolio_Resume.pdf", "_blank");
  }

  return (
    <section className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg backdrop-blur-sm max-w-4xl md:ml-32 ml-0">
      <h2 className="font-serif font-bold text-3xl mb-4 text-yellow-400 border-b-2 border-yellow-400 w-fit pb-1">
        Contact
      </h2>
      <p className="text-gray-200 mb-1">
        Email:{" "}
        <a
          href="mailto:grgvishal.gurung17@gmail.com"
          className="underline hover:text-yellow-400"
        >
          grgvishal.gurung17@gmail.com
        </a>
      </p>
      <p className="text-gray-200 mb-1">
        GitHub:{" "}
        <a
          href="https://github.com/g0GobliN"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-yellow-400"
        >
          g0GobliN
        </a>
      </p>
      <p className="text-gray-200 mb-4">
        Instagram:{" "}
        <a
          href="https://instagram.com/goblin01_"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-yellow-400"
        >
          @goblin01_
        </a>
      </p>
      <button
        type="button"
        onClick={openResume}
        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-md px-4 py-2 max-w-[180px] mx-auto block text-center"
      >
        Download Resume
      </button>
    </section>
  );
}

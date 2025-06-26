import React from "react";

export default function Projects() {
  return (
    <section className="bg-black bg-opacity-60 p-6 rounded-lg shadow-lg backdrop-blur-sm max-w-3xl mx-auto">
      <h2 className="font-serif font-bold text-3xl mb-6 text-yellow-400 border-b-2 border-yellow-400 w-fit pb-1">
        Projects
      </h2>

      {/* Random Dog API */}
      <div className="mb-6">
        <h3 className="font-semibold text-2xl mb-1">Random Dog API</h3>
        <p className="text-gray-200 mb-2">
          A fun web app that fetches random dog images from Dog CEO API on button click.
        </p>
        <a
          href="/code/index.html"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-md px-4 py-2 mr-2 max-w-[140px] text-center"
        >
          View Code
        </a>
        <a
          href="dog-demo.html"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-md px-4 py-2 max-w-[140px] text-center"
        >
          Demo
        </a>
      </div>

      {/* ASCII Tetris */}
      {/* <div>
        <h3 className="font-semibold text-2xl mb-1">ASCII Tetris</h3>
        <p className="text-gray-200 mb-2">
          Retro-style terminal Tetris recreated with JavaScript and ASCII graphics. WASD/Arrow keys supported.
        </p>
        <a
          href="https://github.com/g0GobliN/portfolio/tree/main/tetrus"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-md px-4 py-2 mr-2 max-w-[140px] text-center"
        >
          View Code
        </a>
        <a
          href="tetrus/index.html"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-md px-4 py-2 max-w-[140px] text-center"
        >
          Play Game
        </a>
      </div> */}
    </section>
  );
}

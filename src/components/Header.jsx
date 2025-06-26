import React from "react";
import goblinImg from "../assets/images/goblin.webp";

export default function Header() {
  return (
    <header className="text-center mb-8">
      <div
        className="mx-auto -mb-6 w-16 h-16 bg-no-repeat bg-center bg-contain animate-bounce mt-4"  // add mt-4 here
        style={{ backgroundImage: `url(${goblinImg})` }}
      />
      <h1 className="font-serif font-bold mb-1 text-yellow-400
                    text-2xl sm:text-3xl md:text-4xl">Vishal Gurung</h1>
      <p className="text-gray-300 
                      text-2l sm:text-1xl md:text-2xl">Developer & Tech Enthusiast</p>
    </header>
  );
}

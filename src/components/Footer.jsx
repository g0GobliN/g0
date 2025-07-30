import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

const Footer = () => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Load likes count on component mount
  useEffect(() => {
    const fetchLikes = async () => {
      const userHasLiked = localStorage.getItem("user-has-liked") === "true";
      setHasLiked(userHasLiked);

      try {
        const docRef = doc(db, "stats", "likes");
        const snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
          setLikes(snapshot.data().count || 0);
        } else {
          await setDoc(docRef, { count: 0 }); // Create doc if missing
          setLikes(0);
        }
      } catch (err) {
        console.error("Error loading Firestore likes:", err);
      }
    };

    fetchLikes();
  }, []);
  // Handle like button click

  const handleLike = async () => {
    if (hasLiked) return;

    console.log("Like button clicked!"); // ← ADD THIS

    try {
      const docRef = doc(db, "stats", "likes");

      // Increment Firestore like count
      await updateDoc(docRef, { count: increment(1) });

      // Update local state
      setLikes((prev) => prev + 1);
      setHasLiked(true);
      localStorage.setItem("user-has-liked", "true");
      setIsAnimating(true);

      setTimeout(() => setIsAnimating(false), 600);
    } catch (error) {
      console.error("Error updating like count:", error);
    }
  };

  return (
    <footer
  className="
    relative 
    py-12 px-6
    border-t border-gray-200 dark:border-gray-700
    bg-gray-50 text-gray-800
    dark:bg-black dark:text-gray-300
    transition-colors duration-300
  "
>


      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 dark:text-gray-400 order-1 text-center md:text-left font-gotham-book text-sm sm:text-base">
            © 2025 Vishal Gurung - Goblin
          </div>

          {/* Code Compilation Button - Small & Responsive */}
          <div className="flex items-center gap-4 order-2">
            <button
              onClick={handleLike}
              disabled={hasLiked}
              className={`group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all duration-300 text-xs ${
                hasLiked
                  ? "bg-green-100 dark:bg-green-900/30 cursor-default"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/20 hover:scale-105 cursor-pointer"
              }`}
              title={hasLiked ? "Code compiled!" : "Compile some love!"}
            >
              <div className="relative">
                {/* Smaller Curly Braces */}
                <div
                  className={`text-sm font-mono font-bold transition-all duration-300 ${
                    hasLiked
                      ? "text-green-500 scale-110"
                      : "text-gray-400 group-hover:text-green-400"
                  } ${isAnimating ? "animate-pulse" : ""}`}
                >
                  {hasLiked ? "{ ✓ }" : "{ }"}
                </div>

                {/* Smaller floating particles */}
                {isAnimating && (
                  <>
                    <div className="absolute -top-1 -right-1 animate-ping text-xs text-green-400 font-mono">
                      &lt;/&gt;
                    </div>
                    <div className="absolute -bottom-1 -left-1 animate-ping delay-75 text-xs text-green-300 font-mono">
                      ( )
                    </div>
                  </>
                )}
              </div>

              <span
                className={`text-xs font-medium font-mono transition-colors duration-300 hidden sm:inline ${
                  hasLiked
                    ? "text-green-600 dark:text-green-400"
                    : "text-gray-600 dark:text-gray-400 group-hover:text-green-500"
                }`}
              >
                {likes}
              </span>

              {/* Show only number on mobile */}
              <span
                className={`text-xs font-medium font-mono transition-colors duration-300 sm:hidden ${
                  hasLiked
                    ? "text-green-600 dark:text-green-400"
                    : "text-gray-600 dark:text-gray-400 group-hover:text-green-500"
                }`}
              >
                {likes}
              </span>
            </button>
          </div>

          {/* Reset Like Button for test*/}
          {/* <button
            onClick={() => {
              localStorage.removeItem("user-has-liked");
              setHasLiked(false);
            }}
            className="ml-4 text-xs text-red-500 hover:underline"
          >
            Reset Like
          </button> */}

          <div className="flex items-center gap-4 md:gap-6 order-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-500 font-gotham-book dark:text-gray-400 hidden sm:inline">
                Available for work
              </span>
              <span className="text-gray-500 dark:text-gray-400 sm:hidden">
                Available
              </span>
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex gap-4">
              {/* GitHub Icon Link */}
              <a
                href="https://github.com/g0GobliN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.334-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404 11.52 11.52 0 013.003.404c2.292-1.552 3.298-1.23 3.298-1.23.654 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.63-5.475 5.922.43.372.814 1.103.814 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://instagram.com/goblin01_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                    ry="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11.37a4 4 0 11-7.999-.001 4 4 0 017.999 0z"
                  />
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.5"
                    y2="6.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

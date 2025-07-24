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
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 dark:text-gray-400 order-1 text-center md:text-left">
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
            <a
              href="#"
              className="interactive text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="interactive text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Terms
            </a>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-500 dark:text-gray-400 hidden sm:inline">
                Available for work
              </span>
              <span className="text-gray-500 dark:text-gray-400 sm:hidden">
                Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

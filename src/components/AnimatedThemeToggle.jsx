import React from "react";
import { motion } from "framer-motion";

const AnimatedThemeToggle = ({ isDark, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      className={`w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300 ${
        isDark ? "bg-gray-600" : "bg-yellow-300"
      }`}
      animate={{ backgroundColor: isDark ? "#4B5563" : "#FCD34D" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        className="w-6 h-6 rounded-full flex items-center justify-center text-sm"
        animate={{
          x: isDark ? 24 : 0,
          backgroundColor: isDark ? "#f19e18" : "#ffffff",
          color: isDark ? "#ffffff" : "#f59e0b"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isDark ? "🌙" : "☀️"}
      </motion.div>
    </motion.button>
  );
};

export default AnimatedThemeToggle;

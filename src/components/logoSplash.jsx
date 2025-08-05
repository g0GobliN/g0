import React, { useEffect, useState } from "react";

export default function LogoSplash({ onAnimationEnd }) {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStep(1), 200);
    const timer2 = setTimeout(() => setAnimationStep(2), 800);
    const timer3 = setTimeout(() => setAnimationStep(3), 1400);
    const timer4 = setTimeout(() => setAnimationStep(4), 2000);
    const timer5 = setTimeout(() => onAnimationEnd(), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onAnimationEnd]);

  return (
    <div
      className={`
        fixed inset-0 flex flex-col items-center justify-center
        bg-slate-50 dark:bg-slate-900 z-50
        transition-opacity duration-500
        ${animationStep === 4 ? "opacity-0" : "opacity-100"}
      `}
    >
      {/* Logo */}
      <img
        src="/assets/images/goblin.webp"
        alt="Logo"
        className={`
          relative z-10
          w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20
          object-contain transition-all duration-700 ease-out
          ${animationStep === 0 ? "opacity-0 scale-80" : ""}
          ${animationStep >= 1 ? "opacity-100 scale-100" : ""}
          ${animationStep === 3 ? "animate-gentle-bounce" : ""}
        `}
      />

      {/* Custom SVG Loader below logo */}
      <div className="mt-3" style={{ width: 60, height: 20 }}>
        <svg
          viewBox="0 0 60 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Loading animation"
          role="img"
          className={`${animationStep >= 2 ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        >
          {[0, 20, 40].map((cx, i) => (
            <circle key={i} cx={cx + 10} cy="10" r="6" fill="#2C5F34">
              <animate
                attributeName="r"
                values="6;3;6"
                dur="1.2s"
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              />
              <animate
                attributeName="fill-opacity"
                values="1;.3;1"
                dur="1.2s"
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              />
            </circle>
          ))}
        </svg>
      </div>

      <style>{`
        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
        .animate-gentle-bounce {
          animation: gentle-bounce 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}

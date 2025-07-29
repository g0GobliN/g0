import React, { useState, useEffect } from "react";
import TextReveal from "../components/TextReveal";
import BackgroundGrid from "../components/BackgroundGrid";
import SkillsGrid from "../components/SkillsGrid";
import DecryptedText from "../components/DecryptedText";
import { Link } from "react-router-dom";

const AboutSection = ({ onOpenContact }) => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  const loopHeight = 600;
  const scrollYLooped = scrollY % loopHeight;

  const getParticleColors = (index) => {
    const colorSets = [
      "from-green-400 to-blue-400",
      "from-purple-400 to-pink-400",
      "from-yellow-400 to-red-400",
      "from-blue-400 to-purple-400",
    ];
    return colorSets[index % colorSets.length];
  };

  const handleImageClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleModalClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <section
        id="about"
        className="relative py-20 px-6 overflow-hidden min-h-screen"
      >
        <BackgroundGrid
          scrollY={scrollYLooped}
          mousePos={mousePos}
          getParticleColors={getParticleColors}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid xs:grid-cols-2 gap-8 mid:gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div>
              <TextReveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white
                ">
                  About Me
                </h2>
              </TextReveal>

              <TextReveal delay={100}>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Hi, I'm Vishal Gurung. Currently studying in Japan, I've
                  immersed myself in a culture that values precision,
                  craftsmanship, and continuous improvement. This experience has
                  profoundly shaped my approach to development.
                </p>
              </TextReveal>

              <TextReveal delay={200}>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  I believe in creating technology that doesn't just function,
                  but inspires. Every project is an opportunity to blend
                  technical excellence with thoughtful design.
                </p>
              </TextReveal>

              {/* Message Button */}
              <TextReveal delay={250}>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 text-black dark:text-customCyan  hover:underline decoration-2 underline-offset-4 transition-all duration-300 mb-8"
                >
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Send me a message
                </Link>
              </TextReveal>

              <TextReveal delay={300}>
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black dark:text-white">
                      2+
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black dark:text-white">
                      Exp.
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Developing
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black dark:text-white">
                      🇳🇵
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Based in Nepal
                    </div>
                  </div>
                </div>
              </TextReveal>
            </div>

            {/* Right Column - Photo */}
            <div className="relative overflow-visible flex justify-center xs:justify-center">
              <TextReveal delay={400}>
                <div className="relative">
                  {/* Photo Container with vertical text overlay */}
                  <div className="relative rounded-2xl  aspect-[4/5] max-w-sm">
                    <img
                      src="/assets/images/IMG_4027.jpeg"
                      alt="Vishal Gurung"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                      style={{ transform: "translateY(18px) scale(0.95)" }}
                      onClick={handleImageClick}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleImageClick(e);
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Vertical Text attached to right edge */}
                    <div
                      className="absolute inset-y-0 right-0 pointer-events-none"
                      style={{ transform: "translate(38%, 32%) scale(1.2)" }}
                    >
                      <DecryptedText
                        text="プロフィール"
                        className="text-5xl md:text-5xl lg:text-6xl font-bold text-[#f1f1b9] dark:text-white whitespace-nowrap"
                        encryptedClassName="text-5xl md:text-5xl lg:text-6xl font-bold text-[#ffffff] whitespace-nowrap"
                        animateOn="view" // triggers animation when in viewport
                        sequential={true} // reveal chars one by one
                        speed={500} // speed of scramble (adjust as you want)
                        revealDirection="start"
                        characters="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ"
                        style={{
                          transform: "rotate(270deg)",
                          fontFamily: "'Yu Gothic', 'Noto Sans JP', sans-serif",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </TextReveal>
            </div>
          </div>

          {/* Skills Section - Moved below for better layout */}
          <div className="mt-20">
            <TextReveal delay={500}>
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white text-center">
                Skills & Expertise
              </h3>
            </TextReveal>

            <TextReveal delay={600}>
              <SkillsGrid />
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Modal - Simple and minimalistic */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative">
            <img
              src="/assets/images/IMG_4027.jpeg"
              alt="Vishal Gurung"
              id="modal-title"
              className="rounded-lg shadow-lg block"
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                imageRendering: "-webkit-optimize-contrast",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Simple close button */}
            <button
              onClick={handleModalClose}
              className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white text-lg transition-colors duration-200"
              aria-label="Close image"
              type="button"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutSection;

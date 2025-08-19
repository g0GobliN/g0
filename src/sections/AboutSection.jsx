import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import DecryptedText from "../components/DecryptedText";
import SkillsGrid from "../components/SkillsGrid";
import TextReveal from "../components/TextReveal"; // ✅ Import TextReveal

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleBackdropClick = () => handleModalClose();

  const handleSendMessageClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <section
        id="about"
        className="min-h-screen py-20 px-6 
             bg-gray-50 text-gray-900 
             dark:bg-black dark:text-white 
             transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:items-center md:space-x-12">
            {/* Left Column - Photo */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              {/* Project Number */}
              <TextReveal>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-px bg-black dark:bg-cyan-400"></div>
                  <span className="ml-3 text-black dark:text-cyan-400 text-xs">
                    ABOUT
                  </span>
                </div>
              </TextReveal>

              {/* Photo Container */}
              <div
                className="relative overflow-visible flex justify-center cursor-pointer"
                onClick={handleModalOpen}
              >
                <div className="relative rounded-xl aspect-[4/5] max-w-xs">
                  <img
                    src="./assets/images/IMG_4027.jpeg"
                    alt="Vishal Gurung"
                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                    style={{ transform: "translateY(12px) scale(0.95)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                  {/* Vertical Katakana Text */}
                  <div
                    className="absolute inset-y-0 right-0 pointer-events-none"
                    style={{ transform: "translate(34%, 39%) scale(1.4)" }}
                  >
                    <DecryptedText
                      text="プロフィール"
                      className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#f1f1b9] dark:text-white whitespace-nowrap"
                      encryptedClassName="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ffffff] whitespace-nowrap"
                      animateOn="view"
                      sequential={true}
                      speed={500}
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
            </div>

            {/* Right Column - Content */}
            <div className="md:w-1/2 transform scale-[1.14] transition-transform duration-500 origin-top-left">
              <TextReveal delay={200}>
                <h2 className="text-lg md:text-xl font-bold text-black dark:text-white mb-4 leading-tight font-gotham-book">
                  About Me
                </h2>
              </TextReveal>

              <TextReveal delay={300}>
                <div className="space-y-4 mb-6 max-w-xs">
                  <p className="text-xs md:text-[13px] text-black dark:text-gray-400 leading-relaxed font-gotham-book">
                    Hi, I'm <span className="underline dark:text-cyan-400">Vishal Gurung</span>.
                    I’m currently studying in Japan and learning how to build
                    useful, clean, and reliable software.
                  </p>

                  <p className="text-xs md:text-[13px] text-black dark:text-gray-400 leading-relaxed font-gotham-book">
                    I focus on writing code that works well and looks good. I’m
                    always trying to improve and take on new challenges in
                    development.
                  </p>

                  <p className="text-xs md:text-[13px] text-black dark:text-gray-400 leading-relaxed font-gotham-book">
                    When I’m not coding, I enjoy experiencing different cultures
                    and finding inspiration in everyday life.
                  </p>
                </div>
              </TextReveal>

              <TextReveal delay={400}>
                <div className="flex items-center space-x-3 sm:space-x-6 mb-6">
                  <div className="text-center">
                    <div className="text-sm sm:text-base font-gotham-medium text-black dark:text-white">
                      2+
                    </div>
                    <div className="text-[11px] font-gotham-book text-black dark:text-gray-200">
                      Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm sm:text-base font-gotham-medium text-black dark:text-white">
                      Exp.
                    </div>
                    <div className="text-[11px] font-gotham-book text-black dark:text-gray-200">
                      Developing
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm sm:text-base font-bold text-white">
                      🇳🇵
                    </div>
                    <div className="text-[11px] font-gotham-book text-black dark:text-gray-200">
                      Based in Nepal
                    </div>
                  </div>
                </div>
              </TextReveal>

              <TextReveal delay={500}>
                <div className="flex items-center space-x-3">
                  {/* Send Message Button */}
                  <button
                    onClick={handleSendMessageClick}
                    className="
                      inline-flex items-center space-x-1.5
                      bg-gray-800 dark:bg-cyan-400
                      text-white dark:text-black
                      px-3 py-1.5
                      rounded-md
                      text-[11px]
                      font-gotham
                      hover:bg-gray-600 dark:hover:bg-cyan-300
                      transition-colors duration-300
                      max-w-max
                    "
                  >
                    <span>Send message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* PDF Button */}
                  <button
                    onClick={() =>
                      window.open(
                        "./assets/Vishal_Gurung_Portfolio_Resume.pdf",
                        "_blank"
                      )
                    }
                    className="flex items-center justify-center rounded-full
                    text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white
                    transition-colors mt-0.5"
                    title="View PDF Online"
                  >
                    <img
                      src="./assets/images/scroll.png"
                      alt="View PDF"
                      className="block"
                      style={{
                        width: "28px",
                        height: "28px",
                        transform: "scale(1)", 
                        transition: "transform 0.3s", 
                      }}
                    />
                  </button>
                </div>
              </TextReveal>
            </div>
          </div>

          {/* SkillsGrid below both columns */}
          <TextReveal delay={600}>
            <div
              className="mt-24 max-w-6xl mx-auto px-4 overflow-x-auto"
              style={{
                transform: "scale(0.85)",
                transformOrigin: "top center",
              }}
            >
              <SkillsGrid />
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Modal */}
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
              src="./assets/images/IMG_4027.jpeg"
              alt="Vishal Gurung"
              id="modal-title"
              className="rounded-lg shadow-lg block"
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                imageRendering: "-webkit-optimize-contrast",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
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

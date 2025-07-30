import React, { useState, useEffect } from "react";
import TextReveal from "../components/TextReveal";
import ContactForm from "../components/ContactForm";

const ContactSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  return (
    <section 
  id="contact"
  className="min-h-screen py-20 px-6 
             bg-gray-50 text-gray-900 
             dark:bg-black dark:text-white 
             transition-colors duration-300"
>
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-center md:space-x-12">
          {/* Left Column - Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            {/* Section Label */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-px bg-black dark:bg-cyan-400"></div>
              <span className="ml-3 text-black dark:text-cyan-400 text-xs">
                CONTACT
              </span>
            </div>

            {/* Main Content */}
            <div className="transform scale-[1.14] transition-transform duration-500 origin-top-left">
              <TextReveal>
                <h2 className="text-2xl lg:text-3xl text-black-400 dark:text-white mb-4 leading-tight">
                  Let's Work Together
                </h2>
              </TextReveal>

              <TextReveal delay={100}>
                <div className="space-y-4 mb-6">
                  <p className="text-black-400 dark:text-gray-400 text-sm font-gotham-book leading-relaxed max-w-xs">
                    I'm always excited to collaborate on innovative projects and
                    explore new opportunities.
                  </p>
                  
                  <p className="text-black-400 dark:text-gray-400 text-sm font-gotham-book leading-relaxed max-w-xs">
                    Let's create something amazing together.
                  </p>
                </div>
              </TextReveal>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-1/2">

            {/* Contact Form Container */}
            <div className="relative z-10 backdrop-blur-sm border rounded-xl pt-2 px-6 pb-6 lg:pt-4 lg:px-8 lg:pb-8 mt-16">
              <TextReveal delay={250}>
                <ContactForm />
              </TextReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
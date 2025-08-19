import React from "react";

export default function HelloWorld() {
  return (
    <main
      className="min-h-screen py-20 px-6 
        bg-gray-50 text-gray-900 
        dark:bg-black dark:text-white 
        transition-colors duration-300 font-gotham-book
        flex justify-center"
    >
      {/* Content */}
      <div className="relative max-w-4xl w-full">
        
        {/* Header */}
        <div className="flex items-center mb-10">
          <div className="w-12 h-px bg-black dark:bg-cyan-400"></div>
          <span className="ml-3 text-black dark:text-cyan-400 text-xs font-gotham-book tracking-wide">
            BLOG
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl lg:text-4xl font-gotham-bold mb-4 leading-snug text-black dark:text-white">
          Hello World: How I Built My Portfolio Site
        </h1>

        {/* Date & Meta */}
        <p className="text-xs text-gray-600 dark:text-gray-400 mb-8 font-gotham-book tracking-wide">
          April 21, 2025 • 8 min read
        </p>

        {/* Sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-xl lg:text-2xl font-gotham-bold mb-4 text-black dark:text-white">
              How It All Started
            </h2>
            <p className="text-sm text-black dark:text-gray-300 leading-relaxed font-gotham-book mb-6">
              Back in early 2025, I realized it was time to build a new portfolio
              site to showcase my skills and projects. Instead of following trends,
              I wanted something that reflects my own style and growth as a developer.
              The old site felt outdated, and I knew I could do better with the skills I'd gained.
            </p>
            
            {/* Image placeholder */}
            <div className="mb-8 overflow-hidden rounded-xl shadow-lg bg-gray-200 dark:bg-gray-800">
              <div className="w-full h-48 flex items-center justify-center">
                <img
                  src="./assets/gif/background6.gif"
                  alt="React + Tailwind Demo"
                  className="w-full h-auto object-contain block border-4 scale-105  [@media(min-width:539px)_and_(max-width:1023px)]:translate-y-[-40px] lg:-translate-y-[80px] transition-transform duration-500"
                />
              </div>
            </div>

            <p className="text-sm text-black dark:text-gray-300 leading-relaxed font-gotham-book">
              The journey began with sketching ideas and researching modern design patterns.
              I spent hours studying portfolios from developers I admired, taking notes on
              what made them stand out and how I could incorporate similar principles into my own work.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-gotham-bold mb-4 text-black dark:text-white">
              Choosing the Stack
            </h2>
            <p className="text-sm text-black dark:text-gray-300 leading-relaxed font-gotham-book mb-6">
              I chose <span className="font-gotham-medium text-black dark:text-cyan-400">React</span> because I
              was already learning it and wanted real-world practice. The component-based architecture
              felt perfect for building reusable UI elements that I could maintain easily.
            </p>

            {/* Image placeholder */}
            <div className="mb-8 overflow-hidden rounded-xl shadow-lg bg-gray-200 dark:bg-gray-800">
              <div className="w-full h-48 flex items-center justify-center">
                <img
                  src="./assets/articleImage/reactTailwind.png"
                  alt="React + Tailwind Demo"
                  className="w-full h-auto object-contain block border-4 scale-105"
                />
              </div>
            </div>

            <p className="text-sm text-black dark:text-gray-300 leading-relaxed font-gotham-book">
              <span className="font-gotham-medium text-black dark:text-cyan-400">Tailwind CSS</span> was
              the natural choice for styling. It helped me build clean and responsive UIs quickly
              without writing custom CSS for every component. The utility-first approach aligned
              perfectly with React's component philosophy.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-gotham-bold mb-4 text-black dark:text-white">
              Adding Dark Mode & Animations
            </h2>
            <p className="text-sm text-black dark:text-gray-300 leading-relaxed font-gotham-book mb-6">
              Dark mode was a must-have feature. Many developers prefer it, and I wanted to create
              an experience that felt comfortable for late-night browsing. The contrast between
              light and dark themes also showcased the versatility of the design.
            </p>

            {/* Image placeholder */}
            <div className="mb-8 overflow-hidden rounded-xl shadow-lg bg-gray-200 dark:bg-gray-800">
              <div className="w-full h-48 flex items-center justify-center">
                <img
                  src="./assets/gif/portfolio.gif"
                  alt="Dark/light image"
                  className="w-full h-auto object-contain block border-4 scale-[1.35] sm:scale-105  transition-transform duration-500"
                />
              </div>
            </div>

            <p className="text-sm text-black dark:text-gray-300 leading-relaxed font-gotham-book">
              Paired with smooth transitions and subtle animations, it gave the site a modern
              and professional vibe. I focused on micro-interactions that felt natural rather
              than overwhelming—small details that enhance the user experience without being distracting.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-gotham-bold mb-4 text-black dark:text-white">
              Challenges Along the Way
            </h2>
            <p className="text-sm text-black dark:text-gray-300 leading-relaxed font-gotham-book mb-6">
              From smooth scrolling to responsive mobile menus, there were plenty of tricky parts.
              Getting the navigation to work seamlessly across different screen sizes took more
              iterations than I initially expected.
            </p>

            <p className="text-sm text-black dark:text-gray-300 leading-relaxed font-gotham-book mb-6">
              I also had to ensure accessibility and optimize for performance on both desktop and mobile devices.
              Learning about semantic HTML, ARIA labels, and keyboard navigation opened my eyes to how
              important inclusive design really is.
            </p>

            {/* Image placeholder */}
            <div className="mb-8 overflow-hidden rounded-xl shadow-lg bg-gray-200 dark:bg-gray-800">
              <div className="w-full h-48 flex items-center justify-center">
                 <img
                  src="./assets/articleImage/error.png"
                  alt="Dark/light image"
                  className="w-full h-auto object-contain block border-4 scale-[1.35] sm:scale-105  transition-transform duration-500"
                />
              </div>
            </div>


            <p className="text-sm text-black dark:text-gray-300 leading-relaxed font-gotham-book">
              One of the most fun challenges was creating a custom 404 error page. I wanted something that
              would turn the frustration of hitting a dead link into an entertaining experience with 
              personality and humor.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-gotham-bold mb-4 text-black dark:text-white">
              Making Errors Fun: The 404 Experience
            </h2>
            <p className="text-sm text-black dark:text-gray-300 leading-relaxed font-gotham-book mb-6">
              Instead of boring users with a standard "Page Not Found" message, I decided to create something
              memorable. The 404 page features glitch animations, a goblin theme, and even interactive
              playlists to keep visitors engaged rather than frustrated.
            </p>

            <p className="text-sm text-black dark:text-gray-300 leading-relaxed font-gotham-book mb-6">
              The page uses animated backgrounds, glitching text effects, and interactive elements that
              make discovering a broken link feel like finding a hidden easter egg. Sometimes the best
              user experiences come from the unexpected detours.
            </p>

            {/* Error Page Preview */}
            <div className="mb-8 p-6 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-8 h-px bg-black dark:bg-cyan-400"></div>
                  <span className="ml-2 text-black dark:text-cyan-400 text-xs tracking-widest font-mono">
                    ERROR
                  </span>
                </div>
                <h3 className="text-4xl font-black mb-2 text-gray-700 dark:text-white">404</h3>
                <p className="text-sm font-light text-gray-700 dark:text-gray-200 mb-4">
                  PAGE NOT FOUND
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  Uh-oh, traveler — you've strayed into Goblin territory.
                </p>
                <div className="flex justify-center gap-3">
                  <div className="px-3 py-1 rounded text-xs bg-gray-800 text-white">← Go Home</div>
                  <div className="px-3 py-1 rounded text-xs border border-gray-400 text-gray-600 dark:text-gray-300">
                    Browse Playlists →
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-black dark:text-gray-300 leading-relaxed font-gotham-book">
              The interactive playlists feature adds a playful touch—each song title relates to the 404
              experience with hidden meanings that users can discover. It's these small details that
              transform potentially negative experiences into memorable ones.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl font-gotham-bold mb-4 text-black dark:text-white">
              What's Next?
            </h2>
            <p className="text-sm text-black dark:text-gray-300 leading-relaxed font-gotham-book mb-6">
              I plan to keep improving this portfolio by adding more projects and refining the user experience.
              There's always something to optimize, whether it's loading times, animations, or the overall flow.
            </p>

            {/* Image placeholder */}
            <div className="mb-8 overflow-hidden rounded-xl shadow-lg bg-gray-200 dark:bg-gray-800">
              <div className="w-full h-48 flex items-center justify-center">
                <img
                  src="./assets/articleImage/thoughts.jpg"
                  alt="Dark/light image"
                  className="w-full h-auto object-contain block border-4 scale-105"
                />
              </div>
            </div>

            <p className="text-sm text-black dark:text-gray-300 leading-relaxed font-gotham-book">
              Maybe integrating a full blog system with search and filters is on the horizon.
              The goal is to create something that grows with me as I continue learning and
              building new things.
            </p>
          </section>
        </div>

        {/* Closing section */}
        <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700">
          <p className="text-sm text-black dark:text-gray-300 leading-relaxed font-gotham-book mb-4">
            Building this portfolio taught me more than just technical skills—it showed me the importance
            of thinking through every detail and considering the user's experience at every step.
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400 font-gotham-book">
            Thanks for reading! Feel free to reach out if you have questions about the build process
            or want to discuss web development.
          </p>
        </div>
      </div>
    </main>
  );
}
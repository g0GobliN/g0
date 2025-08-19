import React, { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import DecryptedText from "./DecryptedText";

const ErrorPage = ({ onNavigateHome }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPlaylists, setShowPlaylists] = useState(false);
  const [glitchText, setGlitchText] = useState("404");
  const audioRef = useRef(new Audio());
  const [playingId, setPlayingId] = useState(null);
  const [easterEggId, setEasterEggId] = useState(null);

  const playlists = [
    {
      id: 1,
      name: "Oops I Did It Again",
      tracks: 24,
      audioSrc: "./assets/music/Oops I Did It Again.mp3",
      meaning:
        "Just like this page — you tried, failed, and landed back at square one. Welcome to the error zone.",
    },
    {
      id: 2,
      name: "Dumb Ways to Die",
      tracks: 18,
      audioSrc: "./assets/music/Dumb Ways to Die.mp3",
      meaning:
        "Your navigation skills are questionable. Keep clicking and you'll find even dumber ways to get lost.",
    },
    {
      id: 3,
      name: "Another One Bites The Dust",
      tracks: 32,
      audioSrc:
        "./assets/music/Another One Bites The Dust (Remastered 2011).mp3",
      meaning:
        "Every wrong click adds to the pile of lost visitors. RIP your browsing hopes.",
    },
    {
      id: 4,
      name: "Nobody's Home",
      tracks: 15,
      audioSrc: "./assets/music/Nobody's Home.mp3",
      meaning:
        "404 means nobody's home — just like this page, empty and abandoned. Try not to get too comfy.",
    },
    {
      id: 5,
      name: "Good Luck",
      tracks: 28,
      audioSrc: "./assets/music/Good Luck.mp3",
      meaning:
        "You're gonna need it finding your way back from this digital wasteland. May the odds be ever in your favor.",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const glitchChars = ["4", "0", "4", "#", "@", "*", "4", "0", "4"];
    let glitchInterval;

    const startGlitch = () => {
      let count = 0;
      glitchInterval = setInterval(() => {
        if (count < 3) {
          setGlitchText(
            glitchChars[Math.floor(Math.random() * glitchChars.length)] +
              glitchChars[Math.floor(Math.random() * glitchChars.length)] +
              glitchChars[Math.floor(Math.random() * glitchChars.length)]
          );
          count++;
        } else {
          setGlitchText("404");
          clearInterval(glitchInterval);
        }
      }, 100);
    };

    const mainInterval = setInterval(startGlitch, 4000);

    return () => {
      clearInterval(mainInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const handleRetry = () => {
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.href = "/";
    }
  };

  const togglePlaylists = () => setShowPlaylists(!showPlaylists);

  const togglePlayPause = (playlist) => {
    const audio = audioRef.current;

    if (playingId === playlist.id) {
      audio.pause();
      setPlayingId(null);
    } else {
      if (!audio.paused) {
        audio.pause();
      }
      audio.src = playlist.audioSrc;
      audio.load();

      audio
        .play()
        .then(() => {
          setPlayingId(playlist.id);
        })
        .catch(() => {
          // Handle play errors silently
        });

      audio.onended = () => {
        setPlayingId(null);
      };
    }
  };

  const toggleEasterEgg = (id) => {
    setEasterEggId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-black">
      {/* Background GIF */}
      <div className="absolute inset-0 hidden dark:block">
        <img
          src="./assets/gif/background7.gif"
          alt="background gif"
          className="w-full h-full object-none scale-125"
        />
      </div>

      {/* Main Content Container - Always use py-16 but center with margin */}
      <div
        className={`px-6 py-16 font-gotham-book transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        } ${
          !showPlaylists ? "py-72 flex items-center justify-center" : "pb-32"
        }`}
      >
        {/* Content wrapper */}
        <div
          className={`text-center max-w-2xl mx-auto ${
            !showPlaylists ? "w-full" : ""
          }`}
        >
          {/* Section Sign */}
          <div className="flex items-center justify-center mb-8 relative -top-7 -left-20">
            <div className="w-12 h-px bg-black dark:bg-cyan-400"></div>
            <span className="ml-3 text-black dark:text-cyan-400 text-xs tracking-widest font-mono">
              ERROR
            </span>
          </div>

          {/* Glitch 404 */}
          <h1 className="text-8xl md:text-9xl font-black mb-4 tracking-tighter leading-none text-gray-700 dark:text-white">
            {glitchText}
          </h1>
          {/* <p className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-200 mb-8">
            PAGE NOT FOUND
          </p> */}

          <div className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-200 mb-8">
            <DecryptedText
              text="PAGE NOT FOUND"
              encryptedClassName="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ffffff] whitespace-nowrap"
              animateOn="view"
              sequential={true}
              speed={100}
              revealDirection="start"
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
              style={{
                fontFamily: "'gotham-book', sans-serif",
              }}
            />
          </div>

          {/* Description */}
          <p className="text-base font-gotham-book text-gray-500 dark:text-gray-300 font-light mb-2">
            Uh-oh, traveler — you've strayed into Goblin territory.
          </p>
          <p className="text-sm font-gotham-book text-gray-400 dark:text-gray-300 mb-10">
            Don't worry — the Goblin keeps plenty of shiny things nearby. Care
            to explore?
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mb-12">
            <button
              onClick={handleRetry}
              className="px-5 py-2 rounded-lg text-sm font-gotham-book
                bg-gray-800/80 text-white
                hover:bg-gray-600/90 transition-colors duration-300
                cursor-pointer"
            >
              ← Go Home
            </button>
            <button
              onClick={togglePlaylists}
              className="px-5 py-2 rounded-lg text-sm font-gotham-book
                dark:bg-white/10 border dark:border-white/30 dark:text-white
                hover:bg-gray-400/15
                dark:hover:bg-white/20 transition-colors duration-300"
            >
              Browse Playlists →
            </button>
          </div>

          {/* Playlists - Smooth expansion */}
          <div
            className={`transform transition-all duration-500 overflow-hidden ${
              showPlaylists
                ? "max-h-[2000px] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 translate-y-4"
            }`}
          >
            <div className="mb-20">
              <h2 className="text-2xl font-light text-gray-700 dark:text-white mb-4">
                Available Playlists
              </h2>
              <div className="w-20 h-px bg-gray-500 mx-auto mb-8"></div>

              <div className="space-y-3 max-w-md mx-auto">
                {playlists.map((playlist, index) => (
                  <div key={playlist.id} className="border-b border-gray-600">
                    <button
                      onClick={() => togglePlayPause(playlist)}
                      className="w-full flex items-center justify-between p-4
                        text-left group
                        hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-baseline space-x-4">
                        <span className="text-xs font-mono text-gray-400 w-6">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <div
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleEasterEgg(playlist.id);
                            }}
                            className="text-lg font-medium cursor-pointer text-gray-400 group-hover:text-gray-700 dark:text-white dark:group-hover:text-cyan-400 transition-colors duration-200 select-none"
                            title="Click to reveal playlist meaning"
                          >
                            {playlist.name}
                          </div>
                          <div className="text-sm text-gray-400 font-light">
                            {playlist.tracks} tracks
                          </div>
                        </div>
                      </div>
                      {playingId === playlist.id ? (
                        <Pause className="w-4 h-4 text-cyan-400 transition-colors duration-200 opacity-100" />
                      ) : (
                        <Play className="w-4 h-4 text-gray-400 transition-colors duration-200 opacity-0 group-hover:opacity-100" />
                      )}
                    </button>

                    {/* Easter egg message */}
                    {easterEggId === playlist.id && (
                      <div className="px-6 py-3 bg-gray-700 bg-opacity-20 text-gray-700 dark:text-gray-300 text-sm rounded-b-md select-text">
                        {playlist.meaning}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-16 text-xs font-mono text-gray-400 tracking-widest">
            g0 v2.1
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

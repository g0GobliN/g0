import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { actualArticle, comingSoonArticle } from "../data/articles";

const ArticleSection = () => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    if (dateString === "Coming soon...") return dateString;
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (readTime) => {
    if (readTime === "00:00:00:00") return readTime;
    if (readTime.includes("min")) return readTime; // already formatted
    const minutes = parseInt(readTime);
    return `${minutes} min read`;
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-gray-50 text-gray-900 dark:bg-black dark:text-white flex justify-center items-center transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="w-full lg:w-[40%] space-y-8 flex flex-col items-center">
          <div className="flex items-center mb-6 -translate-x-[95px] translate-y-5 sm:-translate-x-0 sm:translate-y-0">
            <div className="w-12 h-px bg-black dark:bg-cyan-400"></div>
            <span className="ml-3 text-black dark:text-cyan-400 text-xs">
              LATEST ARTICLES
            </span>
          </div>

          {/* Actual Article preview */}
          <div className="rounded-none p-6 border-y border-gray-200 dark:border-gray-700 w-full">
            <div className="pb-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-px bg-blue-600 dark:bg-cyan-400 mr-4"></div>
                <span className="text-blue-600 dark:text-cyan-400 text-sm font-medium">
                  {formatDate(actualArticle.date)}
                </span>
              </div>
            </div>
            <div className="pb-6">
              <h2 className="text-2xl font-bold mb-4 leading-tight">
                {actualArticle.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {actualArticle.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => navigate("/articles/hello-world")}
                className="flex items-center text-blue-600 dark:text-cyan-400 hover:opacity-75 transition"
              >
                <ChevronRight className="w-5 h-5 mr-2" />
                Read article
              </button>
              <span className="text-gray-400 dark:text-gray-500 text-sm font-mono">
                {formatTime(actualArticle.readTime)}
              </span>
            </div>
          </div>

          {/* Coming Soon Article */}
          <div className="rounded-none p-6 opacity-60 border-y border-gray-200 dark:border-gray-700 w-full">
            <div className="pb-6">
              <div className="flex items-center mb-3">
                <div className="w-8 h-px bg-gray-400 dark:bg-gray-600 mr-4"></div>
                <span className="text-gray-500 dark:text-gray-600 text-sm font-medium">
                  {comingSoonArticle.date}
                </span>
              </div>
            </div>
            <div className="pb-6">
              <h2 className="text-2xl font-bold mb-4 leading-tight text-gray-500 dark:text-gray-600">
                {comingSoonArticle.title}
              </h2>
              <div className="space-y-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded-full w-full animate-pulse"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded-full w-4/5 animate-pulse"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded-full w-5/6 animate-pulse"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-800 rounded-full w-3/4 animate-pulse"></div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="flex items-center text-gray-400 dark:text-gray-700 cursor-not-allowed">
                <ChevronRight className="w-5 h-5 mr-2" />
                Read more
              </button>
              <span className="text-gray-400 dark:text-gray-700 text-sm font-mono">
                {comingSoonArticle.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[60%] lg:mt-12">
          <div className="relative overflow-hidden rounded-none border-y border-gray-200 dark:border-gray-700 min-h-[calc(100vh-10rem)]">
            {/* Background Image */}
            <img
              src="./assets/gif/background6.gif"
              alt="Featured article background"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text Content */}
            <div className="relative z-10 p-8 h-full flex flex-col items-center justify-end text-center pb-16">
              <div className="mb-4">
                <span className="bg-white/80 dark:bg-gray-800/60 text-black dark:text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                  Featured
                </span>
              </div>

              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-px bg-cyan-400 mr-3"></div>
                <span className="text-cyan-400 text-xs">
                  {formatDate(actualArticle.date)}
                </span>
                <div className="w-8 h-px bg-cyan-400 ml-3"></div>
              </div>

              <h1 className="text-3xl font-bold mb-4 leading-tight text-white max-w-xl">
                {actualArticle.title}
              </h1>

              <p className="text-base text-gray-200 mb-6 leading-relaxed max-w-2xl">
                {actualArticle.description}
              </p>

              <button
                onClick={() => navigate("/articles/hello-world")}
                className="flex items-center text-cyan-300 hover:text-cyan-200 transition"
              >
                <ChevronRight className="w-4 h-4 mr-1" />
                Read article
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;

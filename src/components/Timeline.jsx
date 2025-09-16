// src/components/Timeline.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      category: "Education",
      title: "BCA — Tilak Maharashtra Vidyapeeth",
      date: "2022 - 2025",
      subtitle: "Core: Web Development & Databases",
      description:
        "Studied BCA with a strong focus on JavaScript, React, React Native, Node.js, and MongoDB. Built multiple full-stack projects and practical assignments.",
    },
    {
      category: "Experience",
      title: "Intern — Chordz Technology",
      date: "June 2025 – Present",
      subtitle: "React Native Developer",
      description:
        "Worked on a full-stack React Native project — built the AstroTalk app end-to-end. Used Node.js for the backend and React Native for the frontend.",
    },
    {
      category: "Key Projects",
      title: "Musixly, Huddle, AI Website Cloner",
      date: "2024 – 2025",
      subtitle: "Full-Stack MERN Projects",
      description:
        "Developed Musixly (music app with admin panel), Huddle (social media app), and an AI-powered website cloner. Implemented modern UI/UX, authentication, and cloud integrations.",
    },
    {
      category: "Achievements",
      title: "Completed JavaScript + GenAI Course",
      date: "2025",
      subtitle: "Chai Aur Code",
      description:
        "Successfully completed an advanced JavaScript and Generative AI course by Chai Aur Code, deepening expertise in modern web development and AI integration.",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">My Timeline</h2>
      <div className="relative border-l border-gray-700 pl-6 space-y-8">
        {items.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div key={idx} className="relative">
              {/* Dot */}
              <div
                className={`absolute -left-3 w-3 h-3 rounded-full ${
                  isActive ? "bg-red-500" : "bg-gray-400"
                }`}
              />
              {/* Header button */}
              <button
                className="w-full text-left focus:outline-none"
                onClick={() =>
                  setActiveIndex(isActive ? null : idx)
                }
                aria-expanded={isActive}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium">{item.category}</h3>
                    <p className="text-sm text-gray-400">{item.date}</p>
                  </div>
                  <span className="text-gray-400 text-sm">
                    {isActive ? "▲" : "▼"}
                  </span>
                </div>
                <p className="text-md font-semibold mt-1">{item.title}</p>
                {item.subtitle && (
                  <p className="text-sm text-gray-300">{item.subtitle}</p>
                )}
              </button>

              {/* Expandable description */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="desc"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-2"
                  >
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;

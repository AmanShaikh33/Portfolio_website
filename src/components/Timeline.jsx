import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      category: "Education",
      title: "BCA — Tilak Maharashtra Vidyapeeth",
      date: "2022 – 2025",
      subtitle: "Core: Web Development & Databases",
      description:
        "Focused on JavaScript, React, React Native, Node.js, and MongoDB. Built multiple full-stack projects and practical assignments.",
    },
    {
  category: "Experience",
  title: "React & React Native Developer Intern — Chord Technology",
  date: "Feb 2025 – Jun 2025",
  subtitle: "React Native • Node.js",
  description:
    "Developed cross-platform mobile applications using React Native (Expo) and integrated backend APIs. Assisted in feature development, UI fixes, and real-time API integrations."
},
{
  category: "Experience",
  title: "Full Stack Developer — Chord Technology",
  date: "Jul 2025 – Jan 2026",
  subtitle: "MERN Stack",
  description:
    "Handled full-cycle development of MERN stack applications including frontend UI, backend APIs, authentication, and database operations. Improved performance, fixed production issues, and contributed to scalable application architecture."
},

    {
      category: "Key Projects",
      title: "Musixly • Huddle • AI Website Cloner • Astrology App • Art institution App ",
      date: "2024 – 2026",
      subtitle: "Full-Stack MERN Projects",
      description:
        "Implemented modern UI/UX, authentication and cloud integrations for multiple production-ready apps.",
    },
    {
      category: "Achievements",
      title: "JavaScript + GenAI Course",
      date: "2025",
      subtitle: "Chai Aur Code",
      description:
        "Completed advanced JavaScript and Generative-AI course, sharpening modern web development skills.",
    },
  ];

  return (
    <section id="timeline" className="w-full">
    

      <div className="relative max-w-3xl mx-auto pl-6">
        {/* vertical glowing line */}
        <div className="absolute left-3 top-0 bottom-0 w-[2px]
                        bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full" />

        {items.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative mb-10"
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-[10px] top-2 w-5 h-5 rounded-full border-2
                 ${isActive ? "border-cyan-400 bg-cyan-500/80"
                             : "border-gray-600 bg-gray-800"}`}
              />

              {/* Card */}
              <button
                onClick={() =>
                  setActiveIndex(isActive ? null : idx)
                }
                className="w-full text-left bg-gray-900/70 backdrop-blur
                           border border-white/10 rounded-xl p-6
                           hover:border-cyan-400 transition"
              >
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 text-sm font-semibold tracking-wide">
                    {item.category}
                  </span>
                  <span className="text-gray-400 text-sm">{item.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white mt-2">
                  {item.title}
                </h3>

                {item.subtitle && (
                  <p className="text-gray-300 text-sm">{item.subtitle}</p>
                )}

                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="mt-3 text-gray-400 text-sm leading-relaxed"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;

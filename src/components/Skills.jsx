import React from "react";
import {
  FaReact, FaNodeJs, FaDocker, FaDatabase, FaGitAlt, FaJs, FaPython
} from "react-icons/fa";
import {
  SiDjango, SiMongodb, SiFirebase, SiCloudinary, SiTypescript
} from "react-icons/si";

const skills = [
  { name: "TypeScript", icon: <SiTypescript size={24} /> },
  { name: "JavaScript", icon: <FaJs size={24} /> },
  { name: "React.js", icon: <FaReact size={24} /> },
  { name: "React Native", icon: <FaReact size={24} /> },
  { name: "Node.js / Express", icon: <FaNodeJs size={24} /> },
  { name: "Django", icon: <SiDjango size={24} /> },
  { name: "SQL", icon: <FaDatabase size={24} /> },
  { name: "MongoDB", icon: <SiMongodb size={24} /> },
  { name: "Docker", icon: <FaDocker size={24} /> },
  { name: "Git / GitHub", icon: <FaGitAlt size={24} /> },
  { name: "Cloudinary", icon: <SiCloudinary size={24} /> },
  { name: "Firebase", icon: <SiFirebase size={24} /> },
];

const Skills = () => {
  return (
    <section className="mt-24">
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center w-28 p-4 bg-gray-900/60 backdrop-blur-md rounded-xl border border-white/10 shadow-md hover:shadow-amber-400/20 transition transform hover:-translate-y-1"
          >
            <div className="text-amber-400 mb-2">{skill.icon}</div>
            <span className="text-sm text-gray-200 text-center font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

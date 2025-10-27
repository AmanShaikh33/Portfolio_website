import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      tags: ["React", "Tailwind"],
      code: "https://github.com/AmanShaikh33/Portfolio",
      live: "https://portfolio-1-2g0s.onrender.com/"
    },
    {
      title: "Gaming Dashboard",
      tags: ["React", "Tailwind", "Node.js", "MongoDB"],
      code: "https://github.com/AmanShaikh33/mernstack-Dashboard",
      live: "https://mern-frontend-9h2x.onrender.com/"
    },
    {
      title: "Huddle",
      tags: ["React", "Node.js", "Tailwind", "Cloudinary", "Multer", "JWT"],
      code: "https://github.com/AmanShaikh33/mern-social",
      live: "https://huddlenew.vercel.app/"
    },
    {
      title: "Musixly",
      tags: ["React", "Node.js", "Tailwind", "Cloudinary"],
      code: "https://github.com/AmanShaikh33/musixly",
      live: ""
    },
    {
      title: "Astrotalk",
      tags: ["Typescript", "React Native", "Tailwind", "Node.js", "MongoDB", "Cloudinary"],
      code: "https://github.com/AmanShaikh33/astrologyapp",
      live: "https://expo.dev/accounts/amanshaikh33/projects/Astrotalk/builds/349cf15d-c2ed-4f36-8d89-87e5360d769d"
    },
    {
      title: "Art Institution",
      tags: ["Typescript", "React Native", "Tailwind", "Node.js", "MongoDB", "Cloudinary"],
      code: "https://github.com/AmanShaikh33/artInstitution_react-native",
      live: "https://expo.dev/accounts/amanshaikh33/projects/Astrotalk/builds/93a1a9d8-4c56-4300-98f9-e00f94b762f1"
    },
    {
      title: "AI Website Cloner",
      tags: ["React", "Tailwind", "Gen AI", "Node.js", "Puppeteer"],
      code: "https://github.com/AmanShaikh33/websitecloner",
      live: "https://websitecloner.vercel.app/"
    },
    {
      title: "Tokenizer",
      tags: ["React", "Tailwind", "Gen AI", "Node.js"],
      code: "https://github.com/AmanShaikh33/tokenizer",
      live: "https://tokenizer-theta.vercel.app/"
    }
  ];

  return (
    <section className="mt-20">
      <h2 className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="relative group rounded-2xl p-6 bg-gray-900/70 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-fuchsia-500/20 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-fuchsia-400 transition">
              {p.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200 border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-fuchsia-400 hover:underline"
                >
                  Live Demo →
                </a>
              )}
              <a
                href={p.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-300 hover:underline"
              >
                Source Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

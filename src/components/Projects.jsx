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
      live: "https://mern-social-91de.onrender.com/"
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

  const gradients = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500",
    "from-rose-500 to-orange-500",
    "from-teal-500 to-emerald-500",
    "from-fuchsia-500 to-violet-500",
    "from-amber-500 to-yellow-500",
    "from-indigo-500 to-sky-500",
    "from-red-500 to-pink-500"
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl shadow-xl bg-gradient-to-br ${gradients[idx % gradients.length]} transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">
              {p.title}
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-black/30 text-white px-3 py-1 rounded-full backdrop-blur-sm border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={p.live || "#"}
                target={p.live ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white text-gray-800 font-semibold hover:bg-gray-100 transition"
              >
                View Project
              </a>
              <a
                href={p.code || "#"}
                target={p.code ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-black/30 text-white font-semibold border border-white/30 hover:bg-black/40 transition"
              >
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

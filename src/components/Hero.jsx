import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-black flex flex-col justify-center items-center px-6 lg:px-20">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo / Name */}
          <span className="text-white font-bold text-xl tracking-wide">
            Aman<span className="text-cyan-400">.dev</span>
          </span>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-8 text-gray-300 text-sm font-medium">
            <li>
              <a href="#timeline" className="hover:text-cyan-400 transition">
                Timeline
              </a>
            </li>
            <li>
              <a href="#aichatbot" className="hover:text-cyan-400 transition">
                AI Chatbot
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-cyan-400 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="md:hidden bg-black/90 border-t border-gray-800">
            <ul className="flex flex-col items-center gap-6 py-6 text-gray-300 text-lg font-medium">
              <li>
                <a
                  href="#timeline"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-cyan-400 transition"
                >
                  Timeline
                </a>
              </li>
              <li>
                <a
                  href="#aichatbot"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-cyan-400 transition"
                >
                  AI Chatbot
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-cyan-400 transition"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-cyan-400 transition"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* ===== CENTERED HERO CONTENT ===== */}
      <div className="flex flex-col items-center text-center max-w-3xl pt-24">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
          I write code so you don’t have to—{" "}
          <span className="text-cyan-400">thank me later.</span>
        </h1>

        <p className="text-gray-300 mb-6 leading-relaxed">
          I'm Aman Shaikh, a full-stack developer who builds sleek, scalable web and mobile applications using MERN, React Native, modern DevOps, and Generative AI solutions.
        </p>

        <div className="flex items-center gap-6 text-2xl text-gray-400">
          <a
            href="https://github.com/AmanShaikh33"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-shaikh-02b241317/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

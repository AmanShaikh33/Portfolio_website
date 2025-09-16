import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I’m <span className="text-red-500">Aman Shaikh</span>
      </h1>
      <p className="text-gray-300 max-w-xl">
        I build interactive web apps with code & creativity ⚡
      </p>
      <button className="px-6 py-3 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition">
        Ask Me Anything 🤖
      </button>
    </motion.div>
  );
};

export default Hero;

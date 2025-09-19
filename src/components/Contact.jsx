const Contact = () => {
  return (
    <div className="flex justify-center gap-8 text-lg">
      <a
        href="https://github.com/AmanShaikh33"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-gray-100 transition"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/aman-shaikh-02b241317/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-400 transition"
      >
        LinkedIn
      </a>

      <a
        href="https://drive.google.com/file/d/14onHD8jvEpqwZ0p64_bovSsisFE8lDpu/view?usp=sharing" // place your PDF in public folder or use a direct link
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-400 transition"
      >
        Resume
      </a>
    </div>
  );
};

export default Contact;

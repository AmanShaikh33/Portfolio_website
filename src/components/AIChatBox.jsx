import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend } from "react-icons/fi";

const AIChatBox = () => {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi 👋 Ask me anything about Aman’s profile!" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const handleSend = async () => {
    const question = input.trim();
    if (!question) return;

    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setTyping(true);

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "ai", text: data.reply || "I couldn’t get a reply, please try again." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ Server unreachable. Try later." },
      ]);
    } finally {
      setTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="aichatbot" className="flex justify-center">
      <div
        className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl rounded-2xl
                   border border-cyan-500/20 shadow-xl flex flex-col h-[32rem]"
      >
        <h2 className="text-2xl font-bold text-center py-4
                       bg-gradient-to-r from-cyan-400 to-purple-400
                       bg-clip-text text-transparent">
          AI Q&A Assistant
        </h2>

        {/* Chat Messages */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto px-4 space-y-4 pb-4 scrollbar-thin scrollbar-thumb-gray-700"
        >
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white self-end ml-auto"
                    : "bg-gray-800 text-gray-100 self-start"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
          </AnimatePresence>

          {typing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-xl w-24"
            >
              typing...
            </motion.div>
          )}
        </div>

        {/* Input */}
        <div className="flex items-center p-4 border-t border-gray-800">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Aman Shaikh..."
            className="flex-1 p-3 bg-gray-800 border border-gray-700 rounded-xl
                       focus:outline-none focus:border-cyan-500
                       text-sm text-gray-200 resize-none h-12"
          />
          <button
            onClick={handleSend}
            className="ml-3 p-3 rounded-full bg-gradient-to-r
                       from-cyan-500 to-purple-500 hover:opacity-90
                       transition text-white"
          >
            <FiSend size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AIChatBox;

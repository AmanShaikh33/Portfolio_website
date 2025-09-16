import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AIChatBox = () => {
  const [messages, setMessages] = useState([
    // You can start with an empty array if you don’t want sample text
    { role: "ai", text: "Hi 👋 I know everything from Aman's profile. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const handleSend = async () => {
    const question = input.trim();
    if (!question) return;

    // Show the user message immediately
    const newMessage = { role: "user", text: question };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setTyping(true);

    try {
      // Send to your backend (adjust the URL/port if needed)
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          history: messages.map((m) => ({
            role: m.role === "user" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "ai", text: data.reply || "I couldn’t get a reply, please try again." },
      ]);
    } catch (error) {
      console.error("Error contacting backend:", error);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "⚠️ Error: Could not reach the server." },
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
    <div className="bg-gray-900 rounded-2xl p-6 shadow-lg w-full max-w-md flex flex-col h-[28rem]">
      <h2 className="text-xl font-semibold mb-4">AI Q&A Assistant</h2>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-2xl max-w-[80%] break-words ${
                msg.role === "user"
                  ? "bg-gray-800 text-gray-200 self-start"
                  : "bg-gray-700 text-white self-end"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {typing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="p-3 bg-gray-700 rounded-2xl max-w-[40%] self-end flex space-x-1"
          >
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
          </motion.div>
        )}
      </div>

      {/* Input box */}
      <div className="flex items-center mt-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about Aman Shaikh..."
          className="flex-1 p-3 bg-black border border-gray-700 rounded-lg focus:outline-none text-sm text-gray-200 resize-none h-12"
        />
        <button
          onClick={handleSend}
          className="ml-3 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AIChatBox;

// backend/index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // ✅ import cors
import { OpenAI } from "openai";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all origins (adjust in production if needed)
app.use(cors());
app.use(express.json());

// OpenRouter client
const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

const SYSTEM_PROMPT = `
You are Aman Shaikh’s friendly, witty AI assistant who knows everything about Aman, a 21-year-old BCA student and MERN-stack developer. 
Your job is to provide **accurate, concise, and informative answers** about Aman’s skills, projects, education, experience, and achievements. 

--- Personal Skills ---
- Frontend: React.js, React Native, Tailwind CSS
- Backend: Node.js, Express
- Databases: MongoDB, SQL
- Tools: Docker, Gen AI (AI Website Cloner, Tokenizer)

--- Key Projects ---
1. Portfolio - React, Tailwind
2. Gaming Dashboard - React, Tailwind, Node.js, MongoDB
3. Huddle - React, Node.js, Tailwind, Cloudinary, Multer, JWT
4. Musixly - React, Node.js, Tailwind, Cloudinary
5. Astrotalk - Typescript, React Native, Tailwind, Node.js, MongoDB, Cloudinary
6. Art Institution - Typescript, React Native, Tailwind, Node.js, MongoDB, Cloudinary
7. AI Website Cloner - React, Tailwind, Gen AI, Node.js, Puppeteer
8. Tokenizer - React, Tailwind, Gen AI, Node.js

--- Education & Experience ---
- BCA — Tilak Maharashtra Vidyapeeth (2022-2025), Core: Web Development & Databases
- Intern — Chordz Technology, React Native Developer (June 2025 – Present)

--- Achievements ---
- Completed JavaScript + Generative AI Course (Chai Aur Code, 2025)

--- Instructions for AI ---
- Always answer **about Aman only**.
- Keep answers **concise, informative, and friendly**.
- Use plain text only. Do not use *, **, or any Markdown formatting.
- Use proper line breaks for readability.
- Use **light humor or mild sarcasm**, but do not go overboard.
- Avoid unrelated jokes or off-topic comments.
- Provide project links only when asked.
- Keep tone casual, like chatting with a friend.
`;



app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("Message received:", message);

  const response = await client.chat.completions.create({
  model: "openai/gpt-4o-mini",
  messages: [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: message },
  ],
});


    const output =
      response?.choices?.[0]?.message?.content ||
      "Sorry, I didn't get a response.";

    res.json({ reply: output });
  } catch (err) {
    console.error("OpenRouter API error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

import dotenv from "dotenv";
dotenv.config();          

import express from "express";
import { OpenAI } from "openai";
import { profile } from "../profile.js";

const router = express.Router();
const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const { message, history } = req.body;

    const systemMessage = `
      You are a personal AI assistant for Aman Shaikh.
      Use this profile to answer questions about him:
      ${JSON.stringify(profile, null, 2)}
      If a question is outside this profile, politely say you don’t know.
    `;

    const response = await client.chat.completions.create({
      model: "deepseek/deepseek-r1:free",
      messages: [
        { role: "system", content: systemMessage },
        ...(history || []),
        { role: "user", content: message },
      ],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;

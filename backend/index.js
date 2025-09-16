import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";        // <— add

import chatRoute from "./routes/chatRoute.js";

const app = express();
app.use(cors());                // <— allow frontend to call it
app.use(express.json());

app.use("/chat", chatRoute);    // endpoint: http://localhost:5000/chat

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

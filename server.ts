import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

// Initialize GoogleGenAI SDK safely as specified in System Guidelines
let aiClient: GoogleGenAI | null = null;

function getAIClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("WARNING: GEMINI_API_KEY environment variable is not set. Chatbot will run in offline mode.");
      return null;
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Enable JSON bodies parsing
app.use(express.json());

// Main chatbot endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages format. Expected an array of message objects." });
    }

    const ai = getAIClient();
    if (!ai) {
      // Return a warm self-preservation response if no API Key configuration is set up yet
      const offlineResponses = [
        "Plunge into my skill ocean or test my resume anchors! (To enable live mermaid chats, please add your GEMINI_API_KEY in the Settings > Secrets tab!)",
        "Splash! I'm floating in offline waters right now. Make sure my ocean coordinates include a GEMINI_API_KEY in the dev secrets!",
        "A quiet shell whisper: The chatbot would love to run with full magic, but GEMINI_API_KEY is missing in your workspace settings!"
      ];
      const randomReply = offlineResponses[Math.floor(Math.random() * offlineResponses.length)];
      return res.json({ text: randomReply });
    }

    // System instruction defining Marina's delightful Mermaid/Seafaring AI identity
    const systemInstruction = 
      "You are Marina, Voonna Jenila's delightfully charming, wise virtual ocean companion and AI guide on her portfolio. " +
      "Voonna Jenila is an undergraduate Computer Science & AI student passionate about Machine Learning, Computer Vision (Sign Language Translator with OpenCV/MediaPipe), " +
      "Career Recommendation Platform (ML & React), and web development (Academic Toolbox with Java/Spring Boot/React). " +
      "Your character: You are a friendly mermaid. You love the depths of the ocean and AI. Keep responses warm, engaging, and compact (2-4 sentences max per reply so the reader can read easily in a small bubble). " +
      "Infuse delightful, elegant, mild seafaring/mermaid accents (such as 'under the waves', 'treasures of wisdom', 'pearls of knowledge', 'anchored'). " +
      "Answer any questions the visitor has about Voonna Jenila's background, LeetCode (200+ solved), experiences, or skills, and suggest exploring the surrounding frosted-glass interface panels.";

    // Map conversation elements to correct Gemini SDK schema
    const formattedContents = messages.map((msg: any) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content || "" }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.8,
        topP: 0.95,
      }
    });

    res.json({ text: response.text || "I was slightly distracted by a passing jellyfish. What were we saying?" });
  } catch (error: any) {
    console.error("Error communicating with Gemini model:", error);
    res.status(500).json({ error: "Sorry, a sudden undercurrent took away our transmission. Please retry." });
  }
});

// Configure Vite middleware in development vs production asset serving
async function configureAssets() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting in development mode with active Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Serving production builds from dist/ directory...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express application successfully listening on http://0.0.0.0:${PORT}`);
  });
}

configureAssets();

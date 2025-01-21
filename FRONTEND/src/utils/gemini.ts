import axios from "axios";
import { geminiAPI } from "../config/env";

export async function generateTextGemini(prompt: string): Promise<string> {
  if (!geminiAPI) {
    throw new Error("Gemini API key is not defined");
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiAPI}`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }
    );

    // Extracting the response
    const candidates = response.data?.candidates;
    if (candidates && candidates.length > 0) {
      const contentParts = candidates[0]?.content?.parts;
      if (contentParts && contentParts.length > 0) {
        const generatedText = contentParts[0]?.text || "No content generated.";
        return generatedText;
      }
    }

    throw new Error("Unexpected response structure or no content generated.");
  } catch (error) {
    console.error("Error fetching from Gemini API:", error);
    throw new Error("Failed to generate text");
  }
}

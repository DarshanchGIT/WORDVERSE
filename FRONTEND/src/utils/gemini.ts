import { GoogleGenAI } from "@google/genai";
import { geminiAPI } from "../config/env";

const ai = new GoogleGenAI({
  apiKey: geminiAPI
});

export async function generateTextGemini(prompt: string): Promise<string> {

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    console.log("Gemini Output:", response);
    const text = response.text;

    if (!text) throw new Error("No response from Gemini API");

    return text;
  } catch (error) {
    console.error("Error generating text:", error);
    throw new Error("Failed to generate text using Gemini API");
  }
}

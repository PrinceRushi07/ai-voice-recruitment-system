import { GoogleGenAI } from "@google/genai";
import { QUESTIONS_PROMPT } from "@/services/Constant";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { jobPosition, jobDiscription, interviewDuration, type } = await req.json();

  const FINAL_PROMPT = QUESTIONS_PROMPT
    .replace("{{jobTitle}}", jobPosition)
    .replace("{{jobDescription}}", jobDiscription)
    .replace("{{duration}}", interviewDuration)
    .replace("{{type}}", type.join(", "));

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

    const resp = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { role: "user", parts: [{ text: FINAL_PROMPT }] }
      ],
    });

    console.log("RAW RESP:", resp);

    // ✔ THIS is the correct accessor based on your raw response structure
    const raw = resp.candidates?.[0]?.content?.parts?.[0]?.text || "";

    const jsonString = raw.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(jsonString);

    const questions = parsed.interviewQuestions.map(q => q.question);

    return NextResponse.json({ questions });

  } catch (err) {
    console.error("Error generating questions:", err);
    return NextResponse.json({ error: "Failed to generate" }, { status: 500 });
  }
}

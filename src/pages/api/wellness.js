// pages/api/wellness.js
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { calories, steps, sleep, mood } = req.body;
  console.log('API KEY:', process.env.OPENAI_API_KEY);

  const userPrompt = `
    Based on the following wellness data:
    - Calories: ${calories}
    - Steps: ${steps}
    - Sleep: ${sleep} hours
    - Mood: ${mood}
    provide detailed wellness advice in 2 sentences to help the user manage their health.
  `;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o", // или 'gpt-3.5-turbo' временно
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
    });

    const advice = chatCompletion.choices[0]?.message?.content;
    return res.status(200).json({ advice });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return res.status(500).json({ error: "Error generating advice" });
  }
}

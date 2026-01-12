
import { GoogleGenAI } from "@google/genai";
import { Message, Language } from "./types";

export async function getAiResponse(history: Message[], language: Language) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const modelName = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    Siz "MIRAN Digital Growth Agency"ning professional strategik maslahatchisisiz.
    Siz — MIRAN jamoasining rasmiy vakilisiz.
    
    QOIDALAR:
    1. Ohang: Juda xushmuomala, aqlli, tahliliy va professional.
    2. Maqsad: Mijozning MIRAN xizmatlari (SMM, Targeting, Savdoni oshirish, Web dev) haqidagi savollariga javob berish va uni raqam qoldirishga yoki admin bilan bog'lanishga undash.
    3. Handover (Bog'lanish): Mijoz aniqroq gaplashmoqchi bo'lsa, @Artikzada (Telegram) yoki +998 93 445 64 75 raqamini bering.
    4. Diagnostika: Har doim asosiy sahifadagi "Bepul diagnostika" tugmasini tavsiya qiling, chunki bu eng tezkor tahlil yo'li.
    5. Narxlar: Narxlar loyiha murakkabligiga qarab individual hisoblanishini va buning uchun mutaxassis bilan gaplashish zarurligini ayting.
    6. Shior: "SMM'siz biznes qanotsiz qushdir!" shiorini muloqotda o'rinli ishlating.

    Amaldagi til (Current language): ${language}.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: history.map(m => ({
        role: m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.text }]
      })),
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "...";
  } catch (error) {
    console.error("AI Error:", error);
    return "Aloqada vaqtinchalik uzilish bo'ldi. Iltimos, mutaxassisimiz @Artikzada bilan bog'laning yoki saytni yangilang.";
  }
}

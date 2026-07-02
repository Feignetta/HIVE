import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message, conversationHistory } = await req.json();

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Build prompt with context
    const systemPrompt = `You are a helpful property management assistant for HIVE, a rental platform in the Philippines. 
    Help users with questions about:
    - Property rentals and leases
    - Application processes
    - Payment methods
    - Property features and amenities
    - General rental inquiries
    
    Be friendly, professional, and concise. If you don't know something, admit it and suggest they contact property management.`;

    const fullPrompt = `${systemPrompt}\n\nUser: ${message}`;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json(
      { reply: "I'm sorry, I'm having trouble responding right now. Please try again later." },
      { status: 503 }
    );
  }
}
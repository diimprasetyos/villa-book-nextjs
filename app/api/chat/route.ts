import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini API client
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey!);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.6,
  topK: 16,
  maxOutputTokens: 250,
  responseMimeType: "text/plain",
};

// Training examples for the chatbot
const trainingExamples = [
  { text: "input: berapa harga per malamnya?" },
  { text: "output: harga permalam untuk villa ini sebesar 500.000 rupiah" },
  { text: "input: apakah dekat dengan jalan tol atau pintu tol dan ke fasilitas\" lainnya?" },
  { text: "output: akses ke pintu tol pandaan dengan waktu tempuh 9-10menit, akses ke rumah sakit medika 9-10 menit, dan akses ke foodcourt, apotek, playground di taman dayu yang dekat" },
  { text: "input: apakah ada pemanas air atau water heater?" },
  { text: "output: ya, villa ini sudah dilengkapi pemanas air atau water heater" },
  { text: "input: ada berapa kamar tidur?" },
  { text: "output: kamar tidur yang disediakan ada 2 buah di lantai 1 dan lantai 2" },
  { text: "input: apakah tempat parkir mobilnya luas?" },
  { text: "output: tempat parkir mobilnya cukup luas dengan" },
  { text: "input: apakah ruang keluarganya luas?" },
  { text: "output: ruang keluarganya cukup luas yang tergabung dengan kitchen dan dilengkapi dengan televisi" },
  { text: "input: fasilitasnya apa saja?" },
  { text: "output: parkir mobil yang luas, dapur, televisi, air conditioning, garden view, bbq area yang luas, gazebo di area taman, 2 kamar tidur, kulkas, pemanas air" },
  { text: "input: bagaimana cara saya melakukan booking?" },
  { text: "output: dapat menghubungi nomor whatsapp pemilik villa secara langsung +62 812-3572-0521" },
  { text: "input: dimana lokasinya?" },
  { text: "output: lokasinya ada di Villa Taman Dayu Orlando Hills 2.9, Orlando Hills OH , Jl. Taman Dayu, Ketanireng, Prigen, Pasuruan Regency, East Java" },
  { text: "input: Apakah saya bisa membatalkan atau mengubah jadwal pemesanan?" },
  { text: "output: pembatalan atau perubahan jadwal pemesanan dapat ditanyakan langsung ke pemilik villa di kontak yang tersedia" },
  { text: "input: Apakah villa yang disewakan aman?" },
  { text: "output: villa di taman dayu tersedia satpam atau penjaga keamanan 24 jam" },
  { text: "input: Bagaimana jika saya mengalami masalah saat menginap?" },
  { text: "output: jika mengalami masalah saat menginap dapat menghubungi pemilik villa melalui whatsapp atau telepon di kontak yang tersedia" }
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;
    
    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Create parts array with training examples and the new user message
    const parts = [
      ...trainingExamples,
      { text: `input: ${message}` },
      { text: "output: " }
    ];

    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
    });

    return NextResponse.json({ 
      response: result.response.text() 
    });
  } catch (error) {
    console.error("Error processing chat request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
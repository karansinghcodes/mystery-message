import { GoogleGenerativeAI } from "@google/generative-ai";

export async function GET(request: Request) {
  const genAI = new GoogleGenerativeAI(
    process.env.GOOGLE_GENERATIVE_AI_API_KEY as string
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  try {
    const prompt =
      "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment. Also check if the message you provided should not match with the messages you provided just before that and if so then change the messages";

    const result = await model.generateContent(prompt);

    const response = result.response.text();
    const messages = response.split("||");
  
    return Response.json(
      {
        success: true,
        messages: messages,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("error in api communication", error);
    return Response.json(
      {
        success: false,
        message: "error communicating through gemini api",
      },
      {
        status: 500,
      }
    );
  }
}

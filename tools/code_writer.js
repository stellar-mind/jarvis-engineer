// tools/code_writer.js
import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function code_writer(input) {
  const prompt = `Crie um componente funcional em React Native com as seguintes especificações:

  - Deve ser chamado de "Button"
  - Deve receber as seguintes props: text (string), color (string), onPress (função)
  - Deve aplicar a cor recebida como backgroundColor
  - Deve centralizar o texto dentro do botão
  - Deve executar onPress ao ser pressionado

Retorne apenas o código do componente, sem explicações.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "Você é um desenvolvedor especialista em React Native." },
        { role: "user", content: prompt }
      ],
      temperature: 0.3,
      max_tokens: 500
    });

    const generatedCode = completion.choices[0].message.content.trim();
    return generatedCode;
  } catch (error) {
    console.error("Erro ao gerar código com OpenAI:", error);
    return null;
  }
}

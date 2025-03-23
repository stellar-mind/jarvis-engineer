// tools/file_manager.ts

import fs from "fs";
import path from "path";

interface FileInput {
  path: string;
  content_from?: string;
  content?: string;
}

export default function file_manager(input: FileInput, last_output?: string): { success: boolean; path?: string; error?: string } {
  const filePath = path.resolve(input.path);
  const content = (input.content_from === "last_output" ? last_output : input.content)
    ?.replace(/```[a-z]*\n?|```/g, '').trim();

  if (!content) {
    console.error("❌ Nenhum conteúdo para salvar.");
    return { success: false, error: "Conteúdo ausente." };
  }

  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Arquivo salvo: ${filePath}`);
    return { success: true, path: filePath };
  } catch (error: any) {
    console.error("❌ Erro ao salvar o arquivo:", error);
    return { success: false, error: error.message };
  }
}

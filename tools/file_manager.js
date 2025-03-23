// tools/file_manager.js

import fs from "fs";
import path from "path";

/**
 * Salva o conteúdo em um arquivo.
 * @param {Object} input - Objeto com informações do caminho e conteúdo.
 * @param {string} input.path - Caminho onde o arquivo será salvo.
 * @param {string} input.content_from - Origem do conteúdo (ex: 'last_output').
 * @param {string} [input.content] - Conteúdo direto (opcional se usar last_output).
 * @param {string} last_output - Conteúdo gerado anteriormente (caso use 'last_output').
 * @returns {Object} Resultado da operação.
 */
export default function file_manager(input, last_output) {
  const filePath = path.resolve(input.path);
  const content = input.content_from === "last_output" ? last_output : input.content;

  if (!content) {
    console.error("❌ Nenhum conteúdo para salvar.");
    return { success: false, error: "Conteúdo ausente." };
  }

  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Arquivo salvo: ${filePath}`);
    return { success: true, path: filePath };
  } catch (error) {
    console.error("❌ Erro ao salvar o arquivo:", error);
    return { success: false, error };
  }
}

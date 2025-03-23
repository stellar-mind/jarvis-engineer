// tools/test_runner.js


import { execSync } from "child_process";
import path from "path";



/**
 * Executa os testes automatizados do projeto com Jest.
 * @param {string} testPath - Caminho da pasta ou arquivo de teste (opcional).
 * @returns {Object} Resultado da execução dos testes.
 */
export default function test_runner(testPath = "") {
  try {
    const jestCommand = testPath
      ? `npx jest ${path.resolve(testPath)} --passWithNoTests`
      : `npx jest --passWithNoTests`;

    const output = execSync(jestCommand, { encoding: "utf-8", stdio: "pipe" });
    console.log("✅ Testes executados com sucesso:\n", output);
    return { success: true, output };
  } catch (error) {
    console.error("❌ Erros nos testes:", error.stdout?.toString() || error.message);
    return { success: false, error: error.stdout?.toString() || error.message };
  }
}


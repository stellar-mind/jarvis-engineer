// tools/github_committer.js

import { execSync } from "child_process";

/**
 * Cria branch, faz commit e push para o GitHub.
 * @param {string} message - Mensagem de commit.
 * @param {string} branch - Nome da branch.
 * @returns {Object} Resultado da operação.
 */
export default function github_committer(message, branch = "feature/auto-commit") {
  try {
    console.log("📦 Criando branch e preparando commit...");

    execSync(`git checkout -b ${branch}`, { stdio: "inherit" });
    execSync(`git add .`, { stdio: "inherit" });
    execSync(`git commit -m "${message}"`, { stdio: "inherit" });
    execSync(`git push -u origin ${branch}`, { stdio: "inherit" });

    console.log("✅ Código enviado com sucesso para o GitHub!");
    return { success: true, branch };
  } catch (error) {
    console.error("❌ Erro ao fazer commit/push:", error.message);
    return { success: false, error: error.message };
  }
}

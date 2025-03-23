// tools/github_committer.ts

import { execSync } from "child_process";

export default function github_committer(message: string, branch: string = "feature/auto-commit"): { success: boolean; branch?: string; error?: string } {
  try {
    console.log("📦 Criando branch e preparando commit...");

    execSync(`git checkout -b ${branch}`, { stdio: "inherit" });
    execSync(`git add .`, { stdio: "inherit" });
    execSync(`git commit -m \"${message}\"`, { stdio: "inherit" });
    execSync(`git push -u origin ${branch}`, { stdio: "inherit" });

    console.log("✅ Código enviado com sucesso para o GitHub!");
    return { success: true, branch };
  } catch (error: any) {
    console.error("❌ Erro ao fazer commit/push:", error.message);
    return { success: false, error: error.message };
  }
}
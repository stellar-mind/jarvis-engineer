// tools/github_committer.ts

import { execSync } from "child_process";

export default function github_committer(
  message: string,
  branch: string = "feature/auto-commit"
): { success: boolean; branch?: string; error?: string } {
  try {
    console.log("📦 Preparando commit para a branch:", branch);

    // Verifica se a branch já existe localmente
    const branches = execSync("git branch", { encoding: "utf-8" });
    const branchExists = branches.split("\n").some(b => b.trim().replace(/^\*\s*/, "") === branch);

    if (!branchExists) {
      execSync(`git checkout -b ${branch}`, { stdio: "inherit" });
    } else {
      execSync(`git checkout ${branch}`, { stdio: "inherit" });
    }

    execSync(`git add .`, { stdio: "inherit" });
    execSync(`git commit -m \"${message}\"`, { stdio: "inherit" });
    execSync(`git pull origin ${branch}`, { stdio: "inherit" });
    execSync(`git push -u origin ${branch}`, { stdio: "inherit" });

    console.log("✅ Código enviado com sucesso para o GitHub!");
    return { success: true, branch };
  } catch (error: any) {
    console.error("❌ Erro ao fazer commit/push:", error.message);
    return { success: false, error: error.message };
  }
}
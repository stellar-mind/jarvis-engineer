// tools/test_runner.ts
import { execSync } from "child_process";
import path from "path";
export default function test_runner(testPath = "") {
    try {
        const jestCommand = testPath
            ? `npx jest ${path.resolve(testPath)} --passWithNoTests`
            : `npx jest --passWithNoTests`;
        const output = execSync(jestCommand, { encoding: "utf-8", stdio: "pipe" });
        console.log("✅ Testes executados com sucesso:\n", output);
        return { success: true, output };
    }
    catch (error) {
        const message = error.stdout?.toString() || error.message;
        console.error("❌ Erros nos testes:", message);
        return { success: false, error: message };
    }
}

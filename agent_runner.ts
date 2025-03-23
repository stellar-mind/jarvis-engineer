// agent_runner.ts

import fs from "fs";
import path from "path";
import code_writer from "./tools/code_writer.js";
import file_manager from "./tools/file_manager.js";
import test_runner from "./tools/test_runner.js";
import github_committer from "./tools/github_committer.js";
import { MCPContext } from "./types/types";

const contextPath = path.resolve("mcp/mcp_context.json");

async function runAgent() {
  const context: MCPContext = JSON.parse(fs.readFileSync(contextPath, "utf8"));
  let last_output: any = "";

  for (const action of context.actions) {
    console.log(`\n▶️ Executando ação: ${action.type}`);
    switch (action.type) {
      case "generate_code":
        last_output = await code_writer(action.input);
        break;

      case "write_file":
        file_manager(action.input, last_output);
        break;

      case "run_tests":
        test_runner();
        break;

      case "commit_code":
        github_committer(action.input, context.state.branch);
        break;

      default:
        console.warn(`⚠️ Tipo de ação não reconhecido: ${action.type}`);
        break;
    }
  }

  console.log("\n✅ Todas as ações foram concluídas.");
}

runAgent();
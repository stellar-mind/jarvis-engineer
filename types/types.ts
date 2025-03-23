export interface Tool {
    name: string;
    description: string;
  }
  
  export interface Action {
    type: string;
    tool: string;
    input: any;
  }
  
  export interface MCPState {
    current_task: string;
    files: string[];
    branch: string;
    branch_strategy?: 'isolated' | 'single';
  }
  
  export interface MCPContext {
    goals: string[];
    history: any[];
    tools: Tool[];
    state: MCPState;
    actions: Action[];
  }
  
  export type AgentFunction = (input: any, context?: { last_output?: any; state?: MCPState }) => Promise<any> | any;
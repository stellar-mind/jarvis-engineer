# 🤖 Agente Dev Sênior com MCP

Este projeto é um agente automatizado baseado no **Model Context Protocol (MCP)**. Ele gera, salva, testa e comita código React Native com base em objetivos definidos.

---

## ⚙️ Tecnologias Utilizadas

- Node.js 18+ (modo ES Modules)
- OpenAI API (GPT-4)
- Jest (para testes automatizados)
- Git + GitHub CLI (para commits e push)
- MCP (Model Context Protocol) para controle de contexto e ações

---

## 📁 Estrutura do Projeto

```
.
├── agent_runner.js          # Executor principal de ações
├── mcp/
│   └── mcp_context.json     # Contexto do agente com goals, actions e tools
├── tools/
│   ├── code_writer.js       # Gera código com OpenAI
│   ├── file_manager.js      # Salva arquivos localmente
│   ├── test_runner.js       # Executa testes com Jest
│   └── github_committer.js  # Faz commit/push para GitHub
├── tests/
│   └── Button.test.js       # Teste automatizado do componente gerado
├── .env                     # Chave da API da OpenAI
└── package.json
```

---

## 🚀 Como executar

### 1. Clonar o projeto
```bash
git clone <seu-repo>
cd <nome-da-pasta>
```

### 2. Instalar dependências
```bash
npm install openai dotenv
npm install --save-dev jest @testing-library/react-native react-test-renderer
```

### 3. Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz com:
```
OPENAI_API_KEY=sk-seu-token-aqui
```

### 4. Executar o agente
```bash
node agent_runner.js
```

> O agente irá:
> 1. Gerar um componente React Native (botão)
> 2. Salvar o arquivo
> 3. Executar testes automatizados
> 4. Fazer commit e push para o GitHub

---

## 🧠 Sobre o MCP (Model Context Protocol)

O `mcp_context.json` define:
- `goals`: objetivo do agente
- `tools`: ferramentas que ele pode usar
- `state`: estado atual da execução
- `actions`: plano de ações passo a passo

Esse modelo permite escalabilidade para sistemas multi-agentes.

---

## 📌 Requisitos
- Node.js 18 ou superior
- Conta na OpenAI com API Key
- Git configurado com acesso ao repositório remoto

---

## ✅ Roadmap futuro
- Integração com Figma (via API ou OCR)
- Interface visual (CLI interativo ou Web)
- Armazenamento de memória de agente
- Suporte a múltiplos componentes ou projetos

---

Criado por Glaucio Daniel (Jarvis Mode ⚙️)
# Sammler SDKs

This repository contains the official client SDKs for interacting with the Sammler GraphQL API, available in both **TypeScript/JavaScript** and **Python**.

Both clients are generated from a shared schema and operations file to guarantee API parity and consistency.

---

## Directory Structure

```text
├── graphql/              # Shared GraphQL queries & operations
│   └── operations.graphql
├── typescript/           # TypeScript/JavaScript SDK source & configuration
├── python/               # Python SDK source & configuration
└── examples/             # Side-by-side examples using both SDKs
```

---

## Code Generation

When queries inside `graphql/operations.graphql` change, you must regenerate the clients:

### TypeScript SDK
```bash
cd typescript
npm install
npm run codegen
npm run build
```

### Python SDK
Ensure you are inside a virtual environment:
```bash
cd python
python3 -m venv .venv
source .venv/bin/activate
pip install "ariadne-codegen[http]" pydantic httpx
ariadne-codegen
```


# Sammler SDKs

[sammler.io](https://sammler.io/) is an application for cataloging and tracking personal collections.

Users with developer access can use the sdk's provided from this repo to interact with the sammler programatically.

* [typescript usage](./typescript/README.md)
* [python usage](./python/README.md)
* [examples](./examples/)


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


# SDK Usage Examples

This directory contains standalone example scripts demonstrating how to use the Sammler SDKs in both TypeScript and Python.

## TypeScript Examples

### Prerequisites
Make sure the TypeScript SDK is built:
```bash
cd typescript
npm install
npm run build
```

### Running the Example
```bash
cd examples/typescript
npm install
npm start
```
You can optionally set the `SAMMLER_API_KEY` environment variable:
```bash
SAMMLER_API_KEY=your_key npm start
```

---

## Python Examples

### Prerequisites
Set up a Python virtual environment and install the SDK in editable mode:
```bash
cd python
python3 -m venv .venv
source .venv/bin/activate
pip install -e .
```

### Running the Example
From the `examples/python` directory inside your active virtual environment:
```bash
cd examples/python
python example.py
```
Or with an environment variable:
```bash
SAMMLER_API_KEY=your_key python example.py
```

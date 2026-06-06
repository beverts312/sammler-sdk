# Sammler Python SDK

Python client for interacting with the Sammler GraphQL API.

## Installation

```bash
pip install .
```

## Code Generation

To regenerate the client using `ariadne-codegen`:

```bash
# Set up a virtual environment
python3 -m venv .venv
source .venv/bin/activate

# Install tools
pip install ariadne-codegen[http]

# Generate client
ariadne-codegen
```

## Usage

```python
import asyncio
from sammler import SammlerClient

async def main():
    async with SammlerClient(api_key="your_api_key") as client:
        collections = await client.get_collections()
        for col in collections:
            print(col.name)

if __name__ == "__main__":
    asyncio.run(main())
```

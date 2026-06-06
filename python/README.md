# Sammler Python SDK

The official Python SDK for interacting with the [Sammler](https://sammler.io/) GraphQL API. 

This SDK is async-first, type-safe, and powered by `httpx` and `pydantic`. It allows developer-tier Sammler users to programmatically manage, query, and update their personal collections.

## Features

- **Async/Await Support**: Built on top of `httpx` for efficient, non-blocking network calls.
- **Type Safety**: All responses are fully parsed into Pydantic models for auto-completion and compile-time checks.
- **Developer Profile Integration**: Direct access to your collections, items, and profile details using your Sammler API key.

## Installation

Install the package via `pip` from PyPI:

```bash
pip install sammler-sdk
```

## Quick Start

To use the SDK, you need a Sammler API Key. Once you have it, you can instantiate the client as an async context manager:

```python
import asyncio
from sammler import SammlerClient

async def main():
    # Initialize the client with your API key
    async with SammlerClient(api_key="your_sammler_api_key") as client:
        # Retrieve all of your collections
        collections = await client.get_collections()
        
        print(f"Found {len(collections)} collection(s):")
        for collection in collections:
            print(f"- {collection.name}: {collection.description or 'No description'}")

if __name__ == "__main__":
    asyncio.run(main())
```

## Available SDK Methods

The `SammlerClient` exposes high-level async methods matching the Sammler API:

- **`get_current_user()`**: Retrieve the authenticated developer user's profile info (ID, name, email, tier, etc.).
- **`get_collections()`**: Retrieve all collections belonging to the authenticated user.
- **`get_collection(id: str)`**: Retrieve a specific collection by its ID, including all items inside it.
- **`get_items()`**: Retrieve all collection items across all collections.
- **`get_item(id: str)`**: Retrieve a single item by its ID, including details about its parent collection.

### Raw client access
If you need direct access to the underlying raw queries/operations without wrapper methods, you can use `client.raw_client`.

## Code Generation & Development

If you want to modify queries or develop/contribute to the SDK:

1. Clone the repository and set up a virtual environment:
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```
2. Install the package in editable mode with development dependencies:
   ```bash
   pip install -e .
   pip install "ariadne-codegen[http]"
   ```
3. Update queries in `graphql/operations.graphql` and run codegen:
   ```bash
   ariadne-codegen
   ```

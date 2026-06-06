# Sammler TypeScript/JavaScript SDK

The official TypeScript/JavaScript SDK for interacting with the [Sammler](https://sammler.io/) GraphQL API. 

This SDK is fully typed, async-first, and powered by `graphql-request`. It allows developer-tier Sammler users to programmatically manage, query, and update their personal collections.

## Features

- **TypeScript Native**: Full auto-complete and type safety for all queries, responses, and parameters.
- **Promise-Based**: Async-first API matching modern JavaScript/TypeScript standards.
- **Flexible Configuration**: Supports custom GraphQL endpoints and custom headers for flexible integration.

## Installation

Install the package via `npm` (or your preferred package manager):

```bash
npm install sammler-sdk
```

Or via yarn:
```bash
yarn add sammler-sdk
```

Or via pnpm:
```bash
pnpm add sammler-sdk
```

## Quick Start

To use the SDK, you need a Sammler API Key. Once you have it, you can initialize the client and make requests:

```typescript
import { SammlerClient } from 'sammler-sdk';

const client = new SammlerClient({
  apiKey: 'your_sammler_api_key'
});

async function main() {
  try {
    // Retrieve all collections
    const collections = await client.getCollections();
    
    console.log(`Found ${collections.length} collection(s):`);
    for (const collection of collections) {
      console.log(`- ${collection.name}: ${collection.description || 'No description'}`);
    }
  } catch (error) {
    console.error('Failed to fetch collections:', error);
  }
}

main();
```

## Available SDK Methods

The `SammlerClient` exposes high-level async methods matching the Sammler API:

- **`getCurrentUser()`**: Retrieve the authenticated developer user's profile info (ID, name, email, tier, etc.).
- **`getCollections()`**: Retrieve all collections belonging to the authenticated user.
- **`getCollection(id: string)`**: Retrieve a specific collection by its ID, including all items inside it. Returns `null` if not found.
- **`getItems()`**: Retrieve all collection items across all collections.
- **`getItem(id: string)`**: Retrieve a single item by its ID, including details about its parent collection. Returns `null` if not found.

### Raw SDK and Client Access
If you need direct access to the underlying raw operations or GraphQL client:
- **`client.rawSdk`**: Access the raw generated SDK queries/methods.
- **`client.graphQLClient`**: Access the underlying `GraphQLClient` instance (e.g. to update headers dynamically).

## Code Generation & Development

If you want to modify queries or develop/contribute to the SDK:

1. Clone the repository and install dependencies:
   ```bash
   cd typescript
   npm install
   ```
2. Update queries in `graphql/operations.graphql` and run codegen:
   ```bash
   npm run codegen
   ```
3. Build the package:
   ```bash
   npm run build
   ```

import { SammlerClient } from 'sammler-sdk';

async function run() {
  const apiKey = process.env.SAMMLER_API_KEY || 'your_api_key';
  
  // Initialize the client
  const client = new SammlerClient({ apiKey });
  
  console.log('Fetching collections...');
  try {
    const collections = await client.getCollections();
    console.log('Collections successfully retrieved:');
    for (const col of collections) {
      console.log(`- ${col.name} (${col.type})`);
      
      // Let's get the full collection details (including items)
      console.log(`  Fetching collection details for ${col.id}...`);
      const details = await client.getCollection(col.id);
      if (details && details.items) {
        console.log(`  Items in this collection (${details.items.length}):`);
        for (const item of details.items) {
          console.log(`    * ${item.name} (Qty: ${item.quantity})`);
        }
      }
    }
  } catch (err) {
    console.error('An error occurred:', err);
  }
}

run();

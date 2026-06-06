import asyncio
import os
from sammler import SammlerClient

async def main():
    api_key = os.getenv("SAMMLER_API_KEY", "your_api_key")
    
    # Initialize the client with a context manager
    async with SammlerClient(api_key=api_key) as client:
        print("Fetching collections...")
        try:
            collections = await client.get_collections()
            print("Collections successfully retrieved:")
            for col in collections:
                print(f"- {col.name} ({col.type_})")
                
                # Fetch details for the collection including its items
                print(f"  Fetching collection details for {col.id}...")
                details = await client.get_collection(id=col.id)
                if details and details.items:
                    print(f"  Items in this collection ({len(details.items)}):")
                    for item in details.items:
                        print(f"    * {item.name} (Qty: {item.quantity})")
        except Exception as e:
            print(f"An error occurred: {e}")

if __name__ == "__main__":
    asyncio.run(main())

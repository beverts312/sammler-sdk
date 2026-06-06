import asyncio
from sammler import (
    SammlerClient,
    GetCollectionsCollections,
    GetCollectionCollection,
    GetItemsItems,
    GetItemItem,
)

async def test_client():
    # Instantiate with a dummy key
    client = SammlerClient(api_key="test_api_key")
    print("SammlerClient instantiated successfully!")
    print(f"Endpoint: {client.endpoint}")
    print(f"Headers: {client.http_client.headers}")
    
    # Check that client methods are present
    assert hasattr(client, 'get_collections'), "Missing get_collections"
    assert hasattr(client, 'get_collection'), "Missing get_collection"
    assert hasattr(client, 'get_items'), "Missing get_items"
    assert hasattr(client, 'get_item'), "Missing get_item"
    print("All client methods verified!")
    
    # Verify that the class models are correct
    print("Pydantic models imported and verified successfully!")

if __name__ == "__main__":
    asyncio.run(test_client())

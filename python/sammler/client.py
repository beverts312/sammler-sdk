import httpx
from typing import List, Optional, Any
from .graphql.client import Client
from .graphql.get_collections import GetCollectionsCollections
from .graphql.get_collection import GetCollectionCollection
from .graphql.get_items import GetItemsItems
from .graphql.get_item import GetItemItem

class SammlerClient:
    def __init__(
        self,
        api_key: str,
        endpoint: str = "https://sammler-api-3f60d.web.app",
        headers: Optional[dict] = None,
    ):
        self.endpoint = endpoint
        req_headers = {
            "x-api-key": api_key,
            **(headers or {})
        }
        self.http_client = httpx.AsyncClient(headers=req_headers)
        self.client = Client(url=self.endpoint, http_client=self.http_client)

    async def __aenter__(self):
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        await self.close()

    async def close(self):
        await self.http_client.aclose()

    async def get_collections(self) -> List[GetCollectionsCollections]:
        """Retrieve all collections belonging to the authenticated developer profile."""
        response = await self.client.get_collections()
        return response.collections

    async def get_collection(self, id: str) -> Optional[GetCollectionCollection]:
        """Retrieve a single collection by its ID, including all items inside it."""
        response = await self.client.get_collection(id=id)
        return response.collection

    async def get_items(self) -> List[GetItemsItems]:
        """Retrieve all collection items belonging to the authenticated developer profile."""
        response = await self.client.get_items()
        return response.items

    async def get_item(self, id: str) -> Optional[GetItemItem]:
        """Retrieve a single collection item by its ID, including its associated collection."""
        response = await self.client.get_item(id=id)
        return response.item

    @property
    def raw_client(self) -> Client:
        """Exposes the raw underlying generated SDK client methods."""
        return self.client

    @property
    def httpx_client(self) -> httpx.AsyncClient:
        """Exposes the underlying httpx.AsyncClient instance."""
        return self.http_client

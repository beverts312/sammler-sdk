import { GraphQLClient } from 'graphql-request';
import { getSdk, type Sdk } from './graphql/generated/sdk';

export interface SammlerClientOptions {
  /**
   * The developer API Key for authenticating requests to Sammler.
   */
  apiKey: string;
  /**
   * Optional custom GraphQL endpoint.
   * Defaults to 'https://sammler-api-3f60d.web.app'.
   */
  endpoint?: string;
  /**
   * Optional additional headers to include in each request.
   */
  headers?: Record<string, string>;
}

export class SammlerClient {
  private client: GraphQLClient;
  private sdk: Sdk;

  constructor(options: SammlerClientOptions) {
    const endpoint = options.endpoint || 'https://sammler-api-3f60d.web.app';
    const requestHeaders = {
      'x-api-key': options.apiKey,
      ...options.headers,
    };

    this.client = new GraphQLClient(endpoint, {
      headers: requestHeaders,
    });
    this.sdk = getSdk(this.client);
  }

  /**
   * Retrieve all collections belonging to the authenticated developer profile.
   */
  async getCollections() {
    const response = await this.sdk.GetCollections();
    return response.collections;
  }

  /**
   * Retrieve a single collection by its ID, including all items inside it.
   * Returns null if the collection is not found.
   */
  async getCollection(id: string) {
    const response = await this.sdk.GetCollection({ id });
    return response.collection || null;
  }

  /**
   * Retrieve all collection items belonging to the authenticated developer profile.
   */
  async getItems() {
    const response = await this.sdk.GetItems();
    return response.items;
  }

  /**
   * Retrieve a single collection item by its ID, including its associated collection.
   * Returns null if the item is not found.
   */
  async getItem(id: string) {
    const response = await this.sdk.GetItem({ id });
    return response.item || null;
  }

  /**
   * Exposes the raw underlying generated SDK client methods.
   */
  get rawSdk(): Sdk {
    return this.sdk;
  }

  /**
   * Exposes the underlying GraphQLClient instance (e.g. to dynamically update headers).
   */
  get graphQLClient(): GraphQLClient {
    return this.client;
  }
}

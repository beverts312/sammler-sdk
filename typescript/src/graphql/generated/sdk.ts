import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Collection = {
  __typename?: 'Collection';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  items: Array<CollectionItem>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type CollectionItem = {
  __typename?: 'CollectionItem';
  collection: Collection;
  collectionId: Scalars['String']['output'];
  condition?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  photoRef?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  value?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  collection?: Maybe<Collection>;
  collections: Array<Collection>;
  item?: Maybe<CollectionItem>;
  items: Array<CollectionItem>;
  me?: Maybe<User>;
};


export type QueryCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryItemArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  photoURL: Scalars['String']['output'];
  tier: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type GetCollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCollectionsQuery = { __typename?: 'Query', collections: Array<{ __typename?: 'Collection', id: string, userId: string, name: string, description?: string | null, type: string, createdAt: string, updatedAt: string }> };

export type GetCollectionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetCollectionQuery = { __typename?: 'Query', collection?: { __typename?: 'Collection', id: string, userId: string, name: string, description?: string | null, type: string, createdAt: string, updatedAt: string, items: Array<{ __typename?: 'CollectionItem', id: string, collectionId: string, name: string, description?: string | null, quantity: number, value?: number | null, condition?: string | null, notes?: string | null, createdAt: string, updatedAt: string, photoRef?: string | null }> } | null };

export type GetItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetItemsQuery = { __typename?: 'Query', items: Array<{ __typename?: 'CollectionItem', id: string, userId: string, collectionId: string, name: string, description?: string | null, quantity: number, value?: number | null, condition?: string | null, notes?: string | null, createdAt: string, updatedAt: string, photoRef?: string | null }> };

export type GetItemQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetItemQuery = { __typename?: 'Query', item?: { __typename?: 'CollectionItem', id: string, userId: string, collectionId: string, name: string, description?: string | null, quantity: number, value?: number | null, condition?: string | null, notes?: string | null, createdAt: string, updatedAt: string, photoRef?: string | null, collection: { __typename?: 'Collection', id: string, name: string, type: string } } | null };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, username: string, displayName: string, photoURL: string, email: string, createdAt: string, tier: string } | null };


export const GetCollectionsDocument = gql`
    query GetCollections {
  collections {
    id
    userId
    name
    description
    type
    createdAt
    updatedAt
  }
}
    `;
export const GetCollectionDocument = gql`
    query GetCollection($id: ID!) {
  collection(id: $id) {
    id
    userId
    name
    description
    type
    createdAt
    updatedAt
    items {
      id
      collectionId
      name
      description
      quantity
      value
      condition
      notes
      createdAt
      updatedAt
      photoRef
    }
  }
}
    `;
export const GetItemsDocument = gql`
    query GetItems {
  items {
    id
    userId
    collectionId
    name
    description
    quantity
    value
    condition
    notes
    createdAt
    updatedAt
    photoRef
  }
}
    `;
export const GetItemDocument = gql`
    query GetItem($id: ID!) {
  item(id: $id) {
    id
    userId
    collectionId
    name
    description
    quantity
    value
    condition
    notes
    createdAt
    updatedAt
    photoRef
    collection {
      id
      name
      type
    }
  }
}
    `;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  me {
    id
    username
    displayName
    photoURL
    email
    createdAt
    tier
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetCollections(variables?: GetCollectionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetCollectionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCollectionsQuery>({ document: GetCollectionsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetCollections', 'query', variables);
    },
    GetCollection(variables: GetCollectionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCollectionQuery>({ document: GetCollectionDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetCollection', 'query', variables);
    },
    GetItems(variables?: GetItemsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetItemsQuery>({ document: GetItemsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetItems', 'query', variables);
    },
    GetItem(variables: GetItemQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetItemQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetItemQuery>({ document: GetItemDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetItem', 'query', variables);
    },
    GetCurrentUser(variables?: GetCurrentUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetCurrentUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCurrentUserQuery>({ document: GetCurrentUserDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetCurrentUser', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
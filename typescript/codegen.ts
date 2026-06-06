import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://sammler-api-3f60d.web.app',
  documents: '../graphql/operations.graphql',
  generates: {
    'src/graphql/generated/sdk.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request'
      ],
      config: {
        rawRequest: false,
        useTypeImports: true
      }
    }
  }
};

export default config;

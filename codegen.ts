import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  // schema: "graphql/schema/schema.ts",
  schema: "http://localhost:4000/api/graphql",
  require: "ts-node/register",
  documents: "graphql/**/*.graphql",
  generates: {
    // "./generated/gql/": {
    "./generated/graphql/": {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;

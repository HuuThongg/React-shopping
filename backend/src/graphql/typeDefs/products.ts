import gql from "graphql-tag";

const typeDefs = gql`
  type Color {
    alt: String
    img: String
    url: String
  }

  type Product {
    id: ID!
    imgs: [String]
    name: String!
    price: String!
    sizes: [String]
    colors: [Color]
    description: String
  }

  type Query {
    getProducts: [Product]
  }
`;
export default typeDefs;

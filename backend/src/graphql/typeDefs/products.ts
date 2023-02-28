import gql from "graphql-tag";

const typeDefs = gql`
  type Color {
    alt: String
    img: String
    url: String
  }

  type Product {
    id: String!
    imgs: [String]
    name: String!
    price: String!
    sizes: [String]
    colors: [Color]
    description: String
  }

  type Query {
    products: [Product]
  }
  type Query {
    product (productId: ID!): Product
  }
`;
export default typeDefs;

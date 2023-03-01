import gql from "graphql-tag";

const typeDefs = gql`
  type SubProduct {
    id: String
    imgs: [String]
    name: String
    price: String
  }
  type FavoritePopulated {
    id: String
    product: SubProduct
  }
  
  type Query {
    favorite: [FavoritePopulated]
  }

  type Query {
    checkIsAddedFavorite(productId: String!): Boolean
  }

  type Mutation {
    addFavorite(productId: String!): Boolean
  }
  type Mutation {
    removeFavorite(productId: String!): Boolean
  }
`;
export default typeDefs;

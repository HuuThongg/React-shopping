import gql from "graphql-tag";

const typeDefs = gql`
  type Favorites {
    id: String!
    userId: String!
    fav: [Product]
  }
  type Query {
    favorites: Favorites
  }
  type Mutation {
    addFavorite(productId: String!): Favorites
  }
`;
export default typeDefs;

import { gql } from "@apollo/client";

export default {
  Queries: {
    favorite: gql`
      query Favorite {
        favorite {
          id
          product {
            id
            imgs
            name
            price
          }
        }
      }
    `,
    checkIsAddedFavorite: gql`
      query CheckIsAddedFavorite($productId: String!) {
        checkIsAddedFavorite(productId: $productId)
      }
    `,
  },
  Mutations: {
    addFavorite: gql`
      mutation AddFavorite($productId: String!) {
        addFavorite(productId: $productId)
      }
    `,
    removeFavorite: gql`
      mutation RemoveFavorite($productId: String!) {
        removeFavorite(productId: $productId)
      }
    `,
  },
};
import { gql } from "@apollo/client";

export default {
  Queries: {
    products: gql`
      query Products {
        products {
          id
          imgs
          name
          price
          sizes
          description
          colors {
            img
            url
            alt
          }
        }
      }
    `,
    product: gql`
      query Product($productId: ID!) {
        product(productId: $productId) {
          id
          imgs
          name
          price
          sizes
          description
          colors {
            img
            url
            alt
          }
        }
      }
    `,
  },
};
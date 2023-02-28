import { gql } from "@apollo/client";

export default {
  Queries: {
    getProducts: gql`
      query Query {
        getProducts {
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
import merge from "lodash.merge";

import exampleResolvers from "./example";
import productsResolvers from "./products";
import favoritesResolvers from "./favorites";
const resolvers = merge(
  {},
  exampleResolvers,
  productsResolvers,
  favoritesResolvers
);

export default resolvers;

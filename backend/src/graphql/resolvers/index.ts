import merge from "lodash.merge";

import exampleResolvers from "./example";
import productsResolvers from "./products";
const resolvers = merge({}, exampleResolvers, productsResolvers);

export default resolvers;

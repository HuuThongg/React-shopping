import prisma from "@/lib/prisma";
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} from "graphql";

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields() {
    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      price: { type: GraphQLString },
      image: { type: GraphQLString },
      category: { type: GraphQLString },
    }
  },
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db / other source
        return prisma.products.findMany();
      }
    }
  }
})
const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;

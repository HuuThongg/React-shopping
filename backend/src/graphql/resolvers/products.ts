import {User} from "@prisma/client"
import { GraphQLError } from "graphql";
import { GraphQLContext } from "../../utils/types";

const resolvers = {
  Query: {
    getProducts: async (_: any, __: any, context: GraphQLContext) => {
      const { session, prisma } = context;

      // if (!session?.user) {
      //   throw new GraphQLError("Not authorized");
      // }
      try {
        const products = await prisma.products.findMany();
        return products;
      } catch (error) {
        if(error instanceof GraphQLError){

          // throw error;
          return error.message;
        }
        console.log("getProducts error", error);
        throw new GraphQLError("getProducts error", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR",
            argumentName: "id",
          },
        });
      }
    },
  },
};
export default resolvers;
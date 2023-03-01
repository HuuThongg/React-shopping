import { Products} from "@prisma/client"
import { GraphQLError } from "graphql";
import { GraphQLContext } from "../../utils/types";

const resolvers = {
  Query: {
    products: async (
      _: any,
      __: any,
      context: GraphQLContext
    ): Promise<Array<Products>> => {
      const { session, prisma } = context;

    
      try {
        const products = await prisma.products.findMany();
        return products;
      } catch (error: any) {
        console.log("getProducts error", error);
        throw new GraphQLError("getProducts error", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR",
            argumentName: "id",
          },
        });
      }
    },
    product: async (
      _: any,
      args: { productId: string },
      context: GraphQLContext
    ): Promise<Products> => {
      const {  prisma } = context;

      let  product = {} as Products | null;
      const { productId } = args;
      try {
        product = await prisma.products.findUnique({
          where: { id: productId },
        });
      } catch (error: any) {
        console.log("getProduct error", error);
        throw new GraphQLError("getProduct error", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR",
            argumentName: "id",
          },
        });
      }
        return product!;

    },
  },
};
export default resolvers;
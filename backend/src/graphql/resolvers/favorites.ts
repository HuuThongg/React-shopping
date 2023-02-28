import { Favorites } from "@prisma/client";
import { GraphQLError } from "graphql";
import { GraphQLContext } from "../../utils/types";

const resolvers = {
  Query: {
    favorites: async (
      _: any,
      __: any,
      context: GraphQLContext
    ): Promise<Array<Favorites>> => {
      const { session, prisma } = context;

      // if (!session?.user) {
      //   throw new GraphQLError("Not authorized");
      // }
      try {
        const fav = await prisma.favorites.findMany();
        return fav;
      } catch (error) {
        console.log("get Faviorites error", error);
        throw new GraphQLError("get Favorites error", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR",
            argumentName: "id",
          },
        });
      }
    },
  },
  Mutation: {
    addFavorite: async (_:any,args:{productId:string},context:GraphQLContext):Promise<Favorites> => {
      const { session, prisma } = context;
      if (!session?.user) {
        throw new GraphQLError("Not authorized");
      }
      const { productId } = args;
      const userId = session?.user?.id;
      try {
        const product = await prisma.products.findUnique({
          where: {
            id: productId,
          },
        });
        if (!product) 
          throw new GraphQLError("Product not found")
        const fav = await prisma.favorites.create({
          data: {
            userId,
            product: {
              connect: { id: productId },
              
            },
          },
        });
        return fav;
      } catch (error) {
        console.log("add Faviorites error", error);
        throw new GraphQLError("add Favorites error", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR",
            argumentName: "id",
          },
        });
      }
    }
  }
};
export default resolvers;
// type Mutation {
//     addFavorite(productId: String!): Favorites
//   }
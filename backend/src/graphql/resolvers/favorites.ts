// import { Favorite } from "@prisma/client";
import { GraphQLError } from "graphql";
import { 
  FavoritePopulated, 
  GraphQLContext } from "../../utils/types";
import { Prisma } from "@prisma/client";

const resolvers = {
  Query: {
    favorite: async (
      _: any,
      __: any,
      context: GraphQLContext
    ): Promise<Array<FavoritePopulated >> => {
      const { session, prisma } = context;

      if (!session?.user) {
        throw new GraphQLError("Not authorized");
      }
      const userId = session?.user?.id;
      // const userId = "63e1fd4a49ceadd7d273f05f";

      try {
        const fav = await prisma.favorite.findMany({
          where: {
            userId,
          },
          select: favoritePopulated,
        });

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
    checkIsAddedFavorite: async (
      _: any,
      args: { productId: string },
      context: GraphQLContext
    ): Promise<boolean> => {
      const { session, prisma } = context;

      if (!session?.user) {
        throw new GraphQLError("Not authorized");
      }
      const userId = session?.user?.id;

      try {
        const existingFavorite = await prisma.favorite.findFirst({
          where: {
            userId,
            productId: args.productId,
          },
        });
        if (existingFavorite) return true;
        return false;
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
    addFavorite: async (
      _: any,
      args: { productId: string },
      context: GraphQLContext
    ): Promise<boolean> => {
      const { session, prisma } = context;
      if (!session?.user) {
        throw new GraphQLError("Not authorized");
      }
      const { productId } = args;
      const userId = session?.user?.id;

      try {
        // Check if the product exists in the database
        const product = await prisma.products.findUnique({
          where: {
            id: productId,
          },
        });
        // If the product does not exist, throw an error
        if (!product) {
          throw new Error("Product not found");
        }

        // Check if the user already has a favorite with the given product ID

        const existingFavorite = await prisma.favorite.findFirst({
          where: {
            userId: userId,
            productId: productId,
          },
        });

        // If there is an existing favorite with the given product ID, increase the count
        if (existingFavorite) {
          const updatedFavorite = await prisma.favorite.update({
            where: {
              id: existingFavorite.id,
            },
            data: {
              count: existingFavorite.count + 1,
            },
            include: {
              product: true,
            },
          });
          console.log("updatedFavorite", updatedFavorite);
          return true;
        }

        // If there is no existing favorite with the given product ID, create a new favorite
        const newFavorite = await prisma.favorite.create({
          data: {
            userId,
            productId,
            count: 1,
          },
          include: {
            product: true,
          },
        });
        console.log("added new favorite");
        return true;
      } catch (error) {
        console.log("add Faviorites error", error);
        throw new GraphQLError("add Favorites error", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR",
            argumentName: "id",
          },
        });
      }
    },
    removeFavorite: async (
      _: any,
      args: { productId: string },
      context: GraphQLContext
    ): Promise<boolean> => {
      const { session, prisma } = context;
      if (!session?.user) {
        throw new GraphQLError("Not authorized");
      }
      const { productId } = args;
      const userId = session?.user?.id;
      try {
        // Check if the favorite exists in the database
        const existingFavorite = await prisma.favorite.findFirst({
          where: {
            userId: userId,
            productId: productId,
          },
        });

        // If the favorite does not exist, throw an error
        if (!existingFavorite) {
          throw new Error("Favorite not found");
        }

        await context.prisma.favorite.delete({
          where: {
            id: existingFavorite.id,
          },
        });
        console.log("removed favorite");
        return true;
      } catch (error: any) {
        console.log("remove Faviorites error", error);
        throw new GraphQLError("remove Favorites error", {
          extensions: {
            code: "INTERNAL_SERVER_ERROR",
            argumentName: "id",
          },
        });
      }
    },
  },
};

export const favoritePopulated = Prisma.validator<Prisma.FavoriteSelect>()({
  id: true,
  product: {
    select: {
      id: true,
      name: true,
      price: true,
      imgs: true,
    },
  },
});

export default resolvers;



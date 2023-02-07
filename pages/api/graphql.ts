import type { NextApiRequest, NextApiResponse } from "next";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "@/graphql/schema/schema";
import prisma from "@/lib/prisma";

const typeDefs = `#graphql

  type Book {
    title: String
    author: String
  }

  type Product {
    id: ID!
    name: String!
    price: String!
    description: String!
    imgs : [String]
  }

  type Colors {
    alt: String?
    img: String?
    url: String?
  }
  type Query {
    books: [Book]
    products: [Product]
    colors: [Colors]
  }

  
`;
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];
const resolvers = {
  Query: {
    books: () => books,
    products: () => {
      return prisma.products.findMany();
    },
    colors: () => {
      return [
        {
          alt: "alt",
          img: "img",
          url: "url",
        },
      ];
    }
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
export const config = {
  api: {
    bodyParser: false,
  },
};
// export default startServerAndCreateNextHandler(server);


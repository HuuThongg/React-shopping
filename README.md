// export default startServerandCreateNextHandler(server,{
//   context: async(req,res) => ({req,res,prisma})
// })

// import { ApolloServer } from "apollo-server-micro";
// import { getSession } from "next-auth/client";

// import { schema } from "@/backend/graphql/schema";
// import prisma from "@/utils/prisma";

// const apolloServer = new ApolloServer({
//   schema,
//   context: async ({ req }) => {
//     const session = await getSession({ req });

//     const userEmail = session?.user?.email;

//     // Throw if invalid
//     if (!userEmail) {
//       throw new Error("Not authenticated");
//     }

//     return { prisma, currentUserEmail: userEmail };
//   },
//   tracing: process.env.NODE_ENV === "development",
// });

// export const config = {
//   api: { bodyParser: false },
// };

// export default apolloServer.createHandler({
//   path: "/api/graphql",
// });

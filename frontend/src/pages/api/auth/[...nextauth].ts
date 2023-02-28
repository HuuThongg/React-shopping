import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      // console.log("in the callbacks", user);
      if (session.user) {
        session.user.name = user.name;
        session.user.email = user.email;
        session.user.id = user.id;
        // session.user.username = user.username;
        // session.user.theme = user.theme;
      }
      return session;
    },
    // async signIn({ user }) {
    //   let isAllowedToSignIn = true;
    //   const allowedUser = ["YOURGITHUBACCID"];
    //   console.log(user);
    //   if (allowedUser.includes(String(user.id))) {
    //     isAllowedToSignIn = true;
    //   } else {
    //     isAllowedToSignIn = false;
    //   }
    //   return isAllowedToSignIn;
    // },

    // async jwt({ token, account }) {
    //   // Persist the OAuth access_token to the token right after signin
    //   if (account) {
    //     token.accessToken = account.access_token;
    //   }
    //   return token;
    // },

    // async session({ session, token, user }) {
    //   // Send properties to the client, like an access_token from a provider.
    //   session.accessToken = token.accessToken;
    //   return session;
    // },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,

    }),
    // CredentialsProvider({
    //   id: "custom-login",
    //   name: "Custom Login",
    //   async authorize(credentials, req) {
    //     // Add logic here to look up the user from the credentials supplied
    //     console.log("credentials", credentials)
    //     const user = {
    //       id: 1,
    //       name: "J Smith",
    //       email: "md@gmail.com",
    //       // emailVerified: null,
    //       image: "image.com",
    //       // role: "USER",
    //       username: "jsmith",
    //     };
    //     if (user) {
    //       return Promise.resolve(user);
    //     }

    //     // return null;
    //     return Promise.resolve(null);
    //   },
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "jsmith" },
    //     password: { label: "Password", type: "password" },
    //   },
    // }),
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     */
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);

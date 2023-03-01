import { Prisma, PrismaClient } from "@prisma/client";
import { ISODateString } from "next-auth";
import { Context } from "graphql-ws/lib/server";
import { PubSub } from "graphql-subscriptions";

import {favoritePopulated} from "../graphql/resolvers/favorites"

export interface GraphQLContext {
  session: Session | null;
  prisma: PrismaClient;
  pubsub: PubSub;
}
export interface Session {
  user?: User;
  expires: ISODateString;
}
export interface User {
  id: string;
  username: string;
  email: string;
  emailVerified: boolean;
  image: string;
  name: string;
}
export interface SubscriptionContext extends Context {
  connectionParams: {
    session?: Session;
  };
}

//  favorite

export type FavoritePopulated = Prisma.FavoriteGetPayload<{
  select: typeof favoritePopulated;
}>



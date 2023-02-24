"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import apolloClient from '@/lib/apollo';
import { ApolloProvider } from '@apollo/client';

export interface AuthContextProps {
  children: React.ReactNode;
  // session: Session
}

export default function AuthContext({ children }: AuthContextProps) {
  return( 
  <SessionProvider >
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  </SessionProvider>
  );
}
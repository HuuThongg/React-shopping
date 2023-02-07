import './globals.css'

import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import { headers } from 'next/headers'
import AuthContext from './AuthContext';
import { type Session } from "next-auth";




// async function getSession(cookie: string): Promise<Session> {
//   // const response = await fetch(`${process.env.LOCAL_AUTH_URL}/api/auth/session`, {
//   //   headers: {
//   //     cookie,
//   //   },
//   // });

//   // const session = await response.json();

//   // return Object.keys(session).length > 0 ? session : null;
//   return "s";
// }

export default async function RootLayout({
  children
}: { children: React.ReactNode; }) {

  // const session = await getSession(headers().get('cookie') ?? '');

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head/>
      <body>
        {/* <AuthContext session={session}> */}

          <AuthContext >
            <NavBar />
            {children}
            <Footer />
          </AuthContext>
          
      </body>
    </html>
  )
}







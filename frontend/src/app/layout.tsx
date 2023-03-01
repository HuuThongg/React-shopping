import './globals.css'

import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import AuthContext from './AuthContext';
import { type Session } from "next-auth";

export const metadata = {
  title: 'Adidas',
};

export default async function RootLayout({
  children
}: { children: React.ReactNode; }) {

  // const session = await getSession(headers().get('cookie') ?? '');

  return (
    <html lang="en">
      <head/>
      <body>
          <div id="next_app">
              <AuthContext >
                {/* <NavBar /> */}
                {children}
                <Footer />
              </AuthContext>
          </div>
          <div id="modalLogin"></div>
          <div id="side-panel-overlay"></div>
      </body>
    </html>
  )
}







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


import './globals.css'
import Link from 'next/link';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <Head/> */}
      <body>
          <NavBar/>
          {children}
          <Footer/>
      </body>
    </html>
  )
}

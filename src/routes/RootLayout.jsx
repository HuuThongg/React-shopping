import {
  Navbar,
  MainContent,
  Footer,
} from "../components";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  )
};

export default RootLayout;

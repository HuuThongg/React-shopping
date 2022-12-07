import { Navbar, Footer } from "../components";
import { Outlet } from "react-router-dom";

const RootLayout_wishLists = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default RootLayout_wishLists;

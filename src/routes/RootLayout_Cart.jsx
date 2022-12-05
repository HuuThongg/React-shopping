import { Navbar } from "../components";
import { Outlet } from "react-router-dom";

const RootLayout_Cart = () => {
  return (
    <div className="relative">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout_Cart;

import { logo } from "../assets";
import { navLinks, topInfo } from "../constants";
import { FaRegUser } from "react-icons/fa";
import { HiHeart, HiBars4, HiXMark } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { debounce } from "../utilities/helper";
// import MenuOverlay from "./menuOverlay";
import { NavLink, useLocation } from "react-router-dom";
import { useCart } from "./store/store";

const Navbar = () => {
  const storedItems = useCart((state) => state.items);
  const amountItems = storedItems.reduce(
    (accumulator, currentValue) =>  accumulator + currentValue.amount,0);
  const [transform, setTransform] = useState("full");

  const [active, setActive] = useState("men");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [toggle, setToggle] = useState(false);

  const location = useLocation();

  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.scrollY;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 5) ||
        currentScrollPos < 120
    );
    setPrevScrollPos(currentScrollPos);
  }, 10);
  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div
        className={`${
          location.pathname === "/" ? "fixed" : ""
        } top-0 left-0  z-40 w-full justify-items-center transition-shadow delay-1000 duration-[2500] ease-in-out  ${
          !visible ? "-translate-y-full" : ""
        }`}
      >
        <div className="grid h-[45px] w-full  place-items-center bg-[#18181b] md:h-[40px]">
          <button className="h-full w-full text-white ">
            FREE STANDARD SHIPPING & RETURNS
          </button>
        </div>
        <nav className="flex h-[60px] w-full flex-col  justify-between border  bg-white px-2 md:h-[80px] ">
          <div className="hidden w-full md:block">
            <ul className="-pr-5 flex list-none items-center justify-end pl-12">
              {topInfo.map((nav, index) => (
                <li
                  key={nav.id}
                  className={` cursor-pointer text-sm font-normal italic ${
                    index === topInfo.length - 1 ? "mr-0" : "mr-4"
                  } `}
                >
                  <NavLink to="/products">{nav.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full items-center justify-between md:items-end lg:items-center ">
            <div className="flex md:hidden ">
              <button
                className="flex h-12 w-12  items-center justify-center "
                onClick={() => {
                  setTransform("0");
                }}
              >
                <HiBars4 className="h-7 w-7"></HiBars4>
              </button>
              <div className="  h-12 w-12 ">
                <a
                  href="#"
                  className="relative grid  h-full  w-full place-items-center justify-center text-center"
                >
                  <HiHeart className="inline h-6 w-6"></HiHeart>
                  <span className="text-xxl absolute top-0 right-0 h-5 w-5 rounded-full bg-blue-400 text-center">
                    2
                  </span>
                </a>
              </div>
            </div>
            <NavLink to="/">
              <img
                src={logo}
                alt="Adidas Logo"
                className=" h-[60px] object-contain pl-12"
              ></img>
            </NavLink>
            <ul className="hidden flex-1 list-none items-center justify-start  pl-12 pb-3 md:flex  lg:justify-center lg:pb-0">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer font-poppins text-[16px] font-semibold ${
                    active === nav.title ? "text-black-100" : "text-neutral-400"
                  }  ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}
                  onClick={() => setActive(nav.title)}
                >
                  <NavLink to="products">{nav.title}</NavLink>
                </li>
              ))}
            </ul>
            <div className="flex justify-items-center space-x-4">
              <div className="  relative h-12  w-12 ">
                <button className=" h-full w-full ">
                  <FaRegUser className="inline h-6 w-6 "></FaRegUser>
                  <span className="text-xxl  absolute top-0 right-0 h-5 w-5 rounded-full bg-yellow-400 text-center">
                    1
                  </span>
                </button>
              </div>
              <div className="  h-12 w-12 justify-items-center">
                <a
                  href="#"
                  className="relative grid  h-full w-full place-items-center "
                >
                  <HiHeart className="h-6 w-6"></HiHeart>
                  <span className="text-xxl absolute top-0 right-0 h-5 w-5 rounded-full bg-blue-400 text-center">
                    1
                  </span>
                </a>
              </div>
              <div className="  h-12 w-12  ">
                <NavLink
                  to="cart"
                  className="relative grid h-full w-full  place-items-center justify-center "
                >
                  <FaRegUser className="h-6 w-6 "></FaRegUser>
                  {amountItems > 0 &&
                    <span className="text-xxl absolute top-0 right-0 block h-5 w-5 rounded-full  bg-blue-400 text-center ">
                      {amountItems}
                    </span>
                  }
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 h-full w-full overflow-hidden bg-white -translate-x-${transform} z-[100] transition-all duration-500  ease-in-out`}
      >
        <div
          className={` fixed inset-0 z-[100] h-full w-full overflow-hidden    bg-white   opacity-100`}
        >
          {/* header */}
          <div className=" flex min-h-[60px] w-full items-center  justify-center  border-b-2 border-solid border-slate-400 bg-white">
            <img src={logo} alt="" />
            <button
              className=" absolute right-0 top-1  z-[110]  h-[50px] w-[50px] text-[40px] "
              onClick={() => {
                setTransform("full");
              }}
            >
              <HiXMark className="h-full w-full" />
            </button>
          </div>
          <ul className="flex  flex-1 list-none flex-col   items-center justify-start p-10">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer py-5 font-poppins text-[16px]  font-semibold`}
                onClick={() => setActive(nav.title)}
              >
                <NavLink to="products">{nav.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

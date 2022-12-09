import { logo } from "../assets";
import { navLinks, topInfo } from "../constants";
import { FaRegUser } from "react-icons/fa";
import { HiHeart, HiBars4, HiXMark, HiOutlineBriefcase } from "react-icons/hi2";
import { TiHeartOutline } from "react-icons/ti";
import { useState, useEffect } from "react";
import { debounce } from "../utilities/helper";
// import MenuOverlay from "./menuOverlay";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useCart } from "./store/store";
import { useFavorite } from "./store/store";

const Navbar = () => {
  const amountFav = useFavorite((state) => state.amountItems);
  const storedItems = useCart((state) => state.items);
  const amountItems = storedItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0
  );
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
        prevScrollPos - currentScrollPos > 0) ||
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
          location.pathname === "/" || location.pathname === "/products"
            ? "fixed  transition-all duration-500  ease-in-out"
            : "static"
        } top-0 left-0  z-40 w-full justify-items-center   ${
          !visible ? "-translate-y-full" : ""
        } `}
      >
        <div className="grid h-[35px] w-full  place-items-center bg-[#18181b] md:h-[30px]">
          <button className="mx-auto h-full text-[9px] font-bold uppercase leading-5 tracking-widest text-white screen960:text-[10px]">
            <div>FREE STANDARD SHIPPING & RETURNS</div>
          </button>
        </div>
        <nav className="mx-0 flex h-[60px] w-full  flex-col items-center justify-between  border bg-white px-[10px] md:h-[70px] md:px-[30px] ">
          <div className="hidden w-full md:block">
            <ul className=" flex list-none items-center justify-end pl-12 text-[14px]">
              {topInfo.map((nav, index) => (
                <li
                  key={nav.id}
                  className={` cursor-pointer text-[14px] font-normal   ${
                    index === topInfo.length - 1 ? "mr-0" : "mr-4"
                  } `}
                >
                  <NavLink to="/products">{nav.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* desktop */}
          <div className="flex h-full w-full items-center justify-between md:items-end lg:items-center text-[1rem]">
            <div className="flex flex-1 md:hidden   ">
              <button
                className="flex h-10 w-10  items-center justify-center "
                onClick={() => {
                  setTransform("0");
                }}
              >
                <HiBars4 className="h-7 w-7"></HiBars4>
              </button>
              {/* <div className="  h-12 w-12 ">
                <Link
                  href="#"
                  className="relative grid  h-full  w-full place-items-center justify-center text-center"
                >
                  <TiHeartOutline className="inline h-6 w-6"></TiHeartOutline>
                  {amountFav > 0 && (
                    <span className="absolute top-[2px] right-[2px] block h-6 w-6 rounded-full bg-[#0071ae] text-[12px] font-bold text-white opacity-90">
                      {amountFav}
                    </span>
                  )}
                </Link>
              </div> */}
            </div>
            <NavLink to="/" className="">
              <img
                src={logo}
                alt="Adidas Logo"
                className="h-[50px] w-[50px]   object-contain px-0 "
              ></img>
            </NavLink>
            <ul className="hidden flex-1 list-none items-center justify-start  pl-12 pb-3 md:flex  lg:justify-center lg:pb-0">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer font-poppins text-[13px] font-normal ${
                    active === nav.title ? "text-black-100" : "text-neutral-400"
                  }  ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}  ${
                    index === 0 || index === 1 || index == 2
                      ? "font-bold text-black"
                      : ""
                  } `}
                  onClick={() => setActive(nav.title)}
                >
                  <NavLink to="/products">{nav.title}</NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-1 items-center  justify-end">
              <div className="  relative h-12  w-12 ">
                <Link to="/my-account" className=" grid h-full w-full place-items-center ">
                  <FaRegUser className="inline h-6 w-6 "></FaRegUser>
                  {/* <span className="text-xxl  absolute top-0 right-0 h-5 w-5 rounded-full bg-yellow-400 text-center">
                    1
                  </span> */}
                </Link>
              </div>
              <div className=" h-12  w-12">
                <Link
                  to="/wishlists"
                  className="relative grid  h-full w-full place-items-center "
                >
                  <TiHeartOutline className="h-6 w-6"></TiHeartOutline>
                  {amountFav > 0 && (
                    <span className="absolute top-[2px] right-[2px] block h-5 w-5 rounded-full bg-[#0071ae] text-center text-[12px] font-bold text-white opacity-90">
                      {amountFav}
                    </span>
                  )}
                </Link>
              </div>
              <div className="  h-12 w-12  ">
                <NavLink
                  to="/cart"
                  className="justify-cente relative flex h-full w-full  cursor-pointer  items-center justify-center  text-center "
                >
                  <HiOutlineBriefcase className="h-6 w-6 "></HiOutlineBriefcase>
                  {amountItems > 0 && (
                    <span className="absolute top-[2px] right-[2px] block h-5 w-5 rounded-full bg-[#0071ae] text-[12px] font-bold text-white opacity-90">
                      {amountItems}
                    </span>
                  )}
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
          {/* mobile */}
          <ul className="flex  flex-1 list-none flex-col   items-center justify-start p-10">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer py-5 font-poppins text-[16px]  font-semibold`}
                onClick={() => {setActive(nav.title)
                  setTransform("full");
                }}
              >
                <NavLink to="/products">{nav.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

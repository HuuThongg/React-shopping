import { logo } from "../assets";
import { navLinks, topInfo } from "../constants";
import { FaRegUser } from "react-icons/fa";
import { HiHeart, HiBars4, HiXMark } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { debounce } from "../utilities/helper";
import MenuOverlay from "./menuOverlay";
import { NavLink } from "react-router-dom";
import MenuIfor from "./MenuIfor";


const Navbar = () => {
  const [transform, setTransform] = useState("full");

  const [active, setActive] = useState("men");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [toggle, setToggle] = useState(false);
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
        className={`fixed top-0 left-0 w-full justify-items-center z-40 transition-shadow  duration-[250] delay-100 ease-[cubic-bezier(0.25, 0.1, 0.25, 1.0) ] ${
          !visible ? "-translate-y-full" : ""
        }`}
      >
        <div className="bg-[#18181b] h-[45px] w-full  md:h-[40px] grid place-items-center">
          <button className="text-white w-full h-full ">
            FREE STANDARD SHIPPING & RETURNS
          </button>
        </div>
        <nav className="border w-full flex flex-col  px-2 justify-between  h-[60px] md:h-[80px] bg-white ">
          <div className="hidden md:block w-full">
            <ul className="list-none flex items-center pl-12 justify-end -pr-5">
              {topInfo.map((nav, index) => (
                <li
                  key={nav.id}
                  className={` font-normal italic cursor-pointer text-sm ${
                    index === topInfo.length - 1 ? "mr-0" : "mr-4"
                  } `}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex justify-between items-center md:items-end lg:items-center ">
            <div className="flex md:hidden ">
              <button
                className="w-12 h-12 flex  items-center justify-center "
                onClick={() => {
                  setTransform("0");
                }}
              >
                <HiBars4 className="w-7 h-7"></HiBars4>
              </button>
              <div className="  w-12 h-12 ">
                <a
                  href="#"
                  className="w-full h-full  relative  justify-center grid place-items-center text-center"
                >
                  <HiHeart className="w-6 h-6 inline"></HiHeart>
                  <span className="absolute top-0 right-0 w-5 h-5 text-xxl bg-blue-400 rounded-full text-center">
                    1
                  </span>
                </a>
              </div>
            </div>
            <NavLink to="/">
              <img
                src={logo}
                alt="Adidas Logo"
                className=" pl-12 h-[60px] object-contain"
              ></img>
            </NavLink>
            <ul className="list-none hidden md:flex justify-start lg:justify-center  items-center flex-1 pl-12  pb-3 lg:pb-0">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-semibold cursor-pointer text-[16px] ${
                    active === nav.title ? "text-black-100" : "text-neutral-400"
                  }  ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-4 justify-items-center">
              <div className="  w-12 h-12  relative ">
                <button className=" w-full h-full ">
                  <FaRegUser className="w-6 h-6 inline "></FaRegUser>
                  <span className="absolute  w-5 h-5 text-xxl bg-yellow-400 rounded-full top-0 right-0 text-center">
                    1
                  </span>
                </button>
              </div>
              <div className="  w-12 h-12 justify-items-center">
                <a
                  href="#"
                  className="w-full h-full  grid place-items-center relative "
                >
                  <HiHeart className="w-6 h-6"></HiHeart>
                  <span className="absolute w-5 h-5 text-xxl bg-blue-400 rounded-full top-0 right-0 text-center">
                    1
                  </span>
                </a>
              </div>
              <div className="  w-12 h-12  ">
                <a
                  href="#"
                  className="w-full h-full grid place-items-center  relative justify-center "
                >
                  <FaRegUser className="w-6 h-6 "></FaRegUser>
                  <span className="absolute top-0 right-0 w-5 h-5 text-xxl bg-blue-400 rounded-full  block text-center ">
                    1
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* <MenuOverlay> */}
      {/* {toggle && ( */}
      {/* <MenuIfor transform={transform} setTransform={setTransform} /> */}
      <div
        className={`overflow-hidden bg-white fixed inset-0 w-full h-full -translate-x-${transform} transition-all duration-500 ease-in-out  z-[100]`}
      >
        <div
          // -translate-x-${transform}
          className={` overflow-hidden bg-white fixed inset-0 w-full h-full    z-[100]   opacity-100`}
        >
          {/* <div
          className={` overflow-hidden bg-white absolute inset-0 w-full h-full   z-[100] `}
        > */}
          {/* header */}
          <div className=" bg-white flex justify-center items-center  min-h-[60px]  border-b-2 border-solid border-slate-400 w-full">
            <img src={logo} alt="" />
            <button
              className=" absolute right-0 top-1  text-[40px]  z-[110] w-[50px] h-[50px] "
              onClick={() => {
                setTransform("full")
              }}
            >
              <HiXMark className="w-full h-full" />
            </button>
          </div>
          <ul className="list-none  flex flex-col justify-start   items-center flex-1 p-10">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-semibold cursor-pointer text-[16px]  py-5`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* )} */}
      {/* </MenuOverlay> */}
    </>
  );
};

export default Navbar;

import { logo } from "../assets";
import { navLinks, topInfo } from "../constants";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiHeart, HiBars4 } from "react-icons/hi2";
const Navbar = () => {
  const [active, setActive] = useState("men");
  console.log(active);
  console.log("đasad");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full justify-items-center z-50">
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
            <button className="w-12 h-12 flex   items-center justify-center">
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
          <img
            src={logo}
            alt="Adidas Logo"
            className=" pl-12 h-[60px] object-contain "
          ></img>
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
  );
};

export default Navbar;

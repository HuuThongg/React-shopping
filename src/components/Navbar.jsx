import { logo } from "../assets";
import { navLinks, topInfo } from "../constants";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { HiHeart, HiBars4 } from "react-icons/hi2";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full ">
      <div className="bg-[#18181b] h-[45px] md:h-[40px]">
        <p className="text-white text-center">Text</p>
      </div>
      <nav className="border w-full flex flex-col pt-1 px-2 justify-between items-center h-[60px] md:h-[80px]  ">
        <div className="hidden lg:block w-full">
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
            <div className=" bg-blue-200 w-12 h-12 ">
              <a
                href="#"
                className="w-full h-full  relative block justify-center"
              >
                <HiHeart className="w-6 h-6 inline"></HiHeart>
                <span className="absolute inset-0 inset-x-4 w-5 h-5 text-xxl bg-blue-400 rounded-full">
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
          <ul className="list-none hidden md:flex justify-start lg:justify-center  items-center flex-1 pl-12 ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-semibold cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-neutral-800"
                }  ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4 justify-items-center">
            <div className=" bg-blue-200 w-12 h-12  relative ">
              <button className=" w-full h-full ">
                <FaRegUser className="w-6 h-6 inline "></FaRegUser>
                <span className="absolute inset-0 inset-x-4 w-5 h-5 text-xxl bg-yellow-400 rounded-full">
                  1
                </span>
              </button>
            </div>
            <div className=" bg-blue-200 w-12 h-12 justify-items-center">
              <a href="#" className="w-full h-full block relative   ">
                <HiHeart className="w-6 h-6"></HiHeart>
                <span className="absolute inset-0 inset-x-4 w-5 h-5 text-xxl bg-blue-400 rounded-full">
                  1
                </span>
              </a>
            </div>
            <div className=" bg-blue-200 w-12 h-12  ">
              <a href="#" className="w-full h-full block relative ">
                <FaRegUser className="w-6 h-6 "></FaRegUser>
                <span className="absolute inset-0 inset-x-4 w-5 h-5 text-xxl bg-blue-400 rounded-full">
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

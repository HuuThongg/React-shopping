import { navLinks } from "../constants";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";
import { logo } from "../assets";
const MenuIfor = (props) => {
  const onClickHandler = () => {
    props.setTransform("full");
  };

  return (
    // prevent scroll

    <div
      className={`overflow-hidden bg-white fixed inset-0 w-full h-full -translate-x-full transition-all duration-500 ease-in-out  z-[100]`}
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
              onClickHandler
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
  );
};

export default MenuIfor;

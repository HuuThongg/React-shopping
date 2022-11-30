import { navLinks } from "../constants";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";
const MenuIfor = (props) => {
  console.log(props.transform);
  // const [transform, setTransform] = useState("0")
  return (
    // prevent scroll

    <div
      className={`overflow-hidden bg-white fixed inset-0 w-full h-full -translate-x-${props.transform} transition-all duration-500 ease-in-out  z-[100]`}
    >
      <div
        // -translate-x-${transform}
        className={` overflow-hidden bg-white absolute inset-0 w-full h-full    z-[100]   opacity-100`}
      >
        <div
          className={` overflow-hidden bg-white fixed inset-0 w-full h-full   z-[100] `}
        >
          {/* header */}
          <div className=" bg-red-400 flex justify-start items-center  min-h-[60px]  border-b-2 border-solid border-slate-400 w-[calc(100%-64px)] ">
            {/* <div className="header_logo_bg"></div> */}
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
          {/* close */}
        </div>
        <button
          className="absolute right-5 bottom-0 text-[40px] pointer-events-none z-[110] hover:bg-black"
          onClick={() => {
            console.log("ds");
            props.setTransform("full");
          }}
        >
          <HiXMark className="w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default MenuIfor;

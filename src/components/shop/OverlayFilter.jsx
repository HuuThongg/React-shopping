import {
  HiXMark,
  HiOutlineChevronUp,
  HiOutlineChevronDown,
  HiArrowLongRight,
} from "react-icons/hi2";
import { useAtom, useSetAtom } from "jotai";
import { toggle_filter } from "../store/jotai";
import { useRef } from "react";
import { useEffect, useState } from "react";
const OverlayFilter = () => {
  const [isToggleFilter, setIsToggleFilter] = useAtom(toggle_filter);
  const ref = useRef();
  useEffect(() => {
    const checkIfLickedOutside = (e) => {
      // // If the menu is open and the clicked target is not within the menu, then close filter sidebar
      if (isToggleFilter && ref.current && !ref.current.contains(e.target))
        setIsToggleFilter(false);
    };
    document.addEventListener("mousedown", checkIfLickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfLickedOutside);
    };
  }, [isToggleFilter]);

  return (
    <div className=" z-[150] hidden screen960:block">
      <div
        className={`opacityTransistion ${
          isToggleFilter ? "visible opacity-100" : "invisible opacity-0"
        }  fixed inset-0  z-[150] w-full cursor-pointer bg-[#0003]   `}
      >
        {/* filter panel desktop */}
        {/* unset */}
        <div
          className={`scrollbar-hide fixed top-0 ${
            isToggleFilter ? "right-0" : "-right-[30%]"
          }  z-[150] h-full w-[30%] overflow-auto overscroll-contain bg-white py-0 text-black transition-all `}
          ref={ref}
        >
          {/* Filter Header */}
          <div className="h-auto divide-inherit border-[1px] border-x-0 border-t-0 border-solid">
            <h5 className="relative my-5 flex h-auto items-center justify-start px-5 text-[18px] ">
              <span className="font-bold normal-case  leading-6">
                Filter & Sort
              </span>

              <a
                href="#"
                className="my-0 ml-auto mr-[20px] capitalize    text-gray-500 underline underline-offset-1 "
              >
                Clear All
              </a>
              <span
                className="absolute right-1 top-[50%] -translate-y-1/2 text-[24px]"
                onClick={() => setIsToggleFilter(false)}
              >
                <HiXMark />
              </span>
            </h5>
          </div>
          {/* filter panel body */}
          <div className="pb-[100px] ">
            {/* Applied filters wrapper */}
            <div className="divide-inherit border-[1px] border-x-0 border-t-0 border-solid">
              {/* applied filters header */}
              <span className="m-5 mt-0 block pt-5 text-[16px] leading-6">
                Applied Filters
              </span>
              {/* Applied filters */}
              <div className="mt-0 mr-0 ml-5 mb-5 flex flex-wrap">
                <a href="#" className="cursor-pointer rounded-none">
                  <div className="relative">
                    <div className="mt-0 mr-[10px] mb-[10px] ml-0 flex h-[35px] items-center justify-center border border-solid border-green-200 bg-[#f5f6f6] pr-[10px]">
                      {/* incon wrapper */}
                      <span className="ml-[5px]">
                        <HiXMark className="text-[20px]" />
                      </span>
                      <span className="ml-[5px]">Sportswear</span>
                    </div>
                  </div>
                </a>
                <a href="#" className="cursor-pointer rounded-none">
                  <div className="relative">
                    <div className="mt-0 mr-[10px] mb-[10px] ml-0 flex h-[35px] items-center justify-center border border-solid border-green-200 bg-[#f5f6f6] pr-[10px]">
                      {/* incon wrapper */}
                      <span className="ml-[5px]">
                        <HiXMark className="text-[20px]" />
                      </span>
                      <span className="ml-[5px]">Shoes</span>
                    </div>
                  </div>
                </a>
                <a href="#" className="cursor-pointer rounded-none">
                  <div className="relative">
                    <div className="mt-0 mr-[10px] mb-[10px] ml-0 flex h-[35px] items-center justify-center border border-solid border-green-200 bg-[#f5f6f6] pr-[10px]">
                      {/* incon wrapper */}
                      <span className="ml-[5px]">
                        <HiXMark className="text-[20px]" />
                      </span>
                      <span className="ml-[5px]">InFant & Toddler</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {/* what to filter  */}
            <div className="">
              <div className="relative flex h-[50px] w-full cursor-pointer select-none flex-col justify-center border-l-4 border-white bg-white pr-[35px] pl-[16px] text-[14px] ">
                <span className="block text-[16px] font-semibold">Sort By</span>
                <span className="absolute right-1 top-[50%] -translate-y-1/2 text-[14px]">
                  <HiOutlineChevronUp />
                </span>
              </div>
              {/* open __ options_container */}
              <div className="h-auto overflow-hidden transition-all">
                {/* sortby wraooer */}
                <div>
                  <ul className="text-[15px]">
                    <li className="flex max-h-[70px] min-h-[50px] items-center border-l-4 border-b-2 border-solid border-slate-100 pl-[16px] uppercase">
                      Newest
                    </li>
                    <li className="flex max-h-[70px] min-h-[50px] items-center border-l-4 border-b-2 border-solid border-slate-100 pl-[16px] uppercase">
                      Price (high - low)
                    </li>
                    <li className="flex max-h-[70px] min-h-[50px] items-center border-l-4 border-b-2 border-solid border-slate-100 pl-[16px] uppercase">
                      Price (low - high)
                    </li>
                    <li className="flex max-h-[70px] min-h-[50px] items-center border-l-4 border-b-2 border-solid border-slate-100 pl-[16px] uppercase">
                      Top Sellers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* what to filter  */}
            <div className="">
              <div className="relative flex h-[50px] w-full cursor-pointer select-none flex-col justify-center border-l-4 border-white bg-white pr-[35px] pl-[16px] text-[14px] ">
                <span className="block text-[16px] font-semibold">Sort By</span>
                <span className="absolute right-1 top-[50%] -translate-y-1/2 text-[14px]">
                  <HiOutlineChevronUp />
                </span>
              </div>
              {/* open __ options_container */}
              <div className="h-auto overflow-hidden transition-all">
                {/* sortby wraooer */}
                <div>
                  <ul className="text-[15px]">
                    <li className="flex max-h-[70px] min-h-[50px] items-center border-l-4 border-b-2 border-solid border-slate-100 pl-[16px] uppercase">
                      Newest
                    </li>
                    <li className="flex max-h-[70px] min-h-[50px] items-center border-l-4 border-b-2 border-solid border-slate-100 pl-[16px] uppercase">
                      Price (high - low)
                    </li>
                    <li className="flex max-h-[70px] min-h-[50px] items-center border-l-4 border-b-2 border-solid border-slate-100 pl-[16px] uppercase">
                      Price (low - high)
                    </li>
                    <li className="flex max-h-[70px] min-h-[50px] items-center border-l-4 border-b-2 border-solid border-slate-100 pl-[16px] uppercase">
                      Top Sellers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* what to filter  */}
            <div className="">
              <div className="relative flex h-[50px] w-full cursor-pointer select-none flex-col justify-center border-l-4 border-white bg-white pr-[35px] pl-[16px] text-[14px] ">
                <span className="block text-[16px] font-semibold">Sort By</span>
                <span className="absolute right-1 top-[50%] -translate-y-1/2 text-[14px]">
                  <HiOutlineChevronUp />
                </span>
              </div>
              {/* open __ options_container */}
              <div className="h-auto overflow-hidden transition-all">
                {/* sortby wraooer */}
                <div>
                  <ul className="text-[15px]">
                    <li className="flex max-h-[70px] min-h-[50px] items-center border-l-4 border-b-2 border-solid border-slate-100 pl-[16px] uppercase">
                      Newest
                    </li>
                    <li className="flex max-h-[70px] min-h-[50px] items-center border-l-4 border-b-2 border-solid border-slate-100 pl-[16px] uppercase">
                      Price (high - low)
                    </li>
                    <li className="flex max-h-[70px] min-h-[50px] items-center border-l-4 border-b-2 border-solid border-slate-100 pl-[16px] uppercase">
                      Price (low - high)
                    </li>
                    <li className="flex max-h-[70px] min-h-[50px] items-center border-l-4 border-b-2 border-solid border-slate-100 pl-[16px] uppercase">
                      Top Sellers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Apply filters */}
          <div className="w-full">
            <div className="fixed bottom-0 right-0 w-[30%] overflow-hidden border-t border-solid border-[#1369a3] bg-white p-[25px]">
              <button className="flex h-[50px] w-full items-center justify-center bg-black px-5 ">
                <span className="block  w-full font-bold text-white">
                  APPLY (2837){" "}
                </span>
                <span>
                  <HiArrowLongRight className="text-[34px] text-white" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayFilter;

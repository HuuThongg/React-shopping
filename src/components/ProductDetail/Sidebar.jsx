import { FaStar, FaRegStar } from "react-icons/fa";
import { HiArrowLongRight, HiOutlineBellAlert } from "react-icons/hi2";
import {useState} from "react";
const Sidebar = () => {
  
  return (
    // hidden
    <div className="hidden screen960:block  screen960:max-w-[320px]   screen1280:max-w-[430px] screen1440:max-w-[450px] grow-0 shrink-0 screen1280:basis-[430px] screen1440:basis-[450px] bg-white max-w-[450px] basis-[450px] border-solid border-slate-300 border-[1px] border-y-0 border-r-0">
      <div className=" bg-fuchsia-500 w-full h-0 "></div>
      <div className="screen960:px-[20px] screen960:w-[320px] screen1280:px-[30px] screen1280:w-[430px] screen1440:px-[40px] screen1440:w-[450px] sticky top-0  m-h-vh pt-[30px] positionWebkit ">
        {/* Product description  */}
        <div className="p-0  mb-0 flex flex-wrap ">
          {/* pre header */}
          <div className="w-full flex flex-wrap min-h-[24px] justify-between items-center">
            <div className="flex">
              <span className="inline-flex">Men's • Essentials</span>
            </div>
            <button className="flex relative items-baseline ">
              {/* star rating */}
              <div className="inline-flex items-center justify-center mr-2 text-[11px] relative">
                {/* single start */}
                <div>
                  <FaStar />
                </div>
                <div>
                  <FaStar />
                </div>
                <div>
                  <FaStar />
                </div>
                <div>
                  <FaRegStar />
                </div>
                <div>
                  <FaRegStar />
                </div>
              </div>
              <span className="underline">247</span>
            </button>
          </div>
          {/* Name */}
          <h1 className="mt-2 text-[35px] italic font-normal">
            <span>Essentials Big Logo Tee</span>
          </h1>
          {/* Prduct price */}
          <div className="mt-2">
            <div className="flex items-center ">
              <div className="line-through text-gray-500 mr-1">$30</div>
              <div className="ml-1 font-bold text-red-600">$12</div>
            </div>
            <div className="mt-2">Black / White</div>
          </div>
          {/* sale off Event */}
          <div className="mt-5 text-gray-500">
            <div className="text-black font-semibold">
              <span> Black Friday Sale </span>
            </div>
            <div>
              <span>Get an extra 40% off with code CYBER. Ends 11/30.</span>
            </div>
            <div className="underline  font-medium">
              <a href="#">Shop Black Friday Sale</a>
            </div>
          </div>
        </div>
        {/* Buy section  */}
        <section className="mt-[40px] ">
          {/* size selector */}
          <div>
            {/* heading container */}
            <div className="flex font-semibold">
              <span>Sizes</span>
            </div>
          </div>
          {/* sizes */}
          <div className="grid mt-[10px] border-solid border-slate-300 border-[1px] border-b-0 rounded gridSize">
            <button className="relative line-through text-slate-500 border-solid border-slate-300 border-[1px] border-t-0 border-l-0 hover:bg-black hover:text-white ">
              <span>4</span>
              <span className="absolute right-2 top-0">
                <HiOutlineBellAlert />
              </span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>4.5</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>5</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>5.5</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>6</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>6.5</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>7</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>7.5</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>8</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>8.5</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>9</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>9.5</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>10</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>10.5</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>11</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>11.5</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>12</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>12.5</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>13</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>14</span>
            </button>
            <button className="border-slate-300 border-[1px] border-t-0 border-l-0  hover:bg-black hover:text-white">
              <span>15</span>
            </button>
          </div>
          {/* add to bag */}
          <div className="w-full  text-white mt-7 flex justify-between  items-center">
            <button className="font-semibold flex bg-black justify-between  items-center h-[50px] w-full px-3 shadow-xl rounded">
              <span>ADD TO BAG</span>
              <span className="text-[35px]">
                <HiArrowLongRight />
              </span>
            </button>
            <div className="ml-[10px]">
              <div className="bg-white w-[50px] h-[50px]  border-solid border-black border-[1px] flex justify-center items-center rounded">
                <span className="text-black">
                  <FaRegStar />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;

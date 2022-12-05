import { FaStar, FaRegStar } from "react-icons/fa";
import { HiArrowLongRight, HiOutlineBellAlert } from "react-icons/hi2";
import { useState } from "react";
const Sidebar = ({ product }) => {
  return (
    <div className="hidden max-w-[450px]  shrink-0   grow-0 basis-[450px] border-[1px] border-y-0 border-r-0 border-solid border-slate-300 bg-white screen960:block screen960:max-w-[320px] screen1280:max-w-[430px] screen1280:basis-[430px] screen1440:max-w-[450px] screen1440:basis-[450px]">
      <div className=" h-0 w-full bg-fuchsia-500 "></div>
      <div className="m-h-vh positionWebkit sticky top-0 pt-[30px] screen960:w-[320px] screen960:px-[20px] screen1280:w-[430px]  screen1280:px-[30px] screen1440:w-[450px] screen1440:px-[40px] ">
        {/* Product description  */}
        <div className="mb-0  flex flex-col flex-wrap p-0">
          {/* pre header */}
          <div className="flex min-h-[24px] w-full flex-wrap items-center justify-between">
            <div className="flex">
              <span className="inline-flex">Men's • Essentials</span>
            </div>
            <button className="relative flex items-baseline ">
              {/* star rating */}
              <div className="relative mr-2 inline-flex items-center justify-center text-[11px]">
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
          <h1 className="mt-2 text-[35px] font-normal italic">
            <span>{product.name}</span>
          </h1>
          {/* Prduct price */}
          <div className="mt-2">
            <div className="flex items-center ">
              <div className="mr-1 text-gray-500 line-through">$30</div>
              <div className="ml-1 font-bold text-red-600">{product.price}</div>
            </div>
            <div className="mt-2">Black / White</div>
          </div>
          {/* sale off Event */}
          <div className="mt-5 text-gray-500">
            <div className="font-semibold text-black">
              <span> Black Friday Sale </span>
            </div>
            <div>
              <span>Get an extra 40% off with code CYBER. Ends 11/30.</span>
            </div>
            <div className="font-medium  underline">
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
          <div className="gridSize mt-[10px] grid rounded border-[1px] border-b-0 border-solid border-slate-300">
            {product.sizes.map((size) => (
              <button key={Math.random()} className="relative border-[1px] border-t-0 border-l-0 border-solid border-slate-300  line-through hover:bg-black hover:text-white ">
                {/* text-slate-500 */}
                <span>{size}</span>
                <span className="absolute right-2 top-0">
                  <HiOutlineBellAlert />
                </span>
              </button>
            ))}
          </div>
          {/* add to bag */}
          <div className="mt-7  flex w-full items-center justify-between  text-white">
            <button className="flex h-[50px] w-full items-center  justify-between rounded bg-black px-3 font-semibold shadow-xl">
              <span>ADD TO BAG</span>
              <span className="text-[35px]">
                <HiArrowLongRight />
              </span>
            </button>
            <div className="ml-[10px]">
              <div className="flex h-[50px] w-[50px]  items-center justify-center rounded border-[1px] border-solid border-black bg-white">
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

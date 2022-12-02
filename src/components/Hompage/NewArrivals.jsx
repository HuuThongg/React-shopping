import React from "react";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";

const NewArrivals = () => {
  const handleNextButton = () => {
    console.log("next  button");
    document.getElementById("container").scrollBy({
      left: 750,
      behavior: "smooth",
    });
  };
  const handlePrevButton = () => {
    console.log("prev button");
    document.getElementById("container").scrollBy({
      left: -750,
      behavior: "smooth",
    });
  };

  return (
    <div className=" relative mt-[40px] w-full screen960:mt-[80px]">
      <section className="relative mx-auto max-w-full bg-white px-0 screen1280:w-[1280px] screen1600:w-[1600px] ">
        {/* tab */}
        <div className="ml-[15px] screen960:ml-0">
          <div>
            {/* tab list */}
            <div className="flex-start scrollbar-hide relative  flex max-w-full justify-start overflow-y-hidden overflow-x-scroll p-0">
              <button className="ml-0 mr-1 mt-0 flex shrink-0 cursor-pointer overflow-hidden text-ellipsis border-b-[4px] border-solid border-black px-4   py-5 text-center screen960:ml-[20px]">
                New Arrivals
              </button>
              <button className="ml-0 mr-1 mt-0 flex shrink-0 cursor-pointer overflow-hidden text-ellipsis border-solid border-black px-4  py-5 text-center hover:border-b-[4px]">
                What's Trending
              </button>
              <button className="ml-0 mr-1 mt-0 flex shrink-0 cursor-pointer overflow-hidden text-ellipsis border-solid border-black px-4  py-5 text-center hover:border-b-[4px]">
                Member Exclusive
              </button>
            </div>
          </div>
        </div>
        {/* tab carousel */}
        <div className="mt-4 min-h-[300px] screen600:min-h-[400px] screen960:min-h-[451px]">
          <section>
            {/* container */}
            <div className="">
              <div></div>
              {/* row product list-carousel wrapper */}
              {/* flex flex-wrap w-full dont style like this, won't make scroll snap work */}
              <div className="">
                {/* show pagination */}
                <div className="relative pl-4 pr-0">
                  {/* carousel content */}
                  <div className="relative  min-h-[275px] ">
                    <div
                      id="container"
                      className="scrollbar-hide ml-2 flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
                    >
                      {/* each carousel item */}
                      {/* w-[20.3125%] */}
                      <div className="  my-1 mr-[10px] ml-1 flex  min-h-[280px] w-[145px] flex-none basis-auto snap-start hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-black screen600:min-h-[386px] screen600:w-[235px] screen960:min-h-[400px] screen960:w-[235px] screen1280:w-[260px] screen1600:w-[16%]">
                        <section className="h-full">
                          {/* glass product cart container */}
                          <div className="relative h-full  w-auto">
                            {/* product card */}
                            <div className="relative h-full w-full cursor-pointer border-[1px] border-solid border-white bg-white text-[14px] font-normal tracking-normal">
                              {/* img */}
                              <div className="relative bg-white">
                                {/* assets */}
                                <a href="#">
                                  <img
                                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f5426bca0fe1439190a2aee700cd8c81_9366/Hyperglam_Fleece_Zebra_Jacket_Multicolor_HY1030_21_model.jpg"
                                    alt=""
                                  />
                                </a>

                                {/*heart  */}
                                <div className="absolute top-4 right-4">
                                  <button>
                                    {/* <FaHeart/> */}
                                    <AiOutlineHeart />
                                  </button>
                                </div>
                                {/* price */}
                                <a href="#" className="absolute bottom-0">
                                  <div className="relative ml-[5px] mt-[5px] rounded bg-white py-[5px] px-[2px]">
                                    <span>$100</span>
                                  </div>
                                </a>
                              </div>
                              <a href="#" className="no-underline">
                                <div className="flex flex-col flex-wrap p-[10px] pr-[20px]">
                                  <p>Hyperglam Fleece Zebra Jacket</p>
                                  <p className="flex-auto text-[#767677]">
                                    Women's Sportswear
                                  </p>
                                  <p>
                                    <span>new</span>
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </section>
                      </div>
                      {/* each carousel item */}
                      {/* w-[20.3125%] */}
                      <div className="  hover:outline-offset- my-1 mr-[10px] ml-1  flex min-h-[280px] w-[145px] flex-none basis-auto snap-start hover:outline hover:outline-1 hover:outline-black screen600:min-h-[386px] screen600:w-[235px] screen960:min-h-[400px] screen960:w-[235px] screen1280:w-[260px] screen1600:w-[16%]">
                        <section className="h-full">
                          {/* glass product cart container */}
                          <div className="relative h-full  w-auto">
                            {/* product card */}
                            <div className="relative h-full w-full cursor-pointer border-[1px] border-solid border-white bg-white text-[14px] font-normal tracking-normal">
                              {/* img */}
                              <div className="relative bg-white">
                                {/* assets */}
                                <a href="#">
                                  <img
                                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f5426bca0fe1439190a2aee700cd8c81_9366/Hyperglam_Fleece_Zebra_Jacket_Multicolor_HY1030_21_model.jpg"
                                    alt=""
                                  />
                                </a>

                                {/*heart  */}
                                <div className="absolute top-4 right-4">
                                  <button>
                                    {/* <FaHeart/> */}
                                    <AiOutlineHeart />
                                  </button>
                                </div>
                                {/* price */}
                                <a href="#" className="absolute bottom-0">
                                  <div className="relative ml-[5px] mt-[5px] rounded bg-white py-[5px] px-[2px]">
                                    <span>$100</span>
                                  </div>
                                </a>
                              </div>
                              <a href="#" className="no-underline">
                                <div className="flex flex-col flex-wrap p-[10px] pr-[20px]">
                                  <p>Hyperglam Fleece Zebra Jacket</p>
                                  <p className="flex-auto text-[#767677]">
                                    Women's Sportswear
                                  </p>
                                  <p>
                                    <span>new</span>
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </section>
                      </div>
                      {/* each carousel item */}
                      {/* w-[20.3125%] */}
                      <div className="  my-1 mr-[10px] ml-1 flex  min-h-[280px] w-[145px] flex-none basis-auto snap-start hover:outline hover:outline-1 hover:outline-offset-0 hover:outline-black screen600:min-h-[386px] screen600:w-[235px] screen960:min-h-[400px] screen960:w-[235px] screen1280:w-[260px] screen1600:w-[16%]">
                        <section className="h-full">
                          {/* glass product cart container */}
                          <div className="relative h-full  w-auto">
                            {/* product card */}
                            <div className="relative h-full w-full cursor-pointer border-[1px] border-solid border-white bg-white text-[14px] font-normal tracking-normal">
                              {/* img */}
                              <div className="relative bg-white">
                                {/* assets */}
                                <a href="#">
                                  <img
                                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f5426bca0fe1439190a2aee700cd8c81_9366/Hyperglam_Fleece_Zebra_Jacket_Multicolor_HY1030_21_model.jpg"
                                    alt=""
                                  />
                                </a>

                                {/*heart  */}
                                <div className="absolute top-4 right-4">
                                  <button>
                                    {/* <FaHeart/> */}
                                    <AiOutlineHeart />
                                  </button>
                                </div>
                                {/* price */}
                                <a href="#" className="absolute bottom-0">
                                  <div className="relative ml-[5px] mt-[5px] rounded bg-white py-[5px] px-[2px]">
                                    <span>$100</span>
                                  </div>
                                </a>
                              </div>
                              <a href="#" className="no-underline">
                                <div className="flex flex-col flex-wrap p-[10px] pr-[20px]">
                                  <p>Hyperglam Fleece Zebra Jacket</p>
                                  <p className="flex-auto text-[#767677]">
                                    Women's Sportswear
                                  </p>
                                  <p>
                                    <span>new</span>
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </section>
                      </div>
                      {/* each carousel item */}
                      {/* w-[20.3125%] */}
                      <div className="  my-1 mr-[10px] ml-1 flex  min-h-[280px] w-[145px] flex-none basis-auto snap-start hover:outline hover:outline-0 hover:outline-offset-0 hover:outline-black screen600:min-h-[386px] screen600:w-[235px] screen960:min-h-[400px] screen960:w-[235px] screen1280:w-[260px] screen1600:w-[16%]">
                        <section className="h-full">
                          {/* glass product cart container */}
                          <div className="relative h-full  w-auto">
                            {/* product card */}
                            <div className="relative h-full w-full cursor-pointer border-[1px] border-solid border-white bg-white text-[14px] font-normal tracking-normal">
                              {/* img */}
                              <div className="relative bg-white">
                                {/* assets */}
                                <a href="#">
                                  <img
                                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f5426bca0fe1439190a2aee700cd8c81_9366/Hyperglam_Fleece_Zebra_Jacket_Multicolor_HY1030_21_model.jpg"
                                    alt=""
                                  />
                                </a>

                                {/*heart  */}
                                <div className="absolute top-4 right-4">
                                  <button>
                                    {/* <FaHeart/> */}
                                    <AiOutlineHeart />
                                  </button>
                                </div>
                                {/* price */}
                                <a href="#" className="absolute bottom-0">
                                  <div className="relative ml-[5px] mt-[5px] rounded bg-white py-[5px] px-[2px]">
                                    <span>$100</span>
                                  </div>
                                </a>
                              </div>
                              <a href="#" className="no-underline">
                                <div className="flex flex-col flex-wrap p-[10px] pr-[20px]">
                                  <p>Hyperglam Fleece Zebra Jacket</p>
                                  <p className="flex-auto text-[#767677]">
                                    Women's Sportswear
                                  </p>
                                  <p>
                                    <span>new</span>
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </section>
                      </div>
                      {/* each carousel item */}
                      {/* w-[20.3125%] */}
                      <div className="  my-1 mr-[10px] ml-1 flex  min-h-[280px] w-[145px] flex-none basis-auto snap-start hover:outline hover:outline-0 hover:outline-offset-0 hover:outline-black screen600:min-h-[386px] screen600:w-[235px] screen960:min-h-[400px] screen960:w-[235px] screen1280:w-[260px] screen1600:w-[16%]">
                        <section className="h-full">
                          {/* glass product cart container */}
                          <div className="relative h-full  w-auto">
                            {/* product card */}
                            <div className="relative h-full w-full cursor-pointer border-[1px] border-solid border-white bg-white text-[14px] font-normal tracking-normal">
                              {/* img */}
                              <div className="relative bg-white">
                                {/* assets */}
                                <a href="#">
                                  <img
                                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f5426bca0fe1439190a2aee700cd8c81_9366/Hyperglam_Fleece_Zebra_Jacket_Multicolor_HY1030_21_model.jpg"
                                    alt=""
                                  />
                                </a>

                                {/*heart  */}
                                <div className="absolute top-4 right-4">
                                  <button>
                                    {/* <FaHeart/> */}
                                    <AiOutlineHeart />
                                  </button>
                                </div>
                                {/* price */}
                                <a href="#" className="absolute bottom-0">
                                  <div className="relative ml-[5px] mt-[5px] rounded bg-white py-[5px] px-[2px]">
                                    <span>$100</span>
                                  </div>
                                </a>
                              </div>
                              <a href="#" className="no-underline">
                                <div className="flex flex-col flex-wrap p-[10px] pr-[20px]">
                                  <p>Hyperglam Fleece Zebra Jacket</p>
                                  <p className="flex-auto text-[#767677]">
                                    Women's Sportswear
                                  </p>
                                  <p>
                                    <span>new</span>
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </section>
                      </div>
                      {/* each carousel item */}
                      {/* w-[20.3125%] */}
                      <div className="  my-1 mr-[10px] ml-1 flex  min-h-[280px] w-[145px] flex-none basis-auto snap-align-none hover:outline hover:outline-0 hover:outline-offset-0 hover:outline-black screen600:min-h-[386px] screen600:w-[235px] screen960:min-h-[400px] screen960:w-[235px] screen1280:w-[260px] screen1600:w-[16%]">
                        <section className="h-full">
                          {/* glass product cart container */}
                          <div className="relative h-full  w-auto">
                            {/* product card */}
                            <div className="relative h-full w-full cursor-pointer border-[1px] border-solid border-white bg-white text-[14px] font-normal tracking-normal">
                              {/* img */}
                              <div className="relative bg-white">
                                {/* assets */}
                                <a href="#">
                                  <img
                                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f5426bca0fe1439190a2aee700cd8c81_9366/Hyperglam_Fleece_Zebra_Jacket_Multicolor_HY1030_21_model.jpg"
                                    alt=""
                                  />
                                </a>

                                {/*heart  */}
                                <div className="absolute top-4 right-4">
                                  <button>
                                    {/* <FaHeart/> */}
                                    <AiOutlineHeart />
                                  </button>
                                </div>
                                {/* price */}
                                <a href="#" className="absolute bottom-0">
                                  <div className="relative ml-[5px] mt-[5px] rounded bg-white py-[5px] px-[2px]">
                                    <span>$100</span>
                                  </div>
                                </a>
                              </div>
                              <a href="#" className="no-underline">
                                <div className="flex flex-col flex-wrap p-[10px] pr-[20px]">
                                  <p>Hyperglam Fleece Zebra Jacket</p>
                                  <p className="flex-auto text-[#767677]">
                                    Women's Sportswear
                                  </p>
                                  <p>
                                    <span>new</span>
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </section>
                      </div>
                      {/* each carousel item */}
                      {/* w-[20.3125%] */}
                      <div className="  my-1 mr-[10px] ml-1 flex  min-h-[280px] w-[145px] flex-none basis-auto snap-align-none hover:outline hover:outline-0 hover:outline-offset-0 hover:outline-black screen600:min-h-[386px] screen600:w-[235px] screen960:min-h-[400px] screen960:w-[235px] screen1280:w-[260px] screen1600:w-[16%]">
                        <section className="h-full">
                          {/* glass product cart container */}
                          <div className="relative h-full  w-auto">
                            {/* product card */}
                            <div className="relative h-full w-full cursor-pointer border-[1px] border-solid border-white bg-white text-[14px] font-normal tracking-normal">
                              {/* img */}
                              <div className="relative bg-white">
                                {/* assets */}
                                <a href="#">
                                  <img
                                    src="https://assets.adidas.com/images/w_600,f_auto,q_auto/f5426bca0fe1439190a2aee700cd8c81_9366/Hyperglam_Fleece_Zebra_Jacket_Multicolor_HY1030_21_model.jpg"
                                    alt=""
                                  />
                                </a>

                                {/*heart  */}
                                <div className="absolute top-4 right-4">
                                  <button>
                                    {/* <FaHeart/> */}
                                    <AiOutlineHeart />
                                  </button>
                                </div>
                                {/* price */}
                                <a href="#" className="absolute bottom-0">
                                  <div className="relative ml-[5px] mt-[5px] rounded bg-white py-[5px] px-[2px]">
                                    <span>$100</span>
                                  </div>
                                </a>
                              </div>
                              <a href="#" className="no-underline">
                                <div className="flex flex-col flex-wrap p-[10px] pr-[20px]">
                                  <p>Hyperglam Fleece Zebra Jacket</p>
                                  <p className="flex-auto text-[#767677]">
                                    Women's Sportswear
                                  </p>
                                  <p>
                                    <span>new</span>
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    {/* prev button */}
                    <button
                      className=" text-[25px]p-2 absolute  top-[50px] left-1 z-50 hidden h-[30px]  w-[30px] items-center  justify-center rounded-sm border-[3px] border-solid border-slate-400 bg-white screen600:top-[120px]  screen600:flex screen600:h-[50px] screen600:w-[50px]"
                      onClick={handlePrevButton}
                    >
                      <span>
                        <HiArrowLongLeft />
                      </span>
                    </button>
                    {/* next button */}
                    <button
                      className="absolute right-0 top-[50px] z-50 hidden h-[30px]  w-[30px] items-center  justify-center rounded-sm
                      border-[3px] border-solid border-slate-400 bg-white p-2 text-[25px] screen600:top-[120px] screen600:flex screen600:h-[50px] screen600:w-[50px]"
                      onClick={handleNextButton}
                    >
                      <span>
                        <HiArrowLongRight />
                      </span>
                    </button>
                    <ul className="pointer-events-auto mt-[20px] mb-[20px] flex list-none  items-center justify-center space-x-2">
                      <li onClick={handlePrevButton}>
                        <span className="block h-[4px] hover:h-[4px] w-[18px] cursor-pointer border-0 bg-slate-900 transition-all "></span>
                      </li>
                      <li onClick={handleNextButton}>
                        <span className="block h-[1px] hover:h-[4px] w-[18px] border-0 bg-slate-700 cursor-pointer"></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default NewArrivals;

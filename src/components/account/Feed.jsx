import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Feed = () => {
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
    <main className="w-full bg-[#f7f7f7]  px-[15px]">
      {/* container */}
      <div className="relative mx-auto mt-[80px] w-full  screen960:px-[15px] screen1280:w-[1280px]">
        <div className="flex w-full flex-wrap ">
          {/* Voucher and premium account */}
          <div className="relative w-full ">
            {/* row */}
            <div className="mb-3 w-full px-[15px]">
              <p className="font-semibold">
                Your Voucher (<span className=" font-medium">4</span>)
              </p>
            </div>
            <div className="mb-3 w-full px-[15px]">
              {/* container */}
              <div className="flex flex-col">
                {/* row container */}
                <div className="flex flex-wrap gap-[10px] text-black screen600:gap-5">
                  <span className="font-normal">
                    Buy a voucher with adiClub points
                  </span>
                  <button>
                    <span className="flex-auto overflow-hidden text-ellipsis text-[14px] font-medium uppercase tracking-wide underline">
                      buy voucher
                    </span>
                  </button>
                </div>

                <div className="screen600:mt-10">
                  {/* carousel */}
                  <div className="">
                    <div className=" relative ">
                      <div
                        id="container"
                        className=" scrollbar-hide flex w-full snap-x snap-mandatory  gap-x-4 overflow-x-auto overflow-y-hidden "
                      >
                        {/* each card */}
                        <div className=" flex h-[200px] w-[300px] flex-none basis-auto snap-none ">
                          {/* style card here  */}
                          <div className="flex h-[200px] w-[300px] flex-col flex-wrap content-between rounded-sm bg-[#0081c7] p-5 text-white shadow-sm ">
                            <div className="flex w-full">
                              <div className="h-[85px] w-[70%] text-[22px] font-bold italic leading-6  tracking-wide text-[#ececf3]">
                                <p>30% OFF SELECTED ITEMS</p>
                              </div>
                              <div className="h-[15px]  w-[30%] ">
                                <div className="relative">
                                  <img
                                    className=" absolute top-0 right-0 h-[15px] w-[64px]"
                                    src="https://www.adidas.com/glass/react/8e82996/assets/img/membership-home/adiClubLogo.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="text-[#ececf3]">
                              CREATE-T9E9-SCFC-C4DK-FTFFK
                            </div>

                            <div className="mt-[20px] flex justify-between">
                              <div>
                                <span className="text-[#ececf3] underline">
                                  copy code
                                </span>
                              </div>
                              <div>1/17/2023</div>
                            </div>
                          </div>
                        </div>
                        {/* each card */}
                        <div className=" flex flex-none basis-auto snap-none bg-[#007681] ">
                          {/* style card here  */}
                          <div className="flex h-[200px] w-[300px] flex-col flex-wrap content-between rounded-sm  p-5 text-white shadow-sm ">
                            <div className="flex w-full">
                              <div className="text-[#ececf3]uppercase h-[85px] w-[70%] text-[22px] font-bold italic  leading-6 tracking-wide">
                                <p>12 months premium</p>
                              </div>
                              <div className="h-[15px]  w-[30%] ">
                                <div className="relative">
                                  <img
                                    className=" absolute top-0 right-0 h-[15px] w-[64px]"
                                    src="https://www.adidas.com/glass/react/8e82996/assets/img/membership-home/adiClubLogo.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="invisible text-[#ececf3]">
                              CREATE-T9E9-SCFC-C4DK-FTFFK
                            </div>

                            <div className="mt-[20px] flex justify-between">
                              <div>
                                <span className="text-[#ececf3] underline">
                                  Runtastic App
                                </span>
                              </div>
                              <div>11/18/2023</div>
                            </div>
                          </div>
                        </div>
                        {/* each card */}
                        <div className="flex flex-none basis-auto snap-none bg-[#007681] ">
                          {/* style card here  */}
                          <div className="flex h-[200px] w-[300px] flex-col flex-wrap content-between rounded-sm  p-5 text-white shadow-sm ">
                            <div className="flex w-full">
                              <div className="h-[85px] w-[70%] text-[22px] font-bold uppercase italic  leading-6 tracking-wide text-[#ececf3]">
                                <p>3 months premium</p>
                              </div>
                              <div className="h-[15px]  w-[30%] ">
                                <div className="relative">
                                  <img
                                    className=" absolute top-0 right-0 h-[15px] w-[64px]"
                                    src="https://www.adidas.com/glass/react/8e82996/assets/img/membership-home/adiClubLogo.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="invisible text-[#ececf3]">
                              CREATE-T9E9-SCFC-C4DK-FTFFK
                            </div>

                            <div className="mt-[20px] flex justify-between">
                              <div>
                                <span className="text-[#ececf3] underline">
                                  Runtastic App
                                </span>
                              </div>
                              <div>12/31/2023</div>
                            </div>
                          </div>
                        </div>
                        {/* each card */}
                        <div className="flex flex-none basis-auto snap-none bg-[#007681] ">
                          {/* style card here  */}
                          <div className="flex h-[200px] w-[300px] flex-col flex-wrap content-between rounded-sm  p-5 text-white shadow-sm ">
                            <div className="flex w-full">
                              <div className="h-[85px] w-[70%] text-[22px] font-bold uppercase italic  leading-6 tracking-wide text-[#ececf3]">
                                <p>3 months premium</p>
                              </div>
                              <div className="h-[15px]  w-[30%] ">
                                <div className="relative">
                                  <img
                                    className=" absolute top-0 right-0 h-[15px] w-[64px]"
                                    src="https://www.adidas.com/glass/react/8e82996/assets/img/membership-home/adiClubLogo.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="invisible text-[#ececf3]">
                              CREATE-T9E9-SCFC-C4DK-FTFFK
                            </div>

                            <div className="mt-[20px] flex justify-between">
                              <div>
                                <span className="text-[#ececf3] underline">
                                  Runtastic App
                                </span>
                              </div>
                              <div>12/31/2023</div>
                            </div>
                          </div>
                        </div>
                        {/* each card */}
                        <div className="flex flex-none basis-auto snap-none bg-[#007681] ">
                          {/* style card here  */}
                          <div className="flex h-[200px] w-[300px] flex-col flex-wrap content-between rounded-sm  p-5 text-white shadow-sm ">
                            <div className="flex w-full">
                              <div className="h-[85px] w-[70%] text-[22px] font-bold uppercase italic  leading-6 tracking-wide text-[#ececf3]">
                                <p>3 months premium</p>
                              </div>
                              <div className="h-[15px]  w-[30%] ">
                                <div className="relative">
                                  <img
                                    className=" absolute top-0 right-0 h-[15px] w-[64px]"
                                    src="https://www.adidas.com/glass/react/8e82996/assets/img/membership-home/adiClubLogo.png"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="invisible text-[#ececf3]">
                              CREATE-T9E9-SCFC-C4DK-FTFFK
                            </div>

                            <div className="mt-[20px] flex justify-between">
                              <div>
                                <span className="text-[#ececf3] underline">
                                  Runtastic App
                                </span>
                              </div>
                              <div>12/31/2023</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* navigation buttons */}
                      {/* prev button */}
                      <button
                        className=" absolute  top-[20px]  left-0 z-10 hidden h-[30px] w-[30px]  items-center justify-center  rounded-sm border border-solid border-black bg-white text-[25px] screen600:top-[40%]  screen600:flex screen600:h-[50px] screen600:w-[50px]"
                        onClick={handlePrevButton}
                      >
                        <span>
                          <HiArrowLongLeft />
                        </span>
                      </button>
                      {/* next button */}
                      <button
                        className="absolute right-0 top-[50px] z-10 hidden h-[30px]  w-[30px] items-center  justify-center rounded-sm
                      border border-solid border-black bg-white p-2  text-[25px] screen600:top-[80px] screen600:flex screen600:h-[50px] screen600:w-[50px]"
                        onClick={handleNextButton}
                      >
                        <span>
                          <HiArrowLongRight />
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* items you can use your voucher on */}
                  <div className="mt-[40px] cursor-pointer">
                    <div className="flex ">
                      <img
                        src="https://www.adidas.com/glass/react/8e82996/assets/img/membership-home/adiclub-products-teaser.png"
                        alt="dad"
                      />
                      <div className="flex w-[520px] flex-col justify-between bg-white p-[20px]">
                        <p className="">
                          Checkout all the itesm you can use your voucher on
                        </p>
                        <Link
                          to="/products"
                          className="pt-2 pr-2 text-[14px] font-bold underline "
                        >
                          SHOP NOW
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* product recommendation , point , club thing */}
        </div>
      </div>
    </main>
  );
};

export default Feed;

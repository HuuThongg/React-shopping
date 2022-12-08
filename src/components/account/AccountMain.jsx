import { useState } from "react";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
const AccountMain = () => {
  const [tab,setTab] = useState(1);
  const location = useLocation();
  const pathname = location.pathname;

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
    <section>
      <div
        className={`relative z-[1] ${
          pathname !== "/" ? "" : "pt-[95px]   md:pt-[100px] "
        } mx-auto   max-w-[1280px]  bg-white px-4`}
      >
        {/* account name */}
        <div className="mt-[40px] flex w-full flex-col  bg-white">
          <div className="mx-auto w-full max-w-[1440px] px-[15px]">
            <div className=" float-left flex  w-full items-center justify-between px-[15px] py-[10px]">
              <div className="flex flex-col justify-center">
                <h1 className="pr-[0.5rem] text-3xl font-bold">Huu Thong Le</h1>
                <div className="mt-2 flex items-center justify-start">
                  <div className="relative top-1">
                    {/*  row*/}
                    <div className="flex gap-2">
                      <img
                        src="https://www.adidas.com/glass/react/8e82996/assets/img/membership-home/adiclub-spendable-points-icon-black.svg"
                        alt=""
                      />
                      <span>6.6366 points to spend</span>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="https://www.adidas.com/glass/react/8e82996/assets/img/membership-home/myaccount-redesign/new-adiClub-levels/adiclub-level-4-badge-DT-SVG.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/*tab  */}
        <div className=" sticky top-0 z-[96] m-0 w-full bg-white p-0">
          <div className="relative flex w-full items-center justify-center ">
            <button
              className={`mb-[5px] mr-2 flex shrink-0 cursor-pointer overflow-hidden text-ellipsis ${
                tab === 1 && "border-b-[3px]  border-solid border-black"
              } bg-white p-[15px] text-center text-sm font-bold uppercase leading-5 tracking-normal text-black opacity-100 transition-colors`}
              onClick={() => {
                setTab(1);
              }}
            >
              Feed
            </button>
            <button
              className={`mb-[5px] mr-2 flex shrink-0 cursor-pointer overflow-hidden text-ellipsis ${
                tab === 2 && "border-b-[3px]  border-solid border-black"
              } bg-white p-[15px] text-center text-sm font-bold uppercase leading-5 tracking-normal text-black opacity-100 transition-colors`}
              onClick={() => {
                setTab(2);
              }}
            >
              order
            </button>
            <button
              className={`mb-[5px] mr-2 flex shrink-0 cursor-pointer overflow-hidden text-ellipsis ${
                tab === 3 && "border-b-[3px]  border-solid border-black"
              } bg-white p-[15px] text-center text-sm font-bold uppercase leading-5 tracking-normal text-black opacity-100 transition-colors`}
              onClick={() => {
                setTab(3);
              }}
            >
              Account
            </button>
          </div>
        </div>

        {/* content */}
      </div>
      {tab === 1 && (
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
                        <div className=" relative flex">
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
      )}
      {tab === 2 && (
        <div>
          <p>order</p>
        </div>
      )}
      {tab === 3 && (
        <div>
          <p>account</p>
        </div>
      )}
    </section>
  );
};

export default AccountMain;

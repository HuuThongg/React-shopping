import { useState } from "react";

import { useLocation } from "react-router";
import Account from "./Profile";
import Feed from "./Feed";
import Order from "./OrderHisotry";
const AccountMain = () => {
  const [tab, setTab] = useState(1);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <section>
      <div
        className={`relative z-[1] ${
          pathname !== "/" ? "" : "pt-[95px]   md:pt-[100px] "
        } mx-auto   max-w-[1280px]  bg-white px-4`}
      >
        {/* account name */}
        {tab === 1 && (
          <div className="mt-[40px] flex w-full flex-col  bg-white">
            <div className="mx-auto w-full max-w-[1440px] px-[15px]">
              <div className=" float-left flex  w-full items-center justify-between px-[15px] py-[10px]">
                <div className="flex flex-col justify-center">
                  <h1 className="pr-[0.5rem] text-3xl font-bold">
                    Huu Thong Le
                  </h1>
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
        )}

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

      {tab === 1 && <Feed />}
      {tab === 2 && <OrderHisotry />}
      {tab === 3 && <Account />}
    </section>
  );
};

export default AccountMain;

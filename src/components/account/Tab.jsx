import { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

const Tab = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navigate = useNavigate();
  return (
    <div className=" sticky top-0 z-[96] m-0 w-full bg-white p-0">
      <div className="relative flex w-full items-center justify-center ">
        <button
          className={`mb-[5px] mr-2 flex shrink-0 cursor-pointer overflow-hidden text-ellipsis ${
            pathname === "/my-account" &&
            "border-b-[3px]  border-solid border-black"
          } bg-white p-[15px] text-center text-sm font-bold uppercase leading-5 tracking-normal text-black opacity-100 transition-colors`}
          onClick={() => {
            navigate("/my-account");
          }}
        >
          Feed
        </button>
        <button
          className={`mb-[5px] mr-2 flex shrink-0 cursor-pointer overflow-hidden text-ellipsis ${
            pathname === "/my-account/order-history" &&
            "border-b-[3px]  border-solid border-black"
          } bg-white p-[15px] text-center text-sm font-bold uppercase leading-5 tracking-normal text-black opacity-100 transition-colors`}
          onClick={() => {
            navigate("/my-account/order-history");
          }}
        >
          order
        </button>
        <button
          className={`mb-[5px] mr-2 flex shrink-0 cursor-pointer overflow-hidden text-ellipsis ${
            pathname === "/my-account/profile" &&
            "border-b-[3px]  border-solid border-black"
          } bg-white p-[15px] text-center text-sm font-bold uppercase leading-5 tracking-normal text-black opacity-100 transition-colors`}
          onClick={() => {
            navigate("/my-account/profile");
          }}
        >
          Account
        </button>
      </div>
    </div>
  );
};

export default Tab;

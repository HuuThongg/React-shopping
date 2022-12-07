import {
  HiArrowLongRight,
  HiOutlineArrowUpOnSquareStack,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
const HeaderBag = ({ amountItems, totalAmount }) => {
  let content;

  if (amountItems !== 0) {
    content = (
      <header className="float-right flex w-full px-0 ">
        <div className="flex flex-col flex-wrap">
          <div className="mt-3 max-w-[729px] text-[20px] font-bold uppercase">
            <h5 className=" w-full pb-[50px] pt-[30px]">Hello THONG</h5>
          </div>
          <div className="text-[35px] font-bold">
            <h3>YOUR BAG</h3>
          </div>
          <div className="flex flex-wrap ">
            <div className="leading-6">
              <p className="font-normal">
                TOTAL: ({amountItems} items){" "}
                <span className="font-semibold text-black">${totalAmount}</span>
              </p>
            </div>
          </div>
          <div className="mt-2 flex w-full flex-wrap text-[16px]">
            <p>
              Items in your bag are not reserved - check out now to make them
              yours
            </p>
          </div>
        </div>
      </header>
    );
  } else {
    content = (
      <header className="float-right flex w-full px-0 ">
        <div className="flex flex-col flex-wrap">
          <div className="mt-3 max-w-[729px] text-[20px] font-bold uppercase">
            <h5 className=" w-full pb-[50px] pt-[30px]">Hello THONG</h5>
          </div>
          <div className="text-[35px] font-bold">
            <h3>YOUR BAG IS EMPTY</h3>
          </div>
          <div>
            <p>
              Once you add something to your bag. It will appear hear. Ready to
              get started{" "}
            </p>
          </div>
          <Link
            to="/"
            className=" checkoutShadow  relative inline-flex min-h-[50px] w-[170px] cursor-pointer  items-center justify-between whitespace-nowrap border-none  bg-black px-[15px] text-left text-white"
          >
            <span className="uppercase">GET STARTED</span>
            <span className="text-[30px]">
              <HiArrowLongRight />
            </span>
          </Link>
        </div>
      </header>
    );
  }

  return content;
};

export default HeaderBag;

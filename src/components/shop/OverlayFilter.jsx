import {
  HiXMark,
  HiOutlineChevronUp,
  HiOutlineChevronDown,
  HiArrowLongRight,
} from "react-icons/hi2";

const OverlayFilter = () => {
  return (
    <div className="hidden screen960:block z-50">

      <div className="opacity-100 visible  bg-[#12df6133] fixed  w-full inset-0 cursor-pointer opacityTransistion z-50">
        {/* filter panel desktop */}
        {/* unset */}
        <div className="fixed top-0 py-0 right-0 w-[30%] h-full overscroll-contain bg-white z-[111] overflow-auto scrollbar-hide text-black ">
          {/* Filter Header */}
          <div className="border-[1px] border-solid divide-inherit border-t-0 border-x-0 h-auto">
            <h5 className="flex relative my-5 justify-start items-center h-auto px-5 text-[18px] ">
              <span className="font-bold normal-case  leading-6">
                Filter & Sort
              </span>
              <a className="my-0 ml-auto mr-[20px] text-gray-500    underline underline-offset-1 capitalize ">
                Clear All
              </a>
              <span className="absolute right-1 text-[24px] top-[50%] -translate-y-1/2">
                <HiXMark />
              </span>
            </h5>
          </div>
          {/* filter panel body */}
          <div className="pb-[100px] ">
            {/* Applied filters wrapper */}
            <div className="border-[1px] border-solid divide-inherit border-t-0 border-x-0">
              {/* applied filters header */}
              <span className="block m-5 mt-0 pt-5 text-[16px] leading-6">
                Applied Filters
              </span>
              {/* Applied filters */}
              <div className="flex flex-wrap mt-0 mr-0 ml-5 mb-5">
                <a href="#" className="cursor-pointer rounded-none">
                  <div className="relative">
                    <div className="flex h-[35px] mt-0 mr-[10px] mb-[10px] ml-0 bg-[#f5f6f6] border border-solid border-green-200 justify-center items-center pr-[10px]">
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
                    <div className="flex h-[35px] mt-0 mr-[10px] mb-[10px] ml-0 bg-[#f5f6f6] border border-solid border-green-200 justify-center items-center pr-[10px]">
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
                    <div className="flex h-[35px] mt-0 mr-[10px] mb-[10px] ml-0 bg-[#f5f6f6] border border-solid border-green-200 justify-center items-center pr-[10px]">
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
              <div className="flex flex-col h-[50px] bg-white relative cursor-pointer select-none w-full border-l-4 border-white justify-center pr-[35px] pl-[16px] text-[14px] ">
                <span className="block text-[16px] font-semibold">Sort By</span>
                <span className="absolute right-1 text-[14px] top-[50%] -translate-y-1/2">
                  <HiOutlineChevronUp />
                </span>
              </div>
              {/* open __ options_container */}
              <div className="h-auto overflow-hidden transition-all">
                {/* sortby wraooer */}
                <div>
                  <ul className="text-[15px]">
                    <li className="pl-[16px] border-l-4 border-b-2 border-solid border-slate-100 uppercase min-h-[50px] max-h-[70px] flex items-center">
                      Newest
                    </li>
                    <li className="pl-[16px] border-l-4 border-b-2 border-solid border-slate-100 uppercase min-h-[50px] max-h-[70px] flex items-center">
                      Price (high - low)
                    </li>
                    <li className="pl-[16px] border-l-4 border-b-2 border-solid border-slate-100 uppercase min-h-[50px] max-h-[70px] flex items-center">
                      Price (low - high)
                    </li>
                    <li className="pl-[16px] border-l-4 border-b-2 border-solid border-slate-100 uppercase min-h-[50px] max-h-[70px] flex items-center">
                      Top Sellers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* what to filter  */}
            <div className="">
              <div className="flex flex-col h-[50px] bg-white relative cursor-pointer select-none w-full border-l-4 border-white justify-center pr-[35px] pl-[16px] text-[14px] ">
                <span className="block text-[16px] font-semibold">Sort By</span>
                <span className="absolute right-1 text-[14px] top-[50%] -translate-y-1/2">
                  <HiOutlineChevronUp />
                </span>
              </div>
              {/* open __ options_container */}
              <div className="h-auto overflow-hidden transition-all">
                {/* sortby wraooer */}
                <div>
                  <ul className="text-[15px]">
                    <li className="pl-[16px] border-l-4 border-b-2 border-solid border-slate-100 uppercase min-h-[50px] max-h-[70px] flex items-center">
                      Newest
                    </li>
                    <li className="pl-[16px] border-l-4 border-b-2 border-solid border-slate-100 uppercase min-h-[50px] max-h-[70px] flex items-center">
                      Price (high - low)
                    </li>
                    <li className="pl-[16px] border-l-4 border-b-2 border-solid border-slate-100 uppercase min-h-[50px] max-h-[70px] flex items-center">
                      Price (low - high)
                    </li>
                    <li className="pl-[16px] border-l-4 border-b-2 border-solid border-slate-100 uppercase min-h-[50px] max-h-[70px] flex items-center">
                      Top Sellers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* what to filter  */}
            <div className="">
              <div className="flex flex-col h-[50px] bg-white relative cursor-pointer select-none w-full border-l-4 border-white justify-center pr-[35px] pl-[16px] text-[14px] ">
                <span className="block text-[16px] font-semibold">Sort By</span>
                <span className="absolute right-1 text-[14px] top-[50%] -translate-y-1/2">
                  <HiOutlineChevronUp />
                </span>
              </div>
              {/* open __ options_container */}
              <div className="h-auto overflow-hidden transition-all">
                {/* sortby wraooer */}
                <div>
                  <ul className="text-[15px]">
                    <li className="pl-[16px] border-l-4 border-b-2 border-solid border-slate-100 uppercase min-h-[50px] max-h-[70px] flex items-center">
                      Newest
                    </li>
                    <li className="pl-[16px] border-l-4 border-b-2 border-solid border-slate-100 uppercase min-h-[50px] max-h-[70px] flex items-center">
                      Price (high - low)
                    </li>
                    <li className="pl-[16px] border-l-4 border-b-2 border-solid border-slate-100 uppercase min-h-[50px] max-h-[70px] flex items-center">
                      Price (low - high)
                    </li>
                    <li className="pl-[16px] border-l-4 border-b-2 border-solid border-slate-100 uppercase min-h-[50px] max-h-[70px] flex items-center">
                      Top Sellers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Apply filters */}
          <div className="w-full">
            <div className="fixed bg-white overflow-hidden border-t border-solid border-[#1369a3] bottom-0 right-0 w-[30%] p-[25px]">
              <button className="h-[50px] w-full bg-black px-5 flex justify-center items-center ">
                <span className="text-white  block w-full font-bold">APPLY (2837) </span>
                <span>
                  <HiArrowLongRight className="text-white text-[34px]"/>
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

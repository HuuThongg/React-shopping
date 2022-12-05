import { HiAdjustmentsHorizontal } from "react-icons/hi2";
const FilterWrapper = () => {
  return (
    // Align item flex end
    <div className="relative mx-auto flex w-full  items-end px-2  screen600:px-5 screen960:px-9 screen1280:w-[1280px] screen1600:w-[1600px]">
      {/* container */}
      <div className="mx-auto w-full">
        <div className="relative w-[calc(100%-30px)]  max-w-[800px] screen960:mt-[10px]">
          {/* truncation-box */}
          <div className=" w-full">
            <p className="truncated z-0">
              Save up to 70% off your favorite 3-Stripes styles when you shop
              the adidas Black Friday 2022 sale. Offer valid 11/22-11/26. Online
              only, while supplies last. Exclusions apply.
            </p>
            <div className="absolute -bottom-1 right-3 inline-flex pl-0 pb-[5px] screen960:hidden  ">
              <div className="bg-webkit block h-[1.2rem] w-[65px]"></div>
              <button className="z-10 bg-white pl-5 underline underline-offset-2">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Filter */}
      <div className="hidden screen960:block">
        <div className="">
          <button className="text-md flex h-[40px] items-center justify-between border-2 border-solid border-slate-900 px-[15px] font-semibold capitalize">
            <span className=" flex flex-auto overflow-hidden text-ellipsis whitespace-nowrap text-left">
              Filter & Sort
            </span>
            <HiAdjustmentsHorizontal className="ml-2 text-[24px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterWrapper;

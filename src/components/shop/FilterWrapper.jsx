import { HiAdjustmentsHorizontal } from "react-icons/hi2";
const FilterWrapper = () => {
  return (
    // Align item flex end
    <div className="mx-auto w-full px-2 screen600:px-5  screen960:px-9 relative  screen1280:w-[1280px] screen1600:w-[1600px] flex items-end">
      {/* container */}
      <div className="w-full mx-auto">
        <div className="screen960:mt-[10px] w-[calc(100%-30px)]  max-w-[800px] relative">
          {/* truncation-box */}
          <div className=" w-full">
            <p className="truncated z-0">
              Save up to 70% off your favorite 3-Stripes styles when you shop
              the adidas Black Friday 2022 sale. Offer valid 11/22-11/26. Online
              only, while supplies last. Exclusions apply.
            </p>
            <div class="inline-flex screen960:hidden absolute -bottom-1 right-3 pl-0 pb-[5px]  ">
              <div class="block h-[1.2rem] w-[65px] bg-webkit"></div>
              <button class="pl-5 z-10 underline underline-offset-2 bg-white">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Filter */}
      <div className="hidden screen960:block">
        <div className="">
          <button className="font-semibold text-md flex capitalize h-[40px] border-solid border-2 border-slate-900 px-[15px] justify-between items-center">
            <span className=" flex flex-auto overflow-hidden text-ellipsis whitespace-nowrap text-left">
              Filter & Sort
            </span>
            <HiAdjustmentsHorizontal className="text-[24px] ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterWrapper;

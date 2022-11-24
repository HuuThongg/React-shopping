import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const HeaderShop = () => {
  return (
    <div className="mx-auto w-full px-2 screen600:px-5  screen960:px-9 relative  screen1280:w-[1280px] screen1600:w-[1600px] flex items-center  screen960:block">
      <div className="">
        <div className="flex flex-wrap w-full">
          {/* Header wrapper */}
          <div className="mt-[30px] mb-0">
            <h1 className="inline text-[24px]  screen960:text-[30px] screen1600:text-[40px] font-semibold italic ">
              <span>Men's Black Friday Deals 2022: Up to 70% Off</span>
            </h1>
            <div className="text-[#767677] inline-block ml-3">[3040]</div>
          </div>
        </div>
      </div>
      <div className="screen960:hidden">
        <HiAdjustmentsHorizontal className=" text-[24px]" />
      </div>
    </div>
  );
};

export default HeaderShop;

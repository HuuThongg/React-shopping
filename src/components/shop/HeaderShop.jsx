import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const HeaderShop = ({ data }) => {
  return (
    <div className="relative mx-auto flex w-full  items-center px-2  screen600:px-5 screen960:block screen960:px-9 screen1280:w-[1280px]  screen1600:w-[1600px]">
      <div className="">
        <div className="flex w-full flex-wrap">
          {/* Header wrapper */}
          <div className="mt-[30px] mb-0">
            <h1 className="inline text-[24px]  font-semibold italic screen960:text-[30px] screen1600:text-[40px] ">
              <span>Men's Black Friday Deals 2022: Up to 70% Off</span>
            </h1>
            <div className="ml-3 inline-block text-[#767677]">
              [{data.length}]
            </div>
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

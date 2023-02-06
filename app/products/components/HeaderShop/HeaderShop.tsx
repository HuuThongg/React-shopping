'use client'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { useSetAtom } from "jotai";
import { toggle_filter } from "@/stores/jotai";
const HeaderShop = ({ data }) => {
  const setToggleFilter = useSetAtom(toggle_filter);
  const handleToggleFilter = () => setToggleFilter(true);
  return (
    <div className="relative mx-auto  px-2  screen600:px-5 screen960:block screen960:px-9 screen1280:w-[1280px]  screen1600:w-[1600px]">
      <div className="mt-[10px] flex w-full items-center  justify-between screen600:mt-0">
        <div className="">
          <div className="flex w-full flex-wrap">
            {/* Header wrapper */}
            <div className=" mb-0">
              <h1 className="inline text-center  text-[24px] font-semibold italic screen960:text-[30px] screen1600:text-[40px]">
                <span>Men's Black Friday Deals 2022: Up to 70% Off</span>
              </h1>
              <div className="ml-3 inline-block text-[#767677]">
                [{data.length}]
              </div>
            </div>
          </div>
        </div>
        <div className="screen960:hidden">
          <HiAdjustmentsHorizontal
            className=" text-[24px]"
          // onClick={handleToggleFilter}
          ></HiAdjustmentsHorizontal>
        </div>
      </div>
    </div>
  );
};

export default HeaderShop;

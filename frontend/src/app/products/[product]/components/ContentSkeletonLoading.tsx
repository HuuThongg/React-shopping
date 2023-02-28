'use client'
import { HiOutlineChevronDown } from "react-icons/hi";

const ContentSkeletonLoading = () => {
  return <div className="h-full min-h-screen w-full min-w-0">
    {/* gallery-section */}
    <div className="relative w-full">
      {/* back/ home/ running/ shoes */}
      {/* image */}
      <div className=" w-full ">
        {/* imgge grid */}
        <section className=" relative block w-full  select-none text-center">
          {/* image gird container  */}
          <div className="grid grid-cols-1  gap-[1px] overflow-hidden screen960:grid-cols-2 ">
            <div className=" relative col-span-2">
              <div className="relative bg-[#eceff0] pt-[50%] ">
                <div className="absolute inset-0 mx-auto flex h-full w-full cursor-pointer justify-center screen960:max-w-[calc(100vw-300px)]  ">

                  <div className="w-full h-full bg-[#eceff0]">

                  </div>
                </div>
              </div>
            </div>
            {[...Array(4)].map((_, i) => (
              <div key={Math.random().toString()} className="relative">
                <div className="relative pt-[100%]">
                  <div className="absolute top-0 flex h-full w-full cursor-pointer justify-center bg-white">
                    <div className="w-full h-full bg-[#eceff0]">

                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* show more */}
          <button className=" ustify-center mx-auto flex h-[50px]  w-[150px] items-center  gap-x-2 border-2  border-solid border-black bg-white px-2">
            <span className="flex-auto overflow-hidden text-ellipsis font-semibold uppercase tracking-wide ">
              Show More
            </span>
            <span>
              <HiOutlineChevronDown />
            </span>
          </button>
          <div></div>
        </section>
      </div>
    </div>
    {/* fixed content : revfiews description */}
  </div>
}

export default ContentSkeletonLoading